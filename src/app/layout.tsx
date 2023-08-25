import '@/styles/globals.css'
import { type Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { Header } from '@/components/header'
import { siteConfig } from '@/config/site'
import { cn } from '@/utils/cn'

import { Providers } from './providers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.links.github,
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title.default,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  metadataBase: new URL(siteConfig.url),
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50',
          fontSans.variable,
        )}
      >
        <Providers>
          <div className="mx-auto max-w-2xl px-4 py-10">
            <Header />

            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
