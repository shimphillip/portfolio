import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <div className={styles.locationPill}>Dallas, TX</div>

          <div className={styles.headingGroup}>
            <p className={styles.kicker}>Senior Frontend Engineer</p>
            <h1 className={styles.headline}>
              Crafting UIs — having an{' '}
              <span className={styles.headlineAccent}>absolute blast.</span>
            </h1>
          </div>

          <p className={styles.subtext}>
            Fast, beautiful UIs built to last. From building Confluent&apos;s web{' '}
            <span className={styles.subtextStrong}>marketing platform</span>
            {' '}ground up to serving{' '}
            <span className={styles.subtextStrong}>millions</span>
            {' '}of users at{' '}
            <span className={styles.subtextStrong}>Amazon.com</span>
            {' '}— I build for scale.
          </p>

          <div className={styles.cta}>
            <Link
              href="/blog"
              className={`${styles.ctaPrimary} shadow-ambient-strong`}
            >
              Read my writing
            </Link>
            <Link href="/about" className={styles.ctaSecondary}>
              About me
              <span className={styles.ctaArrow}>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.avatarCol}>
          <div className={styles.statusChip}>
            <span className={styles.statusDot} />
            Open to Work
          </div>
          <div className={styles.avatarFrame}>
            <Image
              src="/avatar.webp"
              alt="Phillip Shim"
              fill
              sizes="(max-width: 768px) 100vw, 38vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
