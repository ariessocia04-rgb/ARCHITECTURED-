# MARKETING — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
Campaign, CampaignVersion, Objective, BudgetReference, AudienceDefinition, AudienceSnapshot, SegmentReference, ContentTemplate, ContentVersion, AssetReference, OfferRequest, ChannelPlan, Schedule, Approval, Suppression, ConsentReference, Experiment, Variant, DeliveryAggregate, Attribution, ConversionEvent.

## Rules
Audience snapshots are tenant-scoped and versioned; consent/suppression is evaluated at send time; protected attributes are prohibited unless explicitly approved; budgets/offers use authoritative Finance/Pricing references; launched versions are immutable; deduplication and frequency caps are enforced.

## APIs
Create/version campaign; define/preview audience; validate eligibility; manage content/assets; request/approve budget/offer; schedule/launch/pause/cancel; create experiment; receive aggregate delivery/conversion; manage suppression; search/report/export.

## Events
`campaign.created`, `campaign.submitted`, `campaign.approved`, `campaign.scheduled`, `campaign.launched`, `campaign.paused`, `campaign.completed`, `audience.snapshot_created`, `consent.changed`, `delivery.aggregate_updated`, `conversion.recorded`.

## Integrations
CRM and Customers supply permitted references; Notification Engine delivers; Finance/Pricing validate budgets/offers; Files/Media scans assets; BI consumes governed aggregates; Public API exposes approved endpoints. No direct private-table writes.

## Privacy/data movement
Minimize audience data, use pseudonymous delivery references where possible, field-scope exports, retention by purpose, consent evidence, deletion/objection propagation, and privacy-safe analytics.

## Migration/compatibility
Versioned templates/audiences/events, provider adapters, outbox/inbox, idempotent launch/delivery requests, replay protection, reconciliation, migration rehearsal, and rollback.