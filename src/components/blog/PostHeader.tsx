import type { PostMeta } from '@/lib/posts'
import { formatDate } from '@/lib/posts'

interface PostHeaderProps {
  post: PostMeta
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <header className="mb-12">
      {/* Tags */}
      {post.tags?.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-primary-fixed)] px-3 py-1 font-[family-name:var(--font-label)] text-xs tracking-wide text-[var(--color-on-primary-fixed-variant)] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="mb-6 font-[family-name:var(--font-headline)] text-4xl leading-[1.1] font-extrabold tracking-tighter text-[var(--color-on-surface)] md:text-6xl">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="mb-8 max-w-2xl font-[family-name:var(--font-body)] text-xl leading-relaxed text-[var(--color-on-surface-variant)]">
        {post.excerpt}
      </p>

      {/* Meta bar */}
      <div className="flex items-center gap-6 font-[family-name:var(--font-label)] text-sm text-[var(--color-on-surface-variant)]">
        <span className="flex items-center gap-2">
          <CalendarIcon />
          {formatDate(post.date)}
        </span>
        <span className="h-1 w-1 rounded-full bg-[var(--color-outline-variant)]" />
        <span className="flex items-center gap-2">
          <ClockIcon />
          {post.readingTime}
        </span>
        {post.series && (
          <>
            <span className="h-1 w-1 rounded-full bg-[var(--color-outline-variant)]" />
            <span className="text-[var(--color-primary)]">
              {post.series} · Part {post.seriesPart}
            </span>
          </>
        )}
      </div>

      {/* Divider — tonal, no line */}
      <div className="mt-10 h-px bg-[var(--color-surface-container-high)]" />
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
      className="text-[var(--color-primary)]/60"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-[var(--color-primary)]/60"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
