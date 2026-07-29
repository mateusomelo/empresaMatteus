import SEO from '../components/Common/SEO.jsx'
import Container from '../components/Common/Container.jsx'
import { company } from '../data/company.js'

export default function TermsOfUse() {
  return (
    <>
      <SEO
        title="Termos de Uso"
        description="Condições de uso deste site e dos serviços apresentados."
        path="/termos-de-uso"
      />
      <section className="section-padding pt-36">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold text-ink-950 dark:text-white sm:text-4xl">Termos de Uso</h1>
          <p className="mt-3 text-sm text-graphite-400">Última atualização: julho de 2026</p>

          <div className="prose-content mt-10 space-y-8 text-sm leading-relaxed text-graphite-500 dark:text-graphite-300">
            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">1. Aceitação dos termos</h2>
              <p className="mt-2">
                Ao acessar e utilizar este site, de propriedade de {company.legalName}, você concorda com os termos
                descritos a seguir. Caso não concorde, recomendamos que não utilize este site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">2. Natureza do conteúdo</h2>
              <p className="mt-2">
                As informações apresentadas neste site têm caráter institucional e comercial, descrevendo serviços de
                infraestrutura de TI, redes, CFTV, automação, telefonia e desenvolvimento de software. Os projetos
                exibidos no portfólio ilustram os tipos de solução que executamos e serão complementados com fotos e
                estudos de caso reais ao longo do tempo.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">3. Orçamentos e contratações</h2>
              <p className="mt-2">
                O envio do formulário de orçamento ou o contato via WhatsApp não gera, por si só, qualquer obrigação
                contratual. Toda contratação de serviço será formalizada previamente entre as partes, com escopo,
                valores e prazos definidos.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">4. Propriedade intelectual</h2>
              <p className="mt-2">
                Textos, layout, identidade visual e elementos gráficos deste site pertencem a {company.legalName} e
                não podem ser reproduzidos sem autorização prévia.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">5. Limitação de responsabilidade</h2>
              <p className="mt-2">
                Empregamos esforços razoáveis para manter as informações deste site atualizadas e corretas, mas não
                garantimos a ausência total de erros ou indisponibilidades técnicas.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">6. Alterações destes termos</h2>
              <p className="mt-2">
                Estes termos podem ser atualizados a qualquer momento, sendo a versão vigente sempre a publicada
                nesta página.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">7. Contato</h2>
              <p className="mt-2">
                Dúvidas sobre estes termos podem ser enviadas para{' '}
                <a href={`mailto:${company.email}`} className="text-neon-500 dark:text-neon-300">
                  {company.email}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  )
}
