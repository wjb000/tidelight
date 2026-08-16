function typing(): boolean {
  const el = document.activeElement as HTMLElement | null;
  return !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
}

export function isTouchUi(): boolean {
  return matchMedia("(pointer: coarse), (max-width: 820px)").matches;
}

export class Input {
  readonly keys = new Set<string>();
  mx = 0;
  my = 0;
  locked = false;
  interact = false;
  wave = false;
  touchX = 0;
  touchZ = 0;
  climb = 0;
  private jump = false;
  private jumpHeld = false;
  private dragging = false;
  private lookId: number | null = null;
  private stickId: number | null = null;

  constructor(private readonly canvas: HTMLCanvasElement) {
    addEventListener("keydown", (e) => {
      if (typing()) return;
      this.keys.add(e.code);
      if (e.code === "KeyE") this.interact = true;
      if (e.code === "KeyG") this.wave = true;
      if (e.code === "Space" && !e.repeat) {
        this.jump = true;
        this.jumpHeld = true;
      }
      if (["Space", "KeyW", "KeyA", "KeyS", "KeyD"].includes(e.code)) e.preventDefault();
    });
    addEventListener("keyup", (e) => {
      this.keys.delete(e.code);
      if (e.code === "Space") this.jumpHeld = false;
    });
    addEventListener("blur", () => {
      this.keys.clear();
      this.dragging = false;
      this.jump = false;
      this.jumpHeld = false;
      this.touchX = 0;
      this.touchZ = 0;
      this.climb = 0;
    });
    this.canvas.addEventListener("click", () => {
      if (this.locked || isTouchUi()) return;
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
      if (!this.locked && e.button === 0 && !isTouchUi()) this.dragging = true;
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
    this.bindTouch();
  }

  private bindTouch(): void {
    const stick = document.getElementById("stick");
    const knob = document.getElementById("stick-knob");
    const look = document.getElementById("look-pad");
    const jump = document.getElementById("jump-btn");
    const use = document.getElementById("use-btn");
    const down = document.getElementById("down-btn");
    const up = document.getElementById("up-btn");
    if (!stick || !look) return;

    const setKnob = (x: number, z: number) => {
      if (!knob) return;
      knob.style.transform = `translate(${x * 28}px, ${z * 28}px)`;
    };

    const onStick = (clientX: number, clientY: number) => {
      const r = stick.getBoundingClientRect();
      const dx = (clientX - (r.left + r.width / 2)) / (r.width * 0.42);
      const dy = (clientY - (r.top + r.height / 2)) / (r.height * 0.42);
      const len = Math.hypot(dx, dy);
      const k = len > 1 ? 1 / len : 1;
      this.touchX = dx * k;
      this.touchZ = dy * k;
      setKnob(this.touchX, this.touchZ);
    };

    stick.addEventListener(
      "pointerdown",
      (e) => {
        e.preventDefault();
        stick.setPointerCapture(e.pointerId);
        this.stickId = e.pointerId;
        onStick(e.clientX, e.clientY);
      },
      { passive: false },
    );
    stick.addEventListener(
      "pointermove",
      (e) => {
        if (this.stickId !== e.pointerId) return;
        e.preventDefault();
        onStick(e.clientX, e.clientY);
      },
      { passive: false },
    );
    const endStick = (e: PointerEvent) => {
      if (this.stickId !== e.pointerId) return;
      this.stickId = null;
      this.touchX = 0;
      this.touchZ = 0;
      setKnob(0, 0);
    };
    stick.addEventListener("pointerup", endStick);
    stick.addEventListener("pointercancel", endStick);

    look.addEventListener(
      "pointerdown",
      (e) => {
        if ((e.target as HTMLElement).closest("button, input, a, .stick, .touch__actions, .chat, .hud__actions, .players")) return;
        e.preventDefault();
        look.setPointerCapture(e.pointerId);
        this.lookId = e.pointerId;
      },
      { passive: false },
    );
    look.addEventListener(
      "pointermove",
      (e) => {
        if (this.lookId !== e.pointerId) return;
        this.mx += e.movementX;
        this.my += e.movementY;
      },
      { passive: true },
    );
    const endLook = (e: PointerEvent) => {
      if (this.lookId !== e.pointerId) return;
      this.lookId = null;
    };
    look.addEventListener("pointerup", endLook);
    look.addEventListener("pointercancel", endLook);

    const hold = (el: HTMLElement | null, on: () => void, off: () => void) => {
      if (!el) return;
      const start = (e: PointerEvent) => {
        e.preventDefault();
        el.setPointerCapture(e.pointerId);
        on();
      };
      const end = () => off();
      el.addEventListener("pointerdown", start, { passive: false });
      el.addEventListener("pointerup", end);
      el.addEventListener("pointercancel", end);
      el.addEventListener("pointerleave", end);
    };
    hold(
      jump,
      () => {
        this.jump = true;
        this.jumpHeld = true;
        this.climb = 1;
      },
      () => {
        this.jumpHeld = false;
        if (this.climb > 0) this.climb = 0;
      },
    );
    hold(
      up,
      () => {
        this.jump = true;
        this.jumpHeld = true;
        this.climb = 1;
      },
      () => {
        this.jumpHeld = false;
        if (this.climb > 0) this.climb = 0;
      },
    );
    hold(
      down,
      () => {
        this.climb = -1;
      },
      () => {
        if (this.climb < 0) this.climb = 0;
      },
    );
    use?.addEventListener(
      "pointerdown",
      (e) => {
        e.preventDefault();
        this.interact = true;
      },
      { passive: false },
    );
  }

  axis(): { x: number; z: number; sprint: boolean; jump: boolean } {
    if (typing()) return { x: 0, z: 0, sprint: false, jump: false };
    const kx = (this.keys.has("KeyD") ? 1 : 0) - (this.keys.has("KeyA") ? 1 : 0);
    const kz = (this.keys.has("KeyS") ? 1 : 0) - (this.keys.has("KeyW") ? 1 : 0);
    const x = Math.max(-1, Math.min(1, kx + this.touchX));
    const z = Math.max(-1, Math.min(1, kz + this.touchZ));
    return {
      x,
      z,
      sprint: this.keys.has("ShiftLeft") || this.keys.has("ShiftRight") || Math.hypot(this.touchX, this.touchZ) > 0.88,
      jump: this.keys.has("Space") || this.jumpHeld,
    };
  }

  vertical(): number {
    if (typing()) return 0;
    const key =
      (this.keys.has("Space") || this.keys.has("KeyR") ? 1 : 0) - (this.keys.has("ControlLeft") || this.keys.has("KeyF") || this.keys.has("KeyC") ? 1 : 0);
    return Math.max(-1, Math.min(1, key + this.climb));
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
