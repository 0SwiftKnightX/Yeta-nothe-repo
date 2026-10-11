# OTECM Specification

Document ID: OTECM-SPEC-001  
Version: 0.1.0-draft  
Status: DRAFT — schema and example created; automated validation workflow pending execution  
Created: 2026-10-11T02:46:33.306Z  
Prepared by: ChatGPT (GPT-6)  
Repository: https://github.com/0SwiftKnightX/Yeta-nothe-repo

## Purpose

The Open Technology Evidence & Compatibility Manifest (OTECM) records what a software or technology artifact claims to support, which versions/environments were actually examined, and what evidence supports each statement. It is designed to make uncertainty visible rather than silently convert missing information into a pass.

The schema uses JSON Schema Draft 2020-12, the current JSON Schema specification listed by the official project: https://json-schema.org/specification. License metadata should use SPDX identifiers/expressions when known; consult the official list at https://spdx.org/licenses/. These references were checked on 2026-10-10.

## Files

- `schemas/otecm.schema.json` — machine-readable schema.
- `examples/otecm/sample-record.json` — synthetic example with UNKNOWN / NOT_RUN states.
- `tools/otecm/validate.py` — command-line validator.
- `tests/test_otecm.py` — positive and negative tests.
- `.github/workflows/otecm-validation.yml` — CI validation workflow.

## Required record groups

| Group | Purpose |
|---|---|
| Identity and timestamps | Stable record ID, schema version, created/updated time |
| Project and source ref | Canonical URL, maintainer, branch/tag/commit provenance |
| Status and scope | Status vocabulary and target/tested/not-tested environments |
| Evidence | URLs, source type, retrieval time, claims supported, trust level |
| Verification | Procedure, expected/observed result, execution status, environment and evidence |
| Licensing | Declared license and SPDX expression where known; explicit unknowns |
| Security and privacy | Contact, disclosure policy, and data/privacy notes |
| Provenance | Creator, source notes, reviewer, change summary, previous record |
| Limitations | Known gaps and unverified areas |

## Status and verification are distinct

Record-level status describes the capability or artifact. Verification status describes a particular test or inspection. A record can be PLANNED while a source-inspection check passes; that does not mean the capability works. A test marked NOT_RUN is not a failure and not a pass.

## Rules for truthful reporting

1. Do not mark a target environment as tested unless the exact environment and procedure are recorded.
2. A successful build does not prove runtime behavior, security, accessibility, performance, or physical-device compatibility.
3. Keep missing evidence explicit with UNKNOWN, NOT_TESTED, NOASSERTION, or an equivalent stated value.
4. Link each evidence source to the claim it supports.
5. Do not use a generic PASS to imply more than the test actually covered.
6. Record failed and blocked tests rather than omitting them.
7. Do not place credentials, secrets, personal addresses, or sensitive vulnerability details in public records.
8. Validate the schema and each record in CI before treating it as a release artifact.

## Initial acceptance criteria

- The schema and sample are valid JSON.
- A Draft 2020-12 validator accepts the schema.
- The validator accepts the synthetic sample.
- The validator rejects a sample with an invalid record-level status.
- The CI workflow runs these checks on pull requests and pushes to main.
- Documentation states that the sample is synthetic and no real compatibility claims are made.

## Limitations

The schema checks structure, not truth. A structurally valid record can still contain inaccurate statements or misleading evidence. Reviewers must inspect source quality, relevance, date, scope, and the claim-to-evidence relationship. SPDX identifiers help normalize license metadata but do not replace reviewing the actual license and third-party notices.
