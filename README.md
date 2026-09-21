# Standard Pauper

A rules reference and card-browser site for **Pauper Standard**, a community
format that restricts deckbuilding to cards printed at **common** rarity
within the current *Standard*-legal card pool.

Live rules, the current rotation, the banlist, and quick links to Scryfall
searches filtered to only legal commons are all generated from this site.

## Features

- **Browse cards by color** — one-click links to a pre-filtered Scryfall
  search (commons only, current Standard sets, banned cards excluded).
- **Card legality search** — look up whether a specific card is legal.
- **Rotation tracker** — shows which sets are currently legal and when each
  rotates out.
- **Banlist** — cards banned from the format, with images and links to their
  Scryfall pages.
- **Rules** — the deckbuilding rules for the format (deck/sideboard size,
  starting life, the common-rarity restriction, etc).

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [ESLint](https://eslint.org)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build      # production build
npm run start       # serve the production build
npm run lint         # lint
npm run lint:fix   # lint and auto-fix
```

## Project structure

```
app/                  Next.js App Router entry (layout, page, global styles)
components/           UI sections (Hero, Rules, RotationSets, BannedCards, ...)
utils/
  LegalSets.ts         Set codes that make up the current Standard-legal pool
  ParseUrlCards.ts   Builds Scryfall search URLs (rarity/set/color/banlist filters)
public/                Static assets (set icons, banned/illegal-rarity card images)
```

## Keeping the format up to date

Two files drive the format's legality logic and need updating as Standard
rotates or the banlist changes:

- **`utils/LegalSets.ts`** — add or remove set codes as they enter/leave
  Standard. This list is used to build the Scryfall query behind every
  "browse by color" and search link.
- **`components/Rules.tsx`**, **`components/BannedCards.tsx`**, and
  `buildBannedCardsQuery` in **`utils/ParseUrlCards.ts`** — keep the banned
  card list in sync in all three places when a ban/unban is announced.
- **`components/RotationSets.tsx`** — update the rotation timeline shown on
  the site.

## Deployment

This is a standard Next.js app and deploys cleanly to
[Vercel](https://vercel.com/new) or any Node.js hosting that supports
Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)
for details.

## License

[MIT](./LICENSE)
