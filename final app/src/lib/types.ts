/**
 * ============================================================================
 * DOMAIN TYPES — "final app" (Connected Repair Operations Pilot)
 * ============================================================================
 * These types are the single shared language of the whole application.
 *
 * They are a faithful, runnable translation of the canonical architecture in
 * the ARCHITECTURED repository:
 *   - Applications/ (Front Desk, Technician/QC, Owner, Customer Portal)
 *   - SaaS Platform/ shared contracts
 *   - Implementation Planning/Release 1 MVP/01. Release Boundary/RELEASE_MANIFEST.md
 *
 * Release 1 pilot boundary honored here:
 *   - One tenant, one branch, one warehouse.
 *   - Primary currency: PHP. Primary timezone: Asia/Manila.
 *   - Free + Pro Trial subscription mode (no paid checkout).
 *   - No AI features, no public API, no multi-company (explicit R1 exclusions).
 * ============================================================================
 */

/** Roles from RELEASE_MANIFEST.md "Included user roles" (pilot-relevant subset). */
export type Role =
  | 'owner'        // Tenant Owner / Business Owner — dashboards, audit, reports
  | 'front_desk'   // Front Desk / Customer Service Agent — intake to release
  | 'dispatcher'   // Dispatcher / Queue Coordinator — queue qualification
  | 'technician'   // Technician / Frontline Resource — diagnosis + repair
  | 'qc'           // Quality Control Supervisor — testing approval
  | 'finance'      // Finance / Cashier — payment recording
  | 'customer';    // Customer — tracking + quotation decision

export interface User {
  id: string;
  name: string;
  role: Role;
  /** Demo-only login: users are seeded; production would use Supabase Auth. */
  email: string;
  jobTitle: string;
  /** scrypt password hash — used by POST /api/login (never sent to clients). */
  passwordHash?: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  createdAt: string;
}

export interface Device {
  id: string;
  customerId: string;
  type: string;     // e.g. Laptop, Phone, Printer
  brand: string;
  model: string;
  serial: string;
  notes: string;
  createdAt: string;
}

/**
 * Repair lifecycle statuses — the executable version of the master flow in
 * README.md ("End-to-End Service Flow") and the mandatory cross-department
 * workflow in RELEASE_MANIFEST.md.
 */
export type JobStatus =
  | 'queued'              // Job order created at intake; waiting for dispatch
  | 'dispatched'          // Assigned to a technician; awaiting acceptance
  | 'diagnosis'           // Technician accepted; inspecting and diagnosing
  | 'awaiting_approval'   // Quotation sent; customer must approve or decline
  | 'quotation_declined'  // Customer declined; front desk may revise or cancel
  | 'repairing'           // Approved; parts reserved; repair in progress
  | 'testing'             // Repair done; functional testing underway
  | 'ready_for_payment'   // QC passed; finance/front desk records payment
  | 'paid'                // Payment recorded; receipt available
  | 'released'            // Device released; warranty activated (terminal)
  | 'cancelled';          // Cancelled before completion

export interface QuotationItem {
  description: string;
  qty: number;
  unitPrice: number; // PHP
}

/** Quotations are versioned — customer approval links to an exact version. */
export interface Quotation {
  version: number;
  items: QuotationItem[];
  laborFee: number;
  total: number;
  sentAt: string;
  decision?: 'approved' | 'declined';
  decidedAt?: string;
}

export interface TimelineEntry {
  at: string;
  actorName: string;
  actorRole: Role;
  event: string;       // machine-readable, e.g. 'job.created'
  detail: string;      // human-readable explanation
}

export interface Payment {
  amount: number;
  method: 'cash' | 'gcash' | 'bank_transfer' | 'card';
  paidAt: string;
  receiptNo: string;
}

export interface Warranty {
  months: number;
  activatedAt: string;
  expiresAt: string;
}

export interface JobOrder {
  id: string;
  code: string;                 // Customer-facing tracking code, e.g. JOB-2026-0001
  customerId: string;
  deviceId: string;
  status: JobStatus;
  priority: 'low' | 'normal' | 'high';
  reportedProblem: string;
  intakeNotes: string;         // Protected intake snapshot for technicians
  assignedTechnicianId?: string;
  diagnosis?: string;
  partsRequested: { partId: string; qty: number }[]; // Requested by technician
  quotation?: Quotation;
  payment?: Payment;
  warranty?: Warranty;
  timeline: TimelineEntry[];
  createdAt: string;
}

export interface InventoryPart {
  id: string;
  sku: string;
  name: string;
  stock: number;
  reorderLevel: number; // Owner dashboard flags stock <= this
  unitPrice: number;    // PHP
}

export interface ITTicket {
  id: string;
  title: string;
  detail: string;
  jobCode?: string;     // Optional link to the affected job order
  status: 'open' | 'resolved';
  createdAt: string;
  resolvedAt?: string;
}

export interface AuditEntry {
  at: string;
  actorName: string;
  actorRole: Role;
  action: string;
  targetType: string;
  targetId: string;
  summary: string;
}

/** The whole database — persisted as JSON in data/db.json. */
export interface Database {
  tenant: { id: string; name: string; branch: string; currency: 'PHP' };
  users: User[];
  customers: Customer[];
  devices: Device[];
  jobs: JobOrder[];
  parts: InventoryPart[];
  itTickets: ITTicket[];
  auditLog: AuditEntry[];
  counters: { job: number };
}
