'use client'

import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useTyping } from '@/hooks/useTyping'
import { personalInfo } from '@/data/portfolio'
import { animate, stagger } from 'animejs'
import { appCopy } from '@/config/copy'

export default function Hero() {
  const { t } = useTranslation()
  const roles = t('hero.roles', { returnObjects: true }) as string[]
  const typedRole = useTyping(roles)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true
    animate('.hero-item', {
      opacity: [0, 1],
      translateY: [28, 0],
      delay: stagger(110, { start: 200 }),
      duration: 650,
      easing: 'easeOutExpo'
    })
  }, [])

  return (
    <section
      id='hero'
      aria-label={appCopy.accessibility.heroSection}
      className='relative min-h-dvh flex flex-col items-center justify-center overflow-hidden px-4 pt-24 sm:pt-28 md:pt-10'
      style={{ background: 'var(--bg)' }}
    >
      <div
        className='blob blob-amber hero-corner-blob-a'
        style={{ width: '600px', height: '600px', top: '-180px', right: '-120px' }}
        aria-hidden='true'
      />
      <div
        className='blob blob-emerald hero-corner-blob-b'
        style={{ width: '480px', height: '480px', bottom: '-100px', left: '-100px', animationDelay: '-7s' }}
        aria-hidden='true'
      />

      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        <div
          className='hero-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 glass-amber opacity-0'
          role='status'
        >
          <span
            className='w-2 h-2 rounded-full animate-pulse'
            style={{ background: 'var(--secondary)' }}
            aria-hidden='true'
          />
          <span style={{ color: 'var(--secondary)' }}>{t('hero.available')}</span>
        </div>

        <p className='hero-item text-lg sm:text-xl font-medium mb-2 opacity-0' style={{ color: 'var(--text-2)' }}>
          {t('hero.greeting')}
        </p>

        <h1 className='hero-item text-4xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4 opacity-0'>
          <span className='gradient-text'>{personalInfo.name}</span>
        </h1>

        <div
          className='hero-item flex items-center justify-center text-xl sm:text-2xl lg:text-3xl font-bold mb-6 opacity-0 min-h-10'
          aria-label={`${appCopy.hero.roleAriaPrefix}: ${typedRole}`}
        >
          <span style={{ color: 'var(--primary)' }}>{typedRole}</span>
          <span className='typing-cursor' aria-hidden='true' />
        </div>

        <p className='hero-item text-base sm:text-lg font-semibold mb-8 opacity-0' style={{ color: 'var(--text-2)' }}>
          {personalInfo.yearsOfExperience}+ <span style={{ color: 'var(--primary)' }}>{t('hero.yoe')}</span>
        </p>

        <div
          className='hero-item flex flex-wrap justify-center gap-2 mb-10 opacity-0'
          aria-label={appCopy.accessibility.heroTechList}
        >
          {appCopy.hero.featuredTech.map((tech) => (
            <span key={tech} className='px-3 py-1.5 rounded-full text-sm font-semibold badge-amber'>
              {tech}
            </span>
          ))}
        </div>

        <div className='hero-item flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0'>
          <a href='#experience' className='btn-primary'>
            {t('hero.cta_work')}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <line x1='5' y1='12' x2='19' y2='12' />
              <polyline points='12 5 19 12 12 19' />
            </svg>
          </a>
          <a href='#contact' className='btn-outline'>
            {t('hero.cta_contact')}
          </a>
          <a href='/api/cv' download className='btn-outline' aria-label={t('hero.cta_cv')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
              <polyline points='7 10 12 15 17 10' />
              <line x1='12' y1='15' x2='12' y2='3' />
            </svg>
            {t('hero.cta_cv')}
          </a>
        </div>
      </div>

      <div
        className='hero-item absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-0'
        aria-hidden='true'
      >
        <span className='text-xs font-medium tracking-widest uppercase' style={{ color: 'var(--text-muted)' }}>
          {t('hero.scroll')}
        </span>
        <div
          className='w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5'
          style={{ borderColor: 'var(--border-accent)' }}
        >
          <div className='w-1 h-2 rounded-full animate-bounce' style={{ background: 'var(--primary)' }} />
        </div>
      </div>
    </section>
  )
}
