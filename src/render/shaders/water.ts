import { DUSK_RAMP, NOISE } from "./chunks";

export const waterVert = /* glsl */ `
uniform float uTime;
varying vec3 vWorld;
varying vec3 vWaveN;
varying float vCrest;
varying float vFogDepth;

// Gerstner-ish octave: displaces position, accumulates the analytic normal
vec3 wave(vec2 dir, float amp, float waveLen, float speed, vec2 p, float t, inout vec3 nrm, inout float crest) {
  float k = 6.2831853 / waveLen;
  float f = k * dot(dir, p) - speed * t;
  float s = sin(f);
  float c = cos(f);
  nrm.x -= dir.x * amp * k * c;
  nrm.z -= dir.y * amp * k * c;
  crest += s * amp;
  float steep = 0.62;
  return vec3(dir.x * steep * amp * c, amp * s, dir.y * steep * amp * c);
}

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vec3 nrm = vec3(0.0, 1.0, 0.0);
  float crest = 0.0;
  vec3 d = vec3(0.0);
  d += wave(normalize(vec2( 0.78,  0.62)), 0.20, 30.0, 1.05, world.xz, uTime, nrm, crest);
  d += wave(normalize(vec2(-0.52,  0.85)), 0.12, 16.5, 1.55, world.xz, uTime, nrm, crest);
  d += wave(normalize(vec2( 0.18, -0.98)), 0.06,  8.5, 2.30, world.xz, uTime, nrm, crest);
  d += wave(normalize(vec2(-0.92,  0.28)), 0.028, 4.2, 3.15, world.xz, uTime, nrm, crest);
  world.xyz += d;
  vWorld = world.xyz;
  vWaveN = normalize(nrm);
  vCrest = crest * 2.6;
  vec4 mv = viewMatrix * world;
  vFogDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`;

export const waterFrag = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uSky;
uniform vec3 uHorizon;
uniform vec3 uRose;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uFoamColor;
uniform vec3 uFogColor;
uniform vec2 uFogRange;
uniform vec3 uCam;
uniform vec3 uIslands[ISLAND_COUNT]; // x, z, shoreline radius
uniform float uRise[ISLAND_COUNT];   // 0..1 emergence per circle
uniform sampler2D uFoam;
varying vec3 vWorld;
varying vec3 vWaveN;
varying float vCrest;
varying float vFogDepth;
${NOISE}
${DUSK_RAMP}

void main() {
  vec2 uv = vWorld.xz;

  // --- signed distance to nearest shoreline (analytic circles) ---
  float sd = 1e5;
  float riseN = 0.0;
  for (int i = 0; i < ISLAND_COUNT; i++) {
    float rise = uRise[i];
    float er = uIslands[i].z * mix(0.25, 1.0, saturate(rise));
    float di = length(uv - uIslands[i].xy) - er;
    if (di < sd) { sd = di; riseN = rise; }
  }
  float shoreFade = smoothstep(0.18, 0.55, riseN);

  // --- detail normal: two scrolling noise gradients ---
  float e = 0.9;
  vec2 p1 = uv * 0.09 + vec2(uTime * 0.045, uTime * 0.021);
  vec2 p2 = uv * 0.21 + vec2(-uTime * 0.032, uTime * 0.055);
  float hn  = noise(p1) * 0.66 + noise(p2) * 0.34;
  float hx = noise(p1 + vec2(e * 0.09, 0.0)) * 0.66 + noise(p2 + vec2(e * 0.21, 0.0)) * 0.34;
  float hz = noise(p1 + vec2(0.0, e * 0.09)) * 0.66 + noise(p2 + vec2(0.0, e * 0.21)) * 0.34;
  vec3 nrm = normalize(vWaveN + vec3((hn - hx) * 1.45, 0.0, (hn - hz) * 1.45));

  vec3 view = normalize(uCam - vWorld);
  vec3 sunDir = normalize(uSunDir);

  // --- depth-based color: sea-glass shallows -> deep dusk teal ---
  float shallowMix = 1.0 - smoothstep(0.0, 14.0, sd);
  shallowMix = max(shallowMix * shoreFade, shallowMix * 0.25);
  vec3 water = mix(uDeep, uShallow, shallowMix);
  float drift = fbm(uv * 0.016 + vec2(uTime * 0.008, -uTime * 0.005));
  water = mix(water, uDeep * vec3(0.70, 1.08, 1.16), smoothstep(0.42, 0.72, drift) * 0.28);
  water += uShallow * saturate(vCrest) * 0.055;
  // dusk warmth in the shallows so the tide line picks up the key
  water += vec3(0.22, 0.10, 0.02) * shallowMix * 0.18;

  // wrap / SSS: thin crests transmit warm sunlight
  float wrap = saturate(dot(nrm, sunDir) * 0.5 + 0.5);
  water += vec3(1.05, 0.55, 0.18) * wrap * saturate(vCrest + 0.15) * 0.10;

  // --- fresnel: reflect a sky gradient, not a flat color ---
  vec3 refl = reflect(-view, nrm);
  vec3 skyRefl = duskRamp(refl.y, uHorizon, uRose, uSky);
  float rSun = pow(saturate(dot(normalize(refl), sunDir)), 72.0);
  skyRefl += uSunColor * rSun * 1.15;
  float fres = pow(1.0 - saturate(dot(nrm, view)), 4.15);
  vec2 toFrag = normalize(vWorld.xz - uCam.xz);
  float facingSun = saturate(dot(toFrag, normalize(sunDir.xz)));
  water = mix(water, skyRefl, fres * 0.68);
  water = mix(water, mix(uSky, uHorizon, facingSun * facingSun), fres * facingSun * 0.08);

  // --- multi-lobe sun path: tight HDR glitter + mid sheen + broad warmth ---
  vec3 hv = normalize(view + sunDir);
  float ndh = saturate(dot(nrm, hv));
  float specTight = pow(ndh, 260.0);
  float specMid = pow(ndh, 42.0);
  float specBroad = pow(ndh, 10.0);
  float pathMask = pow(facingSun, 2.4);
  float glit = smoothstep(0.60, 0.94, noise(uv * 2.4 + vec2(uTime * 0.62, -uTime * 0.44)));
  // anisotropic stretch along the sun azimuth (sunset glitter path)
  float aniso = pow(saturate(1.0 - abs(dot(toFrag, vec2(-sunDir.z, sunDir.x)))), 2.2);
  water += uSunColor * specTight * (1.55 + glit * 4.4) * (0.55 + 0.45 * aniso);
  water += uSunColor * specMid * 0.26 * (0.35 + 0.65 * pathMask);
  water += uSunColor * specBroad * 0.11 * pathMask;

  // --- shore foam: contact edge + two lapping bands, broken up by the foam map ---
  float foamTex = texture2D(uFoam, uv * 0.085 + vec2(uTime * 0.012, -uTime * 0.007)).r;
  foamTex = mix(foamTex, texture2D(uFoam, uv * 0.19 - vec2(uTime * 0.018, uTime * 0.011)).g, 0.45);
  if (sd < 16.0 && shoreFade > 0.01) {
    float nb = noise(uv * 0.42 + uTime * 0.09);
    float nf = noise(uv * 1.7 - uTime * 0.22);
    float edge = 1.0 - smoothstep(0.0, 1.35 + nb, sd);
    float lap1 = sd - 2.0 - sin(uTime * 0.75 + nb * 4.2) * 1.15;
    float band1 = 1.0 - smoothstep(0.0, 1.45, abs(lap1));
    float lap2 = sd - 5.4 - sin(uTime * 0.55 + 2.1 + nb * 5.0) * 1.65;
    float band2 = (1.0 - smoothstep(0.0, 1.85, abs(lap2))) * 0.58;
    float breakup = smoothstep(0.24, 0.74, nf * 0.55 + nb * 0.22 + foamTex * 0.45);
    float foam = saturate(edge * 0.95 + (band1 + band2) * breakup) * shoreFade;
    foam *= mix(0.62, 1.18, foamTex);
    vec3 foamCol = mix(uFoamColor, uHorizon, 0.18);
    water = mix(water, foamCol, foam * 0.88);
  }

  // open-water crest foam + micro sparkle
  float crestFoam = saturate(vCrest * 1.9 - 0.28) * smoothstep(0.40, 0.78, foamTex);
  water = mix(water, uFoamColor, crestFoam * 0.22);
  float sparkle = step(0.945, noise(uv * 3.05 + vec2(uTime * 0.38, uTime * 0.52)));
  water += uFoamColor * sparkle * specTight * 7.5;

  // --- distance fog matches THREE.Fog (view-space z, same near/far) ---
  float fogF = smoothstep(uFogRange.x, uFogRange.y, vFogDepth);
  // looking out at the horizon, fade toward peach haze so water meets the sky
  vec3 fogCol = mix(uFogColor, uHorizon, saturate(-view.y * 0.55 + 0.38) * 0.55);
  water = mix(water, fogCol, fogF);

  gl_FragColor = vec4(water, mix(0.968, 1.0, fogF));
}
`;
