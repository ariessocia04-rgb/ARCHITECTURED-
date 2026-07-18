# RELEASE 1 MVP — CODEX TASK CONTRACT TEMPLATE

Use one completed copy for every authorized coding task. Missing required fields block execution.

```yaml
task_id: CX-R1-XXX
task_title: ""
release_id: ROS-R1-MVP-2026-01
repository: ariessocia04-rgb/ARCHITECTURED-
base_branch: main
work_branch: agent/<task-id>-<short-name>

implementation_authorized: false
authorization_statement: ""
authorized_by: ""
authorized_at: ""
authorization_scope: ""

active_worker_state: UNCLAIMED_INCOMPLETE
active_worker_evidence: ""
last_verified_main_sha: ""
open_pr_check: ""

source_paths:
  - 1plan.md
  - Implementation Planning/Release 1 MVP/INDEX.md
source_sections_or_requirement_ids: []
dependency_task_ids: []
dependency_completion_evidence: []

objective: ""
in_scope: []
out_of_scope: []

allowed_paths_create: []
allowed_paths_modify: []
forbidden_paths:
  - 1plan.md
  - canonical architecture files unless the task explicitly authorizes documentation synchronization only
  - unrelated modules

required_entities_or_tables: []
required_migration_ids: []
required_permissions: []
required_rls_policies: []
required_api_operations: []
required_events: []
required_queue_jobs: []
required_ui_screen_ids: []
required_states: []
required_document_or_print_profiles: []

business_invariants: []
idempotency_requirements: []
audit_requirements: []
privacy_and_security_requirements: []
accessibility_requirements: []
performance_or_reliability_targets: []

required_tests:
  format: true
  lint: true
  typecheck: true
  unit: []
  database_migration: []
  rls_authorization: []
  contract: []
  integration: []
  component: []
  accessibility: []
  e2e: []
  recovery: []
  hardware: []

acceptance_criteria: []
required_evidence: []
rollback_or_forward_recovery: ""

stop_conditions:
  - authorization missing or ambiguous
  - source architecture missing or contradictory
  - dependency incomplete
  - active worker overlaps tightly coupled paths
  - required provider/version/secret name not approved
  - task requires changing approved workflow, role, permission, price, limit, or release boundary
  - tests cannot be run or fail
  - requested file is outside allowed paths

completion_report_path: docs/evidence/<task-id>.md
```

## Required execution behavior

### Before editing

1. Read every source path in order.
2. Verify the exact authorization statement.
3. Verify latest `main`, open PRs, branch, checks, migrations, and active worker.
4. Inspect existing implementation and tests.
5. Return one factual state:

```text
NOT_AUTHORIZED
BLOCKED_ARCHITECTURE_CLARIFICATION
BLOCKED_DEPENDENCY
BLOCKED_ENVIRONMENT
SKIPPED_ALREADY_COMPLETE
READY
```

### During editing

- Edit only allowed paths.
- Preserve unrelated user work.
- Use the approved stack and locked versions.
- Keep business rules in shared domain/application services.
- Add tests with the implementation.
- Add migration and rollback/forward-recovery evidence where applicable.
- Do not weaken RLS, authorization, audit, validation, idempotency, accessibility, or error handling to make a test pass.
- Do not commit secrets or real customer data.
- Stop when the task acceptance criteria are met; do not begin the next manifest task.

### Before publishing

1. Re-read the task contract and changed diff.
2. Run every required check.
3. Review schema/RLS/security implications.
4. Review migration from empty and previous supported state.
5. Review UI against assigned screen IDs/states.
6. Confirm no unrelated files changed.
7. Create the completion report.
8. Commit intentionally and open a draft PR unless explicitly approved otherwise.
9. Read back the PR files/checks.

## Mandatory completion report

```markdown
# <TASK_ID> COMPLETION REPORT

## Result
- Status:
- Authorization evidence:
- Base SHA:
- Branch:
- PR:
- Commit(s):

## Sources read
- path / section / requirement

## Changes
- path: purpose

## Contracts and migrations
- migration IDs
- tables/policies/functions
- API/event/schema versions

## Tests and evidence
- exact command
- result
- artifact/log reference

## Security and scope
- tenant isolation
- branch/role/record/field checks
- secret/privacy review

## UX and accessibility
- screen IDs
- states
- responsive/accessibility tests

## Known limitations
- none or explicit list

## Recovery
- rollback/forward recovery

## Review status
- READY_FOR_REVIEW / FAILED_VALIDATION

## Next action
- exact next authorized task or STOP
```

## Error handling

Codex must report the exact blocker, file, command, error, and required decision. It must not guess architecture, silently skip a test, or broaden scope to solve an unrelated problem.

## Approval rule

A task becomes `APPROVED_COMPLETE` only after repository review verifies:

- scope and architecture compliance;
- required checks passing;
- no unauthorized files/features;
- correct migration/data/security behavior;
- required UI/UX and accessibility evidence;
- rollback/recovery documentation;
- factual completion report and read-back.