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

  Callout,

  h2: ({ children, id, ...props }) => (
    <h2 id={id} {...props}>
      {children}
      {id && (
        <a href={`#${id}`} className="anchor-link" aria-hidden>
          #
        </a>
      )}
    </h2>
  ),

  h3: ({ children, id, ...props }) => (
    <h3 id={id} {...props}>
      {children}
      {id && (
        <a href={`#${id}`} className="anchor-link" aria-hidden style={{ fontSize: '1.125rem' }}>
          #
        </a>
      )}
    </h3>
  ),

  img: ({ src, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt ?? ''} loading="lazy" {...props} />
  ),

  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
}
