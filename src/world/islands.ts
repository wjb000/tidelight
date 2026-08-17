import { ISLAND_RADIUS, MAX_ISLANDS } from "../contracts/types";

export interface SlotLayout {
  x: number;
  z: number;
  radius: number;
  seed: number;
}

const SPACING = 104;

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

export function layoutSlots(): SlotLayout[] {
  return Array.from({ length: MAX_ISLANDS }, (_, i) => {
    const { x, z } = hexCenter(i);
    return {
      x,
      z,
      radius: ISLAND_RADIUS + (i % 3) * 1.4,
      seed: i === 0 ? 3.1 : 11 + i * 3.17,
    };
  });
}
