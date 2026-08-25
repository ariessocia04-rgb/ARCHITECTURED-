/**
 * ============================================================================
 * WORKFLOW STATE MACHINE — the repair lifecycle
 * ============================================================================
 * Executable version of the mandatory cross-department workflow in
 * RELEASE_MANIFEST.md:
 *
 *   Intake/Job Order -> Dispatch -> Technician Diagnosis -> Quotation ->
 *   Customer Approval -> Inventory/Parts -> Repair -> Testing/QC ->
 *   Finance/Payment -> Printing/Delivery -> Release/Warranty
 *
 * Every status change in the app MUST pass through canTransition() here.
 * This is what makes the flow auditable, predictable, and easy to explain.
 * ============================================================================
 */

import type { JobStatus } from './types';

/** Allowed transitions: from-status -> list of valid to-statuses. */
export const TRANSITIONS: Record<JobStatus, JobStatus[]> = {
  queued: ['dispatched', 'cancelled'],
  dispatched: ['diagnosis', 'queued', 'cancelled'], // accepted / declined back to queue / cancel
  diagnosis: ['awaiting_approval', 'cancelled'],
  awaiting_approval: ['repairing', 'quotation_declined'],
  quotation_declined: ['diagnosis', 'cancelled'], // re-quote or give up
  repairing: ['testing'], // QC fail returns here (see note below)
  testing: ['ready_for_payment', 'repairing'], // pass / fail
  ready_for_payment: ['paid'],
  paid: ['released'],
  released: [], // terminal — warranty active
  cancelled: [], // terminal
};

export function canTransition(from: JobStatus, to: JobStatus): boolean {
  return TRANSITIONS[from]?.includes(to) ?? false;
}

/** Human-friendly labels used across every workspace. */
export const STATUS_LABELS: Record<JobStatus, string> = {
  queued: 'Queued',
  dispatched: 'Dispatched',
  diagnosis: 'Diagnosis',
  awaiting_approval: 'Awaiting Customer Approval',
  quotation_declined: 'Quotation Declined',
  repairing: 'Repairing',
  testing: 'Testing / QC',
  ready_for_payment: 'Ready for Payment',
  paid: 'Paid',
  released: 'Released (Warranty Active)',
  cancelled: 'Cancelled',
};

/** Badge color groups for the shared design system in globals.css. */
export const STATUS_GROUPS: Record<JobStatus, string> = {
  queued: 'info',
  dispatched: 'info',
  diagnosis: 'work',
  awaiting_approval: 'warn',
  quotation_declined: 'danger',
  repairing: 'work',
  testing: 'work',
  ready_for_payment: 'money',
  paid: 'money',
  released: 'success',
  cancelled: 'muted',
};

/** Ordered pipeline used by dashboards to show a funnel view. */
export const PIPELINE_ORDER: JobStatus[] = [
  'queued',
  'dispatched',
  'diagnosis',
  'awaiting_approval',
  'quotation_declined',
  'repairing',
  'testing',
  'ready_for_payment',
  'paid',
  'released',
  'cancelled',
];
