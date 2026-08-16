import * as THREE from "three";
import type { Quality } from "../game/quality";
import { SUN_DIR } from "./sky";

export class Lighting {
  readonly sun: THREE.DirectionalLight;
  readonly fill: THREE.DirectionalLight;
  readonly hemi: THREE.HemisphereLight;
  readonly lighthouse: THREE.SpotLight;
  readonly group = new THREE.Group();

  constructor(quality: Quality) {
    // cool dusk sky bounce vs. warm-shadowed ground
    this.hemi = new THREE.HemisphereLight(0x7a86c8, 0x3d2f4a, 0.85);

    // warm key, low in the SW, matching the sky's sun disc
    this.sun = new THREE.DirectionalLight(0xffd9a0, 2.9);
    this.sun.position.copy(SUN_DIR).multiplyScalar(150);
    this.sun.target.position.set(0, 0, 15);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(quality.shadowMap, quality.shadowMap);
    const cam = this.sun.shadow.camera;
    cam.near = 30;
    cam.far = 300;
    cam.left = -95;
    cam.right = 95;
    cam.top = 95;
    cam.bottom = -95;
    cam.updateProjectionMatrix();
    this.sun.shadow.bias = -0.0002;
    this.sun.shadow.normalBias = 0.055;

    // low rose rim/fill from the NE horizon, opposite the sun
    this.fill = new THREE.DirectionalLight(0xe8a9b8, 0.35);
    this.fill.position.set(52, 26, 90);

    this.lighthouse = new THREE.SpotLight(0xffcf8a, 22, 170, 0.16, 0.5, 1.1);
    this.lighthouse.position.set(8, 18.5, -18);
    this.lighthouse.castShadow = false;
    const target = new THREE.Object3D();
    target.position.set(40, 2, 10);
    this.lighthouse.target = target;

    this.group.add(this.hemi, this.sun, this.sun.target, this.fill, this.lighthouse, target);
  }

  update(t: number): void {
    const a = t * 0.22;
    this.lighthouse.target.position.set(Math.cos(a) * 70, 1.5, Math.sin(a) * 70 - 18);
    this.lighthouse.target.updateMatrixWorld();
  }
}
