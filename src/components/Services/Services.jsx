import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import ServiceCard from './ServiceCard.jsx'
import { services } from '../../data/services.js'

export default function Services() {
  return (
    <section id="servicos" className="section-padding relative">
      <Container>
        <SectionHeading
          eyebrow="O que fazemos"
          title="Serviços completos em tecnologia"
          description="Da infraestrutura física ao software: soluções projetadas, implantadas e mantidas por uma única equipe especializada."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} delay={(index % 3) * 0.08} {...service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
