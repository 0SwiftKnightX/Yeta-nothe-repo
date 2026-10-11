# Android Static Core — Requirements and Research Intent

Document ID: ORG-ANDROID-CORE-001  
Version: 0.1.0-draft  
Status: RESEARCH EXTRACTION — source intent preserved; candidate review and architecture remain incomplete  
Created At: 2026-10-11 (exact clock time not recorded)  
Prepared By: ChatGPT — GPT-6  
Canonical Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo

## 1. Source

Primary source: [XrGpt Android Static Core Research Doc.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/Android%20Static%20Core%20Research%20Doc.md), pinned to commit `3a11c719224ed8619fd48f13071ff4423edab15f`, blob `331e8e092207d502abb589ae661aecd3177af077`.

The source calls itself research/architecture planning. It is conceptually broader than the XrGpt game and explicitly says it should remain documentation-only in that repository unless the owner separately authorizes implementation. This new document preserves its intent in the organizational repository; it does not authorize implementation or copying source code.

## 2. North-star intent

Build a reusable, reproducible Android foundation (“Static Core” / “Company Android Engine”) that can seed future applications, utilities, internal tools and products. The research phase is a laboratory for studying complete open-source Android projects, comparing architecture/UI/behavior, identifying reusable infrastructure and deciding the future module boundaries before mass forking or merging.

The research APK/hub is an experimental laboratory, not necessarily the final production application. A separate original Static Core seed should remain recoverable if an experimental working repository becomes unusable. GitHub remains the source of truth; the seed is an additional bootstrap/recovery mechanism, not a substitute for source control.

## 3. Proposed architecture

Conceptual modules:
- Android host / Static Core;
- Research Hub;
- common UI and navigation;
- storage and settings;
- networking;
- logging/diagnostics;
- permissions;
- terminal/developer interface;
- Git/project workspace;
- build/validation tooling;
- feature modules and candidate application experiments.

The desired shape is **Static Core → clearly defined feature API → independently bounded feature modules**, not “App A + App B + App C = one tangled APK.”

Prefer source modules and explicit API/implementation boundaries over combining finished APK binaries. Multi-module Gradle projects are the proposed eventual organized architecture; Gradle composite builds can support research or temporary co-development while projects remain independent. Not every candidate should be integrated merely because it can be included technically.

## 4. Research Hub behavior and performance

The hub should open quickly, let the user select a candidate/module, initialize only what that selection requires, and return to the hub without keeping every subsystem active.

Avoid eagerly initializing unused:
- media engines;
- feature-specific databases;
- unused network clients;
- heavyweight parsers;
- large caches;
- native libraries;
- terminal bootstrap/package environments;
- optional UI frameworks;
- background workers not needed immediately.

Measure distinct performance dimensions:
- cold start to first useful UI;
- warm start/return;
- selected-module initialization;
- file/database I/O;
- network connection/request latency and offline behavior;
- first-frame/rendering latency;
- memory pressure from inactive modules;
- native-library initialization/cost;
- base and total APK size.

First rule: measure before optimizing. Candidate tools mentioned historically include Android startup profiling, Macrobenchmark, Baseline Profiles and custom timing instrumentation; verify current official guidance when the implementation decision is made.

## 5. Static Core seed and build stages

The desired progression is:
1. Development/debug core with diagnostics and developer controls.
2. Validation against explicit acceptance criteria.
3. Stable, independently preserved Static Core seed.
4. Product-specific applications derived from the seed.

Do not call a debug APK production-ready until actual behavior has been validated. The seed should retain enough project identity, Gradle structure, source, configuration, dependency declarations, scripts, validation, documentation and initialization/generation procedures to bootstrap a new project.

The historical phrase “modify the APK from inside” is better interpreted as a self-hosted development/build environment. An installed Android app cannot simply replace its own signed installed package while running. A safer conceptual model is: Static Core hosts terminal/editor/project workspace/Git/build tools, generates a new build artifact, then installs/tests that artifact through supported Android workflows.

## 6. Candidate-pool coverage

Research candidates for subsystem coverage, not merely popularity. The source proposes an expandable pool of roughly 50–100 candidates if useful and the following categories:

1. Minimal Android seed
2. Launcher/home
3. Terminal/developer environment
4. File manager
5. Text editor
6. Settings/configuration
7. Networking
8. Browser/web content
9. Media/audio
10. Video
11. Gallery/image management
12. Database/storage
13. Notes
14. Git/source control
15. Package/app store
16. Download manager
17. Backup/export/import
18. Authentication
19. Encryption/security
20. Notifications
21. Background services
22. Device/system utilities
23. Widgets
24. Local AI/inference
25. Developer tooling
26. Logging/diagnostics
27. Crash/error reporting
28. Permission management
29. Bluetooth/device communication
30. Camera
31. Sensors
32. Location
33. Offline-first applications
34. Cloud synchronization
35. Content readers
36. Document/PDF handling
37. Calendar/task systems
38. Messaging
39. Form/data-entry applications
40. Custom UI/component-heavy applications

These categories are coverage goals, not a promise that every candidate will be integrated. Android Zero is named as a minimal-seed/bootstrap reference; an Android app-store project is named as a larger application-architecture reference. Termux is a terminal/developer-environment architecture reference. Each actual repository/release must be identified and verified before it becomes a candidate record.

## 7. Candidate assessment matrix

Do not rank candidates with one “best app” score. Record separate dimensions:
- repository/source identity and immutable revision;
- APK/release availability and provenance;
- license of repository, assets, fonts, icons, images, audio, bundled code and dependencies;
- source completeness and reproducible build;
- architecture and modularization quality;
- UI reuse potential;
- storage, networking and system-integration value;
- terminal/developer value;
- startup and module-init performance;
- memory and APK size;
- dependency/transitive-dependency complexity;
- native-code complexity;
- Android min/target SDK and ABI coverage;
- documentation quality and maintenance;
- security history where relevant;
- extraction/integration effort;
- legal ambiguity and conflicts;
- whether an independent implementation is preferable.

A candidate's root license alone may not clear all assets/dependencies. Preserve exact provenance and path-specific notice obligations.

## 8. Historical license-tier proposal — not adopted policy

The source proposed a Tier A preference for CC0, public domain, Unlicense and other individually reviewed licenses, and Tier B/reference-only treatment for GPL/AGPL, unclear licenses or incompatible assets unless separately cleared. It specifically classified Termux as Tier B/reference under that source's then-current strategy, while still valuing it as an architectural study source.

**This is recorded only as historical research intent. It is not the organization's current licensing policy and must not be merged into the active license draft without the license workstream's independent review.** Research/reference use, conceptual learning, independent implementation, code copying, asset copying, distribution and license permission are different decisions. License tiers must be reconciled with the organization's actual license decisions and legal review.

## 9. Tooling and dependency research

The source's proposed research-stage tools:
- GitHub — source of truth, repositories, branches, files, commits, PRs, Actions and artifacts.
- Engram — durable conversation/project memory.
- Exa — deep repository/web research and candidate discovery.
- Firecrawl — documentation/web extraction.
- Stele — project decisions, architecture and task coordination.
- Cortex — semantic retrieval of prior project knowledge.
- Dependency Upgrade Plan — dependency/release change analysis when candidates and architecture are established.

Optional/conditional tools in the source:
- Figma — UI/design extraction.
- Lumen UI — design-system/component reference.
- Canva — visual/presentation documentation.
- Base44 — separate web/product work.
- Supabase — only if a backend/database service is needed.
- Vercel — only if a hosted service/control plane is needed.

These are historical recommendations, not claims of current connection, authorization, availability or necessity. Verify actual tool access and current product state before depending on them.

## 10. Dependency policy

Before a dependency enters the Static Core, record:
- name and version;
- license and third-party notices;
- transitive dependencies;
- Android minimum/target SDK;
- ABI/native libraries;
- startup behavior and memory cost;
- maintenance/security state where relevant;
- whether it is necessary;
- whether a simpler equivalent exists;
- build and validation evidence.

Do not accept a dependency solely because a candidate application uses it.

## 11. Proposed research workflow

1. Discover candidate.
2. Verify repository identity and exact revision.
3. Verify release/APK provenance where applicable.
4. Review license and notices.
5. Audit dependencies and bundled assets.
6. Categorize subsystem coverage.
7. Inspect architecture and boundaries.
8. Measure/research startup, runtime, memory and package costs.
9. Identify reusable infrastructure and independent implementation opportunities.
10. Identify conflicts and duplication.
11. Design module boundaries.
12. Build a Research Hub prototype only after the candidate pool and requirements are sufficiently understood.
13. Integrate only selected, rights-reviewed, compatible components.
14. Validate the integrated behavior.
15. Freeze a known-good Static Core seed.
16. Preserve an independent recovery copy.

The source explicitly says not to reverse this order by beginning with a giant merge.

## 12. Reuse-value priorities

High-value candidates may provide infrastructure rather than visible features:
- navigation and lifecycle;
- settings/configuration;
- persistent storage/database abstractions;
- file operations;
- networking/caching;
- permission handling;
- notifications/background jobs;
- logging/error handling;
- update mechanisms;
- import/export and serialization;
- local search;
- command execution;
- plugin systems;
- modular UI/theming;
- offline operation;
- build tooling.

The research hub should allow side-by-side experiments before architecture is frozen, so interaction speed, maintainability, dependency cost and actual integration effort can be compared.

## 13. Open gates

- Expand the candidate pool and record exact repository/release identities.
- Individually verify source, APK and dependency licenses.
- Build a subsystem coverage matrix.
- Compare architecture and dependency complexity.
- Measure startup/module initialization and memory/package cost.
- Design the master module boundaries only after the research is mature.
- Prototype the research hub as a separate authorized implementation step.
- Integrate only selected candidates with evidence and clear rights.
- Create and preserve a validated Static Core seed.
- Determine how this Android project relates to the separate AI-native computing vision without merging them prematurely.

## 14. Boundary

This document is a new extraction of a historical research proposal. It does not claim the Android Static Core exists, authorize bulk forking or source extraction, establish legal rights, change Startup or XrGpt, or modify the separate license workstream.
