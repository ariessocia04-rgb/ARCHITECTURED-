# CRM — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security/privacy
Least privilege; tenant/company/branch/account scopes; field restrictions for contacts, consent, notes, value, contracts, and exports; encryption; MFA/step-up for bulk export, merge, contract approval, and settings; approved support access; privacy-safe analytics/logs.

## Audit/recovery
Audit access, capture, assignment, stage, proposal, contract, conversion, consent, segment, export, merge request, and configuration. Retention/anonymization respects legal purpose, objection, legal hold, and operational record dependencies. Restore validates customer links, consent state, ownership, and timeline continuity.

## Targets
99.9% monthly availability; p95 reads ≤2s; protected writes ≤3s; search ≤2s under approved index load; RPO ≤15m; RTO ≤4h; WCAG 2.2 AA; zero accepted cross-tenant contact exposure or consent-bypassing communication.

## Reports
Lead source/conversion, pipeline, forecast inputs, win/loss, cycle time, proposal aging, follow-up completion, account activity, retention/renewal, loyalty, consent coverage, export/audit, and integration health.

## Risks
Duplicate customers, consent violation, unauthorized export, inaccurate conversion, private-note exposure, biased scoring, stale stage, contract mismatch, and cross-tenant profiling require deduplication, field policy, human review, explainability, idempotency, monitoring, reconciliation, and kill switches.

## Tests
Permission/field matrix, lifecycle, duplicate/conversion, consent enforcement, segmentation restrictions, contract/version, retry/idempotency, import/export, mobile conflict, accessibility, performance, backup/restore, disaster recovery, and tenant isolation.

## Status
All canonical volumes and traceability are defined. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; implementation separately gated; tests not run; deployment not performed.