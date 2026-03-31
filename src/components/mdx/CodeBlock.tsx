'use client'

import { useRef, useState } from 'react'

interface CodeBlockProps {
  children: React.ReactNode
  language?: string
  filename?: string
}

export function CodeBlock({
  children,
  language = 'text',
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  async function handleCopy() {
    const text = preRef.current?.innerText ?? ''
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block shadow-ambient my-6">
      {/* Glass header */}
      <div className="code-block-header flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <span className="block h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="block h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="block h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          {filename ? (
            <span className="text-xs text-[var(--color-on-surface-variant)] opacity-70">
              {filename}
            </span>
          ) : (
            <span className="text-xs tracking-widest text-[var(--color-on-surface-variant)] uppercase opacity-50">
              {language}
            </span>
          )}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          aria-label={copied ? 'Copied!' : 'Copy code'}
          className="transition-default flex items-center gap-1.5 rounded px-2 py-1 font-[family-name:var(--font-label)] text-xs text-[var(--color-on-surface-variant)] opacity-60 hover:bg-white/10 hover:opacity-100"
        >
          {copied ? (
            <>
              <CheckIcon /> Copied
            </>
          ) : (
            <>
              <CopyIcon /> Copy
            </>
          )}
        </button>
      </div>

      {/* Highlighted code — rehype-pretty-code renders spans with inline colors */}
      <pre
        ref={preRef}
        className="overflow-x-auto p-5 text-sm leading-normal"
      >
        <code>{children}</code>
      </pre>
    </div>
  )
}

function CopyIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
