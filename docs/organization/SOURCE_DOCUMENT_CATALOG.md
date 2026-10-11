# Source Document Catalog — Continuity Consolidation

Document ID: ORG-SOURCE-CATALOG-001  
Version: 0.1.0-draft  
Status: PARTIAL — initial catalog from complete recursive Git trees at pinned commits; content review remains in progress  
Created At: 2026-10-11 (exact clock time not recorded for this file operation)  
Prepared By: ChatGPT — GPT-6  
Canonical Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo  
Scope: Documentation and historical text in Startup and XrGpt; this is not a code-reuse inventory.

## 1. Purpose

Provide a traceable register of the source documents that carry project intent, rules, process, architecture, requirements, AI continuity, and verification history. This catalog records what was found and what has been inspected. It does not declare the source repositories correct, current, compatible, legally reusable, or complete.

## 2. Pinned source snapshots

| Source repository | Inspected commit | Tree result | Scope note |
|---|---|---|---|
| [Startup](https://github.com/0SwiftKnightX/Startup/tree/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a) | `6f56ad308fcf8d6f15d40a03beddfefdf8201f2a` | Recursive Git tree returned 887 blobs; `truncated=false` | Snapshot only; does not include uncommitted local files or other branches. |
| [XrGpt](https://github.com/0SwiftKnightX/XrGpt/tree/3a11c719224ed8619fd48f13071ff4423edab15f) | `3a11c719224ed8619fd48f13071ff4423edab15f` | Recursive Git tree returned 621 blobs; `truncated=false` | Snapshot only; does not include uncommitted local files or other branches. |
| [Yeta-nothe-repo](https://github.com/0SwiftKnightX/Yeta-nothe-repo/tree/b6865ec741957309daf77013dd6aff9d4ebcc986) | `b6865ec741957309daf77013dd6aff9d4ebcc986` at start of this review | Recursive Git tree returned 26 blobs; `truncated=false` | Existing destination documents are the current baseline; new consolidation records are additive. |

All source links below are pinned to the relevant source commit where practical. Blob SHA values identify the inspected file content in that snapshot. They do not certify authorship, factual accuracy, license scope, or execution.

## 3. Startup source register

### 3.1 Project identity and governing intent

| Source file | Inspected blob SHA | Review state | Destination intent |
|---|---|---|---|
| [README.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/README.md) | `05b42ea8b9fdc557577c705f2149ce3e8c3414ea` | Read for entry structure and navigation; detailed extraction partial | Project identity, status summary, source links, scope boundaries |
| [Project Bible/Project Bible.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/Project%20Bible/Project%20Bible.md) | `eee205e1f75e0e05b31c9b22a55ca0e62fb20742` | Read; extraction partial | Product intent, non-goals, target platform, durable principles, unresolved decisions |
| [CHANGELOG.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/CHANGELOG.md) | `79cb02a37829836773762b6cf5d67f6b37aee150` | Located; detailed chronology extraction pending | Dated change events and release/configuration history |
| [Project Bible/Handoffs/Project Startup Handoff - 2026-09-27 - Project Bible Handoff System Baseline.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/Project%20Bible/Handoffs/Project%20Startup%20Handoff%20-%202026-09-27%20-%20Project%20Bible%20Handoff%20System%20Baseline.md) | `8fc26076a6040bd7ba28c5ac2217412ebed6635f` | Read | Bible/template/handoff/log separation and versioning intent |
| [Project Bible/Handoffs/Project Startup Handoff - 2026-09-27 - 1339 - XR Starting Project and Environment Baseline.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/Project%20Bible/Handoffs/Project%20Startup%20Handoff%20-%202026-09-27%20-%201339%20-%20XR%20Starting%20Project%20and%20Environment%20Baseline.md) | `35d4022d95e7c875cb0a6c55e7aae3399b27868b` | Read; verification section requires further extraction | Historical state, environment, changes, gaps, verification boundary |
| [Project Bible/Project Startup Handoff Template Version 1.0.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/Project%20Bible/Project%20Startup%20Handoff%20Template%20Version%201.0.md) | `246accc2ac0a400f3bb254f6c97b33b10d5a6eb0` | Structure and required fields reviewed; full clause extraction pending | Handoff requirements; retain as historical predecessor |
| [Project Bible/Project Startup Handoff Template Version 1.1.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/Project%20Bible/Project%20Startup%20Handoff%20Template%20Version%201.1.md) | `ac572182a39d99c4085989221d0857a4d2ec1064` | Structure and required fields reviewed; full clause extraction pending | Current source handoff requirements; redesign intent, not mandatory literal format |

### 3.2 AI governance, continuity, and history

| Source file | Inspected blob SHA | Review state | Destination intent |
|---|---|---|---|
| [ai/AI_RULES.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/AI_RULES.md) | `0ed011a59b47270e97632e0c3d52a5e025fde0d5` | Read | Agent conduct, validation honesty, identity, change preservation |
| [ai/README.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/README.md) | `f610738b187259e8575b28933458da8d1300c162` | Read | AI-doc navigation and division of responsibility |
| [ai/GPT workflow.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/GPT%20workflow.md) | `5cfaa124e48eb7820a957dc622c278b3257b7581` | Read initial architecture and headings; current-tool claim freshness not validated | Workflow proposals and platform/tool dependencies; date-sensitive claims must be rechecked before adoption |
| [ai/GPT_WORKLOG.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/GPT_WORKLOG.md) | `77339f593eb3d2c712b77bf194aa6fc3abd7ce5c` | Read sample entries and structure; full entry extraction pending | Agent-specific chronological activity |
| [ai/COPILOT_WORKLOG.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/COPILOT_WORKLOG.md) | `1388e6b004caa32e1da1e04dbbfcd260e6789a0d` | Read sample entries and structure; full entry extraction pending | Agent-specific chronological activity |
| [ai/GEMINI_WORKLOG.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/GEMINI_WORKLOG.md) | `79a272ee46a868e591ec7763e5bdd303e7c9d013` | Read; says no Gemini entries recorded in this snapshot | Empty/reserved log status; do not invent missing activity |
| [docs/HISTORICAL_GPT_LOG.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/HISTORICAL_GPT_LOG.md) | `6884a3afd5be59ebf72bf28b048f37cc8bc22939` | Located; extraction pending | Historical notes index/summary; verify coverage |
| [docs/AUDIT_ARCHIVE.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/AUDIT_ARCHIVE.md) | `668e1958c5c87004d6329acb4356d64d110fed77` | Read initial records and append-only intent | Dated audit events, evidence, corrections, limitations |
| [Startup Logs/AI logs/Conversation Logs/Startup_AI_Conversation_Log.txt](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/Startup%20Logs/AI%20logs/Conversation%20Logs/Startup_AI_Conversation_Log.txt) | `41fe33d376e746138498f3a332afb61ff125f27c` | Read section outline and selected portions; full extraction pending | Historical reasoning, CI/toolchain investigation, explicit user rules |
| [ai/XR_GAME_SYSTEM_CONSOLIDATED_CHAT_RECORD.txt](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/XR_GAME_SYSTEM_CONSOLIDATED_CHAT_RECORD.txt) | `60ca5d203ebcbe21c0447cfdab1e165327e16565` | Located; content extraction pending | Consolidated game/system intent and constraints |
| [TESSARA_RECOMMENDATIONS.txt](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/TESSARA_RECOMMENDATIONS.txt) | `0f54ca0bc35af51a03cf4325fc7dd573277cede8` | Read | Recommendation-only record; owner remains decision-maker |
| [ai/STARTUP_FROM_ZERO_SETUP_PROMPT.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/STARTUP_FROM_ZERO_SETUP_PROMPT.md) | `ecdf2875559029e4583c8580246b8661e9793dd8` | Read section outline and selected portions; full extraction pending | Re-entry prompt, constraints, sequence, remaining work; must be normalized rather than used as authority by itself |
| [ai/REFERENCE_AND_REUSE_RULES.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/REFERENCE_AND_REUSE_RULES.md) | `7f8e957a6167c2d34e4a0e8f4f5f8d9c80ad1e76` | Read | Provenance, licensing and compatibility checks; applies to its original project, not automatically as the new repository's process |

### 3.3 Technical plans and verification records

| Source file | Inspected blob SHA | Review state | Destination intent |
|---|---|---|---|
| [docs/ARCHITECTURE.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/ARCHITECTURE.md) | `1d2585a5e9cf03858e57b99aecab50b6d4b56c15` | Read | Layer boundaries, scene ownership, runtime responsibilities |
| [docs/FIRST_SLICE_ARCHITECTURE.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/FIRST_SLICE_ARCHITECTURE.md) | `68111faf21022de95f3256866f1789bcfbdb707f` | Read selected sections; full extraction pending | Feature contract and testable first vertical slice |
| [docs/INTEGRATION_BLUEPRINT.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/INTEGRATION_BLUEPRINT.md) | `daa07326b2af772c5fd5ab1a0ea2e3bb7c01e7d3` | Read | Reference-to-capability mapping; not permission to copy |
| [docs/INTERACTION_CONTRACTS.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/INTERACTION_CONTRACTS.md) | `afae89135c154521861af0851310d20699347a04` | Read | Ownership and lifecycle requirements for interaction |
| [docs/LEVEL_FLOW.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/LEVEL_FLOW.md) | `a1843bdfa6980f04edbe737e3a2205335607b1c5` | Read | Scene transition and cleanup requirements |
| [docs/LOCOMOTION_PROFILES.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/LOCOMOTION_PROFILES.md) | `2c4afd271c8dc09f49ae60d9742b42adeed7782b` | Read | Movement modes, comfort settings, test boundaries |
| [docs/ASSET_PIPELINE.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/ASSET_PIPELINE.md) | `6c43f297d0a5a5a0045d753b04ef7276418233e1` | Located; extraction pending | Asset intake, optimization, attribution and performance |
| [docs/NEXT_IMPLEMENTATION_PLAN.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/NEXT_IMPLEMENTATION_PLAN.md) | `a3f52cf970bb97c922293cdd64c38ffd20c4f1d1` | Read selected sections; full extraction pending | Ordered roadmap and acceptance criteria |
| [docs/IMPLEMENTATION_CHECKLIST.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/IMPLEMENTATION_CHECKLIST.md) | `8509f7ec9640798e2b50f19db2d33a3d372524a9` | Read selected sections; full extraction pending | Fine-grained requirements and acceptance evidence |
| [docs/TEST_PLAN.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/TEST_PLAN.md) | `174fdd0d9ba21681a93f7d6c773f480bd554287b` | Located; extraction pending | Planned test cases and platform gates |
| [docs/VALIDATION.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/VALIDATION.md) | `bc9bee6052be6271510898ab6be5eba98b267e8a` | Read | Historical/current evidence states and explicit non-claims |
| [docs/REPOSITORY_AUDIT.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/REPOSITORY_AUDIT.md) | `ac271ecff960304993caea65bc85a2daaa33ee36` | Located; extraction pending | File-level state and implementation gaps |
| [docs/INDEX.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/INDEX.md) | `c128b5fb1066a6d5817bf3055c6ecc3f6e08445b` | Read | Navigation; points to `docs/PROJECT_BIBLE.md`, but the inspected Bible is at `Project Bible/Project Bible.md`; stale path discrepancy confirmed in this snapshot |
| [docs/INTEGRATION_BLUEPRINT.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/INTEGRATION_BLUEPRINT.md) | `daa07326b2af772c5fd5ab1a0ea2e3bb7c01e7d3` | Read | Reference-role mapping and staged slice |
| [scenes/README.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/scenes/README.md) | `620e938740d4f818d194860175502e2bc0bf2c86` | Located; extraction pending | Scene ownership/navigation |
| [scripts/README.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/scripts/README.md) | `2658d8ae19594050f3b1377974332e99f14f0d02` | Located; extraction pending | Script organization/navigation |
| [tools/README.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/tools/README.md) | `8c936655f92ac138e88eee154894a820a862361c` | Located; extraction pending | Tooling navigation |
| [tools/verify/README.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/tools/verify/README.md) | `aa7e96933931f6cd6fc5dc3e0641c8e2d7a2b8d4` | Located; extraction pending | Verifier execution and evidence semantics |

## 4. XrGpt source register

### 4.1 Project continuity and engineering rules

| Source file | Inspected blob SHA | Review state | Destination intent |
|---|---|---|---|
| [README.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/README.md) | `abe008f1f388f2d9cb090daac1c4e9aeecec6be2` | Read selected chronology, continuity protocol, Quest checklist and append-only rule; full extraction pending | Historical AI log, validation timeline, current status claims to be checked against CI/source evidence |
| [XRGPT handoff 2026-09-28 17-48:00.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/XRGPT%20handoff%202026-09-28%2017-48%3A00.md) | `451029114591ce8bed5f40c50569fd85f882ca27` | Read outline, identity and selected sections; full extraction pending | Full-scope dated handoff, claimed state, deferred work, evidence boundaries |
| [coordination/AGENTS.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/coordination/AGENTS.md) | `e0abb00b43bc3b9f40a4cd3d2ac6a5086f9ac9ad` | Read | Agent role, identity, escalation and handoff format |
| [coordination/DECISIONS.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/coordination/DECISIONS.md) | `3db316708ae400dc93d42e915179da7d44bf993d` | Read | Coordination decisions and review triggers |
| [coordination/HANDOFFS.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/coordination/HANDOFFS.md) | `0b5640196071e22d8cacad99152ad1e9e76f0238` | Read | Cross-agent handoff history |
| [coordination/LOG.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/coordination/LOG.md) | `ae55bd1f21a35f9e06071ec7e28a3c006de8e868` | Read | Coordination chronology and documented continuity violation |
| [SECURITY.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/SECURITY.md) | `034e848032092eaf8ef96eac731b6ed5961987f3` | Located; extraction pending | Security reporting and disclosure expectations |
| [THIRD_PARTY_NOTICES.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/THIRD_PARTY_NOTICES.md) | `1c2a06003aa2b5c5bdf07f714cbde4c9f31c4df5` | Located; extraction pending | Third-party attribution and license records; not a blanket clearance |

### 4.2 Architecture, research, and additional histories

| Source file | Inspected blob SHA | Review state | Destination intent |
|---|---|---|---|
| [docs/PRODUCTION_GAME_ARCHITECTURE.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/docs/PRODUCTION_GAME_ARCHITECTURE.md) | `6e4932062191c418695ed18059ccbbc7808c1710` | Read selected sections; full extraction pending | Production-scope requirements, gate order, compatibility rules, completion vocabulary |
| [Android Static Core Research Doc.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/Android%20Static%20Core%20Research%20Doc.md) | `331e8e092207d502abb589ae661aecd3177af077` | Located; extraction pending | Research claims and citations; validate freshness and source quality before adoption |
| [admin/vector_conversation_log.txt](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/admin/vector_conversation_log.txt) | `03774ceeb15e6fc0d6a699945b8a7ac72275c0c8` | Read opening intent and closing note; full extraction pending | Separate AI-native computing concept; distinguish proposal from implementation |
| [gameplay/world/README.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/gameplay/world/README.md) | `2e3ea08cd4949dafefc71a3c3fd5913877d8aca9` | Located; extraction pending | World-system module documentation |
| [generated_visual_assets/enemies_monsters_creatures/README.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/generated_visual_assets/enemies_monsters_creatures/README.md) | `6e797826f0bb59779c6e7a869a40e574367d2079` | Located; extraction pending | Generated asset provenance, scope and known limitations |

The XrGpt tree also includes other Markdown/text documentation and per-asset manifests. Those must be enumerated in a subsequent catalog pass; this table is not a claim that every textual file in XrGpt has been individually read.

## 5. Initial cross-repository observations

1. **Different continuity architectures:** Startup separates the Project Bible, versioned handoff templates/records, agent-specific worklogs, changelog, audit archive, validation, and test planning. XrGpt uses an extensive append-only root README as a historical log/Company Bible, plus a full-scope handoff and a smaller coordination layer.
2. **Potential single-source-of-truth conflict:** XrGpt coordination records say the README remains the historical project log; coordination files handle operational handoffs/decisions. Startup distinguishes current truth, historical audits, worklogs, and handoffs more explicitly. The new repository should define separate purposes while preserving the source histories.
3. **Version drift:** Startup preserves handoff template versions 1.0 and 1.1. The new repository should not silently rewrite old handoffs to a new format; future records should use a new canonical schema with a migration/source reference.
4. **Navigation discrepancy:** Startup `docs/INDEX.md` points to `docs/PROJECT_BIBLE.md`, but the inspected Bible is `Project Bible/Project Bible.md`. Record as a source navigation defect; do not fix the source repository under this task.
5. **Historical completeness is unknown:** a log file, worklog, or handoff only proves that its recorded content exists. It does not prove complete conversation capture or exhaustive coverage.
6. **Status language must be normalized:** checkboxes, statements like “completed,” historical CI claims, and current implementation state must be captured separately. Each should carry source date, commit, environment, and the exact scope of evidence where available.
7. **Rights and technical validity are independent:** a source can be useful for design intent without being copied; technical success does not establish license permission, and license presence does not establish compatibility or correctness.

## 6. Review-state vocabulary for this catalog

- **READ:** full source contents reviewed for the current task.
- **PARTIAL READ:** selected sections/content reviewed; more extraction is needed.
- **LOCATED:** file/path/hash confirmed, but contents not yet substantively reviewed.
- **METADATA ONLY:** tree/path/size/hash only.
- **CONFLICT FLAGGED:** two or more records disagree; reconciliation remains open.
- **MAPPED:** source has a proposed destination and disposition.
- **COVERAGE COMPLETE:** all meaningful requirements and claims have a recorded disposition. This state must not be inferred from merely listing the file.

## 7. Continuation checklist

- [x] Enumerate every Markdown, plain-text, README, blueprint, log, changelog, handoff, license/notice, and human-readable manifest in the pinned source trees.
- [x] Read each non-license continuity/governance document in full, including both Startup handoff templates; license/notice contents remain assigned to the separate rights review.
- [ ] Extract every material rule and exception from AI worklogs and prompts; preserve dates and attribution.
- [x] Read Startup conversation log and consolidated chat record end to end; source records' own coverage limitations and duplicate/overlap review remain tracked.
- [ ] Read XrGpt README chronology and full 2026-09-28 handoff end to end; map claims to source/CI evidence where possible.
- [x] Read XrGpt Android Static Core research and vector conversation records; distinguish concepts from implementation claims. Entry-level extraction still remains.
- [ ] Map every source to a destination and every extracted requirement to a ledger ID.
- [x] Check the catalog against the recursive tree; 72 manifest entries recorded across the pinned snapshots, including 59 non-license human-readable documents marked READ and 13 license/notice entries reserved for rights review.

## 8. Authority and boundary

This catalog is a new organizational analysis artifact. It does not supersede any source file, change the meaning of its original project, authorize code migration, resolve license ownership, or claim that a feature works. Startup and XrGpt remain unchanged.


## 7. Review progress update — 2026-10-11

The following full-text reviews were completed after the initial catalog was created. These review updates supersede the earlier per-row “partial/located” states where they conflict.

| Source | Current review state | Additional extracted findings |
|---|---|---|
| Startup `Project Bible/Project Bible.md` | READ | Quest-first project intent, Godot 4.7.2 target, comfort/performance principles, separate Bible/handoff/log roles, open decisions |
| Startup handoff template v1.0 | READ | Full entry audit, AI environment audit, authorization handshake, evidence labels, change governance, version preservation and completion criteria |
| Startup handoff template v1.1 | READ | Additive identity/timestamp/provenance refinement; v1.0 remains preserved |
| Startup `ai/AI_RULES.md` | READ | Scoped agent conduct, validation honesty, logging, identity and reuse provenance |
| Startup `docs/VALIDATION.md` | READ | Current evidence matrix; exploratory Quest observation is not acceptance; explicit repair gate |
| Startup `docs/TEST_PLAN.md` | READ | Four evidence levels: documentation/static, Godot project, desktop XR, physical Quest 3S |
| Startup `docs/REPOSITORY_AUDIT.md` | READ | Snapshot state, 12 automated checks reported historically, observed dark/unusable lobby, Quest acceptance still open |
| Startup `docs/ASSET_PIPELINE.md` | READ | Asset separation, simple collision, Quest performance, future manifests/layout |
| Startup `docs/HISTORICAL_GPT_LOG.md` | READ | Explicitly says no historical GPT entries had been migrated in that snapshot; archive coverage cannot be presumed |
| Startup `CHANGELOG.md` | READ | Project changes and historical verification/limitations; chronology must be kept distinct from current status |
| Startup `Startup_AI_Conversation_Log.txt` | READ | CI/toolchain investigation, explicit working rules, source verification ordering and cloud workflow history |
| Startup `XR_GAME_SYSTEM_CONSOLIDATED_CHAT_RECORD.txt` | READ | Broad construction, vehicle, avatar, inventory/Hero Module, progression and AI-autonomy requirements; explicitly a consolidated context record, not necessarily a verbatim transcript |
| XrGpt root `README.md` | READ | Extensive chronological worklog, continuity protocol, signed append-only rule, pre-Quest checklist, known historical false-positive regression and CI evidence boundaries |
| XrGpt `XRGPT handoff 2026-09-28 17-48:00.md` | READ | Full project snapshot, item lifecycle, attachment transactions, CI runs, world foundation, deferred systems and open diagnostics |
| XrGpt `docs/PRODUCTION_GAME_ARCHITECTURE.md` | READ | Ten proposed implementation gates from locomotion through cross-play, with platform/architecture acceptance boundaries |
| XrGpt `admin/vector_conversation_log.txt` | READ | 39-area conceptual AI-native architecture, user STOP rule, memory/library/model separation, message contract; explicitly NOT IMPLEMENTED |
| XrGpt `SECURITY.md` | READ | Generic security-reporting template; reporting route and response expectations are not fully specified in this snapshot |
| XrGpt `THIRD_PARTY_NOTICES.md` | READ | Records Godot XR Tools MIT notice location; not blanket clearance for all bundled files |

### Additional source evidence

- Startup `docs/VALIDATION.md` and `docs/REPOSITORY_AUDIT.md` both report that an exploratory Quest 3S session showed hands/controller buttons but a very dark or invisible lobby/menu and no usable player area. They explicitly do not treat this as physical acceptance.
- Startup's `docs/IMPLEMENTATION_CHECKLIST.md` has checked items while the validation report and next plan still contain unresolved runtime/platform work. The checkboxes are historical assertions scoped to their own acceptance language; current status must not be derived from checkboxes alone.
- XrGpt README records a prior false-positive regression situation: PASS_1/PASS_2/PASS_3 had been printed despite an audit instantiation/parse error. The recorded corrective direction is to fail-fast on parse/runtime errors and require actual completed evidence, not just pass-marker text.
- XrGpt's historical CI runs #80, #82 and #123 are recorded as successes in the README/handoff. Those are historical claims for specific commits; they do not establish CI status for the inspected later snapshot or current main.
- XrGpt's project baseline in the pinned snapshot is Godot feature target 4.6 / Godot 4.6.1 validation, while Startup's pinned snapshot targets Godot 4.7.2. These remain distinct project baselines.
- Startup root has no root LICENSE file in the inspected tree snapshot; this does not mean bundled third-party components lack their own licenses. XrGpt has a root Apache-2.0 LICENSE and a separate third-party notices file. Rights conclusions remain assigned to the asset/license workstream.

### Remaining catalog work

- [x] Read the entire Startup `README.md`, `docs/NEXT_IMPLEMENTATION_PLAN.md`, `docs/IMPLEMENTATION_CHECKLIST.md`, `docs/FIRST_SLICE_ARCHITECTURE.md`, `docs/ARCHITECTURE.md`, and all active agent worklogs end to end.
- [ ] Extract every chronological entry in Startup GPT/Copilot worklogs into destination event/requirement IDs and compare duplicates.
- [x] Inventory and read both historical Startup handoffs in the pinned tree; requirement-by-requirement destination mapping remains pending.
- [ ] Map every unique XrGpt README chronology entry, design requirement, correction, and verification claim to ledger IDs. The README has been read; exhaustive entry-by-entry extraction remains pending.
- [ ] Review the XrGpt Android static-core research document and any remaining Markdown/text files and per-asset manifests.
- [x] Include root and path-specific license/notice files in the source manifest and route 13 entries to the separate asset-rights cross-reference without treating their presence as clearance.


## 8. Additional full-text review — Android Static Core research

| Source | Current review state | Findings and destination |
|---|---|---|
| [XrGpt Android Static Core Research Doc.md](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/Android%20Static%20Core%20Research%20Doc.md) — blob `331e8e092207d502abb589ae661aecd3177af077` | READ | Research-first Android company-engine/Static Core; modular Gradle source integration; research hub; lazy initialization and latency measurement; broad candidate pool; license/dependency audit; debug/stable seed distinction; independent recovery copy; tooling; phased research gates. Destination: [ANDROID_STATIC_CORE_REQUIREMENTS.md](ANDROID_STATIC_CORE_REQUIREMENTS.md). Historical Tier A/Tier B license strategy is recorded as a proposal only and is not adopted policy. |

The source's tool list and license-tier proposal are historical research, not proof of current plugin connections, current license status, or the organization's adopted license. The separate license workstream remains independent.

## 9. New destination artifacts created from this review

These files are newly authored in Yeta-nothe-repo, not copied versions of source documents:

- [AI_WORK_PROTOCOL.md](AI_WORK_PROTOCOL.md) — draft shared agent workflow.
- [HANDOFF_AND_SESSION_CONTINUITY_STANDARD.md](HANDOFF_AND_SESSION_CONTINUITY_STANDARD.md) — draft handoff format and lifecycle.
- [ARCHIVE_AND_CONVERSATION_PROVENANCE_STANDARD.md](ARCHIVE_AND_CONVERSATION_PROVENANCE_STANDARD.md) — draft archive coverage and historical-integrity rules.
- [VERIFICATION_EVIDENCE_STANDARD.md](VERIFICATION_EVIDENCE_STANDARD.md) — draft evidence levels and failure handling.
- [DOMAIN_REQUIREMENTS_EXTRACTION.md](DOMAIN_REQUIREMENTS_EXTRACTION.md) — partial game/XR requirement extraction.
- [AI_NATIVE_COMPUTING_REQUIREMENTS.md](AI_NATIVE_COMPUTING_REQUIREMENTS.md) — separate concept extraction.
- [ANDROID_STATIC_CORE_REQUIREMENTS.md](ANDROID_STATIC_CORE_REQUIREMENTS.md) — separate Android research/static-core extraction.

These are not yet fully cross-checked against every source document. Their status labels are intentional and must not be upgraded until coverage checks are completed.


## 10. Complete human-readable source manifest — pinned trees

The following manifest was generated from the complete recursive Git trees above, filtering Markdown/plain-text documents and recognizable license/notice files. It is a file-discovery inventory, not proof that every file has been read. `READ` means full text was reviewed during this task; all other states remain open.

### Startup

| Path | Blob SHA | Bytes | Review state |
|---|---|---:|---|
| `.github/README.md` | `2def981901ef04c3ef0ff0fc19852e2baf2a909d` | 457 | READ |
| `CHANGELOG.md` | `79cb02a37829836773762b6cf5d67f6b37aee150` | 4655 | READ |
| `Project Bible/Handoffs/Project Startup Handoff - 2026-09-27 - 1339 - XR Starting Project and Environment Baseline.md` | `35d4022d95e7c875cb0a6c55e7aae3399b27868b` | 7046 | READ |
| `Project Bible/Handoffs/Project Startup Handoff - 2026-09-27 - Project Bible Handoff System Baseline.md` | `8fc26076a6040bd7ba28c5ac2217412ebed6635f` | 2626 | READ |
| `Project Bible/Project Bible.md` | `eee205e1f75e0e05b31c9b22a55ca0e62fb20742` | 4999 | READ |
| `Project Bible/Project Startup Handoff Template Version 1.0.md` | `246accc2ac0a400f3bb254f6c97b33b10d5a6eb0` | 8188 | READ |
| `Project Bible/Project Startup Handoff Template Version 1.1.md` | `ac572182a39d99c4085989221d0857a4d2ec1064` | 6204 | READ |
| `README.md` | `05b42ea8b9fdc557577c705f2149ce3e8c3414ea` | 8810 | READ |
| `Startup Logs/AI logs/Conversation Logs/Startup_AI_Conversation_Log.txt` | `41fe33d376e746138498f3a332afb61ff125f27c` | 18261 | READ |
| `TESSARA_RECOMMENDATIONS.txt` | `0f54ca0bc35af51a03cf4325fc7dd573277cede8` | 8247 | READ |
| `addons/README.md` | `adfee6654aa51965e23fab714f57b04ba02a5c82` | 521 | READ |
| `addons/godot-xr-tools/editor/icons/LICENSE` | `1625c1793607996fcfc46420e8aa2f3d2b7efd1e` | 7047 | LOCATED — rights review separate |
| `addons/godot-xr-tools/hands/About.md` | `91fe6a5d284323fb3648a985eb405471da65a861` | 824 | READ |
| `addons/godot-xr-tools/hands/License.md` | `baa7dabd7c3bf93d065e9aa03b05ed3653342b34` | 7275 | LOCATED — rights review separate |
| `addons/godotopenxrvendors/GodotOpenXRVendors_CHANGES.md` | `112d3fe05284c88ece005601682eaa62151f356b` | 11077 | READ |
| `addons/godotopenxrvendors/androidxr/LICENSE` | `6b0b1270ff0ca8f03867efcd09ba6ddb6392b1e1` | 11359 | LOCATED — rights review separate |
| `addons/godotopenxrvendors/khronos/LICENSE` | `6b0b1270ff0ca8f03867efcd09ba6ddb6392b1e1` | 11359 | LOCATED — rights review separate |
| `addons/godotopenxrvendors/magicleap/LICENSE` | `6b0b1270ff0ca8f03867efcd09ba6ddb6392b1e1` | 11359 | LOCATED — rights review separate |
| `addons/godotopenxrvendors/meta/LICENSE-LOADER` | `6b0b1270ff0ca8f03867efcd09ba6ddb6392b1e1` | 11359 | LOCATED — rights review separate |
| `addons/godotopenxrvendors/meta/LICENSE-SDK` | `c2c569e962c79f124d63f853e859940f7eea4e8f` | 221 | LOCATED — rights review separate |
| `addons/godotopenxrvendors/pico/LICENSE` | `6b0b1270ff0ca8f03867efcd09ba6ddb6392b1e1` | 11359 | LOCATED — rights review separate |
| `addons/sentry/LICENSE.md` | `908c02ece459878ecb67d9693d8058e953c2432a` | 1063 | LOCATED — rights review separate |
| `addons/sentry/README.md` | `53fa4e0a8e4b2b6ec0cb9242e36525d92f2edf01` | 1149 | READ |
| `ai/AI_RULES.md` | `0ed011a59b47270e97632e0c3d52a5e025fde0d5` | 2974 | READ |
| `ai/COPILOT_WORKLOG.md` | `1388e6b004caa32e1da1e04dbbfcd260e6789a0d` | 10325 | READ |
| `ai/GEMINI_WORKLOG.md` | `79a272ee46a868e591ec7763e5bdd303e7c9d013` | 295 | READ |
| `ai/GPT workflow.md` | `5cfaa124e48eb7820a957dc622c278b3257b7581` | 12401 | READ |
| `ai/GPT_WORKLOG.md` | `77339f593eb3d2c712b77bf194aa6fc3abd7ce5c` | 4823 | READ |
| `ai/README.md` | `f610738b187259e8575b28933458da8d1300c162` | 464 | READ |
| `ai/REFERENCE_AND_REUSE_RULES.md` | `7f8e957a6167c2d34e4a0e8f4f5f8d9c80ad1e76` | 2580 | READ |
| `ai/STARTUP_FROM_ZERO_SETUP_PROMPT.md` | `ecdf2875559029e4583c8580246b8661e9793dd8` | 9436 | READ |
| `ai/XR_GAME_SYSTEM_CONSOLIDATED_CHAT_RECORD.txt` | `60ca5d203ebcbe21c0447cfdab1e165327e16565` | 27117 | READ |
| `build/README.md` | `b408552d8114a3c1482084f2060eda02ea5eaab6` | 261 | READ |
| `docs/ARCHITECTURE.md` | `1d2585a5e9cf03858e57b99aecab50b6d4b56c15` | 3271 | READ |
| `docs/ASSET_PIPELINE.md` | `6c43f297d0a5a5a0045d753b04ef7276418233e1` | 924 | READ |
| `docs/AUDIT_ARCHIVE.md` | `668e1958c5c87004d6329acb4356d64d110fed77` | 5023 | READ |
| `docs/FIRST_SLICE_ARCHITECTURE.md` | `68111faf21022de95f3256866f1789bcfbdb707f` | 7601 | READ |
| `docs/HISTORICAL_GPT_LOG.md` | `6884a3afd5be59ebf72bf28b048f37cc8bc22939` | 760 | READ |
| `docs/IMPLEMENTATION_CHECKLIST.md` | `8509f7ec9640798e2b50f19db2d33a3d372524a9` | 8875 | READ |
| `docs/INDEX.md` | `c128b5fb1066a6d5817bf3055c6ecc3f6e08445b` | 2083 | READ |
| `docs/INTEGRATION_BLUEPRINT.md` | `daa07326b2af772c5fd5ab1a0ea2e3bb7c01e7d3` | 1935 | READ |
| `docs/INTERACTION_CONTRACTS.md` | `afae89135c154521861af0851310d20699347a04` | 1130 | READ |
| `docs/LEVEL_FLOW.md` | `a1843bdfa6980f04edbe737e3a2205335607b1c5` | 1216 | READ |
| `docs/LOCOMOTION_PROFILES.md` | `2c4afd271c8dc09f49ae60d9742b42adeed7782b` | 1020 | READ |
| `docs/NEXT_IMPLEMENTATION_PLAN.md` | `a3f52cf970bb97c922293cdd64c38ffd20c4f1d1` | 9820 | READ |
| `docs/REPOSITORY_AUDIT.md` | `ac271ecff960304993caea65bc85a2daaa33ee36` | 4119 | READ |
| `docs/TEST_PLAN.md` | `174fdd0d9ba21681a93f7d6c773f480bd554287b` | 1696 | READ |
| `docs/VALIDATION.md` | `bc9bee6052be6271510898ab6be5eba98b267e8a` | 3122 | READ |
| `scenes/README.md` | `620e938740d4f818d194860175502e2bc0bf2c86` | 638 | READ |
| `scripts/README.md` | `2658d8ae19594050f3b1377974332e99f14f0d02` | 902 | READ |
| `tools/README.md` | `8c936655f92ac138e88eee154894a820a862361c` | 387 | READ |
| `tools/verify/README.md` | `aa7e96933931f6cd6fc5dc3e0641c8e2d7a2b8d4` | 1818 | READ |
| `tools/verify/runtime/README.md` | `1c7acb590ff226dac2b87b556ab5a3a3d6c45c10` | 390 | READ |
| `tools/verify/verifiers/README.md` | `236d9ff4665c458c1023c1017beb3dfa707a5c1c` | 521 | READ |

### XrGpt

| Path | Blob SHA | Bytes | Review state |
|---|---|---:|---|
| `Android Static Core Research Doc.md` | `331e8e092207d502abb589ae661aecd3177af077` | 30724 | READ |
| `LICENSE` | `261eeb9e9f8b2b4b0d119366dda99c6fd7d35c64` | 11357 | LOCATED — rights review separate |
| `README.md` | `abe008f1f388f2d9cb090daac1c4e9aeecec6be2` | 57244 | READ |
| `SECURITY.md` | `034e848032092eaf8ef96eac731b6ed5961987f3` | 619 | READ |
| `THIRD_PARTY_NOTICES.md` | `1c2a06003aa2b5c5bdf07f714cbde4c9f31c4df5` | 352 | READ |
| `XRGPT handoff 2026-09-28 17-48:00.md` | `451029114591ce8bed5f40c50569fd85f882ca27` | 39993 | READ |
| `addons/godot-xr-tools/LICENSE` | `f8f1c828e1f378fa279cb2d739d704114045a501` | 1092 | LOCATED — rights review separate |
| `addons/godot-xr-tools/editor/icons/LICENSE` | `1625c1793607996fcfc46420e8aa2f3d2b7efd1e` | 7047 | LOCATED — rights review separate |
| `addons/godot-xr-tools/hands/About.md` | `91fe6a5d284323fb3648a985eb405471da65a861` | 824 | READ |
| `addons/godot-xr-tools/hands/License.md` | `baa7dabd7c3bf93d065e9aa03b05ed3653342b34` | 7275 | LOCATED — rights review separate |
| `admin/vector_conversation_log.txt` | `03774ceeb15e6fc0d6a699945b8a7ac72275c0c8` | 21941 | READ |
| `coordination/AGENTS.md` | `e0abb00b43bc3b9f40a4cd3d2ac6a5086f9ac9ad` | 1729 | READ |
| `coordination/DECISIONS.md` | `3db316708ae400dc93d42e915179da7d44bf993d` | 887 | READ |
| `coordination/HANDOFFS.md` | `0b5640196071e22d8cacad99152ad1e9e76f0238` | 841 | READ |
| `coordination/LOG.md` | `ae55bd1f21a35f9e06071ec7e28a3c006de8e868` | 1374 | READ |
| `docs/PRODUCTION_GAME_ARCHITECTURE.md` | `6e4932062191c418695ed18059ccbbc7808c1710` | 8110 | READ |
| `gameplay/world/README.md` | `2e3ea08cd4949dafefc71a3c3fd5913877d8aca9` | 1304 | READ |
| `generated_visual_assets/enemies_monsters_creatures/README.md` | `6e797826f0bb59779c6e7a869a40e574367d2079` | 524 | READ |


## 11. Manifest review-state correction — 2026-10-11

After the initial manifest was generated, the following source files were read in full: Startup README; `ai/GPT workflow.md`; `ai/STARTUP_FROM_ZERO_SETUP_PROMPT.md`; `docs/ARCHITECTURE.md`; `docs/FIRST_SLICE_ARCHITECTURE.md`; `.github/README.md`; `addons/README.md`; `addons/godot-xr-tools/hands/About.md`; `addons/godotopenxrvendors/GodotOpenXRVendors_CHANGES.md`; `addons/sentry/README.md`; `build/README.md`; `scenes/README.md`; `scripts/README.md`; `tools/README.md`; `tools/verify/README.md`; `tools/verify/runtime/README.md`; `tools/verify/verifiers/README.md`; and the full XrGpt Android Static Core research document, root README, dated handoff, production architecture, vector conversation log, coordination files, SECURITY.md and THIRD_PARTY_NOTICES.md. Their manifest rows now reflect READ. License text and notices requiring rights-specific review are not marked cleared merely because their paths are inventoried.


## 12. Further review-state correction — 2026-10-11

The full contents of Startup `docs/AUDIT_ARCHIVE.md`, `TESSARA_RECOMMENDATIONS.txt`, and XrGpt `gameplay/world/README.md`, `generated_visual_assets/enemies_monsters_creatures/README.md`, and all four XrGpt coordination records were reviewed. The records reinforce: recommendation is not approval; architecture must make ownership/dependencies/failure handling/testability/persistence explicit; world foundation containers do not imply terrain/biome/weather/persistence/creature/vehicle/quest/multiplayer implementation; generated creature assets are low-poly blockouts, not production-final assets; and the coordination layer is operational while the XrGpt root README remains its historical log per that project's own rule.


## 13. Source-read completion correction — 2026-10-11

The complete non-license human-readable documentation review is now finished for the pinned Startup and XrGpt snapshots: all 59 non-license Markdown/plain-text documents in the 72-entry manifest are marked READ. Thirteen license/notice records are inventoried but intentionally not reviewed for clearance here because the separate license/rights workstream is handling them. Remaining work is not basic document discovery or reading; it is exhaustive entry-by-entry extraction, source-to-destination mapping, conflict disposition, and coverage verification. Machine-readable asset manifests and code are outside this text-document reading count and need their own scoped review if they become relevant.
