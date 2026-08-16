import * as THREE from "three";
import { AudioBed } from "../audio/audio";
import { Donation } from "../compute/donation";
import type { LetterState, PeerPresence } from "../contracts/types";
import { Room, SNAP_DT } from "../net/room";
import { Avatar } from "../player/avatar";
import { FollowCamera } from "../player/camera";
import { Controller } from "../player/controller";
import { Renderer } from "../render/Renderer";
import { Overlay } from "../ui/overlay";
import { mainHeight } from "../world/height";
import { World } from "../world/World";
import { Input } from "./input";
import { pickQuality } from "./quality";

const COLORS = [0xc45c3a, 0xe8c37a, 0x3d7a6b, 0x7a8cc4, 0xd47aa0, 0xd4a24c];

export class Game {
  private readonly renderer: Renderer;
  private readonly world: World;
  private readonly input: Input;
  private readonly overlay = new Overlay();
  private readonly audio = new AudioBed();
  private room: Room | null = null;
  private donation: Donation | null = null;
  private local: Controller | null = null;
  private cam: FollowCamera | null = null;
  private readonly avatars = new Map<string, Avatar>();
  private readonly letters = new Map<string, THREE.Mesh>();
  private carrying: LetterState | null = null;
  private acc = 0;
  private last = performance.now();
  private playing = false;
  private waving = false;
  private placed = false;

  constructor(canvas: HTMLCanvasElement) {
    const quality = pickQuality();
    this.renderer = new Renderer(canvas, quality);
    this.world = new World(quality, this.renderer.camera);
    this.renderer.scene.add(this.world.group);
    this.input = new Input(canvas);
    this.overlay.onEnter = (name, donate) => this.start(name, donate);
    this.overlay.onDonateToggle = () => this.toggleDonate();
    this.overlay.onWave = () => this.wave();
    this.overlay.onChat = (text) => this.say(text);
    this.loop();
  }

  private start(name: string, donate: boolean): void {
    if (this.playing) return;
    this.playing = true;
    this.audio.start();
    this.overlay.hideBoot();
    this.room = new Room(name, donate);
    this.room.onToast = (t) => this.overlay.toastMsg(t);
    this.room.onChat = (line) => {
      this.overlay.pushChat(line.name, line.text);
      this.avatars.get(line.from)?.say(line.text);
    };
    this.donation = new Donation(donate);
    this.local = new Controller(this.world.slots);
    this.cam = new FollowCamera(this.renderer.camera);
    this.room.hello();
    addEventListener("beforeunload", () => this.room?.leave());
  }

  private toggleDonate(): void {
    if (!this.room || !this.donation) return;
    this.room.donate = !this.room.donate;
    this.donation.setEnabled(this.room.donate);
    localStorage.setItem("tidelight-donate", this.room.donate ? "1" : "0");
  }

  private say(text: string): void {
    this.room?.chat(text);
    this.audio.blip("wave");
  }

  private wave(): void {
    this.waving = true;
    this.room?.wave();
    this.audio.blip("wave");
    window.setTimeout(() => {
      this.waving = false;
    }, 700);
  }

  private loop = (): void => {
    requestAnimationFrame(this.loop);
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.world.update(now * 0.001, this.room?.snapshot.peers.filter((p) => p.donate).length ?? 0);
    if (this.playing && this.room && this.local && this.cam && this.donation) {
      this.tickPlay(dt);
    } else {
      this.idleCam(now * 0.001);
    }
    this.renderer.render(now * 0.001);
    this.overlay.markFps();
  };

  private idleCam(t: number): void {
    const c = this.renderer.camera;
    c.position.set(Math.sin(t * 0.06) * 10, 7.2, 88 + Math.cos(t * 0.06) * 4);
    c.lookAt(4, 3.2, 18);
  }

  private tickPlay(dt: number): void {
    const room = this.room!;
    const local = this.local!;
    const cam = this.cam!;
    const donation = this.donation!;
    if (!this.placed) {
      const me = room.snapshot.peers.find((p) => p.id === room.id);
      if (me) {
        local.position.set(me.x, Math.max(me.y, 0.9), me.z);
        this.placed = true;
      }
    }
    const look = this.input.consumeLook();
    cam.update(dt, local.position, look, this.input.locked);
    local.update(dt, this.input, cam.yaw, (i) => room.snapshot.islands[i]?.rise ?? 0);
    if (this.input.consumeWave()) this.wave();
    this.handleLetters();

    const self = this.selfPresence(local);
    this.syncAvatars();
    this.syncLetterMeshes();
    this.world.applyIslands(room.snapshot.islands);
    if (donation.lastPoints) this.world.particles.applyFlock(donation.lastPoints);
    donation.tick(performance.now() * 0.001, self.islandSlot);

    this.acc += dt;
    while (this.acc >= SNAP_DT) {
      this.acc -= SNAP_DT;
      room.publishSelf(self);
      room.tickHost(SNAP_DT, donation.lastMs);
    }
    this.overlay.sync(room.snapshot, room.donate, room.isHost, donation.lastMs);
  }

  private selfPresence(local: Controller): PeerPresence {
    const room = this.room!;
    const existing = room.snapshot.peers.find((p) => p.id === room.id);
    return {
      id: room.id,
      name: room.name,
      color: existing?.color ?? COLORS[0],
      x: local.position.x,
      y: local.position.y,
      z: local.position.z,
      yaw: local.yaw,
      moving: local.moving,
      waving: this.waving,
      carrying: !!this.carrying,
      donate: room.donate,
      islandSlot: existing?.islandSlot ?? 0,
      lastSeen: performance.now(),
      skin: existing?.skin ?? room.skin,
    };
  }

  private syncAvatars(): void {
    const room = this.room!;
    const seen = new Set<string>();
    for (const p of room.snapshot.peers) {
      seen.add(p.id);
      let av = this.avatars.get(p.id);
      if (!av) {
        av = new Avatar(p.color, p.name, p.skin);
        this.avatars.set(p.id, av);
        this.renderer.scene.add(av.group);
      }
      if (p.id === room.id && this.local) {
        av.group.position.copy(this.local.position);
        av.group.rotation.y = this.local.yaw;
        av.showTag(false);
        av.pose(this.local.moving, 1, this.waving, 0.016, !!this.carrying);
      } else {
        av.showTag(true);
        av.group.position.lerp(new THREE.Vector3(p.x, p.y, p.z), 0.25);
        av.group.rotation.y = p.yaw;
        av.pose(p.moving, 1, p.waving, 0.016, p.carrying);
      }
    }
    for (const [id, av] of this.avatars) {
      if (seen.has(id)) continue;
      this.renderer.scene.remove(av.group);
      this.avatars.delete(id);
    }
  }

  private syncLetterMeshes(): void {
    const room = this.room!;
    const seen = new Set<string>();
    for (const l of room.snapshot.letters) {
      seen.add(l.id);
      let mesh = this.letters.get(l.id);
      if (!mesh) {
        mesh = new THREE.Mesh(
          new THREE.BoxGeometry(0.85, 0.12, 0.55),
          new THREE.MeshToonMaterial({ color: 0xf7efe0 }),
        );
        const stamp = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.03, 0.16), new THREE.MeshToonMaterial({ color: 0xc45c3a }));
        stamp.position.set(0.24, 0.08, -0.12);
        mesh.add(stamp);
        const flap = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.02, 0.22), new THREE.MeshToonMaterial({ color: 0xe8dcc4 }));
        flap.position.set(0, 0.07, 0.16);
        mesh.add(flap);
        mesh.castShadow = true;
        this.letters.set(l.id, mesh);
        this.renderer.scene.add(mesh);
      }
      if (l.delivered) {
        mesh.visible = false;
        continue;
      }
      mesh.visible = true;
      if (l.carrierId === room.id && this.local) {
        mesh.position.copy(this.local.position).add(new THREE.Vector3(0.25, 1.15, 0.2));
      } else if (l.carrierId) {
        const p = room.snapshot.peers.find((x) => x.id === l.carrierId);
        if (p) mesh.position.set(p.x + 0.25, p.y + 1.15, p.z + 0.2);
      } else {
        mesh.position.set(l.x, l.y, l.z);
        mesh.rotation.y += 0.01;
      }
    }
    for (const [id, mesh] of this.letters) {
      if (seen.has(id)) continue;
      this.renderer.scene.remove(mesh);
      this.letters.delete(id);
    }
  }

  private handleLetters(): void {
    const room = this.room!;
    const local = this.local!;
    if (!this.input.consumeInteract()) {
      this.overlay.setPrompt(this.nearPrompt(local.position));
      return;
    }
    if (this.carrying) {
      const dest = this.world.slots[this.carrying.destSlot];
      const destPos = dest ? new THREE.Vector3(dest.x, 1, dest.z) : null;
      const home = new THREE.Vector3(3.2, 1, 32);
      const destOk = destPos && destPos.distanceTo(local.position) < 4 && (room.snapshot.islands[this.carrying.destSlot]?.rise ?? 0) > 0.5;
      const homeOk = home.distanceTo(local.position) < 3;
      if (destOk || homeOk) {
        this.carrying.delivered = true;
        this.carrying.carrierId = null;
        room.publishLetter(this.carrying);
        this.overlay.toastMsg(destOk ? "delivered across donated water" : "returned to the dock");
        this.audio.blip("drop");
        this.carrying = null;
      } else {
        this.carrying.carrierId = null;
        this.carrying.x = local.position.x;
        this.carrying.y = Math.max(mainHeight(local.position.x, local.position.z), 0.4) + 0.4;
        this.carrying.z = local.position.z;
        room.publishLetter(this.carrying);
        this.carrying = null;
        this.audio.blip("drop");
      }
      return;
    }
    const near = room.snapshot.letters.find((l) => !l.delivered && !l.carrierId && Math.hypot(l.x - local.position.x, l.z - local.position.z) < 2.2);
    if (near) {
      near.carrierId = room.id;
      this.carrying = near;
      room.publishLetter(near);
      this.overlay.toastMsg(`letter for islet ${near.destSlot + 1}`);
      this.audio.blip("pick");
    }
  }

  private nearPrompt(pos: THREE.Vector3): string | null {
    if (this.carrying) return "E  deliver or set down";
    const room = this.room!;
    const near = room.snapshot.letters.some((l) => !l.delivered && !l.carrierId && Math.hypot(l.x - pos.x, l.z - pos.z) < 2.2);
    return near ? "E  take the letter" : null;
  }
}
