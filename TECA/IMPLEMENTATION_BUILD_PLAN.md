# TECA CANONICAL IMPLEMENTATION BUILD PLAN — ARCHITECTURED

## 1. PURPOSE

This document is the canonical implementation build playbook for the ARCHITECTURED Technician Repair SaaS. It defines the exact dependency order, execution gates, repository responsibilities, coding sequence, module sequence, testing sequence, release sequence, deployment sequence, rollback requirements, and TECA automation behavior required to convert approved architecture and design artifacts into a working application.

This is a planning and execution-control document. It is not proof that the application has been implemented, tested, deployed, or released.

## 2. AUTHORITY AND SCOPE

- Repository: `ariessocia04-rgb/ARCHITECTURED-`
- Default branch: `main`
- Master authority: `1plan.md`
- Architecture authority: application documents and `SaaS Platform/`
- Design authority: `Design/`
- TECA authority: `TECA/`
- Canonical implementation build playbook: `TECA/IMPLEMENTATION_BUILD_PLAN.md`
- Execution process: sequential TECA pipeline, STG-0 through STG-10

This playbook governs:

- repository and workspace preparation;
- technology-stack approval;
- physical database design and migrations;
- backend and domain implementation;
- frontend and design-system implementation;
- role-specific applications;
- shared platform services;
- module-by-module vertical-slice construction;
- automated and manual testing;
- security, privacy, accessibility, and performance validation;
- CI/CD, environments, deployment, migrations, monitoring, and rollback;
- production-readiness and release evidence;
- future expansion implementation after Section 8A of `1plan.md` is passed.

## 3. NON-NEGOTIABLE IMPLEMENTATION GATE

Application source code may be generated, changed, migrated, or published only when all applicable conditions are true:

1. The requested release or expansion has an approved architecture package.
2. Required UI/UX, wireframes, wireflows, roles, permissions, data, security, integration, and validation artifacts exist.
3. MVP and release boundaries are approved.
4. Technology stack and supported versions are approved.
5. Physical schema, API contracts, event contracts, and provider choices required by the requested slice are approved.
6. Acceptance criteria and test requirements are defined.
7. Live TECA Studio configuration has been aligned and verified by read-back when TECA will perform autonomous repository implementation work.
8. The owner explicitly sets `implementation_authorized=true` for the exact release, module, or implementation slice.

Authorization is scoped. Approval for one module or release does not authorize later modules, future releases, or expansions.

## 4. IMPLEMENTATION PRINCIPLE

ARCHITECTURED uses **foundation-first, dependency-ordered vertical slices**.

Do not build all backend modules first and postpone all frontend work. Do not build visual screens before their data, permission, lifecycle, validation, and API contracts exist. After shared foundations are ready, each business module is implemented end to end in this mandatory order:

```text
Approved Requirement
→ Data and State Contract
→ Database Migration
→ Domain Model and Business Rules
→ Backend Service
→ API / Event / Integration Contract
→ Backend Automated Tests
→ Frontend Data Client and State
→ UI Components and Screens
→ Permission, Error, Empty, Loading, Offline, and Conflict States
→ Integration Tests
→ End-to-End Tests
→ Security, Accessibility, and Performance Checks
→ Documentation and Traceability Update
→ Validation Gate
→ Publish and Read-Back
```

A module is not complete when only its database, backend, API, or frontend exists. The complete vertical slice and its required evidence must pass.

## 5. REQUIRED IMPLEMENTATION INPUTS

Before a build slice starts, TECA must retrieve and validate:

- `1plan.md`;
- `README.md`;
- `revise.md`;
- `index.md`;
- `SaaS Platform/README.md` and relevant shared contracts;
- `Design/README.md` and relevant wireframes, wireflows, and UI rules;
- `TECA/README.md`;
- `TECA/AGENT_JOB_ASSIGNMENTS.md`;
- `TECA/PIPELINE_EXECUTION_PLAN.md`;
- this implementation build playbook;
- relevant application architecture;
- approved implementation release specification;
- approved stack and version record;
- approved schema and interface contracts;
- relevant `.teca/memory/` entries;
- current repository tree, branches, commits, checks, migrations, and existing code.

Missing mandatory inputs produce `BLOCKED` or `NOT_AUTHORIZED`, never guessed implementation.

## 6. TARGET REPOSITORY SHAPE

The exact framework-specific structure must be approved before creation. The implementation repository must preserve the following logical separation even when folder names vary by approved stack:

```text
ARCHITECTURED-
├── apps/
│   ├── owner/
│   ├── front-desk/
│   ├── technician/
│   ├── customer-portal/
│   └── platform-admin/
├── services/
│   ├── api/
│   ├── workers/
│   └── realtime/
├── packages/
│   ├── design-system/
│   ├── domain/
│   ├── contracts/
│   ├── auth/
│   ├── database/
│   ├── observability/
│   ├── testing/
│   └── configuration/
├── database/
│   ├── schema/
│   ├── migrations/
│   ├── seeds/
│   └── verification/
├── tests/
│   ├── contract/
│   ├── integration/
│   ├── e2e/
│   ├── security/
│   ├── accessibility/
│   ├── performance/
│   └── recovery/
├── infrastructure/
│   ├── environments/
│   ├── ci/
│   ├── deployment/
│   ├── monitoring/
│   └── rollback/
└── docs/
    ├── implementation/
    ├── runbooks/
    └── evidence/
```

This tree is a logical target, not authorization to create folders before stack, repository strategy, and release scope are approved. Shared business logic must not be copied into separate applications.

## 7. EXACT GLOBAL BUILD ORDER

### BUILD-00 — Authorization and Live-State Verification

1. Read canonical documents in required order.
2. Verify requested release, module, or expansion scope.
3. Verify `implementation_authorized=true` for that exact scope.
4. Verify live TECA Studio alignment when autonomous TECA implementation is requested.
5. Verify no unfinished earlier implementation task exists.
6. Verify branch, latest commit, open PRs, CI state, migrations, and deployment state.
7. Return `NOT_AUTHORIZED`, `BLOCKED`, `SKIPPED_ALREADY_COMPLETE`, or approved build scope.

**Exit gate:** exact authorized scope and current factual repository state are proven.

### BUILD-01 — Release Boundary and Dependency Lock

1. Define release ID and release objective.
2. Lock included and excluded modules.
3. Map every included requirement to architecture, wireframe, wireflow, role, permission, entity, API, event, test, and acceptance evidence.
4. Identify external providers and unresolved decisions.
5. Order dependencies and prohibit later-release work.

**Exit gate:** approved release manifest and traceability matrix.

### BUILD-02 — Technology and Version Lock

Approve and record:

- frontend framework and runtime;
- backend framework and runtime;
- database engine and supported version;
- ORM or database access method;
- API style and contract format;
- event, queue, realtime, cache, and search technology;
- authentication and identity provider;
- file, payment, email, SMS, push, analytics, and monitoring providers;
- package manager and workspace strategy;
- test frameworks;
- container, hosting, region, environment, and deployment technology;
- supported browsers, devices, and operating environments.

Use exact supported versions. No floating `latest` dependencies in a controlled release.

**Exit gate:** approved stack decision record with compatibility and upgrade policy.

### BUILD-03 — Repository, Workspace, and Branch Foundation

1. Create the approved workspace structure.
2. Configure package management and dependency locking.
3. Add formatting, linting, type checking, commit, branch, and review rules.
4. Add environment-variable schemas containing names only, never secret values.
5. Add local development bootstrap and health checks.
6. Protect `main`; use reviewed branches or the explicitly approved publishing mode.
7. Add ownership rules for sensitive and shared paths.

**Exit gate:** clean installation, deterministic dependency resolution, and empty-project checks pass.

### BUILD-04 — CI, Quality, and Security Baseline

Before business features:

1. Configure CI for install, formatting, linting, type checks, unit tests, contract checks, build, and migration validation.
2. Configure dependency, secret, license, static-analysis, and container scanning as applicable.
3. Configure test and build artifact retention.
4. Configure preview or development deployment for approved branches.
5. Configure required checks before merge.
6. Add failure diagnostics and reproducible commands.

**Exit gate:** an empty foundation commit passes all required checks.

### BUILD-05 — Shared Configuration and Observability

1. Implement validated configuration loading.
2. Implement environment separation: local, test, development, staging, production.
3. Implement structured logs, request IDs, correlation IDs, audit context, metrics, traces, health, readiness, and dependency checks.
4. Implement error classification without exposing secrets.
5. Implement feature-flag and rollout controls when approved.

**Exit gate:** configuration and observability tests pass in local and CI environments.

### BUILD-06 — Design System and Application Shell Foundation

1. Implement approved design tokens.
2. Implement accessible shared components and states.
3. Implement responsive shell, navigation, breadcrumbs, page header, actions, forms, tables, cards, timelines, modal, drawer, toast, loading, empty, error, offline, conflict, permission, and subscription states.
4. Implement role-aware navigation placeholders without fake permissions.
5. Add component, visual, keyboard, screen-reader, responsive, and interaction tests.

**Exit gate:** shared design-system validation passes; no business workflow is invented.

### BUILD-07 — Physical Database Foundation

Create and approve the physical model in dependency order:

1. platform and tenant identity;
2. organizations and branches;
3. departments, workstations, warehouses, and service locations;
4. users, memberships, roles, permissions, scopes, and approvals;
5. plans, subscriptions, entitlements, and usage counters;
6. audit events, outbox/inbox, idempotency records, jobs, and integration state;
7. files, documents, media, signatures, QR, and barcode metadata;
8. customers, business accounts, representatives, devices, and addresses;
9. service requests, appointments, job orders, status history, and assignments;
10. diagnosis, quotations, approvals, parts, repairs, tests, quality, invoices, payments, release, warranty, support, and feedback;
11. reporting projections and analytics-safe models.

Database rules:

- every tenant-owned record has enforceable tenant ownership;
- branch scope is explicit where applicable;
- identifiers, timestamps, actor, source, version, and audit fields follow approved contracts;
- financial and inventory history uses immutable movement or adjustment records;
- lifecycle history is append-only where required;
- unique constraints, foreign keys, checks, indexes, retention, encryption, and deletion behavior are explicit;
- migrations are versioned, reviewable, idempotent where required, and tested from an empty database and the previous supported version;
- destructive changes require migration, backup, compatibility, and rollback approval;
- seed data is deterministic, non-secret, and separated from production data.

**Exit gate:** schema review, migration tests, tenant-isolation tests, integrity tests, and backup/restore rehearsal requirements pass.

### BUILD-08 — Identity, Tenant, Role, and Permission Foundation

Implement before protected business modules:

1. authentication and session handling;
2. tenant resolution and tenant isolation;
3. user membership, branch, department, and application access;
4. role, permission, record-scope, and field-level authorization;
5. owner approvals and separation of duties;
6. support-access request, approval, duration, scope, visibility, revocation, and audit;
7. invitation, activation, suspension, recovery, logout, and session revocation;
8. route, API, service, database, search, cache, file, event, export, and analytics enforcement.

Frontend hiding is never the only authorization control.

**Exit gate:** authorization matrix, negative-access tests, cross-tenant tests, session tests, and audit evidence pass.

### BUILD-09 — Shared Backend Platform Services

Implement in dependency order:

1. request validation and canonical error contract;
2. transaction and unit-of-work boundary;
3. idempotency and duplicate-operation prevention;
4. audit service;
5. outbox, event publication, consumption, retries, dead-letter handling, and replay controls;
6. jobs and scheduled tasks;
7. notification routing and templates;
8. file and evidence service;
9. search indexing and permission filtering;
10. realtime update channels;
11. import/export framework;
12. integration credentials references, health, retries, and audit;
13. rate limits, quotas, usage, and entitlement enforcement.

**Exit gate:** shared service contracts, failure tests, retry tests, and observability evidence pass.

### BUILD-10 — Shared Frontend Platform Services

Implement:

1. authenticated application bootstrap;
2. tenant and branch context;
3. typed API or contract client;
4. permission and entitlement resolution;
5. query, cache, mutation, retry, invalidation, and optimistic-update rules;
6. route guards and protected layouts;
7. error boundary and recovery behavior;
8. offline draft, synchronization, conflict, and resume behavior where approved;
9. notification, file, search, audit-visible history, and realtime clients;
10. localization, time zone, currency, tax display, and accessibility foundations.

**Exit gate:** frontend foundation integration, security, accessibility, responsive, offline, and error-state tests pass.

## 8. EXACT CORE MODULE BUILD ORDER

After BUILD-00 through BUILD-10 pass, implement the current core product in this order. A later item may begin only when its required dependencies are complete and validated.

### CORE-01 — Organization and Branch Administration

- tenant profile;
- branches, departments, workstations, warehouses, service areas, operating hours;
- organization hierarchy and settings;
- branch activation, suspension, archive, and transfer rules.

### CORE-02 — Users, Roles, Permissions, and Approvals

- users and memberships;
- role and permission administration;
- branch, department, record, and field scope;
- approval authority and separation of duties;
- contractor, auditor, and temporary access.

### CORE-03 — Subscription, Entitlement, Usage, and Tenant Lifecycle

- plans, trials, subscriptions, billing status, grace period, suspension, reactivation, cancellation, closure;
- feature, seat, branch, storage, message, and integration limits;
- owner and platform administration views.

### CORE-04 — Customer, Business Account, and Device Registry

- customer search-before-create and deduplication;
- business accounts and representatives;
- device ownership, identifiers, history, privacy, consent, and merge rules.

### CORE-05 — Service Request, Appointment, Intake, and Job Order

- walk-in, call, portal, and appointment entry;
- guided customer/device/issue/condition/service/review intake;
- evidence, accessories, signatures, consent, numbering, receipt, and tracking access;
- job-order creation and authoritative initial status.

### CORE-06 — Queue, Qualification, Dispatch, Assignment, and Acceptance

- priority, SLA, skill, certification, workload, branch, and eligibility;
- dispatcher queue and auto-assignment rules;
- technician notification, acceptance, decline, and reassignment history.

### CORE-07 — Inspection and Diagnosis

- read-only intake snapshot;
- guided inspection and diagnostic checklist;
- tests, findings, evidence, safety escalation, recommended work, parts, risk, and ETA;
- draft, help, completion, and history.

### CORE-08 — Quotation and Customer Approval

- quotation versions, parts, labor, fees, tax, discounts, deposit, warranty, terms, and expiry;
- protected pricing and approval limits;
- customer-safe presentation, send, view, ask, approve, reject, expire, revise, and version lock.

### CORE-09 — Inventory, Procurement, Suppliers, and Parts Reservation

- parts catalog, compatibility, stock, serialized items, tools, consumables, warehouses, and branches;
- reservation, issue, use, return, removal, recycling, transfer, adjustment, count, and reconciliation;
- supplier quotation, purchase order, receiving, returns, lead time, costing, and alerts;
- immutable stock movements and job costing.

### CORE-10 — Repair Execution

- approved-work and approved-parts enforcement;
- repair checklist, timer, progress, evidence, notes, safety, pause, exception, revised quote, and parts usage;
- send-to-testing gate.

### CORE-11 — Testing, Quality Review, and Rework

- test-plan selection, required tests, expected and actual results, evidence, pass/fail;
- rework loop and history;
- quality review, approval, missing-evidence request, and compliance escalation.

### CORE-12 — Invoice, Payment, Refund, Reconciliation, and Release

- final-charge validation;
- invoices, deposits, payments, credits, refunds, balances, reconciliation, and account terms;
- release financial gate;
- customer/representative verification, accessories, signature, pickup/delivery, handover, receipt, and release history.

### CORE-13 — Warranty, Return, Support, Communication, and Feedback

- warranty activation, eligibility, linked warranty jobs, repair/replace/refund/reject decisions;
- secure support threads, complaints, follow-up, notifications, satisfaction, and closure.

### CORE-14 — Reports, Analytics, Forecasting, Search, and Exports

- operational, workforce, inventory, finance, quality, SLA, warranty, customer, subscription, and platform reporting;
- permission-filtered search, dashboards, drill-down, scheduled reports, exports, and audit;
- reporting models must not bypass tenant, branch, role, field, retention, or privacy rules.

### CORE-15 — Platform Administration and Support Operations

- tenant, plan, usage, renewal, risk, incident, and support administration;
- approved time-bound support access;
- platform billing, security audit, operational health, tenant export, closure, and retention workflows.

### CORE-16 — Cross-Application Completion

Verify the same canonical records and workflows operate correctly across:

- Owner Application;
- Front Desk Application;
- Technician Application;
- Customer Portal;
- Platform Administration.

Do not create separate business logic for each application. Applications use shared contracts and services with role-specific presentation and actions.

## 9. PER-MODULE VERTICAL-SLICE PROCEDURE

Every CORE module and every future expansion module must follow all steps:

1. **Discover** — inspect existing code, migrations, tests, documentation, and open work.
2. **Specify** — define exact scope, non-scope, dependencies, files, and requirements.
3. **Contract** — lock entity, state, permission, API, event, UI, error, and test contracts.
4. **Migrate** — add backward-compatible schema migration and verification.
5. **Domain** — implement entities, value objects, policies, state transitions, and calculations.
6. **Backend** — implement repositories, services, commands, queries, transactions, audit, events, jobs, and integrations.
7. **Backend Test** — unit, property, state-transition, authorization, database, integration, contract, retry, and failure tests.
8. **Frontend Data** — implement typed client, queries, mutations, cache, validation, permission, realtime, offline, and conflict behavior.
9. **Frontend UI** — implement traced screens, forms, lists, details, approvals, history, loading, empty, error, permission, subscription, responsive, and accessible states.
10. **Integration** — verify frontend, API, service, database, event, file, notification, search, and audit behavior together.
11. **E2E** — test happy, alternate, rejection, exception, cancellation, retry, resume, conflict, offline, and recovery paths.
12. **Non-Functional** — run security, privacy, accessibility, performance, reliability, and observability checks required by the slice.
13. **Documentation** — update API/schema docs, traceability, runbooks, indexes, audit, revision, and status.
14. **Validate** — STG-6 must return PASS with evidence.
15. **Publish** — STG-7 publishes only validated files and reads them back.
16. **Learn and Diagnose** — STG-8 through STG-10 complete before the next slice.

## 10. DATABASE IMPLEMENTATION ORDER AND RULES

For every schema change:

```text
Approved Logical Model
→ Physical Schema Proposal
→ Constraint and Index Review
→ Tenant/Branch/Security Review
→ Migration
→ Empty-Database Test
→ Upgrade Test from Previous Version
→ Seed/Fixture Test
→ Data-Integrity Test
→ Rollback or Forward-Recovery Plan
→ Application Compatibility Test
→ Staging Migration Rehearsal
→ Approved Deployment
```

Prohibited:

- manual production schema edits;
- destructive migration without approved data handling;
- silent record deletion;
- removal of history required for audit, finance, inventory, lifecycle, warranty, or legal retention;
- database authorization replaced only by frontend controls;
- schema marked complete without migration and verification evidence.

## 11. BACKEND IMPLEMENTATION ORDER AND RULES

Within each module:

1. contract and validation types;
2. domain model and invariants;
3. authorization policies;
4. persistence mapping and repository;
5. commands and transactions;
6. queries and permission filtering;
7. audit and history;
8. domain and integration events;
9. jobs, notifications, files, search, and external integrations;
10. API endpoints or operations;
11. error mapping, idempotency, rate limits, metrics, and tracing;
12. automated tests and documentation.

Business rules belong in reusable domain/application services, not duplicated in controllers, routes, UI components, jobs, or multiple applications.

## 12. FRONTEND IMPLEMENTATION ORDER AND RULES

Within each module:

1. route and role eligibility;
2. screen-to-wireframe and screen-to-wireflow traceability;
3. typed data and validation model;
4. query and mutation behavior;
5. loading, empty, error, permission, subscription, offline, conflict, and retry states;
6. reusable design-system components;
7. page structure and responsive layout;
8. forms, review, confirmation, and destructive-action protection;
9. keyboard, touch, screen-reader, low-vision, limited-dexterity, and reduced-connectivity behavior;
10. realtime and background-update behavior;
11. component, integration, accessibility, visual, and end-to-end tests.

Frontend screens must never invent a status transition, permission, price, approval, or workflow not present in canonical contracts.

## 13. TEST IMPLEMENTATION ORDER

Testing is implemented with the code, not after the complete application.

### Per-Commit Checks

1. formatting;
2. linting;
3. type checking;
4. unit tests;
5. changed contract and migration checks;
6. secret, dependency, license, and static security checks;
7. build.

### Per-Module Gate

1. domain and business-rule tests;
2. authorization and cross-tenant negative tests;
3. database and migration tests;
4. API and event contract tests;
5. integration tests;
6. frontend component and state tests;
7. accessibility tests;
8. end-to-end happy and failure paths;
9. audit, idempotency, retry, offline, conflict, and recovery tests;
10. module-specific performance and security checks.

### Per-Release Gate

1. full regression suite;
2. cross-application E2E suite;
3. supported-browser/device testing;
4. migration rehearsal with production-like data volume;
5. backup and restore test;
6. load, capacity, soak, and resilience tests against approved targets;
7. threat-model verification and penetration/security testing as required;
8. privacy, retention, export, deletion, and legal-hold validation;
9. accessibility conformance validation;
10. incident, monitoring, alert, support, deployment, and rollback rehearsal;
11. user-acceptance testing and owner approval.

A failed required test blocks promotion.

## 14. ENVIRONMENT AND DEPLOYMENT ORDER

Mandatory promotion path:

```text
Local
→ CI Test Environment
→ Preview Environment when applicable
→ Shared Development
→ Staging
→ Production
```

No environment may silently use production secrets or production customer data.

### Deployment Procedure

1. Confirm approved commit, release manifest, artifact checksums, and dependency lock.
2. Confirm CI PASS and required approvals.
3. Confirm configuration and secret references for the target environment.
4. Confirm backup, migration, compatibility, monitoring, and rollback plans.
5. Deploy backward-compatible application components when required before migration.
6. Run migration through the approved migration job.
7. Verify migration, health, readiness, connectivity, tenant isolation, and critical smoke tests.
8. Deploy remaining services, workers, realtime components, and frontend assets.
9. Run post-deployment smoke, security, workflow, and observability checks.
10. Enable traffic through the approved rolling, canary, blue/green, or other strategy.
11. Monitor errors, latency, saturation, queues, database, external providers, business events, audit, and user impact.
12. Record deployment evidence, version, actor, time, configuration revision, migration, and result.
13. Roll back or execute approved forward recovery when a release gate fails.
14. Complete post-release validation before marking deployment complete.

## 15. ROLLBACK AND RECOVERY RULES

Every release must define:

- rollback trigger;
- decision authority;
- maximum acceptable rollback decision time;
- application rollback method;
- database compatibility and recovery method;
- feature-flag disablement where approved;
- queue, event, and integration recovery;
- cache and search reprocessing;
- customer and staff communication;
- audit and incident records;
- data reconciliation and validation after recovery.

A rollback plan that cannot protect newly written data is not approved.

## 16. RELEASE WAVES

### RELEASE-0 — Controlled Implementation Planning

- release boundaries;
- stack and providers;
- physical schema and interfaces;
- high-fidelity design and prototype;
- security, testing, deployment, rollback, support, and operations plans;
- implementation task graph.

### RELEASE-1 — Engineering and Shared Platform Foundation

- BUILD-03 through BUILD-10;
- no unsupported business-module shortcuts.

### RELEASE-2 — Core Repair Operations MVP

- CORE-01 through CORE-08;
- minimum secure owner, front-desk, technician, and customer journeys required by approved MVP.

### RELEASE-3 — Inventory, Repair Completion, Finance, and Release

- CORE-09 through CORE-13.

### RELEASE-4 — Reporting, Platform Administration, Hardening, and Production Readiness

- CORE-14 through CORE-16;
- complete regression, security, accessibility, performance, resilience, operations, and release gates.

### FUTURE RELEASES — Expansion Packages

HR, payroll, finance expansion, sales/CRM, franchise, advanced analytics, AI automation, and every other expansion must:

1. pass Section 8A of `1plan.md`;
2. receive a release boundary and authorization;
3. follow BUILD-00 through BUILD-10 as applicable;
4. follow the per-module vertical-slice procedure;
5. pass independent release and deployment gates.

## 17. TECA STAGE MAPPING FOR IMPLEMENTATION

```text
STG-0  Retrieve implementation memories and failure patterns
STG-1  Discover code, branches, migrations, tests, deployments, and canonical artifacts
STG-2  Specify exactly one authorized build slice
STG-3  Produce ordered requirements, dependencies, files, owners, and acceptance evidence
STG-4  Generate only the approved code, migration, tests, configuration, or documentation
STG-5  Organize files and synchronized repository updates
STG-6  Validate architecture, code, tests, security, accessibility, placement, and traceability
STG-7  Publish validated work using fresh state and read back every change
STG-8  Store validated durable lessons only
STG-9  Diagnose first true failure across the pipeline
STG-10 Summarize all upstream stages and truthful next action
```

Each TECA run implements one controlled slice unless the approved specification explicitly proves that a small group of inseparable files is one atomic slice.

## 18. SOURCE-CONTROL AND PUBLISHING RULES

- Never overwrite unrelated work.
- Re-read every target file immediately before update.
- Use current file SHA or repository state.
- Prefer a branch and reviewed pull request unless direct-main publishing is explicitly authorized.
- Keep commits single-purpose and traceable to requirement IDs.
- Do not merge failed checks.
- Do not publish generated artifacts that STG-6 did not approve.
- Read back every published file and confirm commit SHA.
- Synchronize required master documents and statuses.
- Do not claim deployment from a source-code commit alone.

## 19. COMPLETION DEFINITIONS

### IMPLEMENTATION_SLICE_COMPLETE

All required database, backend, frontend, tests, documentation, validation, publish, read-back, memory, diagnostic, and summary evidence for the authorized slice are complete.

### MODULE_COMPLETE

Every required vertical slice, role, permission, lifecycle path, state, integration, UI, test, and acceptance criterion for the module is complete.

### RELEASE_COMPLETE

Every included module is complete; full release gates, staging evidence, user acceptance, migration rehearsal, security, accessibility, performance, operations, rollback, deployment, and post-deployment checks pass.

### DEPLOYMENT_COMPLETE

The approved release is running in the target environment, migrations and health checks pass, required workflows are verified, monitoring is healthy, and deployment evidence is recorded.

### PRODUCTION_READY

Production readiness may be claimed only after the approved measurable non-functional, security, privacy, accessibility, recovery, support, operations, and compliance gates pass with evidence.

## 20. REQUIRED STATUS VALUES

- `PLANNED`
- `READY`
- `IN_PROGRESS`
- `COMPLETE`
- `PARTIAL`
- `BLOCKED`
- `FAILED`
- `NOT_AUTHORIZED`
- `SKIPPED_ALREADY_COMPLETE`
- `ROLLED_BACK`
- `DEPLOYED`
- `VERIFIED`

No status may be upgraded without evidence.

## 21. REQUIRED IMPLEMENTATION RUN REPORT

Every implementation run must report:

- release and slice ID;
- authorization evidence;
- current repository and environment state;
- architecture, design, schema, API, security, and test sources;
- already-complete work skipped;
- exact files created, updated, or rejected;
- database migration result;
- backend result;
- frontend result;
- unit, contract, integration, E2E, security, accessibility, performance, and recovery test results applicable to the slice;
- CI result;
- publish mode, branch, commit SHA, PR, and read-back result;
- deployment and migration result when authorized;
- rollback readiness or action;
- master synchronization result;
- memory result;
- diagnostic result;
- truthful current status and next controlled slice.

## 22. PROHIBITED ACTIONS

TECA and assigned builders must not:

- code without exact scoped authorization;
- skip required planning or dependency gates;
- implement a future release early;
- duplicate shared business logic across applications;
- build frontend screens disconnected from canonical data and workflow contracts;
- build APIs without permission, validation, audit, idempotency, and test requirements;
- change the database manually in production;
- use secrets in repository files, prompts, logs, tests, or memory;
- weaken tenant, branch, role, field, finance, inventory, privacy, or audit rules for convenience;
- mark a module complete from mock UI, placeholder API, disabled tests, or partial backend implementation;
- claim deployment, production readiness, security, availability, performance, or compliance without evidence;
- continue to the next unfinished task before the current authorized task is accurately completed, validated, published, read back, diagnosed, and summarized.

## 23. STATUS

```text
CANONICAL IMPLEMENTATION BUILD PLAYBOOK: COMPLETE
EXACT FOUNDATION BUILD ORDER: DEFINED
EXACT DATABASE BUILD ORDER: DEFINED
EXACT BACKEND BUILD ORDER: DEFINED
EXACT FRONTEND BUILD ORDER: DEFINED
EXACT CORE MODULE ORDER: DEFINED
EXACT TEST ORDER: DEFINED
EXACT ENVIRONMENT AND DEPLOYMENT ORDER: DEFINED
ROLLBACK AND RECOVERY RULES: DEFINED
TECA IMPLEMENTATION STAGE MAPPING: DEFINED
ACTUAL APPLICATION IMPLEMENTATION: SEPARATE STATUS
IMPLEMENTATION AUTHORIZATION: REQUIRED PER RELEASE OR SLICE
```

**THIS DOCUMENT COMPLETES THE CANONICAL IMPLEMENTATION BUILD PLAYBOOK. IT DEFINES HOW THE APPROVED ARCHITECTURED SAAS MUST BE BUILT; IT DOES NOT CLAIM THAT THE APPLICATION HAS ALREADY BEEN CODED, TESTED, DEPLOYED, OR RELEASED.**