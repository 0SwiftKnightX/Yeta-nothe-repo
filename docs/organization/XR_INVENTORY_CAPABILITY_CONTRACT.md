# XR Inventory Capability Contract

- **Document ID:** ORG-XR-INVENTORY-CONTRACT-001
- **Version:** 0.1.0-draft
- **Status:** DRAFT — PROPOSED REQUIREMENTS, NOT IMPLEMENTATION AUTHORIZATION
- **Created:** 2026-10-11
- **AI identity:** GPT-6
- **Organization source of truth:** `0SwiftKnightX/Yeta-nothe-repo`
- **Related project:** `0SwiftKnightX/Startup`
- **Reference candidate:** `0SwiftKnightX/XrGpt` at commit `3a11c719224ed8619fd48f13071ff4423edab15f`
- **Predecessors:** `XR_COMPONENT_EVIDENCE_MATRIX.md`, DEC-019 in `DECISION_REGISTER.md`
- **Evidence limitation:** This is a proposed contract based on source inspection and planning. No Godot build, automated test, Android export, Quest 3S runtime test, or legal review was performed for this document.

## 1. Purpose

Define a small, engine-version-aware contract for connecting physical XR interactions to game item identity without copying an implementation before requirements, rights, and compatibility are established.

The contract separates:
1. A physical XR object that can be grabbed or released.
2. A logical item identity and its definition.
3. A holder/owner such as a world, inventory, equipment slot, or temporary interaction.
4. A transaction that moves an item between holders.
5. Presentation and XR input, which must not become the source of truth for item identity.

## 2. Proposed delivery stages

### Stage 0 — Preserve existing behavior

- Keep Startup's current SoulBlock pickup and quest loop unchanged.
- Do not add a general inventory dependency merely because XrGpt has one.
- Preserve existing scene flow and current Quest controls.
- Any later changes must be isolated, reviewable, and reversible.

### Stage 1 — Minimal item identity contract (proposed first implementation slice)

- Every managed item has a stable, unique instance ID distinct from its definition/type ID.
- A definition describes shared item properties; a runtime instance describes one actual item.
- One instance can have at most one authoritative holder at a time.
- A physical XR node is a representation of an instance, not the instance's only identity.
- Pickup and release change physical interaction state; they must not silently duplicate or destroy logical items.
- Moving an item into inventory must detach or deactivate its world representation only after the inventory accepts the same instance.
- A failed transfer must leave the item in its previous valid holder and must not create a duplicate.
- Missing definitions, invalid IDs, invalid quantities, and invalid holder transitions must fail explicitly and safely.
- Keep this stage independent of a particular wrist-UI layout.

### Stage 2 — Inventory containers and rules (only if required)

- A container exposes capacity and available slots.
- Add/remove/move operations validate before committing state.
- Quantity and stack limits come from the item definition, not visual node state.
- A move between slots is atomic: success has one resulting location; failure preserves the prior state.
- Ownership, trading, equipment eligibility, and item capabilities are explicit policy fields, not inferred from node names.
- UI is a view/controller of inventory state; UI visibility or animation must not be authoritative.

### Stage 3 — Persistence and gameplay integrations (deferred)

- Save/load uses stable IDs and versioned data, not scene-node paths as permanent identity.
- Missing or changed definitions during load produce a recoverable validation result.
- Equipment, crafting, trading, world placement, multiplayer authority, and save migration each require their own contracts and tests.
- Do not implement these features in Stage 1 by assumption.

## 3. Required invariants

| ID | Invariant | Acceptance evidence required |
|---|---|---|
| INV-001 | A managed item has one stable instance ID. | Automated test creates an instance and verifies ID uniqueness. |
| INV-002 | Definition ID and instance ID are different concepts. | Tests prove multiple instances may share one definition without sharing identity. |
| INV-003 | One item cannot be authoritatively held by two containers/owners at once. | Duplicate-transfer and conflicting-holder tests. |
| INV-004 | Failed transfer does not lose or duplicate an item. | Failure-path tests for full container, invalid target, and rejected ownership. |
| INV-005 | World representation and logical item state remain synchronized. | Spawn, pickup, drop, store, and return lifecycle tests. |
| INV-006 | Unknown definitions and invalid quantities fail safely. | Negative tests and explicit error reporting. |
| INV-007 | XR input remains an adapter, not the item authority. | Tests exercise the item contract without a live headset/controller. |
| INV-008 | Existing Startup quest-state transitions remain unchanged unless separately approved. | Regression checks for selection, scan, transform, arena entry, and lobby reset. |
| INV-009 | Scene reload or application restart does not claim persistence until Stage 3 exists and is tested. | Explicit non-persistence declaration for earlier stages; save/load tests only when implemented. |
| INV-010 | The design can be tested on desktop/headless test paths without claiming that this proves Quest compatibility. | Test report states environment and limitations separately. |

## 4. Initial scope boundaries

**In scope for Stage 1 proposal:** item definition identity, runtime instance identity, one authoritative holder, physical-world representation, and safe transfer outcomes.

**Not automatically in scope:** inventory UI, wrist menu, item grids, Digi-Cube tiers/capacity, equipment, crafting, trading, multiplayer replication, save/load, monetization, or content licensing. These must be separately mapped to game requirements and their own acceptance criteria. Existing game-specific design requirements should be preserved, not silently replaced by this generic contract.

## 5. Compatibility and reuse gates

Before implementing or porting any code:

1. Record the exact Startup commit and target files.
2. Confirm the target Godot version and actual project import/build path.
3. Review the source and notices for each proposed reused file, including third-party boundaries and dependencies.
4. Resolve whether the work is a fresh implementation from the contract or a reuse of XrGpt code. Do not blur the distinction.
5. Define acceptance tests for every applicable invariant above.
6. Run source-level checks and the relevant automated tests.
7. Build/export for Android ARM64 and test on Meta Quest 3S before describing the result as Quest-verified.
8. Record test commands, tool versions, output, date/time, source commit, and unresolved failures.

XrGpt's root Apache-2.0 license and its later commit date are not, by themselves, proof that every dependency is clear to copy or that its Godot 4.6 project is compatible with Startup's Godot 4.7 project.

## 6. Proposed first acceptance slice

The smallest useful vertical slice to consider is:

1. Create one item definition and two distinct runtime instances from it.
2. Spawn one instance as a physical XR pickable.
3. Exercise pickup and release without changing its instance ID.
4. Transfer that same instance into a simple in-memory container.
5. Reject a second transfer of the same instance while it is already held.
6. Return the same instance to the world without creating a second instance.
7. Verify failure paths and preserve Startup's existing SoulBlock/quest flow.

This is a **proposal for review**, not an instruction to implement now. If the game does not yet require inventory return, Stage 1 should be reduced rather than adding unnecessary architecture.

## 7. Open decisions

- Is Stage 1 identity + pickup/drop only, or must inventory return be included?
- Does the first container need slots/capacity, or can it be a minimal in-memory holder?
- Is persistence needed in the first playable milestone?
- Which existing Startup verifier should be extended, and what new tests are needed?
- Does the team choose fresh implementation from this contract or later approve a rights-reviewed code port?

Until these decisions are recorded, implementation status remains **PLANNED / UNKNOWN**, not implemented or verified.

## 8. Change control

Amend this contract additively with a dated note. Changes to scope require a decision-register entry. This document does not grant license rights, change any source repository, or authorize migration.
