import * as THREE from "three";
import type { Quality } from "../game/quality";
import type { IslandSlot } from "../contracts/types";
import { Lighting } from "./lighting";
import { layoutSlots, type SlotLayout } from "./islands";
import { makeTextures } from "./materials";
import { Particles } from "./particles";
import {
  buildBoat,
  buildCrane,
  buildDock,
  buildLantern,
  buildLighthouse,
  buildMailbox,
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
    const foam = new THREE.Mesh(
      new THREE.RingGeometry(36, 43, 80),
      new THREE.MeshBasicMaterial({ color: 0xf4fffc, transparent: true, opacity: 0.72, side: THREE.DoubleSide }),
    );
    foam.rotation.x = -Math.PI / 2;
    foam.position.y = 0.04;
    this.group.add(foam);
    const pierFoam = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 32),
      new THREE.MeshBasicMaterial({ color: 0xf4fffc, transparent: true, opacity: 0.35, side: THREE.DoubleSide }),
    );
    pierFoam.rotation.x = -Math.PI / 2;
    pierFoam.position.set(0, 0.03, 28);
    this.group.add(pierFoam);
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
    const umbrellas: [number, number, number, number][] = [
      [8, 0.2, 34, 0xd14836],
      [11, 0.25, 36, 0xf4ead8],
      [14, 0.2, 33, 0x49c5b6],
      [-7, 0.25, 30, 0xe8c37a],
      [16, 0.2, 28, 0xc45c3a],
    ];
    for (const [x, y, z, c] of umbrellas) {
      const u = buildUmbrella(c);
      u.position.set(x, y, z);
      this.group.add(u);
    }

    const path = new THREE.Mesh(
      new THREE.BoxGeometry(3.4, 0.08, 22),
      new THREE.MeshToonMaterial({ color: 0xe8c46a }),
    );
    path.position.set(0, 0.72, 22);
    this.group.add(path);
    const bench = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.12, 0.45),
      new THREE.MeshToonMaterial({ color: 0xc4a27a }),
    );
    bench.position.set(-5.2, 0.85, 24);
    this.group.add(bench);
    const homeMail = buildMailbox();
    homeMail.position.set(3.2, 0.7, 26);
    this.mailboxes.push(homeMail);
    this.group.add(homeMail);

    const lanternSpots: [number, number, number][] = [
      [-3.6, 0.7, 30],
      [3.6, 0.7, 34],
      [18, 0.2, 4],
      [-12, 0.4, 10],
      [8, 0.2, -10],
    ];
    for (const [x, y, z] of lanternSpots) {
      const l = buildLantern(0xffb347);
      l.position.set(x, y, z);
      this.lanterns.push(l);
      this.group.add(l);
    }

    this.slots.forEach((s, i) => {
      const ghost = new THREE.Mesh(
        new THREE.RingGeometry(s.radius * 0.7, s.radius * 0.82, 32),
        new THREE.MeshBasicMaterial({ color: 0xf4ead8, transparent: true, opacity: 0.18, side: THREE.DoubleSide }),
      );
      ghost.rotation.x = -Math.PI / 2;
      ghost.position.set(s.x, 0.06, s.z);
      this.group.add(ghost);
      const boat = buildBoat(this.textures.wood, [0xc45c3a, 0xe8c9a0, 0x3d6b7a, 0xd4a24c][i % 4]);
      boat.position.set(s.x + s.radius * 0.7, 0.25, s.z);
      boat.visible = false;
      this.boats.push(boat);
      this.group.add(boat);
      const mail = buildMailbox();
      mail.position.set(s.x, 0.6, s.z);
      mail.visible = false;
      this.mailboxes.push(mail);
      this.group.add(mail);
      const palm = new THREE.Group();
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.26, 3.2, 6),
        new THREE.MeshToonMaterial({ color: 0x6e4f24 }),
      );
      trunk.position.y = 1.6;
      const crown = new THREE.Mesh(new THREE.SphereGeometry(1.4, 8, 6), new THREE.MeshToonMaterial({ color: 0xe88a6a }));
      crown.position.y = 3.3;
      const crown2 = new THREE.Mesh(new THREE.SphereGeometry(1.0, 8, 6), new THREE.MeshToonMaterial({ color: 0xf0c84a }));
      crown2.position.set(1.6, 2.6, 0.4);
      const lamp = buildLantern(0xffb347);
      lamp.position.set(-1.4, 0.2, 0.8);
      const crown3 = new THREE.Mesh(new THREE.SphereGeometry(1.15, 8, 6), new THREE.MeshToonMaterial({ color: 0x7ec84a }));
      crown3.position.set(-2.1, 2.8, -0.6);
      const stub = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.12, 3.2), new THREE.MeshToonMaterial({ color: 0xc4a27a }));
      stub.position.set(2.4, 0.55, 3.2);
      palm.add(trunk, crown, crown2, crown3, lamp, stub);
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(s.radius * 0.85, s.radius * 1.05, 24),
        new THREE.MeshBasicMaterial({ color: 0xf4fffc, transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.08;
      palm.add(ring);
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
