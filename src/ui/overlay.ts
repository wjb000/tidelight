import type { WorldSnapshot } from "../contracts/types";

export class Overlay {
  private readonly boot = document.getElementById("boot")!;
  private readonly hud = document.getElementById("hud")!;
  private readonly peerCount = document.getElementById("peer-count")!;
  private readonly status = document.getElementById("compute-status")!;
  private readonly meter = document.getElementById("compute-meter")!;
  private readonly list = document.getElementById("worker-list")!;
  private readonly toast = document.getElementById("letter-toast")!;
  private readonly prompt = document.getElementById("prompt")!;
  private readonly fps = document.getElementById("fps")!;
  private readonly donateBtn = document.getElementById("donate-btn")!;
  private frames = 0;
  private lastFps = performance.now();

  onEnter: (name: string, donate: boolean) => void = () => {};
  onDonateToggle: () => void = () => {};
  onWave: () => void = () => {};
  onChat: (text: string) => void = () => {};
  private readonly log = document.getElementById("chat-log")!;

  constructor() {
    const form = document.getElementById("join-form") as HTMLFormElement;
    const name = document.getElementById("name-input") as HTMLInputElement;
    const donate = document.getElementById("donate-input") as HTMLInputElement;
    name.value = localStorage.getItem("tidelight-name") ?? "";
    donate.checked = localStorage.getItem("tidelight-donate") !== "0";
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("tidelight-name", name.value);
      localStorage.setItem("tidelight-donate", donate.checked ? "1" : "0");
      this.onEnter(name.value || "courier", donate.checked);
    });
    document.getElementById("wave-btn")!.addEventListener("click", () => this.onWave());
    this.donateBtn.addEventListener("click", () => this.onDonateToggle());
    const talk = document.getElementById("chat-form") as HTMLFormElement | null;
    const input = document.getElementById("chat-input") as HTMLInputElement | null;
    talk?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!input?.value.trim()) return;
      this.onChat(input.value);
      input.value = "";
    });
  }

  hideBoot(): void {
    this.boot.classList.add("is-gone");
    this.hud.classList.remove("hidden");
  }

  pushChat(name: string, text: string): void {
    const li = document.createElement("li");
    li.innerHTML = `<b>${escapeHtml(name)}</b>${escapeHtml(text)}`;
    this.log.appendChild(li);
    while (this.log.children.length > 24) this.log.firstElementChild?.remove();
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
    this.toast.textContent = text;
    this.toast.classList.remove("hidden");
    window.setTimeout(() => this.toast.classList.add("hidden"), 2800);
  }

  sync(snap: WorldSnapshot, donate: boolean, isHost: boolean, localMs: number): void {
    const awake = snap.peers.filter((p) => p.donate).length;
    this.peerCount.textContent = String(Math.max(1, snap.peers.length));
    this.status.textContent = isHost
      ? `${awake} machine${awake === 1 ? "" : "s"} lighting distant islets`
      : donate
        ? "donating light to this harbor"
        : "watching — compute off";
    this.meter.style.width = `${Math.min(100, 12 + awake * 14 + localMs * 4)}%`;
    this.list.innerHTML = snap.peers
      .map((p) => `<li><span>${escapeHtml(p.name)}</span><span>${p.donate ? "islet " + (p.islandSlot + 1) : "looking"}</span></li>`)
      .join("");
    this.donateBtn.textContent = donate ? "compute on" : "compute off";
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
