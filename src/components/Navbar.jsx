import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { NAV_LINKS } from '../data/siteData'
import Logo from './Logo'

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div
        className={`backdrop-blur-md border-b px-6 lg:px-12 transition-all duration-500 ${
          isDark
            ? 'bg-slate-950/92 border-stone-800/60'
            : 'bg-white/95 border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-20">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link dark:text-stone-300 text-stone-600 hover:text-gold-400 dark:hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center hover:border-gold-400 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 border text-xs uppercase tracking-widest transition-all duration-300 hover:bg-gold-400 hover:text-stone-950 hover:border-gold-400"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
            >
              Consult Now
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden w-8 flex flex-col gap-1.5 items-end"
              aria-label="Menu"
            >
              <span className="block h-px w-6 bg-current transition-all duration-300" />
              <span className="block h-px w-4 bg-current transition-all duration-300" />
              <span className="block h-px w-6 bg-current transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-400"
          style={{ maxHeight: menuOpen ? '400px' : '0', opacity: menuOpen ? 1 : 0 }}
        >
          <div className={`py-4 space-y-1 border-t ${isDark ? 'border-stone-800' : 'border-stone-200'}`}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block py-2.5 px-2 text-sm uppercase tracking-widest dark:text-stone-400 text-stone-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
