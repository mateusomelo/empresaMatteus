const rackDots = Array.from({ length: 48 }, (_, index) => ({
  id: index,
  delay: (index % 7) * 0.35,
  lit: index % 5 === 0 || index % 11 === 0,
}))

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-ink-950" aria-hidden="true">
      {/* Gradiente base evocando um datacenter */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />

      {/* Piso em grade com perspectiva */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] mask-fade-x [mask-image:linear-gradient(to_top,black,transparent)]">
        <div className="bg-grid absolute inset-0 origin-bottom [transform:perspective(500px)_rotateX(62deg)] opacity-40" />
      </div>

      {/* Orbs de luz neon */}
      <div className="absolute left-[8%] top-[12%] size-72 animate-float rounded-full bg-neon-500/25 blur-[110px]" />
      <div className="absolute right-[10%] top-[28%] size-96 animate-float-slow rounded-full bg-cyan-glow/15 blur-[130px]" />
      <div className="absolute bottom-[6%] left-[35%] size-80 animate-pulse-glow rounded-full bg-neon-600/20 blur-[120px]" />

      {/* Linhas de fibra óptica animadas */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
      >
        {[
          'M-50,120 C 250,60 450,220 750,140 S 1150,60 1300,140',
          'M-50,320 C 300,380 500,240 800,320 S 1100,420 1300,340',
          'M-50,560 C 280,500 520,620 780,540 S 1080,460 1300,540',
        ].map((d, index) => (
          <path
            key={d}
            d={d}
            stroke="url(#fiber-gradient)"
            strokeWidth="1.5"
            strokeDasharray="10 14"
            className="animate-[grid-pan_6s_linear_infinite]"
            style={{ animationDelay: `${index * 0.6}s`, animationDirection: 'reverse' }}
          />
        ))}
        <defs>
          <linearGradient id="fiber-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F6BFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#38E8FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Painel de rack decorativo (LEDs piscando) */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-1.5 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm xl:flex">
        <div className="grid grid-cols-6 gap-1.5">
          {rackDots.map((dot) => (
            <span
              key={dot.id}
              className={
                dot.lit
                  ? 'size-1.5 animate-pulse-glow rounded-full bg-cyan-glow'
                  : 'size-1.5 rounded-full bg-white/15'
              }
              style={{ animationDelay: `${dot.delay}s` }}
            />
          ))}
        </div>
      </div>

      {/* Vinheta para legibilidade do texto central */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
    </div>
  )
}
