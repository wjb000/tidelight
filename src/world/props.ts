import * as THREE from "three";
import { glassMat, metalMat, plasterMat, woodMat } from "./materials";

function shadow(mesh: THREE.Object3D): void {
  mesh.traverse((o) => {
    const m = o as THREE.Mesh;
    if (m.isMesh) {
      m.castShadow = true;
      m.receiveShadow = true;
    }
  });
}

function box(w: number, h: number, d: number, mat: THREE.Material, x = 0, y = 0, z = 0): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  return m;
}

function glowMat(color: number): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({ color, toneMapped: false });
}

const ROPE = 0xc9a06a;
const TIMBER = 0x5a3a24;

/** A rope-wrapped mooring post with a rounded cap. */
function ropePost(wood: THREE.Texture, height = 1.6, radius = 0.16): THREE.Group {
  const g = new THREE.Group();
  const post = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.18, height, 8), woodMat(wood, TIMBER));
  post.position.y = height / 2;
  g.add(post);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.12, 8, 6), woodMat(wood, 0x6e4a2c));
  cap.position.y = height;
  cap.scale.y = 0.6;
  g.add(cap);
  const wrap = new THREE.MeshToonMaterial({ color: ROPE });
  for (let i = 0; i < 3; i++) {
    const r = new THREE.Mesh(new THREE.TorusGeometry(radius * 1.08, 0.035, 5, 12), wrap);
    r.rotation.x = Math.PI / 2;
    r.position.y = height - 0.28 - i * 0.09;
    g.add(r);
  }
  return g;
}

/** A coiled rope pile — three shrinking stacked tori. */
function ropeCoil(): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshToonMaterial({ color: ROPE });
  for (let i = 0; i < 3; i++) {
    const t = new THREE.Mesh(new THREE.TorusGeometry(0.34 - i * 0.055, 0.065, 6, 14), mat);
    t.rotation.x = Math.PI / 2;
    t.position.y = 0.06 + i * 0.1;
    g.add(t);
  }
  return g;
}

function barrel(plaster: THREE.Texture, color = 0x8a4b2a): THREE.Group {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.05, 12), plasterMat(plaster, color));
  body.scale.x = 1.08;
  body.position.y = 0.55;
  g.add(body);
  const band = metalMat(0x3a322a, 0.4, 0.5);
  for (const y of [0.28, 0.85]) {
    const r = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.03, 5, 14), band);
    r.rotation.x = Math.PI / 2;
    r.position.y = y;
    r.scale.x = 1.08;
    g.add(r);
  }
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.05, 12), plasterMat(plaster, 0xa9713e));
  lid.position.y = 1.08;
  g.add(lid);
  return g;
}

function crate(wood: THREE.Texture, size = 1.1, color = 0xb5834a): THREE.Group {
  const g = new THREE.Group();
  g.add(box(size, size * 0.92, size, woodMat(wood, color), 0, size * 0.46, 0));
  const trim = woodMat(wood, 0x8a5c30);
  const t = 0.07;
  for (const s of [-1, 1]) {
    g.add(box(size + t, t, t, trim, 0, size * 0.92, s * size * 0.5));
    g.add(box(size + t, t, t, trim, 0, 0.02, s * size * 0.5));
    g.add(box(t, size * 0.94, t, trim, s * size * 0.5, size * 0.46, size * 0.5));
    g.add(box(t, size * 0.94, t, trim, s * size * 0.5, size * 0.46, -size * 0.5));
  }
  return g;
}

export function buildLighthouse(plaster: THREE.Texture, wood: THREE.Texture): THREE.Group {
  const g = new THREE.Group();
  const wall = plasterMat(plaster, 0xfdf3e0);
  const stripe = plasterMat(plaster, 0xd8452f);
  const dark = metalMat(0x2f2620, 0.25, 0.6);
  const rTop = 2.15;
  const rBot = 3.05;
  const h = 13.5;
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, 20), wall);
  tower.userData.shell = true;
  g.add(tower);
  const radiusAt = (y: number) => rBot + (rTop - rBot) * ((y + h / 2) / h);
  for (const [y, bh] of [[-3.4, 1.5], [0.6, 1.4], [4.4, 1.3]] as const) {
    const band = new THREE.Mesh(
      new THREE.CylinderGeometry(radiusAt(y + bh / 2) + 0.05, radiusAt(y - bh / 2) + 0.05, bh, 20),
      stripe,
    );
    band.position.y = y;
    g.add(band);
  }
  const plinth = new THREE.Mesh(new THREE.CylinderGeometry(rBot + 0.55, rBot + 1.1, 1.6, 20), plasterMat(plaster, 0xcbb598));
  plinth.position.y = -h / 2 + 0.5;
  g.add(plinth);
  // gallery deck + railing
  const deck = new THREE.Mesh(new THREE.CylinderGeometry(3.15, 2.7, 0.42, 20), dark);
  deck.position.y = h / 2 + 0.2;
  g.add(deck);
  const railY = h / 2 + 1.25;
  const rail = new THREE.Mesh(new THREE.TorusGeometry(2.95, 0.05, 5, 24), dark);
  rail.rotation.x = Math.PI / 2;
  rail.position.y = railY;
  g.add(rail);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.85, 5), dark);
    p.position.set(Math.cos(a) * 2.95, h / 2 + 0.82, Math.sin(a) * 2.95);
    g.add(p);
  }
  // lantern room
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.45, 2.3, 12, 1, true), glassMat(0xffd27a));
  glass.position.y = h / 2 + 1.6;
  g.add(glass);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.62, 12, 10), glowMat(0xffedb8));
  lamp.position.y = h / 2 + 1.6;
  g.add(lamp);
  const cornice = new THREE.Mesh(new THREE.CylinderGeometry(1.85, 1.85, 0.3, 12), dark);
  cornice.position.y = h / 2 + 2.85;
  g.add(cornice);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(1.95, 1.9, 12), metalMat(0x8a3226, 0.2, 0.55));
  roof.position.y = h / 2 + 3.9;
  g.add(roof);
  const finial = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), dark);
  finial.position.y = h / 2 + 4.95;
  g.add(finial);
  // door with awning
  const door = box(1.0, 2.2, 0.14, woodMat(wood, 0x6b4226), 0, -h / 2 + 1.4, radiusAt(-h / 2 + 1.4) + 0.02);
  door.userData.shell = true;
  g.add(door);
  const interior = new THREE.Group();
  interior.name = "interior";
  const stone = plasterMat(plaster, 0xe8d2b4);
  const floor = new THREE.Mesh(new THREE.CylinderGeometry(2.15, 2.15, 0.16, 16), woodMat(wood, 0xb5834a));
  floor.position.y = -h / 2 + 0.95;
  interior.add(floor);
  const inner = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 4.4, 16, 1, true), stone);
  inner.position.y = -h / 2 + 3.15;
  inner.scale.x = -1;
  interior.add(inner);
  const innerDoor = box(1.15, 2.3, 0.08, woodMat(wood, 0x6b4226), 0, -h / 2 + 1.95, 2.16);
  interior.add(innerDoor);
  const desk = box(1.4, 0.12, 0.7, woodMat(wood, 0x8a5c30), -0.85, -h / 2 + 1.55, -0.35);
  interior.add(desk);
  interior.add(box(0.1, 0.72, 0.1, woodMat(wood, TIMBER), -1.4, -h / 2 + 1.16, -0.6));
  interior.add(box(0.1, 0.72, 0.1, woodMat(wood, TIMBER), -0.3, -h / 2 + 1.16, -0.1));
  const chart = box(0.55, 0.02, 0.4, new THREE.MeshToonMaterial({ color: 0xf7ecd6 }), -0.85, -h / 2 + 1.63, -0.35);
  interior.add(chart);
  const deskLamp = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), glowMat(0xffc978));
  deskLamp.position.set(0.7, -h / 2 + 2.1, -0.9);
  interior.add(deskLamp);
  const glow = new THREE.PointLight(0xffc978, 0, 8, 1.5);
  glow.name = "interiorLight";
  glow.position.set(0, -h / 2 + 3.4, 0);
  interior.add(glow);
  const cot = box(1.1, 0.28, 2.0, new THREE.MeshToonMaterial({ color: 0xd8c4a0 }), 1.05, -h / 2 + 1.22, 0.15);
  interior.add(cot);
  g.add(interior);
  const awning = box(1.5, 0.1, 0.7, woodMat(wood, 0xd8452f), 0, -h / 2 + 2.7, radiusAt(-h / 2 + 2.7) + 0.3);
  awning.rotation.x = 0.35;
  g.add(awning);
  const porthole = new THREE.Mesh(new THREE.CircleGeometry(0.28, 10), glowMat(0xffc978));
  porthole.position.set(0, 2.6, radiusAt(2.6) + 0.03);
  g.add(porthole);
  g.position.set(8, 7.2, -18);
  g.userData.place = "lighthouse";
  shadow(g);
  return g;
}

export function buildWarehouse(plaster: THREE.Texture, wood: THREE.Texture): THREE.Group {
  // harbor cannery: pitched roof, timber frame, warm windows, chimney, hanging sign
  const g = new THREE.Group();
  const wall = plasterMat(plaster, 0xf6e8cf);
  const timber = woodMat(wood, 0x4a2c1c);
  const roofM = woodMat(wood, 0xc2452e);
  const W = 13, H = 5.2, D = 9;
  const t = 0.22;
  const doorX = -3.6;
  const doorW = 2.6;
  const doorH = 3.5;
  g.add(box(W - 0.4, 0.14, D - 0.4, woodMat(wood, 0xc4a06a), 0, 0.78, 0));
  g.add(box(W, H, t, wall, 0, H / 2, -D / 2 + t / 2));
  g.add(box(t, H, D, wall, -W / 2 + t / 2, H / 2, 0));
  g.add(box(t, H, D, wall, W / 2 - t / 2, H / 2, 0));
  const leftW = doorX - doorW / 2 - (-W / 2);
  const rightW = W / 2 - (doorX + doorW / 2);
  g.add(box(leftW, H, t, wall, -W / 2 + leftW / 2, H / 2, D / 2 - t / 2));
  g.add(box(rightW, H, t, wall, W / 2 - rightW / 2, H / 2, D / 2 - t / 2));
  g.add(box(doorW + 0.1, H - doorH, t, wall, doorX, doorH + (H - doorH) / 2, D / 2 - t / 2));
  g.add(box(W + 0.5, 0.7, D + 0.5, plasterMat(plaster, 0xcbb598), 0, 0.35, 0));
  const roof = new THREE.Group();
  roof.userData.roof = true;
  // gable prism under the roof
  const tri = new THREE.Shape();
  tri.moveTo(-D / 2 - 0.1, 0);
  tri.lineTo(D / 2 + 0.1, 0);
  tri.lineTo(0, 2.9);
  const gableGeo = new THREE.ExtrudeGeometry(tri, { depth: W, bevelEnabled: false });
  gableGeo.rotateY(Math.PI / 2);
  gableGeo.translate(-W / 2, H, 0);
  roof.add(new THREE.Mesh(gableGeo, wall));
  // roof slabs with overhang
  const slope = Math.atan2(2.9, 4.7);
  for (const s of [-1, 1]) {
    const slab = box(W + 1.6, 0.28, 6.3, roofM, 0, H + 1.59, s * 2.44);
    slab.rotation.x = s * slope;
    roof.add(slab);
  }
  roof.add(box(W + 1.8, 0.26, 0.55, timber, 0, H + 3.02, 0));
  g.add(roof);
  // timber frame accents
  for (const x of [-W / 2, W / 2]) for (const z of [-D / 2, D / 2]) g.add(box(0.28, H, 0.28, timber, x, H / 2, z));
  g.add(box(W + 0.1, 0.24, 0.24, timber, 0, H - 0.15, D / 2 + 0.04));
  g.add(box(W + 0.1, 0.24, 0.24, timber, 0, 2.6, D / 2 + 0.04));
  // chimney
  const chimney = box(0.9, 2.6, 0.9, plasterMat(plaster, 0xb98a68), -W / 2 + 2.2, H + 3.1, -1.2);
  g.add(chimney);
  g.add(box(1.15, 0.22, 1.15, metalMat(0x3a322a, 0.3, 0.55), -W / 2 + 2.2, H + 4.4, -1.2));
  // big sliding door + windows (warm emissive)
  g.add(box(0.16, doorH, 0.16, timber, doorX - doorW / 2, doorH / 2, D / 2 + 0.04));
  g.add(box(0.16, doorH, 0.16, timber, doorX + doorW / 2, doorH / 2, D / 2 + 0.04));
  g.add(box(doorW + 0.3, 0.2, 0.24, timber, doorX, doorH + 0.08, D / 2 + 0.08));
  const bench = box(2.4, 0.12, 0.8, timber, 2.2, 1.02, -1.4);
  g.add(bench);
  g.add(box(0.1, 0.78, 0.1, timber, 1.3, 0.61, -1.7));
  g.add(box(0.1, 0.78, 0.1, timber, 3.1, 0.61, -1.1));
  const crateA = crate(wood, 0.95);
  crateA.position.set(-1.1, 0.84, -2.6);
  crateA.rotation.y = 0.3;
  g.add(crateA);
  const crateB = crate(wood, 0.75, 0xc99a5c);
  crateB.position.set(4.4, 0.84, 1.8);
  crateB.rotation.y = -0.4;
  g.add(crateB);
  const net = box(1.8, 0.04, 1.1, new THREE.MeshToonMaterial({ color: 0xd8c4a0 }), 2.15, 1.1, -1.35);
  g.add(net);
  const hanging = new THREE.PointLight(0xffc06a, 0, 11, 1.4);
  hanging.name = "interiorLight";
  hanging.position.set(0.2, 3.6, 0.2);
  g.add(hanging);
  const glow = glowMat(0xffc06a);
  for (const x of [-0.4, 2.2, 4.6]) {
    g.add(box(1.3, 1.4, 0.1, glow, x, 3.6, D / 2 + 0.05));
    g.add(box(1.5, 0.12, 0.16, timber, x, 4.36, D / 2 + 0.07));
    g.add(box(1.5, 0.12, 0.16, timber, x, 2.84, D / 2 + 0.07));
  }
  for (const z of [-2.6, 0.6]) g.add(box(0.1, 1.3, 1.2, glow, W / 2 + 0.05, 3.4, z));
  // hanging sign
  const bracket = box(1.5, 0.12, 0.12, timber, -5.6, 4.7, D / 2 + 0.8);
  g.add(bracket);
  const sign = box(1.35, 0.75, 0.08, woodMat(wood, 0xe8c37a), -5.6, 4.0, D / 2 + 1.15);
  g.add(sign);
  const fish = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 6), new THREE.MeshToonMaterial({ color: 0x3d6b7a }));
  fish.scale.set(1.7, 0.7, 0.4);
  fish.position.set(-5.6, 4.0, D / 2 + 1.2);
  g.add(fish);
  for (const x of [-6.1, -5.1]) {
    const link = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.34, 5), metalMat(0x2a2420, 0.3, 0.5));
    link.position.set(x, 4.5, D / 2 + 1.15);
    g.add(link);
  }
  g.position.set(22, 0, 8);
  g.userData.place = "warehouse";
  shadow(g);
  return g;
}

export function buildCrane(wood: THREE.Texture): THREE.Group {
  const g = new THREE.Group();
  const steel = metalMat(0xc4502e, 0.5, 0.45);
  const dark = metalMat(0x2b2724, 0.4, 0.5);
  const cable = metalMat(0x1c1815, 0.3, 0.6);
  // base platform
  g.add(box(5.4, 1.0, 5.4, metalMat(0x8a4b32, 0.4, 0.55), 0, 0.5, 0));
  g.add(box(4.2, 0.7, 4.2, dark, 0, 1.3, 0));
  // mast with cross braces
  g.add(box(1.25, 14.5, 1.25, steel, 0, 8.6, 0));
  for (let i = 0; i < 4; i++) {
    const b = box(0.14, 2.4, 1.35, steel, 0, 3.4 + i * 3.2, 0);
    b.rotation.z = i % 2 ? 0.62 : -0.62;
    g.add(b);
  }
  // cab + jib + counterweight
  g.add(box(2.2, 1.8, 1.9, dark, 0.4, 14.6, 0));
  const cabGlass = box(1.0, 0.9, 1.7, glowMat(0xffc978), 1.55, 14.8, 0);
  g.add(cabGlass);
  const arm = box(19, 0.75, 1.0, steel, 6.5, 16.2, 0);
  g.add(arm);
  g.add(box(1.5, 0.5, 0.8, steel, 16.2, 16.2, 0));
  g.add(box(3.2, 2.3, 2.5, metalMat(0x51443a, 0.35, 0.6), -4.6, 15.6, 0));
  // tie cables from mast top to jib
  const apex = new THREE.Vector3(0, 18.4, 0);
  g.add(box(0.5, 2.6, 0.5, steel, 0, 17.4, 0));
  for (const tx of [8, 14]) {
    const end = new THREE.Vector3(tx, 16.55, 0);
    const len = apex.distanceTo(end);
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, len, 4), cable);
    c.position.copy(apex.clone().add(end).multiplyScalar(0.5));
    c.rotation.z = Math.atan2(end.x - apex.x, apex.y - end.y);
    g.add(c);
  }
  // hoist cable + hook + hanging crate
  const hoist = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 6.4, 4), cable);
  hoist.position.set(13, 12.6, 0);
  g.add(hoist);
  const hook = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.5, 6), dark);
  hook.rotation.x = Math.PI;
  hook.position.set(13, 9.2, 0);
  g.add(hook);
  const load = crate(wood, 1.7, 0xb07a3a);
  load.position.set(13, 7.3, 0);
  load.rotation.y = 0.35;
  g.add(load);
  g.position.set(-26, 0, 6);
  shadow(g);
  return g;
}

export function buildDock(wood: THREE.Texture): THREE.Group {
  const g = new THREE.Group();
  const plank = woodMat(wood, 0xc4a27a);
  const edge = woodMat(wood, 0x9a7a52);
  const pileM = woodMat(wood, TIMBER);
  // decks
  g.add(box(8, 0.28, 28, plank, 0, 0.7, 18));
  g.add(box(18, 0.28, 7, plank, 5, 0.7, 8));
  // edge trim
  for (const x of [-4.05, 4.05]) g.add(box(0.34, 0.4, 28, edge, x, 0.7, 18));
  g.add(box(8.6, 0.4, 0.34, edge, 0, 0.7, 32.1));
  // piles into the water
  for (let i = 0; i < 7; i++) {
    const z = 8 + i * 4;
    for (const x of [-3.6, 3.6]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, 3.0, 8), pileM);
      p.position.set(x, -0.6, z);
      g.add(p);
    }
  }
  // rope-wrapped posts + side rails
  const railM = woodMat(wood, 0x6e4a2c);
  const postZ = [6, 12.5, 19, 25.5, 31.5];
  for (const x of [-3.7, 3.7]) {
    for (const z of postZ) {
      const p = ropePost(wood, 1.5);
      p.position.set(x, 0.84, z);
      g.add(p);
    }
    for (let i = 0; i < postZ.length - 1; i++) {
      const z0 = postZ[i];
      const z1 = postZ[i + 1];
      const r = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, z1 - z0, 6), railM);
      r.rotation.x = Math.PI / 2;
      r.position.set(x, 2.0, (z0 + z1) / 2);
      g.add(r);
    }
  }
  // dockside clutter
  const b1 = barrel((plank.map as THREE.Texture), 0x8a4b2a);
  b1.position.set(-2.9, 0.84, 10);
  g.add(b1);
  const b2 = barrel((plank.map as THREE.Texture), 0x6e4a2c);
  b2.position.set(-2.2, 0.84, 10.6);
  g.add(b2);
  const c1 = crate(wood, 1.0);
  c1.position.set(2.8, 0.84, 14);
  c1.rotation.y = 0.4;
  g.add(c1);
  const c2 = crate(wood, 0.72, 0xc99a5c);
  c2.position.set(2.9, 1.78, 14.1);
  c2.rotation.y = -0.2;
  g.add(c2);
  const coil = ropeCoil();
  coil.position.set(-2.6, 0.84, 22);
  g.add(coil);
  const coil2 = ropeCoil();
  coil2.position.set(11.5, 0.84, 8.5);
  coil2.scale.setScalar(0.8);
  g.add(coil2);
  g.position.set(0, 0, 22);
  shadow(g);
  return g;
}

/** Open skiff hull: stations bow(+Z) → stern(−Z), U-section port(−X) → starboard. */
function skiffHullGeo(): THREE.BufferGeometry {
  const st: [number, number, number, number][] = [
    [2.62, 0.03, 0.2, 0.5],
    [2.18, 0.32, -0.02, 0.58],
    [1.48, 0.76, -0.18, 0.64],
    [0.45, 0.98, -0.24, 0.68],
    [-0.55, 1.0, -0.22, 0.68],
    [-1.52, 0.9, -0.12, 0.63],
    [-2.42, 0.78, 0.0, 0.56],
  ];
  const ring = (hw: number, yk: number, yg: number): [number, number][] => [
    [yg, -hw],
    [yg * 0.42 + yk * 0.58, -hw],
    [yk + 0.1, -hw * 0.84],
    [yk, -hw * 0.1],
    [yk, hw * 0.1],
    [yk + 0.1, hw * 0.84],
    [yg * 0.42 + yk * 0.58, hw],
    [yg, hw],
  ];
  const ns = st.length;
  const np = 8;
  const pos: number[] = [];
  const uv: number[] = [];
  for (let i = 0; i < ns; i++) {
    const [z, hw, yk, yg] = st[i];
    const pr = ring(hw, yk, yg);
    for (let j = 0; j < np; j++) {
      pos.push(pr[j][1], pr[j][0], z);
      uv.push(i / (ns - 1), j / (np - 1));
    }
  }
  const idx: number[] = [];
  for (let i = 0; i < ns - 1; i++) {
    for (let j = 0; j < np - 1; j++) {
      const a = i * np + j;
      const b = a + np;
      const c = a + 1;
      const d = b + 1;
      idx.push(a, c, b, c, d, b);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

export function buildBoat(wood: THREE.Texture, color: number): THREE.Group {
  const g = new THREE.Group();
  const paint = woodMat(wood, color);
  paint.side = THREE.DoubleSide;
  const timber = woodMat(wood, TIMBER);
  const plank = woodMat(wood, 0xc4a27a);
  const railM = woodMat(wood, 0x6e4a2c);
  const soleM = woodMat(wood, 0xe8d2b0);

  const hull = new THREE.Mesh(skiffHullGeo(), paint);
  g.add(hull);

  const keel = box(0.16, 0.16, 3.7, timber, 0, -0.26, 0.05);
  g.add(keel);

  const sheer = (side: number) =>
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 0.02, 0.5, 2.58),
      new THREE.Vector3(side * 0.32, 0.58, 2.16),
      new THREE.Vector3(side * 0.76, 0.64, 1.46),
      new THREE.Vector3(side * 0.98, 0.68, 0.44),
      new THREE.Vector3(side * 1.0, 0.68, -0.54),
      new THREE.Vector3(side * 0.9, 0.63, -1.5),
      new THREE.Vector3(side * 0.78, 0.56, -2.4),
    ]);
  for (const s of [-1, 1]) {
    g.add(new THREE.Mesh(new THREE.TubeGeometry(sheer(s), 12, 0.045, 5, false), railM));
  }
  g.add(box(1.58, 0.07, 0.08, railM, 0, 0.56, -2.4));

  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.78, 6), timber);
  stem.position.set(0, 0.36, 2.5);
  stem.rotation.x = -0.42;
  g.add(stem);
  g.add(box(1.56, 0.58, 0.08, paint, 0, 0.28, -2.42));

  const sole = new THREE.Shape();
  sole.moveTo(-0.62, 2.05);
  sole.lineTo(0.62, 2.05);
  sole.lineTo(0.78, 0.55);
  sole.lineTo(0.74, -0.55);
  sole.lineTo(0.48, -1.45);
  sole.lineTo(0.16, -2.05);
  sole.lineTo(-0.16, -2.05);
  sole.lineTo(-0.48, -1.45);
  sole.lineTo(-0.74, -0.55);
  sole.lineTo(-0.78, 0.55);
  sole.closePath();
  const soleGeo = new THREE.ExtrudeGeometry(sole, { depth: 0.05, bevelEnabled: false, curveSegments: 1 });
  soleGeo.rotateX(-Math.PI / 2);
  const floor = new THREE.Mesh(soleGeo, soleM);
  floor.position.y = 0.2;
  g.add(floor);
  for (const x of [-0.28, 0, 0.28]) g.add(box(0.08, 0.015, 3.7, plank, x, 0.232, 0.05));

  // thwarts — aft seat under the rider, mid bench, bow sheets
  const seat = (z: number, w: number, beam: number, y = 0.5) => {
    g.add(box(beam, 0.07, w, plank, 0, y, z));
    g.add(box(beam + 0.04, 0.03, w + 0.03, railM, 0, y + 0.045, z));
    for (const x of [-beam * 0.38, beam * 0.38]) g.add(box(0.06, 0.28, 0.06, timber, x, y - 0.16, z));
  };
  seat(-0.12, 0.34, 1.62);
  seat(0.95, 0.28, 1.48, 0.52);
  seat(-1.72, 0.3, 1.38, 0.48);
  g.add(box(0.72, 0.08, 0.7, plank, 0, 0.54, 2.02));
  g.add(box(0.78, 0.22, 0.08, railM, 0, 0.62, 1.7));

  for (const z of [-1.05, 0.42, 1.35]) {
    g.add(box(1.72, 0.05, 0.05, timber, 0, 0.42, z));
    for (const x of [-0.82, 0.82]) g.add(box(0.04, 0.38, 0.05, timber, x, 0.42, z));
  }

  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 3.05, 6), timber);
  mast.position.set(0, 1.92, 0.55);
  g.add(mast);
  const sailM = new THREE.MeshStandardMaterial({ color: 0xf7ecd6, roughness: 0.9, side: THREE.DoubleSide });
  const sail = box(1.55, 1.85, 0.04, sailM, 0.72, 2.05, 0.62);
  sail.rotation.y = 0.08;
  g.add(sail);
  const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.7, 5), timber);
  boom.rotation.z = Math.PI / 2;
  boom.position.set(0.78, 1.1, 0.62);
  g.add(boom);
  const pennant = box(0.42, 0.16, 0.02, new THREE.MeshToonMaterial({ color: 0xd8452f, side: THREE.DoubleSide }), 0.22, 3.48, 0.55);
  g.add(pennant);

  g.add(box(0.06, 0.52, 0.28, timber, 0, 0.12, -2.58));
  const tiller = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.95, 5), timber);
  tiller.rotation.x = Math.PI / 2;
  tiller.position.set(0, 0.62, -1.95);
  g.add(tiller);
  const grip = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 5), railM);
  grip.position.set(0, 0.62, -1.5);
  g.add(grip);

  for (const x of [-0.72, 0.72]) {
    const oar = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.028, 2.35, 5), timber);
    oar.rotation.x = Math.PI / 2;
    oar.position.set(x, 0.58, 0.15);
    g.add(oar);
    g.add(box(0.05, 0.015, 0.38, plank, x, 0.575, 1.28));
    const lock = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.012, 4, 8, Math.PI), railM);
    lock.rotation.z = x < 0 ? Math.PI / 2 : -Math.PI / 2;
    lock.position.set(x * 1.12, 0.7, -0.12);
    g.add(lock);
  }

  const coil = ropeCoil();
  coil.scale.setScalar(0.42);
  coil.position.set(-0.42, 0.26, 1.55);
  g.add(coil);

  shadow(g);
  return g;
}

export function scatterProps(wood: THREE.Texture, plaster: THREE.Texture): THREE.Group {
  const g = new THREE.Group();
  const crates: [number, number, number, number, number][] = [
    [6, 0.5, 26, 0.2, 1.1],
    [7.3, 0.5, 27.1, -0.4, 0.85],
    [6.4, 1.5, 26.4, 0.55, 0.7],
    [18, 0.9, 12, 0.5, 1.15],
    [16.6, 0.9, 13, -0.2, 0.9],
    [-8, 0.55, 20, 0.1, 1.0],
  ];
  for (const [x, y, z, r, s] of crates) {
    const c = crate(wood, s);
    c.position.set(x, y, z);
    c.rotation.y = r;
    g.add(c);
  }
  const barrels: [number, number, number, number][] = [
    [4.5, 0.55, 24, 0x8a4b2a],
    [5.3, 0.55, 24.7, 0x6e4a2c],
    [19, 0.95, 10.5, 0x8a4b2a],
    [-6, 0.6, 18, 0x9a5c32],
  ];
  for (const [x, y, z, c] of barrels) {
    const b = barrel(plaster, c);
    b.position.set(x, y, z);
    g.add(b);
  }
  const coil = ropeCoil();
  coil.position.set(-7, 0.62, 19.2);
  g.add(coil);
  shadow(g);
  return g;
}

export function buildLantern(color: number, withLight = true): THREE.Group {
  const g = new THREE.Group();
  const iron = metalMat(0x2a2420, 0.3, 0.55);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.16, 8), iron);
  base.position.y = 0.08;
  g.add(base);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.085, 2.5, 8), iron);
  pole.position.y = 1.33;
  g.add(pole);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.5, 6), iron);
  arm.rotation.z = Math.PI / 2;
  arm.position.set(0.22, 2.56, 0);
  g.add(arm);
  const cage = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.19, 0.34, 6), iron);
  cage.position.set(0.42, 2.32, 0);
  g.add(cage);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), glowMat(color));
  bulb.position.set(0.42, 2.32, 0);
  g.add(bulb);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.16, 6), iron);
  cap.position.set(0.42, 2.53, 0);
  g.add(cap);
  pole.castShadow = true;
  if (withLight) {
    const light = new THREE.PointLight(color, 2.4, 13, 1.7);
    light.position.set(0.42, 2.3, 0);
    g.add(light);
  }
  return g;
}

/** Catenary string lights between a chain of points — signature dusk feature. */
export function buildStringLights(points: THREE.Vector3[], color = 0xffc973): THREE.Group {
  const g = new THREE.Group();
  const wireM = new THREE.MeshStandardMaterial({ color: 0x241c18, roughness: 0.8, metalness: 0.2 });
  const bulbsPer = 7;
  const spans = points.length - 1;
  const bulbGeo = new THREE.SphereGeometry(0.09, 6, 5);
  const bulbs = new THREE.InstancedMesh(bulbGeo, glowMat(color), spans * bulbsPer);
  const m = new THREE.Matrix4();
  let bi = 0;
  for (let i = 0; i < spans; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const sag = p0.distanceTo(p1) * 0.13;
    const ctrl = p0.clone().add(p1).multiplyScalar(0.5);
    ctrl.y -= sag * 2;
    const curve = new THREE.QuadraticBezierCurve3(p0, ctrl, p1);
    const wire = new THREE.Mesh(new THREE.TubeGeometry(curve, 12, 0.022, 4), wireM);
    g.add(wire);
    for (let b = 0; b < bulbsPer; b++) {
      const p = curve.getPoint((b + 0.5) / bulbsPer);
      m.setPosition(p.x, p.y - 0.09, p.z);
      bulbs.setMatrixAt(bi++, m);
    }
  }
  bulbs.instanceMatrix.needsUpdate = true;
  g.add(bulbs);
  return g;
}

/** Curved-trunk palm with layered fronds, base lantern, and a small dock stub for risen islets. */
export function buildIsletPalm(wood: THREE.Texture): THREE.Group {
  const g = new THREE.Group();
  const trunkM = woodMat(wood, 0x6e4f24);
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.22, 1.3, 0.08),
    new THREE.Vector3(0.62, 2.5, 0.22),
    new THREE.Vector3(1.1, 3.5, 0.38),
  ]);
  const trunk = new THREE.Mesh(new THREE.TubeGeometry(curve, 8, 0.2, 6), trunkM);
  g.add(trunk);
  const root = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.4, 0.7, 7), trunkM);
  root.position.y = 0.3;
  g.add(root);
  const tip = new THREE.Vector3(1.1, 3.5, 0.38);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.26, 7, 6), trunkM);
  knob.position.copy(tip);
  g.add(knob);
  // layered fronds — flattened cones fanned out and drooping
  const frondColors = [0x7bb35a, 0xc9c34e, 0x8fbf52, 0xe8955c, 0x7bb35a, 0xc9c34e, 0x6da34e, 0x8fbf52];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + 0.4;
    const droop = 0.55 + (i % 3) * 0.18;
    const len = 2.3 + (i % 2) * 0.4;
    const f = new THREE.Mesh(new THREE.ConeGeometry(0.34, len, 4), new THREE.MeshToonMaterial({ color: frondColors[i] }));
    f.geometry.translate(0, len / 2, 0);
    f.scale.set(1, 1, 0.28);
    f.position.copy(tip);
    const dir = new THREE.Vector3(Math.cos(a), 0.9 - droop, Math.sin(a)).normalize();
    f.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    g.add(f);
  }
  // top tuft
  const tuft = new THREE.Mesh(new THREE.ConeGeometry(0.3, 1.4, 4), new THREE.MeshToonMaterial({ color: 0x7bb35a }));
  tuft.geometry.translate(0, 0.7, 0);
  tuft.scale.set(1, 1, 0.28);
  tuft.position.copy(tip);
  g.add(tuft);
  for (const [dx, dz] of [[0.22, 0.1], [-0.1, 0.24]] as const) {
    const coco = new THREE.Mesh(new THREE.SphereGeometry(0.15, 7, 6), woodMat(wood, 0x4a2c1c));
    coco.position.set(tip.x + dx, tip.y - 0.25, tip.z + dz);
    g.add(coco);
  }
  // base lantern (emissive only — many islets, keep light count low)
  const lamp = buildLantern(0xffb347, false);
  lamp.position.set(-1.4, 0, 0.8);
  lamp.scale.setScalar(0.85);
  g.add(lamp);
  // small dock stub
  const stub = new THREE.Group();
  stub.add(box(1.4, 0.16, 3.4, woodMat(wood, 0xc4a27a), 0, 0.5, 0));
  for (const [px, pz] of [[-0.55, 1.45], [0.55, 1.45], [-0.55, -1.45], [0.55, -1.45]] as const) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 1.3, 6), woodMat(wood, TIMBER));
    p.position.set(px, -0.05, pz);
    stub.add(p);
  }
  const mini = ropePost(wood, 0.8, 0.1);
  mini.position.set(0.55, 0.58, 1.3);
  stub.add(mini);
  stub.position.set(2.4, 0, 3.2);
  stub.rotation.y = 0.3;
  g.add(stub);
  shadow(g);
  return g;
}

export function buildBench(wood: THREE.Texture): THREE.Group {
  const g = new THREE.Group();
  const slat = woodMat(wood, 0xc4a27a);
  const frame = metalMat(0x2f2924, 0.3, 0.55);
  for (const z of [-0.14, 0.06, 0.26]) g.add(box(1.7, 0.06, 0.17, slat, 0, 0.46, z));
  for (const y of [0.72, 0.92]) {
    const b = box(1.7, 0.06, 0.16, slat, 0, y, -0.28);
    b.rotation.x = -0.25;
    g.add(b);
  }
  for (const x of [-0.72, 0.72]) {
    g.add(box(0.08, 0.46, 0.08, frame, x, 0.23, 0.2));
    g.add(box(0.08, 0.46, 0.08, frame, x, 0.23, -0.16));
    const back = box(0.08, 0.62, 0.08, frame, x, 0.72, -0.24);
    back.rotation.x = -0.25;
    g.add(back);
  }
  shadow(g);
  return g;
}

export function buildUmbrella(stripe: number): THREE.Group {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.065, 2.5, 8), new THREE.MeshToonMaterial({ color: 0xe8d2b0 }));
  pole.position.y = 1.25;
  g.add(pole);
  const top = new THREE.Mesh(
    new THREE.ConeGeometry(1.7, 0.72, 10, 1, true),
    new THREE.MeshToonMaterial({ color: stripe, side: THREE.DoubleSide }),
  );
  top.position.y = 2.28;
  g.add(top);
  const fringe = new THREE.Mesh(
    new THREE.CylinderGeometry(1.7, 1.74, 0.14, 10, 1, true),
    new THREE.MeshToonMaterial({ color: 0xf7ecd6, side: THREE.DoubleSide }),
  );
  fringe.position.y = 1.9;
  g.add(fringe);
  const tipp = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 5), new THREE.MeshToonMaterial({ color: 0xf7ecd6 }));
  tipp.position.y = 2.68;
  g.add(tipp);
  g.rotation.z = 0.09;
  shadow(g);
  return g;
}

export function buildMailbox(): THREE.Group {
  const g = new THREE.Group();
  const paint = metalMat(0xc4502e, 0.35, 0.45);
  const body = box(0.66, 0.42, 0.44, paint, 0, 1.08, 0);
  g.add(body);
  const dome = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.66, 10, 1, false, 0, Math.PI), paint);
  dome.rotation.z = Math.PI / 2;
  dome.position.y = 1.29;
  g.add(dome);
  const flag = box(0.05, 0.26, 0.07, metalMat(0xf0c84a, 0.3, 0.5), 0.36, 1.32, 0.12);
  g.add(flag);
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.0, 8), metalMat(0x2a2420, 0.2, 0.6));
  post.position.y = 0.5;
  g.add(post);
  shadow(g);
  g.userData.mailbox = true;
  return g;
}
