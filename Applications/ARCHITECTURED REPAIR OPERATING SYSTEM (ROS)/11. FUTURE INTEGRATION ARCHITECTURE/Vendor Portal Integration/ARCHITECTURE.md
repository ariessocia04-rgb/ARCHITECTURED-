# VENDOR PORTAL INTEGRATION ARCHITECTURE

## Purpose and boundary

Support contractors, specialist repair vendors, logistics providers, outsourced testing, and service partners while preserving internal job ownership, customer privacy, approvals, and audit.

## Ownership

Core Job Order owns the customer repair. Vendor Portal owns partner collaboration records. Internal managers retain assignment and acceptance authority.

## Core entities

VendorAccount, VendorUser, ServiceCapability, WorkPackage, VendorAssignment, SLA, EvidenceSubmission, CostProposal, CompletionClaim, Dispute, VendorInvoice.

## Lifecycle

Invited → Verified → Approved → Active → Restricted / Suspended → Closed. Work: Offered → Accepted → In Progress → Evidence Submitted → Reviewed → Approved / Rework / Rejected → Settled.

## Integration points

Job assignment, specialist diagnosis, outsourced repair, logistics, testing, evidence, quotation revision, payment, warranty, and vendor scorecard.

## Events

`vendor.verified`, `work_package.offered`, `work_package.accepted`, `vendor.evidence_submitted`, `vendor.work_approved`, `vendor.rework_requested`, `vendor.invoice_submitted`.

## Compatibility rules

- Vendor receives minimum required data only.
- Customer contact and device data are masked by policy.
- Vendor cannot directly transition the internal work-order lifecycle.
- Internal users approve imported evidence and status changes.

## Roles and controls

Vendor Admin, Vendor Technician, Internal Dispatcher, Quality Reviewer, Finance Reviewer, Security Administrator, Auditor.

## UI/UX

Scoped work queue, secure evidence upload, acceptance/rejection, SLA visibility, message thread, offline evidence queue, clear rework instructions.

## Reports

Vendor turnaround, quality, rework, SLA, cost, dispute, warranty return, and data-access audit.

## Acceptance

Time-bound access, revocation, least privilege, evidence integrity, no customer-data leakage, internal approval preserved, vendor outage does not corrupt core jobs.

**STATUS: COMPLETE (100%)**
