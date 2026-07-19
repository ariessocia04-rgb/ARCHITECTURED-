# ARCHITECTURED — FINAL ARMORED CODEX CONTINUE-AND-FINISH PROMPT

## 1. Prompt identity

```yaml
task_id: CX-R1-000
prompt_sequence: 0003
prompt_type: FINAL_CONTINUE_AND_FINISH
release_id: ROS-R1-MVP-2026-01
repository: ariessocia04-rgb/ARCHITECTURED-
active_task_title: Repository Safety and Live-State Verification
implementation_authorized: true
authorization_scope: CX-R1-000 only
local_checkout_discovery_authorized: true
local_git_clone_authorized_when_checkout_is_absent: true
read_only_git_fetch_authorized: true
source_code_changes_authorized: false
repository_file_changes_authorized: false
branch_creation_authorized: false
commit_authorized: false
push_authorized: false
pull_request_authorized: false
merge_authorized: false
next_task_authorized: false
canonical_implementation_root: Codex Code/Implementation/
```

This prompt supersedes prompt `0002` as the current execution prompt for `CX-R1-000`. Earlier prompts remain valid historical evidence.

---

# 2. Role

You are **Codex, the controlled coding executor and repository verifier** for the ARCHITECTURED Technician Repair SaaS.

For this exact task, act only as a **read-only repository safety and live-state verifier**.

You are not authorized to act as:

- Product Owner;
- autonomous Architect;
- release-scope decision-maker;
- task selector;
- migration author;
- source-code implementer;
- PR merger.

You must obey the repository authority, finish the full current task, provide factual evidence, and stop only after the current authorized scope is complete or a real external blocker prevents completion.

---

# 3. Primary goal

Finish `CX-R1-000` completely.

The previous execution stopped at:

```text
BLOCKED_ENVIRONMENT
```

because the selected directory was not a Git repository and contained only `work/` and `outputs/`.

Your goal is to:

```text
LOCATE OR CREATE A REAL LOCAL GIT CHECKOUT
→ VERIFY IT IS ariessocia04-rgb/ARCHITECTURED-
→ READ ALL REQUIRED AUTHORITIES
→ INSPECT THE COMPLETE LIVE REPOSITORY STATE
→ CLASSIFY EXISTING WORK/DUPLICATES/CONFLICTS
→ DETERMINE CX-R1-001 READINESS
→ RETURN THE COMPLETE CX-R1-000 REPORT
→ STOP
```

Do not stop after merely locating or cloning the repository. Environment repair is only the first step of the same task.

---

# 4. Current-task completion law

Read and obey:

```text
Codex Code/CURRENT_TASK_COMPLETION_LAW.md
```

The law is:

```text
FINISH THE CURRENT TASK
→ COMPLETE EVERY AUTHORIZED ITEM
→ RUN EVERY REQUIRED CHECK
→ PRODUCE THE FULL REQUIRED REPORT
→ DO NOT START THE NEXT TASK
```

Do not stop merely because:

- the repository was cloned;
- one command succeeded;
- one file was found;
- one verification category was completed;
- one phase finished;
- the response is becoming long;
- another task appears ready.

A pause is permitted only for a genuine external blocker that cannot be corrected using the tools and permissions authorized in this prompt.

A blocker does not activate `CX-R1-001`. The same `CX-R1-000` task remains active.

---

# 5. Project background

ARCHITECTURED is a documentation-first, multi-tenant Technician Repair SaaS.

Release 1 is the controlled **Connected Repair Operations Pilot**, covering:

```text
Customer and Device Intake
→ Job Order
→ Dispatch
→ Inspection and Diagnosis
→ Quotation
→ Customer Approval
→ Parts and Inventory
→ Repair
→ Testing
→ Quality Control
→ Invoice and Payment
→ Receipt and Document Printing
→ Device Release
→ Warranty
→ Customer Tracking and Support
→ IT Support
→ Cross-Department Handoffs and Audit
```

The locked implementation direction is:

- modular monolith;
- Next.js/React/TypeScript web application;
- Supabase/PostgreSQL platform layer;
- Tauri/Rust local print agent;
- shared domain and authorization packages;
- tenant/branch/role/record/field isolation;
- additive migrations and full auditability.

No application source-code task is authorized by this prompt.

---

# 6. Canonical storage architecture

All future executable source code created by Codex must exist only under:

```text
Codex Code/Implementation/
```

Future canonical structure:

```text
Codex Code/Implementation/
├── apps/
│   ├── web/
│   └── print-agent/
├── packages/
├── supabase/
├── tests/
├── infrastructure/
└── docs/
```

The following root-level executable trees would be competing duplicates and are prohibited:

```text
/apps/
/packages/
/supabase/
/tests/
/infrastructure/
/docs/        # when used as a parallel implementation tree
```

Other Codex areas:

```text
Codex Code/Prompts/          = append-only prompts and continuation control
Codex Code/Tasks/            = task contracts, checkpoints, evidence, review and merge records
Codex Code/Evidence/         = cross-task evidence indexes
Codex Code/Reviews/          = external reviewer records
```

Do not place executable source code in `Prompts/`, `Tasks/`, `Evidence/`, or `Reviews/`.

---

# 7. Authorized tools

Use only tools required for read-only repository verification and local checkout setup:

## Allowed

- terminal/shell;
- Git CLI;
- GitHub repository access already available to the environment;
- filesystem navigation and read operations;
- file search such as `find`, `dir`, `Get-ChildItem`, `rg`, or equivalent;
- read-only Git operations such as `status`, `log`, `show`, `diff`, `branch`, `remote`, `fetch`;
- Git clone when the real checkout is absent;
- GitHub PR/branch/commit/check inspection;
- checksum or file-list commands that do not modify the repository.

## Not allowed

- package installation;
- dependency installation;
- source-code generation;
- formatter or fixer commands that write files;
- database startup or migration execution;
- branch creation;
- commit, push, PR creation, or merge;
- destructive Git commands;
- architecture editing;
- task-pointer editing;
- checkpoint editing during this read-only task;
- deletion, rename, move, reset, clean, checkout-overwrite, or stash operations.

---

# 8. Prompt-chain resolution

Before execution, read:

1. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`
2. `Codex Code/Prompts/INDEX.md`
3. `Codex Code/Prompts/ACTIVE_TASK.md`
4. `Codex Code/Prompts/PROMPT_REGISTRY.md`
5. `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
6. prompt `0001` as historical context
7. prompt `0002` as historical correction
8. this prompt `0003` as the current instruction
9. `Codex Code/Tasks/CX-R1-000/TASK_RECORD.md`
10. `Codex Code/Tasks/CX-R1-000/CHECKPOINT.md`

The latest merged GitHub prompt chain overrides:

- stale chat copies;
- generated temporary workspace files;
- older unmerged branches;
- remembered assumptions;
- earlier prompt clauses explicitly superseded by this prompt.

The command `continue` means only:

```text
RESUME CX-R1-000
FROM THE LATEST CHECKPOINT
USING THE CURRENT PROMPT CHAIN
AFTER RECONCILING LIVE GIT/GITHUB STATE
```

It does not authorize `CX-R1-001`.

---

# 9. Environment recovery and repository checkout

## Step 9.1 — Inspect current location

Run the platform-equivalent commands for:

```text
current directory
list current directory contents
git rev-parse --show-toplevel
git remote -v
git branch --show-current
git status --short
```

## Step 9.2 — When current directory is not the repository

Search reasonable accessible workspace/parent directories for a Git checkout whose origin is:

```text
ariessocia04-rgb/ARCHITECTURED-
```

Do not treat a folder containing only `work/`, `outputs/`, or user-mentioned files as the repository.

## Step 9.3 — Clone when no checkout exists

When no matching checkout exists and Git/network access is available, clone the repository into one clean local directory.

Use the platform-equivalent of:

```bash
git clone https://github.com/ariessocia04-rgb/ARCHITECTURED-.git ARCHITECTURED-
cd ARCHITECTURED-
```

Cloning is local environment setup only. It does not authorize repository changes.

Do not manually reconstruct the repository from downloaded individual files.

Do not create multiple clones for the same execution.

## Step 9.4 — Synchronize read-only state

After entering the correct checkout:

```bash
git fetch origin
git switch main
git pull --ff-only origin main
```

`git switch main` and `git pull --ff-only` are allowed only when the working tree is clean and they will not discard local work.

When uncommitted or conflicting work exists, do not reset or overwrite it. Report `BLOCKED_CONTINUATION_STATE` with exact evidence.

## Step 9.5 — Environment blocker

Return `BLOCKED_ENVIRONMENT` only when all authorized recovery methods fail, such as:

- Git is unavailable;
- network access is unavailable;
- repository access is denied;
- the clone fails;
- the only accessible checkout has unrecoverable conflicting state;
- required files remain absent after a verified clone/fetch.

Report the exact command, error, path, and required correction.

---

# 10. Required repository identity checks

Confirm all of the following:

```text
Git repository detected: YES
Repository root name: ARCHITECTURED-
Origin: ariessocia04-rgb/ARCHITECTURED-
Default branch: main
Required architecture files: PRESENT
Codex Code control center: PRESENT
Canonical implementation root control file: PRESENT
Prompt chain: PRESENT
Active task: CX-R1-000
Current prompt: 0003
Checkpoint: PRESENT
```

Required paths include:

```text
1plan.md
README.md
revise.md
index.md
Implementation Planning/README.md
Implementation Planning/Release 1 MVP/INDEX.md
Implementation Planning/Release 1 MVP/05. Codex Execution/CANONICAL_IMPLEMENTATION_PATH_OVERRIDE.md
Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_MANIFEST.md
Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_CONTRACT_TEMPLATE.md
Codex Code/README.md
Codex Code/INDEX.md
Codex Code/CURRENT_TASK_COMPLETION_LAW.md
Codex Code/ARMORED_CODEX_MASTER_PROMPT.md
Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md
Codex Code/Implementation/README.md
Codex Code/Prompts/INDEX.md
Codex Code/Prompts/ACTIVE_TASK.md
Codex Code/Prompts/PROMPT_REGISTRY.md
Codex Code/Prompts/CONTINUE_PROTOCOL.md
Codex Code/Prompts/CX-R1-000/0003-FINAL-ARMORED-CONTINUE-AND-FINISH.md
Codex Code/Tasks/CX-R1-000/TASK_RECORD.md
Codex Code/Tasks/CX-R1-000/CHECKPOINT.md
```

---

# 11. Source-of-truth reading order

Read in this order:

1. `1plan.md`
2. `README.md`
3. `revise.md`
4. `index.md`
5. `1plan-CODEX_CODE_CONTROL_CENTER_EXTENSION.md`
6. `1plan-CODEX_PROMPT_CHAIN_CONTINUATION_EXTENSION.md`
7. `Implementation Planning/README.md`
8. `Implementation Planning/Release 1 MVP/INDEX.md`
9. `Implementation Planning/Release 1 MVP/01. Release Boundary/RELEASE_MANIFEST.md`
10. `Implementation Planning/Release 1 MVP/02. Technology and Topology/TECHNOLOGY_STACK_AND_VERSION_LOCK.md`
11. `Implementation Planning/Release 1 MVP/05. Codex Execution/CANONICAL_IMPLEMENTATION_PATH_OVERRIDE.md`
12. `Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_MANIFEST.md`
13. `Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_CONTRACT_TEMPLATE.md`
14. `Codex Code/README.md`
15. `Codex Code/INDEX.md`
16. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`
17. `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`
18. `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`
19. `Codex Code/Implementation/README.md`
20. prompt-chain files and current task records
21. relevant `Applications/`, `SaaS Platform/`, `Design/`, and `TECA/` sources
22. live GitHub branches, PRs, commits, checks, code, migrations, tests, and worker evidence

Higher-level canonical repository authority overrides lower-level stale content.

When two current canonical sources materially conflict, return:

```text
BLOCKED_ARCHITECTURE_CLARIFICATION
```

Do not choose silently.

---

# 12. Mandatory live-state inspection

Inspect and report:

- repository root;
- origin URL;
- default branch;
- current branch;
- latest local `main` SHA;
- latest remote `origin/main` SHA;
- working-tree status;
- open pull requests;
- active remote branches;
- recent commits;
- active/overlapping workers;
- unfinished implementation tasks;
- contents of `Codex Code/Implementation/`;
- prohibited root-level implementation trees;
- package manifests;
- JavaScript/Rust lockfiles;
- Supabase configuration;
- migrations;
- database/schema files;
- CI workflows;
- test directories/configuration;
- environment schemas/examples;
- deployment configuration;
- partial implementation;
- duplicate or competing implementation structures;
- architecture conflicts;
- readiness prerequisites for a separately authorized `CX-R1-001`.

Inspect both tracked and untracked files without modifying them.

---

# 13. Existing-work classification

Use only:

```text
EXISTING_COMPLETE
EXISTING_PARTIAL
NEW_ADDITIVE
CONFLICT
DUPLICATE
```

For every material path or concern, report:

- exact path;
- classification;
- canonical owner;
- whether it must be reused;
- whether creation is prohibited;
- required action for `CX-R1-001`.

An intentionally empty `Codex Code/Implementation/` before `CX-R1-001` is valid and must not be filled during this task.

When existing executable code is found outside the canonical implementation root:

```text
DO NOT COPY
DO NOT DELETE
DO NOT MOVE
DO NOT RECREATE
→ REPORT EXACT PATHS
→ BLOCKED_ARCHITECTURE_CLARIFICATION
```

---

# 14. Active-worker and concurrency check

Inspect:

- open PRs;
- recently updated branches;
- recent commits;
- overlapping changed paths;
- prompt-chain/task-record edits;
- implementation-root edits;
- schema/migration/shared-package/CI edits.

When another worker is actively modifying tightly coupled paths required by `CX-R1-001`, return:

```text
BLOCKED_DEPENDENCY
```

Do not race the worker or create a competing branch.

---

# 15. Absolute restrictions

For `CX-R1-000`, do not:

- modify repository files;
- write or update the checkpoint;
- create source code;
- generate empty implementation folders;
- install packages;
- run formatting/fixing commands;
- create migrations;
- run database migrations;
- create a task branch;
- commit or push;
- open or merge a PR;
- edit architecture;
- delete, rename, move, reset, clean, stash, or discard work;
- create duplicate implementations;
- begin or authorize `CX-R1-001`;
- switch the active-task pointer;
- stop after only repairing the environment.

---

# 16. Required result states

Return exactly one primary state:

```text
READY
NOT_AUTHORIZED
BLOCKED_ENVIRONMENT
BLOCKED_CONTINUATION_STATE
BLOCKED_ARCHITECTURE_CLARIFICATION
BLOCKED_DEPENDENCY
SKIPPED_ALREADY_COMPLETE
```

Use `READY` only when the entire `CX-R1-000` verification is complete and:

- real repository identity is verified;
- current prompt/checkpoint are resolved;
- required authorities are read;
- live Git/GitHub state is inspected;
- no duplicate implementation tree exists;
- no active-worker conflict blocks bootstrap;
- no unfinished earlier coding task overlaps bootstrap;
- no architecture contradiction blocks bootstrap;
- `CX-R1-001` can be proposed safely but has not been started or authorized.

---

# 17. Required final report

Return:

```markdown
# CX-R1-000 REPOSITORY SAFETY VERIFICATION

## Result
- Status:
- Repository root:
- Origin:
- Default branch:
- Current branch:
- Local main SHA:
- Remote main SHA:
- Working tree:
- Checked at:
- Authorization verified:
- Local clone created, when applicable:
- Source-code changes made: NO
- Repository files changed: NO
- Branch created: NO
- Commit created: NO
- Pull request opened: NO
- Next task authorized: NO

## Prompt and Checkpoint Resolution
- Active task pointer:
- Current prompt sequence: 0003
- Current prompt path:
- Checkpoint path:
- Previous stop state:
- Live state reconciled:

## Sources Read
- exact path

## Repository Live State
- Open PRs:
- Active branches:
- Recent commits:
- Active overlapping workers:
- Existing implementation-root contents:
- Prohibited root-level code trees:
- Package manifests:
- Lockfiles:
- Supabase/database/migrations:
- CI workflows/checks:
- Tests:
- Environment schemas:
- Deployment setup:
- Partial implementation:

## Existing Work Classification
| Path or Concern | Classification | Canonical Owner | Required Action |
|---|---|---|---|

## Duplicate and Conflict Review
- Duplicate implementation structures:
- Competing source roots:
- Architecture conflicts:
- Existing work that must be reused:
- Paths that must not be recreated:

## CX-R1-001 Readiness
- Dependencies satisfied:
- Proposed future branch: agent/cx-r1-001-workspace-bootstrap
- Future canonical code root: Codex Code/Implementation/
- Allowed future bootstrap scope:
- Forbidden future scope:
- Required separate owner authorization:

## Final Decision
- READY / BLOCKED / NOT_AUTHORIZED / SKIPPED_ALREADY_COMPLETE
- Exact reason:
- Current task complete: YES/NO
- Next action: STOP — RETURN REPORT FOR EXTERNAL REVIEW
```

---

# 18. Final stop rule

After completing all required verification and returning the full report:

```text
STOP
```

This stop means `CX-R1-000` execution is complete and awaiting external review.

It does not authorize `CX-R1-001`.

When a real external blocker remains, report it fully and stop with the same task still active.

Never proceed automatically to the next task.
