import * as THREE from "three";
import { skyFrag, skyVert } from "../render/shaders/sky";

// Shared golden-hour sun: low in the SOUTH-WEST. Lighting key + water glitter
// both consume this same vector (direction toward the sun).
export const SUN_DIR = new THREE.Vector3(-0.45, 0.22, -0.82).normalize();

// Atmosphere palette — fog / water / sky / grade stay on this dusk axis.
export const HORIZON_HEX = 0xffc49a;
export const ROSE_HEX = 0xee8eaa;
export const ZENITH_HEX = 0x5c6bc2;
export const NADIR_HEX = 0x122a34;
export const SUN_HEX = 0xffc078;
export const FOG_HEX = 0xefb6a0;
export const FOG_NEAR = 42;
export const FOG_FAR = 260;

export class Sky {
  readonly mesh: THREE.Mesh;
  readonly sunDir = SUN_DIR;
  readonly sunColor = new THREE.Color(SUN_HEX);
  private readonly mat: THREE.ShaderMaterial;

  constructor() {
    this.mat = new THREE.ShaderMaterial({
      vertexShader: skyVert,
      fragmentShader: skyFrag,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        uTime: { value: 0 },
        uSunDir: { value: SUN_DIR },
        uHorizon: { value: new THREE.Color(HORIZON_HEX) },
        uRose: { value: new THREE.Color(ROSE_HEX) },
        uZenith: { value: new THREE.Color(ZENITH_HEX) },
        uNadir: { value: new THREE.Color(NADIR_HEX) },
        uSunColor: { value: this.sunColor },
      },
    });
    // large dome; vertex shader pins depth to the far plane so camera.far ~400 is fine
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(480, 48, 32), this.mat);
    this.mesh.frustumCulled = false;
  }

  update(t: number): void {
    this.mat.uniforms.uTime.value = t;
  }
}
