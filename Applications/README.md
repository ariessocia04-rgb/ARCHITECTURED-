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
→ Cross-Department Operating Fabric when multiple departments/apps participate
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

## FOUR APPROVED ARRANGEMENT MODES

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

The `INDEX.md` is navigation and starting guidance only. The `README.md` remains canonical until an approved controlled decomposition creates dedicated module files and synchronizes every link/status.

Current examples:

- `Front Desk Application/`
- `Owner Application/`
- `Customer Portal/`

### 3. Decomposed Expansion Package Mode

Used for a future module requiring a complete Section 8A architecture/design package.

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

The entry README/index must not duplicate the canonical volume files.

### 4. Decomposed Application Architecture Mode

Used for a complete application that requires several architecture volumes plus dedicated wireframe/wireflow and delivery controls.

```text
Application Name/
├── INDEX.md
├── COMPLETION_RECORD.md
├── Volume 1 - Scope and Governance/
├── Volume 2 - Functional and Experience Architecture/
├── Volume 3 - Data and Integration Architecture/
├── Volume 4 - Wireframe and Wireflow/
└── Volume 5 - Security Quality and Delivery/
```

Current examples:

- `IT Operations Application/`
- `Department Store Retail SaaS/`

## APPLICATION AND ROS ENTRY POINTS

| Surface | Start Here | Current Canonical Detail Source | Arrangement Status |
|---|---|---|---|
| Technician Application | [Technician Application Index](Technician%20Application/INDEX.md) | Individual files linked from `INDEX.md` | DECOMPOSED MODULE MODE |
| Front Desk Application | [Front Desk Application Index](Front%20Desk%20Application/INDEX.md) | [Front Desk Architecture](Front%20Desk%20Application/README.md) | CONSOLIDATED ARCHITECTURE MODE |
| Owner Application | [Owner Application Index](Owner%20Application/INDEX.md) | [Owner Architecture](Owner%20Application/README.md) | CONSOLIDATED ARCHITECTURE MODE |
| Customer Portal | [Customer Portal Index](Customer%20Portal/INDEX.md) | [Customer Portal Architecture](Customer%20Portal/README.md) | CONSOLIDATED ARCHITECTURE MODE |
| IT Operations Application | [IT Operations Index](IT%20Operations%20Application/INDEX.md) | Five linked architecture/design/delivery volumes | DECOMPOSED APPLICATION ARCHITECTURE MODE |
| Department Store Retail SaaS | [Department Store Retail SaaS Index](Department%20Store%20Retail%20SaaS/INDEX.md) | Five linked architecture/design/delivery volumes | DECOMPOSED APPLICATION ARCHITECTURE MODE |
| ARCHITECTURED ROS | [ROS Master Index](ARCHITECTURED%20REPAIR%20OPERATING%20SYSTEM%20(ROS)/INDEX.md) | Numbered domain indexes and canonical concern files | NUMBERED OPERATING-SYSTEM MODE |
| ROS Future Modules | [Future Modules Master Index](ARCHITECTURED%20REPAIR%20OPERATING%20SYSTEM%20(ROS)/9.%20FUTURE%20MODULES/INDEX.md) | 17 module indexes and 68 canonical volume files | DECOMPOSED EXPANSION PACKAGE MODE |
| ROS Future Integration Architecture | [Future Integration Index](ARCHITECTURED%20REPAIR%20OPERATING%20SYSTEM%20(ROS)/11.%20FUTURE%20INTEGRATION%20ARCHITECTURE/INDEX.md) | Compatibility contract, 10 integration architectures, and matrix | NUMBERED OPERATING-SYSTEM MODE |
| ROS Business Operating Modes and Department Teams | [Operating Modes and Teams Index](ARCHITECTURED%20REPAIR%20OPERATING%20SYSTEM%20(ROS)/12.%20BUSINESS%20OPERATING%20MODES%20AND%20DEPARTMENT%20TEAMS/INDEX.md) | Solo-to-enterprise staffing, handoff, and activation architecture | NUMBERED OPERATING-SYSTEM MODE |

## BUSINESS-SIZE AND STAFFING RULE

The Repair SaaS and approved vertical applications must support:

- solo owner or solo technician-owner;
- owner with a small team;
- medium business with several departments;
- large multi-department operation;
- multi-branch enterprise;
- multi-company group.

Every department may have a complete team, but a small business must not be forced to create fake staff. Role compression allows one person to hold several scoped capabilities while preserving action attribution, permissions, approval context, audit, and later delegation.

The canonical staffing and operating-mode architecture is:

`ARCHITECTURED REPAIR OPERATING SYSTEM (ROS)/12. BUSINESS OPERATING MODES AND DEPARTMENT TEAMS/INDEX.md`

## CROSS-DEPARTMENT CONNECTION RULE

Application folders remain separate because they own different responsibilities, permissions, records, and workflows. They are connected through:

- [Cross-Department Operating Fabric](../SaaS%20Platform/Cross-Department%20Operating%20Fabric/INDEX.md);
- shared process instances and stages;
- linked domain records;
- department tasks and handoffs;
- approvals and blockers;
- shared audience-safe timeline and notifications;
- IT support/incidents/changes;
- printing/document delivery;
- data/API/events and audit.

Every application must expose, where applicable:

```text
My Cross-Department Work
Process Header / Current Stage
Next Action / Responsible Owner
Related Work and Linked Records
Blocker / IT Support
Shared Timeline
Approvals / Communication
```

These shared surfaces do not grant cross-domain edit authority.

## ADD-ONLY ALIGNMENT RULE

- Existing valid architecture remains unchanged unless an approved revision requires a controlled update.
- Existing canonical paths remain valid.
- Existing completed modules are not moved, renamed, split, or deleted merely for appearance.
- New indexes point to canonical content.
- New folders/module files require approved scope/canonical targets.
- A later migration must preserve history, map old-to-new paths, update links, validate no content loss, pass duplicate validation, and obtain approval before superseding an old source.

## NEW APPLICATION OR EXPANSION FOLDER RULE

Before creating a new application, expansion, domain, volume, module, or feature folder, confirm in the master governance:

- approved scope and phase;
- application/expansion name;
- canonical folder/index/detail paths;
- grouping/numbering;
- dependencies/shared contracts;
- active owner/handoff state;
- acceptance/completion criteria;
- cross-department process connections when applicable.

A worker must not invent a folder hierarchy independently.

## REQUIRED INDEX CONTENT

Every application or expansion `INDEX.md` identifies:

1. purpose/authority;
2. canonical sources;
3. arrangement mode;
4. module/volume navigation;
5. shared-contract dependencies;
6. cross-department process dependencies;
7. design dependencies;
8. implementation authority;
9. truthful status;
10. duplicate-control rule;
11. exact next safe starting point.

## JOINER HANDOFF CHECKLIST

A contributor records:

- `source_path`;
- `source_section_or_requirement_id`;
- `application_or_ros_index_path`;
- `canonical_target_path`;
- `arrangement_mode`;
- `active_owner_or_handoff_state`;
- `dependency_paths`;
- `cross_department_process_paths` when applicable;
- `last_verified_commit_or_sha`;
- `validation_evidence`.

When another co-worker is active on the selected target, follow `1plan.md` Section 1A and choose a different unclaimed incomplete item.

## CURRENT STATUS

```text
APPLICATIONS MASTER STARTING POINT: DEFINED
CORE APPLICATION ENTRY INDEXES: 4 OF 4 AVAILABLE
IT OPERATIONS APPLICATION INDEX/VOLUMES: COMPLETE AS SPECIFICATION
DEPARTMENT STORE RETAIL SAAS INDEX/VOLUMES: COMPLETE AS SPECIFICATION
ROS MASTER INDEX: AVAILABLE
ROS FUTURE MODULE ROOTS: 17 OF 17 AVAILABLE
ROS FUTURE MODULE INDEXES: 17 OF 17 COMPLETE
ROS FUTURE MODULE CANONICAL VOLUME FILES: 68 OF 68 COMPLETE
ROS FUTURE INTEGRATION TARGETS: 10 OF 10 COMPLETE
ROS BUSINESS OPERATING MODES: COMPLETE
ROS FULL DEPARTMENT TEAM ARCHITECTURE: COMPLETE
CROSS-DEPARTMENT OPERATING FABRIC: COMPLETE AS SPECIFICATION
PRINTING AND PERIPHERAL OPERATIONS: COMPLETE AS SPECIFICATION
EXISTING CORE APPLICATION ARCHITECTURE DELETED OR MOVED: NO
APPLICATION CODE CREATED BY THIS ARCHITECTURE TASK: NO
```

**ALL APPLICATION AND ROS WORK STARTS FROM `1plan.md`, CONTINUES THROUGH THIS FILE, ENTERS THE SELECTED SURFACE THROUGH ITS `INDEX.md`, AND USES THE CROSS-DEPARTMENT OPERATING FABRIC WHEN THE OUTCOME SPANS MULTIPLE DEPARTMENTS.**
