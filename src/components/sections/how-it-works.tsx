/* =========================================================
   BLACKPROP SVG LOGO MARK
========================================================= */

function BPMark({
  width = 58,
  height = 74,
  color = "#FFFFFF",
  className = "",
}: {
  width?: number | string;
  height?: number | string;
  color?: string;
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
   SMALL ICONS
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
    label: "SETUP",
    title: "Choose Your Route",
    description:
      "Build the BlackProp challenge configuration that matches the way you want to trade.",
    details: [
      "Choose your challenge model",
      "Select your account size",
      "Pick your trading environment",
    ],
  },
  {
    number: "02",
    label: "EXECUTION",
    title: "Prove Your Process",
    description:
      "Trade within your selected program objectives and demonstrate controlled, disciplined execution.",
    details: [
      "Follow defined risk objectives",
      "Trade within program rules",
      "Complete required milestones",
    ],
  },
  {
    number: "03",
    label: "PROGRESSION",
    title: "Unlock The Next Stage",
    description:
      "Successful progression moves you further through the BlackProp journey and toward reward eligibility.",
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
      className="relative overflow-hidden bg-[#FBFAF7] py-14 text-[#080808] sm:py-18 md:py-20 lg:py-24 xl:py-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[170px]" />

      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3.5">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[#0A0A0B] px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,.08)]">
                <BPMark
                  width={18}
                  height={23}
                  color="#FFFFFF"
                  className="shrink-0"
                />

                <span className="text-[14px] font-bold leading-none tracking-[-0.035em] text-white sm:text-[15px]">
                  BlackProp
                </span>
              </div>

              <span className="hidden text-[11px] font-black uppercase tracking-[0.18em] text-[#8D6816] sm:inline">
                THE JOURNEY
              </span>
            </div>

            <h2 className="mt-6 max-w-[800px] text-[3.25rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#080808] sm:text-[4.15rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.35rem]">
              ONE CLEAR PATH.
              <span className="block text-[#B78A22]">
                BUILT TO PROGRESS.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[520px] text-[15px] font-medium leading-7 text-black/62 sm:text-[17px] sm:leading-8 lg:ml-auto">
              Choose the setup that fits you, execute with discipline and
              progress toward the next stage through one simple BlackProp
              journey.
            </p>
          </div>
        </div>

        {/* =====================================================
            SINGLE JOURNEY DIV
        ====================================================== */}

        <div className="relative mt-10 overflow-hidden rounded-[26px] border border-black/[0.08] bg-white shadow-[0_30px_90px_rgba(44,34,11,.06)] sm:mt-12 sm:rounded-[34px] lg:mt-14">
          {/* TOP GOLD LINE */}
          <div className="absolute inset-x-[16%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/65 to-transparent" />

          {/* SOFT GLOW */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#D4AF37]/[0.055] blur-[95px]" />

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-[0.36fr_0.64fr] xl:grid-cols-[0.34fr_0.66fr]">
            {/* =================================================
                LEFT BRAND PANEL
            ================================================= */}

            <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden border-b border-black/[0.07] bg-[#0A0A0B] p-6 text-white sm:min-h-[420px] sm:p-8 lg:min-h-[590px] lg:border-b-0 lg:border-r lg:p-9 xl:p-10">
              <div className="pointer-events-none absolute -left-20 bottom-[-120px] h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[90px]" />

              <div className="pointer-events-none absolute right-[-30px] top-1/2 -translate-y-1/2">
                <BPMark
                  width={180}
                  height={228}
                  color="#FFFFFF"
                  className="opacity-[0.04]"
                />
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-3 rounded-[18px] border border-white/[0.10] bg-white/[0.045] px-4 py-3.5">
                  <BPMark
                    width={26}
                    height={33}
                    color="#FFFFFF"
                    className="shrink-0"
                  />

                  <span className="text-[18px] font-bold tracking-[-0.04em] text-white">
                    BlackProp
                  </span>
                </div>

                <p className="mt-7 text-[11px] font-black uppercase tracking-[0.18em] text-white/50">
                  BLACKPROP PROCESS
                </p>

                <h3 className="mt-3 max-w-[330px] text-[2.35rem] font-black uppercase leading-[0.96] tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3rem]">
                  SIMPLE BY DESIGN.
                </h3>

                <p className="mt-5 max-w-[340px] text-[15px] font-medium leading-7 text-white/62 sm:text-base">
                  One connected journey from selecting your account to
                  demonstrating performance and progressing further.
                </p>
              </div>

              <div className="relative mt-10">
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {["Choose", "Perform", "Progress"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-[12px] font-semibold text-white/78 sm:text-[13px]"
                    >
                      <span className="text-white">
                        <CheckIcon />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT JOURNEY CONTENT
            ================================================= */}

            <div className="relative">
              {journey.map((item, index) => (
                <div
                  key={item.number}
                  className={`relative grid gap-5 px-5 py-7 sm:px-7 sm:py-8 md:gap-6 lg:grid-cols-[92px_1fr] lg:px-8 lg:py-10 xl:px-10 ${
                    index !== journey.length - 1
                      ? "border-b border-black/[0.07]"
                      : ""
                  }`}
                >
                  {/* NUMBER */}
                  <div className="flex lg:block">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-[#0A0A0B] text-[15px] font-black text-white shadow-[0_8px_24px_rgba(0,0,0,.08)]">
                      {item.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#8A6717] sm:text-[12px]">
                          {item.label}
                        </p>

                        <h4 className="mt-2.5 text-[1.9rem] font-black uppercase leading-[0.98] tracking-[-0.045em] text-[#090909] sm:text-[2.15rem] lg:text-[2.25rem]">
                          {item.title}
                        </h4>
                      </div>

                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0A0A0B]">
                        <BPMark
                          width={14}
                          height={18}
                          color="#FFFFFF"
                          className="opacity-95"
                        />
                      </span>
                    </div>

                    <p className="mt-4 max-w-[650px] text-[15px] font-medium leading-7 text-black/60 sm:text-base">
                      {item.description}
                    </p>

                    <div className="mt-6 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                      {item.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex min-h-[38px] items-center gap-2.5 rounded-xl bg-[#F8F6F0] px-3 py-2 text-[12px] font-semibold leading-5 text-black/65 sm:text-[13px]"
                        >
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0A0A0B] text-white">
                            <CheckIcon />
                          </span>

                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              INTEGRATED CTA
          ====================================================== */}

          <div className="relative flex flex-col gap-6 border-t border-black/[0.07] bg-[#F8F6F0] px-5 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#8A6717] sm:text-[12px]">
                READY TO BEGIN?
              </p>

              <p className="mt-2.5 text-[1.5rem] font-black uppercase tracking-[-0.04em] text-[#080808] sm:text-[1.75rem]">
                Start your BlackProp journey.
              </p>
            </div>

            <div className="grid w-full gap-2.5 sm:grid-cols-2 lg:w-auto">
              <a
                href="#challenges"
                className="group inline-flex min-w-[175px] items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#F6DE82,#D4AF37_50%,#987015)] px-6 py-4 text-[13px] font-black uppercase text-black shadow-[0_12px_35px_rgba(212,175,55,.13)] transition duration-300 hover:-translate-y-0.5"
              >
                GET FUNDED
                <ArrowRight />
              </a>

              <a
                href="#why-blackprop"
                className="inline-flex min-w-[160px] items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-4 text-[13px] font-bold uppercase text-[#080808] transition hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.04]"
              >
                WHY BLACKPROP
              </a>
            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="mx-auto mt-6 max-w-3xl px-2 text-center text-[11px] font-medium leading-5 text-black/45 sm:text-[12px]">
          Challenge structure, progression and reward eligibility are subject
          to the final rules and terms of the selected BlackProp program.
        </p>
      </div>
    </section>
  );
}