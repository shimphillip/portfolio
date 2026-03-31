# phillipshim.dev

Personal portfolio and blog built with Next.js 16 and MDX.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Content**: MDX via `next-mdx-remote`
- **Styling**: Modular SCSS (CSS Modules) with custom design tokens
- **Code highlighting**: rehype-pretty-code (github-dark-dimmed theme)
- **Analytics**: Vercel Analytics + Speed Insights
- **Fonts**: Poppins · Plus Jakarta Sans (via `next/font/google`)
- **Deployment**: Vercel

## Design System

Design tokens live in `src/app/globals.scss` under `:root`. Key utilities in `globals.scss`:

- `.glass` — warm gray frosted background for the nav
- `.shadow-ambient` — diffused ambient shadow
- `.eyebrow` — uppercase label used across pages
- `.prose-garden` — MDX prose wrapper with full typography styles
- `.code-block` — dark code block container
