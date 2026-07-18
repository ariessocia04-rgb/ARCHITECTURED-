# CRM — VOLUME 1: SCOPE AND GOVERNANCE

## Purpose
Manage leads, opportunities, business relationships, accounts, contacts, interactions, contracts, follow-ups, loyalty, retention, and customer-success activity without replacing verified Customer, Device, Service Request, Quotation, Repair, Warranty, or Payment records.

## Scope
Lead capture/qualification, opportunity pipeline, account/contact management, business-account relationships, proposals/contracts, activities/tasks, segmentation, loyalty, renewals, reminders, complaint/escalation handoff, consent, reports, integrations, audit, import/export, and administration.

## Boundaries
Customer module owns verified identity and merge decisions. Repair modules own service history. Marketing owns campaign execution. Finance owns credit and financial records. CRM references these sources and never silently changes them.

## Personas
Sales Representative, Account Manager, Customer Service Agent, Sales Manager, Marketing User, Privacy Officer, Tenant Owner, Auditor.

## Permissions
Lead/account/contact/contract/segment/export/configuration permissions are separate. Contact data, consent, private notes, commercial terms, and business-account scope use field restrictions. Conversion, merge request, bulk export, discount handoff, and contract approval require configured authority.

## MVP
Dashboard, leads, opportunities, accounts/contacts, interaction timeline, tasks/follow-ups, proposals/contracts, segments, consent, service reminders, reports, notifications, search, audit, and core adapters.

## Later releases
Advanced forecasting, partner relationship management, territory planning, loyalty automation, customer-success scoring, and AI-assisted prioritization with human review.

## Dependencies
Customers, Business Accounts, Quotations, Repairs, Warranty, Marketing, Notifications, Files/Signatures, Finance credit read model, BI, and Public API.

Architecture completion does not authorize coding or customer profiling beyond approved privacy rules.