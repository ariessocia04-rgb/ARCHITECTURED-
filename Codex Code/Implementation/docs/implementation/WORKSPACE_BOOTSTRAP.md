# Workspace bootstrap

## Purpose

CX-R1-001 establishes the deterministic Release 1 workspace under the canonical implementation
root. It provides a pinned Node/pnpm workspace, a minimal Next.js App Router build, a
Rust/Tauri-compatible local-agent compile skeleton, environment-name validation, and validation
scripts.

## Version policy

`RELEASE_LOCK.json`, `package.json`, `pnpm-lock.yaml`, `Cargo.toml`, `Cargo.lock`, and
`rust-toolchain.toml` must agree. Package specifications use exact semantic versions only. A
dependency update requires a dedicated reviewed change with changelog and regression evidence.

## Scope exclusions

This task does not create product UI, business modules, database tables, migrations, RLS,
authentication, provider integrations, CI, observability, production deployment, or secrets.
Supabase is a CLI pin only; its local platform foundation is owned by CX-R1-004.

## Repeatability

Run the commands in `docs/runbooks/LOCAL_SETUP.md`. The release-lock, paths, and secret checks
are intended to prevent accidental version drift, duplicate source roots, and committed secret
material before later implementation tasks extend this workspace.
