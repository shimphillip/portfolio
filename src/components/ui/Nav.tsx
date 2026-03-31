'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Nav.module.scss'

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Writing' },
  { href: '/about', label: 'About' },
]

function WaveLetter({ char, delay }: { char: string; delay: number }) {
  return (
    <span className={styles.waveLetter} style={{ transitionDelay: `${delay}ms` }}>
      {char}
    </span>
  )
}

function SvgP({ animKey }: { animKey: number }) {
  return (
    <svg
      width="13"
      height="22"
      viewBox="0 0 13 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={styles.svgLetter}
      style={{ verticalAlign: '-0.12em', transitionDelay: '0ms' }}
    >
      <path
        key={animKey}
        d="M 2.5,19.5 L 2.5,2.5 C 2.5,2.5 11,2.5 11,8 C 11,13.5 2.5,13.5 2.5,13.5"
        strokeDasharray="100"
        strokeDashoffset="100"
        style={{
          animation: 'draw-letter 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        }}
      />
    </svg>
  )
}

function SvgS({ animKey }: { animKey: number }) {
  return (
    <svg
      width="12"
      height="22"
      viewBox="0 0 12 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={styles.svgLetter}
      style={{ verticalAlign: '-0.12em', transitionDelay: `${7 * 35}ms` }}
    >
      <path
        key={animKey}
        d="M 10.5,5 C 10.5,2 1.5,2 1.5,7 C 1.5,11 10.5,11 10.5,16 C 10.5,20 1.5,20 1.5,17"
        strokeDasharray="120"
        strokeDashoffset="120"
        style={{
          animation: 'draw-letter 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards',
        }}
      />
    </svg>
  )
}

export function Nav() {
  const pathname = usePathname()
  const [drawKey, setDrawKey] = useState(0)

  return (
    <nav className={`${styles.nav} glass shadow-ambient`}>
      <div className={styles.inner}>
        {/* ── Wordmark ─────────────────────────────────────────────────────── */}
        <Link
          href="/"
          onMouseEnter={() => setDrawKey((k) => k + 1)}
          className={styles.logo}
        >
          <SvgP animKey={drawKey} />
          {['h', 'i', 'l', 'l', 'i', 'p'].map((char, i) => (
            <WaveLetter key={char + i} char={char} delay={(i + 1) * 35} />
          ))}
          <span className={styles.wordSpace} />
          <SvgS animKey={drawKey} />
          {['h', 'i', 'm'].map((char, i) => (
            <WaveLetter key={char + i} char={char} delay={(i + 8) * 35} />
          ))}
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

        {/* ── RSS ──────────────────────────────────────────────────────────── */}
        <Link href="/feed.xml" aria-label="RSS Feed" className={styles.rss}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
          </svg>
        </Link>
      </div>
    </nav>
  )
}
