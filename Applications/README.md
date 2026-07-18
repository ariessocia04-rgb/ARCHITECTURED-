# APPLICATIONS — MASTER STARTING POINT

## PURPOSE

This file is the canonical application-folder entry point for every human contributor, ChatGPT session, TECA agent, designer, reviewer, and implementation worker joining the ARCHITECTURED repository.

`1plan.md` remains the project-wide master source of truth. This file provides the approved navigation and folder-arrangement rules specifically for `Applications/`.

## REQUIRED STARTING ORDER

```text
1plan.md
→ Applications/README.md
→ selected application INDEX.md
→ selected application's canonical architecture or module file
→ relevant SaaS Platform shared contracts
→ relevant Design artifacts
→ relevant TECA execution or implementation plan
→ current branches, pull requests, commits, checks, and active-work evidence
```

Do not begin from a random module file, stale chat copy, old branch, copied prompt, or remembered path.

## OBSERVED APPLICATION FOLDER STANDARD

The Technician Application provides the reference pattern for a fully decomposed application:

```text
Applications/
└── Technician Application/
    ├── INDEX.md
    ├── Volume 1 - Header/
    │   └── Feature Name/
    │       └── canonical_file.md
    ├── Volume 2 - Sidebar/
    │   └── Module N - Module Name/
    │       └── canonical_file.md
    └── Volume 3 - Main Workspace/
        └── Workspace Component/
            └── canonical_file.md
```

The required qualities are:

- one application folder;
- one clear application entry index;
- logical grouping by surface, volume, domain, or module;
- one canonical detail file per module or concern;
- predictable names and numbering;
- links from the index to every canonical file;
- no empty placeholder folders;
- no competing copies of the same architecture.

## TWO APPROVED ARRANGEMENT MODES

### 1. Decomposed Module Mode

Used when an application has approved module-by-module canonical files.

```text
Application Name/
├── INDEX.md
├── Volume or Domain Group/
│   └── Module or Feature Folder/
│       └── canonical_file.md
└── additional approved groups
```

Current example: `Technician Application/`.

### 2. Consolidated Architecture Mode

Used when the complete approved application architecture currently exists in one canonical `README.md`.

```text
Application Name/
├── INDEX.md
└── README.md
```

The `INDEX.md` is navigation and starting guidance only. The `README.md` remains the canonical architecture source until an approved controlled decomposition creates dedicated module files and synchronizes every link and status.

Current examples:

- `Front Desk Application/`
- `Owner Application/`
- `Customer Portal/`

Consolidated mode is not permission to create duplicate module copies. Decomposed folders may be added only when `1plan.md` assigns the canonical target paths and the migration is approved.

## APPLICATION ENTRY POINTS

| Application | Start Here | Current Canonical Detail Source | Arrangement Status |
|---|---|---|---|
| Technician Application | [Technician Application Index](Technician%20Application/INDEX.md) | Individual files linked from `INDEX.md` | DECOMPOSED MODULE MODE |
| Front Desk Application | [Front Desk Application Index](Front%20Desk%20Application/INDEX.md) | [Front Desk Architecture](Front%20Desk%20Application/README.md) | CONSOLIDATED ARCHITECTURE MODE |
| Owner Application | [Owner Application Index](Owner%20Application/INDEX.md) | [Owner Architecture](Owner%20Application/README.md) | CONSOLIDATED ARCHITECTURE MODE |
| Customer Portal | [Customer Portal Index](Customer%20Portal/INDEX.md) | [Customer Portal Architecture](Customer%20Portal/README.md) | CONSOLIDATED ARCHITECTURE MODE |

## ADD-ONLY ALIGNMENT RULE

This alignment phase is additive.

- Existing valid architecture text remains unchanged.
- Existing canonical paths remain valid.
- Existing completed modules are not moved, renamed, split, or deleted in this batch.
- New indexes point to existing canonical content.
- New folders or module files are created only through an approved decomposition task.
- A later decomposition must preserve history, provide old-to-new path mapping, update all links, validate no content loss, and obtain owner approval before any old canonical source is superseded.

## NEW APPLICATION OR EXPANSION FOLDER RULE

Before creating a new application, expansion, domain, volume, module, or feature folder, the worker must confirm in `1plan.md`:

- approved scope and phase;
- application or expansion name;
- assigned canonical folder path;
- assigned index path;
- assigned canonical detail-file path;
- module numbering or grouping method;
- dependencies and shared-contract sources;
- active owner or handoff state;
- acceptance criteria and completion status.

The worker must not invent a folder hierarchy independently.

## REQUIRED APPLICATION INDEX CONTENT

Every application `INDEX.md` must identify:

1. application purpose;
2. canonical architecture source;
3. current arrangement mode;
4. module or section navigation;
5. shared-contract dependencies;
6. design dependencies;
7. implementation authority when applicable;
8. current truthful status;
9. rule against duplicate module definitions;
10. exact next safe starting point for a new contributor.

## JOINER HANDOFF CHECKLIST

A contributor joining application work must record:

- `source_path`: `1plan.md` plus the assigned application source;
- `source_section_or_requirement_id`;
- `application_index_path`;
- `canonical_target_path`;
- `arrangement_mode`;
- `active_owner_or_handoff_state`;
- `dependency_paths`;
- `last_verified_commit_or_sha`;
- `validation_evidence`.

When another co-worker is active on the selected target, follow `1plan.md` Section 1A and choose a different unclaimed incomplete item.

## CURRENT STATUS

```text
APPLICATIONS MASTER STARTING POINT: DEFINED
TECHNICIAN APPLICATION ENTRY INDEX: EXISTING
FRONT DESK APPLICATION ENTRY INDEX: ADDED
OWNER APPLICATION ENTRY INDEX: ADDED
CUSTOMER PORTAL ENTRY INDEX: ADDED
EXISTING APPLICATION ARCHITECTURE DELETED OR MOVED: NO
DUPLICATE MODULE ARCHITECTURE CREATED: NO
FUTURE MODULE DECOMPOSITION: REQUIRES 1PLAN ASSIGNMENT AND OWNER APPROVAL
```

**ALL APPLICATION WORK MUST START FROM `1plan.md`, CONTINUE THROUGH THIS FILE, AND THEN ENTER THE SELECTED APPLICATION THROUGH ITS `INDEX.md`.**