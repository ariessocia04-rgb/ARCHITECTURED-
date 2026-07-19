# CODEX CODE — CANONICAL IMPLEMENTATION ROOT

## Owner decision

All executable application code produced by Codex for ARCHITECTURED must be stored in this GitHub repository under:

```text
Codex Code/Implementation/
```

This is the single canonical implementation root. It is not a backup, export, evidence copy, or temporary workspace.

## Required source structure

```text
Codex Code/Implementation/
├── apps/
│   ├── web/
│   └── print-agent/
├── packages/
│   ├── design-system/
│   ├── domain/
│   ├── contracts/
│   ├── authorization/
│   ├── database-types/
│   ├── document-rendering/
│   ├── printing-contracts/
│   ├── observability/
│   ├── configuration/
│   └── testing/
├── supabase/
│   ├── migrations/
│   ├── functions/
│   ├── tests/
│   ├── seed.sql
│   └── config.toml
├── tests/
│   ├── contract/
│   ├── integration/
│   ├── e2e/
│   ├── security/
│   ├── accessibility/
│   ├── performance/
│   ├── recovery/
│   └── hardware/
├── infrastructure/
│   ├── ci/
│   ├── environments/
│   ├── containers/
│   ├── monitoring/
│   └── rollback/
└── docs/
    ├── implementation/
    ├── runbooks/
    └── evidence/
```

Directories are created only by an explicitly authorized Codex task. Do not create empty appearance-only folders.

## CX-R1-001 bootstrap

CX-R1-001 establishes the deterministic workspace foundation in this directory.
It deliberately contains no product workflows, role screens, business schema, migrations,
CI workflow, observability implementation, or provider credentials.

The executable bootstrap is intentionally small:

- `apps/web` is a semantic technical build page only.
- `apps/print-agent` is a Rust/Tauri-compatible compile skeleton only.
- `packages/configuration` owns the small, test-covered environment-name schema.
- all other package, test, infrastructure, and Supabase directories record their future owner
  and prevent accidental duplicate implementation.

Use the pinned local toolchain and scripts from this directory:

```text
pnpm install --frozen-lockfile
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm release-lock:check
pnpm paths:check
pnpm secrets:check
cargo fmt --all -- --check
cargo check --workspace --locked
```

Exact baseline and source-verification records are in `RELEASE_LOCK.json`. Local setup,
environment-name classification, and scope boundaries are in `docs/runbooks/LOCAL_SETUP.md`.

## No-duplication boundary

The following root-level implementation trees are prohibited after this decision:

```text
/ apps/
/ packages/
/ supabase/
/ tests/
/ infrastructure/
/ docs/implementation-code
```

Before creating any implementation path, Codex must search both the repository root and `Codex Code/Implementation/`.

Classification rules:

- Existing code outside the canonical root: stop and request a controlled migration decision; do not copy it.
- Existing code inside the canonical root: reuse or extend it.
- Proposed parallel module/service/table/API/component: classify as `DUPLICATE` and do not create it.
- Conflicting ownership or structure: return `BLOCKED_ARCHITECTURE_CLARIFICATION`.

## Separation inside Codex Code

```text
Codex Code/Implementation/   = actual executable source code
Codex Code/Tasks/            = task contracts and task-specific evidence
Codex Code/Evidence/         = cross-task evidence indexes
Codex Code/Reviews/          = reviewer records
```

Task evidence must reference exact paths under `Codex Code/Implementation/`; it must not copy source files into task folders.

## Local checkout rule

Codex must work from a real checkout of:

```text
ariessocia04-rgb/ARCHITECTURED-
```

The local working directory must contain `.git`, `1plan.md`, and `Codex Code/Implementation/README.md`. A generated `work/` or `outputs/` folder is not the repository and must produce `BLOCKED_ENVIRONMENT`.

## Status

```text
CANONICAL IMPLEMENTATION ROOT: CODEX CODE/IMPLEMENTATION/
APPLICATION BUSINESS CODE CURRENTLY PRESENT: NO
CX-R1-001 TECHNICAL BOOTSTRAP PRESENT: YES
ROOT-LEVEL PARALLEL CODE TREES AUTHORIZED: NO
IMPLEMENTATION AUTHORIZATION GRANTED BY THIS FILE: NO
```
