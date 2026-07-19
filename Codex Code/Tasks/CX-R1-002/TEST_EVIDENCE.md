# CX-R1-002 validation evidence

## Environment

```text
Repository: C:\Users\socia\CodexRepos\ARCHITECTURED-
Branch: agent/cx-r1-002-ci-quality-security
Base main merge: 0fb218a3f8f8c100b8fd4655b6f04c14fcabd839
Node: v24.18.0
pnpm: 10.34.0
Rust: rustc 1.97.1 (8bab26f4f 2026-07-14)
Cargo: 1.97.1 (c980f4866 2026-06-30)
```

## First verified workspace run

| Command | Result | Factual output / purpose |
| --- | --- | --- |
| `corepack pnpm install --frozen-lockfile` | PASS | Lockfile current; installation completed with pnpm `10.34.0`. |
| `corepack pnpm format:check` | PASS | All implementation files use the configured Prettier style. |
| `corepack pnpm lint` | PASS | Exit code 0 after generated `apps/web/.next/**` output was ignored. |
| `corepack pnpm typecheck` | PASS | Web and configuration TypeScript checks completed. |
| `corepack pnpm test` | PASS | 1 test file and 4 tests passed. |
| `corepack pnpm build` | PASS | Next `16.2.9` production build completed; `/` and `/_not-found` static routes generated. |
| `corepack pnpm release-lock:check` | PASS | Exact version/pin consistency confirmed. |
| `corepack pnpm paths:check` | PASS | Canonical workspace present; no root-level duplicate source tree. |
| `corepack pnpm migration:check` | PASS | No future-owned Supabase migration/configuration content present. |
| `corepack pnpm secrets:check` | PASS | No configured secret patterns found in implementation files. |
| `corepack pnpm audit --prod --audit-level=high` | PASS | No high or critical production finding; one documented moderate transitive PostCSS advisory remains visible. |
| `cargo fmt --all -- --check` | PASS | Exit code 0. |
| `cargo check --workspace --locked` | PASS | `architectured-print-agent-bootstrap` checked successfully in 18.83s. |
| `corepack pnpm exec vitest run packages/configuration/src --reporter=junit --outputFile=<temp>` | PASS | JUnit evidence was written successfully (1,116 bytes), proving the CI artifact command. |
| `corepack pnpm exec prettier --check '../../.github/workflows/*.yml'` | PASS | Both workflow YAML files parsed and matched Prettier style. |

An initial aggregate `ci:check` terminal invocation was not credited as evidence because its host
terminal timed out before returning the aggregate result. Each constituent command above was then
run directly with verified exit code 0; this avoids treating a terminal timeout as a passing check.

## Required clean-checkout runs

| Run | Checkout | Frozen install | Full local gate | Result |
| --- | --- | --- | --- | --- |
| 1 | Fresh clone at `c6edb62004538b4966fd064f258bba2d7cacc532` in `%TEMP%\\cx-r1-002-clean-checkout-4` | `pnpm install --frozen-lockfile` exit 0; lockfile unchanged; completed in 3m 8.5s. | `pnpm ci:check` exit 0; format, workflow format, lint, typecheck, 4 tests, build, release lock, paths, migration boundary, secret scan, rustfmt, and locked Cargo check passed. Cold Cargo check completed in 11m 40s. | PASS |
| 2 | Fresh clone at `c6edb62004538b4966fd064f258bba2d7cacc532` in `%TEMP%\\cx-r1-002-clean-checkout-3` | `pnpm install --frozen-lockfile` exit 0; lockfile unchanged; completed in 2m 3.2s. | `pnpm ci:check` exit 0; the same complete command set passed. Cold Cargo check completed in 10m 34s. | PASS |

Both rows are completed only from fresh clones of the committed CX-R1-002 branch. Generated
`node_modules`, `.next`, and `target` directories are never committed or credited as clean state.

Both acceptance clones began at the same corrected commit with clean Git working trees and no
generated dependency/build output. Both locked installs and complete local gates exited `0`; their
long Rust durations are independent clean-build evidence, not cached-success substitutes.

## Corrective validation before acceptance runs

Fresh clone 1 of preliminary commit `94e05e43450d420136ee3aab8e3849d8df279451` passed frozen
install, implementation format/lint/typecheck/tests/build, release-lock, duplicate-path, and
migration-boundary checks. Its explicit root-workflow Prettier command failed because it did not
load the workspace `prettier.config.mjs`, so a CRLF checkout fell back to Prettier's LF default.

The smallest correction adds `workflows:format:check`, which explicitly loads that config, and
places it in both the aggregate local gate and the named GitHub Actions quality job. The corrected
command passed locally. The preliminary clone is not counted toward the two required acceptance
runs; both are repeated from the corrected commit.
