import * as THREE from "three";
import type { Quality } from "../game/quality";
import { terrainFrag, terrainVert } from "../render/shaders/terrain";
import { islandHeight, mainHeight } from "./height";

function buildIsland(seg: number, cx: number, cz: number, radius: number, seed: number, main: boolean): THREE.BufferGeometry {
  const geo = new THREE.PlaneGeometry(radius * 2.4, radius * 2.4, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) + cx;
    const z = pos.getZ(i) + cz;
    const y = main ? mainHeight(x, z) : islandHeight(x, z, cx, cz, radius, seed);
    pos.setY(i, y);
    pos.setX(i, x);
    pos.setZ(i, z);
  }
  geo.computeVertexNormals();
  return geo;
}

export class Terrain {
  readonly group = new THREE.Group();
  readonly main: THREE.Mesh;
  readonly satellites: THREE.Mesh[] = [];
  private readonly mat: THREE.ShaderMaterial;

  constructor(
    quality: Quality,
    textures: { sand: THREE.Texture; grass: THREE.Texture; rock: THREE.Texture },
    slots: { x: number; z: number; radius: number; seed: number }[],
  ) {
    this.mat = new THREE.ShaderMaterial({
      vertexShader: terrainVert,
      fragmentShader: terrainFrag,
      uniforms: {
        uSand: { value: textures.sand },
        uGrass: { value: textures.grass },
        uRock: { value: textures.rock },
        uSunDir: { value: new THREE.Vector3(0.62, 0.18, 0.42) },
        uSunColor: { value: new THREE.Color(1.0, 0.62, 0.32) },
        uHemiSky: { value: new THREE.Color(0.55, 0.48, 0.72) },
        uHemiGnd: { value: new THREE.Color(0.28, 0.16, 0.1) },
      },
    });

    const mainSeg = quality.terrainSeg;
    this.main = new THREE.Mesh(buildIsland(mainSeg, 0, 0, 40, 3.1, true), this.mat);
    this.main.receiveShadow = true;
    this.main.castShadow = true;
    this.group.add(this.main);

    const satSeg = Math.max(24, Math.floor(quality.terrainSeg * 0.28));
    for (const s of slots) {
      const mesh = new THREE.Mesh(buildIsland(satSeg, s.x, s.z, s.radius, s.seed, false), this.mat);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      mesh.position.y = -8;
      this.satellites.push(mesh);
      this.group.add(mesh);
    }
  }

  setSatelliteRise(i: number, rise: number): void {
    const mesh = this.satellites[i];
    if (!mesh) return;
    mesh.position.y = THREE.MathUtils.lerp(-6.5, 0.35, rise);
    mesh.visible = rise > 0.02;
  }
}
