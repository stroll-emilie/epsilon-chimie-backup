/**
 * Header — Epsilon Chimie
 *
 * ─ Sticky, 72px height
 * ─ Transparent with bottom border at rest
 * ─ Primary brand background + shadow when scrolled
 * ─ Mobile: hamburger menu (TODO — Sprint 2)
 *
 * WCAG
 * ─────
 * - Skip link (2.4.1 Bypass Blocks)
 * - aria-label on nav (4.1.2)
 * - aria-current="page" on active link (to be wired with router)
 * - Focus ring on all interactive elements
 *
 * Token usage
 * ────────────
 * Resting:  bg white / border --color-border-default / text --color-content-primary
 * Scrolled: bg --color-bg-primary / text --color-content-on-primary
 * CTA:      Button variant switches with scroll state
 */

import { useState, useEffect } from 'react'
import { Button } from '../Button/Button.jsx'

const NAV_LINKS = [
  { label: 'Products',         href: '/catalogue' },
  { label: 'Custom Synthesis', href: '/custom-synthesis' },
  { label: 'About',            href: '/about' },
]

export function Header({ currentPath = '/' }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    handler() // init
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Skip to main content — WCAG 2.4.1 */}
      <a
        href="#main-content"
        className={[
          'skip-link fixed top-4 left-4 z-50',
          'px-4 py-2 rounded text-sm font-semibold',
          'bg-(--color-bg-primary) text-(--color-content-on-primary)',
          'focus:outline-3 focus:outline-offset-2 focus:outline-(--color-state-focus-ring)',
        ].join(' ')}
      >
        Skip to content
      </a>

      <header
        className={[
          'fixed inset-x-0 top-0 z-40 h-[72px]',
          'flex items-center',
          'transition-all duration-200',
          scrolled
            ? 'bg-(--color-bg-primary) shadow-md'
            : 'bg-white border-b border-(--color-border-default)',
        ].join(' ')}
      >
        <div className="mx-auto w-full max-w-screen-xl px-6 flex items-center justify-between gap-8">

          {/* Logo / Brand */}
          <a
            href="/"
            aria-label="Epsilon Chimie — Go to homepage"
            className={[
              'shrink-0 text-xl font-bold tracking-tight',
              'focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:rounded',
              'focus-visible:outline-(--color-state-focus-ring)',
              scrolled
                ? 'text-(--color-content-on-primary)'
                : 'text-(--color-content-accent)',
            ].join(' ')}
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Epsilon Chimie
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = currentPath === href
                return (
                  <li key={href}>
                    <a
                      href={href}
                      aria-current={isActive ? 'page' : undefined}
                      className={[
                        'text-sm font-semibold transition-colors duration-150',
                        'focus-visible:outline-2 focus-visible:outline-offset-2',
                        'focus-visible:rounded focus-visible:outline-(--color-state-focus-ring)',
                        scrolled
                          ? 'text-(--color-content-on-primary) hover:text-(--color-content-reversed-secondary)'
                          : 'text-(--color-content-primary) hover:text-(--color-content-accent)',
                        isActive
                          ? scrolled
                            ? 'border-b-2 border-(--color-content-on-primary)'
                            : 'border-b-2 border-(--color-border-accent)'
                          : '',
                      ].join(' ')}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* CTA — Request a Quote */}
          <Button
            as="a"
            href="/quote"
            variant={scrolled ? 'ghost' : 'primary'}
            size="md"
            className={
              scrolled
                ? 'hidden md:inline-flex !text-(--color-content-on-primary) hover:!bg-(--color-state-bg-dark-hover)'
                : 'hidden md:inline-flex'
            }
          >
            Request a Quote
          </Button>

          {/* Mobile hamburger — TODO Sprint 2 */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded="false"
            className={[
              'md:hidden p-2 rounded',
              'focus-visible:outline-3 focus-visible:outline-offset-2',
              'focus-visible:outline-(--color-state-focus-ring)',
              scrolled ? 'text-(--color-content-on-primary)' : 'text-(--color-content-primary)',
            ].join(' ')}
          >
            {/* Hamburger icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

        </div>
      </header>
    </>
  )
}
