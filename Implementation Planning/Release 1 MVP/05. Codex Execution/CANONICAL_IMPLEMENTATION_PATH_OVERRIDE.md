# RELEASE 1 CODEX — CANONICAL IMPLEMENTATION PATH OVERRIDE

## Owner decision

This file corrects the physical storage interpretation of all Release 1 Codex tasks without deleting or rewriting their valid scope, dependencies, tests, or acceptance criteria.

## Global path prefix

Every executable implementation path referenced in `CODEX_TASK_MANIFEST.md` is relative to:

```text
Codex Code/Implementation/
```

Therefore:

| Manifest shorthand | Exact GitHub path |
|---|---|
| `apps/` | `Codex Code/Implementation/apps/` |
| `packages/` | `Codex Code/Implementation/packages/` |
| `supabase/` | `Codex Code/Implementation/supabase/` |
| `tests/` | `Codex Code/Implementation/tests/` |
| `infrastructure/` | `Codex Code/Implementation/infrastructure/` |
| implementation `docs/` | `Codex Code/Implementation/docs/` |
| `.nvmrc` | `Codex Code/Implementation/.nvmrc` |
| `package.json` | `Codex Code/Implementation/package.json` |
| `pnpm-lock.yaml` | `Codex Code/Implementation/pnpm-lock.yaml` |
| `pnpm-workspace.yaml` | `Codex Code/Implementation/pnpm-workspace.yaml` |
| `RELEASE_LOCK.json` | `Codex Code/Implementation/RELEASE_LOCK.json` |
| `rust-toolchain.toml` | `Codex Code/Implementation/rust-toolchain.toml` |
| `Cargo.lock` | `Codex Code/Implementation/Cargo.lock` or the exact workspace-approved nested location |

## CX-R1-001 interpretation

The existing instruction:

```text
Create the approved apps/, packages/, supabase/, tests/, infrastructure/, and docs/ implementation structure.
```

means:

```text
Create those folders under Codex Code/Implementation/ only.
```

It does not authorize root-level implementation folders.

## No-duplication rule

- Do not create a second root-level source tree.
- Search the whole repository before creating any implementation path.
- Reuse or extend existing code inside the canonical root.
- If code exists outside the canonical root, do not copy, delete, move, or recreate it; return `BLOCKED_ARCHITECTURE_CLARIFICATION` and require a controlled migration task.

## Authority

This path override is an owner-approved physical placement correction. It does not change task IDs, dependencies, business behavior, roles, permissions, release scope, technology choices, test requirements, or coding authorization.

## Status

```text
GLOBAL CODEX IMPLEMENTATION PREFIX: CODEX CODE/IMPLEMENTATION/
TASK MANIFEST LOGIC CHANGED: NO
TASK MANIFEST PHYSICAL PATH INTERPRETATION CORRECTED: YES
ROOT-LEVEL PARALLEL CODE TREE AUTHORIZED: NO
```
