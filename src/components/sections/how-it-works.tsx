import type { ReactNode } from "react";

/* =========================================================
   ICONS
========================================================= */

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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m4.5 10.2 3.3 3.3 7.7-7.7"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle
        cx="6"
        cy="18"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="18"
        cy="6"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M8.2 17.3c5-.9 1.9-7.6 7.6-10.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TradeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M3.5 17.5 8 13l3.2 2.7L20.5 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M15.8 6h4.7v4.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RewardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M7 4h10v4.2c0 3.7-1.9 6-5 6s-5-2.3-5-6V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M7 6H4c0 3.4 1.4 5 4.2 5M17 6h3c0 3.4-1.4 5-4.2 5M12 14.2V18M8.5 20h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
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
        d="M12 3 19 6v5.4c0 4.2-2.7 7.4-7 9.3-4.3-1.9-7-5.1-7-9.3V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="m8.5 12 2.2 2.2 4.8-4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   BACKGROUND GRAPHIC
========================================================= */

function JourneyBackgroundGraphic() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-24 hidden h-[540px] lg:block"
    >
      <svg
        viewBox="0 0 1440 540"
        fill="none"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="journeyLine"
            x1="180"
            y1="330"
            x2="1260"
            y2="170"
          >
            <stop stopColor="#D4AF37" stopOpacity="0" />
            <stop offset=".22" stopColor="#D4AF37" stopOpacity=".16" />
            <stop offset=".55" stopColor="#D4AF37" stopOpacity=".3" />
            <stop offset=".8" stopColor="#D4AF37" stopOpacity=".13" />
            <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M90 420C310 290 400 390 600 260C790 137 890 282 1080 173C1190 111 1290 117 1390 76"
          stroke="url(#journeyLine)"
          strokeWidth="1.4"
          strokeDasharray="5 10"
        />

        <circle cx="310" cy="327" r="5" fill="#D4AF37" fillOpacity=".3" />
        <circle cx="602" cy="259" r="6" fill="#D4AF37" fillOpacity=".45" />
        <circle cx="910" cy="246" r="4" fill="#D4AF37" fillOpacity=".32" />
        <circle cx="1172" cy="132" r="5" fill="#D4AF37" fillOpacity=".4" />
      </svg>
    </div>
  );
}

/* =========================================================
   SMALL CARD GRAPHIC — STEP 1
========================================================= */

function CapitalGraphic() {
  return (
    <div className="relative h-[115px] overflow-hidden rounded-[20px] border border-black/[0.07] bg-[#F6F4ED]">
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[35px]" />

      <div className="absolute left-[13%] top-[26%] h-[58px] w-[96px] -rotate-6 rounded-[15px] border border-black/10 bg-white shadow-[0_12px_25px_rgba(49,39,16,.08)]">
        <div className="absolute left-3 top-3 h-2 w-6 rounded-full bg-[#D4AF37]/50" />
        <div className="absolute bottom-3 left-3 h-1.5 w-12 rounded-full bg-black/10" />
      </div>

      <div className="absolute left-[32%] top-[18%] h-[68px] w-[112px] rotate-3 rounded-[17px] border border-[#D4AF37]/20 bg-[#0B0B0C] shadow-[0_18px_30px_rgba(0,0,0,.16)]">
        <div className="absolute left-4 top-4">
          <p className="text-[6px] font-black uppercase tracking-[0.15em] text-[#D4AF37]">
            BLACKPROP
          </p>

          <p className="mt-2 text-base font-black tracking-[-0.05em] text-white">
            $100K
          </p>
        </div>

        <div className="absolute bottom-3 right-3 grid h-7 w-7 place-items-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[7px] font-black text-[#E4C25A]">
          BP
        </div>
      </div>

      <span className="absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-[#D4AF37]" />

      <span className="absolute right-[10%] top-[50%] h-1 w-1 rounded-full bg-black/25" />
    </div>
  );
}

/* =========================================================
   SMALL CARD GRAPHIC — STEP 2
========================================================= */

function TradingGraphic() {
  const candles = [
    { h: 23, up: true },
    { h: 34, up: true },
    { h: 27, up: false },
    { h: 44, up: true },
    { h: 39, up: false },
    { h: 53, up: true },
    { h: 62, up: true },
  ];

  return (
    <div className="relative h-[115px] overflow-hidden rounded-[20px] border border-white/10 bg-[#060607]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "28px 25px",
        }}
      />

      <div className="absolute inset-x-5 bottom-4 top-5 flex items-end justify-center gap-3">
        {candles.map((candle, index) => (
          <div
            key={index}
            className="relative w-2"
            style={{
              height: `${candle.h}px`,
            }}
          >
            <span
              className={`absolute left-1/2 top-[-7px] h-[calc(100%+14px)] w-px -translate-x-1/2 ${
                candle.up ? "bg-[#D4AF37]/55" : "bg-white/30"
              }`}
            />

            <span
              className={`absolute inset-x-0 bottom-0 rounded-[2px] ${
                candle.up
                  ? "bg-[linear-gradient(180deg,#F0D16A,#A67A18)]"
                  : "bg-white/35"
              }`}
              style={{
                height: `${Math.max(candle.h - 13, 10)}px`,
              }}
            />
          </div>
        ))}
      </div>

      <svg
        viewBox="0 0 300 100"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d="M18 81C54 74 63 64 92 66C120 67 133 49 159 51C189 54 198 35 225 37C250 39 267 22 287 14"
          stroke="#D4AF37"
          strokeOpacity=".15"
          strokeWidth="9"
          strokeLinecap="round"
        />

        <path
          d="M18 81C54 74 63 64 92 66C120 67 133 49 159 51C189 54 198 35 225 37C250 39 267 22 287 14"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute right-3 top-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-2 py-1 text-[6px] font-black uppercase tracking-[0.12em] text-[#E5C45C]">
        Live process
      </div>
    </div>
  );
}

/* =========================================================
   SMALL CARD GRAPHIC — STEP 3
========================================================= */

function ProgressGraphic() {
  return (
    <div className="relative h-[115px] overflow-hidden rounded-[20px] border border-black/[0.07] bg-[#F6F4ED]">
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/12 blur-[35px]" />

      <div className="absolute left-1/2 top-1/2 grid h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#D4AF37]/25">
        <div className="absolute inset-[8px] rounded-full border border-dashed border-[#D4AF37]/35" />

        <div className="grid h-11 w-11 place-items-center rounded-full bg-[#0B0B0C] text-[#E6C45D] shadow-[0_10px_25px_rgba(0,0,0,.14)]">
          <RewardIcon />
        </div>

        <span className="absolute right-[-3px] top-[15px] h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,.5)]" />
      </div>

      <div className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full border border-black/[0.07] bg-white px-2.5 py-1.5 shadow-sm">
        <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-500/10 text-emerald-700">
          <CheckIcon />
        </span>

        <span className="text-[6px] font-black uppercase tracking-[0.12em] text-black">
          Progress ready
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   DETAIL
========================================================= */

function Detail({
  children,
  featured = false,
}: {
  children: ReactNode;
  featured?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 text-[11px] font-semibold ${
        featured ? "text-white" : "text-[#151515]"
      }`}
    >
      <span
        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
          featured
            ? "bg-[#D4AF37]/15 text-[#E9CA65]"
            : "bg-[#D4AF37]/12 text-[#967018]"
        }`}
      >
        <CheckIcon />
      </span>

      {children}
    </div>
  );
}

/* =========================================================
   PROCESS CARD
========================================================= */

function ProcessStage({
  number,
  label,
  title,
  description,
  icon,
  graphic,
  details,
  featured = false,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  icon: ReactNode;
  graphic: ReactNode;
  details: string[];
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[28px] border p-5 transition duration-500 sm:p-6 ${
        featured
          ? "border-[#D4AF37]/25 bg-[#09090A] text-white shadow-[0_28px_70px_rgba(0,0,0,.16)]"
          : "border-black/10 bg-white text-[#080808] hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:shadow-[0_25px_65px_rgba(54,42,14,.07)]"
      }`}
    >
      <div
        className={`absolute inset-x-[20%] top-0 h-px bg-gradient-to-r from-transparent to-transparent ${
          featured ? "via-[#E4C35A]/80" : "via-[#D4AF37]/35"
        }`}
      />

      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <div
          className={`grid h-11 w-11 place-items-center rounded-[14px] border ${
            featured
              ? "border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#EACB66]"
              : "border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#987117]"
          }`}
        >
          {icon}
        </div>

        <span
          className={`text-[2.7rem] font-black leading-none tracking-[-0.08em] ${
            featured ? "text-[#D4AF37]/25" : "text-black/10"
          }`}
        >
          {number}
        </span>
      </div>

      {/* GRAPHIC */}
      <div className="mt-5">{graphic}</div>

      {/* TEXT */}
      <div className="mt-6">
        <p
          className={`text-[8px] font-black uppercase tracking-[0.2em] ${
            featured ? "text-[#D4AF37]" : "text-[#987117]"
          }`}
        >
          {label}
        </p>

        <h3
          className={`mt-2 text-[1.65rem] font-black uppercase leading-[1] tracking-[-0.05em] sm:text-[1.8rem] ${
            featured ? "text-white" : "text-[#080808]"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-3 text-sm font-medium leading-6 ${
            featured ? "text-white" : "text-[#181818]"
          }`}
        >
          {description}
        </p>
      </div>

      {/* DETAILS */}
      <div
        className={`mt-5 space-y-2.5 border-t pt-4 ${
          featured ? "border-white/10" : "border-black/10"
        }`}
      >
        {details.map((detail) => (
          <Detail key={detail} featured={featured}>
            {detail}
          </Detail>
        ))}
      </div>

      {/* GLOW */}
      <div
        className={`pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full blur-[60px] ${
          featured ? "bg-[#D4AF37]/10" : "bg-[#D4AF37]/[0.05]"
        }`}
      />
    </article>
  );
}

/* =========================================================
   FLOATING DECORATIONS
========================================================= */

function FloatingDecorations() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="how-float-one absolute left-[4%] top-[21%] hidden lg:grid">
        <div className="grid h-11 w-11 place-items-center rounded-full border border-[#D4AF37]/20 bg-white text-[8px] font-black text-[#A17918] shadow-[0_15px_35px_rgba(75,57,16,.08)]">
          BP
        </div>
      </div>

      <div className="how-float-two absolute right-[5%] top-[29%] hidden lg:block">
        <div className="relative grid h-10 w-10 place-items-center rounded-[13px] border border-black/10 bg-white text-[#9A7318] shadow-[0_14px_30px_rgba(55,45,18,.07)]">
          <TradeIcon />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#D4AF37]" />
        </div>
      </div>

      <span className="how-pulse absolute left-[11%] top-[38%] hidden h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,.35)] xl:block" />

      <span className="how-pulse absolute right-[12%] top-[43%] hidden h-1.5 w-1.5 rounded-full bg-[#D4AF37] xl:block [animation-delay:1.4s]" />
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#FBFAF7] py-20 text-[#080808] sm:py-24 lg:py-28"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute left-1/2 top-[4%] h-[580px] w-[1000px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[160px]" />

      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <JourneyBackgroundGraphic />

      <FloatingDecorations />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] px-3.5 py-2">
              <span className="text-[#987117]">
                <ShieldIcon />
              </span>

              <span className="text-[8px] font-black uppercase tracking-[0.19em] text-[#896514]">
                THE BLACKPROP JOURNEY
              </span>
            </div>

            <h2 className="mt-6 max-w-[650px] text-[2.9rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#070707] sm:text-[3.8rem] lg:text-[4.6rem]">
              THREE STAGES.

              <span className="block text-[#B78A22]">
                ONE CLEAR PATH.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <div className="max-w-[500px] border-l-2 border-[#D4AF37] pl-5 lg:ml-auto">
              <p className="text-sm font-medium leading-7 text-[#171717] sm:text-base">
                Choose the BlackProp setup that fits you,
                demonstrate disciplined execution and progress
                toward the next stage.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            JOURNEY BAR
        ====================================================== */}

        <div className="mt-12 overflow-hidden rounded-[20px] border border-black/10 bg-white shadow-[0_12px_35px_rgba(55,44,15,.035)] sm:mt-14">
          <div className="grid sm:grid-cols-3">
            {[
              {
                number: "01",
                label: "SETUP",
                title: "Choose your route",
              },
              {
                number: "02",
                label: "EXECUTION",
                title: "Prove your process",
              },
              {
                number: "03",
                label: "PROGRESSION",
                title: "Unlock what comes next",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                className={`relative flex items-center gap-4 px-5 py-4 sm:px-6 ${
                  index !== 2
                    ? "border-b border-black/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <span className="text-xl font-black tracking-[-0.05em] text-[#B68A22]">
                  {item.number}
                </span>

                <div>
                  <p className="text-[7px] font-black uppercase tracking-[0.18em] text-[#987117]">
                    {item.label}
                  </p>

                  <p className="mt-1 text-[11px] font-bold text-[#080808]">
                    {item.title}
                  </p>
                </div>

                {index !== 2 && (
                  <span className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-[#B58A22] sm:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            STAGES
        ====================================================== */}

        <div className="relative mt-5">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-[45px] hidden h-px bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/55 to-[#D4AF37]/10 lg:block" />

          <div className="relative grid gap-4 lg:grid-cols-3">
            <ProcessStage
              number="01"
              label="SETUP"
              title="Choose Your Route"
              icon={<RouteIcon />}
              graphic={<CapitalGraphic />}
              description="Build the BlackProp challenge configuration that matches the way you want to trade."
              details={[
                "Choose your challenge model",
                "Select your account size",
                "Pick your trading environment",
              ]}
            />

            <ProcessStage
              number="02"
              label="EXECUTION"
              title="Prove Your Process"
              icon={<TradeIcon />}
              graphic={<TradingGraphic />}
              description="Trade within your selected program objectives and demonstrate controlled, disciplined execution."
              details={[
                "Follow defined risk objectives",
                "Trade within program rules",
                "Complete required milestones",
              ]}
              featured
            />

            <ProcessStage
              number="03"
              label="PROGRESSION"
              title="Unlock The Next Stage"
              icon={<RewardIcon />}
              graphic={<ProgressGraphic />}
              description="Successful progression moves you further through the BlackProp journey and toward reward eligibility."
              details={[
                "Progress through your account",
                "Build a consistent track record",
                "Reach reward eligibility",
              ]}
            />
          </div>
        </div>

        {/* =====================================================
            SMALL PHILOSOPHY ROW
        ====================================================== */}

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            {
              kicker: "STEP BY STEP",
              text: "Clear progression.",
            },
            {
              kicker: "TRADER FIRST",
              text: "Your execution matters.",
            },
            {
              kicker: "BUILT TO SCALE",
              text: "Performance opens the next stage.",
            },
          ].map((item) => (
            <div
              key={item.kicker}
              className="group flex items-center justify-between rounded-[18px] border border-black/10 bg-white px-5 py-4 transition hover:border-[#D4AF37]/25"
            >
              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.18em] text-[#987117]">
                  {item.kicker}
                </p>

                <p className="mt-2 text-sm font-bold text-[#080808]">
                  {item.text}
                </p>
              </div>

              <span className="h-2 w-2 rounded-full bg-[#D4AF37]/70 transition group-hover:shadow-[0_0_12px_rgba(212,175,55,.5)]" />
            </div>
          ))}
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="relative mt-12 overflow-hidden rounded-[28px] border border-[#D4AF37]/20 bg-[#080809] px-5 py-7 text-white sm:px-8 sm:py-8 lg:mt-14 lg:px-10">
          <div className="pointer-events-none absolute right-[8%] top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[75px]" />

          <div className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

          {/* DECORATIVE BP */}
          <div className="pointer-events-none absolute right-[8%] top-1/2 hidden -translate-y-1/2 text-[8rem] font-black tracking-[-0.12em] text-white/[0.025] lg:block">
            BP
          </div>

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#D4AF37]">
                READY TO START?
              </p>

              <h3 className="mt-3 text-[1.8rem] font-black uppercase tracking-[-0.05em] text-white sm:text-[2.2rem]">
                YOUR FIRST STEP STARTS HERE.
              </h3>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {["Choose", "Perform", "Progress"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[10px] font-semibold text-white"
                  >
                    <span className="text-[#D4AF37]">
                      <CheckIcon />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row">
              <a
                href="#challenges"
                className="group relative inline-flex min-w-[185px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F6DE82_0%,#D4AF37_50%,#997015_100%)] px-6 py-3.5 text-sm font-black uppercase text-[#080806] shadow-[0_15px_40px_rgba(212,175,55,.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(212,175,55,.24)]"
              >
                GET FUNDED

                <ArrowRight />

                <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/45 blur-md transition-all duration-700 group-hover:left-[125%]" />
              </a>

              <a
                href="#why-blackprop"
                className="inline-flex min-w-[160px] items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] px-6 py-3.5 text-sm font-bold uppercase text-white transition hover:border-[#D4AF37]/35 hover:bg-[#D4AF37]/10"
              >
                WHY BLACKPROP
              </a>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[9px] font-medium leading-4 text-[#171717]">
          Challenge structure, progression and reward eligibility
          are subject to the final rules and terms of the selected
          BlackProp program.
        </p>
      </div>

      {/* =====================================================
          ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes howFloatOne {
          0%, 100% {
            transform: translateY(0) rotate(-4deg);
          }
          50% {
            transform: translateY(-9px) rotate(1deg);
          }
        }

        @keyframes howFloatTwo {
          0%, 100% {
            transform: translateY(0) rotate(3deg);
          }
          50% {
            transform: translateY(-7px) rotate(-1deg);
          }
        }

        @keyframes howPulse {
          0%, 100% {
            opacity: .35;
            transform: scale(.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .how-float-one {
          animation: howFloatOne 6s ease-in-out infinite;
        }

        .how-float-two {
          animation: howFloatTwo 7s ease-in-out infinite;
        }

        .how-pulse {
          animation: howPulse 3.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .how-float-one,
          .how-float-two,
          .how-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}