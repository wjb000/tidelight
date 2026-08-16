import { NOISE } from "./chunks";

export const skyVert = /* glsl */ `
varying vec3 vWorld;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
  gl_Position.z = gl_Position.w;
}
`;

// Dusk sky. Outputs LINEAR colors (OutputPass tone maps + encodes at the end
// of the composer chain); the sun disc is pushed into HDR (> 1) so the bloom
// pass gives it a natural halo. Color uniforms come in linear via THREE.Color.
export const skyFrag = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uHorizon;
uniform vec3 uRose;
uniform vec3 uZenith;
uniform vec3 uNadir;
uniform vec3 uSunColor;
varying vec3 vWorld;
${NOISE}

void main() {
  vec3 dir = normalize(vWorld);
  float h = dir.y;
  vec3 sunDir = normalize(uSunDir);
  float mu = dot(dir, sunDir);
  vec2 az = normalize(dir.xz + vec2(1e-4, 0.0));
  vec2 sunAzDir = normalize(sunDir.xz);
  float sunAz = dot(az, sunAzDir); // 1 facing the sun, -1 opposite

  // --- multi-stop dusk gradient: peach -> rose -> periwinkle -> deep zenith ---
  vec3 zenithDeep = uZenith * vec3(0.40, 0.42, 0.60);
  vec3 col = uHorizon;
  col = mix(col, uRose, smoothstep(0.02, 0.17, h));
  col = mix(col, uZenith, smoothstep(0.15, 0.46, h));
  col = mix(col, zenithDeep, smoothstep(0.44, 0.92, h));

  // warm gold wash hugging the horizon on the sun side
  float warmSide = smoothstep(-0.35, 1.0, sunAz);
  float horizonBand = pow(saturate(1.0 - abs(h) * 2.4), 3.0);
  vec3 gold = vec3(1.0, 0.50, 0.16); // linear ~#ffbc70
  col = mix(col, gold, warmSide * horizonBand * 0.55);

  // opposite the sun the sky sits cooler and a touch darker
  float coolSide = 1.0 - smoothstep(-0.9, 0.2, sunAz);
  col *= 1.0 - coolSide * 0.16 * smoothstep(-0.05, 0.4, h);
  col = mix(col, uZenith * 0.5, coolSide * horizonBand * 0.30);

  // below the horizon: deep dusk sea tone
  col = mix(uNadir, col, smoothstep(-0.30, 0.015, h));

  // --- sun: soft HDR disc + tight halo + wide warm glow ---
  float disc = smoothstep(0.99875, 0.99945, mu);
  float halo = pow(saturate(mu), 28.0);
  float wide = pow(saturate(mu), 4.5);
  col += uSunColor * (disc * 5.0 + halo * 0.85);
  col += gold * wide * 0.30 * (0.45 + 0.55 * horizonBand);

  // --- big soft stylized clouds: domain-warped fbm bands, lit from the sun ---
  float cloudA = 0.0;
  if (h > 0.015) {
    vec2 cuv = dir.xz / (h + 0.22);
    vec2 p = cuv * 0.55 + vec2(uTime * 0.0055, uTime * 0.0021);
    vec2 q = vec2(fbm(p * 0.85), fbm(p * 0.85 + vec2(4.7, 9.2)));
    vec2 wp = p * vec2(1.35, 1.9) + (q - 0.5) * 1.7;
    float d = fbm(wp);
    float band = smoothstep(0.03, 0.15, h) * (1.0 - smoothstep(0.30, 0.78, h));
    float cov = smoothstep(0.52, 0.74, d) * band;
    if (cov > 0.001) {
      // rim light: density difference toward the sun
      float dSun = fbm(wp + sunAzDir * 0.30);
      float lit = saturate((d - dSun) * 3.5 + 0.35);
      vec3 shade = vec3(0.135, 0.125, 0.34);            // cool mauve underside
      vec3 cream = vec3(0.92, 0.55, 0.40);              // warm cream
      vec3 hot = vec3(1.30, 0.56, 0.24);                // gold near the sun
      vec3 cloudCol = mix(shade, mix(cream, hot, warmSide * 0.7), lit);
      cloudA = cov * 0.82;
      col = mix(col, cloudCol, cloudA);
    }
  }

  // --- faint early stars near the zenith, twinkling, hidden by clouds ---
  vec2 sp = dir.xz / (1.0 + h) * 42.0;
  vec2 cell = floor(sp);
  float hs = hash12(cell);
  vec2 off = vec2(hash12(cell + 7.1), hash12(cell + 3.7)) - 0.5;
  float star = (1.0 - smoothstep(0.0, 0.16, length(fract(sp) - 0.5 + off * 0.55))) * step(0.93, hs);
  float twinkle = 0.55 + 0.45 * sin(uTime * (1.2 + hs * 2.6) + hs * 41.0);
  float starMask = smoothstep(0.28, 0.68, h) * (1.0 - warmSide * 0.55) * (1.0 - cloudA);
  col += vec3(0.70, 0.82, 1.15) * star * twinkle * starMask * 0.65;

  gl_FragColor = vec4(col, 1.0);
}
`;
