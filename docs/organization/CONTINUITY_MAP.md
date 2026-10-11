# Organizational Continuity Map

Document ID: ORG-CONTINUITY-001  
Version: 0.1.0  
Status: ACTIVE — initial evidence-backed map; coverage incomplete  
Created: 2026-10-10T22:58:00-04:00 (America/New_York)  
Prepared by: ChatGPT (GPT-6)  
Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo

## Purpose
This map connects prior projects, repositories, decisions, source material, and future work. It is intended to stop repeated foundation reviews from displacing implementation. The baseline has been inspected enough to proceed with documented gaps; repeat inspections only when a concrete change, risk, conflict, or verification need justifies them.

## Governing continuity rules
1. Yeta-nothe-repo is the current organizational umbrella and documentation source of truth. This supersedes the earlier unresolved question about whether it is only a temporary documentation home.
2. Preserve prior repositories in place. Do not delete, overwrite, rename, or bulk-migrate content as part of consolidation. Record purpose, state, provenance, relationships, and next action here.
3. Consolidate knowledge before code. Prefer inventories, links, source references, commit IDs, license records, and selective verified copies over blindly copying entire repositories.
4. Preserve upstream identity and license obligations. A fork, mirror, submodule, vendored copy, and independently authored implementation are different things.
5. No silent replacement. Clarifications and superseding decisions are additive, dated, attributable, and linked to the earlier record.
6. No invented completeness. Repository access or a README does not prove code is current, compatible, secure, or tested.
7. Use the smallest next action that produces durable progress. Do not repeat broad foundation inspection without a named question and an output that changes a decision or enables implementation.
8. Check in only when a decision materially changes scope, ownership, money, legal commitments, public claims, migration, or irreversible actions. Continue routine documentation and reversible low-risk tasks within scope.

## Continuity architecture

Yeta-nothe-repo — organizational umbrella and current source of truth
- Governance: operating charter, decision register, gap/conflict register, repository inventory, continuity map.
- AI session records: logs/AI_CONVERSATION_LOG.md; summaries must disclose coverage limitations.
- Evidence tooling: OTECM specification, schema, sample, validator, tests, CI.
- Game concept: docs/PROJECT_BLUEPRINT.md — The Living Continuum; PLANNED concept, not implementation evidence.
- XR/Godot family: Startup, XrGpt, Personal-quest-development-, godot-xr-tools, ProjectMythos, small XR experiments.
- Other projects: Mule-run-block-builder, GPT, Prompt-base, upstream forks and tooling repositories.

This is a logical map, not a claim that every listed repository has been fully inspected or every connection validated.

## Project relationship rules

### XR foundation and game implementation
- Startup is the current Quest-first XR game implementation repository, with a declared Godot 4.7.2-stable / OpenXR / Meta Quest 3S target. Its README reports local verifier checks, but also says the lobby/menu/playable scene and physical Quest acceptance remain open.
- XrGpt is an earlier XR foundation with extensive dated work-log entries and experiments. Treat it as a historical source of reusable ideas and code, not as automatically merged into Startup.
- Personal-quest-development- describes a unified XR project assembled from reference projects. Its README identifies Godot 4.7, OpenXR, XR Tools, OpenXR Vendors, and references including Startup. Its .gitmodules fetch returned empty; its actual structure and integration state still require a targeted audit.
- godot-xr-tools is a separately maintained XR Tools code repository/fork/reference. Confirm fork parent, license, local modifications, branch divergence, and compatibility before reuse.
- ProjectMythos is a separate Godot blueprint/summon vehicle workflow prototype. Preserve its scope and repository boundary; do not modify it just to consolidate documentation.
- Mule-run-block-builder is a browser-based construction sandbox. It may inform cross-project construction architecture but is not the same implementation as ProjectMythos or Startup.

### Game concept
- docs/PROJECT_BLUEPRINT.md describes The Living Continuum, a planned persistent open-world XR combat-sandbox MMORPG.
- This is a product vision and logical architecture overlay, not evidence that multiplayer, persistence, economy, world scale, or 128-player combat are implemented.
- Reusable platform modules and game-specific lore/assets must remain distinguishable.

### AI history and reusable standards
- The GPT repository README expresses an intent to preserve conversations from multiple AI services.
- Prompt-base expresses an intent to collect prompts and AI standards.
- Their full contents, export coverage, and history must be audited before claiming all prior conversations are preserved.
- Current session logs are summaries unless explicitly labeled as verbatim excerpts. Never represent a summary as a complete conversation export.

## Named developer/source attribution
The user identifies “Bastian Oleg” as the lead developer/source of XR environment code templates and says recent work is highly relevant. The accessible Startup README references BastiaanOlij/godot-xr-flynn-demo, a similar but not identical spelling. A targeted search in inspected repositories did not establish that these names refer to the same person. Identity and exact upstream repository must be confirmed before attributing code or assigning ownership. Until then, record this as user-provided context, not independently verified identity.

## Work routing
| Work type | Canonical home | Relationship rule |
|---|---|---|
| Organization-wide principles, inventories, decisions, continuity | This repository, docs/organization/ | Canonical organizational documentation |
| Cross-session AI work logs and handoffs | This repository, logs/ | Summaries disclose coverage limitations |
| The Living Continuum concept | docs/PROJECT_BLUEPRINT.md | Keep vision separate from implementation status |
| Active Quest-first game implementation | 0SwiftKnightX/Startup | Link and track here; do not duplicate blindly |
| Earlier XR interaction experiments | 0SwiftKnightX/XrGpt | Preserve history; selectively port only after audit |
| Separate vehicle blueprint/summon prototype | 0SwiftKnightX/ProjectMythos | Keep separate unless migration is approved |
| Unified XR composition/reference experiment | 0SwiftKnightX/Personal-quest-development- | Audit composition, references, and actual project state |
| Browser construction prototype | 0SwiftKnightX/Mule-run-block-builder | Separate implementation/reference |
| Prompts and AI standards | 0SwiftKnightX/Prompt-base | Inventory and link original sources |
| Conversation archive initiative | 0SwiftKnightX/GPT | Audit export coverage and preservation status |
| Shared evidence tooling | OTECM in this repository | Describe artifact and tested scope; do not imply truth automatically |



### Documentation consolidation pass — 2026-10-11

The following new destination records begin the source-to-destination continuity review:

- [Source Document Catalog](SOURCE_DOCUMENT_CATALOG.md) — source snapshots, paths, blob identities, and review status.
- [Document Restructure Map](DOCUMENT_RESTRUCTURE_MAP.md) — destination information architecture and conflict-resolution method.
- [Requirements and Provenance Ledger](REQUIREMENTS_PROVENANCE_LEDGER.md) — initial extracted invariants and unresolved source review.
- [Domain Requirements Extraction](DOMAIN_REQUIREMENTS_EXTRACTION.md) — detailed game/XR requirement preservation.
- [AI-Native Computing Requirements](AI_NATIVE_COMPUTING_REQUIREMENTS.md) — separate concept extraction from historical AI architecture records.

These records are explicitly partial. The source trees were enumerated recursively at pinned commits, but not every text file has been read or every requirement extracted. Continue source review and coverage mapping; do not treat the initial ledger as exhaustive.

## Immediate continuity priorities
1. Keep this map as the stable landing page for future sessions.
2. Maintain repository inventory with purpose, relationship, license, evidence reviewed, status, and next action.
3. Resolve gaps through GAP_AND_CONFLICT_REGISTER.md; do not repeat broad foundation reviews.
4. Inspect XR repositories selectively, starting with Startup and XrGpt, and compare named modules only.
5. Search available logs and exports for the exact historical license draft and conversation records.
6. Update this map only when relationships, statuses, or canonical destinations change.

## Evidence boundary
Repository metadata and README content were read through the connected GitHub integration on 2026-10-10. The inventory lists repositories visible to that integration at that time; it may not include inaccessible repositories, other owners' repositories, external services, private account data, or unexported ChatGPT conversations. No whole-repository clone, hash comparison, full history audit, license audit, or physical Quest test was performed in this mapping pass.