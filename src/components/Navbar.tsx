'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') }
  ]

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
        scrolled ? 'py-2 glass border-b' : 'py-4 bg-transparent'
      }`}
      style={scrolled ? { borderColor: 'var(--border)' } : {}}
    >
      <nav aria-label='Main navigation' className='max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between'>
        {/* Logo */}
        <a
          href='#hero'
          className='font-mono text-xl font-black gradient-text tracking-tight rounded-sm'
          aria-label='Quang Trần — back to top'
        >
          QT.dev
        </a>

        {/* Desktop links */}
        <ul className='hidden md:flex items-center gap-7' role='list'>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className='text-sm font-medium transition-colors duration-200 rounded px-1 py-0.5'
                style={{ color: 'var(--text-2)' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--primary)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-2)')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className='hidden md:flex items-center gap-1'>
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href='#contact'
            className='btn-primary ml-2 text-sm py-2 px-4'
            style={{ minHeight: '36px', padding: '0.45rem 1rem' }}
          >
            {t('nav.hire')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className='md:hidden flex items-center gap-1'>
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type='button'
            aria-expanded={menuOpen}
            aria-controls='mobile-menu'
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
            className='flex flex-col gap-1.5 p-2 ml-1 rounded-lg'
            style={{ color: 'var(--text)' }}
          >
            <span
              className={`block h-0.5 w-5 transition-transform duration-200 origin-center`}
              style={{
                background: 'var(--text)',
                transform: menuOpen ? 'rotate(45deg) translate(3px, 6px)' : ''
              }}
            />
            <span
              className='block h-0.5 w-5 transition-opacity duration-200'
              style={{ background: 'var(--text)', opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className='block h-0.5 w-5 transition-transform duration-200 origin-center'
              style={{
                background: 'var(--text)',
                transform: menuOpen ? 'rotate(-45deg) translate(3px, -6px)' : ''
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id='mobile-menu'
          role='dialog'
          aria-label='Navigation menu'
          className='md:hidden glass border-t px-6 pb-6 pt-4'
          style={{ borderColor: 'var(--border)' }}
        >
          <ul className='flex flex-col gap-2' role='list'>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  className='text-base font-medium block py-3 px-2 rounded-lg transition-colors duration-200'
                  style={{ color: 'var(--text-2)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href='#contact' onClick={handleNavClick} className='btn-primary mt-4 w-full justify-center'>
            {t('nav.hire')}
          </a>
        </div>
      )}
    </header>
  )
}
