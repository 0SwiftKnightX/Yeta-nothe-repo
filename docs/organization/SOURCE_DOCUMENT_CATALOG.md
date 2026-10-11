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

- [ ] Enumerate every Markdown, plain-text, README, blueprint, log, changelog, handoff, license/notice, and human-readable manifest in the pinned source trees.
- [ ] Read each continuity/governance document in full, including both Startup handoff templates.
- [ ] Extract every material rule and exception from AI worklogs and prompts; preserve dates and attribution.
- [ ] Read Startup conversation log and consolidated chat record end to end, noting any missing intervals or duplicated content.
- [ ] Read XrGpt README chronology and full 2026-09-28 handoff end to end; map claims to source/CI evidence where possible.
- [ ] Read XrGpt research and vector conversation records; distinguish ideas, citations, decisions, and implementation claims.
- [ ] Map every source to a destination and every extracted requirement to a ledger ID.
- [ ] Check the catalog against the recursive tree before marking source coverage complete.

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

- [ ] Read the entire Startup `README.md`, `docs/NEXT_IMPLEMENTATION_PLAN.md`, `docs/IMPLEMENTATION_CHECKLIST.md`, `docs/FIRST_SLICE_ARCHITECTURE.md`, `docs/ARCHITECTURE.md`, and all active agent worklogs end to end.
- [ ] Extract every chronological entry in Startup GPT/Copilot worklogs and compare duplicates.
- [ ] Inventory and review every historical Startup handoff in the pinned tree (two handoffs were present).
- [ ] Review the full XrGpt README as a chronological sequence and map every unique design requirement, correction, and verification claim to ledger IDs. The README has been read, but exhaustive entry-by-entry extraction is still pending.
- [ ] Review the XrGpt Android static-core research document and any remaining Markdown/text files and per-asset manifests.
- [ ] Include root and path-specific license/notice files in the separate asset-rights cross-reference without treating their presence as clearance.
