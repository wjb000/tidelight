import { NOISE } from "./chunks";

export const terrainVert = /* glsl */ `
varying vec3 vWorld;
varying vec3 vNormal;
varying vec2 vUv;
void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const terrainFrag = /* glsl */ `
precision highp float;
uniform sampler2D uSand;
uniform sampler2D uGrass;
uniform sampler2D uRock;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uHemiSky;
uniform vec3 uHemiGnd;
varying vec3 vWorld;
varying vec3 vNormal;
varying vec2 vUv;
${NOISE}

void main() {
  vec3 n = normalize(vNormal);
  float slope = 1.0 - saturate(n.y);
  float h = vWorld.y;
  float sandW = saturate(1.0 - h * 0.55) * (1.0 - slope * 1.4);
  float grassW = saturate(h * 0.38 - 0.15) * (1.0 - slope * 2.0);
  float rockW = saturate(slope * 2.2 + step(4.8, h) * 0.6);
  float sum = max(sandW + grassW + rockW, 0.0001);
  sandW /= sum; grassW /= sum; rockW /= sum;

  vec2 uv = vWorld.xz * 0.08;
  vec3 sandTex = texture2D(uSand, uv).rgb;
  vec3 grassTex = texture2D(uGrass, uv * 0.85).rgb;
  vec3 rockTex = texture2D(uRock, uv * 0.45).rgb;
  vec3 sandCol = vec3(0.95, 0.78, 0.46) * mix(0.82, 1.08, sandTex.r);
  vec3 grassCol = vec3(0.55, 0.72, 0.38) * mix(0.85, 1.1, grassTex.g);
  vec3 rockCol = vec3(0.62, 0.56, 0.58) * mix(0.75, 1.05, rockTex.r);
  vec3 albedo = sandCol * sandW + grassCol * grassW + rockCol * rockW;

  float wet = saturate(0.85 - h * 2.1) * (1.0 - slope);
  albedo *= mix(1.0, 0.52, wet);
  albedo = mix(albedo, vec3(0.55, 0.42, 0.28), wet * 0.45);
  float foam = saturate(1.0 - abs(h - 0.08) * 7.0) * (1.0 - slope);
  albedo = mix(albedo, vec3(0.95, 0.97, 0.96), foam * 0.85);

  float ndl = saturate(dot(n, normalize(uSunDir)));
  vec3 hemi = mix(uHemiGnd, uHemiSky, n.y * 0.5 + 0.5);
  vec3 light = hemi * 0.55 + uSunColor * ndl * 0.9;
  float wrap = saturate(dot(n, normalize(uSunDir + vec3(0.0, 0.35, 0.0))) * 0.5 + 0.5);
  light += vec3(1.0, 0.45, 0.22) * wrap * 0.08;

  float ao = mix(0.65, 1.0, saturate(h * 0.2 + n.y));
  vec3 col = albedo * light * ao;
  col += vec3(0.55, 0.75, 0.7) * pow(1.0 - saturate(dot(n, vec3(0.0, 1.0, 0.0))), 3.0) * 0.04;

  gl_FragColor = vec4(col, 1.0);
}
`;
