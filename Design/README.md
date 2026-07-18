# DESIGN ARCHITECTURE — MASTER INDEX

## PURPOSE

This folder contains the canonical global wireframe, wireflow, and user-interface design architecture for the ARCHITECTURED Technician Repair SaaS.

Application and shared-platform documents define what the system must do. The design documents in this folder define how users see and complete that work without changing the approved workflow.

## CANONICAL DOCUMENTS

1. [Wireframe Architecture](WIREFRAME_ARCHITECTURE.md)
   - Global shell, shared page patterns, Technician, Front Desk, Owner, Customer Portal, platform administration, responsive layouts, and exception states.

2. [Wireflow Architecture](WIREFLOW_ARCHITECTURE.md)
   - Entry, intake, queue, assignment, diagnosis, quotation, parts, repair, testing, quality, payment, release, warranty, owner approval, subscription, support access, error recovery, and offline synchronization flows.

3. [Non-Technical User UI Design System](NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md)
   - Plain language, one clear task at a time, guided journeys, forms, validation, confirmation, status language, components, responsive design, accessibility, help, and user-testing requirements.

## DOMAIN-SPECIFIC DESIGN PACKAGES

### Free, Pro, Premium Plans and Billing

- [Plans and Billing Architecture Index](../SaaS%20Platform/Plans%20and%20Billing/INDEX.md)
- [Subscription and Billing Low-Fidelity Wireframes](../SaaS%20Platform/Plans%20and%20Billing/04.%20Wireframe%20and%20Wireflow/WIREFRAME_ARCHITECTURE.md)
- [Subscription and Billing Wireflows](../SaaS%20Platform/Plans%20and%20Billing/04.%20Wireframe%20and%20Wireflow/WIREFLOW_ARCHITECTURE.md)
- [Screen Traceability Matrix](../SaaS%20Platform/Plans%20and%20Billing/04.%20Wireframe%20and%20Wireflow/SCREEN_TRACEABILITY_MATRIX.md)

The global Design documents remain authoritative for shared shell, components, content, accessibility, responsiveness, error, confirmation, and interaction rules. The Plans and Billing package provides the domain-specific 24-screen and 20-flow specialization required to implement Contract 7. It does not duplicate or replace the global design system.

## DEPENDENCY ORDER

```text
1plan.md and Shared SaaS Contracts
↓
Application or Shared-Domain Architecture
↓
Global Wireframe Architecture
↓
Approved Domain-Specific Wireframes
↓
Global Wireflow Architecture
↓
Approved Domain-Specific Wireflows and Traceability
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
- Domain-specific design packages reference and specialize global rules; they do not copy the entire global design system.
- Design cannot remove, bypass, reorder, or weaken approved workflow gates.
- Customer-visible information and internal information remain separated.
- Desktop, tablet, mobile, keyboard, touch, assistive-technology, offline, and error behavior must be planned.
- High-fidelity design must trace every screen to its wireframe, wireflow, role, status, permission, entitlement, usage state, and acceptance criteria.
- Current repository work remains documentation only; no code.

## STATUS

- Global Wireframe Architecture: COMPLETE (100%).
- Global Wireflow Architecture: COMPLETE (100%).
- Non-Technical User UI Design System: COMPLETE (100%).
- Plans and Billing low-fidelity screens: 24 OF 24 COMPLETE AS SPECIFICATION.
- Plans and Billing detailed wireflows: 20 OF 20 COMPLETE.
- Plans and Billing screen traceability: COMPLETE.
- High-fidelity subscription/billing visuals and interactive prototype: SEPARATE DESIGN EXECUTION.
- Accidental duplicate design documents: 0.

**GLOBAL DESIGN ARCHITECTURE AND FREE / PRO / PREMIUM DOMAIN-SPECIFIC DESIGN SPECIFICATION COMPLETE**
