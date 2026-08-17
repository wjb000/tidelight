import { ISLAND_RADIUS, MAX_ISLANDS } from "../contracts/types";
import { islandHeight, type HillSpec, type IslandStyle } from "./height";

export interface Site {
  x: number;
  z: number;
  yaw: number;
}

export interface SlotLayout {
  x: number;
  z: number;
  radius: number;
  seed: number;
  style?: IslandStyle;
  house?: Site;
  pad?: Site;
  moor?: Site;
  flora: "palm" | "pine" | "mixed";
}

const SPACING = 108;

function rng(seed: number): () => number {
  let s = (seed * 747796405 + 2891336453) >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexCenter(index: number): { x: number; z: number } {
  if (index <= 0) return { x: 0, z: 0 };
  let ring = 1;
  let consumed = 1;
  while (consumed + ring * 6 <= index) {
    consumed += ring * 6;
    ring += 1;
  }
  const onRing = index - consumed;
  const side = Math.floor(onRing / ring);
  const pos = onRing % ring;
  const a0 = (side / 6) * Math.PI * 2;
  const a1 = ((side + 1) / 6) * Math.PI * 2;
  const t = pos / ring;
  const r = ring * SPACING;
  return {
    x: (Math.cos(a0) * (1 - t) + Math.cos(a1) * t) * r,
    z: (Math.sin(a0) * (1 - t) + Math.sin(a1) * t) * r,
  };
}

function blob(r: () => number, amp: number, spread: number): HillSpec {
  const a = r() * Math.PI * 2;
  const d = 0.08 + r() * 0.38;
  return {
    ax: Math.cos(a) * d,
    az: Math.sin(a) * d,
    amp: amp * (0.65 + r() * 0.7),
    sx: spread * (0.7 + r() * 0.8),
    sz: spread * (0.7 + r() * 0.8),
  };
}

function randomStyle(seed: number): IslandStyle {
  const r = rng(Math.floor(seed * 1000));
  const hills = Array.from({ length: 2 + ((r() * 3) | 0) }, () => blob(r, 6 + r() * 7, 70 + r() * 80));
  const bowls = Array.from({ length: 1 + ((r() * 2) | 0) }, () => blob(r, 1.1 + r() * 1.4, 90 + r() * 90));
  return {
    stretch: 0.72 + r() * 0.52,
    rot: r() * Math.PI,
    dune: 5.5 + r() * 4.2,
    freq: 0.026 + r() * 0.018,
    rimInner: 0.34 + r() * 0.16,
    hills,
    bowls,
  };
}

function heightOf(slot: SlotLayout, x: number, z: number): number {
  return islandHeight(x, z, slot.x, slot.z, slot.radius, slot.seed, slot.style);
}

function slopeOf(slot: SlotLayout, x: number, z: number): number {
  const h = heightOf(slot, x, z);
  const hx = heightOf(slot, x + 0.9, z);
  const hz = heightOf(slot, x, z + 0.9);
  return Math.hypot(hx - h, hz - h) / 0.9;
}

function pickLand(
  slot: SlotLayout,
  r: () => number,
  r0: number,
  r1: number,
  h0: number,
  h1: number,
  maxSlope: number,
  avoid: Site | null,
  minDist: number,
): Site {
  let best: Site | null = null;
  let bestScore = -1e9;
  for (let i = 0; i < 96; i++) {
    const a = r() * Math.PI * 2;
    const d = r0 + r() * (r1 - r0);
    const x = slot.x + Math.cos(a) * d;
    const z = slot.z + Math.sin(a) * d;
    const h = heightOf(slot, x, z);
    const sl = slopeOf(slot, x, z);
    if (h < h0 || h > h1 || sl > maxSlope) continue;
    if (avoid && Math.hypot(x - avoid.x, z - avoid.z) < minDist) continue;
    const mid = 1 - Math.abs((h - (h0 + h1) * 0.5) / (h1 - h0));
    const score = (maxSlope - sl) * 5 + mid * 2;
    if (score > bestScore) {
      bestScore = score;
      const face = Math.atan2(slot.x - x, slot.z - z);
      best = { x, z, yaw: face };
    }
  }
  if (best) return best;
  const yaw = Math.atan2(-slot.x, -slot.z);
  return {
    x: slot.x - Math.sin(yaw) * slot.radius * 0.18,
    z: slot.z - Math.cos(yaw) * slot.radius * 0.18,
    yaw,
  };
}

function pickMoor(slot: SlotLayout, r: () => number, house: Site): Site {
  let best: Site | null = null;
  let bestScore = -1e9;
  for (let i = 0; i < 80; i++) {
    const a = r() * Math.PI * 2;
    const d = slot.radius * (1.02 + r() * 0.18);
    const x = slot.x + Math.cos(a) * d;
    const z = slot.z + Math.sin(a) * d;
    const h = heightOf(slot, x, z);
    if (h > 0.28) continue;
    const inward = slot.radius * 0.82;
    const lx = slot.x + Math.cos(a) * inward;
    const lz = slot.z + Math.sin(a) * inward;
    const beach = heightOf(slot, lx, lz);
    if (beach < 0.35 || beach > 2.4) continue;
    const toHouse = Math.hypot(x - house.x, z - house.z);
    const score = beach + (18 - Math.min(toHouse, 18)) * 0.08;
    if (score > bestScore) {
      bestScore = score;
      best = { x, z, yaw: a + Math.PI / 2 };
    }
  }
  if (best) return best;
  const yaw = house.yaw;
  return {
    x: slot.x + Math.sin(yaw) * slot.radius * 1.1,
    z: slot.z + Math.cos(yaw) * slot.radius * 1.1,
    yaw: yaw + Math.PI / 2,
  };
}

export function layoutSlots(): SlotLayout[] {
  return Array.from({ length: MAX_ISLANDS }, (_, i) => {
    const { x, z } = hexCenter(i);
    const seed = i === 0 ? 3.1 : 17.13 + i * 13.91 + Math.sin(i * 2.17) * 8.3;
    const radius = i === 0 ? ISLAND_RADIUS : ISLAND_RADIUS + ((i * 5) % 7) * 0.45;
    const slot: SlotLayout = {
      x,
      z,
      radius,
      seed,
      flora: i === 0 ? "mixed" : ((["palm", "pine", "mixed"] as const)[i % 3]),
    };
    if (i === 0) return slot;
    slot.style = randomStyle(seed);
    const r = rng(Math.floor(seed * 7919));
    slot.house = pickLand(slot, r, radius * 0.12, radius * 0.42, 1.15, 3.8, 0.22, null, 0);
    slot.pad = pickLand(slot, r, radius * 0.28, radius * 0.58, 1.05, 3.4, 0.14, slot.house, 9);
    slot.moor = pickMoor(slot, r, slot.house);
    slot.house.yaw = Math.atan2(slot.moor.x - slot.house.x, slot.moor.z - slot.house.z);
    return slot;
  });
}
