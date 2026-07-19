# 1PLAN EXTENSION — CODEX CODE CONTROL CENTER AND IMPLEMENTATION ROOT

## Authority

`1plan.md` remains the master source of truth. This additive extension records the owner's clarified decision that `Codex Code/` contains both Codex governance records and the single canonical executable implementation tree.

## Canonical targets

```text
Codex Code/Implementation/   = actual executable application code
Codex Code/Tasks/            = task contracts and task evidence
Codex Code/Evidence/         = cross-task evidence indexes
Codex Code/Reviews/          = reviewer records
```

## Placement rule

All future Codex-created application code must be stored under:

```text
Codex Code/Implementation/
├── apps/
├── packages/
├── supabase/
├── tests/
├── infrastructure/
└── docs/
```

This path is the canonical source-code root in GitHub. Root-level `apps/`, `packages/`, `supabase/`, `tests/`, and `infrastructure/` trees are not authorized because they would create a competing codebase.

Task folders must not contain copied source code. They reference exact canonical paths under `Codex Code/Implementation/`.

## Existing-work rule

No executable code exists yet, so this decision requires no file move, deletion, or data migration.

If code is later discovered outside the canonical root:

```text
DO NOT COPY
DO NOT DELETE
DO NOT MOVE
DO NOT RECREATE
→ REPORT EXACT PATHS
→ REQUIRE OWNER-AUTHORIZED MIGRATION TASK
```

## Required task relationship

```text
Approved architecture and Release plan
→ Codex Code armored prompt
→ Codex Code task contract/record
→ verify real ARCHITECTURED- Git checkout
→ isolated branch
→ Codex Code/Implementation/ canonical code paths
→ tests and evidence
→ draft PR
→ external review
→ merge/read-back record
→ STOP
```

## Non-negotiable rules

- No deletion, rename, move, or replacement without exact authorization.
- Search and classify existing work before creating anything.
- Reuse and extend canonical implementation; do not create parallel versions.
- No implementation path outside `Codex Code/Implementation/` unless an exact migration/documentation task authorizes it.
- One task ID uses one task folder.
- Codex cannot approve or merge its own work.
- Next task remains unauthorized until separately approved.
- No secrets or real customer/payment/device-sensitive data in source-control evidence.
- No source-code copies under `Codex Code/Tasks/`, `Evidence/`, or `Reviews/`.

## Status

```text
CODEX CODE CONTROL CENTER: COMPLETE AS GOVERNANCE STRUCTURE
CANONICAL IMPLEMENTATION ROOT: CODEX CODE/IMPLEMENTATION/
CX-R1-000 PROMPT AND TASK RECORD: PRESENT
APPLICATION CODE CREATED: NO
IMPLEMENTATION_AUTHORIZED: UNCHANGED
```
