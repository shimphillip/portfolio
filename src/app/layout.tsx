import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Nav } from '@/components/ui/Nav'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Phillip Shim',
    template: '%s | Phillip Shim',
  },
  description:
    'Senior Frontend Engineer crafting fast, beautiful UIs. Writing about CSS, JavaScript, design systems, and everything in between.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Phillip Shim',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${poppins.variable}`}>
      <body
        className="bg-[var(--color-surface)] text-[var(--color-on-surface)]"
        suppressHydrationWarning
      >
        <Nav />
        <main className="pt-20">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
