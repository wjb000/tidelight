# Architecture

Tidelight is one persistent dusk harbor. A host tab owns simulation. Every other tab may donate a Web Worker.

## Roles

- **Coordinator** — first tab that does not hear a host. Owns island rise, letters, snapshots at 20 Hz.
- **Visitor** — later tabs. Send pose, receive snapshot. If donate is on, they also run a flock/wake worker.
- **Renderer** — every tab. Draws only what that camera needs.

## Authority

Combat-adjacent state does not exist. Movement is local and interpolated. Letters and island ownership commit on the host. Donated compute never decides who stands where or whether a letter arrived.

## Donation

Jobs are leased flock integrations. Results are checksummed and applied as extra birds. Hidden or opted-out tabs stop donating; their islet sinks in about a second and mailboxes go with it.

## Degrade

Close a tab: `bye` or a 4s timeout. The slot owner is cleared, rise eases to 0, boats hide. The dock stays.
