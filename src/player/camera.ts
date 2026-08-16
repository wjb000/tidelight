import * as THREE from "three";

export class FollowCamera {
  yaw = 0;
  pitch = -0.22;
  private readonly offset = new THREE.Vector3();
  intro = 1;

  constructor(private readonly camera: THREE.PerspectiveCamera) {
    this.camera.position.set(2, 6.4, 86);
  }

  update(dt: number, target: THREE.Vector3, look: { x: number; y: number }, locked: boolean): void {
    if (locked) {
      this.yaw -= look.x * 0.0022;
      this.pitch = THREE.MathUtils.clamp(this.pitch - look.y * 0.0016, -1.05, 0.15);
    }
    const dist = 11.2;
    const height = 4.1;
    this.offset.set(
      Math.sin(this.yaw) * dist * Math.cos(this.pitch),
      height - Math.sin(this.pitch) * 3.4,
      Math.cos(this.yaw) * dist * Math.cos(this.pitch),
    );
    const desired = target.clone().add(this.offset);
    if (this.intro > 0) {
      this.intro = Math.max(0, this.intro - dt * 0.22);
      const k = this.intro * this.intro;
      desired.lerp(new THREE.Vector3(2, 6.8, 84), k);
    }
    this.camera.position.lerp(desired, 1 - Math.pow(0.001, dt));
    const lookAt = target.clone().add(new THREE.Vector3(-5.5, 1.1, -2.2));
    this.camera.lookAt(lookAt);
  }
}
