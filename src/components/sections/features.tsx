import type { ReactNode } from "react";

/* =========================================================
   ICONS
========================================================= */

function ArrowRight({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
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
        d="m4.5 10.2 3.2 3.2 7.8-7.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
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

function BoltIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m13.2 2.8-8 10h5.6L9.5 21l8.7-11.2h-5.8l.8-7Z"
        stroke="currentColor"
        strokeWidth="1.55"
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

function WalletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M15 10h6v4h-6c-1.5 0-2.4-.8-2.4-2S13.5 10 15 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="16"
        cy="12"
        r=".8"
        fill="currentColor"
      />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m12 3 9 4.5H3L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M5 10v6M9.5 10v6M14.5 10v6M19 10v6M3 20h18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CryptoIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex h-5 w-5 items-center justify-center text-[19px] font-black leading-none"
    >
      ₿
    </span>
  );
}

/* =========================================================
   SMALL CHECK
========================================================= */

function MiniCheck({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#D4AF37]/15 text-[#F0D16A]">
        <CheckIcon />
      </span>

      <span className="text-[11px] font-bold text-white sm:text-xs">
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   ANIMATED ARROW CONNECTOR
========================================================= */

function ArrowConnector() {
  return (
    <div
      className="relative flex h-14 items-center justify-center lg:h-16"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/10 via-[#D4AF37]/30 to-white/10" />

      <div className="bp-arrow-drop relative z-10 grid h-8 w-8 place-items-center rounded-full border border-[#D4AF37]/25 bg-[#09090A] text-[#F0D16A] shadow-[0_0_25px_rgba(212,175,55,.10)]">
        <ArrowRight className="h-4 w-4 rotate-90" />
      </div>
    </div>
  );
}

/* =========================================================
   GRAPHIC 1 — PERFORMANCE CORE
========================================================= */

function PerformanceCore() {
  return (
    <div className="relative mx-auto flex h-[240px] max-w-[430px] items-center justify-center overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[60px]" />

      <svg
        viewBox="0 0 430 240"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* TRACK */}
        <circle
          cx="215"
          cy="120"
          r="91"
          stroke="#D4AF37"
          strokeOpacity=".13"
        />

        <circle
          cx="215"
          cy="120"
          r="70"
          stroke="white"
          strokeOpacity=".14"
          strokeDasharray="4 9"
          className="bp-reverse-spin"
        />

        {/* PERFORMANCE LINE */}
        <path
          d="M24 174C65 168 80 145 115 151C151 158 166 119 199 128C233 137 247 94 280 102C317 111 336 75 405 55"
          stroke="#D4AF37"
          strokeOpacity=".09"
          strokeWidth="11"
          strokeLinecap="round"
        />

        <path
          d="M24 174C65 168 80 145 115 151C151 158 166 119 199 128C233 137 247 94 280 102C317 111 336 75 405 55"
          stroke="#E9C963"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="6 8"
          className="bp-running-path"
        />

        <circle
          cx="25"
          cy="174"
          r="4"
          fill="#D4AF37"
        />

        <circle
          cx="405"
          cy="55"
          r="4"
          fill="#F1D36C"
        />
      </svg>

      {/* ROTATING DOT */}
      <div className="bp-profit-spin absolute h-[180px] w-[180px] rounded-full">
        <span className="absolute left-1/2 top-[-4px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#F1D36C] shadow-[0_0_20px_rgba(212,175,55,.85)]" />
      </div>

      {/* CENTER */}
      <div className="relative grid h-[118px] w-[118px] place-items-center rounded-full border border-[#D4AF37]/35 bg-[#070708] shadow-[0_0_45px_rgba(212,175,55,.13)]">
        <div className="absolute inset-2 rounded-full border border-white/10" />

        <div className="text-center">
          <p className="text-[2.9rem] font-black leading-none tracking-[-0.08em] text-white">
            90
            <span className="text-base text-[#D4AF37]">
              %
            </span>
          </p>

          <p className="mt-2 text-[6px] font-black tracking-[0.18em] text-[#D4AF37]">
            UP TO
          </p>
        </div>
      </div>

      <span className="bp-pulse absolute left-[13%] top-[32%] h-2 w-2 rounded-full bg-[#D4AF37]" />

      <span className="absolute bottom-[19%] right-[13%] h-1.5 w-1.5 rounded-full bg-white" />
    </div>
  );
}

/* =========================================================
   GRAPHIC 2 — REWARD MOTION
========================================================= */

function RewardMotion() {
  return (
    <div className="relative mx-auto h-[220px] max-w-[430px] overflow-hidden rounded-[24px] border border-white/10 bg-[#070708]">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <div className="absolute left-5 top-5">
        <p className="text-[7px] font-black tracking-[0.18em] text-[#D4AF37]">
          REWARD FLOW
        </p>

        <p className="mt-2 text-sm font-black text-white">
          Performance moves forward.
        </p>
      </div>

      {/* FLOW */}
      <div className="absolute inset-x-6 bottom-12 flex items-center">
        {/* STEP 1 */}
        <div className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-[#0C0C0D] text-[8px] font-black text-white">
          P
        </div>

        {/* LINE */}
        <div className="relative h-px flex-1 bg-white/15">
          <span className="bp-flow-one absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_17px_rgba(212,175,55,.8)]" />
        </div>

        {/* STEP 2 */}
        <div className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[8px] font-black text-[#F0D16A]">
          R
        </div>

        {/* LINE */}
        <div className="relative h-px flex-1 bg-gradient-to-r from-[#D4AF37]/30 to-[#D4AF37]">
          <span className="bp-flow-two absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#F0D16A]" />
        </div>

        {/* END */}
        <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#D4AF37] text-black shadow-[0_0_28px_rgba(212,175,55,.3)]">
          <CheckIcon />
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-4 flex justify-between">
        <span className="text-[6px] font-black tracking-[0.11em] text-white">
          PERFORM
        </span>

        <span className="text-[6px] font-black tracking-[0.11em] text-white">
          REVIEW
        </span>

        <span className="text-[6px] font-black tracking-[0.11em] text-[#D4AF37]">
          ACCESS
        </span>
      </div>

      {/* MOVING ARROWS */}
      <div className="bp-arrow-stream absolute right-5 top-5 flex items-center gap-1 text-[#D4AF37]">
        <ArrowRight className="h-3 w-3" />
        <ArrowRight className="h-3 w-3" />
        <ArrowRight className="h-3 w-3" />
      </div>
    </div>
  );
}

/* =========================================================
   GRAPHIC 3 — PAYOUT ROUTES
========================================================= */

function PayoutRoutes() {
  const methods = [
    {
      label: "BANK",
      icon: <BankIcon />,
    },
    {
      label: "WALLET",
      icon: <WalletIcon />,
    },
    {
      label: "CRYPTO",
      icon: <CryptoIcon />,
    },
  ];

  return (
    <div className="relative mx-auto h-[220px] max-w-[430px] overflow-hidden rounded-[24px] border border-white/10 bg-[#070708]">
      <div className="absolute left-1/2 top-[54%] h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="absolute left-5 top-5">
        <p className="text-[7px] font-black tracking-[0.18em] text-[#D4AF37]">
          PAYOUT NETWORK
        </p>

        <p className="mt-2 text-sm font-black text-white">
          Select your route.
        </p>
      </div>

      <div className="absolute inset-x-5 bottom-10 grid grid-cols-3 gap-3">
        {methods.map((method, index) => (
          <div
            key={method.label}
            className="relative flex flex-col items-center"
          >
            <div
              className={`relative z-10 grid h-14 w-14 place-items-center rounded-[17px] border bg-[#0D0D0E] text-[#F0D16A] ${
                index === 1
                  ? "border-[#D4AF37]/45 shadow-[0_0_30px_rgba(212,175,55,.12)]"
                  : "border-white/15"
              }`}
            >
              {method.icon}

              {index === 1 && (
                <span className="bp-pulse absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#D4AF37]" />
              )}
            </div>

            <span className="mt-3 text-[7px] font-black tracking-[0.12em] text-white">
              {method.label}
            </span>
          </div>
        ))}
      </div>

      <div className="bp-route-arrow absolute left-[18%] top-[53%] text-[#D4AF37]">
        <ArrowRight className="h-4 w-4" />
      </div>

      <div className="bp-route-arrow-two absolute right-[18%] top-[53%] text-[#D4AF37]">
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}

/* =========================================================
   FEATURE CHAPTER
========================================================= */

function FeatureChapter({
  number,
  eyebrow,
  icon,
  title,
  description,
  points,
  graphic,
  reverse = false,
}: {
  number: string;
  eyebrow: string;
  icon: ReactNode;
  title: ReactNode;
  description: string;
  points: string[];
  graphic: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,#0D0D0E,#070708)] p-5 sm:p-7 lg:p-8">
      {/* TOP GOLD */}
      <div className="absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      {/* GLOW */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#D4AF37]/[0.07] blur-[80px]" />

      <div
        className={`relative grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* CONTENT */}
        <div className={reverse ? "lg:pl-6" : "lg:pr-6"}>
          <div className="flex items-center gap-3">
            <span className="text-[8px] font-black text-[#D4AF37]">
              {number}
            </span>

            <span className="h-px w-8 bg-[#D4AF37]/40" />

            <span className="text-[8px] font-black tracking-[0.18em] text-[#F0D16A]">
              {eyebrow}
            </span>
          </div>

          <div className="mt-5 flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#F0D16A]">
              {icon}
            </div>

            <h3 className="max-w-[520px] text-[1.9rem] font-black uppercase leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.3rem]">
              {title}
            </h3>
          </div>

          <p className="mt-5 max-w-[530px] text-sm font-medium leading-7 text-white">
            {description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <MiniCheck key={point}>
                {point}
              </MiniCheck>
            ))}
          </div>
        </div>

        {/* GRAPHIC */}
        <div>{graphic}</div>
      </div>
    </div>
  );
}

/* =========================================================
   PAYOUT METHOD
========================================================= */

function PayoutMethod({
  icon,
  kicker,
  title,
}: {
  icon: ReactNode;
  kicker: string;
  title: string;
}) {
  return (
    <div className="group flex items-center gap-3 rounded-[17px] border border-white/10 bg-white/[0.035] px-4 py-4 transition duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.06]">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[13px] bg-[#D4AF37]/10 text-[#F0D16A]">
        {icon}
      </div>

      <div>
        <p className="text-[6px] font-black tracking-[0.16em] text-[#D4AF37]">
          {kicker}
        </p>

        <p className="mt-1 text-xs font-black text-white">
          {title}
        </p>
      </div>

      <span className="bp-method-arrow ml-auto text-[#D4AF37]">
        <ArrowRight />
      </span>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export function Features() {
  return (
    <section
      id="why-blackprop"
      className="relative overflow-hidden bg-[#030303] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[12%] h-[750px] w-[1100px] max-w-full -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.03] blur-[180px]" />

      <div className="pointer-events-none absolute -left-48 top-[28%] hidden h-[380px] w-[380px] rounded-full border border-[#D4AF37]/[0.05] lg:block" />

      <div className="pointer-events-none absolute -right-48 top-[58%] hidden h-[380px] w-[380px] rounded-full border border-white/[0.04] lg:block" />

      <span className="bp-pulse pointer-events-none absolute left-[7%] top-[34%] hidden h-2 w-2 rounded-full bg-[#D4AF37] lg:block" />

      <span className="bp-pulse pointer-events-none absolute right-[8%] top-[53%] hidden h-1.5 w-1.5 rounded-full bg-[#D4AF37] lg:block [animation-delay:1.3s]" />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_.78fr] lg:items-end">
          {/* LEFT */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3.5 py-2">
              <span className="bp-pulse h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

              <span className="text-[8px] font-black tracking-[0.2em] text-[#F0D16A]">
                THE BLACKPROP ADVANTAGE
              </span>
            </div>

            <h2 className="mt-6 max-w-[720px] text-[2.8rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-[3.8rem] lg:text-[4.6rem]">
              BUILT FOR
              <span className="block">
                BETTER
                <span className="text-[#D4AF37]">
                  {" "}PROGRESSION.
                </span>
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="lg:pb-1">
            <div className="border-l-2 border-[#D4AF37] pl-5">
              <p className="max-w-[470px] text-sm font-medium leading-7 text-white sm:text-base">
                A straightforward trading journey where
                performance, discipline and progression stay
                connected from start to reward.
              </p>
            </div>

            <a
              href="#challenges"
              className="group mt-5 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.15em] text-[#F0D16A]"
            >
              VIEW CHALLENGES

              <span className="bp-inline-arrow">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>

        {/* =====================================================
            THREE CHAPTERS
        ====================================================== */}

        <div className="mt-12">
          {/* 01 */}

          <FeatureChapter
            number="01"
            eyebrow="PROFIT POTENTIAL"
            icon={<TrendIcon />}
            title={
              <>
                KEEP MORE OF YOUR
                <span className="block text-[#D4AF37]">
                  PERFORMANCE.
                </span>
              </>
            }
            description="When your trading performs, the structure should reward it. BlackProp is designed around clear progression and trader-focused reward potential."
            points={[
              "Up to 90% profit split",
              "Clear progression",
              "Performance focused",
              "Trader-first structure",
            ]}
            graphic={<PerformanceCore />}
          />

          <ArrowConnector />

          {/* 02 */}

          <FeatureChapter
            number="02"
            eyebrow="REWARD FLOW"
            icon={<BoltIcon />}
            title={
              <>
                KEEP MOVING
                <span className="block text-[#D4AF37]">
                  FORWARD.
                </span>
              </>
            }
            description="A clean progression path keeps the journey understandable — perform, meet the required objectives and move toward eligible reward access."
            points={[
              "Simple milestones",
              "Defined objectives",
              "Clear reward journey",
              "Less unnecessary friction",
            ]}
            graphic={<RewardMotion />}
            reverse
          />

          <ArrowConnector />

          {/* 03 */}

          <FeatureChapter
            number="03"
            eyebrow="FLEXIBLE ACCESS"
            icon={<WalletIcon />}
            title={
              <>
                CHOOSE HOW YOU
                <span className="block text-[#D4AF37]">
                  ACCESS REWARDS.
                </span>
              </>
            }
            description="When eligible, choose from supported payout routes designed to give the BlackProp reward experience more flexibility."
            points={[
              "Banking routes",
              "Digital wallets",
              "Crypto support",
              "Flexible settlement",
            ]}
            graphic={<PayoutRoutes />}
          />
        </div>

        {/* =====================================================
            FLOW LINE
        ====================================================== */}

        <div className="mt-5 flex items-center justify-center gap-2 overflow-hidden rounded-[18px] border border-white/10 bg-[#080809] px-4 py-3">
          {[
            "PERFORM",
            "PROVE",
            "PROGRESS",
            "ACCESS",
          ].map((word, index) => (
            <div
              key={word}
              className="flex items-center"
            >
              <span className="text-[7px] font-black tracking-[0.15em] text-white sm:text-[8px]">
                {word}
              </span>

              {index !== 3 && (
                <div className="bp-flow-arrows mx-2 flex text-[#D4AF37] sm:mx-4">
                  <ArrowRight className="h-3 w-3" />
                  <ArrowRight className="h-3 w-3" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* =====================================================
            FINAL PAYOUT PANEL
        ====================================================== */}

        <div className="relative mt-16 overflow-hidden rounded-[28px] border border-[#D4AF37]/20 bg-[linear-gradient(135deg,#101011,#070708)] p-5 sm:p-7 lg:mt-20 lg:p-8">
          <div className="absolute inset-x-[16%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[85px]" />

          <div className="relative grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            {/* COPY */}

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-2">
                <span className="text-[#F0D16A]">
                  <ShieldIcon />
                </span>

                <span className="text-[7px] font-black tracking-[0.17em] text-[#F0D16A]">
                  REWARD ACCESS
                </span>
              </div>

              <h3 className="mt-5 text-[2.1rem] font-black uppercase leading-[0.95] tracking-[-0.055em] text-white sm:text-[2.8rem]">
                PERFORMANCE IN.
                <span className="block text-[#D4AF37]">
                  REWARDS OUT.
                </span>
              </h3>

              <p className="mt-4 max-w-[450px] text-sm font-medium leading-7 text-white">
                Reach eligible reward status and select from
                supported payout methods available to your
                BlackProp account.
              </p>

              <a
                href="#challenges"
                className="group relative mt-6 inline-flex min-w-[190px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F6DE82,#D4AF37_50%,#956A11)] px-6 py-3.5 text-sm font-black uppercase text-black shadow-[0_16px_45px_rgba(212,175,55,.17)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(212,175,55,.27)]"
              >
                START CHALLENGE

                <span className="bp-button-arrow">
                  <ArrowRight />
                </span>

                <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/45 blur-md transition-all duration-700 group-hover:left-[125%]" />
              </a>
            </div>

            {/* METHODS */}

            <div>
              <div className="grid gap-2 sm:grid-cols-3">
                <PayoutMethod
                  icon={<BankIcon />}
                  kicker="TRADITIONAL"
                  title="Bank Transfer"
                />

                <PayoutMethod
                  icon={<WalletIcon />}
                  kicker="DIGITAL"
                  title="Digital Wallet"
                />

                <PayoutMethod
                  icon={<CryptoIcon />}
                  kicker="ON-CHAIN"
                  title="Crypto"
                />
              </div>

              {/* STATUS */}

              <div className="relative mt-3 overflow-hidden rounded-[17px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] px-4 py-3">
                <span className="bp-scan absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-[#F1D16A]/15 to-transparent" />

                <div className="relative flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#D4AF37] text-black">
                    <CheckIcon />
                  </span>

                  <div>
                    <p className="text-[7px] font-black tracking-[0.15em] text-[#D4AF37]">
                      FLEXIBLE SETTLEMENT
                    </p>

                    <p className="mt-0.5 text-[10px] font-bold text-white">
                      Multiple supported payout routes. One BlackProp experience.
                    </p>
                  </div>

                  <div className="bp-status-arrow ml-auto hidden text-[#D4AF37] sm:block">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            END
        ====================================================== */}

        <div className="mx-auto mt-12 flex max-w-[760px] items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/25" />

          <p className="shrink-0 text-[8px] font-black tracking-[0.17em] text-white">
            PERFORM
            <span className="mx-2 text-[#D4AF37]">
              →
            </span>
            PROGRESS
            <span className="mx-2 text-[#D4AF37]">
              →
            </span>
            ACCESS
          </p>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/25" />
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[9px] font-medium leading-4 text-white">
          Profit splits, payout timing, account limits and
          withdrawal methods shown are demonstration content
          until BlackProp&apos;s final terms and integrations
          are confirmed.
        </p>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes bpProfitSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bpReverseSpin {
          from {
            transform: rotate(360deg);
            transform-origin: center;
          }

          to {
            transform: rotate(0deg);
            transform-origin: center;
          }
        }

        @keyframes bpDashMove {
          to {
            stroke-dashoffset: -28;
          }
        }

        @keyframes bpPulse {
          0%, 100% {
            opacity: .45;
            transform: scale(.85);
          }

          50% {
            opacity: 1;
            transform: scale(1.18);
            box-shadow: 0 0 18px rgba(212,175,55,.6);
          }
        }

        @keyframes bpFlowOne {
          0% {
            left: 0;
            opacity: 0;
          }

          12% {
            opacity: 1;
          }

          88% {
            opacity: 1;
          }

          100% {
            left: calc(100% - 10px);
            opacity: 0;
          }
        }

        @keyframes bpFlowTwo {
          0% {
            left: 0;
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          100% {
            left: calc(100% - 8px);
            opacity: 0;
          }
        }

        @keyframes bpArrowDrop {
          0%, 100% {
            transform: translateY(-4px);
            box-shadow: 0 0 0 rgba(212,175,55,0);
          }

          50% {
            transform: translateY(6px);
            box-shadow: 0 0 24px rgba(212,175,55,.2);
          }
        }

        @keyframes bpArrowStream {
          0%, 100% {
            opacity: .45;
            transform: translateX(-4px);
          }

          50% {
            opacity: 1;
            transform: translateX(5px);
          }
        }

        @keyframes bpRouteArrow {
          0%, 100% {
            opacity: .35;
            transform: translateX(-4px);
          }

          50% {
            opacity: 1;
            transform: translateX(5px);
          }
        }

        @keyframes bpInlineArrow {
          0%, 100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(5px);
          }
        }

        @keyframes bpScan {
          0% {
            left: -100px;
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            left: calc(100% + 20px);
            opacity: 0;
          }
        }

        .bp-profit-spin {
          animation: bpProfitSpin 15s linear infinite;
        }

        .bp-reverse-spin {
          transform-origin: center;
          animation: bpReverseSpin 20s linear infinite;
        }

        .bp-running-path {
          stroke-dashoffset: 0;
          animation: bpDashMove 4s linear infinite;
        }

        .bp-pulse {
          animation: bpPulse 3s ease-in-out infinite;
        }

        .bp-flow-one {
          animation: bpFlowOne 3.1s ease-in-out infinite;
        }

        .bp-flow-two {
          animation: bpFlowTwo 2.6s ease-in-out infinite 1.2s;
        }

        .bp-arrow-drop {
          animation: bpArrowDrop 2.2s ease-in-out infinite;
        }

        .bp-arrow-stream {
          animation: bpArrowStream 1.7s ease-in-out infinite;
        }

        .bp-route-arrow,
        .bp-route-arrow-two {
          animation: bpRouteArrow 1.8s ease-in-out infinite;
        }

        .bp-route-arrow-two {
          animation-delay: .5s;
        }

        .bp-inline-arrow,
        .bp-button-arrow,
        .bp-method-arrow,
        .bp-status-arrow {
          animation: bpInlineArrow 1.6s ease-in-out infinite;
        }

        .bp-flow-arrows svg:first-child {
          animation: bpInlineArrow 1.5s ease-in-out infinite;
        }

        .bp-flow-arrows svg:last-child {
          animation: bpInlineArrow 1.5s ease-in-out infinite .25s;
        }

        .bp-scan {
          animation: bpScan 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .bp-profit-spin,
          .bp-reverse-spin,
          .bp-running-path,
          .bp-pulse,
          .bp-flow-one,
          .bp-flow-two,
          .bp-arrow-drop,
          .bp-arrow-stream,
          .bp-route-arrow,
          .bp-route-arrow-two,
          .bp-inline-arrow,
          .bp-button-arrow,
          .bp-method-arrow,
          .bp-status-arrow,
          .bp-flow-arrows svg,
          .bp-scan {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}