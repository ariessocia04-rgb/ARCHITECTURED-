# TECHNICIAN REPAIR SAAS ARCHITECTURE — MASTER INDEX

## MASTER DOCUMENTS

- [Project README](README.md)
- [Master Architecture Plan](1plan.md)
- [Applications Master Starting Point](Applications/README.md)
- [Shared SaaS Platform Architecture Index](SaaS%20Platform/README.md)
- [Free, Pro, and Premium Plans and Billing Architecture](SaaS%20Platform/Plans%20and%20Billing/INDEX.md)
- [Printing and Peripheral Operations Architecture](SaaS%20Platform/Printing%20and%20Peripheral%20Operations/INDEX.md)
- [Cross-Department Operating Fabric](SaaS%20Platform/Cross-Department%20Operating%20Fabric/INDEX.md)
- [IT and Cross-Department Role Extension](SaaS%20Platform/IT_AND_CROSS_DEPARTMENT_ROLE_EXTENSION.md)
- [Design Architecture Index](Design/README.md)
- [Implementation Planning Master Index](Implementation%20Planning/README.md)
- [Release 1 MVP Implementation Planning](Implementation%20Planning/Release%201%20MVP/INDEX.md)
- [TECA Repository Operational Index](TECA/README.md)
- [Canonical Implementation Build Playbook](TECA/IMPLEMENTATION_BUILD_PLAN.md)
- [Master Architecture Audit](MASTER_AUDIT.md)
- [Final Architecture Verification](FINAL_ARCHITECTURE_VERIFICATION.md)
- [Release 1 Implementation Planning Audit](IMPLEMENTATION_PLANNING_AUDIT_RELEASE_1_MVP.md)
- [Release 1 Final Planning Verification](FINAL_IMPLEMENTATION_PLANNING_VERIFICATION_RELEASE_1_MVP.md)
- [Duplicate and Placement Validation](duplicate.md)
- [Revision Queue](revise.md)
- [Release 1 Revision Record](revise-RELEASE_1_MVP.md)

## APPLICATION STARTING RULE

Every contributor entering application work must follow:

```text
1plan.md
→ Applications/README.md
→ selected application INDEX.md
→ selected canonical application or module file
→ relevant shared contracts and design artifacts
→ Cross-Department Operating Fabric when work crosses applications/departments
```

The Technician Application uses decomposed module folders. Front Desk, Owner, and Customer Portal currently use a consolidated canonical `README.md` plus an additive navigation `INDEX.md`. IT Operations uses decomposed application architecture. Do not create duplicate module files merely to match visual folder depth.

## APPLICATIONS

### 1. TECHNICIAN APPLICATION — CORE BASELINE COMPLETE

- **[Technician Application Master Index](Applications/Technician%20Application/INDEX.md)**

#### VOLUME 1 — HEADER

- [Profile Quick Access — canonical Sidebar Profile](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%2012%20-%20Profile/profile.md)
- [Shift](Applications/Technician%20Application/Volume%201%20-%20Header/Shift/shift.md)
- [Notification Quick Access — canonical Sidebar Notification](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%2011%20-%20Notification/notification.md)
- [Search](Applications/Technician%20Application/Volume%201%20-%20Header/Search/search.md)
- [QR Scanner](Applications/Technician%20Application/Volume%201%20-%20Header/QR%20Scanner/qr_scanner.md)

Profile and Notification remain logical Header quick-access surfaces, but their full architecture is stored only once in the canonical Sidebar modules.

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
- [Module 11 - Notification — canonical](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%2011%20-%20Notification/notification.md)
- [Module 12 - Profile — canonical](Applications/Technician%20Application/Volume%202%20-%20Sidebar/Module%2012%20-%20Profile/profile.md)
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

Technician inventory after duplicate consolidation:

- Logical surfaces: 36.
- Canonical detailed files: 34.
- Header quick-access references to Sidebar canonical modules: 2.

### 2. FRONT DESK APPLICATION — COMPLETE (100%)

- [Front Desk Application Entry Index](Applications/Front%20Desk%20Application/INDEX.md)
- [Front Desk Application Canonical Architecture](Applications/Front%20Desk%20Application/README.md)

Current arrangement: consolidated canonical architecture with additive index navigation.

### 3. OWNER APPLICATION — CORE BASELINE COMPLETE (100%)

- [Owner Application Entry Index](Applications/Owner%20Application/INDEX.md)
- [Owner Application Canonical Architecture](Applications/Owner%20Application/README.md)

Current arrangement: consolidated core-baseline architecture with additive index navigation.

### 4. CUSTOMER PORTAL — COMPLETE (100%)

- [Customer Portal Entry Index](Applications/Customer%20Portal/INDEX.md)
- [Customer Portal Canonical Architecture](Applications/Customer%20Portal/README.md)

Current arrangement: consolidated canonical architecture with additive index navigation.

### 5. IT OPERATIONS APPLICATION — COMPLETE AS ARCHITECTURE SPECIFICATION

- [IT Operations Application Master Index](Applications/IT%20Operations%20Application/INDEX.md)
- [IT Operations Completion Record](Applications/IT%20Operations%20Application/COMPLETION_RECORD.md)

Current arrangement: decomposed application architecture with scope/governance, functional experience, data/integration, wireframe/wireflow/traceability, and security/quality/delivery volumes.

### 6. ARCHITECTURED ROS AND FUTURE MODULES

- [ROS Master Index](Applications/ARCHITECTURED%20REPAIR%20OPERATING%20SYSTEM%20(ROS)/INDEX.md)
- [Future Modules Master Index](Applications/ARCHITECTURED%20REPAIR%20OPERATING%20SYSTEM%20(ROS)/9.%20FUTURE%20MODULES/INDEX.md)

Future modules are connected through the Cross-Department Operating Fabric while retaining their own four-volume domain architecture.

## SHARED SAAS PLATFORM — CORE CONTRACTS AND DECOMPOSED DETAIL PACKAGES

- [Shared SaaS Platform Master Index](SaaS%20Platform/README.md)
- [User, Role, and Workflow Architecture](SaaS%20Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md)
- [IT and Cross-Department Role Extension](SaaS%20Platform/IT_AND_CROSS_DEPARTMENT_ROLE_EXTENSION.md)
- [Global System Contract Layer](SaaS%20Platform/GLOBAL_SYSTEM_CONTRACT_LAYER.md)
- [Multi-Tenant Data and Entity Architecture](SaaS%20Platform/MULTI_TENANT_DATA_AND_ENTITY_ARCHITECTURE.md)
- [Database Relationship and Ownership Model](SaaS%20Platform/DATABASE_RELATIONSHIP_AND_OWNERSHIP_MODEL.md)
- [API, Event, Webhook, and Real-Time Contract](SaaS%20Platform/API_EVENT_WEBHOOK_AND_REALTIME_CONTRACT.md)
- [Authentication, Authorization, and Session Contract](SaaS%20Platform/AUTHENTICATION_AUTHORIZATION_AND_SESSION_CONTRACT.md)
- [Subscription, Entitlement, Usage, and Tenant Lifecycle Contract](SaaS%20Platform/SUBSCRIPTION_ENTITLEMENT_USAGE_AND_TENANT_LIFECYCLE_CONTRACT.md)
- [Free, Pro, and Premium Plans and Billing Detail Package](SaaS%20Platform/Plans%20and%20Billing/INDEX.md)
- [Notification and Communication Contract](SaaS%20Platform/NOTIFICATION_AND_COMMUNICATION_CONTRACT.md)
- [Payment, Invoice, Refund, and Financial Control Contract](SaaS%20Platform/PAYMENT_INVOICE_REFUND_AND_FINANCIAL_CONTROL_CONTRACT.md)
- [File, Media, Document, QR, and Barcode Contract](SaaS%20Platform/FILE_MEDIA_DOCUMENT_QR_AND_BARCODE_CONTRACT.md)
- [Printing and Peripheral Operations Detail Package](SaaS%20Platform/Printing%20and%20Peripheral%20Operations/INDEX.md)
- [Audit, Retention, Backup, Recovery, and Incident Contract](SaaS%20Platform/AUDIT_RETENTION_BACKUP_RECOVERY_AND_INCIDENT_CONTRACT.md)
- [Cross-Application Workflow and Handoff Matrix](SaaS%20Platform/CROSS_APPLICATION_WORKFLOW_AND_HANDOFF_MATRIX.md)
- [Cross-Department Operating Fabric Detail Package](SaaS%20Platform/Cross-Department%20Operating%20Fabric/INDEX.md)
- [Non-Functional Requirements](SaaS%20Platform/NON_FUNCTIONAL_REQUIREMENTS.md)
- [Development Readiness Audit](SaaS%20Platform/DEVELOPMENT_READINESS_AUDIT.md)

The Plans and Billing, Printing, and Cross-Department packages specialize existing shared contracts; they do not replace or duplicate the core-contract authority.

## DESIGN ARCHITECTURE — CORE BASELINE COMPLETE

- [Design Architecture Master Index](Design/README.md)
- [Wireframe Architecture](Design/WIREFRAME_ARCHITECTURE.md)
- [Wireflow Architecture](Design/WIREFLOW_ARCHITECTURE.md)
- [Non-Technical User UI Design System](Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md)
- [Plans and Billing Domain Wireframes/Wireflows](SaaS%20Platform/Plans%20and%20Billing/04.%20Wireframe%20and%20Wireflow/WIREFRAME_ARCHITECTURE.md)
- [Printing Domain Wireframes/Wireflows](SaaS%20Platform/Printing%20and%20Peripheral%20Operations/06.%20Wireframe%20and%20Wireflow/WIREFRAME_ARCHITECTURE.md)
- [IT Operations Wireframes/Wireflows](Applications/IT%20Operations%20Application/Volume%204%20-%20Wireframe%20and%20Wireflow/WIREFRAME_ARCHITECTURE.md)
- [Cross-Department Wireframes/Wireflows](SaaS%20Platform/Cross-Department%20Operating%20Fabric/04.%20Wireframe%20and%20Wireflow/WIREFRAME_ARCHITECTURE.md)
- [Release 1 High-Fidelity UI Execution Plan](Implementation%20Planning/Release%201%20MVP/04.%20High-Fidelity%20Design/HIGH_FIDELITY_UI_EXECUTION_PLAN.md)
- [Release 1 Screen Delivery Matrix](Implementation%20Planning/Release%201%20MVP/04.%20High-Fidelity%20Design/SCREEN_DELIVERY_MATRIX.md)

## IMPLEMENTATION PLANNING — RELEASE 1

- [Implementation Planning Master Index](Implementation%20Planning/README.md)
- [Release 1 MVP Index](Implementation%20Planning/Release%201%20MVP/INDEX.md)
- [Release Manifest](Implementation%20Planning/Release%201%20MVP/01.%20Release%20Boundary/RELEASE_MANIFEST.md)
- [Technology Stack and Version Lock](Implementation%20Planning/Release%201%20MVP/02.%20Technology%20and%20Topology/TECHNOLOGY_STACK_AND_VERSION_LOCK.md)
- [Printer Support and Certification Matrix](Implementation%20Planning/Release%201%20MVP/03.%20Printer%20Certification/PRINTER_SUPPORT_AND_CERTIFICATION_MATRIX.md)
- [Codex Task Manifest](Implementation%20Planning/Release%201%20MVP/05.%20Codex%20Execution/CODEX_TASK_MANIFEST.md)
- [Risk, Test, Rollout, and Rollback](Implementation%20Planning/Release%201%20MVP/06.%20Security%20Quality%20and%20Release/RISK_TEST_ROLLOUT_ROLLBACK.md)

## TECA GOVERNANCE AND BUILD-ORDER PLANS

- [TECA Repository Operational Index](TECA/README.md)
- [TECA Agent Job Assignments](TECA/AGENT_JOB_ASSIGNMENTS.md)
- [TECA Pipeline Execution Plan](TECA/PIPELINE_EXECUTION_PLAN.md)
- [TECA CrewAI Studio Configuration Update](TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md)
- [TECA Canonical Implementation Build Plan](TECA/IMPLEMENTATION_BUILD_PLAN.md)
- [Plans and Billing Exact Implementation Sequence](SaaS%20Platform/Plans%20and%20Billing/05.%20Security%20Quality%20and%20Delivery/IMPLEMENTATION_SEQUENCE.md)
- [Printing Exact Implementation Sequence](SaaS%20Platform/Printing%20and%20Peripheral%20Operations/07.%20Quality%20and%20Delivery/IMPLEMENTATION_SEQUENCE.md)
- [IT Operations Exact Implementation Sequence](Applications/IT%20Operations%20Application/Volume%205%20-%20Security%20Quality%20and%20Delivery/security_quality_delivery.md)
- [Cross-Department Exact Implementation Sequence](SaaS%20Platform/Cross-Department%20Operating%20Fabric/05.%20Traceability%20Security%20and%20Delivery/TRACEABILITY_SECURITY_QUALITY_AND_DELIVERY.md)
- [Release 1 Codex Task Manifest](Implementation%20Planning/Release%201%20MVP/05.%20Codex%20Execution/CODEX_TASK_MANIFEST.md)

## CURRENT STATUS

- Core application architecture: COMPLETE.
- Technician logical surfaces: 36; canonical detailed files: 34.
- Front Desk, Owner, and Customer Portal core architecture: COMPLETE.
- IT Operations architecture: COMPLETE AS SPECIFICATION with 26 screens and 20 flows.
- ROS Future Module architecture packages: 17 of 17 complete as specifications.
- Shared SaaS core contracts: 14 of 14 complete.
- Free/Pro/Premium Plans and Billing architecture: COMPLETE with 24 screens and 20 flows.
- Printing and Peripheral Operations architecture: COMPLETE with 20 screens and 16 flows.
- Cross-Department Operating Fabric: COMPLETE with 12 end-to-end process families, 20 screens, and 16 flows.
- All departments/applications are connected through shared process instances, linked tasks, handoffs, approvals, timeline, notifications, blockers, documents, data/API/events, and audit while domain ownership remains separate.
- Release 1 MVP implementation planning: COMPLETE AS PLAN with 24 requirement families, 70 high-fidelity screen definitions, 36 Codex tasks, and 24 priority risks.
- Release 1 architecture style: modular monolith with Supabase/PostgreSQL and a separate Tauri/Rust local print agent.
- Active accidental duplicate canonical documents created by these packages: 0 after placement/duplicate validation.
- High-fidelity visual screens, interactive prototype, application/local-agent code, executed hardware/system tests, deployment, and production support evidence remain separate gated statuses.
- Uncontrolled coding authorized: NO.

**`1plan.md` REMAINS THE MASTER SOURCE OF TRUTH. RELEASE-SPECIFIC IMPLEMENTATION WORK ENTERS THROUGH `Implementation Planning/Release 1 MVP/INDEX.md`; CODEX MAY START ONLY AN EXACT AUTHORIZED TASK.**