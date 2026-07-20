# CODEX TASK STORAGE AND HANDOFF RULES

## Canonical separation

```text
Codex Code/Implementation/   = actual executable code
Codex Code/Tasks/<TASK-ID>/  = task contracts and task-specific evidence
Codex Code/Evidence/         = cross-task evidence indexes
Codex Code/Reviews/          = reviewer records
```

No source-code copy may be stored in a task, evidence, or review folder.

## Operational mode and reviewer handoff

The single execution-mode, sleep-loop, reviewer-handoff, sleep-queue, and model-fallback policy is `Codex Code/Prompts/EXECUTION_MODE.md`.

The only operational reviewer exchange for an active task is `Codex Code/Reviews/<TASK-ID>/REVIEW_HANDOFF.md`, created only when a factual handoff state or finding exists. It does not replace the terminal external-review evidence in `Codex Code/Tasks/<TASK-ID>/REVIEW_RESULT.md`, and no parallel handoff or copied policy is permitted.

## One task, one record folder

Every authorized Codex task uses:

```text
Codex Code/Tasks/<TASK-ID>/
├── TASK_RECORD.md
├── TASK_CONTRACT.md
├── CHANGED_FILES.md
├── TEST_EVIDENCE.md
├── SECURITY_AND_SCOPE_REVIEW.md
├── COMPLETION_REPORT.md
├── REVIEW_RESULT.md
└── MERGE_RECORD.md
```

Files may be created only when they contain real evidence. Empty appearance-only files or folders are prohibited.

## Actual code placement

All application code created by Codex belongs under:

```text
Codex Code/Implementation/
```

Example canonical paths:

```text
Codex Code/Implementation/apps/web/...
Codex Code/Implementation/apps/print-agent/...
Codex Code/Implementation/packages/domain/...
Codex Code/Implementation/packages/contracts/...
Codex Code/Implementation/supabase/migrations/...
Codex Code/Implementation/tests/...
Codex Code/Implementation/infrastructure/...
Codex Code/Implementation/docs/...
```

Root-level parallel source trees are prohibited.

## Update workflow

```text
VERIFY REAL GIT CHECKOUT
→ READ LATEST MAIN
→ CHECK ACTIVE WORK
→ SEARCH ENTIRE REPOSITORY
→ CLASSIFY EXISTING_COMPLETE / EXISTING_PARTIAL / NEW_ADDITIVE / CONFLICT / DUPLICATE
→ CREATE OR RESUME THE ONE AUTHORIZED TASK BRANCH
→ EDIT ONLY AUTHORIZED PATHS
→ UPDATE TASK RECORD AND CHECKPOINT
→ RUN REQUIRED TESTS
→ OPEN OR UPDATE ONE DRAFT PR
→ REVIEW
→ MERGE OR CORRECT
→ WRITE REVIEW AND MERGE RECORDS
→ STOP
```

# Owner instruction, feature-intake, and alignment-preservation law

This section is mandatory whenever the owner adds an instruction, feature, workflow, rule, screen, role, permission, data field, integration, limit, provider, dependency, or architectural decision.

## Owner-authored additions are intentional

- Treat every owner-authored repository addition as intentional unless there is concrete evidence of an exact duplicate, direct contradiction, security defect, broken structure, or accidental corruption.
- Preserve the owner's valid wording, scope, files, history, and placement.
- Do not silently delete, replace, rename, relocate, simplify, reinterpret, or merge an owner addition into another item.
- Do not call an addition duplicate merely because it uses similar headings, patterns, fields, or terminology.
- Removal or consolidation requires exact evidence, unique-content preservation, affected-link review, recovery path, and explicit owner approval.

## A new instruction does not automatically change active implementation

A newly added plan or feature is architecture input only until it is classified and authorized. It does not automatically:

- cancel or replace the current task;
- broaden the current task contract;
- authorize code, schema, migration, workflow, dependency, or UI changes;
- permit editing the active branch or PR;
- authorize the next task;
- permit duplicate implementation beside valid existing work.

The current worker continues the current authorized task unless the owner explicitly issues one of these exact decisions:

```text
AMEND CURRENT TASK
PAUSE CURRENT TASK
CANCEL CURRENT TASK
REPLACE CURRENT TASK
AUTHORIZE NEXT TASK
AUTHORIZE SEPARATE CHANGE TASK
```

General discussion, a new idea, or an added planning note is not one of those decisions.

## Mandatory intake classification

Before saving or implementing a new owner request, classify it as exactly one of:

```text
CLARIFICATION_NO_BEHAVIOR_CHANGE
ADDITIVE_COMPATIBLE_EXTENSION
CURRENT_TASK_AMENDMENT_REQUIRED
FUTURE_TASK_REQUIRED
ARCHITECTURE_DECISION_REQUIRED
CONFLICT_WITH_CANONICAL_SOURCE
DUPLICATE_EVIDENCE_REQUIRED
URGENT_DEFECT_OR_SECURITY_FIX
```

### Meaning

- `CLARIFICATION_NO_BEHAVIOR_CHANGE`: explains an existing requirement without changing contracts, data, behavior, acceptance criteria, or task scope.
- `ADDITIVE_COMPATIBLE_EXTENSION`: adds capability without breaking or replacing existing approved behavior and belongs in a known canonical source.
- `CURRENT_TASK_AMENDMENT_REQUIRED`: materially changes the active task's objective, allowed paths, outputs, dependencies, tests, or acceptance criteria.
- `FUTURE_TASK_REQUIRED`: valid addition that must wait because it is outside the active task or depends on later architecture.
- `ARCHITECTURE_DECISION_REQUIRED`: creates unresolved choices involving ownership, canonical path, workflow, role, permission, schema, provider, security, pricing, limits, or release boundary.
- `CONFLICT_WITH_CANONICAL_SOURCE`: directly contradicts a currently approved rule and needs an owner-approved supersession decision.
- `DUPLICATE_EVIDENCE_REQUIRED`: may overlap an existing item, but no deletion or consolidation is permitted until exact evidence is recorded.
- `URGENT_DEFECT_OR_SECURITY_FIX`: a factual production, integrity, privacy, security, or data-loss risk requiring a separate controlled correction path.

## Mandatory alignment-impact review

For every non-trivial addition, inspect and record whether it affects each area below:

```text
scope_and_release_boundary
active_task_and_dependencies
canonical_source_and_file_ownership
user_roles_and_permissions
workflow_states_and_handoffs
data_entities_fields_constraints_and_migrations
api_events_queues_realtime_and_integrations
ui_routes_screens_components_and_accessibility
plans_entitlements_limits_prices_and_billing
security_privacy_audit_and_secret_handling
backward_compatibility_and_existing_data
performance_availability_recovery_and_offline_behavior
tests_evidence_deployment_and_rollback
indexes_links_logs_memory_and_documentation
```

Each area must be marked:

```text
NO_IMPACT
ADDITIVE_COMPATIBLE
CHANGE_REQUIRED
DECISION_REQUIRED
BLOCKED_CONFLICT
```

No worker may claim an addition is harmless without completing this impact review when the addition affects behavior, code, data, permissions, workflow, infrastructure, or release scope.

## Additive-compatible gate

An addition is `ADDITIVE_COMPATIBLE_EXTENSION` only when all of these are true:

1. It does not remove, rename, relocate, replace, or weaken approved behavior.
2. It does not contradict `1plan.md`, the canonical application/module source, shared SaaS contracts, approved design, or active task contract.
3. It does not change an active worker's files, branch, PR, schema, API, contract, workflow, migration chain, or acceptance criteria.
4. It has one clear canonical destination and creates no competing authority.
5. It introduces no undocumented role, permission, lifecycle state, data owner, provider, dependency, limit, price, or security assumption.
6. It includes required validation, compatibility, recovery, and traceability.
7. It does not begin a later task automatically.

If any condition is false or unknown, the addition is not automatically safe; classify it as amendment, future task, decision, or conflict.

## Canonical placement rule

Store the requirement once, in the file that owns it:

- `1plan.md`: repository-wide governance, release boundaries, cross-system architecture, phase order, and master operating rules.
- Canonical application/module file: detailed feature, workflow, field, screen, role-specific behavior, and acceptance criteria.
- Shared SaaS contract: cross-application roles, permissions, events, documents, printing, billing, security, or handoff contracts.
- `Design/`: approved UX, wireframe, wireflow, component, responsive, and accessibility authority.
- `Codex Code/Prompts/`: executable coding instructions only.
- `Codex Code/Tasks/<TASK-ID>/TASK_CONTRACT.md`: exact implementation authorization, paths, tests, dependencies, and stop rules.
- `CHECKPOINT.md`: current factual branch, PR, test, blocker, and next-action state.
- `revise.md`: correction and supersession history; not a second architecture source.
- `index.md` and folder indexes: navigation and status only; never full copied architecture.

Do not place the same full requirement in several files. Other files may link to the canonical source and summarize only what is necessary for navigation, execution, or review.

## Active-task protection rule

While a worker is coding:

- Do not edit the same active branch, PR, schema, migration chain, API contract, shared package, workflow, or task evidence from another worker.
- New owner additions are recorded in their canonical planning source and classified, but are queued unless explicitly authorized as a current-task amendment.
- Do not force the active worker to restart completed valid work.
- Do not create a second branch, PR, task folder, checkpoint, report, or implementation path for the same task.
- Do not merge unrelated additions into the active task merely because the files are nearby.
- When a new main-branch change lands, the active worker must compare its branch with latest `origin/main`, identify overlap, and reconcile safely before further publication.

## Current-task amendment protocol

A current task may absorb a new addition only after the owner explicitly says `AMEND CURRENT TASK` and all of these are updated before implementation:

1. task objective and authorization statement;
2. exact in-scope and out-of-scope lists;
3. allowed and forbidden paths;
4. dependencies and architecture sources;
5. required entities, fields, states, permissions, APIs, events, migrations, screens, or integrations;
6. acceptance criteria and required tests;
7. compatibility, migration, rollback, and recovery requirements;
8. checkpoint, active branch, PR scope, and changed-files expectations;
9. prompt registry or numbered prompt only when the executable instruction materially changes.

The worker must preserve completed valid work, implement only the newly authorized delta, and rerun every test affected by the amendment. A chat message alone must not silently broaden the task.

## Future-feature queue rule

When an addition is valid but outside the current task:

1. Save it once in the correct canonical architecture or module source.
2. Mark it `FUTURE_TASK_REQUIRED` with dependencies and release placement.
3. Do not create code, migrations, placeholder folders, empty files, parallel plans, or speculative implementation.
4. Do not change `ACTIVE_TASK.md` until the current task reaches externally reviewed `APPROVED_COMPLETE` or the owner explicitly supersedes it.
5. When authorized later, create one task ID, one contract, one branch, one checkpoint chain, and one PR.

## Conflict and supersession rule

When a new owner instruction conflicts with existing canonical truth:

- Do not choose one silently.
- Quote or identify both exact source paths and requirement IDs.
- Explain the operational, data, permission, security, UI, compatibility, test, and migration impact.
- Preserve both until the owner chooses `KEEP_EXISTING`, `SUPERSEDE_EXISTING`, or `MERGE_WITH_EXACT_RULES`.
- Record the decision in the canonical source and `revise.md`.
- A superseded rule remains traceable through Git history and must not leave broken links or active competing authority.

## Required feature-intake record

Use the relevant canonical file, task record, or checkpoint; do not create a separate intake document when those records already exist. Record:

```text
owner_request
classification
source_path_and_requirement_id
canonical_target_path
reason_for_placement
active_task_impact
alignment_impact_review
dependencies
compatibility_and_migration_effect
security_and_permission_effect
required_tests_and_evidence
implementation_authorized: true_or_false
target_task_id_or_future_queue
last_verified_main_sha
active_branch_or_pr_overlap
exact_next_action
```

Missing classification, canonical target, authorization state, or active-work impact blocks implementation.

## Reconciliation after repository updates

Before continuing after the owner or another approved worker updates the repository:

```text
FETCH LATEST REMOTE STATE
→ VERIFY THE UPDATE IS PRESENT ON THE EXPECTED BRANCH OR PR
→ COMPARE ACTIVE BRANCH AGAINST LATEST MAIN
→ LIST OVERLAPPING FILES AND CONTRACTS
→ CLASSIFY NO_CONFLICT / ADDITIVE / REBASE_OR_MERGE_REQUIRED / BLOCKED_DECISION
→ PRESERVE BOTH VALID CHANGE SETS
→ RUN ALL AFFECTED VALIDATIONS
→ UPDATE CHECKPOINT AND CHANGED_FILES
→ CONTINUE THE SAME AUTHORIZED TASK
```

Never resolve overlap by deleting owner work, force-pushing, resetting, blindly choosing one side, or regenerating the module.

## Strictly prohibited behavior

- Treating every new idea as permission to code immediately.
- Editing `main` directly for implementation work.
- Changing an active task through an unrecorded chat instruction.
- Creating a duplicate plan, flow, feature file, task folder, branch, PR, workflow, schema, API, component, report, or evidence package.
- Moving owner-authored content merely to standardize folder appearance.
- Rewriting valid history, force-pushing, or deleting active branches without explicit approval.
- Marking alignment complete without repository search, active-work verification, impact review, and tests.
- Starting the next task because the previous worker returned a report but has not completed external review, merge, and main read-back.

## Alignment-preserving lifecycle

```text
OWNER ADDS INSTRUCTION OR FEATURE
→ PRESERVE IT
→ SEARCH FOR EXISTING CANONICAL AUTHORITY
→ CLASSIFY THE ADDITION
→ COMPLETE ALIGNMENT-IMPACT REVIEW
→ SELECT ONE CANONICAL TARGET
→ DETERMINE CURRENT AMENDMENT OR FUTURE TASK
→ OBTAIN EXPLICIT IMPLEMENTATION AUTHORIZATION
→ CREATE OR RESUME ONE TASK/BRANCH/PR
→ IMPLEMENT THE SMALLEST VALID DELTA
→ TEST PRESERVED AND NEW BEHAVIOR TOGETHER
→ REVIEW FOR CONFLICTS, DUPLICATES, SECURITY, AND COMPATIBILITY
→ MERGE WITH OWNER APPROVAL
→ READ BACK MAIN AND RECORD FINAL STATE
```

## No-delete and no-duplication rules

- No deletion without exact authorized target, reason, migration, compatibility, recovery, and owner approval.
- No rename or move without exact authorization.
- No parallel replacement of an existing service, table, API, event, component, migration chain, package, or domain model.
- No root-level `apps/`, `packages/`, `supabase/`, `tests/`, or `infrastructure/` competing with the canonical implementation root.
- No copied source inside `Codex Code/Tasks/`, `Evidence/`, or `Reviews/`.
- No second task folder for the same task ID.
- No completion claim without test and PR evidence.

## Existing code outside the canonical root

When code is found outside `Codex Code/Implementation/`:

1. Record every exact path.
2. Classify it as existing work.
3. Do not copy, delete, move, rename, or recreate it.
4. Return `BLOCKED_ARCHITECTURE_CLARIFICATION`.
5. Require a separate owner-authorized migration task.

## Changed-files manifest

`CHANGED_FILES.md` records every path with:

```text
path
change_type: CREATED / MODIFIED / DELETED_AUTHORIZED
purpose
canonical_owner
requirement_id
migration_or_contract_version
backward_compatibility
review_status
```

Every implementation path must begin with:

```text
Codex Code/Implementation/
```

unless the task explicitly authorizes a documentation/evidence file under the task folder or a GitHub-required workflow path. Any changed path missing from the manifest blocks review.

## Evidence rules

Evidence must contain exact commands and factual results. Screenshots alone are not enough for code, database, RLS, migration, API, event, or hardware claims.

Never store:

- secrets or `.env` values;
- production data;
- customer information;
- payment credentials;
- private certificates;
- device passcodes;
- unredacted logs.

## Handoff to reviewer

Codex stops after opening a draft PR. The reviewer checks:

- authorization and allowed paths;
- every code path is under `Codex Code/Implementation/` except explicitly authorized GitHub-required workflow paths;
- architecture and canonical-source compliance;
- owner-authored work preservation;
- active-task alignment and branch overlap;
- no duplication, deletion, rename, or unauthorized relocation;
- migrations, compatibility, and rollback;
- tenant isolation, roles, permissions, and RLS when applicable;
- API, event, queue, integration, and workflow compatibility;
- security, privacy, secrets, tests, accessibility, and recovery;
- completion report accuracy.

Codex cannot approve or merge its own task.
