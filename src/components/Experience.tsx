import { experiences } from '@/data/portfolio'

const typeColors: Record<string, string> = {
  'Full-time': 'bg-[rgba(0,212,255,0.08)] text-[var(--neon-cyan)] border border-[rgba(0,212,255,0.25)]',
  Freelance: 'bg-[rgba(168,85,247,0.08)] text-[var(--neon-purple)] border border-[rgba(168,85,247,0.25)]'
}

export default function Experience() {
  return (
    <section id='experience' aria-labelledby='experience-heading' className='relative py-24 sm:py-32 px-4 sm:px-6'>
      <div
        aria-hidden='true'
        className='orb orb-cyan absolute w-100 h-100 bottom-0 left-0 opacity-20 pointer-events-none'
      />

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* Section label */}
        <div className='flex items-center gap-3 mb-4'>
          <span className='text-neon-cyan font-mono text-sm tracking-widest uppercase'>03</span>
          <div className='h-px flex-1 max-w-15 bg-neon-cyan opacity-40' aria-hidden='true' />
        </div>

        <h2 id='experience-heading' className='text-3xl sm:text-4xl font-bold mb-4 gradient-text-cyan-purple'>
          Work Experience
        </h2>
        <p className='text-(--text-secondary) mb-16 max-w-xl'>
          5+ years building high-impact production applications across fintech, Web3, and e-commerce.
        </p>

        {/* Timeline */}
        <div className='space-y-14' role='list' aria-label='Work experience timeline'>
          {experiences.map((exp, expIdx) => (
            <article key={exp.company} role='listitem' className='relative pl-8 sm:pl-10'>
              {/* Timeline left bar */}
              <div
                aria-hidden='true'
                className='absolute left-0 top-0 bottom-0 w-px'
                style={{
                  background:
                    expIdx === 0
                      ? 'linear-gradient(180deg, var(--neon-cyan) 0%, var(--neon-purple) 60%, transparent 100%)'
                      : expIdx === 1
                        ? 'linear-gradient(180deg, var(--neon-purple) 0%, var(--neon-pink) 60%, transparent 100%)'
                        : 'linear-gradient(180deg, var(--neon-pink) 0%, var(--neon-cyan) 60%, transparent 100%)'
                }}
              />
              {/* Timeline dot */}
              <div
                aria-hidden='true'
                className='absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-0.75 ring-2 ring-background'
                style={{
                  background:
                    expIdx === 0 ? 'var(--neon-cyan)' : expIdx === 1 ? 'var(--neon-purple)' : 'var(--neon-pink)'
                }}
              />

              {/* Company header */}
              <div className='flex flex-wrap items-baseline gap-3 mb-1'>
                <h3 className='text-xl sm:text-2xl font-bold text-foreground'>{exp.company}</h3>
                <span className={`neon-badge text-xs ${typeColors[exp.type] ?? typeColors['Full-time']}`}>
                  {exp.type}
                </span>
              </div>
              <div className='flex flex-wrap gap-3 mb-6'>
                <span className='text-(--text-secondary) text-sm'>{exp.role}</span>
                <span className='text-(--text-muted) text-sm font-mono'>{exp.period}</span>
              </div>

              {/* Projects */}
              <div className='space-y-5'>
                {exp.projects.map((project) => (
                  <div key={project.name} className='glass-card rounded-2xl p-5 sm:p-6'>
                    {/* Project name + team */}
                    <div className='flex flex-wrap items-center justify-between gap-2 mb-4'>
                      <h4 className='text-base sm:text-lg font-semibold text-foreground'>{project.name}</h4>
                      {project.team !== null && (
                        <span className='text-xs text-(--text-muted) font-mono'>Team: {project.team}</span>
                      )}
                    </div>

                    {/* Tech stack */}
                    <ul className='flex flex-wrap gap-1.5 mb-5' role='list' aria-label={`${project.name} tech stack`}>
                      {project.tech.map((t) => (
                        <li key={t}>
                          <span className='neon-badge bg-[rgba(0,0,0,0.3)] text-(--text-muted) border border-[rgba(255,255,255,0.08)] text-[0.7rem]'>
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    <ul className='space-y-2' aria-label={`${project.name} highlights`}>
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className='flex gap-3 text-sm text-(--text-secondary) leading-relaxed'>
                          <span
                            className='mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-neon-cyan opacity-70'
                            aria-hidden='true'
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
