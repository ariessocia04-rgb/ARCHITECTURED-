# RELEASE 1 MVP — CONTROLLED IMPLEMENTATION PLANNING INDEX

## Authority

- Master authority: `1plan.md`.
- Implementation authority: `TECA/IMPLEMENTATION_BUILD_PLAN.md`.
- Architecture authority: `Applications/`, `SaaS Platform/`, and the ROS architecture packages.
- Design authority: `Design/` plus domain-specific wireframe/wireflow packages.
- Release ID: `ROS-R1-MVP-2026-01`.
- Release class: controlled pilot MVP.
- Coding authority: absent until the owner explicitly sets `implementation_authorized=true` for an exact Codex task or task batch.

This package locks the first executable release boundary, technology direction, printer support tiers, high-fidelity UI execution plan, Codex task sequence, test gates, rollout, and rollback. It does not contain application source code.

## Required reading order

```text
1plan.md
→ 1plan-RELEASE_1_MVP_IMPLEMENTATION_PLANNING_EXTENSION.md
→ this INDEX.md
→ Release Manifest
→ Technology Stack and Version Lock
→ Printer Support and Certification Matrix
→ High-Fidelity UI Execution Plan
→ Codex Task Manifest
→ Risk/Test/Rollout/Rollback
→ relevant application and SaaS architecture
→ TECA/IMPLEMENTATION_BUILD_PLAN.md
→ current branch, PR, commit, migration, and active-worker evidence
```

## Physical structure

1. [Research and Decision Registry](00.%20Research%20and%20Decision%20Basis/RESEARCH_AND_DECISION_REGISTRY.md)
2. [Release Manifest](01.%20Release%20Boundary/RELEASE_MANIFEST.md)
3. [Release Traceability and Acceptance](01.%20Release%20Boundary/RELEASE_TRACEABILITY_AND_ACCEPTANCE.md)
4. [Technology Stack and Version Lock](02.%20Technology%20and%20Topology/TECHNOLOGY_STACK_AND_VERSION_LOCK.md)
5. [Deployment, Environment, and Cost Plan](02.%20Technology%20and%20Topology/DEPLOYMENT_ENVIRONMENT_AND_COST_PLAN.md)
6. [Printer Support and Certification Matrix](03.%20Printer%20Certification/PRINTER_SUPPORT_AND_CERTIFICATION_MATRIX.md)
7. [High-Fidelity UI Execution Plan](04.%20High-Fidelity%20Design/HIGH_FIDELITY_UI_EXECUTION_PLAN.md)
8. [Screen Delivery Matrix](04.%20High-Fidelity%20Design/SCREEN_DELIVERY_MATRIX.md)
9. [Codex Task Manifest](05.%20Codex%20Execution/CODEX_TASK_MANIFEST.md)
10. [Codex Task Contract Template](05.%20Codex%20Execution/CODEX_TASK_CONTRACT_TEMPLATE.md)
11. [Risk, Test, Rollout, and Rollback](06.%20Security%20Quality%20and%20Release/RISK_TEST_ROLLOUT_ROLLBACK.md)
12. [Completion Record](COMPLETION_RECORD.md)

## Locked implementation strategy

```text
MODULAR MONOLITH WEB APPLICATION
+ POSTGRES/SUPABASE PLATFORM SERVICES
+ SEPARATE LOCAL PRINT AGENT
+ FOUNDATION-FIRST VERTICAL SLICES
+ ONE SHARED DOMAIN MODEL
+ ROLE-SPECIFIC ROUTES AND WORKSPACES
```

Release 1 intentionally avoids premature microservices. Domain packages, database schemas, events, and adapters maintain boundaries so later extraction remains possible without duplicating business rules.

## Release 1 outcome

A verified repair business can:

```text
Create tenant and branch
→ invite scoped staff
→ register customer and device
→ complete intake and create job order
→ dispatch and accept work
→ diagnose and prepare quotation
→ obtain customer approval
→ reserve/use parts
→ repair, test, and quality approve
→ invoice and record payment
→ generate/print receipt and release documents
→ release device and activate warranty
→ expose safe customer tracking
→ create IT support tickets and resolve printer/workstation blockers
→ retain one connected timeline, audit trail, and department handoff history
```

## Public-release boundary

Release 1 is a controlled pilot. It is not authorization to advertise production-grade availability, universal printer compatibility, automated paid subscription checkout, Premium feature readiness, or completed future modules.

## Truthful status

```text
RELEASE BOUNDARY: LOCKED AS PLANNING SPECIFICATION
TECHNOLOGY DIRECTION: LOCKED; PACKAGE PATCHES PINNED DURING AUTHORIZED BOOTSTRAP
PRINTER SUPPORT TIERS: LOCKED; PHYSICAL MODELS REQUIRE TEST CERTIFICATION
HIGH-FIDELITY EXECUTION PLAN: COMPLETE AS PLAN
CODEX TASK MANIFEST: COMPLETE AS PLAN
APPLICATION CODE: NOT CREATED
IMPLEMENTATION AUTHORIZED: NO
```