const gulls = new Float32Array(240 * 3);
const vel = new Float32Array(240 * 3);
for (let i = 0; i < 240; i++) {
  gulls[i * 3] = (Math.random() - 0.5) * 160;
  gulls[i * 3 + 1] = 8 + Math.random() * 16;
  gulls[i * 3 + 2] = (Math.random() - 0.5) * 160;
  vel[i * 3] = (Math.random() - 0.5) * 5;
  vel[i * 3 + 2] = (Math.random() - 0.5) * 5;
}

function checksum(buf: Float32Array): number {
  let h = 2166136261;
  for (let i = 0; i < buf.length; i += 7) {
    h ^= Math.imul(Math.floor((buf[i] + 1000) * 10), 16777619);
  }
  return h >>> 0;
}

self.onmessage = (e: MessageEvent) => {
  const job = e.data as { id: number; slot: number; seed: number; t: number; kind: string };
  const started = performance.now();
  if (job.kind === "flock") {
    for (let i = 0; i < 240; i++) {
      const ix = i * 3;
      const a = job.t * 0.35 + job.seed + i * 0.21;
      gulls[ix] += vel[ix] * 0.04 + Math.cos(a) * 0.08;
      gulls[ix + 2] += vel[ix + 2] * 0.04 + Math.sin(a) * 0.08;
      gulls[ix + 1] = 9 + Math.sin(a * 1.7) * 2.2;
      if (Math.hypot(gulls[ix], gulls[ix + 2]) > 150) {
        vel[ix] *= -1;
        vel[ix + 2] *= -1;
      }
    }
  }
  const dt = performance.now() - started;
  const copy = gulls.slice();
  postMessage(
    { id: job.id, slot: job.slot, kind: job.kind, points: copy, checksum: checksum(copy), ms: dt },
    { transfer: [copy.buffer] },
  );
};
