import { Link } from 'react-router-dom'
import { Mail, MessageCircle } from 'lucide-react'
import Container from '../Common/Container.jsx'
import Logo from '../Common/Logo.jsx'
import LinkedinIcon from '../Common/icons/LinkedinIcon.jsx'
import GithubIcon from '../Common/icons/GithubIcon.jsx'
import { footerColumns } from '../../data/navigation.js'
import { company, whatsappLink, defaultWhatsappMessage } from '../../data/company.js'

const socialLinks = [
  { key: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon, href: company.social.linkedin },
  { key: 'github', label: 'GitHub', icon: GithubIcon, href: company.social.github },
].filter((link) => link.href)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-graphite-100 bg-white dark:border-white/10 dark:bg-ink-950">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-graphite-500 dark:text-graphite-300">
              {company.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex size-10 items-center justify-center rounded-full border border-graphite-200 text-graphite-500 transition-colors hover:border-neon-400/50 hover:text-neon-500 dark:border-white/10 dark:text-graphite-300 dark:hover:text-neon-300"
              >
                <MessageCircle className="size-4.5" />
              </a>
              <a
                href={`mailto:${company.email}`}
                aria-label="E-mail"
                className="inline-flex size-10 items-center justify-center rounded-full border border-graphite-200 text-graphite-500 transition-colors hover:border-neon-400/50 hover:text-neon-500 dark:border-white/10 dark:text-graphite-300 dark:hover:text-neon-300"
              >
                <Mail className="size-4.5" />
              </a>
              {socialLinks.map(({ key, label, icon: Icon, href }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-graphite-200 text-graphite-500 transition-colors hover:border-neon-400/50 hover:text-neon-500 dark:border-white/10 dark:text-graphite-300 dark:hover:text-neon-300"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-ink-950 dark:text-white">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-graphite-500 transition-colors hover:text-neon-500 dark:text-graphite-300 dark:hover:text-neon-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-graphite-100 pt-8 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-graphite-400">
            &copy; {year} {company.legalName} &mdash; {company.documentId}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidade" className="text-xs text-graphite-400 hover:text-neon-500 dark:hover:text-neon-300">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="text-xs text-graphite-400 hover:text-neon-500 dark:hover:text-neon-300">
              Termos de Uso
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
