# CODEX PROMPT CHAIN — COMPLETION RECORD

## Scope

This record covers the GitHub-backed Codex prompt history, active-task pointer, interruption checkpoint, continuation protocol, and current-task completion gate.

## Delivered structure

```text
Codex Code/
├── CURRENT_TASK_COMPLETION_LAW.md
├── Prompts/
│   ├── README.md
│   ├── ACTIVE_TASK.md
│   ├── PROMPT_REGISTRY.md
│   ├── CONTINUE_PROTOCOL.md
│   ├── COMPLETION_RECORD.md
│   ├── FINAL_VERIFICATION.md
│   ├── Templates/
│   │   ├── PROMPT_ENTRY_TEMPLATE.md
│   │   └── CHECKPOINT_TEMPLATE.md
│   └── CX-R1-000/
│       └── 0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md
└── Tasks/
    └── CX-R1-000/
        └── CHECKPOINT.md
```

## Functional behavior

```text
OWNER SAYS CONTINUE
→ READ ACTIVE_TASK
→ READ PROMPT REGISTRY
→ READ ALL VALID PROMPTS IN ORDER
→ READ TASK RECORD/CONTRACT/CHECKPOINT
→ VERIFY REAL GIT REPOSITORY
→ RECONCILE BRANCH/PR/CODE/TEST STATE
→ RESUME SAME TASK FROM FIRST INCOMPLETE ITEM
→ DO NOT REPEAT COMPLETED WORK
→ DO NOT START NEXT TASK
```

## Current-task rule

The currently active task remains active until externally recorded as `APPROVED_COMPLETE`, `OWNER_CANCELLED`, or `OWNER_SUPERSEDED_WITH_MIGRATION_PLAN`.

`BLOCKED`, `FAILED_VALIDATION`, `INTERRUPTED`, and `READY_FOR_REVIEW` do not authorize task advancement.

## Current prompt state

```yaml
active_task_id: CX-R1-000
latest_prompt_sequence: 0002
latest_prompt_path: Codex Code/Prompts/CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md
checkpoint_path: Codex Code/Tasks/CX-R1-000/CHECKPOINT.md
previous_result: BLOCKED_ENVIRONMENT
continuation_safe: true
source_code_authorized: false
next_task_authorized: false
```

## Canonical implementation rule retained

All future executable code remains under:

```text
Codex Code/Implementation/
```

No root-level parallel implementation tree is authorized.

## Truthful boundary

This package does not:

- execute `CX-R1-000` on the user's computer;
- clone the repository into Codex's local environment;
- create application code;
- authorize `CX-R1-001`;
- install dependencies;
- create migrations;
- run system tests;
- deploy anything.

It creates the persistent GitHub instructions that allow Codex to safely resume once it is operating in the actual Git checkout.

## Pre-merge validation target

```text
NEW PROMPT/CONTINUATION FILES: PRESENT
ACTIVE TASK POINTER: PRESENT
PROMPT REGISTRY: PRESENT
CHECKPOINT: PRESENT
CURRENT TASK COMPLETION LAW: PRESENT
FULL CX-R1-000 CONTINUATION PROMPT: PRESENT
DELETIONS: NONE
APPLICATION CODE: NONE
NEXT TASK AUTHORIZATION: NO
```

Final PR, merge SHA, and main read-back evidence are added after merge.
