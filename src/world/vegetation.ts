import * as THREE from "three";
import type { Quality } from "../game/quality";
import { mainHeight } from "./height";

function n01(i: number, k: number, x: number, z: number): number {
  const n = Math.sin(i * 17.13 + k * 43.77 + x * 0.31 + z * 0.19) * 43758.5453;
  return n - Math.floor(n);
}

export class Vegetation {
  readonly group = new THREE.Group();

  constructor(_quality: Quality) {
    this.group.add(this.trees());
  }

  private trees(): THREE.Group {
    const g = new THREE.Group();
    const trunkGeo = new THREE.CylinderGeometry(0.12, 0.21, 2.2, 8);
    const blobGeo = new THREE.SphereGeometry(1, 10, 8);
    const trunkM = new THREE.MeshToonMaterial({ color: 0x8b5a2b });
    const candy = [0x2d8a4e, 0xe88a6a, 0xf0c84a, 0x7ec84a, 0x1a6b37, 0x5eb8a8];
    const leafMats = candy.map((color) => new THREE.MeshToonMaterial({ color }));
    const spots = [
      [12, -8], [16, -14], [4, -26], [-10, -16], [-18, -6], [28, -4], [-22, 16], [14, 18],
      [-14, 8], [32, 12], [-4, -22], [20, -22], [24, 2], [-8, -28], [18, -6],
      [8, 14], [-6, 16], [18, 8], [-16, 20], [10, 22], [22, -10], [-20, 4],
      [6, -12], [-12, -8], [26, 16],
    ];

    spots.forEach(([x, z], i) => {
      const y = mainHeight(x, z);
      if (y < 0.4) return;

      const r = (k: number) => n01(i, k, x, z);
      const t = new THREE.Group();
      const trunk = new THREE.Mesh(trunkGeo, trunkM);
      trunk.position.y = 1.1;
      trunk.scale.set(0.88 + r(1) * 0.28, 0.92 + r(2) * 0.22, 0.88 + r(1) * 0.28);
      t.add(trunk);

      const leafM = leafMats[i % leafMats.length];
      const blobs = r(3) < 0.38 ? 2 : 3;
      const yaw = r(4) * Math.PI * 2;
      for (let b = 0; b < blobs; b++) {
        const blob = new THREE.Mesh(blobGeo, leafM);
        const s = (b === 0 ? 1.08 : 0.66) + r(5 + b) * 0.26;
        blob.scale.set(
          s * (0.92 + r(8 + b) * 0.16),
          s * (0.76 + r(11 + b) * 0.2),
          s * (0.94 + r(14 + b) * 0.14),
        );
        const spread = b === 0 ? 0.16 : 0.6;
        const a = yaw + b * 2.15 + r(17 + b) * 0.45;
        blob.position.set(
          Math.cos(a) * spread,
          2.18 + (b === 0 ? 0.3 : b === 1 ? 0.04 : 0.4) + r(20 + b) * 0.14,
          Math.sin(a) * spread * 0.86,
        );
        t.add(blob);
      }

      t.position.set(x, y, z);
      t.rotation.x = (r(24) - 0.5) * 0.2;
      t.rotation.y = r(25) * Math.PI * 2;
      t.rotation.z = (r(26) - 0.5) * 0.2;
      t.scale.setScalar(0.84 + r(27) * 0.4);
      t.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.isMesh) {
          m.castShadow = true;
          m.receiveShadow = true;
        }
      });
      g.add(t);
    });
    return g;
  }
}
