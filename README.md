# LIQUID INTELLIGENCE — 3D Effect Laboratory

A premium single-page presentation that demonstrates and compares ten advanced 3D web
effects using one liquid-chrome object in one continuous scroll experience.

**Stack:** Three.js (WebGL, PBR, custom vertex-shader displacement) · GSAP + ScrollTrigger · Lenis smooth scroll · esbuild.

## Run

```bash
npm install
npm run serve      # bundles and serves at http://localhost:8000 (esbuild)
```

or build once and open `index.html` from any static server:

```bash
npm run build      # writes dist/main.js
npx serve .
```

`npm run dev` runs esbuild in watch + serve mode for development.

## What's inside

- **Act 0 — Preloader.** Real staged progress: renderer init, environment PMREM build,
  geometry, `renderer.compileAsync` shader compilation, first frame.
- **Act 1 — Hero.** Monumental metallic typography, a cursor-following optical lens
  (true DOM magnification + SVG displacement refraction), and a floating liquid-chrome
  sphere — a real WebGL mesh (`metalness 1`, low roughness, procedural laboratory
  environment reflections) breathing via simplex-noise vertex displacement with
  finite-difference normal reconstruction.
- **Acts 2–4 — Scroll story.** The sphere travels with the scroll and morphs
  sphere → unstable liquid hybrid → precise chrome cube. The morph is a shader blend
  between spherical projection and box coordinates of a single 84³-segment box geometry,
  scrubbed by ScrollTrigger — fully reversible by scrolling back.
- **Act 5 — Marquee.** Two endless rows of effect names. Hovering a word spawns a
  localized ripple on the chrome surface originating from the word's screen direction,
  with distinct signatures per item (wave, inward portal suction, expanding pulse,
  directional shift, micro-ripples).
- **Act 6 — Effect selector.** A glass dropdown (SELECT EFFECT) plus in-page chips.
  Each of the ten effects exaggerates one behaviour on the same chrome object and
  updates a floating glass explanation panel (what's cool / strongest benefit / best for).
- **Act 7 — Closing.**

## Postprocessing

UnrealBloom (restrained), ACES filmic tone mapping, SMAA, and a custom final grade pass:
light chromatic aberration, cinematic vignette, fine grain, and scroll-velocity-driven
radial motion blur.

## Performance notes

Single `requestAnimationFrame` loop (GSAP ticker drives Lenis + render), capped pixel
ratio, GPU-side deformation only (no per-frame geometry uploads), reduced segment count
and dust density on touch devices, DOM writes batched to the ticker.
