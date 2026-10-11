# Gap and Conflict Register

Document ID: ORG-GAPS-001  
Version: 0.1.0  
Status: ACTIVE — initial register; items require targeted resolution  
Created: 2026-10-10T22:58:00-04:00 (America/New_York)  
Prepared by: ChatGPT (GPT-6)  
Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo

## Operating rule
This register replaces repeated broad foundation reviews with targeted follow-through. Each item has a concrete next action and an explicit evidence boundary. Once resolved, preserve the record and append the resolution; do not erase history.

## Confirmed decisions and conflicts
| ID | Priority | Finding | Evidence / impact | Next action / status |
|---|---|---|---|---|
| GAP-001 | P0 | Earlier docs treated umbrella role as unresolved. User now explicitly designated Yeta-nothe-repo as central organizational repository. | README and decision register contain stale uncertainty. | RESOLVED IN PRINCIPLE. Update decision register and continuity docs. Keep project code in source repositories unless separately approved. |
| GAP-002 | P0 | “Everything in one repository” could mean one source of truth, not necessarily one giant code monorepo. | User wants central continuity while preserving prior repositories. Blind merge risks history loss, license conflicts, private-data exposure, and build collisions. | Adopt central documentation/provenance/indexing here; keep code in source repos until a specific migration is approved. |
| GAP-003 | P0 | Historical conversations and project data are not demonstrably complete in GitHub. | GPT README describes an intended archive; current log is explicitly a session summary. | Inventory exports and logs; mark missing intervals; never claim complete coverage without evidence. |
| GAP-004 | P0 | Desired permission tiers and paid authorization may conflict with calling all covered assets open source. | Open-source grants freedoms incompatible with a custom approval gate for those same rights. | Build an asset-class permission matrix covering code, non-code content, trademarks, proprietary materials, and third-party assets. Legal review before adoption. |
| GAP-005 | P0 | Historical license wording has not been recovered. | User explicitly directed on 2026-10-10 that there will be no historical license recovery and that we should draft a license. | RESOLVED AS A WORKFLOW DECISION: stop treating recovery as a prerequisite. New draft is docs/organization/DRAFT_LICENSE_FRAMEWORK.md, version 0.1.0; legal/ownership decisions remain OPEN. |
| GAP-006 | P1 | User names “Bastian Oleg” as lead XR-template developer; Startup README references BastiaanOlij/godot-xr-flynn-demo. | Similar spelling does not establish identity or ownership; targeted search did not confirm match. | Confirm exact profile/repository before provenance or ownership claims. |
| GAP-007 | P1 | Startup, XrGpt, Personal-quest-development-, godot-xr-tools, ProjectMythos, and Mule-run-block-builder may contain related work but are distinct implementations. | Selective README reads show different project purposes and stacks. | Build per-repository feature maps and compare named modules only; no bulk merge. |
| GAP-008 | P1 | XR repositories declare different Godot versions and potentially different XR Tools generations. | Startup targets Godot 4.7.2; ProjectMythos describes Godot 4.3+; other README compatibility tables differ. | Pin actual editor/plugin versions and test on target runtime before porting. |
| GAP-009 | P1 | Startup local verifier status is not the same as physical Quest acceptance. | README says lobby/menu/playable scene and device acceptance remain open; repository audit reports a failed CI run and no current APK evidence in that audit. | Keep source/unit/runtime/device evidence separate. First game milestone: visible lit lobby/menu and interaction flow on Quest 3S. |
| GAP-010 | P1 | OTECM artifacts are documented as present, but full schema validation and actual CI result were not verified in existing docs. | OTECM is marked PARTIAL. | Retrieve or run CI and validator; record exact run URL/commit. |
| GAP-011 | P1 | Root MIT license may not describe intended licensing for every asset or future organizational material. | Custom permission framework is unresolved. | Inventory assets and third-party notices; avoid implying new rules override MIT or upstream licenses. |
| GAP-012 | P1 | Consolidating data from GPT/plugins may expose private or access-controlled information in a public repo. | Umbrella repository is public; connected tools have different access scopes. | Publish only appropriate material; keep secrets and sensitive data out; use private storage only after approval. |
| GAP-013 | P1 | One GitHub repository is not by itself a disaster-recovery plan. | Central index does not automatically contain all original content or history. | Define export schedule, hashes, restore test, and coverage for Git history, issues, releases, LFS, attachments, and external services. |
| GAP-014 | P2 | “Organization” currently describes an initiative, not a proven legal entity. | Existing charter says legal identity, fundraising, partnership, and tax-exempt status are not established. | Preserve accurate public wording until legal formation/eligibility is evidenced. |
| GAP-015 | P1 | Connected listing returned 27 repositories but cannot prove all historical/external work has been found. | Listing is account/access scoped; some appear to be upstream forks/mirrors. | Inventory these and search other accessible sources; record access limits rather than claiming global completeness. |
| GAP-016 | P0 | Repeated foundation inspection is consuming time without sufficient implementation progress. | User explicitly asked that foundation inspection become a finished baseline task. | ADOPTED: no broad re-audit by default. Use targeted checks and change-triggered review. |

## Highest-value next actions
1. Maintain the continuity map and repository inventory as the landing page.
2. Update the decision register to record the umbrella decision and supersede stale OPEN-001 wording.
3. Resolve the license-history question through targeted repository/log/library searches.
4. Inspect XR repositories by priority and build feature-level maps, starting with Startup and XrGpt.
5. Inventory GPT and Prompt-base for historical records and reusable standards.
6. Add actual CI/test evidence to OTECM.
7. Establish a backup/restore plan before claiming all work is protected from loss.

## Resolution format
For each item, append date/time, status before and after, exact evidence/source, commit or URL, checks performed, remaining limitations, and whether user approval was required. A gap is not resolved merely because documentation mentions it.

## Addendum — 2026-10-10

- **GAP-005 workflow clarified:** historical license recovery is no longer a prerequisite. Draft a new framework and label it as new, not recovered. See [Draft License Framework](DRAFT_LICENSE_FRAMEWORK.md).
- **Document metadata gap:** created [Document Control Standard](DOCUMENT_CONTROL_STANDARD.md) to require stable IDs, honest timestamps, AI/session identity, source evidence dates, predecessor/next-document links, supersession links, and verification status.
- **Decision collection gap:** created [Decision Questionnaire](DECISION_QUESTIONNAIRE.md) with Yes/No/Unsure, choose-one, select-all, and extended-response questions. Existing defaults are marked only where already directed by the user; all other answers remain pending.
- **XR recency rule proposed:** capture exact repository, commit/release, dates, license, engine/plugin versions, tests, and target-device evidence. Prefer newest relevant code only when provenance, license, and compatibility gates pass. This rule is proposed for user confirmation.
- **No blind merge:** “consolidation” means central documentation and provenance first. Code migration requires project-specific compatibility, license, and history checks.


## Addendum — Questionnaire answers and conflict flags — 2026-10-11 (America/New_York)

User answers are recorded as organizational direction, not legal approval or technical verification. Earlier entries are preserved.

### New or clarified gaps

| ID | Priority | Finding / conflict | Why it matters | Next action / status |
|---|---|---|---|---|
| GAP-017 | P0 | **Open-source freedoms vs. permission tiers:** the proposed portfolio includes both genuine open-source code and approval-gated/source-available assets. | A custom approval gate or paid permission requirement cannot be applied to rights already granted by the chosen open-source license. Calling one approval-gated package “open source” would be misleading. | OPEN — classify each asset and repository; choose a recognized license for open-source code and separate terms for controlled assets. Legal review required. |
| GAP-018 | P0 | **Paid rights and dual licensing depend on actual authority:** the user wants paid additional rights where controlled and dual licensing where appropriate. | The organization must own or have authority to license the relevant rights; third-party dependencies and contributor rights may limit options. Dual licensing may require contributor permissions/agreements and compatible upstream terms. | OPEN — asset/rights inventory, ownership/provenance evidence, dependency-license review, contributor policy, and legal review before offering terms. |
| GAP-019 | P1 | **Hybrid repository architecture needs per-project boundaries:** central docs and verified references are desired, while code migrations require project-specific approval. | A reference, submodule, copied file, fork, and full history migration have different maintenance, license, provenance, and backup implications. | OPEN — document source-of-truth path, immutable source reference, migration approver, preservation/rollback method, and acceptance checks for each proposed migration. No bulk migration authorized. |
| GAP-020 | P1 | **XR source recency must be component-specific:** user selected compare-and-decide per component and preserve older, better-tested alternatives. | The newest commit can be less tested, incompatible with Godot/XR dependency versions, or unsuitable for Quest 3S. A blanket recency rule hides these trade-offs. | OPEN — build a candidate matrix per component with source path, immutable SHA/release, relevant date, license, engine/dependency versions, automated test/build results, device evidence, and reason selected/rejected. |
| GAP-021 | P1 | **Evidence layers can disagree:** automated tests/builds and Quest 3S runtime verification are separate evidence requirements. | A passing source test or desktop build does not establish standalone-device runtime acceptance; lack of device access must not be represented as failure or success. | OPEN — track source/static checks, automated tests, Android export/build, install/launch, and physical Quest 3S behavior as separate statuses; mark unavailable evidence UNKNOWN / NOT RUN. |
| GAP-022 | P1 | **“Unsure—decide after asset inventory” remains an explicit constraint within the selected licensing portfolio.** | The selection of several licensing models does not decide which model applies to any specific asset, nor establish ownership. | OPEN — inventory code, dependencies, art, music, narrative, data, documentation, trademarks, and contributions; assign rights only with evidence. |

### Questionnaire resolution record

- Q1 remains as previously documented: Yeta-nothe-repo is the organizational documentation/provenance/continuity hub; existing repositories remain intact unless a specific migration is approved.
- The XR evidence selection is recorded as: exact source repo/path; immutable commit/release; source date compared with current date; license/reuse rights; Godot/XR versions; automated test/build evidence; Quest 3S runtime evidence; retain older better-tested alternatives.
- Recency: compare and decide per component, not “newest always.”
- Architecture: central documentation and verified references plus project-specific migration approvals.
- Licensing: a portfolio of distinct models is intended, but the assignment of rights is pending asset inventory. Genuine open-source code must remain governed by the freedoms of its selected standard license.

### Immediate execution order

1. Create the asset inventory/rights matrix and mark unknown ownership explicitly.
2. Build the per-component XR source evidence matrix without changing Startup or other source repositories.
3. Resolve license, ownership, compatibility, and testing conflicts before migration or public permission claims.
4. Keep all unresolved items open; do not infer legal adoption from questionnaire answers.


## Addendum — targeted XR/license inspection — 2026-10-11

| ID | Priority | Finding / conflict | Evidence / impact | Next action / status |
|---|---|---|---|---|
| GAP-023 | P0 | **Startup has no root LICENSE file according to its own reuse policy.** | Startup's ai/REFERENCE_AND_REUSE_RULES.md says not to infer a project license and not to copy material unless the applicable license or permission allows it. Its note about upstream MIT licenses is dated 2026-09-27 and does not replace current revision-specific checks. | OPEN — decide Startup's own licensing posture and inspect existing code/assets provenance. Do not assume the repository's public visibility grants permission to third parties. |
| GAP-024 | P1 | **Godot feature target differs between Startup and XrGpt.** | At the inspected commits, Startup project.godot declares feature 4.7 while XrGpt declares feature 4.6 / GL Compatibility. Both plugin manifests declare Godot XR Tools 4.5.1. Matching plugin version does not remove the engine-version mismatch. | OPEN — treat every port as a component-level compatibility task; run Godot 4.7.2 import/source validation and Quest 3S tests after any approved port. |
| GAP-025 | P1 | **XrGpt procedural-pickup bridge may solve a different problem than Startup's current pickable scene.** | XrGpt's procedural_pickable.gd preserves catalog-backed item identity through pickup and inventory return; Startup's inspected interaction scene attaches XRToolsPickable directly to a test rigid body. | OPEN — first decide whether Startup requires procedural item/catalog/inventory return. If not, retain the simpler implementation; do not port complexity without an acceptance requirement. |
| GAP-026 | P1 | **Parent repository license does not automatically clear every bundled file.** | XrGpt root LICENSE is Apache-2.0, but vendored XR Tools, generated creative assets, and any other third-party content need their own scope/notice checks. | OPEN — inspect NOTICE/file headers and relevant source history before copying a specific file or asset. |

### Targeted comparison status

The XR Component Evidence Matrix now contains a source-level comparison of Startup's direct XRToolsPickable use and XrGpt's catalog-backed procedural pickup/inventory-return wrapper. This is a design comparison only. No code was copied, no source repository was modified, and no component is marked approved for reuse.
