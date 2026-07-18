# SUPPLIER PORTAL — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security
External identity isolation, MFA/step-up, invitation expiry, delegated-user controls, tenant/supplier/record/field scopes, encrypted documents, malware scanning, signed webhooks, API key rotation, bank-change verification, rate limits, and approved support access.

## Audit/recovery
Audit invitations, access, profile/bank/compliance change, quotation, PO acknowledgement, shipment, invoice, dispute, message, export, API credential, and admin action. Restore validates supplier isolation, canonical references, open transaction states, documents, and audit continuity.

## Targets
99.9% monthly portal availability; p95 reads ≤2s; protected submits ≤3s excluding file/provider work; RPO ≤15m; RTO ≤4h; WCAG 2.2 AA; zero accepted cross-supplier exposure, duplicate invoice, or unauthorized bank change.

## Reports
Onboarding/compliance, quotation response, PO acknowledgement, shipment timeliness, receipt discrepancy, invoice acceptance, returns/disputes, document expiry, supplier performance, portal usage, integration health, and audit.

## Risks
Account takeover, cross-supplier leakage, malicious upload, bank fraud, duplicate invoice, catalog tampering, PO mismatch, webhook spoofing, and internal-data exposure require least privilege, MFA, maker-checker, scanning, signatures, idempotency, reconciliation, monitoring, and suspension controls.

## Tests/status
External permission/field matrix, invite/MFA, organization isolation, file scanning, quotation/PO/shipment/invoice lifecycle, duplicate/retry, webhook signature, export, accessibility, performance, backup/restore, and disaster recovery. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; code/tests/deployment separately gated.