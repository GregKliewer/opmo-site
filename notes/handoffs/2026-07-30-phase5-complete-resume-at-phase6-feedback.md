# Handoff: OpMo Advisory site redesign
2026-07-30 · Visual redesign of opmoadvisory.com from generic-SaaS-template to boardroom-credible, for a new AI session to continue

## Objective
Full visual redesign of the OpMo Advisory static site (plain HTML/CSS/JS, no framework) — current design reads cheap/hobby-project to the target audience (senior enterprise execs, prime consulting firms evaluating Greg as a subcontractor). Goal: restrained, institutional, boardroom-credible, not flashy/startup-y. Six-phase process, sequential, do not skip ahead: 1) Audit 2) Design directions (3 mockups) 3) Lock DESIGN_SYSTEM.md 4) Build all pages 5) Self-QA 6) Friend feedback loop.

## Current state
Phases 1–5 complete. **Direction 2 ("Institutional") is locked and live on `main`** (commit `36770da`, working tree clean). Homepage (`index.html`) and diagnostic page (`diagnostic.html`) fully rebuilt to the locked system, self-QA'd, and post-lock tweaks shipped. Next unstarted work is **Phase 6: friend feedback loop** — no feedback prompt has been drafted yet.

## Decisions (and why)
- **No framework, plain HTML/CSS/JS** — explicit hard constraint for the whole project.
- **Direction 2 ("Institutional") locked over Direction 3 ("Editorial Boutique")** — Greg initially picked Direction 3 and it was fully built through Phase 5, then he realized Direction 2 was actually his preference. Direction 2 traits: Fraunces serif + Inter pairing, solid-navy color blocking for high-emphasis moments (stat band, fit-test callout, contact section), bordered white cards (6px radius) with one deliberate shadow+teal-border exception for the "featured" tier card, node/line SVG hero graphic, natural-color (not grayscale) headshot, two-button system, filled-navy-pill nav CTA.
- **Direction 3 preserved, not discarded** — committed intact to branch `direction-3-editorial-build` before rebuilding `main` from Direction 2, so a complete alternate build exists if ever wanted again.
- **CAD labeling** — any dollar figures on the site must be labeled CAD.
- **No new claims** — no client names or case studies beyond existing source material (site copy, `OpMo_Fractional_OnePager_v2.pdf`, `OpMo_P1_Diagnostic_OnePager_DRAFT_v0.1.pdf`, `OpMo_OperatingModelAlignment_Offerings_DRAFT_v0.3.docx`, `OpMo_Website_Brief.md`).
- **Diagnostic page layout** had no Direction-2 mockup to reference (mockups were homepage-only), so it was newly composed by reusing established Direction 2 components (navy `fit-card`, `card-grid.four`, `tier-card`s) rather than inventing new patterns.

## Dead ends — do not retry
- **Icon set for the three "Where it leads" tier cards on the diagnostic page** — first-pass sparse stick-figure icons (scalpel / standing-figure / doctor) didn't read clearly, and the doctor/body figures looked too similar to distinguish. A second pass using dense closed-outline silhouettes (small dots, many segments, distinct coat shape for the doctor) worked much better — but Greg then asked to **park this work entirely** and keep only the locked stethoscope hero visual. Don't restart from sparse stick figures if resumed.
- **`file://` URLs with the claude-in-chrome extension** — don't work; the extension can only navigate to served http(s) URLs. Use `python3 -m http.server` in the repo root and hit `http://localhost:PORT` instead. (Playwright via headless chromium, used for the mockup/QA screenshots, has no such restriction and can use `file://` directly.)

## Artifacts
- `DESIGN_SYSTEM.md` — locked design system doc, final, on `main`.
- `index.html`, `diagnostic.html` — rebuilt to Direction 2, final, committed at `36770da` with post-lock tweaks (nav order, grayscale About photo, chronological Track record, diagnostic hero stethoscope visual) already applied.
- `styles.css`, `nav.js` — updated for Direction 2 (real mobile hamburger menu), final, on `main`.
- `mockups/` — all 4 direction mockups + screenshots, committed for reference only, not live pages.
- Branch `direction-3-editorial-build` — complete, self-QA'd alternate build of Direction 3, preserved if ever needed.
- **Not recoverable in a new session:** the icon-generator script (`gen_icons.py`, parametric humanoid/coat/scalpel outline functions) lived in a prior session's scratchpad, which is session-scoped and has since been cleared — confirmed empty. If the parked icon work resumes, it will need to be rebuilt from scratch (the design approach — dense closed-outline silhouettes — is documented above, but no code survives).

## Verbatim essentials
Brand palette (locked, reuse exactly — from `OpMo_Website_Brief.md` / `assets/Logo_Usage_Notes.txt`): Ink Navy `#1B2A3A`, Signal Teal `#1F8A82` (use darkened `#187a73` for any text/UI use — base teal fails 4.5:1 contrast in several pairings), Cool White `#F7F9FA`, Graphite `#2B2E31`, Slate `#5B6B79`. Type: Space Grotesk (display/headings) + Inter (body) is the base brand system; Direction 2 specifically pairs Fraunces serif + Inter. Reference sites studied for principles (not copied literally): Teneo (teneo.com), Portage (portageinvest.com), SVPG (svpg.com).

## Working preferences
- **Don't ask open-ended design questions** ("what font do you want?"). Make the expert call, produce the actual artifact, and show it — Greg has no design background and doesn't want to develop one. His job is to react in plain language ("this feels cheap," "too cramped"), not specify parameters.
- **Render, don't describe** — for any UI/visual work, default to screenshots (desktop 1440px + mobile 390px via headless browser) rather than prose description.
- **Present fully-realized alternatives** (e.g. 3 self-consistent directions) rather than asking him to pick abstract attributes in advance.
- **Translate relayed feedback yourself** — when Greg pastes plain-language reactions (his own or friends'), turn them into concrete fixes without asking him to clarify what they meant.
- This collaboration style likely generalizes to any future design/visual work with him, not just this site.
- **Respect phase order** — don't jump to mockups or builds before the prior phase's deliverable has been shown and reacted to.

## Open items
- **Next step:** Draft the Phase 6 friend-feedback prompt — jargon-free, so non-designer friends can react without needing design vocabulary. Then wait for Greg to paste back raw reactions and translate those into concrete fixes directly (per Working preferences above).
- **Then:** Apply whatever fixes come out of friend feedback.
- **Parked (resume only if Greg asks):** small companion icons (scalpel / standing-figure / doctor) for the three "Where it leads" tier cards on the diagnostic page. Approach documented above; no code survives to reuse.

## Suggested opening prompt
> Continuing the OpMo Advisory site redesign — see attached handoff doc for full context. We're at Phase 6 (friend feedback loop) of the 6-phase plan; Direction 2 "Institutional" is locked and live on `main`. Please draft the jargon-free friend-feedback prompt described in Open Items, so I can send it out.
