# CRM INTEGRATION ARCHITECTURE

## Purpose and boundary

Add leads, opportunities, campaigns, customer segments, contracts, loyalty, follow-ups, and account management without changing canonical customer, device, service-request, quotation, or repair records.

## Ownership

CRM owns prospecting and relationship activity. Core Customers owns verified customer identity. Repair modules own service operations.

## Core entities

Lead, Opportunity, Campaign, Segment, Interaction, FollowUp, Contract, LoyaltyAccount, Consent, CommunicationPreference, AccountOwner.

## Lifecycle

Lead → Qualified → Opportunity → Proposal → Won / Lost → Customer Relationship → Renewal / Dormant.

## Integration points

Customer registration, quotation outcome, repair completion, warranty, feedback, service reminders, abandoned approval, business accounts, and marketing consent.

## Events

`lead.created`, `lead.converted`, `customer.verified`, `quotation.sent`, `quotation.approved`, `repair.completed`, `feedback.received`, `consent.changed`, `followup.due`.

## Compatibility rules

- CRM cannot overwrite verified customer identity without Customer module validation.
- Marketing consent is explicit and purpose-scoped.
- Core operations continue when CRM is disabled.
- Duplicate detection uses tenant-scoped matching and human review.

## Roles and controls

Sales, Customer Service, Marketing, Account Manager, Tenant Owner, Privacy Officer, Auditor.

## UI/UX

Customer timeline separates marketing from repair history, clear consent controls, follow-up queue, duplicate resolution, simple conversion to customer or service request.

## Reports

Lead conversion, campaign response, repeat repair, customer lifetime value inputs, churn risk, follow-up completion, consent status.

## Acceptance

Consent enforcement, no cross-tenant profiling, no duplicate customer creation, immutable conversion trace, core workflow unaffected by CRM outage.

**STATUS: COMPLETE (100%)**
