# CX-R1-001 changed files

All executable implementation is under `Codex Code/Implementation/`. All task records are under
`Codex Code/Tasks/CX-R1-001/`. No protected architecture, prompt, source-plan, root-level
implementation, or prior-task file was changed.

## Workspace configuration and locks

```text
Codex Code/Implementation/README.md
Codex Code/Implementation/.gitignore
Codex Code/Implementation/.npmrc
Codex Code/Implementation/.nvmrc
Codex Code/Implementation/.prettierignore
Codex Code/Implementation/Cargo.toml
Codex Code/Implementation/Cargo.lock
Codex Code/Implementation/eslint.config.mjs
Codex Code/Implementation/package.json
Codex Code/Implementation/pnpm-lock.yaml
Codex Code/Implementation/pnpm-workspace.yaml
Codex Code/Implementation/prettier.config.mjs
Codex Code/Implementation/RELEASE_LOCK.json
Codex Code/Implementation/rust-toolchain.toml
Codex Code/Implementation/tsconfig.base.json
```

Purpose: deterministic exact pins, package workspace, formatting/lint/typecheck/test/build gates,
Rust workspace, committed locks, release lock, and generated-output exclusions.

## Technical applications

```text
Codex Code/Implementation/apps/web/package.json
Codex Code/Implementation/apps/web/next.config.ts
Codex Code/Implementation/apps/web/next-env.d.ts
Codex Code/Implementation/apps/web/tsconfig.json
Codex Code/Implementation/apps/web/app/globals.css
Codex Code/Implementation/apps/web/app/layout.tsx
Codex Code/Implementation/apps/web/app/page.tsx
Codex Code/Implementation/apps/print-agent/Cargo.toml
Codex Code/Implementation/apps/print-agent/README.md
Codex Code/Implementation/apps/print-agent/src/main.rs
```

Purpose: a semantic non-product Next build page and a no-behavior Rust/Tauri-compatible placeholder.

## Configuration and validation tools

```text
Codex Code/Implementation/packages/configuration/package.json
Codex Code/Implementation/packages/configuration/README.md
Codex Code/Implementation/packages/configuration/tsconfig.json
Codex Code/Implementation/packages/configuration/src/environment.ts
Codex Code/Implementation/packages/configuration/src/environment.test.ts
Codex Code/Implementation/packages/testing/package.json
Codex Code/Implementation/packages/testing/README.md
Codex Code/Implementation/packages/testing/scripts/check-release-lock.mjs
Codex Code/Implementation/packages/testing/scripts/check-paths.mjs
Codex Code/Implementation/packages/testing/scripts/check-secrets.mjs
```

Purpose: typed environment-name classification/default validation plus deterministic release-lock,
path-boundary, and secret-pattern checks.

## Future-owner path markers

```text
Codex Code/Implementation/packages/design-system/README.md
Codex Code/Implementation/packages/domain/README.md
Codex Code/Implementation/packages/contracts/README.md
Codex Code/Implementation/packages/authorization/README.md
Codex Code/Implementation/packages/database-types/README.md
Codex Code/Implementation/packages/document-rendering/README.md
Codex Code/Implementation/packages/printing-contracts/README.md
Codex Code/Implementation/packages/observability/README.md
Codex Code/Implementation/supabase/README.md
Codex Code/Implementation/tests/contract/README.md
Codex Code/Implementation/tests/integration/README.md
Codex Code/Implementation/tests/e2e/README.md
Codex Code/Implementation/tests/security/README.md
Codex Code/Implementation/tests/accessibility/README.md
Codex Code/Implementation/tests/performance/README.md
Codex Code/Implementation/tests/recovery/README.md
Codex Code/Implementation/tests/hardware/README.md
Codex Code/Implementation/infrastructure/ci/README.md
Codex Code/Implementation/infrastructure/environments/README.md
Codex Code/Implementation/infrastructure/containers/README.md
Codex Code/Implementation/infrastructure/monitoring/README.md
Codex Code/Implementation/infrastructure/rollback/README.md
```

Purpose: meaningful, nonempty declarations of later-task ownership; no business, product, CI,
observability, Supabase schema, migration, infrastructure, or hardware behavior.

## Documentation and task evidence

```text
Codex Code/Implementation/docs/implementation/WORKSPACE_BOOTSTRAP.md
Codex Code/Implementation/docs/runbooks/LOCAL_SETUP.md
Codex Code/Implementation/docs/evidence/README.md
Codex Code/Tasks/CX-R1-001/CHANGED_FILES.md
Codex Code/Tasks/CX-R1-001/TEST_EVIDENCE.md
Codex Code/Tasks/CX-R1-001/SECURITY_AND_SCOPE_REVIEW.md
Codex Code/Tasks/CX-R1-001/CHECKPOINT.md
Codex Code/Tasks/CX-R1-001/COMPLETION_REPORT.md
```

Purpose: bootstrap/runbook documentation and factual owner-publish evidence.
