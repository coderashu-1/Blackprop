const plans = [
  { size: "$25K", price: "$149", popular: false },
  { size: "$50K", price: "$249", popular: true },
  { size: "$100K", price: "$449", popular: false },
  { size: "$200K", price: "$799", popular: false },
];

export function Challenges() {
  return (
    <section id="challenges" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Choose your account</p>
          <h2 className="section-title mt-3">A clear challenge. <span className="metallic-text">A bigger opportunity.</span></h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">Starter pricing and rules are placeholders for now. The component system is ready for your final challenge models.</p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.025] p-1 text-sm">
            <button className="rounded-full bg-white px-4 py-2 font-medium text-black">2-Step</button>
            <button className="px-4 py-2 text-white/45">1-Step</button>
            <button className="px-4 py-2 text-white/45">Instant</button>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.size} className={`relative rounded-[24px] border p-6 ${plan.popular ? "border-[var(--gold)]/45 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),rgba(255,255,255,0.02))]" : "border-white/[0.07] bg-white/[0.025]"}`}>
              {plan.popular && <span className="absolute right-5 top-5 rounded-full bg-[var(--gold)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-black">Popular</span>}
              <p className="text-sm text-white/40">Account size</p>
              <p className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white">{plan.size}</p>
              <div className="my-6 h-px bg-white/[0.07]" />
              <div className="grid gap-3 text-sm text-white/55">
                <div className="flex justify-between"><span>Profit target</span><span className="text-white">8%</span></div>
                <div className="flex justify-between"><span>Daily drawdown</span><span className="text-white">5%</span></div>
                <div className="flex justify-between"><span>Max drawdown</span><span className="text-white">10%</span></div>
                <div className="flex justify-between"><span>Profit split</span><span className="text-white">Up to 90%</span></div>
              </div>
              <div className="mt-7 flex items-end justify-between">
                <div><span className="text-xs text-white/35">From</span><p className="text-2xl font-semibold text-white">{plan.price}</p></div>
                <a href="#" className={plan.popular ? "gold-button rounded-full px-4 py-2.5 text-xs font-semibold text-black" : "glass-button rounded-full px-4 py-2.5 text-xs font-medium text-white"}>Start</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
