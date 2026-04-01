'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Nav.module.scss'

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Writing' },
  { href: '/about', label: 'About' },
]

const hireMeHref = 'https://linkedin.com/in/phillipshim'

export function Nav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <nav className={`${styles.nav} glass shadow-ambient`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Phillip Shim
        </Link>

        {/* ── Nav links ────────────────────────────────────────────────────── */}
        <div className={styles.links}>
          {links.map(({ href, label }) => {
            const active =
              pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.link} ${active ? styles.active : ''}`}
              >
                <span className={styles.linkLabel}>{label}</span>
                <span className={styles.linkUnderline} />
              </Link>
            )
          })}
        </div>

        <div className={styles.actions}>
          <a
            href={hireMeHref}
            target="_blank"
            rel="noreferrer"
            className={`${styles.hireMe} shadow-ambient-strong`}
          >
            Connect with me
          </a>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-menu"
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <div className={styles.mobileLinks}>
          <a
            href={hireMeHref}
            target="_blank"
            rel="noreferrer"
            className={styles.mobileHireMe}
          >
            Connect with me
          </a>

          {links.map(({ href, label }) => {
            const active =
              pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.mobileLink} ${active ? styles.mobileActive : ''}`}
              >
                {label}
              </Link>
            )
          })}
          <a
            href={hireMeHref}
            target="_blank"
            rel="noreferrer"
            className={styles.mobileLink}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  )
}
