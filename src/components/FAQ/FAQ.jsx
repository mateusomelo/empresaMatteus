import { useState } from 'react'
import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import FAQItem from './FAQItem.jsx'
import { faqItems } from '../../data/faq.js'

export default function FAQ() {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? null)

  return (
    <section id="faq" className="section-padding relative">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas frequentes"
          description="Ainda tem dúvidas? Fale com a gente pelo WhatsApp ou pelo formulário de contato."
        />

        <div className="mt-14 space-y-4">
          {faqItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 5) * 0.05}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
