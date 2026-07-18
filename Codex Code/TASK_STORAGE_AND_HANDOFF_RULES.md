# CODEX TASK STORAGE AND HANDOFF RULES

## One task, one record folder

Every authorized Codex task uses:

```text
Codex Code/Tasks/<TASK-ID>/
├── TASK_RECORD.md
├── TASK_CONTRACT.md
├── CHANGED_FILES.md
├── TEST_EVIDENCE.md
├── SECURITY_AND_SCOPE_REVIEW.md
├── REVIEW_RESULT.md
└── MERGE_RECORD.md
```

Files may be created only when they contain real evidence. Empty appearance-only files or folders are prohibited.

## Actual code placement

Actual source code is never copied into the task record folder.

The task record points to canonical changed paths, for example:

```text
apps/web/...
apps/print-agent/...
packages/domain/...
packages/contracts/...
supabase/migrations/...
tests/...
infrastructure/...
```

## Update workflow

```text
READ LATEST MAIN
→ CHECK ACTIVE WORK
→ SEARCH EXISTING IMPLEMENTATION
→ CLASSIFY EXISTING_COMPLETE / EXISTING_PARTIAL / NEW_ADDITIVE / CONFLICT / DUPLICATE
→ CREATE ISOLATED TASK BRANCH
→ EDIT ONLY ALLOWED CANONICAL PATHS
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
- No parallel replacement of an existing service, table, API, event, component, migration chain, or domain model.
- No copied application source inside `Codex Code/`.
- No second task folder for the same task ID.
- No completion claim without test and PR evidence.

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

Any changed path missing from the manifest blocks review.

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
- architecture compliance;
- no duplication or deletion;
- migrations and rollback;
- tenant isolation and RLS;
- API/event compatibility;
- tests and accessibility;
- completion report accuracy.

Codex cannot approve or merge its own task.
