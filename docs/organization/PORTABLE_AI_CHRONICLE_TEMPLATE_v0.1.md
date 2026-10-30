# Portable AI Chronicle — Context, Actions, Evidence & Continuity Template

**Document ID:** ORG-CHRONICLE-TEMPLATE-001  
**Version:** 0.1.0-draft  
**Status:** PROPOSED / NOT YET ADOPTED AS ORGANIZATION-WIDE POLICY  
**Prepared at:** 2026-10-29T20:49:49-04:00 (America/New_York; 2026-10-30T00:49:49Z)  
**Prepared by:** ChatGPT, GPT-6; working alias: Chronicle-20261029; function: continuity and provenance documentation  
**Project umbrella:** [Yeta-nothe-repo](https://github.com/0SwiftKnightX/Yeta-nothe-repo)  
**Parent standards:** Startup Handoff Protocol v1.1 (ACTIVE for Startup); Yeta Handoff and Session Continuity Standard v0.1.0-draft; Archive and Conversation Provenance Standard v0.1.0-draft; Document Control Standard v0.1.0-draft.  
**Scope:** Portable cross-chat documentation format and ingestion procedure. No change to Startup's active handoff version, code, authorization hierarchy, or historical files.

> The term **chronicle** is used instead of 'AI diary' because this is a reproducible record of work and evidence, **not** a claim that an AI possesses ongoing consciousness, independent awareness, or reliable memory between chats. Continuity is provided by accessible, source-linked documents.

## 1. Operating concept

Every chat can contribute one **chronicle instance**: a dated, signed, append-only, source-aware Markdown record. It captures what was said, what the assistant could actually observe, what tools did, what was changed, which ideas were new, which were duplicates, which facts were verified, and what remains unresolved. A later chat can read these files, migrate their distinct information into the appropriate canonical project documents, and leave the original chronicle intact.

A chronicle is **not** automatically a verbatim transcript, not the only repository source of truth, and not a substitute for a handoff, blueprint, decision register, issue tracker, test report, or original source archive.

**The memory chain:** ORIGINAL CHAT/EXPORT → SESSION CHRONICLE → SOURCE-EVENT/CLAIM IDS → RECONCILIATION & CROSSWALK → CANONICAL PROJECT RECORD → NEXT HANDOFF.

## 2. Recommended repository placement

For the existing organizational umbrella, use:
- `docs/organization/PORTABLE_AI_CHRONICLE_TEMPLATE_v0.1.md` — this portable definition.
- `logs/handoffs/YYYY-MM-DD_HHMM_<chat-slug>_HANDOFF.md` — one transfer snapshot per chat or milestone.
- `logs/chronicles/YYYY-MM-DD_HHMM_<chat-slug>_CHRONICLE.md` — optional long-form instance when a chat has substantial event history.
- `logs/source-review/` — optional staged ingestion records for older chat exports or large historical documents.
- Existing `logs/AI_CONVERSATION_LOG.md` — organization-wide index of verified session actions, not a replacement for originals.
- Existing `docs/organization/SOURCE_EVENT_CROSSWALK.md`, `SOURCE_DOCUMENT_CATALOG.md`, `REQUIREMENTS_PROVENANCE_LEDGER.md`, `GAP_AND_CONFLICT_REGISTER.md`, and `DECISION_REGISTER.md` — destination index and canonical tracing.

The first and second paths exist as intended locations; any other suggested path remains **PROPOSED until created**. Other repositories keep their own applicable conventions; e.g., Startup handoffs stay in `Project Bible/Handoffs/` under its active Protocol v1.1. Never silently move or replace historical records.

## 3. Required front matter for an instance

Copy and fill the following. Use `UNKNOWN` for unknowns, never fabricated times or IDs:

```yaml
---
document_id: "SESSION-YYYYMMDD-NNN"
document_type: "PORTABLE_AI_CHRONICLE"
schema_version: "0.1.0-draft"
status: "DRAFT"
chat_title: "EXACT TITLE IF VERIFIED; ELSE WORKING TITLE"
chat_title_verification: "VERIFIED | WORKING | UNKNOWN"
source_platform: "ChatGPT | OTHER | UNKNOWN"
source_conversation_id: "UNKNOWN"
source_conversation_url: "UNKNOWN"
original_chat_time_range: "UNKNOWN"
record_created_at: "YYYY-MM-DDTHH:MM:SS-04:00"
record_updated_at: "YYYY-MM-DDTHH:MM:SS-04:00"
timezone: "America/New_York"
utc_timestamp: "YYYY-MM-DDTHH:MM:SSZ"
ai_product: "ChatGPT"
ai_model_disclosed: "GPT-6 | UNKNOWN"
ai_working_alias: "NEW ALIAS OR NONE"
ai_function: "CONTINUITY / ENGINEERING / RESEARCH / ETC."
owner: "OWNER-STATED IDENTITY OR OMIT"
workstream_ids: ["ORG"]
canonical_repository: "https://github.com/OWNER/REPO"
repository_ref: "main | UNKNOWN"
repository_commit_observed: "FULL_SHA | UNKNOWN"
original_source_type: "VERBATIM | PARTIAL_TRANSCRIPT | SUMMARY | SYNTHESIS | EXCERPT"
source_coverage: "EXPLICIT DESCRIPTION OF AVAILABLE HISTORY"
redaction_policy: "NO SECRETS / PRIVATE PERSONAL DATA"
parent_standard: "Startup handoff v1.1 compatible; org drafts referenced but not adopted"
predecessor_records: []
related_records: []
supersedes: []
evidence_checked_at: "YYYY-MM-DDTHH:MM:SS-04:00 | UNKNOWN"
---
```

The `record_created_at` timestamp means *when this record was actually authored*, never a fabricated earlier chat time. Source message time, retrieval time, source commit time, and interpretation time are separate fields.

## 4. Required sections of every instance

### A. Identity, intent and boundaries
- Who requested what; exact project/workstream scope; excluded work; authorization; current AI/product identity.
- What the assistant **knows**, **can verify**, **has not checked**, **cannot access**, and **must not assume**. This is the **Awareness Snapshot** — an epistemic state, not subjective consciousness.
- Source access and tool inventory distinguished across `DISCOVERED → EXPOSED → INSTALLED → CONNECTED → AUTHORIZED → INVOKED → VERIFIED`.

### B. Original messages and source coverage
- Mark every quoted message `VERBATIM` only if original bytes/text are available.
- Otherwise mark `PARTIAL_TRANSCRIPT`, `USER-STATED`, `SUMMARY`, `SYNTHESIS`, or `UNKNOWN`.
- Record which turns/source files were available and which were not; note omissions, overlaps, truncations and redactions.
- Preserve original wording for consequential user decisions and exact requirements, without pretending to possess an unavailable complete export.

### C. Event-by-event chronology (append-only)

Use a repeatable event block:

```markdown
### EVT-YYYYMMDD-0001 — Short event label
- Event time: YYYY-MM-DDTHH:MM:SS±HH:MM | UNKNOWN
- Recorded time: YYYY-MM-DDTHH:MM:SS±HH:MM
- Actor: USER | GPT-6 | COPILOT | EXTERNAL | UNKNOWN
- Actor identity/function: ...
- Event class: MESSAGE | IDEA | DECISION | RESEARCH | TOOL_CALL | REPO_READ | FILE_WRITE | TEST | FAILURE | CORRECTION | HANDOFF
- Source type: VERBATIM | PARTIAL_TRANSCRIPT | SUMMARY | OBSERVED | INFERRED
- Source URI / commit / message ref: ...
- Original statement (optional; only if verifiable): ...
- Factual observation: ...
- Interpretation/proposal (if any): ...
- Action requested: ...
- Action actually performed: ...
- Result / receipt / file SHA / commit / test run: ...
- Evidence state: DESIGN | IMPLEMENTED | STATIC VERIFIED | CI VERIFIED | RUNTIME VERIFIED | QUEST VERIFIED | PRODUCTION VERIFIED | UNKNOWN
- Outstanding issue / next dependency: ...
- Destinations / claim IDs: ...
```

**Never fill in an exact event time from sequence position alone.** Order index is valid even if timestamps are unknown. Model reasoning/private hidden scratch work is not an event source; record decisions, observable tool operations, and concise rationales instead.

### D. Project/workstream state ledger
For each workstream record:
- Stable project ID; canonical repository; purpose; current version/ref; actual implementation/verification state.
- Owner-stated vision separately from repository-observed reality.
- Critical requirements and constraints, architecture, dependencies, APIs, artifacts, open blockers, next action.
- Cross-project relationships are links, not proof of merged implementations.
- Distinguish `DESIGN`, `IMPLEMENTED`, `STATIC VERIFIED`, `CI VERIFIED`, `RUNTIME VERIFIED`, `QUEST VERIFIED`, and `PRODUCTION VERIFIED`; also `PLANNED`, `PARTIAL`, `UNKNOWN`, `FAILED`, `BLOCKED`, `CONFLICTED`.

### E. Idea and research pool
Each new idea/research result receives a stable claim ID and:
- Exact idea in the owner's terms (or attributed paraphrase); origin chat/record/time when known.
- Category/project relevance; proposed mechanism; novelty claim status (`UNTESTED` unless researched).
- Evidence and external links; verification method; competing alternatives; dependency; experiments.
- Deduplication relation: `SAME_AS`, `REFINES`, `CONFLICTS_WITH`, `DEPENDS_ON`, `SUPERSEDES`, or `INDEPENDENT_OF`.
- Disposition: `RETAIN`, `CONSOLIDATE`, `PROJECT_SPECIFIC`, `SUPERSEDE`, `EXCLUDE_WITH_REASON`, `UNRESOLVED`.
- Never lose an idea solely because it appears in multiple chats; preserve each unique nuance and its source.

### F. Execution and verification receipts
Record, for every meaningful tool or repository operation: exact operation, affected service/repository, arguments **without secrets**, observed return, resulting commit/file/URL, checks passed/failed/not run, and limitations. Listing a callable tool is not proof of completed work. Physical Quest evidence cannot be replaced by desktop checks.

### G. Decisions, risks, contradictions and gaps
Maintain stable IDs for owner decisions (`DEC-NNN`), uncertainties (`GAP-NNN`), evidence (`EVID-NNN`), and source claims. An AI suggestion is not owner authorization. Preserve conflicting historical claims with both sources. Do not silently reconcile by preferring the newest AI statement.

### H. Handoff packet
At the close, include:
`TASK`, `CURRENT STATE`, `STARTUP STATE` (for XR), `KNOWN FACTS`, `SOURCE COVERAGE`, `FILES MODIFIED`, `FILES UNTOUCHED`, `DEPENDENCIES`, `VERIFICATION STATUS`, `QUEST STATUS` (for XR), `DECISIONS`, `OPEN GAPS`, `NEXT ACTION REQUIRED`, `SOURCE LINKS`, `AI SIGNATURE`, and **exact time of handoff creation**.

## 5. The portable re-entry instruction

Paste the following into a new chat together with the relevant chronicle/handoff files or their accessible GitHub URLs:

> **CONTINUITY INGESTION — read before acting.** First read the attached or linked AI Chronicle and Handoff files. Identify each document's ID, version, time zone, source type, scope, completeness and authoritative repository. Treat historical assertions and AI summaries as historical evidence, not automatically as present truth. Read referenced canonical project documents and inspect current repository commits before implementation. Build an event/claim crosswalk with stable IDs, preserve the original records unchanged, merge only genuinely duplicate information, identify contradictions and unreviewed sources, and maintain a source-to-destination coverage ledger. Report what you know, what you cannot verify, and the smallest next action. Follow the applicable project-local rules; do not replace Startup handoff v1.1 or claim hardware verification without physical evidence. Append this chat's own signed, timestamped chronicle and handoff when requested.

## 6. Old-chat ingestion and compilation procedure

1. **Intake:** Receive the old chat export/file/text/link. Record exact title as known, source service, available time range, file hash if computed, and coverage `FULL / PARTIAL / UNKNOWN`.
2. **Preserve:** Archive the original or link to immutable original. Do not overwrite it. Redact credentials and unnecessary personal data before any public repository publication.
3. **Parse:** Enumerate message order, speakers, actual timestamps when present, attachments, tool outputs and omissions; never reconstruct missing messages as quotes.
4. **Extract:** Assign stable event and claim IDs to requirements, insights, user decisions, experiments, research sources, implementation claims, and failures.
5. **Classify:** `OWNER-STATED / DIRECTLY OBSERVED / THIRD-PARTY-SOURCED / AI-PROPOSED / INFERRED / UNVERIFIED / CONFLICTED`. Distinguish project state from assistant environment state.
6. **Relate:** Map each item to a workstream and a prior item using `SAME_AS / REFINES / CONTRADICTS / DEPENDS_ON`. Preserve source-specific unique parts.
7. **Reconcile:** Compare project-local rules, document versions, current Git HEAD, test evidence and owner decisions. Newer dates do not establish superiority without authority/evidence.
8. **Distribute:** Send durable intent to a blueprint, decisions to decision register, requirements to provenance ledger, source snapshots to catalog, issues to gap register, tool work to worklog, and current continuation to handoff.
9. **Verify coverage:** Count sources discovered/read/extracted/mapped/reconciled separately. Do not call a migration complete because files were found or summarized.
10. **Continue:** Write a new dated chronicle event and handoff; link predecessor/successor IDs; do not modify original histories.

### Ingestion progress matrix

| Source ID | Source chat/title | Source type | Discovered | Fully read | Extracted | Mapped | Reconciled | Verified | Missing material |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SRC-EXAMPLE | Replace with an actual record | UNKNOWN | NO | NO | NO | NO | NO | NO | Not yet ingested |

Each status is per **source and declared scope**; `NO`, `PARTIAL`, `YES` must be evidence-backed.

## 7. Chronology and merge safeguards

- Assign deterministic local event IDs within each original record; retain source prefix when combining to avoid collisions.
- Keep both **event time** and **time recorded**; sort by known actual event time only where comparable, otherwise preserve original source order and mark temporal uncertainty.
- A new source claim should never disappear due to similar wording; record duplicate/evolution links and retain source provenance.
- Store real Git blob/commit SHA only when observed. Source-file fingerprints are useful for identity but do not prove content truth.
- Do not manufacture session IDs, exact UI chat titles, old message times, test results, or versions.
- Do not commit passwords, tokens, API keys, sensitive contact details, financial/medical/relationship information, or third-party private messages into public archives.
- For public-facing discussion of a private source, prefer redacted metadata and scope notes, keeping the private original separate.
- Append corrections with timestamp, prior event ID, and corrected claim; preserve the old entry for auditability.

## 8. Relationship to existing standards

- [Startup active Handoff Template v1.1](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/Project%20Bible/Project%20Startup%20Handoff%20Template%20Version%201.1.md): active project-local format, including working AI name, UTC/Eastern timestamps, physical Quest evidence boundaries, worklog/changelog continuity and immutable prior handoffs.
- [Yeta Handoff and Session Continuity Standard](https://github.com/0SwiftKnightX/Yeta-nothe-repo/blob/a2c30174144854fc0886aafea56ef959f1434acf/docs/organization/HANDOFF_AND_SESSION_CONTINUITY_STANDARD.md): draft organizational state-transfer protocol.
- [Archive and Conversation Provenance Standard](https://github.com/0SwiftKnightX/Yeta-nothe-repo/blob/a2c30174144854fc0886aafea56ef959f1434acf/docs/organization/ARCHIVE_AND_CONVERSATION_PROVENANCE_STANDARD.md): draft rules separating transcript, summary, consolidation and migration.
- [Document Control Standard](https://github.com/0SwiftKnightX/Yeta-nothe-repo/blob/a2c30174144854fc0886aafea56ef959f1434acf/docs/organization/DOCUMENT_CONTROL_STANDARD.md): draft stable IDs, timestamps, provenance and navigation.
- [Document Restructure Map](https://github.com/0SwiftKnightX/Yeta-nothe-repo/blob/a2c30174144854fc0886aafea56ef959f1434acf/docs/organization/DOCUMENT_RESTRUCTURE_MAP.md): draft mapping to destination document types.

**Adoption rule:** The new chronicle is an additional portable *record type*. It does not amend the active Startup v1.1 template or activate Yeta draft standards without an explicit owner decision.

## 9. Validation checklist for each future chat

- [ ] Chat title and its verification level recorded.
- [ ] UTC and America/New_York timestamp recorded without backdating.
- [ ] AI actual identity and optional unique working alias recorded; previous signers not impersonated.
- [ ] Exact source type and missing-message coverage declared.
- [ ] User decisions separated from assistant suggestions.
- [ ] Chronological events identified and attributed with source pointers.
- [ ] All meaningful actions and results logged; secrets excluded.
- [ ] Projects and evidence levels kept separate.
- [ ] Research and novel ideas mapped with source and verification status.
- [ ] Canonical repository, branch, commit, and applicable handoff standard verified when possible.
- [ ] Conflicts, uncertainties, incomplete migration, and open work explicitly recorded.
- [ ] Successor can resume from a precise next action without repeating unrelated audits.
- [ ] Original records preserved and follow-on links supplied.

---

**Signature:** ChatGPT / GPT-6 — Chronicle-20261029 (working alias); continuity documentation.  
**Template version:** 0.1.0-draft. **This is a proposed addition, not Startup Protocol v1.2.**
