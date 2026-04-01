'use client'

import { useTranslation } from 'react-i18next'
import { personalInfo, education } from '@/data/portfolio'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const stats = [
  { key: 'stats_yoe', value: '5+' },
  { key: 'stats_nextjs', value: '4+' },
  { key: 'stats_projects', value: '15+' },
  { key: 'stats_domains', value: '3' }
]

const coreCompetencies = [
  'React Performance',
  'Next.js App Router',
  'TypeScript',
  'Design Systems',
  'Mentoring for internship/junior developers',
  'Code Review',
  'CI/CD',
  'Fintech',
  'E-Commerce'
]

export default function About() {
  const { t } = useTranslation()
  const leftRef = useScrollReveal<HTMLDivElement>({ translateX: -32 })
  const rightRef = useScrollReveal<HTMLDivElement>({ translateX: 32, delay: 120 })

  return (
    <section
      id='about'
      aria-labelledby='about-title'
      className='py-24 sm:py-32 px-4 sm:px-6'
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className='max-w-6xl mx-auto'>
        {/* Section header */}
        <div className='relative mb-16'>
          <span className='section-num' aria-hidden='true'>
            {t('about.section_num')}
          </span>
          <p className='text-sm font-semibold uppercase tracking-widest mb-2' style={{ color: 'var(--primary)' }}>
            {t('about.section_num')} /
          </p>
          <h2 id='about-title' className='text-3xl sm:text-4xl lg:text-5xl font-black' style={{ color: 'var(--text)' }}>
            {t('about.title')}
          </h2>
        </div>

        <div className='grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start'>
          {/* Left: Bio + Education */}
          <div ref={leftRef} className='space-y-6' style={{ opacity: 0 }}>
            <div className='glass-amber rounded-2xl p-6'>
              <p className='text-base leading-relaxed' style={{ color: 'var(--text-2)' }}>
                {personalInfo.summary}
              </p>
            </div>

            <div className='grid sm:grid-cols-2 gap-4'>
              <div className='glass rounded-xl p-5'>
                <p className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: 'var(--primary)' }}>
                  {t('about.education_label')}
                </p>
                <p className='text-sm font-semibold' style={{ color: 'var(--text)' }}>
                  {education.school}
                </p>
                <p className='text-xs mt-1' style={{ color: 'var(--text-muted)' }}>
                  {education.degree}
                </p>
                <p className='text-xs mt-0.5' style={{ color: 'var(--text-muted)' }}>
                  {education.period}
                </p>
              </div>
              <div className='glass rounded-xl p-5'>
                <p className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: 'var(--primary)' }}>
                  {t('about.location_label')}
                </p>
                <p className='text-sm font-semibold' style={{ color: 'var(--text)' }}>
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Goals */}
            <div className='glass rounded-xl p-5 space-y-4'>
              <div>
                <p className='text-xs font-bold uppercase tracking-wider mb-1.5' style={{ color: 'var(--secondary)' }}>
                  {t('about.short_goal_label')}
                </p>
                <p className='text-sm leading-relaxed' style={{ color: 'var(--text-2)' }}>
                  {personalInfo.shortTermGoal}
                </p>
              </div>
              <div className='h-px' style={{ background: 'var(--border)' }} />
              <div>
                <p className='text-xs font-bold uppercase tracking-wider mb-1.5' style={{ color: 'var(--accent)' }}>
                  {t('about.long_goal_label')}
                </p>
                <p className='text-sm leading-relaxed' style={{ color: 'var(--text-2)' }}>
                  {personalInfo.longTermGoal}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats + Competencies */}
          <div ref={rightRef} className='space-y-6' style={{ opacity: 0 }}>
            <div className='grid grid-cols-2 gap-4'>
              {stats.map(({ key, value }) => (
                <div key={key} className='glass-amber rounded-xl p-5 text-center'>
                  <p className='text-3xl sm:text-4xl font-black gradient-text leading-none mb-1'>{value}</p>
                  <p className='text-xs font-medium' style={{ color: 'var(--text-2)' }}>
                    {t(`about.${key}`)}
                  </p>
                </div>
              ))}
            </div>

            <div className='glass rounded-xl p-6'>
              <p className='text-sm font-bold uppercase tracking-wider mb-4' style={{ color: 'var(--primary)' }}>
                {t('about.competencies_title')}
              </p>
              <div className='flex flex-wrap gap-2'>
                {coreCompetencies.map((c) => (
                  <span key={c} className='px-3 py-1.5 rounded-full text-xs font-semibold badge-neutral'>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
