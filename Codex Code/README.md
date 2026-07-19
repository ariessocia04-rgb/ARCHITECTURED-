# CODEX CODE — CONTROL CENTER AND IMPLEMENTATION CONTAINER

## Purpose

`Codex Code/` is the canonical GitHub area for all work executed by Codex.

It contains:

1. the single official executable source tree under `Codex Code/Implementation/`;
2. fully armored execution rules and prompt requirements;
3. append-only prompt history and active-task continuation controls;
4. task contracts, checkpoints, evidence, review, and merge records.

No second application codebase may be created elsewhere in the repository.

## Required entry order

```text
1plan.md
→ applicable validated 1plan extension
→ Implementation Planning/Release 1 MVP/INDEX.md
→ Codex Code/README.md
→ Codex Code/INDEX.md
→ Codex Code/Implementation/README.md
→ Codex Code/CURRENT_TASK_COMPLETION_LAW.md
→ Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
→ Codex Code/ARMORED_CODEX_MASTER_PROMPT.md
→ Codex Code/Prompts/INDEX.md
→ Codex Code/Prompts/ACTIVE_TASK.md
→ current prompt chain
→ current task contract/checkpoint
→ live Git/PR/code/migration/test state
```

## Canonical code location

```text
Codex Code/Implementation/
├── apps/
├── packages/
├── supabase/
├── tests/
├── infrastructure/
└── docs/
```

Actual source code, migrations, tests, configuration, local-agent code, CI support, and implementation runbooks belong under this root.

## Control and evidence locations

```text
Codex Code/
├── README.md
├── INDEX.md
├── CURRENT_TASK_COMPLETION_LAW.md
├── ARMORED_PROMPT_REQUIREMENTS.md
├── ARMORED_CODEX_MASTER_PROMPT.md
├── TASK_STORAGE_AND_HANDOFF_RULES.md
├── Implementation/
│   └── README.md
├── Prompts/
│   ├── INDEX.md
│   ├── README.md
│   ├── ACTIVE_TASK.md
│   ├── PROMPT_REGISTRY.md
│   ├── CONTINUE_PROTOCOL.md
│   ├── Templates/
│   └── <TASK-ID>/
├── Tasks/
│   ├── README.md
│   └── <TASK-ID>/
├── Evidence/
│   └── README.md
└── Reviews/
    └── README.md
```

## Current-task completion law

```text
ONE ACTIVE TASK
→ COMPLETE THE ENTIRE AUTHORIZED SCOPE
→ RUN EVERY REQUIRED VALIDATION
→ PRODUCE ALL REQUIRED EVIDENCE
→ EXTERNAL REVIEW/CORRECTION OF THE SAME TASK
→ AUTHORIZED MERGE AND MAIN READ-BACK WHEN APPLICABLE
→ APPROVED_COMPLETE
→ ONLY THEN MAY THE OWNER ACTIVATE ANOTHER TASK
```

Codex must not stop after one file, command, phase, or partial test while the environment and authorization allow continued execution.

A blocker or review handoff pauses the same task. It does not activate the next task.

## Prompt armor

Every prompt must follow:

```text
Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
```

Every prompt defines at least:

- identity and sequence;
- role and prohibited roles;
- goal and definition of done;
- background and current live state;
- source reading order;
- authorization matrix;
- allowed/prohibited tools and paths;
- existing-work/duplicate classification;
- dependency-ordered complete steps;
- architecture, database/RLS/API/event/security/UX rules;
- exact tests and evidence;
- branch/PR/review behavior;
- blocker/checkpoint behavior;
- full-current-task completion and stop gate.

Short or ambiguous instructions do not grant authority.

## Core workflow

```text
APPROVED ARCHITECTURE AND EXACT TASK CONTRACT
→ VERIFY REAL GIT CHECKOUT
→ RESOLVE ACTIVE PROMPT AND CHECKPOINT
→ CHECK LATEST MAIN AND ACTIVE WORK
→ CLASSIFY EXISTING IMPLEMENTATION
→ ISOLATED CODEX TASK BRANCH WHEN AUTHORIZED
→ CODE ONLY UNDER CODEX CODE/IMPLEMENTATION/
→ COMPLETE ALL TASK STEPS
→ TESTS AND TASK EVIDENCE
→ DRAFT PR WHEN AUTHORIZED
→ EXTERNAL REVIEW
→ CORRECT THE SAME TASK
→ AUTHORIZED MERGE
→ MAIN READ-BACK AND MERGE RECORD
→ APPROVED_COMPLETE
→ STOP
```

## Non-negotiable boundaries

- Do not create root-level `apps/`, `packages/`, `supabase/`, `tests/`, or `infrastructure/` as a competing implementation tree.
- Do not copy source code into `Codex Code/Tasks/`, `Prompts/`, `Evidence/`, or `Reviews/`.
- Do not create a second implementation of an existing domain, service, package, table, API, event, queue, component, migration chain, or test helper.
- Do not delete, move, rename, or replace valid work without an exact authorized task contract and recovery plan.
- Do not store secrets, API keys, production data, customer data, device passcodes, payment details, or private certificates.
- Every Codex task has one task ID, one active prompt chain, one canonical branch/PR path when authorized, and factual completion evidence.
- Every update reuses, extends, and connects to the existing canonical implementation.
- Codex never approves or merges its own work.
- Completion of one task never authorizes the next task.

## Existing-code conflict rule

When implementation code is found outside `Codex Code/Implementation/`:

```text
DO NOT COPY
DO NOT DELETE
DO NOT MOVE
DO NOT CREATE A PARALLEL VERSION
→ REPORT EXACT PATHS
→ RETURN BLOCKED_ARCHITECTURE_CLARIFICATION
```

A controlled migration requires a separate owner-authorized task.

## Required task records

Every task folder records all applicable:

- authorization and scope;
- sources read;
- prompt/checkpoint resolution;
- verified `main` SHA;
- active-worker and open-PR checks;
- existing-work classification;
- allowed and changed paths;
- migrations, API/event/schema versions;
- exact commands/tests/results;
- security, RLS, privacy, UX, accessibility, recovery, and hardware evidence;
- commit and draft PR;
- reviewer/correction result;
- merge/main read-back record;
- current task complete YES/NO;
- exact same-task continuation or `STOP`;
- next task authorized NO unless separately approved.

## Current status

```text
CODEX CONTROL CENTER: DEFINED
FULLY ARMORED PROMPT STANDARD: DEFINED
APPEND-ONLY PROMPT CHAIN: DEFINED
CURRENT-TASK COMPLETION LAW: DEFINED
CANONICAL APPLICATION CODE ROOT: CODEX CODE/IMPLEMENTATION/
ACTUAL APPLICATION CODE PRESENT: NO
PARALLEL ROOT-LEVEL SOURCE TREES ALLOWED: NO
TASK/EVIDENCE/REVIEW STORAGE: YES
IMPLEMENTATION AUTHORIZATION GRANTED BY THIS FOLDER: NO
```