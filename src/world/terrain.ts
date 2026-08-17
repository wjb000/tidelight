import * as THREE from "three";
import type { Quality } from "../game/quality";
import {
  terrainAlbedoFrag,
  terrainParsFrag,
  terrainParsVert,
  terrainRoughnessFrag,
  terrainVertMain,
} from "../render/shaders/terrain";
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

function makeTerrainMaterial(textures: { sand: THREE.Texture; grass: THREE.Texture; rock: THREE.Texture }): THREE.MeshStandardMaterial {
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.94, metalness: 0 });
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uSand = { value: textures.sand };
    shader.uniforms.uGrass = { value: textures.grass };
    shader.uniforms.uRock = { value: textures.rock };
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\n" + terrainParsVert)
      .replace("#include <begin_vertex>", "#include <begin_vertex>\n" + terrainVertMain);
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\n" + terrainParsFrag)
      .replace("vec4 diffuseColor = vec4( diffuse, opacity );", terrainAlbedoFrag)
      .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\n" + terrainRoughnessFrag);
  };
  mat.customProgramCacheKey = () => "tidelight-terrain";
  return mat;
}

export class Terrain {
  readonly group = new THREE.Group();
  readonly main: THREE.Mesh;
  readonly satellites: THREE.Mesh[] = [];
  private readonly mat: THREE.MeshStandardMaterial;

  constructor(
    quality: Quality,
    textures: { sand: THREE.Texture; grass: THREE.Texture; rock: THREE.Texture },
    slots: { x: number; z: number; radius: number; seed: number }[],
  ) {
    this.mat = makeTerrainMaterial(textures);

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
    mesh.position.y = THREE.MathUtils.lerp(-6.5, 0, rise);
    mesh.visible = rise > 0.02;
  }
}
