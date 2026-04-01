import type { PostMeta } from '@/lib/posts'
import { formatDate } from '@/lib/posts'
import styles from './PostHeader.module.scss'

interface PostHeaderProps {
  post: PostMeta
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <header className={styles.header}>
      {post.tags?.length > 0 && (
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <h1 className={styles.title}>{post.title}</h1>

      <p className={styles.excerpt}>{post.excerpt}</p>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <CalendarIcon />
          {formatDate(post.date)}
        </span>
        <span className={styles.dot} />
        <span className={styles.metaItem}>
          {post.readingTime}
        </span>
        {post.series && (
          <>
            <span className={styles.dot} />
            <span className={styles.series}>
              {post.series} · Part {post.seriesPart}
            </span>
          </>
        )}
      </div>

      <div className={styles.divider} />
    </header>
  )
}

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={styles.icon}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

