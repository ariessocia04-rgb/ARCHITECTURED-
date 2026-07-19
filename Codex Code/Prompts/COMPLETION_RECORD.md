# CODEX PROMPT CHAIN — COMPLETION RECORD

## Scope

This record covers the GitHub-backed Codex prompt history, fully armored prompt standard, active-task pointer, interruption checkpoint, continuation protocol, and finish-current-task-before-next gate.

## Current delivered structure

```text
Codex Code/
├── CURRENT_TASK_COMPLETION_LAW.md
├── ARMORED_PROMPT_REQUIREMENTS.md
├── ARMORED_CODEX_MASTER_PROMPT.md
├── Prompts/
│   ├── INDEX.md
│   ├── README.md
│   ├── ACTIVE_TASK.md
│   ├── PROMPT_REGISTRY.md
│   ├── CONTINUE_PROTOCOL.md
│   ├── COMPLETION_RECORD.md
│   ├── FINAL_VERIFICATION.md
│   ├── MAIN_READBACK.md
│   ├── MERGE_RECORD.md
│   ├── Templates/
│   │   ├── PROMPT_ENTRY_TEMPLATE.md
│   │   └── CHECKPOINT_TEMPLATE.md
│   └── CX-R1-000/
│       ├── 0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md
│       ├── 0003-FINAL-ARMORED-CONTINUE-AND-FINISH.md
│       └── 0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md
└── Tasks/
    └── CX-R1-000/
        ├── TASK_RECORD.md
        └── CHECKPOINT.md
```

## Functional behavior

```text
OWNER SAYS CONTINUE
→ READ CURRENT-TASK COMPLETION LAW
→ READ FULLY ARMORED PROMPT REQUIREMENTS
→ READ ACTIVE TASK AND PROMPT REGISTRY
→ READ ALL VALID PROMPTS IN ORDER
→ READ TASK RECORD/CONTRACT/CHECKPOINT
→ READ CURRENT MASTER-PLAN/APPLICATION/SAAS/DESIGN/RELEASE SOURCES
→ VERIFY REAL GIT REPOSITORY
→ RECONCILE BRANCH/PR/CODE/MIGRATION/TEST STATE
→ RESUME SAME TASK FROM FIRST INCOMPLETE AUTHORIZED ITEM
→ FINISH ENTIRE CURRENT TASK
→ DO NOT REPEAT COMPLETED WORK
→ DO NOT START NEXT TASK
```

## Current-task rule

The active task remains active until externally recorded as:

```text
APPROVED_COMPLETE
OWNER_CANCELLED
OWNER_SUPERSEDED_WITH_MIGRATION_PLAN
```

`BLOCKED`, `FAILED_VALIDATION`, `INTERRUPTED`, `READY_FOR_REVIEW`, and completion of one substep do not authorize task advancement.

## Current prompt state

```yaml
active_task_id: CX-R1-000
latest_prompt_sequence: 0004
latest_prompt_path: Codex Code/Prompts/CX-R1-000/0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md
checkpoint_path: Codex Code/Tasks/CX-R1-000/CHECKPOINT.md
master_sync_path: 1plan-SAAS_APPLICATION_WIREFRAME_WIREFLOW_INTEGRATION_EXTENSION.md
previous_result: BLOCKED_ENVIRONMENT
continuation_safe: true_after_real_checkout_recovery_and_live_reconciliation
source_code_authorized: false
next_task_authorized: false
```

## Fully armored standard

Every current/future prompt must define applicable Role, Goal, Background, Live State, Sources, Authorization, Tools, Paths, Existing-Work Classification, Complete Steps, Architecture/Security/UX Rules, Tests, Evidence, Git/PR Rules, Blockers, Final Report, Completion, and Stop behavior.

The current Prompt 0004 includes the later synchronized:

- IT Operations;
- Department Store Retail SaaS;
- Plans and Billing;
- Printing;
- Cross-Department Fabric;
- ROS Future Modules and integrations;
- operating modes/department teams;
- Release 1 planning/high-fidelity definitions;
- Codex code-root/task/prompt governance.

## Canonical implementation rule retained

All future executable code remains under:

```text
Codex Code/Implementation/
```

No root-level parallel implementation tree is authorized.

Prompt/task/evidence/review folders must not contain copied executable source trees.

## Truthful boundary

This prompt/governance package does not:

- execute `CX-R1-000` in Codex's local environment;
- create application code;
- authorize `CX-R1-001`;
- install dependencies;
- create or run migrations;
- execute application tests;
- certify hardware;
- deploy anything.

It creates the persistent, current, fully armored GitHub instructions that allow Codex to resume and finish `CX-R1-000` safely.

## Current validation target

```text
FULLY ARMORED PROMPT REQUIREMENTS: PRESENT
ARMORED MASTER PROMPT: SYNCHRONIZED
PROMPT TEMPLATE: SYNCHRONIZED
ACTIVE TASK POINTER: POINTING TO 0004
PROMPT REGISTRY: 0004 CURRENT
PROMPT INDEX/README: SYNCHRONIZED
CX-R1-000 PROMPT 0004: PRESENT
CHECKPOINT: PRESENT
CURRENT TASK COMPLETION LAW: PRESENT
MASTER SAAS/APPLICATION/DESIGN SYNC: PRESENT
DELETIONS: NONE
APPLICATION CODE: NONE
NEXT TASK AUTHORIZATION: NO
```

Final PR, merge SHA, post-merge evidence, and main read-back for this synchronization revision are recorded after publication.