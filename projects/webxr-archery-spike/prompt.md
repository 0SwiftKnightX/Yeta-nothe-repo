# Prototype prompt — version 0.1.0

**Document ID:** XR-WEB-PROMPT-001
**Status:** DRAFT
**Created:** 2026-10-27 (America/New_York; exact time unavailable)
**Prepared by:** ChatGPT GPT-6
**Derived from:** [video research](../../research/video-analyses/2026-10-25-ai-generated-webxr-prototypes.md)

Implement only a **single-activity VR archery vertical slice** in this directory. Keep the technology defined in [tech.md](tech.md). The Quest 3S is the target for subsequent manual acceptance, but do not pretend that code-generation or desktop checks prove Quest compatibility.

Player goal: hold a bow in the left hand, draw with the right controller trigger, release an arrow at a moving floating target, and see hits, shots fired, and accuracy. Favor predictable direction/flight/collision over decorative effects. Avoid massive game frameworks, external accounts, and asset libraries. Use a desktop click fallback for a basic visual smoke test, explicitly separate from XR controller validation.

Implementation quality priorities: clean session startup/exit, safe behavior when controller tracking or haptics are unsupported, gravity-responsive projectile motion, segment-based collision, one-hit-per-arrow accounting, optional haptics with a visual fallback, and explicit repeatable tests. Keep all source under this directory. Log actual checks and limitations; do not modify historical Godot repositories.

Related: [README](README.md) · [acceptance criteria](acceptance-criteria.md) · [test log](test-log.md).
