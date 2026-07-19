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
| 1 | PENDING committed branch clone | PENDING | PENDING | PENDING |
| 2 | PENDING committed branch clone | PENDING | PENDING | PENDING |

Both rows are completed only from fresh clones of the committed CX-R1-002 branch. Generated
`node_modules`, `.next`, and `target` directories are never committed or credited as clean state.
