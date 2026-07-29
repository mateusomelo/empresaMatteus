import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import Button from '../Common/Button.jsx'
import { services } from '../../data/services.js'

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [status, setStatus] = useState('idle')

  async function onSubmit(values) {
    setStatus('idle')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'orcamento', ...values }),
      })
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      name="orcamento"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-3xl border border-graphite-100 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-ink-800/60 sm:p-8"
    >
      {/* Campos ocultos exigidos pelo Netlify Forms para uma SPA React */}
      <input type="hidden" name="form-name" value="orcamento" />
      <p className="hidden">
        <label>
          Não preencha este campo: <input {...register('empresa-site')} tabIndex="-1" autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-graphite-500 dark:text-graphite-300">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            autoComplete="name"
            className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-2.5 text-sm text-ink-950 outline-none transition-colors focus:border-neon-400 dark:border-white/10 dark:bg-ink-900 dark:text-white"
            {...register('nome', { required: 'Informe seu nome' })}
          />
          {errors.nome && <p className="mt-1.5 text-xs text-red-500">{errors.nome.message}</p>}
        </div>

        <div>
          <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-graphite-500 dark:text-graphite-300">
            Telefone / WhatsApp
          </label>
          <input
            id="telefone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-2.5 text-sm text-ink-950 outline-none transition-colors focus:border-neon-400 dark:border-white/10 dark:bg-ink-900 dark:text-white"
            {...register('telefone', { required: 'Informe um telefone' })}
          />
          {errors.telefone && <p className="mt-1.5 text-xs text-red-500">{errors.telefone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-graphite-500 dark:text-graphite-300">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-2.5 text-sm text-ink-950 outline-none transition-colors focus:border-neon-400 dark:border-white/10 dark:bg-ink-900 dark:text-white"
          {...register('email', {
            required: 'Informe seu e-mail',
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Informe um e-mail válido' },
          })}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="servico" className="mb-1.5 block text-sm font-medium text-graphite-500 dark:text-graphite-300">
          Serviço de interesse
        </label>
        <select
          id="servico"
          defaultValue=""
          className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-2.5 text-sm text-ink-950 outline-none transition-colors focus:border-neon-400 dark:border-white/10 dark:bg-ink-900 dark:text-white"
          {...register('servico', { required: 'Selecione um serviço' })}
        >
          <option value="" disabled>
            Selecione um serviço
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Outro">Outro</option>
        </select>
        {errors.servico && <p className="mt-1.5 text-xs text-red-500">{errors.servico.message}</p>}
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-graphite-500 dark:text-graphite-300">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          rows={4}
          className="w-full resize-none rounded-xl border border-graphite-200 bg-white px-4 py-2.5 text-sm text-ink-950 outline-none transition-colors focus:border-neon-400 dark:border-white/10 dark:bg-ink-900 dark:text-white"
          {...register('mensagem', { required: 'Conte um pouco sobre o seu projeto' })}
        />
        {errors.mensagem && <p className="mt-1.5 text-xs text-red-500">{errors.mensagem.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" icon={Send} iconPosition="right" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Solicitar orçamento'}
      </Button>

      {status === 'success' && (
        <p className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="size-4 shrink-0" /> Mensagem enviada! Em breve entraremos em contato.
        </p>
      )}
      {status === 'error' && (
        <p className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="size-4 shrink-0" /> Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
        </p>
      )}
    </form>
  )
}
