# HR — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
PersonReference, Employee, Employment, Position, Department, BranchAssignment, ManagerAssignment, OnboardingCase, ChecklistItem, Shift, Attendance, Timesheet, Overtime, LeaveRequest, Holiday, Skill, Certification, Training, Enrollment, Target, PerformanceReview, DisciplinaryCase, PayrollInput, AssetClearance, OffboardingCase, Consent, SensitiveDocument.

## Ownership
Effective-dated employment and assignment history is immutable. Employee links to a user without merging HR-sensitive fields into authentication. Authorization consumes approved access changes. Operational apps retain historical technician/user references after separation.

## Rules
Unique active employment policy, valid effective dates, branch/company scope, manager hierarchy validation, attendance sequence, overtime/leave eligibility, certification requirements, payroll input lock/version, privacy classification, retention, and no silent history edit.

## APIs
Create prehire/employee, verify, onboard, activate, assign/transfer/promote, schedule, clock/check attendance, correct attendance, submit/approve leave/overtime/timesheet, issue/revoke certification, enroll/complete training, review performance, create case, prepare/approve payroll input, initiate/complete offboarding, export governed records.

## Events
`employee.created`, `employee.activated`, `employee.transferred`, `employee.promoted`, `shift.started`, `shift.ended`, `attendance.recorded`, `leave.approved`, `certification.expiring`, `certification.revoked`, `training.completed`, `performance.completed`, `payroll.input_ready`, `employee.separated`, `access.revocation_requested`.

## Integrations
Authorization, Technician assignment, Owner monitoring, Payroll/accounting adapters, Notifications, Files, Mobile/offline, Multi-Branch/Multi-Company, BI. No integration receives restricted fields without explicit field contract and legal purpose.

## Sync/migration
Identity matching requires review; historical employees remain stable; imports use preview, duplicate detection, effective-date checks, field classification, row errors, and rollback. Offline attendance uses device/site policy, sequence, signed time evidence, idempotency, and conflict resolution.