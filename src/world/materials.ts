import * as THREE from "three";

let toonRamp: THREE.DataTexture | null = null;
function getToonRamp(): THREE.DataTexture {
  if (toonRamp) return toonRamp;
  // 4-step dusk ramp: cool shadow side lifting to a warm-lit face
  const data = new Uint8Array([
    82, 86, 112, 255,
    142, 140, 152, 255,
    216, 200, 176, 255,
    255, 244, 218, 255,
  ]);
  toonRamp = new THREE.DataTexture(data, 4, 1, THREE.RGBAFormat);
  toonRamp.minFilter = THREE.LinearFilter;
  toonRamp.magFilter = THREE.LinearFilter;
  toonRamp.needsUpdate = true;
  return toonRamp;
}

export function makeTextures(loader: THREE.TextureLoader) {
  const wrap = (t: THREE.Texture, repeat: number) => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(repeat, repeat);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  };
  return {
    sand: wrap(loader.load("/textures/sand.jpg"), 1),
    grass: wrap(loader.load("/textures/grass.jpg"), 1),
    rock: wrap(loader.load("/textures/rock.jpg"), 1),
    wood: wrap(loader.load("/textures/wood.jpg"), 1),
    plaster: wrap(loader.load("/textures/plaster.jpg"), 1),
    foam: wrap(loader.load("/textures/foam.jpg"), 1),
  };
}

export function woodMat(map: THREE.Texture, color = 0xffffff): THREE.MeshToonMaterial {
  return new THREE.MeshToonMaterial({
    map,
    color,
    gradientMap: getToonRamp(),
  });
}

export function plasterMat(map: THREE.Texture, color = 0xf4d4b0): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    map,
    color,
    roughness: 0.82,
    metalness: 0,
  });
}

export function metalMat(color: number, metalness = 0.74, roughness = 0.32): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness });
}

export function glassMat(color: number): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.06,
    metalness: 0,
    transmission: 0.55,
    transparent: true,
    opacity: 0.85,
    emissive: color,
    emissiveIntensity: 1.05,
  });
}
