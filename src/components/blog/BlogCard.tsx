import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import { formatDate } from '@/lib/posts'

interface BlogCardProps {
  post: PostMeta
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="shadow-ambient flex flex-col justify-between rounded-xl bg-[var(--color-surface-container-lowest)] p-8 transition-all duration-300 ease-out hover:translate-x-2 hover:bg-[var(--color-surface-container)] md:flex-row md:items-center">
        {/* Text */}
        <div className="min-w-0 flex-1">
          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--color-primary-fixed)] px-2 py-0.5 font-[family-name:var(--font-label)] text-xs tracking-wide text-[var(--color-on-primary-fixed-variant)] uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="mb-2 font-[family-name:var(--font-headline)] text-2xl font-bold text-[var(--color-on-surface)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
            {post.title}
          </h3>
          <p className="line-clamp-1 max-w-xl font-[family-name:var(--font-body)] text-[var(--color-on-surface-variant)]">
            {post.excerpt}
          </p>
        </div>

        {/* Meta */}
        <div className="mt-4 ml-8 flex shrink-0 items-center gap-8 font-[family-name:var(--font-label)] text-sm text-[var(--color-on-surface-variant)] md:mt-0">
          <span className="flex items-center gap-2">
            <CalendarIcon />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-2">
            <ClockIcon />
            {post.readingTime}
          </span>
        </div>
      </article>
    </Link>
  )
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
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
      width="16"
      height="16"
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
