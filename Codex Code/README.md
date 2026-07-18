# CODEX CODE — CONTROL CENTER

## Purpose

This folder is the canonical storage and handoff area for work executed by Codex.

It stores task control, evidence, review, and merge records. It does **not** duplicate the actual application source code.

Actual implementation remains in its approved canonical paths such as:

```text
apps/
packages/
supabase/
tests/
infrastructure/
docs/
```

`Codex Code/` stores the proof of what Codex was authorized to do, what it changed, what tests ran, what failed, what was reviewed, and what was merged.

## Core rule

```text
ARCHITECTURE AND TASK CONTRACT
→ CODEX TASK BRANCH
→ CANONICAL SOURCE-CODE PATHS
→ TESTS AND EVIDENCE
→ CODEX CODE TASK RECORD
→ DRAFT PR
→ REVIEW
→ MERGE OR CORRECTION
```

## Canonical structure

```text
Codex Code/
├── README.md
├── INDEX.md
├── ARMORED_CODEX_MASTER_PROMPT.md
├── TASK_STORAGE_AND_HANDOFF_RULES.md
├── Tasks/
│   ├── README.md
│   └── CX-R1-000/
│       └── TASK_RECORD.md
├── Evidence/
│   └── README.md
└── Reviews/
    └── README.md
```

## Non-negotiable boundaries

- Do not copy complete application source files into this folder.
- Do not create a second implementation here.
- Do not use this folder to bypass `apps/`, `packages/`, `supabase/`, or other canonical implementation paths.
- Do not store secrets, API keys, production data, customer data, device passcodes, payment details, or private certificates.
- Do not delete, move, rename, or replace valid work without an exact authorized task contract.
- Every Codex task receives one task folder and one factual completion record.
- A new update connects to existing canonical code; it does not recreate it.

## Required task record

Every task folder must record:

- authorization and scope;
- source paths read;
- latest verified `main` SHA;
- active-worker and open-PR checks;
- existing-work classification;
- allowed and changed paths;
- migrations, API/event/schema versions;
- commands and tests;
- security, RLS, UX, accessibility, recovery, and hardware evidence when applicable;
- commit and draft PR;
- reviewer result;
- exact next authorized task or `STOP`.

## Status

```text
CODEX CONTROL CENTER: DEFINED
ACTUAL APPLICATION CODE STORED HERE: NO
TASK/EVIDENCE/REVIEW STORAGE: YES
DUPLICATE SOURCE-CODE COPIES ALLOWED: NO
IMPLEMENTATION AUTHORIZATION GRANTED BY THIS FOLDER: NO
```
