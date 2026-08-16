import type { ComputeJob } from "../contracts/types";

export class Donation {
  enabled: boolean;
  private worker: Worker | null = null;
  lastMs = 0;
  lastChecksum = 0;
  lastPoints: Float32Array | null = null;
  private jobId = 1;
  private pending = 0;

  constructor(enabled: boolean) {
    this.enabled = enabled;
    if (enabled) this.start();
  }

  start(): void {
    if (this.worker) return;
    this.worker = new Worker(new URL("./world.worker.ts", import.meta.url), { type: "module" });
    this.worker.onmessage = (e: MessageEvent) => {
      this.pending = 0;
      this.lastMs = e.data.ms ?? 0;
      this.lastChecksum = e.data.checksum ?? 0;
      this.lastPoints = e.data.points as Float32Array;
    };
  }

  stop(): void {
    this.worker?.terminate();
    this.worker = null;
    this.lastPoints = null;
    this.lastMs = 0;
  }

  setEnabled(v: boolean): void {
    this.enabled = v;
    if (v) this.start();
    else this.stop();
  }

  tick(t: number, slot: number): void {
    if (!this.enabled || !this.worker || this.pending) return;
    const job: ComputeJob = { id: this.jobId++, slot, seed: slot * 13.7, t, kind: "flock" };
    this.pending = 1;
    this.worker.postMessage(job);
  }
}
