import { joinRoom as joinTorrent } from "@trystero-p2p/torrent";
import { joinRoom as joinNostr, selfId } from "trystero/nostr";

type BusFn = (msg: unknown) => void;
type RoomLike = {
  makeAction: (name: string) => { onMessage?: (data: unknown, peerId?: string) => void; send: (data: unknown) => void };
  onPeerJoin?: (id: string) => void;
  onPeerLeave?: (id: string) => void;
  leave: () => void;
};

function sessionPeerId(): string {
  try {
    const saved = sessionStorage.getItem("tidelight-peer-id");
    if (saved) return saved;
    const fresh = crypto.randomUUID().replace(/-/g, "").slice(0, 12);
    sessionStorage.setItem("tidelight-peer-id", fresh);
    return fresh;
  } catch {
    return crypto.randomUUID().replace(/-/g, "").slice(0, 12);
  }
}

export class MeshNet {
  readonly id: string = sessionPeerId();
  private readonly senders: Array<(msg: unknown) => void> = [];
  private readonly leavers: Array<() => void> = [];
  onMessage: BusFn = () => {};
  onJoin: (id: string) => void = () => {};
  onLeave: (id: string) => void = () => {};
  connected = false;
  peers = 0;

  constructor() {
    void selfId;
    this.attach("torrent", () => joinTorrent({ appId: "tidelight-one-harbor" }, "the-only-world") as unknown as RoomLike);
    this.attach("nostr", () => joinNostr({ appId: "tidelight-one-harbor" }, "the-only-world") as unknown as RoomLike);
  }

  private attach(label: string, open: () => RoomLike): void {
    try {
      const room = open();
      const bus = room.makeAction("bus");
      bus.onMessage = (data: unknown) => this.onMessage(data);
      this.senders.push((msg) => {
        try {
          bus.send(JSON.parse(JSON.stringify(msg)));
        } catch {
          /* not yet paired */
        }
      });
      room.onPeerJoin = (id: string) => {
        this.peers += 1;
        this.connected = true;
        this.onJoin(id);
      };
      room.onPeerLeave = (id: string) => {
        this.peers = Math.max(0, this.peers - 1);
        this.onLeave(id);
      };
      this.leavers.push(() => room.leave());
      this.connected = true;
    } catch (err) {
      console.warn(`mesh ${label} unavailable`, err);
    }
  }

  send(msg: unknown): void {
    for (const send of this.senders) send(msg);
  }

  leave(): void {
    for (const leave of this.leavers) leave();
  }
}
