# Local setup runbook

## Prerequisites

- Node.js `24.18.0`
- pnpm `10.34.0`, activated through Corepack
- Rust `1.97.1` with `rustfmt`

The exact versions and official release references are recorded in `RELEASE_LOCK.json`. Use an
isolated, unmodified checkout of this repository and run commands from
`Codex Code/Implementation`.

## Install and validate

```text
corepack pnpm install
corepack pnpm format:check
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm test
corepack pnpm build
corepack pnpm release-lock:check
corepack pnpm paths:check
corepack pnpm secrets:check
corepack pnpm install --frozen-lockfile
cargo fmt --all -- --check
cargo check --workspace --locked
```

For clean dependency recovery, remove only generated `node_modules`, `.next`, and `target`
directories, then repeat the frozen install and validation commands. Do not remove lockfiles.

## Environment-name schema

No values are committed. The bootstrap accepts only these names:

| Name                        | Classification | Required | Safe local value        |
| --------------------------- | -------------- | -------- | ----------------------- |
| `ARCHITECTURED_ENVIRONMENT` | server-only    | yes      | `development`           |
| `NEXT_PUBLIC_APP_ORIGIN`    | public         | yes      | `http://localhost:3000` |
| `ARCHITECTURED_TEST_CLOCK`  | test-only      | no       | unset                   |

The safe local defaults are explicit test/development inputs; they are not an implicit fallback
between environments. Public values do not authorize access. Secrets, service-role values, and
production URLs are outside this task and must not be logged or committed.
