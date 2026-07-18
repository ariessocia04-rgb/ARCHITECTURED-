# DESIGN ARCHITECTURE — MASTER INDEX

## PURPOSE

This folder contains the canonical wireframe, wireflow, and user-interface design architecture for the ARCHITECTURED Technician Repair SaaS.

Application and shared-platform documents define what the system must do. The design documents in this folder define how users see and complete that work without changing the approved workflow.

## CANONICAL DOCUMENTS

1. [Wireframe Architecture](WIREFRAME_ARCHITECTURE.md)
   - Global shell, shared page patterns, Technician, Front Desk, Owner, Customer Portal, platform administration, responsive layouts, and exception states.

2. [Wireflow Architecture](WIREFLOW_ARCHITECTURE.md)
   - Entry, intake, queue, assignment, diagnosis, quotation, parts, repair, testing, quality, payment, release, warranty, owner approval, subscription, support access, error recovery, and offline synchronization flows.

3. [Non-Technical User UI Design System](NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md)
   - Plain language, one clear task at a time, guided journeys, forms, validation, confirmation, status language, components, responsive design, accessibility, help, and user-testing requirements.

## DEPENDENCY ORDER

```text
1plan.md and Shared SaaS Contracts
↓
Application Architecture
↓
Wireframe Architecture
↓
Wireflow Architecture
↓
Non-Technical User UI Design System
↓
High-Fidelity UI and Prototype Planning
↓
Implementation Planning
```

## NON-NEGOTIABLE RULES

- One canonical file per design concern.
- Do not create duplicate page or workflow definitions.
- Design cannot remove, bypass, reorder, or weaken approved workflow gates.
- Customer-visible information and internal information remain separated.
- Desktop, tablet, mobile, keyboard, touch, assistive-technology, offline, and error behavior must be planned.
- High-fidelity design must trace every screen to its wireframe, wireflow, role, status, permission, and acceptance criteria.
- Current repository work remains documentation only; no code.

## STATUS

- Wireframe Architecture: COMPLETE (100%).
- Wireflow Architecture: COMPLETE (100%).
- Non-Technical User UI Design System: COMPLETE (100%).
- Missing planned design documents: 0.
- Accidental duplicate design documents: 0.

**DESIGN ARCHITECTURE COMPLETE (100%)**
