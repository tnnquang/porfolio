import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { I18nProvider } from '@/contexts/I18nProvider'

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
  title: 'Quang Trần — Frontend Developer',
  description:
    'Frontend Developer 5+ năm kinh nghiệm với React.js và Next.js. Chuyên sâu tối ưu hiệu suất, UI tương tác phức tạp và React concurrent patterns.',
  openGraph: {
    title: 'Quang Trần — Frontend Developer',
    description:
      'Frontend Developer 5+ năm kinh nghiệm với React.js và Next.js, xây dựng ứng dụng production trong fintech và thương mại điện tử.',
    type: 'website',
    locale: 'vi_VN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quang Trần — Frontend Developer',
    description: 'Frontend Developer 5+ năm kinh nghiệm với React.js và Next.js.'
  },
  robots: { index: true, follow: true }
}

/* Anti-FOUC: apply saved theme before first paint */
const themeScript = `(function(){var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t||'light');})()`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='vi' className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className='min-h-dvh flex flex-col antialiased'>
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
