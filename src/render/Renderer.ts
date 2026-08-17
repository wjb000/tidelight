import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { SMAAPass } from "three/addons/postprocessing/SMAAPass.js";
import type { Quality } from "../game/quality";
import { FOG_FAR, FOG_HEX, FOG_NEAR } from "../world/sky";

// Cinematic dusk grade. Runs on linear HDR values (before OutputPass tone maps):
// slight shadow crush, gentle S-curve contrast pivoted at mid grey, saturation
// boost, warm-highlight / cool-shadow split toning, warm vignette + grain.
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uLift: { value: new THREE.Vector3(-0.018, -0.014, -0.006) },
    uGain: { value: new THREE.Vector3(1.06, 1.005, 0.935) },
    uContrast: { value: 1.08 },
    uSat: { value: 1.08 },
    uCool: { value: new THREE.Vector3(0.90, 0.955, 1.10) },
    uWarm: { value: new THREE.Vector3(1.085, 1.01, 0.895) },
    uVignette: { value: 0.28 },
    uGrain: { value: 0.007 },
    uTime: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform vec3 uLift;
    uniform vec3 uGain;
    uniform float uContrast;
    uniform float uSat;
    uniform vec3 uCool;
    uniform vec3 uWarm;
    uniform float uVignette;
    uniform float uGrain;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      vec3 c = tex.rgb;
      // gain + lift: warmer highlights, slightly crushed cool shadows
      c = max(c * uGain + uLift, vec3(0.0));
      // punchier S-curve pivoted at linear mid grey
      c = 0.18 * pow(c / 0.18, vec3(uContrast));
      // split toning: cooler shadows, warmer highlights
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      float t = smoothstep(0.025, 0.58, l / (1.0 + l) * 2.0);
      c *= mix(uCool, uWarm, t);
      // saturation
      float g = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = max(mix(vec3(g), c, uSat), vec3(0.0));
      // warm-dark vignette so the falloff stays dusk, not grey
      float d = distance(vUv, vec2(0.5));
      float vig = smoothstep(0.38, 0.98, d) * uVignette;
      c *= mix(vec3(1.0), vec3(0.90, 0.84, 0.78), vig);
      // barely-visible grain
      float grain = fract(sin(dot(vUv * vec2(1245.0, 891.0) + fract(uTime) * 7.31, vec2(12.9898, 78.233))) * 43758.5453);
      c += (grain - 0.5) * uGrain;
      gl_FragColor = vec4(c, tex.a);
    }
  `,
};

export class Renderer {
  readonly renderer: THREE.WebGLRenderer;
  readonly composer: EffectComposer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(52, 1, 0.12, 1400);
  private readonly grade: ShaderPass;

  constructor(canvas: HTMLCanvasElement, quality: Quality) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: "high-performance",
      stencil: false,
    });
    this.renderer.setPixelRatio(quality.pixelRatio);
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.02;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // peach-rose haze matching the sky horizon so far sea / islands melt into it
    this.scene.fog = new THREE.Fog(FOG_HEX, FOG_NEAR, FOG_FAR);
    this.scene.background = new THREE.Color(0x2a2d58);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    if (quality.bloom) {
      // threshold just under 1 so sun disc + water glitter bloom, not the whole bay
      const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.32, 0.48, 0.86);
      this.composer.addPass(bloom);
    }
    this.grade = new ShaderPass(GradeShader);
    this.composer.addPass(this.grade);
    this.composer.addPass(new OutputPass());
    if (quality.smaa) {
      this.composer.addPass(new SMAAPass(innerWidth, innerHeight));
    }

    addEventListener("resize", () => this.resize());
    this.resize();
  }

  resize(): void {
    const w = innerWidth;
    const h = innerHeight;
    this.camera.aspect = w / Math.max(h, 1);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
  }

  render(t: number): void {
    this.grade.uniforms.uTime.value = t;
    this.composer.render();
  }
}
