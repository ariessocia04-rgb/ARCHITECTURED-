# IMPLEMENTATION PLANNING — MASTER INDEX

## Purpose

This folder contains approved release-specific plans that convert completed architecture/design specifications into exact technology, scope, task, test, rollout, and rollback decisions without automatically authorizing source-code implementation.

`1plan.md` remains the master source of truth. `TECA/IMPLEMENTATION_BUILD_PLAN.md` remains the global build-order authority. Each release package specializes those authorities.

## Required reading order

```text
1plan.md
→ Implementation Planning/README.md
→ selected release INDEX.md
→ selected release manifest and decision files
→ relevant application/SaaS/Design architecture
→ TECA/IMPLEMENTATION_BUILD_PLAN.md
→ current branch/PR/commit/migration/worker evidence
```

## Release packages

### ROS-R1-MVP-2026-01 — Connected Repair Operations Pilot

Entry: [Release 1 MVP Index](Release%201%20MVP/INDEX.md)

Status:

```text
RELEASE BOUNDARY: COMPLETE AS PLAN
TECHNOLOGY/TOPOLOGY BASELINE: LOCKED
PRINTER SUPPORT/CERTIFICATION: COMPLETE AS PLAN
HIGH-FIDELITY UI EXECUTION: COMPLETE AS PLAN
HIGH-FIDELITY SCREEN DEFINITIONS: 70
CODEX TASKS: 36
RISK/TEST/ROLLOUT/ROLLBACK: COMPLETE AS PLAN
IMPLEMENTATION AUTHORIZED: NO
```

## Governance

- One canonical package per release ID.
- Release packages do not copy entire application architecture; they link requirements and lock only release-specific decisions.
- A release package may exclude later modules without deleting their architecture.
- Coding requires exact `implementation_authorized=true` for a task or approved task batch.
- Completion of planning does not prove design rendering, coding, testing, hardware certification, deployment, or production readiness.
- Every implementation worker checks active branches/PRs and follows `1plan.md` co-worker continuity rules.

## Current status

```text
RELEASE-SPECIFIC IMPLEMENTATION PLANNING PACKAGES: 1
ACTIVE AUTHORIZED CODING RELEASES: 0
PUBLIC PRODUCTION RELEASES: 0
```