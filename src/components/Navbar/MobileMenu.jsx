import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import clsx from 'clsx'
import { navLinks } from '../../data/navigation.js'
import { whatsappLink, defaultWhatsappMessage } from '../../data/company.js'
import Button from '../Common/Button.jsx'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'

export default function MobileMenu({ open, onClose, activeId }) {
  useLockBodyScroll(open)

  return (
    <motion.div
      initial={false}
      animate={open ? 'open' : 'closed'}
      variants={{
        open: { height: 'auto', opacity: 1 },
        closed: { height: 0, opacity: 0 },
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden border-t border-graphite-100 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/95 lg:hidden"
    >
      <nav className="container-page flex flex-col gap-1 py-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={clsx(
              'rounded-lg px-4 py-3 text-base font-medium transition-colors',
              activeId === link.href.replace('#', '')
                ? 'bg-neon-500/10 text-neon-500 dark:text-neon-300'
                : 'text-graphite-500 hover:bg-graphite-100/60 dark:text-graphite-300 dark:hover:bg-white/5',
            )}
          >
            {link.label}
          </a>
        ))}
        <Button
          as="a"
          href={whatsappLink(defaultWhatsappMessage)}
          external
          variant="whatsapp"
          icon={MessageCircle}
          size="lg"
          className="mt-4 w-full"
          onClick={onClose}
        >
          Falar no WhatsApp
        </Button>
      </nav>
    </motion.div>
  )
}
