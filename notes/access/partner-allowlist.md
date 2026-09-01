# Cloudflare Access — allowlist record

> **Read this first.** The repository root is the Cloudflare document root
> (`wrangler.jsonc`, `assets.directory: "."`), so **every file committed here
> is publicly served**, including this one. Do not put personal email
> addresses in this file. Keep it to firm names and a count; the addresses
> live in the Zero Trust dashboard, which is the system of record.
>
> If a reviewable list of addresses is genuinely wanted in version control,
> the fix is to stop serving `notes/` first — an `.assetsignore` in the
> assets directory, or moving the folder out of the deployed root. That is a
> deployment change and has not been made.

Spec: `OpMo_Site_Audience_Routing_and_Access_Spec_v0.3.md` §7. The dashboard
configuration itself is not a code task and is not implemented in this repo.

## Room 1 — `/partners/terms/*` · authorization gate

| Setting | Value |
|---|---|
| Policy | Allow, **individual email addresses only** |
| Allowlist | Named network members and boutique contacts, added one at a time; greg@opmoadvisory.com |
| Identity providers | One-time PIN, Google, LinkedIn |
| Session | 30 days |
| Denied-page message | Points at greg@opmoadvisory.com, so a stranger's dead end becomes an inbound lead |

Adding the address is a step in outreach, immediately before sending the
link. Roughly two minutes per contact. Nobody gets in on a first attempt
unless they were added beforehand.

### Who has been added

| Firm / practice | Contact added on | Notes |
|---|---|---|
| _(none recorded yet)_ | | |

## Room 2 — `/firms/rates/*` · identification gate

| Setting | Value |
|---|---|
| Policy | Allow, **any valid email address** (catch-all include rule) |
| Allowlist | None to maintain |
| Identity providers | One-time PIN, Google, LinkedIn |
| Session | 30 days |

Nobody is turned away and there is no admin. The log of which recruiter at
which firm looked, and when, is the entire return.

## Shared settings

- Brand the login screen with the OpMo logo and app name. The Cloudflare
  default reads like an error page to a non-technical visitor.
- Enable Google and LinkedIn alongside one-time PIN: corporate spam filters
  eating the PIN email is the most common failure mode.
- Access logs live under Zero Trust → Logs → Access. Check weekly. This is BD
  signal, not security telemetry.
- Free plan covers up to 50 users; verify current limits in the dashboard
  before relying on the number.
