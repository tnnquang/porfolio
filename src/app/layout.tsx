import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap'
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Quang Tran — Frontend Developer',
  description:
    'Frontend Developer with 5+ years of React.js and 4+ years of Next.js experience. Specialized in performance optimization, complex interactive UI, and React concurrent patterns.',
  openGraph: {
    title: 'Quang Tran — Frontend Developer',
    description:
      'Frontend Developer with 5+ years of React.js and 4+ years of Next.js experience, delivering production applications across fintech and e-commerce domains.',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quang Tran — Frontend Developer',
    description: 'Frontend Developer with 5+ years of React.js and 4+ years of Next.js experience.'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className='min-h-dvh flex flex-col'>{children}</body>
    </html>
  )
}
