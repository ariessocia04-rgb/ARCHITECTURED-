# REVISION AND REMAINING-WORK REGISTER

## RULE

- Read after `1plan.md` and `README.md`.
- `1plan.md` is the master authority for scope, priority, worker coordination, handoff, provenance, canonical targets, duplicate classification, folder assignments, and completion rules.
- Complete the current related task before moving to a later related task.
- Validate and skip work already complete.
- Do not create duplicate canonical files or memories.
- Do not mark work complete without repository or live-system evidence.
- A governing plan does not prove coding, testing, deployment, or release completion.

## COMPLETED CONTROLLED REVISIONS

### REV-001 — Canonical Wireframe Architecture

- Status: COMPLETE.
- File: `Design/WIREFRAME_ARCHITECTURE.md`

### REV-002 — Canonical Wireflow Architecture

- Status: COMPLETE.
- File: `Design/WIREFLOW_ARCHITECTURE.md`

### REV-003 — Non-Technical User UI Design System

- Status: COMPLETE.
- File: `Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md`

### REV-004 — TECA Agent Repository Job Assignments

- Status: COMPLETE.
- File: `TECA/AGENT_JOB_ASSIGNMENTS.md`

### REV-005 — TECA Sequential Pipeline Execution Plan

- Status: COMPLETE.
- File: `TECA/PIPELINE_EXECUTION_PLAN.md`

### REV-006 — TECA CrewAI Studio Update Handoff

- Status: COMPLETE IN REPOSITORY.
- File: `TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md`

### REV-007 — Architecture, Design, and TECA Master Synchronization

- Status: COMPLETE.
- Result: Master plan, README, index, audits, verification, duplicate register, revision register, and folder indexes synchronized for the architecture/design phase.

### REV-009 — Canonical Implementation Build Playbook

- Status: COMPLETE AS A GOVERNING PLAN.
- File: `TECA/IMPLEMENTATION_BUILD_PLAN.md`
- Result: Foundation, database, backend, frontend, vertical-slice, testing, deployment, rollback, and release order defined without granting coding authorization.

### REV-010 — Worker Continuity, Handoff, and Source Provenance

- Status: COMPLETE IN REPOSITORY.
- Authority: `1plan.md`, Section 1A.
- Result: continue-current-work, no-racing, save-before-transfer, handoff, gap-fill, source provenance, and unsupported-conflict rules established.

### REV-011 — Applications Starting Point and Index Alignment

- Status: COMPLETE IN REPOSITORY.
- Authority: `1plan.md`, Section 1B.
- Result:
  - `Applications/README.md` established as application starting point.
  - Four application indexes available.
  - Technician uses decomposed module mode.
  - Front Desk, Owner core, and Customer Portal use consolidated README mode with navigation indexes.
  - Existing architecture preserved during alignment.

### REV-012 — Evidence-Based Repository Duplicate Audit and Cleanup

- Status: COMPLETE.
- Authority: `1plan.md`, Section 1C.
- Scope: active repository files, application architecture, shared contracts, design, TECA plans, root documents, and `.teca/memory/`.

#### Removed or superseded

1. `Applications/Technician Application/Volume 1 - Header/Notification/notification.md`
   - Classification: `EXACT_DUPLICATE`.
   - Evidence: same blob SHA as Sidebar Module 11 Notification.
   - Canonical replacement: `Applications/Technician Application/Volume 2 - Sidebar/Module 11 - Notification/notification.md`.
   - Delete commit: `dd0eb3680be321a54487477287d7b73247d1a3fc`.

2. `Applications/Technician Application/Volume 1 - Header/Profile/profile.md`
   - Classification: `NEAR_DUPLICATE_SAME_AUTHORITY` / `SUBSET_DUPLICATE`.
   - Canonical replacement: `Applications/Technician Application/Volume 2 - Sidebar/Module 12 - Profile/profile.md`.
   - Delete commit: `622d19bc539277f9e0a89b484aef46d4e47b634a`.

3. `PLAN.md`
   - Classification: `AGGREGATE_COPY`.
   - Evidence: creation history identified it as a compilation of the 36 Technician modules for Google Stitch.
   - Canonical replacements: `1plan.md`, application indexes, module files, and `Design/`.
   - Delete commit: `a4b838045b65299b7a81b908c6a86eb76e10867e`.

4. `.teca/memory/FailurePatterns/mem_1784179908210.json`
   - Classification: superseded failure pattern.
   - Canonical replacement: `.teca/memory/FailurePatterns/mem_1784187086628.json`.
   - Delete commit: `9779ab5bd7f1a5701c3afdfe489026b585033d3e`.

5. `.teca/memory/ProjectKnowledge/mem_1784180613040.json`
   - Classification: duplicate transient run summary.
   - Delete commit: `135d656a3d66c009d17dfcbe169ecb78fd6b6c44`.

6. `.teca/memory/ProjectKnowledge/mem_1784236443508.json`
   - Classification: duplicate transient run summary.
   - Delete commit: `8badd008a2f45cef9f0d9cc5b7ff58e18b24a209`.

#### Preserved intentionally

- Front Desk, Owner, and Customer Portal INDEX/README pairs because navigation and canonical architecture have different purposes.
- Shared SaaS contracts because each governs a distinct cross-application concern.
- Technician domain modules using a common enterprise template because their domain content and responsibility differ.
- Main Workspace component documents because each defines a separate reusable UI concern.
- Design wireflow and shared handoff matrix because one defines user navigation and the other defines operational ownership.
- TECA pipeline and implementation build plans because one governs automation phases and the other detailed build order.

#### Synchronized

- `Applications/Technician Application/INDEX.md`
- `index.md`
- `1plan.md`
- `README.md`
- `duplicate.md`
- `.teca/memory/index.json`
- `revise.md`

#### Result

- Technician logical surfaces: 36.
- Technician canonical detailed files: 34.
- Header quick-access references: 2.
- Memories before cleanup: 5.
- Durable memories after cleanup: 2.
- Removed/superseded duplicate files: 6.
- Active accidental duplicate canonical documents: 0.
- Domain-specific modules deleted only because of shared structure: 0.

### REV-013 — Free, Pro, and Premium Plans and Billing Architecture

- Status: COMPLETE AS A FULL ARCHITECTURE SPECIFICATION PACKAGE.
- Canonical entry: `SaaS Platform/Plans and Billing/INDEX.md`.
- Parent authority: `SaaS Platform/SUBSCRIPTION_ENTITLEMENT_USAGE_AND_TENANT_LIFECYCLE_CONTRACT.md`.
- Result:
  - Free, Pro, and Premium plan/version, feature, limit, price-book, trial, add-on, grandfathering, and migration mechanics defined.
  - Subscription/access state, upgrade, downgrade remediation, renewal, past due, grace, suspension, reactivation, cancellation, export, archive, and closure defined.
  - Physical schema, APIs, events, webhooks, provider adapter, usage metering, reconciliation, audit, and provider-failure behavior defined.
  - 24 of 24 low-fidelity subscription/billing screens documented.
  - 20 of 20 normal/failure/retry/recovery wireflows documented.
  - Complete screen-role-entitlement-data-API-event-test traceability created.
  - Security, privacy, NFR targets, threat model, test matrix, release, rollout, rollback, and exact Codex implementation sequence defined.
  - Existing 14 shared contracts and three global Design documents preserved as parent authorities; no competing duplicate created.
- Truthful non-completions:
  - recommended launch prices require owner approval before live publication;
  - exact payment provider and technology versions remain gated decisions;
  - high-fidelity visual design and interactive prototype are not created by this architecture task;
  - source code, executed tests, deployment, and production evidence are not created;
  - `implementation_authorized=true` remains absent.

## CURRENT OPEN REVISION

### REV-008 — Live TECA CrewAI Studio Alignment

- Status: PENDING LIVE EXECUTION AND READ-BACK.
- Source instruction: `TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md`.
- Required additions:
  - enforce `1plan.md` Sections 1A, 1B, 1C, and 8A;
  - use current application entry paths;
  - search before creating;
  - skip completed work;
  - apply duplicate classifications before create/update/publish;
  - preserve 9 agents, 11 tasks, exact order, IDs, contexts, tools, and sequential process unless an approved correction is required;
  - return live stored read-back.
- Completion evidence: `TECA_LIVE_CONFIGURATION_ALIGNED` with actual Studio configuration read-back.

## NEXT CONTROLLED PHASE AFTER REV-008

### Release-Specific Controlled Implementation Planning

1. Approve the exact Free/Pro/Premium release slice and market.
2. Approve or revise the draft launch prices, limits, trial, retention, and support policies.
3. Lock technology and supported versions.
4. Select the payment/billing provider and approved provider capabilities.
5. Approve environments, hosting, region, deployment, and Premium isolation policy.
6. Convert the physical schema specification into reviewed migrations and ER diagrams.
7. Lock generated API/event/webhook schemas and provider mappings.
8. Create high-fidelity UI and an interactive prototype from the 24 screens and 20 flows.
9. Create design tokens/components without changing workflow rules.
10. Approve measurable targets and operational provider assumptions.
11. Create exact implementation tasks with source paths, IDs, tests, acceptance, and review gates.
12. Set exact scoped `implementation_authorized=true` before source-code work.

## NOT AUTHORIZED

- Uncontrolled coding.
- Phase or module jumping.
- Racing or overwriting active work.
- Treating chat, memory, old branches, local drafts, or copied files as canonical truth.
- Creating duplicate architecture, design, TECA, plan, or memory records.
- Deleting domain-specific modules merely because they share a standard structure.
- Publishing draft prices or choosing a provider without owner approval.
- Claiming live TECA alignment before read-back.
- Claiming deployment or production readiness from repository documentation alone.

## CURRENT STATUS

```text
MASTER ARCHITECTURE PLAN: COMPLETE AS GOVERNING PLAN
APPLICATIONS STARTING POINT: COMPLETE
DUPLICATE CLASSIFICATION RULE: COMPLETE IN 1PLAN SECTION 1C
REV-012 DUPLICATE AUDIT AND CLEANUP: COMPLETE
REV-013 FREE / PRO / PREMIUM ARCHITECTURE PACKAGE: COMPLETE AS SPECIFICATION
PLANS AND BILLING SCREENS: 24 OF 24
PLANS AND BILLING WIREFLOWS: 20 OF 20
REMOVED OR SUPERSEDED DUPLICATE FILES: 6
ACTIVE ACCIDENTAL DUPLICATE CANONICAL DOCUMENTS: 0
TECHNICIAN LOGICAL SURFACES: 36
TECHNICIAN CANONICAL DETAILED FILES: 34
DURABLE TECA MEMORIES: 2
LIVE TECA STUDIO ALIGNMENT: PENDING
HIGH-FIDELITY PLANS/BILLING DESIGN: NOT CREATED
LIVE PLAN/PRICE PUBLICATION AND PROVIDER SELECTION: NOT APPROVED
SOURCE CODE / EXECUTED TESTS / DEPLOYMENT: NOT CREATED
GLOBAL CODING AUTHORIZATION: NO
```
