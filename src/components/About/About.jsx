import { Server, Code2, ShieldCheck, UserCheck } from 'lucide-react'
import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import GlassCard from '../Common/GlassCard.jsx'

const pillars = [
  { icon: Server, label: 'Infraestrutura física' },
  { icon: Code2, label: 'Desenvolvimento de software' },
  { icon: ShieldCheck, label: 'Segurança e boas práticas' },
  { icon: UserCheck, label: 'Atendimento personalizado' },
]

export default function About() {
  return (
    <section id="sobre" className="section-padding relative">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Quem somos" title="Sobre a empresa" align="left" />

            <Reveal delay={0.15}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-graphite-500 dark:text-graphite-300">
                <p>
                  Nossa empresa nasceu com o propósito de entregar soluções tecnológicas completas para empresas e
                  clientes residenciais.
                </p>
                <p>
                  Atuamos em diversas áreas da tecnologia, oferecendo desde infraestrutura física até desenvolvimento
                  de software, sempre utilizando equipamentos de qualidade, boas práticas do mercado e atendimento
                  personalizado.
                </p>
                <p>
                  Nosso compromisso é entregar projetos seguros, organizados, modernos e eficientes, proporcionando
                  tranquilidade e alto desempenho para nossos clientes.
                </p>
                <p>Trabalhamos com transparência, responsabilidade e foco total na satisfação do cliente.</p>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map(({ icon: Icon, label }, index) => (
                <GlassCard
                  key={label}
                  className={index % 2 === 1 ? 'translate-y-6 p-6' : 'p-6'}
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-500/15 to-cyan-glow/10 text-neon-500 dark:text-neon-300">
                    <Icon className="size-6" />
                  </span>
                  <p className="mt-4 text-sm font-semibold text-ink-950 dark:text-white">{label}</p>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
