export interface Heading {
  id: string
  text: string
  level: number
}

/** Extract h2/h3 headings from an MDX raw content string */
export function extractHeadings(content: string): Heading[] {
  const lines = content.split('\n')
  const headings: Heading[] = []

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)/)
    if (match) {
      const level = match[1].length
      const text = match[2].replace(/\*\*/g, '').trim()
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
      headings.push({ id, text, level })
    }
  }

  return headings
}
