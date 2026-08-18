export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-152px)] overflow-hidden bg-[#030303]"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[#030303]" />

      {/* SOFT CENTER GOLD GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] -z-20 h-[620px] w-[1000px] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,.09)_0%,rgba(212,175,55,.025)_38%,transparent_70%)]" />

      {/* VERY SUBTLE SIDE LIGHT */}
      <div className="pointer-events-none absolute -left-48 top-1/3 -z-20 h-96 w-96 rounded-full bg-[#D4AF37]/[0.025] blur-[120px]" />

      <div className="pointer-events-none absolute -right-48 top-1/3 -z-20 h-96 w-96 rounded-full bg-white/[0.015] blur-[120px]" />

      {/* TOP GOLD LINE */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[90%] max-w-[1250px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-152px)] w-full max-w-[1380px] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[950px] text-center">
          {/* BADGE */}
          <div className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] px-4 py-2">
            <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#E8C962] sm:text-[9px]">
              BUILT FOR SERIOUS TRADERS
            </span>
          </div>

          {/* HEADING */}
          <h1 className="mx-auto mt-6 max-w-[930px] text-[2.9rem] font-black uppercase leading-[0.93] tracking-[-0.055em] text-white sm:text-[4rem] lg:text-[5rem] xl:text-[5.35rem]">
            PROVE YOUR EDGE

            <span className="mt-2 block bg-[linear-gradient(100deg,#FFF7D6_0%,#F0D674_35%,#D4AF37_68%,#A87D1D_100%)] bg-clip-text text-transparent">
              We WILL BACK IT.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-[650px] text-sm font-medium leading-7 text-white/70 sm:text-base sm:leading-8">
            Prove your trading process, meet clear objectives, and earn the
            opportunity to trade with BlackProp capital.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#challenges"
              className="group relative inline-flex min-w-[190px] items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F5DD82_0%,#D4AF37_50%,#9B7115_100%)] px-7 py-4 text-xs font-black uppercase tracking-[0.04em] text-[#080806] shadow-[0_15px_45px_rgba(212,175,55,.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(212,175,55,.25)] sm:text-sm"
            >
              GET FUNDED

              <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/40 blur-md transition-all duration-700 group-hover:left-[125%]" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex min-w-[190px] items-center justify-center rounded-xl border border-white/15 bg-white/[0.035] px-7 py-4 text-xs font-bold uppercase tracking-[0.04em] text-white transition-all duration-300 hover:border-[#D4AF37]/35 hover:bg-[#D4AF37]/[0.07] sm:text-sm"
            >
              HOW IT WORKS
            </a>
          </div>

          {/* MINIMAL BOTTOM DETAIL */}
          <div className="mx-auto mt-12 flex max-w-[520px] items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/20" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]/70" />

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}