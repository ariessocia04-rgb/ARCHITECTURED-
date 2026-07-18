# CRM — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
Lead, LeadSource, Qualification, Opportunity, PipelineStage, AccountReference, ContactReference, Interaction, Activity, Task, FollowUp, Proposal, Contract, Segment, SegmentMembership, LoyaltyAccount, LoyaltyTransaction, Consent, CommunicationPreference, AccountOwner, Renewal, ComplaintHandoff.

## Ownership/rules
Verified identity stays in Customers. CRM records immutable source and conversion history. Tenant/company/branch scope, owner, stage, probability, value/currency, consent purpose, effective dates, duplicate score, version, and audit are required. No cross-tenant profiling or unapproved sensitive segmentation.

## APIs
Capture/import lead; qualify/disqualify; assign; create/update opportunity; change stage; add interaction/task; prepare/send/revise proposal; approve/sign contract; request/link customer; manage segment/loyalty/consent; schedule follow-up; close/reopen; search/report/export.

## Events
`lead.created`, `lead.qualified`, `lead.disqualified`, `lead.conversion_requested`, `lead.converted`, `opportunity.stage_changed`, `proposal.sent`, `opportunity.won`, `opportunity.lost`, `contract.signed`, `followup.due`, `consent.changed`, `renewal.due`.

## Integrations
Customers/Business Accounts, Quotations, Repairs/Warranty, Marketing, Notifications, Files/Signatures, Finance credit read model, BI, Public API. Versioned adapters, outbox/inbox, idempotency, reconciliation, no direct private-table writes.

## Import/export/sync
Preview, mapping, duplicate detection, consent validation, row errors, resumable batches, rollback, field-scoped export, audit, and rate limits. Mobile activity/offline notes use device/version conflict control.

## Migration
Preserve external IDs, source attribution, consent evidence, account ownership, and interaction dates; rehearse deduplication and controlled customer linking.