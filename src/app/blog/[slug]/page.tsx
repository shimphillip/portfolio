import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { mdxComponents } from '@/components/mdx/mdxComponents'
import { PostHeader } from '@/components/blog/PostHeader'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { extractHeadings } from '@/lib/headings'
import styles from './page.module.scss'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = true

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        tags: post.tags,
      },
    }
  } catch {
    return {}
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  if (!post.published) notFound()

  const headings = extractHeadings(post.content)

  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        {/* ── Main content ─────────────────────────────────────────────── */}
        <article className={styles.article}>
          <PostHeader post={post} />
          <div className="prose-garden">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    [rehypePrettyCode, { theme: 'github-dark-dimmed', keepBackground: false }],
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  ],
                },
              }}
            />
          </div>

          <div className={styles.postNav}>
            <a href="/blog" className={styles.backLink}>
              ← All posts
            </a>
          </div>
        </article>

        {/* ── TOC sidebar ──────────────────────────────────────────────── */}
        <aside className={styles.toc}>
          <TableOfContents headings={headings} />
        </aside>
      </div>
    </div>
  )
}
