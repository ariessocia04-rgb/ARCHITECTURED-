# DESIGN ARCHITECTURE — MASTER INDEX

## PURPOSE

This folder contains the canonical global wireframe, wireflow, user-interface design architecture, and prompt-design navigation for the ARCHITECTURED Repair SaaS.

Application and shared-platform documents define what the system must do. The global design documents define how users see and complete that work without changing the approved workflow. Domain-specific packages specialize the global rules for complex areas. Prompt Design defines how Codex instructions are structured and discovered while preserving `Codex Code/Prompts/` as the executable prompt authority.

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

## CODEX PROMPT DESIGN

- [Codex Prompt Design Index](Prompt%20Design/INDEX.md)
- [Current Codex Prompt Design Reference](Prompt%20Design/CURRENT_CODEX_PROMPT.md)
- Canonical prompt requirements: `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`
- Canonical prompt template: `Codex Code/Prompts/Templates/PROMPT_ENTRY_TEMPLATE.md`
- Canonical current executable prompt: `Codex Code/Prompts/CX-R1-000/0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md`

The Prompt Design folder defines discoverability, presentation order, clarity, traceability, completion gates, and design-level prompt guidance. It references rather than duplicates the executable prompt so the repository retains one canonical prompt authority.

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

Prompt Design specializes instruction presentation and navigation while `Codex Code/` retains authorization, execution, prompt history, checkpoints, evidence, and current-task control.

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
Prompt Design when preparing Codex execution instructions
↓
High-Fidelity UI and Interactive Prototype
↓
Implementation Planning
```

## NON-NEGOTIABLE RULES

- One canonical file per design concern.
- Do not create duplicate page, workflow, or executable prompt definitions.
- Domain packages specialize global rules rather than copying the global design system.
- Prompt Design references canonical Codex prompts instead of copying them.
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
CODEX PROMPT DESIGN FOLDER: PRESENT
CURRENT CODEX PROMPT REFERENCE: PRESENT
DUPLICATE EXECUTABLE CODEX PROMPT IN DESIGN: NO
HIGH-FIDELITY VISUALS AND INTERACTIVE PROTOTYPES: SEPARATE DESIGN EXECUTION
ACCIDENTAL DUPLICATE DESIGN AUTHORITIES: 0 AFTER VALIDATION
```

**GLOBAL, DOMAIN-SPECIFIC, AND PROMPT DESIGN ARCHITECTURE NOW CONNECTS STAFF, OWNER, IT, PRINTING, BILLING, ALL DEPARTMENTS, EXTERNAL PORTALS, AND CODEX EXECUTION GUIDANCE THROUGH CONSISTENT WIREFRAMES, WIREFLOWS, STATES, TRACEABILITY, AND SINGLE-SOURCE PROMPT CONTROL.**