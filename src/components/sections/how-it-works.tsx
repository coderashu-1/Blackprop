const steps = [
  { no: "01", title: "Choose a challenge", text: "Pick an account size and evaluation model that matches your trading style." },
  { no: "02", title: "Prove consistency", text: "Trade inside the rules and reach the objective without rushing the process." },
  { no: "03", title: "Unlock funding", text: "Complete the evaluation and move into the next stage of your BlackProp journey." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="section-kicker">How it works</p>
            <h2 className="section-title mt-3">From evaluation to <span className="metallic-text">funded.</span></h2>
            <p className="section-copy mt-5">The first BlackProp frontend milestone focuses on a simple customer journey and reusable sections.</p>
          </div>
          <div className="grid gap-3">
            {steps.map((step) => (
              <div key={step.no} className="group grid gap-4 rounded-[22px] border border-white/[0.07] bg-black/20 p-5 transition hover:border-white/15 sm:grid-cols-[70px_1fr] sm:p-6">
                <div className="text-sm font-medium text-[var(--gold)]">{step.no}</div>
                <div><h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{step.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/45">{step.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
