'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { techStack } from '@/data/portfolio'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'
import { appCopy } from '@/config/copy'

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

  const focusByIndex = (index: number) => {
    const tab = document.getElementById(`skill-tab-${index}`)
    if (tab instanceof HTMLButtonElement) {
      tab.focus()
    }
  }

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
          <div className='flex flex-wrap gap-2 mb-8' role='tablist' aria-label={appCopy.accessibility.techCategories}>
            {techStack.map(({ category }, index) => (
              <button
                id={`skill-tab-${index}`}
                key={category}
                role='tab'
                aria-selected={active === category}
                aria-controls={`panel-${category}`}
                tabIndex={active === category ? 0 : -1}
                onKeyDown={(e) => {
                  const currentIndex = techStack.findIndex((item) => item.category === active)
                  if (e.key === 'ArrowRight') {
                    e.preventDefault()
                    const nextIndex = (currentIndex + 1) % techStack.length
                    setActive(techStack[nextIndex].category)
                    focusByIndex(nextIndex)
                  }
                  if (e.key === 'ArrowLeft') {
                    e.preventDefault()
                    const nextIndex = (currentIndex - 1 + techStack.length) % techStack.length
                    setActive(techStack[nextIndex].category)
                    focusByIndex(nextIndex)
                  }
                  if (e.key === 'Home') {
                    e.preventDefault()
                    setActive(techStack[0].category)
                    focusByIndex(0)
                  }
                  if (e.key === 'End') {
                    e.preventDefault()
                    const last = techStack.length - 1
                    setActive(techStack[last].category)
                    focusByIndex(last)
                  }
                }}
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
