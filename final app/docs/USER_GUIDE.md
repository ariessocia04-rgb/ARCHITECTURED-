# User Guide — Final App (Repair Shop Operations)

This guide walks every persona through the app. Total time to learn: ~10 minutes.

---

## 1. Starting the app

1. Open a terminal in the `final app` folder.
2. Run `npm install` (first time only).
3. Run `npm run dev`.
4. Open **http://localhost:3000**.

You'll see the **persona picker** — this is the demo login. Click who you want
to be. You can switch personas any time from any page (**Log out** button, top
right). Tip: open two browser windows side by side to act as two people at once.

---

## 2. Front Desk — Alex Reyes

### Register a walk-in customer and create a job order
1. Fill the **New Intake** form: customer name/phone, device type/brand/model,
   reported problem, plus optional serial number and intake notes
   (accessories, condition, consent).
2. Click **Create job order** → a code like `JOB-2026-0003` is generated.
   Tell the customer this code — it's their tracking key.

### Dispatch to a technician
1. In **Active Jobs**, click the queued job's row.
2. Choose a technician in the dropdown and click **Dispatch →**.

### After repair is done
The job moves through the technician and QC automatically. When it reaches
**Ready for Payment**:
1. Open the job row, enter the amount (pre-filled with the quoted total) and
   payment method, then **Record payment**.
   - If the amount differs from the quote, confirm the mismatch explicitly.
2. When **Paid**: click **🖨️ Print receipt & release doc** to open printable
   documents (80 mm receipt + A4 release certificate).
3. Choose warranty months and click **Release device ✔**.

### If a customer declines a quotation
The job shows **Quotation Declined**. Click **Send back for revised quotation**
— the technician can re-quote as version n+1.

### Blocked by equipment/systems?
Use the **IT Blockers** section to open an IT ticket. It never completes your
business step — it just records and tracks the blocker.

---

## 3. Technician — Jordan Cruz

### Accept work
**My Repair Queue** lists jobs dispatched to you:
- **Accept** → job enters diagnosis.
- **Decline** → returns to the Front Desk queue (give a reason).

### Diagnose and quote
Open the job under **My Workbench**:
1. Review the 🔒 protected intake snapshot.
2. Write the diagnosis.
3. Build the quotation: add part lines from inventory (prices auto-fill) and
   set the labor fee.
4. **Send quotation to customer** → the customer decides in their portal.

### Repair
Once approved, stock is reserved automatically and the status becomes
**Repairing**. Add completion notes and click **Finish repair → send to
Testing/QC**.

If QC fails the job, it comes back to you as **Repairing** with QC notes.

---

## 4. QC Supervisor — Sam Villanueva

The **Testing Queue** shows repairs to verify. For each job:
- Choose **PASS** (moves to Ready for Payment) or **FAIL** (returns to repair).
- Add notes describing what was tested or why it failed.

---

## 5. Customer — Ana Dela Rosa

1. Enter your **job code** (from your intake receipt), e.g. `JOB-2026-0001`.
2. Watch live status on the timeline.
3. When there's a quotation, review every line and either
   **✓ Approve & start repair** or **✗ Decline**.
4. After release, your warranty window is shown right on the tracking page.

---

## 6. Owner — Maria Santos

- **KPIs:** active jobs, awaiting approval, revenue collected, released count,
  parts at reorder level.
- **Pipeline:** every job by lifecycle stage.
- **Inventory Health:** highlighted rows are at/below reorder level.
- **IT Tickets:** resolve tickets opened by staff.
- **Audit Trail:** append-only log of every consequential action (who, what,
  when).

---

## Tips

- **Reset demo data:** stop server → delete `data/db.json` → restart.
- **Print cleanly:** on the receipt page only the document prints (Ctrl+P).
- **Two-person flow:** run Front Desk in one window, Customer Portal in
  another, and approve a quotation live.
