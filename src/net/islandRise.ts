import type { IslandSlot, PeerPresence } from "../contracts/types";

/** Shared harbor rises when anyone donates; personal islets require owner.donate. */
export function tickIslandRise(islands: IslandSlot[], peers: PeerPresence[], dt: number): void {
  const lighting = peers.some((p) => p.donate);
  for (const isl of islands) {
    if (isl.slot === 0) {
      isl.rise += ((lighting ? 1 : 0) - isl.rise) * Math.min(1, dt * 2.4);
      isl.ownerId = null;
      continue;
    }
    const owner = peers.find((p) => p.islandSlot === isl.slot);
    const target = owner && owner.donate ? 1 : 0;
    isl.rise += (target - isl.rise) * Math.min(1, dt * 2.4);
    isl.ownerId = owner?.id ?? null;
  }
}

export function kickIslandOnAdmit(
  islands: IslandSlot[],
  peers: PeerPresence[],
  slot: number,
  id: string,
  donate: boolean,
): void {
  const isl = islands[slot];
  if (isl) {
    isl.ownerId = id;
    if (donate) isl.rise = Math.max(isl.rise, 0.08);
  }
  const main = islands[0];
  if (main) {
    main.ownerId = null;
    if (peers.some((p) => p.donate) || donate) main.rise = Math.max(main.rise, 0.08);
  }
}
