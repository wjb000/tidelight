export interface HillSpec {
  ax: number;
  az: number;
  amp: number;
  sx: number;
  sz: number;
}

export interface IslandStyle {
  stretch: number;
  rot: number;
  dune: number;
  freq: number;
  rimInner: number;
  hills: HillSpec[];
  bowls: HillSpec[];
}

function hash(x: number, z: number): number {
  const n = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function noise(x: number, z: number): number {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fz = z - iz;
  const u = fx * fx * (3 - 2 * fx);
  const v = fz * fz * (3 - 2 * fz);
  const a = hash(ix, iz);
  const b = hash(ix + 1, iz);
  const c = hash(ix, iz + 1);
  const d = hash(ix + 1, iz + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

export function fbm(x: number, z: number): number {
  let v = 0;
  let a = 0.5;
  let f = 1;
  for (let i = 0; i < 5; i++) {
    v += a * noise(x * f, z * f);
    a *= 0.5;
    f *= 2.05;
  }
  return v;
}

function smoothstep(e0: number, e1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

const DEFAULT_HILLS: HillSpec[] = [{ ax: 0.12, az: -0.28, amp: 1, sx: 90, sz: 110 }];
const DEFAULT_BOWLS: HillSpec[] = [{ ax: -0.2, az: 0.05, amp: 1.4, sx: 140, sz: 180 }];

export function islandHeight(x: number, z: number, cx = 0, cz = 0, radius = 56, seed = 1, style?: IslandStyle): number {
  let lx = x - cx;
  let lz = z - cz;
  const stretch = style?.stretch ?? 1;
  const rot = style?.rot ?? 0;
  if (stretch !== 1 || rot !== 0) {
    const c = Math.cos(-rot);
    const s = Math.sin(-rot);
    const rx = lx * c - lz * s;
    const rz = lx * s + lz * c;
    lx = rx / stretch;
    lz = rz * stretch;
  }
  const r = Math.hypot(lx, lz);
  const freq = style?.freq ?? 0.035;
  const n = fbm((lx + seed * 17.2) * freq, (lz - seed * 9.1) * freq);
  const rimInner = (style?.rimInner ?? 0.42) * radius;
  const rim = smoothstep(radius, rimInner, r);
  const dune = (n - 0.42) * (style?.dune ?? 7.5);
  let relief = 1.1;
  const hills = style?.hills ?? DEFAULT_HILLS;
  for (const h of hills) {
    const hx = h.ax * radius;
    const hz = h.az * radius;
    relief += Math.exp(-((lx - hx) ** 2) / h.sx - (lz - hz) ** 2 / h.sz) * h.amp;
  }
  const bowls = style?.bowls ?? DEFAULT_BOWLS;
  for (const b of bowls) {
    const bx = b.ax * radius;
    const bz = b.az * radius;
    relief -= Math.exp(-((lx - bx) ** 2) / b.sx - (lz - bz) ** 2 / b.sz) * b.amp;
  }
  let h = (dune + relief) * rim;
  const upland = smoothstep(1.1, 2.6, h);
  h += (fbm(lx * 0.14 + seed * 3.3, lz * 0.14 - seed * 5.1) - 0.5) * 1.7 * upland;
  const shelf = smoothstep(0.08, 0.4, h) * smoothstep(1.15, 0.62, h);
  h += (0.52 - h) * shelf * 0.42;
  const shore = smoothstep(radius * 1.18, radius * 0.92, r);
  return h - (1 - rim) * (0.55 + (1 - shore) * 1.9);
}

export function mainHeight(x: number, z: number): number {
  return islandHeight(x, z, 0, 0, 40, 3.1);
}

export function sampleNormal(x: number, z: number, fn: (x: number, z: number) => number, eps = 0.6): { x: number; y: number; z: number } {
  const hL = fn(x - eps, z);
  const hR = fn(x + eps, z);
  const hD = fn(x, z - eps);
  const hU = fn(x, z + eps);
  const n = { x: hL - hR, y: 2 * eps, z: hD - hU };
  const len = Math.hypot(n.x, n.y, n.z) || 1;
  return { x: n.x / len, y: n.y / len, z: n.z / len };
}
