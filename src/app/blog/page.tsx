import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import { BlogCard } from '@/components/blog/BlogCard'
import styles from './page.module.scss'
import { SITE_URL } from '@/lib/site'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes on building fast, beautiful UIs — JavaScript, React, CSS, design systems, and the occasional rabbit hole.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Writing',
    description:
      'Notes on building fast, beautiful UIs — JavaScript, React, CSS, design systems, and the occasional rabbit hole.',
    url: `${SITE_URL}/blog`,
    images: ['/og?title=Phillip%20Shim%20Writing'],
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          Notes &amp; <span className={styles.headingAccent}>Scribbles</span>
        </h1>
        <p className={styles.subtext}>
          Notes on <span className={styles.subtextStrong}>web engineering</span>
          , JavaScript, React, and the rabbit holes I keep happily falling
          into.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className={styles.empty}>No posts yet.</p>
      ) : (
        <div className={styles.postList}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

    </div>
  )
}
