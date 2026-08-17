import * as THREE from "three";
import type { Input } from "../game/input";
import type { VehicleKind } from "../contracts/types";
import { islandHeight as hIsland } from "../world/height";
import { doorWorld } from "../world/homestead";
import { insideAny, placeFloor, slidePlaces, type Place } from "../world/places";
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
  readonly position = new THREE.Vector3();
  readonly velocity = new THREE.Vector3();
  yaw = 0;
  grounded = true;
  moving = false;
  verticalVel = 0;
  wadeDepth = 0;
  landImpact = 0;
  mode: VehicleKind = "none";
  vehicleSlot = 0;
  inside = false;
  place: Place | null = null;
  stay: Place | null = null;
  private onGround = 0;

  constructor(private readonly slots: SlotLayout[]) {
    const door = doorWorld(slots[0]);
    this.position.set(door.x, 1.2, door.z);
    this.yaw = door.yaw;
  }

  applyPose(x: number, y: number, z: number, yaw: number): void {
    this.position.set(x, y, z);
    this.yaw = yaw;
    this.velocity.set(0, 0, 0);
  }

  setStay(place: Place | null): void {
    this.stay = place;
    this.place = place;
    this.inside = !!place;
  }

  heightAt(x: number, z: number): number {
    let h = -1.6;
    for (const s of this.slots) {
      const ih = hIsland(x, z, s.x, s.z, s.radius, s.seed);
      if (ih > h) h = ih;
    }
    return h;
  }

  private groundAt(x: number, z: number, riseOf: (i: number) => number): number {
    let h = -1.6;
    this.slots.forEach((s, i) => {
      if (riseOf(i) < 0.45) return;
      const ih = hIsland(x, z, s.x, s.z, s.radius, s.seed);
      if (ih > h) h = ih;
    });
    if (riseOf(0) > 0.45 && x > -4.2 && x < 4.2 && z > 24 && z < 52) h = Math.max(h, 0.84);
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

    if (this.grounded && input.consumeJump() && !this.stay) {
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
    if (wadeable(nx, nz) || this.placeHere(nx, nz, riseOf)) {
      this.position.x = nx;
      this.position.z = nz;
    } else if (wadeable(nx, pz) || this.placeHere(nx, pz, riseOf)) {
      this.position.x = nx;
      this.velocity.z = 0;
    } else if (wadeable(px, nz) || this.placeHere(px, nz, riseOf)) {
      this.position.z = nz;
      this.velocity.x = 0;
    } else {
      this.velocity.x = 0;
      this.velocity.z = 0;
    }
    this.position.y += this.velocity.y * dt;

    const geom = insideAny(this.slots, this.position.x, this.position.z, riseOf);
    const loose = insideAny(this.slots, this.position.x, this.position.z, riseOf, true);
    if (this.stay && (loose?.id === this.stay.id || geom?.id === this.stay.id)) {
      this.place = this.stay;
      this.inside = true;
    } else if (this.stay) {
      this.stay = null;
      this.place = null;
      this.inside = false;
    } else {
      this.place = geom;
      this.inside = false;
    }
    const ground = this.place
      ? placeFloor(this.place, this.slots)
      : this.groundAt(this.position.x, this.position.z, riseOf);
    const floor = Math.max(ground, WATER - MAX_WADE);
    if (this.stay) {
      this.position.y = floor;
      this.velocity.y = 0;
      this.grounded = true;
      this.onGround = 0.2;
      this.verticalVel = 0;
    } else if (this.position.y <= floor + 0.02 && this.velocity.y <= 0) {
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

  private placeHere(x: number, z: number, riseOf: (i: number) => number): boolean {
    return !!insideAny(this.slots, x, z, riseOf);
  }

  private slideHomes(px: number, pz: number, nx: number, nz: number, riseOf: (i: number) => number): { x: number; z: number } {
    const sealed = this.stay?.kind === "house" ? (this.stay.slot ?? null) : null;
    return slidePlaces(this.slots, px, pz, nx, nz, riseOf, sealed);
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
    const here = this.groundAt(this.position.x, this.position.z, riseOf);
    if (land < 1.05 || here >= 1.05) {
      this.position.x = nx;
      this.position.z = nz;
    } else {
      this.velocity.x *= 0.45;
      this.velocity.z *= 0.45;
    }
    this.position.y = 0.38 + Math.sin(performance.now() * 0.003) * 0.06;
    this.grounded = true;
    this.setStay(null);
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
    this.setStay(null);
    this.wadeDepth = 0;
    const hs = Math.hypot(this.velocity.x, this.velocity.z);
    if (hs > 0.6) {
      const target = Math.atan2(this.velocity.x, this.velocity.z);
      this.yaw += wrapAngle(target - this.yaw) * damp(5, dt);
    }
  }
}
