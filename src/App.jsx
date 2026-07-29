import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import WhatsAppButton from './components/Common/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import { useScrollRestoration } from './hooks/useScrollRestoration.js'

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const TermsOfUse = lazy(() => import('./pages/TermsOfUse.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  useScrollRestoration()

  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-de-uso" element={<TermsOfUse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
