# Better.com Replica (Assignment)

A multi-page Next.js app that **loosely replicates** four Better.com pages:
- Home (`/`)
- About Us (`/about-us`)
- Mortgage Calculator (`/mortgage-calculator?taxes=265&zip=421005`)
- Start (`/start`)

## Tech
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Notes
- This is a clean-room design; no copyrighted assets, images, or logos are copied.
- Calculator uses standard amortization formula and includes taxes/insurance/HOA.
- The calculator page reads `taxes` and `zip` from query params.
