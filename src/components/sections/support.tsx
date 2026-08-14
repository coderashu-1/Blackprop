"use client";

/* =========================================================
   BLACKPROP SVG LOGO
========================================================= */

function BPMark({
  width = 58,
  height = 74,
  color = "#D4AF37",
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


type SupportCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: string;
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M4 10h11M11 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M5 4.5h8.5A2.5 2.5 0 0 1 16 7v12H7.5A2.5 2.5 0 0 1 5 16.5v-12Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M16 7h1.5A1.5 1.5 0 0 1 19 8.5V19h-3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8.5 9h4M8.5 12h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlatformIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="4"
        width="17"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M9 20h6M12 16v4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="m7 12 3-3 2 2 4-4"
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
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M8 4h8v3.5a4 4 0 0 1-8 0V4Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8 6H5.5v1.5A3.5 3.5 0 0 0 9 11M16 6h2.5v1.5A3.5 3.5 0 0 1 15 11"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M12 12v4M9 20h6M10 16h4v4h-4z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M5 5.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4.5 3v-3H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M8 10h8M8 13h5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SupportCard({
  title,
  description,
  icon,
  className = "",
  delay = "0s",
}: SupportCardProps) {
  return (
    <div
      className={`support-float absolute z-20 w-[170px] sm:w-[195px] ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="group rounded-[22px] border border-black/[0.07] bg-white/85 p-4 shadow-[0_20px_55px_rgba(52,43,19,.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#C69A2B]/25 hover:shadow-[0_25px_65px_rgba(90,65,14,.14)]">
        <div className="flex items-start justify-between">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.07] text-[#9B7319]">
            {icon}
          </div>

          <div className="grid h-7 w-7 place-items-center rounded-full border border-black/[0.05] bg-[#F5F3ED] text-black/35 transition group-hover:bg-[#111] group-hover:text-white">
            <ArrowIcon />
          </div>
        </div>

        <p className="mt-5 text-[12px] font-black tracking-[-0.03em] text-[#111]">
          {title}
        </p>

        <p className="mt-1.5 text-[8px] leading-4 text-black/38">
          {description}
        </p>
      </div>
    </div>
  );
}

function SupportIllustration() {
  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[650px] sm:h-[540px] lg:h-[590px]">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.08] blur-[100px]" />

      {/* ORBIT LINES */}
      <div className="pointer-events-none absolute left-1/2 top-[52%] h-[70%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#B88A24]/[0.08]" />

      <div className="pointer-events-none absolute left-1/2 top-[52%] h-[55%] w-[66%] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-[50%] border border-dashed border-black/[0.06]" />

      {/* CENTER CORE */}
      <div className="absolute left-1/2 top-[48%] z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-32 w-32 place-items-center rounded-[32px] border border-black/[0.07] bg-[linear-gradient(145deg,#1A1A18,#080808)] shadow-[0_30px_80px_rgba(35,28,8,.22)] sm:h-40 sm:w-40 sm:rounded-[38px]">
          <div className="absolute inset-[8px] rounded-[26px] border border-white/[0.06]" />

          <div className="absolute left-1/2 top-0 h-px w-[55%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E1BE58] to-transparent" />

          <div>
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] shadow-[0_0_35px_rgba(212,175,55,.12)]">
              <BPMark
                width={28}
                height={35}
                color="#D4AF37"
                className="drop-shadow-[0_0_12px_rgba(212,175,55,.18)]"
              />
            </div>

            <p className="mt-3 text-center text-[7px] font-black uppercase tracking-[0.18em] text-white/35">
              Support
            </p>
          </div>
        </div>
      </div>

      {/* SUPPORT CARDS */}
      <SupportCard
        title="General FAQ"
        description="Quick answers to common BlackProp questions."
        icon={<BookIcon />}
        className="left-[2%] top-[7%] sm:left-[4%] sm:top-[10%]"
        delay="0s"
      />

      <SupportCard
        title="Platform Help"
        description="Guidance for your trading workspace and setup."
        icon={<PlatformIcon />}
        className="right-[1%] top-[20%] sm:right-[3%] sm:top-[18%]"
        delay="-1.5s"
      />

      <SupportCard
        title="Trading & Rewards"
        description="Understand objectives, progress and reward access."
        icon={<RewardIcon />}
        className="bottom-[4%] left-[12%] sm:bottom-[6%] sm:left-[18%]"
        delay="-3s"
      />

      {/* METALLIC PILLARS */}
      <div className="absolute bottom-[5%] right-[12%] hidden items-end gap-3 sm:flex">
        <div className="support-pillar h-[85px] w-11 rounded-t-[14px] border border-black/[0.06] bg-[linear-gradient(90deg,#D2D2CE,#FAFAF8,#A9AAA6)] shadow-[0_18px_35px_rgba(40,35,20,.10)]" />

        <div className="support-pillar h-[125px] w-12 rounded-t-[15px] border border-[#D4AF37]/15 bg-[linear-gradient(90deg,#76540D,#E0BD55,#FFF1A0,#987019)] shadow-[0_18px_35px_rgba(83,61,13,.12)]" />

        <div className="support-pillar h-[175px] w-14 rounded-t-[16px] border border-black/[0.06] bg-[linear-gradient(90deg,#959590,#F4F4F0,#B2B2AD)] shadow-[0_18px_35px_rgba(40,35,20,.10)]" />
      </div>

      {/* MESSAGE CHIP */}
      <div className="support-float absolute bottom-[26%] right-[7%] z-30 hidden rounded-2xl border border-black/[0.07] bg-white/85 px-3.5 py-3 shadow-[0_16px_40px_rgba(52,42,16,.08)] backdrop-blur-xl sm:block [animation-delay:-2s]">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-[#111] text-[#D4AF37]">
            <ChatIcon />
          </div>

          <div>
            <p className="text-[7px] font-black uppercase tracking-[0.13em] text-black/30">
              Need help?
            </p>

            <p className="mt-0.5 text-[9px] font-bold text-black/65">
              Reach our support team
            </p>
          </div>
        </div>
      </div>

      {/* PARTICLES */}
      <span className="absolute left-[15%] top-[48%] h-2 w-2 rounded-full bg-[#D4AF37]/55 shadow-[0_0_15px_rgba(212,175,55,.4)]" />
      <span className="absolute right-[18%] top-[8%] h-1.5 w-1.5 rounded-full bg-black/15" />
      <span className="absolute bottom-[20%] left-[48%] h-1.5 w-1.5 rounded-full bg-[#D4AF37]/70" />
    </div>
  );
}

export function Support() {
  return (
    <section
      id="support"
      className="relative overflow-hidden bg-[#FBFAF7] py-24 sm:py-28 lg:py-32"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -right-40 top-[15%] h-[650px] w-[650px] rounded-full bg-[#D4AF37]/[0.055] blur-[160px]" />

      <div className="pointer-events-none absolute -left-52 bottom-[-15%] h-[580px] w-[580px] rounded-full bg-black/[0.018] blur-[140px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.022) 1px, transparent 1px)",
          backgroundSize: "78px 78px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 86%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8">
          {/* LEFT */}
          <div className="relative z-20 mx-auto max-w-[560px] text-center lg:mx-0 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-[#F0EFEA] px-4 py-2 shadow-[inset_0_1px_0_white]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,.35)]" />

              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/45">
                BlackProp Support
              </span>
            </div>

            <h2 className="mt-7 text-[3.25rem] font-black leading-[0.93] tracking-[-0.065em] text-[#080808] sm:text-[4.5rem] lg:text-[5rem]">
              Help when
              <span className="block bg-[linear-gradient(100deg,#111_0%,#444_35%,#C89E35_72%,#77520A_100%)] bg-clip-text text-transparent">
                you need it.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[510px] text-sm leading-7 text-black/42 sm:text-base lg:mx-0">
              Find quick answers in our help center or reach out when
              you need more guidance.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#faq"
                className="gold-button group inline-flex h-12 min-w-[150px] items-center justify-center gap-3 rounded-xl px-6 text-[11px] font-black text-black"
              >
                Explore FAQ

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>

              <a
                href="#contact"
                className="group inline-flex h-12 min-w-[150px] items-center justify-center gap-3 rounded-xl border border-black/[0.08] bg-white/65 px-6 text-[11px] font-black text-black/65 shadow-[inset_0_1px_0_white] transition hover:border-black/[0.14] hover:bg-white hover:text-black"
              >
                Contact Us

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>
            </div>

            {/* MINI TRUST ROW */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
              {[
                "Account Help",
                "Platform Guidance",
                "Trading Questions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-[#B4861E]" />

                  <span className="text-[8px] font-bold text-black/32">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <SupportIllustration />
        </div>
      </div>

      <style jsx global>{`
        .support-float {
          animation: blackpropSupportFloat 6s ease-in-out infinite;
          will-change: transform;
        }

        .support-pillar {
          animation: blackpropSupportPillar 5s ease-in-out infinite;
          transform-origin: bottom;
        }

        .support-pillar:nth-child(2) {
          animation-delay: -1.4s;
        }

        .support-pillar:nth-child(3) {
          animation-delay: -2.6s;
        }

        @keyframes blackpropSupportFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes blackpropSupportPillar {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .support-float,
          .support-pillar {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}