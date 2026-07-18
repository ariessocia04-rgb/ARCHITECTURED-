# VENDOR PORTAL — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
Vendor dashboard; organization/users/compliance; assignment inbox; work detail; accept/reject; estimate; milestone/status update; evidence upload; parts/custody; shipment; completion submission; quality/rework; invoice/documents; incident; messages; SLA/scorecard; settings/integrations/audit.

## Lifecycles
Vendor: Invited → Verified → Active → Suspended / Archived.
Assignment: Offered → Accepted / Rejected → In Progress → Awaiting Evidence / Parts / Clarification → Completion Submitted → Quality Review → Accepted / Rework / Cancelled → Closed.
Invoice: Draft → Submitted → Validation → Accepted / Disputed / Rejected → Payment Status.

## Workflow
Internal approved assignment → vendor notification → accept/reject → secure shared scope → estimate/approval if required → perform milestones → upload evidence → submit completion → internal quality review → rework or acceptance → financial handoff. Internal job status changes only through authorized handoff mapping.

## Exceptions
Expired access, unavailable capacity, estimate mismatch, missing evidence, prohibited customer data, parts discrepancy, shipment loss, SLA breach, failed quality, duplicate invoice, incident, or integration outage route to explicit queues.

## UI/UX
External plain language, visible shared scope and prohibited data, deadlines/SLA, mobile evidence capture, resumable uploads, review before submit, accessible controls, customer-data masking, loading/empty/error/permission/offline/degraded states.

## Wireframes/wireflows
Dashboard, assignment, estimate, evidence, milestone, parts custody, shipment, completion, quality/rework, invoice, incident, messages, scorecard, audit, and recovery. Prototype covers assignment acceptance, estimate revision, evidence failure, rework, and invoice dispute.