# CODEX PROMPT CHAIN — ACTIVE TASK POINTER

This file identifies the only task that the word `continue` may resume.

```yaml
active_task_id: CX-R1-000
active_task_title: Repository Safety and Live-State Verification
release_id: ROS-R1-MVP-2026-01
execution_type: READ_ONLY_VERIFICATION
current_status: READY_TO_RETRY_AFTER_ENVIRONMENT_BLOCK
latest_prompt_sequence: 0002
latest_prompt_path: Codex Code/Prompts/CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md
latest_checkpoint_path: Codex Code/Tasks/CX-R1-000/CHECKPOINT.md
task_record_path: Codex Code/Tasks/CX-R1-000/TASK_RECORD.md
canonical_implementation_root: Codex Code/Implementation/
work_branch: NONE_AUTHORIZED
pull_request: NONE_AUTHORIZED
next_task_id: CX-R1-001
next_task_authorized: false
```

## Meaning of `continue`

`continue` means:

```text
RESUME CX-R1-000
FROM ITS LATEST CHECKPOINT
USING THE LATEST VALID PROMPT CHAIN
AFTER VERIFYING THE LIVE GITHUB AND LOCAL REPOSITORY STATE
```

It does not mean:

- start `CX-R1-001`;
- create source code;
- create a branch;
- repeat completed work;
- ignore the last blocker;
- use a temporary non-Git workspace.

## Pointer update rule

This pointer may be updated only when:

1. the current task receives an externally reviewed final state; or
2. the owner explicitly activates another exact task.

Completing one task does not automatically update this pointer to the next task.
