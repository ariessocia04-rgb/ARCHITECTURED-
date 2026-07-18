# VENDOR PORTAL — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security
External identity isolation, MFA/step-up, invitation expiry, time-bound assignment access, vendor/record/field scopes, encrypted evidence, malware scanning, signed webhooks, API key rotation, rate limits, secure downloads, bank-change verification, and approved support access.

## Audit/recovery
Audit invitations, user/access, assignment view/action, estimate, status, evidence, parts custody, completion, quality/rework, invoice, incident, export/download, API credential, and admin action. Restore verifies isolation, assignment scope, evidence integrity, financial references, and audit continuity.

## Targets
99.9% monthly portal availability; p95 reads ≤2s; protected submissions ≤3s excluding upload/provider; RPO ≤15m; RTO ≤4h; WCAG 2.2 AA; zero accepted cross-vendor exposure, unauthorized internal-field access, or duplicate invoice/completion command.

## Reports
Assignment response, capacity, SLA, completion time, quality/rework, evidence completeness, parts discrepancy, shipment, invoice acceptance, incidents, vendor score, access, integration health, and audit.

## Risks
Account takeover, customer-data leakage, evidence tampering, false completion, parts loss, invoice fraud, webhook spoofing, and excessive access require MFA, minimum sharing, signed evidence, maker-checker, idempotency, quality gate, reconciliation, monitoring, suspension, and kill switch.

## Tests/status
External permissions/fields, time-bound access, file scanning, assignment lifecycle, status handoff, evidence integrity, custody, duplicate/retry, webhook signatures, invoice, accessibility, performance, backup/restore, and isolation. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; code/tests/deployment separately gated.