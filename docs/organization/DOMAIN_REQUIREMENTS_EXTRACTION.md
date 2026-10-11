# Domain Requirements Extraction — Game, XR, and AI-Native Concepts

Document ID: ORG-DOMAIN-REQ-001  
Version: 0.1.0-draft  
Status: PARTIAL — extracted from the reviewed consolidated record and historical XrGpt handoff; not an exhaustive transcript extraction  
Created At: 2026-10-11 (exact clock time not recorded)  
Prepared By: ChatGPT — GPT-6  
Canonical Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo

## 1. Source basis and interpretation

- [Startup consolidated game/system record](https://github.com/0SwiftKnightX/Startup/blob/6f56ad308fcf8d6f15d40a03beddfefdf8201f2a/ai/XR_GAME_SYSTEM_CONSOLIDATED_CHAT_RECORD.txt), blob `60ca5d203ebcbe21c0447cfdab1e165327e16565`.
- [XrGpt handoff, 2026-09-28](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/XRGPT%20handoff%202026-09-28%2017-48%3A00.md), blob `451029114591ce8bed5f40c50569fd85f882ca27`.
- [XrGpt production architecture contract](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/docs/PRODUCTION_GAME_ARCHITECTURE.md), blob `6e4932062191c418695ed18059ccbbc7808c1710`.
- [XrGpt vector conversation log](https://github.com/0SwiftKnightX/XrGpt/blob/3a11c719224ed8619fd48f13071ff4423edab15f/admin/vector_conversation_log.txt), blob `03774ceeb15e6fc0d6a699945b8a7ac72275c0c8`.

These records are evidence of documented intent and historical statements, not proof of implementation, completeness, feasibility, current priority, or license permission. Requirements are preserved here so they can later be organized into the correct project blueprints and contracts.

## 2. Persistent XR world and player loop

- The broad game vision is a persistent XR world supporting exploration, resource gathering, creatures, workshops, structures, vehicles, and persistent systems.
- Vehicle building is a foundational system, not just a decorative creator mode.
- Intended vehicle loop: enter build area → open player-facing catalog → select part → place/rotate/align/snap → assemble functional components → save blueprint → load/edit/rebuild → summon → operate.
- Keep Build Mode and Play Mode distinct.
- The initial Startup playable slice is much narrower: lobby/menu → one interaction lab → canonical XR origin and headset/controllers → pointer → grip pickup → trigger/scan → transformation → one arena target → return without stale state. The wider game requirements must not be mistaken for first-slice acceptance criteria.
- Quest 3S is the intended physical XR acceptance target in the source records. Android phone or desktop tests cannot prove Quest tracking, controller behavior, comfort, latency, or performance.

## 3. Construction and geometry requirements

- Preserve the user-defined scales exactly as named: **0.001 m³, 0.1 m³, and 1 m³**. Do not silently reinterpret them as cube dimensions or ordinary volume measurements.
- Separate the **construction envelope** (spatial contract) from the mesh/geometry contained inside it.
- Allow arbitrary geometry inside an envelope, including curved automobile body panels; vehicle bodies should be decomposable into reconfigurable pieces.
- Preserve the named shape families: slopes, convex/concave forms, rounded/sphere forms, diamond forms, prism/eight-sided prism-like forms, rectangles, half/quarter pieces, elbows/connectors, and vehicle-specific body pieces.
- Preserve the user-defined word **“chestahedron”** verbatim until clarified; do not silently replace it.
- Half and quarter pieces must align predictably with larger and smaller pieces.
- Occupancy is explicit and deterministic; shapes may occupy selected subregions of an envelope.
- Candidate block-definition fields: stable definition ID, scale, envelope dimensions, occupied cells, attachment faces/points, allowed rotations, collision representation, compatibility rules, physics metadata, and geometry reference.
- The catalog should include scale selection, categories, thumbnails, practical 3D preview, place/add action, and player-created pieces.
- CREATE BLOCK should select scale/envelope, author geometry, define occupancy and attachment faces, preview/test, and save to catalog. MY BLOCKS should expose user-created pieces.
- Start with useful procedural primitives rather than making the catalog depend on external asset hunting.
- A historical note mentions “9×9×9 relationships” without sufficient context to infer the exact intended grid rule. Preserve as an unresolved source item, not an invented specification.

## 4. Blueprint and vehicle requirements

Blueprints preserve **construction intent**, not just a flattened mesh. Candidate data includes blueprint identity/version; part instances and definition IDs; scale; grid/envelope position and orientation; occupancy; attachment relationships; custom geometry and material references; functional metadata; and physics metadata.

Required blueprint operations include deterministic save/load, edit, validation, rebuild, migration, and summon.

Vehicles should be physical assemblies. Their aggregate simulation may need component mass, center of mass, collision, inertia, wheels, suspension, contact friction, engine/motor force, steering, propellers/other propulsion, and helm/control station. Vehicle parts may expose properties/capabilities such as HP, defense, engine, wheels, propeller, helm, thermal shielding, and devices. These are requirements to formalize, not implemented claims.

## 5. Avatar, hands, locomotion, and UI

- Keep tracking/IK skeleton separate from physical player-body simulation (collision, mass, gravity, velocity, grounding, friction/contact).
- The desired arm chain is HMD/head → neck → torso/chest → shoulder → upper arm → elbow → forearm → hand/controller target. Controller pose is a hand target, not a replacement for the entire arm.
- IK requirements include shoulder estimation/calibration, preferred elbow bend/pole, segment lengths, joint limits, collision avoidance, smoothing, and prevention of elbow flips and visible clipping.
- Preserve a future extension path for pelvis/hips, knees, feet, torso lean, sitting/crouching, reaching, climbing, and vehicle seating.
- Physical hand interaction may support pulling, pushing, climbing, launching/jumping, stabilization, vehicle entry, and environmental interaction.
- The broader **Hero Module** is a wrist-mounted holographic interface. Concepts include project/open, grab/release, close, minimize, expand, follow, pin, visibility, resizing, inventory, equipment slots, and accessory slots.
- “Expand” means more inventory capacity/space, not merely larger icons.
- Equipment regions listed historically: head, shoulders, back, arms, chest, waist, legs, feet, hands, accessories. Initial accessory count starts at one and may grow.
- Digi-Cube concepts include tiers 1–5, level caps such as 25/100, and rare/legendary/mythic/special rarity categories. The mapping between tiers and caps is undefined and must not be invented.

## 6. Inventory, ownership, and transactional behavior

The XrGpt handoff documents this conceptual chain: ItemDefinition → ItemCatalog → Creative Item Index → ItemInstance → Procedural Factory → Physical Object → XR Pickup → World Placement/Drop → Re-Pickup → Inventory Return.

Extracted invariants:
- Definitions are authored data; runtime instances carry mutable state and identity.
- Containers are authoritative storage; UI/read models observe state and request actions rather than directly mutating authoritative state.
- The same instance should survive pickup/drop/place/re-pickup/return; do not replace it with a duplicate.
- Transfers and equipment actions should validate before commit.
- If a transfer, placement, or visual replacement fails, preserve the previous valid state and ownership.
- A failed action must not leave duplicate ownership, lost items, stale attachment state, or partial visual replacement.
- BLACK CUBE was a dedicated physics/interaction test fixture, not a universal weapon architecture.
- This document records the intent only. It does not authorize copying the XrGpt implementation.

## 7. World architecture and deferred scope

The historical XrGpt handoff separates world environment state (WorldEnvironment, day/night, weather, atmosphere), spatial structure (regions, biomes, terrain, coordinates), level geometry, gameplay spatial data (spawn/resource/interaction/navigation points), and streaming/persistence.

World architecture coordinates the world; level-building systems construct physical pieces. Region/biome definitions should use stable IDs and validate dimensions/normalized values.

That handoff explicitly deferred full terrain/planet generation, streaming, weather simulation, navigation rewrite, full biome simulation, persistence, economy, creature spawning, NPC AI, quests, and multiplayer. These are historical scope notes; the current Living Continuum blueprint must determine whether and when they return to scope.

Other architectural cautions: presentation/HUD should not own travel/service logic; generic targeting should not rely on arbitrary world-axis values; vehicles need explicit physical ownership/assembly; VR + flat support alone does not establish multiplayer cross-play. Cross-play requires explicit network authority, replication, synchronization, session architecture, input abstraction, and state ownership.

## 8. AI-native computing / autonomous development intent

Historical Startup and XrGpt records describe a future AI-native computing system in which the user expresses intent and the system coordinates apps, APIs, tools, state, planning, execution, verification, memory, and human escalation.

Preserved principles:
- User retains authority over scope and STOP decisions.
- A STOP request means halt; automatic recovery must not reinterpret STOP as permission to continue.
- Capabilities, connections, permissions, dependencies and state should be explicit.
- A worker reads current state, claims one authorized task, performs it, verifies, records actual outcomes, and either continues within authority or escalates.
- Failure paths include BLOCKED → HUMAN_REQUIRED and FAILED → RETRY or ESCALATE, subject to explicit policy.
- A normal free web chat is not automatically a callable API; disclose actual dependencies, quotas, credentials, hardware and paid services.
- Persistent memory/conversation archives must have provenance and coverage statements.
- Autonomy does not grant permission for unapproved consequential actions.

## 9. Validation and status requirements

- Distinguish static inspection, source verification, engine import, headless runtime, CI, Android export/package checks, phone smoke tests, and physical Quest acceptance.
- A checklist is not evidence until executed.
- A parser pass, successful APK build, or desktop launch does not prove physical Quest behavior.
- Acceptance criteria must match the feature: construction includes catalog, selection, placement, rotation, snap, occupancy, attachment, save/load/rebuild and physical behavior; avatar includes tracking, IK and collision; XR includes headset/controllers/input/interaction/comfort/performance.
- Test real contracts; do not weaken verifiers merely to get a green result or create tests solely to induce failure.
- Keep historical status words tied to the source date and exact evidence. XrGpt's Godot 4.6.1 baseline must not be merged with Startup's Godot 4.7.2 baseline.

## 10. Items still requiring decisions or further extraction

- Exact mapping from the three named construction scales to envelope dimensions and grid coordinates.
- Meaning of the historical 9×9×9 note.
- Exact Digi-Cube tier-to-level-cap relationship.
- Which broader game requirements belong to the first playable milestone versus later milestones.
- Which source records contain additional requirements not yet extracted.
- Which historical tool/provider recommendations remain valid today.
- Full comparison of Startup's checked implementation checklist with its validation report and next plan.
- Full review of XrGpt README and dated handoff status claims against source and CI evidence.

## 11. Destination and authority

This is a newly authored requirements extraction record in Yeta-nothe-repo. It preserves source intent without adopting source implementation methods. It is not a license document, legal conclusion, code migration, implementation authorization, or verification report. Startup and XrGpt remain unchanged.
