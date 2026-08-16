import * as THREE from "three";
import type { Quality } from "../game/quality";

export class Lighting {
  readonly sun: THREE.DirectionalLight;
  readonly fill: THREE.DirectionalLight;
  readonly hemi: THREE.HemisphereLight;
  readonly lighthouse: THREE.SpotLight;
  readonly group = new THREE.Group();

  constructor(quality: Quality) {
    this.hemi = new THREE.HemisphereLight(0xffc8a0, 0x6a88b8, 1.15);
    this.sun = new THREE.DirectionalLight(0xffe0b0, 2.15);
    this.sun.position.set(48, 22, 36);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(quality.shadowMap, quality.shadowMap);
    this.sun.shadow.camera.near = 4;
    this.sun.shadow.camera.far = 180;
    this.sun.shadow.camera.left = -70;
    this.sun.shadow.camera.right = 70;
    this.sun.shadow.camera.top = 70;
    this.sun.shadow.camera.bottom = -70;
    this.sun.shadow.bias = -0.00025;
    this.sun.shadow.normalBias = 0.04;

    this.fill = new THREE.DirectionalLight(0x6aa0c8, 0.28);
    this.fill.position.set(-40, 18, -20);

    this.lighthouse = new THREE.SpotLight(0xffe6b0, 18, 160, 0.18, 0.45, 1.1);
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
