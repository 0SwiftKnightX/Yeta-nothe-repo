# WebXR archery — acceptance criteria

**Document ID:** XR-WEB-ACCEPT-001
**Version:** 0.1.0-draft
**Status:** PLANNED / no device evidence
**Created:** 2026-10-27, America/New_York (time unavailable)
**Prepared by:** ChatGPT GPT-6

Each criterion must have result **PASS, FAIL, BLOCKED, or NOT TESTED**, with commit, environment, tester, observation and reproduction steps as applicable. See [test-log](test-log.md).

| ID | Required observable behavior | Initial state |
|---|---|---|
| WEB-01 | Source is self-contained under the spike path; setup command and dependency versions documented | NOT TESTED |
| WEB-02 | Automated score/physics/segment collision tests pass on named Node runtime | NOT TESTED |
| WEB-03 | Desktop browser loads the 3D scene, renders a moving target, can fire with pointer, and reset score | NOT TESTED |
| WEB-04 | Unsupported XR is reported without an uncaught exception; successful XR entry and exit are clean when available | NOT TESTED |
| WEB-05 | Quest 3S immersive VR session launches in suitable secure browser origin | NOT TESTED |
| WEB-06 | Tracked left bow and right trigger draw/release work repeatedly; invalid/missing tracking is handled | NOT TESTED |
| WEB-07 | Projectile aim, speed, gravity, moving target and swept hit registration behave consistently | NOT TESTED |
| WEB-08 | Shots and hits update once, accuracy is hits/shots*100, reset clears scoreboard and in-flight arrows (desktop button / left squeeze in VR) | NOT TESTED |
| WEB-09 | Haptics work where exposed or degrade harmlessly with visible feedback | NOT TESTED |
| WEB-10 | Ten-shot Quest 3S sequence is responsive, exits cleanly, and records comfort/stability issues | NOT TESTED |

Physical Quest tests require actual headset evidence. The WebXR source must not be treated as a direct port to Godot. Related: GitHub [#1](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/1), [#2](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/2), [#3](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/3), [#4](https://github.com/0SwiftKnightX/Yeta-nothe-repo/issues/4).
