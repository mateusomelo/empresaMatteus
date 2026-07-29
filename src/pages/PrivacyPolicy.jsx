import SEO from '../components/Common/SEO.jsx'
import Container from '../components/Common/Container.jsx'
import { company } from '../data/company.js'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Política de Privacidade"
        description="Saiba como coletamos, usamos e protegemos os seus dados ao utilizar este site."
        path="/politica-de-privacidade"
      />
      <section className="section-padding pt-36">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold text-ink-950 dark:text-white sm:text-4xl">Política de Privacidade</h1>
          <p className="mt-3 text-sm text-graphite-400">Última atualização: julho de 2026</p>

          <div className="prose-content mt-10 space-y-8 text-sm leading-relaxed text-graphite-500 dark:text-graphite-300">
            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">1. Quem somos</h2>
              <p className="mt-2">
                Este site é operado por {company.legalName} ({company.documentId}), doravante &ldquo;nós&rdquo;.
                Esta política explica quais dados coletamos por meio deste site, para que finalidade e quais são os
                seus direitos, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 &mdash;
                LGPD).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">2. Quais dados coletamos</h2>
              <p className="mt-2">Coletamos apenas os dados que você nos envia voluntariamente:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Nome, e-mail, telefone e mensagem, quando você preenche o formulário de orçamento;</li>
                <li>Sua preferência de tema (claro/escuro), armazenada localmente no seu navegador (localStorage), sem envio a nenhum servidor.</li>
              </ul>
              <p className="mt-2">
                Este site não utiliza cookies de rastreamento nem ferramentas de análise de terceiros até o momento
                desta publicação.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">3. Como usamos os seus dados</h2>
              <p className="mt-2">
                Os dados enviados pelo formulário são usados exclusivamente para responder à sua solicitação de
                orçamento ou contato, incluindo o retorno por e-mail, telefone ou WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">4. Com quem compartilhamos</h2>
              <p className="mt-2">
                O formulário deste site é processado pela infraestrutura de formulários da Netlify (Netlify Forms),
                responsável por transmitir e armazenar temporariamente as submissões até que sejam recebidas por nós.
                Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">5. Seus direitos</h2>
              <p className="mt-2">
                Você pode, a qualquer momento, solicitar a confirmação, acesso, correção ou exclusão dos seus dados
                pessoais, entrando em contato pelo e-mail{' '}
                <a href={`mailto:${company.email}`} className="text-neon-500 dark:text-neon-300">
                  {company.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">6. Alterações desta política</h2>
              <p className="mt-2">
                Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas. A data da
                última atualização estará sempre indicada no topo desta página.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  )
}
