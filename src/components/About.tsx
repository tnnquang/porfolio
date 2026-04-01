import { personalInfo, education, coreCompetencies } from '@/data/portfolio'

export default function About() {
  return (
    <section id='about' aria-labelledby='about-heading' className='relative py-24 sm:py-32 px-4 sm:px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Section label */}
        <div className='flex items-center gap-3 mb-4'>
          <span className='text-neon-cyan font-mono text-sm tracking-widest uppercase'>01</span>
          <div className='h-px flex-1 max-w-15 bg-neon-cyan opacity-40' aria-hidden='true' />
        </div>

        <h2 id='about-heading' className='text-3xl sm:text-4xl font-bold mb-12 gradient-text-cyan-purple'>
          About Me
        </h2>

        <div className='grid lg:grid-cols-2 gap-10 lg:gap-16'>
          {/* Left: bio */}
          <div className='space-y-6'>
            <div className='glass-card rounded-2xl p-6 sm:p-8 space-y-5'>
              <p className='text-(--text-secondary) leading-relaxed text-base sm:text-lg'>{personalInfo.summary}</p>
              <div className='section-divider' aria-hidden='true' />
              <div>
                <p className='text-xs font-mono uppercase tracking-widest text-(--text-muted) mb-2'>
                  Short-term goal · 2 years
                </p>
                <p className='text-(--text-secondary) text-sm leading-relaxed'>{personalInfo.shortTermGoal}</p>
              </div>
              <div>
                <p className='text-xs font-mono uppercase tracking-widest text-(--text-muted) mb-2'>
                  Long-term goal · 3–5 years
                </p>
                <p className='text-(--text-secondary) text-sm leading-relaxed'>{personalInfo.longTermGoal}</p>
              </div>
            </div>

            {/* Education */}
            <div className='glass-card rounded-2xl p-6 sm:p-8'>
              <div className='flex items-start gap-4'>
                <div
                  className='mt-1 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-linear-to-br from-[rgba(0,212,255,0.15)] to-[rgba(168,85,247,0.15)] neon-border-cyan'
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
                    <path d='M22 10v6M2 10l10-5 10 5-10 5z' />
                    <path d='M6 12v5c3 3 9 3 12 0v-5' />
                  </svg>
                </div>
                <div>
                  <p className='text-xs font-mono uppercase tracking-widest text-(--text-muted) mb-1'>Education</p>
                  <p className='text-foreground font-medium leading-snug mb-1'>{education.school}</p>
                  <p className='text-(--text-secondary) text-sm mb-1'>{education.degree}</p>
                  <p className='text-(--text-muted) text-xs font-mono'>{education.period}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: stats + competencies */}
          <div className='space-y-6'>
            {/* Stats */}
            <div className='grid grid-cols-2 gap-4'>
              {[
                { value: '5+', label: 'Years Experience', color: 'cyan' },
                { value: '4+', label: 'Years Next.js', color: 'purple' },
                { value: '15+', label: 'Projects Shipped', color: 'green' },
                { value: '2', label: 'Domains (Fintech / Web3)', color: 'pink' }
              ].map(({ value, label, color }) => (
                <div
                  key={label}
                  className={`glass-card rounded-2xl p-5 text-center ${
                    color === 'cyan'
                      ? 'neon-border-cyan'
                      : color === 'purple'
                        ? 'neon-border-purple'
                        : 'border border-[rgba(255,255,255,0.08)]'
                  }`}
                >
                  <p
                    className={`text-3xl font-bold font-mono mb-1 ${
                      color === 'cyan'
                        ? 'text-neon-cyan'
                        : color === 'purple'
                          ? 'text-neon-purple'
                          : color === 'green'
                            ? 'text-neon-green'
                            : 'text-neon-pink'
                    }`}
                  >
                    {value}
                  </p>
                  <p className='text-(--text-muted) text-xs leading-tight'>{label}</p>
                </div>
              ))}
            </div>

            {/* Core competencies */}
            <div className='glass-card rounded-2xl p-6 sm:p-8'>
              <h3 className='text-xs font-mono uppercase tracking-widest text-(--text-muted) mb-4'>
                Core Competencies
              </h3>
              <ul className='flex flex-wrap gap-2' role='list' aria-label='Core competencies'>
                {coreCompetencies.map((item) => (
                  <li key={item}>
                    <span className='neon-badge bg-[rgba(168,85,247,0.08)] text-neon-purple border border-[rgba(168,85,247,0.25)]'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className='glass-card rounded-2xl p-5 flex items-center gap-4'>
              <div
                className='shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-[rgba(16,185,129,0.1)]'
                aria-hidden='true'
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-neon-green'
                >
                  <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
                  <circle cx='12' cy='10' r='3' />
                </svg>
              </div>
              <div>
                <p className='text-xs font-mono uppercase tracking-widest text-(--text-muted)'>Location</p>
                <p className='text-(--text-secondary) text-sm'>{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
