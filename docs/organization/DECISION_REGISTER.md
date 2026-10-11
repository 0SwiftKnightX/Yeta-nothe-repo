# Decision Register — Open Technology Initiative

Document ID: ORG-DECISIONS-001  
Version: 0.1.0-draft  
Status: ACTIVE — initial register; decisions remain open unless stated otherwise  
Created: 2026-10-10 (America/New_York local date; exact creation time not captured)  
Prepared by: ChatGPT (GPT-6)  
Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo

## Confirmed operating decisions

| ID | Decision | Status | Evidence / rationale |
|---|---|---|---|
| DEC-001 | Use this GitHub repository as the documentation source of truth for current work unless a migration is explicitly approved. | CONFIRMED FOR CURRENT WORK | User explicitly designated https://github.com/0SwiftKnightX/Yeta-nothe-repo. |
| DEC-002 | Keep organization documents in `docs/organization/` and AI session logs in `logs/` to avoid conflating them with the existing game blueprint. | ADOPTED FOR DOCUMENTATION | Repository inspection found `docs/PROJECT_BLUEPRINT.md` for “The Living Continuum.” |
| DEC-003 | Do not claim implementation, testing, partnership, fundraising, or legal formation without evidence. | ADOPTED AS OPERATING RULE | Evidence-first requirement. |
| DEC-004 | Use relevant tools and plugins according to task fit; do not invoke every tool without a purpose. | ADOPTED AS OPERATING RULE | Tool use must materially improve the outcome and be recorded accurately. |
| DEC-005 | Start the Open Technology Evidence & Compatibility Manifest (OTECM) as the first tangible open-source artifact. | PARTIAL | Schema, synthetic sample, CLI validator, tests, specification, and CI workflow committed; automated validation result not yet verified. |
| DEC-006 | Yeta-nothe-repo is the central organizational umbrella and documentation source of truth for continuity across prior and future work. | CONFIRMED 2026-10-10 | User explicitly confirmed this repository consolidates organizational documentation, project relationships, histories, and work records. Existing repositories remain intact; code migration requires a separate decision. |
| DEC-007 | Stop repeating broad foundation inspections unless a specific gap, change, or verification need justifies one. | CONFIRMED 2026-10-10 | User directed that foundation inspection become a finished baseline task so work can progress from planning to concrete outputs. |
| DEC-008 | Use selectable multi-option decisions where several independent project/repository/workstream choices can be accepted together. | CONFIRMED AS WORKFLOW PREFERENCE 2026-10-10 | User explicitly values selecting multiple options, including selecting every option. Future decision prompts should support multi-select and “select all” rather than forcing a single choice. |

## Open decisions

| ID | Question | Current status | Required evidence / next action |
|---|---|---|---|
| OPEN-001 | Is this repository intended as a long-term umbrella for both the game and organization, or only as the current documentation home? | SUPERSEDED / RESOLVED | User confirmed on 2026-10-10 that this is the central organizational umbrella. See DEC-006 and CONTINUITY_MAP.md. Project code remains in its original repository unless a separate migration is approved. |
| OPEN-002 | What legal structure should govern assets, funds, and decision-making? | UNKNOWN — PRIMARY-SOURCE BASELINE REVIEWED | Compare company, nonprofit, cooperative/member governance, fiscal sponsorship, and hybrid options with current primary sources and professional review; no structure selected. See research memo. |
| OPEN-003 | What does “the organization owns/governs itself” mean operationally? | NEEDS DEFINITION | Specify board/member rights, founder/operator powers, succession, asset control, and financial controls. |
| OPEN-004 | What exact historical text exists for “ORGANIZATION MASTER USE, ATTRIBUTION, AND RIGHTS LICENSE,” v0.1 dated 2026-10-08? | NOT RECOVERED IN THIS INSPECTION | Search repository/history and accessible prior records; do not reconstruct it as though original. |
| OPEN-005 | Which licenses should apply to code, documentation, media, datasets, and contributions? | UNKNOWN — OPEN-SOURCE RULES REVIEWED | Asset inventory, intended freedoms, compatibility analysis, contributor workflow, and legal review still required. See research memo. |
| OPEN-006 | Should the working descriptive label “Open Technology Initiative” become a public name? | NOT APPROVED | Name/domain/trademark and namespace checks. |
| OPEN-007 | What exact recipient, budget, and use-of-funds split would a fundraiser state? | UNKNOWN | Itemized budget, recipient details, platform terms, tax/legal review. |
| OPEN-008 | Is a GoFundMe campaign eligible and suitable for the proposed mix of personal stability and project expenses? | PRELIMINARY PLATFORM RESEARCH COMPLETE; LAUNCH NOT APPROVED | Official terms/help pages reviewed in `docs/organization/RESEARCH_MEMO_FUNDRAISING_LICENSING_GOVERNANCE.md`; confirm recipient, budget, payout eligibility, fees, tax treatment, and current terms immediately before launch. |
| OPEN-009 | What should be the first shippable open-source artifact? | SELECTED FOR MVP: OTECM; release readiness pending | Run schema validation and tests, review dependencies and license metadata, and record CI evidence. |
| OPEN-010 | Which future tools, agents, or repositories should receive delegated work? | NOT DECIDED | Delegate only when a concrete capability or access boundary requires it; document migration first. |

## Verified repository observations (2026-10-10)

- Repository: `0SwiftKnightX/Yeta-nothe-repo`
- Default branch: `main`
- Visibility: public
- Connected GitHub tool reported permissions: admin=true, maintain=true, push=true.
- `README.md` contents: `# Yeta-nothe-repo`
- Root `LICENSE`: MIT License, copyright 2026 0SwiftKnightX.
- `docs/PROJECT_BLUEPRINT.md`: “Project Blueprint: The Living Continuum,” v0.1.0-draft, PLANNED.
- No file was found at these exact paths during the initial inspection: `LICENSE.md`, `project-blueprint.md`, `PROJECT_BLUEPRINT.md`, `docs/FOUNDATION_BLUEPRINT.md`, or `CONVERSATION_LOG.md`. `logs/AI_CONVERSATION_LOG.md` was absent during that initial check and was subsequently created and read back successfully.
- GitHub code search returned no matches for the exact searches “license organization master use attribution rights” or “conversation log AI.” This does not prove no historical version exists elsewhere or under different wording.

## Change log

- 2026-10-10 — v0.1.0-draft — Initial decision register created after repository metadata and selected files were inspected.


## Addendum — 2026-10-10T22:58:00-04:00

- Confirmed the central organizational umbrella role of this repository; prior uncertainty in OPEN-001 is superseded, not deleted.
- Established CONTINUITY_MAP.md, REPOSITORY_INVENTORY.md, and GAP_AND_CONFLICT_REGISTER.md as the continuity and execution layer.
- Set process rule: broad foundation inspection is complete as a baseline; further checks must be targeted and action-producing.
- Recorded the user's multi-select preference: when multiple independent options are presented, support selecting several or all options.
- Selectively inspected README files for Startup, XrGpt, ProjectMythos, godot-xr-tools, Personal-quest-development-, Mule-run-block-builder, Forge, Prompt-base, and GPT. This is not a full source, history, license, or test audit.
- Targeted GitHub searches did not recover the historical license draft or establish that “Bastian Oleg” and “BastiaanOlij” are the same identity. These remain open.


## Addendum — 2026-10-10

| ID | Decision | Status | Notes |
|---|---|---|---|
| DEC-009 | Do not require recovery of a historical license draft; create a new draft framework. | CONFIRMED 2026-10-10 | New draft is docs/organization/DRAFT_LICENSE_FRAMEWORK.md. This does not approve it for legal use or resolve ownership/jurisdiction. |
| DEC-010 | Establish a document control standard for identity, chronology, AI identity, evidence, and navigation. | ACTIVE STANDARD 2026-10-10 | See docs/organization/DOCUMENT_CONTROL_STANDARD.md. Apply to new high-value documents and normalize older documents progressively without overwriting originals. |
| DEC-011 | Use a structured questionnaire with yes/no, single-choice, select-all, and extended-response formats. | CONFIRMED WORKFLOW PREFERENCE 2026-10-10 | See docs/organization/DECISION_QUESTIONNAIRE.md. Leave unresolved choices open; do not treat a blank as approval. |
| DEC-012 | For XR reuse, compare exact source dates/commits and prioritize the newest relevant real XR code that passes provenance, license, and compatibility checks. | PROPOSED — USER CONFIRMATION PENDING | Do not choose by date alone; retain evidence of older better-tested candidates. |
| DEC-013 | Keep existing repositories intact; no blind bulk merge. | CONFIRMED 2026-10-10 | The umbrella centralizes continuity and selected verified artifacts. Code migration is a separate project-specific decision. |


## Addendum — Questionnaire answers recorded 2026-10-11 (America/New_York)

Source: user-submitted answers to `docs/organization/DECISION_QUESTIONNAIRE.md` in the ChatGPT session. These are organizational design decisions and direction, **not legal approval**, adoption of a license, or proof of technical compatibility.

| ID | Decision / direction | Status | Evidence / constraints |
|---|---|---|---|
| DEC-014 | Evaluate and support a hybrid asset-rights model: genuine open-source code under standard licenses; separately controlled/source-available code with permission tiers; separately licensed creative/game assets; separate trademark/branding permissions; free community/evaluation permissions; paid additional rights only where controlled by the organization; and dual licensing where appropriate. Preserve “unsure—decide after asset inventory” as a requirement to assign rights by asset class after inventory. | USER-DIRECTED DESIGN; LEGAL REVIEW REQUIRED | Questionnaire Q3 response received 2026-10-11. Do not impose approval gates on freedoms granted by a genuine open-source license. Do not assume ownership or authority over third-party materials. The draft license framework remains unapproved. |
| DEC-015 | Select XR reuse sources per component by comparing recency, provenance, license, engine/dependency compatibility, automated test/build evidence, and Quest 3S runtime evidence; retain older, better-tested alternatives for comparison. | USER-CONFIRMED APPROACH; TECHNICAL EVIDENCE PENDING | Questionnaire Q2 and Q3 responses received 2026-10-11. No universal “newest always wins” rule. A component-level evidence matrix must state unknowns and unresolved trade-offs. |
| DEC-016 | Use centralized organizational documentation and verified source references, with project-specific approval before code migration. | USER-CONFIRMED ARCHITECTURE DIRECTION | Questionnaire Q4 response received 2026-10-11. This is a hybrid documentation/provenance architecture, not authorization for bulk code copying or migration. |
| DEC-017 | Assign the functions of the hybrid licensing and repository model to the appropriate asset classes, repositories, and project components rather than forcing one rule to govern everything. | USER CLARIFICATION; IMPLEMENTATION PENDING | Questionnaire Q5 extended response received 2026-10-11. Build an asset-permission matrix and component-level source decision records; preserve conflicting constraints visibly. |

### Questionnaire answer ledger — 2026-10-11

- **Q1:** No new answer supplied; retain the previously documented Yes default (central organizational documentation/provenance/continuity home; source repositories remain intact absent approved migration).
- **Q2:** Selected all eight stated XR evidence requirements: exact repository/path; commit SHA or immutable release; source date compared with current date; verified license/reuse rights; Godot/XR dependency versions; automated test/build evidence; Quest 3S runtime verification; older better-tested alternatives retained for comparison.
- **Q3:** Selected all: genuine open-source code under standard licenses; permission-tiered source-available code; separately licensed game content/creative assets; separate trademark/branding permissions; paid authorization for additional rights controlled by the organization; free community/evaluation permissions; dual licensing where appropriate; and “unsure—decide after the asset inventory.” Treat these as a portfolio of models to classify by asset, not as one license applied indiscriminately.
- **Q3 recency choice:** Compare and decide per component.
- **Q4 architecture choice:** Central documentation plus verified references and project-specific migration approvals.
- **Q5 extended response:** The recency and architecture choices require hybrid answers; assign the relevant functions appropriately across components and asset classes.
- Q2/Q3 numbering here follows the submitted response packet; the questionnaire's section labels are Q5/Q6 for XR evidence and recency, and Q10 for repository architecture. The response's meaning was preserved without renumbering earlier questions.

### Required follow-through

1. Create an asset inventory and rights matrix before choosing final licenses or permission tiers.
2. Keep the draft license explicitly DRAFT / NOT APPROVED until ownership, jurisdiction, compatibility, and legal review are resolved.
3. Build a per-component XR evidence matrix; no source is accepted solely because it is newer.
4. Keep code in existing repositories unless a project-specific migration is approved.


## Addendum — targeted XR candidate evaluation — 2026-10-11

| ID | Decision / direction | Status | Evidence / constraints |
|---|---|---|---|
| DEC-018 | Start XR reuse evaluation with a component-level comparison of Startup's pickable interaction and XrGpt's procedural pickup/inventory-identity bridge; keep the latter as a reference candidate only until requirements, rights, compatibility, and tests are resolved. | TARGETED WORKSTREAM SELECTED; NO REUSE APPROVED | Exact files inspected at immutable commits and recorded in XR_COMPONENT_EVIDENCE_MATRIX.md. Startup targets Godot feature 4.7 while XrGpt targets 4.6; both inspected XR Tools plugin manifests declare 4.5.1. No source repository was changed. |


| DEC-019 | 2026-10-11 | GPT-6 | Before any inventory-system port, establish Startup's actual product requirement and acceptance criteria; use XrGpt as a component-level architecture reference only. | Startup main at `6f56ad308fcf8d6f15d40a03beddfefdf8201f2a` has direct XR pick/drop for a quest-specific SoulBlock but no general project-owned catalog/instance/inventory controller in the complete returned tree. XrGpt has a multi-file identity-preserving inventory round trip, but declares Godot feature 4.6 while Startup declares 4.7. | PROPOSED — NOT IMPLEMENTATION AUTHORIZATION | Define whether the desired scope is simple pick/drop, persistent item identity, inventory UI/slots, ownership, stack limits, equipment, world placement/re-pickup, or save/load. Then specify an engine-version-neutral contract and inspect rights/compatibility before implementation. No code reuse approved. |

| DEC-020 | 2026-10-11 | GPT-6 | Use a staged, invariant-driven XR inventory capability contract as the requirements baseline before any implementation. | Draft contract `XR_INVENTORY_CAPABILITY_CONTRACT.md` defines item/instance identity, single authoritative holder, safe transfers, world representation synchronization, explicit acceptance evidence, and deferred features. | PROPOSED — NOT IMPLEMENTATION AUTHORIZATION | Decide whether Stage 1 includes inventory return or only identity-preserving pickup/drop; decide whether first container needs slots/capacity; then approve a bounded implementation task. Rights and Godot/Quest compatibility gates remain mandatory. |
