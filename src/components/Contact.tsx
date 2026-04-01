import { personalInfo } from '@/data/portfolio'

const contactLinks = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <rect width='20' height='16' x='2' y='4' rx='2' />
        <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
      </svg>
    ),
    color: 'cyan'
  },
  {
    label: 'GitHub',
    value: personalInfo.github.replace(/^https?:\/\//, ''),
    href: personalInfo.github,
    icon: (
      <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
        <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z' />
      </svg>
    ),
    color: 'purple'
  },
  {
    label: 'LinkedIn',
    value: personalInfo.linkedin.replace(/^https?:\/\//, ''),
    href: personalInfo.linkedin,
    icon: (
      <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    ),
    color: 'green'
  }
]

const colorMap: Record<string, { icon: string; badge: string }> = {
  cyan: {
    icon: 'text-[var(--neon-cyan)] bg-[rgba(0,212,255,0.1)]',
    badge: 'neon-border-cyan hover:bg-[rgba(0,212,255,0.08)]'
  },
  purple: {
    icon: 'text-[var(--neon-purple)] bg-[rgba(168,85,247,0.1)]',
    badge: 'neon-border-purple hover:bg-[rgba(168,85,247,0.08)]'
  },
  green: {
    icon: 'text-[var(--neon-green)] bg-[rgba(16,185,129,0.1)]',
    badge: 'border border-[rgba(16,185,129,0.4)] hover:bg-[rgba(16,185,129,0.08)]'
  }
}

export default function Contact() {
  return (
    <section id='contact' aria-labelledby='contact-heading' className='relative py-24 sm:py-32 px-4 sm:px-6'>
      {/* Decorative orbs */}
      <div
        aria-hidden='true'
        className='orb orb-cyan absolute w-100 h-100 top-0 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none'
      />
      <div
        aria-hidden='true'
        className='orb orb-purple absolute w-87.5 h-87.5 bottom-0 left-0 opacity-20 pointer-events-none'
      />

      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        {/* Section label */}
        <div className='flex items-center justify-center gap-3 mb-4'>
          <div className='h-px w-12 bg-neon-pink opacity-40' aria-hidden='true' />
          <span className='text-neon-pink font-mono text-sm tracking-widest uppercase'>05</span>
          <div className='h-px w-12 bg-neon-pink opacity-40' aria-hidden='true' />
        </div>

        <h2 id='contact-heading' className='text-3xl sm:text-5xl font-bold mb-6 gradient-text-purple-pink'>
          Let&apos;s Build Together
        </h2>
        <p className='text-(--text-secondary) text-base sm:text-lg leading-relaxed mb-12 max-w-xl mx-auto'>
          I&apos;m open to new opportunities, freelance projects, and interesting collaborations. Whether you have a job
          offer, a project idea, or just want to chat — my inbox is always open.
        </p>

        {/* Primary CTA */}
        <a
          href={`mailto:${personalInfo.email}`}
          className='inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-background bg-linear-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background mb-12'
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
            aria-hidden='true'
          >
            <rect width='20' height='16' x='2' y='4' rx='2' />
            <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
          </svg>
          Say Hello
        </a>

        {/* Divider */}
        <div className='section-divider mb-12' aria-hidden='true' />

        {/* Contact links */}
        <ul
          className='flex flex-col sm:flex-row items-center justify-center gap-4'
          role='list'
          aria-label='Contact links'
        >
          {contactLinks.map(({ label, value, href, icon, color }) => {
            const colors = colorMap[color]
            const isExternal = !href.startsWith('mailto:')
            return (
              <li key={label}>
                <a
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl glass-card ${colors.badge} transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-cyan)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--bg-primary)]`}
                >
                  <span className={`p-1.5 rounded-lg ${colors.icon}`}>{icon}</span>
                  <span>
                    <span className='block text-xs text-[var(--text-muted)] font-mono'>{label}</span>
                    <span className='block text-sm text-[var(--text-secondary)]'>{value}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
