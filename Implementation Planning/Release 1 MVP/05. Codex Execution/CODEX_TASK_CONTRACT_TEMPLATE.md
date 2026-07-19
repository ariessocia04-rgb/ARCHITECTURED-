# RELEASE 1 MVP — CODEX TASK CONTRACT TEMPLATE

Use one completed copy for every authorized coding task. Missing required fields block execution.

```yaml
task_id: CX-R1-XXX
task_title: ""
release_id: ROS-R1-MVP-2026-01
repository: ariessocia04-rgb/ARCHITECTURED-
base_branch: main
work_branch: agent/<task-id>-<short-name>
canonical_implementation_root: Codex Code/Implementation

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
  - Codex Code/README.md
  - Codex Code/Implementation/README.md
  - Codex Code/ARMORED_CODEX_MASTER_PROMPT.md
  - Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md
  - Codex Code/Tasks/<task-id>/TASK_RECORD.md
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
  - root-level apps/
  - root-level packages/
  - root-level supabase/
  - root-level tests/
  - root-level infrastructure/
  - source-code copies under Codex Code/Tasks/
  - source-code copies under Codex Code/Evidence/
  - source-code copies under Codex Code/Reviews/

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
  - working directory is not the real ARCHITECTURED- Git checkout
  - origin remote does not match ariessocia04-rgb/ARCHITECTURED-
  - source architecture missing or contradictory
  - dependency incomplete
  - active worker overlaps tightly coupled paths
  - required provider/version/secret name not approved
  - task requires changing approved workflow, role, permission, price, limit, or release boundary
  - tests cannot be run or fail
  - requested file is outside allowed paths
  - proposed creation duplicates existing canonical implementation
  - task attempts to create application code outside Codex Code/Implementation/
  - implementation code already exists outside the canonical root and no migration task is authorized

task_record_path: Codex Code/Tasks/<task-id>/TASK_RECORD.md
task_contract_path: Codex Code/Tasks/<task-id>/TASK_CONTRACT.md
changed_files_manifest_path: Codex Code/Tasks/<task-id>/CHANGED_FILES.md
test_evidence_path: Codex Code/Tasks/<task-id>/TEST_EVIDENCE.md
security_review_path: Codex Code/Tasks/<task-id>/SECURITY_AND_SCOPE_REVIEW.md
completion_report_path: Codex Code/Tasks/<task-id>/COMPLETION_REPORT.md
review_result_path: Codex Code/Tasks/<task-id>/REVIEW_RESULT.md
merge_record_path: Codex Code/Tasks/<task-id>/MERGE_RECORD.md
```

## Required execution behavior

### Before editing

1. Verify that the working directory is the real Git checkout containing `.git`, `1plan.md`, and `Codex Code/Implementation/README.md`.
2. Verify that `origin` points to `ariessocia04-rgb/ARCHITECTURED-`.
3. Read every source path in order.
4. Verify the exact authorization statement.
5. Verify latest `main`, open PRs, branches, checks, migrations, and active workers.
6. Inspect the entire repository for existing implementation and tests.
7. Search and classify existing work before creating anything.
8. Confirm every authorized implementation path begins with `Codex Code/Implementation/`.
9. Return one factual state:

```text
NOT_AUTHORIZED
BLOCKED_ARCHITECTURE_CLARIFICATION
BLOCKED_DEPENDENCY
BLOCKED_ENVIRONMENT
SKIPPED_ALREADY_COMPLETE
READY
```

### Existing code outside canonical root

When code is found outside `Codex Code/Implementation/`:

- do not copy it;
- do not delete it;
- do not move it;
- do not create a parallel implementation;
- report exact paths;
- return `BLOCKED_ARCHITECTURE_CLARIFICATION` unless an explicit migration task is authorized.

### During editing

- Edit only allowed paths.
- Store executable implementation only under `Codex Code/Implementation/`.
- Preserve unrelated user work.
- Use the approved stack and locked versions.
- Keep business rules in shared domain/application services.
- Add tests with the implementation.
- Add migration and rollback/forward-recovery evidence where applicable.
- Do not weaken RLS, authorization, audit, validation, idempotency, accessibility, or error handling to make a test pass.
- Do not commit secrets or real customer data.
- Use `Codex Code/Tasks/<task-id>/` for contracts, manifests, evidence, review, and merge records only.
- Stop when the task acceptance criteria are met; do not begin the next manifest task.

### Before publishing

1. Re-read the task contract and changed diff.
2. Run every required check.
3. Review schema/RLS/security implications.
4. Review migration from empty and previous supported state.
5. Review UI against assigned screen IDs/states.
6. Confirm no unrelated files changed.
7. Confirm no executable code was created outside `Codex Code/Implementation/`.
8. Confirm every changed path appears in `CHANGED_FILES.md`.
9. Create completion and evidence records under the task folder.
10. Commit intentionally and open a draft PR unless explicitly approved otherwise.
11. Read back the PR files/checks.

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

## Environment
- Repository root:
- Origin remote:
- Canonical implementation root: `Codex Code/Implementation/`

## Sources read
- path / section / requirement

## Changes
- canonical path under `Codex Code/Implementation/`: purpose
- changed-files manifest: `Codex Code/Tasks/<TASK-ID>/CHANGED_FILES.md`

## Contracts and migrations
- migration IDs
- tables/policies/functions
- API/event/schema versions

## Tests and evidence
- exact command
- result
- artifact/log reference
- task evidence path

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

Codex must report the exact blocker, path, command, error, and required decision. It must not guess architecture, silently skip a test, broaden scope, create a parallel implementation, or use a generated non-Git workspace as the project repository.

## Approval rule

A task becomes `APPROVED_COMPLETE` only after repository review verifies:

- scope and architecture compliance;
- required checks passing;
- no unauthorized files/features;
- all executable code is under `Codex Code/Implementation/`;
- no competing root-level source tree exists;
- no duplicated canonical implementation;
- correct migration/data/security behavior;
- required UI/UX and accessibility evidence;
- rollback/recovery documentation;
- factual completion report and read-back;
- task review and merge records stored under `Codex Code/Tasks/<task-id>/`.
