# OpMo Advisory — Website Build Brief

Hand this whole file to Claude Code as the build prompt. It contains the final page copy, the brand spec, and the tech/deployment plan. Nothing in here needs to be decided again, only built.

Site type: single scrolling page (no blog, no CMS, no forms beyond a mailto link).
Register: board-level / executive, not the DevOps-shorthand register the "OpMo" name leans toward internally.

---

## 1. Page copy (final)

Use this copy as-is. It's adapted from the already-approved `GK_Fractional_OnePager.docx` and `OpMo_AITransformation_Practice_Handout.pdf`, so the voice and claims are consistent with existing collateral.

### Hero

```
OPMO ADVISORY

Operating models that hold under the weight of transformation.

Senior operating leadership for platform, product, and AI
transformation, on a fractional or interim basis, from someone who has
been the accountable executive for the work, not just the advisor who
diagrammed it.

[Get in touch] → mailto:greg@opmoadvisory.com
```

### What I do

```
I take one fractional engagement at a time. You get an executive's
attention, not a bench.
```

**Interim VP / Platform · Platform Engineering**
Own a platform organization through a transition, a leadership gap, reorg, or modernization push, and leave it running as a product, not a cost center.

**Transformation Lead · Product & Platform Operating Model**
Move delivery from project-based to product-based structures: squad design, value-stream alignment, decision rights, and the practice changes that make the model hold under real constraints. Includes training the operators who inherit it.

**Transformation Lead · AI-Native Operating Model**
Stand up the team structures, decision cadences, and enablement architecture that turn enterprise AI spend into outcomes, including team designs that budget agent capacity alongside headcount.

### How the engagement works

```
- 2–2.5 days a week, capped by design. The cap is what keeps the seat
  senior, focused, and sustainable.
- Initial term of three to six months, extended on results, with a
  clear mandate and named outcomes agreed up front.
- Remote-first with a regular on-site rhythm. Engaged as an
  incorporated independent contractor.
- Available to start within two weeks. Commercial terms discussed on
  a short call — scope first, then the number.
```

### The fit test

```
This works when a specific structural job needs doing and a full-time
hire is the wrong tool: a platform org between leaders, a
product-model transformation that has stalled, or an AI mandate with
no owner for the operating-model layer.

If your problem is headcount, hire. That's often the answer I'll
advise myself.

If your problem is judgment applied surgically to organizational and
ways-of-working transformation, building the operating model and
training whoever inherits it, let's talk.
```

### Track record

**Interac · 2021–2026**
Built Interac's first enterprise-architecture practice, then led a 50+ person Platform-as-Product organization through a full transformation to a product operating model, in a mission-critical, regulated payments environment.

**TD & CIBC · 2016–2019**
Set enterprise API strategy and governance through the API-native wave: bank-wide API standards, an early external developer platform, and modernization of core platform services.

**Independent practice · now**
AI-Native Transformation practice serving Canadian financial services. Doctrine and diagnostics for operating models designed to absorb AI.

### Point of view (pull quote, visually distinct treatment)

```
"AI doesn't transform organizations. It amplifies the operating model
it lands on."
```

### About

```
I'm Greg Kliewer, principal of OpMo Advisory. I've built and rebuilt
operating models as the accountable executive through three
technology waves in Canadian financial services: API-native
architecture at TD and CIBC, the product operating model at Interac,
and AI-native organizational design now. Clients get someone who has
run the operating model under real constraints, not someone who has
only diagrammed one.
```

### Contact

```
Get in touch.

greg@opmoadvisory.com
linkedin.com/in/gregkliewer
```

### Footer

```
© 2026 OpMo Advisory
```

---

## 2. Brand spec

Reuse the existing OpMo Advisory brand system exactly. Source files are in `OpMo Startup/Logo/` (paths below assume Claude Code is pointed at that folder or a copy of it).

**Colors**

| Name | Hex | Usage |
|---|---|---|
| Ink Navy | `#1B2A3A` | Primary — wordmark, headings, dark section backgrounds |
| Signal Teal | `#1F8A82` | Accent — CTA buttons, links, highlight bar |
| Cool White | `#F7F9FA` | Page background |
| Graphite | `#2B2E31` | Body text |
| Slate | `#5B6B79` | Secondary text, captions, "ADVISORY" wordmark subtitle |

**Typography**

- Display / headings: **Space Grotesk** (Bold for headings, Medium for the "ADVISORY" subtitle treatment). Load via `@fontsource/space-grotesk` or Google Fonts.
- Body: **Inter** (400/500/600 weights).
- Known house rule: apply `letter-spacing: -0.018em` to body-copy classes only, never globally — global tracking previously broke header/footer flex wrapping in other OpMo collateral. Watch for orphan one-word wrap lines in narrow columns; reword rather than force-break.

**Logo files** (in `OpMo Startup/Logo/`)

- `OpMo_Logo_Primary.svg` — full color, for light/white backgrounds
- `OpMo_Logo_Reverse.svg` — for dark/navy backgrounds (use in the hero if the hero has a navy background)
- `OpMo_Mark_Favicon.svg`, `OpMo_Mark_512.png`, `OpMo_Mark_64.png` — favicon / glyph-only mark
- Keep at least one node-diameter of clear space around the logo, per `Logo_Usage_Notes.txt` in that folder.
- Prefer the SVGs over PNGs at every size.

**Layout notes**

- Single page, section-per-scroll-stop, generous whitespace, navy-and-teal-on-white throughout (matches the existing handout/one-pager design language, not a startup-SaaS gradient look).
- Mobile-first responsive. This will very likely get opened from a phone after someone gets the LinkedIn link.
- No stock photography. Treat this like an institutional/professional-services site (think a boutique advisory firm's site), not a consumer SaaS landing page.

---

## 3. Tech stack recommendation

**Recommendation: plain HTML + CSS, no framework, no build step.**

This is one page with no forms, no CMS, and no near-term plan for a blog. A framework (Astro, Next.js, etc.) adds a build pipeline and dependency surface for zero benefit at this scope. Plain HTML/CSS is also the easiest thing for Claude Code to generate correctly in one pass and the easiest for you to hand-edit later without relearning a framework.

If you later add more pages (About as its own page, an insights/LinkedIn-archive page), migrating to **Astro** at that point is a clean upgrade path — it still outputs static HTML but gives you shared header/footer components instead of copy-pasting markup across files. Not needed for v1.

Stack for v1:
- `index.html`, `styles.css`, `/assets` (logo SVGs, favicon)
- No JavaScript required beyond maybe a smooth-scroll for the nav anchor links, which can be done in \~5 lines of vanilla JS or pure CSS (`scroll-behavior: smooth`)

---

## 4. Deployment

**Recommendation: Cloudflare Pages** (free tier is generous, fast global CDN, automatic HTTPS, and it doesn't require moving your domain's nameservers off Namecheap).

Alternatives that work equally well for a static site: Vercel, Netlify, GitHub Pages. Any of these is fine — Cloudflare Pages is the recommendation mainly because Cloudflare's free tier has no meaningful limits for a low-traffic brochure site and its dashboard makes the custom-domain step simple.

**Deployment steps (Claude Code can do most of this from the terminal):**

1. Push the site folder to a GitHub repo (Claude Code can `git init`, commit, and push if you create an empty repo on GitHub first).
2. Connect that repo to Cloudflare Pages (cloudflare.com → Pages → Create project → Connect to Git). Build command: none. Output directory: `/` (root).
3. Cloudflare Pages gives you a free `*.pages.dev` subdomain immediately — use it to review the live site before touching DNS.
4. Add the custom domain in Cloudflare Pages: `opmoadvisory.com` (and `www.opmoadvisory.com` if you want both to resolve).

**DNS — the part that needs care, since Google Workspace email is on this domain:**

Your domain is registered at Namecheap. Google Workspace email depends on the existing **MX records** (and likely SPF/DKIM/DMARC **TXT records**) on `opmoadvisory.com`. Adding a website must not touch those.

- Cloudflare Pages will give you exact record instructions when you add the custom domain (typically a `CNAME` for `www` pointing at your `*.pages.dev` address, and either a `CNAME`-flattened or `A`/`ALIAS` record for the bare/apex domain).
- In Namecheap's DNS panel, **add** the new record(s) Cloudflare gives you. **Do not delete or modify** any existing `MX` records, or any `TXT` records that mention `google`, `spf`, or `dkim`.
- Before making any DNS change, take a screenshot or copy down the current MX/TXT records as a backup reference.
- After adding the site's records, send a test email to `greg@opmoadvisory.com` from an external account to confirm mail still flows before you consider the DNS work done.

This can all be done without migrating the domain's nameservers to Cloudflare. If Claude Code (or you) later wants Cloudflare's proxy/CDN and WAF features on top, that's a separate, optional step of moving nameservers, not a v1 requirement.

---

## 5. Using Claude Code for the build

Claude Code is a good fit here: this is a small, self-contained static site with no legacy code to break, which is close to the easiest thing you can hand it. Recommended workflow:

**Install** (macOS terminal):
```bash
curl -fsSL https://claude.ai/install.sh | bash
```
Then run `claude` once to log in with your Claude account, and `claude --version` to confirm it installed.

**Start the build**, from an empty project folder:
```bash
mkdir opmo-site && cd opmo-site
claude
```
Then paste this file's contents (or point Claude Code at it with `Read the file OpMo_Website_Brief.md and build the site described in it`) as your first prompt. Claude Code will scaffold `index.html` and `styles.css` from the copy and brand spec above.

**Copy the logo assets** into the project's `/assets` folder before or during the session (from `OpMo Startup/Logo/`) so Claude Code can reference real files rather than placeholders.

**Review before accepting**: Claude Code will show proposed file changes and ask for approval — read through the first pass of `index.html` for any copy drift from Section 1 above before accepting.

**Git and deploy**: once you're happy with the local preview (open `index.html` directly in a browser, no server needed for something this simple), ask Claude Code to initialize git, commit, and push to a new GitHub repo, then follow Section 4 to connect Cloudflare Pages.

---

## Open items for you to decide before/during the build

- Exact hero image treatment: text-only hero (recommended, matches the existing collateral's restrained style) vs. adding the two-node glyph as a large background watermark.
- Whether to include `www.opmoadvisory.com` as a redirect to the apex domain or vice versa (either is fine; pick one as canonical).
- Whether the "Point of view" pull quote section earns its place on a single page or should be cut for length — it's the one piece of copy in this brief that isn't a near-verbatim reuse of approved collateral.
