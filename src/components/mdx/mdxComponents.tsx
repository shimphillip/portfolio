import type { MDXComponents } from 'mdx/types'
import { CodeBlock } from './CodeBlock'
import { Callout } from './Callout'

export const mdxComponents: MDXComponents = {
  // Code blocks — rehype-pretty-code transforms <pre><code> with highlighted spans
  pre: ({ children }: React.ComponentPropsWithoutRef<'pre'>) => {
    const codeEl = children as React.ReactElement<{
      className?: string
      'data-language'?: string
      'data-filename'?: string
      children?: React.ReactNode
    }>

    if (codeEl?.props) {
      const language =
        codeEl.props['data-language'] ??
        codeEl.props.className?.replace('language-', '') ??
        'text'

      return (
        <CodeBlock language={language} filename={codeEl.props['data-filename']}>
          {codeEl.props.children}
        </CodeBlock>
      )
    }
    return <pre>{children}</pre>
  },

  // Inline code — styled via prose-garden CSS, no override needed
  // code: handled by .prose-garden in globals.css

  // Callout — usage: <Callout type="tip">...</Callout>
  Callout,

  // Headings with anchor ids (rehype-slug handles the ids)
  h2: ({ children, id, ...props }) => (
    <h2 id={id} className="group flex items-center gap-2" {...props}>
      {children}
      {id && (
        <a
          href={`#${id}`}
          className="text-xl text-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-40"
          aria-hidden
        >
          #
        </a>
      )}
    </h2>
  ),

  h3: ({ children, id, ...props }) => (
    <h3 id={id} className="group flex items-center gap-2" {...props}>
      {children}
      {id && (
        <a
          href={`#${id}`}
          className="text-lg text-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-40"
          aria-hidden
        >
          #
        </a>
      )}
    </h3>
  ),

  // Images — use next/image via standard img tag (next handles optimization)
  img: ({ src, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ''}
      className="shadow-ambient my-8 w-full rounded-xl"
      loading="lazy"
      {...props}
    />
  ),

  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-[var(--color-primary)] pl-6 text-[var(--color-on-surface-variant)] italic">
      {children}
    </blockquote>
  ),
}
