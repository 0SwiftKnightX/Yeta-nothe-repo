# Critical Audit — WebXR Archery Spike (pre-merge gate)

**Document ID:** XR-WEB-AUDIT-20261027-001  
**Revision:** 1  
**Status:** REVIEW COMPLETE / MERGE HOLD — blockers remain  
**Prepared by:** ChatGPT (GPT-6)  
**Prepared date:** 2026-10-27 (America/New_York; exact authoring clock time not recorded)  
**Project:** Yeta-nothe-repo / projects/webxr-archery-spike  
**Review target:** [Draft PR #5](https://github.com/0SwiftKnightX/Yeta-nothe-repo/pull/5), branch `feat/webxr-archery-spike-20261027`  
**Source revision tested:** `2785e65d302336afa60abdfb77bfa2aa3a92b768`  
**Base revision at audit entry:** `a2c30174144854fc0886aafea56ef959f1434acf`  
**Research provenance:** `research/video-analyses/2026-10-25-ai-generated-webxr-prototypes.md`  
**AI session ID:** not available; linked issue/PR/action references serve as traceable work references  
**Supersedes:** none  
**Confidence:** HIGH for source/CI observations; UNKNOWN for physical Quest behavior

## Decision

**HOLD MERGE.** The tested branch builds, passes three pure logic tests, and passes a desktop Chrome smoke test. It has **not** passed a Quest 3S immersive-VR acceptance run. Several code-level conditions must be addressed or explicitly dispositioned before recommending merge. The old Godot/OpenXR repositories have not been modified.

## Evidence actually observed

| Check | Evidence | Result | Boundary |
| --- | --- | --- | --- |
| GitHub scope | Draft [PR #5](https://github.com/0SwiftKnightX/Yeta-nothe-repo/pull/5) targeting central repository | PASS / scope observed | Branch only; no merge |
| Dependency install | [CI run 40620335115](https://github.com/0SwiftKnightX/Yeta-nothe-repo/actions/runs/40620335115), Node 22; `npm ci` | PASS | Does not prove runtime |
| Dependency audit output | Same CI logs: `found 0 vulnerabilities` | PASS, as reported by npm at this run | No claim about future advisories |
| Pure score/physics tests | Same CI: Node `--test`, 3 passed / 0 failed | PASS | Only 3 cases; no headset behavior |
| Static production build | Same CI, Vite 7.3.7 | PASS with warning | JS chunk 533.26 kB before gzip (134.85 kB gzip), exceeds 500 kB warning |
| Desktop browser smoke | Same CI, Google Chrome 155.0.8059.39, headless software renderer; `tests/desktop-smoke.mjs` | PASS | Canvas created, XR support state updated, click fired once, reset worked, no uncaught page errors |
| Browser screenshot | CI artifact `webxr-desktop-smoke-40620335115` (artifact 12786468295) | CAPTURED | Image was not visually reviewed in this audit |
| Quest 3S device session | No headset execution evidence | **NOT TESTED** | Essential release/merge gate |
| XR controllers/haptics in headset | No runtime XR input test evidence | **NOT TESTED** | Headless Chrome cannot establish tracked poses/haptics |

### Critical blockers / risks

**B1 — P0 acceptance blocker: no physical Meta Quest 3S run.** The required headset-side launch, secure origin, stereo view, trigger input, two-controller tracking, hit accuracy, repeated shots, comfort, performance and exit path remain NOT TESTED. A desktop/CI PASS must never be promoted to headset acceptance. **Resolution:** perform and log the precise WEB-05 through WEB-10 device tests with device and browser versions, screenshot/recording or test notes, code revision, outcomes and failures.

**B2 — P1 controller pose semantics: target-ray groups used as handheld bow geometry/pose.** In `src/main.js` the two `renderer.xr.getController(index)` target-ray groups are used to mount the bow visual and calculate the draw/launch origin. The Three.js API distinguishes target-ray from `getControllerGrip` grip pose for held objects. This may make hand/aim alignment incorrect even if input events work. **Resolution:** separate grip-space pose/visuals from target-ray input where appropriate, document the intended arrow direction, and confirm behavior on Quest. Reference: https://threejs.org/docs/pages/WebXRManager.html

**B3 — P1 synchronous haptic exception escape.** In `src/main.js`, `Promise.resolve(actuator.pulse(...)).catch(...)` evaluates `pulse()` before creating the Promise. The same applies to `playEffect()`. If a browser actuator throws synchronously, the exception can escape the animation callback despite the apparent fallback. **Resolution:** wrap actuator invocation in `try/catch` and catch any returned Promise rejection; test absent actuator, synchronous throw, and rejected Promise. Physical vibration still requires headset testing.

**B4 — P1 VR reset inaccessible.** `#reset` is a DOM button outside the immersive headset scene. The in-world display contains numbers and status but no interactive reset path. Consequently the reset function verified by the desktop smoke test is not accessible from within VR. **Resolution:** add a controller-accessible in-world reset action and verify score state after reset on device, or revise the acceptance contract if only reset outside XR is intended (owner approval required for scope reduction).

**B5 — P1 XR input/negative-path test gap.** The three existing unit tests cover the pure physics/accuracy helpers, but none verify controller handedness/reconnection, draw cancellation, low-pull behavior, target-hit event deduplication through the actual `updateArrows` loop, XR session cleanup, or haptic fallback. The browser smoke runs only desktop input. **Resolution:** extract core interaction/scoring state into independently testable modules, add controller event simulations and explicit negative-path tests, then test the real hardware separately.

**B6 — P2 instruction mismatch.** The desktop instructions promise shooting toward a reticle, but the source does not render a visible reticle; clicks use the camera's fixed forward vector regardless of pointer position. **Resolution:** display the reticle and state explicitly that click fires along the view direction, or implement mouse-based aim and test it.

**B7 — P2 moving-target collision approximation.** Swept arrow/segment collision tests only against the target's latest center, not its motion over the same frame. A moving target may create an edge-case false hit/miss. **Resolution:** test fast target movement/large frame delta and consider relative swept collision or smaller fixed simulation steps.

**B8 — P2 size/performance evidence gap.** The 533.26 kB JS warning does not establish a runtime problem; neither frame timing nor Quest render load was measured. **Resolution:** define and record mobile XR frame-time/comfort criteria on headset before optimizing, and do not silence build warnings without analysis.

**B9 — P2 stale evidence documentation.** The original `test-log.md` said the final `npm ci` run was pending even after it passed. This audit records the now-confirmed evidence; status records must link to the exact tested SHA and avoid implying tested behavior survives later implementation edits unchanged.

**B10 — P2 GitHub Actions maintenance.** CI logs warn that Node 20 runtime-based actions pinned to `@v4` are deprecated under the host's action runner policy; the workflow uses tags rather than immutable action SHAs. **Resolution:** review current official GitHub-supported major versions and pin trusted action SHAs in a separate targeted maintenance change. The warning is not evidence that the app build failed.

## Acceptance gate matrix

- `WEB-01`: SOURCE REVIEWED; project files/lockfile exist, full desktop setup outside CI not independently exercised.
- `WEB-02`: **PASS** at `2785e65d...`: three Node pure-logic tests.
- `WEB-03`: **PARTIAL PASS** at `2785e65d...`: desktop Chrome smoke checks scene canvas, click, status and reset; appearance/target motion not visually judged.
- `WEB-04`: **PARTIAL**: Chrome no-XR support settles correctly; successful session enter/exit NOT TESTED.
- `WEB-05`, `WEB-06`, `WEB-09`, `WEB-10`: **NOT TESTED** (Quest/device).
- `WEB-07`, `WEB-08`: **PARTIAL**: pure physics and arithmetic, desktop click/reset checked; actual XR integration/accuracy not verified.

## Next critical checks

1. Correct B3, B4 and B6 with explicit regression tests; separate the handheld grip from the pointing ray as appropriate (B2).
2. Add coverage for B5 and B7 before treating the interaction as functionally accepted.
3. Rerun CI **at the final revision** after every source fix, preserving test artifacts.
4. Test on a physical Quest 3S using a secure origin; record stereo/controller/comfort evidence, then make the go/rework/reject decision in issue #4.
5. Keep PR #5 a draft until the above blockers are resolved or explicitly deferred without weakening the acceptance criteria.

## Scope and nonclaims

This audit does not certify a production application, a reproducible full Quest deployment, a Godot/OpenXR integration, universal browser support, zero security risk, or actual headset runtime performance. All recommendations are limited to the isolated WebXR branch in the central repo. The historical repositories and their licensing remain independent.
