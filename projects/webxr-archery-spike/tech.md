# WebXR archery — technology contract

**Document ID:** XR-WEB-TECH-001
**Version:** 0.1.0-draft
**Status:** PLANNED / initial scaffold, not device verified
**Created:** 2026-10-27 (America/New_York; exact time unavailable)
**Prepared by:** ChatGPT GPT-6
**Source:** [2026-10-25 video research](../../research/video-analyses/2026-10-25-ai-generated-webxr-prototypes.md)
**Issue:** [#1](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/1)

## Boundaries
- Browser-delivered **WebXR immersive-vr** experiment, not an Android APK or a substitute for Godot 4.7.2 / OpenXR.
- Physical target device: Meta Quest 3S; browser version and support **NOT TESTED**.
- Engine/library: Three.js 0.180.0; local development/build: Vite 7.1.7; pure logic tests: Node built-in test runner.
- Exact dependency versions are declared in `package.json`. `npm install` generates a lockfile; commit the generated lockfile before calling this a reproducible dependency build.
- Runtime requires a WebXR-capable browser and a secure context (HTTPS or localhost, as supported). A private network HTTP URL may not satisfy the XR secure-context requirement.
- Desktop fallback is a debugging approximation, not controller or headset verification.
- One visual moving target, two tracked controllers (bow left/draw right), projectile physics, scoreboard. No multiplayer, persistence, music, MR passthrough, hand tracking, paid APIs or existing project imports.
- No third-party art/audio assets. The Three.js dependency has its own license; preserve attribution and comply with license requirements.

## Verification state
- GitHub source presence alone = DOCUMENTED / PLANNED.
- `npm test`, `npm run build`, browser checks, and Quest 3S tests are **NOT TESTED** until actual execution evidence is recorded in [test-log.md](test-log.md).
- Never assign browser/device PASS from an AI code review.

Related: [prompt](prompt.md) · [acceptance criteria](acceptance-criteria.md) · [README](README.md).
