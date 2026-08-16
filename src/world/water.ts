import * as THREE from "three";
import type { Quality } from "../game/quality";
import { waterFrag, waterVert } from "../render/shaders/water";
import { layoutSlots } from "./islands";

export class Water {
  readonly mesh: THREE.Mesh;
  private readonly mat: THREE.ShaderMaterial;
  private readonly rise: Float32Array;

  constructor(quality: Quality, _foam: THREE.Texture, camera: THREE.Camera) {
    const slots = layoutSlots();
    // circle list: [0] = main island shoreline, [1..] = donation slots (x, z, waterline radius)
    const circles = [
      new THREE.Vector3(0, 0, 37),
      ...slots.map((s) => new THREE.Vector3(s.x, s.z, s.radius * 0.95)),
    ];
    this.rise = new Float32Array(circles.length);
    this.rise[0] = 1;
    this.mat = new THREE.ShaderMaterial({
      vertexShader: waterVert,
      fragmentShader: waterFrag,
      transparent: true,
      defines: { ISLAND_COUNT: circles.length },
      uniforms: {
        uTime: { value: 0 },
        uDeep: { value: new THREE.Color(0x1e6f7a) },
        uShallow: { value: new THREE.Color(0x5fd4c8) },
        uSky: { value: new THREE.Color(0x6e7bd0) },
        uHorizon: { value: new THREE.Color(0xffc9a3) },
        uSunDir: { value: new THREE.Vector3(-0.45, 0.35, -0.82).normalize() },
        uSunColor: { value: new THREE.Color(0xffd9a0) },
        uFoamColor: { value: new THREE.Color(0xf2fdf8) },
        uFogColor: { value: new THREE.Color(0xe8a9a0) },
        uFogRange: { value: new THREE.Vector2(140, 420) },
        uIslands: { value: circles },
        uRise: { value: this.rise },
        uCam: { value: camera.position },
      },
    });
    const seg = Math.min(quality.waterSeg, 160);
    const geo = new THREE.PlaneGeometry(620, 620, seg, seg);
    geo.rotateX(-Math.PI / 2);
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.position.y = 0;
    this.mesh.renderOrder = 1;
  }

  setRise(slot: number, rise: number): void {
    const i = slot + 1;
    if (i < 1 || i >= this.rise.length) return;
    this.rise[i] = THREE.MathUtils.clamp(rise, 0, 1);
  }

  update(t: number): void {
    this.mat.uniforms.uTime.value = t;
  }
}
