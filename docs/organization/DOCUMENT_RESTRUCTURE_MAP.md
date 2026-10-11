# Document Restructure and Destination Map

Document ID: ORG-DOC-MAP-001  
Version: 0.1.0-draft  
Status: DRAFT — initial destination architecture; source coverage incomplete  
Created At: 2026-10-11 (exact clock time not recorded for this file operation)  
Prepared By: ChatGPT — GPT-6  
Canonical Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo  
Related: [Source Document Catalog](SOURCE_DOCUMENT_CATALOG.md), [Continuity Map](CONTINUITY_MAP.md), [Document Control Standard](DOCUMENT_CONTROL_STANDARD.md)

## 1. Objective

Create a better-structured, versioned documentation system in Yeta-nothe-repo that absorbs the *intent and information* held in prior project documents without mechanically inheriting their folder layout, outdated procedures, contradictory authority rules, or versioning methods.

This is a destination design, not a declaration that the migration is complete. Existing source repositories and historical records remain unchanged.

## 2. Core principle: preserve information, redesign the method

For every source record, capture:
- source repository, exact path, commit SHA and blob SHA;
- source document/version/date/author when present;
- each distinct requirement, rule, exception, decision, rationale, claim, test, dependency, and unresolved question;
- destination document and ledger IDs;
- whether the information is retained verbatim as a quotation, paraphrased, merged, superseded, contradicted, or excluded with a reason;
- confidence/evidence level and review state.

Do not assume that one source file maps to one destination file. A single historical AI log may contain requirements for governance, project architecture, tool access, testing, user constraints, and unresolved decisions; split these into the correct destinations while retaining the original source reference.

## 3. Proposed destination architecture

| Destination path | Purpose / contents | Primary source families | Status |
|---|---|---|---|
| `README.md` | Concise repository entry point; links, workstreams, current state and high-value next actions | Existing org README and all navigation sources | Existing; update links additively when appropriate |
| `docs/PROJECT_BLUEPRINT.md` | The Living Continuum game concept and game-specific requirements only | Startup Project Bible, consolidated game record, game-related AI logs, XrGpt production architecture where relevant | Existing; keep separate from org governance |
| `docs/organization/FOUNDATION_BLUEPRINT.md` | Organization mission, pillars, strategy and roadmap | User's organization discussions and related prior records | Existing; license-specific clauses are handled by license workstream |
| `docs/organization/OPERATING_CHARTER.md` | Organizational operating principles, roles, authority, escalation and scope | AI rules, agent protocols, organizational decisions | Existing draft; review conflicts before activation |
| `docs/organization/DOCUMENT_CONTROL_STANDARD.md` | Canonical IDs, versioning, timestamps, provenance, source/target links and status | Startup handoff versions, XrGpt README signing rules, current document control standard | Existing; refine after comparison |
| `docs/organization/SOURCE_DOCUMENT_CATALOG.md` | Pinned inventory of source documents, blob SHAs and review states | Both source repository trees | Created in this pass; partial |
| `docs/organization/DOCUMENT_RESTRUCTURE_MAP.md` | Source-to-destination mapping and proposed final information architecture | Both source repositories and destination repository | Created in this pass; draft |
| `docs/organization/REQUIREMENTS_PROVENANCE_LEDGER.md` | One traceable row/ID per extracted requirement, rule, claim, test, or open question | Bibles, AI rules, handoffs, logs, plans, test/validation reports | To be created |
| `docs/organization/DECISION_REGISTER.md` | Explicit user/owner decisions, scope choices, rationale, status and review triggers | Source decision files, handoffs, logs, current owner answers | Existing; add only when a decision is actually made |
| `docs/organization/GAP_AND_CONFLICT_REGISTER.md` | Contradictions, missing evidence, stale links, duplicated/overlapping rules, and resolution plan | All sources, current repository structure | Existing; add traceable findings |
| `docs/organization/REPOSITORY_INVENTORY.md` | Repository identity, role, source commit, relationships, current review scope | README files, handoffs, GitHub metadata | Existing; source-document detail remains in the source catalog |
| `docs/organization/ASSET_RIGHTS_INVENTORY.md` | Asset/dependency identity, provenance, rights evidence and unresolved permissions | LICENSE files, notices, asset manifests, reference rules | Existing; separate from functional requirements |
| `docs/organization/XR_COMPONENT_EVIDENCE_MATRIX.md` | XR/Godot component facts, version compatibility, source paths and validation evidence | XR architecture and technical docs | Existing; technical comparison only |
| `docs/organization/XR_INVENTORY_CAPABILITY_CONTRACT.md` | Proposed inventory behavior and acceptance criteria | Relevant inventory/interaction source material | Existing draft; not implementation authorization |
| `docs/organization/DECISION_QUESTIONNAIRE.md` | Specific unanswered owner choices; prefer concise yes/no or bounded multiple choice | Conflicts that cannot be resolved from evidence or delegated policy | Existing; questions should be specific, not generic |
| `logs/AI_CONVERSATION_LOG.md` | Chronological record of AI work in the new repository: actions, evidence, changes, limitations, next step | Current sessions and repository operations | Existing; append-only correction style |
| `logs/source-review/` (proposed) | Source-specific review sessions and extraction progress if the main log becomes unwieldy | Large conversation logs, handoffs, worklogs | Proposed; create only when it provides real navigational value |
| `docs/organization/archive/` (proposed) | Superseded destination documents and prior approved versions, if history cannot be maintained in-place | Future destination versions | Proposed; do not archive or move source-repository records |

## 4. Information classes and their destination

| Information class | Canonical destination | Do not confuse with |
|---|---|---|
| Durable game intent and product constraints | Game Project Blueprint | Current implementation state |
| Organization mission and operating principles | Foundation Blueprint / Operating Charter | License terms or legal bylaws |
| AI conduct and execution workflow | Operating Charter + specific work procedure | Product requirements or legal rights |
| Document IDs, versions, timestamps, provenance | Document Control Standard | Project-specific feature logic |
| Individual historical AI statements/events | AI conversation/source logs with source links | Verified facts merely because they were written by an AI |
| Decisions made by the owner | Decision Register | Recommendations or unaccepted drafts |
| Conflicting claims/rules and their resolution | Gap and Conflict Register + Requirements Ledger | A silently selected winner |
| Feature requirements and acceptance criteria | Requirements/Provenance Ledger, then domain contract | Code that only partially implements them |
| Actual tests and observed outcomes | Validation/test records with exact evidence | Planned test steps or checkboxes not executed |
| Third-party code/assets and license obligations | Asset Rights Inventory | Technical suitability |
| Repo/file inventories and provenance | Source Document Catalog / Repository Inventory | Claims of complete reading |
| Tool/plugin/API procedures | Separate tool capability/workflow docs if needed | Current availability inferred from an old AI note |

## 5. Conflict-resolution workflow

When two source records disagree:

1. **Preserve both source claims** with their source commit, date, author and context.
2. **Classify the conflict:** different project scope, version drift, changed requirement, factual disagreement, incompatible procedure, ambiguous wording, stale tool information, or evidence mismatch.
3. **Check chronology and authority:** an explicitly approved owner decision may supersede an earlier proposal; a newer AI note does not automatically supersede an older owner decision.
4. **Check applicability:** a Startup rule may be correct for Startup but inappropriate as an organization-wide rule; XrGpt's README append-only method may be useful as a preservation invariant without requiring the entire README to be the sole operational index.
5. **Separate invariant from implementation:** preserve the purpose (e.g. historical integrity, traceable handoffs) while redesigning the mechanism (e.g. stable document IDs and structured logs).
6. **Record disposition:** RETAIN, CONSOLIDATE, REWRITE, SUPERSEDE, PROJECT-SPECIFIC, NOT-APPLICABLE, UNRESOLVED, or EXCLUDED-WITH-REASON.
7. **Ask the owner only when necessary:** ask a specific yes/no or bounded-choice question if evidence and existing authority do not settle a material choice.
8. **Verify links and coverage:** each source file and extracted item must point to a destination or an explicit unresolved state.

A conflict is not by itself a reason to halt unrelated work. Continue with uncontested, reversible documentation while preserving the open conflict.

## 6. Version migration method

- Do not copy source documents into the destination as if their original status, author, authority, or project scope transferred.
- Create new destination documents with new stable IDs and versions.
- Preserve original source title, version, date, authorship, repository, commit, and blob SHA as provenance.
- Keep source wording verbatim only where exact wording matters; mark quotations and distinguish them from the new organization's policy.
- If a new document combines several source files, list all contributors and map the extracted requirements.
- If a source version has later versions, inventory each version and compare differences before declaring which information is superseded.
- Historical source handoffs and worklogs remain in place. A new normalized handoff format applies prospectively; it must not falsify the format or authority of old records.
- Never silently delete duplicate material. Identify the duplicate relationship and preserve distinct information that might exist only in one copy.

## 7. Review progress model

Every source document should have these separate fields:
- **Discovered:** path/hash appears in the pinned source tree.
- **Read:** contents have been reviewed, not just title/snippet.
- **Extracted:** meaningful requirements and claims are represented in the ledger.
- **Mapped:** every extracted item has a destination or explicit open state.
- **Reconciled:** conflicts and duplicates have dispositions or named open questions.
- **Verified:** link/path/hash and coverage checks were run against the source snapshot and destination.
- **Complete:** all prior conditions are satisfied for the declared scope.

A source may be discovered and partially read while its requirements remain unmapped. Do not compress these into one checkbox.

## 8. Boundaries

This map governs documentation work in Yeta-nothe-repo. It does not:
- modify Startup or XrGpt;
- approve copying code or assets;
- decide or publish the separate license draft;
- declare legal terms enforceable;
- claim all source histories have been read;
- claim a game feature or test has passed.

## 9. Immediate next actions

1. Continue full-text review of Startup's Bible, both handoff templates, logs, worklogs, rules, plans, checklists and validation records.
2. Continue full-text review of XrGpt's README history, dated handoff, coordination records, production architecture, research documents and conversation logs.
3. Extend the source catalog to all human-readable documentation files in the pinned trees.
4. Create the Requirements/Provenance Ledger and extract one row per material requirement/decision/claim/test.
5. Add only evidence-supported conflicts to the existing Gap and Conflict Register, with source links.
6. Update the repository index and AI log after the catalog/map/ledger have been read back and checked.


## Addendum — domain extraction records (2026-10-11)

Two source-specific companion documents were added: [DOMAIN_REQUIREMENTS_EXTRACTION.md](DOMAIN_REQUIREMENTS_EXTRACTION.md) preserves detailed game/XR requirements, and [AI_NATIVE_COMPUTING_REQUIREMENTS.md](AI_NATIVE_COMPUTING_REQUIREMENTS.md) preserves the distinct AI-native computing concept. Both are partial extractions and explicitly distinguish design intent from implementation.


## Addendum — canonical process standards created 2026-10-11

New draft destination standards now separate four shared concerns that were previously mixed across the source files:

- [AI_WORK_PROTOCOL.md](AI_WORK_PROTOCOL.md) — agent conduct, scope, identity, validation proportionality, data safety and reporting.
- [HANDOFF_AND_SESSION_CONTINUITY_STANDARD.md](HANDOFF_AND_SESSION_CONTINUITY_STANDARD.md) — compact state-transfer handoff and entry procedure.
- [ARCHIVE_AND_CONVERSATION_PROVENANCE_STANDARD.md](ARCHIVE_AND_CONVERSATION_PROVENANCE_STANDARD.md) — distinguishes verbatim transcripts, consolidated records, summaries, worklogs and migration records.
- [VERIFICATION_EVIDENCE_STANDARD.md](VERIFICATION_EVIDENCE_STANDARD.md) — common evidence levels, status vocabulary, failure handling and platform acceptance.
- [ANDROID_STATIC_CORE_REQUIREMENTS.md](ANDROID_STATIC_CORE_REQUIREMENTS.md) — keeps the Android Static Core concept distinct from both game repositories and the AI-native cognition concept.

All five are drafts or concept extractions. They preserve the source intent while changing the destination method; they do not automatically supersede the original project-local rules.
