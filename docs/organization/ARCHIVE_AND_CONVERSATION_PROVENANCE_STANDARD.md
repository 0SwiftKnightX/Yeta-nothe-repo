# Archive and Conversation Provenance Standard

Document ID: ORG-ARCHIVE-STD-001  
Version: 0.1.0-draft  
Status: DRAFT — proposed standard; historical archive coverage remains incomplete  
Created At: 2026-10-11 (exact clock time not recorded)  
Prepared By: ChatGPT — GPT-6  
Canonical Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo  
Sources: Startup AI conversation log, consolidated chat record, historical GPT log and audit archive; XrGpt root README, handoff, vector conversation log and coordination log.

## 1. Purpose

Preserve historical reasoning, requirements, decisions, changes, and uncertainty without confusing a summary with a verbatim transcript or a historical claim with current truth.

## 2. Record types

- **Verbatim transcript:** original messages preserved in original order and wording, with timestamps when actually available.
- **Consolidated conversation record:** a structured synthesis of relevant content from one or more conversations; explicitly not verbatim unless verified as such.
- **Session summary:** a concise report of one session's actual actions, decisions, results and next steps.
- **AI worklog:** chronological entries about work performed by a named agent.
- **Audit record:** scope, method, findings, evidence and limitations.
- **Decision history:** dated owner decisions and their rationale/status.
- **Source excerpt:** quoted/paraphrased material tied to an immutable source path/commit.
- **Migration record:** source record, target record, extracted material, omitted material, and disposition.

Never label a summary as “full conversation history” unless it has been compared against the available source conversation/export and the coverage boundaries are documented.

## 3. Required provenance

Each record should carry:
- stable record/document ID;
- title/type;
- author/source identity as known;
- actual creation/update timestamp precision;
- project/workstream;
- original source conversation or repository;
- source path/URL and immutable commit/blob or export identity where available;
- time range/coverage represented;
- whether verbatim, partial transcript, summary, synthesis or excerpt;
- transformation performed (none, formatting, redaction, summary, consolidation, translation);
- known gaps, missing intervals, duplicate overlap or uncertain attribution;
- destination record(s) and migration disposition.

## 4. Preserve source integrity

- Keep source repositories and historical records intact during consolidation.
- Do not silently rewrite old statements to match current understanding.
- Preserve original wording when it materially affects intent, conflict or accountability; otherwise paraphrase with a source pointer.
- Corrections should be new dated records linked to the earlier claim.
- If two records disagree, retain both and add a conflict record rather than selecting one without rationale.
- A source file's existence does not prove complete capture of the conversation that inspired it.
- Duplicated records may still contain unique fragments; compare before marking one redundant.

## 5. Historical claim vs current fact

Every imported claim should be classified as one of:
- historical statement;
- owner-stated intent;
- AI recommendation;
- proposed design;
- observed repository fact;
- claimed validation result;
- independently rechecked validation result;
- unresolved or contradicted claim.

A historical CI success applies to its exact commit/run. It does not certify a later commit. A historical “implemented” label does not establish present functionality without current evidence.

## 6. Chronology

Keep separate:
1. original event/message timestamp;
2. source document timestamp;
3. source commit timestamp;
4. retrieval/review timestamp;
5. migration/conclusion timestamp.

Do not backfill unknown times by guessing. Placeholder timestamps (for example `xx:xx:xx`) remain visible and should be marked unreliable, not “corrected” by inference.

## 7. Coverage tracking

A migration must state:
- which source files were discovered;
- which were fully read;
- which were partially read;
- which were only indexed by metadata;
- which entries/sections were extracted;
- which material was mapped, merged, superseded, excluded with a reason, or left unresolved;
- which source files remain unreviewed;
- whether source-to-destination coverage has been cross-checked.

Coverage should be measured separately for file discovery, full-text reading, requirement extraction, destination mapping and conflict resolution.

## 8. Privacy and publication

Before publishing an archive:
- remove secrets/credentials and unnecessary private information;
- respect copyright/license limits for third-party content;
- distinguish user-owned content from third-party protected material;
- preserve useful provenance without publishing private data;
- ensure public logs do not expose API keys, signing keys, personal account details or confidential data.

## 9. Recommended migration record

```markdown
- Migration ID:
- Source repository/path:
- Source commit/blob or export ID:
- Source author/date:
- Source type: VERBATIM | SUMMARY | CONSOLIDATED | EXCERPT
- Coverage:
- Read state:
- Extracted requirements/claims:
- Destination record IDs:
- Disposition: RETAIN | CONSOLIDATE | SUPERSEDE | EXCLUDE-WITH-REASON | UNRESOLVED
- Transformations:
- Conflicts/uncertainties:
- Verification of source-to-destination coverage:
```

## 10. Known application to the inspected sources

- Startup `docs/HISTORICAL_GPT_LOG.md` says no historical GPT entries had been migrated in that snapshot; other Startup conversation/consolidated records exist elsewhere and must be cross-compared.
- Startup `ai/XR_GAME_SYSTEM_CONSOLIDATED_CHAT_RECORD.txt` says it is a consolidated context record, not a claim that every earlier chat message is available verbatim.
- XrGpt README is a large append-only worklog; its existence does not prove every conversation is represented.
- XrGpt `admin/vector_conversation_log.txt` labels its cognitive architecture as concept/not implemented.
- XrGpt's dated handoff contains a detailed snapshot but remains a handoff, not an exhaustive transcript.

## 11. Adoption status

Draft only. It does not claim the existing archives are complete, does not rewrite historical records, and does not replace legal review or any active licensing workstream.
