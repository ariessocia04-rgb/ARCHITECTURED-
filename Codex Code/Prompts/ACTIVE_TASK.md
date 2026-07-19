# CODEX PROMPT CHAIN — ACTIVE TASK POINTER

This file identifies the only task that the owner command `continue` may resume.

```yaml
active_task_id: CX-R1-001
active_task_title: Workspace and Version Bootstrap
release_id: ROS-R1-MVP-2026-01
execution_type: CONTROLLED_IMPLEMENTATION
current_status: AUTHORIZED_READY_FOR_OWNER_BRANCH_SETUP_AND_EXECUTION
latest_prompt_sequence: 0001
latest_prompt_path: Codex Code/Prompts/CX-R1-001/0001-WORKSPACE-AND-VERSION-BOOTSTRAP.md
latest_checkpoint_path: Codex Code/Tasks/CX-R1-001/CHECKPOINT.md
task_record_path: Codex Code/Tasks/CX-R1-001/TASK_RECORD.md
task_contract_path: Codex Code/Tasks/CX-R1-001/TASK_CONTRACT.md
completion_law_path: Codex Code/CURRENT_TASK_COMPLETION_LAW.md
prompt_requirements_path: Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
canonical_implementation_root: Codex Code/Implementation/
work_branch: agent/cx-r1-001-workspace-bootstrap
pull_request: NONE_YET
previous_task_id: CX-R1-000
previous_task_status: APPROVED_COMPLETE
previous_task_review_path: Codex Code/Tasks/CX-R1-000/REVIEW_RESULT.md
next_task_id: CX-R1-002
next_task_authorized: false
```

## Meaning of `continue`

`continue` means:

```text
RESUME AND FINISH CX-R1-001
FROM ITS LATEST VERIFIED CHECKPOINT
USING PROMPT 0001, TASK RECORD, AND TASK CONTRACT
WORK ONLY ON agent/cx-r1-001-workspace-bootstrap
STORE EXECUTABLE OUTPUT ONLY UNDER Codex Code/Implementation/
RUN ALL REQUIRED CHECKS AND CREATE FACTUAL EVIDENCE
RETURN READY_FOR_REVIEW OR READY_FOR_OWNER_PUBLISH
DO NOT BEGIN CX-R1-002
```

It does not mean:

- work directly on `main`;
- repeat `CX-R1-000`;
- create root-level implementation folders;
- implement business modules, product UI, database business schema, CI, observability, or later tasks;
- bypass a Windows `.git` sandbox restriction;
- merge its own PR;
- proceed automatically to `CX-R1-002`.

## Current-task completion rule

```text
ONE ACTIVE TASK
→ FULL AUTHORIZED SCOPE
→ ALL REQUIRED VALIDATIONS
→ COMPLETE EVIDENCE/REPORT
→ DRAFT PR OR OWNER-PUBLISH HANDOFF
→ EXTERNAL REVIEW/CORRECTION
→ AUTHORIZED MERGE AND MAIN READ-BACK
→ APPROVED_COMPLETE
→ ONLY OWNER MAY ACTIVATE ANOTHER TASK
```

A blocker, interruption, failed validation, owner-publish handoff, or ready-for-review state does not activate the next task.

## Pointer update rule

This pointer may be updated to another task only when:

1. `CX-R1-001` receives an externally reviewed terminal state; or
2. the owner explicitly cancels or supersedes it with a controlled recovery plan.

Completing one task never automatically authorizes the next task.
