# OPERATING MODE ARCHITECTURE

## Objective

Allow one SaaS architecture to serve businesses from one-person repair operations to enterprises with complete departments.

## Mode 1 — Solo Technician-Owner

One authenticated person may hold Owner, Technician, Front Desk, Inventory, Cashier, Customer Service, and basic Administrator capabilities through one account with explicit role bundles.

### Default workspace

- My Business Dashboard
- My Repair Queue
- Customer and Device Intake
- Diagnosis and Repair
- Quotation and Approval Tracking
- Parts and Stock Monitoring
- Payments and Expenses
- Ready for Release
- Customer Follow-up
- Business Summary

### Controls

- One login; multiple scoped capabilities.
- Simplified navigation hides unused department screens.
- Self-approval is allowed only for low-risk tenant-configured actions.
- Refunds, write-offs, sensitive permission changes, destructive deletion, and high-value adjustments require delayed confirmation, second-factor confirmation, or an optional external reviewer.
- The system records which operational role the owner acted as for each event.
- Monitoring-only setup is supported before the owner enables full workflow features.

## Mode 2 — Owner With Small Team

A small business may activate only the roles it has, such as Owner, Front Desk, Technician, and Cashier. One person may hold several roles, but every action remains attributed to the active role context.

## Mode 3 — Departmental Business

Each operational department has a manager, team members, queues, permissions, targets, schedules, reports, and handoff responsibilities.

## Mode 4 — Multi-Branch Enterprise

- Branch-level departments and shared central departments.
- Central policy with branch-level operational configuration.
- Shared customer and supplier records according to tenant policy.
- Branch-specific stock, cash, pricing, staff, queue, and SLA ownership.

## Mode 5 — Multi-Company Group

- Parent organization with isolated legal entities.
- Company-specific ledgers, tax settings, banking, warehouses, users, and approvals.
- Shared services require explicit intercompany agreements and audit trails.

## Mode transition rule

Growth activates additional roles, departments, branches, and contracts. It does not replace job orders, customers, devices, quotations, repairs, inventory movements, payments, timelines, or audit records.
