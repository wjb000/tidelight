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

export const skyFrag = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uHorizon;
uniform vec3 uZenith;
uniform vec3 uNadir;
uniform vec3 uSunColor;
varying vec3 vWorld;
${NOISE}

void main() {
  vec3 dir = normalize(vWorld);
  float h = dir.y;
  vec3 zenith = vec3(0.055, 0.04, 0.165);
  vec3 violet = vec3(0.29, 0.125, 0.47);
  vec3 rose = vec3(0.63, 0.19, 0.38);
  vec3 ember = vec3(0.88, 0.42, 0.22);
  vec3 peach = vec3(0.99, 0.82, 0.52);
  vec3 col = peach;
  col = mix(col, ember, smoothstep(-0.02, 0.08, h));
  col = mix(col, rose, smoothstep(0.08, 0.22, h));
  col = mix(col, violet, smoothstep(0.22, 0.48, h));
  col = mix(col, zenith, smoothstep(0.48, 0.85, h));
  col = mix(uNadir, col, smoothstep(-0.32, 0.02, h));

  float sun = pow(max(dot(dir, normalize(uSunDir)), 0.0), 64.0);
  float glow = pow(max(dot(dir, normalize(uSunDir)), 0.0), 5.0);
  col += uSunColor * (sun * 1.6 + glow * 0.42);

  float stars = step(0.992, noise(dir.xz * 80.0 + dir.y * 40.0));
  col += vec3(0.85, 0.9, 1.0) * stars * smoothstep(0.15, 0.55, h) * 0.55;

  vec2 cuv = dir.xz / max(dir.y + 0.15, 0.08);
  float clouds = fbm(cuv * 1.6 + vec2(uTime * 0.012, 0.0));
  clouds = smoothstep(0.48, 0.78, clouds) * smoothstep(0.02, 0.35, h);
  col = mix(col, vec3(1.0, 0.82, 0.72) * 0.95, clouds * 0.45);

  gl_FragColor = vec4(col, 1.0);
}
`;
