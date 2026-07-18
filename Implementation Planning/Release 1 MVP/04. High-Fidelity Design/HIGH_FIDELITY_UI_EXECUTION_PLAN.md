# RELEASE 1 MVP — HIGH-FIDELITY UI EXECUTION PLAN

## Objective

Transform the approved low-fidelity wireframes and wireflows into implementation-ready visual screens and a clickable prototype without changing roles, business rules, statuses, permissions, approvals, data ownership, print behavior, or cross-department handoffs.

High-fidelity design is a gated design activity. A visually complete screen is not approved unless it traces to a canonical requirement, role, state, action, error path, and acceptance criterion.

## Design authority order

```text
1plan.md and Release Manifest
→ application/domain architecture
→ global Design system
→ domain wireframes and wireflows
→ Release 1 screen matrix
→ high-fidelity visual specification
→ interactive prototype
→ design review and accessibility review
→ implementation handoff
```

A designer must not invent a new status, price, permission, plan limit, approval, printer state, or workflow shortcut.

## Design tools and canonical storage

- Google Stitch, Figma, or another approved visual tool may generate/edit visuals.
- The external design tool is not the only source of truth.
- Repository evidence must include:
  - screen inventory and stable IDs;
  - approved image/export references or design-file location;
  - design tokens;
  - component/variant specification;
  - responsive behavior;
  - interaction and prototype map;
  - accessibility annotations;
  - version and approval record;
  - screen-to-requirement traceability.
- Proprietary generated code is not accepted automatically as production code.

## Required visual foundation

### Brand and tenant layers

```text
Platform Brand Tokens
→ Product Theme
→ Tenant Brand Overrides
→ Branch Context
→ User Accessibility Preferences
```

Tenant branding can change approved logo, display name, safe accent values, receipt header, and document footer within contrast/layout limits. It cannot hide security, plan, payment, audit, warranty, or required legal information.

### Core tokens

Define and version:

- typography families, sizes, weights, line heights;
- spacing scale;
- radii;
- borders/dividers;
- elevations;
- semantic colors for success, warning, danger, information, neutral, focus, selected, disabled;
- surface/background hierarchy;
- icon sizes and stroke rules;
- motion duration/easing and reduced-motion alternative;
- content widths and page grids;
- touch target and control heights;
- table density variants;
- thermal/page-document tokens separately from application UI tokens.

Do not use color alone to communicate status.

## Viewport targets

| Mode | Reference viewport | Primary use |
|---|---:|---|
| Wide desktop | 1440 × 900 | Owner, IT, reports, multi-panel workspaces |
| Standard desktop | 1280 × 800 | Front Desk, Technician, Finance, Inventory |
| Compact desktop/tablet landscape | 1024 × 768 | shared branch workstations/tablets |
| Tablet portrait | 768 × 1024 | intake, QC, inventory count, manager review |
| Mobile | 390 × 844 | Customer Portal and staff quick actions |
| Narrow mobile | 360 × 800 | minimum supported responsive state |

No screen is approved only at 1440 px. Critical workflows must remain usable at their assigned smaller viewport.

## Shared application shell

High-fidelity variants must cover:

- unauthenticated/authenticated shells;
- tenant and branch context;
- role-aware sidebar and mobile navigation;
- page header, breadcrumb, primary/secondary actions;
- notification center;
- global search;
- My Cross-Department Work;
- shared process header and audience-safe timeline;
- contextual Get Help;
- profile/session/security controls;
- plan/usage warning;
- environment/pilot banner;
- offline/degraded banner;
- support-access-visible banner.

## Component delivery list

### Navigation and context

- sidebar and collapsible variants;
- mobile bottom/drawer navigation;
- tenant/branch switcher;
- breadcrumbs;
- tabs and segmented controls;
- stepper/progress tracker;
- command/search palette where approved.

### Data display

- status badge with icon/text;
- KPI card;
- table/list/card responsive variants;
- timeline;
- related-record panel;
- work queue;
- assignment/owner chip;
- blocker and SLA indicator;
- usage meter;
- printer/agent/device health card;
- audit event view.

### Input and action

- text, number, currency, phone, email, date/time;
- select, combobox, autocomplete, radio, checkbox, switch;
- file/photo upload and preview;
- signature capture;
- QR/barcode scan input;
- editable line items;
- parts selector/reservation;
- approval/rejection/reason;
- payment form;
- printer selector, print preview, retry/fallback;
- confirmation and destructive-action dialog.

### Feedback and recovery

- inline validation;
- form error summary;
- loading skeleton/progress;
- empty state;
- permission denied;
- entitlement/limit reached;
- offline draft;
- stale/conflict state;
- retryable and terminal error;
- queue/delayed processing;
- toast and persistent alert;
- support ticket creation panel.

## Required state set per screen

Every screen in the delivery matrix declares whether it needs:

```text
DEFAULT
LOADING
EMPTY
SEARCH/FILTER RESULT
VALIDATION ERROR
SYSTEM ERROR
PERMISSION DENIED
ENTITLEMENT/LIMIT BLOCK
OFFLINE/DEGRADED
STALE/CONFLICT
SUBMITTING/PROCESSING
SUCCESS/CONFIRMATION
CANCELLED/REJECTED
ARCHIVED/HISTORICAL
MOBILE/COMPACT
PRINT/PDF PREVIEW when applicable
```

A screenshot of only the happy path does not complete the screen.

## Content and language rules

- Use plain English first, with localization-ready message keys.
- Use action-focused labels: `Save draft`, `Send quotation`, `Record payment`, `Print receipt`, `Create IT ticket`.
- State what happened, what remains, who is responsible, and what the user can do next.
- Do not expose internal exception traces, database IDs, secret/provider details, or another department's restricted notes.
- Customer language maps from internal statuses to safe plain-language statuses.
- Print status distinguishes submitted, confirmed, unconfirmed, failed, and fallback.

## High-fidelity phases

### HF-00 — Visual authority and inventory lock

- Verify screen IDs, wireframes, flows, roles, permissions, viewports, and states.
- Confirm no active designer is editing the same screen group.
- Approve tools and canonical export location.

Exit: design manifest approved.

### HF-01 — Tokens and shared components

- Produce light-mode pilot tokens and accessible semantic colors.
- Create component variants and responsive behavior.
- Test keyboard focus, contrast, zoom, reduced motion, and touch targets.

Exit: shared design-system review passes.

### HF-02 — Shared shell and critical workflow prototype

Build linked prototype for:

```text
Login
→ Owner/role landing
→ Customer/device intake
→ Job order
→ Dispatch
→ Diagnosis
→ Quotation/customer approval
→ Parts
→ Repair
→ Testing/QC
→ Payment/receipt print
→ Release/warranty
→ Customer tracking
→ IT help/printer recovery
```

Exit: end-to-end navigation and decision logic match canonical wireflows.

### HF-03 — Role workspaces

Complete Owner, Front Desk, Technician/QC, Customer, IT/Printing, and Platform Admin screen sets, including non-happy states.

Exit: screen delivery matrix complete.

### HF-04 — Responsive and accessibility pass

- Desktop/tablet/mobile variants.
- 200% zoom and reflow.
- Keyboard-only path.
- Screen-reader naming/order/live regions.
- Error association and summaries.
- Touch and limited-dexterity review.

Exit: automated/manual design checklist passes.

### HF-05 — UAT prototype and revision

Run task-based prototype sessions with:

- Owner;
- Front Desk;
- Technician/QC;
- Inventory;
- Finance/Cashier;
- IT;
- Customer representative.

Record completion, hesitation, errors, misunderstood terms, accessibility barriers, and revisions. Workflow-changing feedback goes through architecture revision, not silent visual change.

### HF-06 — Implementation handoff

Provide:

- approved screen/component links;
- screen/state IDs;
- measurements and tokens;
- behavior notes;
- responsive rules;
- asset list;
- accessibility annotations;
- prototype flow map;
- acceptance criteria;
- unresolved limitations;
- version/approval record.

Exit: Codex frontend tasks have no unresolved critical visual decision.

## Prototype requirements

- Clickable primary and alternate paths.
- Back/cancel/retry/resume behavior.
- Approval/rejection paths.
- Permission and limit states.
- Print preview, selection, failure, fallback, and IT handoff.
- Offline/stale/conflict examples.
- Shared process timeline and cross-department handoffs.
- Customer-safe versus staff-internal views.
- No dead-end placeholder buttons in approved critical paths.

## Visual acceptance criteria

1. Every Release 1 screen has a stable ID and traceability row.
2. Critical path can be completed in the prototype without undocumented navigation.
3. All protected actions include review/confirmation appropriate to risk.
4. All forms preserve valid data after errors.
5. Status and next action are visible without relying only on color.
6. Owner and staff can identify blocked department/IT/printer actions.
7. Customer sees only audience-safe information.
8. Printer UI never implies confirmation that the adapter cannot prove.
9. Desktop/tablet/mobile assigned layouts pass review.
10. Contrast, keyboard, focus order, labels, error messages, zoom, and reduced-motion requirements pass.
11. Prototype UAT findings are resolved or explicitly accepted.
12. No visual design changes the canonical workflow without approved revision.

## Truthful status

```text
HIGH-FIDELITY UI PLAN: COMPLETE
HIGH-FIDELITY SCREENS: NOT YET RENDERED
INTERACTIVE PROTOTYPE: NOT YET CREATED
DESIGN UAT: NOT YET EXECUTED
FRONTEND CODING AUTHORIZATION: NO
```