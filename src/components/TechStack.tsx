'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { techStack } from '@/data/portfolio'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'

const categoryBadge: Record<string, string> = {
  Frontend: 'badge-amber',
  'UI & Libraries': 'badge-amber',
  Architecture: 'badge-neutral',
  'Backend & Infra': 'badge-emerald',
  'Tooling & Testing': 'badge-neutral',
  'Soft Skills': 'badge-emerald'
}

export default function TechStack() {
  const { t } = useTranslation()
  const ref = useStaggerReveal<HTMLDivElement>('.reveal-item', 60)
  const [active, setActive] = useState(techStack[0].category)
  const current = techStack.find((c) => c.category === active) ?? techStack[0]

  return (
    <section
      id='skills'
      aria-labelledby='skills-title'
      className='py-24 sm:py-32 px-4 sm:px-6'
      style={{ background: 'var(--bg)' }}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='relative mb-16'>
          <span className='section-num' aria-hidden='true'>
            {t('skills.section_num')}
          </span>
          <p className='text-sm font-semibold uppercase tracking-widest mb-2' style={{ color: 'var(--primary)' }}>
            {t('skills.section_num')} /
          </p>
          <h2
            id='skills-title'
            className='text-3xl sm:text-4xl lg:text-5xl font-black mb-4'
            style={{ color: 'var(--text)' }}
          >
            {t('skills.title')}
          </h2>
          <p className='max-w-xl text-base' style={{ color: 'var(--text-2)' }}>
            {t('skills.desc')}
          </p>
        </div>

        <div ref={ref}>
          {/* Tabs */}
          <div className='flex flex-wrap gap-2 mb-8' role='tablist' aria-label='Technology categories'>
            {techStack.map(({ category }) => (
              <button
                key={category}
                role='tab'
                aria-selected={active === category}
                aria-controls={`panel-${category}`}
                onClick={() => setActive(category)}
                className='px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 min-h-11'
                style={
                  active === category
                    ? { background: 'var(--primary)', color: 'var(--text-inv)' }
                    : { background: 'var(--surface)', color: 'var(--text-2)', border: '1px solid var(--border)' }
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* Badge grid */}
          <div id={`panel-${active}`} role='tabpanel' aria-label={active} className='glass rounded-2xl p-6 sm:p-8'>
            <div className='flex flex-wrap gap-3'>
              {current.skills.map((skill) => (
                <span
                  key={skill}
                  className={`reveal-item px-4 py-2 rounded-full text-sm font-semibold ${categoryBadge[active] ?? 'badge-neutral'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
