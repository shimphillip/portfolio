import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import { BlogCard } from '@/components/blog/BlogCard'

export const revalidate = 3600 // ISR — recheck every hour

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes on building fast, beautiful UIs — CSS, JavaScript, design systems, and the occasional rabbit hole.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-7xl px-8 pt-16 pb-24">
      {/* Header */}
      <div className="mb-16">
        <p className="mb-4 font-[family-name:var(--font-label)] text-xs tracking-widest text-[var(--color-on-surface-variant)] uppercase opacity-60">
          Notes & Scribbles
        </p>
        <h1 className="font-[family-name:var(--font-headline)] text-5xl leading-[1.1] font-extrabold tracking-tighter text-[var(--color-on-surface)] md:text-6xl">
          Writing
        </h1>
        <p className="mt-4 max-w-xl font-[family-name:var(--font-body)] text-lg text-[var(--color-on-surface-variant)]">
          Notes on building fast, beautiful UIs — CSS, JavaScript, design
          systems, and the occasional rabbit hole.
        </p>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <p className="text-[var(--color-on-surface-variant)]">No posts yet.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
