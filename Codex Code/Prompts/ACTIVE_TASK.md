# CODEX PROMPT CHAIN — ACTIVE TASK POINTER

This file identifies the only task that the owner command `continue` or an authorized sleep-mode run may resume.

```yaml
active_task_id: GOV-CX-001
active_task_title: Canonical Continue, Sleep, Review, and Model Fallback Controls
release_id: REPOSITORY_GOVERNANCE
execution_type: GOVERNANCE_AND_OPERATIONAL_CONTROL
current_status: ACTIVE_IMPLEMENTATION
execution_mode_policy: Codex Code/Prompts/EXECUTION_MODE.md
latest_prompt_sequence: 0001
latest_prompt_path: Codex Code/Prompts/GOV-CX-001/0001-CANONICAL-CONTINUE-SLEEP-AND-MODEL-FALLBACK.md
latest_checkpoint_path: Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md
task_record_path: Codex Code/Tasks/GOV-CX-001/TASK_RECORD.md
task_contract_path: Codex Code/Tasks/GOV-CX-001/TASK_CONTRACT.md
completion_law_path: Codex Code/CURRENT_TASK_COMPLETION_LAW.md
prompt_requirements_path: Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
canonical_implementation_root: Codex Code/Implementation/
work_branch: governance/codex-execution-modes
pull_request: https://github.com/ariessocia04-rgb/ARCHITECTURED-/pull/19
previous_task_id: CX-R1-002
previous_task_status: APPROVED_COMPLETE
previous_task_review_path: Codex Code/Tasks/CX-R1-002/REVIEW_RESULT.md
previous_task_merge_path: Codex Code/Tasks/CX-R1-002/MERGE_RECORD.md
previous_task_merge_commit: d0fe1d23fc1aa19b61958986709d7bc9fd01261b
next_task_id: CX-R1-003
next_task_authorized: false
sleep_queue_authorized: false
```

## Meaning of `continue`

```text
READ EXECUTION_MODE.md AND THE COMPLETE STRICT RULE CHAIN
→ RESUME AND FINISH GOV-CX-001
→ USE PROMPT 0001, TASK RECORD, TASK CONTRACT, AND CHECKPOINT
→ WORK ONLY ON governance/codex-execution-modes
→ CHANGE ONLY AUTHORIZED GOVERNANCE, PROMPT, TASK, REVIEW, AND INDEX PATHS
→ RUN ALL REQUIRED VALIDATIONS AND CREATE FACTUAL EVIDENCE
→ OPEN OR UPDATE ONE DRAFT PR
→ RETURN READY_FOR_REVIEW OR READY_FOR_OWNER_MERGE
→ STOP BEFORE MERGE
→ DO NOT BEGIN CX-R1-003
```

## Meaning of `sleep mode`

While GOV-CX-001 is active, scheduled sleep-mode runs may continue only this same task and may apply only exact authorized reviewer corrections on the same branch and PR.

No later task or sleep queue is authorized by this pointer.

## Current-task completion rule

```text
ONE ACTIVE TASK
→ FULL AUTHORIZED SCOPE
→ ALL REQUIRED VALIDATIONS
→ COMPLETE FACTUAL EVIDENCE
→ ONE DRAFT PR
→ INDEPENDENT EXTERNAL REVIEW/CORRECTION
→ OWNER-AUTHORIZED MERGE AND MAIN READ-BACK
→ APPROVED_COMPLETE
→ ONLY THEN MAY OWNER ACTIVATE CX-R1-003 OR AN AUTHORIZED SLEEP QUEUE
```

A blocker, interruption, failed validation, pending check, ready-for-review state, model fallback, or sleep-mode run does not activate the next task.

## Pointer update rule

This pointer may move from GOV-CX-001 only when:

1. GOV-CX-001 receives independent external review, owner-authorized merge, main read-back, and terminal `APPROVED_COMPLETE`; or
2. the owner explicitly cancels or supersedes it with a controlled recovery plan.

Completing one task never automatically authorizes the next task outside an exact repository-backed owner-authorized sleep queue whose prerequisites are verified.
