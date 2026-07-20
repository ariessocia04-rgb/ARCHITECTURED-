# CODEX PROMPT CHAIN — INDEX

## Start here

Read in this order:

1. [Current Task Completion Law](../CURRENT_TASK_COMPLETION_LAW.md)
2. [Fully Armored Prompt Requirements](../ARMORED_PROMPT_REQUIREMENTS.md)
3. [Armored Codex Master Prompt](../ARMORED_CODEX_MASTER_PROMPT.md)
4. [Prompt Chain Control Center](README.md)
5. [Execution Mode Policy](EXECUTION_MODE.md)
6. [Active Task Pointer](ACTIVE_TASK.md)
7. [Prompt Registry](PROMPT_REGISTRY.md)
8. [Continue Protocol](CONTINUE_PROTOCOL.md)
9. active task's numbered prompts in registry order
10. active task's `TASK_RECORD.md`
11. active task's `TASK_CONTRACT.md`
12. active task's `CHECKPOINT.md` when present
13. active task's operational `Codex Code/Reviews/<TASK-ID>/REVIEW_HANDOFF.md` when present
14. exact master-plan/release/technology sources required by the current prompt
15. live Git branch, PR, review, code, migration, test, model-capacity, scheduler, and worker state

## Current active task

```text
TASK: GOV-CX-001
TITLE: Canonical Continue, Sleep, Review, and Model Fallback Controls
CURRENT PROMPT: GOV-CX-001/0001-CANONICAL-CONTINUE-SLEEP-AND-MODEL-FALLBACK.md
TASK RECORD: ../Tasks/GOV-CX-001/TASK_RECORD.md
TASK CONTRACT: ../Tasks/GOV-CX-001/TASK_CONTRACT.md
CHECKPOINT: ../Tasks/GOV-CX-001/CHECKPOINT.md
EXECUTION MODE POLICY: EXECUTION_MODE.md
PREVIOUS RELEASE TASK: CX-R1-002 = APPROVED_COMPLETE
WORK BRANCH: governance/codex-execution-modes
CURRENT EXECUTION: GOVERNANCE AND OPERATIONAL CONTROL ONLY
CANONICAL IMPLEMENTATION ROOT: ../Implementation/
PRODUCT SOURCE CODE AUTHORIZED: NO
NEXT RELEASE TASK CX-R1-003 AUTHORIZED: NO
SLEEP QUEUE AUTHORIZED: NO
```

## Control files

- [Prompt README](README.md)
- [Execution Mode Policy](EXECUTION_MODE.md)
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
- Completion report: `../Tasks/CX-R1-002/COMPLETION_REPORT.md`
- External review: `../Tasks/CX-R1-002/REVIEW_RESULT.md`
- Merge record: `../Tasks/CX-R1-002/MERGE_RECORD.md`
- Terminal state: `APPROVED_COMPLETE` (PR #18 merged as `d0fe1d23fc1aa19b61958986709d7bc9fd01261b`)

## Current task prompt chain

### GOV-CX-001

- Current Prompt 0001: [Canonical Continue, Sleep, Review, and Model Fallback](GOV-CX-001/0001-CANONICAL-CONTINUE-SLEEP-AND-MODEL-FALLBACK.md)
- Task record: `../Tasks/GOV-CX-001/TASK_RECORD.md`
- Task contract: `../Tasks/GOV-CX-001/TASK_CONTRACT.md`
- Checkpoint: `../Tasks/GOV-CX-001/CHECKPOINT.md`
- Operational reviewer handoff, when created: `../Reviews/GOV-CX-001/REVIEW_HANDOFF.md`

## Non-negotiable completion rule

```text
FINISH THE ENTIRE CURRENT AUTHORIZED TASK
→ RUN ALL REQUIRED VALIDATIONS
→ PRODUCE ALL REQUIRED FACTUAL EVIDENCE
→ ONE DRAFT PR
→ INDEPENDENT EXTERNAL REVIEW/CORRECTION OF THE SAME TASK
→ OWNER-AUTHORIZED MERGE AND MAIN READ-BACK
→ APPROVED_COMPLETE
→ ONLY OWNER MAY ACTIVATE ANOTHER TASK OR EXACT SLEEP QUEUE
```

`continue` always resumes the active task from the latest verified checkpoint. `sleep mode` follows the same task contract and adds scheduled review/correction behavior only. Neither command automatically selects an unauthorized next task.
