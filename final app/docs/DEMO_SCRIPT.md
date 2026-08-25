# Demo Script — Full Journey in ~10 Minutes

Follow this script to demonstrate the complete repair journey end to end,
exactly as RELEASE_MANIFEST.md success criterion #4 requires ("one complete
repair can move from intake through warranty activation").

**Setup:** `npm install`, `npm run dev`, open http://localhost:3000 in TWO
browser windows side by side.

| Step | Window A | Window B | What happens |
|---|---|---|---|
| 1 | Login **Alex Reyes** (Front Desk) | Login **Ana Dela Rosa** (Customer) | Two personas ready |
| 2 | Use seeded job `JOB-2026-0001` — already awaiting approval | | Skip ahead if you like |
| 3 | | Enter code `JOB-2026-0001` | Customer sees quotation v1 with full price breakdown |
| 4 | | Click **✓ Approve & start repair** | Stock reserved; status → Repairing |
| 5 | Login switch: **Jordan Cruz** (Technician) | | Workbench shows the approved job |
| 6 | **Finish repair → send to Testing/QC** | | Status → Testing |
| 7 | Login switch: **Sam Villanueva** (QC) | | Job in Testing Queue |
| 8 | Submit decision **PASS** | | Status → Ready for Payment |
| 9 | Back to **Alex Reyes** (Front Desk) | | Record payment (amount pre-filled) |
| 10 | Click **🖨️ Print receipt & release doc**, Ctrl+P | | 80mm receipt + A4 release certificate print |
| 11 | Set 3 months warranty → **Release device ✔** | | Status → Released; warranty activated |
| 12 | | Refresh customer portal | Customer sees "Released", warranty expiry date |
| 13 | Login switch: **Maria Santos** (Owner) | | KPIs show revenue PHP 4,100; audit trail shows the whole journey |

### Also demonstrate the guards (30 seconds each)
- Try recording a wrong payment amount → explicit mismatch confirmation.
- As customer, **decline** a quotation → Front Desk sees Quotation Declined →
  sends back → technician re-quotes as v2.
- Log in as the wrong role and try an action → permission notice.
