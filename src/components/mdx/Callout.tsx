import { type ReactNode } from 'react'
import styles from './Callout.module.scss'

type CalloutType = 'tip' | 'warning' | 'info' | 'danger'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
}

const config: Record<CalloutType, { icon: string; label: string }> = {
  tip: { icon: '💡', label: 'Tip' },
  info: { icon: 'ℹ️', label: 'Note' },
  warning: { icon: '⚠️', label: 'Warning' },
  danger: { icon: '🚨', label: 'Danger' },
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const c = config[type]
  return (
    <div className={`${styles.callout} ${styles[type]}`}>
      <p className={styles.title}>
        <span>{c.icon}</span>
        <span>{title ?? c.label}</span>
      </p>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
