# CX-R1-001 test evidence

## Execution context

- Repository: `ariessocia04-rgb/ARCHITECTURED-`
- Branch: `agent/cx-r1-001-workspace-bootstrap`
- Base commit: `b077a0acd35eafc80be3291a1ee7bd82278bc567`
- Validation date: `2026-07-19`
- Isolated runtime: Node `v24.18.0`, pnpm `10.34.0`, Rust `1.97.1`, Cargo `1.97.1`.

## Exact version verification

| Concern | Exact version | Evidence |
| --- | --- | --- |
| Node.js | `24.18.0` | `.nvmrc`, `engines`, release lock, official source |
| pnpm | `10.34.0` | `packageManager`, `engines`, Corepack, lockfile |
| Next.js | `16.2.9` | web manifest and production build |
| React / React DOM | `19.2.0` | web manifest |
| TypeScript | `5.9.3` | manifest and passed typecheck |
| Supabase CLI | `2.101.0` | exact development dependency only |
| Tauri | `2.11.2` | manifest, lock, locked metadata/tree |
| Rust | `1.97.1` | toolchain pin and `rustc --version` |

Official source URLs are in `Codex Code/Implementation/RELEASE_LOCK.json`.

## Passing workspace validations

After the clean frozen reinstall, every command below exited `0`:

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
```

Observed results: Prettier reported all matched files formatted; ESLint passed with
`--max-warnings=0`; TypeScript checked the web and configuration packages; Vitest `v4.1.10`
passed 1 test file / 4 tests; and Next `16.2.9` built static `/` and `/_not-found` routes.
Release-lock, duplicate-path, and secret checks all passed.

## Deterministic install and clean recovery

The initial install surfaced a strict peer incompatibility in the existing partial workspace:
`eslint-config-next@16.2.9` supports ESLint 9, while `eslint@10.7.0` had been pinned. The single
grounded correction was `eslint@9.39.5`, an exact compatible stable version; no approved core
version changed.

Two `pnpm install --frozen-lockfile` runs succeeded. Between them, only verified generated
`node_modules`, `apps/web/.next`, and `target` directories were recoverably moved to a temporary
quarantine. Source files and lockfiles were not removed or overwritten.

| Lockfile | SHA-256 before/after both frozen installs |
| --- | --- |
| `pnpm-lock.yaml` | `8DA0879B3C39ADC392D64672C228F11907E774FA2FEDFEFF30D589CF61BD36BC` |
| `Cargo.lock` | `4672805547CB413AC6CBED61A27EE3972327C1290C793178D344B816109359C1` |

## Rust/Tauri validation

- `cargo generate-lockfile` exited `0` and resolved `tauri v2.11.2`.
- `rustfmt --check apps/print-agent/src/main.rs` exited `0` with Rustfmt `1.9.0-stable`.
- `cargo metadata --locked --no-deps --format-version 1` exited `0` and retained `=2.11.2`.
- `cargo tree --locked --depth 1` exited `0` and showed `tauri v2.11.2`.
- Owner-environment `cargo fmt --all -- --check` exited `0`.
- Owner-environment `cargo check --workspace --locked` exited `0` and reported:
  `Finished dev profile [unoptimized + debuginfo] target(s) in 8.95s`.
- Successful owner-environment toolchain: Rust `1.97.1`, Cargo `1.97.1`, Rustfmt
  `1.9.0-stable`, target `x86_64-pc-windows-msvc`.

The previous Windows Application Control/MSVC-linker blocker is resolved by the successful
owner-environment validation above. The Rust/Tauri workspace, lock, formatting check, and locked
Cargo check are all validated successfully.
