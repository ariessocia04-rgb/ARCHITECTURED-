# Deployment Guide — Render (backend/database) + Vercel (frontend)

Follow these steps once (~15 minutes). Afterward the app runs live on any
device: laptop, tablet, phone — everyone sees the same data in real time.

---

## Architecture

```text
Phone / Tablet / Laptop browsers
        ↓  https://your-app.vercel.app          ← FRONTEND on Vercel
Next.js app (pages + API routes)
        ↓  DATABASE_URL (encrypted connection)   ← BACKEND/DATA on Render
PostgreSQL database (auto-created schema, auto-seeded)
```

- **Vercel** hosts the Next.js frontend *and* its API routes (serverless).
- **Render** hosts the PostgreSQL database — the single live source of truth.
- The database schema is created and seeded automatically on first use.
  You never run SQL manually.

---

## Step 1 — Create the backend database on Render

1. Go to <https://dashboard.render.com> and sign in (create a free account if needed).
2. Click **New +** → **Postgres**.
3. Fill in:
   - **Name:** `repair-saas-db` (any name)
   - **Database / User:** leave defaults
   - **Region:** choose closest to you (e.g. Singapore)
   - **Plan:** Free (or a paid plan for production use)
4. Click **Create Database** and wait until status shows **Available**.
5. Open the database page → find the **Connections** section.
6. Copy the **External Database URL** (starts with `postgres://…`).
   Keep this private — it is your database password.

## Step 2 — Put the code on GitHub

Ask your assistant to commit & push, or do it manually:

```powershell
cd "C:\Users\socia\Desktop\ARCHITECTURED-\final app"   # or the repo root
git add .
git commit -m "Final App: live multi-device repair SaaS (Render Postgres + Vercel)"
git push origin main
```

(The whole repo can be pushed; Vercel only needs the `final app` folder's
package.json at the **Root Directory** setting below.)

## Step 3 — Deploy the frontend on Vercel

1. Go to <https://vercel.com> → **Add New…** → **Project** → import your
   `ARCHITECTURED-` GitHub repository.
2. Configure the project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** click **Edit** → set to `final app`
     (Vercel builds the subfolder where package.json lives)
3. Open **Environment Variables** and add one variable:
   - **Key:** `DATABASE_URL`
   - **Value:** paste the External Database URL from Step 1.5
   - **Environments:** Production (+ Preview recommended)
4. Click **Deploy** and wait ~2 minutes.

## Step 4 — First run (automatic)

When you open your Vercel URL the first time, the app will:
1. Create all tables in your Render database,
2. Seed the demo tenant, users, parts, and sample jobs,
3. Show the login screen with a green **● LIVE — all devices synced** badge.

Log in from your laptop and your phone at the same time — actions appear on
both within seconds.

---

## Pilot login accounts

| Email | Password | Role |
|---|---|---|
| maria@gadgetcare.ph | staff123 | Owner |
| alex@gadgetcare.ph | staff123 | Front Desk |
| jordan@gadgetcare.ph | staff123 | Technician |
| sam@gadgetcare.ph | staff123 | QC |
| ana@example.com | customer123 | Customer |

Change these after piloting (they are seeded into the `users` table).

## Local development against the live database

```powershell
Copy-Item .env.local.example .env.local
# paste your DATABASE_URL into .env.local, then:
npm run dev
```

Without `DATABASE_URL`, the app automatically falls back to offline mode
(`data/db.json`) so you can develop anywhere with no connection.

## Updating the deployed app

Push new commits to GitHub → Vercel redeploys automatically. Your Render
database keeps all live data; nothing is lost on redeploy.

## Costs & limits (honest notes)

- Render free Postgres expires after 30 days (upgrade or recreate to continue;
  recreating resets data — export first if needed).
- Vercel free tier covers typical pilot traffic.
- This is a pilot build: demo-grade session handling (per-device localStorage),
  full-table persistence per mutation. Fine for a small team; swap in row-level
  security and targeted updates when scaling up.
