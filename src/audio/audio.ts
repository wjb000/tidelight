export type BlipKind = "pick" | "drop" | "wave" | "chat" | "join" | "step";

export class AudioBed {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noise: AudioBuffer | null = null;
  private started = false;

  start(): void {
    if (this.started) return;
    this.started = true;
    try {
      const ctx = new AudioContext();
      this.ctx = ctx;
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -20;
      comp.knee.value = 14;
      comp.ratio.value = 5;
      comp.attack.value = 0.01;
      comp.release.value = 0.28;
      comp.connect(ctx.destination);
      this.master = ctx.createGain();
      this.master.gain.value = 0.125;
      this.master.connect(comp);
      this.noise = this.makeNoise(4);
      this.ocean();
      this.lapping();
      this.wind();
      this.gullLoop();
      this.armResume();
    } catch {
      this.ctx = null;
      this.master = null;
    }
  }

  private armResume(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const tryResume = () => {
      ctx
        .resume()
        .then(() => {
          if (ctx.state === "running") {
            window.removeEventListener("pointerdown", tryResume);
            window.removeEventListener("keydown", tryResume);
            window.removeEventListener("touchstart", tryResume);
          }
        })
        .catch(() => {});
    };
    try {
      if (ctx.state !== "running") {
        window.addEventListener("pointerdown", tryResume);
        window.addEventListener("keydown", tryResume);
        window.addEventListener("touchstart", tryResume);
        tryResume();
      }
    } catch {}
  }

  private makeNoise(seconds: number): AudioBuffer {
    const ctx = this.ctx!;
    const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0;
    let b1 = 0;
    let b2 = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99765 * b0 + white * 0.099;
      b1 = 0.963 * b1 + white * 0.2965;
      b2 = 0.57 * b2 + white * 1.0526;
      data[i] = (b0 + b1 + b2 + white * 0.1848) * 0.22;
    }
    return buffer;
  }

  private noiseSource(): AudioBufferSourceNode {
    const src = this.ctx!.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    src.start();
    return src;
  }

  private lfo(freq: number, depth: number, target: AudioParam): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.value = depth;
    osc.connect(g);
    g.connect(target);
    osc.start();
  }

  private ocean(): void {
    const ctx = this.ctx;
    if (!ctx || !this.master || !this.noise) return;
    const src = this.noiseSource();
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 340;
    lp.Q.value = 0.6;
    const g = ctx.createGain();
    g.gain.value = 0.24;
    src.connect(lp);
    lp.connect(g);
    g.connect(this.master);
    this.lfo(0.08, 0.14, g.gain);
    this.lfo(0.031, 0.07, g.gain);
    this.lfo(0.08, 160, lp.frequency);
    const swell = () => {
      try {
        g.gain.setTargetAtTime(0.18 + Math.random() * 0.16, ctx.currentTime, 3.2);
      } catch {}
      setTimeout(swell, 6000 + Math.random() * 9000);
    };
    setTimeout(swell, 5000);
  }

  private lapping(): void {
    const ctx = this.ctx;
    if (!ctx || !this.master || !this.noise) return;
    const src = this.noiseSource();
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 950;
    bp.Q.value = 0.9;
    const g = ctx.createGain();
    g.gain.value = 0.05;
    src.connect(bp);
    bp.connect(g);
    g.connect(this.master);
    this.lfo(0.19, 0.035, g.gain);
    this.lfo(0.07, 240, bp.frequency);
  }

  private wind(): void {
    const ctx = this.ctx;
    if (!ctx || !this.master || !this.noise) return;
    const src = this.noiseSource();
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 2400;
    bp.Q.value = 1.4;
    const g = ctx.createGain();
    g.gain.value = 0.018;
    src.connect(bp);
    bp.connect(g);
    g.connect(this.master);
    this.lfo(0.05, 0.012, g.gain);
    this.lfo(0.023, 600, bp.frequency);
  }

  private gullLoop(): void {
    const next = () => {
      this.gull();
      setTimeout(next, 8000 + Math.random() * 12000);
    };
    setTimeout(next, 5000 + Math.random() * 8000);
  }

  private gull(): void {
    const ctx = this.ctx;
    if (!ctx || !this.master || ctx.state !== "running") return;
    const cries = 1 + Math.floor(Math.random() * 3);
    let t = ctx.currentTime + 0.05;
    const pan = ctx.createStereoPanner();
    pan.pan.value = Math.random() * 1.6 - 0.8;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 2100;
    bp.Q.value = 1.8;
    const bus = ctx.createGain();
    bus.gain.value = 0.045 + Math.random() * 0.035;
    bp.connect(bus);
    bus.connect(pan);
    pan.connect(this.master);
    for (let i = 0; i < cries; i++) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "sawtooth";
      const f0 = 1100 + Math.random() * 280;
      osc.frequency.setValueAtTime(f0, t);
      osc.frequency.exponentialRampToValueAtTime(f0 * 1.5, t + 0.09);
      osc.frequency.exponentialRampToValueAtTime(f0 * 0.7, t + 0.32);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(1, t + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.34);
      osc.connect(g);
      g.connect(bp);
      osc.start(t);
      osc.stop(t + 0.38);
      t += 0.4 + Math.random() * 0.22;
    }
  }

  private tone(
    type: OscillatorType,
    f0: number,
    f1: number,
    peak: number,
    attack: number,
    dur: number,
    delay = 0
  ): void {
    const ctx = this.ctx;
    if (!ctx || !this.master) return;
    const t = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) osc.frequency.exponentialRampToValueAtTime(f1, t + dur * 0.85);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  private burst(f0: number, f1: number, q: number, peak: number, dur: number, delay = 0): void {
    const ctx = this.ctx;
    if (!ctx || !this.master || !this.noise) return;
    const t = ctx.currentTime + delay;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    src.playbackRate.value = 0.6 + Math.random() * 0.8;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) bp.frequency.exponentialRampToValueAtTime(f1, t + dur);
    bp.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + dur * 0.25);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(bp);
    bp.connect(g);
    g.connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.02);
  }

  blip(kind: BlipKind): void {
    const ctx = this.ctx;
    if (!ctx || !this.master || ctx.state !== "running") return;
    switch (kind) {
      case "wave": {
        const notes = [523.25, 587.33, 659.25, 783.99, 880];
        const f = notes[Math.floor(Math.random() * notes.length)];
        this.tone("sine", f, f, 0.16, 0.006, 0.42);
        this.tone("sine", f * 4, f * 4, 0.045, 0.004, 0.09);
        break;
      }
      case "pick":
        this.burst(750, 2600, 2.2, 0.12, 0.13);
        break;
      case "drop":
        this.tone("sine", 135, 52, 0.28, 0.008, 0.22);
        this.tone("sine", 2093, 2093, 0.035, 0.005, 0.12, 0.05);
        this.tone("sine", 2637, 2637, 0.028, 0.005, 0.12, 0.1);
        break;
      case "chat":
        this.tone("sine", 950, 620, 0.09, 0.005, 0.07);
        break;
      case "join":
        this.tone("triangle", 523.25, 523.25, 0.13, 0.02, 0.55);
        this.tone("triangle", 659.25, 659.25, 0.13, 0.02, 0.6, 0.16);
        break;
      case "step":
        this.tone("sine", 82 + Math.random() * 14, 54, 0.06, 0.006, 0.09);
        this.burst(680, 480, 1.4, 0.02, 0.055);
        break;
    }
  }

  step(): void {
    this.blip("step");
  }
}
