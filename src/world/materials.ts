import * as THREE from "three";

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
  });
}

export function plasterMat(map: THREE.Texture, color = 0xf2d7b6): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    map,
    color,
    roughness: 0.9,
    metalness: 0,
  });
}

export function metalMat(color: number, metalness = 0.72, roughness = 0.38): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness });
}

export function glassMat(color: number): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.08,
    metalness: 0,
    transmission: 0.55,
    transparent: true,
    opacity: 0.85,
    emissive: color,
    emissiveIntensity: 0.55,
  });
}
