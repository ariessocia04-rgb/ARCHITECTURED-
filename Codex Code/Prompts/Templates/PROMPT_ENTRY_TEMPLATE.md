# <TASK-ID> — ARMORED PROMPT <SEQUENCE>

## 1. Prompt identity

```yaml
task_id: CX-R1-XXX
prompt_sequence: 000X
prompt_type: INITIAL | CONTINUE | CORRECTION | REVIEW_FIX | RECOVERY | FINAL_CONTINUE_AND_FINISH
release_id: ROS-R1-MVP-2026-01
repository: ariessocia04-rgb/ARCHITECTURED-
active_task_title: exact task title
status: CURRENT
authorized_by: OWNER
authorization_scope: exact current-task scope
supersedes: none or exact earlier prompt/rule
checkpoint_path: Codex Code/Tasks/<TASK-ID>/CHECKPOINT.md
canonical_implementation_root: Codex Code/Implementation/
next_task_authorized: false
```

Read and obey `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md` and `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`.

## 2. Role

Define Codex's exact task role.

Define roles Codex is not authorized to perform.

## 3. Goal and definition of done

State the complete current-task outcome.

State every required deliverable, validation, evidence record, PR/review boundary, and truthful completion condition.

```text
FINISH THE ENTIRE CURRENT AUTHORIZED TASK.
DO NOT STOP AFTER ONE FILE, STEP, PHASE, OR PARTIAL TEST.
DO NOT BEGIN ANOTHER TASK.
```

## 4. Project and domain background

Summarize the execution-critical product, release, applications, roles, workflow, domain ownership, shared contracts, and non-goals.

Reference canonical sources rather than copying them.

## 5. Current live state and continuation checkpoint

```yaml
previous_status: exact status
base_main_sha: exact SHA or VERIFY_LIVE
current_branch: exact branch or NONE
current_pull_request: exact PR or NONE
completed_items: []
incomplete_items: []
failed_checks_or_review_comments: []
first_incomplete_action: exact action
checkpoint_path: Codex Code/Tasks/<TASK-ID>/CHECKPOINT.md
```

Codex must reconcile this checkpoint against live Git/GitHub state before making changes.

## 6. Required source-of-truth reading order

1. `1plan.md`
2. applicable `1plan-...EXTENSION.md`
3. `README.md`
4. `revise.md` and exact revision record
5. `index.md`
6. selected application/SaaS/release `INDEX.md`
7. exact task manifest and contract
8. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`
9. `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`
10. `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`
11. prompt chain, active task, registry, and checkpoint
12. exact domain/design/security sources
13. live branches, PRs, commits, checks, code, migrations, and active-worker evidence

Add exact task-specific paths.

When authorities conflict materially, return `BLOCKED_ARCHITECTURE_CLARIFICATION` with exact evidence.

## 7. Authorization matrix

```yaml
implementation_authorized: true|false
authorized_task: CX-R1-XXX
authorization_scope: exact scope
local_checkout_discovery_authorized: true|false
local_git_clone_authorized: true|false
read_only_fetch_authorized: true|false
source_code_changes_authorized: true|false
documentation_changes_authorized: true|false
dependency_installation_authorized: true|false
migration_authorized: true|false
branch_creation_authorized: true|false
commit_authorized: true|false
push_authorized: true|false
pull_request_authorized: true|false
merge_authorized: false
deletion_authorized: false
rename_or_move_authorized: false
architecture_change_authorized: false
automatic_next_task_authorized: false
```

Missing or ambiguous authority returns `NOT_AUTHORIZED`.

## 8. Allowed tools

List exact permitted tools, CLIs, commands, and their purpose.

## 9. Prohibited tools and actions

List exact forbidden actions, including applicable direct-main changes, force push, self-merge, destructive Git commands, secret exposure, architecture redesign, provider/framework substitution, test weakening, and parallel source-tree creation.

## 10. Allowed and protected paths

```yaml
allowed_paths_create:
  - exact/path/**
allowed_paths_modify:
  - exact/path/**
protected_paths:
  - exact/path/**
```

Executable code belongs under `Codex Code/Implementation/` only.

## 11. Existing-work and duplicate classification

Before creating anything, search and classify:

```text
EXISTING_COMPLETE
EXISTING_PARTIAL
NEW_ADDITIVE
CONFLICT
DUPLICATE
```

State the required action for each classification.

## 12. Complete implementation or verification sequence

Provide a numbered dependency-ordered sequence for every in-scope action.

For each step define:

- source requirement;
- target path;
- dependency;
- expected result;
- validation/test;
- blocker condition.

Codex continues through all steps unless a real external blocker prevents continuation.

## 13. Non-negotiable architecture and business rules

List exact tenant, branch, role, lifecycle, entitlement, financial, inventory, warranty, audit, cross-department, provider, printing, and release invariants applicable to the task.

## 14. Database, RLS, API, event, queue, and idempotency rules

State exact applicable migration, ownership, grants, RLS, negative testing, transaction, audit, API validation, event/webhook versioning, retry, duplicate-delivery, observability, and recovery requirements.

Use `NOT_APPLICABLE` with a reason for a task that cannot affect these areas.

## 15. UX, accessibility, responsive, offline, and failure-state rules

State exact applicable screen IDs/routes/roles and loading, empty, error, denied, subscription, offline, conflict, retry, success, responsive, keyboard, touch, screen-reader, low-vision, low-dexterity, confirmation, and audience-safety requirements.

Use `NOT_APPLICABLE` with a reason when appropriate.

## 16. Security and privacy requirements

State least privilege, secret handling, fixture/evidence privacy, session/support access, validation, safe files/documents, rate limits, audit/retention, dependency checks, and prohibited security weakening.

## 17. Required tests and exact evidence

List all applicable checks:

```text
format
lint
typecheck
unit
migration
RLS/authorization negative tests
contract
integration
component
accessibility
end-to-end
performance
recovery/rollback
hardware certification
production build
```

List exact expected evidence files under `Codex Code/Tasks/<TASK-ID>/`.

A failed required check returns `FAILED_VALIDATION`; do not hide or skip it.

## 18. Branch, commit, PR, review, and merge rules

State exact branch name, base, commit expectations, push/PR authority, external review requirement, correction behavior, merge authority, and main read-back requirement.

Codex never approves or merges its own work.

## 19. Blocker and checkpoint behavior

On a real blocker, report and checkpoint:

- exact status and error;
- commands/results;
- completed and incomplete work;
- first safe continuation action;
- branch/commit/PR;
- affected paths;
- required external action.

The same task remains active. Do not select the next task.

## 20. Required final report

```markdown
# <TASK-ID> COMPLETION REPORT

## Result
- Primary status:
- Current task complete: YES/NO
- Next task authorized: NO

## Authorization and Environment
- Authorization evidence:
- Repository/base SHA:
- Branch/PR:
- Prompt/checkpoint resolution:

## Sources Read
- exact path and section

## Existing Work Classification
| Path/Concern | Classification | Canonical Owner | Action |
|---|---|---|---|

## Work Completed
- exact completed item

## Changed Paths
- exact path

## Migrations / Contracts / APIs / Events
- exact result or NOT_APPLICABLE

## Tests and Evidence
- command/check:
- result:
- evidence path:

## Security / RLS / Privacy
- result:

## UX / Accessibility
- result:

## Limitations / Recovery / Rollback
- exact facts

## GitHub State
- commit:
- draft PR:
- review result:
- merge/read-back:

## Final Decision
- exact reason:
- next action: STOP or exact same-task continuation
```

## 21. Completion and stop condition

A read-only task finishes only after the complete required inspection and report.

A write task finishes only after all applicable implementation, tests, evidence, PR, external review/correction, authorized merge, and main read-back are complete.

```text
DO NOT STOP PREMATURELY.
FINISH THE ENTIRE CURRENT AUTHORIZED TASK.
AFTER FULL COMPLETION OR A FULLY REPORTED REAL EXTERNAL BLOCKER: STOP.
STOP NEVER AUTHORIZES THE NEXT TASK.
```