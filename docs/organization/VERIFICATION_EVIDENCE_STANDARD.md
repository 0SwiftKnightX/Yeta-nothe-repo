# Verification and Evidence Standard

Document ID: ORG-VERIFY-STD-001  
Version: 0.1.0-draft  
Status: DRAFT — proposed evidence model; not a claim that source projects have passed these gates  
Created At: 2026-10-11 (exact clock time not recorded)  
Prepared By: ChatGPT — GPT-6  
Canonical Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo  
Sources: Startup `docs/TEST_PLAN.md`, `docs/VALIDATION.md`, `docs/REPOSITORY_AUDIT.md`, AI rules and implementation checklist; XrGpt README, Quest checklist, production architecture and CI history.

## 1. Purpose

Use one evidence vocabulary across projects while preserving project-specific test plans and acceptance criteria. Verification should prove the actual contract and identify its scope, not merely create green output.

## 2. Evidence levels

| Level | Label | What it can establish | What it does not establish |
|---|---|---|---|
| 0 | DOCUMENTED / PLANNED | A requirement, design, command or test plan is written down | Implementation or execution |
| 1 | STATIC INSPECTED | Files, settings, paths, wiring or source contracts were inspected | That the engine imports or behavior runs |
| 2 | STATIC VERIFIED | Defined static assertions/checks passed on a named source revision | Engine runtime or device behavior |
| 3 | IMPORT VERIFIED | The target engine/tool successfully imports/parses the project in a named environment | Feature behavior or device acceptance |
| 4 | AUTOMATED RUNTIME VERIFIED | Executable tests ran and checked defined behavior | Physical hardware-specific behavior not exercised |
| 5 | CI VERIFIED | The named workflow completed successfully for an exact commit/run, including required jobs/steps | A later commit, local environment, physical device or release suitability |
| 6 | BUILD/ARTIFACT VERIFIED | A concrete build/package was produced and its expected structure/provenance checked | Installation, runtime correctness, comfort, security or production readiness |
| 7 | DEVICE SMOKE TESTED | The named device installed/launched and a bounded manual path was exercised | Full acceptance or performance qualification |
| 8 | TARGET ACCEPTANCE VERIFIED | The defined target-device acceptance suite passed and evidence was recorded | Unspecified features outside that acceptance scope |
| 9 | RELEASE SCOPE VERIFIED | All required gates for a declared release scope are met | Claims outside that explicitly defined scope |

These levels are not always strictly linear; record the actual methods used. For example, CI may run an engine import and automated runtime checks, but its evidence remains tied to that commit and environment.

## 3. Required evidence record

For each test/claim, record:
- evidence ID;
- requirement/feature ID;
- exact source commit and relevant file/blob where applicable;
- test name and expected behavior;
- exact command or manual action;
- tool/editor/runtime version;
- operating environment/device;
- run ID/log/artifact link;
- observed result and exit status;
- failures, warnings and known limitations;
- tester/agent identity;
- timestamp and timezone precision;
- status and confidence;
- next action for failure or incomplete coverage.

## 4. Status vocabulary

Use the project's capability labels precisely:
- **IMPLEMENTED:** code/configuration exists; acceptance state must still be stated separately.
- **PARTIAL:** some defined behavior exists and known gaps remain.
- **MISSING:** the inspected scope was checked and the capability is absent.
- **UNKNOWN:** available evidence cannot settle the claim.
- **BROKEN:** observed behavior or a required check fails.
- **DUPLICATED:** multiple competing implementations/definitions exist.
- **PLANNED:** intended but not implemented.
- **NOT TESTED:** the relevant test has not been executed.
- **BLOCKED:** a named dependency/permission/environment issue prevents a specific check.
- **SUPERSEDED:** a traceable decision/version replaces a prior state; preserve the prior record.

Separate implementation status from evidence level. For example: IMPLEMENTED / STATIC INSPECTED is not the same as IMPLEMENTED / TARGET ACCEPTANCE VERIFIED.

## 5. Failure handling

- Preserve the exact first failure and its environment before changing code.
- Identify the failing stage and likely source; distinguish root cause from downstream errors.
- Do not weaken or remove a verifier merely to make the workflow pass.
- Do not add speculative settings or suppress warnings without identifying their owner and relevance.
- If a test harness emits pass markers while a parser/runtime/instantiation error occurred, the overall check must fail; pass text alone is insufficient.
- Report warnings separately from errors, but do not hide either.
- If a required environment/device is unavailable, mark that check NOT TESTED or BLOCKED with the reason and continue with independent checks that are still meaningful.
- A failure in one gate does not automatically stop unrelated low-risk documentation work. Gate only actions that depend on the failed condition or that would be unsafe without it.

## 6. Platform-specific acceptance

For XR projects, distinguish:
- source/static contract checks;
- engine import/parse;
- headless runtime;
- optional desktop XR preview;
- Android build/package verification;
- phone smoke testing;
- physical Quest startup and OpenXR initialization;
- headset/controller tracking and input;
- interaction, locomotion, comfort, frame time, thermal behavior and Android lifecycle;
- release acceptance.

A physical Quest test is required for Quest-specific claims. Phone/desktop/headless evidence cannot substitute for headset tracking, comfort or performance.

For Android Static Core work, define separate cold-start, warm-start, module initialization, memory, APK size, permission and device-capability acceptance metrics before optimization claims.

## 7. Acceptance criteria

A requirement is accepted only against explicit criteria for the declared scope. Each criterion needs:
- a positive path;
- relevant negative/failure paths;
- state/ownership invariants where applicable;
- recovery behavior;
- regression checks;
- target environment evidence appropriate to the claim.

Do not require a universal suite for every change. The suite must be proportional to risk and behavior affected.

## 8. Historical CI and current status

- Historical CI success applies only to its exact commit and run.
- The current HEAD must be checked before saying the latest code is CI-certified.
- A workflow can be green while a test is falsely passing if parse/runtime failures are swallowed; inspect required step logs/markers and fail-fast behavior.
- A successful APK build is not a physical device acceptance test.
- A checklist or a document stating “passed” is a claim whose source date and evidence must be recorded; it is not automatically fresh verification.

## 9. Reporting template

```text
Evidence ID:
Requirement ID:
Source commit:
Environment/device:
Tool/editor/runtime version:
Command/manual action:
Expected result:
Observed result:
Exit status / run ID:
Artifacts/logs:
Status:
Limitations:
Recorded by:
Timestamp:
Next action:
```

## 10. Adoption status

This standard is a proposed organization-wide model. Project-specific acceptance suites must be mapped to it; do not erase their unique criteria or claim these levels have already been passed.
