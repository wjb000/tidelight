import * as THREE from "three";
import type { Input } from "../game/input";
import type { VehicleKind } from "../contracts/types";
import { islandHeight as hIsland, mainHeight } from "../world/height";
import { houseFloorY, insideHouse, slideHouse } from "../world/homestead";
import type { SlotLayout } from "../world/islands";

const WATER = 0.05;
const MAX_WADE = 0.8;
const GRAVITY = 22;
const JUMP_VEL = 7.5;

function wrapAngle(a: number): number {
  const t = Math.PI * 2;
  return ((((a + Math.PI) % t) + t) % t) - Math.PI;
}

function damp(rate: number, dt: number): number {
  return 1 - Math.exp(-rate * dt);
}

export class Controller {
  readonly position = new THREE.Vector3(0, 0.9, 34);
  readonly velocity = new THREE.Vector3();
  yaw = 0;
  grounded = true;
  moving = false;
  verticalVel = 0;
  wadeDepth = 0;
  landImpact = 0;
  mode: VehicleKind = "none";
  inside = false;
  private onGround = 0;

  constructor(private readonly slots: SlotLayout[]) {}

  heightAt(x: number, z: number): number {
    let h = mainHeight(x, z);
    for (const s of this.slots) {
      const ih = hIsland(x, z, s.x, s.z, s.radius, s.seed);
      if (ih > h) h = ih;
    }
    return h;
  }

  private groundAt(x: number, z: number, riseOf: (i: number) => number): number {
    let h = mainHeight(x, z);
    this.slots.forEach((s, i) => {
      if (riseOf(i) < 0.5) return;
      const ih = hIsland(x, z, s.x, s.z, s.radius, s.seed);
      if (ih > h) h = ih;
    });
    if (x > -4.2 && x < 4.2 && z > 24 && z < 52) h = Math.max(h, 0.84);
    return h;
  }

  update(dt: number, input: Input, camYaw: number, riseOf: (i: number) => number): void {
    dt = Math.min(dt, 0.05);
    if (this.mode === "heli") {
      this.updateHeli(dt, input, camYaw, riseOf);
      return;
    }
    if (this.mode === "boat") {
      this.updateBoat(dt, input, camYaw, riseOf);
      return;
    }
    const axis = input.axis();
    const wish = new THREE.Vector3(axis.x, 0, axis.z);
    if (wish.lengthSq() > 0) wish.normalize();
    wish.applyMatrix4(new THREE.Matrix4().makeRotationY(camYaw));
    this.moving = wish.lengthSq() > 0.01;

    const px = this.position.x;
    const pz = this.position.z;
    const groundHere = this.groundAt(px, pz, riseOf);
    this.wadeDepth = Math.max(0, Math.min(WATER - groundHere, MAX_WADE));
    const wade = 1 - 0.62 * (this.wadeDepth / MAX_WADE);
    let speed = (axis.sprint ? 9.2 : 5.4) * wade;
    if (this.moving) {
      const ahead = this.groundAt(px + wish.x * 1.1, pz + wish.z * 1.1, riseOf);
      const slope = (Math.max(ahead, WATER) - Math.max(groundHere, WATER)) / 1.1;
      if (slope > 0) speed /= 1 + slope * 0.55;
      else speed *= Math.min(1.12, 1 - slope * 0.08);
    }

    const rate = this.grounded ? (this.moving ? 11 : 9) : (this.moving ? 3.4 : 1.4);
    const k = damp(rate, dt);
    this.velocity.x += (wish.x * speed - this.velocity.x) * k;
    this.velocity.z += (wish.z * speed - this.velocity.z) * k;

    if (this.grounded && input.consumeJump()) {
      this.velocity.y = JUMP_VEL;
      this.grounded = false;
      this.onGround = 0;
    }
    this.velocity.y = Math.max(this.velocity.y - GRAVITY * dt, -30);

    const wadeable = (x: number, z: number): boolean => this.groundAt(x, z, riseOf) > WATER - MAX_WADE;
    let nx = px + this.velocity.x * dt;
    let nz = pz + this.velocity.z * dt;
    const slid = this.slideHomes(px, pz, nx, nz, riseOf);
    nx = slid.x;
    nz = slid.z;
    if (wadeable(nx, nz) || this.houseHere(nx, nz, riseOf)) {
      this.position.x = nx;
      this.position.z = nz;
    } else if (wadeable(nx, pz) || this.houseHere(nx, pz, riseOf)) {
      this.position.x = nx;
      this.velocity.z = 0;
    } else if (wadeable(px, nz) || this.houseHere(px, nz, riseOf)) {
      this.position.z = nz;
      this.velocity.x = 0;
    } else {
      this.velocity.x = 0;
      this.velocity.z = 0;
    }
    this.position.y += this.velocity.y * dt;

    this.inside = this.houseHere(this.position.x, this.position.z, riseOf);
    const ground = this.inside
      ? this.houseFloor(this.position.x, this.position.z, riseOf) ?? this.groundAt(this.position.x, this.position.z, riseOf)
      : this.groundAt(this.position.x, this.position.z, riseOf);
    const floor = Math.max(ground, WATER - MAX_WADE);
    if (this.position.y <= floor + 0.02 && this.velocity.y <= 0) {
      if (!this.grounded && this.velocity.y < -8) {
        this.landImpact = Math.min(1, (-this.velocity.y - 8) / 10);
        const soft = 1 - this.landImpact * 0.45;
        this.velocity.x *= soft;
        this.velocity.z *= soft;
      }
      this.position.y = floor;
      this.velocity.y = 0;
      this.grounded = true;
      this.onGround = 0.12;
    } else if (this.onGround > 0 && this.velocity.y <= 0 && this.position.y - floor < 0.45) {
      this.position.y = floor;
      this.velocity.y = 0;
      this.grounded = true;
      this.onGround = 0.12;
    } else {
      this.onGround -= dt;
      this.grounded = this.onGround > 0;
      this.landImpact = Math.max(0, this.landImpact - dt * 3);
    }
    this.verticalVel = this.velocity.y;

    const hs = Math.hypot(this.velocity.x, this.velocity.z);
    if (hs > 0.5) {
      const target = Math.atan2(this.velocity.x, this.velocity.z);
      this.yaw += wrapAngle(target - this.yaw) * damp(12, dt);
    }
  }

  private houseHere(x: number, z: number, riseOf: (i: number) => number): boolean {
    return this.slots.some((s, i) => riseOf(i) > 0.45 && insideHouse(s, x, z));
  }

  private houseFloor(x: number, z: number, riseOf: (i: number) => number): number | null {
    for (let i = 0; i < this.slots.length; i++) {
      if (riseOf(i) <= 0.45) continue;
      if (insideHouse(this.slots[i], x, z)) return houseFloorY(this.slots[i]);
    }
    return null;
  }

  private slideHomes(px: number, pz: number, nx: number, nz: number, riseOf: (i: number) => number): { x: number; z: number } {
    let x = nx;
    let z = nz;
    for (let i = 0; i < this.slots.length; i++) {
      if (riseOf(i) <= 0.45) continue;
      const s = slideHouse(this.slots[i], px, pz, x, z);
      x = s.x;
      z = s.z;
    }
    return { x, z };
  }

  private updateBoat(dt: number, input: Input, camYaw: number, riseOf: (i: number) => number): void {
    const axis = input.axis();
    const wish = new THREE.Vector3(axis.x, 0, axis.z);
    if (wish.lengthSq() > 0) wish.normalize();
    wish.applyMatrix4(new THREE.Matrix4().makeRotationY(camYaw));
    this.moving = wish.lengthSq() > 0.01;
    const speed = axis.sprint ? 16 : 11;
    const k = damp(this.moving ? 5 : 3.2, dt);
    this.velocity.x += (wish.x * speed - this.velocity.x) * k;
    this.velocity.z += (wish.z * speed - this.velocity.z) * k;
    this.velocity.y = 0;
    const nx = this.position.x + this.velocity.x * dt;
    const nz = this.position.z + this.velocity.z * dt;
    const land = this.groundAt(nx, nz, riseOf);
    if (land < 0.85) {
      this.position.x = nx;
      this.position.z = nz;
    } else {
      this.velocity.x *= 0.4;
      this.velocity.z *= 0.4;
    }
    this.position.y = 0.32 + Math.sin(performance.now() * 0.003) * 0.05;
    this.grounded = true;
    this.inside = false;
    this.wadeDepth = 0;
    const hs = Math.hypot(this.velocity.x, this.velocity.z);
    if (hs > 0.4) {
      const target = Math.atan2(this.velocity.x, this.velocity.z);
      this.yaw += wrapAngle(target - this.yaw) * damp(6, dt);
    }
  }

  private updateHeli(dt: number, input: Input, camYaw: number, riseOf: (i: number) => number): void {
    const axis = input.axis();
    const wish = new THREE.Vector3(axis.x, 0, axis.z);
    if (wish.lengthSq() > 0) wish.normalize();
    wish.applyMatrix4(new THREE.Matrix4().makeRotationY(camYaw));
    this.moving = wish.lengthSq() > 0.01 || Math.abs(input.vertical()) > 0.1;
    const speed = axis.sprint ? 24 : 16;
    const k = damp(4.2, dt);
    this.velocity.x += (wish.x * speed - this.velocity.x) * k;
    this.velocity.z += (wish.z * speed - this.velocity.z) * k;
    const up = input.vertical();
    this.velocity.y += (up * 9 - this.velocity.y) * damp(3.6, dt);
    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.position.y += this.velocity.y * dt;
    const floor = this.groundAt(this.position.x, this.position.z, riseOf) + 0.85;
    if (this.position.y < floor) {
      this.position.y = floor;
      if (this.velocity.y < 0) this.velocity.y = 0;
      this.grounded = Math.hypot(this.velocity.x, this.velocity.z) < 2.2;
    } else {
      this.grounded = false;
    }
    if (this.position.y > 46) {
      this.position.y = 46;
      this.velocity.y = Math.min(0, this.velocity.y);
    }
    this.inside = false;
    this.wadeDepth = 0;
    const hs = Math.hypot(this.velocity.x, this.velocity.z);
    if (hs > 0.6) {
      const target = Math.atan2(this.velocity.x, this.velocity.z);
      this.yaw += wrapAngle(target - this.yaw) * damp(5, dt);
    }
  }
}
