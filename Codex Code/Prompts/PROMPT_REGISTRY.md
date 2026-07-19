# CODEX PROMPT REGISTRY

The registry is append-only. Every prompt has one unique task ID and sequence number.

| Task ID | Sequence | Type | Path | Status | Supersedes | Purpose |
|---|---:|---|---|---|---|---|
| CX-R1-000 | 0001 | INITIAL | `Codex Code/Tasks/CX-R1-000/PROMPT.md` | VALID_HISTORICAL | none | Initial read-only repository safety verification prompt. |
| CX-R1-000 | 0002 | CONTINUE_CORRECTION | `Codex Code/Prompts/CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md` | VALID_HISTORICAL | environment assumptions in 0001 only | Recorded the non-Git temporary-workspace blocker, prompt chain, checkpoint, and canonical implementation-root rule. |
| CX-R1-000 | 0003 | FINAL_CONTINUE_AND_FINISH | `Codex Code/Prompts/CX-R1-000/0003-FINAL-ARMORED-CONTINUE-AND-FINISH.md` | VALID_HISTORICAL | 0002 execution instructions | Authorized repository discovery/clone and required full read-only verification rather than stopping after environment recovery. |
| CX-R1-000 | 0004 | FINAL_CONTINUE_AND_FINISH | `Codex Code/Prompts/CX-R1-000/0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md` | COMPLETED_TASK_ARCHIVE | 0003 execution instructions | Completed CX-R1-000 against the synchronized master state; externally reviewed as APPROVED_COMPLETE. |
| CX-R1-001 | 0001 | INITIAL | `Codex Code/Prompts/CX-R1-001/0001-WORKSPACE-AND-VERSION-BOOTSTRAP.md` | CURRENT | none | Build and validate the exact version-pinned workspace foundation under the canonical implementation root only. |

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

Every new prompt records:

- task ID;
- sequence number;
- prompt type;
- exact path;
- status;
- exact prompt/rule superseded;
- authorization scope;
- purpose;
- owner-approval evidence;
- associated checkpoint;
- applicable master-plan extension;
- canonical implementation root;
- explicit next-task authorization state.

## Current authorization

```text
PREVIOUS TASK: CX-R1-000 = APPROVED_COMPLETE
CURRENT TASK: CX-R1-001
CURRENT PROMPT: 0001
TASK TITLE: Workspace and Version Bootstrap
WORK BRANCH: agent/cx-r1-001-workspace-bootstrap
CANONICAL IMPLEMENTATION ROOT: Codex Code/Implementation/
SOURCE-CODE AUTHORIZATION: YES, CX-R1-001 SCOPE ONLY
DEPENDENCY INSTALLATION: YES, EXACT PINNED PROJECT DEPENDENCIES ONLY
BUSINESS/DOMAIN/UI/DATABASE/CI IMPLEMENTATION: NO
MERGE AUTHORIZATION FOR CODEX: NO
NEXT TASK CX-R1-002: NOT AUTHORIZED
```

## Owner approval evidence

- `Codex Code/Tasks/CX-R1-000/REVIEW_RESULT.md`
- `Codex Code/Tasks/CX-R1-001/TASK_RECORD.md`
- `Codex Code/Tasks/CX-R1-001/TASK_CONTRACT.md`

## Sequence rule

- The next prompt for `CX-R1-001`, only when a material correction or continuation is required, is `0002`.
- Do not reuse or overwrite any registered prompt.
- A correction does not authorize another task.
