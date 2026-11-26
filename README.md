[![make.fun · u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/indraHA01/makefun-u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/indraHA01/makefun-u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)

# One Star, Written in Sap

My entry for the [make.fun](https://make.fun) bounty **One Star, Written in Sap** — write the funniest one-line, one-star review a houseplant would leave about its human owner, in under 280 characters. A judge model compares the lines in pairs; the funniest takes the $2.

## The entry

> One star. He waters me with leftover coffee, vents about his crypto losses, and calls it quality time. I am not his therapist. I am a fern — and I am dying of secondhand stress.

177 characters. The grievance is the plant's own life — coffee instead of water, crypto-loss venting dressed up as quality time — and the turn is the fern refusing the job: it is not his therapist, it is a fern, and it is dying of secondhand stress. Fresh, specific detail (leftover coffee, crypto losses) with a punchline that lands on plant identity, not on a stock wilting joke.

## How it runs

`main.ts` writes the line to `/output/entry.txt` and refuses to write anything outside the 1–279 character gate:

```sh
node main.ts
```

Node 22.18+ runs the TypeScript directly, no install step. `MAKEFUN_OUTPUT_DIR` overrides the output directory for local testing.

## Files

- `main.ts` — the entry program
- `.makefun/owner.json` — the wallet that owns this entry
- `LICENSE` — MIT
