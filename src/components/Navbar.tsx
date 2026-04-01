'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { appCopy } from '@/config/copy'

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('about')
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const navLinks = useMemo(
    () => [
      { href: '#about', label: t('nav.about') },
      { href: '#skills', label: t('nav.skills') },
      { href: '#experience', label: t('nav.experience') },
      { href: '#projects', label: t('nav.projects') },
      { href: '#contact', label: t('nav.contact') }
    ],
    [t]
  )

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

    const updateStateByScroll = () => {
      setScrolled(window.scrollY > 0)

      const offsetY = window.scrollY + 180
      let currentId = sectionIds[0]

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        if (offsetY >= section.offsetTop) {
          currentId = id
        }
      }

      setActiveSection(currentId)
    }

    updateStateByScroll()

    window.addEventListener('scroll', updateStateByScroll, { passive: true })
    window.addEventListener('resize', updateStateByScroll)
    window.addEventListener('hashchange', updateStateByScroll)

    return () => {
      window.removeEventListener('scroll', updateStateByScroll)
      window.removeEventListener('resize', updateStateByScroll)
      window.removeEventListener('hashchange', updateStateByScroll)
    }
  }, [navLinks])

  const handleNavClick = (href: string) => {
    setActiveSection(href.replace('#', ''))
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  useEffect(() => {
    if (!menuOpen) return

    const menu = mobileMenuRef.current
    if (!menu) return

    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    first?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (e.key !== 'Tab' || focusable.length === 0) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header
      role='banner'
      className={`fixed top-0 inset-x-0 z-50 transition-[padding] duration-300 ${scrolled ? 'pt-2 sm:pt-3' : 'pt-0'}`}
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-300 ease-out origin-top ${
          menuOpen
            ? 'glass rounded-2xl border scale-100'
            : scrolled
              ? 'glass rounded-2xl border scale-[0.96] sm:scale-[0.97]'
              : 'bg-transparent rounded-none scale-100 shadow-none'
        }`}
        style={menuOpen || scrolled ? { borderColor: 'var(--border)' } : {}}
      >
        <nav
          aria-label={appCopy.accessibility.mainNavigation}
          className={`px-4 sm:px-6 flex items-center justify-between transition-[padding] duration-300 ${
            scrolled ? 'py-2' : 'py-3'
          }`}
        >
          {/* Logo */}
          <a
            href='#hero'
            className='font-mono text-xl font-black gradient-text tracking-tight rounded-sm'
            aria-label={appCopy.accessibility.navbarLogo}
          >
            {appCopy.brand.shortName}
          </a>

          {/* Desktop links */}
          <ul className='hidden md:flex items-center gap-7' role='list'>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className='relative text-sm font-medium transition-colors duration-200 rounded px-1 py-0.5 focus-visible:ring-2 focus-visible:ring-(--primary) hover:text-(--primary)'
                  style={{ color: activeSection === href.slice(1) ? 'var(--primary)' : 'var(--text-2)' }}
                  aria-current={activeSection === href.slice(1) ? 'page' : undefined}
                  onClick={() => setActiveSection(href.slice(1))}
                >
                  {label}
                  <span
                    aria-hidden='true'
                    className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-(--primary) transition-all duration-300 ${
                      activeSection === href.slice(1) ? 'w-full' : 'w-0'
                    }`}
                  />
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
              ref={menuButtonRef}
              type='button'
              aria-expanded={menuOpen}
              aria-controls='mobile-menu'
              aria-label={menuOpen ? appCopy.accessibility.mobileMenuClose : appCopy.accessibility.mobileMenuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className='flex flex-col gap-1.5 p-2 ml-1 rounded-lg min-w-11 min-h-11 items-center justify-center hover:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] focus-visible:ring-2 focus-visible:ring-(--primary)'
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
            ref={mobileMenuRef}
            id='mobile-menu'
            role='dialog'
            aria-modal='true'
            aria-label={appCopy.accessibility.mobileNavigationMenu}
            className='md:hidden glass border-t px-6 pb-6 pt-4'
            style={{ borderColor: 'var(--border)' }}
          >
            <ul className='flex flex-col gap-2' role='list'>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => handleNavClick(href)}
                    className='text-base font-medium block py-3 px-2 rounded-lg transition-colors duration-200'
                    style={{
                      color: activeSection === href.slice(1) ? 'var(--primary)' : 'var(--text-2)',
                      background:
                        activeSection === href.slice(1)
                          ? 'color-mix(in srgb, var(--primary) 10%, transparent)'
                          : 'transparent'
                    }}
                    aria-current={activeSection === href.slice(1) ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href='#contact'
              onClick={() => handleNavClick('#contact')}
              className='btn-primary mt-4 w-full justify-center'
            >
              {t('nav.hire')}
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
