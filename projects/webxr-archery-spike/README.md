# WebXR archery spike

**Status:** EXPERIMENTAL / NOT DEVICE TESTED  
**Created:** 2026-10-27 (America/New_York)  
**Authoring AI:** ChatGPT GPT-6  
**Source research:** [AI-generated XR prototyping video analysis](../../research/video-analyses/2026-10-25-ai-generated-webxr-prototypes.md)

This is a deliberately isolated **WebXR browser** archery prototype for Meta Quest 3S evaluation. It is **not the Godot/OpenXR game**. Nothing in this directory modifies historical code repositories.

## Local development
1. Install Node.js 20.19+ or 22.12+ and npm. Keep the Vite development server bound to localhost; publish the built output on a trusted HTTPS host for Quest tests.
2. In this directory, run `npm ci` to install the dependencies exactly as recorded in `package-lock.json`.
3. Run `npm test` to test score/physics, controller-event simulations, projectile integration and haptic failure handling.
4. Run `npm run dev` and visit the printed local address on a desktop browser.
5. Desktop debug mode: click the viewport to shoot along the fixed center reticle (pointer position does not aim) and use Reset score to clear scores and in-flight arrows. This is *not* proof of XR input quality.
6. Run `npm run build` to produce a deployable static `dist/` directory.

## Quest 3S
Serve the built site from an **HTTPS origin** that the Quest browser can reach. A local desktop HTTP address typically does not qualify as a secure WebXR context on another device. Enter VR using the browser's VR button, if the specific Quest browser exposes immersive-vr. Hold the bow controller in the **left hand**; hold the **right trigger** to draw and release to launch. Use the left squeeze to reset score and remove in-flight arrows; the in-world board displays this control. Held-object positions come from grip poses; the launch direction runs from the right grip toward the left grip. Missing grip poses cancel the draw. Track controller availability and actual device behavior in [test-log.md](test-log.md). No Quest run has yet been performed.

## Scope
- One moving floating target, bow/draw interaction, simulated gravity, swept collision, shots/hits/accuracy, optional haptics and status feedback.
- No MR passthrough, production game loop, multiplayer, server, persistence or Godot asset migration.
- Keep improvements under issues [#1](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/1), [#2](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/2), [#3](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/3) and physical Quest test [#4](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/4).

Read [tech](tech.md), [prompt](prompt.md), [acceptance criteria](acceptance-criteria.md), and [test log](test-log.md) before extending the spike. Current evidence and remaining merge blockers are recorded in [test-log.md](test-log.md). Physical Quest behavior remains NOT TESTED; simulated events do not validate tracking or comfort.
