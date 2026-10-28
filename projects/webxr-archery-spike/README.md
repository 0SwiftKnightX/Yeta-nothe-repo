# WebXR archery spike

**Status:** EXPERIMENTAL / NOT DEVICE TESTED  
**Created:** 2026-10-27 (America/New_York)  
**Authoring AI:** ChatGPT GPT-6  
**Source research:** [AI-generated XR prototyping video analysis](../../research/video-analyses/2026-10-25-ai-generated-webxr-prototypes.md)

This is a deliberately isolated **WebXR browser** archery prototype for Meta Quest 3S evaluation. It is **not the Godot/OpenXR game**. Nothing in this directory modifies historical code repositories.

## Local development
1. Install a compatible Node.js environment and npm.
2. In this directory, run `npm install`. This should create a package lockfile; commit it to pin transitive versions.
3. Run `npm test` to test pure score/physics/collision logic.
4. Run `npm run dev` and visit the printed local address on a desktop browser.
5. Desktop debug mode: click the viewport to shoot toward the reticle and use Reset score to clear the display. This is *not* proof of XR input quality.
6. Run `npm run build` to produce a deployable static `dist/` directory.

## Quest 3S
Serve the built site from an **HTTPS origin** that the Quest browser can reach. A local desktop HTTP address typically does not qualify as a secure WebXR context on another device. Enter VR using the browser's VR button, if the specific Quest browser exposes immersive-vr. Hold the bow controller in the **left hand**; hold the **right trigger** to draw and release to launch. Track controller availability and actual device behavior in [test-log.md](test-log.md). No Quest run has yet been performed.

## Scope
- One moving floating target, bow/draw interaction, simulated gravity, swept collision, shots/hits/accuracy, optional haptics and status feedback.
- No MR passthrough, production game loop, multiplayer, server, persistence or Godot asset migration.
- Keep improvements under issues [#1](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/1), [#2](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/2), [#3](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/3) and physical Quest test [#4](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/4).

Read [tech](tech.md), [prompt](prompt.md), [acceptance criteria](acceptance-criteria.md), and [test log](test-log.md) before extending the spike. Known limitation: until installs/browser/device tests actually run, implementation and Quest behavior are unverified.
