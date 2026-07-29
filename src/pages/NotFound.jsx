import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import SEO from '../components/Common/SEO.jsx'
import Container from '../components/Common/Container.jsx'
import Button from '../components/Common/Button.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Página não encontrada" description="A página que você procura não existe ou foi movida." path="/404" noindex />
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950 text-white">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-500/20 blur-[140px]" />

        <Container className="relative text-center">
          <p className="text-gradient font-display text-7xl font-bold sm:text-8xl">404</p>
          <h1 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Página não encontrada</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-graphite-300 sm:text-base">
            O endereço acessado não existe ou foi movido. Volte para a página inicial para continuar navegando.
          </p>
          <div className="mt-8 flex justify-center">
            <Button as={Link} to="/" variant="primary" size="lg" icon={Home}>
              Voltar ao início
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
