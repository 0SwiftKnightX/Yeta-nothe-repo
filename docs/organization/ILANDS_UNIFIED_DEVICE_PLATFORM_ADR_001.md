# iLands / Unified Device Hub — Architecture Decision ADR-001

Document ID: ILANDS-ADR-001  
Version: 1.0.0  
Decision date: 2026-10-30 (America/New_York)  
Status: APPROVED — architecture direction only; implementation not implied  
Decision authority: User, explicit approval in ChatGPT conversation  
Prepared by: GPT-6  
Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo  
Scope: Unified device-management platform. Not the separate XR game or world-building projects.

## Mission
Make a user's **authorized** Android phones, Windows PCs, and Meta Quest devices behave as one cooperative computing environment: consistent device identity, secure pairing, discovery, file exchange, screen viewing, permission-scoped remote control, and eventually multiple independent movable windows in XR. Each device remains its own OS and processor.

## Decision — language and component boundaries
| Layer | Preferred technology | Responsibility |
|---|---|---|
| Android client | Kotlin + Android SDK (retain XML or existing UI where applicable; Jetpack Compose for new screens as appropriate) | Android permissions, device lifecycle, foreground services, local UI/edge switcher, pairing screens, screen capture only with OS-mediated consent |
| Shared portable core | Rust | Device identity abstractions, protocol contracts, authenticated sessions, transport interfaces, serialization, capability negotiation, audit events; expose narrow FFI or network contracts |
| Web/dashboard UI | TypeScript | Web dashboards, controls and optional desktop web views; not a mandate to replace native Android or immersive XR interfaces |
| Windows client | Rust core + platform-specific Windows integration; UI technology selected after first MVP | Device agent, pairing, file transfer, later desktop capture/input under OS permissions |
| Meta Quest client | Android/OpenXR adapter (reuse vetted Godot/OpenXR groundwork only after rights and runtime checks) | Spatial device dashboard, hand/controller actions, movable screens, XR performance gates; bridge to shared protocol |
| C# / C++ | Optional | Adopt only where required by an existing SDK, runtime, engine, or proven performance/capability gap |

This is a **modular shared-core architecture**, not a promise that all clients use one language or one UI framework. No new repository or code migration is authorized by this decision.

## Nonnegotiable architecture rules
1. Only user-owned/authorized or explicitly consenting devices may connect. Default deny. Visible connect/disconnect/revoke controls.
2. A stable per-installation identity anchored in protected device key storage where available. Never treat changing LAN IPs as device identity.
3. Pair over local networks first with an authenticated, human-confirmed exchange; never invent custom cryptographic primitives. Use reviewed, maintained cryptographic libraries/protocols and platform-protected credentials.
4. Mutual authentication, encryption in transit, replay protection, scoped capabilities, session expiry, and revocation are required before sensitive remote actions.
5. Discovery is not authorization. A visible device is not automatically trusted.
6. Screen-sharing and control must follow each platform's permission/consent policy; Android MediaProjection authorization is per required capture session. Do not use Accessibility APIs as an undisclosed or permissions-bypassing control channel.
7. Do not disable host security, silently install software, expose LAN services to the public Internet, or grant AI agents unrestricted machine control.
8. Data model, wire protocol, commands, error codes, and tests should be versioned independently from UI.
9. Preserve existing repo history and third-party license notices. Never treat an upstream fork or bundled dependency as original proprietary work.
10. No completion claim without dated build/test evidence on the actual relevant platform.

## System components (target inventory)
- Device Registry: public identity, label, platform, key fingerprint, online status, last-seen, allowed capabilities.
- Discovery: local-network advertising and browsing; optional manual endpoint entry.
- Pairing: user-confirmed trust handshake, secure key storage, revoke and re-pair.
- Session Manager: authentication, role/capability grants, liveness/reconnect, disconnect and audit log.
- Transport: secure message channel; file chunking with integrity checks; later optimized media streams.
- Capability Registry: per-device declared, available, requested, granted, denied and expired permissions.
- File Service: explicit selection, send/receive, resume/retry, hash validation, user-approved destination.
- Screen Stream Service: capture permission, hardware encode where supported, viewer, latency/fps telemetry, stop control.
- Remote Input Service: separate authorization; only platform-supported scoped actions, never silent takeover.
- Client UI: Android edge device switcher, Windows device list, XR multi-panel environment.
- Diagnostics: structured errors, pairing and connectivity tests, logs without secrets.
- Optional future: relay/NAT traversal, cloud synchronization, voice/AI commands, shared input to multiple devices.

## Delivery gates (strict, sequential)
### Gate 0 — Ground-truth existing Android source
**Known artifact:** a ChatGPT Library file `UnifiedDeviceHubStarter.zip` (Kotlin Android source with edge overlay) and its README were located. This does **not** mean it was already installed, compiled, tested, or present on the user's sister's PC.

- Extract into a local working folder, inspect project files, check provenance, and check Android Studio SDK/JDK/Gradle requirements.
- The ZIP's README reports that Gradle wrapper JAR/scripts are missing. Generate an official compatible wrapper or use another documented supported build path; do not fabricate the JAR.
- Sync and run a clean debug build, install on a user-authorized Android phone, test overlay permission, edge switcher, gesture, stop action and process lifecycle.
- Capture exact APK path, build output, device model/Android version, observed passes/failures and commit SHA if tracked.
- **PASS:** user can install the APK, invoke and dismiss the device panel, and stop the overlay without leaving it running. **NOT TESTED** until evidenced.

### Gate 1 — Stable identity and discovery
- Add a versioned device descriptor, Android-side cryptographic identity using available keystore facilities, and local discovery.
- Windows test-agent scaffold uses compatible protocol and its platform key storage.
- **PASS:** Android and Windows discover each other after LAN reconnect without confusing IP for identity; no automatic trust.

### Gate 2 — Secure opt-in pairing
- Human-confirmed pairing with authenticated key exchange, local protected key storage, explicit revocation, deny-by-default capability grants.
- **PASS:** unauthorized peer cannot initiate privileged tasks; authorized peers reconnect; revoke closes active and future sessions.

### Gate 3 — File transfer proof
- A user selects one file, consents to send, receiver accepts destination; verify SHA-256 end-to-end, retries and disconnect handling.
- **PASS:** bidirectional file round-trip Android↔Windows, byte-identical and logged with no secrets.

### Gate 4 — Screen viewing
- Android capture only after system consent; scoped start/stop, local indicator, encrypted stream. Windows capture uses Windows-supported APIs.
- **PASS:** a user can intentionally view one authorized remote screen; revoked access stops viewing; measure latency, fps and battery cost.

### Gate 5 — Permission-scoped remote interaction
- Implement only approved and OS-supported operations, with visible emergency stop and separate input permission.
- **PASS:** user can demonstrate an allowed remote action, revoke access immediately, and verify no action is possible afterwards.

### Gate 6 — Quest spatial client
- Existing Godot/OpenXR sources are references, not automatically integrated.
- **PASS:** physical Quest 3/3S test with multiple spatial displays, controller/hand input, comfortable frame times, clean session exit, and device-to-headset authorization preserved.

### Gate 7 — Commercial readiness
- Reproducible release pipeline, signed builds, crash/telemetry opt-in, privacy policy, security review, support/rollback plan, product pricing experiments, and actual customer validation.

## Work allocation and verification contract
- **Android Studio:** official Android SDK, Gradle sync/build, emulator and physical APK testing.
- **VS Code:** shared Rust/TypeScript code, version control, terminal scripts and test execution.
- **GitHub Copilot:** one small implementation issue at a time, under an explicit acceptance test; present exact diff and run logs.
- **GPT:** design contracts, targeted code review, audit, integration verification, handoff and decision maintenance.
- **GitHub:** authoritative implementation history, PR checks and evidence. Organizational documentation belongs to Yeta-nothe-repo until a separate routing decision.

Each task must contain: objective; precise touched files; dependencies; prohibited scope changes; test commands; expected observable output; pass/fail/blocked evidence. Reuse working code instead of rewriting it. No spec is a substitute for runtime tests.

## Immediate next action
**Run Gate 0 only.** In Android Studio open the extracted `UnifiedDeviceHubStarter` folder *if the user elects to reuse that source*. If not using that artifact, establish the actual local Android Studio project before coding. Ask Copilot to inspect first, repair only reproducible build blockers, produce a debug APK and an exact test log. Do not start Rust libraries, cloud infrastructure, Windows control, or XR features until an Android baseline is running.

## Evidence boundaries
- User approved the **architecture recommendation** on 2026-10-30; no claim of approving deployment, third-party access, code migration, or spending.
- This record is a design decision; no code has been built, compiled, signed, or installed as part of this decision.
- Device/OS permissions, SDK behavior and third-party licensing remain subject to verified implementation checks.
