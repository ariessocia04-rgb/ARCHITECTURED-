/**
 * ============================================================================
 * SEED DATABASE — first-run demo content
 * ============================================================================
 * Creates the pilot boundary exactly as RELEASE_MANIFEST.md requires:
 *   - One tenant ("GadgetCare Repair Solutions"), one branch (Manila),
 *     one warehouse.
 *   - Up to five pilot staff accounts (Pro Trial mode).
 *   - Demo customers/devices/parts plus two sample job orders so every
 *     workspace has something meaningful to show immediately.
 * ============================================================================
 */

import type { Database } from './types';
import { hashPassword } from './hash';

const daysAgo = (n: number) =>
  new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString();

// Pilot credentials (shown on the login page): staff = staff123, customer = customer123
const STAFF_HASH = hashPassword('staff123');
const CUSTOMER_HASH = hashPassword('customer123');

export function buildSeedDatabase(): Database {
  return {
    tenant: {
      id: 'ten-01',
      name: 'GadgetCare Repair Solutions',
      branch: 'Manila Main Branch',
      currency: 'PHP',
    },
    users: [
      { id: 'usr-01', name: 'Maria Santos', role: 'owner', email: 'maria@gadgetcare.ph', jobTitle: 'Business Owner', passwordHash: STAFF_HASH },
      { id: 'usr-02', name: 'Alex Reyes', role: 'front_desk', email: 'alex@gadgetcare.ph', jobTitle: 'Front Desk Agent', passwordHash: STAFF_HASH },
      { id: 'usr-03', name: 'Jordan Cruz', role: 'technician', email: 'jordan@gadgetcare.ph', jobTitle: 'Senior Technician', passwordHash: STAFF_HASH },
      { id: 'usr-04', name: 'Sam Villanueva', role: 'qc', email: 'sam@gadgetcare.ph', jobTitle: 'QC Supervisor', passwordHash: STAFF_HASH },
      { id: 'usr-05', name: 'Ana Dela Rosa', role: 'customer', email: 'ana@example.com', jobTitle: 'Customer', passwordHash: CUSTOMER_HASH },
    ],
    customers: [
      { id: 'cus-01', name: 'Ana Dela Rosa', phone: '+63 917 100 2000', email: 'ana@example.com', address: '12 Mabini St., Manila', createdAt: daysAgo(30) },
      { id: 'cus-02', name: 'Paolo Mendoza', phone: '+63 917 300 4000', email: 'paolo@example.com', address: '88 Recto Ave., Manila', createdAt: daysAgo(12) },
    ],
    devices: [
      { id: 'dev-01', customerId: 'cus-01', type: 'Laptop', brand: 'Lenovo', model: 'IdeaPad 3', serial: 'SN-LNV-99120', notes: 'Charger included', createdAt: daysAgo(10) },
      { id: 'dev-02', customerId: 'cus-02', type: 'Phone', brand: 'Samsung', model: 'Galaxy A54', serial: 'SN-SMS-55231', notes: 'Screen cracked', createdAt: daysAgo(5) },
    ],
    parts: [
      { id: 'prt-01', sku: 'LCD-A54', name: 'Samsung A54 OLED Screen Assembly', stock: 4, reorderLevel: 3, unitPrice: 3800 },
      { id: 'prt-02', sku: 'BAT-IDP3', name: 'Lenovo IdeaPad 3 Battery 45Wh', stock: 6, reorderLevel: 2, unitPrice: 2450 },
      { id: 'prt-03', sku: 'KB-LOG-K120', name: 'Logitech K120 Keyboard', stock: 15, reorderLevel: 5, unitPrice: 650 },
      { id: 'prt-04', sku: 'SSD-500-NVME', name: '500GB NVMe SSD', stock: 8, reorderLevel: 3, unitPrice: 2900 },
      { id: 'prt-05', sku: 'RAM-8-DDR4', name: '8GB DDR4 SO-DIMM', stock: 12, reorderLevel: 4, unitPrice: 1500 },
      { id: 'prt-06', sku: 'FAN-IDP3', name: 'Lenovo IdeaPad 3 Cooling Fan', stock: 3, reorderLevel: 3, unitPrice: 850 },
    ],
    jobs: [
      {
        id: 'job-0001',
        code: 'JOB-2026-0001',
        customerId: 'cus-01',
        deviceId: 'dev-01',
        status: 'awaiting_approval',
        priority: 'normal',
        reportedProblem: 'Laptop shuts down after a few minutes and gets very hot.',
        intakeNotes: 'Intake snapshot: unit powers on; heavy dust in vents; battery bulge suspected. Accessories: charger.',
        assignedTechnicianId: 'usr-03',
        diagnosis:
          'Confirmed overheating: failed cooling fan and degraded battery. Battery shows early swelling and must be replaced. Recommends fan + battery replacement and internal cleaning.',
        partsRequested: [{ partId: 'prt-02', qty: 1 }, { partId: 'prt-06', qty: 1 }],
        quotation: {
          version: 1,
          items: [
            { description: 'Lenovo IdeaPad 3 Battery 45Wh', qty: 1, unitPrice: 2450 },
            { description: 'Lenovo IdeaPad 3 Cooling Fan', qty: 1, unitPrice: 850 },
          ],
          laborFee: 800,
          total: 4100,
          sentAt: daysAgo(1),
        },
        timeline: [
          { at: daysAgo(3), actorName: 'Alex Reyes', actorRole: 'front_desk', event: 'intake.created', detail: 'Customer and device registered; job order created.' },
          { at: daysAgo(3), actorName: 'Alex Reyes', actorRole: 'front_desk', event: 'job.dispatched', detail: 'Dispatched to Jordan Cruz (Senior Technician).' },
          { at: daysAgo(2), actorName: 'Jordan Cruz', actorRole: 'technician', event: 'job.accepted', detail: 'Technician accepted the job.' },
          { at: daysAgo(1), actorName: 'Jordan Cruz', actorRole: 'technician', event: 'quotation.sent', detail: 'Diagnosis complete; quotation v1 sent for customer approval.' },
        ],
        createdAt: daysAgo(3),
      },
      {
        id: 'job-0002',
        code: 'JOB-2026-0002',
        customerId: 'cus-02',
        deviceId: 'dev-02',
        status: 'queued',
        priority: 'high',
        reportedProblem: 'Cracked screen after drop; display shows vertical lines.',
        intakeNotes: 'Intake snapshot: touch still responsive. No accessories.',
        partsRequested: [],
        timeline: [
          { at: daysAgo(1), actorName: 'Alex Reyes', actorRole: 'front_desk', event: 'intake.created', detail: 'Walk-in customer registered; device intake completed; job order created.' },
        ],
        createdAt: daysAgo(1),
      },
    ],
    itTickets: [
      {
        id: 'itt-01',
        title: 'Label printer offline at front desk',
        detail: 'Thermal receipt printer not detected after Windows update. Using safe fallback printing until resolved.',
        status: 'open',
        createdAt: daysAgo(1),
      },
    ],
    auditLog: [
      { at: daysAgo(1), actorName: 'System', actorRole: 'owner', action: 'seed', targetType: 'database', targetId: 'db', summary: 'Demo database initialized with pilot seed data.' },
    ],
    counters: { job: 2 },
  };
}
