# OpMo Advisory — Design System

Locked from **Direction 3 (Editorial Boutique)**, chosen 2026-07-30 after reviewing four mockups (`mockups/direction-1..4-*.html`). This is the constraint document for the site rebuild (Phase 4 onward). Don't deviate without an explicit decision to change it.

Reference implementation: `mockups/direction-3-editorial.html` — when in doubt, match that file's actual CSS over this document's prose.

## Design intent

Restrained, institutional, editorial. Closest in spirit to the existing print collateral (`assets/OpMo_Fractional_OnePager_v2.pdf`, `assets/OpMo_P1_Diagnostic_OnePager_DRAFT_v0.1.pdf`): thin hairline rules instead of colored section blocks, real tables instead of shadowed cards, generous line-length-constrained text, lowercase small-caps-style eyebrow labels, color used only as accent, never as a filled background. No stock photography, no drop shadows, no rounded "SaaS card" components.

## Color

Same underlying brand hex values as the original site (`OpMo_Website_Brief.md`) — this direction changes *how sparingly* they're used, not the palette itself.

| Name | Hex | Usage |
|---|---|---|
| Ink Navy | `#1B2A3A` | Headings, primary button fill, body-copy links' hover target color for nav, table header rule, fit-test border accent |
| Signal Teal | `#1F8A82` (brand) / `#187a73` (text) | The *only* accent color: role-tag labels, link color, button hover state, quote mark glyph. Used sparingly — a moment, not a field. **The brand hex (`#1F8A82`, as used in the logo SVGs) is only 4.19:1 against white — below WCAG AA's 4.5:1 for text.** The CSS `--signal-teal` token is therefore set to a 4% darker `#187a73` (5.16:1), used for every text/link/hover application. Don't revert this to the literal brand hex for text — the logo itself is unaffected since it's a static SVG, not driven by this token |
| Graphite | `#2B2E31` | Body text |
| Slate | `#5B6B79` | Secondary text: eyebrow/section labels, dates, captions, `section-lead` paragraphs |
| Hairline | `#E1E5E7` | All dividers: section borders, table row borders, card-free list separators |
| White | `#FFFFFF` | Page background — the only background color used. No alternating gray section bands, no solid navy blocks anywhere on the page |

**Rule:** if you're reaching for a filled color background on anything larger than a button, stop — this direction doesn't do color blocking. Separate sections with a 1px hairline border, not a background-color swap.

## Typography

Three font families, each with one job:

| Face | Role | Weights | Source |
|---|---|---|---|
| **IBM Plex Sans** | Display / headings (h1, h2, h3) | 400, 500, 600 | Google Fonts |
| **Inter** | Body copy, nav, labels, buttons | 400, 500, 600 | Google Fonts |
| **Newsreader** (italic) | Pull-quotes only — nowhere else | 400, 500 italic | Google Fonts |

Headings: `font-weight: 500`, `color: var(--ink-navy)`, `line-height: 1.2`, `letter-spacing: -0.01em`.

### Type scale (desktop → mobile)

| Element | Desktop | Mobile | Notes |
|---|---|---|---|
| Hero h1 | 2.6rem (41.6px) | 2rem (32px) | max-width 780px, letter-spacing -0.015em |
| Section h2 | 1.9rem (30.4px) | same | max-width 600px |
| h3 (role/record item) | 1.15rem / 1.05rem | same | |
| Pull-quote | 2rem (32px) italic Newsreader | 1.5rem | line-height 1.5 |
| Body / paragraph | 17px base, line-height 1.7 | same | body font-size is 17px, not the usual 16px browser default — slightly larger for editorial readability |
| Hero sub / section-lead | 1.15rem / 1.08rem | same | color: slate for section-lead, graphite for hero-sub |
| Eyebrow / section-label | 0.82rem, 600 weight, 0.04em tracking, slate | same | lowercase in copy (e.g. "what i do", "the fit test") |
| Nav links | 0.88rem, 500 weight | hidden — see Known Gap below | lowercase |
| Caption (dates, tier commitment) | 0.85–0.96rem, slate | same | |

## Spacing

Base rhythm, consistent site-wide:

| Token | Value | Usage |
|---|---|---|
| Section vertical padding | 88px desktop / 56px mobile | every `.section`, plus hero at 100px/90px desktop |
| Section separator | 1px `--line` border-bottom (no border on the last section before footer) | replaces alternating background color |
| Content max-width (text) | 900px | hero, section body copy — keeps line length readable |
| Content max-width (header/footer) | 1160px | full-bleed nav/footer bar |
| Row/list item padding | 24–28px vertical | role-list items, record-list items, table rows |
| Card-free list gap | 32px column gap | two-column label/content rows (role items, record items) |
| Heading-to-body gap | 16–18px | section-lead under h2 |
| List-to-section-top gap | 48px | first list/table item after the h2/lead block |

## Components

**Buttons** — one style, no variants: `.btn-primary` — `background: var(--ink-navy)`, white text, `border-radius: 2px`, `padding: 13px 26px`, hover → `background: var(--signal-teal)`. No secondary/outline button exists in this direction; if a second action is ever needed, use a plain underlined text link instead of a second button style.

**Links** — underlined, `text-underline-offset: 3px`, teal (`--signal-teal`). Nav CTA ("get in touch") is a plain navy text link with a bottom border, not a filled button — the only filled button on the page is the primary CTA in the hero and contact section.

**Lists instead of cards** — "What I do" and "Track record" are two-column grid rows (label column + content column) separated by hairline top borders, not boxed cards with shadows. No `box-shadow` anywhere in this system.

**Engagement tiers = a real `<table>`**, not cards — header row with a 1px navy bottom border, body rows with hairline dividers. On mobile (≤860px) it collapses to stacked label/value blocks (see `mockups/direction-3-editorial.html` lines 115–119 for the exact collapse pattern) — never a horizontally-scrolling table.

**Pull-quote** — italic Newsreader, teal `"` glyph above the quote (`content:'\201C'`, `font-size:3rem`, not part of the quote text itself), no border, no background.

**Fit-test block** — plain content with a 2px solid navy left border (`padding-left: 32px`), no fill, no card shell.

**About photo** — grayscale (`filter: grayscale(1) contrast(1.05)`), 4:5 aspect ratio, 2px border-radius. This is the one deliberate photographic treatment in the system — keep it consistent if the photo is ever swapped.

## Imagery guidelines

- No stock photography, anywhere, ever.
- The only photograph on the site is Greg's headshot, grayscale-treated as above.
- No decorative illustration, gradient mesh, or abstract background graphics — Direction 3 is typography- and whitespace-driven, not graphic-driven. (The node/line motif explored in Directions 1, 2, and 4 was *not* carried forward — don't reintroduce it here.)
- Logo: `OpMo_Logo_Primary.svg` in the header and footer (the page is white-dominant, so Reverse/Mono variants aren't needed on this direction's homepage). Keep at least one node-diameter of clear space per `assets/Logo_Usage_Notes.txt`.

## Known gap to fix in Phase 4

The mockup hides `nav` entirely below 900px with no hamburger replacement (`nav{display:none}`). This is a placeholder, not a design decision — Phase 4 must add a real mobile nav (collapsed menu, not a disappearing one), styled to match this system (navy text, hairline borders, no filled dropdown card).

## Constraints carried over from the brief

- Any dollar figures anywhere on the site must be labeled CAD.
- No new claims, client names, or case studies beyond existing source material.
- Plain HTML/CSS/JS, no framework, no build step.
