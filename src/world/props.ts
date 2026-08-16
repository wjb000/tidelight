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

export function buildLighthouse(plaster: THREE.Texture, wood: THREE.Texture): THREE.Group {
  const g = new THREE.Group();
  const wall = plasterMat(plaster, 0xf7ead4);
  const stripe = plasterMat(plaster, 0xd14836);
  const dark = metalMat(0x2a2420, 0.2, 0.7);
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(2.4, 3.1, 14, 16), wall));
  const band = new THREE.Mesh(new THREE.CylinderGeometry(2.55, 2.7, 1.2, 16), stripe);
  band.position.y = 2.2;
  g.add(band);
  const band2 = band.clone();
  band2.position.y = -2.4;
  g.add(band2);
  const deck = new THREE.Mesh(new THREE.CylinderGeometry(3.1, 3.1, 0.35, 16), dark);
  deck.position.y = 7.2;
  g.add(deck);
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 2.4, 12, 1, true), glassMat(0xffd27a));
  glass.position.y = 8.6;
  g.add(glass);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 10), new THREE.MeshBasicMaterial({ color: 0xffe6a8 }));
  lamp.position.y = 8.6;
  g.add(lamp);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(2.1, 1.8, 12), metalMat(0x3a2a22, 0.15, 0.55));
  roof.position.y = 10.4;
  g.add(roof);
  const door = box(0.9, 2.1, 0.12, woodMat(wood, 0x6b4226), 0, -5.8, 2.55);
  g.add(door);
  g.position.set(8, 7.2, -18);
  shadow(g);
  return g;
}

export function buildWarehouse(plaster: THREE.Texture, wood: THREE.Texture): THREE.Group {
  const g = new THREE.Group();
  const wall = plasterMat(plaster, 0xf4ede0);
  const roofM = woodMat(wood, 0xd14836);
  g.add(box(14, 6.2, 9, wall, 0, 3.1, 0));
  const roof = new THREE.Mesh(new THREE.BoxGeometry(15.2, 0.35, 10.2), roofM);
  roof.position.set(0, 6.5, 0);
  roof.rotation.z = 0.04;
  g.add(roof);
  g.add(box(2.2, 3.4, 0.16, woodMat(wood, 0x4a2c1c), -4.2, 1.7, 4.56));
  for (const x of [-5, -1.5, 2, 5.4]) {
    const w = box(1.4, 1.5, 0.08, glassMat(0xffc978), x, 4.2, 4.52);
    g.add(w);
  }
  g.position.set(22, 0, 8);
  shadow(g);
  return g;
}

export function buildCrane(wood: THREE.Texture): THREE.Group {
  const g = new THREE.Group();
  const steel = metalMat(0xc45c3a, 0.55, 0.42);
  const dark = metalMat(0x2b2724, 0.4, 0.5);
  g.add(box(1.4, 16, 1.4, steel, 0, 8, 0));
  const arm = box(22, 0.7, 1.1, steel, 6, 15.4, 0);
  g.add(arm);
  g.add(box(3.2, 2.2, 2.4, dark, -6.5, 15.2, 0));
  const hook = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 6, 6), dark);
  hook.position.set(14, 12, 0);
  g.add(hook);
  const crate = box(1.6, 1.2, 1.6, woodMat(wood, 0xb07a3a), 14, 8.6, 0);
  g.add(crate);
  g.position.set(-26, 0, 6);
  shadow(g);
  return g;
}

export function buildDock(wood: THREE.Texture): THREE.Group {
  const g = new THREE.Group();
  const plank = woodMat(wood, 0xc4a27a);
  const pileM = woodMat(wood, 0x5a3a24);
  g.add(box(8, 0.28, 28, plank, 0, 0.7, 18));
  g.add(box(18, 0.28, 7, plank, 5, 0.7, 8));
  for (let i = 0; i < 7; i++) {
    const z = 8 + i * 4;
    for (const x of [-3.6, 3.6]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 2.4, 8), pileM);
      p.position.set(x, -0.3, z);
      g.add(p);
    }
  }
  const rail = metalMat(0x2e2824, 0.25, 0.6);
  for (let i = 0; i < 8; i++) {
    const z = 6 + i * 3.4;
    g.add(box(0.1, 0.85, 0.1, rail, -3.85, 1.15, z));
    g.add(box(0.1, 0.85, 0.1, rail, 3.85, 1.15, z));
  }
  g.position.set(0, 0, 22);
  shadow(g);
  return g;
}

export function buildBoat(wood: THREE.Texture, color: number): THREE.Group {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.CapsuleGeometry(0.9, 3.6, 6, 10), woodMat(wood, color));
  hull.rotation.z = Math.PI / 2;
  hull.scale.set(1, 0.55, 1.15);
  g.add(hull);
  g.add(box(1.4, 0.7, 1.6, woodMat(wood, 0xe8d2b0), 0, 0.55, 0));
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 2.6, 6), woodMat(wood, 0x5a3a24));
  mast.position.y = 1.6;
  g.add(mast);
  const sail = box(0.04, 1.6, 1.3, new THREE.MeshStandardMaterial({ color: 0xf4ead8, roughness: 0.9 }), 0.05, 1.7, 0.15);
  g.add(sail);
  shadow(g);
  return g;
}

export function scatterProps(wood: THREE.Texture, plaster: THREE.Texture): THREE.Group {
  const g = new THREE.Group();
  const crateM = woodMat(wood, 0xb5834a);
  const barrelM = plasterMat(plaster, 0x8a4b2a);
  const spots: [number, number, number, number][] = [
    [6, 0.55, 26, 0.2],
    [7.4, 0.55, 27.2, -0.4],
    [18, 0.7, 12, 0.5],
    [16.6, 0.7, 13, -0.2],
    [-8, 0.55, 20, 0.1],
    [10, 0.9, 10, 0],
  ];
  for (const [x, y, z, r] of spots) {
    const c = box(1.15, 1.1, 1.15, crateM, x, y, z);
    c.rotation.y = r;
    g.add(c);
  }
  for (const [x, z] of [[4.5, 24], [19, 10.5], [-6, 18]] as const) {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.48, 1.15, 10), barrelM);
    b.position.set(x, 0.7, z);
    g.add(b);
  }
  shadow(g);
  return g;
}

export function buildLantern(color: number): THREE.Group {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 2.6, 8), metalMat(0x2a2420, 0.3, 0.55));
  pole.position.y = 1.3;
  g.add(pole);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), new THREE.MeshBasicMaterial({ color }));
  lamp.position.y = 2.55;
  g.add(lamp);
  const light = new THREE.PointLight(color, 2.2, 14, 1.6);
  light.position.y = 2.55;
  g.add(light);
  return g;
}

export function buildUmbrella(stripe: number): THREE.Group {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 2.4, 8), metalMat(0xf4ead8, 0.1, 0.7));
  pole.position.y = 1.2;
  g.add(pole);
  const top = new THREE.Mesh(new THREE.ConeGeometry(1.5, 0.45, 10, 1, true), new THREE.MeshToonMaterial({ color: stripe, side: THREE.DoubleSide }));
  top.position.y = 2.35;
  g.add(top);
  return g;
}

export function buildMailbox(): THREE.Group {
  const g = new THREE.Group();
  const body = box(0.7, 0.55, 0.45, metalMat(0xc45c3a, 0.35, 0.45), 0, 1.15, 0);
  g.add(body);
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.9, 8), metalMat(0x2a2420, 0.2, 0.6));
  post.position.y = 0.45;
  g.add(post);
  g.userData.mailbox = true;
  return g;
}
