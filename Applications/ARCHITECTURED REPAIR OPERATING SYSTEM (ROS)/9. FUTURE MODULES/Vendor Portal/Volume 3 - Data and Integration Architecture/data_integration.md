# VENDOR PORTAL — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
VendorPortalAccount, VendorUser, Invitation, VerificationCase, ComplianceDocument, VendorCapability, CapacityWindow, AssignmentReference, AssignmentOffer, Acceptance, VendorEstimate, Milestone, StatusSubmission, EvidenceReference, PartCustody, ShipmentReference, CompletionSubmission, QualityResultReference, ReworkRequest, VendorInvoiceSubmission, Incident, MessageThread, SLAResult, PerformanceSnapshot.

## Rules
Every shared record has tenant/vendor/assignment scope and a field-sharing contract. Vendor status submissions are proposals until accepted by the owning module. Evidence is immutable/versioned. Parts custody and shipment references use authoritative warehouse movements. No direct customer, repair, finance, or inventory table writes.

## APIs
Accept invite; manage users/compliance/capabilities; receive/accept/reject assignment; submit/revise estimate; update milestone; upload evidence; acknowledge parts; submit shipment/completion/invoice; respond to rework; open incident; message; query SLA/scorecard; manage approved webhooks/API credentials.

## Events
`vendor.invited`, `vendor.verified`, `assignment.offered`, `assignment.accepted`, `assignment.rejected`, `vendor.estimate_submitted`, `vendor.milestone_updated`, `vendor.completion_submitted`, `quality.rework_requested`, `vendor.invoice_submitted`, `vendor.incident_opened`, `vendor.sla_breached`.

## Integrations
Dispatch/Jobs, Repairs, Parts/Warehouse, Quality/Warranty, Finance/Accounting, Files/Media, Notifications, Public API. Versioned adapters, signed webhook/API requests, idempotency, outbox/inbox, retries, quarantine, reconciliation.

## Data protection
Share minimum required fields; mask customer identity/contact unless operationally necessary and approved; classify evidence; scan files; expire access after assignment; audit downloads/exports.

## Migration
Preserve vendor IDs, capabilities, compliance, active assignments, custody, evidence, SLA, and invoices; rehearse mapping and rollback.