import * as THREE from "three";
import type { Input } from "../game/input";
import { islandHeight as hIsland, mainHeight } from "../world/height";
import type { SlotLayout } from "../world/islands";

export class Controller {
  readonly position = new THREE.Vector3(0, 0.9, 34);
  readonly velocity = new THREE.Vector3();
  yaw = 0;
  grounded = false;
  moving = false;
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

  update(dt: number, input: Input, camYaw: number, riseOf: (i: number) => number): void {
    const axis = input.axis();
    const look = input.consumeLook();
    this.yaw -= look.x * 0.0022;
    const wish = new THREE.Vector3(axis.x, 0, axis.z);
    if (wish.lengthSq() > 0) wish.normalize();
    const speed = (axis.sprint ? 9.2 : 5.4) * (this.position.y < 0.35 ? 0.45 : 1);
    const face = new THREE.Matrix4().makeRotationY(camYaw);
    wish.applyMatrix4(face);
    this.moving = wish.lengthSq() > 0.01;
    this.velocity.x += (wish.x * speed - this.velocity.x) * Math.min(1, dt * 10);
    this.velocity.z += (wish.z * speed - this.velocity.z) * Math.min(1, dt * 10);
    this.velocity.y -= 22 * dt;
    if (this.grounded && axis.jump) {
      this.velocity.y = 7.2;
      this.grounded = false;
    }
    this.position.addScaledVector(this.velocity, dt);

    let ground = this.heightAt(this.position.x, this.position.z);
    if (this.position.x > -4.2 && this.position.x < 4.2 && this.position.z > 24 && this.position.z < 52) {
      ground = Math.max(ground, 0.84);
    }
    this.slots.forEach((s, i) => {
      if (riseOf(i) < 0.5) return;
      const ih = hIsland(this.position.x, this.position.z, s.x, s.z, s.radius, s.seed);
      if (ih > ground) ground = ih;
    });
    const water = 0.05;
    const floor = Math.max(ground, water);
    if (this.position.y <= floor + 0.02 && this.velocity.y <= 0) {
      this.position.y = floor;
      this.velocity.y = 0;
      this.grounded = true;
      this.onGround = 0.12;
    } else {
      this.onGround -= dt;
      this.grounded = this.onGround > 0;
    }
    if (this.moving) this.yaw = Math.atan2(this.velocity.x, this.velocity.z);
  }
}
