import type { ReactNode } from "react";

const accountSizes = [
  "$5K",
  "$10K",
  "$25K",
  "$50K",
  "$100K",
  "$200K",
];

/* =========================================================
   ICONS
========================================================= */

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    >
      <path
        d="M4.5 15.5 15 5M8 5h7v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m4.5 10.4 3.3 3.3 7.7-7.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CapitalIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect
        x="2.8"
        y="5"
        width="14.4"
        height="10"
        rx="2.4"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <circle
        cx="10"
        cy="10"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <circle
        cx="10"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M13.8 6.2 17 3M14.4 3H17v2.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RewardIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path
        d="M6.3 4h7.4v3.4c0 3-1.4 4.7-3.7 4.7S6.3 10.4 6.3 7.4V4Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M6.3 6H3.5c0 2.6 1.2 3.9 3.4 4M13.7 6h2.8c0 2.6-1.2 3.9-3.4 4M10 12.2V15M7.5 17h5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M4 17 9 12l3.5 3L20 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M15.5 7H20v4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 3 19 6v5.6c0 4.2-2.7 7.4-7 9.4-4.3-2-7-5.2-7-9.4V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="m8.7 12 2 2 4.5-4.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CandlesIcon() {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M7 4v20M14 3v21M21 5v18"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity=".45"
      />

      <rect
        x="4.5"
        y="9"
        width="5"
        height="8"
        rx="1"
        fill="currentColor"
        fillOpacity=".8"
      />

      <rect
        x="11.5"
        y="6"
        width="5"
        height="11"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <rect
        x="18.5"
        y="11"
        width="5"
        height="7"
        rx="1"
        fill="currentColor"
        fillOpacity=".8"
      />
    </svg>
  );
}

/* =========================================================
   BENEFIT
========================================================= */

function Benefit({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5 sm:px-5">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E8C962]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[7px] font-black uppercase tracking-[0.18em] text-[#D4AF37]">
          {label}
        </p>

        <p className="mt-1 truncate text-[11px] font-bold text-white sm:text-xs">
          {value}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   DECORATIVE HERO GRAPHICS
========================================================= */

function HeroDecorations() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* =====================================================
          LEFT - CANDLESTICKS
      ====================================================== */}

      <div className="bp-float-one absolute left-[3.5%] top-[31%] hidden xl:block">
        <div className="relative grid h-14 w-14 place-items-center rounded-[17px] border border-[#D4AF37]/20 bg-[#080809]/90 text-[#D4AF37] shadow-[0_0_32px_rgba(212,175,55,.10)]">
          <CandlesIcon />

          <div className="absolute -inset-5 -z-10 rounded-full bg-[#D4AF37]/10 blur-2xl" />
        </div>
      </div>

      {/* =====================================================
          LEFT - TARGET
      ====================================================== */}

      <div className="bp-float-two absolute left-[10%] top-[54%] hidden lg:block">
        <div className="relative grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-[#080809]/80 text-[#F0D16A]">
          <TargetIcon />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,.8)]" />
        </div>
      </div>

      {/* =====================================================
          RIGHT - TREND
      ====================================================== */}

      <div className="bp-float-three absolute right-[5%] top-[30%] hidden xl:block">
        <div className="relative flex items-center gap-2 rounded-[14px] border border-[#D4AF37]/20 bg-[#080809]/90 px-3 py-2.5 text-[#E8C962] shadow-[0_0_35px_rgba(212,175,55,.08)]">
          <TrendIcon />

          <div>
            <p className="text-[6px] font-black uppercase tracking-[0.16em] text-[#D4AF37]">
              PERFORMANCE
            </p>

            <p className="mt-0.5 text-[9px] font-bold text-white">
              ON TRACK
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          RIGHT - RISK SHIELD
      ====================================================== */}

      <div className="bp-float-four absolute right-[10%] top-[57%] hidden lg:block">
        <div className="relative grid h-11 w-11 place-items-center rounded-[14px] border border-white/15 bg-[#080809]/90 text-white">
          <ShieldIcon />

          <div className="absolute -inset-4 -z-10 rounded-full bg-[#D4AF37]/[0.08] blur-xl" />
        </div>
      </div>

      {/* =====================================================
          BP GOLD NODE
      ====================================================== */}

      <div className="bp-float-five absolute right-[18%] top-[43%] hidden xl:grid">
        <div className="relative grid h-9 w-9 place-items-center rounded-full border border-[#D4AF37]/40 bg-[#0B0A07] text-[8px] font-black text-[#F2D46D] shadow-[0_0_25px_rgba(212,175,55,.20)]">
          BP

          <div className="absolute inset-[5px] rounded-full border border-[#D4AF37]/15" />
        </div>
      </div>

      {/* =====================================================
          LITTLE MARKET NETWORK - LEFT
      ====================================================== */}

      <div className="absolute left-[4%] top-[69%] hidden xl:flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

        <span className="h-px w-7 bg-gradient-to-r from-[#D4AF37]/45 to-white/10" />

        <span className="h-1 w-1 rounded-full bg-white/60" />

        <span className="h-px w-5 bg-white/10" />

        <span className="h-1.5 w-1.5 rounded-full border border-[#D4AF37]/70" />
      </div>

      {/* =====================================================
          LITTLE MARKET NETWORK - RIGHT
      ====================================================== */}

      <div className="absolute right-[4%] top-[70%] hidden xl:flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full border border-[#D4AF37]/70" />

        <span className="h-px w-5 bg-white/10" />

        <span className="h-1 w-1 rounded-full bg-white/60" />

        <span className="h-px w-7 bg-gradient-to-r from-white/10 to-[#D4AF37]/45" />

        <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
      </div>

      {/* =====================================================
          GLOWING MICRO DOTS
      ====================================================== */}

      <span className="bp-dot-pulse absolute left-[17%] top-[27%] hidden h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,.8)] md:block" />

      <span className="absolute left-[14%] top-[43%] hidden h-1 w-1 rounded-full bg-white/70 lg:block" />

      <span className="bp-dot-pulse absolute right-[16%] top-[25%] hidden h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,.8)] md:block [animation-delay:1.2s]" />

      <span className="absolute right-[14%] top-[48%] hidden h-1 w-1 rounded-full bg-white/70 lg:block" />

      <span className="absolute left-[22%] top-[63%] hidden h-1 w-1 rounded-full bg-[#D4AF37]/80 xl:block" />

      <span className="bp-dot-pulse absolute right-[22%] top-[65%] hidden h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,.6)] xl:block [animation-delay:2s]" />

      {/* =====================================================
          SMALL ORBIT RINGS
      ====================================================== */}

      <div className="absolute -left-14 top-[45%] hidden h-32 w-32 rounded-full border border-[#D4AF37]/[0.07] lg:block" />

      <div className="absolute -left-7 top-[49%] hidden h-20 w-20 rounded-full border border-white/[0.05] lg:block" />

      <div className="absolute -right-16 top-[41%] hidden h-36 w-36 rounded-full border border-[#D4AF37]/[0.07] lg:block" />

      <div className="absolute -right-8 top-[46%] hidden h-20 w-20 rounded-full border border-white/[0.05] lg:block" />
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

export function Hero() {
  return (
    <section
  id="home"
  className="relative isolate min-h-[calc(100svh-152px)] overflow-hidden bg-[#030303]"
>
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-30 bg-[#030303]" />

      {/* GOLD CENTER LIGHT */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] -z-20 h-[560px] w-[1000px] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,.085)_0%,rgba(212,175,55,.025)_36%,transparent_68%)]" />

      {/* SILVER/GOLD SIDE AMBIENCE */}
      <div className="pointer-events-none absolute -left-40 top-[40%] -z-20 h-72 w-72 rounded-full bg-[#D4AF37]/[0.025] blur-[90px]" />

      <div className="pointer-events-none absolute -right-40 top-[35%] -z-20 h-80 w-80 rounded-full bg-white/[0.018] blur-[100px]" />

      {/* TOP LINE */}
<div className="pointer-events-none absolute left-1/2 top-0 h-px w-[90%] max-w-[1250px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      {/* SUBTLE VERTICAL EDGES */}
      <div className="pointer-events-none absolute left-[7%] top-[26%] hidden h-[42%] w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent xl:block" />

      <div className="pointer-events-none absolute right-[7%] top-[26%] hidden h-[42%] w-px bg-gradient-to-b from-transparent via-white/[0.07] to-transparent xl:block" />

      {/* SMALL GRAPHICS */}
      <HeroDecorations />

      {/* =====================================================
          CONTENT
      ====================================================== */}

<div className="relative z-10 mx-auto flex min-h-[calc(100svh-152px)] w-full max-w-[1380px] flex-col px-4 pb-7 pt-6 sm:px-6 sm:pb-8 sm:pt-7 lg:px-8 lg:pt-8">        {/* =================================================
            MAIN HERO
        ================================================= */}

        <div className="mx-auto w-full max-w-[930px] text-center">
          {/* BADGE */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,.55)]" />

            <span className="text-[8px] font-black uppercase tracking-[0.19em] text-[#E8C962]">
              BUILT FOR SERIOUS TRADERS
            </span>
          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1 className="mx-auto mt-5 max-w-[900px] text-[2.8rem] font-black uppercase leading-[0.94] tracking-[-0.055em] text-white sm:text-[3.55rem] lg:text-[4.35rem] xl:text-[4.75rem]">
            TRADE WITH PURPOSE.

            <span className="mt-1 block bg-[linear-gradient(100deg,#FFF7D6_0%,#F0D674_35%,#D4AF37_68%,#A87D1D_100%)] bg-clip-text text-transparent">
              SCALE WITH CAPITAL.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-4 max-w-[640px] text-sm font-medium leading-6 text-white sm:text-base sm:leading-7">
            Prove your trading process, meet clear objectives,
            and earn the opportunity to trade with BlackProp
            capital.
          </p>

          {/* CTA */}

          <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <a
              href="#challenges"
              className="group relative inline-flex min-w-[190px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F5DD82_0%,#D4AF37_50%,#9B7115_100%)] px-6 py-3.5 text-xs font-black uppercase text-[#080806] shadow-[0_14px_40px_rgba(212,175,55,.17)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(212,175,55,.26)] sm:text-sm"
            >
              GET FUNDED

              <ArrowUpRight />

              <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/45 blur-md transition-all duration-700 group-hover:left-[125%]" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex min-w-[175px] items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] px-6 py-3.5 text-xs font-bold uppercase text-white transition duration-300 hover:border-[#D4AF37]/35 hover:bg-[#D4AF37]/10 sm:text-sm"
            >
              HOW IT WORKS
            </a>
          </div>

          {/* MARKET LINE */}

          <div className="mt-5 flex items-center justify-center gap-4 sm:gap-6">
            {[
              "FOREX",
              "FUTURES",
              "CRYPTO",
            ].map((market, index) => (
              <div
                key={market}
                className="flex items-center gap-4 sm:gap-6"
              >
                {index !== 0 && (
                  <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
                )}

                <span className="text-[8px] font-black uppercase tracking-[0.16em] text-white sm:text-[9px]">
                  {market}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            BENEFITS
        ================================================= */}

        <div className="mx-auto mt-7 w-full max-w-[980px]">
          <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#080809] shadow-[0_18px_50px_rgba(0,0,0,.20)]">
            <div className="absolute left-1/2 top-0 h-px w-[36%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/65 to-transparent" />

            <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <Benefit
                icon={<CapitalIcon />}
                label="CAPITAL"
                value="Up to $200K"
              />

              <Benefit
                icon={<TargetIcon />}
                label="OBJECTIVES"
                value="Clear evaluation structure"
              />

              <Benefit
                icon={<RewardIcon />}
                label="REWARDS"
                value="Up to 90% profit split"
              />
            </div>
          </div>
        </div>

        {/* =================================================
            CAPITAL SELECTOR
        ================================================= */}

        <div className="mx-auto mt-3 w-full max-w-[980px]">
          <div className="flex flex-col items-center justify-between gap-3 rounded-[17px] border border-white/10 bg-white/[0.035] px-4 py-3 sm:px-5 lg:flex-row">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E8C962]">
                <CheckIcon />
              </span>

              <div className="text-left">
                <p className="text-[7px] font-black uppercase tracking-[0.18em] text-[#D4AF37]">
                  CHOOSE YOUR CAPITAL
                </p>

                <p className="mt-0.5 text-[10px] font-semibold text-white">
                  Find the account size that fits your approach.
                </p>
              </div>
            </div>

            <div className="grid w-full grid-cols-6 gap-1.5 lg:w-auto">
              {accountSizes.map((size, index) => (
                <a
                  key={size}
                  href="#challenges"
                  className={`rounded-lg border px-2 py-2 text-center text-[8px] font-black transition sm:px-3 sm:text-[9px] ${
                    index === 4
                      ? "border-[#D4AF37]/40 bg-[#D4AF37]/15 text-[#F0D16A]"
                      : "border-white/15 bg-[#0B0B0C] text-white hover:border-[#D4AF37]/35 hover:bg-[#D4AF37]/10"
                  }`}
                >
                  {size}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM TAGLINE
        ================================================= */}

        <div className="mx-auto mt-5 flex w-full max-w-[980px] items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

          <p className="shrink-0 text-[8px] font-black uppercase tracking-[0.18em] text-white">
            YOUR SKILL
            <span className="mx-2 text-[#D4AF37]">
              •
            </span>
            OUR CAPITAL
          </p>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* DISCLAIMER */}

        <p className="mx-auto mt-3 max-w-2xl text-center text-[8px] leading-4 text-white/75">
          Capital sizes, profit splits and program details shown
          are preview content until BlackProp&apos;s final terms are
          confirmed.
        </p>
      </div>

      {/* =====================================================
          ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes bpHeroFloatOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(-4deg);
          }

          50% {
            transform: translate3d(0, -10px, 0) rotate(-1deg);
          }
        }

        @keyframes bpHeroFloatTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(4px, -8px, 0);
          }
        }

        @keyframes bpHeroFloatThree {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(2deg);
          }

          50% {
            transform: translate3d(0, -9px, 0) rotate(0deg);
          }
        }

        @keyframes bpHeroFloatFour {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-4px, -7px, 0);
          }
        }

        @keyframes bpHeroFloatFive {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -6px, 0);
          }
        }

        @keyframes bpDotPulse {
          0%, 100% {
            opacity: 0.45;
            transform: scale(0.82);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .bp-float-one {
          animation: bpHeroFloatOne 6.5s ease-in-out infinite;
        }

        .bp-float-two {
          animation: bpHeroFloatTwo 7.2s ease-in-out infinite;
        }

        .bp-float-three {
          animation: bpHeroFloatThree 6.8s ease-in-out infinite;
        }

        .bp-float-four {
          animation: bpHeroFloatFour 7.8s ease-in-out infinite;
        }

        .bp-float-five {
          animation: bpHeroFloatFive 5.8s ease-in-out infinite;
        }

        .bp-dot-pulse {
          animation: bpDotPulse 3.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .bp-float-one,
          .bp-float-two,
          .bp-float-three,
          .bp-float-four,
          .bp-float-five,
          .bp-dot-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}