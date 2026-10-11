# Project Blueprint: The Living Continuum
Document ID: GAME-BLUEPRINT-001
Version: 0.1.0-draft
Status: PLANNED — concept only; no game system is claimed implemented
Created: 2026-10-10 (UTC date)
Owner/originator: Travis Marshall
Prepared by: ChatGPT (GPT-6), using conversation context available in this session
Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo

## 1. What are we making?

Recommended descriptive genre: **Persistent Open-World XR Combat-Sandbox MMORPG**.

Short description: **Persistent XR Combat MMO**.

This means a persistent shared world; open-ended exploration; XR-native embodied interaction; a sandbox in which combat, crafting, creation, and social systems interoperate; and MMORPG-scale characters, progression, economy, professions, factions, and community.

Working project title: **The Living Continuum**.
Working genre phrase: **Continuum-Scale Sandbox MMO**.
These are draft labels, not claims of name uniqueness, domain availability, trademark clearance, or final approval.

### How to create the final coined term
1. State the irreducible identity: an embodied, persistent, creator-extensible digital civilization where combat, crafting, social life, and world-building share one simulation.
2. Select 2–3 roots such as continuum, world, embodiment, forge, saga, nexus, or civilization.
3. Combine or alter roots into a pronounceable word that describes the whole experience rather than a single mechanic.
4. Test pronunciation, spelling, meaning, and international connotations.
5. Search existing games, products, domains, app listings, and trademarks before adopting it publicly.
6. Keep the descriptive genre separate from the branded title. No candidate is legally cleared by this document.

## 2. Vision

Build a persistent digital civilization, not merely a menu of disconnected game modes. Players inhabit a shared world, fight, train, explore, work, craft, create items and abilities, trade, form communities, construct places, and participate in an evolving history. Eventually, authorized creators can use an in-world office/computer/terminal to design and publish new content while the world remains online.

The starting world is provisionally called Earth 2. The broader vision includes a small Earth-like body (its intended size description is ambiguous and must be clarified), four directional planets—North, East, West, South—original guardians and cosmology, later star systems, and a galaxy. The creation myth may explore broad creation-myth themes, but lore, characters, art, dialogue, names, music, and visual identity must be original or properly licensed.

Visual/world references include Genshin Impact, Breath of the Wild, and Tears of the Kingdom. Persistent economy and civilization references include EVE Online and Star Wars Galaxies. Large-scale warfare may target up to 128 players, but this is an unverified goal, not a feasibility claim.

AAA-level beauty, detail, responsiveness, and performance are aspirations. They must be translated into measurable device-specific targets and validated by repeatable tests.

## 3. Design rules

1. Evidence before status. Use IMPLEMENTED, PARTIAL, MISSING, UNKNOWN, BROKEN, DUPLICATED, or PLANNED.
2. Specify behavior and acceptance tests before implementation.
3. Keep shared infrastructure separate from game-specific lore and content.
4. Build reusable, versioned, composable systems with explicit interface contracts.
5. Treat XR interaction, comfort, accessibility, and responsiveness as core requirements.
6. Server-authoritatively validate combat, ownership, economy, construction, progression, and publishing.
7. Persistent does not mean every entity simulates at maximum fidelity continuously.
8. Creator freedom is bounded by sandboxing, permissions, resource budgets, moderation, and rollback.
9. Preserve distinct combat disciplines instead of flattening them into one model.
10. Never claim implemented, working, performant, or verified without evidence.

## 4. Master architecture overlay

This is a logical design registry, not existing code. Each system eventually needs a stable ID, owner, version, dependencies, interface contract, data ownership, resource budget, security model, tests, provenance, and evidence-based status.

### A. Platform and XR runtime
- PLAT-001 XR input: OpenXR; Meta Quest 3S; standalone Android XR/ARM64; head and hands; controller/hand input abstraction.
- PLAT-002 Embodied avatar: head/hand alignment, body animation, interaction reach, collision, locomotion and comfort. Lower-body movement may be estimated; head-and-hand tracking is not true foot tracking.
- PLAT-003 Client runtime: lifecycle, streaming, UI, input routing, local prediction, reconnect and diagnostics.
- PLAT-004 Device performance: frame time, CPU/GPU, memory, thermal behavior, loading, battery and quality scaling.
- PLAT-005 Accessibility and comfort: locomotion choices, readable UI, reach/scale options, motion comfort and clear feedback.
- PLAT-006 Content delivery: versioned packages, caching, compatibility checks and rollback.

### B. Persistent world
- WORLD-001 Hierarchy: local space → region/settlement → planet → star system → galaxy → universe.
- WORLD-002 Durable state: characters, entities, structures, inventories, ownership, discoveries and history.
- WORLD-003 Time simulation: active-area simulation, scheduled work, background rules and elapsed-time calculation.
- WORLD-004 Environment: biomes, day/night, weather, navigation, caves, verticality, traversal, puzzles and resource discovery.
- WORLD-005 Settlement reconstruction: curated restoration objectives and resident needs, coexisting with freeform construction.
- WORLD-006 World events/history: ordered event records, faction history and world-state changes.
- WORLD-007 Planetary/space travel: vehicles, routes, logistics, discovery, risks and later galaxy expansion.

### C. Four first-class combat disciplines
- COMBAT-001 Unarmed: punches, kicks, elbows, knees, palms, stances, footwork, blocks, parries, slips, dodges, counters, combos, clinches, grapples, throws, takedowns, submissions and fictional styles.
- COMBAT-002 Armed melee: swords, daggers, staffs, axes, spears, polearms, shields, dual wield, improvised weapons, disarms and transitions to/from unarmed.
- COMBAT-003 Ranged: firearms and selected other ranged systems; aiming, ammunition/reloads, range, movement, cover and authoritative hit validation.
- COMBAT-004 Magic/supernatural: spells, elements, energy projection, barriers, enchantments, summons, healing, transformations and hybrids.
- COMBAT-005 Shared combat kernel: target selection, hit volumes, timing, resources, damage, status effects, interruption, animation/physics interfaces, latency and anti-cheat.
- COMBAT-006 Cross-discipline transitions: explicitly compatible transitions and signature sequences.
- CHAR-001 Character progression: attributes, equipment, unlocks, mastery, cosmetics, identity and loadouts.
- CHAR-002 Fighter DNA: a multidimensional behavioral identity inferred only from recorded play. Preserve the user’s candidate pools “Slang,” “Wild,” and “Cold” until defined. Separate preference from proficiency; track context, confidence and history; do not treat missing telemetry as evidence of absence.
- CHAR-003 Training: safe training spaces, dummies, sparring, repeatable drills, distance/timing/stance conditions and measurable feedback.
- CHAR-004 Branching progression: separate the shared skill definition from each character’s mastery and branch choices.

### D. Composable skill and crafting system
- SKILL-001 Component/template registry: SkillTemplate, ElementalOrbBase, MeleeWeaponBase, WeaponAction, ProjectileEmission, ElementalPayload, passive modifiers and activation conditions.
- SKILL-002 Composition: combine actions, elements, equipment, gestures, distance, resources, cooldowns, passives and target conditions.
- SKILL-003 Validation: dependency resolution, type/equipment compatibility, contradictory conditions, complexity ceilings, permissions and performance budgets.
- SKILL-004 Crafting: ingredients/crystals, a blueprint, a skill scroll or equivalent artifact, and finalization. “Inscripted” is the user’s tentative term, not yet approved.
- SKILL-005 Lifecycle: Compose → Resource → Inscript/Finalize → Learn → Train → Verify → Master/Evolve → Teach/Branch.
- SKILL-006 Activation: validate preconditions, consume resources, check cooldown, execute action, apply effects, record event and provide clear failure feedback.
- SKILL-007 Teaching/branching: versioned skill definitions, attribution, ownership/licensing, mastery and independently evolved variants.
- SKILL-008 Balance/regression: damage, costs, cooldowns, proc rates, exploit loops, complexity and performance tests.

Example acceptance case: a sword swing emits an elemental orb in the swing direction only if a compatible sword is equipped, the swing is valid, distance and stance requirements pass, resources are available, and cooldown permits it. If too close, the ordinary slash may still occur while the orb does not. A firearm does not satisfy a sword requirement unless the skill explicitly declares that compatibility.

### E. Multiplayer and social civilization
- NET-001 Identity/session, character selection, reconnect and presence.
- NET-002 Server authority for combat, inventory, ownership, trades, crafting, construction and progression.
- NET-003 Replication, interest management, region boundaries, migration and reconnect.
- NET-004 Parties, guilds/clans, factions, chat/voice, friendship, reputation and events.
- NET-005 Large battles: squads, objectives, vehicles and mixed combat. 128 players is a target to benchmark, not a promise.
- NET-006 Trust/safety: reporting, blocking, moderation, anti-cheat, griefing controls, privacy and appeals.

### F. Economy, professions, storage and building
- ECON-001 Currency, trade, listings, fees, supply/demand, economic sinks and anti-duplication controls.
- ECON-002 Gathering, processing, crafting, resource discovery, logistics and noncombat professions.
- ECON-003 Ownership/licensing: gifting, trading, permitted copies, attribution, creator compensation if selected, and disputes.
- BUILD-001 Placement: candidate 1 m grid and block scales; placement preview; rotation/alignment; collision and overlap rules to be explicitly defined.
- BUILD-002 Structure integrity: support, materials, damage, repair, upgrades, salvage, rebuild and history.
- BUILD-003 Claims/permissions: land and structure ownership, access roles, faction rules, authorized demolition and offline persistence.
- BUILD-004 Storage: distinguish player-owned personal storage from world-owned containers; enforce owner identity and access rights across worlds.
- BUILD-005 Vehicles/modular gear: parts, sockets, compatibility, physics limits, repair and ownership.

### G. Operator, PET, digital pet and living familiar
- COMP-001 Operator/digital operative: persistent identity, personality, history and abilities accessed through a PET; game-network tasks run only through authorized sandbox APIs.
- COMP-002 Digital pet: virtual creature cared for and trained by the operator; compatible branching evolution/fusion/duplication rules may apply.
- COMP-003 Living familiar: species-specific egg/hatchling/crystal/other origin, awakening conditions, care, feeding, training, bonding and growth. It must not die merely because the player is absent; define self-care and food-seeking.
- COMP-004 Life stages/stats: baby/child/adolescent/adult as species-appropriate; candidate stats include knowledge, perception, dexterity, agility, endurance, luck and charisma. Separate stats from mastery, experience and teamwork.
- COMP-005 PET generations: device/hardware generation is distinct from operator progression and unlockable services; old devices retain utility.
- COMP-006 Augmented User Fusion: user’s term for a player/operator unified combat form where operator capabilities augment direct player control.
- COMP-007 Operator-compatible suit/body: keep PET, operator, digital core/chip and deployable modular body distinct. Suit/body quality is separate from operator progression; deployment is location- and permission-validated.
- COMP-008 Future update: operator, digital pet and familiar may later accompany the player in the physical world.

### H. In-world creator platform and live content
- CREATOR-001 Authoring workspace: fictional office/computer/terminal for authorized item, skill, mission, entity and world-content creation.
- CREATOR-002 Sandboxed API: narrow capability-based permissions; no arbitrary host commands, unrestricted filesystem, secrets or real-world network access.
- CREATOR-003 Packages: stable IDs, versions, dependencies, compatibility, provenance, changelogs and migrations.
- CREATOR-004 Validation: schemas, permissions, sandbox tests, exploit checks, resource budgets, content review and rollback metadata.
- CREATOR-005 Publishing pipeline: draft → validate → private test → staged rollout → publish → monitor → rollback/retire.
- CREATOR-006 Creator economy: explicit ownership, license, copy/remix, attribution, sale/gift/trade, moderation and dispute rules.
- CREATOR-007 Live updates: version compatibility, migrations, monitoring, rollback and release notes.

### I. Lore, story and content
- LORE-001 Original cosmology and founding eras inspired by broad creation-myth themes, not copied narratives.
- LORE-002 Earth 2, directional planets, guardians, factions, regions and later space/galaxy arcs.
- LORE-003 Main plot, personal arcs, companion/PET/operator stories and future expansions.
- CONTENT-001 Data-driven catalogues for characters, enemies, items, abilities, worlds, missions, companions, equipment and updates.
- CONTENT-002 Reference research separated from the original specification; record evidence, desired changes, original synthesis, uncertainty and IP review.

### J. Permanent reusable development foundation
- DEV-001 Registry of reusable modules independent of a particular game’s lore.
- DEV-002 API/schema contracts, dependency graphs, compatibility and replacement rules.
- DEV-003 Automated unit, integration, end-to-end, multiplayer, persistence, performance, security and regression tests.
- DEV-004 Evidence/status registry; “unknown” is valid and must not be silently promoted.
- DEV-005 Change process: inspect → specify → plan → implement → test → review → document → release.
- DEV-006 Provenance: timestamp and author/AI identity for ideas, decisions, APIs, processes, templates, blueprints, plans and conversation records; preserve verbatim text where actually available.
- DEV-007 Logs, metrics, traces, crash reports, diagnostics and privacy controls.
- DEV-008 Backups, snapshots, restore drills, migrations, idempotent recovery and rollback.

## 5. Required logical processes/functions

The names below are design-level identifiers, not claims that these functions already exist. Each needs a concrete schema, error model, authorization rules, execution location, idempotency policy where relevant, telemetry and tests.

### Session and world
- authenticate_player(credentials_or_token): authenticate through secure identity service.
- create_or_resume_session(player_id, character_id): load authorized character and session state.
- load_world_region(region_id, client_capabilities): stream relevant compatible world data.
- subscribe_to_world_events(player_id, region_id): deliver authorized events.
- apply_server_event(event): validate, order, persist and publish a state change.
- advance_background_simulation(entity_id, elapsed_time): apply bounded elapsed-time rules.
- checkpoint_world_state(scope_id) / restore_world_state(snapshot_id): recover durable state and validate migrations.
- transfer_region(entity_id, destination_region_id): validate transition and avoid duplicate authoritative ownership.

### Combat and skills
- capture_xr_input(input_frame): normalize hand/controller input and timestamps.
- classify_combat_action(input_frame, loadout): resolve candidate action without claiming untracked body parts are measured.
- validate_action_preconditions(action, actor, target): check equipment, range, stance, resources, cooldown, permissions and context.
- resolve_combat_action(action, authoritative_state): resolve hit, damage, effects and interruption.
- compose_skill(blueprint, component_registry): build a candidate compositional definition.
- validate_skill_blueprint(blueprint, registry_version): validate schema, compatibility, dependencies, limits and permissions.
- craft_skill_artifact(blueprint_id, ingredient_manifest, crafter_id): consume valid ingredients and produce artifact.
- learn_skill(character_id, skill_version): check requirements and record learned definition separately from mastery.
- run_training_trial(character_id, skill_version, trial_spec): measure training conditions.
- verify_skill_mastery(character_id, skill_version, evidence): evaluate mastery requirements.
- branch_skill(source_skill_version, branch_definition): create a versioned branch with provenance.

### Economy and construction
- validate_inventory_transaction(transaction): prevent duplication and unauthorized transfers.
- execute_trade(trade_proposal): atomically validate both parties, ownership, permissions and payment.
- craft_item(recipe_id, ingredients, crafter_id): validate and atomically consume/produce items.
- validate_build_placement(blueprint, transform, world_state): check boundaries, collision, grid, support and permissions.
- commit_build_change(change_set): persist construction/removal/repair/damage with ownership history.
- calculate_structure_state(structure_id, damage_events): derive condition and supported components.
- salvage_structure(structure_id, actor_id): authorize salvage and calculate rule-bound outputs.
- resolve_container_access(container_id, actor_id): enforce personal/world ownership and permissions.

### Companions and operator
- issue_operator_command(operator_id, command, capability_token): validate permitted in-game operation.
- execute_sandboxed_network_mission(mission_id, scope): operate only in simulated/authorized domains.
- evaluate_companion_care(companion_id, elapsed_time, environment): update needs without absence-caused death.
- evaluate_evolution_conditions(companion_id, event_history): validate species-specific growth conditions.
- fuse_digital_pets(pet_ids, recipe, owner_id): apply explicit compatible digital-pet fusion rules.
- activate_augmented_user_fusion(player_id, operator_id): validate and activate unified combat state.
- deploy_operator_body(operator_id, body_core_id, destination): validate compatibility, ownership and location.

### Creator operations and verification
- validate_creator_package(package, policy_version): validate schema, dependencies, permissions, sandbox and resource budgets.
- run_creator_test_suite(package_version): execute functional, exploit and performance tests.
- publish_content(package_version, rollout_policy): staged rollout after required approvals.
- monitor_release(package_version, telemetry_window): compare health, abuse and performance against thresholds.
- rollback_content(package_version, rollback_target): restore compatible prior state with audit history.
- record_provenance(artifact_id, author, timestamp, sources, change_summary): link source, version and evidence.
- set_feature_status(feature_id, status, evidence_refs): require evidence for completion claims.
- run_regression_suite(scope, baseline_version): verify accepted behavior remains intact.

## 6. Persistence model

Persistence means durable authoritative state and explicit offline progression—not full real-time simulation of every entity forever.

1. Server owns canonical character, economy, ownership, structures and world state.
2. Important changes are recorded with actor, timestamp, cause, content version and outcome.
3. Active regions use higher-detail simulation; inactive entities use bounded background rules or elapsed-time calculations.
4. Checkpoints and validated event replay (or an equivalent recovery mechanism) restore consistency after restart.
5. Each entity category defines save cadence, retention, decay, destruction, dormancy, migration and recovery.
6. Player structures change only through declared rules such as authorized demolition, damage, ownership rules or explicit world events.
7. Local regions, settlements, planets, systems and galaxy share identity/history while using suitable simulation resolutions.

## 7. Reference games and IP discipline

Reference games are research inputs, not separate game concepts and not automatic permission to copy. The conversation’s working reference set includes Final Fantasy XIV; Dragon Ball Xenoverse 2; Black Desert Online; Warframe; Deepwoken; Juiced 2: Hot Import Nights; Naruto to Boruto: Shinobi Striker; the Naruto Ultimate Ninja Storm series (the exact “Ultimate Ninja Storm 7” title/status remains unverified); Halo; Star Wars Galaxies; Rust; ARK: Survival Evolved; Conan Exiles (the user’s “Conan Legends” wording needs confirmation); The Bard’s Tale (2004 Xbox action RPG); Dark Cloud; Dark Chronicle / Dark Cloud 2; Mega Man Battle Network; Digimon; Terraria; Dungeon Defenders; War Dogs; Phantasy Star Online 2: New Genesis (the phrase “Star Rail Online New Genesis” needs confirmation); and the Sword Art Online: Alicization TV series.

For each reference, create two separate records:
1. Reference reconstruction: what the original demonstrably does, based on credible evidence.
2. Original specification: what this project keeps as a broad idea, changes, combines, rejects or newly invents.

Tag each feature as REFERENCE-EVIDENCED, USER-DESIRED-CHANGE, ORIGINAL-SYNTHESIS, UNKNOWN/NEEDS-RESEARCH, or IP-REVIEW-REQUIRED. Renaming or combining does not automatically clear expressive copyright, trademarks or patents. Do targeted research before commercial release. This blueprint does not provide legal clearance.

## 8. Status and verification policy

- IMPLEMENTED: code/config exists and evidence proves acceptance criteria.
- PARTIAL: some behavior exists; remaining scope is explicit.
- MISSING: inspection confirms the scoped capability is absent.
- UNKNOWN: not inspected or evidence insufficient.
- BROKEN: a reproducible acceptance test fails.
- DUPLICATED: overlapping implementations are confirmed.
- PLANNED: design intent only.

Each feature needs an ID, specification, edge cases, dependencies, client/server authority, persistence behavior, security/abuse cases, performance budget, tests, device/runtime/build details, results, timestamp, evidence links and reviewer. Never mark 128-player battles, offline simulation, live creator publishing, AAA quality or target-device performance verified before actual tests and benchmarks.

## 9. Provisional development gates

These are planning gates, not a fixed schedule.
- P0 Requirements/evidence baseline: confirm canonical repository, terminology, core loops and constraints.
- P1 Reusable foundation: registry, schemas, event/provenance model, versioning, tests and instrumentation.
- P2 XR slice: Quest 3S input, comfort, embodied avatar, responsive interactions and repeatable device tests.
- P3 Combat slice: one measurable example for each discipline, authority, training and telemetry.
- P4 Skill composition slice: registry, validation, one composable skill, crafting, training and branching.
- P5 Persistence slice: durable character/inventory/build state, restart recovery and offline rules.
- P6 Social/economy/building: transactions, permissions, structures, repair/salvage and ownership history.
- P7 Companion slice: operator loop, digital pet lifecycle and living familiar lifecycle as separate models.
- P8 Creator sandbox: authoring, validation, staged publishing, monitoring and rollback.
- P9 World expansion: settlements, planets, space, factions, story arcs and larger battles.
- P10 Production hardening: security, accessibility, scale performance, recovery, moderation, IP review and live operations.

At each gate: inspect → specify → plan → implement → test → review → document → release. Record failures; do not silently narrow test scope.

## 10. Open decisions

1. Is this repository the canonical game project, or is it a new placeholder while Startup remains the active Godot/XR project?
2. What exactly did the small-planet size description mean?
3. Define the Fighter DNA pools “Slang,” “Wild,” and “Cold.”
4. Approve or rename “inscripted.”
5. Define moderation and permission levels for creator-published content.
6. Define skill/item/blueprint ownership, licensing, copying, attribution and creator compensation.
7. Decide server topology, concurrency, authoritative regions and latency targets.
8. Define Quest 3S frame-time, memory, thermal and comfort budgets.
9. Verify uncertain reference titles.
10. Research the final title for naming conflicts.
11. Decide which features belong in the first playable slice versus later expansions.
12. Record provenance/ownership for original characters and concepts; do not assume rights.

## 11. Repository baseline

Before this file was created, the repository tree on main contained only .gitignore, LICENSE and README.md. Initial commit: ee2570700483c052e27790d6c9a6a1fb0ff634c7. The repository was public and the connected GitHub tool reported write permission. This is a new planning artifact; no game implementation or tests are implied.

Next required step: resolve the canonical-repository question, then audit any existing implementation before writing code or claiming progress.
