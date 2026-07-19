# CODEX PROMPT REGISTRY

The registry is append-only. Every prompt must have one unique task ID and sequence number.

| Task ID | Sequence | Type | Path | Status | Supersedes | Purpose |
|---|---:|---|---|---|---|---|
| CX-R1-000 | 0001 | INITIAL | `Codex Code/Tasks/CX-R1-000/PROMPT.md` | VALID_HISTORICAL | none | Initial read-only repository safety verification prompt. |
| CX-R1-000 | 0002 | CONTINUE_CORRECTION | `Codex Code/Prompts/CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md` | CURRENT | environment assumptions in 0001 only | Resume after the non-Git temporary workspace blocker and enforce `Codex Code/Implementation/` as the only future executable-code root. |

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

## Sequence rule

The next prompt for `CX-R1-000` is `0003`.

Do not reuse `0001` or `0002`. Do not replace an earlier file with new content.
