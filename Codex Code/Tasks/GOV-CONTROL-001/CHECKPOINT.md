# GOV-CONTROL-001 — Checkpoint

```yaml
status: AUTHORIZED_NOT_STARTED
repository: ariessocia04-rgb/ARCHITECTURED-
base_branch: main
work_branch: governance/activate-cx-r1-002
pull_request: 17
latest_verified_main: MUST_FETCH_BEFORE_WORK
implementation_authorized: false
governance_reconciliation_authorized: true
new_branch_authorized: false
new_pr_authorized: false
force_push_authorized: false
next_implementation_task_authorized: false
continuation_safe: true
```

## Verified facts before Codex execution

- PR #18 has been merged into `main`.
- Existing PR #17 contains the permanent repository-backed `continue` controls but must be reconciled against latest `main`.
- The owner explicitly requested canonical `continue`, `sleep mode`, deactivation, reviewer handoff, and approved-model fallback behavior.
- No product implementation is authorized by this task.

## First required action

```text
FETCH LATEST ORIGIN/MAIN
→ VERIFY MERGED PR #18
→ COMPARE PR #17 AGAINST LATEST MAIN
→ LIST ALL OVERLAPPING FILES AND UNIQUE VALID CONTENT
→ FOLLOW THE ACTIVE PROMPT AND TASK CONTRACT
```

## Stop rule

Return `READY_FOR_OWNER_MERGE` or an exact `BLOCKED_*` / `FAILED_VALIDATION` state. Do not merge and do not start `CX-R1-003`.
