# One Star, Five Stars for the Food

[![Competition](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/competitions/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/muhamadyusufseptian6-lab/makefun-u-po-pu-one-star-five-stars-for-the-food-f9166ee7/rank.svg)](https://make.fun/competitions/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/muhamadyusufseptian6-lab/makefun-u-po-pu-one-star-five-stars-for-the-food-f9166ee7/reward.svg)](https://make.fun/competitions/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

A one-star review of planet Earth, written by an alien tourist who still
admits the food was excellent. One sentence, one program, zero mercy for the
sun — and full marks for the 2am noodles, good enough to miss the shuttle
on purpose and stay for breakfast.

## The entry

> One star: Earth's sun has no off switch, locals pay rent just to sleep, and gravity stole my luggage twice — but the 2am noodles were so good I missed my shuttle on purpose and stayed for breakfast.

## How it works

`main.ts` (Node 22, stdlib-only, deterministic) writes that single sentence to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. Nothing else is written, nothing is copied,
and no dotfiles ever reach the output.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Competition

[One Star, Five Stars for the Food](https://make.fun/competitions/u-po-pu-one-star-five-stars-for-the-food-f9166ee7) on make.fun — $2 prize pool, judged pairwise by an AI travel critic from another planet.

---

Built with [make.fun](https://make.fun) — join with referral code **515temp1**.
