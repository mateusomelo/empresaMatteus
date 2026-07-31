import { Wrench, Home, MapPin, Clock } from 'lucide-react'
import Reveal from '../Common/Reveal.jsx'
import { company, whatsappLink } from '../../data/company.js'

const contactGroups = [
  {
    icon: Wrench,
    label: 'Tecnologia',
    lines: [
      {
        text: company.whatsappDisplay,
        href: whatsappLink('Olá! Vim pelo site e gostaria de solicitar um orçamento de tecnologia.', company.whatsappNumber),
      },
      { text: company.email, href: `mailto:${company.email}` },
    ],
  },
  {
    icon: Home,
    label: 'Soluções Completas (residencial)',
    lines: [
      {
        text: company.whatsappGeneralDisplay,
        href: whatsappLink(
          'Olá! Vim pelo site e gostaria de solicitar um orçamento de encanador, pintor, eletricista ou reforma.',
          company.whatsappGeneralNumber,
        ),
      },
      { text: company.generalEmail, href: `mailto:${company.generalEmail}` },
    ],
  },
]

const infoItems = [
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
      {contactGroups.map(({ icon: Icon, label, lines }, index) => (
        <Reveal key={label} delay={index * 0.05}>
          <div className="flex items-start gap-4 rounded-2xl border border-graphite-100 bg-white p-5 transition-colors duration-300 hover:border-neon-400/40 dark:border-white/10 dark:bg-ink-800/60">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-500/15 to-cyan-glow/10 text-neon-500 dark:text-neon-300">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-graphite-400">{label}</p>
              {lines.map((line) => (
                <a
                  key={line.text}
                  href={line.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 block text-sm font-medium text-ink-950 hover:text-neon-500 dark:text-white dark:hover:text-neon-300"
                >
                  {line.text}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      ))}

      {infoItems.map(({ icon: Icon, label, value }, index) => (
        <Reveal key={label} delay={(contactGroups.length + index) * 0.05}>
          <div className="flex items-start gap-4 rounded-2xl border border-graphite-100 bg-white p-5 transition-colors duration-300 hover:border-neon-400/40 dark:border-white/10 dark:bg-ink-800/60">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-500/15 to-cyan-glow/10 text-neon-500 dark:text-neon-300">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-graphite-400">{label}</p>
              <p className="mt-0.5 text-sm font-medium text-ink-950 dark:text-white">{value}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
