# REVISION RECORD — CODEX CODE CANONICAL IMPLEMENTATION ROOT

## Owner clarification

The owner clarified that actual coding produced by Codex must be stored in the GitHub repository inside the previously created `Codex Code/` folder.

The earlier interpretation—using `Codex Code/` only for evidence while placing code in root-level implementation folders—was incorrect for the owner's intended repository organization.

## Corrected canonical rule

```text
Codex Code/Implementation/   = actual executable source code
Codex Code/Tasks/            = task contracts and task-specific evidence
Codex Code/Evidence/         = cross-task evidence indexes
Codex Code/Reviews/          = reviewer records
```

## Exact implementation paths

```text
Codex Code/Implementation/apps/
Codex Code/Implementation/packages/
Codex Code/Implementation/supabase/
Codex Code/Implementation/tests/
Codex Code/Implementation/infrastructure/
Codex Code/Implementation/docs/
```

## Duplicate prevention

The following competing root-level implementation trees are prohibited:

```text
/apps/
/packages/
/supabase/
/tests/
/infrastructure/
```

Task evidence must reference the canonical code paths; it must not contain copied source code.

## Existing-work check

At the time of correction:

```text
APPLICATION SOURCE CODE PRESENT: NO
PACKAGE.JSON PRESENT: NO
REAL SUPABASE MIGRATION TREE PRESENT: NO
CODE MOVE REQUIRED: NO
CODE DELETE REQUIRED: NO
DUPLICATE CODE TREE CREATED: NO
```

If executable code is later discovered outside the canonical root, Codex must stop and request a controlled owner-authorized migration. It must not copy, delete, move, rename, or recreate that work.

## Documents synchronized

- `1plan-CODEX_CODE_CONTROL_CENTER_EXTENSION.md`
- `Codex Code/README.md`
- `Codex Code/INDEX.md`
- `Codex Code/Implementation/README.md`
- `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`
- `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`
- `Codex Code/Tasks/CX-R1-000/PROMPT.md`
- `Codex Code/Tasks/CX-R1-000/TASK_RECORD.md`
- Release 1 Technology Stack and Version Lock
- Release 1 Canonical Implementation Path Override
- Release 1 Codex Task Contract Template
- Release 1 Index
- `Codex Code/COMPLETION_RECORD.md`

## Merge evidence

```text
BRANCH: codex-code-canonical-implementation-root
PULL REQUEST: #11 — Store all Codex implementation under Codex Code
PR MERGEABLE: YES
CONFIGURED FAILING STATUS CHECKS: NONE
UNRESOLVED REVIEW THREADS: NONE
MERGE COMMIT: dde28fc3b531fb04b985da23af7903e07c99dfaf
POST-MERGE COMPLETION EVIDENCE: aff1fddff2dcaa748c2d60267b4a90f82adffdc5
FINAL STATE: COMPLETE_MERGED_TO_MAIN
```

## Authorization status

This correction defines storage location only.

```text
CX-R1-000: READ-ONLY VERIFICATION AUTHORIZED
CX-R1-001: NOT YET AUTHORIZED
GLOBAL CODING AUTHORIZATION: NO
```
