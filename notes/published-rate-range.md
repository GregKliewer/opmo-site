# The published day rate range

**Confirmed 2026-08-31. Review quarterly.** Source:
`OpMo_Site_Audience_Routing_and_Access_Spec_v0.3.md` §5a.

> **$2,400 – $3,200 CAD per day**, on a 7.5-hour day.
> Engagements of six months or more adjust down against published term
> benchmarks. Specialist AI-native operating-model work prices above the range.

## Where it renders

The site has no build step, so "a single source value" (spec build note 8)
is enforced by the figure appearing **exactly once** in the markup rather
than by a template variable. Changing the published range is this one edit:

- `firms/index.html` — the `.rate-figure` block, marked `SINGLE SOURCE` in
  an HTML comment. Nothing else on that page, in its meta description, or in
  `sitemap.xml` restates the range.

The gated page `firms/rates/index.html` carries the **per-shape** rates
($2,400 / $2,800 / $3,200 CAD per day), which are separate values that
happen to coincide with the band's endpoints. If the band moves, decide
what happens to each shape rather than find-and-replacing.

## Where the floor comes from

$2,400/day = $320/hr on a 7.5-hour day: the blended market rate validated in
`Independent_Practice_Business_Plan_v2` (PSPC FY2026–27 Market Rate Card
baseline of $227/hr average across five Level 3 categories, plus a 30–50%
regulated-industry premium, cross-checked against boutique-network bands).
It is also the rate that clears the floor: on the plan's 1,837.5 hours/year
capacity basis, 60% utilization at $320/hr produces $352,800 against the NL
floor line of $354K. Publishing anything lower as the headline concedes the
floor in public.

CP005's default non-FTE floor is $345/hr at 60% utilization on a 2,080-hour
basis; the business plan standardizes on the more conservative 1,837.5-hour
basis, which is why $320/hr is the operative number. Anything below
$2,400/day is a time-boxed bridge under CP005's explicit exception, dated and
justified — not a rate, and not something that belongs on a public page.

## Where the ceiling comes from

$3,200/day = $427/hr. Senior fractional and interim technology executives in
North America band at $200–400/hr, with $400–600/hr common for AI-strategy
engagements. $427/hr sits at the top of the generalist band and the bottom of
the AI-specialist band, which is where the AI-native positioning belongs, and
leaves headroom to price above the range without contradicting the page.

## Page rules carried from the spec

- Every figure carries **CAD** inline and in the closing fine-print line.
- The day is stated as **7.5 hours** explicitly.
- The range is dated on the page and reviewed quarterly.
