export const NOISE = /* glsl */ `
#define saturate(x) clamp((x), 0.0, 1.0)
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.07 + 13.1;
    a *= 0.5;
  }
  return v;
}
`;

// Shared dusk sky ramp so water reflections meet the same horizon as the dome.
export const DUSK_RAMP = /* glsl */ `
vec3 duskRamp(float h, vec3 horizon, vec3 rose, vec3 zenith) {
  vec3 zenithDeep = zenith * vec3(0.30, 0.32, 0.52);
  vec3 mid = mix(rose, zenith, 0.38);
  vec3 col = mix(horizon, rose, smoothstep(-0.02, 0.11, h));
  col = mix(col, mid, smoothstep(0.07, 0.26, h));
  col = mix(col, zenith, smoothstep(0.20, 0.52, h));
  col = mix(col, zenithDeep, smoothstep(0.48, 0.96, h));
  return col;
}
`;

export const GERSTNER = /* glsl */ `
vec3 gerstner(vec3 p, vec2 dir, float steep, float amp, float waveLen, float speed, float t) {
  float k = 6.2831853 / waveLen;
  float c = sqrt(9.8 / k) * speed;
  float f = k * (dot(dir, p.xz) - c * t);
  float a = steep / k;
  return vec3(dir.x * a * cos(f), amp * a * sin(f), dir.y * a * cos(f));
}
`;
