const metrics = [
  ["$250K", "Max account"],
  ["90%", "Profit split"],
  ["24h", "Fast payouts"],
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14),transparent_67%)] blur-2xl" />
        <div className="hero-grid absolute inset-0 opacity-50" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:pb-28">
        <div>
          <div className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            <span className="size-1.5 rounded-full bg-[var(--gold)] shadow-[0_0_14px_var(--gold)]" />
            Built for disciplined traders
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
            Trade bigger. <span className="metallic-text">Risk smarter.</span> Earn your edge.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            A premium evaluation experience designed around clear rules, scalable account sizes, and a focused path from challenge to payout.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#challenges" className="gold-button rounded-full px-6 py-3.5 text-sm font-semibold text-black">View Challenges</a>
            <a href="#how-it-works" className="glass-button rounded-full px-6 py-3.5 text-sm font-medium text-white/85">How It Works</a>
          </div>
          <div className="mt-11 grid max-w-xl grid-cols-3 gap-3 border-t border-white/[0.07] pt-6">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <p className="text-xl font-semibold text-white sm:text-2xl">{value}</p>
                <p className="mt-1 text-xs text-white/40 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(192,192,192,0.08),transparent_60%)] blur-2xl" />
          <div className="dashboard-shell rounded-[28px] p-3 sm:p-4">
            <div className="overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#0a0a0b]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <div>
                  <p className="text-xs text-white/35">BlackProp Dashboard</p>
                  <p className="mt-1 text-sm font-medium text-white">Evaluation Account</p>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300">ACTIVE</span>
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-5">
                {[["Balance", "$102,480"], ["Profit", "+$2,480"], ["Target", "62%"]].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <p className="text-[11px] text-white/35">{label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
              <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                <div className="rounded-2xl border border-white/[0.06] bg-[#080809] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-white/35">Equity curve</p>
                      <p className="mt-1 text-sm font-medium text-white/80">Last 14 trading days</p>
                    </div>
                    <span className="text-xs text-[var(--gold)]">+4.8%</span>
                  </div>
                  <div className="mt-7 flex h-36 items-end gap-1.5">
                    {[28,38,34,46,42,55,51,64,59,73,68,81,78,92,86,100,94,112,108,124,118,136,130,148].map((height, i) => (
                      <span key={i} className="min-w-0 flex-1 rounded-t-sm bg-gradient-to-t from-[#5f511e] to-[#d4af37] opacity-90" style={{ height }} />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-white/[0.05] pt-4 text-[10px] text-white/25">
                    <span>WEEK 01</span><span>WEEK 02</span><span>TODAY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#0b0b0c]/95 px-4 py-3 shadow-2xl backdrop-blur sm:-left-8">
            <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">Daily drawdown</p>
            <p className="mt-1 text-sm font-semibold text-white">Within limits <span className="text-emerald-300">✓</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
