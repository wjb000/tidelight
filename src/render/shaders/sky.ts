import { DUSK_RAMP, NOISE } from "./chunks";

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
${DUSK_RAMP}

void main() {
  vec3 dir = normalize(vWorld);
  float h = dir.y;
  vec3 sunDir = normalize(uSunDir);
  float mu = clamp(dot(dir, sunDir), -1.0, 1.0);
  vec2 az = normalize(dir.xz + vec2(1e-4, 0.0));
  vec2 sunAzDir = normalize(sunDir.xz);
  float sunAz = dot(az, sunAzDir); // 1 facing the sun, -1 opposite

  // --- multi-stop dusk: gold horizon -> rose -> periwinkle -> deep indigo ---
  vec3 col = duskRamp(h, uHorizon, uRose, uZenith);

  // warm gold wash hugging the horizon on the sun side
  float warmSide = smoothstep(-0.32, 1.0, sunAz);
  float horizonBand = pow(saturate(1.0 - abs(h) * 2.25), 3.2);
  vec3 gold = vec3(1.05, 0.48, 0.14);
  vec3 amber = vec3(1.15, 0.38, 0.08);
  col = mix(col, mix(gold, amber, saturate(sunAz)), warmSide * horizonBand * 0.62);

  // opposite the sun the sky sits cooler and a touch darker
  float coolSide = 1.0 - smoothstep(-0.85, 0.22, sunAz);
  col *= 1.0 - coolSide * 0.18 * smoothstep(-0.04, 0.42, h);
  col = mix(col, uZenith * 0.46, coolSide * horizonBand * 0.34);

  // atmospheric haze band so the sea line melts into the sky
  float haze = exp(-abs(h) * 9.0);
  col = mix(col, mix(uHorizon, gold, warmSide * 0.55), haze * 0.28);

  // faint sun pillar along the azimuth — cinematic dusk cue
  float pillar = pow(saturate(sunAz), 28.0) * pow(saturate(1.0 - abs(h) * 3.4), 2.2);
  col += gold * pillar * 0.22;

  // below the horizon: deep dusk sea tone, still catching a little gold
  vec3 sea = mix(uNadir, gold * 0.18, warmSide * 0.35);
  col = mix(sea, col, smoothstep(-0.28, 0.018, h));

  // --- sun: hot HDR core + chromatic corona + Mie glow ---
  float disc = smoothstep(0.99905, 0.99962, mu);
  float core = smoothstep(0.99958, 0.99988, mu);
  float coronaR = pow(saturate(mu), 70.0);
  float coronaG = pow(saturate(mu), 130.0);
  float coronaB = pow(saturate(mu), 210.0);
  float g = 0.78;
  float g2 = g * g;
  float mie = (1.0 - g2) / max(pow(1.0 + g2 - 2.0 * g * mu, 1.5), 1e-4);
  float mieWide = pow(saturate(mu), 2.4);

  col += uSunColor * (core * 10.0 + disc * 3.8);
  col += vec3(coronaR * 1.15, coronaG * 0.52, coronaB * 0.16);
  col += uSunColor * mie * 0.045 * vec3(1.05, 0.62, 0.28);
  col += gold * mieWide * 0.28 * (0.40 + 0.60 * horizonBand);

  // --- big soft stylized clouds: domain-warped fbm bands, lit from the sun ---
  float cloudA = 0.0;
  if (h > 0.015) {
    vec2 cuv = dir.xz / (h + 0.22);
    vec2 p = cuv * 0.55 + vec2(uTime * 0.0055, uTime * 0.0021);
    vec2 q = vec2(fbm(p * 0.85), fbm(p * 0.85 + vec2(4.7, 9.2)));
    vec2 wp = p * vec2(1.35, 1.9) + (q - 0.5) * 1.7;
    float d = fbm(wp);
    float band = smoothstep(0.03, 0.15, h) * (1.0 - smoothstep(0.30, 0.78, h));
    float cov = smoothstep(0.51, 0.74, d) * band;
    if (cov > 0.001) {
      float dSun = fbm(wp + sunAzDir * 0.30);
      float lit = saturate((d - dSun) * 3.6 + 0.32);
      vec3 shade = vec3(0.125, 0.112, 0.33);
      vec3 cream = vec3(0.96, 0.56, 0.36);
      vec3 hot = vec3(1.42, 0.54, 0.18);
      vec3 cloudCol = mix(shade, mix(cream, hot, warmSide * 0.78), lit);
      cloudA = cov * 0.84;
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
  col += vec3(0.72, 0.84, 1.18) * star * twinkle * starMask * 0.72;

  gl_FragColor = vec4(col, 1.0);
}
`;
