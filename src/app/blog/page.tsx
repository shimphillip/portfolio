import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import { BlogCard } from '@/components/blog/BlogCard'
import styles from './page.module.scss'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes on building fast, beautiful UIs — CSS, JavaScript, design systems, and the occasional rabbit hole.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className="eyebrow">Notes & Scribbles</p>
        <h1 className={styles.heading}>Writing</h1>
        <p className={styles.subtext}>
          Notes on building fast, beautiful UIs — CSS, JavaScript, design systems, and
          the occasional rabbit hole.
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
