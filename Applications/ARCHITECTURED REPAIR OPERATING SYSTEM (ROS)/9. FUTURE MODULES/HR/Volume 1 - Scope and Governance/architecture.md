# HR — VOLUME 1: SCOPE AND GOVERNANCE

## Purpose
Manage employee and workforce lifecycle including prehire handoff, onboarding, employment, positions, departments, branch assignments, shifts, attendance, leave, skills, certifications, training, targets, performance, discipline, payroll inputs, transfer, promotion, and offboarding.

## Boundaries
HR owns employment facts; Authorization owns system access; operational applications own work assignments and repair evidence; payroll/accounting own calculations and posting. HR status never deletes historical work. Permission changes use Authorization commands, not direct app-table edits.

## Personas
Employee, applicant/prehire viewer, HR Officer, HR Manager, Branch Manager, Supervisor, Payroll Officer, Training Officer, Security Administrator, Auditor.

## Permissions
Separate access for identity, employment, compensation-related inputs, attendance, leave, performance, discipline, medical/sensitive files, export, approval, configuration, and audit. Field-level privacy, purpose limitation, maker-checker, temporary access, and separation between reviewer and subject apply.

## MVP
Employee directory, employment/position, onboarding, branch assignment, shift/attendance, timesheet, overtime, leave, skills/certifications, training, performance, payroll input, offboarding, notifications, reports, privacy, and audit.

## Later releases
Recruitment/ATS, benefits administration, compensation planning, succession, workforce forecasting, employee engagement, learning marketplace, and jurisdiction-specific payroll providers.

## Dependencies
Authentication, Authorization, Owner and Technician applications, Multi-Branch, Files/Signatures, Notifications, Audit, Payroll/accounting adapters, Mobile Application, BI.

## Governance
Legal basis, consent where applicable, retention, employee access/correction rights, approval authority, and branch/company scope must be configurable and jurisdiction-reviewed. Architecture completion does not authorize production processing.