'use client'

import { useRef, useState } from 'react'
import styles from './CodeBlock.module.scss'

interface CodeBlockProps {
  children: React.ReactNode
  language?: string
  filename?: string
}

export function CodeBlock({ children, language = 'text', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  async function handleCopy() {
    const text = preRef.current?.innerText ?? ''
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block shadow-ambient">
      <div className="code-block-header">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.trafficLights}>
              <span className={styles.dot} style={{ background: 'var(--color-traffic-red)' }} />
              <span className={styles.dot} style={{ background: 'var(--color-traffic-yellow)' }} />
              <span className={styles.dot} style={{ background: 'var(--color-traffic-green)' }} />
            </div>
            {filename ? (
              <span className={styles.filename}>{filename}</span>
            ) : (
              <span className={styles.lang}>{language}</span>
            )}
          </div>

          <button
            onClick={handleCopy}
            aria-label={copied ? 'Copied!' : 'Copy code'}
            className={styles.copyBtn}
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
      </div>

      <pre ref={preRef} className={styles.pre}>
        <code>{children}</code>
      </pre>
    </div>
  )
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
