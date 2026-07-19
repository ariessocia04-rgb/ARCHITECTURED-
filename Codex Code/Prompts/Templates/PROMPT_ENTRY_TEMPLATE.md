# <TASK-ID> — PROMPT <SEQUENCE>

## Metadata

```yaml
task_id: CX-R1-XXX
sequence: 000X
prompt_type: INITIAL | CONTINUE | CORRECTION | REVIEW_FIX | RECOVERY
status: CURRENT
authorized_by: OWNER
authorization_scope: exact scope
supersedes: none or exact prompt/rule
checkpoint_path: Codex Code/Tasks/<TASK-ID>/CHECKPOINT.md
implementation_root: Codex Code/Implementation/
next_task_authorized: false
```

## Reason for this prompt

Describe why the prompt was added and what prior state or blocker it continues.

## Required sources

List exact repository paths in reading order.

## Live-state verification

List exact Git, branch, PR, migration, test, and worker checks required before action.

## Continuation point

State the expected checkpoint and first incomplete item. Codex must still verify it against live evidence.

## Authorized work

State exact in-scope work and allowed paths.

## Prohibited work

State deletion, duplication, architecture, branch, merge, secret, and automatic-next-task restrictions.

## Required tests and evidence

List exact checks and task evidence files.

## Stop condition

State the factual result and require checkpoint update before stopping.
