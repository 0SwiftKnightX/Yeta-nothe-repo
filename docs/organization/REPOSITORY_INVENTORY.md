# Repository Inventory

Document ID: ORG-REPO-INVENTORY-001  
Version: 0.1.0  
Status: ACTIVE — initial inventory from connected GitHub listing and selective README inspection  
Created: 2026-10-10T22:58:00-04:00 (America/New_York)  
Prepared by: ChatGPT (GPT-6)

## How to read this inventory
- Observed means repository metadata or named files were returned by GitHub during this pass.
- README reviewed means only the README was fetched; it does not mean code, history, license, branches, workflows, dependencies, or tests were fully audited.
- Repository size is GitHub metadata, not a measure of original or useful work.
- The connected listing returned 27 repositories under 0SwiftKnightX, and the second page returned no additional entries. This is not proof that all historical or external repositories are included.
- Preserve repositories in place. This inventory does not authorize bulk cloning, copying, or migration.

## Priority A — continuity-critical repositories
| Repository | Branch / visibility | Initial evidence and classification | Next action |
|---|---|---|---|
| [Yeta-nothe-repo](https://github.com/0SwiftKnightX/Yeta-nothe-repo) | main / public | README, organization docs, OTECM artifacts, game blueprint, AI log. ACTIVE umbrella. | Maintain continuity documents and logs. |
| [Startup](https://github.com/0SwiftKnightX/Startup) | main / public | README, repository audit, next implementation plan. Active Quest-first XR game. | Verify current HEAD, workflows, tests, license, and implementation checklist. README says lobby/menu/playable scene and physical Quest acceptance remain open. |
| [XrGpt](https://github.com/0SwiftKnightX/XrGpt) | main / public | README contains extensive dated GPT work-log entries. Earlier XR foundation. | Extract feature/module index and classify reusable, superseded, and unique systems. |
| [Personal-quest-development-](https://github.com/0SwiftKnightX/Personal-quest-development-) | main / public | README describes unified XR composition. .gitmodules fetch returned empty. | Verify actual project tree and whether references are copied, vendored, or otherwise linked. |
| [godot-xr-tools](https://github.com/0SwiftKnightX/godot-xr-tools) | master / public | README describes Godot XR Tools and compatibility/release information. Likely upstream fork/reference. | Confirm parent, license, local changes, branch divergence, and compatible release. |
| [ProjectMythos](https://github.com/0SwiftKnightX/ProjectMythos) | main / public | README describes Godot blueprint/summon vehicle workflow and JSON blueprint persistence. | Preserve separate scope; later inspect contract tests and build instructions. |
| [Mule-run-block-builder](https://github.com/0SwiftKnightX/Mule-run-block-builder) | main / public | README describes Three.js browser construction sandbox with shared touch/desktop/XR operations. | Inspect BUILD_001.md, license, and tests before promoting features. |
| [GPT](https://github.com/0SwiftKnightX/GPT) | main / public | README intends to store conversation history from multiple AI services. | Audit contents and export coverage; do not assume all conversations are preserved. |
| [Prompt-base](https://github.com/0SwiftKnightX/Prompt-base) | main / public | README describes prompts and AI standards collection. | Inventory prompts, duplicates, provenance, and licenses. |

## Priority B — experiments and tools
| Repository | Branch / visibility | Initial classification | Next action |
|---|---|---|---|
| [Godot-xrtest](https://github.com/0SwiftKnightX/Godot-xrtest) | main / public | Tiny XR test repository; metadata size 1. | Inspect files/history and classify. |
| [XRTEST2](https://github.com/0SwiftKnightX/XRTEST2) | main / public | Tiny XR test repository; metadata size 1; previously identified as Godot 4.7.2 test. | Inspect files/history and classify. |
| [Testai1](https://github.com/0SwiftKnightX/Testai1) | main / public | Small experiment; purpose unknown. | Inspect README/tree/history. |
| [git-godot-hub](https://github.com/0SwiftKnightX/git-godot-hub) | main / public | Tiny Godot/Git experiment. | Inspect and classify. |
| [Forge](https://github.com/0SwiftKnightX/Forge) | main / private | Python sample project; README describes tests and CI. | Keep private unless deliberately published; assess relevance. |
| [attest-build-provenancefork](https://github.com/0SwiftKnightX/attest-build-provenancefork) | main / public | Build-provenance-related fork by name. | Verify parent, license, workflow security, and relevance to OTECM. |
| [TermuxRoadToAndroidAvenue](https://github.com/0SwiftKnightX/TermuxRoadToAndroidAvenue) | main / public | Android/Termux workflow project by name. | Preserve as historical research; do not assume it is an approved current workflow. |
| [Ffhjhdxv](https://github.com/0SwiftKnightX/Ffhjhdxv) | main / public | Small repository; purpose unknown. | Inspect README/tree and assign purpose or UNKNOWN. |
| [cuddly-octo-rotary-phone](https://github.com/0SwiftKnightX/cuddly-octo-rotary-phone) | main / private | Private repository, metadata size 21684. | Review confidentiality before referencing or copying any content publicly. |
| [Anime-project](https://github.com/0SwiftKnightX/Anime-project) | main / public | Metadata size 0. | Check history/issues and intended project brief. |
| [My-Story](https://github.com/0SwiftKnightX/My-Story) | main / public | Metadata size 0. | Check history and prior context before classifying. |

## Priority C — likely upstream forks or large source mirrors
| Repository | Branch / visibility | Initial classification | Rule |
|---|---|---|---|
| [Gem](https://github.com/0SwiftKnightX/Gem) | main / public; large | Parent not verified. | Confirm parent, license, and local changes; do not claim upstream code as original. |
| [Rust](https://github.com/0SwiftKnightX/Rust) | master / public; very large | Likely Rust source fork/mirror by name. | Confirm parent, license, divergence. |
| [Tauri](https://github.com/0SwiftKnightX/Tauri) | dev / public; large | Likely Tauri source fork/mirror. | Confirm parent, license, divergence. |
| [React](https://github.com/0SwiftKnightX/React) | main / public; very large | Likely React source fork/mirror. | Confirm parent, license, divergence. |
| [30-seconds-of-code](https://github.com/0SwiftKnightX/30-seconds-of-code) | master / public; large | Likely upstream code reference/fork. | Confirm parent, license, and local additions. |
| [Codex](https://github.com/0SwiftKnightX/Codex) | main / public; large | Likely source fork/mirror; exact relationship unverified. | Confirm parent and purpose; do not conflate with a product/service name. |
| [android-sdk-sources-for-api-level-36](https://github.com/0SwiftKnightX/android-sdk-sources-for-api-level-36) | master / public | Android SDK source mirror by name. | Confirm upstream provenance and license. |
| [Codex-spam](https://github.com/0SwiftKnightX/Codex-spam) | main / public; small | Purpose unknown. | Inspect before linking or recommending; do not assume official relationship. |

## Inventory gaps
1. Listing exposes repository names, default branches, visibility, and metadata, not full semantic content or history.
2. Parent/fork relationships and license obligations are not yet verified for candidate upstream repositories.
3. README statements can be stale; implementation status requires commit-specific code/tests evidence.
4. Private repository contents require confidentiality review before copying into the public umbrella.
5. GitHub alone cannot preserve unexported ChatGPT conversations, other AI-provider histories, connected app data, or inaccessible plugin content.
6. The exact historical license draft dated 2026-10-08 remains unrecovered in inspected paths and targeted search.
7. This list may not cover other owners, organizations, accounts, or inaccessible installations.

## Update protocol
Append newly discovered repositories rather than silently removing historical entries. Record date, source, default branch, visibility, relationship (owned/fork/mirror/template/reference), license, inspected paths, commit/blob IDs where available, confidence, next action, and access limitations. Update the continuity map when a repository's role or canonical destination changes.

## Organization-level artifacts added 2026-10-10

- [Document Control Standard](DOCUMENT_CONTROL_STANDARD.md) — defines stable document IDs, AI identity, honest timestamps, evidence chronology, and navigation.
- [Draft License Framework](DRAFT_LICENSE_FRAMEWORK.md) — new draft created because the user directed that historical recovery is not a prerequisite. Not approved for legal use.
- [Decision Questionnaire](DECISION_QUESTIONNAIRE.md) — structured yes/no, single-choice, select-all, and extended-response questions; answers remain pending unless explicitly pre-marked as established user direction.

 
## Addendum — Questionnaire follow-through artifacts — 2026-10-11

- [Asset and Rights Inventory](ASSET_RIGHTS_INVENTORY.md) — initial rights/provenance rows for Yeta-nothe-repo, Startup, XrGpt, generated creature assets, and upstream XR references. This is partial and does not clear assets for copying.
- [XR Component Evidence Matrix](XR_COMPONENT_EVIDENCE_MATRIX.md) — initial date comparison and evidence gaps for Startup, XrGpt, and upstream XR references. It does not approve any component for reuse.
- User direction: compare XR candidates per component; retain older, better-tested alternatives; centralize docs/references; require project-specific approval for code migrations.
