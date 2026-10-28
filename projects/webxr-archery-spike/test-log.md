# WebXR archery — test/evidence log

**Document ID:** XR-WEB-EVIDENCE-001
**Status:** NOT TESTED (initial evidence template)
**Created:** 2026-10-27, America/New_York (exact time unavailable)
**Recorded by:** ChatGPT GPT-6
**Research source commit:** a2c30174144854fc0886aafea56ef959f1434acf

## Initial evidence statement
Files and code may exist in a feature branch, but at creation time no runtime command, browser session, CI workflow or physical Quest 3S test is asserted as passed. Record independent results below as they are actually obtained.

## Test record template
- Evidence ID:
- Criterion ID:
- Test date/time/timezone:
- Tester or agent:
- Code commit:
- Environment and device:
- Runtime/browser/OS versions:
- Exact command or manual steps:
- Expected behavior:
- Observed behavior:
- Exit status or pass/fail:
- Screenshot, test output, log or artifact URL:
- Known failures/reproduction:
- Evidence level:
- Next action:

## Pending checks
- Generated and committed npm lockfile: SOURCE PRESENT, produced by GitHub Actions run 40613311285; final `npm ci` CI recheck pending.
- `npm test`: PASS in GitHub Actions run [40613176793](https://github.com/0SwiftKnightX/Yeta-nothe-repo/actions/runs/40613176793) at source SHA `e442ef4f6314a76b825e700a658e323726a13c97`; final branch retest pending.
- `npm run build`: PASS in GitHub Actions run [40613176793](https://github.com/0SwiftKnightX/Yeta-nothe-repo/actions/runs/40613176793) at source SHA `e442ef4f6314a76b825e700a658e323726a13c97`; final branch retest pending.
- Desktop browser rendering/click fallback: NOT TESTED.
- Physical Quest 3S immersive XR: NOT TESTED.

Related: [technical contract](tech.md) · [criteria](acceptance-criteria.md).


## Audit addendum — 2026-10-27 (America/New_York)

**This addendum supersedes only the pending-check status statements above.** It does not change the historical content or assert that the physical headset was tested.

**Evidence ID:** XR-WEB-EVID-20261027-CI-001  
**Tested source SHA:** `2785e65d302336afa60abdfb77bfa2aa3a92b768`  
**Execution:** [GitHub Actions run 40620335115](https://github.com/0SwiftKnightX/Yeta-nothe-repo/actions/runs/40620335115), Ubuntu GitHub-hosted runner; Node 22; Google Chrome 155.0.8059.39 headless software rendering; recorded 2026-10-28T02:20Z (2026-10-27 America/New_York).  
**Tester:** GitHub Actions automation, source authored by ChatGPT GPT-6.

- `npm ci`: **PASS**, locked dependencies installed.
- `npm test`: **PASS**, 3 tests/0 failures.
- `npm run build`: **PASS**, with a 533.26 kB (134.85 kB gzip) JavaScript chunk warning.
- npm audit message in installation logs: **0 vulnerabilities reported at this run**. This is time-scoped and not a general security guarantee.
- `node tests/desktop-smoke.mjs`: **PASS**, created canvas, resolved WebXR support message, registered a desktop click as one shot, successfully reset the score, and observed no uncaught page errors.
- Screenshot captured but **not visually reviewed**: run artifact `webxr-desktop-smoke-40620335115`, artifact ID `12786468295`.
- XR session entry/exit, physical controller tracking, in-headset reset, haptics, performance and Quest 3S behavior: **NOT TESTED**.

**Open blockers and audit reasoning:** [Critical audit](CRITICAL_AUDIT_2026-10-27.md). **Decision:** merge hold. This evidence applies only to the tested SHA; any later source changes require a fresh run to verify equivalence.
