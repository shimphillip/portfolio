'use client'

import { useEffect, useState } from 'react'
import type { Heading } from '@/lib/headings'

interface TableOfContentsProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto"
    >
      <p className="mb-4 font-[family-name:var(--font-label)] text-xs tracking-widest text-[var(--color-on-surface-variant)] uppercase opacity-60">
        On this page
      </p>
      <ul className="space-y-1">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={[
                'block rounded py-1 text-sm transition-all duration-200 ease-out',
                'font-[family-name:var(--font-body)]',
                level === 3 ? 'pl-4' : 'pl-0',
                activeId === id
                  ? 'font-medium text-[var(--color-primary)]'
                  : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]',
              ].join(' ')}
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

