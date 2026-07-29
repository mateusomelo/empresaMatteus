import { useId } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import clsx from 'clsx'

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  const panelId = useId()

  return (
    <div className="overflow-hidden rounded-2xl border border-graphite-100 bg-white dark:border-white/10 dark:bg-ink-800/60">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-ink-950 dark:text-white">{question}</span>
        <span
          className={clsx(
            'inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-graphite-100 text-graphite-500 transition-transform duration-300 dark:bg-white/10 dark:text-graphite-300',
            isOpen && 'rotate-45 bg-neon-500/15 text-neon-500 dark:text-neon-300',
          )}
        >
          <Plus className="size-4" />
        </span>
      </button>

      <motion.div
        id={panelId}
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-graphite-500 dark:text-graphite-300">{answer}</p>
      </motion.div>
    </div>
  )
}
