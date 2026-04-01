import type { MDXComponents } from 'mdx/types'
import { createMdxComponents } from '@/components/mdx/mdxComponents'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...createMdxComponents(), ...components }
}
