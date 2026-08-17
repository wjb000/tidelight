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

const PALETTE = [
  0xc45c3a, 0xe8c37a, 0x3d7a6b, 0x7a8cc4, 0xd47aa0, 0xd4a24c, 0x49c5b6, 0xe07a3d, 0x8a6bc4, 0x5aa35a, 0xd46b6b, 0x4aa0c8,
];

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
    this.skin = Math.abs(hashSkin(this.id)) % 8;
    this.snapshot = emptySnapshot(this.id);
    this.mesh.onMessage = (m) => this.ingest(m);
    this.mesh.onJoin = () => this.hello();
    this.mesh.onLeave = (pid) => {
      if (this.isHost) this.drop(pid, "left the harbor");
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
    setInterval(() => {
      if (this.isHost) {
        this.hostSeen = performance.now();
        return;
      }
      if (performance.now() - this.hostSeen > 2200) this.becomeHost();
    }, 700);
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
      if (this.snapshot.hostId === msg.id && !this.isHost) {
        this.drop(msg.id, "left the harbor");
        this.becomeHost();
      } else if (this.isHost) this.drop(msg.id, "left the harbor");
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
    const living = this.snapshot.peers.map((p) => p.id);
    if (!living.includes(this.id)) living.push(this.id);
    living.sort();
    if (living[0] && living[0] !== this.id && this.snapshot.peers.length > 0) return;
    this.isHost = true;
    this.snapshot.hostId = this.id;
    this.hostSeen = performance.now();
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
    const color = nextFreeColor(this.snapshot.peers.map((p) => p.color), id);
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
    if (isl) {
      isl.ownerId = id;
      isl.rise = 1;
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

  private drop(id: PeerId, reason = "drifted away"): void {
    const p = this.snapshot.peers.find((x) => x.id === id);
    if (!p) return;
    this.snapshot.peers = this.snapshot.peers.filter((x) => x.id !== id);
    const isl = this.snapshot.islands[p.islandSlot];
    if (isl && isl.ownerId === id) isl.ownerId = null;
    this.parkPeerVehicles(id);
    for (const letter of this.snapshot.letters) {
      if (letter.carrierId === id) {
        letter.carrierId = null;
        letter.x = p.x;
        letter.y = p.y + 0.4;
        letter.z = p.z;
      }
    }
    this.onToast(`${p.name} ${reason}`);
    this.send({ type: "toast", text: `${p.name} ${reason}` });
    if (this.isHost) this.send({ type: "snapshot", snapshot: this.snapshot });
  }

  private parkPeerVehicles(id: PeerId): void {
    if (!this.snapshot.vehicles) this.snapshot.vehicles = parkedVehicles();
    for (const v of this.snapshot.vehicles) {
      if (v.riderId !== id) continue;
      v.riderId = null;
      this.returnVehicleHome(v);
    }
  }

  private returnVehicleHome(v: VehicleState): void {
    const slot = SLOTS[v.slot];
    if (!slot) return;
    if (v.kind === "boat") {
      const b = boatMooring(slot);
      v.x = b.x;
      v.y = 0.28;
      v.z = b.z;
      v.yaw = b.yaw;
    } else {
      const h = heliPadPos(slot);
      v.x = h.x;
      v.y = padHeight(slot, h.x, h.z) + 0.85;
      v.z = h.z;
      v.yaw = h.yaw;
    }
  }

  claimVehicle(kind: "heli" | "boat", slot: number, x: number, y: number, z: number, yaw: number): boolean {
    if (!this.snapshot.vehicles) this.snapshot.vehicles = parkedVehicles();
    const v = this.snapshot.vehicles.find((item) => item.kind === kind && item.slot === slot);
    if (!v) return false;
    if (v.riderId && v.riderId !== this.id) return false;
    for (const other of this.snapshot.vehicles) {
      if (other.riderId === this.id) other.riderId = null;
    }
    v.riderId = this.id;
    v.x = x;
    v.y = y;
    v.z = z;
    v.yaw = yaw;
    const me = this.snapshot.peers.find((p) => p.id === this.id);
    if (me) {
      me.vehicle = kind;
      me.vehicleSlot = slot;
      me.x = x;
      me.y = y;
      me.z = z;
      me.yaw = yaw;
    }
    if (this.isHost) this.send({ type: "snapshot", snapshot: this.snapshot });
    return true;
  }

  releaseVehicle(kind: "heli" | "boat" | "none", slot: number, x: number, y: number, z: number, yaw: number): void {
    if (kind === "none") return;
    if (!this.snapshot.vehicles) this.snapshot.vehicles = parkedVehicles();
    const v = this.snapshot.vehicles.find((item) => item.kind === kind && item.slot === slot);
    if (!v || (v.riderId && v.riderId !== this.id)) return;
    v.riderId = null;
    v.x = x;
    v.y = y;
    v.z = z;
    v.yaw = yaw;
    const me = this.snapshot.peers.find((p) => p.id === this.id);
    if (me) {
      me.vehicle = "none";
      me.x = x;
      me.y = y;
      me.z = z;
      me.yaw = yaw;
    }
    if (this.isHost) this.send({ type: "snapshot", snapshot: this.snapshot });
  }

  heartbeat(peer: PeerPresence | null): void {
    if (peer) this.publishSelf(peer);
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
    const v = this.snapshot.vehicles.find((x) => x.kind === p.vehicle && x.slot === p.vehicleSlot);
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
    const destSlot = dests[Math.floor(Math.random() * dests.length)];
    const fromSlot = this.snapshot.peers[0]?.islandSlot ?? 0;
    const dock = doorWorld(SLOTS[fromSlot] ?? SLOTS[0]);
    this.snapshot.letters.push({
      id: uid(),
      x: dock.x + 1.2,
      y: padHeight(SLOTS[fromSlot] ?? SLOTS[0], dock.x, dock.z) + 0.45,
      z: dock.z + 0.6,
      carrierId: null,
      destSlot,
      delivered: false,
    });
  }

  publishSelf(peer: PeerPresence): void {
    const msg = {
      type: "state" as const,
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
    };
    if (this.isHost) this.patchPeer(msg);
    else {
      const p = this.snapshot.peers.find((x) => x.id === this.id);
      if (p) {
        p.x = peer.x;
        p.y = peer.y;
        p.z = peer.z;
        p.yaw = peer.yaw;
        p.vehicle = peer.vehicle;
        p.vehicleSlot = peer.vehicleSlot;
        p.inside = peer.inside;
        p.lastSeen = performance.now();
      }
    }
    this.send(msg);
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
      const owner = this.snapshot.peers.find((p) => p.islandSlot === isl.slot);
      const target = owner ? 1 : 0;
      isl.rise += (target - isl.rise) * Math.min(1, dt * 2.4);
      isl.ownerId = owner?.id ?? null;
    }
    this.snapshot.t += dt;
    this.snapshot.computeMs = computeMs;
    const now = performance.now();
    const stale = this.snapshot.peers.filter((p) => p.id !== this.id && now - p.lastSeen >= 12000);
    for (const p of stale) this.drop(p.id, "drifted away");
    const alive = new Set(this.snapshot.peers.map((p) => p.id));
    if (!this.snapshot.vehicles) this.snapshot.vehicles = parkedVehicles();
    for (const v of this.snapshot.vehicles) {
      if (v.riderId && !alive.has(v.riderId)) {
        v.riderId = null;
        this.returnVehicleHome(v);
      }
      const rider = this.snapshot.peers.find((p) => p.id === v.riderId);
      if (rider) {
        v.x = rider.x;
        v.y = rider.y;
        v.z = rider.z;
        v.yaw = rider.yaw;
      } else if (!v.riderId && (this.snapshot.islands[v.slot]?.rise ?? 0) < 0.2) {
        this.returnVehicleHome(v);
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

function nextFreeColor(used: number[], id: string): number {
  const start = Math.abs(hashSkin(id)) % PALETTE.length;
  for (let i = 0; i < PALETTE.length; i++) {
    const c = PALETTE[(start + i) % PALETTE.length];
    if (!used.includes(c)) return c;
  }
  return PALETTE[start];
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
