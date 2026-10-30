# WebXR archery — technology contract

**Document ID:** XR-WEB-TECH-001
**Version:** 0.1.0-draft
**Status:** IMPLEMENTED / desktop evidence only, not device verified
**Created:** 2026-10-27 (America/New_York; exact time unavailable)
**Prepared by:** ChatGPT GPT-6
**Source:** [2026-10-25 video research](../../research/video-analyses/2026-10-25-ai-generated-webxr-prototypes.md)
**Issue:** [#1](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/1)

## Boundaries
- Browser-delivered **WebXR immersive-vr** experiment, not an Android APK or a substitute for Godot 4.7.2 / OpenXR.
- Physical target device: Meta Quest 3S; browser version and support **NOT TESTED**.
- Engine/library: Three.js 0.186.1; local development/build: Vite 7.3.7; pure logic tests: Node built-in test runner.
- Exact dependency versions are declared in `package.json`. `package-lock.json` is committed (npm-generated from CI on 2026-10-27, run 40613311285); use `npm ci` to honor its exact transitive dependency graph.
- Local tooling: Node.js 20.19+ or 22.12+ per Vite 7. Do not expose the development server to untrusted networks.
- Runtime requires a WebXR-capable browser and a secure context (HTTPS or localhost, as supported). A private network HTTP URL may not satisfy the XR secure-context requirement.
- Desktop fallback is a debugging approximation, not controller or headset verification.
- One visual moving target, two tracked controllers (bow left/draw right), projectile physics, scoreboard. No multiplayer, persistence, music, MR passthrough, hand tracking, paid APIs or existing project imports.
- No third-party art/audio assets. The Three.js dependency has its own license; preserve attribution and comply with license requirements.

## Verification state
- GitHub source presence alone = DOCUMENTED / PLANNED.
- Installation, automated tests and desktop build/browser results are revision-specific: see [test-log.md](test-log.md). Physical Quest 3S tests remain **NOT TESTED**.
- Relative swept collision uses linear motion between sampled target centers and semi-implicit projectile steps, capped at 50 ms; continuous curved-path precision is not claimed.
- Product dependency installation is locked via `npm ci`; the temporary CI Playwright driver and runner/browser images are not fully locked. This is not a claim of bit-for-bit builds or reproducible Quest deployment.
- Never assign browser/device PASS from an AI code review.

Related: [prompt](prompt.md) · [acceptance criteria](acceptance-criteria.md) · [README](README.md).
