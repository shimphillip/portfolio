# Digital Garden — Phillip Shim

A blog-first portfolio site built with Next.js 15, MDX, Tailwind CSS v4, and the Digital Garden Editorial design system from Google Stitch.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Content**: MDX via `next-mdx-remote`
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Code highlighting**: Shiki (build-time, zero runtime JS)
- **Playgrounds**: Sandpack by CodeSandbox
- **Analytics**: Plausible (privacy-first, no cookie banner)
- **Fonts**: Plus Jakarta Sans · Inter · Space Grotesk (via `next/font`)
- **Deployment**: Vercel

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing a Post

Create a new directory under `content/posts/your-slug/` with an `index.mdx` file:

```mdx
---
title: "Your Post Title"
excerpt: "One sentence summary shown in listings and OG cards."
date: "2024-06-01"
tags: ["react", "typescript"]
published: true
---

Your content here. MDX supports:
- Standard markdown
- <Callout type="tip">Callout components</Callout>
- Syntax-highlighted code blocks (just use triple backticks)
- Any React component imported at the top of the file
```

Set `published: false` to keep a draft committed but not rendered.

## Design System

Design tokens live in `src/app/globals.css` under `@theme {}`. All color, typography, and radius tokens are derived from `DESIGN.md` (exported from Google Stitch). Key utilities:

- `.gradient-primary` — 135° blue gradient fill
- `.gradient-text` — gradient text clip
- `.glass` — 70% opacity + 20px backdrop blur
- `.shadow-ambient` — two-layer diffused blue-tinted shadow
- `.prose-garden` — MDX prose wrapper

## Analytics Events

```ts
import { analytics } from '@/lib/analytics'

analytics.codeCopied('tsx')
analytics.playgroundOpened('performance-as-creative-constraint')
analytics.contactClicked('about-page')
```

## Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://phillipshim.dev
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=phillipshim.dev
```

## Deployment

Push to GitHub → connect to Vercel → set env vars → done. ISR handles the blog listing page; individual posts are fully static via `generateStaticParams`.
