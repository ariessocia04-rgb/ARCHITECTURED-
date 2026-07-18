# ARCHITECTURE, DESIGN, TECA, MEMORY, AND IMPLEMENTATION-PLAN DUPLICATE VALIDATION

## AUTHORITY

`1plan.md`, especially Section 1C, is the master duplicate-classification and deletion authority.

## DUPLICATE RULE

Every application module, shared concern, design concern, TECA concern, implementation plan, and durable memory has one canonical source.

Allowed supporting documents:

- navigation indexes
- root and folder READMEs
- audits
- verification reports
- revision registers
- traceability matrices

These are not duplicates when they summarize, link, validate, or govern without copying the full canonical definition.

## CLASSIFICATIONS

- `EXACT_DUPLICATE` — byte-identical, same blob SHA, or normalized equivalent.
- `NEAR_DUPLICATE_SAME_AUTHORITY` — substantially the same responsibility, fields, flow, and architecture.
- `SUBSET_DUPLICATE` — reduced copy of another canonical source.
- `AGGREGATE_COPY` — concatenated or republished canonical module content.
- `INTENTIONAL_SUMMARY_OR_INDEX` — distinct navigation or governance responsibility.
- `SHARED_TEMPLATE_NOT_DUPLICATE` — same structural template but different domain responsibility and content.

Deletion requires high overlap and the same purpose or authority. Shared structure alone is not enough.

## CANONICAL STRUCTURE

- Master plan: `1plan.md`
- Root guide: `README.md`
- Master index: `index.md`
- Applications starting point: `Applications/README.md`
- Technician entry: `Applications/Technician Application/INDEX.md`
- Front Desk entry/canonical detail: `INDEX.md` → `README.md`
- Owner entry/canonical core detail: `INDEX.md` → `README.md`
- Customer Portal entry/canonical detail: `INDEX.md` → `README.md`
- Shared platform: `SaaS Platform/README.md`
- Design: `Design/README.md`
- TECA: `TECA/README.md`
- Memory index: `.teca/memory/index.json`

## COMPLETED DUPLICATE REMOVALS

### 1. Header Notification

Removed:

`Applications/Technician Application/Volume 1 - Header/Notification/notification.md`

Classification: `EXACT_DUPLICATE`.

Evidence:

- It had the same blob SHA as Sidebar Module 11 Notification.
- Its content declared the Sidebar Notification system even though it was stored under Header.

Canonical replacement:

`Applications/Technician Application/Volume 2 - Sidebar/Module 11 - Notification/notification.md`

Header Notification remains a quick-access link in the Technician index.

### 2. Header Profile

Removed:

`Applications/Technician Application/Volume 1 - Header/Profile/profile.md`

Classification: `NEAR_DUPLICATE_SAME_AUTHORITY` and `SUBSET_DUPLICATE`.

Evidence:

- It defined a full Profile system rather than only Header quick access.
- It substantially overlapped Sidebar Module 12 Profile in personal, professional, account, security, preference, and audit responsibilities.

Canonical replacement:

`Applications/Technician Application/Volume 2 - Sidebar/Module 12 - Profile/profile.md`

Header Profile remains a quick-access link in the Technician index.

### 3. Root PLAN.md

Removed:

`PLAN.md`

Classification: `AGGREGATE_COPY`.

Evidence:

- Its creation history described it as a compiled document containing all 36 Technician modules for Google Stitch.
- It copied canonical module architecture into a second large active document.

Canonical replacements:

- `1plan.md`
- `Applications/Technician Application/INDEX.md`
- linked canonical module files
- `Design/` documents

Temporary exports may be generated later outside the active canonical architecture set when required by an approved tool workflow.

### 4. Older TECA Failure Pattern

Removed:

`.teca/memory/FailurePatterns/mem_1784179908210.json`

Classification: superseded duplicate memory.

Canonical replacement:

`.teca/memory/FailurePatterns/mem_1784187086628.json`

The retained record contains the same root cause with a more complete validation and publishing failure pattern.

### 5. TECA Run Summary

Removed:

`.teca/memory/ProjectKnowledge/mem_1784180613040.json`

Classification: duplicate transient run summary.

Canonical replacements:

- retained durable Lesson
- retained comprehensive Failure Pattern

### 6. Architecture Freeze Run Summary

Removed:

`.teca/memory/ProjectKnowledge/mem_1784236443508.json`

Classification: duplicate transient run summary.

Canonical replacements:

- retained durable Lesson
- retained comprehensive Failure Pattern

## RETAINED INTENTIONALLY

### Application INDEX and README pairs

Front Desk, Owner, and Customer Portal indexes are navigation and guardrail files. Their READMEs are canonical architecture files. The responsibilities differ, so both are retained.

### Shared SaaS contracts

The shared contracts use coordinated formatting but govern different cross-application responsibilities, including identity, data, API, subscription, communication, finance, files, audit, handoffs, non-functional requirements, and readiness.

### Technician domain modules

Dashboard, Repair Queue, Job Order, Diagnosis, Quotation, Repair, Parts, Testing, Completed, Reports, Notification, Profile, and Logout may use common headings such as dashboard, workflow, search, analytics, integration, security, and audit. Their domain entities, actions, lifecycle responsibilities, and rules differ. This is intentional structural consistency, not duplicate content.

### Main Workspace components

Breadcrumb, Page Header, Toolbar, Filter Bar, Search Result, Data Table, Cards, Timeline, Forms, Modal, Drawer, Toast, Pagination, Loading, Empty, Error, and Footer are separate reusable UI concerns.

### Wireflow and handoff matrix

- `Design/WIREFLOW_ARCHITECTURE.md` governs user navigation and screen decisions.
- `SaaS Platform/CROSS_APPLICATION_WORKFLOW_AND_HANDOFF_MATRIX.md` governs application/service ownership and operational handoffs.

They are related but not duplicate authorities.

### TECA pipeline and implementation plans

- `TECA/PIPELINE_EXECUTION_PLAN.md` governs TECA phases and stage gates.
- `TECA/IMPLEMENTATION_BUILD_PLAN.md` governs the detailed dependency-ordered build, test, deployment, and rollback sequence.

They have separate responsibilities.

## TECHNICIAN RESULT

- Logical user-facing surfaces: 36.
- Canonical detailed architecture files: 34.
- Header quick-access references to Sidebar canonical modules: 2.
- Duplicate full Profile/Notification architecture files: 0.
- Canonical Repair Queue copies: 1.

## MEMORY RESULT

- Memories before cleanup: 5.
- Duplicate/superseded memories removed: 3.
- Durable active memories after cleanup: 2.
- Current categories: LessonsLearned and FailurePatterns.
- Memory index synchronized: YES.

## FINAL VALIDATION RESULT

- Removed or superseded duplicate files: 6.
- Active accidental duplicate application architecture files: 0.
- Active accidental duplicate shared-contract files: 0.
- Active accidental duplicate design files: 0.
- Active accidental duplicate TECA-governance files: 0.
- Active accidental duplicate implementation plans: 0.
- Active duplicate memories: 0.
- Broken Header Profile/Notification index links after consolidation: 0.
- Wrongly placed active canonical documents: 0.
- Existing domain-specific modules deleted only because they shared a template: 0.

**NO-DUPLICATE AND PLACEMENT VALIDATION: PASS AFTER EVIDENCE-BASED CONSOLIDATION.**
