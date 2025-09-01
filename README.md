# 3J Solutions — Homepage (Next.js 14 + Tailwind)

A clean, fast, accessible homepage for 3J Solutions.

## Local Dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended)

### One-time CLI install
```bash
npm i -g vercel
```

### Deploy
```bash
vercel
# or
vercel --prod
```

Alternatively, create a new Vercel project from the dashboard and import this folder. Vercel will detect Next.js automatically.

## Notes
- Replace placeholder client logos in `/public` with real PNG/SVGs.
- Update contact email and links in `Footer.tsx` and `page.tsx`.
- Tailwind is preconfigured in `tailwind.config.ts` and `app/globals.css`.
