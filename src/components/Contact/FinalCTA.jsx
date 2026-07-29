import { MessageCircle } from 'lucide-react'
import Container from '../Common/Container.jsx'
import Reveal from '../Common/Reveal.jsx'
import Button from '../Common/Button.jsx'
import { whatsappLink, defaultWhatsappMessage } from '../../data/company.js'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-28">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-500/25 blur-[140px]" />

      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Vamos transformar sua empresa através da <span className="text-gradient">tecnologia</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-graphite-300 sm:text-lg">
            Solicite um orçamento sem compromisso e descubra como podemos criar uma solução personalizada para o seu
            projeto.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Button
              as="a"
              href={whatsappLink(defaultWhatsappMessage)}
              external
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
              className="px-9 py-4 text-base"
            >
              Solicitar orçamento pelo WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
