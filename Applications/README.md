# APPLICATIONS — MASTER STARTING POINT

## PURPOSE

This file is the canonical application-folder entry point for every human contributor, ChatGPT session, TECA agent, designer, reviewer, and implementation worker joining the ARCHITECTURED repository.

`1plan.md` remains the project-wide master source of truth. This file provides the approved navigation and folder-arrangement rules specifically for `Applications/`.

## REQUIRED STARTING ORDER

```text
1plan.md
→ Applications/README.md
→ selected application or ROS INDEX.md
→ selected canonical architecture or module file
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

- one application or operating-system folder;
- one clear entry index;
- logical grouping by surface, volume, domain, or module;
- one canonical detail file per module or concern;
- predictable names and numbering;
- links from the index to every canonical file;
- no empty placeholder folders;
- no competing copies of the same architecture.

## THREE APPROVED ARRANGEMENT MODES

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

### 3. Decomposed Expansion Package Mode

Used for a future module that requires a complete Section 8A architecture/design specification package.

```text
Expansion Name/
├── README.md
├── INDEX.md
├── Volume 1 - Scope and Governance/
├── Volume 2 - Functional and Experience Architecture/
├── Volume 3 - Data and Integration Architecture/
└── Volume 4 - Security Quality and Delivery/
```

Current example: all 17 modules under `ARCHITECTURED REPAIR OPERATING SYSTEM (ROS)/9. FUTURE MODULES/`.

The entry README and index must not duplicate the four canonical volume files.

## APPLICATION AND ROS ENTRY POINTS

| Surface | Start Here | Current Canonical Detail Source | Arrangement Status |
|---|---|---|---|
| Technician Application | [Technician Application Index](Technician%20Application/INDEX.md) | Individual files linked from `INDEX.md` | DECOMPOSED MODULE MODE |
| Front Desk Application | [Front Desk Application Index](Front%20Desk%20Application/INDEX.md) | [Front Desk Architecture](Front%20Desk%20Application/README.md) | CONSOLIDATED ARCHITECTURE MODE |
| Owner Application | [Owner Application Index](Owner%20Application/INDEX.md) | [Owner Architecture](Owner%20Application/README.md) | CONSOLIDATED ARCHITECTURE MODE |
| Customer Portal | [Customer Portal Index](Customer%20Portal/INDEX.md) | [Customer Portal Architecture](Customer%20Portal/README.md) | CONSOLIDATED ARCHITECTURE MODE |
| ARCHITECTURED ROS | [ROS Master Index](ARCHITECTURED%20REPAIR%20OPERATING%20SYSTEM%20(ROS)/INDEX.md) | Numbered domain indexes and canonical concern files | NUMBERED OPERATING-SYSTEM MODE |
| ROS Future Modules | [Future Modules Master Index](ARCHITECTURED%20REPAIR%20OPERATING%20SYSTEM%20(ROS)/9.%20FUTURE%20MODULES/INDEX.md) | 17 module indexes and 68 canonical volume files | DECOMPOSED EXPANSION PACKAGE MODE |

## ADD-ONLY ALIGNMENT RULE

- Existing valid architecture remains unchanged unless an approved revision requires a controlled update.
- Existing canonical paths remain valid.
- Existing completed modules are not moved, renamed, split, or deleted merely for appearance.
- New indexes point to canonical content.
- New folders or module files require approved scope and canonical targets.
- A later migration must preserve history, map old-to-new paths, update links, validate no content loss, pass duplicate validation, and obtain owner approval before an old canonical source is superseded.

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

## REQUIRED INDEX CONTENT

Every application or expansion `INDEX.md` must identify:

1. purpose and authority;
2. canonical architecture sources;
3. arrangement mode;
4. module/volume navigation;
5. shared-contract dependencies;
6. design dependencies;
7. implementation authority when applicable;
8. truthful status;
9. duplicate-control rule;
10. exact next safe starting point.

## JOINER HANDOFF CHECKLIST

A contributor joining application or ROS work must record:

- `source_path`;
- `source_section_or_requirement_id`;
- `application_or_ros_index_path`;
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
CORE APPLICATION ENTRY INDEXES: 4 OF 4 AVAILABLE
ROS MASTER INDEX: AVAILABLE
ROS FUTURE MODULE ROOTS: 17 OF 17 AVAILABLE
ROS FUTURE MODULE INDEXES: 17 OF 17 COMPLETE
ROS FUTURE MODULE CANONICAL VOLUME FILES: 68 OF 68 COMPLETE
EXISTING CORE APPLICATION ARCHITECTURE DELETED OR MOVED: NO
CO-WORKER FUTURE INTEGRATION ARCHITECTURE OVERWRITTEN: NO
APPLICATION CODE CREATED BY THIS STRUCTURE TASK: NO
```

**ALL APPLICATION AND ROS WORK MUST START FROM `1plan.md`, CONTINUE THROUGH THIS FILE, AND THEN ENTER THE SELECTED SURFACE THROUGH ITS CANONICAL `INDEX.md`.**