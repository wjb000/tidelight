import * as THREE from "three";
import { GLTFLoader, type GLTF } from "three/addons/loaders/GLTFLoader.js";
import { clone as cloneSkinned } from "three/addons/utils/SkeletonUtils.js";

const SKINS = ["/models/xbot.glb", "/models/robot.glb", "/models/soldier.glb"];
const cache = new Map<string, Promise<GLTF>>();
const loader = new GLTFLoader();

function loadGltf(url: string): Promise<GLTF> {
  let p = cache.get(url);
  if (!p) {
    p = loader.loadAsync(url);
    cache.set(url, p);
  }
  return p;
}

function pickClip(clips: THREE.AnimationClip[], names: string[]): THREE.AnimationClip | undefined {
  const lower = names.map((n) => n.toLowerCase());
  return clips.find((c) => lower.some((n) => c.name.toLowerCase().includes(n)));
}

export class Avatar {
  readonly group = new THREE.Group();
  readonly tag: THREE.Sprite;
  private mixer: THREE.AnimationMixer | null = null;
  private idle: THREE.AnimationAction | null = null;
  private walk: THREE.AnimationAction | null = null;
  private waveAct: THREE.AnimationAction | null = null;
  private letter: THREE.Group;
  private bubble: THREE.Sprite;
  private bubbleUntil = 0;
  private moving = false;

  constructor(
    readonly color: number,
    name: string,
    skin = 0,
  ) {
    this.tag = makeName(name, color);
    this.tag.position.set(0, 2.05, 0);
    this.letter = makeLetter();
    this.letter.visible = false;
    this.bubble = makeBubble("");
    this.bubble.visible = false;
    this.bubble.position.set(0, 2.35, 0);
    this.group.add(this.tag, this.letter, this.bubble);
    void this.mount(SKINS[Math.abs(skin) % SKINS.length], color);
  }

  private async mount(url: string, color: number): Promise<void> {
    try {
      const gltf = await loadGltf(url);
      const root = cloneSkinned(gltf.scene) as THREE.Object3D;
      root.traverse((o) => {
        const m = o as THREE.Mesh;
        if (!m.isMesh) return;
        m.castShadow = true;
        m.receiveShadow = true;
        const mats = (Array.isArray(m.material) ? m.material : [m.material]).map((mat) => {
          const std = mat as THREE.MeshStandardMaterial;
          const next = new THREE.MeshToonMaterial({
            color: std.color ? std.color.clone() : new THREE.Color(color),
            map: std.map ?? null,
          });
          const name = (std.name || m.name || "").toLowerCase();
          if (/cloth|shirt|body|suit|robot|armor|hoodie|jacket/.test(name)) {
            next.color.lerp(new THREE.Color(color), 0.55);
          }
          return next;
        });
        m.material = mats.length === 1 ? mats[0] : mats;
      });
      fitHeight(root, 1.74);
      this.group.add(root);
      this.mixer = new THREE.AnimationMixer(root);
      const clips = gltf.animations;
      const idleClip = pickClip(clips, ["idle", "stand", "standing"]);
      const walkClip = pickClip(clips, ["walk", "walking", "run"]);
      const waveClip = pickClip(clips, ["wave", "thumb", "yes"]);
      if (idleClip) this.idle = this.mixer.clipAction(idleClip);
      if (walkClip) this.walk = this.mixer.clipAction(walkClip);
      if (waveClip) this.waveAct = this.mixer.clipAction(waveClip);
      this.idle?.play();
      this.letter.position.set(0.28, 1.05, 0.22);
    } catch (err) {
      console.warn("character load failed", url, err);
    }
  }

  pose(moving: boolean, _speed: number, waving: boolean, dt: number, carrying = false): void {
    this.letter.visible = carrying;
    if (this.mixer) {
      if (moving !== this.moving) {
        this.moving = moving;
        if (moving) {
          this.idle?.fadeOut(0.18);
          this.walk?.reset().fadeIn(0.18).play();
        } else {
          this.walk?.fadeOut(0.18);
          this.idle?.reset().fadeIn(0.18).play();
        }
      }
      if (waving) this.waveAct?.reset().setLoop(THREE.LoopOnce, 1).play();
      this.mixer.update(dt);
    }
    if (this.bubble.visible && performance.now() > this.bubbleUntil) this.bubble.visible = false;
  }

  say(text: string): void {
    this.group.remove(this.bubble);
    this.bubble = makeBubble(text);
    this.bubble.position.set(0, 2.35, 0);
    this.group.add(this.bubble);
    this.bubbleUntil = performance.now() + 3800;
  }

  showTag(v: boolean): void {
    this.tag.visible = v;
  }
}

function fitHeight(root: THREE.Object3D, meters: number): void {
  const box = new THREE.Box3().setFromObject(root);
  const size = new THREE.Vector3();
  box.getSize(size);
  if (size.y < 0.01) return;
  const s = meters / size.y;
  root.scale.multiplyScalar(s);
  const after = new THREE.Box3().setFromObject(root);
  root.position.y -= after.min.y;
}

function makeLetter(): THREE.Group {
  const g = new THREE.Group();
  const env = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.03, 0.16), new THREE.MeshToonMaterial({ color: 0xf7efe0 }));
  const stamp = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.012, 0.045), new THREE.MeshToonMaterial({ color: 0xc45c3a }));
  stamp.position.set(0.06, 0.022, -0.04);
  g.add(env, stamp);
  return g;
}

function makeName(name: string, color: number): THREE.Sprite {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 64;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, 256, 64);
  ctx.font = "600 26px Outfit, sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(20,16,24,0.28)";
  ctx.fillRect(40, 16, 176, 32);
  ctx.fillStyle = `#${color.toString(16).padStart(6, "0")}`;
  ctx.fillText(name.slice(0, 16), 128, 40);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
  s.scale.set(0.9, 0.22, 1);
  return s;
}

function makeBubble(text: string): THREE.Sprite {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 128;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, 512, 128);
  if (text) {
    ctx.fillStyle = "rgba(244,234,216,0.92)";
    round(ctx, 24, 16, 464, 80, 18);
    ctx.fill();
    ctx.fillStyle = "#1a1423";
    ctx.font = "600 28px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(text.slice(0, 42), 256, 66);
  }
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
  s.scale.set(1.8, 0.45, 1);
  s.visible = !!text;
  return s;
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
