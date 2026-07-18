# RELEASE 1 MVP — HIGH-FIDELITY SCREEN DELIVERY MATRIX

## Rules

- Every screen has one stable Release 1 ID.
- A route may reuse the same responsive screen; desktop/mobile are variants, not competing architecture.
- `H` means high-fidelity screen required before implementation of that feature.
- `P` means the screen must appear in the clickable critical-path prototype.
- Every screen includes assigned role, source wireflow, viewport, states, permissions, and acceptance notes in the design handoff.

## Shared and authentication screens

| ID | Screen | Primary users | Required viewport | H | P |
|---|---|---|---|---|---|
| R1-SH-01 | Sign in | all | desktop/mobile | Yes | Yes |
| R1-SH-02 | Invitation and account activation | staff | desktop/mobile | Yes | No |
| R1-SH-03 | Recovery/MFA/session verification | all | desktop/mobile | Yes | No |
| R1-SH-04 | Role landing and branch context | staff | desktop/tablet | Yes | Yes |
| R1-SH-05 | Global notifications | staff | desktop/mobile | Yes | No |
| R1-SH-06 | My Cross-Department Work | staff/manager | desktop/tablet/mobile | Yes | Yes |
| R1-SH-07 | Global search results | authorized staff | desktop/tablet | Yes | No |
| R1-SH-08 | Permission/entitlement/usage blocked | all | desktop/mobile | Yes | No |
| R1-SH-09 | Offline/stale/conflict recovery | staff | desktop/tablet/mobile | Yes | Yes |
| R1-SH-10 | Contextual Get Help | staff | desktop/mobile | Yes | Yes |

## Owner and administration

| ID | Screen | Primary users | Required viewport | H | P |
|---|---|---|---|---|---|
| R1-OW-01 | Owner pilot dashboard | Owner/Manager | wide/standard desktop | Yes | Yes |
| R1-OW-02 | Company/branch/workstation/warehouse setup | Owner/Admin | desktop/tablet | Yes | No |
| R1-OW-03 | Users, roles, scopes, and approvals | Owner/Admin | wide desktop | Yes | No |
| R1-OW-04 | Service/workflow/basic policy configuration | Owner/Admin | desktop | Yes | No |
| R1-OW-05 | Subscription, trial, usage, and limits | Owner | desktop/mobile summary | Yes | No |
| R1-OW-06 | Operations/queue/department oversight | Owner/Manager | wide desktop | Yes | Yes |
| R1-OW-07 | Finance/inventory/quality basic reports | Owner/Manager | desktop | Yes | No |
| R1-OW-08 | IT/printer health and incidents | Owner/IT | desktop | Yes | Yes |
| R1-OW-09 | Audit/security/support-access review | Owner/Auditor | desktop | Yes | No |

## Front Desk, dispatch, finance, and release

| ID | Screen | Primary users | Required viewport | H | P |
|---|---|---|---|---|---|
| R1-FD-01 | Front Desk dashboard and queue | Front Desk/Dispatcher | desktop | Yes | Yes |
| R1-FD-02 | Customer search/create | Front Desk | desktop/tablet | Yes | Yes |
| R1-FD-03 | Device search/register | Front Desk | desktop/tablet | Yes | Yes |
| R1-FD-04 | Device intake guided form | Front Desk/Customer | desktop/tablet | Yes | Yes |
| R1-FD-05 | Intake review, consent, signature | Front Desk/Customer | tablet/desktop | Yes | Yes |
| R1-FD-06 | Job order confirmation and document delivery | Front Desk | desktop | Yes | Yes |
| R1-FD-07 | Queue qualification/dispatch | Dispatcher/Manager | desktop | Yes | Yes |
| R1-FD-08 | Quotation communication/approval status | Front Desk | desktop/mobile summary | Yes | Yes |
| R1-FD-09 | Payment recording and review | Cashier/Finance | desktop | Yes | Yes |
| R1-FD-10 | Receipt preview, printer selection, fallback | Cashier/Front Desk | desktop | Yes | Yes |
| R1-FD-11 | Release readiness and identity check | Front Desk | desktop/tablet | Yes | Yes |
| R1-FD-12 | Release signature/document/warranty | Front Desk/Customer | tablet/desktop | Yes | Yes |
| R1-FD-13 | Warranty return intake | Front Desk | desktop/tablet | Yes | No |
| R1-FD-14 | Daily reconciliation and exceptions | Finance/Manager | desktop | Yes | No |

## Technician, parts, and quality

| ID | Screen | Primary users | Required viewport | H | P |
|---|---|---|---|---|---|
| R1-TE-01 | Technician dashboard/assigned queue | Technician | desktop/tablet | Yes | Yes |
| R1-TE-02 | Job detail and protected intake snapshot | Technician/QC | desktop/tablet | Yes | Yes |
| R1-TE-03 | Accept/decline/reason | Technician | desktop/tablet/mobile | Yes | Yes |
| R1-TE-04 | Inspection and diagnosis workspace | Technician | desktop/tablet | Yes | Yes |
| R1-TE-05 | Recommended work and quotation input | Technician | desktop/tablet | Yes | Yes |
| R1-TE-06 | Parts request/reservation/use | Technician/Inventory | desktop/tablet | Yes | Yes |
| R1-TE-07 | Repair execution/checklist/evidence | Technician | desktop/tablet | Yes | Yes |
| R1-TE-08 | Pause/exception/revised quotation | Technician/Manager | desktop/tablet | Yes | No |
| R1-TE-09 | Testing workspace | Technician | desktop/tablet | Yes | Yes |
| R1-TE-10 | QC review/rework/approval | QC | desktop/tablet | Yes | Yes |
| R1-TE-11 | Completed repair history | Technician/QC | desktop | Yes | No |

## Inventory and purchasing

| ID | Screen | Primary users | Required viewport | H | P |
|---|---|---|---|---|---|
| R1-IN-01 | Inventory dashboard/search | Inventory/Owner | desktop/tablet | Yes | No |
| R1-IN-02 | Part detail, availability, compatibility | Inventory/Technician | desktop/tablet | Yes | Yes |
| R1-IN-03 | Reservation/issue/use/return | Inventory/Technician | desktop/tablet | Yes | Yes |
| R1-IN-04 | Purchase request/receiving | Purchasing/Inventory | desktop/tablet | Yes | No |
| R1-IN-05 | Adjustment/count approval | Inventory/Manager | desktop/tablet | Yes | No |

## Customer portal

| ID | Screen | Primary users | Required viewport | H | P |
|---|---|---|---|---|---|
| R1-CU-01 | Customer login/tracking entry | Customer | mobile/desktop | Yes | Yes |
| R1-CU-02 | Customer dashboard/device list | Customer | mobile/desktop | Yes | No |
| R1-CU-03 | Repair status and audience-safe timeline | Customer | mobile/desktop | Yes | Yes |
| R1-CU-04 | Quotation view/approve/reject/question | Customer | mobile/desktop | Yes | Yes |
| R1-CU-05 | Invoice/receipt/payment status | Customer | mobile/desktop | Yes | Yes |
| R1-CU-06 | Release/warranty documents | Customer | mobile/desktop | Yes | Yes |
| R1-CU-07 | Support/feedback | Customer | mobile/desktop | Yes | No |

## IT Operations and printing

| ID | Screen | Primary users | Required viewport | H | P |
|---|---|---|---|---|---|
| R1-IT-01 | IT Operations Lite dashboard | IT/Owner | wide/standard desktop | Yes | Yes |
| R1-IT-02 | Service request/ticket queue | IT | desktop | Yes | Yes |
| R1-IT-03 | Ticket/incident workspace | IT/requester | desktop/mobile requester | Yes | Yes |
| R1-IT-04 | Workstation and local-agent registry | IT | desktop | Yes | No |
| R1-IT-05 | Printer registry/capability/certification | IT | desktop | Yes | Yes |
| R1-IT-06 | Print queue/job/attempt/reconciliation | IT/Finance | desktop | Yes | Yes |
| R1-IT-07 | Printer enrollment/test print | IT | desktop | Yes | Yes |
| R1-IT-08 | Printer offline/paper/error recovery | staff/IT | desktop/mobile | Yes | Yes |
| R1-IT-09 | Integration health | IT/Owner | desktop | Yes | No |
| R1-IT-10 | Resolution verification and knowledge note | IT/requester | desktop/mobile | Yes | Yes |

## Platform administration

| ID | Screen | Primary users | Required viewport | H | P |
|---|---|---|---|---|---|
| R1-PA-01 | Platform pilot tenant list/detail | Platform Admin | wide desktop | Yes | No |
| R1-PA-02 | Plan/trial/entitlement assignment | Platform Admin | desktop | Yes | No |
| R1-PA-03 | Scoped support-access request/approval/session | Platform Admin/Owner | desktop | Yes | No |
| R1-PA-04 | Platform audit/health | Platform Admin/Auditor | desktop | Yes | No |

## Count

```text
SHARED/AUTH: 10
OWNER/ADMIN: 9
FRONT DESK/FINANCE/RELEASE: 14
TECHNICIAN/QC: 11
INVENTORY/PURCHASING: 5
CUSTOMER: 7
IT/PRINTING: 10
PLATFORM ADMIN: 4
TOTAL RELEASE-1 HIGH-FIDELITY SCREEN DEFINITIONS: 70
```

## Prototype subset

The clickable critical-path prototype must include every row marked `P=Yes`. It may use realistic synthetic data but must not contain real credentials, customer data, payment details, or device passcodes.

## Per-screen handoff record

Every screen deliverable records:

```text
screen_id
source_paths
roles
permissions
route
viewport_variants
states
entities_and_fields
actions_and_confirmations
wireflow_entry_exit
responsive_rules
accessibility_notes
component_dependencies
content_keys
analytics_events_when_approved
test_ids
prototype_link_or_export
version
reviewer
approval_status
```

## Completion rule

The matrix is a delivery plan, not proof that 70 screens have been rendered. Completion requires all rows, required states, responsive variants, prototype links, review evidence, and approvals.