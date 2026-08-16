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

function fbm(x: number, z: number): number {
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

export function islandHeight(x: number, z: number, cx = 0, cz = 0, radius = 56, seed = 1): number {
  const lx = x - cx;
  const lz = z - cz;
  const r = Math.hypot(lx, lz);
  const n = fbm((lx + seed * 17.2) * 0.035, (lz - seed * 9.1) * 0.035);
  const rim = smoothstep(radius, radius * 0.42, r);
  const dune = (n - 0.42) * 7.5;
  const knoll = Math.exp((-((lx - radius * 0.12) ** 2)) / 90 - (lz + radius * 0.28) ** 2 / 110) * radius * 0.22;
  const bowl = -Math.exp((-((lx + radius * 0.2) ** 2)) / 140 - (lz - radius * 0.05) ** 2 / 180) * 1.4;
  let h = (dune + knoll + bowl + 1.1) * rim;
  // second, finer octave of relief on the uplands only (beach stays smooth)
  const upland = smoothstep(1.1, 2.6, h);
  h += (fbm(lx * 0.14 + seed * 3.3, lz * 0.14 - seed * 5.1) - 0.5) * 1.7 * upland;
  // gently terraced beach shelf: flatten the low band toward a soft berm
  const shelf = smoothstep(0.08, 0.4, h) * smoothstep(1.15, 0.62, h);
  h += (0.52 - h) * shelf * 0.42;
  // believable beach slope: shallow apron near shore, then falloff to seabed
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
