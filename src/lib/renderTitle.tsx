import type { ReactNode } from 'react'

/**
 * Converts backtick-wrapped segments in a title string into <code> elements.
 * e.g. "My post on `display`" → "My post on " + <code>display</code>
 */
export function renderTitle(title: string): ReactNode {
  const parts = title.split(/(`[^`]+`)/)
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i}>{part.slice(1, -1)}</code>
    }
    return part
  })
}
