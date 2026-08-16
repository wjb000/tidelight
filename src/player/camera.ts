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
  private dist = 9.6;
  private distTarget = 9.6;
  private readonly pivot = new THREE.Vector3();
  private readonly lookPoint = new THREE.Vector3();
  private readonly prevTarget = new THREE.Vector3();
  private readonly offset = new THREE.Vector3();
  private swayPhase = 0;
  private started = false;

  constructor(private readonly camera: THREE.PerspectiveCamera) {
    this.camera.position.set(2, 6.4, 86);
    addEventListener(
      "wheel",
      (e) => {
        this.distTarget = THREE.MathUtils.clamp(this.distTarget + e.deltaY * 0.008, 4, 14);
      },
      { passive: true },
    );
  }

  update(dt: number, target: THREE.Vector3, look: { x: number; y: number }, locked: boolean): void {
    void locked; // Input only accumulates deltas when locked or dragging
    dt = Math.min(dt, 0.05);
    this.yaw -= look.x * 0.0022;
    this.pitch = THREE.MathUtils.clamp(this.pitch - look.y * 0.0016, -1.05, 0.3);
    this.dist += (this.distTarget - this.dist) * damp(8, dt);

    if (!this.started) {
      this.pivot.copy(target);
      this.prevTarget.copy(target);
      this.lookPoint.copy(target).add(new THREE.Vector3(0, 1.35, 0));
      this.started = true;
    }
    const speed = this.prevTarget.distanceTo(target) / Math.max(dt, 1e-4);
    this.prevTarget.copy(target);
    this.pivot.lerp(target, damp(9, dt));

    const lookDown = Math.max(0, -this.pitch);
    const cp = Math.cos(this.pitch);
    this.offset.set(
      Math.sin(this.yaw) * this.dist * cp,
      1.9 - Math.sin(this.pitch) * this.dist * 0.72 + lookDown * 0.9,
      Math.cos(this.yaw) * this.dist * cp,
    );
    const desired = this.pivot.clone().add(this.offset);

    const swayAmp = THREE.MathUtils.clamp(speed / 9, 0, 1) * 0.055;
    this.swayPhase += dt * (4.2 + speed * 0.4);
    desired.x += Math.cos(this.yaw) * Math.sin(this.swayPhase) * swayAmp;
    desired.z += -Math.sin(this.yaw) * Math.sin(this.swayPhase) * swayAmp;
    desired.y += Math.sin(this.swayPhase * 2) * swayAmp * 0.45;

    if (this.intro > 0) {
      this.intro = Math.max(0, this.intro - dt * 0.22);
      const k = this.intro * this.intro;
      desired.lerp(new THREE.Vector3(2, 6.8, 84), k);
    }

    const minDesired = Math.max(mainHeight(desired.x, desired.z), WATER) + 0.6;
    if (desired.y < minDesired) desired.y = minDesired;
    this.camera.position.lerp(desired, damp(7.5, dt));
    const p = this.camera.position;
    const minY = Math.max(mainHeight(p.x, p.z), WATER) + 0.6;
    if (p.y < minY) p.y = minY;

    const lookGoal = this.pivot.clone().add(new THREE.Vector3(0, 1.35 - lookDown * 0.7, 0));
    this.lookPoint.lerp(lookGoal, damp(11, dt));
    this.camera.lookAt(this.lookPoint);
  }
}
