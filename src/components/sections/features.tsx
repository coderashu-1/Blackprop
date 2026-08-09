const features = [
  ["Fast progression", "A focused evaluation journey with simple status visibility."],
  ["Rule transparency", "Keep objectives, drawdown limits, and account metrics easy to understand."],
  ["Premium dashboard", "Design language prepared for future statistics, certificates, and payouts."],
  ["Global-ready UI", "Responsive components that can expand into localization and multiple payment flows."],
  ["Trader-first UX", "Strong hierarchy, clear CTAs, and reduced visual noise across the funnel."],
  ["Scalable system", "Reusable sections and design tokens instead of a one-off landing page."],
];

export function Features() {
  return (
    <section id="why-blackprop">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="section-kicker">Why BlackProp</p>
          <h2 className="section-title mt-3">Built dark. Built sharp. <span className="metallic-text">Built to scale.</span></h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, text], index) => (
            <article key={title} className="rounded-[22px] border border-white/[0.07] bg-white/[0.02] p-6">
              <span className="grid size-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm font-semibold text-[var(--gold)]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/45">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
