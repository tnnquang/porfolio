import type { Metadata } from 'next'
import { Cuprum, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { I18nProvider } from '@/contexts/I18nProvider'
import { appCopy } from '@/config/copy'
import CustomCursor from '@/components/CustomCursor'

const cuprumSans = Cuprum({
  variable: '--font-cuprum',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: appCopy.seo.title,
  description: appCopy.seo.description,
  openGraph: {
    title: appCopy.seo.title,
    description: appCopy.seo.openGraphDescription,
    type: 'website',
    locale: appCopy.seo.openGraphLocale
  },
  twitter: {
    card: appCopy.seo.twitterCard,
    title: appCopy.seo.title,
    description: appCopy.seo.twitterDescription
  },
  robots: { index: true, follow: true }
}

/* Anti-FOUC: apply saved theme before first paint */
const themeScript = `(function(){var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t||'light');})()`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${cuprumSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className='min-h-dvh flex flex-col antialiased'>
        <ThemeProvider>
          <I18nProvider>
            <CustomCursor />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
