# Hero constellation assignments

Which figure sits in the navy hero panel on which page. The convention
originates in `OpMo_Site_Associates_Hero_Auriga_Spec_v1.0.md`, which is not
in this repository; this file is the in-repo record so a build session does
not have to guess. **Mirror any change here back into that document.**

## The convention

- Plotted from the real J2000 RA/Dec of the figure's named stars:
  `x = -RA * cos(mean declination)`, `y = -Dec`, so east is to the left and
  north is up.
- Fitted to a `0 0 400 400` viewBox with a 30-unit margin, aspect preserved.
  Rotation only when the natural bounding box is far enough from square that
  letterboxing would waste the panel (Taurus, at 1.4:1, is the only case).
- Star radius tracks visual magnitude.
- Exactly one **open node** per figure: a ring with a `#F7F9FA` centre. It is
  always the star that carries the page's argument, not simply the brightest.
- Brand teal `#1F8A82`, not `--signal-teal`. The graphic is decorative and
  carries no text, so the AA contrast floor on the token does not apply.

## Assignments

| Page | Figure | Open node | Why this figure |
|---|---|---|---|
| `index.html` | Taurus | 27 Tauri (Atlas) | The practice's own figure. |
| `why-opmo.html` | Hercules | Alpha Herculis (Rasalgethi) | The labours: work taken on by an outsider. |
| `diagnostic.html` | Ophiuchus / Serpens | — | The serpent-bearer, the physician's figure. |
| `publications.html` | Lyra | — | Vega. |
| `associates.html` | Auriga | Elnath (Beta Tauri) | Five nodes, one per person; the pentagon closes only by borrowing a star from Taurus. |
| `firms/index.html` | **Aquila** | **Altair (Alpha Aquilae)** | Zeus's eagle, dispatched to carry the thunderbolts: it does the work and the god keeps the credit, which is the sub-and-interim arrangement. Altair is open because it belongs to two figures at once — with Vega on the publications page it forms two corners of the Summer Triangle, so the supplier page's brightest node is shared with the page carrying the credibility material it points at. |
| `partners/index.html` | **Gemini** | **Castor (Alpha Geminorum)** | Two complete bodies standing beside each other. The chains are drawn unjoined, which is how the figure plots and also the page's argument: adjacent lanes, no shared line. Gemini borders Taurus (home) and Auriga (associates), so the partner figure touches both the practice and its bench. Castor is open because it reads as one star and is actually six — a practice rather than a person — and because Pollux beside it is the brighter of the two despite Castor holding the alpha designation. Neither twin ranks the other cleanly. |

The two gated pages (`firms/rates/`, `partners/terms/`) carry **no** hero
figure. They use `.hero.is-plain`: the constellations are a public-page
convention, and a reader who has just signed in came for the numbers.
