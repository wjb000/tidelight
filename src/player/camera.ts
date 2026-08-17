import * as THREE from "three";
import { mainHeight } from "../world/height";

const WATER = 0.05;

function damp(rate: number, dt: number): number {
  return 1 - Math.exp(-rate * dt);
}

export interface RoomFrame {
  x: number;
  z: number;
  yaw: number;
  w: number;
  d: number;
  floor: number;
  h: number;
}

export class FollowCamera {
  yaw = 0;
  pitch = -0.24;
  intro = 1;
  firstPerson = false;
  private dist = 9.6;
  private distTarget = 9.6;
  private lookHeight = 1.35;
  private readonly pivot = new THREE.Vector3();
  private readonly lookPoint = new THREE.Vector3();
  private readonly prevTarget = new THREE.Vector3();
  private readonly offset = new THREE.Vector3();
  private swayPhase = 0;
  private started = false;
  private mode: "none" | "heli" | "boat" | "inside" = "none";
  private room: RoomFrame | null = null;

  constructor(private readonly camera: THREE.PerspectiveCamera) {
    this.camera.position.set(2, 6.4, 86);
    addEventListener(
      "wheel",
      (e) => {
        if (this.mode === "inside") {
          this.distTarget = THREE.MathUtils.clamp(this.distTarget + e.deltaY * 0.004, 1.6, 3.2);
          return;
        }
        const min = this.mode === "none" ? 4 : 8;
        const max = this.mode === "heli" ? 22 : 16;
        this.distTarget = THREE.MathUtils.clamp(this.distTarget + e.deltaY * 0.008, min, max);
      },
      { passive: true },
    );
  }

  setRoom(room: RoomFrame | null): void {
    this.room = room;
  }

  enterInterior(inside: boolean): void {
    this.mode = inside ? "inside" : "none";
    this.intro = 0;
    this.firstPerson = false;
    if (inside) {
      this.dist = 2.35;
      this.distTarget = 2.35;
      this.lookHeight = 1.28;
      this.camera.fov = 46;
      this.pitch = -0.08;
    } else {
      this.dist = 8.4;
      this.distTarget = 9.6;
      this.lookHeight = 1.38;
      this.camera.fov = 52;
    }
    this.camera.updateProjectionMatrix();
    this.started = false;
  }

  setTravel(mode: "none" | "heli" | "boat", inside: boolean): void {
    this.mode = inside ? "inside" : mode;
    if (inside) {
      this.distTarget = THREE.MathUtils.clamp(this.distTarget, 1.6, 3.2);
      this.lookHeight = 1.28;
      this.camera.fov += (46 - this.camera.fov) * 0.16;
    } else if (mode === "heli") {
      this.distTarget = Math.max(this.distTarget, 14.5);
      this.lookHeight = 1.05;
      this.camera.fov += (56 - this.camera.fov) * 0.08;
    } else if (mode === "boat") {
      this.distTarget = Math.max(this.distTarget, 10.4);
      this.lookHeight = 1.15;
      this.camera.fov += (50 - this.camera.fov) * 0.08;
    } else {
      if (this.distTarget < 4 || this.distTarget > 14) this.distTarget = 9.2;
      this.lookHeight = 1.38;
      this.camera.fov += (50 - this.camera.fov) * 0.08;
    }
    this.camera.updateProjectionMatrix();
  }

  update(dt: number, target: THREE.Vector3, look: { x: number; y: number }, locked: boolean): void {
    void locked;
    dt = Math.min(dt, 0.05);
    this.yaw -= look.x * 0.0022;
    const pitchMin = this.mode === "inside" ? -0.45 : -1.05;
    const pitchMax = this.mode === "inside" ? 0.28 : 0.32;
    this.pitch = THREE.MathUtils.clamp(this.pitch - look.y * 0.0016, pitchMin, pitchMax);
    this.dist += (this.distTarget - this.dist) * damp(this.mode === "inside" ? 12 : 8, dt);
    this.firstPerson = false;

    if (!this.started) {
      this.pivot.copy(target);
      this.prevTarget.copy(target);
      this.lookPoint.copy(target).add(new THREE.Vector3(0, this.lookHeight, 0));
      this.started = true;
    }
    const speed = this.prevTarget.distanceTo(target) / Math.max(dt, 1e-4);
    this.prevTarget.copy(target);
    const ahead = target.clone();
    if (this.mode !== "inside") {
      const lookAhead = THREE.MathUtils.clamp(speed * 0.22, 0, 4.5);
      ahead.x += Math.sin(this.yaw + Math.PI) * lookAhead * 0.15;
      ahead.z += Math.cos(this.yaw + Math.PI) * lookAhead * 0.15;
    }
    this.pivot.lerp(ahead, damp(this.mode === "inside" ? 16 : 9, dt));

    const lookDown = Math.max(0, -this.pitch);
    const cp = Math.cos(this.pitch);
    const extraY = this.mode === "heli" ? 2.2 : this.mode === "boat" ? 1.2 : this.mode === "inside" ? 0.35 : 0;
    const shoulder = this.mode === "inside" ? 0.32 : 0;
    this.offset.set(
      Math.sin(this.yaw) * this.dist * cp + Math.cos(this.yaw) * shoulder,
      1.7 - Math.sin(this.pitch) * this.dist * 0.72 + lookDown * 0.7 + extraY,
      Math.cos(this.yaw) * this.dist * cp - Math.sin(this.yaw) * shoulder,
    );
    const desired = this.pivot.clone().add(this.offset);

    if (this.mode === "inside" && this.room) {
      this.clampInRoom(desired, target);
    }

    const swayAmp = THREE.MathUtils.clamp(speed / 9, 0, 1) * (this.mode === "none" ? 0.055 : 0.02);
    this.swayPhase += dt * (4.2 + speed * 0.4);
    if (this.mode !== "inside") {
      desired.x += Math.cos(this.yaw) * Math.sin(this.swayPhase) * swayAmp;
      desired.z += -Math.sin(this.yaw) * Math.sin(this.swayPhase) * swayAmp;
      desired.y += Math.sin(this.swayPhase * 2) * swayAmp * 0.45;
    }

    if (this.intro > 0 && this.mode === "none") {
      this.intro = Math.max(0, this.intro - dt * 0.7);
      const k = this.intro * this.intro;
      desired.lerp(new THREE.Vector3(2, 6.8, 84), k);
    } else {
      this.intro = 0;
    }

    if (this.mode !== "inside") {
      const minDesired = Math.max(mainHeight(desired.x, desired.z), WATER) + 0.6;
      if (desired.y < minDesired) desired.y = minDesired;
    }
    this.camera.position.lerp(desired, damp(this.mode === "inside" ? 14 : 7.5, dt));
    if (this.mode === "inside" && this.room) this.clampInRoom(this.camera.position, target);
    const p = this.camera.position;
    if (this.mode !== "inside") {
      const minY = Math.max(mainHeight(p.x, p.z), WATER) + 0.6;
      if (p.y < minY) p.y = minY;
    }

    const lookGoal = this.pivot.clone().add(new THREE.Vector3(0, this.lookHeight - lookDown * 0.4, 0));
    this.lookPoint.lerp(lookGoal, damp(14, dt));
    this.camera.lookAt(this.lookPoint);
  }

  private clampInRoom(p: THREE.Vector3, target: THREE.Vector3): void {
    const r = this.room!;
    const dx = p.x - r.x;
    const dz = p.z - r.z;
    const c = Math.cos(r.yaw);
    const s = Math.sin(r.yaw);
    let lx = dx * c - dz * s;
    let lz = dx * s + dz * c;
    const pad = 0.55;
    lx = THREE.MathUtils.clamp(lx, -r.w / 2 + pad, r.w / 2 - pad);
    lz = THREE.MathUtils.clamp(lz, -r.d / 2 + pad, r.d / 2 - pad);
    p.x = r.x + lx * c + lz * s;
    p.z = r.z - lx * s + lz * c;
    p.y = THREE.MathUtils.clamp(p.y, r.floor + 1.05, r.floor + r.h - 0.45);
    const toCam = Math.hypot(p.x - target.x, p.z - target.z);
    if (toCam < 1.15) {
      const k = 1.15 / Math.max(toCam, 0.05);
      p.x = target.x + (p.x - target.x) * k;
      p.z = target.z + (p.z - target.z) * k;
      const dx2 = p.x - r.x;
      const dz2 = p.z - r.z;
      lx = dx2 * c - dz2 * s;
      lz = dx2 * s + dz2 * c;
      lx = THREE.MathUtils.clamp(lx, -r.w / 2 + pad, r.w / 2 - pad);
      lz = THREE.MathUtils.clamp(lz, -r.d / 2 + pad, r.d / 2 - pad);
      p.x = r.x + lx * c + lz * s;
      p.z = r.z - lx * s + lz * c;
    }
  }
}
