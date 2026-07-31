import { lazy, Suspense } from 'react'
import SEO from '../components/Common/SEO.jsx'
import Hero from '../components/Hero/Hero.jsx'
import About from '../components/About/About.jsx'
import Experience from '../components/Experience/Experience.jsx'
import Technologies from '../components/Technologies/Technologies.jsx'
import Services from '../components/Services/Services.jsx'
import SpecializedServices from '../components/Services/SpecializedServices.jsx'
import Differentials from '../components/Differentials/Differentials.jsx'
import Timeline from '../components/Timeline/Timeline.jsx'
import ServiceAreas from '../components/ServiceAreas/ServiceAreas.jsx'
import Portfolio from '../components/Portfolio/Portfolio.jsx'
import FAQ from '../components/FAQ/FAQ.jsx'
import Contact from '../components/Contact/Contact.jsx'
import FinalCTA from '../components/Contact/FinalCTA.jsx'
import { getLocalBusinessSchema } from '../utils/schema.js'

// Carregado sob demanda: depende do Swiper, usado apenas nesta seção abaixo da dobra.
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials.jsx'))

export default function Home() {
  return (
    <>
      <SEO
        title="Tecnologia e serviços que impulsionam empresas e residências"
        description="Infraestrutura de TI, Redes Corporativas, CFTV, Automação e Desenvolvimento de Sistemas — além de Encanador, Pintor, Eletricista e Reformas em Geral. Soluções completas em um único contato."
        path="/"
        schema={getLocalBusinessSchema()}
      />
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Services />
      <SpecializedServices />
      <Differentials />
      <Timeline />
      <ServiceAreas />
      <Portfolio />
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  )
}
