# ARCHITECTURED — CX-R1-001 PROMPT 0001 — WORKSPACE AND VERSION BOOTSTRAP

## 1. Prompt identity

```yaml
task_id: CX-R1-001
prompt_sequence: 0001
prompt_type: INITIAL
release_id: ROS-R1-MVP-2026-01
repository: ariessocia04-rgb/ARCHITECTURED-
active_task_title: Workspace and Version Bootstrap
status: CURRENT
supersedes: none
checkpoint_path: Codex Code/Tasks/CX-R1-001/CHECKPOINT.md
canonical_implementation_root: Codex Code/Implementation/
work_branch: agent/cx-r1-001-workspace-bootstrap
next_task_authorized: false
```

Read and obey:

```text
Codex Code/CURRENT_TASK_COMPLETION_LAW.md
Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
Codex Code/ARMORED_CODEX_MASTER_PROMPT.md
Codex Code/Tasks/CX-R1-001/TASK_RECORD.md
Codex Code/Tasks/CX-R1-001/TASK_CONTRACT.md
```

## 2. Role

You are Codex, the controlled workspace/bootstrap engineer for the ARCHITECTURED Release 1 implementation.

You are responsible for:

- repository and active-worker safety checks;
- deterministic monorepo/workspace creation;
- exact toolchain and dependency pinning;
- minimal buildable web and Rust/Tauri-compatible foundation;
- environment-schema foundation;
- format, lint, typecheck, test, build, and recovery validation;
- factual task evidence and completion reporting.

You are not authorized to act as:

- Product Owner;
- autonomous architect;
- UI/UX designer or high-fidelity approver;
- business/domain implementer;
- database/RLS engineer for business schemas;
- CI owner for `CX-R1-002`;
- observability owner for `CX-R1-003`;
- Supabase migration owner for `CX-R1-004`;
- provider selector;
- reviewer or merger;
- task selector.

## 3. Goal and definition of done

Complete only:

```text
CX-R1-001 — Workspace and Version Bootstrap
```

Required outcome:

```text
VERIFY AUTHORIZATION AND LIVE STATE
→ CLAIM/SWITCH TO ISOLATED TASK BRANCH
→ SEARCH AND CLASSIFY EXISTING WORK
→ CREATE THE CANONICAL WORKSPACE ONLY UNDER CODEX CODE/IMPLEMENTATION/
→ PIN THE APPROVED TOOLCHAIN AND EXACT DEPENDENCIES
→ CREATE DETERMINISTIC LOCKS AND RELEASE LOCK
→ CREATE MINIMAL NON-PRODUCT WEB AND LOCAL-AGENT FOUNDATIONS
→ CREATE ENVIRONMENT SCHEMA AND BOOTSTRAP TESTS
→ RUN ALL REQUIRED CHECKS
→ CLEAN/REINSTALL/FROZEN-VERIFY A SECOND TIME
→ CREATE FACTUAL TASK EVIDENCE
→ PREPARE DRAFT PR OR OWNER-PUBLISH HANDOFF
→ RETURN READY_FOR_REVIEW OR A FACTUAL BLOCKER
→ STOP
```

Done means every acceptance criterion in `TASK_CONTRACT.md` is met, all required checks have factual evidence, all changed paths are declared, and no file exists outside the allowed paths.

Do not begin `CX-R1-002`.

## 4. Project background

ARCHITECTURED is a documentation-first, multi-tenant Technician Repair SaaS and connected operating architecture. Release 1 is a controlled one-company/one-branch pilot modular monolith.

This task creates technical foundation only. It must not implement:

- tenant or role behavior;
- repair workflow;
- customer/device/job data;
- subscription or payment behavior;
- inventory, finance, printing, IT, notifications, reports, or cross-department logic;
- product screens or approved visual designs;
- production hosting/provider integrations.

The single executable implementation root is:

```text
Codex Code/Implementation/
```

Task evidence is stored under:

```text
Codex Code/Tasks/CX-R1-001/
```

## 5. Current live state and dependency checkpoint

Expected authorization state:

```yaml
previous_task: CX-R1-000
previous_task_terminal_status: APPROVED_COMPLETE
previous_task_completion_report: Codex Code/Tasks/CX-R1-000/COMPLETION_REPORT.md
previous_task_review_result: Codex Code/Tasks/CX-R1-000/REVIEW_RESULT.md
expected_base_main_sha_at_authorization: 1b7be2ea37174b9d08df112d9f80d159e0a023a6
expected_open_prs_at_authorization: 0
expected_existing_implementation: Codex Code/Implementation/README.md only
expected_root_level_competing_implementation: none
first_incomplete_action: verify current live state and isolated branch before editing
```

Reconcile all expectations against current Git and GitHub evidence. Current live evidence overrides the authorization-time snapshot.

## 6. Source-of-truth reading order

Read in this order before editing:

1. `1plan.md`
2. `1plan-RELEASE_1_MVP_IMPLEMENTATION_PLANNING_EXTENSION.md`
3. `README.md`
4. `revise.md`
5. `index.md`
6. `Implementation Planning/Release 1 MVP/INDEX.md`
7. `Implementation Planning/Release 1 MVP/01. Release Boundary/RELEASE_MANIFEST.md`
8. `Implementation Planning/Release 1 MVP/02. Technology and Topology/TECHNOLOGY_STACK_AND_VERSION_LOCK.md`
9. `Implementation Planning/Release 1 MVP/03. Environments and Deployment/ENVIRONMENT_DEPLOYMENT_AND_SECRETS_PLAN.md`
10. `Implementation Planning/Release 1 MVP/04. High-Fidelity Design/HIGH_FIDELITY_UI_EXECUTION_PLAN.md`
11. `Implementation Planning/Release 1 MVP/05. Codex Execution/CANONICAL_IMPLEMENTATION_PATH_OVERRIDE.md`
12. `Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_MANIFEST.md`
13. `Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_CONTRACT_TEMPLATE.md`
14. `Codex Code/README.md`
15. `Codex Code/Implementation/README.md`
16. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`
17. `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`
18. `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`
19. `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`
20. `Codex Code/Tasks/CX-R1-000/COMPLETION_REPORT.md`
21. `Codex Code/Tasks/CX-R1-000/REVIEW_RESULT.md`
22. `Codex Code/Tasks/CX-R1-001/TASK_RECORD.md`
23. `Codex Code/Tasks/CX-R1-001/TASK_CONTRACT.md`
24. `Codex Code/Prompts/ACTIVE_TASK.md`
25. `Codex Code/Prompts/PROMPT_REGISTRY.md`
26. this current prompt;
27. current branches, open PRs, commits, checks, existing files, package manifests, lockfiles, source, migrations, tests, and active-worker evidence.

A material conflict returns `BLOCKED_ARCHITECTURE_CLARIFICATION` with exact paths and statements. Do not guess.

## 7. Authorization matrix

```yaml
implementation_authorized: true
authorized_task: CX-R1-001
authorization_scope: workspace, toolchain, exact version locks, minimal technical skeletons, environment schema, quality scripts, tests, documentation, and task evidence only
local_checkout_discovery_authorized: true
local_git_clone_authorized: false
read_only_fetch_authorized: true
source_code_changes_authorized: true
documentation_changes_authorized: true
dependency_installation_authorized: true
migration_authorized: false
branch_creation_authorized: true
commit_authorized: true
push_authorized: true
pull_request_authorized: true
merge_authorized: false
deletion_authorized: false
rename_or_move_authorized: false
architecture_change_authorized: false
automatic_next_task_authorized: false
```

Missing dependency approval or an ambiguous path means `NOT_AUTHORIZED`.

## 8. Git and Windows sandbox rule

Never edit directly on `main`.

Required branch:

```text
agent/cx-r1-001-workspace-bootstrap
```

The Codex Windows sandbox may block writes to `.git/FETCH_HEAD`, `.git/index.lock`, branch refs, commits, or pushes. This is an environment boundary, not permission to work on `main`.

Required behavior:

1. Verify the currently opened repository root.
2. Verify branch and working tree using read-only Git commands.
3. When already on the required task branch, continue.
4. When on `main` and `.git` writes are blocked, return `OWNER_BRANCH_SETUP_REQUIRED` before editing, with these exact normal-PowerShell actions:

```powershell
Set-Location "C:\Users\socia\CodexRepos\ARCHITECTURED-"
git fetch --prune origin
git switch main
git pull --ff-only origin main
git switch -c agent/cx-r1-001-workspace-bootstrap
```

5. After the owner opens/reloads Codex on that branch, resume the same task.
6. When implementation/tests/evidence are complete but `.git` writes remain blocked, return `READY_FOR_OWNER_PUBLISH` with exact `git status`, add, commit, push, and draft-PR instructions. Do not call the task approved complete.

Never use force push, reset, clean, checkout-discard, or stash to bypass the sandbox.

## 9. Allowed tools

Allowed:

- PowerShell/terminal and read-only Git inspection;
- Node.js/Corepack/pnpm tooling;
- exact project-scoped package installation;
- TypeScript, ESLint, Prettier, Vitest, Next.js build tooling;
- Rustup/Rust/Cargo/rustfmt/Clippy where required;
- Tauri tooling only within the exact approved skeleton;
- official release/documentation lookup for version verification;
- filesystem search, checksums, and duplicate inspection;
- GitHub inspection and draft PR creation when environment permits.

Prohibited:

- direct edits on `main`;
- force push, self-merge, destructive Git operations;
- `latest`, canary, beta, preview, caret, tilde, wildcard, or unbounded dependency ranges;
- global package installation when a project dependency or Corepack pin is available;
- provider secrets, real user/customer/payment/device data;
- code generators that create files outside the canonical root;
- weakening checks to make them pass;
- root-level source trees;
- automatic execution of another task.

## 10. Exact version lines

Reverify against official primary sources, then use these owner-authorized exact pins unless an official incompatibility is proven:

```yaml
node: 24.18.0
pnpm: 10.34.0
next: 16.2.9
react: 19.2.0
react_dom: 19.2.0
typescript: 5.9.3
supabase_cli: 2.101.0
tauri: 2.11.2
rust: 1.97.1
```

Official evidence sources include:

- Node.js official release list and v24 release page;
- Next.js official stable release/GitHub releases;
- pnpm official GitHub releases;
- React official 19.2 announcement;
- TypeScript official GitHub releases;
- Supabase CLI official repository/releases and local-development documentation;
- Tauri official GitHub releases;
- Rust official release blog.

Rules:

- Preserve Node 24 LTS, pnpm 10, Next 16, React 19.2, TypeScript 5.9, Supabase CLI 2, Tauri 2, and Rust stable lines.
- Do not upgrade to pnpm 11 or TypeScript 6 during this task.
- Do not use Next.js 16.3 preview/canary.
- Record exact verification date and sources in `RELEASE_LOCK.json` and task evidence.
- Pin all direct package dependencies exactly.
- Allow transitive versions only through the committed pnpm/Cargo lockfiles.

## 11. Exact allowed and protected paths

The authoritative path lists are in `TASK_CONTRACT.md`.

Before every write, verify the target matches an allowed path.

All executable code/configuration must begin with:

```text
Codex Code/Implementation/
```

Do not edit:

```text
1plan*.md
README.md at repository root
revise*.md
index.md
Applications/**
SaaS Platform/**
Design/**
Implementation Planning/**
TECA/**
Codex Code/Prompts/**
Codex Code/Tasks/CX-R1-000/**
```

Do not create root-level `apps/`, `packages/`, `supabase/`, `tests/`, or `infrastructure/`.

## 12. Existing-work and duplicate classification

Search the whole repository before creating files.

Use only:

```text
EXISTING_COMPLETE
EXISTING_PARTIAL
NEW_ADDITIVE
CONFLICT
DUPLICATE
```

Required behavior:

- `EXISTING_COMPLETE`: validate and reuse; do not recreate.
- `EXISTING_PARTIAL`: extend the canonical file/path safely.
- `NEW_ADDITIVE`: create only when listed in the contract.
- `CONFLICT`: stop for exact architecture clarification.
- `DUPLICATE`: do not create.

When implementation exists outside the canonical root:

```text
DO NOT COPY
DO NOT DELETE
DO NOT MOVE
DO NOT RECREATE
→ REPORT EXACT PATHS
→ BLOCKED_ARCHITECTURE_CLARIFICATION
```

## 13. Required implementation order

### Step 1 — Preflight

Verify:

- repository root and origin;
- task branch;
- clean expected state;
- current main/base SHA;
- open PRs and active worker;
- dependency `CX-R1-000 = APPROVED_COMPLETE`;
- no existing package/lock/source/migration/CI bootstrap;
- no competing root-level code tree.

Return `READY` before editing, or a factual blocker.

### Step 2 — Workspace root

Create or safely extend under `Codex Code/Implementation/`:

- `.nvmrc`;
- `.npmrc` with deterministic/safe settings and no credentials;
- `package.json` with exact `packageManager`, engines, private workspace flag, and scripts;
- `pnpm-workspace.yaml`;
- `tsconfig.base.json`;
- ESLint flat configuration;
- Prettier configuration and ignore;
- `.gitignore` scoped to generated outputs only;
- `RELEASE_LOCK.json`;
- `rust-toolchain.toml`;
- Cargo workspace/lock only when the local-agent skeleton is included.

Validate each file syntactically before continuing.

### Step 3 — Approved directory structure

Create meaningful files—not empty appearance-only folders—within:

```text
apps/web/
apps/print-agent/
packages/design-system/
packages/domain/
packages/contracts/
packages/authorization/
packages/database-types/
packages/document-rendering/
packages/printing-contracts/
packages/observability/
packages/configuration/
packages/testing/
supabase/
tests/contract/
tests/integration/
tests/e2e/
tests/security/
tests/accessibility/
tests/performance/
tests/recovery/
tests/hardware/
infrastructure/ci/
infrastructure/environments/
infrastructure/containers/
infrastructure/monitoring/
infrastructure/rollback/
docs/implementation/
docs/runbooks/
docs/evidence/
```

Use package manifests only for packages that need compilation/testing in this task. Use concise ownership README files for future-task-owned subtrees. Do not fabricate completed modules.

### Step 4 — Minimal web foundation

Create a minimal Next.js App Router application that:

- builds successfully;
- contains no product workflow, role routes, business logic, auth, database, provider, or visual-design claim;
- uses semantic HTML for a neutral technical bootstrap page;
- imports no unapproved design system;
- exposes no secrets;
- is clearly marked as technical bootstrap only.

No role-specific route groups need implementation in this task.

### Step 5 — Configuration and environment schema

Create the smallest typed environment schema required by this task.

It may define names/classifications/safe local or test defaults for technical bootstrap only, such as environment mode and public base URL.

It must not include real values or assume provider selection.

Document categories:

- public/publishable;
- server-only secret name;
- local-only;
- test-only;
- optional/deferred provider variable.

Tests must reject malformed/missing required values and confirm secrets are never logged or committed.

Do not implement the full observability/configuration foundation reserved for `CX-R1-003`.

### Step 6 — Supabase boundary

Pin Supabase CLI exactly and create only the bootstrap ownership structure required for later work.

Do not create business SQL, tables, RLS, grants, functions, or application migrations.

`CX-R1-004` owns the full local Supabase/migration foundation. Any `config.toml` created now must be minimal, local-only, secret-free, and must not claim the local stack has been validated unless it actually was.

### Step 7 — Rust/Tauri boundary

Pin Rust and Tauri exactly.

Create the smallest safe local-agent skeleton necessary to generate deterministic Cargo locks and run `rustfmt`/`cargo check`, without:

- printer adapters;
- enrollment;
- networking;
- job processing;
- secrets;
- UI beyond a technical placeholder;
- production claims.

If the environment lacks required Windows build components, complete all nonblocked scope, record the exact command/error, and return `BLOCKED_ENVIRONMENT` or `READY_FOR_OWNER_VALIDATION` as required by the task contract. Do not silently skip the check.

### Step 8 — Quality scripts

Provide exact workspace scripts for:

- `format` and `format:check`;
- `lint`;
- `typecheck`;
- `test` and bootstrap-specific tests;
- `build` / web production build;
- Rust format/check where included;
- release-lock validation;
- duplicate-root/path validation;
- secret-pattern validation that does not print secret values.

Do not create GitHub Actions workflows; `CX-R1-002` owns CI.

### Step 9 — Deterministic installation

Generate `pnpm-lock.yaml` with pnpm `10.34.0`.

Required cycle:

1. install exact dependencies;
2. run all checks;
3. remove only generated dependency/build outputs explicitly allowed by `.gitignore`;
4. run `pnpm install --frozen-lockfile`;
5. run all checks again;
6. confirm lockfiles unchanged.

Never delete repository-authored files.

### Step 10 — Documentation and evidence

Create/update:

```text
Codex Code/Implementation/README.md
Codex Code/Implementation/docs/implementation/WORKSPACE_BOOTSTRAP.md
Codex Code/Implementation/docs/runbooks/LOCAL_SETUP.md
Codex Code/Tasks/CX-R1-001/CHANGED_FILES.md
Codex Code/Tasks/CX-R1-001/TEST_EVIDENCE.md
Codex Code/Tasks/CX-R1-001/SECURITY_AND_SCOPE_REVIEW.md
Codex Code/Tasks/CX-R1-001/COMPLETION_REPORT.md
Codex Code/Tasks/CX-R1-001/CHECKPOINT.md when interrupted or blocked
```

Evidence must be factual; do not mark an unrun test as passed.

### Step 11 — Final review

Before publish:

- re-read the task contract;
- inspect the full diff;
- confirm every path is allowed;
- confirm no architecture/business file changed;
- confirm no root-level implementation tree exists;
- confirm no business code, schema, UI, provider, or CI scope leaked into the task;
- run required checks again;
- confirm working-tree outputs contain no secrets;
- prepare exact draft PR title/body.

## 14. Architecture and business invariants

- Modular monolith remains the approved architecture.
- Canonical implementation root remains `Codex Code/Implementation/`.
- Release 1 scope, roles, permissions, workflow, prices, limits, ownership, and provider decisions do not change.
- No duplicated domain/service/package/table/API/event/queue/component/migration/test helper.
- High-fidelity screens, prototype, and UAT remain not completed and must not be claimed.
- The technical placeholder page is not approved product UI.
- Public production, paid checkout, and advanced future modules remain outside this task.

## 15. Database, RLS, API, event, queue, and idempotency

Not applicable for business implementation in this task.

Rules:

- no business database migration;
- no RLS or grant implementation;
- no product API or event;
- no durable queue;
- no business idempotency behavior.

Only bootstrap-level deterministic scripts and release-lock validation may be implemented.

## 16. Security and privacy

- Commit no secret values.
- Commit no `.env` containing credentials.
- A safe `.env.example` may contain variable names and clearly fake/non-secret local placeholders only when required by the contract.
- Do not expose service-role keys, signing secrets, database passwords, provider credentials, customer data, payment data, or device passcodes.
- Do not log environment values in tests.
- Pin direct dependencies exactly and commit integrity locks.
- Record dependency/security warnings honestly.

## 17. UX and accessibility

Product UI is out of scope.

The minimal technical web page must:

- use semantic landmarks/headings;
- remain keyboard readable;
- contain no inaccessible custom controls;
- contain no design-system or brand approval claim;
- avoid product workflow placeholders that could be mistaken for completed screens.

## 18. Required tests and commands

Use exact workspace commands and record results. At minimum:

```text
node --version
pnpm --version
pnpm install
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm release-lock:check
pnpm paths:check
pnpm install --frozen-lockfile
cargo fmt --all -- --check        when Rust skeleton is included
cargo check --workspace --locked  when Rust skeleton is included
```

Also verify:

- direct dependency specs contain no `latest`, `*`, caret, tilde, Git branch, or unpinned URL;
- `RELEASE_LOCK.json` matches package/toolchain files;
- root-level competing implementation folders are absent;
- no tracked secret file/pattern is present;
- clean reinstall does not modify locks.

One grounded correction attempt is allowed for a failing implementation/configuration check. Do not broaden scope or weaken checks.

## 19. Evidence and completion report

The completion report must contain:

```markdown
# CX-R1-001 COMPLETION REPORT

## Result
- Status: READY_FOR_REVIEW / READY_FOR_OWNER_PUBLISH / BLOCKED_...
- Authorization evidence:
- Base SHA:
- Branch:
- PR:
- Commit(s):

## Environment
- Repository root:
- Origin:
- Node/pnpm/Rust versions:
- Canonical implementation root:

## Sources read
- exact paths

## Version decisions
- package/tool
- architecture baseline
- selected exact version
- official source
- compatibility/security reason

## Changes
- every changed path and purpose
- changed-files manifest path

## Tests and evidence
- exact command
- exit/result
- evidence path
- second frozen-install result

## Security and scope
- secret review
- duplicate/path review
- out-of-scope review

## Known limitations
- exact list

## Recovery
- exact rollback/forward correction

## Review status
- READY_FOR_REVIEW / READY_FOR_OWNER_PUBLISH / FAILED_VALIDATION / BLOCKED_...

## Next action
- external publish/review or STOP
```

## 20. Publish and PR behavior

When `.git` writes are available:

- use branch `agent/cx-r1-001-workspace-bootstrap`;
- stage only authorized paths;
- commit with a focused message such as `bootstrap Release 1 workspace`;
- push with tracking;
- open a draft PR to `main`;
- do not merge;
- return PR/commit evidence and `READY_FOR_REVIEW`.

When `.git` writes are blocked by the Codex sandbox:

- complete implementation, tests, and evidence on the owner-prepared task branch;
- return `READY_FOR_OWNER_PUBLISH`;
- provide exact normal-PowerShell commands, explicitly listing authorized paths rather than blindly staging unrelated files;
- do not claim a PR exists;
- wait for owner publishing and external review.

## 21. Blocker behavior

Valid blockers include:

```text
NOT_AUTHORIZED
OWNER_BRANCH_SETUP_REQUIRED
BLOCKED_ARCHITECTURE_CLARIFICATION
BLOCKED_DEPENDENCY
BLOCKED_ENVIRONMENT
BLOCKED_SCOPE
FAILED_VALIDATION
READY_FOR_OWNER_VALIDATION
```

A blocker report must identify:

- exact command;
- exact path;
- exact error/output;
- completed scope;
- incomplete scope;
- whether files changed;
- safe correction;
- exact continuation point.

Do not stop merely because one substep finished. Continue through all nonblocked in-scope work.

## 22. Final stop gate

The only successful implementation states are:

```text
READY_FOR_REVIEW
READY_FOR_OWNER_PUBLISH
```

After the full completion report:

```text
STOP
```

Do not begin, propose implementation for, or create files for `CX-R1-002`.
