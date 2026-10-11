# XR Component Evidence Matrix

Document ID: ORG-XR-EVIDENCE-001
Version: 0.1.0-draft
Status: PARTIAL — candidate records exist; no component has been approved for reuse
Created: 2026-10-11 (America/New_York; exact time not independently captured)
Prepared by: ChatGPT — GPT-6
Session record: logs/AI_CONVERSATION_LOG.md
Canonical repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo
Predecessors: docs/organization/DECISION_REGISTER.md; docs/organization/GAP_AND_CONFLICT_REGISTER.md; docs/organization/ASSET_RIGHTS_INVENTORY.md
Next document: docs/organization/ASSET_RIGHTS_INVENTORY.md
Supersedes: None

## Rule

Compare candidates per component. Do not automatically choose the newest commit. Evaluate provenance, license and reuse rights, target engine/plugin versions, automated test/build evidence, and Quest 3S runtime evidence. Keep older, better-tested alternatives. No candidate is cleared for copying by this matrix alone.

## Initial candidate records

| ID | Candidate | Immutable reference and date | License evidence | Compatibility / test evidence | Status |
|---|---|---|---|---|---|
| XR-CAND-0001 | Startup active XR baseline | [README](https://github.com/0SwiftKnightX/Startup/blob/main/README.md); latest commit returned by query: [6f56ad308fcf8d6f15d40a03beddfefdf8201f2a](https://github.com/0SwiftKnightX/Startup/commit/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a), dated 2026-09-27T17:39:59Z | Fetch of root LICENSE path returned 404. This does not prove no other notices or licensing information exist. | README declares Godot 4.7.2-stable, OpenXR and Quest 3S. README reports local checks and an exploratory Quest run with hands/buttons working, while lobby/menu/playable scene and physical acceptance remain open. Not rerun in this pass. | Active baseline; exact compatibility and rights checks pending. |
| XR-CAND-0002 | XrGpt XR foundation | [README](https://github.com/0SwiftKnightX/XrGpt/blob/main/README.md); latest commit returned: [3a11c719224ed8619fd48f13071ff4423edab15f](https://github.com/0SwiftKnightX/XrGpt/commit/3a11c719224ed8619fd48f13071ff4423edab15f), dated 2026-09-28T21:49:52Z | Root LICENSE fetched and contains Apache License 2.0. Scope, notices, bundled add-ons and creative assets require separate inspection. | README contains dated work logs and multiple historical notes that runtime/Quest testing remained unverified. Exact engine/plugin versions need checking per component. | Candidate source for comparison; not automatically preferred or cleared for copying. |
| XR-CAND-0003 | GodotVR/godot-xr-tools | [Repository](https://github.com/GodotVR/godot-xr-tools) | Selected revision and license not verified in this pass. | Startup README describes this as an XR interaction reference; exact revision and compatibility not checked. | Reference only. |
| XR-CAND-0004 | GodotVR/godot-xr-template | [Repository](https://github.com/GodotVR/godot-xr-template) | Selected revision and license not verified. | Startup README references project initialization/export patterns; no direct test evidence captured. | Reference only. |
| XR-CAND-0005 | BastiaanOlij/godot-xr-flynn-demo | [Repository](https://github.com/BastiaanOlij/godot-xr-flynn-demo) | Selected revision and license not verified. | Startup README cites architecture and performance-aware structure; no direct test evidence captured. | Reference only. |
| XR-CAND-0006 | Malcolmnixon/godot-xr-tools-demo | [Repository](https://github.com/Malcolmnixon/godot-xr-tools-demo) | Selected revision and license not verified. | Startup README cites locomotion/traversal recipes; no direct test evidence captured. | Reference only. |

## First date comparison

The latest commit returned for XrGpt (2026-09-28T21:49:52Z) is later than the latest commit returned for Startup (2026-09-27T17:39:59Z). This is only a comparison of the returned commits, not proof that XrGpt has a newer or better implementation of any particular component. A later timestamp does not outweigh weaker testing or unresolved rights.

## Required fields for each component decision

- Component and acceptance criteria.
- Exact repository, path, immutable commit/release, and date.
- License file, applicable notices, and documented rights.
- Exact Godot and plugin/add-on versions.
- Automated test/build results with run URL, commit and status.
- Android export and Quest 3S install/runtime evidence, or UNKNOWN / NOT RUN.
- Older alternatives, known issues, compatibility changes, and selection rationale.
- Date checked, AI/reviewer identity, and remaining limitations.

## Conflicts and next steps

1. Startup license scope is unknown until relevant license and notice locations are checked.
2. XrGpt has a later returned commit, but its historical log includes unverified runtime/Quest stages; compare individual components.
3. A README target declaration is not equivalent to verified device acceptance.
4. A linked reference is not proof that source code is integrated or copied.
5. The names “Bastian Oleg” and “BastiaanOlij” have not been established as the same identity.
6. Search returned recent commits, not an independently audited complete history.

Next: inspect Startup reuse rules, project configuration, add-on versions and workflow evidence; then compare one specific XrGpt component with its Startup counterpart. Keep both source repositories unchanged.


## Targeted component comparison — pickup wrapper and inventory identity — 2026-10-11

### Exact files inspected

- Startup reference rule: [ai/REFERENCE_AND_REUSE_RULES.md](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/REFERENCE_AND_REUSE_RULES.md), blob SHA `7f8e957a6167c2d34e4a0e8f4f5f8d9c80ad1e76`. It explicitly requires checking the source license, preserving notices, recording exact provenance, verifying compatibility, and running Startup verification before reuse. It says Startup has no root LICENSE and that public visibility is not permission.
- Startup project configuration: [project.godot](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/project.godot). It declares Godot feature 4.7 and enables the vendored XR Tools plugin.
- Startup XR Tools plugin manifest: [addons/godot-xr-tools/plugin.cfg](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/addons/godot-xr-tools/plugin.cfg), blob SHA `ca0310f0a30e7740986b70a2feb39029c02796d1`, declares version 4.5.1.
- Startup interaction scene: [scenes/interaction_lab.tscn](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/scenes/interaction_lab.tscn), blob SHA `0f415266701454b38fd4c486911f2be4eb1c5f75`. The SoulBlock is a RigidBody3D that references the vendored XR Tools pickable script directly.
- Startup XR player script: [scripts/xr_player.gd](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/scripts/xr_player.gd), blob SHA `cecf673cce6f04f70e0926b20326c96e116adb96`. It reports `xr_active` only when OpenXR is initialized; otherwise it uses `desktop_fallback`. This is a source observation, not a runtime test.
- XrGpt project configuration: [project.godot](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/project.godot), blob SHA `385b09df9816d5027a3de6f448eeebd45c5e4459`. It declares Godot feature 4.6 and GL Compatibility.
- XrGpt procedural pickup wrapper: [gameplay/items/procedural_pickable.gd](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/gameplay/items/procedural_pickable.gd), blob SHA `32d00f0695b43bcba10925c09e477ab1ec49f28d`. It extends XRToolsPickable, tracks pickup lifecycle signals, binds an authoritative XRGptItemInstance, resolves catalog-backed item identity, and offers a return-to-inventory path.
- XrGpt XR Tools plugin manifest at the same immutable commit declares version 4.5.1. XrGpt root LICENSE contains Apache License 2.0; individual file scope and third-party content still require review.

### Comparison result

| Dimension | Startup | XrGpt | Consequence |
|---|---|---|---|
| Intended role | Active Quest-first project; simple pickable interaction scene | Reusable procedural-pickup bridge preserving inventory item identity | Related but not interchangeable implementations. |
| Godot target | project.godot feature 4.7; README declares Godot 4.7.2-stable | project.godot feature 4.6 / GL Compatibility | **Compatibility conflict:** do not transplant the XrGpt script without targeted API/import checks and validation under Startup's actual editor version. |
| XR Tools plugin manifest | 4.5.1 | 4.5.1 | Matching manifest version is useful evidence but does not establish all API/runtime compatibility. |
| Rights | Startup has no root LICENSE according to its reuse policy; the project-specific licensing/acceptance position needs an explicit decision | Root Apache-2.0 license observed; check path scope, third-party notices and source ownership | Do not copy yet. If considered, preserve Apache notice/license obligations and verify rights for every dependency/source portion. |
| Test evidence | README reports local checks; physical Quest acceptance still open | Historical README describes structural/static audits but multiple runtime/Quest stages remain unverified | Neither repository's general status substitutes for component-specific integration and device tests. |

### Current disposition

**Use XrGpt as a design/reference candidate only; no code-copy or migration decision is made.** The potentially useful design is its explicit bridge between XR pickable lifecycle and authoritative inventory identity. First decide whether Startup actually needs procedural inventory return; then define acceptance criteria, check ownership/Apache obligations and exact dependency scope, port only the minimum required concept/code if authorized, and run Startup source checks, Godot import/build, and Quest 3S feature tests. No source repository was changed.


## Follow-up source-chain inspection — 2026-10-11

**AI identity:** GPT-6. **Scope:** read-only source inspection at immutable XrGpt commit `3a11c719224ed8619fd48f13071ff4423edab15f`; no changes to Startup or XrGpt.

The procedural pickup wrapper is not a standalone feature. Its observed dependencies form this chain:

1. [`gameplay/items/item_definition.gd`](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/gameplay/items/item_definition.gd) — blob `3acd1695069852a1f46668f1aea2508a08f64cb4`; authored Resource definition, stable item ID, display/category/rarity, stack limit, ownership/trade flags, capabilities, optional attachment profile.
2. [`gameplay/items/item_catalog.gd`](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/gameplay/items/item_catalog.gd) — blob `a152f4eedb74d2da237ae2ce7e6b5f57fc5d92ac`; central static catalog currently preloads five definitions and exposes lookup/validation.
3. [`gameplay/items/item_instance.gd`](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/gameplay/items/item_instance.gd) — blob `97b84cf96ee57bbf3c4dbbb838cbd220d8241cce`; mutable runtime identity, definition ID, owner, quantity, durability, capabilities, and attachment identity.
4. [`gameplay/items/item_procedural_factory.gd`](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/gameplay/items/item_procedural_factory.gd) — blob `c356e8fca656e6f851a26e92688ce1a51f32ac56`; builds physical item variants from catalog definitions and attaches the procedural-pickable script.
5. [`gameplay/items/item_runtime.gd`](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/gameplay/items/item_runtime.gd) — blob `c4696b38e1ae8c4c01b87351a7dc07da307303d1`; resolves the instance through the catalog, spawns via the factory, checks rigid body/pickable/visual/collision and same-instance identity, then optionally adds the node to a supplied parent.
6. [`gameplay/items/procedural_pickable.gd`](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/gameplay/items/procedural_pickable.gd) — blob `32d00f0695b43bcba10925c09e477ab1ec49f28d`; bridges XR Tools pickup/drop/grab/release signals and can return the existing instance to inventory.
7. [`gameplay/inventory/inventory_controller.gd`](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/gameplay/inventory/inventory_controller.gd) — blob `9dbd74bd053d3bda15add4e43fe9d4bc388f9ed2`; checks catalog membership, local ownership and quantity bounds; registers instances into available slots and emits add/remove/return signals.

### What this comparison establishes

- XrGpt's differentiating capability is the **identity-preserving round trip** between an inventory-owned item instance and its procedural physical representation, not simply XR grabbing.
- A port would involve a dependency slice across definitions, catalog, instances, factory/runtime, inventory slots/controller, and input/placement flow. Copying only `procedural_pickable.gd` would leave unresolved class/API dependencies.
- Startup's reuse policy explicitly requires source-license and notice review, provenance, version compatibility, and post-integration verification. The targeted Startup search surfaced inventory/catalog concepts in its consolidated chat record, but did **not** establish whether a complete current inventory implementation exists. This search was not exhaustive.
- The inspected XrGpt project declares Godot feature 4.6, while the inspected Startup project declares feature 4.7. Both inspected XR Tools manifests say 4.5.1. This is not proof of compatibility.
- **Disposition:** design reference only; no code or assets cleared for copying. Before implementation, define whether Startup needs instance identity, inventory return, ownership checks, or only simple pick/drop. Then inspect Startup's current inventory-related files and CI before selecting a minimum migration slice.


## Startup tree cross-check — 2026-10-11

The repository tree endpoint was queried recursively for `0SwiftKnightX/Startup` at `main`; it returned commit `6f56ad308fcf8d6f15d40a03beddfefdf8201f2a` with `truncated=false`. The default branch resolved to the same commit already under review.

Within that complete returned tree, no project-owned inventory controller, item instance, item definition, or item catalog implementation file was found. The observed interaction implementation is narrower:

- [`scenes/interaction_lab.tscn`](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/scenes/interaction_lab.tscn), blob `0f415266701454b38fd4c486911f2be4eb1c5f75`, creates one `SoulBlock` rigid body using the vendored `addons/godot-xr-tools/objects/pickable.gd` script.
- [`scripts/interaction_lab.gd`](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/scripts/interaction_lab.gd), blob `0c84f821df9828b1f193f48c7dd5353b2cca4460`, handles pickup/drop and a quest-specific soul-selection → scan → transform → arena loop. It does not implement a general item catalog or inventory container.
- [`scripts/hero_state.gd`](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/scripts/hero_state.gd), blob `226397eb06e043374cedf6fd4c5913b3026d1780`, is a small quest state machine, not an item inventory.
- [`docs/INTERACTION_CONTRACTS.md`](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/docs/INTERACTION_CONTRACTS.md), blob `afae89135c154521861af0851310d20699347a04`, defines general grab/throw and UI interaction expectations but does not supply a catalog/inventory implementation.

**Updated comparison result:** At this exact Startup commit, the inspected game implements direct XR pick/drop for a specific interaction object, not XrGpt's reusable definition/catalog/instance/inventory round trip. That establishes an implementation difference at this commit; it does not by itself establish that the game needs an inventory feature. Keep XrGpt reference-only until the intended feature and acceptance criteria are explicitly scoped. Rights, Godot-version compatibility, and runtime/Quest verification remain unresolved.
