import * as THREE from "three";
import type { Quality } from "../game/quality";

export class Particles {
  readonly gulls: THREE.Points;
  readonly spray: THREE.Points;
  private readonly gullPos: Float32Array;
  private readonly sprayPos: Float32Array;
  private readonly gullVel: Float32Array;

  constructor(quality: Quality) {
    this.gullPos = new Float32Array(quality.particles * 3);
    this.gullVel = new Float32Array(quality.particles * 3);
    for (let i = 0; i < quality.particles; i++) {
      this.gullPos[i * 3] = (Math.random() - 0.5) * 180;
      this.gullPos[i * 3 + 1] = 8 + Math.random() * 18;
      this.gullPos[i * 3 + 2] = (Math.random() - 0.5) * 180;
      this.gullVel[i * 3] = (Math.random() - 0.5) * 4;
      this.gullVel[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    const gGeo = new THREE.BufferGeometry();
    gGeo.setAttribute("position", new THREE.BufferAttribute(this.gullPos, 3));
    this.gulls = new THREE.Points(
      gGeo,
      new THREE.PointsMaterial({ color: 0xf6efe4, size: 0.12, sizeAttenuation: true, transparent: true, opacity: 0.35 }),
    );

    this.sprayPos = new Float32Array(160 * 3);
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute("position", new THREE.BufferAttribute(this.sprayPos, 3));
    this.spray = new THREE.Points(
      sGeo,
      new THREE.PointsMaterial({ color: 0xd6f0ee, size: 0.18, transparent: true, opacity: 0.55 }),
    );
  }

  applyFlock(points: Float32Array): void {
    const n = Math.min(points.length, this.gullPos.length);
    for (let i = 0; i < n; i++) this.gullPos[i] = points[i];
    (this.gulls.geometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
  }

  update(t: number, extra: number): void {
    const n = this.gullPos.length / 3;
    const boost = 1 + extra * 1.4;
    for (let i = 0; i < n; i++) {
      const ix = i * 3;
      this.gullPos[ix] += this.gullVel[ix] * 0.016 * boost;
      this.gullPos[ix + 2] += this.gullVel[ix + 2] * 0.016 * boost;
      this.gullPos[ix + 1] = 10 + Math.sin(t * 0.7 + i) * 2.4;
      if (Math.hypot(this.gullPos[ix], this.gullPos[ix + 2]) > 140) {
        this.gullVel[ix] *= -1;
        this.gullVel[ix + 2] *= -1;
      }
    }
    (this.gulls.geometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;

    for (let i = 0; i < 160; i++) {
      const a = (i / 160) * Math.PI * 2;
      const r = 58 + Math.sin(t * 1.4 + i) * 1.5;
      this.sprayPos[i * 3] = Math.cos(a) * r;
      this.sprayPos[i * 3 + 1] = 0.2 + Math.abs(Math.sin(t * 2 + i)) * 0.5;
      this.sprayPos[i * 3 + 2] = Math.sin(a) * r;
    }
    (this.spray.geometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
  }
}
