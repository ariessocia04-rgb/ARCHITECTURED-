# IT OPERATIONS APPLICATION — SCREEN TRACEABILITY MATRIX

## Purpose

Map every IT Operations screen to users, permissions, entities, commands, events, wireflows, and tests.

| Screen | Actors | Authority | Entities | Commands/queries | Events | Flow | Tests |
|---|---|---|---|---|---|---|---|
| IT-01 Staff Get Help | all staff | create own support request | ServiceRequest, Knowledge, AssetRef | GetContextHelp, CreateITSupportRequest | ITSupportRequestSubmitted | 1 | context minimization, business-success message, accessibility |
| IT-02 My Requests/Status | staff | own requests/branch notices | ServiceRequest, IncidentUpdate | ListMyITRequests, GetRelevantServiceStatus | IncidentUpdatePublished | 1,2,5 | privacy, status language, mobile |
| IT-03 IT Dashboard | IT/owner/manager | scoped operations view | ServiceHealth, Queue, Metrics | GetITDashboard, GetOwnerITDashboard | AlertRaised | 3,18 | role variations, aggregation, branch/field scope |
| IT-04 Service Desk Queue | analysts/managers | assigned/team queue | ServiceRequest, Task | ListServiceDeskQueue, AssignServiceRequest | ITSupportRequestAssigned | 2 | prioritization, filters, concurrency |
| IT-05 Request Workspace | analyst/requester/approver | record scope | ServiceRequest, Tasks, Approvals | Triage, Fulfil, Resolve, Close, Reopen | ITSupportRequestResolved | 2 | lifecycle, user validation, SoD |
| IT-06 Incident Queue | responders/managers | incident scope | Incident, Alert | ListIncidentQueue, AcknowledgeIncident | IncidentAcknowledged | 3,4 | severity, duplicate/correlation, branch scope |
| IT-07 Major Incident Command | incident team/owner | major-incident role | Incident, Tasks, Communications, CI | SetCommander, UpdateImpact, ResolveIncident | IncidentEscalated, IncidentMitigated | 4 | parallel updates, next-update gate, evidence/audit |
| IT-08 Update Composer | incident commander/comms | publish by audience | IncidentUpdate | PublishIncidentUpdate | IncidentUpdatePublished | 5 | factual status, audience masking, delivery |
| IT-09 Problem Workspace | problem manager/specialists | problem manage | Problem, KnownError, Workaround | CreateProblem, PublishKnownError, VerifyPermanentFix | KnownErrorPublished | 6 | incident links, root-cause restriction, recurrence |
| IT-10 Change Calendar | IT/owner/branch manager | scoped change view | Change, MaintenanceWindow | ListChangeCalendar | ChangeScheduled | 7,8 | conflict detection, time zone, branch impact |
| IT-11 Change Workspace | change roles/approvers | change create/approve/execute | Change, Risk, Tasks, Approval | CreateChange, Approve, Start, Validate, Rollback | ChangeApproved, ChangeCompleted | 7,8 | risk/approval/rollback, stale state, emergency review |
| IT-12 Asset Inventory | endpoint/admin/auditor | asset view/manage | Asset, CI, Baseline | ListAssets, RegisterAsset | AssetRegistered | 9 | tenant/branch, lifecycle, large data |
| IT-13 Asset/CI Detail | IT roles | asset/CI scope | Asset, CI, Relationships | GetAsset, UpdateBaseline, RetireAsset | AssetRetired | 9 | dependency graph, field masking, disposal evidence |
| IT-14 Printers/Peripherals | printer admin/owner | canonical print permissions | Printer refs, PrintAgent refs | canonical Printing queries/commands | PrinterOfflineDetected | 10 | trace to print package, no duplicate logic |
| IT-15 Access Request | staff/manager/IT/owner | request/approve/fulfil | AccessRequest, Approval | CreateAccessRequest, FulfilAccess | AccessGranted/Revoked | 11 | policy, SoD, expiry, no secrets |
| IT-16 Integration Health | integration admin/finance/owner | integration scope | Integration, Queue, Finding | GetIntegrationHealth, Retry/Reconcile | IntegrationHealthChanged | 12 | provider outage, secrets masking, financial impact |
| IT-17 Alert Center | on-call/responders | alert scope | Alert, Monitor, Service | Acknowledge, LinkToIncident, Suppress | AlertAcknowledged | 3 | dedup/group/suppress, maintenance, noise |
| IT-18 Release/Maintenance | release/change roles/staff viewer | release/manage or notice | Release, Change, Maintenance | ScheduleRelease, PublishMaintenanceNotice | ReleaseStarted/Completed | 7 | staged rollout, communication, rollback |
| IT-19 Backup/Restore | owner/IT/platform support | restore request/approval | BackupEvidence, RestoreRequest | RequestRestore, ValidateRestore | RestoreRequested/Completed | 16 | authority, point/scope, reconciliation |
| IT-20 Knowledge/Runbooks | all by audience | search/view/manage | Knowledge, Runbook | SearchKnowledge, PublishKnowledge | KnowledgeArticlePublished | 17 | audience/privacy, review version, search |
| IT-21 Runbook Execution | authorized IT | execute approved runbook | RunbookExecution | ExecuteRunbook, Abort, Rollback | RunbookStarted/Completed/Failed | 13 | inputs, approval, pause, rollback, audit |
| IT-22 Vendor/Platform Support | IT/owner/platform support | case/access scope | VendorCase, SupportGrant, Diagnostics | CreateVendorCase, RequestPlatformSupportAccess | PlatformSupportAccessGranted | 14,15 | limited access, expiry, evidence redaction |
| IT-23 Owner Governance | owner/executives | business-impact oversight | Metrics, Risks, Approvals | GetOwnerITDashboard, DecideApproval | OwnerITDecisionRecorded | 18 | business language, drilldown scope, approvals |
| IT-24 Reports/Audit | IT manager/owner/auditor | scoped reporting | Reports, AuditEvent | GenerateITReport, ExportITAudit | ITReportGenerated | all | filtering, export scope, immutable audit |
| IT-25 Policies/Configuration | owner/IT/security/finance | policy draft/publish | ITPolicyVersion | ValidateITPolicy, PublishITPolicy | ITPolicyChanged | 7,18 | impact preview, approval, rollback |
| IT-26 On-call/Profile | IT users/managers | own/team schedule | OnCallSchedule, Profile | UpdateOnCall, DelegateBackup | OnCallChanged | 3,4 | availability, escalation, privacy |

## Cross-department references

Every support/incident/change record may reference:

- department/workstream;
- application/module;
- business process instance;
- shared case/task;
- customer/job/invoice/asset through safe typed reference;
- branch/company;
- affected role;
- owner and next action.

It does not copy the full business record.

## State coverage

Every screen covers:

- loading;
- empty;
- permission denied;
- offline/degraded;
- stale/concurrent update;
- approval pending/rejected;
- dependency/vendor/platform waiting;
- failure with preserved valid input/evidence;
- success with next action;
- archived/read-only state.

## Traceability gate

Coding is blocked when any screen lacks actor, permission, entity, command/query, event, flow, failure/recovery, or test mapping.
