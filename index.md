# TECHNICIAN REPAIR SAAS ARCHITECTURE — MASTER INDEX

## MASTER DOCUMENTS

- [Project README](README.md)
- [Master Architecture Plan](1plan.md)
- [Applications Master Starting Point](Applications/README.md)
- [Shared SaaS Platform Architecture Index](SaaS%20Platform/README.md)
- [Design Architecture Index](Design/README.md)
- [TECA Repository Operational Index](TECA/README.md)
- [Canonical Implementation Build Playbook](TECA/IMPLEMENTATION_BUILD_PLAN.md)
- [Master Architecture Audit](MASTER_AUDIT.md)
- [Final Architecture Verification](FINAL_ARCHITECTURE_VERIFICATION.md)
- [Duplicate and Placement Validation](duplicate.md)
- [Revision Queue](revise.md)

## APPLICATION STARTING RULE

Every contributor entering application work must follow:

```text
1plan.md
→ Applications/README.md
→ selected application INDEX.md
→ selected canonical application or module file
→ relevant shared contracts and design artifacts
```

The Technician Application uses decomposed module folders. Front Desk, Owner, and Customer Portal currently use a consolidated canonical `README.md` plus an additive navigation `INDEX.md`. Do not create duplicate module files merely to match visual folder depth.

## APPLICATIONS

### 1. TECHNICIAN APPLICATION — COMPLETE (100%)

- **[Technician Application Master Index](Applications/Technician%20Application/INDEX.md)**

#### VOLUME 1 — HEADER

- [Profile](Applications/Technician%20Application/Volume%201%20-%20Header/Profile/profile.md)
- [Shift](Applications/Technician%20Application/Volume%201%20-%20Header/Shift/shift.md)
- [Notification](Applications/Technician%20Application/Volume%201%20-%20Header/Notification/notification.md)
- [Search](Applications/Technician%20Application/Volume%201%20-%20Header/Search/search.md)
- [QR Scanner](Applications/Technician%20Application/Volume%201%20-%20Header/QR%20Scanner/qr_scanner.md)

#### VOLUME 2 — SIDEBAR

- [Module 1 - Dashboard](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%201%20-%20Dashboard/dashboard.md)
- [Module 2 - Repair Queue](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%202%20-%20Repair%20Queue/repair_queue.md)
- [Module 3 - Job Order](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%203%20-%20Job%20Order/job_order.md)
- [Module 4 - Diagnosis](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%204%20-%20Diagnosis/diagnosis.md)
- [Module 5 - Quotation](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%205%20-%20Quotation/quotation.md)
- [Module 6 - Repair](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%206%20-%20Repair/repair.md)
- [Module 7 - Parts](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%207%20-%20Parts/parts.md)
- [Module 8 - Testing](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%208%20-%20Testing/testing.md)
- [Module 9 - Completed](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%209%20-%20Completed/completed.md)
- [Module 10 - Reports](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%2010%20-%20Reports/reports.md)
- [Module 11 - Notification](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%2011%20-%20Notification/notification.md)
- [Module 12 - Profile](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%2012%20-%20Profile/profile.md)
- [Module 13 - Logout](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%2013%20-%20Logout/logout.md)

#### VOLUME 3 — MAIN WORKSPACE

- [1. Dynamic Content Area](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Dynamic%20Content%20Area/dynamic_content_area.md)
- [2. Breadcrumb System](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Breadcrumb/breadcrumb.md)
- [3. Page Header](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Page%20Header/page_header.md)
- [4. Action Toolbar](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Action%20Toolbar/action_toolbar.md)
- [5. Filter Bar](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Filter%20Bar/filter_bar.md)
- [6. Search Result](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Search%20Result/search_result.md)
- [7. Data Table](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Data%20Table/data_table.md)
- [8. Cards](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Cards/cards.md)
- [9. Timeline](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Timeline/timeline.md)
- [10. Forms](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Forms/forms.md)
- [11. Modal](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Modal/modal.md)
- [12. Drawer](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Drawer/drawer.md)
- [13. Toast Notifications](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Toast%20Notifications/toast_notifications.md)
- [14. Pagination](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Pagination/pagination.md)
- [15. Loading State](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Loading%20State/loading_state.md)
- [16. Empty State](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Empty%20State/empty_state.md)
- [17. Error State](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Error%20State/error_state.md)
- [18. Footer](Applications/Technician%20Application/Volume%203%20-%20Main%20Workspace/Footer/footer.md)

### 2. FRONT DESK APPLICATION — COMPLETE (100%)

- [Front Desk Application Entry Index](Applications/Front%20Desk%20Application/INDEX.md)
- [Front Desk Application Canonical Architecture](Applications/Front%20Desk%20Application/README.md)

Current arrangement: consolidated canonical architecture with additive index navigation.

### 3. OWNER APPLICATION — CORE BASELINE COMPLETE (100%)

- [Owner Application Entry Index](Applications/Owner%20Application/INDEX.md)
- [Owner Application Canonical Architecture](Applications/Owner%20Application/README.md)

Current arrangement: consolidated core-baseline architecture with additive index navigation.

Future HR, payroll, finance, sales, franchise, analytics, automation, and other expansions require their own complete Section 8A packages before implementation.

### 4. CUSTOMER PORTAL — COMPLETE (100%)

- [Customer Portal Entry Index](Applications/Customer%20Portal/INDEX.md)
- [Customer Portal Canonical Architecture](Applications/Customer%20Portal/README.md)

Current arrangement: consolidated canonical architecture with additive index navigation.

## SHARED SAAS PLATFORM — COMPLETE (100%)

- [Shared SaaS Platform Master Index](SaaS%20Platform/README.md)
- [User, Role, and Workflow Architecture](SaaS%20Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md)
- [Global System Contract Layer](SaaS%20Platform/GLOBAL_SYSTEM_CONTRACT_LAYER.md)
- [Multi-Tenant Data and Entity Architecture](SaaS%20Platform/MULTI_TENANT_DATA_AND_ENTITY_ARCHITECTURE.md)
- [Database Relationship and Ownership Model](SaaS%20Platform/DATABASE_RELATIONSHIP_AND_OWNERSHIP_MODEL.md)
- [API, Event, Webhook, and Real-Time Contract](SaaS%20Platform/API_EVENT_WEBHOOK_AND_REALTIME_CONTRACT.md)
- [Authentication, Authorization, and Session Contract](SaaS%20Platform/AUTHENTICATION_AUTHORIZATION_AND_SESSION_CONTRACT.md)
- [Subscription, Entitlement, Usage, and Tenant Lifecycle Contract](SaaS%20Platform/SUBSCRIPTION_ENTITLEMENT_USAGE_AND_TENANT_LIFECYCLE_CONTRACT.md)
- [Notification and Communication Contract](SaaS%20Platform/NOTIFICATION_AND_COMMUNICATION_CONTRACT.md)
- [Payment, Invoice, Refund, and Financial Control Contract](SaaS%20Platform/PAYMENT_INVOICE_REFUND_AND_FINANCIAL_CONTROL_CONTRACT.md)
- [File, Media, Document, QR, and Barcode Contract](SaaS%20Platform/FILE_MEDIA_DOCUMENT_QR_AND_BARCODE_CONTRACT.md)
- [Audit, Retention, Backup, Recovery, and Incident Contract](SaaS%20Platform/AUDIT_RETENTION_BACKUP_RECOVERY_AND_INCIDENT_CONTRACT.md)
- [Cross-Application Workflow and Handoff Matrix](SaaS%20Platform/CROSS_APPLICATION_WORKFLOW_AND_HANDOFF_MATRIX.md)
- [Non-Functional Requirements](SaaS%20Platform/NON_FUNCTIONAL_REQUIREMENTS.md)
- [Development Readiness Audit](SaaS%20Platform/DEVELOPMENT_READINESS_AUDIT.md)

## DESIGN ARCHITECTURE — CORE BASELINE COMPLETE (100%)

- [Design Architecture Master Index](Design/README.md)
- [Wireframe Architecture](Design/WIREFRAME_ARCHITECTURE.md)
- [Wireflow Architecture](Design/WIREFLOW_ARCHITECTURE.md)
- [Non-Technical User UI Design System](Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md)

## TECA GOVERNANCE AND BUILD-ORDER PLANS — COMPLETE IN REPOSITORY

- [TECA Repository Operational Index](TECA/README.md)
- [TECA Agent Job Assignments](TECA/AGENT_JOB_ASSIGNMENTS.md)
- [TECA Pipeline Execution Plan](TECA/PIPELINE_EXECUTION_PLAN.md)
- [TECA CrewAI Studio Configuration Update](TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md)
- [TECA Canonical Implementation Build Plan](TECA/IMPLEMENTATION_BUILD_PLAN.md)

Canonical authority mapping:

- Project scope, priority, co-worker continuation, active-work notification, no-racing, save-before-transfer, handoff, source provenance, gap filling, unsupported-conflict removal, folder assignment, and completion rules: [`1plan.md`](1plan.md).
- Application folder starting point and arrangement modes: [`Applications/README.md`](Applications/README.md), under `1plan.md` authority.
- Full expansion architecture and UI/UX gate: [`1plan.md`, Section 8A](1plan.md).
- Operational TECA behavior and comparable-product research procedure: [`TECA/README.md`](TECA/README.md), under `1plan.md` authority.
- Exact implementation build sequence: [`TECA/IMPLEMENTATION_BUILD_PLAN.md`](TECA/IMPLEMENTATION_BUILD_PLAN.md), after the applicable `1plan.md` gates pass.

## CURRENT STATUS

- Core application architecture: COMPLETE (100%).
- Applications master starting point: DEFINED.
- Application entry indexes: 4 of 4 available.
- Technician arrangement: DECOMPOSED MODULE MODE.
- Front Desk, Owner core baseline, and Customer Portal arrangement: CONSOLIDATED ARCHITECTURE MODE WITH ENTRY INDEXES.
- Existing completed application content moved or deleted in this alignment: NO.
- Shared SaaS platform documents: 14 of 14 complete.
- Core design architecture documents: 3 of 3 complete.
- TECA repository governance and build-order documents: 4 of 4 complete.
- Master co-worker, handoff, source-provenance, and conflict-removal rules: DEFINED IN `1plan.md`, SECTION 1A.
- Canonical implementation build playbook: COMPLETE AS A GOVERNING PLAN.
- Comparable-product official research procedure: DEFINED IN `TECA/README.md` UNDER `1plan.md` AUTHORITY.
- Future expansions: PLANNED; each requires full architecture and design.
- Accidental duplicate canonical documents: 0.
- Live TECA Studio alignment: pending Studio execution and read-back.
- Actual coding, testing, deployment, and release: separate evidence-based statuses.
- Uncontrolled coding authorized: NO.
- Next controlled phase: complete release-specific implementation planning and live TECA alignment.

**`1plan.md` IS THE MASTER SOURCE OF TRUTH. APPLICATION WORK STARTS AT `Applications/README.md` AND THEN ENTERS THE SELECTED APPLICATION THROUGH ITS `INDEX.md`.**