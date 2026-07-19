# CODEX CODE — CONTROL CENTER AND IMPLEMENTATION CONTAINER

## Purpose

`Codex Code/` is the canonical GitHub area for all work executed by Codex.

It contains both:

1. the single official executable source tree under `Codex Code/Implementation/`; and
2. task control, evidence, review, and merge records.

No second application codebase may be created elsewhere in the repository.

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

Actual source code, migrations, tests, configuration, local-agent code, CI support, and implementation runbooks belong under that root.

## Control and evidence locations

```text
Codex Code/
├── README.md
├── INDEX.md
├── ARMORED_CODEX_MASTER_PROMPT.md
├── TASK_STORAGE_AND_HANDOFF_RULES.md
├── Implementation/
│   └── README.md
├── Tasks/
│   ├── README.md
│   └── CX-R1-000/
│       ├── TASK_RECORD.md
│       └── PROMPT.md
├── Evidence/
│   └── README.md
└── Reviews/
    └── README.md
```

## Core workflow

```text
APPROVED ARCHITECTURE AND TASK CONTRACT
→ VERIFY REAL GIT CHECKOUT
→ CHECK LATEST MAIN AND ACTIVE WORK
→ ISOLATED CODEX TASK BRANCH
→ CODE ONLY UNDER CODEX CODE/IMPLEMENTATION/
→ TESTS AND TASK EVIDENCE
→ DRAFT PR
→ EXTERNAL REVIEW
→ MERGE OR CORRECTION
→ MERGE RECORD
→ STOP
```

## Non-negotiable boundaries

- Do not create root-level `apps/`, `packages/`, `supabase/`, `tests/`, or `infrastructure/` as a competing implementation tree.
- Do not copy source code into `Codex Code/Tasks/`, `Evidence/`, or `Reviews/`.
- Do not create a second implementation of an existing domain, service, package, table, API, event, queue, component, migration chain, or test helper.
- Do not delete, move, rename, or replace valid work without an exact authorized task contract and recovery plan.
- Do not store secrets, API keys, production data, customer data, device passcodes, payment details, or private certificates.
- Every Codex task receives one task folder and one factual completion record.
- Every update must reuse, extend, and connect to the existing canonical implementation.

## Existing-code conflict rule

If implementation code is discovered outside `Codex Code/Implementation/`:

```text
DO NOT COPY
DO NOT DELETE
DO NOT CREATE A PARALLEL VERSION
→ REPORT EXACT PATHS
→ RETURN BLOCKED_ARCHITECTURE_CLARIFICATION
```

A controlled migration requires a separate owner-authorized task.

## Required task record

Every task folder must record:

- authorization and scope;
- source paths read;
- latest verified `main` SHA;
- active-worker and open-PR checks;
- existing-work classification;
- allowed and changed paths under `Codex Code/Implementation/`;
- migrations, API/event/schema versions;
- commands and tests;
- security, RLS, UX, accessibility, recovery, and hardware evidence when applicable;
- commit and draft PR;
- reviewer result;
- exact next authorized task or `STOP`.

## Status

```text
CODEX CONTROL CENTER: DEFINED
CANONICAL APPLICATION CODE ROOT: CODEX CODE/IMPLEMENTATION/
ACTUAL APPLICATION CODE PRESENT: NO
PARALLEL ROOT-LEVEL SOURCE TREES ALLOWED: NO
TASK/EVIDENCE/REVIEW STORAGE: YES
IMPLEMENTATION AUTHORIZATION GRANTED BY THIS FOLDER: NO
```
