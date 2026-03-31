import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')

export interface PostFrontmatter {
  title: string
  excerpt: string
  date: string
  tags: string[]
  published: boolean
  series?: string
  seriesPart?: number
  coverImage?: string
}

export interface Post extends PostFrontmatter {
  slug: string
  readingTime: string
  content: string
}

export interface PostMeta extends PostFrontmatter {
  slug: string
  readingTime: string
}

function parsePost(slug: string): Post {
  const filePath = path.join(POSTS_DIR, slug, 'index.mdx')
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    slug,
    content,
    readingTime: rt.text,
    ...(data as PostFrontmatter),
  }
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  const slugs = fs.readdirSync(POSTS_DIR).filter((name) => {
    const p = path.join(POSTS_DIR, name)
    return (
      fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'index.mdx'))
    )
  })

  return slugs
    .map((slug) => {
      const post = parsePost(slug)
      const { content: _content, ...meta } = post
      return meta
    })
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post {
  return parsePost(slug)
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((name) => {
      const p = path.join(POSTS_DIR, name)
      return (
        fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'index.mdx'))
      )
    })
    .filter((slug) => {
      const post = parsePost(slug)
      return post.published
    })
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
