import { NOISE } from "./chunks";

export const waterVert = /* glsl */ `
uniform float uTime;
varying vec3 vWorld;
varying vec3 vWaveN;
varying float vCrest;

// Gerstner-ish octave: displaces position, accumulates the analytic normal
vec3 wave(vec2 dir, float amp, float waveLen, float speed, vec2 p, float t, inout vec3 nrm, inout float crest) {
  float k = 6.2831853 / waveLen;
  float f = k * dot(dir, p) - speed * t;
  float s = sin(f);
  float c = cos(f);
  nrm.x -= dir.x * amp * k * c;
  nrm.z -= dir.y * amp * k * c;
  crest += s * amp;
  float steep = 0.6;
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
  world.xyz += d;
  vWorld = world.xyz;
  vWaveN = normalize(nrm);
  vCrest = crest * 2.6;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const waterFrag = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uSky;
uniform vec3 uHorizon;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uFoamColor;
uniform vec3 uFogColor;
uniform vec2 uFogRange;
uniform vec3 uCam;
uniform vec3 uIslands[ISLAND_COUNT]; // x, z, shoreline radius
uniform float uRise[ISLAND_COUNT];   // 0..1 emergence per circle
varying vec3 vWorld;
varying vec3 vWaveN;
varying float vCrest;
${NOISE}

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
  float shoreFade = smoothstep(0.18, 0.55, riseN); // foam only once an island has surfaced

  // --- detail normal: two scrolling noise gradients, no texture blobs ---
  float e = 0.9;
  vec2 p1 = uv * 0.09 + vec2(uTime * 0.045, uTime * 0.021);
  vec2 p2 = uv * 0.21 + vec2(-uTime * 0.032, uTime * 0.055);
  float h  = noise(p1) * 0.66 + noise(p2) * 0.34;
  float hx = noise(p1 + vec2(e * 0.09, 0.0)) * 0.66 + noise(p2 + vec2(e * 0.21, 0.0)) * 0.34;
  float hz = noise(p1 + vec2(0.0, e * 0.09)) * 0.66 + noise(p2 + vec2(0.0, e * 0.21)) * 0.34;
  vec3 nrm = normalize(vWaveN + vec3((h - hx) * 1.35, 0.0, (h - hz) * 1.35));

  vec3 view = normalize(uCam - vWorld);
  float camDist = length(uCam - vWorld);

  // --- depth-based color: bright turquoise shallows -> deep teal ---
  float shallowMix = 1.0 - smoothstep(0.0, 14.0, sd);
  shallowMix = max(shallowMix * shoreFade, shallowMix * 0.25); // hint of shoal even pre-rise
  vec3 water = mix(uDeep, uShallow, shallowMix);
  // large painterly drift in the deep field
  float drift = fbm(uv * 0.016 + vec2(uTime * 0.008, -uTime * 0.005));
  water = mix(water, uDeep * vec3(0.72, 1.12, 1.10), smoothstep(0.42, 0.72, drift) * 0.30);
  // crest lift: wave tops catch a touch of shallow color
  water += uShallow * saturate(vCrest) * 0.05;

  // --- fresnel: sky at grazing, warm toward the sun azimuth ---
  float fres = pow(1.0 - saturate(dot(nrm, view)), 4.0);
  vec2 toFrag = normalize(vWorld.xz - uCam.xz);
  float facingSun = saturate(dot(toFrag, normalize(uSunDir.xz)));
  vec3 skyRefl = mix(uSky, uHorizon, facingSun * facingSun * 0.9);
  water = mix(water, skyRefl, fres * 0.62);

  // --- sun glitter path toward the SW sun ---
  vec3 hv = normalize(view + normalize(uSunDir));
  float spec = pow(saturate(dot(nrm, hv)), 190.0);
  float glit = smoothstep(0.62, 0.94, noise(uv * 2.3 + vec2(uTime * 0.6, -uTime * 0.45)));
  water += uSunColor * spec * (0.9 + glit * 2.6);
  // broad warm sheen along the sun path
  float sheen = pow(saturate(dot(nrm, hv)), 22.0);
  water += uSunColor * sheen * 0.10 * (0.35 + 0.65 * facingSun);

  // --- animated shore foam: two soft lapping bands + contact edge ---
  if (sd < 14.0 && shoreFade > 0.01) {
    float nb = noise(uv * 0.42 + uTime * 0.09);
    float nf = noise(uv * 1.7 - uTime * 0.22);
    float edge = 1.0 - smoothstep(0.0, 1.4 + nb, sd);
    float lap1 = sd - 2.0 - sin(uTime * 0.75 + nb * 4.2) * 1.1;
    float band1 = 1.0 - smoothstep(0.0, 1.5, abs(lap1));
    float lap2 = sd - 5.2 - sin(uTime * 0.55 + 2.1 + nb * 5.0) * 1.6;
    float band2 = (1.0 - smoothstep(0.0, 1.8, abs(lap2))) * 0.55;
    float breakup = smoothstep(0.28, 0.72, nf * 0.72 + nb * 0.28);
    float foam = saturate(edge * 0.9 + (band1 + band2) * breakup) * shoreFade;
    water = mix(water, uFoamColor, foam * 0.85);
  }

  // open-water micro sparkle
  float sparkle = step(0.94, noise(uv * 2.9 + vec2(uTime * 0.35, uTime * 0.5)));
  water += uFoamColor * sparkle * spec * 6.0;

  // --- distance fog to match scene fog ---
  float fogF = smoothstep(uFogRange.x, uFogRange.y, camDist);
  water = mix(water, uFogColor, fogF);

  gl_FragColor = vec4(water, mix(0.965, 1.0, fogF));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
