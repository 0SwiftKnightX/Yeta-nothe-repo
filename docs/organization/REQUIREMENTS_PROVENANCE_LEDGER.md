# Requirements and Provenance Ledger — Continuity Consolidation

Document ID: ORG-REQ-LEDGER-001  
Version: 0.1.0-draft  
Status: PARTIAL — initial extracted invariants only; not an exhaustive requirements inventory  
Created At: 2026-10-11 (exact clock time not recorded for this file operation)  
Prepared By: ChatGPT — GPT-6  
Canonical Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo  
Sources: [Source Document Catalog](SOURCE_DOCUMENT_CATALOG.md), [Document Restructure Map](DOCUMENT_RESTRUCTURE_MAP.md), and [Domain Requirements Extraction](DOMAIN_REQUIREMENTS_EXTRACTION.md)

## 1. Purpose

Track material requirements, rules, decisions, claims, test obligations, and unresolved questions independently from the documents that originally contained them. This ledger is intended to prevent requirements from disappearing when several old documents are consolidated into a cleaner new structure.

The initial rows below are extracted from selected source content reviewed in this session. They are a starting set, not a declaration of complete source coverage.

## 2. Record statuses

- **EXTRACTED:** source wording/intent recorded with a source pointer.
- **MAPPED:** destination is identified.
- **RECONCILED:** conflicts and applicability have been reviewed.
- **OWNER DECISION REQUIRED:** evidence does not settle a material choice.
- **PENDING SOURCE REVIEW:** source exists but has not been fully reviewed.
- **VERIFIED:** only when a repeatable check supports the exact claim.
- **SUPERSEDED:** a traceable later decision replaced it; historical record remains.
- **NOT APPLICABLE:** source requirement is project-specific or outside this destination scope, with rationale.

## 3. Initial extracted invariant ledger

| ID | Requirement / invariant | Source evidence | Interpretation for new repository | Status |
|---|---|---|---|---|
| REQ-CONT-001 | Preserve original repositories and records; consolidation does not require deleting, renaming, overwriting or bulk-migrating them. | Yeta continuity map; Startup Bible/handoff boundaries; XrGpt README and handoff | Keep Startup and XrGpt read-only references during this effort; create new destination versions in Yeta-nothe-repo. | EXTRACTED / MAPPED |
| REQ-CONT-002 | Historical entries must not be silently rewritten to make the latest state appear cleaner. | Startup AI rules, audit archive, handoff v1.0/v1.1; XrGpt README signed changelog rule; XrGpt coordination log reports an earlier continuity violation | Preserve source snapshots; corrections and supersession are additive and traceable. Destination format may be redesigned prospectively. | EXTRACTED / MAPPED |
| REQ-CONT-003 | Distinguish durable intent, context handoff, active work, decisions, audits, and verification evidence. | Startup Project Bible, handoff baseline, AI README, audit archive; XrGpt coordination docs | Use separate destination document types and stable links rather than a single oversized file with conflicting roles. | EXTRACTED / MAPPED |
| REQ-CONT-004 | A handoff must identify project/repository boundaries, current state, recent activity, unresolved work, verified/unknown state, authorized scope, exclusions and next action. | Startup Handoff Templates v1.0/v1.1; XrGpt handoff and coordination handoff format | Make the canonical handoff schema concise but complete; fields can be marked UNKNOWN instead of invented. | EXTRACTED / MAPPED |
| REQ-CONT-005 | AI agents must not impersonate previous signers; working identity and function must be attributable to the actual agent/session. | Startup AI rules and v1.1 handoff; XrGpt coordination/AGENTS.md and README continuity protocol | Record the real assistant/tool identity and role; never fabricate an AI name, timestamp, action, or human signature. | EXTRACTED / MAPPED |
| REQ-EVID-001 | Planned work, source existence, static inspection, automated tests, CI, engine runtime, Android build and physical Quest testing are different evidence levels. | Startup VALIDATION.md, AI rules, test/implementation plans; XrGpt README Quest gate and production architecture | Each claim records exact environment, source commit, method, observed result and limitations. A plan/checklist is not test evidence. | EXTRACTED / MAPPED |
| REQ-EVID-002 | A “complete” label must be tied to explicit acceptance criteria and evidence for the declared scope. | Startup implementation checklist and recommendation record; XrGpt production architecture completion vocabulary | Preserve the useful intent; avoid imposing a blanket stop condition on unrelated documentation work. | EXTRACTED / MAPPED |
| REQ-EVID-003 | Unknown, failed, stale, partial and untested states must remain visible; no fabricated success or completeness. | Startup AI rules, Validation.md, TESSARA_RECOMMENDATIONS.txt; XrGpt README/handoff | Report what is known and the boundaries of that knowledge. Do not convert a failure or conflict into a global halt unless the specific action is unsafe or unauthorized. | EXTRACTED / MAPPED |
| REQ-PROV-001 | Source references need exact repository, path, immutable commit/release and content identity where available. | Startup REFERENCE_AND_REUSE_RULES.md; XrGpt notices, README and technical handoff; current org provenance standard | Maintain source commit and blob SHA alongside source path; record retrieval/review date separately from source date. | EXTRACTED / MAPPED |
| REQ-PROV-002 | A public repository, owner-controlled repository, citation or architectural similarity does not by itself prove permission to copy. | Startup reference/reuse rules; XrGpt LICENSE and THIRD_PARTY_NOTICES separation; current asset rights inventory | Keep conceptual learning, independent implementation, code copying, asset copying and license permission as separate classifications. | EXTRACTED / MAPPED |
| REQ-PROV-003 | Third-party notices and path-specific license obligations must be examined at the intended scope. | Startup reference/reuse rules; XrGpt LICENSE and THIRD_PARTY_NOTICES.md | Rights review remains a separate workstream. This ledger does not approve copying or replace the active license work. | EXTRACTED / MAPPED |
| REQ-DOC-001 | Documents need stable identity, version/status, provenance and navigation to related/next records. | Startup versioned handoff templates; XrGpt signed README standard; current ORG-DOC-CONTROL-001 | Normalize with stable IDs and source links; do not invent timestamps or backdate new documents. | EXTRACTED / MAPPED |
| REQ-DOC-002 | Source documents may contain several information classes and must be decomposed into correct destination records without losing source traceability. | Observed source layouts across Startup and XrGpt; user direction in current session | Map extracted requirements individually rather than one-file-to-one-file copy. | EXTRACTED / MAPPED |
| REQ-DOC-003 | Contradictions should be preserved and explicitly reconciled; a newer AI statement is not automatically higher authority than an owner decision. | Startup recommendations and handoff governance; XrGpt coordination/AGENTS.md; current org decision/gap registers | Record both sides, applicability, chronology, authority and disposition. Continue uncontested low-risk work while open questions remain. | EXTRACTED / MAPPED |
| REQ-AGENT-001 | Agents should inspect relevant context before work and leave a usable handoff for successors. | Startup AI rules, setup prompt and handoff templates; XrGpt coordination/AGENTS.md | Provide a reliable entry path with source state, scope, findings, open issues and next action. | EXTRACTED / MAPPED |
| REQ-AGENT-002 | Agent worklogs and conversation summaries must distinguish actions performed from actions proposed and state validation limitations. | Startup agent worklogs and AI conversation log; XrGpt README and vector log; current org AI log | Use session records with tool actions, source refs, writes, readbacks and evidence. A summary must disclose omissions. | EXTRACTED / MAPPED |
| REQ-SCOPE-001 | Rules developed for one repository are not automatically organization-wide rules; preserve useful intent while checking applicability. | Different governance structures in Startup and XrGpt; current user instruction | Treat source rules as evidence for analysis, not binding destination policy until adopted or reconciled. | EXTRACTED / MAPPED |
| REQ-SCOPE-002 | The organizational repository is the destination for the consolidated documentation; existing game repos remain separate reference sources unless a separate migration is approved. | Current owner instruction; existing Yeta decision register/continuity map | All new continuity artifacts in this work go in Yeta-nothe-repo. Do not modify Startup or XrGpt. | EXTRACTED / MAPPED |
| REQ-QUESTION-001 | Questions to the owner should be specific and preferably yes/no or bounded multiple choice; do not ask for decisions already supported by evidence. | Current owner instruction; existing decision questionnaire preference | Ask only for genuinely unresolved, consequential choices and provide enough context to answer. | EXTRACTED / MAPPED |
| REQ-HISTORY-001 | Historical conversation records and logs may be incomplete; a file's existence is not proof of complete capture. | Startup log structure and XrGpt README/log organization; current org gap register | Track coverage intervals, duplicate/overlapping sources and missing ranges; never claim full transcript preservation without comparison. | EXTRACTED / MAPPED |
| REQ-TOOL-001 | Historical tool/workflow recommendations can become stale and must be revalidated before being adopted as current operational instructions. | Startup GPT workflow describes external tooling; general source-date requirement in continuity records | Preserve original claim and date, then check current official docs when the tool choice becomes actionable. | EXTRACTED / MAPPED |

## 4. Conflicts and design choices to reconcile

| ID | Conflict / tension | Evidence | Proposed treatment | State |
|---|---|---|---|---|
| CONFLICT-DOC-001 | Startup separates Bible, handoff template, handoff records, worklogs, audit archive and current validation; XrGpt README combines extensive chronological history with a continuity protocol and acts as its historical Company Bible. | Startup Project Bible/handoff baseline; XrGpt README continuity protocol | Keep history immutable and searchable, but separate current authority, decisions, session records, and evidence in the destination. | PROPOSED |
| CONFLICT-DOC-002 | Startup prescribes named working identities and exact UTC plus Eastern Time; XrGpt also prescribes working identity and signed timestamps, but its entries sometimes use date-only or placeholder timestamps. | Startup AI rules and handoff v1.1; XrGpt README signed changelog standard and historical entries | Require honest timestamp precision; preserve source timestamp as written and flag placeholders rather than retroactively fixing history. | PROPOSED |
| CONFLICT-DOC-003 | Source checklists mark many items checked while later validation reports describe unresolved platform acceptance. | Startup implementation checklist vs. validation report and next plan | Preserve historical check state and associate it with source date; current status requires fresh evidence and exact scope. | OPEN — requires full comparison |
| CONFLICT-DOC-004 | A rule saying “run a post-edit executable validation” can be impossible in an environment without the relevant runtime; a blanket gate could block documentation-only work. | Startup AI_RULES.md; user clarification in current session | Keep task-proportionate validation: validate the artifact with the cheapest suitable check; disclose unavailable runtime checks; do not stop unrelated work. | PROPOSED |
| CONFLICT-DOC-005 | A source-specific workflow may be valuable but unsuitable for the new organization's tools, environment or repository layout. | Startup GPT workflow and project-specific AI rules | Preserve its purpose, dependencies and assumptions; redesign the method and label any unverified tool claims. | OPEN |
| CONFLICT-DOC-006 | A document may call itself authoritative even when its source project, target engine, version or scope differs from the destination. | XrGpt production architecture contract vs. Startup target; distinct repo scopes | Authority is scoped to its named project and date; no cross-project authority transfer without an explicit destination decision. | PROPOSED |

## 5. Open extraction work

- Read all sections of Startup README, Project Bible, CHANGELOG, both handoff templates and all historical handoff records.
- Extract all meaningful content from Startup conversation log, consolidated chat record, GPT/Copilot worklogs, setup prompt and recommendations.
- Read all sections of Startup architecture, first-slice architecture, integration blueprint, implementation checklist, next plan, test plan, validation and repository audit.
- Read the XrGpt README chronology and dated handoff completely; map claimed passes to exact workflow runs where possible.
- Extract the XrGpt vector conversation log, research documents, production architecture contract, security and third-party notices.
- Enumerate all remaining human-readable files and per-asset manifests in the pinned source trees.
- For each extracted item, add source line/section or stable link and disposition; do not mark ledger complete until cross-checking against the full source inventory.

## 6. Current limits

This ledger is not a legal opinion, license approval, implementation authorization, or proof that either game project works. It records documentation requirements and evidence expectations. Technical details and license claims remain scoped to their sources and require their own validation.


## 7. Domain-specific extraction companion

Detailed game, XR, construction, vehicle, avatar, inventory, world, AI-native computing and verification requirements extracted from selected historical records are maintained in [DOMAIN_REQUIREMENTS_EXTRACTION.md](DOMAIN_REQUIREMENTS_EXTRACTION.md). That companion is partial and preserves unresolved semantics rather than guessing. The general invariant ledger above remains the cross-cutting continuity register.


## 8. Additional validation and continuity invariants

| ID | Requirement | Source | Destination / status |
|---|---|---|---|
| REQ-VALID-004 | Validation has multiple distinct levels: documentation/static checks, engine import/project checks, optional desktop XR, and physical Quest acceptance. Each level needs its own recorded evidence. | Startup `docs/TEST_PLAN.md` and `docs/VALIDATION.md` | Organization validation standard; EXTRACTED |
| REQ-VALID-005 | A test runner must not report success merely because PASS markers were printed if the underlying script failed to parse, instantiate or execute. | XrGpt README's historical false-positive regression incident and corrective entries | Verification architecture requirements; EXTRACTED |
| REQ-VALID-006 | Physical Quest acceptance includes repeated both-controller pickup, ray interaction, inventory round-trip, attachment failure/recovery, comfort/performance and no duplicate/stale ownership. | XrGpt pre-Quest checklist and 2026-09-28 handoff | XR acceptance matrix; EXTRACTED, physical test not performed here |
| REQ-VALID-007 | Historical CI success must be bound to its exact run ID and commit; it does not certify a later commit. | XrGpt README/handoff CI history | Evidence model; EXTRACTED |
| REQ-DOC-004 | Source logs may consolidate context without being verbatim transcripts; the archive must state coverage and must not claim full conversation history unless compared against source exports. | Startup consolidated chat record and historical-log policy | Continuity/archive policy; EXTRACTED |
| REQ-SEC-001 | Credentials, tokens and private user data must not be written into public repository records. | Startup AI_RULES.md | Security/privacy policy; EXTRACTED |
| REQ-SEC-002 | Security reporting instructions should identify a usable contact/route and expectations; a generic placeholder is not a complete policy. | XrGpt SECURITY.md at pinned commit | Security policy gap; MAPPED, requires later owner choice/contact details |
| REQ-XR-016 | Project-specific engine version, renderer, add-on versions and workflow versions must remain bound to the repository/commit that declared them. | Startup Bible/validation vs. XrGpt production contract/README | Compatibility/evidence matrix; EXTRACTED |
| REQ-XR-017 | Physical assembly systems need an explicit ownership/physics model; parent-child scene hierarchy alone does not prove rigid-body physics behaves as intended. | XrGpt production architecture contract | Vehicle architecture contract; EXTRACTED |
| REQ-AI-003 | AI-native computing must separate externally curated library, model, and assistant-generated memory; a document addition should normally expand searchable knowledge rather than imply model retraining. | XrGpt vector conversation log | AI-native architecture; EXTRACTED |
| REQ-AI-004 | Capability state must distinguish available, unavailable, restricted, permission-required, low-resource and dormant rather than claiming universal device support. | XrGpt vector conversation log | Capability registry; EXTRACTED |
| REQ-AI-005 | Multi-core messages require source/destination, message type, payload, context, priority, confidence, time, authority, expected response, timeout, failure handling and memory/connection effects. | XrGpt vector conversation log | Future message schema; EXTRACTED |


## 9. Project identity and applicability invariant

| ID | Requirement | Source | Status |
|---|---|---|---|
| REQ-SCOPE-004 | Similar concepts across repositories do not prove the same product scope, implementation authority, roadmap priority, or migration target. Keep Startup, XrGpt, The Living Continuum, AI-native computing and Android Static Core distinct until the owner confirms a relationship. | Source project bibles, XrGpt production architecture and Android Static Core research, current destination blueprint | EXTRACTED / MAPPED |
| REQ-SCOPE-005 | Preserve every source requirement in a traceable source-specific record even when it is not adopted into the current canonical blueprint. | Current owner direction and document restructure map | EXTRACTED / MAPPED |


## 10. Historical event extraction index

The [Historical Source Event Crosswalk](SOURCE_EVENT_CROSSWALK.md) is the working queue for entry-by-entry extraction from the Startup and XrGpt logs/handoffs/research records. An indexed row is not considered extracted until its material claims, requirements, decisions, corrections and tests have ledger IDs or an explicit context-only/duplicate disposition.
