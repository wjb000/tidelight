export type QualityPreset = "low" | "med" | "high";

export type PeerId = string;

export type VehicleKind = "none" | "heli" | "boat";

export interface PeerPresence {
  id: PeerId;
  name: string;
  color: number;
  x: number;
  y: number;
  z: number;
  yaw: number;
  moving: boolean;
  waving: boolean;
  carrying: boolean;
  donate: boolean;
  islandSlot: number;
  lastSeen: number;
  skin: number;
  vehicle: VehicleKind;
  vehicleSlot: number;
  inside: boolean;
}

export interface VehicleState {
  kind: "heli" | "boat";
  slot: number;
  x: number;
  y: number;
  z: number;
  yaw: number;
  riderId: PeerId | null;
}

export interface ChatLine {
  from: PeerId;
  name: string;
  text: string;
  t: number;
}

export interface LetterState {
  id: string;
  x: number;
  y: number;
  z: number;
  carrierId: PeerId | null;
  destSlot: number;
  delivered: boolean;
}

export interface IslandSlot {
  slot: number;
  ownerId: PeerId | null;
  rise: number;
  seed: number;
}

export interface WorldSnapshot {
  t: number;
  hostId: PeerId;
  peers: PeerPresence[];
  letters: LetterState[];
  islands: IslandSlot[];
  vehicles: VehicleState[];
  computeMs: number;
}

export type ClientMsg =
  | { type: "hello"; id: PeerId; name: string; donate: boolean; skin: number }
  | {
      type: "state";
      id: PeerId;
      x: number;
      y: number;
      z: number;
      yaw: number;
      moving: boolean;
      waving: boolean;
      carrying: boolean;
      donate: boolean;
      vehicle: VehicleKind;
      vehicleSlot: number;
      inside: boolean;
    }
  | { type: "letter"; letter: LetterState }
  | { type: "wave"; id: PeerId }
  | { type: "chat"; id: PeerId; name: string; text: string }
  | { type: "bye"; id: PeerId };

export type HostMsg =
  | { type: "welcome"; you: PeerId; snapshot: WorldSnapshot }
  | { type: "snapshot"; snapshot: WorldSnapshot }
  | { type: "toast"; text: string };

export interface ComputeJob {
  id: number;
  slot: number;
  seed: number;
  t: number;
  kind: "flock" | "wake" | "weather";
}

export interface ComputeResult {
  id: number;
  slot: number;
  kind: ComputeJob["kind"];
  points: Float32Array;
  checksum: number;
}

export const MAX_ISLANDS = 12;
export const TICK_HZ = 20;
export const ISLAND_RADIUS = 18;
export const WORLD_RADIUS = 220;
