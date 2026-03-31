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

interface PageProps {
  params: Promise<{ slug: string }>
}

// Build every published post at compile time
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
    <div className="mx-auto max-w-7xl px-8 pt-16 pb-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* ── Main content — 8 cols ─────────────────────────────────────── */}
        <article className="lg:col-span-8">
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
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  ],
                },
              }}
            />
          </div>

          {/* ── Post nav ─────────────────────────────────────────────────── */}
          <div className="mt-16 border-t border-[var(--color-surface-container-high)] pt-8">
            <a
              href="/blog"
              className="transition-default flex items-center gap-2 font-[family-name:var(--font-label)] text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]"
            >
              ← All posts
            </a>
          </div>
        </article>

        {/* ── TOC sidebar — 3 cols (offset 1) ──────────────────────────── */}
        <aside className="hidden lg:col-span-3 lg:col-start-10 lg:block">
          <TableOfContents headings={headings} />
        </aside>
      </div>
    </div>
  )
}
