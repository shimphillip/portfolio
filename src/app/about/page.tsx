import type { Metadata } from 'next'
import styles from './page.module.scss'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Senior Frontend Engineer in Dallas with a decade of experience building thoughtful, scalable interfaces at big tech companies.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About',
    description:
      'Senior Frontend Engineer in Dallas with a decade of experience building thoughtful, scalable interfaces at big tech companies.',
    url: `${SITE_URL}/about`,
    images: ['/og?title=About%20Phillip%20Shim'],
  },
}

const experience = [
  { company: 'Confluent', role: 'Senior Frontend Engineer', tenure: 'Dec 2022 – Present' },
  { company: 'Amazon', role: 'Senior Frontend Developer', tenure: 'Jul 2021 – Dec 2022' },
  { company: 'Zoom', role: 'Web Developer', tenure: 'Mar 2021 – Jul 2021' },
  { company: 'Atlassian', role: 'Fullstack Engineer', tenure: 'Jul 2019 – Feb 2021' },
  { company: 'General Motors', role: 'UI Developer', tenure: 'Jul 2016 – Jul 2019' },
]

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        <div className={styles.story}>
          <h1 className={styles.heading}>Phillip <span className={styles.headingAccent}>Shim</span></h1>
          <div className={styles.prose}>
            <p>
              I&apos;ve been building on the web for{' '}
              <span className={styles.proseStrong}>10 years.</span>
            </p>
            <p>
              Across Amazon, Confluent, Atlassian, Zoom, and General Motors,
              I&apos;ve built design systems, headless CMS solutions with
              custom plugins, web marketing platforms, and e-commerce
              experiences — the kind of work that makes products feel
              genuinely well made.
            </p>
            <p>
              These days{' '}
              <span className={styles.proseStrong}>I&apos;m open to my next role.</span>{' '}
              Let&apos;s build something worth being proud of.
            </p>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <section>
            <div className={styles.stackHeader}>
              <span>Experience</span>
              <span className={styles.stackRule} />
            </div>
            <div className={styles.expList}>
              {experience.map((item) => (
                <div key={item.company} className={styles.expItem}>
                  <p className={styles.expCompany}>{item.company}</p>
                  <p className={styles.expRole}>{item.role}</p>
                  <p className={styles.expTenure}>{item.tenure}</p>
                </div>
              ))}
            </div>
          </section>

        </aside>
      </div>
    </div>
  )
}
