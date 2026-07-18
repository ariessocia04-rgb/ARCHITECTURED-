# IT OPERATIONS APPLICATION — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Purpose

Define canonical entities, relationships, ownership, lifecycles, APIs, events, automation, integrations, observability, and migration requirements for tenant IT operations.

## Domain map

```text
SERVICE MANAGEMENT
├── IT Service
├── Service Offering
├── Service Request
├── Request Task
├── Incident
├── Incident Task
├── Problem
├── Known Error
├── Workaround
├── Change Request
├── Change Task
├── Maintenance Window
└── Post-Incident / Post-Change Review

CONFIGURATION AND ASSETS
├── Configuration Item
├── Asset
├── Workstation
├── Mobile/Endpoint Device
├── Printer / Peripheral reference
├── Print Agent reference
├── Software Installation
├── License reference
├── Certificate reference
├── Baseline
├── Relationship / Dependency
├── Maintenance Record
└── Disposal Record

OPERATIONS
├── Monitored Service
├── Monitor
├── Alert
├── Health Snapshot
├── On-Call Schedule
├── Escalation Policy
├── Runbook
├── Runbook Execution
├── Knowledge Article
├── Vendor
├── Vendor Support Case
├── Platform Support Access Request
├── Diagnostic Bundle
└── Operational Communication

ACCESS AND GOVERNANCE
├── Access Request
├── Access Fulfilment Task
├── Approval Request
├── IT Policy Version
├── Risk Assessment
├── Exception
├── Evidence Record
└── Audit Event
```

Printer, print agent, print job, compatibility, and print policy detail remains canonical in `SaaS Platform/Printing and Peripheral Operations/` and is linked by references rather than copied.

## Ownership

- Every tenant IT record contains `tenant_id`.
- Branch-specific tickets/assets/printers contain `branch_id`.
- Platform-owned incidents/services are not editable by tenant IT; tenant users receive approved status and support references.
- IT users see only minimum business-record references needed for diagnostics.
- Vendor users see only explicitly assigned cases/assets/tasks.
- Security incidents/evidence use additional field-level restrictions.

## Core entity specifications

### ITService

```text
it_service_id
tenant_id or platform_scope
service_code
name
description
service_owner_id
business_owner_id
criticality
support_hours
status
health_model_id
dependencies
version
```

Examples:

- Authentication;
- Technician Application;
- Front Desk Application;
- Customer Portal;
- Payments;
- Printing and Document Delivery;
- Email/SMS Notifications;
- Inventory Integration;
- File Storage;
- Reporting;
- Tenant Integration <name>.

### ServiceRequest

```text
service_request_id
tenant_id
branch_id
requester_id
requested_for_id
service_id
category
summary
description_safe
impact
urgency
priority
status
assigned_team_id
assigned_user_id
approval_state
related_application
related_record_reference_safe
related_asset_id
knowledge_suggestions
submitted_at
target_dates
resolved_at
closed_at
```

### Incident

```text
incident_id
tenant_id
branch_scope
incident_number
source
service_id
summary
business_impact
technical_summary_restricted
severity
priority
status
incident_commander_id
assigned_team_id
started_at
detected_at
acknowledged_at
mitigated_at
resolved_at
closed_at
next_update_at
workaround_id
problem_id
change_id
platform_incident_reference
vendor_case_reference
```

### Problem

```text
problem_id
tenant_id
service_id
summary
symptoms
root_cause_restricted
status
known_error_id
workaround_id
owner_id
linked_incidents
permanent_fix_change_id
review_dates
```

### ChangeRequest

```text
change_id
tenant_id
change_number
change_type
summary
reason
requester_id
owner_id
risk_level
impact
configuration_items
services
branches
implementation_plan
validation_plan
rollback_plan
scheduled_start
scheduled_end
status
approval_state
implemented_at
result
post_review_id
```

### ConfigurationItem

```text
configuration_item_id
tenant_id
branch_id
ci_type
name
business_owner_id
technical_owner_id
asset_id
service_id
status
criticality
baseline_version
configuration_summary
classification
last_verified_at
```

### Asset

```text
asset_id
tenant_id
branch_id
asset_type
asset_tag
manufacturer
model
serial_masked
location
assigned_user_id
assigned_workstation_id
status
purchase_date
warranty_end
vendor_id
hardware_version
os_or_firmware_version
compliance_state
last_seen_at
retired_at
disposal_evidence_id
```

### Alert

```text
alert_id
tenant_id
branch_scope
monitor_id
service_id
source
fingerprint
severity
status
summary
first_seen_at
last_seen_at
occurrence_count
assigned_team_id
incident_id
maintenance_suppression_id
raw_payload_reference_restricted
```

### KnowledgeArticle

```text
knowledge_article_id
tenant_id
article_type
title
audience
services
categories
content_version_id
status
owner_id
reviewer_id
published_at
review_due_at
retired_at
```

### Runbook

```text
runbook_id
tenant_id
service_id
title
purpose
risk_class
required_role
required_approval
input_schema
steps_version_id
automation_reference optional
rollback_steps
evidence_requirements
status
```

## Relationship foundation

```text
IT Service
├── Monitors → Alerts → Incidents
├── Service Requests
├── Problems → Known Errors / Workarounds
├── Changes → Maintenance / Releases
├── Configuration Items / Assets
├── Knowledge / Runbooks
├── Vendors / Platform Support
└── Reports / Audit

Incident
├── affected services/branches/users
├── alerts
├── assets/printers/integrations
├── tasks
├── communications
├── vendor/platform cases
├── workaround
├── problem
└── corrective changes
```

## Dependency graph

Configuration item relationships:

```text
DEPENDS_ON
HOSTED_ON
CONNECTS_TO
PRINTS_THROUGH
AUTHENTICATES_WITH
SENDS_TO
RECEIVES_FROM
MONITORED_BY
BACKED_UP_BY
SUPPORTED_BY
LOCATED_AT
ASSIGNED_TO
REPLACED_BY
```

Graph traversal is permission-filtered and bounded.

## APIs and commands

### Service desk

- `CreateITSupportRequest`
- `TriageServiceRequest`
- `AssignServiceRequest`
- `FulfilServiceRequestTask`
- `ResolveServiceRequest`
- `ValidateAndCloseServiceRequest`
- `ReopenServiceRequest`

### Incident/problem

- `CreateIncident`
- `AcknowledgeIncident`
- `SetIncidentCommander`
- `UpdateIncidentImpact`
- `PublishIncidentUpdate`
- `ApplyIncidentWorkaround`
- `ResolveIncident`
- `CompleteIncidentReview`
- `CreateProblemFromIncidents`
- `PublishKnownError`
- `VerifyPermanentFix`

### Change/release

- `CreateChangeRequest`
- `AssessChangeRisk`
- `ApproveChange`
- `ScheduleChange`
- `StartChangeImplementation`
- `RecordChangeValidation`
- `RollbackChange`
- `CompleteChangeReview`

### Assets/operations

- `RegisterAsset`
- `AssignAsset`
- `UpdateAssetBaseline`
- `StartAssetMaintenance`
- `RetireAsset`
- `RecordAssetDisposal`
- `AcknowledgeAlert`
- `LinkAlertToIncident`
- `SuppressAlertForMaintenance`
- `ExecuteRunbook`
- `PublishKnowledgeArticle`
- `RequestPlatformSupportAccess`
- `CreateVendorSupportCase`

### Printing references

Use commands from the Printing package for agents/printers/jobs. IT Operations adds service-management links, not competing print commands.

## Query examples

- `ListMyITRequests`
- `GetBranchServiceHealth`
- `ListIncidentQueue`
- `GetMajorIncidentWorkspace`
- `ListChangeCalendar`
- `GetConfigurationItemDependencies`
- `ListAssets`
- `ListITPrinterFleet`
- `ListIntegrationHealth`
- `ListAlerts`
- `SearchKnowledge`
- `GetOwnerITDashboard`
- `GetITAuditTimeline`

Queries enforce tenant, branch, role, record, field, and customer/business context.

## Events

```text
ITSupportRequestSubmitted
ITSupportRequestTriaged
ITSupportRequestAssigned
ITSupportRequestResolved
IncidentCreated
IncidentAcknowledged
IncidentEscalated
IncidentMitigated
IncidentResolved
IncidentReviewCompleted
ProblemCreated
KnownErrorPublished
ChangeRequested
ChangeApproved
ChangeScheduled
ChangeStarted
ChangeCompleted
ChangeRolledBack
AssetRegistered
AssetAssigned
AssetMaintenanceStarted
AssetRetired
AlertRaised
AlertAcknowledged
AlertLinkedToIncident
KnowledgeArticlePublished
RunbookStarted
RunbookCompleted
RunbookFailed
VendorSupportCaseCreated
PlatformSupportAccessRequested
PlatformSupportAccessGranted
PlatformSupportAccessRevoked
```

Printer events are consumed from the Printing package to create/update incidents, alerts, and assets.

## Realtime topics

```text
user/{user_id}/it-requests
tenant/{tenant_id}/it-service-health
tenant/{tenant_id}/incidents
tenant/{tenant_id}/changes
branch/{branch_id}/it-status
team/{team_id}/it-queue
incident/{incident_id}/updates
change/{change_id}/updates
asset/{asset_id}/health
```

## Monitoring ingestion

Telemetry sources:

- application metrics/logs/traces/events;
- provider and integration health;
- print agent/printer status;
- background jobs/queues;
- authentication/security signals;
- backup/restore evidence;
- synthetic workflow checks;
- staff support reports.

Ingestion pipeline:

```text
Source telemetry
→ authentication/validation
→ normalization
→ tenant/service/configuration-item mapping
→ deduplication/correlation
→ health evaluation
→ alert
→ routing/runbook/incident
→ audit and metrics
```

## Automation and runbooks

Runbook execution records:

```text
execution_id
runbook_id and version
requester
approver
inputs_safe
scope
started_at
steps and results
changes made
artifacts/evidence
rollback status
completed_at
```

Automations cannot bypass domain commands. Direct database mutation is prohibited.

## External integrations

Potential adapters:

- identity provider/SSO;
- email/SMS/chat notification;
- monitoring/APM/log platform;
- device/endpoint management;
- managed print provider;
- vendor support APIs/email;
- calendar/change calendar;
- status page;
- issue/project tracker;
- backup provider;
- security alert provider;
- platform support tooling.

Every adapter defines authentication, mappings, retries, idempotency, rate limits, reconciliation, disable/offboarding, and incident behavior.

## Data classification

### Internal

- ordinary category/status/assignment metadata.

### Confidential

- user/contact, branch operations, asset details, business impact, vendor contracts.

### Restricted

- secrets references;
- identity/security evidence;
- raw logs/diagnostics;
- vulnerability details;
- support-access evidence;
- customer/device/financial context included for diagnostics;
- private keys/tokens/passwords, which are never stored as ordinary IT records.

## Retention

- service requests: tenant support-history policy;
- incidents/problems/changes: operational, contractual, security, and audit policy;
- security incidents: security/legal policy;
- assets/disposal: asset/accounting/security policy;
- alerts/raw telemetry: bounded operational retention;
- knowledge/runbooks: version history and archive;
- diagnostics: short, restricted retention;
- platform support sessions: audit/security retention;
- printer/financial links: inherit relevant source-record retention.

## Migration order

```text
1. IT teams/roles/permissions
2. IT services/service catalog
3. configuration items/assets/dependencies
4. service requests/tasks
5. incidents/tasks/communications
6. problems/known errors/workarounds
7. changes/tasks/approvals/maintenance
8. monitors/alerts/health
9. knowledge/runbooks/executions
10. vendors/support cases/access grants
11. reporting/audit projections
12. printing/integration reference links
```

## Acceptance criteria

- No cross-tenant or unauthorized branch relation.
- Platform and tenant records remain distinguishable.
- Technical diagnostics do not copy unrestricted business data.
- Events and automations are idempotent and auditable.
- Incident/change/assets/printers/integrations share references and dependency context.
- Physical schemas and API/event schemas must be locked before coding.
