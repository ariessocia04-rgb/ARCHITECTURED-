# CODEX PROMPT CHAIN — INDEX

## Start here

Read in this order:

1. [Current Task Completion Law](../CURRENT_TASK_COMPLETION_LAW.md)
2. [Fully Armored Prompt Requirements](../ARMORED_PROMPT_REQUIREMENTS.md)
3. [Armored Codex Master Prompt](../ARMORED_CODEX_MASTER_PROMPT.md)
4. [Prompt Chain Control Center](README.md)
5. [Active Task Pointer](ACTIVE_TASK.md)
6. [Prompt Registry](PROMPT_REGISTRY.md)
7. [Continue Protocol](CONTINUE_PROTOCOL.md)
8. active task's numbered prompts in registry order
9. active task's `TASK_RECORD.md`
10. active task's `TASK_CONTRACT.md`
11. active task's `CHECKPOINT.md` when present
12. exact master-plan/release/technology sources required by the current prompt
13. live Git branch, PR, code, migration, test, review, automation, and worker state

## Current active task

```text
TASK: GOV-CONTROL-001
TITLE: Repository-Controlled Continue, Sleep Mode, and Model Fallback
CURRENT PROMPT: GOV-CONTROL-001/0001-CANONICAL-CONTINUE-SLEEP-AND-MODEL-FALLBACK.md
TASK RECORD: ../Tasks/GOV-CONTROL-001/TASK_RECORD.md
TASK CONTRACT: ../Tasks/GOV-CONTROL-001/TASK_CONTRACT.md
CHECKPOINT: ../Tasks/GOV-CONTROL-001/CHECKPOINT.md
MERGED GOVERNANCE PR: 17
PREVIOUS IMPLEMENTATION TASK: CX-R1-002 = MERGED IN PR #18
WORK BRANCH: governance/activate-cx-r1-002
DRAFT PULL REQUEST: 20
CURRENT EXECUTION: RECONCILE DRAFT PR #20 AND COMPLETE CANONICAL CONTROL METHOD ONLY
PRODUCT SOURCE CODE AUTHORIZED: NO
SECOND BRANCH OR PR AUTHORIZED: NO
NEXT TASK CX-R1-003 AUTHORIZED: NO
```

## Control files

- [Prompt README](README.md)
- [Active Task](ACTIVE_TASK.md)
- [Prompt Registry](PROMPT_REGISTRY.md)
- [Continue Protocol](CONTINUE_PROTOCOL.md)
- [Prompt Entry Template](Templates/PROMPT_ENTRY_TEMPLATE.md)
- [Checkpoint Template](Templates/CHECKPOINT_TEMPLATE.md)
- [Completion Record](COMPLETION_RECORD.md)
- [Final Verification](FINAL_VERIFICATION.md)
- [Merge Record](MERGE_RECORD.md)
- [Main Read-Back](MAIN_READBACK.md)

## Completed task archive

### CX-R1-000

- Initial prompt: `../Tasks/CX-R1-000/PROMPT.md`
- Prompt 0002: [Continue after environment block](CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md)
- Prompt 0003: [Final armored continue and finish](CX-R1-000/0003-FINAL-ARMORED-CONTINUE-AND-FINISH.md)
- Prompt 0004: [Master SaaS sync continue and finish](CX-R1-000/0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md)
- Completion report: `../Tasks/CX-R1-000/COMPLETION_REPORT.md`
- External review: `../Tasks/CX-R1-000/REVIEW_RESULT.md`
- Terminal state: `APPROVED_COMPLETE`

### CX-R1-001

- Prompt 0001: [Workspace and Version Bootstrap](CX-R1-001/0001-WORKSPACE-AND-VERSION-BOOTSTRAP.md)
- Completion report: `../Tasks/CX-R1-001/COMPLETION_REPORT.md`
- External review: `../Tasks/CX-R1-001/REVIEW_RESULT.md`
- Merge record: `../Tasks/CX-R1-001/MERGE_RECORD.md`
- Terminal state: `APPROVED_COMPLETE` (PR #16 merged as `0fb218a3f8f8c100b8fd4655b6f04c14fcabd839`)

### CX-R1-002

- Prompt 0001: [CI, Quality, and Security Baseline](CX-R1-002/0001-CI-QUALITY-AND-SECURITY-BASELINE.md)
- Task record: `../Tasks/CX-R1-002/TASK_RECORD.md`
- Task contract: `../Tasks/CX-R1-002/TASK_CONTRACT.md`
- Completion evidence: `../Tasks/CX-R1-002/COMPLETION_REPORT.md`
- Merge: PR #18
- Registry status: `COMPLETED_TASK_ARCHIVE`

## Current task prompt chain

### GOV-CONTROL-001

- Current Prompt 0001: [Canonical Continue, Sleep Mode, and Model Fallback](GOV-CONTROL-001/0001-CANONICAL-CONTINUE-SLEEP-AND-MODEL-FALLBACK.md)
- Task record: `../Tasks/GOV-CONTROL-001/TASK_RECORD.md`
- Task contract: `../Tasks/GOV-CONTROL-001/TASK_CONTRACT.md`
- Checkpoint: `../Tasks/GOV-CONTROL-001/CHECKPOINT.md`

## Non-negotiable completion rule

```text
FINISH THE ENTIRE CURRENT AUTHORIZED TASK
→ RUN ALL REQUIRED VALIDATIONS
→ PRODUCE ALL REQUIRED EVIDENCE
→ UPDATE THE EXISTING DRAFT PR #20
→ EXTERNAL REVIEW/CORRECTION OF THE SAME TASK
→ AUTHORIZED MERGE AND MAIN READ-BACK
→ APPROVED_COMPLETE
→ ONLY OWNER MAY ACTIVATE ANOTHER TASK
```

`continue` always resumes the active task from the latest verified checkpoint. It never means select the next task automatically.

A blocker, owner-publish handoff, or ready-for-review state keeps the same task active.
