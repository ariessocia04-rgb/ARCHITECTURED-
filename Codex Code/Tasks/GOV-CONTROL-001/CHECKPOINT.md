# GOV-CONTROL-001 — Checkpoint

```yaml
status: AUTHORIZED_NOT_STARTED
repository: ariessocia04-rgb/ARCHITECTURED-
base_branch: main
work_branch: governance/activate-cx-r1-002
pull_request: 20
pull_request_state: DRAFT_OPEN
latest_verified_main: MUST_FETCH_BEFORE_WORK
implementation_authorized: false
governance_reconciliation_authorized: true
second_branch_authorized: false
second_pr_authorized: false
force_push_authorized: false
next_implementation_task_authorized: false
continuation_safe: true
```

## Verified facts before Codex execution

- PR #17 has already been merged into `main` and is historical evidence.
- PR #18 has already been merged into `main`.
- Draft PR #20 now carries the separately authorized `GOV-CONTROL-001` governance task.
- The owner explicitly requested canonical `continue`, `sleep mode`, deactivation, reviewer handoff, and approved-model fallback behavior.
- No product implementation is authorized by this task.

## First required action

```text
FETCH LATEST ORIGIN/MAIN
→ VERIFY MERGED PR #17 AND PR #18 CONTENT
→ COMPARE DRAFT PR #20 AGAINST LATEST MAIN
→ LIST ALL OVERLAPPING FILES AND UNIQUE VALID CONTENT
→ FOLLOW THE ACTIVE PROMPT AND TASK CONTRACT
```

## Stop rule

Return `READY_FOR_OWNER_MERGE` or an exact `BLOCKED_*` / `FAILED_VALIDATION` state. Do not merge and do not start `CX-R1-003`.
