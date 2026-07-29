import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react'
import Reveal from '../Common/Reveal.jsx'
import { company, whatsappLink, defaultWhatsappMessage } from '../../data/company.js'

const items = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: company.whatsappDisplay,
    href: whatsappLink(defaultWhatsappMessage),
    external: true,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: 'Atendimento',
    value: `${company.city} / ${company.state} e região`,
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Seg. a sex., 08h às 18h · plantão emergencial sob consulta',
  },
]

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      {items.map(({ icon: Icon, label, value, href, external }, index) => {
        const content = (
          <div className="flex items-start gap-4 rounded-2xl border border-graphite-100 bg-white p-5 transition-colors duration-300 hover:border-neon-400/40 dark:border-white/10 dark:bg-ink-800/60">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-500/15 to-cyan-glow/10 text-neon-500 dark:text-neon-300">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-graphite-400">{label}</p>
              <p className="mt-0.5 text-sm font-medium text-ink-950 dark:text-white">{value}</p>
            </div>
          </div>
        )

        return (
          <Reveal key={label} delay={index * 0.05}>
            {href ? (
              <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
                {content}
              </a>
            ) : (
              content
            )}
          </Reveal>
        )
      })}
    </div>
  )
}
