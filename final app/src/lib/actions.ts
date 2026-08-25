/**
 * ============================================================================
 * BUSINESS ACTIONS — server-side handlers for every workflow step
 * ============================================================================
 * One function per user-visible action. Each handler:
 *   1. Validates the actor's role permission (who may do this).
 *   2. Validates the current state (canTransition guard).
 *   3. Mutates the database and appends timeline + audit entries.
 *
 * Called only from POST /api/action (see app/api/action/route.ts).
 * ============================================================================
 */

import {
  ActionError,
  makeAuditEntry,
  makeTimelineEntry,
  nextJobCode,
  nowIso,
  type DbLike,
} from './action-helpers';
import { canTransition } from './workflow';
import type {
  Customer,
  Database,
  Device,
  JobOrder,
  JobStatus,
  QuotationItem,
  Role,
  User,
} from './types';

type Payload = Record<string, unknown>;

/** Which roles may perform which action. Enforced before anything else. */
export const ACTION_ROLES: Record<string, Role[]> = {
  create_intake: ['front_desk', 'owner'],
  dispatch_job: ['front_desk', 'owner'],
  accept_job: ['technician'],
  decline_job: ['technician'],
  send_quotation: ['technician'],
  revise_quotation: ['front_desk', 'owner'],
  customer_decision: ['customer'],
  complete_repair: ['technician'],
  qc_decision: ['qc'],
  record_payment: ['front_desk', 'owner'],
  release_device: ['front_desk', 'owner'],
  cancel_job: ['front_desk', 'owner'],
  open_it_ticket: ['front_desk', 'technician', 'qc', 'owner'],
  resolve_it_ticket: ['owner'],
};

export interface ActionResult {
  message: string;
}

function requireUser(db: Database, userId?: string): User {
  const user = db.users.find((u) => u.id === userId);
  if (!user) throw new ActionError('Unknown user. Please log in again.');
  return user;
}

function requireRoles(action: string, user: User): void {
  const allowed = ACTION_ROLES[action];
  if (!allowed || !allowed.includes(user.role)) {
    throw new ActionError(
      `Role "${user.jobTitle}" is not permitted to perform "${action}". Allowed: ${allowed?.join(', ') ?? 'n/a'}.`,
    );
  }
}

function str(p: Payload, key: string, optional = false): string {
  const v = p[key];
  if (optional) return typeof v === 'string' ? v.trim() : '';
  if (typeof v !== 'string' || !v.trim()) throw new ActionError(`Missing field: ${key}`);
  return v.trim();
}

function num(p: Payload, key: string): number {
  const v = Number(p[key]);
  if (!Number.isFinite(v)) throw new ActionError(`Invalid number for field: ${key}`);
  return v;
}

function requireJob(db: Database, jobId?: string): JobOrder {
  const job = db.jobs.find((j) => j.id === jobId);
  if (!job) throw new ActionError('Job order not found.');
  return job;
}

/** Move a job to a new status through the state machine, logging everything. */
function transition(
  db: Database,
  job: JobOrder,
  to: JobStatus,
  user: User,
  event: string,
  detail: string,
): void {
  if (!canTransition(job.status, to)) {
    throw new ActionError(
      `Illegal move: "${job.status}" -> "${to}". This is blocked by the repair workflow.`,
    );
  }
  job.status = to;
  job.timeline.push(makeTimelineEntry(user.name, user.role, event, detail));
  db.auditLog.push(
    makeAuditEntry(user.name, user.role, event, 'job_order', job.code, `Status -> ${to}: ${detail}`),
  );
}

// ---------------------------------------------------------------------------
// ACTION IMPLEMENTATIONS
// ---------------------------------------------------------------------------

/**
 * FRONT DESK — Customer registration, device registration, and job order
 * creation in one guided intake (RELEASE_MANIFEST "Front Desk workspace").
 */
export function createIntake(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('create_intake', user);

  const customer: Customer = {
    id: `cus-${Date.now().toString(36)}`,
    name: str(p, 'customerName'),
    phone: str(p, 'customerPhone'),
    email: str(p, 'customerEmail', true),
    address: str(p, 'customerAddress', true),
    createdAt: nowIso(),
  };
  db.customers.push(customer);

  const device: Device = {
    id: `dev-${Date.now().toString(36)}`,
    customerId: customer.id,
    type: str(p, 'deviceType'),
    brand: str(p, 'deviceBrand'),
    model: str(p, 'deviceModel'),
    serial: str(p, 'deviceSerial', true),
    notes: str(p, 'deviceNotes', true),
    createdAt: nowIso(),
  };
  db.devices.push(device);

  const code = nextJobCode(db);
  const job: JobOrder = {
    id: `job-${Date.now().toString(36)}`,
    code,
    customerId: customer.id,
    deviceId: device.id,
    status: 'queued',
    priority: (p.priority as JobOrder['priority']) || 'normal',
    reportedProblem: str(p, 'problem'),
    intakeNotes: str(p, 'intakeNotes', true),
    partsRequested: [],
    timeline: [],
    createdAt: nowIso(),
  };
  job.timeline.push(
    makeTimelineEntry(user.name, user.role, 'intake.created', `Customer "${customer.name}" and device registered; job order ${code} created.`),
  );
  db.jobs.push(job);
  db.auditLog.push(makeAuditEntry(user.name, user.role, 'intake.created', 'job_order', code, `New intake for ${customer.name}.`));
  return { message: `Job order ${code} created for ${customer.name}.` };
}

/** FRONT DESK — Queue qualification and dispatch to a technician. */
export function dispatchJob(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('dispatch_job', user);
  const job = requireJob(db, str(p, 'jobId'));
  const tech = db.users.find((u) => u.id === str(p, 'technicianId') && u.role === 'technician');
  if (!tech) throw new ActionError('Select a valid technician to dispatch to.');

  transition(db, job, 'dispatched', user, 'job.dispatched', `Dispatched to ${tech.name} (${tech.jobTitle}).`);
  job.assignedTechnicianId = tech.id;
  return { message: `${job.code} dispatched to ${tech.name}.` };
}

/** TECHNICIAN — Acceptance. */
export function acceptJob(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('accept_job', user);
  const job = requireJob(db, str(p, 'jobId'));
  if (job.assignedTechnicianId !== user.id) throw new ActionError('This job is assigned to another technician.');
  transition(db, job, 'diagnosis', user, 'job.accepted', 'Technician accepted the job; inspection and diagnosis started.');
  return { message: `${job.code} accepted. You can now diagnose.` };
}

/** TECHNICIAN — Decline sends the job back to the queue. */
export function declineJob(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('decline_job', user);
  const job = requireJob(db, str(p, 'jobId'));
  transition(db, job, 'queued', user, 'job.declined', `Declined by technician: ${str(p, 'reason', true) || 'no reason given'}. Returned to queue.`);
  job.assignedTechnicianId = undefined;
  return { message: `${job.code} returned to queue.` };
}

/**
 * TECHNICIAN — Save diagnosis, request parts, and send a versioned quotation.
 * Customer approval links to the exact quotation version (success criterion #5
 * in RELEASE_MANIFEST.md).
 */
export function sendQuotation(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('send_quotation', user);
  const job = requireJob(db, str(p, 'jobId'));
  if (job.assignedTechnicianId !== user.id) throw new ActionError('Only the assigned technician may quote this job.');

  const items = Array.isArray(p.items) ? (p.items as QuotationItem[]) : [];
  const laborFee = num(p, 'laborFee');
  if (items.length === 0 && laborFee <= 0) {
    throw new ActionError('Add at least one part or a labor fee before sending a quotation.');
  }

  // Every quoted line must reference a real catalog part (by name or SKU).
  for (const item of items) {
    if (!db.parts.some((prt) => prt.name === item.description || prt.sku === item.description)) {
      throw new ActionError(`Unknown part: ${item.description}`);
    }
    if (!(item.qty > 0)) throw new ActionError(`Invalid quantity for ${item.description}.`);
  }
  const total = items.reduce((sum, it) => sum + it.qty * it.unitPrice, 0) + laborFee;

  job.diagnosis = str(p, 'diagnosis') || job.diagnosis;
  job.partsRequested = items.map((item) => {
    const prt = db.parts.find((x) => x.name === item.description || x.sku === item.description)!;
    return { partId: prt.id, qty: item.qty };
  });

  const version = (job.quotation?.version ?? 0) + 1;
  job.quotation = { version, items, laborFee, total, sentAt: nowIso() };

  job.timeline.push(
    makeTimelineEntry(user.name, user.role, 'quotation.sent', `Diagnosis recorded; quotation v${version} sent for customer approval.`),
  );
  db.auditLog.push(
    makeAuditEntry(user.name, user.role, 'quotation.sent', 'quotation', `${job.code}/v${version}`, `Quotation v${version} sent (total PHP ${total.toFixed(2)}).`),
  );

  // Diagnosis -> awaiting_approval. Guarded explicitly because sendQuotation
  // can also be a revision path from 'diagnosis' state only.
  if (!canTransition(job.status, 'awaiting_approval')) {
    throw new ActionError('A quotation can only be sent while the job is in diagnosis.');
  }
  job.status = 'awaiting_approval';
  return { message: `Quotation v${version} sent for ${job.code}.` };
}

/**
 * CUSTOMER — Approve or decline the exact quotation version.
 * Approval reserves stock immediately with an availability check first, so a
 * reservation can never silently overwrite inventory (success criterion #6).
 */
export function customerDecision(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('customer_decision', user);
  const job = requireJob(db, str(p, 'jobId'));
  const decision = str(p, 'decision');
  if (decision !== 'approved' && decision !== 'declined') {
    throw new ActionError('Decision must be "approved" or "declined".');
  }
  const q = job.quotation;
  if (!q || q.decision) throw new ActionError('No pending quotation on this job.');

  q.decision = decision;
  q.decidedAt = nowIso();
  job.timeline.push(
    makeTimelineEntry(user.name, user.role, `quotation.${decision}`, `Customer ${decision} quotation v${q.version}.`),
  );

  if (decision === 'declined') {
    if (!canTransition(job.status, 'quotation_declined')) {
      throw new ActionError('This quotation can no longer be declined at this stage.');
    }
    job.status = 'quotation_declined';
    db.auditLog.push(makeAuditEntry(user.name, user.role, 'quotation.declined', 'job_order', job.code, `Customer declined quotation v${q.version}.`));
    return { message: 'Quotation declined. The shop will contact you.' };
  }

  if (!canTransition(job.status, 'repairing')) {
    throw new ActionError('This quotation can no longer be approved at this stage.');
  }

  for (const req of job.partsRequested) {
    const part = db.parts.find((x) => x.id === req.partId);
    if (!part) throw new ActionError(`Part not found: ${req.partId}`);
    if (part.stock < req.qty) {
      throw new ActionError(`Not enough stock for "${part.name}" (need ${req.qty}, have ${part.stock}).`);
    }
  }
  for (const req of job.partsRequested) {
    const part = db.parts.find((x) => x.id === req.partId)!;
    part.stock -= req.qty;
  }

  job.status = 'repairing';
  db.auditLog.push(makeAuditEntry(user.name, user.role, 'quotation.approved', 'job_order', job.code, `Approved v${q.version}; parts reserved and repair started.`));
  return { message: 'Approved! Parts reserved and repair has started.' };
}

/** FRONT DESK — Send a declined job back to the technician for a revised quote. */
export function reviseQuotation(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('revise_quotation', user);
  const job = requireJob(db, str(p, 'jobId'));
  transition(db, job, 'diagnosis', user, 'quotation.revision_requested', `Returned to technician for a revised quotation. Note: ${str(p, 'note', true) || 'customer requests adjustment'}.`);
  if (job.quotation) delete job.quotation.decision; // fresh decision on v(n+1)
  return { message: `${job.code} returned to the technician for re-quotation.` };
}

/** TECHNICIAN — Repair finished; hand over to functional testing. */
export function completeRepair(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('complete_repair', user);
  const job = requireJob(db, str(p, 'jobId'));
  transition(db, job, 'testing', user, 'repair.completed', `Repair work finished. Notes: ${str(p, 'notes', true) || 'none'}. Ready for testing/QC.`);
  return { message: `${job.code} submitted for testing & QC.` };
}

/** QC SUPERVISOR — Pass or fail functional testing (fail returns to repair). */
export function qcDecision(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('qc_decision', user);
  const job = requireJob(db, str(p, 'jobId'));
  const result = str(p, 'result');
  if (result === 'pass') {
    transition(db, job, 'ready_for_payment', user, 'qc.passed', `QC approved. Notes: ${str(p, 'notes', true) || 'all checks passed'}.`);
    return { message: `${job.code} passed QC. Ready for payment.` };
  }
  if (result === 'fail') {
    transition(db, job, 'repairing', user, 'qc.failed', `QC failed: ${str(p, 'notes')}. Returned to repair.`);
    return { message: `${job.code} failed QC and returned to repair.` };
  }
  throw new ActionError('QC result must be "pass" or "fail".');
}

/**
 * FRONT DESK — Record payment. Receipt numbering is separate from payment
 * recording and reprinting is idempotent by receipt number (success
 * criterion #7). A mismatch with the quoted total needs explicit confirmation.
 */
export function recordPayment(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('record_payment', user);
  const job = requireJob(db, str(p, 'jobId'));
  if (job.payment) throw new ActionError('Payment already recorded for this job.');
  const amount = num(p, 'amount');
  const expected = job.quotation?.total ?? 0;
  const method = str(p, 'method') as 'cash' | 'gcash' | 'bank_transfer' | 'card';
  if (amount <= 0) throw new ActionError('Payment amount must be greater than zero.');

  if (expected > 0 && amount !== expected && p.allowMismatch !== true) {
    throw new ActionError(`Amount PHP ${amount.toFixed(2)} does not match quoted total PHP ${expected.toFixed(2)}. Tick "accept different amount" to confirm.`);
  }

  transition(db, job, 'paid', user, 'payment.recorded', `Payment of PHP ${amount.toFixed(2)} (${method}) recorded.`);
  job.payment = { amount, method, paidAt: nowIso(), receiptNo: `RCP-${job.code.replace('JOB-', '')}` };
  return { message: `Payment recorded. Receipt ${job.payment.receiptNo} is ready to print.` };
}

/** FRONT DESK — Release device and activate warranty (terminal step). */
export function releaseDevice(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('release_device', user);
  const job = requireJob(db, str(p, 'jobId'));
  const months = Math.max(0, Number(p.warrantyMonths ?? 3));
  transition(db, job, 'released', user, 'device.released', `Device released to customer. Warranty activated: ${months} month(s).`);
  const releasedAt = new Date(nowIso());
  job.warranty = {
    months,
    activatedAt: releasedAt.toISOString(),
    expiresAt: new Date(releasedAt.setMonth(releasedAt.getMonth() + months)).toISOString(),
  };
  return { message: `${job.code} released. Warranty active for ${months} month(s).` };
}

/** FRONT DESK — Cancel an unfinished job with a reason (audited). */
export function cancelJob(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('cancel_job', user);
  const job = requireJob(db, str(p, 'jobId'));
  transition(db, job, 'cancelled', user, 'job.cancelled', `Cancelled: ${str(p, 'reason') || 'no reason given'}.`);
  return { message: `${job.code} cancelled.` };
}

/** Any staff role — Open an IT ticket, optionally linked to a job order. */
export function openItTicket(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('open_it_ticket', user);
  const jobCode = str(p, 'jobCode', true) || undefined;
  db.itTickets.push({
    id: `itt-${Date.now().toString(36)}`,
    title: str(p, 'title'),
    detail: str(p, 'detail'),
    jobCode,
    status: 'open',
    createdAt: nowIso(),
  });
  db.auditLog.push(makeAuditEntry(user.name, user.role, 'it.ticket.opened', 'it_ticket', jobCode ?? '-', `IT ticket opened: ${str(p, 'title')}`));
  return { message: 'IT ticket created.' };
}

/** OWNER — Resolve an IT ticket. Resolution never completes the business task. */
export function resolveItTicket(db: Database, p: Payload): ActionResult {
  const user = requireUser(db, str(p, 'userId'));
  requireRoles('resolve_it_ticket', user);
  const ticket = db.itTickets.find((t) => t.id === str(p, 'ticketId'));
  if (!ticket) throw new ActionError('Ticket not found.');
  ticket.status = 'resolved';
  ticket.resolvedAt = nowIso();
  db.auditLog.push(makeAuditEntry(user.name, user.role, 'it.ticket.resolved', 'it_ticket', ticket.id, `Resolved: ${ticket.title}`));
  return { message: `Ticket "${ticket.title}" resolved.` };
}

// ---------------------------------------------------------------------------
// DISPATCHER — maps action names from the UI to implementations
// ---------------------------------------------------------------------------

const HANDLERS: Record<string, (db: Database, p: Payload) => ActionResult> = {
  create_intake: createIntake,
  dispatch_job: dispatchJob,
  accept_job: acceptJob,
  decline_job: declineJob,
  send_quotation: sendQuotation,
  revise_quotation: reviseQuotation,
  customer_decision: customerDecision,
  complete_repair: completeRepair,
  qc_decision: qcDecision,
  record_payment: recordPayment,
  release_device: releaseDevice,
  cancel_job: cancelJob,
  open_it_ticket: openItTicket,
  resolve_it_ticket: resolveItTicket,
};

/** Entry point used by POST /api/action. Throws ActionError on any violation. */
export function performAction(db: Database, action: string, payload: Payload): ActionResult {
  const handler = HANDLERS[action];
  if (!handler) throw new ActionError(`Unknown action: ${action}`);
  return handler(db, payload);
}
