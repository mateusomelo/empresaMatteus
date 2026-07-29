import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import brandLogo from '../../assets/logos/matteus-brand.webp'

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
            <div className="relative overflow-hidden rounded-3xl border border-graphite-100 bg-ink-950 p-2 shadow-xl shadow-ink-950/10 dark:border-white/10">
              <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-neon-500/20 blur-[100px]" />
              <img
                src={brandLogo}
                alt="Matteus Oliveira de Melo — CFTV, Redes, Telefonia, Automação Residencial, Controle de Acesso e Infraestrutura de Cabeamento"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full rounded-2xl"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
