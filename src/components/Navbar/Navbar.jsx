import { useEffect, useMemo, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import clsx from 'clsx'
import Container from '../Common/Container.jsx'
import Logo from '../Common/Logo.jsx'
import Button from '../Common/Button.jsx'
import ThemeToggle from '../Common/ThemeToggle.jsx'
import MobileMenu from './MobileMenu.jsx'
import { navLinks } from '../../data/navigation.js'
import { useActiveSection } from '../../hooks/useActiveSection.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const sectionIds = useMemo(() => navLinks.map((link) => link.href.replace('#', '')), [])
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [activeId])

  const solid = scrolled || mobileOpen
  const overHero = !solid

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-graphite-100 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/80'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <a href="#inicio" className="shrink-0">
          <Logo light={overHero} />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                  isActive
                    ? overHero
                      ? 'text-neon-300'
                      : 'text-neon-600 dark:text-neon-300'
                    : overHero
                      ? 'text-graphite-200 hover:text-white'
                      : 'text-graphite-500 hover:text-ink-950 dark:text-graphite-300 dark:hover:text-white',
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-neon-500 to-cyan-glow" />
                )}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle light={overHero} />
          <Button as="a" href="#contato" variant="primary" size="md" icon={ArrowUpRight} iconPosition="right">
            Solicitar orçamento
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle light={overHero} />
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            className={clsx(
              'inline-flex size-10 items-center justify-center rounded-full border transition-colors duration-300',
              overHero
                ? 'border-white/20 text-white'
                : 'border-graphite-200 text-ink-900 dark:border-white/10 dark:text-white',
            )}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} activeId={activeId} />
    </header>
  )
}
