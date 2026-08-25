/**
 * ============================================================================
 * WIREFLOW MAP — every screen of the repair journey as data
 * ============================================================================
 * Translates the repository's wireframe/wireflow architecture (Design/ and
 * each application package) into a clickable, in-app prototype: each node is
 * one screen, listing its UI regions, actor, next steps, and a jump link into
 * the real working page.
 * ============================================================================
 */

export type Dept = 'Customer' | 'Front Desk' | 'Technician' | 'QC' | 'Finance' | 'IT Ops';

export interface FlowNode {
  id: string;
  title: string;
  dept: Dept;
  purpose: string;
  ui: string[];          // wireframe regions top-to-bottom
  actions: string[];
  next: string[];
  liveHref?: string;     // matching real screen
}

export const FLOW: FlowNode[] = [
  {
    id: 'portal', title: 'Customer Portal / Walk-in', dept: 'Customer',
    purpose: 'Customer requests service or arrives with a device.',
    ui: ['Shop header + branch', 'Track-by-code input', 'Repair list with status badges'],
    actions: ['Look up job code', 'Open quotation', 'Approve / Decline'],
    next: ['intake'], liveHref: '/customer',
  },
  {
    id: 'intake', title: 'Customer & Device Intake', dept: 'Front Desk',
    purpose: 'Register the customer, the device, and the reported problem.',
    ui: ['Customer fields (name, phone)', 'Device fields (type, brand, model, S/N)',
         'Problem + intake notes (accessories, condition)', 'Create button'],
    actions: ['Search-before-create', 'Save intake snapshot'],
    next: ['joborder'], liveHref: '/front-desk',
  },
  {
    id: 'joborder', title: 'Job Order Created', dept: 'Front Desk',
    purpose: 'Unique tracking code generated; receipt available.',
    ui: ['Job code header (JOB-YYYY-NNNN)', 'Priority selector', 'Queue panel'],
    actions: ['Print intake slip', 'Send to queue'],
    next: ['queue'],
  },
  {
    id: 'queue', title: 'Queue Qualification', dept: 'Front Desk',
    purpose: 'Review queue, set priority, choose a technician.',
    ui: ['Queued jobs table', 'Technician dropdown', 'Dispatch button'],
    actions: ['Set priority', 'Dispatch → technician'],
    next: ['accept'], liveHref: '/front-desk',
  },
  {
    id: 'accept', title: 'Technician Acceptance', dept: 'Technician',
    purpose: 'Assigned technician accepts or declines with reason.',
    ui: ['My Repair Queue list', 'Accept / Decline buttons'],
    actions: ['Accept job', 'Decline → back to queue'],
    next: ['diagnosis'], liveHref: '/technician',
  },
  {
    id: 'diagnosis', title: 'Inspection & Diagnosis', dept: 'Technician',
    purpose: 'Inspect against the protected intake snapshot; find root cause.',
    ui: ['🔒 Intake snapshot card', 'Diagnosis textarea', 'Parts picker with live stock'],
    actions: ['Write diagnosis', 'Select parts + labor fee', 'Send quotation v(n)'],
    next: ['quotation'], liveHref: '/technician',
  },
  {
    id: 'quotation', title: 'Quotation Sent', dept: 'Customer',
    purpose: 'Versioned price offer; approval links to the exact version.',
    ui: ['Itemized parts table', 'Labor line', 'Total + Approve/Decline buttons'],
    actions: ['Approve → reserve parts', 'Decline → revision path'],
    next: ['approval', 'declined'], liveHref: '/customer',
  },
  {
    id: 'approval', title: 'Approval & Parts Reservation', dept: 'Front Desk',
    purpose: 'Stock checked then reserved; repair authorized.',
    ui: ['Confirmation banner', 'Reserved parts list', 'Status → Repairing'],
    actions: ['Auto stock decrement'],
    next: ['repair'],
  },
  {
    id: 'declined', title: 'Revision Path', dept: 'Front Desk',
    purpose: 'Customer declined — adjust or cancel without losing history.',
    ui: ['Declined banner with note field', 'Re-quote / Cancel buttons'],
    actions: ['Return to technician', 'Cancel job (audited)'],
    next: ['diagnosis'], liveHref: '/front-desk',
  },
  {
    id: 'repair', title: 'Repair Execution', dept: 'Technician',
    purpose: 'Perform the approved work using reserved parts.',
    ui: ['Work order with reserved parts', 'Completion notes box'],
    actions: ['Finish repair → Testing'],
    next: ['testing'], liveHref: '/technician',
  },
  {
    id: 'testing', title: 'Functional Testing', dept: 'QC',
    purpose: 'Independent verification before customer hand-off.',
    ui: ['Testing checklist per device type', 'PASS / FAIL decision', 'Notes'],
    actions: ['Pass → payment stage', 'Fail → back to repair'],
    next: ['payment', 'repair'], liveHref: '/qc',
  },
  {
    id: 'payment', title: 'Invoice & Payment', dept: 'Front Desk',
    purpose: 'Collect payment; mismatch requires explicit confirmation.',
    ui: ['Amount pre-filled from quote', 'Method select (cash/GCash/bank/card)', 'Record button'],
    actions: ['Record payment → receipt number issued'],
    next: ['release'], liveHref: '/front-desk',
  },
  {
    id: 'release', title: 'Receipt, Release & Warranty', dept: 'Finance',
    purpose: 'Print documents, return the device, activate warranty.',
    ui: ['80 mm thermal receipt preview', 'A4 release certificate', 'Warranty months input'],
    actions: ['Print', 'Release device ✔'],
    next: ['feedback'], liveHref: '/front-desk',
  },
  {
    id: 'feedback', title: 'Tracking, Warranty & Closure', dept: 'Customer',
    purpose: 'Customer monitors status and warranty window after release.',
    ui: ['Live timeline', 'Warranty expiry banner'],
    actions: ['View timeline'],
    next: [], liveHref: '/customer',
  },
];

/** IT blockers attach to any affected stage without owning the business task. */
export const IT_BRANCH = {
  title: 'IT Blocker Ticket (cross-cutting)',
  purpose: 'Printer/workstation/system failure blocks only the affected stage.',
  ui: ['Ticket form (title, detail, linked job)', 'Open tickets list'],
  actions: ['Open ticket from any workspace', 'Owner resolves it'],
  liveHref: '/front-desk' as const,
};
