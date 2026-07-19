# CODEX PROMPT REGISTRY

The registry is append-only. Every prompt has one unique task ID and sequence number.

| Task ID | Sequence | Type | Path | Status | Supersedes | Purpose |
|---|---:|---|---|---|---|---|
| CX-R1-000 | 0001 | INITIAL | `Codex Code/Tasks/CX-R1-000/PROMPT.md` | VALID_HISTORICAL | none | Initial read-only repository safety verification prompt. |
| CX-R1-000 | 0002 | CONTINUE_CORRECTION | `Codex Code/Prompts/CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md` | VALID_HISTORICAL | environment assumptions in 0001 only | Recorded the non-Git temporary-workspace blocker, prompt chain, checkpoint, and canonical implementation-root rule. |
| CX-R1-000 | 0003 | FINAL_CONTINUE_AND_FINISH | `Codex Code/Prompts/CX-R1-000/0003-FINAL-ARMORED-CONTINUE-AND-FINISH.md` | VALID_HISTORICAL | 0002 execution instructions | Authorized repository discovery/clone and required full read-only verification rather than stopping after environment recovery. |
| CX-R1-000 | 0004 | FINAL_CONTINUE_AND_FINISH | `Codex Code/Prompts/CX-R1-000/0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md` | CURRENT | 0003 execution instructions | Finish the same CX-R1-000 task against the synchronized master plan covering later SaaS/application/wireframe/wireflow/release/Codex packages. |

## Status values

```text
CURRENT
VALID_HISTORICAL
SUPERSEDED_IN_PART
REVOKED
COMPLETED_TASK_ARCHIVE
```

A historical or revoked prompt remains in the append-only record. Only the current prompt is executed, while valid historical prompts provide context and provenance.

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
CURRENT TASK: CX-R1-000
CURRENT PROMPT: 0004
CURRENT MASTER SYNC: 1plan-SAAS_APPLICATION_WIREFRAME_WIREFLOW_INTEGRATION_EXTENSION.md
FULLY ARMORED STANDARD: Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
SOURCE-CODE AUTHORIZATION: NO
LOCAL CHECKOUT DISCOVERY/CLONE: AUTHORIZED FOR ENVIRONMENT RECOVERY
READ-ONLY FULL REPOSITORY/ARCHITECTURE VERIFICATION: AUTHORIZED
NEXT TASK CX-R1-001: NOT AUTHORIZED
```

## Sequence rule

The next prompt for `CX-R1-000`, only when another material correction is actually required, is `0005`.

Do not reuse or overwrite `0001`, `0002`, `0003`, or `0004`.