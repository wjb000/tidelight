// GLSL chunks injected into MeshStandardMaterial via onBeforeCompile so the
// terrain gets the full three.js lighting + shadow pipeline while we author
// a stylized, hand-painted-feel albedo from height/slope zones.

export const terrainParsVert = /* glsl */ `
varying vec3 vTWorld;
varying vec3 vTNormal;
`;

export const terrainVertMain = /* glsl */ `
vTWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
vTNormal = normalize(mat3(modelMatrix) * objectNormal);
`;

export const terrainParsFrag = /* glsl */ `
varying vec3 vTWorld;
varying vec3 vTNormal;
uniform sampler2D uSand;
uniform sampler2D uGrass;
uniform sampler2D uRock;
float tWetness;

float tnHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float tnNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = tnHash(i);
  float b = tnHash(i + vec2(1.0, 0.0));
  float c = tnHash(i + vec2(0.0, 1.0));
  float d = tnHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float tnFbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * tnNoise(p);
    p = p * 2.07 + 13.1;
    a *= 0.5;
  }
  return v;
}
// two-scale sampling blended by a noise mask kills visible tiling
vec3 tnDetile(sampler2D tex, vec2 uv, float scale) {
  vec3 a = texture2D(tex, uv * scale).rgb;
  vec3 b = texture2D(tex, uv * scale * 0.27 + vec2(0.37, 0.71)).rgb;
  float m = smoothstep(0.32, 0.68, tnNoise(uv * 0.045 + 13.1));
  return mix(a, b, m);
}
`;

// Replaces: vec4 diffuseColor = vec4( diffuse, opacity );
export const terrainAlbedoFrag = /* glsl */ `
vec3 tN = normalize(vTNormal);
float tSlope = 1.0 - saturate(tN.y);
float tH = vTWorld.y;
vec2 tUv = vTWorld.xz;

// painterly macro variation (low-freq value/hue drift)
float tMacro = tnFbm(tUv * 0.045);
float tMacro2 = tnNoise(tUv * 0.013 + 4.2);

vec3 sandTex = tnDetile(uSand, tUv, 0.11);
vec3 grassTex = tnDetile(uGrass, tUv, 0.085);
vec3 rockTex = tnDetile(uRock, tUv, 0.055);

// palette (linear space): warm sand #e8cfa4, wet band #b99a72,
// grass green-gold #7bb35a / #c9c34e, muted warm rock
vec3 drySand = vec3(0.86, 0.645, 0.395);
vec3 wetSand = vec3(0.395, 0.265, 0.155);
vec3 grassGreen = vec3(0.165, 0.345, 0.083);
vec3 grassGold = vec3(0.56, 0.485, 0.10);
vec3 rockTone = vec3(0.315, 0.272, 0.288);

// zone weights from height + slope, wobbled by noise so lines feel drawn
float wetLine = 0.35 + tnNoise(tUv * 0.09) * 0.16;
float tWet = 1.0 - smoothstep(wetLine - 0.30, wetLine + 0.10, tH);
float grassLine = 1.45 + tMacro2 * 1.1;
float wGrass = smoothstep(grassLine - 0.5, grassLine + 0.6, tH + tMacro * 0.9)
             * (1.0 - smoothstep(0.30, 0.55, tSlope));
float wRock = smoothstep(0.34, 0.58, tSlope + tMacro * 0.08);

vec3 sandCol = drySand * mix(0.86, 1.10, sandTex.r);
sandCol = mix(sandCol, wetSand * mix(0.85, 1.12, sandTex.r), tWet);
// bleached dry line just above the wet band
sandCol *= 1.0 + smoothstep(0.14, 0.0, abs(tH - wetLine - 0.20)) * (1.0 - tWet) * 0.16;
vec3 grassCol = mix(grassGreen, grassGold, saturate(tMacro * 1.7 - 0.3 + tMacro2 * 0.45));
grassCol *= mix(0.80, 1.18, grassTex.g);
vec3 rockCol = rockTone * mix(0.70, 1.14, rockTex.r);

vec3 tAlbedo = mix(sandCol, grassCol, wGrass);
tAlbedo = mix(tAlbedo, rockCol, wRock);

// warm/cool macro tint drift for the hand-painted feel
tAlbedo *= mix(vec3(0.93, 0.875, 0.87), vec3(1.07, 1.03, 0.95), tMacro);
// scattered warm autumn accents in the grass (#e8955c family)
tAlbedo = mix(tAlbedo, vec3(0.79, 0.30, 0.105),
  wGrass * smoothstep(0.70, 0.92, tnNoise(tUv * 0.06 + 27.0)) * 0.38);

// occlusion: darken into the waterline so shore reads grounded
float tAo = mix(0.40, 1.0, smoothstep(-0.6, 0.55, tH));
tAo *= mix(1.0, 0.80, tWet * 0.6);
// dock grounding shadow (pier x in [-4,4], z 26..44 + cross arm near z 30)
vec2 tDp = vec2(clamp(vTWorld.x, -3.6, 3.6), clamp(vTWorld.z, 26.0, 44.0));
vec2 tCp = vec2(clamp(vTWorld.x, -3.0, 13.0), clamp(vTWorld.z, 28.0, 32.0));
float tDockD = min(distance(vTWorld.xz, tDp), distance(vTWorld.xz, tCp));
tAo *= mix(0.60, 1.0, smoothstep(0.0, 5.5, tDockD));
// crevice shading on rock for value contrast
tAo *= mix(1.0, 0.72, wRock * (1.0 - rockTex.r));

tWetness = tWet;
vec4 diffuseColor = vec4( tAlbedo * tAo, opacity );
`;

// Appended after roughnessmap_fragment: wet sand goes glossy for sun glints
export const terrainRoughnessFrag = /* glsl */ `
roughnessFactor = mix( roughnessFactor, 0.28, tWetness * 0.85 );
`;
