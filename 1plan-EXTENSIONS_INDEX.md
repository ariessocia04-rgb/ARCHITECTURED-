# 1PLAN EXTENSIONS — CANONICAL INDEX AND READING ORDER

## Purpose

`1plan.md` remains the master governance and architecture authority. This index identifies validated additive extensions that record later owner-approved architecture, planning, repository, Codex, and current-status decisions without rewriting or duplicating the base plan.

## Required reading rule

```text
1plan.md
→ this extensions index
→ every applicable extension below in dependency/date order
→ Applications/README.md or SaaS Platform/README.md
→ selected package/application INDEX.md
→ selected detailed canonical sources
→ release/task controls when implementation is involved
```

When an older status snapshot in `1plan.md` does not list a later merged package, the applicable validated extension and the package completion record provide the current truthful status while the base governance rules remain in force.

## Current validated extensions

### 1. IT, Printing, and Cross-Department Operations

```text
1plan-IT_PRINTING_CROSS_DEPARTMENT_EXTENSION.md
```

Connects:

- Printing and Peripheral Operations;
- IT Operations Application;
- IT role extension;
- Cross-Department Operating Fabric;
- 12 end-to-end process families;
- shared screens, wireflows, handoffs, blockers, approvals, timeline, events and implementation dependencies.

### 2. Operating Modes and Department Store Retail SaaS

```text
1plan-OPERATING_MODES_AND_DEPARTMENT_STORE_EXTENSION.md
```

Connects:

- solo-to-enterprise operating modes;
- role compression and full department teams;
- Department Store Retail SaaS;
- existing future integration architecture;
- multi-branch and multi-company growth.

### 3. Release 1 MVP Implementation Planning

```text
1plan-RELEASE_1_MVP_IMPLEMENTATION_PLANNING_EXTENSION.md
```

Records:

- controlled pilot release boundary;
- technology/topology baseline;
- printer support/certification plan;
- high-fidelity delivery plan;
- 36 Codex tasks;
- risk/test/rollout/rollback plan.

### 4. Codex Code Control Center and Implementation Root

```text
1plan-CODEX_CODE_CONTROL_CENTER_EXTENSION.md
```

Records:

- `Codex Code/Implementation/` as the single executable source root;
- task/evidence/review separation;
- no parallel root-level code trees;
- repository environment and task controls.

### 5. Codex Prompt Chain, Continuation, Sleep Mode, and Model Continuity

```text
1plan-CODEX_PROMPT_CHAIN_CONTINUATION_EXTENSION.md
```

Records:

- append-only prompt history;
- active-task pointer;
- prompt registry;
- checkpoint-based continuation;
- manual `continue` mode;
- scheduled `sleep mode` review/correction flow;
- deactivation back to manual mode;
- bounded five-minute external-check rechecks inside a Codex run;
- operational reviewer handoff;
- strict owner-authorized sleep-queue gates;
- model-switch continuity and `BLOCKED_MODEL_CAPACITY` safety;
- finish-current-task-before-next rule.

Detailed executable mode authority is stored once in:

```text
Codex Code/Prompts/EXECUTION_MODE.md
```

### 6. Connected SaaS Application, Wireframe, Wireflow, and Implementation Plan

```text
1plan-SAAS_APPLICATION_WIREFRAME_WIREFLOW_INTEGRATION_EXTENSION.md
```

Current synchronization layer connecting:

- core Repair SaaS applications;
- IT Operations;
- Department Store Retail SaaS;
- Plans and Billing;
- Printing;
- Cross-Department Fabric;
- 17 ROS Future Modules;
- 10 Future Integration architectures;
- business operating modes and department teams;
- core/domain wireframes and wireflows;
- Release 1 planning and high-fidelity definitions;
- Codex prompt armor, code-root and task-completion rules.

## Conflict and authority rule

Extensions may add current status, derived detail, release boundaries, or execution controls. They must not silently change base-plan non-negotiable rules.

When extensions conflict:

1. verify merge dates and owner-approved scope;
2. prefer the more specific current extension for its declared concern;
3. preserve higher-level base governance;
4. stop for `BLOCKED_ARCHITECTURE_CLARIFICATION` when a material conflict cannot be reconciled;
5. never resolve a conflict through unapproved code.

## Duplicate rule

An extension is an `INTENTIONAL_SUMMARY_OR_INDEX` or additive derived authority only when it:

- has a distinct governance/status/connection responsibility;
- points to detailed canonical sources;
- does not copy entire packages;
- preserves domain ownership;
- records provenance and truthful status.

No extension authorizes source code unless an exact implementation task separately grants `implementation_authorized=true`.

## Current status

```text
BASE MASTER PLAN: 1plan.md
EXTENSION INDEX: DEFINED
CURRENT CONNECTED STATUS EXTENSION: 1plan-SAAS_APPLICATION_WIREFRAME_WIREFLOW_INTEGRATION_EXTENSION.md
CURRENT CODEX EXECUTION EXTENSION: 1plan-CODEX_PROMPT_CHAIN_CONTINUATION_EXTENSION.md
CANONICAL EXECUTION MODE POLICY: Codex Code/Prompts/EXECUTION_MODE.md
LATEST COMPLETED RELEASE TASK: CX-R1-002 = APPROVED_COMPLETE
CURRENT GOVERNANCE TASK: GOV-CX-001
PRODUCT APPLICATION CODE AUTHORIZED BY GOV-CX-001: NO
NEXT RELEASE TASK CX-R1-003 AUTHORIZED: NO
```
