import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Senior Frontend Engineer based in Dallas, TX. Passionate about fast, beautiful UIs and the craft of building JavaScript apps that hold up at scale.',
}

const experience = [
  {
    company: 'Confluent',
    role: 'Senior Frontend Engineer',
    period: 'Dec 2022 – Present',
  },
  {
    company: 'Amazon',
    role: 'Senior Frontend Developer',
    period: 'Jul 2021 – Dec 2022',
  },
  { company: 'Zoom', role: 'Web Developer', period: 'Mar 2021 – Jul 2021' },
  {
    company: 'Atlassian',
    role: 'Fullstack Engineer',
    period: 'Jul 2019 – Feb 2021',
  },
  {
    company: 'General Motors',
    role: 'UI Developer',
    period: 'Jul 2016 – Jul 2019',
  },
]

const skills = [
  {
    label: 'Core',
    items: 'React, TypeScript, JavaScript, Next.js, Gatsby, Node.js, GraphQL',
  },
  {
    label: 'Styling & UI',
    items:
      'CSS/SCSS, Tailwind CSS, Design Tokens, Micro-frontends, Storybook, WCAG Accessibility',
  },
  {
    label: 'Testing',
    items: 'Jest, React Testing Library, Cypress, E2E Testing',
  },
  {
    label: 'Infra & DevOps',
    items: 'AWS, Netlify, Semaphore, Contentful, Webpack, Vite',
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-8 pt-16 pb-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        {/* ── Bio ─────────────────────────────────────────────────────────── */}
        <div className="lg:col-span-7">
          <p className="mb-4 font-[family-name:var(--font-label)] text-xs tracking-widest text-[var(--color-on-surface-variant)] uppercase opacity-60">
            About
          </p>
          <h1 className="mb-8 font-[family-name:var(--font-headline)] text-5xl leading-[1.1] font-extrabold tracking-tighter text-[var(--color-on-surface)] md:text-6xl">
            Phillip Shim
          </h1>

          <div className="space-y-5 font-[family-name:var(--font-body)] text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
            <p>
              Senior Frontend Engineer based in{' '}
              <strong className="text-[var(--color-on-surface)]">
                Dallas, TX
              </strong>
              . For the past 10 years I've been shipping at{' '}
              <strong className="text-[var(--color-on-surface)]">Amazon</strong>
              ,{' '}
              <strong className="text-[var(--color-on-surface)]">
                Confluent
              </strong>
              , and{' '}
              <strong className="text-[var(--color-on-surface)]">
                Atlassian
              </strong>{' '}
              — most recently building Confluent's marketing platform: a
              multi-site monorepo with{' '}
              <strong className="text-[var(--color-on-surface)]">
                Contentful CMS
              </strong>
              , automated i18n across{' '}
              <strong className="text-[var(--color-on-surface)]">
                6 locales
              </strong>
              , and CI/CD pipelines serving{' '}
              <strong className="text-[var(--color-on-surface)]">
                50K+ monthly sessions
              </strong>
              .
            </p>
            <p>
              At the end of the day I just love the craft — making things that
              look good and work well. I have a passion for{' '}
              <strong className="text-[var(--color-on-surface)]">
                design systems
              </strong>
              ,{' '}
              <strong className="text-[var(--color-on-surface)]">
                performance
              </strong>
              , and JavaScript apps that hold up no matter the scale.
            </p>
            <p>
              When I'm not pushing pixels, I'm hanging out with my kids and my wife Kenzie. Along
              the way I've also built{' '}
              <a
                href="https://www.npmjs.com/package/openweathermap-ts"
                className="text-[var(--color-primary)] underline underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                openweathermap-ts
              </a>{' '}
              — a TypeScript SDK with 1K+ weekly npm downloads — written 21
              articles on{' '}
              <a
                href="https://dev.to/shimphillip"
                className="text-[var(--color-primary)] underline underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                dev.to
              </a>{' '}
              (65K+ views), placed 1st at the Utah State Hackathon, and was a
              freeCodeCamp Top 100 Contributor.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="shadow-ambient-strong transition-default inline-block rounded-xl bg-[var(--color-primary-container)] px-6 py-3 font-[family-name:var(--font-headline)] text-sm font-bold text-[var(--color-on-primary-container)] hover:scale-[1.02] active:scale-95"
            >
              Read the blog
            </Link>
            <a
              href="https://linkedin.com/in/phillipshim"
              target="_blank"
              rel="noreferrer"
              className="transition-default px-6 py-3 font-[family-name:var(--font-headline)] text-sm font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <div className="space-y-10 lg:col-span-4 lg:col-start-9">
          {/* Skills */}
          <div className="shadow-ambient rounded-xl bg-[var(--color-surface-container-lowest)] p-6">
            <p className="mb-4 font-[family-name:var(--font-label)] text-xs tracking-widest text-[var(--color-on-surface-variant)] uppercase opacity-60">
              Stack
            </p>
            <div className="space-y-3">
              {skills.map(({ label, items }) => (
                <div key={label}>
                  <span className="font-[family-name:var(--font-label)] text-xs font-bold tracking-wide text-[var(--color-primary)] uppercase">
                    {label}
                  </span>
                  <p className="mt-0.5 font-[family-name:var(--font-body)] text-sm text-[var(--color-on-surface-variant)]">
                    {items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="shadow-ambient rounded-xl bg-[var(--color-surface-container-lowest)] p-6">
            <p className="mb-4 font-[family-name:var(--font-label)] text-xs tracking-widest text-[var(--color-on-surface-variant)] uppercase opacity-60">
              Experience
            </p>
            <div className="space-y-4">
              {experience.map(({ company, role, period }) => (
                <div key={company}>
                  <p className="font-[family-name:var(--font-headline)] text-sm font-bold text-[var(--color-on-surface)]">
                    {company}
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-[var(--color-on-surface-variant)]">
                    {role} · {period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
