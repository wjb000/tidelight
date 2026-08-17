import * as THREE from "three";
import type { Quality } from "../game/quality";
import type { IslandSlot } from "../contracts/types";
import { Lighting } from "./lighting";
import { layoutSlots, type SlotLayout } from "./islands";
import { mainHeight } from "./height";
import { makeTextures } from "./materials";
import { Particles } from "./particles";
import type { VehicleState } from "../contracts/types";
import {
  boatMooring,
  buildHelicopter,
  buildHelipad,
  buildHouse,
  doorWorld,
  heliPadPos,
  houseAnchor,
  islandFacing,
  padHeight,
  setShellOpen,
  spinRotors,
} from "./homestead";
import {
  buildBench,
  buildBoat,
  buildCrane,
  buildDock,
  buildIsletPalm,
  buildLantern,
  buildLighthouse,
  buildMailbox,
  buildStringLights,
  buildUmbrella,
  buildWarehouse,
  scatterProps,
} from "./props";
import { Sky } from "./sky";
import { Terrain } from "./terrain";
import { Vegetation } from "./vegetation";
import { Water } from "./water";

export class World {
  readonly group = new THREE.Group();
  readonly slots: SlotLayout[];
  readonly terrain: Terrain;
  readonly water: Water;
  readonly sky: Sky;
  readonly lighting: Lighting;
  readonly particles: Particles;
  readonly boats: THREE.Group[] = [];
  readonly helis: THREE.Group[] = [];
  readonly houses: THREE.Group[] = [];
  readonly pads: THREE.Group[] = [];
  readonly mailboxes: THREE.Group[] = [];
  readonly lanterns: THREE.Group[] = [];
  warehouse: THREE.Group | null = null;
  lighthouse: THREE.Group | null = null;
  private readonly textures;
  private lastRide = "";

  constructor(quality: Quality, camera: THREE.Camera) {
    const loader = new THREE.TextureLoader();
    this.textures = makeTextures(loader);
    this.slots = layoutSlots();
    this.sky = new Sky();
    this.lighting = new Lighting(quality);
    this.terrain = new Terrain(quality, this.textures, this.slots);
    this.water = new Water(quality, this.textures.foam, camera);
    this.particles = new Particles(quality);
    const veg = new Vegetation(quality);

    this.group.add(this.sky.mesh);
    this.group.add(this.lighting.group);
    this.group.add(this.terrain.group);
    this.group.add(this.water.mesh);
    const titleBoat = buildBoat(this.textures.wood, 0xe8c37a);
    titleBoat.position.set(14, 0.28, 70);
    titleBoat.rotation.y = -0.55;
    this.group.add(titleBoat);
    this.group.add(veg.group);
    this.group.add(this.particles.gulls, this.particles.spray);
    this.lighthouse = buildLighthouse(this.textures.plaster, this.textures.wood);
    this.warehouse = buildWarehouse(this.textures.plaster, this.textures.wood);
    this.group.add(this.lighthouse);
    this.group.add(this.warehouse);
    this.group.add(buildCrane(this.textures.wood));
    this.group.add(buildDock(this.textures.wood));
    this.group.add(scatterProps(this.textures.wood, this.textures.plaster));
    const umbrellas: [number, number, number][] = [
      [8, 34, 0xd8452f],
      [11, 36, 0xf7ecd6],
      [14, 33, 0x49c5b6],
      [-7, 30, 0xe8c37a],
      [16, 28, 0xc4502e],
    ];
    for (const [x, z, c] of umbrellas) {
      const u = buildUmbrella(c);
      u.position.set(x, Math.max(0.12, mainHeight(x, z)) + 0.02, z);
      this.group.add(u);
    }

    const path = new THREE.Mesh(
      new THREE.BoxGeometry(3.4, 0.08, 22),
      new THREE.MeshToonMaterial({ color: 0xe8c46a }),
    );
    path.position.set(0, 0.72, 22);
    path.receiveShadow = true;
    this.group.add(path);
    for (const [x, z, r] of [[-5.2, 24, 0.35], [5.6, 20, -2.4]] as const) {
      const bench = buildBench(this.textures.wood);
      bench.position.set(x, Math.max(0.3, mainHeight(x, z)) + 0.02, z);
      bench.rotation.y = r;
      this.group.add(bench);
    }
    const homeMail = buildMailbox();
    homeMail.position.set(3.2, 0.7, 26);
    this.mailboxes.push(homeMail);
    this.group.add(homeMail);

    // lantern posts — the two dock-mouth posts plus a zigzag line down the pier,
    // then scattered posts inland. String lights swag between the pier posts.
    const dockLanterns: [number, number, number, boolean][] = [
      [-3.1, 0.84, 30, true],
      [3.1, 0.84, 34, false],
      [-3.1, 0.84, 38.5, true],
      [3.1, 0.84, 43, false],
      [-3.1, 0.84, 47.5, true],
    ];
    const chain: THREE.Vector3[] = [];
    for (const [x, y, z, lit] of dockLanterns) {
      const l = buildLantern(0xffb347, lit);
      l.position.set(x, y, z);
      l.rotation.y = x < 0 ? 0 : Math.PI;
      this.lanterns.push(l);
      this.group.add(l);
      // lantern head world position (arm tip), mirrored by rotation
      chain.push(new THREE.Vector3(x + (x < 0 ? 0.42 : -0.42), y + 2.62, z));
    }
    this.group.add(buildStringLights(chain));
    const landLanterns: [number, number, boolean][] = [
      [18, 4, true],
      [-12, 10, true],
      [8, -10, false],
    ];
    for (const [x, z, lit] of landLanterns) {
      const l = buildLantern(0xffb347, lit);
      l.position.set(x, Math.max(0.2, mainHeight(x, z)) + 0.02, z);
      this.lanterns.push(l);
      this.group.add(l);
    }

    this.slots.forEach((s, i) => {
      const yaw = islandFacing(s);
      const home = houseAnchor(s);
      const house = buildHouse(this.textures.wood, this.textures.plaster, i);
      house.position.set(home.x, -8, home.z);
      house.rotation.y = home.yaw;
      house.visible = false;
      house.userData.baseY = padHeight(s, home.x, home.z);
      this.houses.push(house);
      this.group.add(house);

      const padAt = heliPadPos(s);
      const pad = buildHelipad();
      pad.position.set(padAt.x, -8, padAt.z);
      pad.visible = false;
      pad.userData.baseY = padHeight(s, padAt.x, padAt.z);
      this.pads.push(pad);
      this.group.add(pad);

      const heli = buildHelicopter(i);
      heli.position.set(padAt.x, -8, padAt.z);
      heli.rotation.y = padAt.yaw;
      heli.visible = false;
      this.helis.push(heli);
      this.group.add(heli);

      const moor = boatMooring(s);
      const boat = buildBoat(this.textures.wood, [0xc4502e, 0xe8c9a0, 0x3d6b7a, 0xd4a24c][i % 4]);
      boat.position.set(moor.x, 0.25, moor.z);
      boat.rotation.y = moor.yaw;
      boat.visible = false;
      this.boats.push(boat);
      this.group.add(boat);

      const mail = buildMailbox();
      const door = doorWorld(s);
      mail.position.set(door.x + Math.sin(yaw + 0.7) * 1.4, 0.6, door.z + Math.cos(yaw + 0.7) * 1.4);
      mail.visible = false;
      this.mailboxes.push(mail);
      this.group.add(mail);

      const left = yaw - Math.PI / 2;
      const palm = buildIsletPalm(this.textures.wood);
      palm.rotation.y = s.seed * 2.3;
      palm.position.set(s.x + Math.sin(left) * s.radius * 0.32, -8, s.z + Math.cos(left) * s.radius * 0.32);
      palm.visible = false;
      palm.userData.slotTree = true;
      this.group.add(palm);
      this.boats[i].userData.tree = palm;
    });
  }

  applyIslands(islands: IslandSlot[]): void {
    for (const isl of islands) {
      this.terrain.setSatelliteRise(isl.slot, isl.rise);
      this.water.setRise(isl.slot, isl.rise);
      const boat = this.boats[isl.slot];
      const mail = this.mailboxes[isl.slot + 1];
      const house = this.houses[isl.slot];
      const pad = this.pads[isl.slot];
      const up = isl.rise;
      if (house) {
        const base = house.userData.baseY as number;
        house.visible = up > 0.22;
        house.position.y = up > 0.4 ? base : THREE.MathUtils.lerp(-8, base, up / 0.4);
      }
      if (pad) {
        const base = pad.userData.baseY as number;
        pad.visible = up > 0.28;
        pad.position.y = up > 0.4 ? base : THREE.MathUtils.lerp(-8, base, up / 0.4);
      }
      if (boat) {
        boat.visible = boat.userData.ridden || up > 0.12;
        const tree = boat.userData.tree as THREE.Object3D | undefined;
        if (tree) {
          tree.visible = up > 0.35;
          tree.position.y = THREE.MathUtils.lerp(-6, 0.4, up);
        }
      }
      if (mail) {
        mail.visible = up > 0.55;
        mail.position.y = THREE.MathUtils.lerp(-2, 0.6, up);
      }
    }
  }

  syncVehicles(
    vehicles: VehicleState[],
    ride: {
      id: string;
      mode: "none" | "heli" | "boat";
      slot: number;
      pos: THREE.Vector3;
      yaw: number;
      vel: THREE.Vector3;
    },
    riseOf?: (i: number) => number,
  ): void {
    for (const v of vehicles) {
      const mesh = v.kind === "heli" ? this.helis[v.slot] : this.boats[v.slot];
      if (!mesh) continue;
      const risen = (riseOf?.(v.slot) ?? 1) > 0.18;
      const localRide = ride.mode === v.kind && ride.slot === v.slot;
      const ridden = localRide || !!v.riderId;
      mesh.userData.ridden = ridden;
      mesh.visible = risen || ridden;
      if (!mesh.visible) continue;

      const target = new THREE.Vector3();
      let yaw = v.yaw;
      if (localRide) {
        target.copy(ride.pos);
        if (v.kind === "boat") target.y = ride.pos.y - 0.06;
        if (v.kind === "heli") target.y = ride.pos.y - 0.18;
        yaw = ride.yaw;
        mesh.position.copy(target);
        mesh.rotation.y = yaw;
        const rightX = Math.cos(yaw);
        const rightZ = -Math.sin(yaw);
        const fwdX = Math.sin(yaw);
        const fwdZ = Math.cos(yaw);
        const side = ride.vel.x * rightX + ride.vel.z * rightZ;
        const fwd = ride.vel.x * fwdX + ride.vel.z * fwdZ;
        const bank = THREE.MathUtils.clamp(-side * 0.045, -0.32, 0.32);
        const pitch = THREE.MathUtils.clamp(fwd * 0.012 + (v.kind === "heli" ? -ride.vel.y * 0.03 : 0), -0.18, 0.2);
        mesh.rotation.z += (bank - mesh.rotation.z) * 0.12;
        mesh.rotation.x += (pitch - mesh.rotation.x) * 0.1;
      } else {
        target.set(v.x, v.y, v.z);
        if (v.kind === "boat" && !ridden) target.y = 0.28 + Math.sin(performance.now() * 0.002 + v.slot) * 0.05;
        mesh.position.lerp(target, ridden ? 0.35 : 0.18);
        const dy = yaw - mesh.rotation.y;
        const wrap = Math.atan2(Math.sin(dy), Math.cos(dy));
        mesh.rotation.y += wrap * 0.2;
        mesh.rotation.x += (0 - mesh.rotation.x) * 0.08;
        mesh.rotation.z += (0 - mesh.rotation.z) * 0.08;
      }
    }
  }

  setInterior(placeId: string | null): void {
    const key = placeId ?? "";
    if (this.lastRide === key) return;
    this.lastRide = key;
    this.houses.forEach((h, i) => setShellOpen(h, placeId === `house-${i}`));
    if (this.warehouse) setShellOpen(this.warehouse, placeId === "warehouse");
    if (this.lighthouse) setShellOpen(this.lighthouse, placeId === "lighthouse");
  }

  update(t: number, extraCompute: number): void {
    this.sky.update(t);
    this.water.update(t);
    this.lighting.update(t);
    this.particles.update(t, extraCompute);
    this.boats.forEach((b, i) => {
      if (!b.visible || b.userData.ridden) return;
      b.rotation.y += Math.sin(t * 0.3 + i) * 0.0004;
      b.position.y += Math.sin(t * 1.4 + i) * 0.002;
    });
    this.helis.forEach((h) => {
      if (!h.visible) return;
      spinRotors(h, !!h.userData.ridden, 1 / 60);
    });
  }
}
