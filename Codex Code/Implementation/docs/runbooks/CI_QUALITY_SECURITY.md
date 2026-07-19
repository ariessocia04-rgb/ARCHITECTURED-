# CI, quality, and security runbook

## Purpose

This runbook reproduces the checks enforced by CX-R1-002. Run commands from
`Codex Code/Implementation` in a clean checkout using Node `24.18.0`, Corepack/pnpm `10.34.0`, and
Rust `1.97.1` with `rustfmt`.

## Full local gate

```powershell
corepack pnpm install --frozen-lockfile
corepack pnpm ci:check
```

`ci:check` runs format, lint, typecheck, unit tests, production build, release-lock, duplicate-path,
migration-boundary, secret, Rustfmt, and locked Cargo checks. It does not install dependencies or
use cached dependency state as a substitute for the frozen install.

## Individual commands

```powershell
corepack pnpm format:check
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm test
corepack pnpm build
corepack pnpm release-lock:check
corepack pnpm paths:check
corepack pnpm migration:check
corepack pnpm secrets:check
corepack pnpm audit --prod --audit-level=high
corepack pnpm workflows:format:check
cargo fmt --all -- --check
cargo check --workspace --locked
```

## Clean-checkout validation

Use a fresh clone or remove only generated `node_modules`, `.next`, and `target` directories. Do
not remove, regenerate, or edit `pnpm-lock.yaml` or `Cargo.lock`. Then run the full local gate
twice. Any lockfile mutation, failing command, untracked generated artifact, missing required
check, or secret finding blocks review.

## Pull request policy and artifacts

The exact required GitHub checks and owner-managed branch policy are in
[`../../infrastructure/ci/BRANCH_REVIEW_POLICY.md`](../../infrastructure/ci/BRANCH_REVIEW_POLICY.md).
GitHub Actions retains non-secret unit-test and web-build evidence for 14 days. Do not download,
attach, or commit generated artifacts containing environment files, credentials, or customer data.

The named `Dependency Review / dependency-review` job performs the locked production audit because
the repository's GitHub Dependency Graph is disabled. High and critical findings block the job;
moderate and lower findings remain visible in evidence and must not be suppressed.
