# Document Control and Provenance Standard

Document ID: ORG-DOC-CONTROL-001  
Document Version: 0.1.0  
Status: ACTIVE — initial standard  
Created At: 2026-10-10 (America/New_York; exact clock time not independently obtained in this action)  
Last Updated At: 2026-10-10  
Prepared By: ChatGPT — GPT-6  
Session Record: logs/AI_CONVERSATION_LOG.md  
Project: Organization-wide  
Canonical Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo  
Predecessor: docs/organization/CONTINUITY_MAP.md  
Next Document: docs/organization/DECISION_QUESTIONNAIRE.md  
Supersedes: None  
Superseded By: None  
Evidence State: Proposed standard; repository write/readback verification recorded in session log  
Confidence: High for the intended workflow; not a claim that all historical documents have already been normalized

## 1. Purpose

Give each important artifact a stable identity, explicit provenance, chronology, status, and navigation path so that a future AI session can resume work without repeating broad foundation reviews or mistaking a plan for verified implementation.

## 2. Required front matter

Use this template for new organization-level documents and progressively normalize existing high-value documents:

```yaml
document_id: ORG-<AREA>-<NNN>
title: "<human-readable title>"
document_version: 0.1.0
status: DRAFT | ACTIVE | PARTIAL | VERIFIED | SUPERSEDED | ARCHIVED
created_at: "YYYY-MM-DDTHH:MM:SS±HH:MM"
updated_at: "YYYY-MM-DDTHH:MM:SS±HH:MM"
timezone: "Area/City"
prepared_by:
  ai_product: "ChatGPT"
  model_identity: "GPT-6"
  session_id: "<repository log or session reference>"
project_ids: ["ORG"]
canonical_repository: "https://github.com/0SwiftKnightX/Yeta-nothe-repo"
source_commit: "<commit SHA or UNKNOWN>"
predecessor_documents: []
next_documents: []
supersedes: []
superseded_by: []
evidence_as_of: "YYYY-MM-DD"
evidence_sources: []
verification:
  status: NOT_RUN | PARTIAL | PASS | FAIL
  method: "<what was actually checked>"
  result_reference: "<commit, CI run, test report, or URL>"
confidence: HIGH | MEDIUM | LOW | UNKNOWN
limitations: []
```

Do not invent an exact time, model/session identifier, commit, test result, or source. Use `UNKNOWN`, omit optional fields, or explicitly state that only the date is known. A Git commit timestamp is not the same as a document authoring timestamp.

## 3. Stable identifiers

- Organization documents: `ORG-<AREA>-NNN`
- Project documents: `<PROJECT>-<AREA>-NNN` (example: `STARTUP-XR-001`)
- Work sessions: `SESSION-YYYYMMDD-NNN`
- Decisions: `DEC-NNN`
- Gaps and conflicts: `GAP-NNN`
- Evidence records: `EVID-NNN`
- Assets: `ASSET-<CLASS>-NNNN`

IDs are permanent. Do not reuse an ID after deletion, supersession, or renaming. Renaming a file does not change its document ID.

## 4. Chronology and precedence

Record these separately:

1. Artifact creation date.
2. Artifact last-update date.
3. Source commit date and SHA.
4. Evidence publication/release date, where applicable.
5. Date the evidence was retrieved or verified.
6. Date the conclusion was recorded.

Use ISO 8601 timestamps with a numeric UTC offset and named time zone when the exact time is known. If it is not known, record the date and explicitly mark the time unknown. Never manufacture a timestamp to make the record look complete.

Every source comparison should state the cutoff date, the version/commit examined, and whether the evidence is earlier than, contemporaneous with, or later than the comparison cutoff. A later date alone does not establish compatibility or correctness.

## 5. Status vocabulary

- `PLANNED`: intended, not yet built.
- `DRAFT`: wording/design proposed, not approved.
- `UNKNOWN`: insufficient evidence to classify.
- `PARTIAL`: some required elements exist; some are missing.
- `IMPLEMENTED`: code/content exists; testing is a separate claim.
- `VERIFIED`: specific stated checks passed, with evidence references.
- `BROKEN`: a reproducible failure is evidenced.
- `CONFLICTED`: two or more authoritative-looking records disagree.
- `SUPERSEDED`: replaced by a named newer record; retained for history.
- `ARCHIVED`: retained for reference, not active work.

Avoid a single generic “done” label. For software, record source implementation, automated checks, integration, target-device acceptance, and release separately.

## 6. Document navigation contract

Every active plan, standard, specification, or work log should name:
- its predecessor or origin, if known;
- the next document or action;
- its parent project/standard;
- related evidence and decisions;
- what is explicitly outside scope.

The next-document link means “recommended next reading/action,” not proof that the next item exists or is complete. If the next artifact does not yet exist, label it `PLANNED`.

## 7. Evidence and source integrity

For reusable code, capture repository URL, upstream owner/repository, exact commit SHA or release tag, file paths, license, target engine/runtime, dependency versions, date inspected, tests performed, and observed result. Do not classify code as real/current/compatible from a README alone. User preference is to prioritize the newest relevant real XR implementation, but recency is one signal—not a substitute for license, provenance, tests, or target-device verification.

For AI-generated material, record the AI product/model identity exposed in the session. If identity is unavailable, use `UNKNOWN`. AI notes are not automatically verbatim transcripts; label `VERBATIM`, `SUMMARY`, or `EXTRACT` accurately.

## 8. Additive change and preservation

- Never silently replace a decision or requirement.
- Append an amendment or create a new version; identify what changes and why.
- Mark the earlier record `SUPERSEDED` only when the replacement is explicit.
- Preserve original text where lawful and appropriate; do not overwrite originals during normalization.
- Store secrets, access tokens, private personal data, and confidential third-party content outside public logs.
- Record file/blob SHA and Git commit SHA when available. A hash proves byte identity, not authorship, accuracy, or legal ownership.

## 9. Validation checklist

- [ ] Stable document ID and version are present.
- [ ] Timestamp accuracy and time-zone handling are honest.
- [ ] AI identity and session/log reference are present or marked unknown.
- [ ] Predecessor and next document/action are linked or marked unknown/planned.
- [ ] Evidence date is separate from writing date.
- [ ] Source URLs, commit IDs, license, and verification method are included where relevant.
- [ ] Status is supported by evidence.
- [ ] Conflicts and limitations are recorded rather than silently reconciled.
- [ ] Previous versions remain traceable.
- [ ] No secrets or unauthorized private data were added.
