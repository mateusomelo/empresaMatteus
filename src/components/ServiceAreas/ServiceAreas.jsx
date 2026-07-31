import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import { serviceAreas } from '../../data/serviceAreas.js'

export default function ServiceAreas() {
  return (
    <section id="areas-atendimento" className="section-padding relative overflow-hidden">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40 dark:opacity-20" />
      <div className="pointer-events-none absolute -left-24 top-1/2 size-80 -translate-y-1/2 rounded-full bg-neon-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 top-1/4 size-72 rounded-full bg-cyan-glow/10 blur-[100px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Onde atuamos"
          title="Áreas de atendimento"
          description="Soluções sob medida para diferentes perfis de cliente, sempre com o mesmo padrão de qualidade."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {serviceAreas.map(({ id, label, icon: Icon }, index) => (
            <Reveal key={id} delay={(index % 6) * 0.05}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-graphite-100 bg-white px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neon-400/40 hover:shadow-lg hover:shadow-neon-500/10 dark:border-white/10 dark:bg-ink-800/60">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-neon-500/15 to-cyan-glow/10 text-neon-500 dark:text-neon-300">
                  <Icon className="size-6" />
                </span>
                <p className="text-sm font-semibold text-ink-950 dark:text-white">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
