# Debug and Improve Quality

## Purpose

Diagnose a bug clearly and fix it with minimal risk.

## Prompt

Given a bug description and optionally a stack trace:

1. Restate the bug in plain language.
2. Identify the most likely root cause and exact code region.
3. If uncertain, propose 1-2 hypotheses.
4. Suggest the smallest safe fix.
5. Propose regression tests.
6. Wait for approval before making broad changes.
7. After implementation, summarize:
   - root cause
   - files changed
   - tests added or updated
8. Update `memory.md`.
