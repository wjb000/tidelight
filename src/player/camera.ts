import * as THREE from "three";
import { mainHeight } from "../world/height";

const WATER = 0.05;

function damp(rate: number, dt: number): number {
  return 1 - Math.exp(-rate * dt);
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

  constructor(private readonly camera: THREE.PerspectiveCamera) {
    this.camera.position.set(2, 6.4, 86);
    addEventListener(
      "wheel",
      (e) => {
        if (this.mode === "inside") return;
        const min = this.mode === "none" ? 4 : 8;
        const max = this.mode === "heli" ? 22 : 16;
        this.distTarget = THREE.MathUtils.clamp(this.distTarget + e.deltaY * 0.008, min, max);
      },
      { passive: true },
    );
  }

  enterInterior(inside: boolean): void {
    this.mode = inside ? "inside" : "none";
    this.intro = 0;
    this.firstPerson = inside;
    if (inside) {
      this.dist = 0.08;
      this.distTarget = 0.08;
      this.lookHeight = 1.48;
      this.camera.fov = 62;
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
      this.distTarget = 0.08;
      this.lookHeight = 1.48;
      this.camera.fov += (62 - this.camera.fov) * 0.18;
    } else if (mode === "heli") {
      this.distTarget = Math.max(this.distTarget, 15.5);
      this.lookHeight = 1.05;
      this.camera.fov += (58 - this.camera.fov) * 0.08;
    } else if (mode === "boat") {
      this.distTarget = Math.max(this.distTarget, 11.4);
      this.lookHeight = 1.2;
      this.camera.fov += (54 - this.camera.fov) * 0.08;
    } else {
      if (this.distTarget < 4 || this.distTarget > 14) this.distTarget = 9.6;
      this.lookHeight = 1.38;
      this.camera.fov += (52 - this.camera.fov) * 0.08;
    }
    this.camera.updateProjectionMatrix();
  }

  update(dt: number, target: THREE.Vector3, look: { x: number; y: number }, locked: boolean): void {
    void locked;
    dt = Math.min(dt, 0.05);
    this.yaw -= look.x * 0.0022;
    const pitchMin = this.mode === "inside" ? -1.15 : -1.05;
    const pitchMax = this.mode === "inside" ? 0.85 : 0.32;
    this.pitch = THREE.MathUtils.clamp(this.pitch - look.y * 0.0016, pitchMin, pitchMax);
    this.dist += (this.distTarget - this.dist) * damp(this.mode === "inside" ? 14 : 8, dt);
    this.firstPerson = this.mode === "inside" || this.dist < 1.15;

    if (!this.started) {
      this.pivot.copy(target);
      this.prevTarget.copy(target);
      this.lookPoint.copy(target).add(new THREE.Vector3(0, this.lookHeight, 0));
      this.started = true;
    }
    const speed = this.prevTarget.distanceTo(target) / Math.max(dt, 1e-4);
    this.prevTarget.copy(target);
    this.pivot.lerp(target, damp(this.mode === "inside" ? 18 : 9, dt));

    if (this.firstPerson) {
      const eye = target.clone();
      eye.y += this.lookHeight;
      const lookDir = new THREE.Vector3(
        -Math.sin(this.yaw) * Math.cos(this.pitch),
        Math.sin(this.pitch),
        -Math.cos(this.yaw) * Math.cos(this.pitch),
      );
      this.camera.position.copy(eye);
      this.lookPoint.copy(eye).add(lookDir);
      this.camera.lookAt(this.lookPoint);
      this.pivot.copy(target);
      this.intro = 0;
      return;
    }

    const lookDown = Math.max(0, -this.pitch);
    const cp = Math.cos(this.pitch);
    const extraY = this.mode === "heli" ? 2.4 : this.mode === "boat" ? 1.35 : 0;
    this.offset.set(
      Math.sin(this.yaw) * this.dist * cp,
      1.9 - Math.sin(this.pitch) * this.dist * 0.72 + lookDown * 0.9 + extraY,
      Math.cos(this.yaw) * this.dist * cp,
    );
    const desired = this.pivot.clone().add(this.offset);

    const swayAmp = THREE.MathUtils.clamp(speed / 9, 0, 1) * (this.mode === "none" ? 0.055 : 0.03);
    this.swayPhase += dt * (4.2 + speed * 0.4);
    desired.x += Math.cos(this.yaw) * Math.sin(this.swayPhase) * swayAmp;
    desired.z += -Math.sin(this.yaw) * Math.sin(this.swayPhase) * swayAmp;
    desired.y += Math.sin(this.swayPhase * 2) * swayAmp * 0.45;

    if (this.intro > 0 && this.mode === "none") {
      this.intro = Math.max(0, this.intro - dt * 0.55);
      const k = this.intro * this.intro;
      desired.lerp(new THREE.Vector3(2, 6.8, 84), k);
    } else {
      this.intro = 0;
    }

    const minDesired = Math.max(mainHeight(desired.x, desired.z), WATER) + 0.6;
    if (desired.y < minDesired) desired.y = minDesired;
    this.camera.position.lerp(desired, damp(7.5, dt));
    const p = this.camera.position;
    const minY = Math.max(mainHeight(p.x, p.z), WATER) + 0.6;
    if (p.y < minY) p.y = minY;

    const lookGoal = this.pivot.clone().add(new THREE.Vector3(0, this.lookHeight - lookDown * 0.55, 0));
    this.lookPoint.lerp(lookGoal, damp(11, dt));
    this.camera.lookAt(this.lookPoint);
  }
}
