import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import type { Quality } from "../game/quality";
import { mainHeight } from "./height";

// Direction toward the low dusk sun (south-west) — used to bake a warm rim into vertex colors.
const TO_SUN = new THREE.Vector3(-0.45, 0.35, -0.82).normalize();
const UNDERSIDE = new THREE.Color(0x2a4136);
const RIM = new THREE.Color(0xffd9a0);
const TRUNK = new THREE.Color(0x7a5533);
const TRUNK_DARK = new THREE.Color(0x46311d);
const PALM_TRUNK = new THREE.Color(0x9a7a4e);
const CANOPY_KINDS = [
  new THREE.Color(0x7bb35a), // green-gold
  new THREE.Color(0xc9c34e), // gold
  new THREE.Color(0xe8955c), // warm autumn accent
];
const PINE = new THREE.Color(0x35734b);
const PINE_TOP = new THREE.Color(0x6aa452);
const BUSH = new THREE.Color(0x6fa84f);
const FROND = new THREE.Color(0x84b350);
const FROND_TIP = new THREE.Color(0xc9ae4e);
const GRASS_BASE = new THREE.Color(0x2e5b33);
const GRASS_TIP = new THREE.Color(0xa7c04a);
const FLOWER_TINTS = [0xffd9e6, 0xffb347, 0xfdf3ff, 0xe87f9a, 0xf2e28a];

const MERGED_WIND = `#include <begin_vertex>
{
  float vph = position.x * 0.55 + position.z * 0.41;
  float vg = sin(uTime * 1.25 + vph) + 0.45 * sin(uTime * 2.63 + vph * 1.7);
  transformed.x += vg * aSway;
  transformed.z += (cos(uTime * 1.02 + vph) + 0.35 * sin(uTime * 3.1 + vph * 2.3)) * aSway * 0.65;
  transformed.y += sin(uTime * 2.2 + vph * 1.3) * aSway * 0.2;
}`;

const INSTANCED_WIND = `#include <begin_vertex>
#ifdef USE_INSTANCING
{
  float vph = instanceMatrix[3][0] * 0.8 + instanceMatrix[3][2] * 0.63;
  float vw = position.y * position.y * 1.3;
  transformed.x += (sin(uTime * 2.1 + vph) + 0.5 * sin(uTime * 3.7 + vph * 1.9)) * vw * 0.45;
  transformed.z += cos(uTime * 1.7 + vph) * vw * 0.3;
}
#endif`;

function rng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type ColorFn = (p: THREE.Vector3, n: THREE.Vector3, h: number) => THREE.Color;
type SwayFn = (p: THREE.Vector3) => number;

/** Bakes per-vertex color + sway weight. h = normalized height within the primitive's bbox. */
function paint(geo: THREE.BufferGeometry, colorFn: ColorFn, swayFn: SwayFn): THREE.BufferGeometry {
  const pos = geo.attributes.position;
  const nor = geo.attributes.normal;
  geo.computeBoundingBox();
  const bb = geo.boundingBox!;
  const span = Math.max(bb.max.y - bb.min.y, 1e-5);
  const colors = new Float32Array(pos.count * 3);
  const sway = new Float32Array(pos.count);
  const p = new THREE.Vector3();
  const n = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    p.fromBufferAttribute(pos, i);
    n.fromBufferAttribute(nor, i);
    const c = colorFn(p, n, (p.y - bb.min.y) / span);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
    sway[i] = swayFn(p);
  }
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geo.setAttribute("aSway", new THREE.BufferAttribute(sway, 1));
  return geo;
}

function foliageColor(base: THREE.Color): ColorFn {
  return (_p, n, h) => {
    const c = base.clone();
    c.lerp(UNDERSIDE, (1 - h) * 0.55);
    const rim = Math.max(n.dot(TO_SUN), 0);
    c.lerp(RIM, rim * rim * 0.42);
    return c;
  };
}

function barkColor(base: THREE.Color, dark: THREE.Color): ColorFn {
  return (_p, n, h) => {
    const c = base.clone();
    c.lerp(dark, (1 - h) * 0.6);
    const rim = Math.max(n.dot(TO_SUN), 0);
    c.lerp(RIM, rim * rim * 0.22);
    return c;
  };
}

function treeSway(baseY: number, treeH: number, amt: number): SwayFn {
  return (p) => {
    const t = Math.min(Math.max((p.y - baseY) / treeH, 0), 1);
    return amt * Math.pow(t, 1.5);
  };
}

export class Vegetation {
  readonly group = new THREE.Group();
  private readonly time = { value: 0 };
  private external = false;

  constructor(quality: Quality) {
    const solid: THREE.BufferGeometry[] = [];
    const fronds: THREE.BufferGeometry[] = [];
    const r = rng(1337);

    // Round layered-canopy trees: grove on the hill flank, west meadow, pair framing the dock approach.
    const canopies: [number, number, number, number][] = [
      // hill-flank grove (hill knoll near 5,-11; lighthouse at 8,-18)
      [12, -4, 1.15, 0], [15.5, -8, 1.0, 1], [10.5, -12, 0.9, 0], [18, -3, 0.85, 2],
      [13.5, -14, 0.95, 0], [8.5, -5, 1.05, 0], [16.5, -12, 0.8, 1],
      // west meadow
      [-14, -8, 1.1, 0], [-17.5, -2, 0.9, 1], [-11, -14, 0.85, 0], [-19, 8, 1.0, 2],
      [-14.5, 14, 0.9, 0], [-8, -20, 0.8, 0],
      // east and north edges
      [26, 0, 0.9, 1], [23, -6, 0.85, 0], [-4, -24, 0.9, 0], [3, -26, 0.8, 2],
      // pair framing the dock approach (path corridor is |x|<2, z 11..33)
      [-5.6, 19, 1.2, 0], [5.8, 17.5, 1.1, 1], [-7.5, 13, 0.7, 0], [7, 11, 0.65, 0],
    ];
    for (const [x, z, sc, kind] of canopies) this.canopyTree(solid, x, z, sc, kind, r);

    // Small pines clustered near the hill top.
    const pines: [number, number, number][] = [
      [4, -10, 1.1], [6.5, -12.5, 0.9], [2.5, -13.5, 1.0], [5.5, -8, 0.8],
      [2.8, -7, 0.9], [7.6, -10.5, 0.7], [0.8, -11, 1.05], [4.5, -15, 0.75],
    ];
    for (const [x, z, sc] of pines) this.pine(solid, x, z, sc, r);

    // Curved-trunk palms along the beach (umbrellas near x 8..16, z 28..36 — kept clear).
    const palms: [number, number][] = [
      [6.8, 31.5], [17, 30.5], [-9, 26.5], [21, 22], [-14, 19], [12.5, 24.5], [25, 12],
    ];
    for (const [x, z] of palms) this.palm(solid, fronds, x, z, r);

    // Bushes tucked near paths and building bases.
    const bushes: [number, number][] = [
      [-3.8, 27], [4.6, 21.5], [-6.8, 16], [9, 8], [18.5, 5], [6, -16],
      [-12, 4], [14, 16], [-16, -12], [20, -10], [3, -21], [-9, -17],
    ];
    for (const [x, z] of bushes) this.bush(solid, x, z, r);

    const solidMat = new THREE.MeshToonMaterial({ vertexColors: true });
    this.windify(solidMat, false);
    const solidGeo = mergeGeometries(solid, false);
    const solidMesh = new THREE.Mesh(solidGeo, solidMat);
    solidMesh.castShadow = true;
    solidMesh.receiveShadow = true;
    // Self-updating wind clock: no external wiring required, overridden by update(t) if called.
    solidMesh.onBeforeRender = () => {
      if (!this.external) this.time.value = performance.now() * 0.001;
    };
    this.group.add(solidMesh);

    if (fronds.length) {
      const frondMat = new THREE.MeshToonMaterial({ vertexColors: true, side: THREE.DoubleSide });
      this.windify(frondMat, false);
      const frondMesh = new THREE.Mesh(mergeGeometries(fronds, false), frondMat);
      frondMesh.castShadow = true;
      frondMesh.receiveShadow = true;
      this.group.add(frondMesh);
    }

    this.group.add(this.grass(quality.grass, r));
    this.group.add(this.flowers(Math.max(48, Math.floor(quality.grass * 0.18)), r));
  }

  /** Optional external wind clock (seconds). Wind is otherwise self-updating. */
  update(t: number): void {
    this.external = true;
    this.time.value = t;
  }

  private windify(mat: THREE.Material, instanced: boolean): void {
    mat.onBeforeCompile = (s) => {
      s.uniforms.uTime = this.time;
      s.vertexShader = s.vertexShader
        .replace(
          "#include <common>",
          `#include <common>\nuniform float uTime;\n${instanced ? "" : "attribute float aSway;"}`,
        )
        .replace("#include <begin_vertex>", instanced ? INSTANCED_WIND : MERGED_WIND);
    };
    mat.customProgramCacheKey = () => (instanced ? "veg-wind-i" : "veg-wind-m");
  }

  private canopyTree(out: THREE.BufferGeometry[], x: number, z: number, sc: number, kind: number, r: () => number): void {
    const y = mainHeight(x, z);
    if (y < 0.55) return;
    const trunkH = (1.7 + r() * 0.6) * sc;
    const treeH = trunkH + 2.2 * sc;
    const sway = treeSway(y, treeH, 0.075 * sc);
    const leanA = r() * Math.PI * 2;
    const lean = 0.05 + r() * 0.12;

    const trunk = new THREE.CylinderGeometry(0.09 * sc, 0.21 * sc, trunkH, 7);
    trunk.translate(0, trunkH * 0.5, 0);
    trunk.rotateZ(lean);
    trunk.rotateY(leanA);
    trunk.translate(x, y - 0.15, z);
    out.push(paint(trunk, barkColor(TRUNK, TRUNK_DARK), sway));

    const base = CANOPY_KINDS[kind % CANOPY_KINDS.length];
    const layers = r() < 0.35 ? 2 : 3;
    const yaw = r() * Math.PI * 2;
    const tiltX = Math.cos(leanA) * lean * trunkH;
    const tiltZ = -Math.sin(leanA) * lean * trunkH;
    let cy = y + trunkH * 0.88;
    for (let L = 0; L < layers; L++) {
      const rad = sc * [1.2, 0.92, 0.64][L] * (0.88 + r() * 0.24);
      const blob = new THREE.SphereGeometry(1, 9, 7);
      blob.scale(rad * (0.95 + r() * 0.1), rad * 0.68, rad * (0.9 + r() * 0.14));
      const spread = L === 0 ? 0.1 * sc : (0.34 - L * 0.08) * sc;
      const a = yaw + L * 2.4 + r() * 0.5;
      cy += L === 0 ? rad * 0.36 : rad * 0.62;
      blob.translate(x + tiltX + Math.cos(a) * spread, cy, z + tiltZ + Math.sin(a) * spread);
      const layerC = base.clone().offsetHSL((r() - 0.5) * 0.045, (r() - 0.5) * 0.1, (r() - 0.5) * 0.07);
      out.push(paint(blob, foliageColor(layerC), sway));
    }
  }

  private pine(out: THREE.BufferGeometry[], x: number, z: number, sc: number, r: () => number): void {
    const y = mainHeight(x, z);
    if (y < 0.55) return;
    const treeH = 2.9 * sc;
    const sway = treeSway(y, treeH, 0.05 * sc);
    const trunk = new THREE.CylinderGeometry(0.06 * sc, 0.14 * sc, 0.9 * sc, 6);
    trunk.translate(x, y + 0.35 * sc, z);
    out.push(paint(trunk, barkColor(TRUNK, TRUNK_DARK), sway));
    const tiers: [number, number, number][] = [
      [0.85, 1.35, 0.75], [0.62, 1.1, 1.5], [0.4, 0.95, 2.15],
    ];
    const jitter = (r() - 0.5) * 0.03;
    for (const [rad, h, cy] of tiers) {
      const cone = new THREE.ConeGeometry(rad * sc * (0.92 + r() * 0.16), h * sc, 8);
      cone.rotateY(r() * Math.PI);
      cone.translate(x + (r() - 0.5) * 0.08, y + cy * sc, z + (r() - 0.5) * 0.08);
      const c = PINE.clone().lerp(PINE_TOP, cy / 2.4).offsetHSL(jitter, 0, (r() - 0.5) * 0.05);
      out.push(paint(cone, foliageColor(c), sway));
    }
  }

  private palm(out: THREE.BufferGeometry[], fronds: THREE.BufferGeometry[], x: number, z: number, r: () => number): void {
    const h0 = mainHeight(x, z);
    if (h0 < 0.02) return;
    const y = Math.max(h0, 0.22) - 0.12;
    const H = 3.1 + r() * 1.3;
    const outLen = Math.hypot(x, z) || 1;
    const dx = x / outLen;
    const dz = z / outLen;
    const lean = 0.7 + r() * 0.7;
    const up = new THREE.Vector3(0, 1, 0);
    const treeSwayFn = treeSway(y, H + 1, 0.06);

    const pt = (t: number) => new THREE.Vector3(x + dx * lean * t * t, y + H * t, z + dz * lean * t * t);
    const segs = 5;
    for (let i = 0; i < segs; i++) {
      const a = pt(i / segs);
      const b = pt((i + 1) / segs);
      const dir = b.clone().sub(a);
      const len = dir.length();
      const seg = new THREE.CylinderGeometry(
        THREE.MathUtils.lerp(0.2, 0.1, (i + 1) / segs),
        THREE.MathUtils.lerp(0.2, 0.1, i / segs) * 1.12,
        len * 1.06,
        6,
      );
      const q = new THREE.Quaternion().setFromUnitVectors(up, dir.normalize());
      seg.applyQuaternion(q);
      const mid = a.clone().lerp(b, 0.5);
      seg.translate(mid.x, mid.y, mid.z);
      out.push(paint(seg, barkColor(PALM_TRUNK, TRUNK_DARK), treeSwayFn));
    }

    const crown = pt(1);
    for (let c = 0; c < 2; c++) {
      const nut = new THREE.SphereGeometry(0.13, 6, 5);
      nut.translate(crown.x + (r() - 0.5) * 0.3, crown.y - 0.12, crown.z + (r() - 0.5) * 0.3);
      out.push(paint(nut, barkColor(TRUNK_DARK, TRUNK_DARK), () => 0.05));
    }

    const count = 7;
    const frondLen = 2.2 + r() * 0.5;
    for (let f = 0; f < count; f++) {
      const frond = new THREE.PlaneGeometry(0.5, frondLen, 1, 5);
      frond.translate(0, frondLen * 0.5, 0);
      const pos = frond.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const t = pos.getY(i) / frondLen;
        pos.setX(i, pos.getX(i) * (1 - 0.68 * t));
        pos.setZ(i, pos.getZ(i) + t * t * 1.05);
      }
      frond.computeVertexNormals();
      frond.rotateX(1.05 + r() * 0.4);
      frond.rotateY((f / count) * Math.PI * 2 + r() * 0.5);
      frond.translate(crown.x, crown.y, crown.z);
      const baseC = FROND.clone().offsetHSL((r() - 0.5) * 0.04, 0, (r() - 0.5) * 0.06);
      const cr = crown.clone();
      fronds.push(paint(
        frond,
        (p, n) => {
          const t = Math.min(p.distanceTo(cr) / frondLen, 1);
          const c = baseC.clone().lerp(FROND_TIP, t * t);
          c.lerp(UNDERSIDE, 0.18);
          const rim = Math.max(n.dot(TO_SUN), 0);
          c.lerp(RIM, rim * rim * 0.5);
          return c;
        },
        (p) => {
          const t = Math.min(p.distanceTo(cr) / frondLen, 1);
          return 0.05 + t * t * 0.13;
        },
      ));
    }
  }

  private bush(out: THREE.BufferGeometry[], x: number, z: number, r: () => number): void {
    const y = mainHeight(x, z);
    if (y < 0.5) return;
    const lobes = 1 + (r() < 0.5 ? 1 : 0);
    for (let i = 0; i <= lobes; i++) {
      const rad = 0.42 + r() * 0.4;
      const blob = new THREE.SphereGeometry(1, 8, 6);
      blob.scale(rad, rad * 0.62, rad * (0.85 + r() * 0.3));
      blob.rotateY(r() * Math.PI);
      blob.translate(x + (r() - 0.5) * rad * 1.4, y + rad * 0.32, z + (r() - 0.5) * rad * 1.4);
      const c = BUSH.clone().offsetHSL((r() - 0.5) * 0.05, (r() - 0.5) * 0.12, (r() - 0.5) * 0.08);
      out.push(paint(blob, foliageColor(c), () => 0.015 + r() * 0.02));
    }
  }

  /** Grassy ground above the beach line, off the dock/path corridor and building footprints. */
  private open(x: number, z: number, y: number): boolean {
    if (y < 0.68 || y > 7.2) return false;
    if (Math.abs(x) < 3.6 && z > 8 && z < 36) return false; // dock + path corridor
    if (Math.hypot(x - 22, z - 8) < 6.5) return false; // warehouse
    if (Math.hypot(x + 26, z - 6) < 5) return false; // crane
    if (Math.hypot(x - 8, z + 18) < 3.2) return false; // lighthouse
    return true;
  }

  private grass(count: number, r: () => number): THREE.InstancedMesh {
    const geo = this.tuftGeometry(r);
    const mat = new THREE.MeshToonMaterial({ vertexColors: true, side: THREE.DoubleSide });
    this.windify(mat, true);
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const upAxis = new THREE.Vector3(0, 1, 0);
    const col = new THREE.Color();
    let placed = 0;
    for (let tries = 0; tries < count * 6 && placed < count; tries++) {
      const a = r() * Math.PI * 2;
      const d = Math.sqrt(r()) * 36;
      const x = Math.cos(a) * d;
      const z = Math.sin(a) * d;
      const y = mainHeight(x, z);
      if (!this.open(x, z, y)) continue;
      q.setFromAxisAngle(upAxis, r() * Math.PI * 2);
      const s = 0.7 + r() * 0.7;
      m.compose(new THREE.Vector3(x, y - 0.03, z), q, new THREE.Vector3(s, s * (0.8 + r() * 0.5), s));
      mesh.setMatrixAt(placed, m);
      col.setHSL(0.19 + r() * 0.09, 0.5 + r() * 0.2, 0.5 + r() * 0.16);
      mesh.setColorAt(placed, col);
      placed++;
    }
    mesh.count = placed;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    return mesh;
  }

  private tuftGeometry(r: () => number): THREE.BufferGeometry {
    const blades = 6;
    const pos: number[] = [];
    const nor: number[] = [];
    const col: number[] = [];
    for (let b = 0; b < blades; b++) {
      const a = (b / blades) * Math.PI * 2 + r() * 0.9;
      const d = 0.02 + r() * 0.07;
      const cx = Math.cos(a) * d;
      const cz = Math.sin(a) * d;
      const h = 0.3 + r() * 0.28;
      const w = 0.035 + r() * 0.02;
      const lx = Math.cos(a) * (0.08 + r() * 0.14);
      const lz = Math.sin(a) * (0.08 + r() * 0.14);
      const px = -Math.sin(a) * w;
      const pz = Math.cos(a) * w;
      pos.push(cx - px, 0, cz - pz, cx + px, 0, cz + pz, cx + lx, h, cz + lz);
      for (let k = 0; k < 3; k++) nor.push(0.15, 0.98, 0.15);
      const tip = GRASS_TIP.clone().offsetHSL((r() - 0.5) * 0.06, 0, (r() - 0.5) * 0.1);
      col.push(GRASS_BASE.r, GRASS_BASE.g, GRASS_BASE.b, GRASS_BASE.r, GRASS_BASE.g, GRASS_BASE.b, tip.r, tip.g, tip.b);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
    return geo;
  }

  private flowers(count: number, r: () => number): THREE.InstancedMesh {
    const stem = new THREE.PlaneGeometry(0.035, 0.3);
    stem.translate(0, 0.15, 0);
    const petal = new THREE.PlaneGeometry(0.18, 0.18);
    petal.rotateX(-Math.PI / 2);
    petal.translate(0, 0.3, 0);
    const petal2 = petal.clone();
    petal2.rotateY(Math.PI / 4);
    petal2.translate(0, 0.015, 0);
    const stemC = new THREE.Color(0x2f4a2c);
    for (const g of [stem, petal, petal2]) {
      const isStem = g === stem;
      const colors = new Float32Array(g.attributes.position.count * 3);
      for (let i = 0; i < colors.length; i += 3) {
        colors[i] = isStem ? stemC.r : 1;
        colors[i + 1] = isStem ? stemC.g : 1;
        colors[i + 2] = isStem ? stemC.b : 1;
      }
      g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    }
    const geo = mergeGeometries([stem, petal, petal2], false);
    const mat = new THREE.MeshToonMaterial({ vertexColors: true, side: THREE.DoubleSide });
    this.windify(mat, true);
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const upAxis = new THREE.Vector3(0, 1, 0);
    const col = new THREE.Color();
    // Cluster flowers around a few valid seed points.
    const seeds: [number, number][] = [];
    while (seeds.length < 9) {
      const a = r() * Math.PI * 2;
      const d = 6 + Math.sqrt(r()) * 28;
      const x = Math.cos(a) * d;
      const z = Math.sin(a) * d;
      if (this.open(x, z, mainHeight(x, z))) seeds.push([x, z]);
    }
    let placed = 0;
    for (let tries = 0; tries < count * 6 && placed < count; tries++) {
      const [sx, sz] = seeds[Math.floor(r() * seeds.length)];
      const x = sx + (r() - 0.5) * 5;
      const z = sz + (r() - 0.5) * 5;
      const y = mainHeight(x, z);
      if (!this.open(x, z, y)) continue;
      q.setFromAxisAngle(upAxis, r() * Math.PI * 2);
      const s = 0.75 + r() * 0.6;
      m.compose(new THREE.Vector3(x, y - 0.02, z), q, new THREE.Vector3(s, s, s));
      mesh.setMatrixAt(placed, m);
      col.set(FLOWER_TINTS[Math.floor(r() * FLOWER_TINTS.length)]);
      mesh.setColorAt(placed, col);
      placed++;
    }
    mesh.count = placed;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    return mesh;
  }
}
