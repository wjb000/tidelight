import type { QualityPreset } from "../contracts/types";

export interface Quality {
  preset: QualityPreset;
  pixelRatio: number;
  shadowMap: number;
  waterSeg: number;
  terrainSeg: number;
  grass: number;
  bloom: boolean;
  smaa: boolean;
  particles: number;
}

export function pickQuality(preset?: QualityPreset): Quality {
  const isMobile = matchMedia("(max-width: 800px), (pointer: coarse)").matches;
  const chosen = preset ?? (isMobile ? "low" : "high");
  if (chosen === "low") {
    return {
      preset: "low",
      pixelRatio: Math.min(devicePixelRatio, 1.25),
      shadowMap: 1024,
      waterSeg: 80,
      terrainSeg: 96,
      grass: 400,
      bloom: true,
      smaa: false,
      particles: 80,
    };
  }
  if (chosen === "med") {
    return {
      preset: "med",
      pixelRatio: Math.min(devicePixelRatio, 1.5),
      shadowMap: 2048,
      waterSeg: 140,
      terrainSeg: 160,
      grass: 900,
      bloom: true,
      smaa: true,
      particles: 160,
    };
  }
  return {
    preset: "high",
    pixelRatio: Math.min(devicePixelRatio, 2),
    shadowMap: 2048,
    waterSeg: 200,
    terrainSeg: 220,
    grass: 1600,
    bloom: true,
    smaa: true,
    particles: 260,
  };
}
