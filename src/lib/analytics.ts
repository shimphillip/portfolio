'use client'

/**
 * Thin wrapper around Plausible Analytics.
 * Usage:
 *   trackEvent('Copied code snippet', { props: { language: 'tsx' } })
 *   trackEvent('Opened playground')
 *   trackEvent('Clicked contact CTA')
 */

type PlausibleFn = (
  eventName: string,
  options?: { props?: Record<string, string | number | boolean> }
) => void

declare global {
  interface Window {
    plausible?: PlausibleFn
  }
}

export function trackEvent(
  name: string,
  props?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(name, props ? { props } : undefined)
  }
}

// Pre-typed convenience helpers
export const analytics = {
  codeCopied: (language: string) =>
    trackEvent('Copied code snippet', { language }),
  playgroundOpened: (slug: string) =>
    trackEvent('Opened playground', { post: slug }),
  contactClicked: (source: string) =>
    trackEvent('Clicked contact CTA', { source }),
  postRead: (slug: string, pct: number) =>
    trackEvent('Post read depth', { post: slug, depth: pct }),
}
