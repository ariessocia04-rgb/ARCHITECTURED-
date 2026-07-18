# CROSS-DEPARTMENT OPERATING FABRIC — RESEARCH AND AUTHORITY REGISTRY

## Existing repository sources

- `1plan.md` governance, completion, and traceability rules.
- `SaaS Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md` canonical roles and repair workflow.
- `SaaS Platform/CROSS_APPLICATION_WORKFLOW_AND_HANDOFF_MATRIX.md` current application handoffs.
- Shared data, API/event, identity, subscription, notification, finance, document, audit, and NFR contracts.
- Core application and ROS Future Module architecture packages.
- IT Operations and Printing packages created in this work.
- Global Design and TECA implementation sources.

## Official external references used

### Microsoft Dynamics 365 Business Process Catalog

Adopted concepts:

- Model organizational outcomes as end-to-end business processes rather than isolated app screens.
- Decompose the end-to-end outcome into business process areas, processes, and steps.
- Map steps to departments, roles, data entities, applications, and cross-functional flow diagrams.
- Keep one process outcome visible even when multiple apps/departments participate.
- Use process stages and required steps to guide consistent execution and approvals.

### Microsoft guidance on departments and business processes

Adopted concepts:

- Departments are functional responsibility groupings; small organizations may assign multiple department roles to one person.
- Operations, finance, HR, sales/customer, marketing, and IT processes must be connected by end-to-end scenarios such as service-to-deliver, source-to-pay, record-to-report, and hire-to-retire.
- Access and licensing are derived from roles and responsibilities rather than forcing all users into all applications.

### Microsoft process-focused solution guidance

Adopted concepts:

- Use cross-functional, data, decision, workflow, and value-stream views together.
- Define roles/responsibilities and fit/gaps.
- Reassess the process through controlled pilots and iterations.
- Tie workflow deliverables to the business process they support for dependency and traceability.

### ServiceNow Common Service Data Model

Adopted concepts:

- Business services are consumer-focused operational services.
- Technical/application service instances support business services and are used for incident, problem, change, impact, and health.
- Consumers request services through offerings/catalogs.
- Service and configuration-item relationships provide impact/dependency context without copying domain records.

### NIST operational/security guidance

Adopted concepts:

- Incident, change, configuration, security, evidence, recovery, and lessons learned are part of ordinary operations.
- Protected actions need clear ownership, approval, evidence, integrity, and recovery.
- Security response crosses organizational functions and must preserve roles, communication, and audit.

## Architecture decisions

1. Department applications remain distinct responsibility boundaries.
2. Cross-department connection occurs through one shared process instance, linked domain records, tasks, handoffs, approvals, timeline, events, and notifications.
3. A shared process summary never becomes authority to edit domain-owned records.
4. Small tenants may combine several roles in one user, but permissions and separation-of-duties rules remain explicit.
5. Every end-to-end process has trigger, outcome, participating departments, stages, required artifacts, handoffs, exception flows, metrics, and closure criteria.
6. IT/service health can block or degrade a department step without replacing its business status.
7. Owner/executive UX aggregates business outcome, risk, bottleneck, decisions, and accountability across departments.
8. Department staff see only the work, context, and cross-team status necessary for their role.
9. External supplier/vendor/customer participants receive portal-scoped tasks and documents rather than internal application access.
10. AI/automation may recommend, summarize, route, or execute approved low-risk tasks but never bypass domain commands, permissions, approvals, or audit.
