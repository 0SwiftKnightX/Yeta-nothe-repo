# Asset and Rights Inventory

Document ID: ORG-ASSET-RIGHTS-001
Version: 0.1.0-draft
Status: PARTIAL — initial inventory framework; asset-level rights not yet established
Created: 2026-10-11 (America/New_York; exact time not independently captured)
Prepared by: ChatGPT — GPT-6
Session record: logs/AI_CONVERSATION_LOG.md
Canonical repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo
Predecessors: docs/organization/DRAFT_LICENSE_FRAMEWORK.md; docs/organization/DECISION_REGISTER.md; docs/organization/GAP_AND_CONFLICT_REGISTER.md
Next document: docs/organization/XR_COMPONENT_EVIDENCE_MATRIX.md
Supersedes: None
Verification status: Initial rows based on exact files previously or currently fetched; not a full asset audit

## Purpose and governing rule

This inventory determines which rights and license model may apply to each identifiable asset. It does not itself grant rights, prove ownership, or approve the draft license.

Classify rights separately for software source, dependencies, game content, 3D models, textures, audio, narrative, datasets, documentation, trademarks/branding, and contributions. A repository-wide LICENSE may not cover every bundled or generated asset; inspect file-level notices, upstream licenses, provenance, and contribution history before deciding.

**Do not assign a final license to an asset when ownership, source, or upstream terms are unknown.** Use UNKNOWN and keep the item open. Preserve existing license obligations. Genuine open-source code must not be subjected to extra approval gates that contradict its chosen license.

## Status vocabulary

- **OBSERVED** — exact repository/file or license was fetched.
- **PARTIAL** — some provenance/rights evidence exists, but scope or ownership is incomplete.
- **UNKNOWN** — not inspected or evidence is insufficient.
- **CONFLICTED** — sources or proposed terms may conflict.
- **CLEARED FOR PROPOSED USE** — specific use has documented rights evidence; this is not a legal opinion.
- **NOT CLEARED** — do not copy, redistribute, relicense, or commercialize until resolved.

## Initial inventory

| Asset ID | Asset / scope | Canonical source | Observed license / provenance | Proposed rights class | Status | Next action |
|---|---|---|---|---|---|---|
| ASSET-0001 | Yeta-nothe-repo organizational documentation and OTECM artifacts | https://github.com/0SwiftKnightX/Yeta-nothe-repo | Root LICENSE was observed in the earlier repository inspection as MIT, copyright 2026 0SwiftKnightX. Exact scope across all contributed/bundled files has not been audited. | Code and documentation must be separated by actual file provenance; do not assume all third-party content is owned by the repository owner. | PARTIAL | Inspect root LICENSE, notices, dependency files, generated artifacts, and file-level headers; preserve upstream licenses. |
| ASSET-0002 | Startup XR game source and scenes | https://github.com/0SwiftKnightX/Startup | README fetched 2026-10-11; exact root path LICENSE returned 404. This only establishes no file was returned at that exact path, not that no licensing notice exists elsewhere. README points to a Reference and Code Reuse Rules document. | UNKNOWN pending exact license/notice and per-asset provenance review. | UNKNOWN / NOT CLEARED FOR COPYING | Fetch ai/REFERENCE_AND_REUSE_RULES.md, search exact license paths/notices, inspect repository tree and upstream dependencies. Do not infer permission from public visibility. |
| ASSET-0003 | XrGpt XR source and included materials | https://github.com/0SwiftKnightX/XrGpt | Root LICENSE fetched; Apache License 2.0 text. README contains dated GPT work logs. Repository-level license does not automatically establish rights for every bundled third-party asset. | Potential Apache-2.0-covered source, subject to scope, notices, and third-party exclusions. | PARTIAL | Inspect NOTICE files, file headers, addon/vendor directories, generated assets, commit provenance, and asset-specific licenses before selecting files. |
| ASSET-0004 | XrGpt generated creature assets (Goblin, Orc, Troll) | XrGpt commits 29f975f527135c6dcb5c2955221a0425c50a53c8 and 09c35efba8dacf299e143258c693573ebc7495dc | Commit search reports generated visual assets and later editable Blender source files on 2026-09-28; asset-specific rights/authoring inputs have not been inspected. | Game/creative asset; ownership and any source-model/prompt/reference dependencies UNKNOWN. | UNKNOWN / NOT CLEARED FOR RELICENSING | Inspect asset manifests, source files, generator provenance, third-party inputs, and applicable notices. |
| ASSET-0005 | Godot XR Tools and other upstream XR references used by Startup | References include GodotVR/godot-xr-tools, GodotVR/godot-xr-template, BastiaanOlij/godot-xr-flynn-demo, and Malcolmnixon/godot-xr-tools-demo as named in Startup README | These are references, not proof of copied code. Exact candidate commit/release and license have not yet been verified in this inventory. | Third-party/upstream; retain upstream identity and license. | UNKNOWN / NO COPY AUTHORIZED BY THIS RECORD | For each proposed component, inspect exact upstream repository, immutable revision, license, notices, compatibility, and actual copied-code diff. |
| ASSET-0006 | Game trademarks, project names, logos, characters, narrative, and brand identity | Multiple repositories / future asset registry | Ownership and intended permission scope not yet inventoried. | Separate trademark/branding and creative-content permissions may apply. | UNKNOWN | Create named asset records, authorship/source, first publication, ownership/assignment evidence, and desired use permissions. |
| ASSET-0007 | XrGpt procedural pickup wrapper | [gameplay/items/procedural_pickable.gd at commit 3a11c719224ed8619fd48f13071ff4423edab15f](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/gameplay/items/procedural_pickable.gd) | XrGpt root LICENSE is Apache-2.0; exact file is present at the immutable commit. Confirm third-party API/dependency boundaries and any file-specific notices. | Software source candidate; potential reuse requires compatibility and notice review. | PARTIAL / NOT CLEARED FOR COPYING | Check Apache obligations and scope; compare to Startup target Godot 4.7 vs XrGpt 4.6; approve only if needed and verified. |

## Required fields for every new asset row

- Stable Asset ID (never reuse).
- Asset name, type, and exact path(s).
- Canonical repository and owner/author where known.
- Source URL, immutable commit/release, and relevant date.
- Authoring method and upstream inputs (including third-party model/audio/image sources when applicable).
- Applicable license(s), exact license-file path, copyright/NOTICE attribution, and SPDX identifier only when verified.
- Ownership/authority evidence and any contributor/assignment agreement.
- Intended uses: modification, redistribution, commercial use, sublicensing, derivative works, and brand use.
- Dependency and compatibility constraints where software is involved.
- Status, confidence, verification date/method, unresolved conflicts, and approver for any restricted permission.
- Link to the corresponding decision and evidence record.

## Legal and policy conflict flags

1. **Open-source vs. controlled permission tiers:** do not apply a custom approval gate to freedoms already granted by an open-source license.
2. **Paid rights:** charge only for additional services or rights the organization actually controls; do not charge for a restriction it has no authority to impose.
3. **Dual licensing:** requires sufficient rights to offer each licensing option and may require contributor permissions or agreements.
4. **Third-party assets:** repository ownership, public visibility, or a commit by an account is not alone conclusive proof of copyright ownership.
5. **AI-generated assets:** do not assume a particular legal status; record generation inputs, human edits, source materials, and applicable platform terms.
6. **Child-facing game:** age-safety, privacy, moderation, and platform rules are separate from copyright licensing.

## Change control

Append new rows and status changes; do not delete prior entries. For each resolution, record the evidence URL/commit, date, reviewer, exact scope cleared, limitations, and any superseding decision. No asset is marked CLEARED FOR PROPOSED USE merely because a license file exists somewhere in the repository.

## Next action

Complete ASSET-0002 and ASSET-0003 targeted notice/provenance checks, then inventory the actual creative assets before selecting asset-specific terms. This is a scoped first pass, not a complete audit.


## Targeted license/provenance addendum — 2026-10-11

- Startup's [Reference and Code Reuse Rules](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/REFERENCE_AND_REUSE_RULES.md) explicitly states that Startup has no root LICENSE file and that source material must not be copied until the applicable license/permission is clear. It records MIT licenses for four upstream XR references as checked on 2026-09-27; those claims are a dated project record and have not been re-verified against current upstream commits in this pass.
- Startup's vendored XR Tools plugin manifest declares version 4.5.1. XrGpt's vendored plugin manifest also declares 4.5.1. This does not by itself establish that all vendored files are identical or that the two projects are fully compatible.
- XrGpt's project.godot at commit 3a11c719224ed8619fd48f13071ff4423edab15f declares Godot feature 4.6 and GL Compatibility. Startup's project.godot at commit 6f56ad308fcf8d6f15d40a03beddfefdf8201f2a declares feature 4.7. This is a concrete compatibility review requirement before porting XrGpt code.
- XrGpt's gameplay/items/procedural_pickable.gd at that immutable commit extends XRToolsPickable and connects pickup/drop/grab/release events to a catalog-backed item instance and inventory return. This is candidate code, not yet cleared for reuse. Record it as ASSET-0007 for future rights review; its parent repository LICENSE is Apache-2.0, but file-specific scope and third-party boundaries must still be confirmed.


### ASSET-0007 follow-up: dependency-scope evidence — 2026-10-11

**AI identity:** GPT-6. Read-only inspection at XrGpt commit `3a11c719224ed8619fd48f13071ff4423edab15f`. These are dependency references for rights review, not a grant of reuse permission.

The procedural pickup wrapper depends on the following source files, whose individual provenance, copyright notices, contribution history, and scope under the repository's Apache-2.0 root license have not been independently audited here:

| Path | Inspected blob SHA | Role |
|---|---|---|
| `gameplay/items/item_definition.gd` | `3acd1695069852a1f46668f1aea2508a08f64cb4` | Authored item definition Resource |
| `gameplay/items/item_catalog.gd` | `a152f4eedb74d2da237ae2ce7e6b5f57fc5d92ac` | Central definition catalog |
| `gameplay/items/item_instance.gd` | `97b84cf96ee57bbf3c4dbbb838cbd220d8241cce` | Runtime item identity/state |
| `gameplay/items/item_procedural_factory.gd` | `c356e8fca656e6f851a26e92688ce1a51f32ac56` | Procedural geometry/collision creation |
| `gameplay/items/item_runtime.gd` | `c4696b38e1ae8c4c01b87351a7dc07da307303d1` | Instance-to-world spawning and structural checks |
| `gameplay/items/procedural_pickable.gd` | `32d00f0695b43bcba10925c09e477ab1ec49f28d` | XR pickup lifecycle and inventory-return bridge |
| `gameplay/inventory/inventory_controller.gd` | `9dbd74bd053d3bda15add4e43fe9d4bc388f9ed2` | Inventory slots, ownership/quantity validation and events |

**Rights status remains NOT CLEARED FOR COPYING.** The root license is relevant evidence, but this inventory does not yet prove that every file is solely authored by the repository owner, has no third-party portions, or carries no path-specific obligations. Preserve license and notice obligations if later reuse is authorized.
