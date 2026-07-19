# CI boundary

CX-R1-002 owns the Release 1 CI, quality, and security baseline. The executable workspace remains
under `Codex Code/Implementation/`; GitHub requires workflow entry points under the narrowly
scoped repository path `.github/workflows/`.

## Workflow inventory

- `CI Quality and Security` runs the frozen-install/quality, build-evidence, migration-boundary,
  Rust/Tauri, and secret-scan checks on pull requests to `main`, pushes to `main`, and manual runs.
- `Dependency Review` runs GitHub's dependency-review action on pull requests to `main`.

The canonical required check names, branch-review policy, artifact retention, and reproducible
commands are in [`BRANCH_REVIEW_POLICY.md`](BRANCH_REVIEW_POLICY.md) and
[`../../docs/runbooks/CI_QUALITY_SECURITY.md`](../../docs/runbooks/CI_QUALITY_SECURITY.md).

Workflows use repository contents read access by default. They do not consume project secrets,
deploy, publish, mutate the repository, or bypass a failing check.
