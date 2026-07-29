import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import { specializedServices, operationalDifferentials } from '../../data/specializedServices.js'

function ChecklistGrid({ items, delayOffset = 0 }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map(({ id, label, icon: Icon }, index) => (
        <Reveal key={id} delay={delayOffset + (index % 4) * 0.05}>
          <div className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-neon-400/40 hover:bg-white/[0.06]">
            <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-neon-500/20 to-cyan-glow/10 text-neon-300">
              <Icon className="size-4.5" />
            </span>
            <span className="text-sm leading-snug text-graphite-200">{label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function SpecializedServices() {
  return (
    <section className="section-padding relative bg-ink-950 text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Sob medida"
          title="Serviços especializados"
          description="Atendimentos técnicos pontuais, sem burocracia — do reparo simples ao suporte emergencial."
          light
        />

        <div className="mt-14">
          <ChecklistGrid items={specializedServices} />
        </div>

        <div className="mx-auto mt-20 max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-500/30 bg-neon-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon-300">
              Como operamos
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">Diferenciais operacionais</h3>
          </Reveal>
        </div>

        <div className="mt-10">
          <ChecklistGrid items={operationalDifferentials} delayOffset={0.05} />
        </div>
      </Container>
    </section>
  )
}
