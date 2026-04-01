'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { experiences } from '@/data/portfolio'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'

const companyColors = ['var(--primary)', 'var(--secondary)', 'var(--accent)']

const typeKey: Record<string, string> = {
  'Full-time': 'type_fulltime',
  Fulltime: 'type_fulltime',
  Freelance: 'type_freelance'
}

export default function Experience() {
  const { t } = useTranslation()
  const ref = useStaggerReveal<HTMLDivElement>()
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  const toggle = (key: string) =>
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })

  return (
    <section
      id='experience'
      aria-labelledby='exp-title'
      className='py-24 sm:py-32 px-4 sm:px-6'
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='relative mb-16'>
          <span className='section-num' aria-hidden='true'>
            {t('experience.section_num')}
          </span>
          <p className='text-sm font-semibold uppercase tracking-widest mb-2' style={{ color: 'var(--primary)' }}>
            {t('experience.section_num')} /
          </p>
          <h2
            id='exp-title'
            className='text-3xl sm:text-4xl lg:text-5xl font-black mb-4'
            style={{ color: 'var(--text)' }}
          >
            {t('experience.title')}
          </h2>
          <p className='max-w-xl text-base' style={{ color: 'var(--text-2)' }}>
            {t('experience.desc')}
          </p>
        </div>

        <div ref={ref} className='relative pl-12'>
          <div className='timeline-line' aria-hidden='true' />

          {experiences.map((exp, i) => {
            const color = companyColors[i % companyColors.length]
            return (
              <article key={exp.company} className='reveal-item relative mb-10 last:mb-0' aria-label={exp.company}>
                <div className='timeline-dot' style={{ background: color, top: '20px' }} />

                <div className='glass rounded-2xl p-6 sm:p-8' style={{ borderLeft: `3px solid ${color}` }}>
                  <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4'>
                    <div>
                      <h3 className='text-lg sm:text-xl font-black' style={{ color: 'var(--text)' }}>
                        {exp.role}
                      </h3>
                      <p className='text-base font-bold mt-0.5' style={{ color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className='flex flex-col sm:items-end gap-1 shrink-0'>
                      <span className='text-sm font-medium px-3 py-1 rounded-full badge-neutral'>{exp.period}</span>
                      <span className='text-xs font-semibold' style={{ color: 'var(--text-muted)' }}>
                        {t(`experience.${typeKey[exp.type] ?? 'type_fulltime'}`)}
                      </span>
                    </div>
                  </div>

                  {exp.projects.length > 0 && (
                    <div className='space-y-3'>
                      {exp.projects.map((proj, pi) => {
                        const key = `${exp.company}-${pi}`
                        const isOpen = expanded.has(key)
                        return (
                          <div
                            key={proj.name}
                            className='rounded-xl overflow-hidden'
                            style={{
                              background: 'color-mix(in srgb, var(--primary) 4%, transparent)',
                              border: '1px solid var(--border)'
                            }}
                          >
                            <button
                              type='button'
                              onClick={() => toggle(key)}
                              aria-expanded={isOpen}
                              className='w-full flex items-center justify-between p-4 text-left min-h-11'
                              style={{ color: 'var(--text)' }}
                            >
                              <span className='font-semibold text-sm'>{proj.name}</span>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='shrink-0 transition-transform duration-200'
                                style={{ transform: isOpen ? 'rotate(180deg)' : '' }}
                                aria-hidden='true'
                              >
                                <polyline points='6 9 12 15 18 9' />
                              </svg>
                            </button>
                            {isOpen && (
                              <div className='px-4 pb-4 space-y-3'>
                                {proj.highlights.length > 0 && (
                                  <ul className='space-y-1.5' aria-label='Highlights'>
                                    {proj.highlights.map((h) => (
                                      <li key={h} className='flex gap-2 text-sm' style={{ color: 'var(--text-2)' }}>
                                        <span
                                          className='mt-1.5 w-1.5 h-1.5 rounded-full shrink-0'
                                          style={{ background: color }}
                                          aria-hidden='true'
                                        />
                                        {h}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {proj.tech.length > 0 && (
                                  <div className='flex flex-wrap gap-1.5 mt-2' aria-label='Technologies'>
                                    {proj.tech.map((t) => (
                                      <span
                                        key={t}
                                        className='px-2.5 py-1 rounded-full text-xs font-medium badge-neutral'
                                      >
                                        {t}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
