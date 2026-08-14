import Image from "next/image";
import type { CSSProperties } from "react";

/* =========================================================
   BLACKPROP SVG LOGO
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


type Country = {
  name: string;
  flag: string;
};

const countries: Country[] = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "India", flag: "🇮🇳" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },

  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Brazil", flag: "🇧🇷" },

  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "Sweden", flag: "🇸🇪" },
];

/* =========================================================
   ICONS
========================================================= */

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="7.2"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M2.9 10h14.2M10 2.8c2 2 3 4.4 3 7.2s-1 5.2-3 7.2c-2-2-3-4.4-3-7.2s1-5.2 3-7.2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
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
        d="m5.5 10.2 2.8 2.8 6.2-6.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   STATIC CENTER GLOBE
========================================================= */

function WorldGlobe() {
  return (
    <div className="relative z-30 w-[52%] max-w-[470px] sm:w-[49%] lg:w-[48%]">
      {/* SIMPLE GOLD AMBIENCE */}
      <div className="pointer-events-none absolute inset-[-4%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,.10)_0%,rgba(212,175,55,.035)_42%,transparent_72%)]" />

      {/* GLOWING GOLD DOTS */}
      <span className="bp-dot-pulse pointer-events-none absolute left-[8%] top-[29%] z-30 h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,.75)]" />

      <span className="bp-dot-pulse pointer-events-none absolute bottom-[18%] right-[20%] z-30 h-2 w-2 rounded-full bg-[#E5C65C] shadow-[0_0_13px_rgba(212,175,55,.60)] [animation-delay:1.2s]" />

      {/* STATIC GOLD DOTS */}
      <span className="pointer-events-none absolute right-[8%] top-[37%] z-30 h-2 w-2 rounded-full bg-[#D4AF37]/65" />

      <span className="pointer-events-none absolute right-[27%] top-[10%] z-30 h-1 w-1 rounded-full bg-[#D4AF37]/70" />

      {/* STATIC SILVER DOTS */}
      <span className="pointer-events-none absolute bottom-[22%] left-[12%] z-30 h-1.5 w-1.5 rounded-full bg-white/35" />

      <span className="pointer-events-none absolute left-[33%] top-[8%] z-30 h-1.5 w-1.5 rounded-full bg-white/30" />

      {/* STATIC GLOBE */}
      <div className="relative aspect-square">
        <Image
          src="/images/globe.png"
          alt="BlackProp global network globe"
          width={800}
          height={800}
          draggable={false}
          sizes="(max-width: 480px) 52vw, (max-width: 640px) 49vw, 470px"
          className="pointer-events-none relative z-10 h-full w-full select-none object-contain"
        />
      </div>

      {/* BP CENTER */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-40 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/[0.12] bg-[#080808] shadow-[0_0_24px_rgba(0,0,0,.45)] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
        <BPMark
          width={24}
          height={31}
          color="#FFFFFF"
          className="drop-shadow-[0_1px_1px_rgba(0,0,0,.75)] sm:h-[36px] sm:w-[29px] lg:h-[39px] lg:w-[31px]"
        />
      </div>
    </div>
  );
}

/* =========================================================
   COUNTRY CARD
========================================================= */

function CountryCard({
  country,
}: {
  country: Country;
}) {
  return (
    <div
      title={country.name}
      className="
        flex
        min-h-[46px]
        min-w-[46px]
        items-center
        justify-center
        gap-1.5
        rounded-xl
        border
        border-white/[0.10]
        bg-[#101011]/95
        px-2
        py-2
        shadow-[0_7px_16px_rgba(0,0,0,.25)]
        backdrop-blur-md

        min-[430px]:min-w-[92px]
        min-[430px]:gap-2
        min-[430px]:px-2.5

        sm:min-h-[52px]
        sm:min-w-[116px]
        sm:rounded-2xl
        sm:px-3
        sm:py-2.5
      "
    >
      <span className="text-[23px] leading-none min-[430px]:text-[24px] sm:text-[28px]">
        {country.flag}
      </span>

      <span className="hidden max-w-[66px] truncate whitespace-nowrap text-[9px] font-semibold text-white/65 min-[430px]:block sm:max-w-[82px] sm:text-[10px] lg:text-[11px]">
        {country.name}
      </span>
    </div>
  );
}

/* =========================================================
   COUNTRY ORBIT
========================================================= */

function CountryOrbit({
  items,
  size,
  radius,
  duration,
  offset = 0,
  reverse = false,
  subtle = false,
}: {
  items: Country[];
  size: string;
  radius: number;
  duration: number;
  offset?: number;
  reverse?: boolean;
  subtle?: boolean;
}) {
  return (
    <div
      className={`bp-country-orbit absolute left-1/2 top-1/2 rounded-full border ${
        subtle
          ? "border-white/[0.04]"
          : "border-[#D4AF37]/[0.085]"
      } ${size}`}
      style={
        {
          "--bp-orbit-duration": `${duration}s`,
          "--bp-orbit-direction": reverse ? "reverse" : "normal",
        } as CSSProperties
      }
    >
      {items.map((country, index) => {
        const angle =
          offset +
          index * (360 / items.length);

        const radians =
          (angle * Math.PI) / 180;

        const left = (
          50 +
          Math.cos(radians) * radius
        ).toFixed(4);

        const top = (
          50 +
          Math.sin(radians) * radius
        ).toFixed(4);

        return (
          <div
            key={country.name}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* COUNTER ROTATION KEEPS CARDS UPRIGHT */}
            <div
              className="bp-country-counter"
              style={
                {
                  "--bp-orbit-duration": `${duration}s`,
                  "--bp-counter-direction": reverse ? "normal" : "reverse",
                } as CSSProperties
              }
            >
              <CountryCard country={country} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* =========================================================
   GLOBAL NETWORK
========================================================= */

function GlobalNetwork() {
  const outerCountries =
    countries.slice(0, 6);

  const middleCountries =
    countries.slice(6, 12);

  const innerCountries =
    countries.slice(12, 18);

  return (
    <div className="bp-global-network relative mx-auto aspect-square w-full max-w-[720px] sm:max-w-[880px] lg:max-w-[1060px]">
      {/* =====================================================
          SIMPLE AMBIENT GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,.05)_0%,rgba(212,175,55,.012)_42%,transparent_72%)]" />

      {/* =====================================================
          NETWORK DOTS
      ====================================================== */}

      <span className="bp-dot-pulse pointer-events-none absolute left-[5%] top-[44%] h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,.55)]" />

      <span className="pointer-events-none absolute left-[15%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/20" />

      <span className="pointer-events-none absolute right-[11%] top-[28%] h-2 w-2 rounded-full bg-white/15" />

      <span className="bp-dot-pulse pointer-events-none absolute bottom-[14%] right-[23%] h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_13px_rgba(212,175,55,.5)] [animation-delay:1.5s]" />

      <span className="pointer-events-none absolute bottom-[18%] left-[20%] h-1.5 w-1.5 rounded-full bg-[#D4AF37]/45" />

      <span className="pointer-events-none absolute right-[29%] top-[5%] h-1 w-1 rounded-full bg-white/20" />

      <span className="pointer-events-none absolute left-[39%] top-[6%] h-1.5 w-1.5 rounded-full bg-[#D4AF37]/55" />

      <span className="pointer-events-none absolute bottom-[6%] left-[46%] h-1 w-1 rounded-full bg-white/25" />

      <span className="pointer-events-none absolute right-[4%] top-[54%] h-1.5 w-1.5 rounded-full bg-[#D4AF37]/45" />

      {/* =====================================================
          COUNTRY RINGS

          Outer  = clockwise
          Middle = counter-clockwise
          Inner  = clockwise
      ====================================================== */}

      <CountryOrbit
        items={outerCountries}
        size="h-[88%] w-[88%] sm:h-[91%] sm:w-[91%] lg:h-[92%] lg:w-[92%]"
        radius={49}
        duration={68}
        offset={-9}
      />

      <CountryOrbit
        items={middleCountries}
        size="h-[70%] w-[70%] sm:h-[72%] sm:w-[72%] lg:h-[73%] lg:w-[73%]"
        radius={49}
        duration={56}
        reverse
        offset={18}
        subtle
      />

      <CountryOrbit
        items={innerCountries}
        size="h-[53%] w-[53%] sm:h-[54%] sm:w-[54%] lg:h-[55%] lg:w-[55%]"
        radius={49}
        duration={48}
        offset={5}
      />

      {/* STATIC GLOBE */}
      <div className="absolute inset-0 flex items-center justify-center">
        <WorldGlobe />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export function GlobalAccess() {
  return (
    <section
      id="global-access"
      className="relative overflow-hidden bg-[#030303] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      {/* =====================================================
          DARK PREMIUM BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[1100px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,.055)_0%,rgba(212,175,55,.018)_30%,transparent_66%)]" />

      {/* SUBTLE SILVER LIGHT */}
      <div className="pointer-events-none absolute -left-[250px] top-[20%] h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.018)_0%,transparent_70%)]" />

      {/* SUBTLE GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px)",
          backgroundSize: "86px 86px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      />

      {/* TOP LINE */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-[840px] text-center">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-2.5">
            <BPMark
              width={14}
              height={18}
              color="#FFFFFF"
              className="shrink-0"
            />

            <span className="text-[11px] font-black uppercase tracking-[0.16em] text-white/65 sm:text-[12px]">
              BlackProp Worldwide
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mt-7 text-[3.45rem] font-black leading-[0.92] tracking-[-0.065em] text-white min-[430px]:text-[3.8rem] sm:text-[4.8rem] md:text-[5.15rem] lg:text-[5.6rem] xl:text-[6rem]">
            Trade beyond

            <span className="block bg-[linear-gradient(100deg,#FFFFFF_0%,#D5D5D1_32%,#E2BF57_68%,#80590C_100%)] bg-clip-text text-transparent">
              borders.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-7 text-white/52 sm:text-[17px] sm:leading-8 lg:text-lg">
            A global-facing BlackProp experience
            designed to connect ambitious traders
            across supported markets and regions.
          </p>

          {/* META */}
          <div className="mx-auto mt-7 flex w-fit items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 sm:px-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

            <span className="text-[10px] font-black uppercase tracking-[0.13em] text-white/52 sm:text-[11px]">
              Global trader network
            </span>
          </div>
        </div>

        {/* =====================================================
            NETWORK
        ====================================================== */}

        <div className="mx-auto mt-5 max-w-[1120px] sm:mt-4 lg:mt-3">
          <GlobalNetwork />
        </div>

        {/* =====================================================
            STATUS
        ====================================================== */}

        <div className="mx-auto mt-2 flex max-w-full flex-wrap items-center justify-center gap-3 rounded-full border border-white/[0.08] bg-[#0B0B0C] px-4 py-3 sm:-mt-4 sm:w-fit sm:flex-nowrap sm:px-5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/[0.10] bg-white/[0.035] text-white">
            <CheckIcon />
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.12em] text-white/58 sm:text-[11px]">
              Global community
            </span>

            <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />

            <span className="text-[10px] font-black uppercase tracking-[0.12em] text-white/58 sm:text-[11px]">
              One experience
            </span>
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="mx-auto mt-8 max-w-[760px] px-3 text-center text-[13px] font-medium leading-6 text-white/45 sm:text-[14px] sm:leading-7">
          Country flags are illustrative. Final
          BlackProp availability should reflect actual
          supported jurisdictions and applicable
          restrictions.
        </p>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        .bp-global-network {
          contain: layout paint;
          isolation: isolate;
        }

        /* ===============================================
           COUNTRY ORBIT
        =============================================== */

        .bp-country-orbit {
          transform:
            translate3d(-50%, -50%, 0)
            rotate(0deg);

          transform-origin: 50% 50%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;

          animation: bpCountryOrbit var(--bp-orbit-duration, 60s) linear infinite;
          animation-direction: var(--bp-orbit-direction, normal);

          -webkit-animation: bpCountryOrbit var(--bp-orbit-duration, 60s) linear infinite;
          -webkit-animation-direction: var(--bp-orbit-direction, normal);

          will-change: transform;
        }

        /*
         * Opposite animation direction keeps
         * country cards facing upright.
         */
        .bp-country-counter {
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;

          animation: bpCountryCounter var(--bp-orbit-duration, 60s) linear infinite;
          animation-direction: var(--bp-counter-direction, reverse);

          -webkit-animation: bpCountryCounter var(--bp-orbit-duration, 60s) linear infinite;
          -webkit-animation-direction: var(--bp-counter-direction, reverse);

          will-change: transform;
        }

        @keyframes bpCountryOrbit {
          from {
            transform:
              translate3d(-50%, -50%, 0)
              rotate(0deg);
          }

          to {
            transform:
              translate3d(-50%, -50%, 0)
              rotate(360deg);
          }
        }

        @keyframes bpCountryCounter {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* ===============================================
           DOT PULSE
        =============================================== */

        .bp-dot-pulse {
          animation:
            bpDotPulse
            3.2s
            ease-in-out
            infinite;
        }

        @keyframes bpDotPulse {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(0.88);
          }

          50% {
            opacity: 1;
            transform: scale(1.18);
          }
        }

        /* ===============================================
           ACCESSIBILITY
        =============================================== */

        @media (prefers-reduced-motion: reduce) {
          .bp-country-orbit,
          .bp-country-counter,
          .bp-dot-pulse {
            animation: none !important;
          }
        }

        /* ===============================================
           MOBILE
        =============================================== */

        @media (max-width: 640px) {
          .bp-country-orbit,
          .bp-country-counter {
            animation-duration: 34s !important;
            -webkit-animation-duration: 34s !important;
          }

          .bp-country-orbit:nth-of-type(2),
          .bp-country-orbit:nth-of-type(2) .bp-country-counter {
            animation-duration: 29s !important;
            -webkit-animation-duration: 29s !important;
          }

          .bp-country-orbit:nth-of-type(3),
          .bp-country-orbit:nth-of-type(3) .bp-country-counter {
            animation-duration: 25s !important;
            -webkit-animation-duration: 25s !important;
          }
        }
      `}</style>
    </section>
  );
}