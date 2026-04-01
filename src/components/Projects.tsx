import { sideProjects } from '@/data/portfolio'

const techColor = (index: number) => {
  const colors = [
    'bg-[rgba(0,212,255,0.06)] text-[var(--neon-cyan)] border border-[rgba(0,212,255,0.2)]',
    'bg-[rgba(168,85,247,0.06)] text-[var(--neon-purple)] border border-[rgba(168,85,247,0.2)]',
    'bg-[rgba(16,185,129,0.06)] text-[var(--neon-green)] border border-[rgba(16,185,129,0.2)]',
    'bg-[rgba(244,114,182,0.06)] text-[var(--neon-pink)] border border-[rgba(244,114,182,0.2)]'
  ]
  return colors[index % colors.length]
}

export default function Projects() {
  return (
    <section id='projects' aria-labelledby='projects-heading' className='relative py-24 sm:py-32 px-4 sm:px-6'>
      <div
        aria-hidden='true'
        className='orb orb-purple absolute w-112.5 h-112.5 top-16 right-0 opacity-25 pointer-events-none'
      />

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* Section label */}
        <div className='flex items-center gap-3 mb-4'>
          <span className='text-neon-green font-mono text-sm tracking-widest uppercase'>04</span>
          <div className='h-px flex-1 max-w-15 bg-neon-green opacity-40' aria-hidden='true' />
        </div>

        <h2
          id='projects-heading'
          className='text-3xl sm:text-4xl font-bold mb-4'
          style={{
            background: 'linear-gradient(135deg, var(--neon-green) 0%, var(--neon-cyan) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Side Projects
        </h2>
        <p className='text-(--text-secondary) mb-12 max-w-xl'>
          Personal fullstack projects built from scratch — exploring new architectures, stacks, and ideas.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {sideProjects.map((project, idx) => (
            <article key={project.name} className='glass-card rounded-2xl p-6 flex flex-col gap-4 group'>
              {/* Header */}
              <div className='flex items-start justify-between gap-3'>
                <div
                  className='w-10 h-10 rounded-xl shrink-0 flex items-center justify-center'
                  style={{
                    background: `linear-gradient(135deg, rgba(0,212,255,0.15) ${idx * 15}%, rgba(168,85,247,0.15) 100%)`,
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                  aria-hidden='true'
                >
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-neon-cyan'
                  >
                    <polyline points='16 18 22 12 16 6' />
                    <polyline points='8 6 2 12 8 18' />
                  </svg>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`View ${project.name} on GitHub`}
                    className='opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-(--text-muted) hover:text-neon-cyan focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan rounded p-1'
                  >
                    <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                      <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z' />
                    </svg>
                  </a>
                )}
              </div>

              {/* Content */}
              <div className='flex-1'>
                <h3 className='text-base font-semibold text-foreground mb-2 group-hover:text-neon-cyan transition-colors duration-200'>
                  {project.name}
                </h3>
                <p className='text-sm text-(--text-secondary) leading-relaxed'>{project.description}</p>
              </div>

              {/* Tech */}
              <ul className='flex flex-wrap gap-1.5' role='list' aria-label={`${project.name} technologies`}>
                {project.tech.map((t, ti) => (
                  <li key={t}>
                    <span className={`neon-badge text-[0.7rem] ${techColor(ti)}`}>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Timeline note */}
        <p className='mt-8 text-center text-(--text-muted) text-sm font-mono'>
          All projects built 2021 – Present as fullstack developer
        </p>
      </div>
    </section>
  )
}
