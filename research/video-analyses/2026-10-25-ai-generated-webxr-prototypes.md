---
doc_id: RESEARCH-VIDEO-2026-10-25-WEBXR-AI-PROTOTYPING-001
version: 1.0.0
status: research
created_at: 2026-10-25T11:39:00-04:00
updated_at: 2026-10-25T11:39:00-04:00
timezone: America/New_York
author: ChatGPT (GPT-6)
session_work_log_ref: not-assigned
project: Yeta-nothe-repo
source_of_truth: https://github.com/0SwiftKnightX/Yeta-nothe-repo
source_video: https://youtu.be/h2oUH6vuQ9s
source_video_id: h2oUH6vuQ9s
source_channel: onshoulders
source_title: "I Made 3 VR Games in 1 Hour Using AI (No Coding)"
evidence_date: 2026-10-25
---

# Video Analysis: AI-Generated VR/AR Prototypes in Under an Hour

## 1. Executive summary

The video demonstrates a workflow for rapidly prototyping three browser-delivered XR experiences with AI assistance. The creator describes using **Claude Code with Opus 4.7** (as stated in the video), a deliberately small technology surface, and version-controlled Markdown files for technology constraints and prompts. The three demos are:

1. **VR archery game** — shoot arrows at flying targets, emphasizing natural-feeling physics, colorful presentation, scoring, accuracy feedback, and controller haptics.
2. **VR drum kit** — play a drum set using hand-held virtual drumsticks; the creator describes using a controller trigger for the kick drum.
3. **Mixed-reality marshmallow shooter** — small green army men appear around the player; the player shoots marshmallows using a gun in each hand.

The core lesson is not that complex XR engineering disappears. It is that **a carefully constrained problem, explicit technical choices, and a short, durable prompt can make a first playable prototype much easier to produce**. The creator says they avoided installing software on the Quest, compiling a native application, and using bulky frameworks by relying on browser-based JavaScript libraries.

This is a creator-reported demonstration, not an independently reproduced benchmark. The transcript does not identify the exact JavaScript libraries, source repository, complete implementation, performance measurements, or distribution links for the three experiences.

## 2. Source and evidence

- **Video:** [I Made 3 VR Games in 1 Hour Using AI (No Coding)](https://youtu.be/h2oUH6vuQ9s)
- **Channel:** onshoulders
- **Evidence reviewed:** accessible video transcript and the creator's verbal explanation.
- **Limitations:** This document analyzes the described workflow and reported results. It does not claim to have inspected the underlying source code or independently run the experiences on a headset.

## 3. What the creator built

### 3.1 VR archery

**Prompt intent:** Make a colorful game in which the player uses a bow to shoot arrows at flying objects. The prompt explicitly emphasizes thinking deeply about physics and making the experience feel realistic and natural. The creator also asks for instructions to open the experience on a Meta Quest headset.

**Reported observations:**
- Targets can be shot with arrows.
- The game presents a score and accuracy statistic.
- The creator reports haptic feedback.
- The creator reacts positively to the arrow physics and playability.

**Engineering implications:**
- A convincing archery prototype needs more than rendering: bow/arrow interaction, aiming, launch velocity, gravity, collision detection, target behavior, hit registration, scoring, and feedback must work together.
- Physics and interaction quality should be explicit acceptance criteria, not vague polish goals.
- The transcript does not establish the exact physics model, accuracy calculation, or whether all input behavior was tested beyond the demonstration.

### 3.2 VR drum kit

**Prompt intent:** Create an immersive drum set that the player can play using their hands, with visible hands holding drumsticks and a surrounding drum kit.

**Reported observations:**
- The creator demonstrates striking the kit.
- The creator explains that the controller trigger activates the kick drum.
- The experience is presented as a fast playable prototype.

**Engineering implications:**
- A useful prototype must map tracked/controller movement to drum-hit events, detect hits against instrument zones, and produce responsive sound and visual feedback.
- A visually convincing kit is insufficient if timing, hit detection, and latency feel wrong.
- The video does not document audio latency, velocity-sensitive dynamics, or a full instrument-mapping specification.

### 3.3 Mixed-reality marshmallow shooter

**Prompt intent:** Build an augmented-reality game in which many small green army men appear around the player, with a marshmallow-shooting gun in each hand.

**Reported observations:**
- Multiple small characters appear in the player's environment.
- The player shoots them with two handheld weapons.
- The creator mentions a 2,000-point result and warns about avoiding a nearby person during play.

**Engineering implications:**
- The experience combines spatial placement, repeated entity spawning, target behavior, dual-hand input, projectile motion, hit detection, scoring, and physical-space safety.
- Mixed-reality design needs a clear distinction between virtual objects and the real room. Spawning and movement should avoid unsafe assumptions about available space.
- The transcript does not specify the scene-understanding, passthrough, boundary, or collision-safety mechanisms used.

## 4. The workflow that matters

The creator describes the following process:

1. **Reduce the problem before implementation.** Identify what can be removed from the first version.
2. **Choose a narrow technical approach first.** The creator says browser-based JavaScript libraries made it possible to avoid a native install, compilation, and a large framework.
3. **Write a technology specification.** Create a `tech.markdown` file in an otherwise empty working directory and state the intended technologies.
4. **Write the prompt to a file.** Create a `prompt.markdown` file so the requirements can be version-controlled and reused.
5. **Ask the coding agent to implement the saved prompt.** The creator describes running Claude and entering “implement.”
6. **Run and test the result.** The creator says the experiences were run until they worked well, then tried them on the headset.
7. **Give extra emphasis to the key quality requirement.** For archery, natural-feeling physics was explicitly highlighted in the prompt.

The important repeatable practice is separating **technology constraints** from **experience requirements**. The former defines the implementation boundary; the latter defines what the user should be able to do and how it should feel.

## 5. What is and is not proven

| Claim or conclusion | Evidence status |
|---|---|
| Three distinct XR experiences were demonstrated in the video | Shown and described by the creator |
| The creator reports completing them in under an hour | Creator-reported; not independently timed |
| The creator used Claude Code with Opus 4.7 | Creator-stated; exact version/date context has not been independently verified |
| Browser-based JavaScript enabled the approach | Creator-stated; exact libraries and implementation are not named in the transcript |
| The prototypes demonstrate a useful prompt-and-constraints workflow | Supported as a practical process observation |
| The same approach will produce production-ready software reliably | Not established |
| The approach is interchangeable with a native Godot/OpenXR application | Not established; these are different deployment and runtime choices |
| The demos are publicly available to download or inspect | Not established by the transcript; the creator asks viewers to comment if they want the experiences served for Quest access |

## 6. Applicability to our XR work

### Recommended use: a parallel WebXR prototype track

For our Quest-first XR work, this video is most useful as a **rapid experimentation pattern**, not as a reason to replace the established Godot/OpenXR foundation.

Use a browser-based WebXR prototype when the immediate goal is to answer a narrow interaction question quickly, such as:
- Does an archery interaction feel satisfying?
- Is a drum-hit interaction readable and responsive?
- Is a small-scale mixed-reality target loop fun and safe?
- Can a control scheme be validated before investing in a larger game architecture?

Keep the Godot/OpenXR project as the native implementation path when the feature needs to integrate with our existing scene hierarchy, locomotion, game systems, assets, persistence, or longer-term architecture.

### Decision rule

- **Prototype the interaction in WebXR** when speed, easy iteration, and isolated experimentation are the main priorities.
- **Implement in Godot/OpenXR** when integration with the existing native project, engine features, or the intended shipping architecture is the main priority.
- **Port only after evaluation.** A successful browser prototype is evidence for the interaction concept, not proof that its implementation can be copied directly into Godot.

The video does not establish compatibility with our current Godot version, XR Tools version, Quest 3S target, or existing repository architecture.

## 7. Proposed reusable project files

The creator's two-file idea can be adapted into a slightly more auditable template:

- `tech.md` — runtime, libraries, device/browser assumptions, constraints, allowed dependencies, and deployment method.
- `prompt.md` — user-facing goal, controls, interaction behavior, quality priorities, and explicit exclusions.
- `acceptance-criteria.md` — observable pass/fail checks, including device launch and interaction tests.
- `test-log.md` — device, browser/runtime, date, build identifier, observed failures, and retest results.
- `README.md` — how to launch the prototype and what remains incomplete.

For reproducibility, record the exact AI tool/model, prompt version, dependency versions, source commit, target device, and test outcome. Keep generated implementation separate from the prompt and requirements so each can be reviewed and revised independently.

## 8. Suggested prototype acceptance criteria

A small prototype should be judged by observable behavior rather than by whether the agent says it is finished.

### Common criteria
- Launches on the intended Quest browser/runtime without an undocumented setup step.
- Enters and exits XR mode cleanly.
- Inputs are mapped and explained.
- Main interaction works repeatedly, not just once.
- Feedback is immediate and understandable.
- No severe frame stalls, blocking errors, or unusable input states during a short test.
- Physical-space risks and boundaries are considered for mixed reality.
- Known limitations and reproduction steps are recorded.

### Archery-specific
- Arrow launch direction follows the intended aiming behavior.
- Trajectory responds consistently to launch speed and gravity.
- Hits and misses register correctly.
- Score and accuracy are internally consistent.
- Haptic feedback is available where supported and has a fallback where not.

### Drum-kit-specific
- Each instrument zone triggers the correct sound.
- Repeated strikes are detected reliably.
- The kick control is discoverable and consistent.
- Audio and visual response feel acceptably synchronized.

### Mixed-reality-specific
- Virtual targets are visible and spatially understandable.
- Both hands can operate independently.
- Projectile hits and score updates are reliable.
- The design does not encourage unsafe movement or firing toward real people.
- The experience provides a clear way to stop or exit.

These criteria are proposed evaluation checks, not claims that the video demonstrated every item.

## 9. Recommended next steps

1. Find out whether the creator has published the three demos or their source code.
2. If available, inspect the actual `tech.markdown`, `prompt.markdown`, and project files rather than inferring the implementation from the video.
3. Select one small interaction as a controlled experiment; do not begin by recreating all three experiences.
4. Decide explicitly whether that experiment belongs in a browser-based WebXR prototype or the native Godot/OpenXR project.
5. Record a short test log from the actual Quest 3S and compare the result against acceptance criteria.
6. Preserve the prototype and its prompts as a versioned artifact, even if it is later rejected.

## 10. Open questions

These questions are intentionally left open because the transcript does not answer them:

- Which browser-based JavaScript libraries and WebXR APIs were used?
- Are the three experiences or their source repositories publicly available?
- How were the experiences served to the Quest, and what exact browser/device configuration was required?
- What level of Quest 3S and mixed-reality testing was performed beyond the shown demonstrations?
- Were any reusable assets, starter templates, or pre-existing code involved?

## Conclusion

The strongest lesson is a disciplined rapid-prototyping loop: **research first, reduce scope, specify the technology, version the prompt, implement, and test the real interaction on-device**. The workflow can complement our native XR development by reducing uncertainty early. It should not be treated as evidence that a one-hour prototype is production-ready or that browser-based and Godot-native implementations are interchangeable.
