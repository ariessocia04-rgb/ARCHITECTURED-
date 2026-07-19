# CODEX PROMPT CHAIN — ACTIVE TASK POINTER

This file identifies the only task that the owner command `continue` may resume.

```yaml
active_task_id: CX-R1-002
active_task_title: CI, Quality, and Security Baseline
release_id: ROS-R1-MVP-2026-01
execution_type: CONTROLLED_IMPLEMENTATION
current_status: AUTHORIZED_NOT_STARTED
latest_prompt_sequence: 0001
latest_prompt_path: Codex Code/Prompts/CX-R1-002/0001-CI-QUALITY-SECURITY-BASELINE.md
latest_checkpoint_path: Codex Code/Tasks/CX-R1-002/CHECKPOINT.md
task_record_path: Codex Code/Tasks/CX-R1-002/TASK_RECORD.md
task_contract_path: Codex Code/Tasks/CX-R1-002/TASK_CONTRACT.md
completion_law_path: Codex Code/CURRENT_TASK_COMPLETION_LAW.md
prompt_requirements_path: Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
alignment_governance_path: Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md
canonical_implementation_root: Codex Code/Implementation/
base_main_sha_at_authorization: 0fb218a3f8f8c100b8fd4655b6f04c14fcabd839
work_branch: agent/cx-r1-002-ci-quality-security
pull_request: NONE_YET
previous_task_id: CX-R1-001
previous_task_status: APPROVED_COMPLETE
previous_task_review_path: Codex Code/Tasks/CX-R1-001/REVIEW_RESULT.md
previous_task_merge_path: Codex Code/Tasks/CX-R1-001/MERGE_RECORD.md
next_task_id: CX-R1-003
next_task_authorized: false
```

## Meaning of `continue`

```text
READ AGENTS.md, 1plan.md, AND ALIGNMENT GOVERNANCE
→ RESUME AND FINISH CX-R1-002
→ START FROM ITS LATEST VERIFIED CHECKPOINT
→ USE PROMPT 0001, TASK RECORD, AND TASK CONTRACT
→ VERIFY LIVE GIT/GITHUB STATE BEFORE EDITING
→ PRESERVE OWNER-AUTHORED ADDITIONS
→ DO NOT SILENTLY BROADEN THE ACTIVE TASK
→ WORK ONLY ON agent/cx-r1-002-ci-quality-security
→ IMPLEMENT THE COMPLETE CI, QUALITY, AND SECURITY BASELINE
→ RUN THE FULL REQUIRED SUITE TWICE FROM CLEAN CHECKOUT
→ CREATE FACTUAL EVIDENCE
→ COMMIT, PUSH, AND OPEN/UPDATE ONE DRAFT PR
→ RETURN CX-R1-002_READY_FOR_OWNER_MERGE
→ DO NOT MERGE
→ DO NOT BEGIN CX-R1-003
```

It does not mean work directly on `main`, repeat CX-R1-001, create duplicate workflows/reports/branches/PRs, modify unrelated architecture, treat a new idea as automatic code authorization, or select another task.

## Owner addition rule

A new instruction or feature must be classified under `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`. It remains planning input or future work unless the owner explicitly amends the current task and the canonical task records are updated before coding.

## Current-task completion rule

```text
ONE ACTIVE TASK
→ FULL AUTHORIZED SCOPE
→ ALL REQUIRED VALIDATIONS
→ COMPLETE EVIDENCE/REPORT
→ DRAFT PR
→ EXTERNAL REVIEW/CORRECTION
→ AUTHORIZED MERGE AND MAIN READ-BACK
→ APPROVED_COMPLETE
→ ONLY OWNER MAY ACTIVATE ANOTHER TASK
```

A blocker, interruption, failed validation, or ready-for-review state keeps CX-R1-002 active. Completing it never automatically authorizes CX-R1-003.
