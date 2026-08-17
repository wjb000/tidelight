import * as THREE from "three";
import type { Quality } from "../game/quality";
import { SUN_DIR, SUN_HEX } from "./sky";

export class Lighting {
  readonly sun: THREE.DirectionalLight;
  readonly fill: THREE.DirectionalLight;
  readonly hemi: THREE.HemisphereLight;
  readonly lighthouse: THREE.SpotLight;
  readonly group = new THREE.Group();

  constructor(quality: Quality) {
    // cool periwinkle sky bounce vs. warm sand-bounce in the shadows
    this.hemi = new THREE.HemisphereLight(0x6e80c8, 0x4a3226, 0.7);

    // warmer, slightly punchier key matching the sky disc
    this.sun = new THREE.DirectionalLight(SUN_HEX, 1.62);
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

    // cooler lavender fill from the NE anti-sun sky, not a second warm key
    this.fill = new THREE.DirectionalLight(0x8aa4d6, 0.46);
    this.fill.position.set(48, 38, 88);

    this.lighthouse = new THREE.SpotLight(0xffc07a, 9, 140, 0.13, 0.65, 1.3);
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
