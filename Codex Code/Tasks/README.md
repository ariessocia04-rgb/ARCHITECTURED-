# CODEX TASK REGISTRY

## Rule

Every Codex task uses exactly one folder:

```text
Codex Code/Tasks/<TASK-ID>/
```

The task folder stores control and evidence, not duplicate application source code.

## Required lifecycle

```text
UNAUTHORIZED
→ AUTHORIZED
→ READY
→ ACTIVE
→ READY_FOR_REVIEW
→ APPROVED_COMPLETE or FAILED_VALIDATION
→ MERGED or RETURNED_FOR_CORRECTION
```

## Required records

- `TASK_RECORD.md` — current factual task state and summary.
- `TASK_CONTRACT.md` — exact authorization, scope, paths, tests, and stop conditions.
- `CHANGED_FILES.md` — manifest of canonical implementation paths changed.
- `TEST_EVIDENCE.md` — exact commands, results, and artifacts.
- `SECURITY_AND_SCOPE_REVIEW.md` — tenant/RLS/secret/privacy/authorization review.
- `REVIEW_RESULT.md` — reviewer findings and decision.
- `MERGE_RECORD.md` — final PR, merge SHA, read-back, and next task state.

Create only records that contain actual evidence. Missing evidence remains explicitly `NOT_CREATED` or `PENDING`; do not create empty placeholder files.

## Registered tasks

- [CX-R1-001](CX-R1-001/TASK_RECORD.md) — Workspace and Version Bootstrap (`APPROVED_COMPLETE`; PR #16 merged).
- [CX-R1-002](CX-R1-002/TASK_RECORD.md) — CI, Quality, and Security Baseline (`ACTIVE`).

- [CX-R1-000](CX-R1-000/TASK_RECORD.md) — Repository Safety and Live-State Verification.

Future task folders are added only after exact task authorization.
