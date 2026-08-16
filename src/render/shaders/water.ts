import { NOISE } from "./chunks";

export const waterVert = /* glsl */ `
varying vec3 vWorld;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const waterFrag = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uHorizon;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uCam;
varying vec3 vWorld;
${NOISE}

void main() {
  vec2 uv = vWorld.xz;

  // Two scrolling graphic noise fields — not a Gerstner grid
  float n1 = fbm(uv * 0.040 + vec2(uTime * 0.033, uTime * 0.006));
  float n2 = fbm(uv * 0.104 + vec2(-uTime * 0.026, uTime * 0.019));

  float dist = length(uv);
  float far = smoothstep(50.0, 200.0, dist);

  // Saturated mint/teal lagoon near, deeper teal far
  float depthMix = saturate(far * 0.92 + (n1 - 0.5) * 0.16);
  vec3 water = mix(uShallow, uDeep, depthMix);
  water = mix(water, uHorizon, far * 0.07);

  // Graphic veins / troughs from the two scrolls
  float veins = smoothstep(0.34, 0.62, n1);
  float troughs = smoothstep(0.56, 0.80, n2);
  water = mix(water, uShallow * vec3(0.78, 1.14, 1.08), veins * (1.0 - far) * 0.32);
  water = mix(water, uDeep * vec3(0.62, 0.96, 1.08), troughs * 0.20);

  // Smoothstep foam spots
  float spots = smoothstep(0.70, 0.86, n2) * (1.0 - far);

  // Contact foam on the main island shore (~36–44)
  float shore = smoothstep(36.0, 38.0, dist) * (1.0 - smoothstep(42.0, 44.0, dist));
  shore *= mix(0.38, 1.0, n1);

  vec3 foamCol = vec3(0.84, 0.99, 0.96);
  water = mix(water, foamCol, saturate(spots * 0.52 + shore));

  vec3 view = normalize(uCam - vWorld);
  vec3 nrm = normalize(vec3((n1 - 0.5) * 0.22, 1.0, (n2 - 0.5) * 0.22));

  // Soft fresnel — keep near water teal, peach only far
  float fres = pow(1.0 - saturate(dot(nrm, view)), 3.8);
  water = mix(water, mix(uShallow, uHorizon, far * 0.38), fres * 0.13);

  // Restrained sun spec
  float spec = pow(saturate(dot(nrm, normalize(view + normalize(uSunDir)))), 128.0);
  water += uSunColor * spec * 0.18;

  // Sparkle
  float sparkle = step(0.91, noise(uv * 2.05 + uTime * 0.17)) * (1.0 - far);
  water += foamCol * sparkle * 0.20;

  gl_FragColor = vec4(water, mix(0.94, 0.995, far));
}
`;
