# HR — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security/privacy
Least privilege, field-level privacy, purpose and legal-basis tags, employee access/correction workflow, restricted medical/discipline/compensation files, encryption, MFA/step-up, device/session controls, consent where required, approved support access, export controls, and privacy-safe audit/logging.

## Audit/retention/recovery
Audit all view/access of highly sensitive fields plus employment, assignment, attendance, leave, certification, performance, discipline, payroll input, export, and offboarding. Retention/legal hold is record-class and jurisdiction configurable. Restore verifies employment history, access handoffs, attendance sequence, payroll locks, and audit continuity.

## Targets
99.9% monthly availability; p95 reads ≤2s; p95 protected writes ≤3s; attendance local acknowledgement ≤1s; RPO ≤15m; RTO ≤4h; WCAG 2.2 AA; zero accepted cross-tenant or unauthorized sensitive-field disclosure.

## Reports
Headcount, staffing, attendance, lateness, overtime, leave, certifications, training, performance, turnover, branch distribution, payroll-input exceptions, offboarding, privacy access, and audit.

## Risks
Sensitive-data exposure, discriminatory automation, orphaned access, ghost employee, attendance fraud, incorrect payroll input, retaliation/privacy misuse, retention violation, and offboarding failure require deterministic policy, human review, segregation, idempotency, anomaly monitoring, reconciliation, and kill switches.

## Tests
Permission/field matrix, employee lifecycle, effective dates, attendance duplicate/offline replay, leave overlap, certification eligibility, payroll lock, access provisioning/revocation, imports, privacy request, accessibility, performance, backup/restore, disaster recovery, and tenant/company isolation.

## Status
All canonical files and traceability requirements are defined. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; code not authorized globally; test execution not run; deployment not performed.