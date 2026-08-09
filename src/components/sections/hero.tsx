import { RatingCard } from "@/components/ui/rating-card";

const accountSizes = [
  "$5K",
  "$10K",
  "$25K",
  "$50K",
  "$100K",
  "$200K",
];

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    >
      <path
        d="M4 12L12 4M6.5 4H12v5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.25 6.4 11l6.1-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M5.7 8.4c0-2.6 1.45-4.4 4.3-4.4s4.3 1.8 4.3 4.4v2.1l1.2 2H4.5l1.2-2V8.4Z"
        fill="currentColor"
      />

      <path
        d="M8.2 14.4c.25.95.85 1.45 1.8 1.45s1.55-.5 1.8-1.45"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BlackPropCoin({
  size = "large",
}: {
  size?: "small" | "medium" | "large";
}) {
  const dimensions = {
    small: "h-20 w-20",
    medium: "h-28 w-28",
    large:
      "h-[190px] w-[190px] sm:h-[220px] sm:w-[220px]",
  };

  return (
    <div
      className={`relative ${dimensions[size]} shrink-0 rounded-full`}
    >
      {/* OUTER GLOW */}
      <div className="absolute -inset-6 rounded-full bg-[#D4AF37]/10 blur-2xl" />

      {/* COIN BODY */}
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_35deg,#6E5110,#F6DA79,#8D6816,#FFF0A7,#A37B1D,#6F5110,#F6D979)] p-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.65),0_0_30px_rgba(212,175,55,0.18)]">

        <div className="relative h-full w-full rounded-full bg-[radial-gradient(circle_at_35%_25%,#343434_0%,#161616_48%,#080808_100%)] p-[7px]">

          {/* INNER METAL RING */}
          <div className="absolute inset-[7px] rounded-full border border-[#E8C65C]/50" />

          <div className="absolute inset-[13px] rounded-full border border-white/[0.08]" />

          {/* MONOGRAM */}
          <div className="absolute inset-0 grid place-items-center">

            <div className="relative flex items-center tracking-[-0.12em]">

              <span className="bg-[linear-gradient(145deg,#FFF0A5,#D5AA35_45%,#8D6514)] bg-clip-text text-[54px] font-black leading-none text-transparent drop-shadow-[0_6px_10px_rgba(0,0,0,0.65)] sm:text-[65px]">
                B
              </span>

              <span className="-ml-1 bg-[linear-gradient(145deg,#FFF0A5,#D5AA35_45%,#8D6514)] bg-clip-text text-[54px] font-black leading-none text-transparent drop-shadow-[0_6px_10px_rgba(0,0,0,0.65)] sm:text-[65px]">
                P
              </span>

            </div>
          </div>

          {/* COIN SHINE */}
          <div className="absolute left-[22%] top-[12%] h-[35%] w-[15%] rotate-[32deg] rounded-full bg-white/[0.09] blur-xl" />

        </div>
      </div>

      {/* EDGE DEPTH */}
      <div className="absolute inset-x-[14%] -bottom-[5px] h-[10px] rounded-[50%] bg-[#60460D]/60 blur-[3px]" />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">

      {/* LARGE BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.075] blur-[130px]" />

      {/* BACKGROUND DIAGONAL LINES */}
      <div className="pointer-events-none absolute inset-x-0 top-[33%] h-[360px] overflow-hidden">

        <div className="absolute -left-[20%] top-24 h-px w-[145%] -rotate-[17deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

        <div className="absolute -left-[20%] top-44 h-px w-[145%] -rotate-[17deg] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

        <div className="absolute -left-[20%] top-64 h-px w-[145%] -rotate-[17deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        <div className="absolute -left-[10%] top-60 h-px w-[130%] rotate-[14deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* LEFT FLOATING COIN */}
      <div className="absolute left-[2%] top-[23%] hidden -rotate-[16deg] lg:block">
        <div className="scale-[0.82] opacity-80">
          <BlackPropCoin size="small" />
        </div>
      </div>

      {/* RIGHT FLOATING COIN */}
      <div className="absolute right-[2%] top-[53%] hidden rotate-[18deg] xl:block">
        <div className="scale-[0.62] opacity-60">
          <BlackPropCoin size="small" />
        </div>
      </div>

      {/* FLOATING PAYOUT BADGE */}
      <div className="absolute -left-3 top-[52%] z-20 hidden rounded-2xl border border-white/[0.09] bg-[#0A0A0B]/90 px-4 py-3 shadow-[0_25px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl md:block xl:left-2">

        <div className="flex items-center gap-3">

          <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400/10 text-emerald-400">
            <CheckIcon />
          </div>

          <div>
            <div className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/25">
              Payout status
            </div>

            <div className="mt-1 text-[11px] font-semibold text-white/85">
              Approved
            </div>
          </div>

        </div>
      </div>

      {/* FLOATING PROFIT SPLIT */}
      <div className="absolute right-0 top-[20%] z-20 hidden rounded-2xl border border-[#D4AF37]/15 bg-[#0B0B0C]/90 px-4 py-3 shadow-[0_25px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl md:block xl:right-3">

        <div className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/25">
          Profit split
        </div>

        <div className="mt-1 flex items-baseline gap-1.5">
          <span className="text-xl font-bold text-[#F0D16E]">
            90%
          </span>

          <span className="text-[9px] text-white/30">
            to trader
          </span>
        </div>

      </div>

      {/* PHONE */}
      <div className="relative z-10 mx-auto w-[290px] sm:w-[340px] lg:w-[365px]">

        {/* PHONE SHADOW */}
        <div className="absolute inset-x-8 bottom-0 h-24 translate-y-6 rounded-full bg-black blur-[45px]" />

        {/* OUTER PHONE */}
        <div className="relative aspect-[0.53/1] rounded-[52px] bg-[linear-gradient(135deg,#777_0%,#161616_12%,#050505_50%,#5A5A5A_90%,#111_100%)] p-[3px] shadow-[0_35px_100px_rgba(0,0,0,0.78),0_0_35px_rgba(255,255,255,0.05)] sm:rounded-[58px]">

          {/* INNER FRAME */}
          <div className="relative h-full overflow-hidden rounded-[49px] border border-white/[0.06] bg-black sm:rounded-[55px]">

            {/* SCREEN LIGHT */}
            <div className="pointer-events-none absolute left-1/2 top-[24%] h-80 w-80 -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.055] blur-[90px]" />

            {/* PHONE GRID */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* DYNAMIC ISLAND */}
            <div className="absolute left-1/2 top-3 h-6 w-[31%] -translate-x-1/2 rounded-full bg-[#050505] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.025)]">

              <div className="absolute right-3 top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[#111B2A] shadow-[0_0_4px_#314B77]" />

            </div>

            {/* TOP LABEL */}
            <div className="relative z-10 pt-12 text-center sm:pt-14">

              <div className="text-[11px] font-bold tracking-[0.08em] text-[#D4AF37] sm:text-xs">
                BLACKPROP
              </div>

              <div className="mx-auto mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.035] px-3 py-1.5 text-[8px] font-medium text-white/28 sm:text-[9px]">

                <BellIcon />

                Payout Ready

              </div>

            </div>

            {/* COIN */}
            <div className="relative z-10 mt-8 flex justify-center sm:mt-10">
              <BlackPropCoin size="large" />
            </div>

            {/* BALANCE */}
            <div className="relative z-10 mt-8 text-center sm:mt-10">

              <p className="text-[11px] font-medium text-white/42 sm:text-xs">
                Trading Account Balance
              </p>

              <p className="mt-2 text-[38px] font-black tracking-[-0.055em] text-white sm:text-[48px]">
                $207,500
              </p>

              <div className="mt-1 inline-flex items-center gap-1.5 text-[9px] font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                +7.50% this cycle
              </div>

            </div>

            {/* WITHDRAW BUTTON */}
            <div className="relative z-10 mt-7 flex justify-center sm:mt-8">

              <button
                type="button"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-bold text-black shadow-[0_12px_30px_rgba(255,255,255,0.08)] transition hover:scale-[1.03] sm:px-7 sm:text-xs"
              >
                Withdraw Profits

                <ArrowUpRight />
              </button>

            </div>

            {/* SMALL STATS */}
            <div className="relative z-10 mx-5 mt-8 grid grid-cols-2 gap-2 sm:mx-6">

              <div className="rounded-xl border border-white/[0.055] bg-white/[0.025] px-3 py-2.5 text-left">
                <div className="text-[7px] uppercase tracking-[0.15em] text-white/20">
                  Total profit
                </div>

                <div className="mt-1 text-[11px] font-semibold text-white/75">
                  +$7,500
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.055] bg-white/[0.025] px-3 py-2.5 text-left">
                <div className="text-[7px] uppercase tracking-[0.15em] text-white/20">
                  Profit split
                </div>

                <div className="mt-1 text-[11px] font-semibold text-[#E8C866]">
                  90%
                </div>
              </div>

            </div>

            {/* PAYOUT NOTIFICATION */}
            <div className="absolute inset-x-4 bottom-6 z-20 rounded-2xl border border-white/[0.09] bg-[#E3E3E3] p-3 text-black shadow-[0_18px_50px_rgba(0,0,0,0.5)] sm:inset-x-5 sm:bottom-7">

              <div className="flex items-center gap-3">

                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#080808] text-[10px] font-black text-[#E8C866]">
                  BP
                </div>

                <div className="min-w-0 flex-1">

                  <div className="flex items-center justify-between gap-2">

                    <span className="text-[10px] font-bold sm:text-[11px]">
                      Payout Received
                    </span>

                    <span className="text-[8px] text-black/40">
                      Now
                    </span>

                  </div>

                  <p className="mt-0.5 truncate text-[9px] text-black/65 sm:text-[10px]">
                    $7,500 has been approved for withdrawal.
                  </p>

                </div>

              </div>

            </div>

            {/* BOTTOM FADE */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* NOTIFICATION NEEDS TO REMAIN ABOVE FADE */}
            <div className="pointer-events-none absolute inset-x-[20%] top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          </div>

          {/* PHONE SIDE BUTTONS */}
          <div className="absolute -left-[3px] top-[23%] h-10 w-[3px] rounded-l bg-[#353535]" />

          <div className="absolute -left-[3px] top-[32%] h-16 w-[3px] rounded-l bg-[#353535]" />

          <div className="absolute -right-[3px] top-[30%] h-20 w-[3px] rounded-r bg-[#353535]" />

        </div>
      </div>

      {/* BOTTOM REFLECTION */}
      <div className="pointer-events-none mx-auto mt-5 h-7 w-[280px] rounded-[50%] bg-[#D4AF37]/[0.05] blur-xl" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#030303] pt-48 sm:pt-52 lg:pt-56"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[#030303]" />

      {/* GOLD GLOW */}
      <div className="pointer-events-none absolute left-[55%] top-[300px] -z-20 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.055] blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 top-80 -z-20 h-96 w-96 rounded-full bg-white/[0.02] blur-[110px]" />

      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 82%)",
        }}
      />

      <div className="mx-auto max-w-[1440px] px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">

        <div className="grid items-center gap-16 lg:min-h-[780px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-16">

          {/* LEFT CONTENT */}
          <div className="relative z-20">

            {/* TRUST LINE */}
            <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/38">

              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37]">
                  ◆
                </span>

                Built for serious traders
              </div>

              <span className="hidden h-3 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2">
                <span className="text-[#E7C65D]">
                  ★
                </span>

                Trader-first experience
              </div>

            </div>

            {/* HEADLINE */}
            <h1 className="max-w-[760px] text-[3.5rem] font-black uppercase leading-[0.89] tracking-[-0.065em] text-white sm:text-[4.6rem] lg:text-[4.7rem] xl:text-[5.7rem]">

              Your skill.

              <span className="block bg-[linear-gradient(105deg,#FFFFFF_0%,#D5D5D5_30%,#F3D978_68%,#9A7116_100%)] bg-clip-text text-transparent">
                Our capital.
              </span>

              <span className="block">
                No limits.
              </span>

            </h1>

            {/* SUBTEXT */}
            <p className="mt-7 max-w-[590px] text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Turn consistent trading performance into
              access to serious capital. Trade{" "}
              <span className="font-semibold text-white/72">
                Forex, Futures and Crypto
              </span>{" "}
              with BlackProp and scale your edge.
            </p>

            {/* KEY BENEFITS */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

              {[
                "Up to $200K capital",
                "Simple evaluation rules",
                "Up to 90% profit split",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-white/42"
                >

                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                    <CheckIcon />
                  </span>

                  {item}

                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#challenges"
                className="group relative inline-flex min-w-[190px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F7DE83_0%,#D4AF37_45%,#9D7416_100%)] px-6 py-4 text-sm font-bold text-[#050505] shadow-[0_18px_55px_rgba(212,175,55,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(212,175,55,0.28)]"
              >
                Get Funded

                <ArrowUpRight />

                <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/40 blur-md transition-all duration-700 group-hover:left-[125%]" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex min-w-[175px] items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.025] px-6 py-4 text-sm font-semibold text-white/72 transition hover:border-white/[0.18] hover:bg-white/[0.055] hover:text-white"
              >
                How It Works
              </a>

            </div>

            {/* ACCOUNT SIZES */}
            <div className="mt-9">

              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-white/22">
                Choose your capital
              </p>

              <div className="flex flex-wrap gap-2">

                {accountSizes.map((size, index) => (
                  <a
                    key={size}
                    href="#challenges"
                    className={`rounded-lg border px-3.5 py-2 text-[11px] font-semibold transition ${
                      index === 4
                        ? "border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#E8C866]"
                        : "border-white/[0.07] bg-white/[0.02] text-white/38 hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/[0.05] hover:text-white/75"
                    }`}
                  >
                    {size}
                  </a>
                ))}

              </div>

            </div>

            {/* REVIEWS */}
            <div className="mt-10">

              <div className="mb-3 flex items-center gap-3">

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/22">
                  Trader feedback
                </span>

                <div className="h-px w-16 bg-white/[0.06]" />

              </div>

              <div className="flex flex-col gap-2.5 sm:flex-row">

                {/*
                  Demo values only.
                  Replace with verified reviews before production.
                */}

                <RatingCard
                  name="Community Rating"
                  score={4.8}
                  detail="Demo review data"
                  badge="BP"
                  tone="gold"
                />

                <RatingCard
                  name="Trader Experience"
                  score={4.7}
                  detail="Demo review data"
                  badge="TX"
                  tone="silver"
                />

              </div>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative z-10">
            <PhoneMockup />
          </div>

        </div>
        
      </div>
    </section>
  );
}