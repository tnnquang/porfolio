'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      role='banner'
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-xl bg-[rgba(5,5,15,0.85)] border-b border-[rgba(0,212,255,0.1)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav aria-label='Main navigation' className='max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between'>
        {/* Logo */}
        <a
          href='#hero'
          className='font-mono text-lg font-bold gradient-text-cyan-purple tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan rounded'
          aria-label='Back to top'
        >
          QT.dev
        </a>

        {/* Desktop links */}
        <ul className='hidden md:flex items-center gap-8' role='list'>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className='text-sm text-(--text-secondary) hover:text-neon-cyan transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan rounded px-1'
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className='hidden md:flex items-center gap-3'>
          <a
            href='#contact'
            className='text-sm px-4 py-1.5 rounded-full neon-border-cyan text-neon-cyan hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200'
          >
            Hire me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type='button'
          aria-expanded={menuOpen}
          aria-controls='mobile-menu'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
          className='md:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan'
        >
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id='mobile-menu'
          className='md:hidden backdrop-blur-xl bg-[rgba(5,5,15,0.95)] border-t border-[rgba(0,212,255,0.1)] px-6 pb-6 pt-4'
        >
          <ul className='flex flex-col gap-4' role='list'>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  className='text-base text-(--text-secondary) hover:text-neon-cyan transition-colors duration-200 block py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan rounded'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href='#contact'
            onClick={handleNavClick}
            className='mt-4 block text-center text-sm px-4 py-2 rounded-full neon-border-cyan text-neon-cyan hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200'
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  )
}
