import type { SlotLayout } from "./islands";
import {
  DOOR_W,
  HOUSE_D,
  HOUSE_W,
  doorWorld,
  houseAnchor,
  houseFloorY,
  insideHouse,
  nearDoor,
  slideHouse,
} from "./homestead";

export type PlaceKind = "house" | "warehouse" | "lighthouse";

export interface Place {
  id: string;
  kind: PlaceKind;
  slot?: number;
  label: string;
}

export interface Pose {
  x: number;
  y: number;
  z: number;
  yaw: number;
}

export const WAREHOUSE = {
  x: 22,
  z: 8,
  w: 13,
  d: 9,
  floor: 0.88,
  doorX: -3.6,
  doorW: 2.55,
  doorH: 3.5,
} as const;

export const LIGHTHOUSE = {
  x: 8,
  z: -18,
  innerR: 2.28,
  outerR: 3.05,
  floor: 1.4,
  doorYaw: 0,
} as const;

function whLocal(x: number, z: number): { x: number; z: number } {
  return { x: x - WAREHOUSE.x, z: z - WAREHOUSE.z };
}

export function insideWarehouse(x: number, z: number): boolean {
  const p = whLocal(x, z);
  return Math.abs(p.x) < WAREHOUSE.w / 2 - 0.35 && Math.abs(p.z) < WAREHOUSE.d / 2 - 0.32;
}

export function nearWarehouseDoor(x: number, z: number): boolean {
  const p = whLocal(x, z);
  return Math.abs(p.x - WAREHOUSE.doorX) < WAREHOUSE.doorW * 0.7 && p.z > WAREHOUSE.d / 2 - 0.85 && p.z < WAREHOUSE.d / 2 + 2.1;
}

export function slideWarehouse(_px: number, _pz: number, nx: number, nz: number): { x: number; z: number } {
  const p = whLocal(nx, nz);
  const halfW = WAREHOUSE.w / 2;
  const halfD = WAREHOUSE.d / 2;
  const wall = 0.34;
  if (Math.abs(p.x) > halfW + 0.45 || Math.abs(p.z) > halfD + 1.8) return { x: nx, z: nz };

  const door = Math.abs(p.x - WAREHOUSE.doorX) < WAREHOUSE.doorW / 2 - 0.08 && p.z > halfD - 0.7;
  let lx = p.x;
  let lz = p.z;
  if (p.x > halfW - wall && p.x < halfW + 0.4) lx = halfW - wall;
  if (p.x < -halfW + wall && p.x > -halfW - 0.4) lx = -halfW + wall;
  if (p.z < -halfD + wall && p.z > -halfD - 0.45) lz = -halfD + wall;
  if (!door && p.z > halfD - wall && p.z < halfD + 0.45 && Math.abs(p.x) < halfW) lz = halfD - wall;
  return { x: WAREHOUSE.x + lx, z: WAREHOUSE.z + lz };
}

export function warehouseDoor(): Pose {
  return {
    x: WAREHOUSE.x + WAREHOUSE.doorX,
    y: WAREHOUSE.floor,
    z: WAREHOUSE.z + WAREHOUSE.d / 2 + 1.45,
    yaw: Math.PI,
  };
}

export function warehouseInside(): Pose {
  return {
    x: WAREHOUSE.x + WAREHOUSE.doorX,
    y: WAREHOUSE.floor,
    z: WAREHOUSE.z + 1.1,
    yaw: Math.PI,
  };
}

function lhLocal(x: number, z: number): { x: number; z: number } {
  return { x: x - LIGHTHOUSE.x, z: z - LIGHTHOUSE.z };
}

export function insideLighthouse(x: number, z: number): boolean {
  const p = lhLocal(x, z);
  return Math.hypot(p.x, p.z) < LIGHTHOUSE.innerR - 0.18;
}

export function nearLighthouseDoor(x: number, z: number): boolean {
  const p = lhLocal(x, z);
  const doorZ = LIGHTHOUSE.outerR + 0.15;
  return Math.abs(p.x) < 1.05 && p.z > doorZ - 1.1 && p.z < doorZ + 1.9;
}

export function slideLighthouse(_px: number, _pz: number, nx: number, nz: number): { x: number; z: number } {
  const p = lhLocal(nx, nz);
  const r = Math.hypot(p.x, p.z);
  if (r > LIGHTHOUSE.outerR + 1.6) return { x: nx, z: nz };
  const ang = Math.atan2(p.x, p.z);
  const door = Math.abs(ang) < 0.42 && p.z > 0;
  if (r < LIGHTHOUSE.innerR - 0.22 || door) return { x: nx, z: nz };
  if (r < LIGHTHOUSE.innerR + 0.55 || (r < LIGHTHOUSE.outerR + 0.35 && !door)) {
    const target = r > LIGHTHOUSE.innerR ? LIGHTHOUSE.outerR + 0.4 : LIGHTHOUSE.innerR - 0.24;
    const k = target / Math.max(r, 1e-4);
    return { x: LIGHTHOUSE.x + p.x * k, z: LIGHTHOUSE.z + p.z * k };
  }
  return { x: nx, z: nz };
}

export function lighthouseDoor(): Pose {
  return {
    x: LIGHTHOUSE.x,
    y: LIGHTHOUSE.floor,
    z: LIGHTHOUSE.z + LIGHTHOUSE.outerR + 1.55,
    yaw: Math.PI,
  };
}

export function lighthouseInside(): Pose {
  return {
    x: LIGHTHOUSE.x,
    y: LIGHTHOUSE.floor,
    z: LIGHTHOUSE.z + 0.85,
    yaw: Math.PI,
  };
}

export function houseInsidePose(slot: SlotLayout): Pose {
  const a = houseAnchor(slot);
  const back = -0.35;
  return {
    x: a.x + Math.sin(a.yaw) * back,
    y: houseFloorY(slot),
    z: a.z + Math.cos(a.yaw) * back,
    yaw: a.yaw + Math.PI,
  };
}

export function houseOutsidePose(slot: SlotLayout): Pose {
  const d = doorWorld(slot);
  return {
    x: d.x + Math.sin(d.yaw + Math.PI) * 0.15,
    y: houseFloorY(slot),
    z: d.z + Math.cos(d.yaw + Math.PI) * 0.15,
    yaw: d.yaw + Math.PI,
  };
}

export function insideAny(slots: SlotLayout[], x: number, z: number, riseOf: (i: number) => number, loose = false): Place | null {
  if (insideWarehouse(x, z)) return { id: "warehouse", kind: "warehouse", label: "the cannery" };
  if (insideLighthouse(x, z)) return { id: "lighthouse", kind: "lighthouse", label: "the lighthouse" };
  for (let i = 1; i < slots.length; i++) {
    if (riseOf(i) <= 0.12) continue;
    if (insideHouse(slots[i], x, z, loose)) return { id: `house-${i}`, kind: "house", slot: i, label: "home" };
  }
  return null;
}

export function nearAnyDoor(slots: SlotLayout[], x: number, z: number, riseOf: (i: number) => number): Place | null {
  if (nearWarehouseDoor(x, z)) return { id: "warehouse", kind: "warehouse", label: "the cannery" };
  if (nearLighthouseDoor(x, z)) return { id: "lighthouse", kind: "lighthouse", label: "the lighthouse" };
  for (let i = 1; i < slots.length; i++) {
    if (riseOf(i) <= 0.12) continue;
    if (nearDoor(slots[i], x, z)) return { id: `house-${i}`, kind: "house", slot: i, label: "home" };
  }
  return null;
}

export function placeFloor(place: Place, slots: SlotLayout[]): number {
  if (place.kind === "warehouse") return WAREHOUSE.floor;
  if (place.kind === "lighthouse") return LIGHTHOUSE.floor;
  if (place.slot != null) return houseFloorY(slots[place.slot]);
  return 0.9;
}

export function placeEnter(place: Place, slots: SlotLayout[]): Pose {
  if (place.kind === "warehouse") return warehouseInside();
  if (place.kind === "lighthouse") return lighthouseInside();
  return houseInsidePose(slots[place.slot ?? 0]);
}

export function placeExit(place: Place, slots: SlotLayout[]): Pose {
  if (place.kind === "warehouse") return warehouseDoor();
  if (place.kind === "lighthouse") return lighthouseDoor();
  return houseOutsidePose(slots[place.slot ?? 0]);
}

export function slidePlaces(
  slots: SlotLayout[],
  px: number,
  pz: number,
  nx: number,
  nz: number,
  riseOf: (i: number) => number,
  sealedSlot: number | null = null,
): { x: number; z: number } {
  let x = nx;
  let z = nz;
  const wh = slideWarehouse(px, pz, x, z);
  x = wh.x;
  z = wh.z;
  const lh = slideLighthouse(px, pz, x, z);
  x = lh.x;
  z = lh.z;
  for (let i = 1; i < slots.length; i++) {
    if (riseOf(i) <= 0.4) continue;
    const s = slideHouse(slots[i], px, pz, x, z, sealedSlot === i);
    x = s.x;
    z = s.z;
  }
  return { x, z };
}

export function houseClearance(slot: SlotLayout, x: number, z: number): boolean {
  const a = houseAnchor(slot);
  const dx = x - a.x;
  const dz = z - a.z;
  return Math.hypot(dx, dz) < Math.max(HOUSE_W, HOUSE_D) * 0.85;
}

export { HOUSE_W, HOUSE_D, DOOR_W };
