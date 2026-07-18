# SUPPLIER PORTAL — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
Portal dashboard; organization/profile; users/access; compliance; catalog/items; RFQ inbox; quotation wizard; PO list/detail; acknowledgement/change request; shipment/ASN; receiving status; invoices/documents; return/dispute; messages; scorecard; integrations/settings/audit.

## Lifecycles
Onboarding: Invited → Registered → Verification → Approved / Rejected → Active → Suspended / Archived.
RFQ: Received → Draft Response → Submitted → Clarification → Awarded / Lost / Closed.
PO: Issued → Acknowledged / Change Requested → Confirmed → Partially/Fully Shipped → Received → Closed / Cancelled.
Invoice: Draft → Submitted → Validation → Accepted / Disputed / Rejected → Payment Status.

## Workflow
Invite → identity and supplier verification → compliance approval → scoped activation. RFQ response and PO acknowledgement preserve versions and deadlines. Shipment notice references confirmed PO lines. Invoice submission references receipt/PO and never marks payment itself.

## Exceptions
Expired invitation, duplicate supplier, invalid catalog, missing compliance, quotation expiry, PO mismatch, partial shipment, receiving discrepancy, invoice duplicate, bank-detail change, file scan failure, or integration outage enter guided exception queues.

## UI/UX
External-user plain language, tenant branding, visible deadlines and status, secure document upload, review before submit, accessible tables/forms, responsive mobile shipment flow, loading/empty/error/permission/degraded states, and no exposure of internal costs, competing bids, or private notes.

## Wireframes/wireflows
Dashboard, registration, compliance, catalog, RFQ, quotation, PO, shipment, invoice, return/dispute, messages, scorecard, audit, and recovery. Prototype covers onboarding, RFQ response, PO change request, partial shipment, receiving discrepancy, and invoice dispute.