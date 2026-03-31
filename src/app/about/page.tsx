import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Senior Frontend Engineer based in Dallas, TX. Passionate about fast, beautiful UIs and the craft of building JavaScript apps that hold up at scale.',
}

const experience = [
  { company: 'Confluent', role: 'Senior Frontend Engineer', period: 'Dec 2022 – Present' },
  { company: 'Amazon', role: 'Senior Frontend Developer', period: 'Jul 2021 – Dec 2022' },
  { company: 'Zoom', role: 'Web Developer', period: 'Mar 2021 – Jul 2021' },
  { company: 'Atlassian', role: 'Fullstack Engineer', period: 'Jul 2019 – Feb 2021' },
  { company: 'General Motors', role: 'UI Developer', period: 'Jul 2016 – Jul 2019' },
]

const skills = [
  { label: 'Core', items: 'React, TypeScript, JavaScript, Next.js, Gatsby, Node.js, GraphQL' },
  {
    label: 'Styling & UI',
    items: 'CSS/SCSS, Tailwind CSS, Design Tokens, Micro-frontends, Storybook, WCAG Accessibility',
  },
  { label: 'Testing', items: 'Jest, React Testing Library, Cypress, E2E Testing' },
  { label: 'Infra & DevOps', items: 'AWS, Netlify, Semaphore, Contentful, Webpack, Vite' },
]

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        {/* ── Bio ───────────────────────────────────────────────────────── */}
        <div className={styles.bio}>
          <p className="eyebrow">About</p>
          <h1 className={styles.name}>Phillip Shim</h1>

          <div className={styles.prose}>
            <p>
              Senior Frontend Engineer based in{' '}
              <strong className={styles.strong}>Dallas, TX</strong>. For the past 10
              years I've been shipping at{' '}
              <strong className={styles.strong}>Amazon</strong>,{' '}
              <strong className={styles.strong}>Confluent</strong>, and{' '}
              <strong className={styles.strong}>Atlassian</strong> — most recently
              building Confluent's marketing platform: a multi-site monorepo with{' '}
              <strong className={styles.strong}>Contentful CMS</strong>, automated i18n
              across <strong className={styles.strong}>6 locales</strong>, and CI/CD
              pipelines serving{' '}
              <strong className={styles.strong}>50K+ monthly sessions</strong>.
            </p>
            <p>
              At the end of the day I just love the craft — making things that look good
              and work well. I have a passion for{' '}
              <strong className={styles.strong}>design systems</strong>,{' '}
              <strong className={styles.strong}>performance</strong>, and JavaScript apps
              that hold up no matter the scale.
            </p>
            <p>
              When I'm not pushing pixels, I'm hanging out with my kids and my wife
              Kenzie. Along the way I've also built{' '}
              <a
                href="https://www.npmjs.com/package/openweathermap-ts"
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                openweathermap-ts
              </a>{' '}
              — a TypeScript SDK with 1K+ weekly npm downloads — written 21 articles on{' '}
              <a
                href="https://dev.to/shimphillip"
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                dev.to
              </a>{' '}
              (65K+ views), placed 1st at the Utah State Hackathon, and was a freeCodeCamp
              Top 100 Contributor.
            </p>
          </div>

          <div className={styles.cta}>
            <Link href="/blog" className={`${styles.ctaPrimary} shadow-ambient-strong`}>
              Read the blog
            </Link>
            <a
              href="https://linkedin.com/in/phillipshim"
              target="_blank"
              rel="noreferrer"
              className={styles.ctaSecondary}
            >
              LinkedIn →
            </a>
          </div>
        </div>

        {/* ── Sidebar ───────────────────────────────────────────────────── */}
        <div className={styles.sidebar}>
          {/* Skills */}
          <div className={styles.card}>
            <p className="eyebrow">Stack</p>
            <div className={styles.skillList}>
              {skills.map(({ label, items }) => (
                <div key={label}>
                  <span className={styles.skillCategory}>{label}</span>
                  <p className={styles.skillItems}>{items}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className={styles.card}>
            <p className="eyebrow">Experience</p>
            <div className={styles.expList}>
              {experience.map(({ company, role, period }) => (
                <div key={company}>
                  <p className={styles.expCompany}>{company}</p>
                  <p className={styles.expRole}>
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
