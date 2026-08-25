# 🔧 Final App — Repair Shop Operations

**Connected Repair Operations Pilot** — a ready-to-run implementation of the
ARCHITECTURED Technician Repair SaaS **Release 1 MVP plan**
(`ROS-R1-MVP-2026-01`). This is the working application built from the
architecture documents in this repository.

> ✅ **No cloud accounts. No API keys. No configuration.**
> Everything runs on your PC with one command.

---

## 🚀 Quick Start (3 steps)

Open a terminal in this `final app` folder, then:

```powershell
npm install     # 1. install dependencies (one time)
npm run dev     # 2. start the app
```

3. Open **http://localhost:3000** in your browser and pick a persona. Done.

Your data is stored automatically in `data/db.json` (created & seeded on first
run). Delete that file any time to reset the demo to fresh seed data.

---

## 👥 Personas (demo login)

| Persona | Workspace | What they do |
|---|---|---|
| Maria Santos | **Owner** | KPIs, revenue, pipeline, inventory health, IT tickets, audit trail |
| Alex Reyes | **Front Desk** | Register customers/devices, create job orders, dispatch, record payments, print receipts, release devices |
| Jordan Cruz | **Technician** | Accept/decline jobs, diagnose, quote parts & labor, repair |
| Sam Villanueva | **QC Supervisor** | Functional testing — pass to payment or fail back to repair |
| Ana Dela Rosa | **Customer Portal** | Track repairs by job code, approve/decline quotations |

---

## 🔄 The Complete Repair Journey (all implemented)

```text
Intake → Job Order → Dispatch → Acceptance → Diagnosis → Quotation →
Customer Approval → Parts Reservation → Repair → Testing/QC → Payment →
Receipt Printing → Release → Warranty Activation → Customer Tracking
```

Also included: versioned quotations, stock reservation with availability
checks, payment mismatch confirmation, idempotent receipt reprinting, IT
blocker tickets, and an append-only audit trail — all matching the release's
success criteria.

---

## 📁 Project Structure

```text
final app/
├── README.md                  ← you are here
├── docs/
│   ├── USER_GUIDE.md          ← step-by-step walkthrough for every persona
│   ├── ARCHITECTURE.md        ← how the code maps to the repository plan
│   └── DEMO_SCRIPT.md         ← 10-minute end-to-end demo script
├── data/db.json               ← your local database (auto-created)
└── src/
    ├── lib/                   ← domain model & business rules
    │   ├── types.ts           ← shared data model (from RELEASE_MANIFEST.md)
    │   ├── workflow.ts        ← lifecycle state machine (guarded transitions)
    │   ├── actions.ts         ← every business action with role permissions
    │   ├── store.ts           ← JSON persistence layer (swap for Supabase later)
    │   ├── seed.ts            ← first-run demo data
    │   └── format.ts          ← PHP currency / Asia-Manila time helpers
    ├── components/            ← reused UI pieces (timeline, badges, forms…)
    └── app/
        ├── page.tsx           ← persona login (start page)
        ├── front-desk/        ← Front Desk workspace
        ├── technician/        ← Technician workspace
        ├── qc/                ← QC workspace
        ├── owner/             ← Owner dashboard
        ├── customer/          ← Customer tracking portal
        ├── receipt/[code]/    ← printable 80mm receipt + A4 release doc
        └── api/               ← /api/state (read) and /api/action (write)
```

Every source file starts with a comment block explaining its purpose and which
part of the repository plan it implements.

---

## 🧭 Where each plan requirement lives

| Plan document | Implemented by |
|---|---|
| `README.md` service flow | `src/lib/workflow.ts` state machine |
| Release Manifest roles | `src/lib/actions.ts` role permission table |
| Front Desk surfaces | `src/app/front-desk/` + components |
| Technician surfaces | `src/app/technician/` + work panel |
| Shared shell & states | `src/components/ui.tsx`, loading/error notices everywhere |
| Printing tier (80mm/A4) | `src/app/receipt/[code]/` |
| Audit requirements | `auditLog` + every job's `timeline` |

See `docs/ARCHITECTURE.md` for the full mapping and the upgrade path to
Supabase/PostgreSQL described in `Implementation Planning/Release 1 MVP/`.

---

## 🛠️ Troubleshooting

| Problem | Fix |
|---|---|
| `npm run dev` fails after clone | Run `npm install` first. |
| Port 3000 busy | `npm run dev -- -p 3001` then open localhost:3001. |
| Want fresh demo data | Stop the server, delete `data/db.json`, restart. |
| "Role not permitted" message | That's the permission system working — switch persona on the start page. |

---

## ⚠️ Honest status

This is the **Release 1 controlled pilot build**: single tenant, demo
authentication (persona picker), local JSON storage. The canonical production
stack (Supabase Auth/PostgreSQL with row-level security, Tauri/Rust print
agent) is documented in the repository plans and connects at the boundaries
this app already defines (`store.ts` and the action layer) — see
`docs/ARCHITECTURE.md`.
