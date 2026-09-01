# OpMo Advisory — Design System

Locked from **Direction 2 (Institutional)**, chosen 2026-07-30 after reviewing four mockups (`mockups/direction-1..4-*.html`). Direction 3 (Editorial) was the initial pick and was fully built out, then reversed in favor of Direction 2 — that build is preserved on the `direction-3-editorial-build` branch, not deleted. This document is the constraint doc for the site rebuild (Phase 4 onward). Don't deviate without an explicit decision to change it.

Reference implementation: `mockups/direction-2-institutional.html` — when in doubt, match that file's actual CSS over this document's prose.

## Design intent

Modern, tech-forward, financial-infrastructure-clean (the Portage reference). Confident use of navy as a solid fill for high-emphasis moments (stat band, fit-test callout, contact section), bordered white cards with generous radius for structured content (roles, tiers), and a serif display face (Fraunces) paired with Inter for a boardroom-but-current feel — less austere than Direction 3's hairline-only editorial system, more textured than a flat SaaS template.

## Color

Same underlying brand hex values as the original site (`OpMo_Website_Brief.md`); this direction uses them with more surface area than Direction 3 did — solid navy blocks, a teal tint for the hero tag, and bordered cards rather than hairline-only separation.

| Name | Hex | Usage |
|---|---|---|
| Ink Navy | `#1B2A3A` | Headings, stat-band/fit-card/contact-section fill, nav CTA button, btn-outline border, card top-border accent (track record), footer rule |
| Signal Teal (brand) | `#1F8A82` | Decorative-only: hero SVG node/line graphic, eyebrow tick mark. Never used as text — see next row |
| Signal Teal (text) | `#187a73` | Every text/UI use of teal: links, role-sub/tier-badge labels, `.btn-primary` fill (with white text), hover states. **The brand hex `#1F8A82` is only 4.19:1 against white — under WCAG AA's 4.5:1 for text, and white-on-`#1F8A82` is the same 4.19:1.** `#187a73` (5.16:1 both directions) is used instead everywhere teal carries text or sits behind text. The literal brand hex is unaffected in the logo SVGs (static assets, not token-driven) |
| Teal Tint | `#E4F0EF` | Hero tag pill background only |
| Cool White | `#F7F9FA` | `.section-alt` background — alternates with white per section, see rhythm below |
| Graphite | `#2B2E31` | Body text |
| Slate | `#5B6B79` | Secondary text: section labels, dates, stat captions |
| Hairline | `#DDE3E5` | Card borders, footer top border, stat/terms dividers |
| White | `#FFFFFF` | Base page background and card fill |

**Note on the hero tag pill:** the mockup sets teal text on the teal-tint background (3.59:1 — fails AA). Built version uses ink-navy text on teal-tint instead (12.52:1) — same pill treatment, accessible label color.

**Section fill rhythm** — not a strict every-other rule. The governing constraint is that no two adjacent `.section` blocks share a ground. The hero is exempt: it is its own band, always on white, and the first section below it may continue on white (`diagnostic.html` and `why-opmo.html` both do). Recorded per page, since the site is no longer one scrolling page:

- `index.html`: hero → white, stat-band → navy, what-i-do → cool-white, investment-band → navy, how-it-works → cool-white, fit-test → white (contains a navy card), about → cool-white, contact → navy, footer → white.
- `why-opmo.html`: hero → white, why-an-outsider → white (it carries the page's one pull-quote, and the pull-quote stays on white), track-record → cool-white, footer → white.
- `diagnostic.html`: hero → white, overview → white, where-it-leads → cool-white.
- `associates.html`, `publications.html`: hero → white, single section → cool-white.
- `firms/index.html`: hero → white, what-i-take-on → white, rates → cool-white, contracting → white, footer → white.
- `partners/index.html`: hero → white, joint-pursuit → white, fit → cool-white, terms → white, footer → white.
- `firms/rates/index.html`, `partners/terms/index.html` (gated): hero → white (`.hero.is-plain`, no constellation panel), first section → white, second → cool-white, third → white.
- `index.html`'s audience fork band sits on white between the cool-white About section and the navy contact band, so the alternation either side of it is undisturbed.

This replaces the single homepage sequence recorded here through 2026-08-29, which described a page that still carried the track record and the why-an-outsider argument. Both moved to `why-opmo.html`.

## Typography

| Face | Role | Weights | Source |
|---|---|---|---|
| **Fraunces** | Display / headings (h1, h2, h3, stat numbers, pull-quote) | 400, 500, 600 upright + 400, 500 italic | Google Fonts, `opsz` axis default |
| **Inter** | Body copy, nav, labels, buttons | 400, 500, 600 | Google Fonts |

Load with the italic range included — the mockup only imported upright weights, which meant the pull-quote's `font-style: italic` was a browser-synthesized fake italic. Fixed in the build: `family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500`.

Headings: `font-weight: 500`, `color: var(--ink-navy)`, `line-height: 1.15`.

### Type scale (desktop → mobile)

| Element | Desktop | Mobile | Notes |
|---|---|---|---|
| Hero h1 | 3.1rem (49.6px) | 2.3rem (36.8px) | letter-spacing -0.01em |
| Stat number | 2.4rem (38.4px) | same | Fraunces 500, white, on navy |
| Section h2 | 2.2rem (35.2px) | same | max-width 600px |
| Fit-card h2 | 1.9rem (30.4px) | same | white, inside navy card |
| Role/tier-card h3 | 1.25–1.3rem | same | |
| Record-item h3 | 1.15rem | same | |
| Pull-quote | 2.2rem (35.2px) italic Fraunces | 1.5rem (24px) | line-height 1.4 |
| Body / paragraph | 16px base, line-height 1.65 | same | |
| Hero sub / section-lead | 1.1rem / 1.08rem | same | color: slate |
| Tag / eyebrow / section-label | 0.78–0.8rem, 600 weight, uppercase or tracked | same | |
| Nav links | 0.9rem, 500 weight | hidden — real hamburger menu, see Known Gap below | sentence case, not lowercase (matches mockup) |

## Spacing

| Token | Value | Usage |
|---|---|---|
| Section vertical padding | 100px desktop / 64px mobile | every `.section` |
| Hero padding | 96px top / 80px bottom desktop, 48px bottom mobile | |
| Content max-width | 1160px | single `.wrap` used everywhere — no separate narrow text column like Direction 3 |
| Card/grid gap | 24px (role/tier grids), 32px (record grid, terms-list), 56px (about-grid) | |
| Grid-to-heading gap | 56px | `margin-top` from h2/lead block to the grid below it |
| Card padding | 32px (role-card), 36px 30px (tier-card), 56px (fit-card) | |

## Components

**Buttons** — two variants: `.btn-primary` (`background: var(--signal-teal)` i.e. `#187a73`, white text, `border-radius: 3px`) is the only one currently used on the page (hero, contact). `.btn-outline` (1px navy border, navy text, transparent fill, same radius) exists in the system for a future secondary CTA but isn't used yet — don't invent a use for it without a reason.

**Nav CTA** — a filled navy pill button in the header (`background: var(--ink-navy)`, white text, `border-radius: 3px`), not an underlined text link — this is a deliberate difference from Direction 3.

**Cards** — `.role-card` and `.tier-card`: white fill, 1px hairline border, `border-radius: 6px`, no shadow by default. The **featured tier card** (`Embedded Lead`, the most-common tier) is the one deliberate exception: `border-color: var(--signal-teal)` plus `box-shadow: 0 4px 24px rgba(31,138,130,0.12)` to draw the eye. Don't add shadows elsewhere — this is a highlight mechanism, not a default card treatment.

**Stat band** — full-width navy section, 3-column grid, `1px solid rgba(255,255,255,0.14)` column rules (last child has none), big Fraunces number + slate-tinted caption.

**Fit-card** — navy, `border-radius: 8px`, `padding: 56px` (32px mobile), white/light-slate (`#C9D3D9`) body text, a `border-top: 1px solid rgba(255,255,255,0.18)` divider above the closing emphasis line.

**Record grid** — 3-column, each item has a `2px solid var(--ink-navy)` top border (not a card, not a hairline) — the one place a heavier navy rule is used as a structural marker rather than a full border box.

**Pull-quote** — centered, italic Fraunces, no card, no border, no background — the one component that stays as spare as Direction 3's version.

**About photo**: grayscale (`filter: grayscale(1)`), per Brand Identity v3 (2026-08-10): photos of Greg are always grayscale. This supersedes the natural-color line that shipped with Direction 2's initial build. `border-radius: 6px`, `object-fit: cover`, 4:5 aspect ratio.

**Hero visual** — a node/line SVG graphic (the motif Direction 3 explicitly dropped) sits in a navy rounded panel opposite the hero copy on desktop; hidden on mobile rather than stacked, since it's decorative. Which constellation goes on which page, and the projection convention behind them, is recorded in `notes/hero-constellations.md`. The two gated pages are the exception: `.hero.is-plain` drops the panel entirely.

**Gate teaser** (`.gate-card`) — the public step in front of a Cloudflare Access room, on `/firms` and `/partners`. White fill, hairline border, `border-radius: 6px`, and a `3px solid var(--signal-teal)` top rule. Deliberately *not* the featured card's shadow: a doorway is not the page's recommended option, and shadows stay reserved for the featured tier card.

**Rates block** (`.rate-figure` / `.rate-cols` / `.rate-shapes`) — the published day rate range on `/firms`, per `OpMo_Site_Firms_Rates_Block_Mockup_v0.1.html`. The numeral takes Fraunces **500**, not the mockup's 600: the mockup is a standalone file on its own tokens, and display weight is 500 site-wide. The range renders from a single element — see `notes/published-rate-range.md`.

**Audience fork** (`.fork-band`) — the quiet two-link band on the homepage. `h2` at 1.6rem, below section-heading rank on purpose: it is a signpost, not a pitch. Not in the main nav, per the routing spec.

**Footer links** (`.footer-links`) — the two audience doors, navy and undecorated until hover, so the row reads as navigation without outweighing the copyright line beside it.

## Imagery guidelines

- No stock photography, anywhere, ever.
- The only photographs on the site are of Greg (headshot) and the associate network. All photos of Greg render grayscale (see About photo above).
- The node/line SVG motif is reused (hero visual only) — don't extend it into a repeating background pattern or add it elsewhere.
- Logo: `OpMo_Logo_Primary.svg`, 36px tall in the header, 20px tall at 0.7 opacity in the footer.

## Mobile nav

Fixed (was the "known gap" in every direction's mockup: `nav{display:none}` below 900px with no replacement). A real mobile nav now ships: `.nav-toggle` hamburger button plus a collapsible `.site-nav` panel (navy text, hairline dividers, no shadow), driven by `nav.js` toggling a `.open` class. Applies below 900px, matches this system.

## Constraints carried over from the brief

- Any dollar figures anywhere on the site must be labeled CAD, inline and in the page's closing `.fine-print` line, gated pages included.
- No new claims, client names, or case studies beyond existing source material.
- Plain HTML/CSS/JS, no framework, no build step.
