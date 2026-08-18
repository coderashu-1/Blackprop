/* =========================================================
   BLACKPROP SVG LOGO MARK
   BLACK / WHITE ONLY
========================================================= */

function BPMark({
  width = 58,
  height = 74,
  color = "#FFFFFF",
  className = "",
}: {
  width?: number | string;
  height?: number | string;
  color?: "#000000" | "#FFFFFF";
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 290 366"
      fill="none"
      color={color}
      className={className}
      shapeRendering="geometricPrecision"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M28 0H196C244 0 278 48 278 105C278 130 271 150 256 172C277 190 289 213 289 241V267C289 319 249 365 195 365H90V237H161C201 237 230 202 230 168V139C230 104 207 78 177 78H0V25C0 11 12 0 28 0Z"
      />

      <path
        fill="currentColor"
        d="M0 129H157C171 129 181 141 181 156C181 171 171 183 157 183H41V365C18 365 0 352 0 335V129Z"
      />
    </svg>
  );
}

/* =========================================================
   ICONS
========================================================= */

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="m4 9.2 3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3.5 10h12M11.5 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   JOURNEY DATA
========================================================= */

const journey = [
  {
    number: "01",
    label: "Setup",
    title: "Choose your route",
    description:
      "Pick the challenge, account size and trading setup that fits you.",
    details: [
      "Choose your challenge model",
      "Select your account size",
      "Pick your trading environment",
    ],
  },
  {
    number: "02",
    label: "Execution",
    title: "Prove your process",
    description:
      "Trade within the program rules and show consistent, controlled execution.",
    details: [
      "Follow defined risk objectives",
      "Trade within program rules",
      "Complete required milestones",
    ],
  },
  {
    number: "03",
    label: "Progression",
    title: "Unlock the next stage",
    description:
      "Complete the required objectives and move toward reward eligibility.",
    details: [
      "Progress through your account",
      "Build a consistent track record",
      "Reach reward eligibility",
    ],
  },
];

/* =========================================================
   MAIN
========================================================= */

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#FBFAF7] py-14 text-[#080808] sm:py-16 lg:py-20 xl:py-24"
    >
      {/* =====================================================
          LOCAL ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes bpFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bpFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes bpShine {
          0% {
            transform: translateX(-160%);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          70% {
            opacity: 0.75;
          }
          100% {
            transform: translateX(260%);
            opacity: 0;
          }
        }

        .bp-step-card {
          opacity: 0;
          animation: bpFadeUp 0.7s cubic-bezier(.2,.75,.25,1) forwards;
        }

        .bp-logo-float {
          animation: bpFloat 4s ease-in-out infinite;
        }

        .bp-shine {
          animation: bpShine 5.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .bp-step-card,
          .bp-logo-float,
          .bp-shine {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          SIMPLE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[150px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.19em] text-[#916B17] sm:text-[11px] lg:text-[12px]">
            How it works
          </p>

          <h2 className="mt-4 text-[2.8rem] font-black leading-[0.95] tracking-[-0.055em] text-[#080808] sm:text-[3.8rem] md:text-[4.3rem] lg:text-[4.7rem] xl:text-[5rem]">
            Three steps.
            <span className="block text-[#B48723]">
              One clear path.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[13px] font-medium leading-6 text-black/50 sm:text-[15px] sm:leading-7 lg:text-base">
            Choose your setup, trade with discipline and progress through the
            BlackProp journey.
          </p>
        </div>

        {/* =====================================================
            STEP CARDS
        ====================================================== */}

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3 lg:gap-5 xl:mt-14">
          {journey.map((item, index) => (
            <article
              key={item.number}
              className="bp-step-card group relative overflow-hidden rounded-[24px] border border-black/[0.07] bg-white p-5 shadow-[0_18px_55px_rgba(45,34,10,.045)] transition-all duration-500 hover:-translate-y-1 hover:border-black/[0.12] hover:shadow-[0_28px_70px_rgba(45,34,10,.09)] sm:rounded-[28px] sm:p-6 lg:min-h-[390px] lg:p-7 xl:p-8"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* animated top highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
                <div
                  className="bp-shine h-full w-28 bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent"
                  style={{
                    animationDelay: `${index * 0.7}s`,
                  }}
                />
              </div>

              {/* number + B/W logo */}
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#0B0B0B] text-[12px] font-black text-white transition-transform duration-500 group-hover:scale-105 sm:h-12 sm:w-12 sm:text-[13px]">
                  {item.number}
                </div>

                {/* LOGO: BLACK + WHITE ONLY */}
                <div className="bp-logo-float grid h-10 w-10 place-items-center rounded-xl bg-[#0A0A0A] shadow-[0_8px_22px_rgba(0,0,0,.10)]">
                  <BPMark
                    width={14}
                    height={18}
                    color="#FFFFFF"
                  />
                </div>
              </div>

              {/* content */}
              <div className="mt-7">
                <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#916B17] sm:text-[10px] lg:text-[11px]">
                  {item.label}
                </p>

                <h3 className="mt-2.5 text-[1.7rem] font-black leading-[1] tracking-[-0.045em] text-[#090909] transition-colors duration-300 sm:text-[1.95rem] lg:text-[2.1rem]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] font-medium leading-6 text-black/50 sm:text-[14px] lg:text-[15px] lg:leading-7">
                  {item.description}
                </p>
              </div>

              {/* details */}
              <div className="mt-6 space-y-3 border-t border-black/[0.06] pt-5 lg:mt-7 lg:pt-6">
                {item.details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-center gap-2.5"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-[1.04]">
                      <CheckIcon />
                    </span>

                    <span className="text-[11px] font-semibold leading-5 text-black/58 sm:text-[12px] lg:text-[13px]">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* very subtle bottom glow */}
              <div className="pointer-events-none absolute bottom-[-80px] right-[-70px] h-[150px] w-[150px] rounded-full bg-[#D4AF37]/[0.035] blur-[45px] transition duration-500 group-hover:bg-[#D4AF37]/[0.07]" />
            </article>
          ))}
        </div>

        {/* =====================================================
            SIMPLE CTA
        ====================================================== */}

        <div className="mt-5 flex flex-col gap-5 overflow-hidden rounded-[22px] border border-black/[0.07] bg-[#0B0B0B] px-5 py-6 text-white shadow-[0_18px_50px_rgba(0,0,0,.08)] sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-7 lg:px-8">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.17em] text-white/45 sm:text-[10px] lg:text-[11px]">
              Ready to begin?
            </p>

            <p className="mt-2 text-[1.25rem] font-black tracking-[-0.035em] text-white sm:text-[1.45rem] lg:text-[1.6rem]">
              Start your BlackProp journey.
            </p>
          </div>

          <a
            href="#challenges"
            className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-[13px] font-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F2F2F2] hover:shadow-[0_10px_30px_rgba(255,255,255,.08)] sm:w-auto sm:min-w-[165px] sm:text-[14px] lg:min-h-[56px] lg:text-[15px]"
          >
            Get Funded
            <ArrowRight />
          </a>
        </div>

        {/* disclaimer */}
        <p className="mx-auto mt-5 max-w-3xl text-center text-[9px] font-medium leading-5 text-black/35 sm:text-[10px] lg:text-[11px]">
          Challenge structure, progression and reward eligibility are subject
          to the final rules and terms of the selected BlackProp program.
        </p>
      </div>
    </section>
  );
}