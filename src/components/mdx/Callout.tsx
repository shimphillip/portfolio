import { type ReactNode } from 'react'
import clsx from 'clsx'

type CalloutType = 'tip' | 'warning' | 'info' | 'danger'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
}

const config: Record<
  CalloutType,
  { bg: string; border: string; icon: string; label: string }
> = {
  tip: {
    bg: 'bg-[var(--color-primary-fixed)]',
    border: 'border-l-4 border-[var(--color-primary)]',
    icon: '💡',
    label: 'Tip',
  },
  info: {
    bg: 'bg-[var(--color-surface-container-low)]',
    border: 'border-l-4 border-[var(--color-tertiary)]',
    icon: 'ℹ️',
    label: 'Note',
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-l-4 border-amber-400',
    icon: '⚠️',
    label: 'Warning',
  },
  danger: {
    bg: 'bg-[var(--color-error-container)]',
    border: 'border-l-4 border-[var(--color-error)]',
    icon: '🚨',
    label: 'Danger',
  },
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const c = config[type]
  return (
    <div className={clsx('my-6 rounded-xl p-5', c.bg, c.border)}>
      <p className="mb-2 flex items-center gap-2 font-[family-name:var(--font-label)] text-sm font-bold">
        <span>{c.icon}</span>
        <span>{title ?? c.label}</span>
      </p>
      <div className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-on-surface)]">
        {children}
      </div>
    </div>
  )
}
