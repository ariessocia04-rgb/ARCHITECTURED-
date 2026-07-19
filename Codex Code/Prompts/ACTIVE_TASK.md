# CODEX PROMPT CHAIN — ACTIVE TASK POINTER

This file identifies the only task that the owner command `continue` may resume.

```yaml
active_task_id: GOV-CONTROL-001
active_task_title: Repository-Controlled Continue, Sleep Mode, and Model Fallback
release_id: GOVERNANCE-CONTROL
execution_type: CONTROLLED_GOVERNANCE_RECONCILIATION
current_status: AUTHORIZED_NOT_STARTED
latest_prompt_sequence: 0001
latest_prompt_path: Codex Code/Prompts/GOV-CONTROL-001/0001-CANONICAL-CONTINUE-SLEEP-AND-MODEL-FALLBACK.md
latest_checkpoint_path: Codex Code/Tasks/GOV-CONTROL-001/CHECKPOINT.md
task_record_path: Codex Code/Tasks/GOV-CONTROL-001/TASK_RECORD.md
task_contract_path: Codex Code/Tasks/GOV-CONTROL-001/TASK_CONTRACT.md
completion_law_path: Codex Code/CURRENT_TASK_COMPLETION_LAW.md
prompt_requirements_path: Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
canonical_implementation_root: Codex Code/Implementation/
work_branch: governance/activate-cx-r1-002
pull_request: 20
pull_request_state: DRAFT_OPEN
previous_governance_pr: 17
previous_governance_pr_status: MERGED
previous_implementation_task: CX-R1-002
previous_implementation_task_status: MERGED_IN_PR_18
next_task_id: CX-R1-003
next_task_authorized: false
```

## Meaning of `continue`

`continue` means:

```text
RESUME AND FINISH GOV-CONTROL-001
FROM ITS LATEST VERIFIED CHECKPOINT
USING PROMPT 0001, TASK RECORD, AND TASK CONTRACT
WORK ONLY ON governance/activate-cx-r1-002 AND OPEN DRAFT PR #20
FETCH AND RECONCILE AGAINST LATEST ORIGIN/MAIN
PRESERVE MERGED PR #17, MERGED PR #18, AND ALL UNIQUE VALID NEW CONTROLS
IMPLEMENT THE CANONICAL CONTINUE/SLEEP/DEACTIVATION/REVIEW-HANDOFF/MODEL-FALLBACK METHOD
RUN ALL AFFECTED VALIDATIONS
RETURN READY_FOR_OWNER_MERGE
DO NOT MERGE
DO NOT BEGIN CX-R1-003
```

It does not mean:

- work directly on `main`;
- recreate or resume CX-R1-002 implementation;
- create another governance branch or PR;
- implement product, UI, database, observability, deployment, or later release work;
- force-push, reset, clean, delete, rename, relocate, or overwrite valid owner-authored work;
- self-review, self-approve, or self-merge;
- automatically select another task.

## Current-task completion rule

```text
ONE ACTIVE TASK
→ FULL AUTHORIZED GOVERNANCE RECONCILIATION
→ ALL REQUIRED VALIDATIONS
→ COMPLETE FACTUAL EVIDENCE
→ UPDATE SAME DRAFT PR #20
→ EXTERNAL REVIEW/CORRECTION
→ AUTHORIZED MERGE AND MAIN READ-BACK
→ APPROVED_COMPLETE
→ ONLY OWNER MAY ACTIVATE ANOTHER TASK
```

A blocker, interruption, failed validation, owner-publish handoff, or ready-for-review state does not activate the next task.

## Pointer update rule

This pointer may be updated to another task only when:

1. `GOV-CONTROL-001` receives an externally reviewed terminal state; or
2. the owner explicitly cancels or supersedes it with a controlled recovery plan.

Completing one task never automatically authorizes the next task.
