# Personal Website

Single-page personal site for Cole Beevor-Potts, built with Next.js (App Router), TypeScript, Tailwind CSS, and ESLint.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Scripts

- `npm run dev` - Start the local dev server
- `npm run build` - Build for production
- `npm run start` - Run the production build locally
- `npm run lint` - Run ESLint

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Accept the detected Next.js settings and deploy.
4. Add a custom domain if/when needed.

## Content Updates

- Main page content: `/app/page.tsx`
- Metadata / SEO tags: `/app/layout.tsx`
- Global styles: `/app/globals.css`
- Resume link is currently a placeholder note until a PDF/URL is available.
