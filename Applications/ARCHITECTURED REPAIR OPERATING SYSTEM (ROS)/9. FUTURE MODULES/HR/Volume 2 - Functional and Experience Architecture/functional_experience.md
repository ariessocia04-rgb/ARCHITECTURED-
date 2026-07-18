# HR — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
HR dashboard; employee directory/profile; employment and position; onboarding checklist; branch/department assignment; shifts; attendance; timesheets/overtime; leave/holidays; skills/certifications; training; performance/targets; disciplinary cases; transfers/promotions; payroll input; offboarding; employee self-service; reports; privacy/audit/settings.

## Lifecycle
`Candidate / Prehire → Onboarding → Active → Probation / Confirmed → Transfer / Promotion → Leave / Suspended → Separated → Archived`.

Sub-lifecycles cover leave, attendance correction, certification, training, performance review, disciplinary case, payroll input, and offboarding. All transitions record effective date, actor, reason, approval, evidence, previous/new assignment, and access impact.

## Workflows
Onboard → verify identity/documents → create employment → assign company/branch/position/manager → required training/certification → Authorization access request → activate. Transfer/promotion updates effective-dated assignment and access. Offboarding freezes changes, completes assets/clearance, revokes access through Authorization, preserves records, and confirms final handoff.

## Exceptions
Duplicate employee, missing document, invalid effective date, attendance conflict, unapproved overtime, leave overlap, expired certification, payroll-input mismatch, manager conflict, offline attendance duplication, failed access revocation, and retention/legal-hold conflict enter guided queues.

## UI/UX
Employee self-service uses plain language and privacy-safe summaries. Managers see only authorized workforce fields. Sensitive cases require step-up access. Desktop HR administration, tablet manager approval, mobile employee attendance/leave, offline queue, accessible forms, retained input, clear deadlines, loading/empty/error/permission/conflict states.

## Wireframes/wireflows
Dashboard, directory, profile, wizard, approval, calendar, timesheet, certification, training, performance, case, transfer, payroll input, offboarding, reports, audit, and recovery. Prototype demonstrates onboarding, leave approval/rejection, certification block, transfer, and offboarding access revocation.