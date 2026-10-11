# Continuity and Governance Decision Questionnaire

Document ID: ORG-QUESTIONNAIRE-001  
Version: 0.1.0  
Status: ACTIVE — first decision packet; answers pending  
Created: 2026-10-10 (America/New_York; exact time not independently obtained)  
Prepared by: ChatGPT — GPT-6  
Session record: logs/AI_CONVERSATION_LOG.md  
Canonical repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo  
Predecessors: docs/organization/CONTINUITY_MAP.md; docs/organization/GAP_AND_CONFLICT_REGISTER.md  
Next document: docs/organization/DECISION_REGISTER.md  
Supersedes: None  
Evidence state: Questions based on current documented plan; answers pending

## How to answer

Use Yes/No/Unsure for binary questions; choose one where a single governing rule is required; select all when options can coexist. Extended response is available when the options do not capture your intent. “Select all” is allowed. Unanswered items remain OPEN. Answers are recorded additively; prior records are not deleted.

## Q1 — Organizational repository boundary
**Type:** Yes / No

Should Yeta-nothe-repo remain the organizational documentation, provenance, decision, and continuity source of truth while existing code repositories remain intact unless a specific migration is approved?

- [x] Yes — current documented default
- [ ] No
- [ ] Unsure

## Q2 — License draft
**Type:** Yes / No

Should we stop treating recovery of the previous license draft as a prerequisite and proceed with a new draft?

- [x] Yes — user-directed
- [ ] No
- [ ] Unsure

## Q3 — Licensing models
**Type:** Select all that apply

Which models should be supported or evaluated?

- [ ] A. Genuine open-source software under a standard OSI-approved license; no extra approval gate on freedoms that license grants.
- [ ] B. Source-available/controlled software with explicit permission tiers.
- [ ] C. Separately licensed game assets, narrative, art, music, and creative content.
- [ ] D. Separate trademark and branding permissions.
- [ ] E. Paid authorization for controlled assets or additional rights the organization owns/controls.
- [ ] F. Free community/evaluation authorization for specified controlled assets.
- [ ] G. Dual licensing where appropriate.
- [ ] H. Unsure — propose an asset-permission matrix first.

## Q4 — Upstream code
**Type:** Yes / No

Should the default be: never relicense or impose our own restrictions on third-party code unless the actual license and ownership permit it?

- [x] Yes — preservation default
- [ ] No
- [ ] Unsure

## Q5 — Evidence needed before XR code reuse
**Type:** Select all that apply

- [ ] A. Exact source repository and file path.
- [ ] B. Commit SHA or immutable release tag.
- [ ] C. Last relevant commit/release date, compared with today's date.
- [ ] D. Confirmed license and redistribution/modification permissions.
- [ ] E. Godot version and XR plugin/dependency versions.
- [ ] F. Automated test/build evidence.
- [ ] G. Target-device runtime test (Quest 3S for the current XR target).
- [ ] H. Always use newest code, even if compatibility or test evidence is weaker.
- [ ] I. Prefer newest relevant code that passes provenance, license, and compatibility gates.
- [ ] J. Unsure.

## Q6 — Older but better-tested source
**Type:** Choose one

- [ ] A. Always choose the newest source.
- [ ] B. Prefer the newest relevant source that passes license, provenance, and compatibility gates; keep older tested code as comparison evidence.
- [ ] C. Prefer the most tested source after checking compatibility, regardless of age.
- [ ] D. Compare both and decide per component.
- [ ] E. Unsure.

## Q7 — Required chronology
**Type:** Select all that apply

- [ ] A. Document creation/recorded date.
- [ ] B. Last updated date.
- [ ] C. Source commit/release date.
- [ ] D. Evidence publication date.
- [ ] E. Evidence retrieval/verification date.
- [ ] F. Decision/conclusion date.
- [ ] G. Exact time and time zone only when known; never invent a time.
- [ ] H. Unsure.

## Q8 — AI identity
**Type:** Yes / No

Should each AI-authored work record name the AI product and model identity exposed in that session plus a session/work-log reference, using UNKNOWN when unavailable?

- [x] Yes — recommended provenance rule
- [ ] No
- [ ] Unsure

## Q9 — Document navigation
**Type:** Select all that apply

- [ ] A. Predecessor/origin document.
- [ ] B. Next document or next action.
- [ ] C. Parent project and canonical repository.
- [ ] D. Supersedes/superseded-by links.
- [ ] E. Evidence links and verification status.
- [ ] F. Status, confidence, and limitations.
- [ ] G. Unsure.

## Q10 — Repository architecture
**Type:** Choose one

- [ ] A. Copy all source code/assets from every repository into one monorepo.
- [ ] B. Keep source projects in place; consolidate indexes, documentation, provenance, and selected verified artifacts here.
- [ ] C. Use submodules/immutable source references where practical, with license and provenance records.
- [ ] D. Combine B and C; approve code migration project by project.
- [ ] E. Unsure.

## Q11 — Conversation records
**Type:** Select all that apply

- [ ] A. Verbatim transcripts only when the full original text is actually available.
- [ ] B. Clearly labeled summaries when full transcripts are unavailable.
- [ ] C. Project-specific logs plus one organization-wide continuity index.
- [ ] D. Link records to decisions, artifacts, and projects.
- [ ] E. Explicit missing-coverage notes rather than claiming nothing was lost.
- [ ] F. Keep private/sensitive data out of public logs.
- [ ] G. Unsure.

## Q12 — Foundation inspection cadence
**Type:** Choose one

- [ ] A. Never audit again.
- [ ] B. Re-audit the entire foundation every session.
- [ ] C. Treat the baseline as established; do targeted checks only for concrete questions, changes, conflicts, risks, or verification needs.
- [ ] D. Targeted checks plus a scheduled lightweight integrity review.
- [ ] E. Unsure.

## Q13 — Child-facing game requirements
**Type:** Select all that apply

- [ ] A. Age-appropriate experiences for different age groups.
- [ ] B. Privacy minimization and safe handling of user data.
- [ ] C. Parental/age-appropriate account controls where applicable.
- [ ] D. User-generated-content moderation and reporting.
- [ ] E. Accessibility and comfort options.
- [ ] F. Keep child-safety/privacy policy separate from software licensing.
- [ ] G. Unsure.

## Q14 — Multi-select workflow
**Type:** Yes / No

When choices are independent, should the default let you select several or all options rather than forcing one answer?

- [x] Yes — user-directed
- [ ] No
- [ ] Unsure

## Q15 — Additional rule or contradiction
**Type:** Extended response

Write any missing rule, conflict, exception, or scenario. Leave blank if none.

**Answer:**

## After answers arrive

1. Record answers and date them in the decision register.
2. Leave unanswered questions OPEN.
3. Update only affected policies, standards, and workstreams.
4. Add new gaps rather than silently resolving contradictions.
5. Continue reversible work while answers are pending, unless that work depends on the answer.


## Answer record addendum — 2026-10-11 (America/New_York)

**Answer state:** Q2–Q5 from the user's submitted answer packet are recorded below. Q1 and other questions not explicitly answered in that packet retain their existing recorded/default status; no blank is treated as approval. This addendum supersedes the earlier “answers pending” evidence note for the answered items only.

### Submitted answers

- **Licensing models — select all:** genuine open-source code under standard licenses; permission-tiered source-available code; separately licensed game content and creative assets; separate trademark and branding permissions; paid authorization for additional rights controlled by the organization; free community and evaluation permissions; dual licensing where appropriate; and unsure—decide after the asset inventory.
- **XR reuse evidence — select all:** exact source repository and file path; commit SHA or immutable release; source date compared with today's date; verified license and reuse rights; Godot and XR dependency versions; automated test/build evidence; Quest 3S runtime verification; and retain older, better-tested alternatives for comparison.
- **Source recency:** compare and decide per component.
- **Repository architecture:** central documentation plus verified references and project-specific migration approvals.
- **Extended response:** recency and architecture need hybrid answers; assign functions appropriately to components and asset classes.

### Interpretation and safeguards

1. Treat the licensing selections as a portfolio to evaluate, not a decision that every model applies to every asset.
2. Asset-to-license assignment remains undecided until an asset/rights inventory is completed.
3. No questionnaire response adopts the draft license, confirms ownership, overrides upstream terms, or constitutes legal approval.
4. Newest XR source is not automatically preferred; compare evidence per component and retain older tested candidates.
5. Central documentation/reference does not authorize bulk migration or modification of existing project repositories.
6. See `DECISION_REGISTER.md` for decision IDs and `GAP_AND_CONFLICT_REGISTER.md` for legal/technical conflicts and next actions.
