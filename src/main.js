/* ============================================================
   LIQUID INTELLIGENCE — one chrome object, ten effects
   Three.js + GSAP ScrollTrigger + Lenis
   ============================================================ */

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(pointer: coarse)').matches;

/* ============================================================
   PRELOADER — real staged progress
   ============================================================ */
const pre = {
  el: document.getElementById('preloader'),
  pct: document.getElementById('prePercent'),
  bar: document.getElementById('preBarFill'),
  status: document.getElementById('preStatus'),
  target: 0,
  shown: 0,
};
function preSet(target, label) {
  pre.target = target;
  if (label) pre.status.textContent = label;
}
const preTicker = setInterval(() => {
  pre.shown += (pre.target - pre.shown) * 0.14;
  const v = Math.min(100, Math.round(pre.shown * 100));
  pre.pct.textContent = String(v).padStart(2, '0');
  pre.bar.style.transform = `scaleX(${pre.shown})`;
}, 40);

/* ============================================================
   WEBGL SUPPORT CHECK
   ============================================================ */
function webglOK() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (e) { return false; }
}
if (!webglOK()) {
  document.getElementById('webglFallback').hidden = false;
  pre.el.style.display = 'none';
  clearInterval(preTicker);
  throw new Error('WebGL unavailable');
}

preSet(0.1, 'INITIALIZING RENDERER');

/* ============================================================
   RENDERER / SCENE / CAMERA
   ============================================================ */
const canvas = document.getElementById('gl');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false,
  powerPreference: 'high-performance',
});
const DPR = Math.min(window.devicePixelRatio || 1, 1.75);
renderer.setPixelRatio(DPR);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050506);
scene.fog = new THREE.FogExp2(0x050506, 0.045);

const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 60);
const CAM_DIST = 7.2;
camera.position.set(0, 0, CAM_DIST);

/* ============================================================
   ACCENT — one color chosen at random per load; tints highlights/glow
   only, while the metal itself stays dark monochrome graphite/silver
   ============================================================ */
const ACCENT_PALETTE = [
  new THREE.Color(0xb400ff), // ядовито-фіолетовий
  new THREE.Color(0x00e5ff), // електрик-ціан
  new THREE.Color(0xffb84d), // рідке золото
];
let accentColor = ACCENT_PALETTE[Math.floor(Math.random() * ACCENT_PALETTE.length)];
function accentTint(intensity, mix = 0.6) {
  return new THREE.Color(1, 1, 1).lerp(accentColor, mix).multiplyScalar(intensity);
}
function pickNextAccent() {
  const options = ACCENT_PALETTE.filter((c) => c !== accentColor);
  return options[Math.floor(Math.random() * options.length)];
}

/* ============================================================
   ENVIRONMENT — procedural studio / laboratory HDRI
   rebuildable so each effect switch can carry a fresh accent color
   ============================================================ */
preSet(0.3, 'BUILDING ENVIRONMENT');
let currentEnvRT = null;
function buildEnvironment() {
  const pmrem = new THREE.PMREMGenerator(renderer);
  // custom dark laboratory: near-black room + crisp engineered light strips,
  // so the chrome reads as dark mirror metal with sliding highlights
  const envScene = new THREE.Scene();
  const room = new THREE.Mesh(
    new THREE.BoxGeometry(24, 24, 24),
    new THREE.MeshBasicMaterial({ color: 0x232326, side: THREE.BackSide })
  );
  envScene.add(room);
  // broad soft gradient panels for the liquid-mercury mid-tones — neutral graphite
  const soft = (w, h, x, y, z, rx, ry, i) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(i, i, i * 1.03), side: THREE.DoubleSide })
    );
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, 0);
    envScene.add(m);
  };
  soft(16, 10, 0, 4, -11, 0.25, 0, 0.7);   // rear soft wall
  soft(12, 12, 0, -11, 2, Math.PI / 2, 0, 0.4); // floor bounce

  // engineered strips carry the accent color — this is where the "glow" lives
  const strip = (w, h, x, y, z, rx, ry, intensity, mix = 0.6) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({
        color: accentTint(intensity, mix),
        side: THREE.DoubleSide,
      })
    );
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, 0);
    envScene.add(m);
  };
  // ceiling lab strips — wide and moderately bright for elegant highlights
  strip(14, 2.2, -3, 10, 0, Math.PI / 2, 0, 3.2);
  strip(14, 1.6, 3.5, 10, -2, Math.PI / 2, 0, 2.4);
  // vertical side slits
  strip(1.4, 9, -10.5, 1, -2, 0, Math.PI / 2, 2.0);
  strip(1.4, 9, 10.5, 0, 2, 0, -Math.PI / 2, 2.0);
  // large soft key panel, angled front-left
  strip(8, 6, -6, 3, 9, -0.3, 0.5, 1.5);

  const rt = pmrem.fromScene(envScene, 0.04);
  scene.environment = rt.texture;
  pmrem.dispose();
  if (currentEnvRT) currentEnvRT.dispose();
  currentEnvRT = rt;
}
buildEnvironment();

/* key/rim lights for extra speculars — rim carries a touch of the accent */
const keyLight = new THREE.DirectionalLight(0xffffff, 0.6);
keyLight.position.set(4, 6, 5);
scene.add(keyLight);
const rimLight = new THREE.DirectionalLight(accentTint(1, 0.4), 0.5);
rimLight.position.set(-6, -2, -4);
scene.add(rimLight);

/* ============================================================
   GLSL — simplex noise + liquid surface
   ============================================================ */
const GLSL_NOISE = /* glsl */`
vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

const RIPPLE_COUNT = 6;

const GLSL_SURFACE = /* glsl */`
uniform float uTime;
uniform float uMorph;      // 0 sphere -> 1 cube
uniform float uAmp;        // liquid noise amplitude
uniform float uNScale;     // noise spatial scale
uniform float uNSpeed;     // noise time speed
uniform float uBreathe;    // breathing scale factor
uniform float uTension;    // cube micro-deformation
uniform float uMouseStr;   // local cursor dent strength
uniform vec3  uMouseDir;   // object-space unit dir of cursor point
uniform float uPortal;     // portal opening amount
uniform vec3  uPortalAxis; // object-space axis toward camera
uniform vec4  uRipples[${RIPPLE_COUNT}];   // xyz dir, w start time (-1 off)
uniform vec4  uRippleMeta[${RIPPLE_COUNT}];// x type, y strength
uniform float uSweep;      // wipe-transition phase, grows over time
uniform float uSweepOn;    // wipe strength 0..1
uniform float uDispMix;    // displacement-map crossfade 0..1
uniform float uDispOn;     // displacement-map strength 0..1
uniform vec3  uBallDir;    // object-space dir toward nearest metaball
uniform float uBallStr;    // metaball attraction-bulge strength 0..1

vec3 faceNormal(vec3 p) {
  vec3 a = abs(p);
  if (a.x >= a.y && a.x >= a.z) return vec3(sign(p.x), 0.0, 0.0);
  if (a.y >= a.z) return vec3(0.0, sign(p.y), 0.0);
  return vec3(0.0, 0.0, sign(p.z));
}

float surfDisp(vec3 dir, vec3 bp) {
  float d = 0.0;
  // flowing liquid noise (two octaves)
  float n1 = snoise(bp * uNScale + vec3(0.0, uTime * uNSpeed, 0.0));
  float n2 = snoise(bp * uNScale * 1.8 + vec3(uTime * uNSpeed * 0.4, 0.0, 3.71));
  d += (n1 * 0.88 + n2 * 0.14) * uAmp;

  // cursor pressing into the metal
  float ma = acos(clamp(dot(dir, uMouseDir), -1.0, 1.0));
  d -= uMouseStr * 0.14 * exp(-ma * ma * 5.5);

  // portal aperture
  if (uPortal > 0.001) {
    float pa = acos(clamp(dot(dir, uPortalAxis), -1.0, 1.0));
    float pb = acos(clamp(dot(dir, -uPortalAxis), -1.0, 1.0));
    float hole = exp(-pa * pa * 4.5) + exp(-pb * pb * 4.5) * 0.75;
    float lip = exp(-pow(pa - 0.82, 2.0) * 16.0) * 0.22;
    d += uPortal * (lip - hole * 0.85);
    d += uPortal * sin(pa * 13.0 - uTime * 3.0) * exp(-pa * 2.4) * 0.035;
  }

  // marquee ripples
  for (int i = 0; i < ${RIPPLE_COUNT}; i++) {
    float st = uRipples[i].w;
    if (st < 0.0) continue;
    float t = uTime - st;
    if (t > 3.2) continue;
    float a = acos(clamp(dot(dir, uRipples[i].xyz), -1.0, 1.0));
    float ty = uRippleMeta[i].x;
    float s = uRippleMeta[i].y;
    float w = 0.0;
    if (ty < 0.5) {           // soft wave
      w = sin(a * 9.0 - t * 5.0) * exp(-a * 1.8) * exp(-t * 1.4) * 0.11;
    } else if (ty < 1.5) {    // circular inward distortion
      w = -exp(-a * a * 9.0) * sin(min(t * 3.5, 3.14159)) * exp(-t * 1.6) * 0.15;
    } else if (ty < 2.5) {    // expanding pulse ring
      float ring = a - t * 1.45;
      w = exp(-ring * ring * 22.0) * exp(-t * 1.1) * 0.12;
    } else if (ty < 3.5) {    // directional surface shift
      w = sin(a * 4.0 - t * 4.0) * exp(-a * 1.1) * exp(-t * 1.7) * 0.085;
    } else {                  // fine micro ripples
      w = sin(a * 34.0 - t * 9.0) * exp(-a * 2.6) * exp(-t * 1.9) * 0.045;
    }
    d += w * s;
  }

  // resolved-cube micro surface tension
  d += uTension * snoise(bp * 6.0 + vec3(0.0, uTime * 0.35, 0.0)) * 0.012;

  // WebGL distortion transition: a travelling wipe-ridge sweeps the body
  if (uSweepOn > 0.001) {
    float coord = dot(dir, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
    float delta = coord - fract(uSweep);
    delta -= floor(delta + 0.5);
    float ridge = exp(-delta * delta * 90.0);
    d += uSweepOn * ridge * 0.09;
    d += uSweepOn * sin(coord * 40.0 - uSweep * 40.0) * exp(-abs(delta) * 14.0) * 0.02;
  }

  // displacement-map morph: crossfade between two distinct noise "maps"
  if (uDispOn > 0.001) {
    float mapA = snoise(bp * 1.6 + vec3(0.0, uTime * 0.18, 0.0));
    float mapB = (1.0 - abs(snoise(bp * 3.4 - vec3(0.0, uTime * 0.22, 0.0)))) * 2.0 - 1.0;
    d += uDispOn * mix(mapA, mapB, uDispMix) * 0.075;
  }

  // metaball attraction: body swells toward the nearest orbiting ball
  if (uBallStr > 0.001) {
    float mb = acos(clamp(dot(dir, uBallDir), -1.0, 1.0));
    d += uBallStr * 0.16 * exp(-mb * mb * 4.0);
  }

  return d;
}

vec3 surfacePoint(vec3 p) {
  vec3 dir = normalize(p);
  float m = uMorph;
  m = m * m * (3.0 - 2.0 * m);
  vec3 bp = mix(dir, p * 0.80, m) * uBreathe;
  vec3 nb = normalize(mix(dir, faceNormal(p), m));
  return bp + nb * surfDisp(dir, bp);
}

void liquidTransform(in vec3 p, out vec3 outPos, out vec3 outN) {
  outPos = surfacePoint(p);
  vec3 fn = faceNormal(p);
  vec3 t1 = (abs(fn.x) > 0.5) ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 t2 = normalize(cross(fn, t1));
  t1 = normalize(cross(t2, fn));
  float e = 0.014;
  vec3 pa = surfacePoint(p + t1 * e);
  vec3 pb = surfacePoint(p + t2 * e);
  vec3 nrm = cross(pa - outPos, pb - outPos);
  float len = length(nrm);
  vec3 approxN = normalize(mix(normalize(p), fn, uMorph));
  nrm = len > 1e-9 ? nrm / len : approxN;
  if (dot(nrm, approxN) < 0.0) nrm = -nrm;
  outN = nrm;
}
`;

/* ============================================================
   HERO OBJECT — box geometry morphed sphere<->cube in shader
   ============================================================ */
preSet(0.5, 'FORGING GEOMETRY');

const SEG = isTouch ? 56 : 84;
const geometry = new THREE.BoxGeometry(2, 2, 2, SEG, SEG, SEG);

const chromeUniforms = {
  uTime:       { value: 0 },
  uMorph:      { value: 0 },
  uAmp:        { value: 0.055 },
  uNScale:     { value: 1.0 },
  uNSpeed:     { value: 0.14 },
  uBreathe:    { value: 1 },
  uTension:    { value: 0 },
  uMouseStr:   { value: 0 },
  uMouseDir:   { value: new THREE.Vector3(0, 0, 1) },
  uPortal:     { value: 0 },
  uPortalAxis: { value: new THREE.Vector3(0, 0, 1) },
  uRipples:    { value: Array.from({ length: RIPPLE_COUNT }, () => new THREE.Vector4(0, 0, 1, -1)) },
  uRippleMeta: { value: Array.from({ length: RIPPLE_COUNT }, () => new THREE.Vector4(0, 1, 0, 0)) },
  uSweep:      { value: 0 },
  uSweepOn:    { value: 0 },
  uDispMix:    { value: 0 },
  uDispOn:     { value: 0 },
  uBallDir:    { value: new THREE.Vector3(0, 1, 0) },
  uBallStr:    { value: 0 },
};

const chromeMat = new THREE.MeshStandardMaterial({
  color: 0x4a4a50, // dark graphite/silver base — reflections carry the accent, not the base
  metalness: 1.0,
  roughness: 0.09,
  envMapIntensity: 1.35,
});
chromeMat.onBeforeCompile = (shader) => {
  Object.assign(shader.uniforms, chromeUniforms);
  shader.vertexShader = GLSL_NOISE + GLSL_SURFACE + shader.vertexShader;
  shader.vertexShader = shader.vertexShader
    .replace('#include <beginnormal_vertex>', `
      vec3 liqPos, liqN;
      liquidTransform(position, liqPos, liqN);
      vec3 objectNormal = liqN;
    `)
    .replace('#include <begin_vertex>', `
      vec3 transformed = liqPos;
    `);
};
chromeMat.customProgramCacheKey = () => 'liquid-chrome';

const chrome = new THREE.Mesh(geometry, chromeMat);
chrome.scale.setScalar(1.35);
scene.add(chrome);

/* ============================================================
   PARALLAX ENVIRONMENT — lab light structures, planes, dust
   ============================================================ */
function gradientStripTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 16;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 256, 0);
  grad.addColorStop(0, 'rgba(255,255,255,0)');
  grad.addColorStop(0.2, 'rgba(255,255,255,0.9)');
  grad.addColorStop(0.8, 'rgba(255,255,255,0.9)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 16);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const stripTex = gradientStripTexture();

const barsGroup = new THREE.Group();
const barMats = [];
const BAR_DEFS = [
  { w: 7.0, x: -3.4, y:  2.6, z: -6.5, r: -0.16, o: 0.30 },
  { w: 5.5, x:  3.8, y: -1.2, z: -8.0, r:  0.10, o: 0.22 },
  { w: 9.0, x:  0.5, y: -4.2, z: -10., r: -0.05, o: 0.16 },
  { w: 4.0, x: -4.6, y: -6.5, z: -7.0, r:  0.22, o: 0.25 },
  { w: 6.5, x:  4.2, y: -9.8, z: -9.0, r: -0.12, o: 0.20 },
  { w: 5.0, x: -3.0, y: -13.5, z: -6.8, r: 0.14, o: 0.26 },
];
BAR_DEFS.forEach((b) => {
  const mat = new THREE.MeshBasicMaterial({
    map: stripTex, color: accentTint(1, 0.7), transparent: true, opacity: b.o,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const bar = new THREE.Mesh(new THREE.PlaneGeometry(b.w, 0.028), mat);
  bar.position.set(b.x, b.y, b.z);
  bar.rotation.z = b.r;
  bar.userData.baseY = b.y;
  bar.userData.baseOpacity = b.o;
  bar.userData.depth = -b.z;
  barsGroup.add(bar);
  barMats.push(mat);
});
scene.add(barsGroup);

// dark background planes for depth layering
const planesGroup = new THREE.Group();
[[-5, -2, -14, 10], [6, -8, -16, 12], [0, -18, -13, 9]].forEach(([x, y, z, s]) => {
  const p = new THREE.Mesh(
    new THREE.PlaneGeometry(s, s * 0.62),
    new THREE.MeshStandardMaterial({ color: 0x0a0a0d, roughness: 0.85, metalness: 0.4 })
  );
  p.position.set(x, y, z);
  planesGroup.add(p);
});
scene.add(planesGroup);

// atmospheric dust
const DUST = isTouch ? 220 : 420;
const dustGeo = new THREE.BufferGeometry();
{
  const pos = new Float32Array(DUST * 3);
  for (let i = 0; i < DUST; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 18;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 30 - 6;
    pos[i * 3 + 2] = -2 - Math.random() * 10;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
}
const dustMat = new THREE.PointsMaterial({
  color: 0xaab, size: 0.035, sizeAttenuation: true,
  transparent: true, opacity: 0.32,
  blending: THREE.AdditiveBlending, depthWrite: false,
});
const dust = new THREE.Points(dustGeo, dustMat);
scene.add(dust);

/* ============================================================
   METABALL MORPHING — small chrome balls sharing the same geometry
   and material as the hero object (same substance, same language)
   ============================================================ */
const metaballGroup = new THREE.Group();
metaballGroup.visible = false;
// lower-resolution geometry for the small balls — same material/shader (same
// substance, same visual language) but far cheaper than the hero's 84-seg mesh
const METABALL_SEG = isTouch ? 12 : 18;
const metaballGeo = new THREE.BoxGeometry(2, 2, 2, METABALL_SEG, METABALL_SEG, METABALL_SEG);
const METABALL_DEFS = [
  { baseRadius: 1.9, speed: 0.55, phase: 0.0, size: 0.30 },
  { baseRadius: 1.5, speed: -0.42, phase: 2.1, size: 0.24 },
  { baseRadius: 2.3, speed: 0.34, phase: 4.4, size: 0.20 },
];
METABALL_DEFS.forEach((d) => {
  const ball = new THREE.Mesh(metaballGeo, chromeMat);
  ball.userData = { ...d };
  metaballGroup.add(ball);
});
scene.add(metaballGroup);

/* ============================================================
   GLASSMORPHISM 3D — translucent layered panels around the object
   ============================================================ */
const glassGroup = new THREE.Group();
glassGroup.visible = false;
const GLASS_DEFS = [
  { w: 1.7, h: 2.1, x: -1.7, y: 0.5, z: 1.3, rotY: 0.5, rotZ: -0.08, opacity: 0.85 },
  { w: 1.5, h: 1.9, x: 1.8, y: -0.5, z: 0.5, rotY: -0.4, rotZ: 0.1, opacity: 0.78 },
  { w: 1.3, h: 1.7, x: 0.1, y: 1.1, z: 2.2, rotY: 0.15, rotZ: 0.04, opacity: 0.7 },
];
const glassRimMats = [];
GLASS_DEFS.forEach((g) => {
  const mat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, metalness: 0, roughness: 0.05,
    transmission: 1, thickness: 0.6, ior: 1.4,
    clearcoat: 1, clearcoatRoughness: 0.1,
    envMapIntensity: 2.0, transparent: true, opacity: g.opacity,
    side: THREE.DoubleSide,
  });
  const panelGeo = new THREE.PlaneGeometry(g.w, g.h);
  const panel = new THREE.Mesh(panelGeo, mat);
  panel.position.set(g.x, g.y, g.z);
  panel.rotation.set(0, g.rotY, g.rotZ);
  panel.userData = { baseY: g.y, baseRotY: g.rotY, baseRotZ: g.rotZ };
  // thin glowing rim so the panel edge reads clearly against the black background
  const rimMat = new THREE.LineBasicMaterial({ color: accentTint(1, 0.55), transparent: true, opacity: 0.6 });
  const rim = new THREE.LineSegments(new THREE.EdgesGeometry(panelGeo), rimMat);
  glassRimMats.push(rimMat);
  panel.add(rim);
  glassGroup.add(panel);
});
scene.add(glassGroup);

/* ============================================================
   POSTPROCESSING — bloom, grade (CA/vignette/grain/blur), SMAA
   ============================================================ */
const composer = new EffectComposer(renderer);
composer.setPixelRatio(DPR);
composer.setSize(window.innerWidth, window.innerHeight);
composer.addPass(new RenderPass(scene, camera));

const bloom = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight), 0.34, 0.75, 0.86
);
composer.addPass(bloom);
composer.addPass(new OutputPass());

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uCA: { value: 0.0026 },
    uVel: { value: 0 },
    uTime: { value: 0 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float uCA;
    uniform float uVel;
    uniform float uTime;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    void main() {
      vec2 c = vUv - 0.5;
      float r2 = dot(c, c);
      // velocity-scaled radial motion blur (scroll speed)
      vec3 col = vec3(0.0);
      float blur = clamp(uVel, 0.0, 1.0) * 0.02 * r2 * 4.0;
      for (int i = 0; i < 4; i++) {
        float f = float(i) / 3.0 - 0.5;
        vec2 uv = vUv + c * blur * f;
        // chromatic aberration
        vec2 off = c * (uCA + uVel * 0.002) * (1.0 + r2 * 6.0);
        col.r += texture2D(tDiffuse, uv + off).r;
        col.g += texture2D(tDiffuse, uv).g;
        col.b += texture2D(tDiffuse, uv - off).b;
      }
      col *= 0.25;
      // cinematic vignette
      col *= 1.0 - r2 * 0.55;
      // fine grain
      col += (hash(vUv * 1013.0 + fract(uTime) * 91.0) - 0.5) * 0.035;
      gl_FragColor = vec4(col, 1.0);
    }`,
};
const gradePass = new ShaderPass(GradeShader);
composer.addPass(gradePass);

const smaa = new SMAAPass();
composer.addPass(smaa);

/* ============================================================
   STATE — scroll story + demo modes
   ============================================================ */
const story = {
  morph: 0,      // scroll-driven sphere->cube
  x: 0, y: 1.55, // object anchor in world
  scale: 0.62,   // relative object scale
  rotSpeed: 0.1,
  tension: 0,
};

const demo = {
  ampMul: 1, speedMul: 1,
  mouseStr: 1, mouseRot: 1,
  autoMorphOn: 0, autoMorph: 0,
  scrollStrict: 0,
  scaleOsc: 0, zoom: 0, portal: 0, orbit: 0,
  parallaxMul: 1, barsBoost: 0,
  sweepOn: 0, dispOn: 0, ballOn: 0, glassOn: 0,
  chromeScaleMul: 1,
};

const mouse = { x: 0, y: 0, sx: 0, sy: 0 };      // raw + smoothed NDC
const rot = { x: 0, y: 0, vx: 0, vy: 0 };        // inertial rotation
let scrollY = 0;
let scrollVel = 0;
let orbitAngle = 0;
let zoomPhase = 0;
let pageProgress = 0;
const introState = { scale: 0.001 }; // multiplied into object scale; tweened by intro()

window.addEventListener('pointermove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
}, { passive: true });

/* ---------- ripples ---------- */
let rippleSlot = 0;
let lastRipple = 0;
const _v3a = new THREE.Vector3();
const _qa = new THREE.Quaternion();
function spawnRipple(ndcX, ndcY, type, strength = 1) {
  const now = performance.now();
  if (now - lastRipple < 90) return;
  lastRipple = now;
  // direction in view space -> world -> object space
  _v3a.set(ndcX * 0.85, ndcY * 0.6 + 0.15, 0.85).normalize();
  _v3a.applyQuaternion(camera.quaternion);
  _qa.copy(chrome.quaternion).invert();
  _v3a.applyQuaternion(_qa).normalize();
  const slot = rippleSlot++ % RIPPLE_COUNT;
  chromeUniforms.uRipples.value[slot].set(_v3a.x, _v3a.y, _v3a.z, chromeUniforms.uTime.value);
  chromeUniforms.uRippleMeta.value[slot].set(type, strength, 0, 0);
}

/* ============================================================
   SMOOTH SCROLL — Lenis + ScrollTrigger
   ============================================================ */
const lenis = new Lenis({
  duration: 1.25,
  smoothWheel: !prefersReduced,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
lenis.on('scroll', (e) => {
  scrollY = e.scroll;
  scrollVel = e.velocity;
  ScrollTrigger.update();
});
gsap.ticker.lagSmoothing(0);

/* ============================================================
   SCROLL STORY — object travels + morphs across acts
   ============================================================ */
function buildScrollStory() {
  // 3x smoother catch-up: a short/fast scroll gesture no longer snaps the
  // object through several morph/rotation states at once — it settles gradually
  const scrub = 2.1;
  const st = (trigger, vars) => gsap.timeline({
    scrollTrigger: { trigger, start: 'top bottom', end: 'top top', scrub },
  }).to(story, { ease: 'none', ...vars });

  // hero -> screen 1: sphere descends from above the headline to center-left
  st('#act2', { y: 0, x: -1.55, scale: 1 });
  // screen 1 -> screen 2: morph begins, drift right
  gsap.timeline({
    scrollTrigger: { trigger: '#act3', start: 'top bottom', end: 'top top', scrub },
  }).to(story, { ease: 'none', morph: 0.5, x: 1.5, tension: 0.4 });
  // screen 2 -> screen 3: resolve to cube, recenter
  gsap.timeline({
    scrollTrigger: { trigger: '#act4', start: 'top bottom', end: 'top top', scrub },
  }).to(story, { ease: 'none', morph: 1, x: -1.35, tension: 1, rotSpeed: 0.22 });
  // cube -> marquee: settle behind the type
  st('#act5', { x: 0, y: 0.1, scale: 0.85 });
  // marquee -> demo lab: return to pure sphere as the neutral canvas
  gsap.timeline({
    scrollTrigger: { trigger: '#act6', start: 'top bottom', end: 'top top', scrub },
  }).to(story, { ease: 'none', morph: 0, tension: 0, x: -1.45, y: 0, scale: 1.05, rotSpeed: 0.12 });
  // demo -> closing: recede into the dark
  st('#act7', { x: 0, y: 0.25, scale: 0.5, rotSpeed: 0.06 });

  // page progress for scroll-driven-morph demo + HUD
  ScrollTrigger.create({
    trigger: '#main', start: 'top top', end: 'bottom bottom', scrub: true,
    onUpdate: (self) => { pageProgress = self.progress; },
  });

  // DOM parallax layers
  document.querySelectorAll('[data-speed]').forEach((el) => {
    const speed = parseFloat(el.dataset.speed || '1');
    gsap.fromTo(el, { yPercent: (1 - speed) * 90 }, {
      yPercent: -(1 - speed) * 90, ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

/* ============================================================
   MARQUEE — endless track + ripple-on-hover
   ============================================================ */
function buildMarquee() {
  [['marquee1', 60, 1], ['marquee2', 78, -1]].forEach(([id, dur, dir]) => {
    const wrap = document.getElementById(id);
    const track = wrap.querySelector('.marquee-track');
    // duplicate content until it spans at least 2x viewport for a seamless loop
    const original = track.innerHTML;
    while (track.scrollWidth < window.innerWidth * 2.2) {
      track.innerHTML += original;
    }
    const w = track.scrollWidth / 2;
    gsap.fromTo(track,
      { x: dir === 1 ? 0 : -w },
      { x: dir === 1 ? -w : 0, duration: dur, ease: 'none', repeat: -1 });
  });

  document.querySelectorAll('.mq-item').forEach((item) => {
    item.addEventListener('pointerenter', () => {
      const r = item.getBoundingClientRect();
      const nx = ((r.left + r.width / 2) / window.innerWidth) * 2 - 1;
      const ny = -(((r.top + r.height / 2) / window.innerHeight) * 2 - 1);
      spawnRipple(nx, ny, parseFloat(item.dataset.ripple || '0'), 1);
      // the object briefly "turns toward" the word
      gsap.to(rot, { vy: `+=${nx * 0.03}`, duration: 0.3, overwrite: false });
    });
  });
}

/* ============================================================
   EFFECT LIBRARY — data + demonstration modes
   ============================================================ */
const FX = {
  story: {
    name: 'SCROLL STORY',
    line: 'Базовий режим: те саме хромове тіло рухається і трансформується виключно за рахунок скролу сторінки — це "нейтральна" точка відліку для порівняння з іншими ефектами.',
    trigger: 'Просто скрольте сторінку вгору-вниз — форма і положення об\'єкта змінюються синхронно з прогресом.',
    benefit: 'Сторінка сама стає таймлайном анімації.',
    best: 'Наративні лендінги на всю сторінку.',
  },
  liquid: {
    name: 'LIQUID MORPHING',
    line: 'Той самий об\'єкт, але шумова деформація поверхні посилена майже втричі і рухається швидше — метал сильніше "кипить", навіть коли форма не змінюється.',
    trigger: 'Просто дивіться на об\'єкт кілька секунд, не рухаючи мишкою і не гортаючи сторінку — помітите набагато сильніші хвилі на поверхні, ніж у Scroll Story.',
    benefit: 'Об\'єкт виглядає фізично живим і плавно "перетікає" сам у собі без різких стиків.',
    best: 'Hero-секції, наратив продукту, брендові переходи.',
  },
  shape: {
    name: 'SHAPE MORPHING',
    line: 'Тут акцент саме на геометрії: форма сама, без участі скролу чи миші, безперервно осцилює між сферою і кубом по таймеру.',
    trigger: 'Почекайте 2–3 секунди, нічого не чіпаючи — побачите, як об\'єкт сам плавно перетворюється з кулі на куб і назад, по колу.',
    benefit: 'Чіткий, самостійний перехід між двома різними формами в одному об\'єкті.',
    best: 'Розкриття фічі, лого-моменти, зміна стану продукту.',
  },
  interactive: {
    name: 'INTERACTIVE 3D',
    line: 'Нахил, паралакс і поворот об\'єкта за курсором посилені приблизно втричі порівняно зі звичайним режимом.',
    trigger: 'Повільно поводьте мишкою по екрану вліво-вправо і вгору-вниз — об\'єкт помітно нахиляється й "пливе" за курсором з інерцією, набагато виразніше, ніж зазвичай.',
    benefit: 'Сторінка відчувається "живою", а не просто відрендереною.',
    best: 'Лендінги, портфоліо, конфігуратори продукту.',
  },
  scrollmorph: {
    name: 'SCROLL-DRIVEN MORPH',
    line: 'Морф сфера→куб тут жорстко прив\'язаний до прогресу скролу всієї сторінки (0–100%), а не до окремих секцій-екранів, як у звичайному наративі.',
    trigger: 'Повільно скрольте всю сторінку від початку до кінця — форма змінюється строго пропорційно позиції скролу, і скрол назад миттєво повертає форму.',
    benefit: 'Користувач керує анімацією напряму — нічого не програється саме по собі.',
    best: 'Сторінки-історії, покрокові презентації продукту.',
  },
  scale: {
    name: '3D SCALE',
    line: 'Об\'єкт ритмічно й помітно наближається до камери та віддаляється — це справжній рух у 3D-просторі, а не CSS-масштабування картинки.',
    trigger: 'Просто дивіться кілька секунд: об\'єкт сам циклічно "наближається" і "відходить" від вас.',
    benefit: 'Реальна глибина — разом з масштабом міняється й перспектива, паралакс і фокус.',
    best: 'Ефектні появи об\'єкта, переходи між секціями.',
  },
  zoom: {
    name: 'INFINITE ZOOM',
    line: 'Камера безкінечно "пірнає" в хромову поверхню об\'єкта, і в момент, коли майже впирається в неї — миттєво повертається на старт із коротким спалахом, і цикл повторюється.',
    trigger: 'Дивіться 5–8 секунд — побачите повільне наближення камери всередину металу і різкий "стрибок" назад зі спалахом.',
    benefit: 'Гіпнотичне відчуття нескінченної глибини в одному об\'єкті.',
    best: 'Переходи між розділами, занурюючі інтро.',
  },
  portal: {
    name: 'PORTAL DEFORMATION',
    line: 'У центрі тіла шейдером "продавлюється" рідкий отвір — поверхня ніби втягується всередину, наче двері в інший простір.',
    trigger: 'Дивіться на центр об\'єкта — за 1–2 секунди після вибору ефекту там сформується округла "воронка".',
    benefit: 'Наочна метафора переходу, яку глядач одразу зчитує.',
    best: 'Переходи між сторінками, моменти "розкриття" контенту.',
  },
  orbit: {
    name: 'CAMERA ORBIT',
    line: 'Сам об\'єкт не рухається і не змінює форму — навколо нього по колу обертається камера, як у шоурумі.',
    trigger: 'Просто почекайте — точка зору сама повільно облітає нерухомий об\'єкт по колу, без жодних дій з вашого боку.',
    benefit: 'Кожен ракурс об\'єкта отримує час на екрані без жодного руху самого об\'єкта.',
    best: 'Сторінки товару, 360°-презентації, автоіндустрія.',
  },
  parallax: {
    name: 'PARALLAX DEPTH',
    line: 'Фонові світлові смуги, темні площини і пилинки на задньому плані рухаються і "розкриваються" помітно активніше й швидше за сам об\'єкт під час скролу.',
    trigger: 'Скрольте сторінку і дивіться на фон навколо об\'єкта — смуги світла зсуваються значно швидше, ніж хромове тіло в центрі.',
    benefit: 'Відчуття фізичної глибини сторінки майже без додаткового контенту.',
    best: 'Атмосферні лендінги, редакційний дизайн, підказки глибини.',
  },
  mousemorph: {
    name: 'MOUSE-REACTIVE MORPH',
    line: 'Курсор буквально "вдавлює" метал локально в точці, куди він вказує на поверхні об\'єкта — це не загальний нахил, а точкова деформація.',
    trigger: 'Підведіть курсор впритул до об\'єкта й повільно водіть по ньому — побачите локальну вм\'ятину, яка слідує за вказівником і плавно "загоюється", коли ви відводите мишку.',
    benefit: 'Інтерфейс отримує відчуття дотику — тактильність.',
    best: 'Інтерактивні hero-секції, ігрові бренд-моменти, тактильний UI.',
  },
  webgl: {
    name: 'WEBGL DISTORTION TRANSITION',
    line: 'Хвиля-шов постійно біжить по поверхні знизу вгору й огортає тіло — це схоже на перехід між слайдами, тільки безперервний, а не одноразовий.',
    trigger: 'Дивіться кілька секунд: світла "хвиля-шов" сама рухається по поверхні знизу вгору й зациклюється.',
    benefit: 'Перехід відчувається органічним, а не різким CSS-фейдом чи нарізкою кадрів.',
    best: 'Перемикання слайдів, зміна сторінок, кросфейд між станами контенту.',
  },
  dispmap: {
    name: 'DISPLACEMENT MAP MORPH',
    line: 'Характер самої текстури поверхні безперервно перетікає з м\'яких хвиль у різкіший "клітинний" візерунок і назад — форма тіла при цьому не змінюється.',
    trigger: 'Дивіться на дрібний малюнок бліків на поверхні 8–10 секунд — візерунок сам поступово змінює "почерк" з плавного на різкіший і навпаки.',
    benefit: 'Одна поверхня може мати кілька зовсім різних "почерків" без зміни геометрії.',
    best: 'Портфоліо, галереї, творчі сайти з переходами між зображеннями.',
  },
  metaball: {
    name: 'METABALL MORPHING',
    line: 'Навколо основного тіла літають менші хромові кульки; коли вони наближаються — головне тіло випинається їм назустріч, наче краплі намагаються злитися.',
    trigger: 'Стежте за дрібними кульками навколо об\'єкта — коли одна з них підлітає близько, поверхня головного тіла в цьому місці плавно "надувається" їй назустріч.',
    benefit: 'Форми виглядають як живі краплі рідини, що притягуються й зливаються.',
    best: 'Декоративні фони, інтерактивні заставки, живі бренд-елементи.',
  },
  blob: {
    name: 'BLOB MORPHING',
    line: 'М\'яка форма постійно "дихає" з пружинним ефектом — амплітуда деформації то різко зростає з перебігом (overshoot), то плавно заспокоюється, і так по колу.',
    trigger: 'Дивіться 4–5 секунд: поверхня сама ритмічно "пружинить" — короткий різкий викид форми, потім м\'яке заспокоєння.',
    benefit: 'Рух відчувається пружним і живим, а не механічним.',
    best: 'Декоративний живий фон, м\'які фонові акценти інтерфейсу.',
  },
  glass: {
    name: 'GLASSMORPHISM 3D',
    line: 'Навколо зменшеного хромового тіла з\'являються кілька напівпрозорих скляних панелей у 3D-просторі — з заломленням, розмиттям і власними відбитками світла.',
    trigger: 'Придивіться навколо основного об\'єкта — з\'являться кілька плаваючих напівпрозорих "скляних" панелей на різній глибині, що повільно гойдаються.',
    benefit: 'Інтерфейс отримує легкість, глибину і сучасний "скляний" вигляд.',
    best: 'Картки інтерфейсу, панелі навігації, сучасні UI-шари.',
  },
};

let activeMode = 'story';
let shapeTween = null;
let pulseTween = null;

// re-tint highlights/glow to a new random accent — called on every filter
// switch so effects read as visually distinct instead of "all the same"
function applyAccent() {
  accentColor = pickNextAccent();
  buildEnvironment();
  const rim = accentTint(1, 0.4);
  gsap.to(rimLight.color, { r: rim.r, g: rim.g, b: rim.b, duration: 1.1, ease: 'power2.out' });
  barMats.forEach((m) => {
    const c = accentTint(1, 0.7);
    gsap.to(m.color, { r: c.r, g: c.g, b: c.b, duration: 1.1, ease: 'power2.out' });
  });
  glassRimMats.forEach((m) => {
    const c = accentTint(1, 0.55);
    gsap.to(m.color, { r: c.r, g: c.g, b: c.b, duration: 1.1, ease: 'power2.out' });
  });
}

function setMode(mode) {
  if (!FX[mode]) mode = 'story';
  activeMode = mode;
  applyAccent();

  // UI state
  document.querySelectorAll('.selector-list li').forEach((li) =>
    li.classList.toggle('active', li.dataset.mode === mode));
  document.querySelectorAll('.demo-chips button').forEach((b) =>
    b.classList.toggle('active', b.dataset.mode === mode));
  document.getElementById('selectorValue').textContent = FX[mode].name;
  document.getElementById('hudMode').textContent = FX[mode].name.replace(/ /g, ' ');

  // explanation panel
  const panel = document.getElementById('fxPanel');
  const fill = () => {
    document.getElementById('fxName').textContent = FX[mode].name;
    document.getElementById('fxLine').textContent = FX[mode].line;
    document.getElementById('fxTrigger').textContent = FX[mode].trigger;
    document.getElementById('fxBenefit').textContent = FX[mode].benefit;
    document.getElementById('fxBest').textContent = FX[mode].best;
  };
  if (mode === 'story') {
    gsap.to(panel, {
      opacity: 0, y: 24, duration: 0.4, ease: 'power2.in',
      onComplete: () => { panel.classList.remove('visible'); panel.style.visibility = 'hidden'; },
    });
  } else {
    panel.style.visibility = 'visible';
    panel.classList.add('visible');
    gsap.timeline()
      .to(panel, { opacity: 0, y: 10, duration: 0.22, ease: 'power2.in' })
      .add(fill)
      .to(panel, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' });
  }

  // reset all exaggerations, then apply the selected one
  if (shapeTween) { shapeTween.kill(); shapeTween = null; }
  if (pulseTween) { pulseTween.kill(); pulseTween = null; }
  const D = 1.4, E = 'power2.inOut';
  gsap.to(demo, {
    ampMul: 1, speedMul: 1, mouseStr: 1, mouseRot: 1,
    autoMorphOn: 0, scrollStrict: 0, scaleOsc: 0, zoom: 0,
    portal: 0, orbit: 0, parallaxMul: 1, barsBoost: 0,
    sweepOn: 0, dispOn: 0, ballOn: 0, glassOn: 0, chromeScaleMul: 1,
    duration: D, ease: E, overwrite: 'auto',
  });

  switch (mode) {
    case 'liquid':
      gsap.to(demo, { ampMul: 2.7, speedMul: 1.9, duration: D, ease: E });
      break;
    case 'shape':
      gsap.to(demo, { autoMorphOn: 1, duration: D, ease: E });
      // a clear, readable sphere -> cube -> sphere cycle: real holds at both
      // ends so each shape is actually seen, not a blur of rapid oscillation
      demo.autoMorph = 0;
      shapeTween = gsap.timeline({ repeat: -1 })
        .to(demo, { autoMorph: 0, duration: 1.2 })
        .to(demo, { autoMorph: 1, duration: 2.6, ease: 'power2.inOut' })
        .to(demo, { autoMorph: 1, duration: 1.6 })
        .to(demo, { autoMorph: 0, duration: 2.6, ease: 'power2.inOut' });
      break;
    case 'interactive':
      gsap.to(demo, { mouseRot: 3.2, mouseStr: 1.6, parallaxMul: 1.5, duration: D, ease: E });
      break;
    case 'scrollmorph':
      gsap.to(demo, { scrollStrict: 1, duration: D, ease: E });
      break;
    case 'scale':
      gsap.to(demo, { scaleOsc: 1, duration: D, ease: E });
      break;
    case 'zoom':
      zoomPhase = 0;
      gsap.to(demo, { zoom: 1, duration: D, ease: E });
      break;
    case 'portal':
      gsap.to(demo, { portal: 1, duration: 2.0, ease: 'power3.inOut' });
      break;
    case 'orbit':
      gsap.to(demo, { orbit: 1, duration: 1.8, ease: E });
      break;
    case 'parallax':
      gsap.to(demo, { parallaxMul: 3.2, barsBoost: 1, duration: D, ease: E });
      break;
    case 'mousemorph':
      gsap.to(demo, { mouseStr: 3.6, mouseRot: 0.5, duration: D, ease: E });
      break;
    case 'webgl':
      gsap.to(demo, { sweepOn: 1, duration: D, ease: E });
      break;
    case 'dispmap':
      gsap.to(demo, { dispOn: 1, duration: D, ease: E });
      break;
    case 'metaball':
      gsap.to(demo, { ballOn: 1, duration: D, ease: E });
      break;
    case 'blob':
      gsap.to(demo, { mouseStr: 1.3, duration: D, ease: E });
      pulseTween = gsap.to(demo, {
        ampMul: 3.4, duration: 1.6, ease: 'elastic.out(1, 0.35)', yoyo: true, repeat: -1,
      });
      break;
    case 'glass':
      gsap.to(demo, { glassOn: 1, chromeScaleMul: 0.68, duration: 1.6, ease: E });
      break;
    case 'story':
      // read as the calm baseline every other effect exaggerates from —
      // otherwise the always-on liquid wobble makes it look identical to them
      gsap.to(demo, { ampMul: 0.55, speedMul: 0.65, duration: D, ease: E });
      break;
  }

  // bring the stage into view: the demo modes scroll to the laboratory,
  // Scroll Story scrolls to the hero so its scroll-driven behaviour is
  // actually visible instead of sitting static wherever you switched it on
  if (mode !== 'story') {
    const act6 = document.getElementById('act6');
    const target = act6.offsetTop + act6.offsetHeight * 0.35 - window.innerHeight * 0.5;
    lenis.scrollTo(target, { duration: 1.6 });
  } else {
    lenis.scrollTo(0, { duration: 1.6 });
  }
}

/* ---------- selector + chips wiring ---------- */
function buildSelector() {
  const sel = document.getElementById('selector');
  const btn = document.getElementById('selectorBtn');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = sel.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('click', () => sel.classList.remove('open'));
  document.querySelectorAll('.selector-list li').forEach((li) => {
    li.addEventListener('click', () => {
      sel.classList.remove('open');
      setMode(li.dataset.mode);
    });
  });
  document.querySelectorAll('.demo-chips button').forEach((b) => {
    b.addEventListener('click', () => setMode(b.dataset.mode));
  });
  document.getElementById('fxClose').addEventListener('click', () => setMode('story'));
}

/* ============================================================
   CURSOR LENS — DOM magnifier with refraction over the title
   ============================================================ */
function buildLens() {
  if (isTouch) return;
  const lens = document.getElementById('lens');
  const inner = document.getElementById('lensInner');
  const wrap = document.getElementById('heroTitleWrap');
  const title = document.getElementById('heroTitle');
  const ZOOM = 1.42, R = 95;

  const clone = title.cloneNode(true);
  clone.removeAttribute('id');
  clone.classList.add('clone');
  clone.querySelectorAll('.line-inner').forEach((el) => { el.style.transform = 'none'; });
  inner.appendChild(clone);

  const act1 = document.getElementById('act1');
  let px = -300, py = -300, tx = -300, ty = -300;
  let moved = false;
  let curO = 0;

  window.addEventListener('pointermove', (e) => {
    tx = e.clientX; ty = e.clientY;
    if (!moved) { moved = true; px = tx; py = ty; }
  }, { passive: true });

  gsap.ticker.add(() => {
    px += (tx - px) * 0.12;
    py += (ty - py) * 0.12;
    // visible only while the hero is on screen and the pointer is inside it
    const heroR = act1.getBoundingClientRect();
    const on = moved && heroR.bottom > 180 && ty < heroR.bottom - 40 && ty > 0;
    curO += ((on ? 1 : 0) - curO) * 0.08;
    lens.style.opacity = curO.toFixed(3);
    if (curO < 0.005) return;
    lens.style.transform = `translate(${px}px, ${py}px) translate(-50%,-50%)`;
    const rect = wrap.getBoundingClientRect();
    clone.style.width = `${rect.width}px`;
    const lx = px - rect.left;
    const ly = py - rect.top;
    // refraction bias: content is pulled slightly toward the lens center
    clone.style.transform = `translate(${R - lx * ZOOM}px, ${R - ly * ZOOM}px) scale(${ZOOM})`;
  });
}

/* ============================================================
   MOUSE -> OBJECT-SPACE CURSOR POINT
   ============================================================ */
const raycaster = new THREE.Raycaster();
const _ndc = new THREE.Vector2();
const _sph = new THREE.Sphere();
const _hit = new THREE.Vector3();
function updateMouseOnChrome() {
  _ndc.set(mouse.sx, mouse.sy);
  raycaster.setFromCamera(_ndc, camera);
  _sph.set(chrome.position, chrome.scale.x * 1.15);
  const hit = raycaster.ray.intersectSphere(_sph, _hit);
  let target = 0;
  if (hit) {
    _v3a.copy(_hit).sub(chrome.position).normalize();
    _qa.copy(chrome.quaternion).invert();
    _v3a.applyQuaternion(_qa);
    chromeUniforms.uMouseDir.value.lerp(_v3a, 0.08).normalize();
    target = 1;
  }
  const cur = chromeUniforms.uMouseStr.value;
  chromeUniforms.uMouseStr.value = cur + (target * demo.mouseStr - cur) * 0.06;
}

/* ============================================================
   MAIN LOOP
   ============================================================ */
const clock = new THREE.Clock();
const zoomflash = document.getElementById('zoomflash');
const hudFill = document.getElementById('hudFill');
const hudMorph = document.getElementById('hudMorph');
const camTarget = new THREE.Vector3();
let smoothVel = 0;
let hudFrame = 0;
let autoSpinY = 0;   // integrated separately from elapsed time so changing
                     // rotSpeed never snaps the object to a new absolute angle

function tick(time) {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  chromeUniforms.uTime.value = t;

  // smoothed mouse
  mouse.sx += (mouse.x - mouse.sx) * 0.045;
  mouse.sy += (mouse.y - mouse.sy) * 0.045;

  // ---- morph resolution (story vs demo overrides) ----
  let morph = story.morph;
  if (demo.autoMorphOn > 0.001) morph = THREE.MathUtils.lerp(morph, demo.autoMorph, demo.autoMorphOn);
  if (demo.scrollStrict > 0.001) morph = THREE.MathUtils.lerp(morph, pageProgress, demo.scrollStrict);
  chromeUniforms.uMorph.value = morph;

  // liquid params: extra wobble at mid-morph (tension between shapes)
  const midTension = 4 * morph * (1 - morph);
  // calm the liquid as the form resolves into the cube; boil at mid-morph
  chromeUniforms.uAmp.value = 0.06 * demo.ampMul * (1 + midTension * 1.3) * (1 - morph * 0.62);
  chromeUniforms.uNSpeed.value = 0.14 * demo.speedMul * (1 + midTension * 0.4);
  chromeUniforms.uBreathe.value = 1 + Math.sin(t * 0.32) * 0.02;
  chromeUniforms.uTension.value = story.tension;
  chromeUniforms.uPortal.value = demo.portal;
  chromeUniforms.uSweep.value = t * 0.16;
  chromeUniforms.uSweepOn.value = demo.sweepOn;
  chromeUniforms.uDispOn.value = demo.dispOn;
  chromeUniforms.uDispMix.value = Math.sin(t * 0.35) * 0.5 + 0.5;

  // portal axis: object-space direction toward camera
  if (demo.portal > 0.001) {
    _v3a.copy(camera.position).sub(chrome.position).normalize();
    _qa.copy(chrome.quaternion).invert();
    chromeUniforms.uPortalAxis.value.copy(_v3a.applyQuaternion(_qa)).normalize();
  }

  // ---- inertial rotation ----
  const targX = mouse.sy * 0.32 * demo.mouseRot;
  const targY = mouse.sx * 0.5 * demo.mouseRot;
  // softer spring + longer velocity retention: a sudden mouse flick eases
  // into motion and glides to a stop instead of snapping and jolting to a halt
  rot.vx += (targX - rot.x) * 0.0055;
  rot.vy += (targY - rot.y) * 0.0055;
  rot.vx *= 0.97; rot.vy *= 0.97;
  rot.x += rot.vx; rot.y += rot.vy;
  chrome.rotation.x = rot.x + Math.sin(t * 0.21) * 0.08;
  // integrate the idle spin instead of recomputing it as (elapsed time * speed):
  // that pattern jumps the absolute angle any time speed changes, which read
  // as the object "flinching" mid-scroll. Accumulating means only the *rate*
  // changes — the current angle is always continuous.
  autoSpinY += dt * story.rotSpeed;
  chrome.rotation.y = rot.y + autoSpinY;

  // ---- object placement ----
  const scaleOscZ = Math.sin(t * 0.62) * 2.6 * demo.scaleOsc;
  chrome.position.x = story.x + mouse.sx * 0.14;
  chrome.position.y = story.y + Math.sin(t * 0.8) * 0.07 + mouse.sy * 0.1;
  chrome.position.z = scaleOscZ; // travels toward the lens in scale mode
  const s = 1.35 * story.scale * introState.scale * demo.chromeScaleMul;
  chrome.scale.setScalar(s);

  // ---- metaball morphing: small chrome balls orbit and "attract" the body ----
  metaballGroup.visible = demo.ballOn > 0.02;
  if (metaballGroup.visible) {
    let nearestDist = Infinity;
    let nearestPos = null;
    metaballGroup.children.forEach((ball) => {
      const u = ball.userData;
      const orbitT = t * u.speed + u.phase;
      const shrink = 0.55 + 0.4 * Math.sin(t * 0.35 + u.phase);
      const r = u.baseRadius * shrink;
      ball.position.set(
        chrome.position.x + Math.cos(orbitT) * r,
        chrome.position.y + Math.sin(orbitT * 0.8) * r * 0.6,
        chrome.position.z + Math.sin(orbitT) * r
      );
      ball.rotation.set(t * 0.25, t * 0.4, 0);
      ball.scale.setScalar(s * u.size);
      const dist = ball.position.distanceTo(chrome.position);
      if (dist < nearestDist) { nearestDist = dist; nearestPos = ball.position; }
    });
    if (nearestPos) {
      _v3a.copy(nearestPos).sub(chrome.position).normalize();
      _qa.copy(chrome.quaternion).invert();
      chromeUniforms.uBallDir.value.lerp(_v3a.applyQuaternion(_qa), 0.15).normalize();
    }
    const proximity = THREE.MathUtils.clamp(1 - (nearestDist - s * 0.9) / (s * 1.3), 0, 1);
    chromeUniforms.uBallStr.value += (proximity * demo.ballOn - chromeUniforms.uBallStr.value) * 0.08;
  } else {
    chromeUniforms.uBallStr.value *= 0.9;
  }

  // ---- glassmorphism panels: subtle independent float around the body ----
  glassGroup.visible = demo.glassOn > 0.02;
  if (glassGroup.visible) {
    glassGroup.children.forEach((panel, i) => {
      const u = panel.userData;
      panel.position.y = u.baseY + Math.sin(t * 0.4 + i * 1.7) * 0.12;
      panel.rotation.y = u.baseRotY + Math.cos(t * 0.2 + i * 1.7) * 0.06;
      panel.rotation.z = u.baseRotZ + Math.sin(t * 0.25 + i * 1.7) * 0.05;
    });
  }

  // ---- camera: parallax, orbit, infinite zoom ----
  let camX = mouse.sx * 0.38 * demo.parallaxMul;
  let camY = mouse.sy * 0.3 * demo.parallaxMul;
  let camZ = CAM_DIST;

  if (demo.zoom > 0.001) {
    zoomPhase = (zoomPhase + dt * 0.14) % 1;
    const dive = Math.pow(Math.min(zoomPhase, 1), 3.2);
    camZ = THREE.MathUtils.lerp(CAM_DIST, chrome.position.z + s * 0.62, dive * demo.zoom);
    // wrap flash to sell the loop
    const wrapT = zoomPhase > 0.93 ? (zoomPhase - 0.93) / 0.07 : 0;
    zoomflash.style.opacity = String(Math.sin(wrapT * Math.PI) * 0.95 * demo.zoom);
  } else if (parseFloat(zoomflash.style.opacity || '0') > 0) {
    zoomflash.style.opacity = '0';
  }

  orbitAngle += dt * 0.55 * demo.orbit;
  if (demo.orbit > 0.001) {
    const r = camZ - chrome.position.z;
    const ox = chrome.position.x + Math.sin(orbitAngle) * r;
    const oz = chrome.position.z + Math.cos(orbitAngle) * r;
    camera.position.x = THREE.MathUtils.lerp(camX, ox, demo.orbit);
    camera.position.z = THREE.MathUtils.lerp(camZ, oz, demo.orbit);
    camera.position.y = camY + Math.sin(orbitAngle * 0.7) * 0.6 * demo.orbit;
  } else {
    camera.position.set(camX, camY, camZ);
  }
  camTarget.set(chrome.position.x * 0.25, chrome.position.y * 0.3, chrome.position.z * 0.5);
  camera.lookAt(camTarget);

  // ---- environment parallax (different speeds per layer) ----
  const sy = scrollY * 0.0011;
  barsGroup.children.forEach((bar, i) => {
    const f = (0.35 + bar.userData.depth * 0.055) * demo.parallaxMul;
    bar.position.y = bar.userData.baseY + sy * f * 3.2;
    bar.material.opacity = bar.userData.baseOpacity * (1 + demo.barsBoost * 1.6);
  });
  planesGroup.position.y = sy * 1.1 * demo.parallaxMul;
  dust.position.y = sy * 2.1 * demo.parallaxMul;
  dust.rotation.y = t * 0.01;
  dustMat.opacity = 0.32 * (1 + demo.barsBoost * 0.8);

  // ---- cursor on surface ----
  updateMouseOnChrome();

  // ---- postprocessing dynamics ----
  smoothVel += (Math.min(Math.abs(scrollVel) / 60, 1) - smoothVel) * 0.08;
  gradePass.uniforms.uVel.value = smoothVel;
  gradePass.uniforms.uTime.value = t;

  // ---- HUD (every 3rd frame is plenty) ----
  if ((hudFrame++ % 3) === 0) {
    hudFill.style.transform = `scaleY(${morph})`;
    hudMorph.textContent = String(Math.round(morph * 100)).padStart(3, '0');
  }

  composer.render();
}

/* ============================================================
   RESIZE
   ============================================================ */
window.addEventListener('resize', () => {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
});

/* ============================================================
   INTRO + BOOT
   ============================================================ */
function intro() {
  const tl = gsap.timeline();
  tl.to('#preloader', {
    clipPath: 'inset(0 0 100% 0)', duration: 1.05, ease: 'power4.inOut',
    onComplete: () => { pre.el.style.display = 'none'; },
  })
    .fromTo('#heroTitle .line-inner',
      { yPercent: 112, y: 0 },
      { yPercent: 0, y: 0, duration: 1.35, ease: 'power4.out', stagger: 0.12 }, '-=0.45')
    .to(introState, { scale: 1, duration: 1.6, ease: 'expo.out' }, '-=1.1')
    .to('.site-header', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.9')
    .to('.hud', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.7');
}

async function boot() {
  preSet(0.62, 'COMPILING SHADERS');
  try {
    await renderer.compileAsync(scene, camera);
  } catch (e) { /* compile sync on first frame instead */ }
  preSet(0.85, 'CALIBRATING OPTICS');

  buildScrollStory();
  buildMarquee();
  buildSelector();
  buildLens();

  // warm up: render a few frames off-screen so the first visible frame is smooth
  composer.render();

  preSet(1, 'READY');

  // main loop driven by gsap ticker (single rAF for scroll + render)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
    tick(time);
  });

  setTimeout(() => {
    clearInterval(preTicker);
    pre.pct.textContent = '100';
    pre.bar.style.transform = 'scaleX(1)';
    intro();
  }, 450);
}

boot();
