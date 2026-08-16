import * as THREE from "three";
import type { Quality } from "../game/quality";
import { waterFrag, waterVert } from "../render/shaders/water";

export class Water {
  readonly mesh: THREE.Mesh;
  private readonly mat: THREE.ShaderMaterial;

  constructor(quality: Quality, _foam: THREE.Texture, camera: THREE.Camera) {
    this.mat = new THREE.ShaderMaterial({
      vertexShader: waterVert,
      fragmentShader: waterFrag,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uDeep: { value: new THREE.Color(0.0, 0.33, 0.48) },
        uShallow: { value: new THREE.Color(0.05, 0.98, 0.86) },
        uHorizon: { value: new THREE.Color(1.0, 0.74, 0.46) },
        uSunDir: { value: new THREE.Vector3(0.62, 0.18, 0.42) },
        uSunColor: { value: new THREE.Color(1.0, 0.72, 0.4) },
        uCam: { value: camera.position },
      },
    });
    const geo = new THREE.PlaneGeometry(620, 620, Math.min(quality.waterSeg, 48), Math.min(quality.waterSeg, 48));
    geo.rotateX(-Math.PI / 2);
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.position.y = 0;
    this.mesh.renderOrder = 1;
  }

  update(t: number): void {
    this.mat.uniforms.uTime.value = t;
  }
}
