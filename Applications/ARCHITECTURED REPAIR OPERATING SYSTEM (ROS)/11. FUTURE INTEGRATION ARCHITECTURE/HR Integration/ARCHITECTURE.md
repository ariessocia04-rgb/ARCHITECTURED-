# HR INTEGRATION ARCHITECTURE

## Purpose and boundary

Connect employees, assignments, attendance, shifts, leave, skills, certifications, training, performance, payroll inputs, onboarding, transfer, and offboarding without changing current application roles or repair history.

## Ownership

HR owns worker records and employment lifecycle. Authorization owns system permissions. Applications own operational assignments and work evidence.

## Core entities

Employee, Employment, Position, Department, BranchAssignment, Shift, Attendance, Timesheet, LeaveRequest, Skill, Certification, Training, PerformanceReview, PayrollInput, OffboardingCase.

## Lifecycle

Candidate / Prehire → Onboarding → Active → Probation / Confirmed → Transfer / Promotion → Suspended / Leave → Separation → Archived.

## Integration points

Technician eligibility, dispatcher assignment, shift status, certification gates, time-on-job, branch access, payroll hours, performance metrics, and offboarding access revocation.

## Events

`employee.activated`, `employee.transferred`, `shift.started`, `shift.ended`, `leave.approved`, `certification.expiring`, `certification.revoked`, `employee.separated`, `payroll.input_ready`.

## Compatibility rules

- Existing user IDs and historical technician names remain stable.
- HR status never deletes repair history.
- Permission changes occur through Authorization, not direct application-table edits.
- HR outage does not erase active sessions; configured risk rules determine access continuation.

## Roles and controls

HR Officer, HR Manager, Branch Manager, Employee, Payroll Officer, Security Administrator, Auditor. Sensitive fields use field-level access and retention controls.

## UI/UX

Employee self-service, manager approvals, certification warnings, shift/leave status, accessible forms, low-connectivity attendance queue, privacy-safe operational views.

## Reports

Headcount, attendance, overtime, leave, certification coverage, training, performance, turnover, payroll inputs, branch staffing.

## Acceptance

Privacy segregation, legal retention, immutable employment history, authorization handoff, no orphaned assignments, no deletion of operational evidence.

**STATUS: COMPLETE (100%)**
