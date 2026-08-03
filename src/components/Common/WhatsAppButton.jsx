import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappLink, defaultWhatsappMessage } from '../../data/company.js'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink(defaultWhatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="group fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#0E8345] text-white shadow-xl shadow-[#0E8345]/40 sm:bottom-8 sm:right-8"
        >
          <span className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-[#0E8345]/60 blur-md" aria-hidden="true" />
          <MessageCircle className="size-7 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.2} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
