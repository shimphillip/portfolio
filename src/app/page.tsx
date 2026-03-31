import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, formatDate } from '@/lib/posts'
import { BlogCard } from '@/components/blog/BlogCard'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          {/* Copy — 8 cols */}
          <div className="md:col-span-8">
            <p className="mb-6 font-[family-name:var(--font-label)] text-xs tracking-widest text-[var(--color-on-surface-variant)] uppercase opacity-60">
              Senior Frontend Engineer · Dallas, TX
            </p>
            <h1 className="mb-8 font-[family-name:var(--font-headline)] text-5xl leading-[1.1] font-extrabold tracking-tighter text-[var(--color-on-surface)] md:text-7xl">
              Crafting UIs —{' '}
              <span className="text-[var(--color-primary)]">having an absolute blast.</span>
            </h1>
            <p className="mb-10 max-w-2xl font-[family-name:var(--font-body)] text-xl leading-relaxed text-[var(--color-on-surface-variant)]">
              Fast, beautiful UIs that just work. I believe every page should
              be eye candy — a delightful experience people are eager to
              interact with and happy to linger on.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/blog"
                className="shadow-ambient-strong transition-default inline-block rounded-xl bg-[var(--color-primary-container)] px-8 py-4 font-[family-name:var(--font-headline)] font-bold text-[var(--color-on-primary-container)] hover:scale-[1.02] active:scale-95"
              >
                Read the blog
              </Link>
              <Link
                href="/about"
                className="group flex items-center gap-1 px-8 py-4 font-[family-name:var(--font-headline)] font-semibold text-[var(--color-on-surface-variant)] transition-colors duration-200 hover:text-[var(--color-on-surface)]"
              >
                About me
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Avatar — 4 cols */}
          <div className="group relative hidden md:col-span-4 md:block">
            <div className="absolute -inset-4 rounded-[2rem] bg-[var(--color-primary)]/5 blur-2xl transition-colors duration-500 group-hover:bg-[var(--color-primary)]/10" />
            <div className="shadow-ambient relative aspect-square overflow-hidden rounded-[2rem] bg-[var(--color-surface-container-low)]">
              <Image
                src="/avatar.webp"
                alt="Phillip Shim"
                fill
                sizes="(max-width: 768px) 0px, 33vw"
                className="object-cover object-[center_45%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog listing ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-8 pb-24">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="font-[family-name:var(--font-headline)] text-2xl font-bold tracking-tight text-[var(--color-on-surface)]">
            Notes & Scribbles
          </h2>
          <span className="font-[family-name:var(--font-label)] text-xs tracking-widest text-[var(--color-on-surface-variant)] uppercase opacity-60">
            {new Date().getFullYear()} Collection
          </span>
        </div>

        {posts.length === 0 ? (
          <p className="font-[family-name:var(--font-body)] text-[var(--color-on-surface-variant)]">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
