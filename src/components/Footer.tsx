import { personalInfo } from '@/data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role='contentinfo' className='relative border-t border-[rgba(255,255,255,0.06)] py-10 px-4 sm:px-6'>
      <div className='max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
        {/* Brand */}
        <a
          href='#hero'
          className='font-mono text-base font-bold gradient-text-cyan-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-cyan)] rounded'
          aria-label='Back to top'
        >
          QT.dev
        </a>

        {/* Copy */}
        <p className='text-[var(--text-muted)] text-sm text-center'>
          &copy; {year} {personalInfo.name}. Built with <span className='text-[var(--neon-cyan)]'>Next.js 16</span>{' '}
          &amp; <span className='text-[var(--neon-purple)]'>Tailwind CSS v4</span>.
        </p>

        {/* Scroll to top */}
        <a
          href='#hero'
          aria-label='Scroll to top'
          className='w-9 h-9 rounded-full glass-card neon-border-cyan flex items-center justify-center text-[var(--neon-cyan)] hover:bg-[rgba(0,212,255,0.1)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-cyan)]'
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
          >
            <path d='m18 15-6-6-6 6' />
          </svg>
        </a>
      </div>
    </footer>
  )
}
