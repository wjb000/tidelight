import type { WorldSnapshot } from "../contracts/types";

const NAME_A = ["amber", "dusk", "tide", "coral", "salt", "drift", "pearl", "wharf", "gull", "kelp", "fog", "ember"];
const NAME_B = ["otter", "heron", "skiff", "buoy", "lantern", "anchor", "sailor", "pilot", "keeper", "courier", "swift", "wren"];

const CHAT_FADE_MS = 12000;
const CHAT_MAX = 8;

function autoName(): string {
  // Per-tab name: sessionStorage so two tabs never collide. Fall back to a
  // one-off random name if storage is unavailable (private mode, etc).
  const fresh = `${NAME_A[Math.floor(Math.random() * NAME_A.length)]}-${NAME_B[Math.floor(Math.random() * NAME_B.length)]}`;
  try {
    const saved = sessionStorage.getItem("tidelight-name");
    if (saved) return saved;
    sessionStorage.setItem("tidelight-name", fresh);
  } catch {
    // storage blocked — just use the fresh name for this session
  }
  return fresh;
}

function nameColor(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return `hsl(${h % 360} 62% 72%)`;
}

export class Overlay {
  private readonly hud = document.getElementById("hud")!;
  private readonly peerCount = document.getElementById("peer-count")!;
  private readonly status = document.getElementById("compute-status")!;
  private readonly meter = document.getElementById("compute-meter")!;
  private readonly list = document.getElementById("worker-list")!;
  private readonly toast = document.getElementById("letter-toast")!;
  private readonly hint = document.getElementById("hint")!;
  private readonly prompt = document.getElementById("prompt")!;
  private readonly fps = document.getElementById("fps")!;
  private readonly donateBtn = document.getElementById("donate-btn")!;
  private readonly input = document.getElementById("chat-input") as HTMLInputElement;
  private readonly colors = new Map<string, string>();
  private frames = 0;
  private lastFps = performance.now();
  private toastTimer = 0;

  onEnter: (name: string, donate: boolean) => void = () => {};
  onDonateToggle: () => void = () => {};
  onWave: () => void = () => {};
  onChat: (text: string) => void = () => {};
  private readonly log = document.getElementById("chat-log")!;

  constructor() {
    // No landing page: drop straight into the world with a generated name.
    const donate = localStorage.getItem("tidelight-donate") !== "0";
    setTimeout(() => this.onEnter(autoName(), donate), 0);
    document.getElementById("wave-btn")!.addEventListener("click", () => this.onWave());
    this.donateBtn.addEventListener("click", () => this.onDonateToggle());
    const players = document.getElementById("players");
    players?.addEventListener("click", () => players.classList.toggle("is-open"));
    const touch = document.getElementById("touch");
    const look = document.getElementById("look-pad");
    const enableTouch = () => {
      touch?.classList.remove("hidden");
      look?.classList.remove("hidden");
      look?.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-touch");
    };
    if (matchMedia("(pointer: coarse), (max-width: 820px)").matches || navigator.maxTouchPoints > 0) {
      enableTouch();
    }
    addEventListener("touchstart", enableTouch, { once: true, passive: true });
    const talk = document.getElementById("chat-form") as HTMLFormElement | null;
    talk?.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = this.input.value.trim();
      this.input.value = "";
      this.input.blur();
      if (text) this.onChat(text);
    });
    this.input.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      e.preventDefault();
      this.input.value = "";
      this.input.blur();
    });
    addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const el = document.activeElement as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
      e.preventDefault();
      if (document.pointerLockElement) document.exitPointerLock();
      this.input.focus();
    });
  }

  hideBoot(): void {
    this.hud.classList.remove("hidden");
    this.showHint();
  }

  private showHint(): void {
    let seen = false;
    try {
      seen = localStorage.getItem("tidelight-hinted") === "1";
      localStorage.setItem("tidelight-hinted", "1");
    } catch {
      // storage blocked — treat as first visit
    }
    const touch = matchMedia("(pointer: coarse), (max-width: 820px)").matches;
    this.hint.textContent = touch
      ? "stick walk · drag to look · use to enter homes and board · you spawn at your house"
      : "WASD walk · mouse look · Space jump · E enter / board · Enter chat";
    this.hint.classList.toggle("hint-toast--small", seen);
    this.hint.classList.remove("hidden");
    window.setTimeout(() => this.hint.classList.add("is-fading"), seen ? 4500 : 8000);
    window.setTimeout(() => this.hint.classList.add("hidden"), seen ? 5800 : 9300);
  }

  pushChat(name: string, text: string, color?: string): void {
    const li = document.createElement("li");
    const tint = color ?? this.colors.get(name) ?? nameColor(name);
    li.innerHTML = `<b style="color:${tint}">${escapeHtml(name)}</b>${escapeHtml(text)}`;
    this.appendChat(li);
  }

  pushSystem(text: string): void {
    const li = document.createElement("li");
    li.className = "sys";
    li.textContent = text;
    this.appendChat(li);
  }

  private appendChat(li: HTMLElement): void {
    this.log.appendChild(li);
    window.setTimeout(() => li.classList.add("is-old"), CHAT_FADE_MS);
    while (this.log.children.length > CHAT_MAX) this.log.firstElementChild?.remove();
    this.log.scrollTop = this.log.scrollHeight;
  }

  setPrompt(text: string | null): void {
    if (!text) {
      this.prompt.classList.add("hidden");
      return;
    }
    this.prompt.textContent = text;
    this.prompt.classList.remove("hidden");
  }

  toastMsg(text: string): void {
    // Joins/leaves read better as quiet system lines in the feed.
    if (/reached the harbor|left the harbor|drifted away/.test(text)) {
      this.pushSystem(text);
      return;
    }
    this.toast.textContent = text;
    this.toast.classList.remove("hidden");
    window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => this.toast.classList.add("hidden"), 2800);
  }

  sync(snap: WorldSnapshot, donate: boolean, isHost: boolean, localMs: number): void {
    const awake = snap.peers.filter((p) => p.donate).length;
    for (const p of snap.peers) this.colors.set(p.name, "#" + p.color.toString(16).padStart(6, "0"));
    this.peerCount.textContent = String(Math.max(1, snap.peers.length));
    this.status.textContent = isHost
      ? `${awake} machine${awake === 1 ? "" : "s"} lighting islets`
      : donate
        ? "donating light"
        : "compute off";
    this.meter.style.width = `${Math.min(100, 12 + awake * 14 + localMs * 4)}%`;
    this.list.innerHTML = snap.peers
      .map(
        (p) =>
          `<li><span class="dot" style="background:#${p.color.toString(16).padStart(6, "0")}"></span><span class="who">${escapeHtml(p.name)}</span><span class="where">${p.donate ? "islet " + (p.islandSlot + 1) : "looking"}</span></li>`,
      )
      .join("");
    this.donateBtn.classList.toggle("is-on", donate);
    this.donateBtn.setAttribute("aria-pressed", donate ? "true" : "false");
    this.donateBtn.title = donate ? "compute on — click to pause" : "compute off — click to donate";
  }

  setTravel(mode: "none" | "heli" | "boat"): void {
    document.getElementById("down-btn")?.classList.toggle("hidden", mode !== "heli");
    document.getElementById("up-btn")?.classList.toggle("hidden", mode !== "heli");
    document.getElementById("jump-btn")?.classList.toggle("hidden", mode === "heli");
    const use = document.getElementById("use-btn");
    if (use) use.textContent = mode === "none" ? "use" : "out";
  }

  setUseLabel(label: string): void {
    const use = document.getElementById("use-btn");
    if (use) use.textContent = label;
  }

  markFps(): void {
    this.frames++;
    const now = performance.now();
    if (now - this.lastFps > 500) {
      const fps = Math.round((this.frames * 1000) / (now - this.lastFps));
      this.fps.textContent = `${fps} fps`;
      this.frames = 0;
      this.lastFps = now;
    }
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
