import { joinRoom, selfId } from "trystero";

type BusFn = (msg: unknown) => void;

export class MeshNet {
  readonly id: string = typeof selfId === "string" && selfId ? selfId.slice(0, 12) : crypto.randomUUID().slice(0, 8);
  private sendAction: ((msg: unknown) => void) | null = null;
  private leaveFn: (() => void) | null = null;
  onMessage: BusFn = () => {};
  onJoin: (id: string) => void = () => {};
  onLeave: (id: string) => void = () => {};
  connected = false;
  peers = 0;

  constructor() {
    try {
      const room = joinRoom({ appId: "tidelight-one-harbor" }, "the-only-world");
      const bus = room.makeAction("bus");
      bus.onMessage = (data: unknown) => this.onMessage(data);
      this.sendAction = (msg) => {
        try {
          bus.send(JSON.parse(JSON.stringify(msg)));
        } catch {
          /* not yet paired */
        }
      };
      room.onPeerJoin = (id: string) => {
        this.peers += 1;
        this.connected = true;
        this.onJoin(id);
      };
      room.onPeerLeave = (id: string) => {
        this.peers = Math.max(0, this.peers - 1);
        this.onLeave(id);
      };
      this.leaveFn = () => room.leave();
      this.connected = true;
    } catch (err) {
      console.warn("mesh unavailable, local tabs only", err);
    }
  }

  send(msg: unknown): void {
    this.sendAction?.(msg);
  }

  leave(): void {
    this.leaveFn?.();
  }
}
