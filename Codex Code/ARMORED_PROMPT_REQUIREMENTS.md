# CODEX FULLY ARMORED PROMPT REQUIREMENTS

## Purpose

Every Codex prompt for ARCHITECTURED must be complete enough to execute safely without inventing scope, architecture, paths, dependencies, tests, permissions, completion criteria, or next-task authority.

A short instruction such as “continue,” “build this,” “fix it,” or “implement the next task” is never sufficient by itself. It must resolve through the GitHub prompt chain, active-task pointer, task contract, checkpoint, and this standard.

## Permanent task law

```text
FINISH THE FULL CURRENT AUTHORIZED TASK
→ DO NOT STOP AFTER ONE FILE, STEP, PHASE, OR TEST
→ PAUSE ONLY FOR A REAL EXTERNAL BLOCKER OR REQUIRED EXTERNAL REVIEW
→ KEEP THE SAME TASK ACTIVE
→ RESUME FROM THE LATEST CHECKPOINT
→ REACH EXTERNAL APPROVED_COMPLETE
→ ONLY THEN MAY THE OWNER ACTIVATE ANOTHER TASK
```

Codex must never interpret completion of one substep as permission to select the next task.

## Required prompt sections

Every prompt must contain all applicable sections below. A section may state `NOT_APPLICABLE` with a reason, but it must not be silently omitted.

### 1. Prompt identity

Required fields:

```yaml
task_id: CX-R1-XXX
prompt_sequence: 000X
prompt_type: INITIAL | CONTINUE | CORRECTION | REVIEW_FIX | RECOVERY | FINAL_CONTINUE_AND_FINISH
release_id: exact release
repository: ariessocia04-rgb/ARCHITECTURED-
active_task_title: exact title
status: CURRENT
supersedes: exact earlier prompt/rule or none
checkpoint_path: Codex Code/Tasks/<TASK-ID>/CHECKPOINT.md
canonical_implementation_root: Codex Code/Implementation/
next_task_authorized: false
```

Prompt sequence is append-only. Earlier prompts remain historical; corrections use the next number.

### 2. Role

Define exactly what Codex is for the task.

Examples:

- read-only repository verifier;
- workspace/bootstrap engineer;
- database/RLS engineer;
- domain/API engineer;
- frontend/accessibility engineer;
- print-agent engineer;
- test/recovery engineer.

Also define prohibited roles, such as Product Owner, autonomous Architect, release-scope selector, billing-policy owner, security approver, reviewer, or merger.

### 3. Goal

State the exact outcome and what “done” means.

The goal must include:

- the complete task scope;
- required output paths;
- required behavior;
- required tests/evidence;
- external review boundary;
- explicit prohibition on the next task.

### 4. Project and domain background

Provide enough context to understand:

- the ARCHITECTURED Repair SaaS product;
- the Release 1 controlled-pilot boundary;
- involved applications and roles;
- involved domain lifecycle;
- shared contracts and cross-department handoffs;
- canonical code/evidence paths;
- known constraints and truthful non-goals.

Do not paste entire architecture documents. Point to exact canonical sources and summarize only execution-critical context.

### 5. Current live state and continuation checkpoint

Record:

- previous result/status;
- base/main SHA;
- current branch and PR when applicable;
- working-tree state expected;
- completed items;
- incomplete items;
- failed checks or review comments;
- exact first incomplete action;
- checkpoint path.

Codex must reconcile these claims against live Git/GitHub evidence before acting.

### 6. Source-of-truth reading order

List exact paths in order, beginning with:

```text
1plan.md
→ applicable 1plan extension
→ README.md
→ revise.md / exact revision record
→ index.md
→ selected application/SaaS/release INDEX.md
→ task manifest and task contract
→ Codex Code governance
→ current prompt chain and checkpoint
→ exact domain/design/security sources
→ live branches/PRs/commits/checks/code/migrations
```

When sources conflict materially, Codex must stop with `BLOCKED_ARCHITECTURE_CLARIFICATION` and cite the exact conflict.

### 7. Authorization matrix

Every prompt must explicitly declare:

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

Missing or ambiguous authorization means `NOT_AUTHORIZED`.

### 8. Allowed and prohibited tools

List tools/commands Codex may use and why.

Examples:

- terminal/shell;
- Git and GitHub inspection;
- pnpm/Node tooling;
- Supabase CLI;
- PostgreSQL test tooling;
- Rust/Cargo/Tauri tooling;
- Playwright/Vitest/accessibility tooling;
- linters/type checkers/build tools.

Also list prohibited actions:

- force push;
- direct work on `main`;
- self-merge;
- destructive reset/clean;
- secret exposure;
- unapproved package/provider/framework changes;
- skipping or weakening tests;
- creating parallel source trees.

### 9. Exact allowed paths

Declare exact create and modify globs.

```yaml
allowed_paths_create:
  - exact/path/**
allowed_paths_modify:
  - exact/path/**
protected_paths:
  - exact/path/**
```

Executable implementation belongs under `Codex Code/Implementation/` only.

Editing outside allowed paths returns `BLOCKED_SCOPE` or `NOT_AUTHORIZED`.

### 10. Existing-work and duplicate classification

Before creating anything, Codex must search and classify:

```text
EXISTING_COMPLETE
EXISTING_PARTIAL
NEW_ADDITIVE
CONFLICT
DUPLICATE
```

Required behavior:

- `EXISTING_COMPLETE` → validate and reuse/skip;
- `EXISTING_PARTIAL` → extend the canonical implementation;
- `NEW_ADDITIVE` → create only in approved paths;
- `CONFLICT` → stop for architecture clarification;
- `DUPLICATE` → do not create.

### 11. Dependency and implementation order

Give a numbered execution sequence that covers the entire task.

Each step must identify:

- source requirement;
- target path;
- dependency;
- implementation outcome;
- validation/test;
- stop/block condition.

Codex continues through every in-scope step unless a real external blocker prevents execution.

### 12. Architecture and business invariants

State the rules that cannot change, including applicable:

- tenant/company/branch/user context;
- domain ownership;
- lifecycle transitions;
- plans/entitlements/limits;
- role and field permissions;
- financial/inventory/warranty/audit history;
- cross-department authority boundaries;
- provider-adapter boundaries;
- printing capability/certification boundaries;
- release inclusion/exclusion.

### 13. Database, RLS, API, event, and idempotency rules

When applicable, require:

- additive versioned migrations;
- empty-database and supported-upgrade tests;
- tenant/branch ownership and constraints;
- RLS and explicit grants;
- cross-tenant negative tests;
- service-role key isolation;
- API validation and authorization;
- transaction boundaries;
- immutable audit;
- versioned events/webhooks;
- retry and duplicate-delivery protection;
- observability/correlation identifiers;
- rollback or forward-recovery evidence.

### 14. UX, accessibility, responsive, offline, and failure-state rules

For UI tasks require:

- exact screen IDs/routes/roles;
- design-source traceability;
- loading, empty, error, denied, subscription, offline, conflict, retry, success states;
- desktop/tablet/mobile behavior;
- keyboard, touch, screen-reader, low-vision and low-dexterity behavior;
- plain-language labels/help/errors;
- protected/destructive-action confirmation;
- customer/external audience-safe projections;
- no frontend-only authorization.

### 15. Security and privacy armor

Require:

- least privilege;
- secret redaction;
- no real customer/payment/device-sensitive data in fixtures/evidence;
- secure sessions and support access;
- safe upload/download/document handling;
- injection/output/file validation;
- rate limits and abuse handling where applicable;
- privacy/audit/retention rules;
- dependency and supply-chain checks;
- no weakening controls to make tests pass.

### 16. Exact tests and commands

List applicable commands/categories, not vague “test it” language.

Examples:

```text
format check
lint
typecheck
unit tests
migration tests
RLS/authorization negative tests
contract tests
integration tests
component tests
accessibility tests
end-to-end tests
performance budgets
recovery/rollback tests
hardware certification fixtures
production build
```

When an exact command depends on authorized bootstrap output, require Codex to discover it from package scripts/toolchain files and report the command used.

Failed required tests return `FAILED_VALIDATION`; they are not hidden or skipped.

### 17. Evidence and task records

Require factual task files under:

```text
Codex Code/Tasks/<TASK-ID>/
```

Applicable records include:

- `TASK_RECORD.md`;
- `TASK_CONTRACT.md`;
- `CHECKPOINT.md`;
- `CHANGED_FILES.md`;
- `TEST_EVIDENCE.md`;
- `SECURITY_AND_SCOPE_REVIEW.md`;
- `COMPLETION_REPORT.md`;
- `REVIEW_RESULT.md`;
- `MERGE_RECORD.md`.

Task records reference executable paths; they do not copy the source tree.

### 18. Branch, commit, PR, and review rules

For authorized write tasks:

```text
latest main
→ isolated task branch
→ complete full task
→ run required tests
→ update evidence
→ intentional commit(s)
→ push
→ draft PR
→ external review
→ correct same task/branch/PR
→ authorized merge
→ main read-back
```

Codex never merges or approves its own work.

### 19. Blocker and checkpoint behavior

Valid blockers include:

- environment/access failure;
- active overlapping worker;
- architecture conflict;
- missing owner/provider decision;
- failed external dependency;
- required external review/merge.

On a valid blocker, Codex records:

- exact state;
- commands/results;
- completed work;
- remaining work;
- first safe continuation action;
- branch/commit/PR;
- affected paths;
- required external action.

The same task remains active.

### 20. Required final report

Every prompt defines an exact output format containing:

```text
Task ID
Primary status
Authorization evidence
Repository/base SHA
Branch/PR
Prompt/checkpoint resolution
Sources read
Existing-work classification
Changed paths
Migrations/contracts/events
Tests and results
Security/RLS/privacy evidence
UX/accessibility evidence
Known limitations
Recovery/rollback
Commit/PR evidence
Reviewer/merge state
Current task complete: YES/NO
Next action: STOP or exact same-task continuation
Next task authorized: NO unless separately owner-authorized
```

### 21. Completion and stop gate

The prompt must say:

```text
DO NOT STOP AFTER A PARTIAL STEP WHEN THE ENVIRONMENT AND AUTHORIZATION ALLOW CONTINUATION.
FINISH THE ENTIRE CURRENT AUTHORIZED TASK.
```

A write task is not complete until applicable implementation, tests, evidence, PR, external review/correction, authorized merge, and main read-back are complete.

A read-only task is not complete until the entire required inspection and final report are complete.

After the full current scope is complete or a genuine external blocker is fully reported:

```text
STOP
```

`STOP` never means automatic authorization for the next task.

## Quality standard

A prompt is `FULLY_ARMORED` only when:

- it is specific and internally consistent;
- it is traceable to current GitHub authorities;
- it cannot be reasonably interpreted as global permission;
- it prevents deletion, duplication, architecture drift and secret exposure;
- it defines complete execution and validation, not merely file creation;
- it preserves the current task through blockers and review;
- it clearly separates architecture, design, code, tests, hardware and deployment statuses.

When any of these are missing, the prompt must be corrected before Codex execution.