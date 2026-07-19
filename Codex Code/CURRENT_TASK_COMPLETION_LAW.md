# CODEX CURRENT TASK COMPLETION LAW

## Owner directive

Codex, the reviewer, and every automation working on ARCHITECTURED must finish the currently authorized task before proceeding to another task.

```text
ONE ACTIVE TASK
→ COMPLETE EVERY AUTHORIZED ITEM
→ RUN EVERY REQUIRED CHECK
→ PRODUCE ALL REQUIRED EVIDENCE
→ OPEN/UPDATE THE SAME TASK PR WHEN AUTHORIZED
→ EXTERNAL REVIEW
→ CORRECT THE SAME TASK WHEN REQUIRED
→ APPROVED_COMPLETE
→ ONLY THEN MAY THE OWNER ACTIVATE THE NEXT TASK
```

## No premature stop

Codex must not stop merely because:

- one file was created;
- one phase or substep finished;
- an initial command succeeded;
- part of the tests passed;
- the context is long;
- it produced a partial explanation;
- it reached a convenient handoff point;
- another planned task looks ready.

Codex continues through the entire authorized scope of the current task in the same execution whenever the environment and permissions permit.

## Valid pauses

A pause is allowed only when the current task cannot continue without an external action that Codex is not authorized or technically able to perform.

Valid examples:

```text
BLOCKED_ENVIRONMENT
BLOCKED_DEPENDENCY
BLOCKED_ARCHITECTURE_CLARIFICATION
FAILED_VALIDATION requiring an owner/provider decision
READY_FOR_EXTERNAL_REVIEW
WAITING_FOR_REVIEW_CORRECTION
WAITING_FOR_OWNER_AUTHORIZED_MERGE
```

A pause does not complete or close the task.

The same task remains active in `Codex Code/Prompts/ACTIVE_TASK.md`. Codex must write or update `Codex Code/Tasks/<TASK-ID>/CHECKPOINT.md` with the exact continuation point.

## Review boundary

Codex cannot approve or merge its own task. Therefore:

- `READY_FOR_REVIEW` is a valid external-review pause;
- it is not authorization for the next task;
- review corrections resume the same task and same branch/PR;
- the active-task pointer changes only after external evidence records `APPROVED_COMPLETE` or the owner explicitly cancels/supersedes the task.

## Continue command

When the owner says `continue`:

```text
READ ACTIVE TASK
→ READ COMPLETE PROMPT CHAIN
→ READ LATEST CHECKPOINT
→ RECONCILE LIVE GIT/PR/TEST STATE
→ RESUME THE SAME TASK FROM THE FIRST INCOMPLETE ITEM
```

Do not select the next task. Do not restart completed work. Do not create a duplicate branch, PR, module, migration, or code tree.

## Terminal states

The current task may leave the active pointer only through one of these externally recorded terminal states:

```text
APPROVED_COMPLETE
OWNER_CANCELLED
OWNER_SUPERSEDED_WITH_MIGRATION_PLAN
```

`BLOCKED`, `FAILED_VALIDATION`, `READY_FOR_REVIEW`, and `INTERRUPTED` are not terminal task-completion states.

## Completion gate

Before proposing the next task, verify:

- current task contract fully satisfied;
- all in-scope files complete;
- all required tests executed and passing or factually accepted by owner;
- security, RLS, privacy, accessibility, recovery, and hardware evidence complete when applicable;
- no unauthorized deletion, move, rename, duplicate, or architecture drift;
- changed-files manifest complete;
- completion report complete;
- PR review complete;
- merge/read-back record complete when the task requires repository changes;
- active-task pointer explicitly updated by the owner/reviewer.

Without all applicable evidence:

```text
DO NOT PROCEED TO NEXT TASK
```
