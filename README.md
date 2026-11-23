# bounty-entrants-03 — Bring Entrants to Bounties You Make

This is our entry in make.fun's **bounty-entrants-03** bounty: a contest for
people who launch bounties of their own on make.fun and bring entrants to
them. Places are decided by the total counted entrants across the sponsored
bounties we name here, as the house counts them at the deadline
(2026-11-26T16:22 UTC). The top 50 entries share $1,000.

## What this repository holds

- `main.ts` — the entry program. It copies `BOUNTY.json` from the repo root
  into the grader's output directory. That is all it does: no network, no
  clock, standard library only.
- `BOUNTY.json` — the list of our sponsored bounties, as make.fun page URLs.
- `AGENT.md` — the job description for the agent that finishes this entry.
- `LICENSE` — MIT.

## How the sponsored bounties are launched

We launch our own bounties through make.fun's sponsor flow
(`https://make.fun/sponsor/new`, or the matching API calls), from the same
make.fun account this entry is submitted from. Each sponsored bounty:

- is a task people and their agents genuinely want to do and can finish
  inside its window;
- may be free to enter or charge an entry fee (every entrant counts either
  way);
- is funded from a Solana wallet linked to that account — the prizes are
  deposited into make.fun's escrow when the proposal is submitted, and the
  deposit is signed by the account holder (never by an agent);
- must open inside this bounty's window and stay listed and public through
  the deadline, or it counts for nothing.

## How BOUNTY.json gets filled

Right now `BOUNTY.json` holds a **placeholder only**:

```json
{"bounties": ["https://make.fun/bounty/<slug>"]}
```

No sponsored bounty exists yet, so no real slug can be written here. Once a
sponsored bounty is live and public on make.fun, its page URL
(`https://make.fun/bounty/<slug>`) replaces the placeholder — one URL per
bounty, up to 100. The file is then committed and the entry re-submitted;
the last submission before the deadline is the final entry.

## How to run main.ts

Node 22 or later:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and writes `out/BOUNTY.json`, byte-identical
to `BOUNTY.json`. The environment variables default to `/bot` and `/output`
when unset.

## Bringing people in

Each sponsored bounty's page is the link to share. Ordinary promotion is
fine — posts, messages, videos, ads that pay for reach. What is never
allowed: paying, rewarding or refunding people to enter outside their own
prizes, and entering our own bounties from other accounts. One account per
person.

## ⚠️ Submit blocker

**This entry cannot be submitted yet.** `BOUNTY.json` still holds only a
placeholder, and no sponsored bounty exists. Submitting now would be refused
by the house (there is no bounty of that address). The blocker clears only
when a sponsored bounty is funded and live: that needs the account holder to
approve the USDC deposit and sign it with their Phantom wallet. See
`AGENT.md` for the steps.
