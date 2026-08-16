import * as THREE from "three";
import { skyFrag, skyVert } from "../render/shaders/sky";

// Shared golden-hour sun: low in the SOUTH-WEST (points toward the sun).
export const SUN_DIR = new THREE.Vector3(-0.45, 0.22, -0.82).normalize();

export class Sky {
  readonly mesh: THREE.Mesh;
  readonly sunDir = SUN_DIR.clone();
  readonly sunColor = new THREE.Color(0xffc27a);
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
        uHorizon: { value: new THREE.Color(0xffc9a3) },
        uRose: { value: new THREE.Color(0xf2a0b5) },
        uZenith: { value: new THREE.Color(0x6e7bd0) },
        uNadir: { value: new THREE.Color(0x16323c) },
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
