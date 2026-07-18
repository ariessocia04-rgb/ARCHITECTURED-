# DESIGN ARCHITECTURE — MASTER INDEX

## PURPOSE

This folder contains the canonical global wireframe, wireflow, and user-interface design architecture for the ARCHITECTURED Repair SaaS.

Application and shared-platform documents define what the system must do. The global design documents define how users see and complete that work without changing the approved workflow. Domain-specific packages specialize the global rules for complex areas.

## CANONICAL GLOBAL DOCUMENTS

1. [Wireframe Architecture](WIREFRAME_ARCHITECTURE.md)
   - Global shell, shared page patterns, Technician, Front Desk, Owner, Customer Portal, platform administration, responsive layouts, and exception states.

2. [Wireflow Architecture](WIREFLOW_ARCHITECTURE.md)
   - Entry, intake, queue, assignment, diagnosis, quotation, parts, repair, testing, quality, payment, release, warranty, owner approval, subscription, support access, error recovery, and offline synchronization.

3. [Non-Technical User UI Design System](NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md)
   - Plain language, one clear task at a time, guided journeys, forms, validation, confirmation, status language, components, responsive design, accessibility, help, and user-testing requirements.

## DOMAIN-SPECIFIC DESIGN PACKAGES

### Free, Pro, Premium Plans and Billing

- [Plans and Billing Index](../SaaS%20Platform/Plans%20and%20Billing/INDEX.md)
- [Low-Fidelity Wireframes](../SaaS%20Platform/Plans%20and%20Billing/04.%20Wireframe%20and%20Wireflow/WIREFRAME_ARCHITECTURE.md)
- [Wireflows](../SaaS%20Platform/Plans%20and%20Billing/04.%20Wireframe%20and%20Wireflow/WIREFLOW_ARCHITECTURE.md)
- [Screen Traceability](../SaaS%20Platform/Plans%20and%20Billing/04.%20Wireframe%20and%20Wireflow/SCREEN_TRACEABILITY_MATRIX.md)

Coverage: 24 screens and 20 flows.

### Printing and Peripheral Operations

- [Printing Architecture Index](../SaaS%20Platform/Printing%20and%20Peripheral%20Operations/INDEX.md)
- [Printing Wireframes](../SaaS%20Platform/Printing%20and%20Peripheral%20Operations/06.%20Wireframe%20and%20Wireflow/WIREFRAME_ARCHITECTURE.md)
- [Printing Wireflows](../SaaS%20Platform/Printing%20and%20Peripheral%20Operations/06.%20Wireframe%20and%20Wireflow/WIREFLOW_ARCHITECTURE.md)
- [Printing Screen Traceability](../SaaS%20Platform/Printing%20and%20Peripheral%20Operations/06.%20Wireframe%20and%20Wireflow/SCREEN_TRACEABILITY_MATRIX.md)

Coverage: 20 screens and 16 flows across staff, Owner, and IT for receipts, A4/Letter documents, labels, reprints, printer/agent administration, failures, fallback, and support.

### IT Operations Application

- [IT Operations Index](../Applications/IT%20Operations%20Application/INDEX.md)
- [IT Operations Wireframes](../Applications/IT%20Operations%20Application/Volume%204%20-%20Wireframe%20and%20Wireflow/WIREFRAME_ARCHITECTURE.md)
- [IT Operations Wireflows](../Applications/IT%20Operations%20Application/Volume%204%20-%20Wireframe%20and%20Wireflow/WIREFLOW_ARCHITECTURE.md)
- [IT Operations Screen Traceability](../Applications/IT%20Operations%20Application/Volume%204%20-%20Wireframe%20and%20Wireflow/SCREEN_TRACEABILITY_MATRIX.md)

Coverage: 26 screens and 20 flows for staff help, service desk, incidents, problems, changes, assets, printers, access, integrations, monitoring, releases, recovery, knowledge, vendors, Owner governance, and audit.

### Cross-Department Operating Fabric

- [Cross-Department Index](../SaaS%20Platform/Cross-Department%20Operating%20Fabric/INDEX.md)
- [Cross-Department Wireframes](../SaaS%20Platform/Cross-Department%20Operating%20Fabric/04.%20Wireframe%20and%20Wireflow/WIREFRAME_ARCHITECTURE.md)
- [Cross-Department Wireflows](../SaaS%20Platform/Cross-Department%20Operating%20Fabric/04.%20Wireframe%20and%20Wireflow/WIREFLOW_ARCHITECTURE.md)
- [Traceability, Security, Quality, and Delivery](../SaaS%20Platform/Cross-Department%20Operating%20Fabric/05.%20Traceability%20Security%20and%20Delivery/TRACEABILITY_SECURITY_QUALITY_AND_DELIVERY.md)

Coverage: 20 shared screens and 16 flows connecting all departments, applications, external participants, Owner oversight, IT blockers, approvals, communication, shared timeline, and domain links.

## GLOBAL-TO-DOMAIN DESIGN RULE

The global Design documents remain authoritative for:

- shell and navigation patterns;
- components and content;
- accessibility and responsive behavior;
- loading/empty/offline/error/stale/conflict/success states;
- review and confirmation;
- help and support;
- customer/internal separation.

Domain packages define their own screen inventory, field/action logic, states, wireflows, traceability, and acceptance while referencing global rules. They do not duplicate or replace the global system.

## CROSS-DEPARTMENT UX RULE

Every authorized application/domain includes, where relevant:

```text
My Cross-Department Work
End-to-End Process Header
Current Stage / Health
Next Action / Responsible Owner
Handoff / Approval / Blocker
Related Domain Records
Shared Audience-Safe Timeline
Contextual Get Help / IT Status
```

Shared surfaces do not grant cross-domain editing. The correct domain screen opens for the actual business action.

## DEPENDENCY ORDER

```text
1plan.md and Shared SaaS Contracts
↓
Application / Future Module / Domain Architecture
↓
Cross-Department Operating Fabric when outcome spans departments
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
High-Fidelity UI and Interactive Prototype
↓
Implementation Planning
```

## NON-NEGOTIABLE RULES

- One canonical file per design concern.
- Do not create duplicate page or workflow definitions.
- Domain packages specialize global rules rather than copying the global design system.
- Design cannot remove, bypass, reorder, or weaken approved gates.
- Customer-visible and internal information remain separated.
- Desktop, tablet, mobile, keyboard, touch, assistive technology, offline, and error behavior are planned.
- High-fidelity design traces every screen to wireframe, flow, role, status, permission, entitlement, state, domain record, and acceptance criteria.
- A shared cross-department screen summarizes/coordinates; it does not edit another domain's protected record.
- Current repository work remains documentation only; no code.

## STATUS

```text
GLOBAL WIREFRAME ARCHITECTURE: COMPLETE
GLOBAL WIREFLOW ARCHITECTURE: COMPLETE
NON-TECHNICAL UI DESIGN SYSTEM: COMPLETE
PLANS AND BILLING: 24 SCREENS / 20 FLOWS / TRACEABILITY COMPLETE
PRINTING: 20 SCREENS / 16 FLOWS / TRACEABILITY COMPLETE
IT OPERATIONS: 26 SCREENS / 20 FLOWS / TRACEABILITY COMPLETE
CROSS-DEPARTMENT FABRIC: 20 SCREENS / 16 FLOWS / TRACEABILITY COMPLETE
HIGH-FIDELITY VISUALS AND INTERACTIVE PROTOTYPES: SEPARATE DESIGN EXECUTION
ACCIDENTAL DUPLICATE DESIGN AUTHORITIES: 0 AFTER VALIDATION
```

**GLOBAL AND DOMAIN-SPECIFIC DESIGN ARCHITECTURE NOW CONNECTS STAFF, OWNER, IT, PRINTING, BILLING, ALL DEPARTMENTS, AND EXTERNAL PORTALS THROUGH CONSISTENT WIREFRAMES, WIREFLOWS, STATES, AND TRACEABILITY.**
