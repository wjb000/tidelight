function typing(): boolean {
  const el = document.activeElement as HTMLElement | null;
  return !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
}

export class Input {
  readonly keys = new Set<string>();
  mx = 0;
  my = 0;
  locked = false;
  interact = false;
  wave = false;
  private jump = false;
  private dragging = false;

  constructor(private readonly canvas: HTMLCanvasElement) {
    addEventListener("keydown", (e) => {
      if (typing()) return;
      this.keys.add(e.code);
      if (e.code === "KeyE") this.interact = true;
      if (e.code === "KeyG") this.wave = true;
      if (e.code === "Space" && !e.repeat) this.jump = true;
      if (["Space", "KeyW", "KeyA", "KeyS", "KeyD"].includes(e.code)) e.preventDefault();
    });
    addEventListener("keyup", (e) => this.keys.delete(e.code));
    addEventListener("blur", () => {
      this.keys.clear();
      this.dragging = false;
      this.jump = false;
    });
    this.canvas.addEventListener("click", () => {
      if (this.locked) return;
      try {
        const p = this.canvas.requestPointerLock() as unknown as Promise<void> | undefined;
        if (p && typeof p.catch === "function") p.catch(() => {});
      } catch {
        // headless / unsupported browsers throw synchronously
      }
    });
    document.addEventListener("pointerlockchange", () => {
      this.locked = document.pointerLockElement === this.canvas;
      this.mx = 0;
      this.my = 0;
    });
    this.canvas.addEventListener("mousedown", (e) => {
      if (!this.locked && e.button === 0) this.dragging = true;
    });
    addEventListener("mouseup", () => {
      this.dragging = false;
    });
    addEventListener("mousemove", (e) => {
      if (this.locked || this.dragging) {
        this.mx += e.movementX;
        this.my += e.movementY;
      }
    });
  }

  axis(): { x: number; z: number; sprint: boolean; jump: boolean } {
    if (typing()) return { x: 0, z: 0, sprint: false, jump: false };
    const x = (this.keys.has("KeyD") ? 1 : 0) - (this.keys.has("KeyA") ? 1 : 0);
    const z = (this.keys.has("KeyS") ? 1 : 0) - (this.keys.has("KeyW") ? 1 : 0);
    return { x, z, sprint: this.keys.has("ShiftLeft") || this.keys.has("ShiftRight"), jump: this.keys.has("Space") };
  }

  consumeJump(): boolean {
    const v = this.jump && !typing();
    this.jump = false;
    return v;
  }

  consumeLook(): { x: number; y: number } {
    const out = { x: this.mx, y: this.my };
    this.mx = 0;
    this.my = 0;
    return out;
  }

  consumeInteract(): boolean {
    const v = this.interact && !typing();
    this.interact = false;
    return v;
  }

  consumeWave(): boolean {
    const v = this.wave && !typing();
    this.wave = false;
    return v;
  }
}
