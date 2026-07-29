import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import ContactForm from './ContactForm.jsx'
import ContactInfo from './ContactInfo.jsx'

export default function Contact() {
  return (
    <section id="contato" className="section-padding relative bg-graphite-100/40 dark:bg-ink-900/40">
      <Container>
        <SectionHeading
          eyebrow="Vamos conversar"
          title="Solicite seu orçamento"
          description="Conte um pouco sobre o seu projeto e retornamos com uma proposta clara, sem compromisso."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
