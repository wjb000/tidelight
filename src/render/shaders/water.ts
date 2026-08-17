import { DUSK_RAMP, NOISE } from "./chunks";

export const waterVert = /* glsl */ `
uniform float uTime;
varying vec3 vWorld;
varying vec3 vWaveN;
varying float vCrest;
varying float vFogDepth;

// Long painted swell — small amp, long wavelength, low steepness.
// Not a Gerstner storm: just enough motion so the harbor breathes.
vec3 wave(vec2 dir, float amp, float waveLen, float speed, vec2 p, float t, inout vec3 nrm, inout float crest) {
  float k = 6.2831853 / waveLen;
  float f = k * dot(dir, p) - speed * t;
  float s = sin(f);
  float c = cos(f);
  nrm.x -= dir.x * amp * k * c;
  nrm.z -= dir.y * amp * k * c;
  crest += s * amp;
  float steep = 0.34;
  return vec3(dir.x * steep * amp * c, amp * s, dir.y * steep * amp * c);
}

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vec3 nrm = vec3(0.0, 1.0, 0.0);
  float crest = 0.0;
  vec3 d = vec3(0.0);
  d += wave(normalize(vec2( 0.78,  0.62)), 0.065, 46.0, 0.52, world.xz, uTime, nrm, crest);
  d += wave(normalize(vec2(-0.52,  0.85)), 0.030, 24.0, 0.78, world.xz, uTime, nrm, crest);
  d += wave(normalize(vec2( 0.22, -0.97)), 0.012, 11.0, 1.15, world.xz, uTime, nrm, crest);
  world.xyz += d;
  vWorld = world.xyz;
  vWaveN = normalize(nrm);
  vCrest = crest * 5.2;
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

  // --- detail normal: two slow noise scrolls, kept shallow so it stays painted ---
  float e = 1.15;
  vec2 p1 = uv * 0.07 + vec2(uTime * 0.028, uTime * 0.014);
  vec2 p2 = uv * 0.16 + vec2(-uTime * 0.018, uTime * 0.032);
  float hn  = noise(p1) * 0.68 + noise(p2) * 0.32;
  float hx = noise(p1 + vec2(e * 0.07, 0.0)) * 0.68 + noise(p2 + vec2(e * 0.16, 0.0)) * 0.32;
  float hz = noise(p1 + vec2(0.0, e * 0.07)) * 0.68 + noise(p2 + vec2(0.0, e * 0.16)) * 0.32;
  vec3 nrm = normalize(vWaveN + vec3((hn - hx) * 0.85, 0.0, (hn - hz) * 0.85));

  vec3 view = normalize(uCam - vWorld);
  vec3 sunDir = normalize(uSunDir);

  // --- depth-based color: dusk teal -> warm sea-glass, not tropical mint ---
  float shallowMix = 1.0 - smoothstep(0.0, 16.0, sd);
  shallowMix = max(shallowMix * shoreFade, shallowMix * 0.22);
  vec3 water = mix(uDeep, uShallow, shallowMix);
  float drift = fbm(uv * 0.014 + vec2(uTime * 0.006, -uTime * 0.004));
  water = mix(water, uDeep * vec3(0.78, 0.96, 1.12), smoothstep(0.40, 0.74, drift) * 0.22);
  water += uShallow * saturate(vCrest) * 0.035;
  water += vec3(0.28, 0.12, 0.04) * shallowMix * 0.16;

  // wrap: thin crests pick up a little key warmth
  float wrap = saturate(dot(nrm, sunDir) * 0.5 + 0.5);
  water += vec3(1.02, 0.58, 0.22) * wrap * saturate(vCrest + 0.12) * 0.06;

  // --- fresnel: the water is a painted sky, not a plastic sheet ---
  vec3 refl = reflect(-view, nrm);
  vec3 skyRefl = duskRamp(refl.y, uHorizon, uRose, uSky);
  float rSun = pow(saturate(dot(normalize(refl), sunDir)), 48.0);
  skyRefl += uSunColor * rSun * 0.55;
  float fres = pow(1.0 - saturate(dot(nrm, view)), 3.6);
  vec2 toFrag = normalize(vWorld.xz - uCam.xz);
  float facingSun = saturate(dot(toFrag, normalize(sunDir.xz)));
  water = mix(water, skyRefl, fres * 0.74);
  water = mix(water, mix(uSky, uHorizon, facingSun * facingSun), fres * facingSun * 0.10);

  // --- sun path: soft anisotropic sheen, kept under bloom threshold ---
  vec3 hv = normalize(view + sunDir);
  float ndh = saturate(dot(nrm, hv));
  float specTight = pow(ndh, 90.0);
  float specMid = pow(ndh, 22.0);
  float specBroad = pow(ndh, 6.0);
  float pathMask = pow(facingSun, 1.8);
  float glit = smoothstep(0.66, 0.92, noise(uv * 1.6 + vec2(uTime * 0.38, -uTime * 0.26)));
  float aniso = pow(saturate(1.0 - abs(dot(toFrag, vec2(-sunDir.z, sunDir.x)))), 1.8);
  water += uSunColor * specTight * (0.22 + glit * 0.55) * (0.40 + 0.60 * aniso);
  water += uSunColor * specMid * 0.14 * (0.30 + 0.70 * pathMask);
  water += uSunColor * specBroad * 0.09 * pathMask;

  // --- shore foam: contact edge + two lapping bands, broken up by the foam map ---
  float foamTex = texture2D(uFoam, uv * 0.085 + vec2(uTime * 0.010, -uTime * 0.006)).r;
  foamTex = mix(foamTex, texture2D(uFoam, uv * 0.19 - vec2(uTime * 0.014, uTime * 0.009)).g, 0.45);
  if (sd < 14.0 && shoreFade > 0.01) {
    float nb = noise(uv * 0.42 + uTime * 0.07);
    float nf = noise(uv * 1.6 - uTime * 0.16);
    float edge = 1.0 - smoothstep(0.0, 1.15 + nb * 0.7, sd);
    float lap1 = sd - 1.7 - sin(uTime * 0.62 + nb * 4.2) * 0.85;
    float band1 = 1.0 - smoothstep(0.0, 1.15, abs(lap1));
    float lap2 = sd - 4.4 - sin(uTime * 0.44 + 2.1 + nb * 5.0) * 1.25;
    float band2 = (1.0 - smoothstep(0.0, 1.55, abs(lap2))) * 0.48;
    float breakup = smoothstep(0.24, 0.74, nf * 0.55 + nb * 0.22 + foamTex * 0.45);
    float foam = saturate(edge * 1.05 + (band1 + band2) * breakup) * shoreFade;
    foam *= mix(0.58, 1.12, foamTex);
    vec3 foamCol = mix(uFoamColor, uHorizon, 0.22);
    water = mix(water, foamCol, foam * 0.90);
  }

  // almost no open-water crest foam — this is a dusk harbor, not a storm
  float crestFoam = saturate(vCrest * 2.2 - 0.62) * smoothstep(0.48, 0.82, foamTex);
  water = mix(water, uFoamColor, crestFoam * 0.08);

  // --- distance fog matches THREE.Fog (view-space z, same 30–180 near/far) ---
  float fogF = smoothstep(uFogRange.x, uFogRange.y, vFogDepth);
  vec3 fogCol = mix(uFogColor, uHorizon, saturate(-view.y * 0.70 + 0.28) * 0.62);
  water = mix(water, fogCol, fogF);

  gl_FragColor = vec4(water, mix(0.972, 1.0, fogF));
}
`;
