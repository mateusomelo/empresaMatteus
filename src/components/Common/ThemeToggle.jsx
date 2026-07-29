import { Moon, Sun } from 'lucide-react'
import clsx from 'clsx'
import { useTheme } from '../../hooks/useTheme.jsx'

export default function ThemeToggle({ light = false, className }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      aria-pressed={isDark}
      className={clsx(
        'relative inline-flex size-10 items-center justify-center rounded-full border transition-colors duration-300',
        light
          ? 'border-white/20 bg-white/5 text-white hover:border-neon-300/60 hover:text-neon-300'
          : 'border-graphite-200 bg-white/70 text-graphite-500 hover:border-neon-400/50 hover:text-neon-500 dark:border-white/10 dark:bg-white/5 dark:text-graphite-300 dark:hover:text-neon-300',
        className,
      )}
    >
      <Sun className={clsx('absolute size-[18px] transition-all duration-300', isDark ? 'scale-0 opacity-0' : 'scale-100 opacity-100')} />
      <Moon className={clsx('absolute size-[18px] transition-all duration-300', isDark ? 'scale-100 opacity-100' : 'scale-0 opacity-0')} />
    </button>
  )
}
