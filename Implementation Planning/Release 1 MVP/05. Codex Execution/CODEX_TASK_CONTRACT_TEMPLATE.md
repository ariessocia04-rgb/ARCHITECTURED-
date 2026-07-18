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
  - Codex Code/README.md
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
  - duplicate copies of application source under Codex Code/

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
  - proposed creation duplicates existing canonical implementation
  - task attempts to copy application source code into Codex Code/

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

1. Read every source path in order.
2. Verify the exact authorization statement.
3. Verify latest `main`, open PRs, branch, checks, migrations, and active worker.
4. Inspect existing implementation and tests.
5. Search and classify existing work before creating anything.
6. Return one factual state:

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
- Store actual source code only in canonical implementation paths.
- Use `Codex Code/Tasks/<task-id>/` for contracts, manifests, evidence, review, and merge records only.
- Stop when the task acceptance criteria are met; do not begin the next manifest task.

### Before publishing

1. Re-read the task contract and changed diff.
2. Run every required check.
3. Review schema/RLS/security implications.
4. Review migration from empty and previous supported state.
5. Review UI against assigned screen IDs/states.
6. Confirm no unrelated files changed.
7. Confirm every changed canonical path appears in `CHANGED_FILES.md`.
8. Create the completion and evidence records under the task folder.
9. Commit intentionally and open a draft PR unless explicitly approved otherwise.
10. Read back the PR files/checks.

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
- canonical path: purpose
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

Codex must report the exact blocker, file, command, error, and required decision. It must not guess architecture, silently skip a test, broaden scope to solve an unrelated problem, or create a parallel implementation.

## Approval rule

A task becomes `APPROVED_COMPLETE` only after repository review verifies:

- scope and architecture compliance;
- required checks passing;
- no unauthorized files/features;
- no duplicated canonical implementation or copied source tree;
- correct migration/data/security behavior;
- required UI/UX and accessibility evidence;
- rollback/recovery documentation;
- factual completion report and read-back;
- task review and merge records stored under `Codex Code/Tasks/<task-id>/`.
