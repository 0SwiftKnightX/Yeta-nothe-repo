# Operating Charter — Open Technology Initiative

Document ID: ORG-CHARTER-001  
Version: 0.1.0-draft  
Status: DRAFT — proposed operating rules; not legal bylaws  
Created: 2026-10-10 (America/New_York local date; exact creation time not captured)  
Prepared by: ChatGPT (GPT-6), from conversation context available in this session  
Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo

## 1. Purpose

Build an open-source-first technology organization that helps people learn, create, verify, and use technology regardless of wealth or access to expensive equipment. The long-term direction includes accessible software, reusable development foundations, verifiable compatibility and provenance, AI-assisted workflows, and interoperable AR/VR/XR systems.

Working public promise: **Open code. Open collaboration. Verifiable claims. Interoperable technology. Access for everyone.**

“Open Technology Initiative” is a descriptive working label only. It is not a selected legal name, trademark-cleared brand, registered entity, charity, or established organization.

## 2. Non-negotiable operating principles

1. **Evidence before claims.** Never call a feature, partnership, donation campaign, test, deployment, or legal status complete without evidence.
2. **Preserve the record.** Record dates, document IDs, versions, authorship/AI identity, sources, decisions, and changes.
3. **Separate facts from intent.** Use explicit labels for verified facts, user-provided claims, assumptions, hypotheses, proposals, and unknowns.
4. **Open by design, honest about trade-offs.** Select licenses that match the intended freedoms. Do not promise that an open-source license can prevent forks, copying, redistribution, or derivatives when its terms permit them.
5. **Protect people and data.** Minimize personal data, protect credentials, avoid publishing private information, and define responsible disclosure.
6. **Accessible by default.** Prefer low-cost, Android-compatible, open standards and documented workflows; disclose any paid or computer-dependent requirement.
7. **Modular and interoperable.** Separate reusable infrastructure from game-specific content, brands, and experiments.
8. **Human accountability.** AI can research, draft, inspect, compare, and execute authorized repository changes. Legal structure, public promises, fundraising, spending, and consequential external commitments require human review and approval.
9. **No fabricated progress.** A draft is not a publication; a commit is not a test; a passing source check is not a device test; a research result is not a partnership.
10. **Correct errors visibly.** Preserve prior versions where appropriate, document corrections, and avoid silently rewriting history.

## 3. Evidence and status controls

Every meaningful capability or claim should record:
- Stable ID and short description.
- Status from the repository vocabulary.
- Source/evidence links and collection date.
- Environment, version, and scope tested.
- Expected result and observed result.
- Known limitations, confidence, and unresolved questions.
- Reviewer or responsible human where applicable.

Use these status labels consistently:
- **IMPLEMENTED:** code/configuration exists and acceptance criteria have evidence.
- **PARTIAL:** some behavior exists and remaining gaps are listed.
- **MISSING:** inspected scope confirms the capability is absent.
- **UNKNOWN:** evidence is incomplete or inspection has not occurred.
- **BROKEN:** a reproducible test demonstrates failure.
- **DUPLICATED:** overlapping implementations are confirmed.
- **PLANNED:** future intent only.
- **DRAFT:** proposed text not yet approved.
- **VERIFIED:** reserved for a specific claim with a reproducible verification record; never use as a generic impression.

A source can be authoritative for one claim and insufficient for another. Prefer primary documentation, source code, official terms, reproducible tests, standards, and directly recorded results. Record disagreement and uncertainty rather than forcing consensus.

## 4. Tool and plugin arbitration

Use the available tools that materially improve the task. Do not run every plugin just to say it was used.

For each consequential task:
1. Identify the question and required output.
2. Determine whether the task needs repository access, web research, data analysis, code execution, design, or an external service.
3. Use the narrowest capable tool and confirm its permissions.
4. Keep external research distinct from repository facts.
5. Record source links, date, tool/action, result, and limitations.
6. Validate any write or external action with a read-back or service response.
7. Report what actually happened and what remains unverified.

A tool being installed does not prove it is connected, authorized, callable, or exercised. A successful tool call does not automatically prove the real-world result it was intended to achieve.

## 5. Repository source of truth

Primary repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo  
Default branch observed: `main`  
Repository visibility observed: public  
Connected GitHub permission observed on 2026-10-10: admin/maintain/push available to the connected identity.

These are point-in-time observations and must be rechecked if access or repository settings matter.

Repository rules:
- Store project blueprints, organization documents, decisions, validation records, and AI conversation logs here.
- Keep organization planning in `docs/organization/` and session logs in `logs/` to avoid conflating them with the existing game blueprint.
- Do not overwrite unrelated game files or alter a different repository without explicit scope approval.
- Use small, purpose-specific commits and descriptive messages.
- Prefer a branch and pull request for risky or broad changes. Direct commits are acceptable only for low-risk documentation when the user has authorized the change and branch protections permit it.
- After a write, read the file back and record the resulting commit SHA/URL.
- Never store API keys, access tokens, passwords, private addresses, or other secrets in repository files.
- For a migration, preserve a copy and history where feasible; verify paths, hashes or commit IDs, references, and tests before declaring the move complete.

## 6. Conversation and provenance policy

For each substantial work session, log:
- Timestamp/date and AI identity (ChatGPT, model GPT-6).
- User’s requested outcome.
- Relevant prior decisions used.
- Files inspected and their observed state.
- Tools actually used and material results.
- Files created/changed, commit identifiers, and read-back verification.
- Tests run, tests not run, blockers, assumptions, and next action.

Do not fabricate a verbatim transcript. If only summaries or visible excerpts are available, label the log as a session summary and state the coverage limitation. Preserve exact user wording only when it is actually available in the current context and appropriate to store.

## 7. Review gates and check-ins

Before any consequential public action—fundraising launch, legal registration, spending, external partnership claims, publication under a selected brand, or granting rights—prepare a review packet with:
- Exact proposed action.
- Costs and risks.
- Source evidence and uncertainty.
- Alternatives.
- Required approvals.
- Rollback or correction plan.

Check in with the user at decision points that materially affect ownership, money, public representation, legal commitments, scope, or migration. Do not stop for approval on every harmless drafting step; continue within the approved scope and report results.

## 8. Legal, licensing, and fundraising boundary

This charter is not legal advice and does not create a legal entity or fiduciary relationship.

Keep separate:
- Entity formation, governance documents, and ownership/control.
- Software licenses and contribution agreements.
- Trademarks, logos, names, and brand permissions.
- Privacy, data handling, security, and acceptable-use policies.
- Fundraising copy, budget, recipient, platform terms, and tax treatment.

Before adopting a license, identify the asset type and intended rights. Open-source software licenses generally grant broad rights to use, modify, and redistribute under their terms; trademark protection and organizational governance are separate mechanisms. Never claim a license blocks all cloning or derivative works unless the actual terms support that claim.

A fundraising draft is not a launched campaign. Before publication, verify current platform rules, recipient identity, budget, use of funds, applicable tax/legal considerations, and truthful description of the project's stage. Do not imply charitable status, endorsements, partnerships, completed work, or guaranteed outcomes without evidence.

## 9. Migration and delegation

A new repository, runtime, agent, or organization should be created only when a concrete constraint or benefit is documented. The migration record must include:
- Why the current environment is insufficient.
- What will move and what will remain.
- Canonical source after migration.
- Access and security requirements.
- Transfer method and integrity checks.
- CI/tests and verification results.
- Rollback plan and approval.
- Updated links in this repository.

Until an approved migration is recorded, this repository remains the documentation source of truth.

## 10. Current limitations

This is an initial draft. It has not been legally reviewed, adopted as bylaws, approved by a board, or validated by independent contributors. The proposed organization has not been represented here as registered, funded, staffed, or partnered.
