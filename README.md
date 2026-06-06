# Josey Baxter Portfolio

Architecture-focused portfolio for `josey-baxter-0923`, built to position Josey Baxter as a senior SaaS and AI product engineer.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn-style local UI primitives
- MDX case-study pages
- GitHub REST API integration
- Vercel deployment target

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production Build

```bash
npm run build
```

## Content Model

- `data/portfolio.ts` - structured project, metrics, audit, architecture, and timeline data
- `app/page.tsx` - homepage
- `app/case-studies/*/page.mdx` - technical case-study pages
- `app/api/github/route.ts` - cached public GitHub snapshot
- `docs/strategy.md` - sitemap, UX strategy, design system, folder structure, integration, and deployment plan
- `repo-readmes/` - prepared README content for related portfolio repositories

## GitHub Strategy

The site intentionally treats the GitHub profile as part of the product surface. It highlights the strongest current repository, identifies weak public signals, and recommends which repos should be built, pinned, hidden, or improved next.

## Deployment

Deploy on Vercel as a Next.js project. After deployment, add the Vercel URL to the GitHub profile and pin only original repositories with code, screenshots, documentation, and deployment links.
