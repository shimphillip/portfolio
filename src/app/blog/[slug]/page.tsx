import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { createMdxComponents } from '@/components/mdx/mdxComponents'
import { PostHeader } from '@/components/blog/PostHeader'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { ShareButtons } from '@/components/blog/ShareButtons'
import { extractHeadings } from '@/lib/headings'
import styles from './page.module.scss'
import { SITE_URL } from '@/lib/site'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = true

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    const image = `/og?title=${encodeURIComponent(post.title)}&date=${encodeURIComponent(post.date)}&rt=${encodeURIComponent(post.readingTime)}`

    return {
      title: post.title,
      description: post.excerpt,
      alternates: {
        canonical: `/blog/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        url: `${SITE_URL}/blog/${slug}`,
        publishedTime: post.date,
        tags: post.tags,
        images: [image],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [image],
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
  const mdxComponents = createMdxComponents()

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
                    [
                      rehypePrettyCode,
                      { theme: 'github-dark-dimmed', keepBackground: false },
                    ],
                  ],
                },
              }}
            />
          </div>

          <div className={styles.postNav}>
            <Link href="/blog" className={styles.backLink}>
              <span aria-hidden="true">←</span>
              <span>Back to writing</span>
            </Link>
            <ShareButtons title={post.title} slug={post.slug} />
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
