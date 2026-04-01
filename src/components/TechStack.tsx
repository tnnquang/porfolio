import { techStack } from '@/data/portfolio'

const colorMap: Record<string, { badge: string; label: string; dot: string }> = {
  cyan: {
    badge:
      'bg-[rgba(0,212,255,0.08)] text-[var(--neon-cyan)] border border-[rgba(0,212,255,0.25)] hover:bg-[rgba(0,212,255,0.14)] hover:border-[rgba(0,212,255,0.5)]',
    label: 'text-[var(--neon-cyan)]',
    dot: 'bg-[var(--neon-cyan)]'
  },
  purple: {
    badge:
      'bg-[rgba(168,85,247,0.08)] text-[var(--neon-purple)] border border-[rgba(168,85,247,0.25)] hover:bg-[rgba(168,85,247,0.14)] hover:border-[rgba(168,85,247,0.5)]',
    label: 'text-[var(--neon-purple)]',
    dot: 'bg-[var(--neon-purple)]'
  },
  green: {
    badge:
      'bg-[rgba(16,185,129,0.08)] text-[var(--neon-green)] border border-[rgba(16,185,129,0.25)] hover:bg-[rgba(16,185,129,0.14)] hover:border-[rgba(16,185,129,0.5)]',
    label: 'text-[var(--neon-green)]',
    dot: 'bg-[var(--neon-green)]'
  },
  pink: {
    badge:
      'bg-[rgba(244,114,182,0.08)] text-[var(--neon-pink)] border border-[rgba(244,114,182,0.25)] hover:bg-[rgba(244,114,182,0.14)] hover:border-[rgba(244,114,182,0.5)]',
    label: 'text-[var(--neon-pink)]',
    dot: 'bg-[var(--neon-pink)]'
  }
}

export default function TechStack() {
  return (
    <section id='skills' aria-labelledby='skills-heading' className='relative py-24 sm:py-32 px-4 sm:px-6'>
      {/* Subtle background orb */}
      <div
        aria-hidden='true'
        className='orb orb-purple absolute w-125 h-125 top-0 right-0 opacity-30 pointer-events-none'
      />

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* Section label */}
        <div className='flex items-center gap-3 mb-4'>
          <span className='text-neon-purple font-mono text-sm tracking-widest uppercase'>02</span>
          <div className='h-px flex-1 max-w-15 bg-neon-purple opacity-40' aria-hidden='true' />
        </div>

        <h2 id='skills-heading' className='text-3xl sm:text-4xl font-bold mb-4 gradient-text-purple-pink'>
          Tech Stack
        </h2>
        <p className='text-(--text-secondary) mb-12 max-w-xl'>
          Technologies I&apos;ve worked with across production applications, from fintech dashboards to Web3
          marketplaces.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {techStack.map(({ category, color, skills }) => {
            const colors = colorMap[color] ?? colorMap.cyan
            return (
              <div key={category} className='glass-card rounded-2xl p-6 flex flex-col gap-4'>
                {/* Category header */}
                <div className='flex items-center gap-2'>
                  <span className={`w-2 h-2 rounded-full shrink-0 ${colors.dot}`} aria-hidden='true' />
                  <h3 className={`text-sm font-semibold font-mono uppercase tracking-widest ${colors.label}`}>
                    {category}
                  </h3>
                </div>

                {/* Skills */}
                <ul className='flex flex-wrap gap-2' role='list' aria-label={`${category} skills`}>
                  {skills.map((skill) => (
                    <li key={skill}>
                      <span className={`neon-badge cursor-default ${colors.badge}`}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
