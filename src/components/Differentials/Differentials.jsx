import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import IconBadge from '../Common/IconBadge.jsx'
import { differentials } from '../../data/differentials.js'

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-padding relative">
      <Container>
        <SectionHeading
          eyebrow="Por que nos escolher"
          title="Diferenciais"
          description="Compromisso técnico e humano em cada etapa do projeto, do primeiro contato ao suporte pós-instalação."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map(({ id, label, icon }, index) => (
            <Reveal key={id} delay={(index % 4) * 0.06}>
              <div className="flex h-full flex-col items-start gap-4 rounded-2xl border border-graphite-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon-400/40 hover:shadow-lg hover:shadow-neon-500/10 dark:border-white/10 dark:bg-ink-800/60">
                <IconBadge icon={icon} />
                <p className="text-sm font-semibold leading-snug text-ink-950 dark:text-white">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
