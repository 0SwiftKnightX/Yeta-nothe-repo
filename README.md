# Yeta-nothe-repo

Current documentation source of truth for the work being developed in this repository. The repository contains planning and early tooling; a document or schema being present does not by itself mean the related product is complete or verified.

## Organizational continuity

- [Continuity Map](docs/organization/CONTINUITY_MAP.md) — central map of repositories, project relationships, and work routing.
- [Repository Inventory](docs/organization/REPOSITORY_INVENTORY.md) — point-in-time inventory of repositories visible through the connected GitHub integration.
- [Gap and Conflict Register](docs/organization/GAP_AND_CONFLICT_REGISTER.md) — targeted open gaps, superseded assumptions, and next actions.

## Workstreams

### 1. Game concept — The Living Continuum
- [Game Project Blueprint](docs/PROJECT_BLUEPRINT.md) — persistent open-world XR combat-sandbox MMORPG concept.
- Status: PLANNED concept; implementation must be audited and verified separately.

### 2. Open Technology Initiative
- [Organization documentation index](docs/organization/README.md)
- [Foundation blueprint](docs/organization/FOUNDATION_BLUEPRINT.md)
- [Operating charter](docs/organization/OPERATING_CHARTER.md)
- [Decision register](docs/organization/DECISION_REGISTER.md)
- [Fundraising, licensing, and governance research](docs/organization/RESEARCH_MEMO_FUNDRAISING_LICENSING_GOVERNANCE.md)

### 3. First open-source tooling artifact — OTECM
The Open Technology Evidence & Compatibility Manifest MVP has a Draft 2020-12 JSON Schema, synthetic example, CLI validator, unit tests, specification, and GitHub Actions workflow:
- [OTECM specification](docs/organization/OTECM_SPECIFICATION.md)
- [JSON Schema](schemas/otecm.schema.json)
- [Synthetic sample](examples/otecm/sample-record.json)
- [Validator](tools/otecm/validate.py)
- [Tests](tests/test_otecm.py)
- [CI workflow](.github/workflows/otecm-validation.yml)

Status: **PARTIAL**. Repository writes and read-backs succeeded; structural checks confirmed valid JSON syntax and internal schema references. A full Draft 2020-12 validation and actual CI test result have not yet been verified.

## Provenance and verification

- [AI conversation log](logs/AI_CONVERSATION_LOG.md) — session summary, tool use, repository changes, sources, commit IDs, verification boundaries, and next actions.
- Important documents carry versions, authorship/AI identity, and status labels.
- Use IMPLEMENTED, PARTIAL, MISSING, UNKNOWN, BROKEN, DUPLICATED, PLANNED, and NOT_TESTED precisely.
- Never claim a feature, partnership, legal status, fundraiser, deployment, or test is complete without supporting evidence.

## Current boundaries

- The game concept and organization initiative are deliberately separated by folder.
- This repository is the confirmed organizational umbrella and documentation source of truth. Existing project repositories remain in place; code migration is a separate, explicitly reviewed decision.
- No legal entity, tax-exempt status, fundraiser, partnership, or deployed platform is claimed to exist.
- The historical “ORGANIZATION MASTER USE, ATTRIBUTION, AND RIGHTS LICENSE” draft has not been recovered verbatim; see the decision register and research memo.
