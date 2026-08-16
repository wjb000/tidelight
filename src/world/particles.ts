import * as THREE from "three";
import type { Quality } from "../game/quality";
import { mainHeight } from "./height";

const TAU = Math.PI * 2;
const EXTRA_CAP = 240;
const LIGHTHOUSE = { x: 8, z: -18 };

const gullVert = /* glsl */ `
uniform float uTime;
attribute float aTip;
attribute float iPhase;
varying float vLit;
varying float vFade;
void main() {
  float amp = 0.45 + 0.55 * smoothstep(-0.2, 0.4, sin(uTime * 0.37 + iPhase * 61.0));
  float flap = sin(uTime * (6.5 + iPhase * 2.5) + iPhase * 40.0) * amp;
  vec3 p = position;
  p.y += aTip * flap * 0.46;
  p.x -= p.x * aTip * abs(flap) * 0.22;
  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vec4 mv = viewMatrix * wp;
  vLit = flap;
  vFade = clamp(1.0 - (-mv.z - 70.0) / 120.0, 0.0, 1.0);
  gl_Position = projectionMatrix * mv;
}
`;

const gullFrag = /* glsl */ `
varying float vLit;
varying float vFade;
void main() {
  if (vFade < 0.02) discard;
  vec3 top = vec3(0.80, 0.79, 0.92);
  vec3 under = vec3(1.0, 0.85, 0.63) * 1.15;
  vec3 c = mix(top, under, clamp(0.55 + vLit * 0.5, 0.0, 1.0));
  gl_FragColor = vec4(c, vFade * 0.95);
}
`;

const fireflyVert = /* glsl */ `
uniform float uTime;
attribute float aPhase;
attribute float aSize;
varying float vTw;
void main() {
  vec3 p = position;
  float t = uTime * 0.4 + aPhase * 6.2831;
  p.x += sin(t * 1.7 + aPhase * 12.0) * 0.7 + sin(t * 0.53) * 1.1;
  p.y += sin(t * 1.13 + aPhase * 9.0) * 0.5;
  p.z += cos(t * 1.41 + aPhase * 7.0) * 0.7 + cos(t * 0.61) * 1.1;
  float tw = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(uTime * (1.6 + aPhase * 1.8) + aPhase * 50.0), 2.0);
  vTw = tw;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = min(aSize * (0.55 + tw) * (240.0 / max(-mv.z, 6.0)), 48.0);
  gl_Position = projectionMatrix * mv;
}
`;

const fireflyFrag = /* glsl */ `
varying float vTw;
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float d = length(q) * 2.0;
  float a = smoothstep(1.0, 0.12, d);
  vec3 c = mix(vec3(1.0, 0.70, 0.28), vec3(1.0, 0.94, 0.74), smoothstep(0.6, 0.0, d));
  gl_FragColor = vec4(c * (0.55 + vTw * 0.9), a * vTw);
}
`;

const smokeVert = /* glsl */ `
uniform float uTime;
attribute float aPhase;
varying float vA;
varying float vLife;
void main() {
  float life = fract(uTime * 0.075 + aPhase);
  vec3 p = position;
  p.y += life * 7.5;
  p.x += life * 2.2 + sin(life * 7.0 + aPhase * 31.0) * 0.35 * life;
  p.z += life * 1.1 + cos(life * 6.0 + aPhase * 17.0) * 0.35 * life;
  vLife = life;
  vA = smoothstep(0.0, 0.12, life) * (1.0 - smoothstep(0.45, 1.0, life)) * 0.32;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = min((0.7 + life * 3.0) * (720.0 / max(-mv.z, 6.0)), 220.0);
  gl_Position = projectionMatrix * mv;
}
`;

const smokeFrag = /* glsl */ `
varying float vA;
varying float vLife;
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float d = length(q) * 2.0;
  float a = smoothstep(1.0, 0.25, d) * vA;
  if (a < 0.003) discard;
  vec3 c = mix(vec3(0.42, 0.39, 0.53), vec3(0.87, 0.73, 0.67), smoothstep(0.15, 0.9, vLife));
  gl_FragColor = vec4(c, a);
}
`;

const flutterVert = /* glsl */ `
uniform float uTime;
attribute vec3 aAnchor;
attribute float aPhase;
attribute float aTint;
varying float vShade;
varying float vTint;
void main() {
  float T = uTime * 0.55 + aPhase * 39.0;
  float flap = sin(uTime * 13.0 + aPhase * 50.0);
  vec3 p = position;
  p.y += abs(p.x) * flap * 2.2;
  p.x *= 0.75 + 0.25 * (1.0 - abs(flap));
  float yaw = aPhase * 6.2831 + T * 0.8;
  float cy = cos(yaw);
  float sy = sin(yaw);
  p = vec3(p.x * cy + p.z * sy, p.y, -p.x * sy + p.z * cy);
  vec3 off = vec3(
    sin(T * 0.9) * 1.2 + sin(T * 2.3) * 0.25,
    0.5 + sin(T * 1.4) * 0.4 + abs(flap) * 0.06,
    cos(T * 0.7) * 1.2 + cos(T * 1.9) * 0.25
  );
  vShade = 0.68 + 0.32 * abs(flap);
  vTint = aTint;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(aAnchor + off + p, 1.0);
}
`;

const flutterFrag = /* glsl */ `
varying float vShade;
varying float vTint;
void main() {
  vec3 a = vec3(0.91, 0.58, 0.36);
  vec3 b = vec3(0.95, 0.63, 0.71);
  gl_FragColor = vec4(mix(a, b, vTint) * vShade, 1.0);
}
`;

const sprayVert = /* glsl */ `
uniform float uTime;
attribute float aPhase;
attribute float aSize;
varying float vA;
void main() {
  float c = fract(uTime * 0.45 + aPhase);
  vec3 p = position;
  p.y = 0.08 + c * (0.5 + aSize * 0.9);
  p.xz *= 1.0 + c * 0.02;
  vA = smoothstep(0.0, 0.1, c) * (1.0 - c) * 0.65;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = min(aSize * (0.6 + c) * (200.0 / max(-mv.z, 6.0)), 40.0);
  gl_Position = projectionMatrix * mv;
}
`;

const sprayFrag = /* glsl */ `
varying float vA;
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float d = length(q) * 2.0;
  float a = smoothstep(1.0, 0.2, d) * vA;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vec3(0.92, 1.0, 0.97), a);
}
`;

function birdGeometry(maxInstances: number): THREE.BufferGeometry {
  const geo = new THREE.BufferGeometry();
  // two triangles: left wing + right wing, forward = +Z
  const pos = new Float32Array([
    0, 0, 0.42, 0, 0, -0.16, -0.62, 0.06, -0.08,
    0, 0, 0.42, 0.62, 0.06, -0.08, 0, 0, -0.16,
  ]);
  const tip = new Float32Array([0, 0, 1, 0, 1, 0]);
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("aTip", new THREE.BufferAttribute(tip, 1));
  const phase = new Float32Array(maxInstances);
  for (let i = 0; i < maxInstances; i++) phase[i] = Math.random();
  geo.setAttribute("iPhase", new THREE.InstancedBufferAttribute(phase, 1));
  return geo;
}

const noRaycast = (): void => {};

export class Particles {
  readonly gulls: THREE.Group;
  readonly spray: THREE.Points;
  private readonly uTime = { value: 0 };
  private readonly dummy = new THREE.Object3D();
  private readonly flock: THREE.InstancedMesh;
  private readonly extraFlock: THREE.InstancedMesh;
  private readonly flockN: number;
  private readonly ang: Float32Array;
  private readonly rad: Float32Array;
  private readonly spd: Float32Array;
  private readonly hgt: Float32Array;
  private readonly scl: Float32Array;
  private readonly cenX: Float32Array;
  private readonly cenZ: Float32Array;
  private readonly extraPrev = new Float32Array(EXTRA_CAP * 3);
  private readonly extraYaw = new Float32Array(EXTRA_CAP);
  private readonly extraRoll = new Float32Array(EXTRA_CAP);
  private extraLevel = 0;

  constructor(quality: Quality) {
    this.gulls = new THREE.Group();
    this.dummy.rotation.order = "YXZ";

    // --- gull flock: instanced two-triangle birds, vertex-shader flap ---
    this.flockN = Math.min(quality.particles, 96);
    const geo = birdGeometry(EXTRA_CAP);
    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: this.uTime },
      vertexShader: gullVert,
      fragmentShader: gullFrag,
      transparent: true,
      side: THREE.DoubleSide,
    });
    this.flock = new THREE.InstancedMesh(geo, mat, this.flockN);
    this.flock.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.flock.frustumCulled = false;
    this.flock.raycast = noRaycast;
    this.extraFlock = new THREE.InstancedMesh(geo, mat, EXTRA_CAP);
    this.extraFlock.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.extraFlock.frustumCulled = false;
    this.extraFlock.raycast = noRaycast;
    this.extraFlock.count = 0;
    this.gulls.add(this.flock, this.extraFlock);

    this.ang = new Float32Array(this.flockN);
    this.rad = new Float32Array(this.flockN);
    this.spd = new Float32Array(this.flockN);
    this.hgt = new Float32Array(this.flockN);
    this.scl = new Float32Array(this.flockN);
    this.cenX = new Float32Array(this.flockN);
    this.cenZ = new Float32Array(this.flockN);
    for (let i = 0; i < this.flockN; i++) {
      this.ang[i] = Math.random() * TAU;
      this.scl[i] = 0.8 + Math.random() * 0.5;
      const lighthouse = i % 10 < 7;
      const r = lighthouse ? 10 + Math.random() * 16 : 30 + Math.random() * 18;
      this.rad[i] = r;
      this.cenX[i] = lighthouse ? LIGHTHOUSE.x : 2;
      this.cenZ[i] = lighthouse ? LIGHTHOUSE.z : 2;
      this.hgt[i] = lighthouse ? 13 + Math.random() * 7 : 10 + Math.random() * 6;
      const linear = 5.5 + Math.random() * 3.5;
      this.spd[i] = (linear / r) * (lighthouse || Math.random() < 0.5 ? 1 : -1);
    }

    // --- fireflies / dust motes near lanterns + trees ---
    const anchors: [number, number, number][] = [
      [-3.6, 3.25, 30], [3.6, 3.25, 34], [18, 2.75, 4], [-12, 2.95, 10], [8, 2.75, -10],
    ];
    const treeSpots = [
      [12, -8], [16, -14], [-10, -16], [14, 18], [8, 14],
      [-6, 16], [10, 22], [-14, 8], [18, 8], [-16, 20],
    ];
    for (const [x, z] of treeSpots) {
      const y = mainHeight(x, z);
      if (y >= 0.4) anchors.push([x, y + 2.1, z]);
    }
    const fn = Math.round(quality.particles * 0.55);
    const fPos = new Float32Array(fn * 3);
    const fPhase = new Float32Array(fn);
    const fSize = new Float32Array(fn);
    for (let i = 0; i < fn; i++) {
      const [ax, ay, az] = anchors[i % anchors.length];
      const a = Math.random() * TAU;
      const r = 0.4 + Math.random() * 1.9;
      fPos[i * 3] = ax + Math.cos(a) * r;
      fPos[i * 3 + 1] = ay + (Math.random() - 0.4) * 1.4;
      fPos[i * 3 + 2] = az + Math.sin(a) * r;
      fPhase[i] = Math.random();
      fSize[i] = 0.5 + Math.random() * 0.6;
    }
    const fGeo = new THREE.BufferGeometry();
    fGeo.setAttribute("position", new THREE.BufferAttribute(fPos, 3));
    fGeo.setAttribute("aPhase", new THREE.BufferAttribute(fPhase, 1));
    fGeo.setAttribute("aSize", new THREE.BufferAttribute(fSize, 1));
    const fireflies = new THREE.Points(
      fGeo,
      new THREE.ShaderMaterial({
        uniforms: { uTime: this.uTime },
        vertexShader: fireflyVert,
        fragmentShader: fireflyFrag,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    fireflies.frustumCulled = false;
    fireflies.raycast = noRaycast;
    this.gulls.add(fireflies);

    // --- chimney smoke above the warehouse roof (warehouse at 22,0,8; roof y~6.5) ---
    const sn = 26;
    const sPos = new Float32Array(sn * 3);
    const sPhase = new Float32Array(sn);
    for (let i = 0; i < sn; i++) {
      sPos[i * 3] = 26.5 + (Math.random() - 0.5) * 0.5;
      sPos[i * 3 + 1] = 6.8;
      sPos[i * 3 + 2] = 10.4 + (Math.random() - 0.5) * 0.5;
      sPhase[i] = i / sn;
    }
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
    sGeo.setAttribute("aPhase", new THREE.BufferAttribute(sPhase, 1));
    const smoke = new THREE.Points(
      sGeo,
      new THREE.ShaderMaterial({
        uniforms: { uTime: this.uTime },
        vertexShader: smokeVert,
        fragmentShader: smokeFrag,
        transparent: true,
        depthWrite: false,
      }),
    );
    smoke.frustumCulled = false;
    smoke.raycast = noRaycast;
    this.gulls.add(smoke);

    // --- butterflies fluttering near greenery, fully shader-animated ---
    const bn = quality.particles >= 160 ? 14 : 8;
    const bGeo = new THREE.PlaneGeometry(0.3, 0.22, 2, 1);
    bGeo.rotateX(-Math.PI / 2);
    const bAnchor = new Float32Array(bn * 3);
    const bPhase = new Float32Array(bn);
    const bTint = new Float32Array(bn);
    const bSpots = [
      [8, 14], [-6, 16], [10, 22], [-5.2, 24], [3, 26], [14, 18], [6, -12], [-14, 8],
    ];
    for (let i = 0; i < bn; i++) {
      const [x, z] = bSpots[i % bSpots.length];
      const y = mainHeight(x, z);
      bAnchor[i * 3] = x + (Math.random() - 0.5) * 2;
      bAnchor[i * 3 + 1] = (y >= 0.4 ? y : 0.7) + 0.9;
      bAnchor[i * 3 + 2] = z + (Math.random() - 0.5) * 2;
      bPhase[i] = Math.random();
      bTint[i] = Math.random();
    }
    bGeo.setAttribute("aAnchor", new THREE.InstancedBufferAttribute(bAnchor, 3));
    bGeo.setAttribute("aPhase", new THREE.InstancedBufferAttribute(bPhase, 1));
    bGeo.setAttribute("aTint", new THREE.InstancedBufferAttribute(bTint, 1));
    const butterflies = new THREE.InstancedMesh(
      bGeo,
      new THREE.ShaderMaterial({
        uniforms: { uTime: this.uTime },
        vertexShader: flutterVert,
        fragmentShader: flutterFrag,
        side: THREE.DoubleSide,
      }),
      bn,
    );
    butterflies.frustumCulled = false;
    butterflies.raycast = noRaycast;
    this.gulls.add(butterflies);

    // --- shoreline spray: static seeds, shader-driven bursts ---
    const spn = 160;
    const spPos = new Float32Array(spn * 3);
    const spPhase = new Float32Array(spn);
    const spSize = new Float32Array(spn);
    for (let i = 0; i < spn; i++) {
      const a = (i / spn) * TAU + Math.random() * 0.06;
      const r = 43.5 + (Math.random() - 0.5) * 4;
      spPos[i * 3] = Math.cos(a) * r;
      spPos[i * 3 + 1] = 0.1;
      spPos[i * 3 + 2] = Math.sin(a) * r;
      spPhase[i] = Math.random();
      spSize[i] = 0.6 + Math.random() * 0.7;
    }
    const spGeo = new THREE.BufferGeometry();
    spGeo.setAttribute("position", new THREE.BufferAttribute(spPos, 3));
    spGeo.setAttribute("aPhase", new THREE.BufferAttribute(spPhase, 1));
    spGeo.setAttribute("aSize", new THREE.BufferAttribute(spSize, 1));
    this.spray = new THREE.Points(
      spGeo,
      new THREE.ShaderMaterial({
        uniforms: { uTime: this.uTime },
        vertexShader: sprayVert,
        fragmentShader: sprayFrag,
        transparent: true,
        depthWrite: false,
      }),
    );
    this.spray.frustumCulled = false;
    this.spray.raycast = noRaycast;
  }

  applyFlock(points: Float32Array): void {
    const n = Math.min(Math.floor(points.length / 3), EXTRA_CAP);
    const shown = Math.min(n, 60 + this.extraLevel * 90);
    const d = this.dummy;
    for (let i = 0; i < shown; i++) {
      const ix = i * 3;
      const x = points[ix];
      const y = points[ix + 1];
      const z = points[ix + 2];
      const dx = x - this.extraPrev[ix];
      const dz = z - this.extraPrev[ix + 2];
      if (dx * dx + dz * dz > 1e-6) {
        const yaw = Math.atan2(dx, dz);
        let dy = yaw - this.extraYaw[i];
        if (dy > Math.PI) dy -= TAU;
        else if (dy < -Math.PI) dy += TAU;
        const target = Math.max(-0.55, Math.min(0.55, dy * 6));
        this.extraRoll[i] += (target - this.extraRoll[i]) * 0.15;
        this.extraYaw[i] = yaw;
        this.extraPrev[ix] = x;
        this.extraPrev[ix + 1] = y;
        this.extraPrev[ix + 2] = z;
      }
      d.position.set(x, y, z);
      d.rotation.set(0, this.extraYaw[i], this.extraRoll[i]);
      d.scale.setScalar(0.85);
      d.updateMatrix();
      this.extraFlock.setMatrixAt(i, d.matrix);
    }
    this.extraFlock.count = shown;
    this.extraFlock.instanceMatrix.needsUpdate = true;
  }

  update(t: number, extra: number): void {
    this.uTime.value = t;
    this.extraLevel = extra;
    const boost = 1 + Math.min(extra, 6) * 0.25;
    const d = this.dummy;
    for (let i = 0; i < this.flockN; i++) {
      const w = this.spd[i];
      this.ang[i] += w * 0.016 * boost;
      const a = this.ang[i];
      const r = this.rad[i] + Math.sin(t * 0.4 + i * 1.93) * 2.4;
      const sa = Math.sin(a);
      const ca = Math.cos(a);
      d.position.set(
        this.cenX[i] + ca * r,
        this.hgt[i] + Math.sin(t * 0.6 + i * 2.31) * 1.6,
        this.cenZ[i] + sa * r,
      );
      const dir = w > 0 ? 1 : -1;
      d.rotation.set(
        Math.cos(t * 0.6 + i * 2.31) * 0.08,
        Math.atan2(-sa * dir, ca * dir),
        -dir * 0.38 + Math.sin(t * 2.1 + i * 3.7) * 0.09,
      );
      d.scale.setScalar(this.scl[i]);
      d.updateMatrix();
      this.flock.setMatrixAt(i, d.matrix);
    }
    this.flock.instanceMatrix.needsUpdate = true;
  }
}
