'use client'

import { useTranslation } from 'react-i18next'
import { personalInfo } from '@/data/portfolio'
import { appCopy } from '@/config/copy'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer
      role='contentinfo'
      className='py-10 px-4 sm:px-6'
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className='max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
        <div className='text-center sm:text-left'>
          <p className='font-mono font-black text-lg gradient-text'>{personalInfo.name.split(' ').pop()}.dev</p>
          <p className='text-xs mt-1' style={{ color: 'var(--text-muted)' }}>
            © {year} {personalInfo.name} · {t('footer.rights')}
          </p>
        </div>

        <p className='text-xs' style={{ color: 'var(--text-muted)' }}>
          {t('footer.built_with')} <span style={{ color: 'var(--primary)' }}>{appCopy.footer.builtWithTech.next}</span>,{' '}
          <span style={{ color: 'var(--secondary)' }}>{appCopy.footer.builtWithTech.tailwind}</span> &{' '}
          <span style={{ color: 'var(--accent)' }}>{appCopy.footer.builtWithTech.animation}</span>
        </p>

        {/* <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={t('footer.back_top')}
          className="btn-outline text-sm py-2 px-4 min-h-11"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          {t('footer.back_top')}
        </button> */}
      </div>
    </footer>
  )
}
