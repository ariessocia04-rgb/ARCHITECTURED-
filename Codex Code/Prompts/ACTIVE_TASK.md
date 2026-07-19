# CODEX PROMPT CHAIN — ACTIVE TASK POINTER

This file identifies the only task that the owner command `continue` may resume.

```yaml
active_task_id: CX-R1-000
active_task_title: Repository Safety and Live-State Verification
release_id: ROS-R1-MVP-2026-01
execution_type: READ_ONLY_REPOSITORY_AND_ARCHITECTURE_SYNCHRONIZATION_VERIFICATION
current_status: READY_TO_RETRY_AND_FINISH_AGAINST_SYNCHRONIZED_MASTER_STATE
latest_prompt_sequence: 0004
latest_prompt_path: Codex Code/Prompts/CX-R1-000/0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md
latest_checkpoint_path: Codex Code/Tasks/CX-R1-000/CHECKPOINT.md
task_record_path: Codex Code/Tasks/CX-R1-000/TASK_RECORD.md
completion_law_path: Codex Code/CURRENT_TASK_COMPLETION_LAW.md
prompt_requirements_path: Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
master_sync_path: 1plan-SAAS_APPLICATION_WIREFRAME_WIREFLOW_INTEGRATION_EXTENSION.md
canonical_implementation_root: Codex Code/Implementation/
work_branch: NONE_AUTHORIZED
pull_request: NONE_AUTHORIZED
next_task_id: CX-R1-001
next_task_authorized: false
```

## Meaning of `continue`

`continue` means:

```text
RESUME AND FINISH CX-R1-000
FROM ITS LATEST CHECKPOINT
USING PROMPT 0004 AND THE COMPLETE VALID PROMPT CHAIN
LOCATE OR CLONE THE REAL GIT REPOSITORY WHEN REQUIRED
READ THE SYNCHRONIZED MASTER SAAS/APPLICATION/DESIGN PLAN
VERIFY THE COMPLETE LIVE REPOSITORY AND ARCHITECTURE STATE
RETURN THE FULL CX-R1-000 REPORT
DO NOT BEGIN CX-R1-001
```

It does not mean:

- start `CX-R1-001`;
- create application source code;
- create a task branch;
- repeat completed architecture or prompt-chain work;
- stop after merely locating/cloning the repository;
- stop after one verification phase;
- ignore the latest master-plan extension;
- use a temporary non-Git workspace as the repository.

## Current-task completion rule

The entire current authorized task must finish before any next task is proposed.

```text
ONE ACTIVE TASK
→ FULL SCOPE
→ ALL VALIDATIONS
→ COMPLETE EVIDENCE/REPORT
→ EXTERNAL REVIEW/CORRECTION
→ APPROVED_COMPLETE
→ OWNER MAY ACTIVATE ANOTHER TASK
```

A blocker, interruption, failed validation, or ready-for-review state does not activate the next task.

## Pointer update rule

This pointer may be updated to another task only when:

1. `CX-R1-000` receives an externally reviewed terminal state; or
2. the owner explicitly cancels or supersedes it.

Completing one task never automatically authorizes the next task.