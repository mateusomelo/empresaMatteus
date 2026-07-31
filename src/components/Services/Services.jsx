import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'
import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import ServiceCard from './ServiceCard.jsx'
import { services } from '../../data/services.js'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Services() {
  return (
    <section id="servicos" className="section-padding relative">
      <Container>
        <SectionHeading
          eyebrow="O que fazemos"
          title="Serviços completos em tecnologia e no dia a dia"
          description="Da infraestrutura física ao software, passando por elétrica, hidráulica e reformas: soluções projetadas, implantadas e mantidas por uma única equipe de confiança."
        />

        <Reveal delay={0.1}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            slidesPerView={1.05}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            className="!px-1 !pb-12 !pt-2 mt-16"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id} className="h-auto pb-2">
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </Container>
    </section>
  )
}
