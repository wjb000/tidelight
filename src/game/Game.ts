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
import { houseAnchor } from "../world/homestead";
import {
  HOUSE_D,
  HOUSE_W,
  LIGHTHOUSE,
  WAREHOUSE,
  houseOutsidePose,
  nearAnyDoor,
  placeEnter,
  placeExit,
  placeFloor,
  type Place,
} from "../world/places";
import { Input, isTouchUi } from "./input";
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
    (globalThis as { __tide?: unknown }).__tide = {
      dump: () => this.probe(),
      home: () => this.debugHome(),
      enter: () => {
        const local = this.local;
        if (!local) return { error: "no local" };
        const place = this.nearPlace(local) ?? {
          id: `house-${this.room?.snapshot.peers.find((p) => p.id === this.room?.id)?.islandSlot ?? 0}`,
          kind: "house" as const,
          slot: this.room?.snapshot.peers.find((p) => p.id === this.room?.id)?.islandSlot ?? 0,
          label: "home",
        };
        this.togglePlace(place);
        return this.probe();
      },
      board: (kind: "boat" | "heli" = "boat") => {
        const local = this.local;
        const room = this.room;
        if (!local || !room) return { error: "no local" };
        const slot = room.snapshot.peers.find((p) => p.id === room.id)?.islandSlot ?? 0;
        this.enterVehicle(kind, slot);
        return this.probe();
      },
    };
    this.loop();
  }

  private debugHome(): unknown {
    const room = this.room;
    const local = this.local;
    if (!room || !local) return { error: "not playing" };
    const me = room.snapshot.peers.find((p) => p.id === room.id);
    const slot = this.world.slots[me?.islandSlot ?? 0];
    if (!slot) return { error: "no slot" };
    const pose = placeEnter({ id: `house-${me?.islandSlot ?? 0}`, kind: "house", slot: me?.islandSlot ?? 0, label: "home" }, this.world.slots);
    const out = placeExit({ id: `house-${me?.islandSlot ?? 0}`, kind: "house", slot: me?.islandSlot ?? 0, label: "home" }, this.world.slots);
    local.applyPose(out.x, out.y, out.z, out.yaw);
    if (this.cam) this.cam.yaw = out.yaw + Math.PI;
    this.placed = true;
    return { slot: me?.islandSlot ?? 0, state: this.probe(), door: out, in: pose };
  }

  private probe(): unknown {
    const local = this.local;
    const room = this.room;
    const slot = local?.vehicleSlot ?? 0;
    const mesh = local?.mode === "heli" ? this.world.helis[slot] : local?.mode === "boat" ? this.world.boats[slot] : null;
    return {
      playing: this.playing,
      placed: this.placed,
      mode: local?.mode ?? "none",
      inside: !!local?.inside,
      place: local?.place?.id ?? null,
      x: local?.position.x ?? 0,
      y: local?.position.y ?? 0,
      z: local?.position.z ?? 0,
      yaw: local?.yaw ?? 0,
      firstPerson: !!this.cam?.firstPerson,
      peers: room?.snapshot.peers.length ?? 0,
      vehicle: mesh
        ? { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z, slot }
        : null,
      rise: room?.snapshot.islands.map((i) => Number(i.rise.toFixed(2))) ?? [],
      near: local
        ? nearAnyDoor(this.world.slots, local.position.x, local.position.z, this.riseOf)?.id ?? null
        : null,
    };
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
    addEventListener("pagehide", () => this.room?.leave());
    addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") this.room?.heartbeat(this.local ? this.selfPresence(this.local) : null);
    });
    this.overlay.toastMsg("your home, boat, and helicopter are on your islet");
    window.setInterval(() => {
      if (this.room && this.local) this.room.heartbeat(this.selfPresence(this.local));
    }, 800);
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
        const slot = this.world.slots[me.islandSlot] ?? this.world.slots[0];
        const door = houseOutsidePose(slot);
        local.position.set(door.x, door.y, door.z);
        local.yaw = door.yaw;
        local.vehicleSlot = me.islandSlot;
        if (this.cam) {
          this.cam.yaw = me.yaw + Math.PI;
          this.cam.intro = 0;
        }
        this.placed = true;
      } else {
        this.idleCam(performance.now() * 0.001);
        return;
      }
    }
    const look = this.input.consumeLook();
    cam.setTravel(local.mode, local.inside);
    cam.setRoom(local.inside && local.place ? this.roomFrame(local.place) : null);
    cam.update(dt, local.position, look, this.input.locked);
    local.update(dt, this.input, cam.yaw, (i) => room.snapshot.islands[i]?.rise ?? 0);
    if (this.input.consumeWave()) this.wave();
    this.handleUse();
    const self = this.selfPresence(local);
    this.syncAvatars();
    this.syncLetterMeshes();
    this.world.applyIslands(room.snapshot.islands);
    this.world.syncVehicles(
      room.snapshot.vehicles ?? [],
      {
        id: room.id,
        mode: local.mode,
        slot: local.vehicleSlot,
        pos: local.position,
        yaw: local.yaw,
        vel: local.velocity,
      },
      (i) => room.snapshot.islands[i]?.rise ?? 0,
    );
    this.world.forceRide(local.mode, local.vehicleSlot, local.position, local.yaw, local.velocity);
    this.world.setInterior(local.place?.id ?? null);
    if (donation.lastPoints) this.world.particles.applyFlock(donation.lastPoints);
    donation.tick(performance.now() * 0.001, self.islandSlot);
    this.overlay.setTravel(local.mode);
    if (local.mode !== "none") this.overlay.setUseLabel("out");
    else if (local.inside) this.overlay.setUseLabel("out");
    else if (this.nearPlace(local)) this.overlay.setUseLabel("in");
    else this.overlay.setUseLabel("use");

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
      vehicle: local.mode,
      vehicleSlot: local.mode === "none" ? (existing?.islandSlot ?? 0) : local.vehicleSlot,
      inside: local.inside,
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
        av.group.visible = true;
        av.showTag(false);
        av.pose(this.local.moving, 1, this.waving, 0.016, !!this.carrying, this.local.mode !== "none");
      } else {
        av.showTag(true);
        av.group.position.lerp(new THREE.Vector3(p.x, p.y, p.z), 0.25);
        av.group.rotation.y = p.yaw;
        av.pose(p.moving, 1, p.waving, 0.016, p.carrying, p.vehicle !== "none");
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

  private handleUse(): void {
    const local = this.local!;
    if (!this.input.consumeInteract()) {
      this.overlay.setPrompt(this.nearPrompt(local.position));
      return;
    }
    if (local.mode !== "none") {
      this.exitVehicle();
      return;
    }
    const board = this.nearVehicle(local.position);
    const place = this.nearPlace(local);
    const boardD = board ? this.vehicleDistance(board.kind, board.slot, local.position) : Infinity;
    const doorD = place ? this.doorDistance(place, local.position) : Infinity;
    if (board && boardD <= doorD && boardD < 4.2) {
      this.enterVehicle(board.kind, board.slot);
      return;
    }
    if (place && (local.inside || doorD < 3.4)) {
      this.togglePlace(place);
      return;
    }
    if (board) {
      this.enterVehicle(board.kind, board.slot);
      return;
    }
    this.handleLetters();
  }

  private vehicleDistance(kind: "heli" | "boat", slot: number, pos: THREE.Vector3): number {
    const mesh = kind === "heli" ? this.world.helis[slot] : this.world.boats[slot];
    if (mesh?.visible) return Math.hypot(mesh.position.x - pos.x, mesh.position.z - pos.z);
    const v = this.room?.snapshot.vehicles?.find((item) => item.kind === kind && item.slot === slot);
    return v ? Math.hypot(v.x - pos.x, v.z - pos.z) : 99;
  }

  private doorDistance(place: Place, pos: THREE.Vector3): number {
    const pose = placeExit(place, this.world.slots);
    return Math.hypot(pose.x - pos.x, pose.z - pos.z);
  }

  private roomFrame(place: Place) {
    if (place.kind === "warehouse") {
      return { x: WAREHOUSE.x, z: WAREHOUSE.z, yaw: 0, w: WAREHOUSE.w - 0.6, d: WAREHOUSE.d - 0.6, floor: WAREHOUSE.floor, h: 4.6 };
    }
    if (place.kind === "lighthouse") {
      return { x: LIGHTHOUSE.x, z: LIGHTHOUSE.z, yaw: 0, w: 3.6, d: 3.6, floor: LIGHTHOUSE.floor, h: 4.2 };
    }
    const slot = this.world.slots[place.slot ?? 0];
    const a = houseAnchor(slot);
    return {
      x: a.x,
      z: a.z,
      yaw: a.yaw,
      w: HOUSE_W - 0.5,
      d: HOUSE_D - 0.5,
      floor: placeFloor(place, this.world.slots),
      h: 3.05,
    };
  }

  private riseOf = (i: number): number => this.room?.snapshot.islands[i]?.rise ?? 0;

  private nearPlace(local: Controller): Place | null {
    if (local.inside && local.place) return local.place;
    return nearAnyDoor(this.world.slots, local.position.x, local.position.z, this.riseOf);
  }

  private togglePlace(place: Place): void {
    const local = this.local!;
    const goingIn = !local.inside || local.place?.id !== place.id;
    const pose = goingIn ? placeEnter(place, this.world.slots) : placeExit(place, this.world.slots);
    local.applyPose(pose.x, pose.y, pose.z, pose.yaw);
    local.setStay(goingIn ? place : null);
    if (this.cam) {
      this.cam.yaw = pose.yaw + Math.PI;
      this.cam.enterInterior(goingIn);
    }
    this.overlay.toastMsg(goingIn ? `inside ${place.label}` : `left ${place.label}`);
    this.audio.blip(goingIn ? "pick" : "drop");
  }

  private enterVehicle(kind: "heli" | "boat", slot: number): void {
    const room = this.room!;
    const local = this.local!;
    const taken = (room.snapshot.vehicles ?? []).find((v) => v.kind === kind && v.slot === slot);
    if (taken?.riderId && taken.riderId !== room.id) {
      this.overlay.toastMsg("already taken");
      return;
    }
    const me = room.snapshot.peers.find((p) => p.id === room.id);
    if (me) me.vehicleSlot = slot;
    local.mode = kind;
    local.vehicleSlot = slot;
    room.claimVehicle(kind, slot, local.position.x, local.position.y, local.position.z, local.yaw);
    if (taken) {
      local.position.set(taken.x, taken.y, taken.z);
      local.yaw = taken.yaw;
    }
    local.velocity.set(0, 0, 0);
    this.overlay.toastMsg(kind === "heli" ? "helicopter — space up · F down" : "boat — sail the harbor");
    this.audio.blip("pick");
  }

  private exitVehicle(): void {
    const local = this.local!;
    if (local.mode === "heli" && !local.grounded) {
      this.overlay.toastMsg("land first");
      return;
    }
    const kind = local.mode;
    local.mode = "none";
    this.room?.releaseVehicle(kind, local.vehicleSlot, local.position.x, local.position.y, local.position.z, local.yaw);
    const side = kind === "boat" ? 1.8 : 2.2;
    local.position.x += Math.sin(local.yaw + 1.2) * side;
    local.position.z += Math.cos(local.yaw + 1.2) * side;
    local.velocity.set(0, 0, 0);
    this.overlay.toastMsg(kind === "heli" ? "back on the sand" : "hopped off");
    this.audio.blip("drop");
  }

  private nearVehicle(pos: THREE.Vector3): { kind: "heli" | "boat"; slot: number } | null {
    const room = this.room!;
    let best: { kind: "heli" | "boat"; slot: number; d: number } | null = null;
    const consider = (kind: "heli" | "boat", slot: number, x: number, z: number, riderId: string | null) => {
      if (riderId && riderId !== room.id) return;
      const d = Math.hypot(x - pos.x, z - pos.z);
      const reach = kind === "heli" ? 4.2 : 4.6;
      if (d > reach) return;
      if (!best || d < best.d) best = { kind, slot, d };
    };
    this.world.boats.forEach((mesh, slot) => {
      if (!mesh.visible) return;
      const v = room.snapshot.vehicles?.find((item) => item.kind === "boat" && item.slot === slot);
      consider("boat", slot, mesh.position.x, mesh.position.z, v?.riderId ?? null);
    });
    this.world.helis.forEach((mesh, slot) => {
      if (!mesh.visible) return;
      const v = room.snapshot.vehicles?.find((item) => item.kind === "heli" && item.slot === slot);
      consider("heli", slot, mesh.position.x, mesh.position.z, v?.riderId ?? null);
    });
    for (const v of room.snapshot.vehicles ?? []) {
      consider(v.kind, v.slot, v.x, v.z, v.riderId);
    }
    return best;
  }

  private handleLetters(): void {
    const room = this.room!;
    const local = this.local!;
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
    const use = isTouchUi() ? "use" : "E";
    if (this.local?.mode === "heli") return this.local.grounded ? `${use}  hop out` : "land to hop out · space up · F down";
    if (this.local?.mode === "boat") return `${use}  hop out`;
    const board = this.nearVehicle(pos);
    if (board) return board.kind === "heli" ? `${use}  fly helicopter` : `${use}  board boat`;
    if (this.carrying) return `${use}  deliver or set down`;
    const local = this.local;
    if (local) {
      const door = this.nearPlace(local);
      if (door) {
        if (local.inside && local.place?.id === door.id) return `${use}  leave ${door.label}`;
        return `${use}  enter ${door.label}`;
      }
    }
    const near = this.room!.snapshot.letters.some((l) => !l.delivered && !l.carrierId && Math.hypot(l.x - pos.x, l.z - pos.z) < 2.2);
    return near ? `${use}  take the letter` : null;
  }
}
