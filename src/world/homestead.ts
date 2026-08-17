import * as THREE from "three";
import { glassMat, metalMat, plasterMat, woodMat } from "./materials";
import { islandHeight } from "./height";
import type { SlotLayout } from "./islands";

export const HOUSE_W = 7.6;
export const HOUSE_D = 6.8;
export const HOUSE_H = 3.35;
export const DOOR_W = 1.75;
export const DOOR_H = 2.25;

const WALLS = [0xf6e8cf, 0xf3d8c4, 0xe7efe4, 0xf7ecd6, 0xeedfc8, 0xe8e4f2] as const;
const ROOFS = [0xc2452e, 0x3d6b7a, 0xb87333, 0x6b4226, 0x8a3226, 0x2f5d50] as const;
const HELIS = [0xc45c3a, 0xe8c37a, 0x3d7a6b, 0x7a8cc4, 0xd47aa0, 0xd4a24c] as const;

function shadow(root: THREE.Object3D): void {
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (m.isMesh) {
      m.castShadow = true;
      m.receiveShadow = true;
    }
  });
}

function box(w: number, h: number, d: number, mat: THREE.Material, x = 0, y = 0, z = 0): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  return m;
}

export function islandFacing(slot: SlotLayout): number {
  return Math.atan2(-slot.x, -slot.z);
}

export function houseAnchor(slot: SlotLayout): { x: number; z: number; yaw: number } {
  const yaw = islandFacing(slot);
  const back = slot.radius * 0.12;
  return {
    x: slot.x - Math.sin(yaw) * back,
    z: slot.z - Math.cos(yaw) * back,
    yaw,
  };
}

export function heliPadPos(slot: SlotLayout): { x: number; z: number; yaw: number } {
  const yaw = islandFacing(slot);
  const right = yaw + Math.PI / 2;
  return {
    x: slot.x + Math.sin(right) * slot.radius * 0.42 + Math.sin(yaw) * slot.radius * 0.08,
    z: slot.z + Math.cos(right) * slot.radius * 0.42 + Math.cos(yaw) * slot.radius * 0.08,
    yaw,
  };
}

export function boatMooring(slot: SlotLayout): { x: number; z: number; yaw: number } {
  const yaw = islandFacing(slot);
  return {
    x: slot.x + Math.sin(yaw) * (slot.radius * 1.12),
    z: slot.z + Math.cos(yaw) * (slot.radius * 1.12),
    yaw: yaw + Math.PI / 2,
  };
}

export function doorWorld(slot: SlotLayout): { x: number; z: number; yaw: number } {
  const a = houseAnchor(slot);
  const d = HOUSE_D / 2 + 1.35;
  return {
    x: a.x + Math.sin(a.yaw) * d,
    z: a.z + Math.cos(a.yaw) * d,
    yaw: a.yaw + Math.PI,
  };
}

export function padHeight(slot: SlotLayout, x: number, z: number): number {
  return Math.max(0.35, islandHeight(x, z, slot.x, slot.z, slot.radius, slot.seed));
}

function toLocal(slot: SlotLayout, x: number, z: number): { x: number; z: number } {
  const a = houseAnchor(slot);
  const dx = x - a.x;
  const dz = z - a.z;
  const c = Math.cos(a.yaw);
  const s = Math.sin(a.yaw);
  return { x: dx * c - dz * s, z: dx * s + dz * c };
}

function fromLocal(slot: SlotLayout, lx: number, lz: number): { x: number; z: number } {
  const a = houseAnchor(slot);
  const c = Math.cos(a.yaw);
  const s = Math.sin(a.yaw);
  return { x: a.x + lx * c + lz * s, z: a.z - lx * s + lz * c };
}

export function insideHouse(slot: SlotLayout, x: number, z: number, loose = false): boolean {
  const p = toLocal(slot, x, z);
  const pad = loose ? 0.08 : 0.42;
  return Math.abs(p.x) < HOUSE_W / 2 - pad && p.z > -HOUSE_D / 2 + pad && p.z < HOUSE_D / 2 - pad * 0.45;
}

export function nearDoor(slot: SlotLayout, x: number, z: number): boolean {
  const p = toLocal(slot, x, z);
  return Math.abs(p.x) < DOOR_W * 0.95 && p.z > HOUSE_D / 2 - 1.15 && p.z < HOUSE_D / 2 + 2.4;
}

export function houseFloorY(slot: SlotLayout): number {
  const a = houseAnchor(slot);
  return padHeight(slot, a.x, a.z) + 0.28;
}

export function slideHouse(slot: SlotLayout, _px: number, _pz: number, nx: number, nz: number, sealed = false): { x: number; z: number } {
  const tryP = toLocal(slot, nx, nz);
  const halfW = HOUSE_W / 2;
  const halfD = HOUSE_D / 2;
  const wall = 0.4;
  const porch = sealed ? 0.35 : 1.6;
  const inX = Math.abs(tryP.x) < halfW + 0.12;
  const inZ = tryP.z > -halfD - 0.12 && tryP.z < halfD + porch;
  if (!inX || !inZ) return { x: nx, z: nz };

  const door = !sealed && Math.abs(tryP.x) < DOOR_W / 2 - 0.12 && tryP.z > halfD - 0.55;
  let lx = tryP.x;
  let lz = tryP.z;

  if (!door) {
    if (tryP.x > halfW - wall && tryP.x < halfW + 0.45) lx = halfW - wall;
    if (tryP.x < -halfW + wall && tryP.x > -halfW - 0.45) lx = -halfW + wall;
  }
  if (tryP.z < -halfD + wall && tryP.z > -halfD - 0.45 && Math.abs(tryP.x) < halfW) lz = -halfD + wall;
  if (!door && tryP.z > halfD - wall && tryP.z < halfD + 0.5 && Math.abs(tryP.x) < halfW) lz = halfD - wall;

  return fromLocal(slot, lx, lz);
}

export function buildHouse(wood: THREE.Texture, plaster: THREE.Texture, slotIndex: number): THREE.Group {
  const g = new THREE.Group();
  const wall = plasterMat(plaster, WALLS[slotIndex % WALLS.length]);
  const timber = woodMat(wood, 0x5a3a24);
  const roofM = woodMat(wood, ROOFS[slotIndex % ROOFS.length]);
  const floorM = woodMat(wood, 0xc4a06a);
  const trim = woodMat(wood, 0x6b4226);
  const glow = new THREE.MeshBasicMaterial({ color: 0xffc978, toneMapped: false });

  const W = HOUSE_W;
  const D = HOUSE_D;
  const H = HOUSE_H;
  const t = 0.22;

  g.add(box(W + 1.6, 0.22, D + 2.4, timber, 0, 0.08, 0.35));
  g.add(box(W - 0.2, 0.12, D - 0.2, floorM, 0, 0.22, 0));

  const wallY = 0.22 + H / 2;
  g.add(box(W, H, t, wall, 0, wallY, -D / 2 + t / 2));
  g.add(box((W - DOOR_W) / 2, H, t, wall, -(W + DOOR_W) / 4, wallY, D / 2 - t / 2));
  g.add(box((W - DOOR_W) / 2, H, t, wall, (W + DOOR_W) / 4, wallY, D / 2 - t / 2));
  g.add(box(DOOR_W + 0.15, H - DOOR_H, t, wall, 0, 0.22 + DOOR_H + (H - DOOR_H) / 2, D / 2 - t / 2));
  g.add(box(t, H, D, wall, -W / 2 + t / 2, wallY, 0));
  g.add(box(t, H, D, wall, W / 2 - t / 2, wallY, 0));

  g.add(box(DOOR_W + 0.3, 0.16, 0.2, trim, 0, 0.22 + DOOR_H + 0.02, D / 2 + 0.02));
  g.add(box(0.12, DOOR_H, 0.12, trim, -DOOR_W / 2, 0.22 + DOOR_H / 2, D / 2 + 0.02));
  g.add(box(0.12, DOOR_H, 0.12, trim, DOOR_W / 2, 0.22 + DOOR_H / 2, D / 2 + 0.02));

  const slope = Math.atan2(2.15, D / 2 + 0.35);
  const roofs = new THREE.Group();
  roofs.name = "roofs";
  roofs.userData.roof = true;
  for (const s of [-1, 1]) {
    const slab = box(W + 1.3, 0.2, D / 2 + 1.05, roofM, 0, H + 1.22, s * (D / 4 + 0.15));
    slab.rotation.x = s * slope;
    roofs.add(slab);
  }
  roofs.add(box(W + 1.4, 0.18, 0.32, timber, 0, H + 2.28, 0));
  roofs.add(box(0.7, 1.8, 0.7, plasterMat(plaster, 0xb98a68), -W / 2 + 1.3, H + 2.1, -0.8));
  roofs.add(box(0.9, 0.16, 0.9, metalMat(0x3a322a, 0.3, 0.55), -W / 2 + 1.3, H + 3.05, -0.8));
  g.add(roofs);

  for (const x of [-2.2, 2.2]) {
    g.add(box(1.15, 1.15, 0.08, glow, x, 1.85, D / 2 + 0.02));
    g.add(box(1.28, 0.08, 0.12, trim, x, 2.46, D / 2 + 0.04));
    g.add(box(1.28, 0.08, 0.12, trim, x, 1.24, D / 2 + 0.04));
  }
  g.add(box(1.2, 1.1, 0.08, glow, -W / 2 - 0.01, 1.9, -0.4));
  g.add(box(1.2, 1.1, 0.08, glow, W / 2 + 0.01, 1.9, 0.6));

  for (const s of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 2.15, 8), timber);
    post.position.set(s * 2.4, 1.18, D / 2 + 0.85);
    g.add(post);
  }
  g.add(box(5.4, 0.12, 1.5, timber, 0, 2.28, D / 2 + 0.85));

  const linen = new THREE.MeshToonMaterial({ color: 0xf7efe0 });
  const blush = new THREE.MeshToonMaterial({ color: 0xf2d4c0 });
  const quilt = new THREE.MeshToonMaterial({ color: 0xc45c3a });
  const rust = new THREE.MeshToonMaterial({ color: 0x8a3226 });
  const teal = new THREE.MeshToonMaterial({ color: 0x3d6b7a });
  const cream = new THREE.MeshToonMaterial({ color: 0xe8d2b0 });
  const gold = new THREE.MeshToonMaterial({ color: 0xe8c37a });
  const iron = metalMat(0x2a2420, 0.3, 0.55);
  const copper = metalMat(0xc4502e, 0.4, 0.4);
  const lampGlow = new THREE.MeshBasicMaterial({ color: 0xffb056, toneMapped: false });
  const fireGlow = new THREE.MeshBasicMaterial({ color: 0xff7a32, toneMapped: false });
  const bookMats = [0x8a3226, 0x3d6b7a, 0xc4502e, 0xe8c37a, 0x6b4226, 0x2f5d50].map(
    (c) => new THREE.MeshToonMaterial({ color: c }),
  );

  const seat = (x: number, z: number, yaw: number) => {
    const c = new THREE.Group();
    c.add(box(0.5, 0.08, 0.5, timber, 0, 0.42, 0));
    c.add(box(0.48, 0.06, 0.48, blush, 0, 0.49, 0));
    c.add(box(0.5, 0.46, 0.07, timber, 0, 0.68, -0.22));
    for (const [sx, sz] of [[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]] as const) {
      c.add(box(0.06, 0.4, 0.06, timber, sx, 0.2, sz));
    }
    c.position.set(x, 0, z);
    c.rotation.y = yaw;
    g.add(c);
  };

  g.add(box(3.15, 0.035, 2.55, rust, 0.1, 0.29, 0.15));
  g.add(box(1.15, 0.03, 0.7, teal, -2.15, 0.29, -0.15));

  g.add(box(2.05, 0.16, 2.55, timber, -2.15, 0.36, -1.4));
  g.add(box(1.88, 0.28, 2.38, blush, -2.12, 0.56, -1.4));
  g.add(box(1.86, 0.1, 1.55, quilt, -2.12, 0.72, -1.05));
  g.add(box(0.72, 0.16, 0.42, linen, -2.48, 0.82, -2.38));
  g.add(box(0.68, 0.14, 0.4, linen, -1.78, 0.8, -2.36));
  g.add(box(0.12, 0.72, 2.5, timber, -3.12, 0.68, -1.4));
  g.add(box(0.55, 0.48, 0.55, timber, -1.15, 0.5, -2.45));
  g.add(box(0.52, 0.04, 0.52, timber, -1.15, 0.76, -2.45));
  const bedLamp = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.22, 6), iron);
  bedLamp.position.set(-1.15, 0.9, -2.45);
  g.add(bedLamp);
  const bedShade = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.14, 8), gold);
  bedShade.position.set(-1.15, 1.08, -2.45);
  g.add(bedShade);
  const bedBulb = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 5), lampGlow);
  bedBulb.position.set(-1.15, 1.04, -2.45);
  g.add(bedBulb);

  g.add(box(1.15, 1.25, 0.42, plasterMat(plaster, 0xb98a68), 0.2, 0.9, -D / 2 + 0.38));
  g.add(box(0.72, 0.52, 0.1, fireGlow, 0.2, 0.72, -D / 2 + 0.58));
  g.add(box(1.28, 0.08, 0.48, timber, 0.2, 1.56, -D / 2 + 0.4));
  g.add(box(0.22, 0.18, 0.16, copper, -0.18, 1.7, -D / 2 + 0.42));
  g.add(box(0.18, 0.22, 0.14, bookMats[2], 0.42, 1.72, -D / 2 + 0.42));
  for (let i = 0; i < 4; i++) {
    g.add(box(0.08, 0.2 + (i % 2) * 0.05, 0.14, bookMats[i], -0.22 + i * 0.14, 1.72, -D / 2 + 0.48));
  }

  g.add(box(1.15, 1.35, 0.42, timber, 2.55, 0.96, -2.4));
  for (const y of [0.55, 0.95, 1.35]) g.add(box(1.05, 0.04, 0.38, trim, 2.55, y, -2.38));
  for (let i = 0; i < 5; i++) {
    g.add(box(0.1, 0.26 + (i % 3) * 0.04, 0.2, bookMats[i % bookMats.length], 2.15 + i * 0.16, 1.52, -2.28));
  }
  g.add(box(0.28, 0.18, 0.22, cream, 2.7, 1.14, -2.22));

  g.add(box(1.62, 0.08, 1.12, timber, 1.95, 0.86, 0.35));
  g.add(box(1.5, 0.02, 0.28, quilt, 1.95, 0.91, 0.35));
  for (const [sx, sz] of [[-0.62, -0.42], [0.62, -0.42], [-0.62, 0.42], [0.62, 0.42]] as const) {
    g.add(box(0.07, 0.76, 0.07, timber, 1.95 + sx, 0.46, 0.35 + sz));
  }
  g.add(box(0.28, 0.03, 0.28, cream, 1.62, 0.92, 0.12));
  g.add(box(0.28, 0.03, 0.28, cream, 2.28, 0.92, 0.12));
  g.add(box(0.22, 0.08, 0.22, teal, 1.95, 0.96, 0.58));
  const pitcher = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.16, 8), cream);
  pitcher.position.set(1.95, 1.02, 0.08);
  g.add(pitcher);
  seat(1.95, 1.28, 0);
  seat(1.95, -0.55, Math.PI);
  seat(2.85, 0.35, -Math.PI / 2);

  const tableStem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.26, 6), iron);
  tableStem.position.set(2.48, 1.05, 0.72);
  g.add(tableStem);
  const tableShade = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.15, 0.15, 8), gold);
  tableShade.position.set(2.48, 1.24, 0.72);
  g.add(tableShade);
  const tableBulb = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), lampGlow);
  tableBulb.position.set(2.48, 1.2, 0.72);
  g.add(tableBulb);

  g.add(box(0.72, 0.48, 0.7, timber, 2.55, 0.52, 2.05));
  g.add(box(0.68, 0.1, 0.66, quilt, 2.55, 0.8, 2.05));
  g.add(box(0.7, 0.42, 0.1, timber, 2.55, 1.0, 1.74));
  g.add(box(0.42, 0.06, 0.42, timber, 2.55, 0.86, 2.55));
  const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.08, 8), rust);
  mug.position.set(2.55, 0.94, 2.55);
  g.add(mug);

  g.add(box(2.15, 0.12, 0.62, timber, -2.45, 0.96, 2.05));
  for (const [x, z] of [[-3.2, 1.82], [-1.72, 1.82], [-3.2, 2.28], [-1.72, 2.28]] as const) {
    g.add(box(0.07, 0.72, 0.07, timber, x, 0.58, z));
  }
  g.add(box(2.05, 0.7, 0.14, timber, -2.45, 1.5, 1.78));
  const stove = box(0.78, 0.88, 0.62, metalMat(0x3a322a, 0.35, 0.5), -2.85, 0.74, 2.05);
  g.add(stove);
  g.add(box(0.55, 0.12, 0.08, fireGlow, -2.85, 0.62, 2.34));
  const kettle = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), copper);
  kettle.position.set(-2.85, 1.28, 2.05);
  g.add(kettle);
  const kettleLid = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.04, 8), copper);
  kettleLid.position.set(-2.85, 1.42, 2.05);
  g.add(kettleLid);
  g.add(box(0.38, 0.08, 0.32, iron, -1.95, 1.04, 2.12));
  const basin = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.12, 0.08, 10), metalMat(0x8a9aa0, 0.45, 0.35));
  basin.position.set(-1.95, 1.08, 2.12);
  g.add(basin);
  for (const x of [-2.55, -2.2]) {
    const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.14, 8), bookMats[x < -2.4 ? 1 : 3]);
    jar.position.set(x, 1.1, 1.88);
    g.add(jar);
  }
  for (const [x, col] of [[-3.05, 0x6b4226], [-2.75, 0x3a322a], [-2.48, 0xc4502e]] as const) {
    const pan = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.05, 8), metalMat(col, 0.35, 0.45));
    pan.position.set(x, 1.72, 1.82);
    g.add(pan);
  }

  for (const x of [-2.2, 2.2]) {
    g.add(box(1.32, 0.06, 0.14, trim, x, 1.22, D / 2 - t - 0.05));
    g.add(box(0.2, 1.2, 0.05, gold, x - 0.5, 1.86, D / 2 - t - 0.07));
    g.add(box(0.2, 1.2, 0.05, gold, x + 0.5, 1.86, D / 2 - t - 0.07));
  }
  g.add(box(0.06, 1.15, 1.22, gold, -W / 2 + t + 0.04, 1.9, -0.4));
  g.add(box(0.06, 1.15, 1.22, gold, W / 2 - t - 0.04, 1.9, 0.6));

  g.add(box(0.55, 0.42, 0.04, timber, -1.15, 2.15, -D / 2 + 0.14));
  g.add(box(0.45, 0.32, 0.02, teal, -1.15, 2.15, -D / 2 + 0.16));
  g.add(box(0.48, 0.38, 0.04, timber, 1.55, 2.2, -D / 2 + 0.14));
  g.add(box(0.38, 0.28, 0.02, cream, 1.55, 2.2, -D / 2 + 0.16));

  g.add(box(1.05, 0.06, 0.2, timber, -2.55, 2.05, D / 2 - t - 0.12));
  for (const x of [-2.9, -2.55, -2.2]) {
    const peg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.1, 5), iron);
    peg.rotation.x = Math.PI / 2;
    peg.position.set(x, 1.95, D / 2 - t - 0.16);
    g.add(peg);
  }
  g.add(box(0.22, 0.35, 0.08, rust, -2.55, 1.72, D / 2 - t - 0.2));

  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.22, 8), teal);
  pot.position.set(0.85, 0.4, -2.15);
  g.add(pot);
  const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.16, 7, 6), new THREE.MeshToonMaterial({ color: 0x3d7a6b }));
  leaf.position.set(0.85, 0.62, -2.15);
  leaf.scale.set(1, 0.7, 1);
  g.add(leaf);

  g.add(box(W - 0.6, 0.1, 0.16, timber, 0, 2.92, 0));
  g.add(box(0.16, 0.1, D - 0.8, timber, -1.6, 2.92, 0.1));
  g.add(box(0.16, 0.1, D - 0.8, timber, 1.6, 2.92, 0.1));
  const hang = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.4, 5), iron);
  hang.position.set(0, 2.78, 0.1);
  g.add(hang);
  const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.24, 8), quilt);
  shade.position.set(0, 2.52, 0.1);
  g.add(shade);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), lampGlow);
  bulb.position.set(0, 2.46, 0.1);
  g.add(bulb);

  const ceiling = new THREE.PointLight(0xff9a48, 0, 11.5, 1.25);
  ceiling.name = "interiorLight";
  ceiling.position.set(0, 2.48, 0.1);
  g.add(ceiling);

  shadow(g);
  return g;
}

export function setShellOpen(root: THREE.Object3D, open: boolean): void {
  root.traverse((o) => {
    if (o.userData.roof || o.userData.shell) o.visible = !open;
    if (o.name === "interiorLight" && o instanceof THREE.PointLight) {
      o.intensity = open ? 3.4 : 0;
    }
  });
}

export function buildHelipad(): THREE.Group {
  const g = new THREE.Group();
  const deck = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.75, 0.14, 20), metalMat(0x3a4038, 0.25, 0.7));
  deck.position.y = 0.07;
  g.add(deck);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.06, 6, 24), new THREE.MeshToonMaterial({ color: 0xf6eddc }));
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.15;
  g.add(ring);
  const hBar = box(1.35, 0.04, 0.22, new THREE.MeshToonMaterial({ color: 0xf6eddc }), 0, 0.16, 0);
  g.add(hBar);
  g.add(box(0.22, 0.04, 1.35, new THREE.MeshToonMaterial({ color: 0xf6eddc }), -0.56, 0.16, 0));
  g.add(box(0.22, 0.04, 1.35, new THREE.MeshToonMaterial({ color: 0xf6eddc }), 0.56, 0.16, 0));
  shadow(g);
  return g;
}

export function buildHelicopter(slotIndex: number): THREE.Group {
  const g = new THREE.Group();
  const paint = HELIS[slotIndex % HELIS.length];
  const body = metalMat(paint, 0.35, 0.45);
  const dark = metalMat(0x2a2624, 0.4, 0.45);
  const glass = glassMat(0xa8d4e8);

  const fuselage = new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 1.55, 6, 12), body);
  fuselage.rotation.z = Math.PI / 2;
  fuselage.position.set(0.1, 0.95, 0);
  fuselage.scale.set(1, 0.85, 1.05);
  g.add(fuselage);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 10), glass);
  nose.position.set(1.05, 0.98, 0);
  nose.scale.set(1.05, 0.85, 0.95);
  g.add(nose);
  const cabin = box(0.9, 0.55, 1.15, glass, 0.15, 1.22, 0);
  g.add(cabin);
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.16, 2.4, 8), body);
  tail.rotation.z = Math.PI / 2;
  tail.position.set(-1.85, 1.05, 0);
  g.add(tail);
  const fin = box(0.12, 0.7, 0.35, dark, -2.95, 1.35, 0);
  g.add(fin);
  const skid = (z: number) => {
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.4, 6), dark);
    rail.rotation.z = Math.PI / 2;
    rail.position.set(0.05, 0.22, z);
    g.add(rail);
    for (const x of [-0.55, 0.7]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 5), dark);
      leg.position.set(x, 0.55, z);
      g.add(leg);
    }
  };
  skid(-0.55);
  skid(0.55);

  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.45, 8), dark);
  mast.position.set(0, 1.62, 0);
  g.add(mast);
  const rotor = new THREE.Group();
  rotor.name = "rotor";
  rotor.position.set(0, 1.86, 0);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 10), dark);
  rotor.add(hub);
  for (let i = 0; i < 2; i++) {
    const blade = box(4.6, 0.04, 0.22, dark, 0, 0, 0);
    blade.rotation.y = (i * Math.PI) / 2;
    rotor.add(blade);
  }
  g.add(rotor);

  const tailRotor = new THREE.Group();
  tailRotor.name = "tailRotor";
  tailRotor.position.set(-3.0, 1.55, 0.18);
  for (let i = 0; i < 2; i++) {
    const blade = box(0.9, 0.04, 0.1, dark);
    blade.rotation.z = (i * Math.PI) / 2;
    tailRotor.add(blade);
  }
  g.add(tailRotor);

  const light = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffb347, toneMapped: false }));
  light.position.set(1.35, 0.72, 0);
  g.add(light);

  shadow(g);
  return g;
}

export function spinRotors(heli: THREE.Group, fast: boolean, dt: number): void {
  const rotor = heli.getObjectByName("rotor");
  const tail = heli.getObjectByName("tailRotor");
  const speed = fast ? 28 : 1.6;
  if (rotor) rotor.rotation.y += speed * dt;
  if (tail) tail.rotation.z += speed * 1.4 * dt;
}
