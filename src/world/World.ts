import * as THREE from "three";
import type { Quality } from "../game/quality";
import type { IslandSlot } from "../contracts/types";
import { Lighting } from "./lighting";
import { layoutSlots, type SlotLayout } from "./islands";
import { mainHeight } from "./height";
import { makeTextures } from "./materials";
import { Particles } from "./particles";
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
  readonly mailboxes: THREE.Group[] = [];
  readonly lanterns: THREE.Group[] = [];
  private readonly textures;

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
    this.group.add(buildLighthouse(this.textures.plaster, this.textures.wood));
    this.group.add(buildWarehouse(this.textures.plaster, this.textures.wood));
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
      const boat = buildBoat(this.textures.wood, [0xc4502e, 0xe8c9a0, 0x3d6b7a, 0xd4a24c][i % 4]);
      boat.position.set(s.x + s.radius * 0.7, 0.25, s.z);
      boat.visible = false;
      this.boats.push(boat);
      this.group.add(boat);
      const mail = buildMailbox();
      mail.position.set(s.x, 0.6, s.z);
      mail.visible = false;
      this.mailboxes.push(mail);
      this.group.add(mail);
      const palm = buildIsletPalm(this.textures.wood);
      palm.rotation.y = s.seed * 2.3;
      palm.position.set(s.x, -8, s.z);
      palm.visible = false;
      palm.userData.slotTree = true;
      this.group.add(palm);
      this.boats[i].userData.tree = palm;
    });
  }

  applyIslands(islands: IslandSlot[]): void {
    for (const isl of islands) {
      this.terrain.setSatelliteRise(isl.slot, isl.rise);
      const boat = this.boats[isl.slot];
      const mail = this.mailboxes[isl.slot + 1];
      if (boat) {
        boat.visible = isl.rise > 0.12;
        boat.position.y = 0.18 + Math.min(isl.rise, 1) * 0.12;
        boat.position.x = this.slots[isl.slot].x + this.slots[isl.slot].radius * 0.85;
        boat.position.z = this.slots[isl.slot].z;
        const tree = boat.userData.tree as THREE.Object3D | undefined;
        if (tree) {
          tree.visible = isl.rise > 0.35;
          tree.position.y = THREE.MathUtils.lerp(-6, 0.4, isl.rise);
        }
      }
      if (mail) {
        mail.visible = isl.rise > 0.55;
        mail.position.y = THREE.MathUtils.lerp(-2, 0.6, isl.rise);
      }
    }
  }

  update(t: number, extraCompute: number): void {
    this.sky.update(t);
    this.water.update(t);
    this.lighting.update(t);
    this.particles.update(t, extraCompute);
    this.boats.forEach((b, i) => {
      if (!b.visible) return;
      b.rotation.y = Math.sin(t * 0.3 + i) * 0.08;
      b.position.y += Math.sin(t * 1.4 + i) * 0.002;
    });
  }
}
