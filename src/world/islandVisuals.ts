import * as THREE from "three";
import type { IslandSlot, VehicleState } from "../contracts/types";
import { islandLift } from "./height";
import { heliPadPos, padHeight } from "./homestead";
import type { SlotLayout } from "./islands";

/** Keep homestead props locked to the rising terrain mesh (same islandLift). */
export function applyIslandVisuals(
  ctx: {
    harbor: THREE.Group;
    terrain: { setSatelliteRise: (i: number, rise: number) => void };
    water: { setRise: (slot: number, rise: number) => void };
    boats: THREE.Group[];
    helis: THREE.Group[];
    houses: THREE.Group[];
    pads: THREE.Group[];
    mailboxes: THREE.Group[];
    slots: SlotLayout[];
  },
  islands: IslandSlot[],
  vehicles: VehicleState[] = [],
): void {
  const riding = new Set(vehicles.filter((v) => v.riderId).map((v) => `${v.kind}-${v.slot}`));
  const homeRise = islands[0]?.rise ?? 0;
  ctx.harbor.visible = homeRise > 0.28;
  ctx.harbor.position.y = homeRise > 0.55 ? 0 : THREE.MathUtils.lerp(-7, 0, homeRise / 0.55);
  for (const isl of islands) {
    ctx.terrain.setSatelliteRise(isl.slot, isl.rise);
    ctx.water.setRise(isl.slot, isl.rise);
    const boat = ctx.boats[isl.slot];
    const mail = ctx.mailboxes[isl.slot + 1];
    const house = ctx.houses[isl.slot];
    const pad = ctx.pads[isl.slot];
    const up = isl.rise;
    const lift = islandLift(up);
    if (isl.slot === 0) {
      if (house) house.visible = false;
      if (pad) pad.visible = false;
      if (ctx.helis[isl.slot] && !ctx.helis[isl.slot].userData.ridden) ctx.helis[isl.slot].visible = false;
      if (boat && !boat.userData.ridden) {
        boat.visible = false;
        const tree = boat.userData.tree as THREE.Object3D | undefined;
        if (tree) {
          tree.visible = false;
          const grove = tree.userData.grove as THREE.Object3D[] | undefined;
          grove?.forEach((g) => {
            g.visible = false;
          });
        }
      }
      if (mail) mail.visible = false;
      continue;
    }
    if (house) {
      const base = house.userData.baseY as number;
      house.visible = up > 0.22;
      house.position.y = base + lift;
    }
    if (pad) {
      const base = pad.userData.baseY as number;
      pad.visible = up > 0.28;
      pad.position.y = base + lift;
    }
    const heli = ctx.helis[isl.slot];
    if (heli && !heli.userData.ridden && !riding.has(`heli-${isl.slot}`)) {
      const padAt = heliPadPos(ctx.slots[isl.slot]);
      const hy = padHeight(ctx.slots[isl.slot], padAt.x, padAt.z) + 0.85;
      heli.visible = up > 0.22;
      heli.position.x = padAt.x;
      heli.position.z = padAt.z;
      heli.position.y = hy + lift;
      heli.rotation.y = padAt.yaw;
    }
    if (boat && !riding.has(`boat-${isl.slot}`) && !boat.userData.ridden) {
      boat.visible = up > 0.12;
    }
    const tree = boat?.userData.tree as THREE.Object3D | undefined;
    if (tree) {
      const slot = ctx.slots[isl.slot];
      const ty = padHeight(slot, tree.position.x, tree.position.z);
      tree.visible = up > 0.35;
      tree.position.y = ty + lift;
      const grove = tree.userData.grove as THREE.Object3D[] | undefined;
      grove?.forEach((g) => {
        const gy = padHeight(slot, g.position.x, g.position.z);
        g.visible = up > 0.38;
        g.position.y = gy + lift;
      });
    }
    if (mail) {
      mail.visible = up > 0.55;
      mail.position.y = 0.6 + lift;
    }
  }
}
