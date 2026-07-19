# CODEX PROMPT REGISTRY

The registry is append-only. Every prompt must have one unique task ID and sequence number.

| Task ID | Sequence | Type | Path | Status | Supersedes | Purpose |
|---|---:|---|---|---|---|---|
| CX-R1-000 | 0001 | INITIAL | `Codex Code/Tasks/CX-R1-000/PROMPT.md` | VALID_HISTORICAL | none | Initial read-only repository safety verification prompt. |
| CX-R1-000 | 0002 | CONTINUE_CORRECTION | `Codex Code/Prompts/CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md` | VALID_HISTORICAL | environment assumptions in 0001 only | Recorded the non-Git temporary-workspace blocker, prompt chain, checkpoint, and canonical implementation-root rule. |
| CX-R1-000 | 0003 | FINAL_CONTINUE_AND_FINISH | `Codex Code/Prompts/CX-R1-000/0003-FINAL-ARMORED-CONTINUE-AND-FINISH.md` | CURRENT | 0002 execution instructions | Locate or clone the real repository, continue past environment recovery, finish the complete read-only CX-R1-000 verification, and prohibit CX-R1-001. |

## Status values

```text
CURRENT
VALID_HISTORICAL
SUPERSEDED_IN_PART
REVOKED
COMPLETED_TASK_ARCHIVE
```

A revoked prompt remains in history but must not be executed.

## Registration requirements

Every new prompt entry records:

- task ID;
- sequence number;
- prompt type;
- exact path;
- status;
- prompt or rule it supersedes, when applicable;
- authorization scope;
- purpose;
- author/owner approval evidence;
- associated checkpoint.

## Current authorization

```text
CURRENT TASK: CX-R1-000
CURRENT PROMPT: 0003
SOURCE-CODE AUTHORIZATION: NO
LOCAL CHECKOUT DISCOVERY/CLONE: AUTHORIZED FOR ENVIRONMENT RECOVERY
NEXT TASK CX-R1-001: NOT AUTHORIZED
```

## Sequence rule

The next prompt for `CX-R1-000`, only when another correction is actually needed, is `0004`.

Do not reuse or overwrite `0001`, `0002`, or `0003`.
