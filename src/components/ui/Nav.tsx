'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Writing' },
  { href: '/about', label: 'About' },
]

/** Regular letter that bounces up on group-hover with a staggered delay */
function WaveLetter({ char, delay }: { char: string; delay: number }) {
  return (
    <span
      className="inline-block transition-transform duration-200 group-hover:-translate-y-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {char}
    </span>
  )
}

/**
 * SVG drawn 'P' — stroked path that animates in on mount.
 * Changing `animKey` remounts the <path>, re-triggering the draw.
 */
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
      className="inline-block transition-transform duration-200 group-hover:-translate-y-1"
      style={{ verticalAlign: '-0.12em', transitionDelay: '0ms' }}
    >
      {/* Stem down + bump right: draws the P shape */}
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

/**
 * SVG drawn 'S' — three bezier curves animating in with a slight delay
 * so it feels like the pen catches up after finishing the word "Phillip".
 */
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
      className="inline-block transition-transform duration-200 group-hover:-translate-y-1"
      style={{ verticalAlign: '-0.12em', transitionDelay: `${7 * 35}ms` }}
    >
      {/* Top bowl → crossbar → bottom bowl */}
      <path
        key={animKey}
        d="M 10.5,5 C 10.5,2 1.5,2 1.5,7 C 1.5,11 10.5,11 10.5,16 C 10.5,20 1.5,20 1.5,17"
        strokeDasharray="120"
        strokeDashoffset="120"
        style={{
          animation:
            'draw-letter 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards',
        }}
      />
    </svg>
  )
}

export function Nav() {
  const pathname = usePathname()
  // Incrementing this key remounts the SVG paths → re-triggers draw animation
  const [drawKey, setDrawKey] = useState(0)

  return (
    <nav className="glass shadow-ambient transition-default fixed top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* ── Wordmark ───────────────────────────────────────────────────── */}
        <Link
          href="/"
          onMouseEnter={() => setDrawKey((k) => k + 1)}
          className="group flex items-center font-[family-name:var(--font-headline)] text-xl font-extrabold tracking-tighter text-[var(--color-on-surface)]"
        >
          {/* P — SVG drawn letter */}
          <SvgP animKey={drawKey} />

          {/* hillip — wave on hover */}
          {['h', 'i', 'l', 'l', 'i', 'p'].map((char, i) => (
            <WaveLetter key={char + i} char={char} delay={(i + 1) * 35} />
          ))}

          {/* Inter-word space */}
          <span className="inline-block w-[0.3em]" />

          {/* S — SVG drawn letter */}
          <SvgS animKey={drawKey} />

          {/* him — wave on hover */}
          {['h', 'i', 'm'].map((char, i) => (
            <WaveLetter key={char + i} char={char} delay={(i + 8) * 35} />
          ))}
        </Link>

        {/* ── Nav links ──────────────────────────────────────────────────── */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map(({ href, label }) => {
            const active =
              pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className={[
                  'group relative flex flex-col items-center gap-0.5',
                  'font-[family-name:var(--font-body)] text-sm font-medium tracking-tight',
                  'transition-colors duration-200 active:scale-95',
                  active
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]',
                ].join(' ')}
              >
                {/* Label — lifts 2px on hover */}
                <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
                  {label}
                </span>
                {/* Underline — slides in from left on hover, always visible when active */}
                <span
                  className={[
                    'h-0.5 w-full rounded-full bg-[var(--color-primary)]',
                    'origin-left transition-transform duration-300',
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                  ].join(' ')}
                />
              </Link>
            )
          })}
        </div>

        {/* ── RSS ────────────────────────────────────────────────────────── */}
        <Link
          href="/feed.xml"
          aria-label="RSS Feed"
          className="transition-default text-[var(--color-on-surface-variant)] hover:scale-[1.02] hover:text-[var(--color-primary)] active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
          </svg>
        </Link>
      </div>
    </nav>
  )
}
