import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'
import { BlogCard } from '@/components/blog/BlogCard'
import styles from './page.module.scss'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          {/* Copy — 8 cols */}
          <div className={styles.heroCopy}>
            <p className="eyebrow">Senior Frontend Engineer · Dallas, TX</p>
            <h1 className={styles.headline}>
              Crafting UIs —{' '}
              <span className={styles.headlineAccent}>having an absolute blast.</span>
            </h1>
            <p className={styles.subtext}>
              Fast, beautiful UIs that just work. I believe every page should be eye
              candy — a delightful experience people are eager to interact with and
              happy to linger on.
            </p>
            <div className={styles.cta}>
              <Link href="/blog" className={`${styles.ctaPrimary} shadow-ambient-strong`}>
                Read the blog
              </Link>
              <Link href="/about" className={styles.ctaSecondary}>
                About me
                <span className={styles.ctaArrow}>→</span>
              </Link>
            </div>
          </div>

          {/* Avatar — 4 cols */}
          <div className={styles.avatarCol}>
            <div className={styles.avatarGlow} />
            <div className={styles.avatarFrame}>
              <Image
                src="/avatar.webp"
                alt="Phillip Shim"
                fill
                sizes="(max-width: 768px) 0px, 33vw"
                style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog listing ─────────────────────────────────────────────────── */}
      <section className={styles.blogSection}>
        <div className={styles.blogHeader}>
          <h2 className={styles.blogHeading}>Notes & Scribbles</h2>
          <span className={styles.blogYear}>{new Date().getFullYear()} Collection</span>
        </div>

        {posts.length === 0 ? (
          <p className={styles.empty}>No posts yet — check back soon.</p>
        ) : (
          <div className={styles.postList}>
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
