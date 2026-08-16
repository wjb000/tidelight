export class Input {
  readonly keys = new Set<string>();
  mx = 0;
  my = 0;
  locked = false;
  interact = false;
  wave = false;

  constructor(private readonly canvas: HTMLCanvasElement) {
    addEventListener("keydown", (e) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
      this.keys.add(e.code);
      if (e.code === "KeyE") this.interact = true;
      if (e.code === "KeyG") this.wave = true;
      if (["Space", "KeyW", "KeyA", "KeyS", "KeyD"].includes(e.code)) e.preventDefault();
    });
    addEventListener("keyup", (e) => this.keys.delete(e.code));
    this.canvas.addEventListener("click", () => {
      if (!this.locked) void this.canvas.requestPointerLock();
    });
    document.addEventListener("pointerlockchange", () => {
      this.locked = document.pointerLockElement === this.canvas;
    });
    addEventListener("mousemove", (e) => {
      if (!this.locked) return;
      this.mx += e.movementX;
      this.my += e.movementY;
    });
  }

  axis(): { x: number; z: number; sprint: boolean; jump: boolean } {
    const x = (this.keys.has("KeyD") ? 1 : 0) - (this.keys.has("KeyA") ? 1 : 0);
    const z = (this.keys.has("KeyS") ? 1 : 0) - (this.keys.has("KeyW") ? 1 : 0);
    return { x, z, sprint: this.keys.has("ShiftLeft") || this.keys.has("ShiftRight"), jump: this.keys.has("Space") };
  }

  consumeLook(): { x: number; y: number } {
    const out = { x: this.mx, y: this.my };
    this.mx = 0;
    this.my = 0;
    return out;
  }

  consumeInteract(): boolean {
    const v = this.interact;
    this.interact = false;
    return v;
  }

  consumeWave(): boolean {
    const v = this.wave;
    this.wave = false;
    return v;
  }
}
