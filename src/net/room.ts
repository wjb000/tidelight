import type { ChatLine, ClientMsg, HostMsg, IslandSlot, LetterState, PeerId, PeerPresence, VehicleState, WorldSnapshot } from "../contracts/types";
import { MAX_ISLANDS, TICK_HZ } from "../contracts/types";
import { boatMooring, doorWorld, heliPadPos, padHeight } from "../world/homestead";
import { layoutSlots } from "../world/islands";
import { MeshNet } from "./mesh";

const SLOTS = layoutSlots();

const CHANNEL = "tidelight-harbor";

function uid(): PeerId {
  return crypto.randomUUID().slice(0, 8);
}

const PALETTE = [0xc45c3a, 0xe8c37a, 0x3d7a6b, 0x7a8cc4, 0xd47aa0, 0xd4a24c];

export class Room {
  readonly id: PeerId;
  readonly name: string;
  readonly skin: number;
  donate: boolean;
  isHost = false;
  snapshot: WorldSnapshot;
  private readonly bus = new BroadcastChannel(CHANNEL);
  private readonly mesh = new MeshNet();
  private ws: WebSocket | null = null;
  private hostSeen = 0;
  private readonly seenBus = new Set<string>();
  onToast: (t: string) => void = () => {};
  onChat: (line: ChatLine) => void = () => {};

  constructor(name: string, donate: boolean) {
    this.name = name.slice(0, 16) || "courier";
    this.donate = donate;
    this.id = this.mesh.id || uid();
    this.skin = Math.abs(hashSkin(this.id)) % 3;
    this.snapshot = emptySnapshot(this.id);
    this.mesh.onMessage = (m) => this.ingest(m);
    this.mesh.onJoin = () => this.hello();
    this.mesh.onLeave = (pid) => {
      if (this.isHost) this.drop(pid);
    };
    this.bus.onmessage = (e) => this.ingest(e.data);
    addEventListener("storage", (e) => {
      if (e.key !== "tidelight-q" || !e.newValue) return;
      this.drainQueue(e.newValue);
    });
    setInterval(() => {
      this.drainQueue(localStorage.getItem("tidelight-q"));
    }, 80);
    this.trySocket();
    setTimeout(() => {
      if (performance.now() - this.hostSeen > 350) this.becomeHost();
    }, 380);
  }

  private trySocket(): void {
    const proto = location.protocol === "https:" ? "wss" : "ws";
    const url = `${proto}://${location.host}/ws`;
    try {
      this.ws = new WebSocket(url);
      this.ws.onmessage = (e) => this.ingest(JSON.parse(String(e.data)));
      this.ws.onerror = () => {
        this.ws = null;
      };
    } catch {
      this.ws = null;
    }
  }

  private send(msg: ClientMsg | HostMsg): void {
    this.bus.postMessage(msg);
    this.mesh.send(msg);
    try {
      const raw = localStorage.getItem("tidelight-q");
      const q = raw ? (JSON.parse(raw) as unknown[]) : [];
      q.push({ ...msg, _n: Math.random() });
      while (q.length > 24) q.shift();
      localStorage.setItem("tidelight-q", JSON.stringify(q));
    } catch {
      /* ignore quota */
    }
    if (this.ws && this.ws.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(msg));
  }

  private drainQueue(raw: string | null): void {
    if (!raw) return;
    try {
      const q = JSON.parse(raw) as unknown[];
      if (!Array.isArray(q)) return;
      for (const item of q) {
        const sig = JSON.stringify(item);
        if (this.seenBus.has(sig)) continue;
        this.seenBus.add(sig);
        if (this.seenBus.size > 120) this.seenBus.clear();
        this.ingest(item);
      }
    } catch {
      /* ignore */
    }
  }

  private ingest(raw: unknown): void {
    const msg = raw as ClientMsg | HostMsg;
    if (!msg || typeof msg !== "object" || !("type" in msg)) return;
    if (msg.type === "welcome" || msg.type === "snapshot") {
      if (msg.snapshot.hostId !== this.id) {
        this.isHost = false;
        this.hostSeen = performance.now();
      }
      if (!msg.snapshot.vehicles) msg.snapshot.vehicles = parkedVehicles();
      for (const p of msg.snapshot.peers) {
        if (!p.vehicle) p.vehicle = "none";
        if (p.vehicleSlot == null) p.vehicleSlot = p.islandSlot;
      }
      this.snapshot = msg.snapshot;
      return;
    }
    if (msg.type === "toast") {
      this.onToast(msg.text);
      return;
    }
    if (msg.type === "chat") {
      this.onChat({ from: msg.id, name: msg.name, text: msg.text, t: performance.now() });
      return;
    }
    if (msg.type === "bye") {
      if (this.snapshot.hostId === msg.id && !this.isHost) this.becomeHost();
      else if (this.isHost) this.drop(msg.id);
      return;
    }
    if (!this.isHost) return;
    if (msg.type === "hello") this.admit(msg.id, msg.name, msg.donate, msg.skin);
    if (msg.type === "state") this.patchPeer(msg);
    if (msg.type === "letter") this.upsertLetter(msg.letter);
    if (msg.type === "wave") {
      const p = this.snapshot.peers.find((x) => x.id === msg.id);
      if (p) p.waving = true;
    }
  }

  becomeHost(): void {
    this.isHost = true;
    this.snapshot.hostId = this.id;
    this.admit(this.id, this.name, this.donate, this.skin);
    this.send({ type: "welcome", you: this.id, snapshot: this.snapshot });
  }

  hello(): void {
    this.send({ type: "hello", id: this.id, name: this.name, donate: this.donate, skin: this.skin });
    setInterval(() => {
      if (this.isHost) return;
      if (this.snapshot.peers.some((p) => p.id === this.id)) return;
      this.send({ type: "hello", id: this.id, name: this.name, donate: this.donate, skin: this.skin });
    }, 600);
  }

  private admit(id: PeerId, name: string, donate: boolean, skin = 0): void {
    if (this.snapshot.peers.some((p) => p.id === id)) return;
    const slot = this.nextSlot();
    const color = PALETTE[this.snapshot.peers.length % PALETTE.length];
    const door = doorWorld(SLOTS[slot]);
    const ground = padHeight(SLOTS[slot], door.x, door.z);
    this.snapshot.peers.push({
      id,
      name,
      color,
      x: door.x,
      y: ground + 0.2,
      z: door.z,
      yaw: door.yaw,
      moving: false,
      waving: false,
      carrying: false,
      donate,
      islandSlot: slot,
      lastSeen: performance.now(),
      skin,
      vehicle: "none",
      vehicleSlot: slot,
      inside: false,
    });
    const isl = this.snapshot.islands[slot];
    if (isl && donate) {
      isl.ownerId = id;
      isl.rise = Math.max(isl.rise, 0.72);
    }
    this.maybeSpawnLetter();
    this.onToast(`${name} reached the harbor`);
    this.send({ type: "toast", text: `${name} reached the harbor` });
  }

  private nextSlot(): number {
    const taken = new Set(this.snapshot.peers.map((p) => p.islandSlot));
    for (let i = 0; i < MAX_ISLANDS; i++) if (!taken.has(i)) return i;
    return this.snapshot.peers.length % MAX_ISLANDS;
  }

  private drop(id: PeerId): void {
    const p = this.snapshot.peers.find((x) => x.id === id);
    this.snapshot.peers = this.snapshot.peers.filter((x) => x.id !== id);
    if (p) {
      const isl = this.snapshot.islands[p.islandSlot];
      if (isl && isl.ownerId === id) isl.ownerId = null;
    }
  }

  private patchPeer(msg: Extract<ClientMsg, { type: "state" }>): void {
    const p = this.snapshot.peers.find((x) => x.id === msg.id);
    if (!p) return;
    p.x = msg.x;
    p.y = msg.y;
    p.z = msg.z;
    p.yaw = msg.yaw;
    p.moving = msg.moving;
    p.waving = msg.waving;
    p.carrying = msg.carrying;
    p.donate = msg.donate;
    p.vehicle = msg.vehicle ?? "none";
    p.vehicleSlot = msg.vehicleSlot ?? p.islandSlot;
    p.inside = !!msg.inside;
    p.lastSeen = performance.now();
    this.patchVehicle(p);
  }

  private patchVehicle(p: PeerPresence): void {
    if (!this.snapshot.vehicles) this.snapshot.vehicles = parkedVehicles();
    for (const v of this.snapshot.vehicles) {
      if (v.riderId === p.id && (p.vehicle === "none" || v.kind !== p.vehicle || v.slot !== p.vehicleSlot)) {
        v.riderId = null;
      }
    }
    if (p.vehicle === "none") return;
    let v = this.snapshot.vehicles.find((x) => x.kind === p.vehicle && x.slot === p.vehicleSlot);
    if (!v) return;
    if (v.riderId && v.riderId !== p.id) return;
    v.riderId = p.id;
    v.x = p.x;
    v.y = p.y;
    v.z = p.z;
    v.yaw = p.yaw;
  }

  private upsertLetter(letter: LetterState): void {
    const i = this.snapshot.letters.findIndex((l) => l.id === letter.id);
    if (i >= 0) this.snapshot.letters[i] = letter;
    else this.snapshot.letters.push(letter);
  }

  private maybeSpawnLetter(): void {
    if (this.snapshot.letters.filter((l) => !l.delivered).length >= 3) return;
    const dests = this.snapshot.peers.filter((p) => p.donate).map((p) => p.islandSlot);
    if (dests.length === 0) dests.push(0);
    this.snapshot.letters.push({
      id: uid(),
      x: 1.1,
      y: 1.05,
      z: 29.5,
      carrierId: null,
      destSlot: dests[Math.floor(Math.random() * dests.length)],
      delivered: false,
    });
  }

  publishSelf(peer: PeerPresence): void {
    this.send({
      type: "state",
      id: this.id,
      x: peer.x,
      y: peer.y,
      z: peer.z,
      yaw: peer.yaw,
      moving: peer.moving,
      waving: peer.waving,
      carrying: peer.carrying,
      donate: this.donate,
      vehicle: peer.vehicle,
      vehicleSlot: peer.vehicleSlot,
      inside: peer.inside,
    });
  }

  publishLetter(letter: LetterState): void {
    if (this.isHost) this.upsertLetter(letter);
    this.send({ type: "letter", letter });
  }

  wave(): void {
    this.send({ type: "wave", id: this.id });
  }

  chat(text: string): void {
    const clean = text.trim().slice(0, 140);
    if (!clean) return;
    const msg = { type: "chat" as const, id: this.id, name: this.name, text: clean };
    this.onChat({ from: this.id, name: this.name, text: clean, t: performance.now() });
    this.send(msg);
  }

  tickHost(dt: number, computeMs: number): void {
    if (!this.isHost) return;
    for (const isl of this.snapshot.islands) {
      const owned = this.snapshot.peers.some((p) => p.donate && p.islandSlot === isl.slot);
      const target = owned ? 1 : 0;
      isl.rise += (target - isl.rise) * Math.min(1, dt * 2.4);
      isl.ownerId = owned ? (this.snapshot.peers.find((p) => p.islandSlot === isl.slot)?.id ?? null) : null;
    }
    this.snapshot.t += dt;
    this.snapshot.computeMs = computeMs;
    const now = performance.now();
    this.snapshot.peers = this.snapshot.peers.filter((p) => p.id === this.id || now - p.lastSeen < 4000);
    const alive = new Set(this.snapshot.peers.map((p) => p.id));
    if (!this.snapshot.vehicles) this.snapshot.vehicles = parkedVehicles();
    for (const v of this.snapshot.vehicles) {
      if (v.riderId && !alive.has(v.riderId)) v.riderId = null;
      const rider = this.snapshot.peers.find((p) => p.id === v.riderId);
      if (rider) {
        v.x = rider.x;
        v.y = rider.y;
        v.z = rider.z;
        v.yaw = rider.yaw;
      }
    }
    if (this.snapshot.letters.filter((l) => !l.delivered).length === 0) this.maybeSpawnLetter();
    this.send({ type: "snapshot", snapshot: this.snapshot });
  }

  leave(): void {
    this.send({ type: "bye", id: this.id });
    this.bus.close();
    this.ws?.close();
    this.mesh.leave();
  }
}

function hashSkin(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  return h;
}

function emptySnapshot(hostId: PeerId): WorldSnapshot {
  const islands: IslandSlot[] = Array.from({ length: MAX_ISLANDS }, (_, slot) => ({
    slot,
    ownerId: null,
    rise: 0,
    seed: slot * 3.17,
  }));
  return { t: 0, hostId, peers: [], letters: [], islands, vehicles: parkedVehicles(), computeMs: 0 };
}

function parkedVehicles(): VehicleState[] {
  const out: VehicleState[] = [];
  SLOTS.forEach((s, slot) => {
    const b = boatMooring(s);
    const h = heliPadPos(s);
    out.push({
      kind: "boat",
      slot,
      x: b.x,
      y: 0.28,
      z: b.z,
      yaw: b.yaw,
      riderId: null,
    });
    out.push({
      kind: "heli",
      slot,
      x: h.x,
      y: padHeight(s, h.x, h.z) + 0.85,
      z: h.z,
      yaw: h.yaw,
      riderId: null,
    });
  });
  return out;
}

export const SNAP_DT = 1 / TICK_HZ;
