# Preliminary Reference Repository Triage

Document ID: ORG-REPO-TRIAGE-001  
Version: 0.1.0-draft  
Status: PRELIMINARY — README-level review only for the additional repositories below  
Created At: 2026-10-11 (exact clock time not recorded)  
Prepared By: ChatGPT — GPT-6  
Canonical Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo

## 1. Purpose and limits

This is a discovery aid for deciding which existing repositories deserve a deeper, source-attributed documentation pass. It does not authorize migration, copying code/assets, merging projects, changing licenses, or modifying any reference repository. Readme snapshots below are identified by blob SHA where available; a full immutable repository commit pin has not yet been recorded for every candidate. Treat findings as preliminary until that pin and the relevant files are inspected.

## 2. Highest-priority additional repositories

### REPO-CAND-001 — Personal-quest-development-

- Repository: [0SwiftKnightX/Personal-quest-development-](https://github.com/0SwiftKnightX/Personal-quest-development-)
- Default branch: `main`
- README blob observed: `72dff961caa605a0d5b6cf0034f1229eab2988e6`
- Why it stands out: README describes a unified Godot XR project assembled from reference projects, with a single `project.godot`, XR initialization/staging, interaction lab, and preserved exact Git submodules under `references/`. It explicitly names Startup among reference sources.
- Likely value: potentially contains integration decisions and lessons about isolating incompatible project settings/add-on generations.
- Boundary: this is a separate project, not automatically a replacement for Startup or XrGpt. Verify actual commit, submodule pointers, and project state before relying on the README's “active runtime” claims.
- Priority: HIGH for read-only documentation review.

### REPO-CAND-002 — ProjectMythos

- Repository: [0SwiftKnightX/ProjectMythos](https://github.com/0SwiftKnightX/ProjectMythos)
- Default branch: `main`
- README blob observed: `66c2062b9eaca72d4c4914394edc3f6fe0f4c3d4`
- Why it stands out: README describes a mobile-first Godot 4.3 Blueprint/Summon vehicle prototype. Its Blueprint is the persistent source of truth, with ordered construction records; separate Home World, Build Area and Lobby contexts; deterministic snapping; part registration; runtime vehicle reconstruction; and test commands.
- Likely value: strong reference for blueprint persistence, ordered construction, summon/reconstruction, modular vehicles, and test contracts.
- Boundary: it is explicitly a Godot 4.3 prototype; its README says one-third-meter snapping, which conflicts with the separate 1 m/no-thirds requirement recorded elsewhere. Preserve both source requirements and surface the conflict; do not silently merge them.
- Priority: HIGH for requirements extraction, not code reuse.

### REPO-CAND-003 — Mule-run-block-builder

- Repository: [0SwiftKnightX/Mule-run-block-builder](https://github.com/0SwiftKnightX/Mule-run-block-builder)
- Default branch: `main`
- README blob observed: `38d1bbc4e7aa711e9dd3d91fc349087583d6f739`
- Why it stands out: browser-based Three.js construction sandbox with touch, desktop and XR inputs routed through shared operations; deterministic face-adjacency connections; explicit placement failure states; undo/redo; component identity and parent/connection records; and mobile performance measures.
- Likely value: useful construction UX and domain-rule requirements, especially multi-input parity and explainable placement validation.
- Boundary: it is a web/Three.js implementation, not a Godot/XR dependency. Its exact design and implementation status need inspection beyond README.
- Priority: HIGH for independent conceptual requirements extraction.

## 3. Other repositories worth scoped review

### REPO-CAND-004 — TermuxRoadToAndroidAvenue

- Repository: [0SwiftKnightX/TermuxRoadToAndroidAvenue](https://github.com/0SwiftKnightX/TermuxRoadToAndroidAvenue)
- Default branch: `main`
- README blob observed: `d77d3015d3c7eba725719b05f36dad3c2adc9bc7`
- Why it stands out: README describes T-R-A-V-I, an Android Termux + browser/WebGPU project with a Python WebSocket backend, real-time world state, and AI-editable world intent. Conceptually relevant to the user's longer-term AI-native and live-editing direction.
- Explicit exclusion: Termux and a separate local server are outside the user's currently approved tooling constraints. Do not recommend it as the active workflow or migrate its architecture without a new owner decision.
- Priority: MEDIUM for conceptual history only.

### REPO-CAND-005 — Prompt-base

- Repository: [0SwiftKnightX/Prompt-base](https://github.com/0SwiftKnightX/Prompt-base)
- Default branch: `main`
- README blob observed: `b3d8c77937198b5ddb77da10fe63370a04f24660`
- Why it stands out: README identifies it as a collection of used/discovered/invented prompts and AI standards.
- Likely value: reusable prompt standards, agent procedures, governance ideas, and historical decisions may be missing from project-specific logs.
- Priority: MEDIUM-HIGH for documentation discovery. Inspect for duplicates, stale instructions, and project-specific scope before normalizing.

### REPO-CAND-006 — GPT

- Repository: [0SwiftKnightX/GPT](https://github.com/0SwiftKnightX/GPT)
- Default branch: `main`
- README blob observed: `b4335182bc84c5576ae3fbc1a25bd11525f6435e`
- Why it stands out: README describes a conversation-history repository intended to preserve conversations across GPT, Copilot, Gemini, Grok, DeepSeek and available plugins.
- Likely value: potential source for missing requirements, decisions, and user corrections.
- Boundary: do not assume it contains full transcripts or that all records are attributable/complete; inventory actual files and coverage before making completeness claims.
- Priority: HIGH for archive discovery if the repository contains substantive records.

### REPO-CAND-007 — Godot-xrtest and XRTEST2

- Repositories: [Godot-xrtest](https://github.com/0SwiftKnightX/Godot-xrtest) and [XRTEST2](https://github.com/0SwiftKnightX/XRTEST2)
- README finding: Godot-xrtest's README is only a title; XRTEST2's README request returned 404 (there may simply be no README).
- Why they stand out: names suggest small XR test experiments, and repository search reports each is very small.
- Priority: LOW pending a tree/file inventory. Do not infer functionality from names. XRTEST2 file access must be resolved before any content claim.

## 4. Upstream/vendor or lower-priority candidates

### REPO-CAND-008 — godot-xr-tools

- Repository: [0SwiftKnightX/godot-xr-tools](https://github.com/0SwiftKnightX/godot-xr-tools)
- Default branch: `master`
- README blob observed: `8646f9bc15900578d1316b253f4c9dad6a36a25e`
- README identifies it as Godot XR Tools, describes official upstream release branches and compatibility, and credits GodotVR maintainers. This appears to be a mirror/fork/vendor-style repository rather than a product-specific requirements source.
- Likely value: compatibility history and plugin reference only. Prefer the official upstream release documentation for current compatibility checks; record vendored license/notices through the separate rights workstream.
- Priority: LOW for product history; MEDIUM for version/compatibility evidence.

### REPO-CAND-009 — Codex

- Repository: [0SwiftKnightX/Codex](https://github.com/0SwiftKnightX/Codex)
- Default branch: `main`
- README blob observed: `ab93ecad22e474fa0919a16aa365586ec0e0b8f7`
- README content identifies OpenAI Codex CLI documentation and points to upstream OpenAI Codex resources. Treat as a possible upstream fork/mirror, not as evidence that Codex is available or usable in the user's current Android-only workflow.
- Priority: LOW for project requirements; inspect only if the user asks for repository/fork provenance.

### REPO-CAND-010 — 30-seconds-of-code

- Repository: [0SwiftKnightX/30-seconds-of-code](https://github.com/0SwiftKnightX/30-seconds-of-code)
- Default branch: `master`
- README blob observed: `ee297cc3bdced7bb73ee3ee24bc90a4a2b4d1a5a`
- README credits an external maintainer, states snippets are CC-BY-4.0 unless otherwise stated, and restricts use of other material. It is a large general reference corpus, not an obvious project-specific source.
- Priority: LOW for current consolidation. Any later use needs path-specific provenance and compliance review; do not bulk-copy it.

## 5. Recommended read-only discovery order

1. Finish Startup and XrGpt entry-by-entry extraction already in progress.
2. Inspect Personal-quest-development- for source pointers/submodules and its own chronology.
3. Extract ProjectMythos requirements and explicitly reconcile its one-third-meter grid with the separately recorded 1 m/no-thirds rule.
4. Extract Mule-run-block-builder's construction rules, touch/XR parity, validation states, and regression contract.
5. Inventory GPT and Prompt-base for historical source records and standards; compare to the existing 201-entry crosswalk and avoid duplicate extraction.
6. Only then inspect the tiny XR test repositories and lower-priority mirrors.

All new notes remain inside Yeta-nothe-repo. No repository migration, source-code copying, new repository creation, or modification of reference projects is authorized by this triage.
