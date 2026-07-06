# PROJECT GOVERNANCE — REPAIR OPERATING SYSTEM (ROS)

## 1. PROJECT OVERVIEW
The ARCHITECTURED Repair Operating System (ROS) is an enterprise-grade platform designed to centralize business logic, permissions, and routing into a single Core Platform.

**Single Source of Truth**: The GitHub repository is the permanent project memory. Never rely on chat history or conversation memory. Always inspect the repository before beginning work.

---

## 2. GOLDEN RULE
**Every AI MUST read README.md first.**
README.md controls the entire project workflow. If README.md cannot be found: **STOP. Do not continue.**

---

## 3. DOCUMENT READING ORDER
README.md determines what documents must be read. The order is:
1. **README.md**
2. **Your Own Log** (in /logs folder)
3. **REVISE.md**
4. **INDEX.md**
5. **Assigned files only**

Never read unnecessary files. Never skip README.md.

---

## 4. TEAM STRUCTURE
This project is maintained by four AI contributors:

### Team Brave
- **TBC**: Team Lead / Reviewer. Responsible for oversight, architecture review, and log approvals.
- **TBJ**: Architecture Repository Manager. Responsible for documenting, organizing, and validating the ROS architecture.

### Team Edge
- **TEC**: Contributor. Focuses on specific module development and implementation.
- **TEJ**: Contributor. Focuses on specific module development and implementation.

---

## 5. AUTHORITY HIERARCHY
1. **User**: Supreme Authority. Final decision-maker on all architecture and project goals.
2. **ChatGPT**: Master Architect. Responsible for designing the enterprise architecture.
3. **TBC (Team Brave Lead)**: Reviewer and Approval Authority for all AI contributions.
4. **TBJ (Team Brave Jules)**: Repository Manager. Guardian of architectural integrity and repository structure.
5. **TEC/TEJ (Team Edge)**: Implementation contributors.

---

## 6. TECHNICIAN GOLD STANDARD
- **Modular Isolation**: Every module must reside in its own folder with zero cross-leakage of logic.
- **Shared Baseline**: The Technician Application architecture is the frozen baseline for all ROS modules.
- **Zero Duplication**: Shared business modules are designed once and shared via the Core Platform.
- **Volume 3 Consistency**: All Main Workspace interactions must use standardized Volume 3 components.

---

## 7. OWNERSHIP RULE
Each AI owns its assigned work. **Never edit another AI's work.** Only edit your own assigned task.

---

## 8. LOGGING SYSTEM
All activities must be recorded in the **/logs** folder. There are four log files:
- `logs/TBC_LOG.md`
- `logs/TBJ_LOG.md`
- `logs/TEC_LOG.md`
- `logs/TEJ_LOG.md`

Only the owner updates their own log.

---

## 9. LOG FORMAT
Contributors must use the following official formats. **Newest log entries must always be placed at the top.**

### New Work
**Task**: Completed Module ...
**Date**: YYYY-MM-DD HH:MM AM/PM

### Edited Work
**Task**: Edited Module ...
**Date**: YYYY-MM-DD HH:MM AM/PM
**Review**: [TBC]

### Approved Work
**Review**: [TBC] ✓ PROCEED TO NEXT
**Approved**: YYYY-MM-DD HH:MM AM/PM

### Revision Required
**Review**: [TBC] ✗ CHECK REVISE.md
**Reviewed**: YYYY-MM-DD HH:MM AM/PM

---

## 10. REVISION WORKFLOW
If an AI discovers a problem:
1. **Never fix another AI's work.**
2. Record the issue in **REVISE.md**.
3. Only the assigned owner may fix it.
4. After fixing: Update own log and INDEX.md.
5. Add `Review: [TBC]` and continue working. **Do NOT stop.**

---

## 11. REVIEW WORKFLOW (TBC ONLY)
1. Read README.md
2. Read TBC_LOG.md
3. Read REVISE.md
4. Read INDEX.md
5. Read all AI logs
6. Inspect latest uploads
7. Review architecture
8. Update contributor logs
9. Update REVISE.md
10. Update INDEX.md if required
11. Update TBC_LOG.md
12. Continue reviewing

---

## 12. INDEX RULE
Every completed task must update **INDEX.md**. Keep updates short. Never duplicate entries.

---

## 13. CONTINUOUS WORKFLOW
Read README.md
↓
Read Your Log
↓
Read REVISE.md
↓
Read INDEX.md
↓
Work
↓
Update Own Log
↓
Update INDEX.md
↓
Continue Next Task

---

## 14. GITHUB RULE
The GitHub repository is the permanent project memory. Never rely on chat history. Never rely on conversation memory. Always inspect the repository before beginning work.

---

## 15. FINAL RULES
- Repository is the source of truth.
- README.md is the project entry point.
- Respect ownership.
- Never duplicate work.
- Never overwrite another AI's work.
- Always maintain your own log.
- Always update INDEX.md.
- Always follow 1PLAN.md.
- Always follow the approved architecture.
