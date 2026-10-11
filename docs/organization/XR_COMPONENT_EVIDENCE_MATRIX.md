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
