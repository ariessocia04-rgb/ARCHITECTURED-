# CODEX PROMPT REGISTRY

The registry is append-only. Every prompt has one unique task ID and sequence number.

| Task ID | Sequence | Type | Path | Status | Supersedes | Purpose |
|---|---:|---|---|---|---|---|
| CX-R1-000 | 0001 | INITIAL | `Codex Code/Tasks/CX-R1-000/PROMPT.md` | VALID_HISTORICAL | none | Initial read-only repository safety verification prompt. |
| CX-R1-000 | 0002 | CONTINUE_CORRECTION | `Codex Code/Prompts/CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md` | VALID_HISTORICAL | environment assumptions in 0001 only | Recorded the non-Git temporary-workspace blocker, prompt chain, checkpoint, and canonical implementation-root rule. |
| CX-R1-000 | 0003 | FINAL_CONTINUE_AND_FINISH | `Codex Code/Prompts/CX-R1-000/0003-FINAL-ARMORED-CONTINUE-AND-FINISH.md` | VALID_HISTORICAL | 0002 execution instructions | Authorized repository discovery/clone and required full read-only verification rather than stopping after environment recovery. |
| CX-R1-000 | 0004 | FINAL_CONTINUE_AND_FINISH | `Codex Code/Prompts/CX-R1-000/0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md` | COMPLETED_TASK_ARCHIVE | 0003 execution instructions | Completed CX-R1-000 against the synchronized master state; externally reviewed as APPROVED_COMPLETE. |
| CX-R1-001 | 0001 | INITIAL | `Codex Code/Prompts/CX-R1-001/0001-WORKSPACE-AND-VERSION-BOOTSTRAP.md` | COMPLETED_TASK_ARCHIVE | none | Built and validated the exact version-pinned workspace foundation; PR #16 merged and externally recorded as APPROVED_COMPLETE. |
| CX-R1-002 | 0001 | INITIAL | `Codex Code/Prompts/CX-R1-002/0001-CI-QUALITY-SECURITY-BASELINE.md` | CURRENT | none | Build, validate, and publish the complete CI, quality, and security baseline without beginning CX-R1-003. |

## Status values

```text
CURRENT
VALID_HISTORICAL
SUPERSEDED_IN_PART
REVOKED
COMPLETED_TASK_ARCHIVE
```

A historical, completed, or revoked prompt remains in the append-only record. Only the current prompt is executed, while prior prompts provide context and provenance.

## Registration requirements

Every new prompt records its task ID, sequence, type, exact path, status, superseded rule, authorization scope, purpose, owner approval evidence, checkpoint, applicable source, canonical implementation root, and next-task authorization state.

## Current authorization

```text
PREVIOUS TASK: CX-R1-001 = APPROVED_COMPLETE
CURRENT TASK: CX-R1-002
CURRENT PROMPT: 0001
TASK TITLE: CI, Quality, and Security Baseline
WORK BRANCH: agent/cx-r1-002-ci-quality-security
CANONICAL IMPLEMENTATION ROOT: Codex Code/Implementation/
SOURCE/WORKFLOW AUTHORIZATION: YES, CX-R1-002 SCOPE ONLY
DEPENDENCY INSTALLATION: ONLY WHEN REQUIRED AND EXACTLY PINNED
PRODUCT/BUSINESS/DATABASE/OBSERVABILITY IMPLEMENTATION: NO
MERGE AUTHORIZATION FOR CODEX: NO
NEXT TASK CX-R1-003: NOT AUTHORIZED
```

## Owner approval evidence

- `Codex Code/Tasks/CX-R1-001/REVIEW_RESULT.md`
- `Codex Code/Tasks/CX-R1-001/MERGE_RECORD.md`
- `Codex Code/Tasks/CX-R1-002/TASK_RECORD.md`
- `Codex Code/Tasks/CX-R1-002/TASK_CONTRACT.md`

## Sequence rule

- The next prompt for CX-R1-002, only when a material correction or continuation prompt is required, is `0002`.
- Do not reuse, overwrite, or duplicate a registered prompt.
- A correction does not authorize another task.
