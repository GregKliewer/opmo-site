# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing site for OpMo Advisory (opmoadvisory.com) — a boutique advisory practice. Hand-written static HTML/CSS/JS. **No framework, no build step, no package.json, no tests, no linter** — this is an explicit, load-bearing constraint from `OpMo_Website_Brief.md`, not an accident of scale. Don't introduce a bundler, a template engine, or a dependency without an explicit decision to change it.

## Running it locally

```bash
python3 -m http.server 8199
```

`.claude/launch.json` defines this as the `opmo-site` preview config — prefer `preview_start` with `{name: "opmo-site"}`. Serve over http rather than opening `file://` URLs: the browser extension can't navigate to `file://` (Playwright can, if you're driving it directly).

Visual verification is by screenshot, not description — desktop 1440px and mobile 390px. Playwright via `npx --yes playwright screenshot` is the established path; nothing is installed in-repo.

## Deployment

Cloudflare Workers static assets (`wrangler.jsonc`, `assets.directory: "."`). The **repository root is the document root**, so everything committed here is publicly served — including `mockups/`, `notes/`, `DESIGN_SYSTEM.md`, and `OpMo_Website_Brief.md`. Keep that in mind before committing anything you wouldn't publish.

## Architecture

Standalone HTML documents, each a complete page with no shared includes:

- Root: `index.html` (the main scrolling page), `diagnostic.html`, `associates.html`, `publications.html`, `thanks.html` (Formspree redirect target)
- `publications/*.html` — the long-form article pages

Everything shares one stylesheet (`styles.css`, ~2450 lines) and one script (`nav.js`). `diagnostic-carousel.js` loads only on `diagnostic.html`.

**Because there is no templating, the following are hand-duplicated across every page** and must be edited in every one:

- The entire `<head>` block (fonts, favicons, stylesheet link)
- `<header>` / `.site-nav` markup and `<footer>`
- Link prefixes differ by depth: root pages use `index.html#about`, articles use `../index.html#about`. `index.html` itself uses bare `#about` fragments. Nav label copy has drifted between pages before — diff the nav block across files rather than assuming they match.

**Cache busting**: every page links `styles.css?v=NN`. When you change `styles.css`, bump the number in **every** page that links it, in the same commit — a partial bump serves mixed CSS versions. Check the current value and the full file list with:

```bash
grep -l 'styles.css?v=' *.html publications/*.html
```

**Adding a page** means: the page itself, a nav entry in every other page, a `<link rel="canonical">`, and a `<url>` entry in `sitemap.xml`.

### styles.css

Single stylesheet, organized top-to-bottom by banner comments (`/* ---- Header / nav ---- */` etc.) roughly in page order, with a `@media (max-width: 900px)` responsive block at the end. Design tokens live in `:root`. The last ~900 lines are the `.viz` system — the article charts and figures are hand-built HTML/CSS/inline-SVG with no charting library; they carry their own `@media (max-width: 700px)` tier.

The inline comments in this file explain non-obvious decisions (contrast ratios, specificity fights, why a rule is scoped where it is). Read them before overriding something.

### JavaScript

`nav.js` does two unrelated things: the mobile hamburger toggle (sets the ARIA contract in JS, since the button's markup is three unlabelled bars) and `#battle-card` hash handling that expands the track-record `<details>` cards on `index.html`. `diagnostic-carousel.js` is an IIFE driving the `data-tier-*` slide set.

### Contact form

`index.html` posts to Formspree (`action="https://formspree.io/f/xyegvlgz"`), with a `_next` hidden field redirecting to `thanks.html` and a `_gotcha` honeypot field. There is no server-side code anywhere in this repo.

## Design system — read before touching visuals

`DESIGN_SYSTEM.md` is the locked constraint doc (Direction 2, "Institutional", locked 2026-07-30). Match it, and when it disagrees with itself, match the reference implementation `mockups/direction-2-institutional.html`. Things that are easy to get wrong:

- **Teal**: `--signal-teal` is `#187a73`, not the brand `#1F8A82`. The brand hex fails WCAG AA (4.19:1) for anything carrying text, so it survives only in the logo SVGs and the decorative hero graphic. Don't "fix" the token back to the brand value.
- Card shadows are a highlight mechanism used on exactly one element (the featured tier card). Not a default.
- Photos of Greg render grayscale. No stock photography anywhere.
- Sections alternate white / `.section-alt` on a specific documented rhythm, not a strict every-other rule.

## Content constraints

- Any dollar figure must be labeled CAD.
- No new claims, client names, or case studies beyond the existing source material (`OpMo_Website_Brief.md`, the one-pagers in `mockups/assets/`, and current site copy). Copy in the brief is final and approved — reuse it rather than rewriting.

## Repository conventions

- Work happens on short-lived topic branches merged into `main`.
- `mockups/` holds the four original design directions plus screenshots — reference only, never live pages, and they intentionally diverge from the built site.
- `direction-3-editorial-build` is a complete, preserved alternate build of a rejected direction (forked 2026-07-27, last built 2026-07-30 — the day Direction 2 was locked). It exists **only on `origin`**, deliberately not checked out locally. Don't delete the remote branch; if you need to look at it, `git fetch origin` and read it from `origin/direction-3-editorial-build` rather than creating a local copy.
- `notes/handoffs/` carries session handoff docs, including decisions, dead ends already tried, and the site owner's stated working preferences for design work (make the expert call and show a rendered artifact rather than asking open-ended design questions). Worth reading before a large visual change.
