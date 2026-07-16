# TECA — ARCHITECTURED REPAIR OPERATING SYSTEM (ROS)

## 1. PROJECT OVERVIEW
TECA (Technical Engineering & Crew AI) is a unified engineering organization responsible for the complete software engineering lifecycle of the ARCHITECTURED Repair Operating System (ROS). ROS is an enterprise-grade platform designed to centralize business logic, permissions, and routing into a single, scalable Core Platform.

**Single Source of Truth**: The GitHub repository is the permanent project memory. Every engineering decision, specification, and validation result is stored here.

---

## 2. THE TECA ORGANIZATION
TECA is a unified organization that plans, builds, validates, and maintains the project. It handles all responsibilities previously divided among multiple teams, ensuring 100% consistency and architectural integrity.

### Core Responsibilities:
- **Repository Discovery**: Deep analysis of existing code, structure, and specifications.
- **Requirements Engineering**: Gathering, normalizing, and generating precise specifications.
- **Architecture Preservation**: 100% adherence to the approved ARCHITECTURED design.
- **Component Generation**: Automated generation of agents, tasks, code, and configurations based only on validated requirements.
- **Project Organization**: Maintaining a modular, scalable, and consistent repository structure.
- **Validation**: Strict enforcement of CrewAI compliance and project integrity.
- **Repository Management**: Managing branches, commits, PRs, and governance.
- **Long-Term AI Memory**: Managing organizational intelligence and continuous learning.

---

## 3. ENGINEERING WORKFLOW
TECA operates through a strictly defined execution pipeline:

1. **Discovery**: Inspect repository and baseline architecture.
2. **Planning**: Update 1PLAN.md and requirements.
3. **Execution**: Generate components and implementation logic.
4. **Validation**: Pass the "Validation Gate" (CrewAI, YAML, and Architecture compliance).
5. **Memory Retrieval/Storage**: Utilize and enrich the Long-Term Memory system.
6. **Publishing**: Commit to the repository via the Repository Provider.

---

## 4. AI LONG-TERM MEMORY (.teca/memory/)
TECA utilizes a repository-backed Long-Term Memory system to maintain organizational intelligence across multiple executions. This is **NOT** conversation history; it is persistent knowledge stored in the repository.

### Memory Categories:
- Architecture, Specifications, Validation, FailurePatterns, SuccessPatterns, LessonsLearned, Repository, Governance, Requirements, ReusableComponents, ProjectKnowledge, Implementation.

### Memory Lifecycle:
- **Retrieve**: Access previous knowledge before starting a task.
- **Enrich**: Use accumulated intelligence to improve future generations.
- **Store**: Save new lessons, successes, and failure patterns to prevent repeating mistakes.

---

## 5. VALIDATION GATE (BLOCKING)
All contributions must pass the Validation Gate. Publishing to the repository is strictly blocked if any of the following fail:
- CrewAI compliance
- Architecture compliance (Technician Gold Standard)
- YAML correctness
- Task wiring and context chain integrity
- Project-wide naming consistency

---

## 6. PROJECT GOVERNANCE
- **1PLAN.md**: The supreme Constitution of the project.
- **Technician Gold Standard**: The official structural and quality benchmark.
- **No Redesign Rule**: TECA may improve implementation but is forbidden from redesigning the approved architecture.
- **Cleanliness**: No duplicate files, obsolete plans, or alternative versions.

---

## 7. GETTING STARTED
New contributors should:
1. Read **README.md** (Governance & Workflow).
2. Read **1PLAN.md** (Execution Blueprint).
3. Review the **Technician Gold Standard** (Quality Baseline).
4. Inspect **.teca/memory/** (Organizational Intelligence).
