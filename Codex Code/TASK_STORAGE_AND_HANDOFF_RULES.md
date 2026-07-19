# CODEX TASK STORAGE AND HANDOFF RULES

## Canonical separation

```text
Codex Code/Implementation/   = actual executable code
Codex Code/Tasks/<TASK-ID>/  = task contracts and task-specific evidence
Codex Code/Evidence/         = cross-task evidence indexes
Codex Code/Reviews/          = reviewer records
```

No source-code copy may be stored in a task, evidence, or review folder.

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
→ CREATE ISOLATED TASK BRANCH
→ EDIT ONLY AUTHORIZED PATHS UNDER CODEX CODE/IMPLEMENTATION/
→ UPDATE TASK RECORD
→ RUN TESTS
→ OPEN DRAFT PR
→ REVIEW
→ MERGE OR CORRECT
→ WRITE MERGE RECORD
→ STOP
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

unless the task explicitly authorizes a documentation/evidence file under the task folder. Any changed path missing from the manifest blocks review.

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
- every code path is under `Codex Code/Implementation/`;
- architecture compliance;
- no duplication or deletion;
- migrations and rollback;
- tenant isolation and RLS;
- API/event compatibility;
- tests and accessibility;
- completion report accuracy.

Codex cannot approve or merge its own task.
