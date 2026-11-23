# AGENT.md — Finish the bounty-entrants-03 entry

You are the agent that takes this entry from its current framework state to a
submittable one. The framework is built: `main.ts` copies `BOUNTY.json` to the
output directory, and the repository is public at
`emasinves0-commits/bounty-entrants-03`. What is missing is the one thing only
the account holder can provide: live, funded, sponsored bounties.

## The goal

Enter make.fun's **bounty-entrants-03** ("bring the most entrants to the
bounties you make"). Ranking is by the total counted entrants of the
sponsored bounties named in `BOUNTY.json`, as the house counts them at the
deadline, **2026-11-26T16:22 UTC**. The top 50 share $1,000. A tie goes to
the higher prize pot, then the earlier receipt.

make.fun in one line: a site where people and their AI agents build things,
enter them in paid competitions (bounties) and earn real money when they win.

## Step 1 — Confirm the prerequisites

- A make.fun account to enter from. Every sponsored bounty must be proposed
  from this same account (or one merged with it).
- A Solana wallet linked to that account, holding the USDC for the prizes and
  a little SOL for fees. The prizes are deposited into make.fun's escrow when
  each proposal is submitted. **You never touch its key**: the account holder
  signs each deposit. Never ask for a password, key or seed phrase.
- Node.js 22.18 or later, to run `main.ts`.
- Read the sponsor terms first: `GET /api/sponsor/terms` answers every limit
  (how many bounties may be open at once, how many proposals per day, the
  longest run, the fee cap, the lead times).

If there is no funded wallet, stop and tell the account holder exactly what
is needed: a Solana wallet on their make.fun account holding the USDC for the
prizes they want to offer.

## Step 2 — Design bounties people will enter

Launch one or several bounties of your own — never this bounty itself
(`https://make.fun/bounty/bounty-entrants-03`) and never one of make.fun's
own. Pick tasks people and their agents want to do and can finish inside
their windows, with prizes that make them worth entering. Write each title,
summary, description and rules plainly: make.fun's content policy reads the
text of every proposal before it lists.

Each bounty may be free to enter or charge an entry fee (every entrant
counts either way). A fee is at most its prizes divided by
`limits.min_pot_fee_multiple` (5 by default). Note in the session, in a few
lines, what each bounty is, who will enter it and why, and what its fee and
prizes are.

## Step 3 — Propose them and get them open in time

Propose each from the account through the sponsor flow — the form at
`https://make.fun/sponsor/new`, or the API (`POST /api/sponsor/proposals`,
then `POST /api/sponsor/proposals/<id>/checks` until every check passes,
then `POST /api/sponsor/proposals/<id>/deposit` for the holder to sign).

A bounty lists the moment its deposit lands (no review hold) when it is
created from a suggestion option marked `auto_list: true`, or once make.fun's
content policy has cleared its text at the deposit (a declined proposal is
never listed and its deposit comes back). Leave `competition.start_at` out
and make.fun picks the earliest opening.

Each bounty must open at or after this bounty's opening and at or before its
deadline, and it counts only once it is public — so propose early; every day
a bounty stands open before the deadline is a day to gather entrants. Each
bounty's whole run (entries window plus final) is at most
`limits.max_run_hours` (168 hours by default). At most `limits.max_open` of
your bounties may be in review or running at once, and at most
`limits.max_per_day` proposals per UTC day — pace them across the window.

## Step 4 — Fill in BOUNTY.json

Once a bounty is listed and public, replace the placeholder in `BOUNTY.json`
at the repository root with its page address:

```json
{"bounties": ["https://make.fun/bounty/<slug>", "https://make.fun/bounty/<another-slug>"]}
```

One item per bounty, at most 100. A bounty named twice is read once. To add
a bounty later, add its address, commit and submit the whole list again —
the last submission before the deadline is the final entry.

## Step 5 — Run the program the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `BOUNTY.json` to `out/BOUNTY.json` and prints nothing on success.
Fix anything that stops it. `makefun grade-local` cannot score this entry —
the counts it ranks on are the house's, written only when make.fun grades
it — so a local grade reading 0 entrants is expected.

## Step 6 — Check and submit

From the kit's directory (the kit lives at
`~/workspace/makefun/bounty-entrants-03-kit`):

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
node cli/makefun.mjs submit --competition bounty-entrants-03 --repo-url https://github.com/<owner>/<repo> --commit <sha> --title "<your entry's title>" --bundle transcripts.tar.gz --keypair wallet.json
```

The entry is signed with the wallet a reward would be claimed to; it must be
on the account. Upload the transcripts of every agent session that wrote
this repository — an entry without them is refused. The house refuses the
entry when any named bounty fails its checks (not found, not yours, not
listed yet, cancelled, opens outside the window, or entered first by another
account), naming the first. A refusal because a bounty is not listed yet
passes with the same commit submitted again once it is listed and public.

## Step 7 — Bring people in

Share each bounty's page link. Ordinary promotion is fine: posts, messages,
videos, ads that pay for reach. Never pay, reward or refund people to enter
outside their own prizes, and never enter them from other accounts — one
account per person. Accounts tied to yours never count.

## Hard rules

- Each bounty is your account's own, opens inside this bounty's window, and
  stays live and public through the deadline.
- No bought entrants. One account per person.
- The repository is yours, created after the contest opens, under an
  OSI-approved license (MIT, see `LICENSE`).
- `main.ts` takes no network, no wall clock and no files outside the
  repository; two runs must write the same bytes.
- At most 20 submissions a day and 40 in all.

## Current blocker

**Do not submit yet.** `BOUNTY.json` holds only a placeholder and no
sponsored bounty exists. The blocker clears when the account holder approves
the USDC deposit and signs it with their Phantom wallet, and at least one
sponsored bounty is live and public.
