export interface Heading {
  id: string
  text: string
  level: number
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`'"’]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function createUniqueId(baseId: string, counts: Map<string, number>): string {
  const seen = counts.get(baseId) ?? 0
  counts.set(baseId, seen + 1)
  return seen === 0 ? baseId : `${baseId}-${seen}`
}

/** Extract h2/h3 headings from an MDX raw content string */
export function extractHeadings(content: string): Heading[] {
  const lines = content.split('\n')
  const headings: Heading[] = []
  const counts = new Map<string, number>()

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)/)
    if (match) {
      const level = match[1].length
      const text = match[2]
        .replace(/\[(.*?)\]\(.*?\)/g, '$1')
        .replace(/[`*_]/g, '')
        .trim()
      const baseId = slugifyHeading(text) || 'section'
      const id = createUniqueId(baseId, counts)
      headings.push({ id, text, level })
    }
  }

  return headings
}

export function createHeadingId(
  text: string,
  counts: Map<string, number>
): string {
  const baseId = slugifyHeading(text) || 'section'
  return createUniqueId(baseId, counts)
}
