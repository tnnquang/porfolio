'use client'

import { useTranslation } from 'react-i18next'
import { sideProjects } from '@/data/portfolio'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'

const colorAccents = [
  'var(--primary)',
  'var(--secondary)',
  'var(--accent)',
  'var(--primary)',
  'var(--secondary)',
  'var(--accent)'
]

export default function Projects() {
  const { t } = useTranslation()
  const ref = useStaggerReveal<HTMLDivElement>()

  return (
    <section
      id='projects'
      aria-labelledby='projects-title'
      className='py-24 sm:py-32 px-4 sm:px-6'
      style={{ background: 'var(--bg)' }}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='relative mb-6'>
          <span className='section-num' aria-hidden='true'>
            {t('projects.section_num')}
          </span>
          <p className='text-sm font-semibold uppercase tracking-widest mb-2' style={{ color: 'var(--primary)' }}>
            {t('projects.section_num')} /
          </p>
          <h2
            id='projects-title'
            className='text-3xl sm:text-4xl lg:text-5xl font-black mb-4'
            style={{ color: 'var(--text)' }}
          >
            {t('projects.title')}
          </h2>
          <p className='max-w-xl text-base' style={{ color: 'var(--text-2)' }}>
            {t('projects.desc')}
          </p>
        </div>

        <p className='mb-8 text-xs font-semibold uppercase tracking-wider' style={{ color: 'var(--text-muted)' }}>
          {t('projects.note')}
        </p>

        <div ref={ref} className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {sideProjects.map((project, i) => {
            const color = colorAccents[i % colorAccents.length]
            return (
              <article
                key={project.name}
                className='reveal-item glass rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-lg group'
                style={{ borderTop: `3px solid ${color}` }}
                aria-label={project.name}
              >
                <div className='flex items-start justify-between gap-3 mb-3'>
                  <h3 className='text-base font-bold leading-snug' style={{ color: 'var(--text)' }}>
                    {project.name}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`${t('projects.view_source')}: ${project.name}`}
                      className='shrink-0 p-2 rounded-lg transition-colors duration-200 min-w-11 min-h-11 flex items-center justify-center'
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = color)}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                    </a>
                  )}
                </div>

                <p className='text-sm leading-relaxed flex-1 mb-4' style={{ color: 'var(--text-2)' }}>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-1.5 mt-auto' aria-label='Technologies'>
                  {project.tech.map((tech) => (
                    <span key={tech} className='px-2.5 py-1 rounded-full text-xs font-semibold badge-neutral'>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
