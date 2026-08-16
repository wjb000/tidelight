import * as THREE from "three";
import { skyFrag, skyVert } from "../render/shaders/sky";

export class Sky {
  readonly mesh: THREE.Mesh;
  readonly sunDir = new THREE.Vector3(0.62, 0.18, 0.42).normalize();
  readonly sunColor = new THREE.Color(1.0, 0.62, 0.32);
  private readonly mat: THREE.ShaderMaterial;

  constructor() {
    this.mat = new THREE.ShaderMaterial({
      vertexShader: skyVert,
      fragmentShader: skyFrag,
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uSunDir: { value: this.sunDir.clone() },
        uHorizon: { value: new THREE.Color(0.99, 0.88, 0.63) },
        uZenith: { value: new THREE.Color(0.09, 0.06, 0.22) },
        uNadir: { value: new THREE.Color(0.18, 0.28, 0.36) },
        uSunColor: { value: this.sunColor.clone() },
      },
    });
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(900, 48, 32), this.mat);
    this.mesh.frustumCulled = false;
  }

  update(t: number): void {
    this.mat.uniforms.uTime.value = t;
  }
}
