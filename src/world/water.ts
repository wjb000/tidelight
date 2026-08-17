import * as THREE from "three";
import type { Quality } from "../game/quality";
import { waterFrag, waterVert } from "../render/shaders/water";
import { layoutSlots } from "./islands";
import { FOG_FAR, FOG_HEX, FOG_NEAR, HORIZON_HEX, ROSE_HEX, SUN_DIR, SUN_HEX, ZENITH_HEX } from "./sky";

export class Water {
  readonly mesh: THREE.Mesh;
  private readonly mat: THREE.ShaderMaterial;
  private readonly rise: Float32Array;

  constructor(quality: Quality, foam: THREE.Texture, camera: THREE.Camera) {
    const slots = layoutSlots();
    const circles = slots.map((s) => new THREE.Vector3(s.x, s.z, s.radius * 0.96));
    this.rise = new Float32Array(circles.length);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: waterVert,
      fragmentShader: waterFrag,
      transparent: true,
      fog: false,
      toneMapped: true,
      defines: { ISLAND_COUNT: circles.length },
      uniforms: {
        uTime: { value: 0 },
        uDeep: { value: new THREE.Color(0x163e4c) },
        uShallow: { value: new THREE.Color(0x6aada0) },
        uSky: { value: new THREE.Color(ZENITH_HEX) },
        uHorizon: { value: new THREE.Color(HORIZON_HEX) },
        uRose: { value: new THREE.Color(ROSE_HEX) },
        uSunDir: { value: SUN_DIR },
        uSunColor: { value: new THREE.Color(SUN_HEX) },
        uFoamColor: { value: new THREE.Color(0xfff1e4) },
        uFogColor: { value: new THREE.Color(FOG_HEX) },
        uFogRange: { value: new THREE.Vector2(FOG_NEAR, FOG_FAR) },
        uIslands: { value: circles },
        uRise: { value: this.rise },
        uCam: { value: camera.position },
        uFoam: { value: foam },
      },
    });
    const seg = Math.min(quality.waterSeg, 160);
    // stays inside camera.far ~400 from the outer islets
    const geo = new THREE.PlaneGeometry(980, 980, seg, seg);
    geo.rotateX(-Math.PI / 2);
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.position.y = 0;
    this.mesh.renderOrder = 1;
  }

  setRise(slot: number, rise: number): void {
    if (slot < 0 || slot >= this.rise.length) return;
    this.rise[slot] = THREE.MathUtils.clamp(rise, 0, 1);
  }

  update(t: number): void {
    this.mat.uniforms.uTime.value = t;
  }
}
