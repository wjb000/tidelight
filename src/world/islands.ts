import { ISLAND_RADIUS, MAX_ISLANDS } from "../contracts/types";

export interface SlotLayout {
  x: number;
  z: number;
  radius: number;
  seed: number;
}

export function layoutSlots(): SlotLayout[] {
  const slots: SlotLayout[] = [
    { x: 64, z: -22, radius: 13, seed: 11 },
    { x: -46, z: -6, radius: 18, seed: 14.2 },
  ];
  for (let i = 2; i < MAX_ISLANDS; i++) {
    const a = (i / MAX_ISLANDS) * Math.PI * 2 - Math.PI * 0.35;
    const r = 78 + (i % 3) * 10;
    slots.push({
      x: Math.cos(a) * r,
      z: Math.sin(a) * r,
      radius: ISLAND_RADIUS + (i % 4) * 2,
      seed: 11 + i * 3.17,
    });
  }
  return slots;
}
