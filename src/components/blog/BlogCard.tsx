import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import { formatDate } from '@/lib/posts'
import { renderTitle } from '@/lib/renderTitle'
import styles from './BlogCard.module.scss'

interface BlogCardProps {
  post: PostMeta
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.meta}>
          <span className={styles.metaItem}>{formatDate(post.date)}</span>
        </div>

        <div className={styles.body}>
          {post.tags?.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
          <h3 className={styles.title}>{renderTitle(post.title)}</h3>
        </div>
      </article>
    </Link>
  )
}
