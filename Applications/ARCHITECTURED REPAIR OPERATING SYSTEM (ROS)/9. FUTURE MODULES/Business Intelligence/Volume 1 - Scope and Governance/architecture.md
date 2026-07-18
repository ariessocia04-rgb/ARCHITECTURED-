# BUSINESS INTELLIGENCE — VOLUME 1: SCOPE AND GOVERNANCE

## Purpose
Provide governed dashboards, metrics, semantic models, drill-down, scheduled reports, forecasting inputs, alerts, exports, and analytical self-service across repair operations, customers, workforce, inventory, finance, quality, SLA, warranty, subscriptions, integrations, and future modules.

## Boundaries
Source modules own transactional truth. BI owns analytical models, snapshots, aggregates, metric definitions, lineage, freshness, and presentation. BI cannot update operational records. Forecasts and AI insights are advisory unless an owning module validates and executes an approved action.

## Personas
Tenant Owner, Executive, Branch Manager, Operations Manager, Finance/Inventory/HR Analyst, Report Designer, Data Steward, BI Administrator, Auditor, Read-Only Consumer.

## Permissions
Dataset, metric, dimension, company/branch/record/field, dashboard, report, schedule, export, sharing, alert, semantic-model, and administration scopes. Row/column security and aggregation thresholds prevent sensitive disclosure. Published metrics require owner/steward approval.

## MVP
Executive/operational dashboards, canonical metrics, semantic model, filters/drill-down, scheduled reports, governed exports, data freshness/quality, alerts, lineage, audit, and core domain read models.

## Later releases
Forecasting, anomaly detection, natural-language query, embedded analytics, advanced cohort/customer analysis, benchmarking, and privacy-preserving cross-tenant aggregates.

## Dependencies
All source modules through events/read models, Data Warehouse/Lake adapter, Search, Files, Notifications, AI Assistant, Admin Portal, Public API, and monitoring. Architecture completion does not prove data availability or metric accuracy.