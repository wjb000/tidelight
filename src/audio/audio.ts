export class AudioBed {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private started = false;

  start(): void {
    if (this.started) return;
    this.started = true;
    const ctx = new AudioContext();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0.12;
    this.master.connect(ctx.destination);
    this.drone(110, 0.35);
    this.drone(164.8, 0.18);
    this.drone(246.9, 0.1);
    this.lapping();
  }

  private drone(freq: number, gain: number): void {
    if (!this.ctx || !this.master) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    const f = this.ctx.createBiquadFilter();
    osc.type = "sine";
    osc.frequency.value = freq;
    f.type = "lowpass";
    f.frequency.value = 420;
    g.gain.value = gain;
    osc.connect(f);
    f.connect(g);
    g.connect(this.master);
    osc.start();
  }

  private lapping(): void {
    if (!this.ctx || !this.master) return;
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.18;
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.value = 380;
    const g = this.ctx.createGain();
    g.gain.value = 0.22;
    src.connect(f);
    f.connect(g);
    g.connect(this.master);
    src.start();
  }

  blip(kind: "pick" | "drop" | "wave"): void {
    if (!this.ctx || !this.master) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = kind === "pick" ? 520 : kind === "drop" ? 330 : 640;
    g.gain.value = 0.12;
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
    osc.connect(g);
    g.connect(this.master);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.26);
  }
}
