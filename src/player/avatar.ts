import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

// ---------------------------------------------------------------------------
// Shared resources (one per page, reused by every avatar)
// ---------------------------------------------------------------------------

let gradient: THREE.DataTexture | null = null;
function toonGradient(): THREE.DataTexture {
  if (!gradient) {
    const data = new Uint8Array([96, 126, 178, 228, 255]);
    gradient = new THREE.DataTexture(data, 5, 1, THREE.RedFormat);
    gradient.minFilter = THREE.LinearFilter;
    gradient.magFilter = THREE.LinearFilter;
    gradient.needsUpdate = true;
  }
  return gradient;
}

function toonMat(color: THREE.ColorRepresentation, rim = 0.3): THREE.MeshToonMaterial {
  const m = new THREE.MeshToonMaterial({ color, gradientMap: toonGradient() });
  if (rim > 0) {
    m.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <fog_fragment>",
        `float tlRim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 3.0);
	gl_FragColor.rgb += vec3(1.0, 0.83, 0.6) * tlRim * ${rim.toFixed(3)};
	#include <fog_fragment>`,
      );
    };
    m.customProgramCacheKey = () => `tl-rim-${rim.toFixed(3)}`;
  }
  return m;
}

const geo = {
  body: new THREE.CapsuleGeometry(0.3, 0.28, 8, 24),
  belly: new THREE.SphereGeometry(0.24, 20, 14),
  head: new THREE.SphereGeometry(0.31, 26, 18),
  panel: new THREE.SphereGeometry(0.24, 20, 14),
  eye: new THREE.SphereGeometry(0.048, 12, 10),
  glint: new THREE.SphereGeometry(0.016, 8, 6),
  smile: new THREE.TorusGeometry(0.055, 0.012, 6, 16, Math.PI * 0.62),
  cheek: new THREE.SphereGeometry(0.04, 10, 8),
  arm: new THREE.CapsuleGeometry(0.085, 0.2, 6, 14),
  hand: new THREE.SphereGeometry(0.09, 14, 10),
  leg: new THREE.CapsuleGeometry(0.095, 0.14, 6, 14),
  foot: new THREE.SphereGeometry(0.11, 14, 10),
  capBand: new THREE.CylinderGeometry(0.2, 0.215, 0.1, 20),
  capTop: new THREE.CylinderGeometry(0.245, 0.245, 0.055, 20),
  capTrim: new THREE.TorusGeometry(0.205, 0.018, 8, 24),
  pom: new THREE.SphereGeometry(0.045, 10, 8),
  hood: new THREE.SphereGeometry(0.345, 22, 14, 0, Math.PI * 2, 0, Math.PI * 0.62),
  beanie: new THREE.SphereGeometry(0.3, 22, 14, 0, Math.PI * 2, 0, Math.PI * 0.55),
  brim: new THREE.TorusGeometry(0.275, 0.05, 10, 24),
  pack: new RoundedBoxGeometry(0.36, 0.42, 0.18, 3, 0.07),
  flap: new RoundedBoxGeometry(0.31, 0.16, 0.2, 3, 0.05),
  strap: new THREE.BoxGeometry(0.055, 0.32, 0.03),
  env: new RoundedBoxGeometry(0.26, 0.045, 0.18, 2, 0.015),
  stamp: new THREE.BoxGeometry(0.055, 0.02, 0.05),
  seal: new THREE.CylinderGeometry(0.026, 0.026, 0.02, 10),
};

const CREAM = 0xf4e6c4;
const INK = 0x2a2230;

// ---------------------------------------------------------------------------
// Avatar
// ---------------------------------------------------------------------------

export class Avatar {
  readonly group = new THREE.Group();
  readonly tag: THREE.Sprite;

  private rig = new THREE.Group();
  private torso = new THREE.Group();
  private armL = new THREE.Group();
  private armR = new THREE.Group();
  private legL = new THREE.Group();
  private legR = new THREE.Group();
  private held: THREE.Group;
  private bubble: THREE.Sprite;
  private bubbleUntil = 0;

  private t = Math.random() * 10;
  private phase = Math.random() * Math.PI * 2;
  private walkW = 0;
  private waveW = 0;
  private carryW = 0;

  constructor(
    readonly color: number,
    name: string,
    skin = 0,
  ) {
    this.build(color, Math.abs(skin) % 8);
    this.held = makeEnvelope();
    this.held.visible = false;
    this.torso.add(this.held);
    this.tag = makeTag(name, color);
    this.tag.position.set(0, 2.05, 0);
    this.bubble = makeBubble("");
    this.bubble.visible = false;
    this.bubble.position.set(0, 2.42, 0);
    this.group.add(this.rig, this.tag, this.bubble);
  }

  private build(color: number, hat: number): void {
    const jacket = new THREE.Color(color);
    const dark = jacket.clone().offsetHSL(0.01, 0.04, -0.17);
    const matJacket = toonMat(jacket);
    const matDark = toonMat(dark);
    const matCream = toonMat(CREAM);
    const matInk = toonMat(INK, 0);
    const matWhite = toonMat(0xfdfaf2, 0);
    const matBlush = toonMat(0xef987f, 0);
    const matLeather = toonMat(0x8a5a3c);
    const matAccent = toonMat(0xe8955c);

    const mesh = (g: THREE.BufferGeometry, m: THREE.Material): THREE.Mesh => {
      const o = new THREE.Mesh(g, m);
      o.castShadow = true;
      return o;
    };

    // torso bean
    const body = mesh(geo.body, matJacket);
    body.position.y = 0.78;
    body.scale.set(1, 1.05, 0.92);
    const belly = mesh(geo.belly, matCream);
    belly.position.set(0, 0.67, 0.12);
    belly.scale.set(0.95, 1.08, 0.62);
    // head + face
    const head = mesh(geo.head, matJacket);
    head.position.y = 1.26;
    head.scale.set(1, 0.94, 0.96);
    const panel = mesh(geo.panel, matCream);
    panel.position.set(0, 1.25, 0.205);
    panel.scale.set(0.95, 0.82, 0.5);
    const eyeL = mesh(geo.eye, matInk);
    eyeL.position.set(-0.095, 1.31, 0.3);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.095;
    const glintL = mesh(geo.glint, matWhite);
    glintL.position.set(-0.08, 1.33, 0.343);
    const glintR = glintL.clone();
    glintR.position.x = 0.11;
    const smile = mesh(geo.smile, matInk);
    smile.position.set(0, 1.2, 0.302);
    smile.rotation.z = Math.PI * 1.19;
    const cheekL = mesh(geo.cheek, matBlush);
    cheekL.position.set(-0.155, 1.225, 0.275);
    cheekL.scale.set(1, 0.68, 0.4);
    const cheekR = cheekL.clone();
    cheekR.position.x = 0.155;
    this.torso.add(body, belly, head, panel, eyeL, eyeR, glintL, glintR, smile, cheekL, cheekR);

    if (hat === 0) {
      const cap = new THREE.Group();
      cap.position.set(0, 1.51, 0.01);
      cap.rotation.set(-0.1, 0, 0.09);
      const band = mesh(geo.capBand, matWhite);
      const top = mesh(geo.capTop, matWhite);
      top.position.y = 0.07;
      const trim = mesh(geo.capTrim, toonMat(0x3a4a8c, 0));
      trim.rotation.x = Math.PI / 2;
      trim.position.y = -0.02;
      const pom = mesh(geo.pom, toonMat(0xd9534f, 0));
      pom.position.y = 0.115;
      cap.add(band, top, trim, pom);
      this.torso.add(cap);
    } else if (hat === 1) {
      const hood = mesh(geo.hood, matDark);
      hood.position.set(0, 1.3, -0.03);
      hood.rotation.x = -0.22;
      const tip = mesh(geo.pom, matDark);
      tip.position.set(0, 1.62, -0.18);
      this.torso.add(hood, tip);
    } else if (hat === 2) {
      const bean = mesh(geo.beanie, matAccent);
      bean.position.y = 1.4;
      bean.scale.set(1.03, 0.92, 1.03);
      const brim = mesh(geo.brim, matAccent);
      brim.rotation.x = Math.PI / 2;
      brim.position.y = 1.41;
      brim.scale.z = 0.55;
      const pom = mesh(geo.pom, matCream);
      pom.position.y = 1.68;
      pom.scale.setScalar(1.35);
      this.torso.add(bean, brim, pom);
    } else if (hat === 3) {
      const straw = mesh(geo.brim, toonMat(0xe8c37a, 0));
      straw.rotation.x = Math.PI / 2;
      straw.position.y = 1.48;
      straw.scale.set(1.15, 1.15, 0.4);
      const crown = mesh(geo.capTop, toonMat(0xf3d48a, 0));
      crown.position.y = 1.56;
      crown.scale.set(1.1, 1.4, 1.1);
      this.torso.add(straw, crown);
    } else if (hat === 4) {
      const bandana = mesh(geo.capBand, matAccent);
      bandana.position.set(0, 1.48, 0.02);
      bandana.scale.set(1.05, 0.7, 1.05);
      const tail = mesh(geo.stamp, matAccent);
      tail.position.set(-0.22, 1.42, -0.12);
      tail.scale.set(2.2, 1.4, 0.6);
      this.torso.add(bandana, tail);
    } else if (hat === 5) {
      const helm = mesh(geo.beanie, matDark);
      helm.position.y = 1.42;
      helm.scale.set(1.08, 0.72, 1.08);
      const visor = mesh(geo.brim, toonMat(0x2a2624, 0));
      visor.rotation.x = Math.PI / 2;
      visor.position.set(0, 1.4, 0.08);
      visor.scale.set(0.85, 0.85, 0.35);
      this.torso.add(helm, visor);
    } else if (hat === 6) {
      const flower = mesh(geo.pom, toonMat(0xd47aa0, 0));
      flower.position.set(0.2, 1.52, 0.1);
      flower.scale.setScalar(1.6);
      const leaf = mesh(geo.stamp, toonMat(0x3d7a6b, 0));
      leaf.position.set(0.14, 1.5, 0.08);
      this.torso.add(flower, leaf);
    } else {
      const earL = mesh(geo.pom, matJacket);
      earL.position.set(-0.18, 1.55, -0.02);
      earL.scale.set(1.1, 1.6, 0.7);
      const earR = earL.clone();
      earR.position.x = 0.18;
      this.torso.add(earL, earR);
    }

    // satchel
    const pack = mesh(geo.pack, matLeather);
    pack.position.set(0, 0.84, -0.34);
    const flap = mesh(geo.flap, matAccent);
    flap.position.set(0, 1.0, -0.33);
    const strapL = mesh(geo.strap, matLeather);
    strapL.position.set(-0.14, 0.95, 0.265);
    strapL.rotation.x = 0.12;
    const strapR = strapL.clone();
    strapR.position.x = 0.14;
    this.torso.add(pack, flap, strapL, strapR);

    // arms
    const buildArm = (side: number): THREE.Group => {
      const g = new THREE.Group();
      g.position.set(0.3 * side, 1.0, 0);
      const upper = mesh(geo.arm, matJacket);
      upper.position.y = -0.15;
      const hand = mesh(geo.hand, matCream);
      hand.position.y = -0.3;
      g.add(upper, hand);
      return g;
    };
    this.armL = buildArm(-1);
    this.armR = buildArm(1);
    this.torso.add(this.armL, this.armR);

    // legs
    const buildLeg = (side: number): THREE.Group => {
      const g = new THREE.Group();
      g.position.set(0.13 * side, 0.44, 0);
      const thigh = mesh(geo.leg, matDark);
      thigh.position.y = -0.14;
      const foot = mesh(geo.foot, matDark);
      foot.position.set(0, -0.28, 0.045);
      foot.scale.set(1.05, 0.55, 1.4);
      g.add(thigh, foot);
      return g;
    };
    this.legL = buildLeg(-1);
    this.legR = buildLeg(1);
    this.rig.add(this.legL, this.legR, this.torso);
  }

  pose(moving: boolean, speed: number, waving: boolean, dt: number, carrying = false, seated = false): void {
    dt = Math.min(dt, 0.05);
    this.t += dt;
    const k = 1 - Math.exp(-10 * dt);
    this.walkW += ((moving && !seated ? 1 : 0) - this.walkW) * k;
    this.waveW += ((waving ? 1 : 0) - this.waveW) * k;
    this.carryW += ((carrying ? 1 : 0) - this.carryW) * k;
    this.phase += dt * (5.5 + 3.5 * Math.min(speed, 2)) * this.walkW;

    const t = this.t;
    const w = this.walkW;
    const sw = Math.sin(this.phase);
    const idle = 1 - w;

    // body: walk bob + lean, idle breath + sway
    this.rig.position.y = seated ? -0.42 : w * Math.abs(Math.sin(this.phase)) * 0.05;
    this.rig.rotation.x = 0.085 * w;
    this.rig.rotation.z = sw * 0.035 * w + Math.sin(t * 1.4) * 0.022 * idle;
    this.torso.rotation.y = sw * 0.09 * w;
    const breath = Math.sin(t * 2.3) * 0.02 * idle;
    this.torso.scale.set(1 - breath * 0.5, 1 + breath, 1 - breath * 0.5);

    // legs
    this.legL.rotation.x = seated ? -1.25 : sw * 0.8 * w;
    this.legR.rotation.x = seated ? -1.15 : -sw * 0.8 * w;

    // arms: walk counter-swing -> carry hold -> wave (right arm)
    const c = this.carryW;
    const idleArmX = Math.sin(t * 2.3) * 0.045 * idle;
    const lX = lerp(-sw * 0.55 * w + idleArmX, -1.2, c);
    const rX = lerp(sw * 0.55 * w + idleArmX, -1.2, c);
    const lZ = lerp(-0.18 - Math.sin(t * 2.3 + 1) * 0.03 * idle, 0.35, c);
    const rZ = lerp(0.18 + Math.sin(t * 2.3 + 1) * 0.03 * idle, -0.35, c);
    const waveZ = 2.45 + Math.sin(t * 9) * 0.4;
    this.armL.rotation.x = lX;
    this.armL.rotation.z = lZ;
    this.armR.rotation.x = lerp(rX, -0.15, this.waveW);
    this.armR.rotation.z = lerp(rZ, waveZ, this.waveW);

    this.held.visible = carrying;
    if (this.bubble.visible && performance.now() > this.bubbleUntil) this.bubble.visible = false;
  }

  say(text: string): void {
    this.group.remove(this.bubble);
    disposeSprite(this.bubble);
    this.bubble = makeBubble(text);
    this.bubble.position.set(0, 2.42, 0);
    this.group.add(this.bubble);
    this.bubbleUntil = performance.now() + 4000;
  }

  showTag(v: boolean): void {
    this.tag.visible = v;
  }
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// ---------------------------------------------------------------------------
// Carried parcel
// ---------------------------------------------------------------------------

function makeEnvelope(): THREE.Group {
  const g = new THREE.Group();
  const env = new THREE.Mesh(geo.env, toonMat(0xf7efdc, 0));
  const stamp = new THREE.Mesh(geo.stamp, toonMat(0xc45c3a, 0));
  stamp.position.set(0.07, 0.028, -0.045);
  const seal = new THREE.Mesh(geo.seal, toonMat(0xb03a3a, 0));
  seal.position.set(-0.03, 0.028, 0.02);
  env.castShadow = true;
  g.add(env, stamp, seal);
  g.position.set(0, 0.92, 0.42);
  g.rotation.x = -0.55;
  return g;
}

// ---------------------------------------------------------------------------
// Name tag + chat bubble (crisp high-DPI canvas sprites)
// ---------------------------------------------------------------------------

function spriteFrom(canvas: HTMLCanvasElement): THREE.Sprite {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const s = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }),
  );
  s.renderOrder = 10;
  return s;
}

function disposeSprite(s: THREE.Sprite): void {
  s.material.map?.dispose();
  s.material.dispose();
}

function makeTag(name: string, color: number): THREE.Sprite {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 128;
  const ctx = c.getContext("2d")!;
  const label = name.slice(0, 16);
  ctx.font = "600 46px Outfit, sans-serif";
  const tw = ctx.measureText(label).width;
  const pw = Math.min(480, tw + 110);
  const x = (512 - pw) / 2;
  // pill
  ctx.fillStyle = "rgba(20, 17, 36, 0.66)";
  round(ctx, x, 30, pw, 68, 34);
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = `#${color.toString(16).padStart(6, "0")}cc`;
  round(ctx, x + 1.5, 31.5, pw - 3, 65, 32);
  ctx.stroke();
  // colored dot + name
  ctx.fillStyle = `#${color.toString(16).padStart(6, "0")}`;
  ctx.beginPath();
  ctx.arc(x + 40, 64, 13, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff6e8";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, x + 40 + (pw - 50) / 2, 66);
  const s = spriteFrom(c);
  s.scale.set(1.05, 0.2625, 1);
  return s;
}

function makeBubble(text: string): THREE.Sprite {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 320;
  const ctx = c.getContext("2d")!;
  if (text) {
    ctx.font = "600 52px Outfit, sans-serif";
    const lines = wrap(ctx, text.slice(0, 96), 840);
    const lh = 60;
    const boxH = 52 + lines.length * lh;
    const boxW = Math.min(
      920,
      Math.max(220, ...lines.map((l) => ctx.measureText(l).width)) + 90,
    );
    const bx = (1024 - boxW) / 2;
    const by = 250 - boxH;
    // bubble + tail
    ctx.fillStyle = "rgba(255, 250, 238, 0.96)";
    round(ctx, bx, by, boxW, boxH, 34);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(486, by + boxH - 2);
    ctx.lineTo(538, by + boxH - 2);
    ctx.lineTo(512, by + boxH + 40);
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(110, 123, 208, 0.55)";
    round(ctx, bx + 2, by + 2, boxW - 4, boxH - 4, 32);
    ctx.stroke();
    // text
    ctx.fillStyle = "#2a2436";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    lines.forEach((l, i) => ctx.fillText(l, 512, by + 32 + lh * (i + 0.5)));
  }
  const s = spriteFrom(c);
  s.scale.set(1.9, 0.594, 1);
  s.visible = !!text;
  return s;
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let cur = "";
  for (const word of words) {
    const next = cur ? `${cur} ${word}` : word;
    if (ctx.measureText(next).width > maxW && cur) {
      lines.push(cur);
      cur = word;
    } else {
      cur = next;
    }
    if (lines.length === 2) break;
  }
  if (cur && lines.length < 3) lines.push(cur);
  return lines.length ? lines : [text];
}

function round(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
