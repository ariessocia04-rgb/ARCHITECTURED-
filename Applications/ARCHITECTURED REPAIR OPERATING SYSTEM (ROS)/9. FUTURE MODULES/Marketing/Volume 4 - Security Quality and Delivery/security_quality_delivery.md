# MARKETING — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security/privacy
Least privilege; tenant/company/brand scopes; restricted audience and export fields; encryption; MFA/step-up for launch, bulk export, protected offers, and integrations; consent/purpose enforcement; frequency caps; approved support access; safe logs.

## Audit/recovery
Audit audience rules/counts, content versions, approvals, budget/offer references, launch/pause, delivery handoff, consent/suppression, exports, and settings. Restore preserves launched versions, consent snapshots, suppression, attribution lineage, and audit continuity.

## Targets
99.9% monthly management availability; p95 reads ≤2s; campaign validation status ≤5s; RPO ≤15m; RTO ≤4h; WCAG 2.2 AA; zero accepted send request without valid consent/purpose; no duplicate launch under retries.

## Reports
Campaign performance, reach, delivery, conversion, attribution, cost/budget, audience growth, consent/suppression, frequency, experiment, channel health, approval turnaround, and audit.

## Risks
Consent violation, discriminatory targeting, duplicate sends, budget overrun, misleading content, sensitive-data export, attribution error, and provider outage require policy validation, human approval, idempotency, rate/frequency control, monitoring, reconciliation, and kill switches.

## Tests/status
Permission/field matrix, consent/suppression, audience rules, approval, version lock, idempotency, provider failure, attribution, export, accessibility, performance, backup/restore, and tenant isolation. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; coding separately gated; tests not run; deployment not performed.