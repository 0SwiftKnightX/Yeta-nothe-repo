# Organization Master Use, Attribution, and Rights License (OMUARL)

Document ID: ORG-LICENSE-001  
Version: 0.1.0  
Status: DRAFT — discussion framework, not approved for legal use  
Created: 2026-10-10 (America/New_York; exact time not independently obtained)  
Prepared by: ChatGPT — GPT-6  
Session record: logs/AI_CONVERSATION_LOG.md  
Canonical repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo  
Predecessor: User-described permission-tier concept  
Next document: docs/organization/DECISION_QUESTIONNAIRE.md  
Supersedes: None — this is a new draft, not a recovered historical license  
Evidence state: Conceptual draft only; no legal review or enforceability determination

> Working framework, not legal advice or a final enforceable instrument. Before adoption, have qualified counsel review ownership, copyright, patents, trademarks, contract law, privacy, competition, and the chosen jurisdiction. Do not apply it retroactively to third-party or already-licensed material.

## 1. Core principle

Public visibility does not itself imply ownership, endorsement, or permission beyond applicable law and the license attached to an asset. Every asset must have an identifiable rights basis and a documented permission scope. Permissions may be granted only by the rights holder or an authorized representative, subject to existing licenses and non-waivable legal rights.

This principle cannot revoke permissions already granted under an applicable open-source or other license.

## 2. Separate asset classes

A repository may contain multiple classes; one root license must not imply identical rights for every file.

1. **Open-source software:** code released under a named OSI-approved license. That license governs; do not add an individual-approval gate to freedoms already granted.
2. **Source-available/controlled software:** visible for inspection but governed by separate terms. Do not call it OSI-compliant open source if restrictions fail the Open Source Definition.
3. **Creative/game content:** artwork, models, animations, music, narrative, characters, and level design, each with an explicit rights notice.
4. **Trademarks/branding:** names, logos, marks, and affiliation claims. Code permission does not automatically grant branding rights or imply endorsement.
5. **Documentation/data/evidence records:** explicit rights, provenance, and privacy review.
6. **Third-party/upstream materials:** governed by their actual licenses and notices. The organization cannot grant rights it does not possess.
7. **Confidential or personal information:** not licensed for public reuse merely because it appears in a record.

## 3. Proposed permission tiers

These tiers are proposals; no tier grants rights until the applicable terms are accepted by the authorized parties.

- **Tier 0 — Public viewing:** viewing/access only to the extent permitted by law and platform terms; no additional license implied.
- **Tier 1 — Evaluation:** limited internal evaluation of identified controlled assets; no public distribution or commercial exploitation unless expressly granted.
- **Tier 2 — Community contribution:** contributions under a stated contribution agreement and clearly identified license.
- **Tier 3 — Approved project use:** written grant for identified assets and a named project, listing modification, attribution, and distribution rights.
- **Tier 4 — Commercial/derivative use:** negotiated grant for specified commercial use, derivatives, redistribution, sublicensing, hosting, or other enumerated rights.
- **Tier 5 — Broad integration/partnership:** negotiated grant for broad integration, redistribution, sublicensing, or co-development, as expressly listed.

Each grant must identify assets, recipient, permitted acts, purpose, distribution, term, territory if relevant, fees, attribution, renewal, termination, and exclusions. A paid pathway may cover controlled assets or additional rights the organization owns or controls. Payment cannot override an upstream license or remove freedoms already granted.

## 4. Permission record

Each authorization should record: permission ID; agreement version; rights holder and approver authority; recipient; asset IDs/paths/hashes/versions; tier; permitted acts; prohibited acts where lawful; attribution; fee/payment terms; duration/territory; renewal and termination; treatment of existing copies/derivatives; third-party exclusions; effective date and acceptance evidence; amendments; and contact/dispute process.

Do not put signed contracts, personal information, or payment secrets in public Git history. Publish templates; store confidential signed agreements with appropriate access controls.

## 5. Competing and similar projects

The organization may authorize a third party to build a competing or substantially similar game using specifically licensed code or assets. The grant must say whether it covers code only, templates, original game content, derivatives, redistribution, sublicensing, commercial operation, replacement content, and branding. A code license does not automatically authorize use of protected art, music, stories, characters, trademarks, confidential information, or third-party materials. Any requirement to use different content must be defined and reviewed for enforceability.

## 6. Attribution and provenance

Preserve the notices required by each applicable license. Attribution does not transfer ownership or imply endorsement. Track upstream dependencies and their licenses before distributing builds. Contributor ownership and contribution permissions need a separate, explicit contribution agreement.

## 7. Open-source compatibility

- Preserve each component's existing license and required notices.
- Do not advertise approval-gated code as open source.
- Do not add terms that conflict with a license already granting recipients rights.
- A separate content license, trademark policy, or service agreement applies only to rights the organization controls and only where it does not contradict existing grants.
- Verify file-level notices and upstream license before redistribution or relicensing.

## 8. Enforcement and child-facing experiences

A final policy should specify a contact, evidence standards, notice and response process, reasonable cure opportunities where appropriate, appeal/dispute path, and proportionate remedies. It should not treat an automated record as a legal judgment.

For experiences intended for young children and older players, define age-appropriate design, data minimization, parental controls where applicable, user-generated-content moderation, reporting, accessibility, and platform compliance in separate policies. This section is not a child-safety or privacy policy.

## 9. Decisions required before approval

1. Actual rights holder and authority to license.
2. Governing law, jurisdiction, and dispute forum.
3. Which assets are open source versus controlled/source-available.
4. Whether dual licensing is appropriate.
5. Fee model and free community/evaluation pathway.
6. Derivative, redistribution, sublicensing, and competing-game permissions.
7. Attribution and branding rules.
8. Contributor agreement and external contribution handling.
9. Termination, cure, refunds, renewal, and existing derivatives.
10. Privacy, child safety, data, and user-generated-content duties.
11. Whether standard existing licenses are better for particular asset classes.
12. Legal review and public-release process.

## 10. Approval state

This draft itself grants no permission. Until an approved license is published with a clear rights holder and scope, existing repository and third-party licenses continue to govern their covered material. Do not replace an existing LICENSE file with this draft without an explicit decision and legal review.
