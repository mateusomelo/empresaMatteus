# Matteus Oliveira de Melo — Site Institucional

Site institucional em React (SPA) para tecnologia — infraestrutura de TI, redes, CFTV, automação, telefonia e desenvolvimento de sistemas/sites. 100% front-end, pronto para hospedagem estática na Netlify.

## Stack

- React 19 + Vite 8
- JavaScript (sem TypeScript)
- Tailwind CSS 4
- React Router DOM (SPA)
- Framer Motion (animações e scroll reveal)
- Lucide React (ícones)
- React Helmet Async (SEO)
- Swiper (carrossel de depoimentos)
- React Hook Form (formulário de orçamento, integrado ao Netlify Forms)

Sem backend, sem banco de dados, sem SSR — apenas front-end estático.

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento em http://localhost:5173
npm run build     # gera a pasta dist/ pronta para produção
npm run preview   # serve a build de produção localmente para conferência
```

## Estrutura do projeto

```
src/
├── assets/            # imagens/ícones/logos reais (a adicionar)
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Experience/
│   ├── Technologies/
│   ├── Services/
│   ├── Differentials/
│   ├── Timeline/
│   ├── ServiceAreas/
│   ├── Portfolio/
│   ├── Testimonials/
│   ├── FAQ/
│   ├── Contact/
│   ├── Footer/
│   └── Common/        # Button, Container, SectionHeading, SEO, Logo, etc.
├── pages/              # Home, PrivacyPolicy, TermsOfUse, NotFound
├── data/               # todo o conteúdo textual do site (edite aqui, não no JSX)
├── hooks/
├── utils/              # schema.js (JSON-LD)
├── App.jsx
└── main.jsx
```

Todo o conteúdo (serviços, experiência, diferenciais, FAQ, portfólio etc.) fica centralizado em `src/data/*.js` — para editar textos, adicionar/remover itens ou reordenar seções, normalmente basta mexer nesses arquivos, sem tocar nos componentes.

## ⚠️ Antes de publicar (obrigatório)

Como os dados reais da empresa não foram fornecidos no momento da geração do projeto, os seguintes pontos usam valores de exemplo e **precisam ser conferidos/atualizados antes do lançamento**:

1. **`src/data/company.js`** — arquivo único com todos os dados de contato:
   - `whatsappNumber` / `whatsappDisplay`: número de exemplo (`5565912345678`). Em modo de desenvolvimento, o console do navegador avisa enquanto esse valor não for trocado.
   - `email`: `contato@matteustecnologia.com.br` (exemplo).
   - `siteUrl`: domínio de exemplo — troque para o domínio definitivo.
   - `documentId`: `65.123.179` foi o identificador informado, mas um CNPJ completo tem 14 dígitos (`XX.XXX.XXX/0001-XX`). Confirme/complete antes de exibir publicamente.
   - `social.linkedin` / `social.github`: estão `null` de propósito — os ícones correspondentes só aparecem no rodapé quando você preencher uma URL real.
2. **Domínio nos arquivos estáticos**: `index.html` (canonical, Open Graph, Twitter Card), `public/robots.txt` e `public/sitemap.xml` usam o mesmo domínio de exemplo — troque todas as ocorrências de `matteustecnologia.com.br` pelo domínio real.
3. **Logo**: a navbar/rodapé usam um monograma "M" feito em SVG (`src/components/Common/Logo.jsx`) nas cores da marca, já que o arquivo de logo definitivo não foi fornecido como arquivo. Para usar a arte final (a mesma do briefing, com os ícones de CFTV/Redes/Automação), salve o arquivo em `src/assets/logos/` e substitua o conteúdo de `Logo.jsx` por uma tag `<img>` apontando para ele.
4. **Portfólio** (`src/data/portfolio.js`): cada item tem `image: null` — os cards mostram um ícone/gradiente de categoria enquanto isso. Para adicionar fotos reais, salve os arquivos (formato `.webp`) em `src/assets/images/portfolio/`, importe-os no arquivo de dados e preencha `image`, `projectUrl` e `githubUrl` conforme aplicável.
5. **Depoimentos** (`src/data/testimonials.js`): propositalmente vazio — nenhum depoimento fictício foi criado. Assim que houver avaliações reais de clientes, adicione-as nesse array no formato indicado no próprio arquivo e o carrossel passa a exibi-las automaticamente.
6. **`public/og-cover.png`**: imagem de compartilhamento (Open Graph/Twitter) gerada automaticamente a partir de `scripts/generate-og-image.mjs`. Rode `npm run generate:og` novamente sempre que atualizar nome, tagline ou domínio em `company.js`.

Nenhum desses pontos impede o `npm install`/`npm run dev`/`npm run build` — o site funciona 100% mesmo sem essas trocas, mas exibirá os dados de exemplo até serem atualizados.

## Deploy na Netlify

O projeto já está pronto para deploy sem nenhuma alteração de configuração:

1. Suba o projeto para um repositório Git (GitHub/GitLab/Bitbucket).
2. Na Netlify: **Add new site → Import an existing project**, selecione o repositório.
3. A Netlify detecta automaticamente as configurações via `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 22 (definido em `netlify.toml` e `.nvmrc`)
4. Clique em Deploy. Pronto.

### Formulário de orçamento (Netlify Forms)

O formulário em `#contato` já está integrado ao **Netlify Forms** — funciona automaticamente após o deploy, sem nenhum backend:

- Um formulário estático espelho existe em `index.html` (`name="orcamento"`) só para a Netlify detectar os campos durante o build.
- O formulário React de verdade (`src/components/Contact/ContactForm.jsx`) envia os dados via `fetch` para a própria Netlify no submit.
- Depois do primeiro deploy, vá em **Site settings → Forms** no painel da Netlify para ver as submissões e configurar notificações por e-mail.

### React Router e Netlify

`netlify.toml` já inclui a regra de redirect (`/* → /index.html`, status 200) necessária para que rotas como `/politica-de-privacidade` não retornem 404 ao atualizar a página ou acessar o link direto.

## SEO

- Meta tags, Open Graph e Twitter Cards por página via `react-helmet-async` (veja `src/components/Common/SEO.jsx`).
- Schema.org `LocalBusiness` (JSON-LD) na home (`src/utils/schema.js`), incluindo a lista de serviços oferecidos.
- `public/robots.txt` e `public/sitemap.xml` prontos (lembre de atualizar o domínio, ver checklist acima).
- Favicon em SVG (`public/favicon.svg`), leve e nítido em qualquer resolução.

## Performance e acessibilidade

- Fontes (Inter e Space Grotesk) auto-hospedadas via `@fontsource` — sem requisições a servidores externos de fonte.
- Code-splitting por rota (`React.lazy`) para Política de Privacidade, Termos de Uso e 404; a seção de Depoimentos (que depende do Swiper) também é carregada sob demanda.
- Animações respeitam `prefers-reduced-motion` (via `useReducedMotion` do Framer Motion no componente `Reveal`).
- Imagens reais adicionadas futuramente (portfólio) devem usar `loading="lazy"` e formato `.webp` — o componente de card já está preparado para isso.
- Dark mode com classe (`.dark`), persistido em `localStorage`, sem flash de tema errado no carregamento (script inline em `index.html`).

## Notas técnicas

- **`react-router-dom` e a vulnerabilidade GHSA-qwww-vcr4-c8h2**: o `npm audit` acusa uma vulnerabilidade de alta severidade em "RSC Mode" do React Router. Este projeto é uma SPA client-side pura (sem React Server Components, sem Data/Action routers server-side), então esse modo nunca é exercitado — a vulnerabilidade não se aplica ao uso feito aqui.
- **`sharp`** é uma devDependency usada apenas pelo script `npm run generate:og` (gera `public/og-cover.png` a partir de um SVG) — não faz parte do bundle publicado.
- **`lucide-react`**: os ícones de GitHub e LinkedIn não existem mais no pacote (removidos numa major recente); por isso o rodapé usa SVGs próprios em `src/components/Common/icons/`.
