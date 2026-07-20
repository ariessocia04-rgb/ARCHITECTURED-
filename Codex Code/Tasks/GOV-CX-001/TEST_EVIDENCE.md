# GOV-CX-001 Test Evidence

## Execution context

```yaml
validation_date_utc: 2026-07-20
repository: C:\Users\socia\CodexRepos\ARCHITECTURED-
origin: https://github.com/ariessocia04-rgb/ARCHITECTURED-.git
branch: governance/codex-execution-modes
base_main_sha: e93cbe519ea2cb9d913ce17b0bd9732836a63d9f
starting_branch_sha: 1b984f6536b2b9d03254dba98728b2d57ab653ca
pull_request: https://github.com/ariessocia04-rgb/ARCHITECTURED-/pull/19
execution_mode: CONTINUE_MODE
selected_codex_model: NOT_EXPOSED_BY_ENVIRONMENT
```

The pinned validation runtime was isolated under the system temporary directory and did not change repository source or lockfiles:

```text
Node v24.18.0
Corepack 0.35.0
pnpm 10.34.0
rustc 1.97.1
cargo 1.97.1
rustfmt 1.9.0-stable
target x86_64-pc-windows-msvc
```

The official Node `v24.18.0` Windows archive SHA-256 was verified against the official `SHASUMS256.txt` before execution.

## Local validation results

| Command or validation                                                                                               | Result                  | Factual evidence                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `git fetch --prune origin`                                                                                          | PASS                    | `origin/main` resolved to `e93cbe519ea2cb9d913ce17b0bd9732836a63d9f`; sole open PR was #19 after duplicate PR #20 was closed.                                |
| `corepack pnpm install --frozen-lockfile`                                                                           | PASS                    | pnpm `10.34.0`; lockfile current; workspace already up to date; exit 0.                                                                                      |
| Pinned Prettier check of all PR Markdown                                                                            | INITIAL FAIL, CORRECTED | Five files required repository-style normalization; pinned Prettier was applied only to the PR Markdown scope. No semantic owner content was removed.        |
| Pinned Prettier write/check of all PR Markdown                                                                      | PASS                    | All changed Markdown used `Codex Code/Implementation/prettier.config.mjs`; exit 0.                                                                           |
| Authorization, duplicate, registry, pointer, link, secret, model-term, merge-SHA, and `git diff --check` validation | PASS                    | All changed paths authorized; one current registry entry; referenced paths resolved; no configured secret pattern; PR #18 facts matched live GitHub; exit 0. |
| `corepack pnpm ci:check`                                                                                            | PASS                    | Exit 0 in 289.1 seconds with the exact pinned workspace.                                                                                                     |
| Final 19-file Markdown format check after evidence creation                                                         | PASS                    | Pinned Prettier reported all 19 PR Markdown files formatted; exit 0.                                                                                         |
| Final structural validation after evidence creation                                                                 | PASS                    | 19/19 manifest coverage; canonical uniqueness; registry/pointer/mode/model/link/secret/PR #18 fact checks; `git diff --check`; exit 0.                       |
| `corepack pnpm audit --prod --audit-level=high`                                                                     | PASS AT HIGH THRESHOLD  | Exit 0; one existing moderate production advisory remained visible, with no high or critical result.                                                         |

The aggregate `ci:check` pass included:

- implementation formatting;
- workflow formatting;
- ESLint with zero warnings allowed;
- TypeScript checks;
- Vitest: 1 file and 4 tests passed;
- Next.js `16.2.9` production build with static `/` and `/_not-found` routes;
- release-lock verification;
- canonical/duplicate-path verification;
- migration-boundary verification;
- implementation secret scan;
- `cargo fmt --all -- --check`;
- `cargo check --workspace --locked`, completed successfully in 29.29 seconds.

## GitHub evidence before the correction push

- PR #18: merged head `2f4bdde764ba461faca69291e0834ccf3daf8a76`; merge commit `d0fe1d23fc1aa19b61958986709d7bc9fd01261b`; merged at `2026-07-19T15:54:32Z`.
- PR #18: zero formal GitHub reviews, issue comments, or inline review threads were present; the evidence record does not infer an independent review event.
- PR #19 at starting head `1b984f6536b2b9d03254dba98728b2d57ab653ca`: draft, cleanly mergeable, and all six named checks passed.
- PR #20: closed without merge as the duplicate; its owner comment designates PR #19 as the single active governance PR.

## Publication check state

The final correction commit and its GitHub checks are recorded in the live PR state and checkpoint after publication. Codex does not self-review or merge the PR.
