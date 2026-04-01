import type { MDXComponents } from 'mdx/types'
import type { ReactNode } from 'react'
import { CodeBlock } from './CodeBlock'
import { Callout } from './Callout'
import { createHeadingId } from '@/lib/headings'

function textFromNode(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textFromNode).join('')
  if (node && typeof node === 'object' && 'props' in node) {
    return textFromNode(
      (node as { props?: { children?: ReactNode } }).props?.children
    )
  }
  return ''
}

export function createMdxComponents(): MDXComponents {
  const headingCounts = new Map<string, number>()

  function Heading({
    as: Tag,
    children,
    id,
    ...props
  }: React.ComponentPropsWithoutRef<'h2'> & { as: 'h2' | 'h3' }) {
    const headingText = textFromNode(children).trim()
    const resolvedId = id ?? createHeadingId(headingText, headingCounts)

    return (
      <Tag id={resolvedId} {...props}>
        {children}
        {resolvedId && (
          <a
            href={`#${resolvedId}`}
            className="anchor-link"
            aria-label={`Link to ${headingText}`}
          >
            #
          </a>
        )}
      </Tag>
    )
  }

  return {
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
          <CodeBlock
            language={language}
            filename={codeEl.props['data-filename']}
          >
            {codeEl.props.children}
          </CodeBlock>
        )
      }
      return <pre>{children}</pre>
    },

    Callout,

    h2: ({ children, id, ...props }) => (
      <Heading as="h2" id={id} {...props}>
        {children}
      </Heading>
    ),

    h3: ({ children, id, ...props }) => (
      <Heading as="h3" id={id} {...props}>
        {children}
      </Heading>
    ),

    img: ({ src, alt, ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt ?? src ?? ''} loading="lazy" {...props} />
    ),

    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  }
}
