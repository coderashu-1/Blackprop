/* =========================================================
   BLACKPROP SVG LOGO
========================================================= */

function BPMark({
  x = 0,
  y = 0,
  width = 58,
  height = 74,
  color = "#FFFFFF",
  className = "",
}: {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      x={x}
      y={y}
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

type IconName =
  | "refund"
  | "wallet"
  | "time"
  | "reward"
  | "news"
  | "capital"
  | "trophy"
  | "rules"
  | "points";

type Reason = {
  icon: IconName;
  title: string;
  description?: string;
};

const leftReasons: Reason[] = [
  {
    icon: "refund",
    title: "Refundable Challenge Fee",
  },
  {
    icon: "wallet",
    title: "Up to 90% Profit Split",
  },
  {
    icon: "time",
    title: "No Time Limit",
  },
  {
    icon: "reward",
    title: "Reward Access",
  },
  {
    icon: "news",
    title: "News Trading Allowed",
  },
];

const rightReasons: Reason[] = [
  {
    icon: "capital",
    title: "Up to $200K Accounts",
    description: "Built for serious progression",
  },
  {
    icon: "trophy",
    title: "Trader Rewards",
    description: "Performance-driven payouts",
  },
  {
    icon: "rules",
    title: "Clear Trading Rules",
    description: "Know the objectives upfront",
  },
  {
    icon: "points",
    title: "BlackProp Rewards",
    description: "Loyalty designed around traders",
  },
];

/* =========================================================
   ICONS
========================================================= */

function ReasonIcon({
  name,
}: {
  name: IconName;
}) {
  const className = "h-5 w-5 sm:h-[22px] sm:w-[22px]";

  switch (name) {
    case "refund":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="M14.7 8.4h-4a2 2 0 0 0 0 4h2.6a2 2 0 1 1 0 4H9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <path
            d="M12 6.4v11.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "wallet":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <rect
            x="3.5"
            y="6"
            width="17"
            height="13"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="M16 10h5v5h-5a2.5 2.5 0 0 1 0-5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <circle
            cx="16.8"
            cy="12.5"
            r=".8"
            fill="currentColor"
          />
        </svg>
      );

    case "time":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="M12 7.5V12l3.2 2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "reward":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <rect
            x="3.5"
            y="7"
            width="17"
            height="12"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="M7 11h10M7 15h5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <path
            d="m16.5 3.7 1 1.8 2 .3-1.4 1.4.3 2-1.9-.9-1.8.9.3-2-1.5-1.4 2-.3 1-1.8Z"
            fill="currentColor"
          />
        </svg>
      );

    case "news":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M5 4.5h12.5A1.5 1.5 0 0 1 19 6v13H6.5A2.5 2.5 0 0 1 4 16.5v-11a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="M8 8h7M8 11h7M8 14h4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "capital":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          <path
            d="M6 9h.01M18 15h.01"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "trophy":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M8 5h8v4.2c0 3-1.6 5-4 5s-4-2-4-5V5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="M8 7H4.5c0 3 1.3 4.5 3.7 4.5M16 7h3.5c0 3-1.3 4.5-3.7 4.5M12 14.5V18M8.5 20h7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "rules":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <rect
            x="5"
            y="4"
            width="14"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="m8 9 1.5 1.5 2.5-3M13.5 9H16M8 15l1.5 1.5 2.5-3M13.5 15H16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M6 19V8M12 19V4M18 19v-7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <path
            d="M4 19h16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
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
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m5.5 10.2 2.8 2.8 6.2-6.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   REASON CARD
========================================================= */

function ReasonCard({
  reason,
}: {
  reason: Reason;
}) {
  return (
    <article className="group relative min-h-[78px] overflow-hidden rounded-[16px] border border-white/[0.07] bg-[#111112] p-3.5 transition duration-300 sm:min-h-[96px] sm:rounded-[20px] sm:p-5 sm:hover:-translate-y-0.5 sm:hover:border-[#D4AF37]/22 sm:hover:bg-[#161617] lg:p-5 xl:p-6">
      <div className="pointer-events-none absolute -left-10 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-full bg-[#D4AF37]/0 blur-[40px] transition duration-300 sm:block group-hover:bg-[#D4AF37]/[0.055]" />

      <div className="absolute bottom-0 left-[12%] right-[12%] hidden h-px bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent transition sm:block group-hover:via-[#D4AF37]/30" />

      <div className="relative flex items-center gap-3 sm:gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-[#E4C15A] sm:h-12 sm:w-12 sm:border-[#D4AF37]/14 sm:bg-[#D4AF37]/[0.055] sm:transition sm:group-hover:border-[#D4AF37]/28 sm:group-hover:bg-[#D4AF37]/10">
          <ReasonIcon name={reason.icon} />
        </div>

        <div className="min-w-0">
          <h3 className="text-[15px] font-semibold leading-5 tracking-[-0.02em] text-white/92 sm:text-base sm:leading-6">
            {reason.title}
          </h3>

          {reason.description && (
            <p className="mt-1.5 hidden text-[13px] leading-5 text-white/48 sm:block sm:text-[13px]">
              {reason.description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   NEW CENTER — BLACKPROP CAPITAL ENGINE
========================================================= */

function BlackPropCapitalEngine() {
  return (
    <div className="relative mx-auto w-full max-w-[430px] sm:max-w-[500px] lg:max-w-[520px] xl:max-w-[540px]">
      <div className="relative aspect-square w-full">
        {/* =================================================
            AMBIENT LIGHT
        ================================================= */}

        <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.09] blur-[90px]" />

        <div className="absolute left-1/2 top-1/2 h-[43%] w-[43%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[55px]" />

        {/* =================================================
            SVG ENGINE
        ================================================= */}

        <svg
          viewBox="0 0 600 600"
          fill="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="engineGold"
              x1="100"
              y1="100"
              x2="500"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#523402" />
              <stop offset=".12" stopColor="#A97513" />
              <stop offset=".28" stopColor="#E9C253" />
              <stop offset=".39" stopColor="#FFF1A1" />
              <stop offset=".53" stopColor="#BC861C" />
              <stop offset=".68" stopColor="#E9C65D" />
              <stop offset=".85" stopColor="#82590C" />
              <stop offset="1" stopColor="#412902" />
            </linearGradient>

            <linearGradient
              id="engineSilver"
              x1="100"
              y1="90"
              x2="470"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B3B39" />
              <stop offset=".11" stopColor="#D6D6D2" />
              <stop offset=".27" stopColor="#747470" />
              <stop offset=".43" stopColor="#F2F2EE" />
              <stop offset=".6" stopColor="#646460" />
              <stop offset=".77" stopColor="#CACAC6" />
              <stop offset="1" stopColor="#343432" />
            </linearGradient>

            <radialGradient id="engineCore">
              <stop stopColor="#252522" />
              <stop offset=".48" stopColor="#10100F" />
              <stop offset=".78" stopColor="#080808" />
              <stop offset="1" stopColor="#030303" />
            </radialGradient>

            <radialGradient id="engineHalo">
              <stop stopColor="#D4AF37" stopOpacity=".18" />
              <stop offset=".45" stopColor="#D4AF37" stopOpacity=".05" />
              <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>

            <filter
              id="engineShadow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feDropShadow
                dx="0"
                dy="24"
                stdDeviation="18"
                floodColor="#000"
                floodOpacity=".85"
              />
            </filter>

            <filter
              id="engineGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="7"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* =================================================
              BACKGROUND HALO
          ================================================= */}

          <circle
            cx="300"
            cy="300"
            r="250"
            fill="url(#engineHalo)"
          />

          {/* =================================================
              LARGE ORBITAL RINGS
          ================================================= */}

          <ellipse
            cx="300"
            cy="300"
            rx="250"
            ry="165"
            transform="rotate(-18 300 300)"
            stroke="#D4AF37"
            strokeOpacity=".24"
            strokeWidth="2"
          />

          <ellipse
            cx="300"
            cy="300"
            rx="250"
            ry="165"
            transform="rotate(26 300 300)"
            stroke="#FFFFFF"
            strokeOpacity=".055"
          />

          <ellipse
            cx="300"
            cy="300"
            rx="213"
            ry="243"
            stroke="#D4AF37"
            strokeOpacity=".12"
            strokeDasharray="5 12"
          />

          <ellipse
            cx="300"
            cy="300"
            rx="178"
            ry="224"
            transform="rotate(67 300 300)"
            stroke="#D4AF37"
            strokeOpacity=".1"
          />

          {/* =================================================
              PERFORMANCE TRAJECTORY
          ================================================= */}

          <path
            d="M79 389C126 366 147 325 190 339C233 353 251 293 289 306C331 321 351 257 394 268C435 279 459 217 514 173"
            stroke="#D4AF37"
            strokeOpacity=".08"
            strokeWidth="18"
            strokeLinecap="round"
          />

          <path
            d="M79 389C126 366 147 325 190 339C233 353 251 293 289 306C331 321 351 257 394 268C435 279 459 217 514 173"
            stroke="#E2BD50"
            strokeOpacity=".75"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <circle
            cx="514"
            cy="173"
            r="5"
            fill="#E4C15A"
            filter="url(#engineGlow)"
          />

          {/* =================================================
              OUTER NODES
          ================================================= */}

          {[
            [119, 214],
            [190, 96],
            [392, 91],
            [491, 242],
            [473, 408],
            [327, 506],
            [145, 448],
          ].map(([x, y], index) => (
            <g
              key={`${x}-${y}`}
              transform={`translate(${x} ${y})`}
            >
              <circle
                r={index % 2 === 0 ? 8 : 6}
                fill="#080808"
                stroke="#D4AF37"
                strokeOpacity=".5"
              />

              <circle
                r="2.5"
                fill="#E2BC4C"
              />
            </g>
          ))}

          {/* =================================================
              INNER RING
          ================================================= */}

          <circle
            cx="300"
            cy="300"
            r="158"
            fill="#080808"
            fillOpacity=".4"
            stroke="url(#engineGold)"
            strokeWidth="3"
            filter="url(#engineShadow)"
          />

          <circle
            cx="300"
            cy="300"
            r="145"
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity=".05"
          />

          {/* GRID */}
          <g opacity=".06">
            {[218, 259, 300, 341, 382].map((x) => (
              <line
                key={`v-${x}`}
                x1={x}
                y1="175"
                x2={x}
                y2="425"
                stroke="white"
              />
            ))}

            {[218, 259, 300, 341, 382].map((y) => (
              <line
                key={`h-${y}`}
                x1="175"
                y1={y}
                x2="425"
                y2={y}
                stroke="white"
              />
            ))}
          </g>

          {/* =================================================
              CORE SHIELD
          ================================================= */}

          <g filter="url(#engineShadow)">
            <path
              d="
                M300 192
                387 226
                378 338
                300 411
                222 338
                213 226
                Z
              "
              fill="url(#engineSilver)"
            />

            <path
              d="
                M300 205
                374 234
                365 330
                300 394
                235 330
                226 234
                Z
              "
              fill="url(#engineCore)"
            />

            <path
              d="
                M300 216
                361 241
                353 322
                300 378
                247 322
                239 241
                Z
              "
              fill="none"
              stroke="#D4AF37"
              strokeOpacity=".28"
              strokeWidth="2"
            />

            {/* TOP SHINE */}
            <path
              d="M246 243 300 222 351 242"
              stroke="white"
              strokeOpacity=".16"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* BLACKPROP SVG LOGO */}
            <BPMark
              x={262}
              y={242}
              width={76}
              height={96}
              color="#FFFFFF"
              className="drop-shadow-[0_2px_2px_rgba(0,0,0,.75)]"
            />

            <text
              x="300"
              y="346"
              textAnchor="middle"
              fill="white"
              fillOpacity=".46"
              fontSize="12"
              fontWeight="800"
              letterSpacing="4"
            >
              CAPITAL
            </text>
          </g>

          {/* =================================================
              LOWER PEDESTAL
          ================================================= */}

          <g filter="url(#engineShadow)">
            <ellipse
              cx="300"
              cy="457"
              rx="110"
              ry="23"
              fill="#50504D"
            />

            <ellipse
              cx="300"
              cy="453"
              rx="106"
              ry="19"
              fill="#111"
              stroke="#D4AF37"
              strokeOpacity=".15"
            />

            <ellipse
              cx="300"
              cy="451"
              rx="71"
              ry="11"
              fill="#D4AF37"
              opacity=".05"
            />
          </g>
        </svg>

        {/* =================================================
            ROTATING RINGS
        ================================================= */}

        <div className="absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#D4AF37]/10 animate-spin [animation-duration:35s]" />

        <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full border border-[#D4AF37]/10 animate-spin [animation-direction:reverse] [animation-duration:28s]" />

        {/* =================================================
            FLOATING DATA PANELS
        ================================================= */}

        <div className="absolute left-[1%] top-[21%] rounded-xl border border-white/[0.08] bg-[#0B0B0C]/92 px-3 py-2.5 shadow-[0_14px_35px_rgba(0,0,0,.35)] backdrop-blur-xl sm:left-[3%] sm:px-3.5">
          <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/50 sm:text-[10px]">
            Capital
          </p>

          <p className="mt-1.5 text-[12px] font-black text-[#E8C75B] sm:text-[13px]">
            $200K
          </p>
        </div>

        <div className="absolute right-[1%] top-[27%] rounded-xl border border-white/[0.08] bg-[#0B0B0C]/92 px-3 py-2.5 shadow-[0_14px_35px_rgba(0,0,0,.35)] backdrop-blur-xl sm:right-[3%] sm:px-3.5">
          <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/50 sm:text-[10px]">
            Profit Split
          </p>

          <p className="mt-1.5 text-[12px] font-black text-[#E8C75B] sm:text-[13px]">
            Up to 90%
          </p>
        </div>

        <div className="absolute bottom-[12%] left-[2%] rounded-xl border border-white/[0.08] bg-[#0B0B0C]/92 px-3 py-2.5 shadow-[0_14px_35px_rgba(0,0,0,.35)] backdrop-blur-xl sm:left-[8%] sm:px-3.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            <span className="text-[10px] font-bold uppercase tracking-[0.10em] text-white/62 sm:text-[11px]">
              Risk Defined
            </span>
          </div>
        </div>

        <div className="absolute bottom-[9%] right-[1%] rounded-xl border border-white/[0.08] bg-[#0B0B0C]/92 px-3 py-2.5 shadow-[0_14px_35px_rgba(0,0,0,.35)] backdrop-blur-xl sm:right-[7%] sm:px-3.5">
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37]">
              <CheckIcon />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.10em] text-white/62 sm:text-[11px]">
              Trader Ready
            </span>
          </div>
        </div>
      </div>

      {/* LABEL */}
      <div className="mx-auto -mt-2 flex w-fit items-center gap-2.5 rounded-full border border-white/[0.075] bg-white/[0.03] px-3.5 py-2 sm:px-4">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

        <span className="text-[10px] font-black uppercase tracking-[0.13em] text-white/55 sm:text-[11px]">
          BlackProp Capital Engine
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export function WhyTradersLove() {
  return (
    <section
      id="why-traders-love"
      className="relative overflow-hidden bg-[#030303] py-14 sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[12%] h-[1000px] w-[1200px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.026] blur-[190px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.065]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 87%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-[920px] text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-2">
            <BPMark
              width={13}
              height={17}
              color="#FFFFFF"
              className="shrink-0"
            />

            <span className="text-[11px] font-black uppercase tracking-[0.15em] text-white/72 sm:text-[12px]">
              The BlackProp Advantage
            </span>
          </div>

          <h2 className="mt-6 text-[3.25rem] font-black uppercase leading-[0.92] tracking-[-0.065em] text-white min-[430px]:text-[3.55rem] sm:mt-7 sm:text-[4.9rem] md:text-[5.4rem] lg:text-[6rem] xl:text-[6.35rem]">
            Why traders
            <span className="block bg-[linear-gradient(100deg,#FFFFFF_0%,#D6D6D6_33%,#F0D16C_72%,#9A7219_100%)] bg-clip-text text-transparent">
              choose BlackProp.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-7 text-white/58 sm:mt-6 sm:text-[17px] sm:leading-8 lg:text-lg">
            More capital, clear objectives and a trading experience
            designed around disciplined performance.
          </p>
        </div>

        {/* =====================================================
            MOBILE + TABLET CENTER ART FIRST
        ====================================================== */}

        {/* =====================================================
            MOBILE — MINIMAL CAPITAL SUMMARY
        ====================================================== */}

        <div className="mx-auto mt-8 max-w-[520px] sm:hidden">
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0D0D0E] p-5 shadow-[0_24px_70px_rgba(0,0,0,.28)]">
            <div className="pointer-events-none absolute right-[-32px] top-1/2 -translate-y-1/2 opacity-[0.035]">
              <BPMark
                width={118}
                height={149}
                color="#FFFFFF"
              />
            </div>

            <div className="relative flex items-center gap-3.5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[16px] border border-white/[0.10] bg-white/[0.045]">
                <BPMark
                  width={23}
                  height={29}
                  color="#FFFFFF"
                />
              </div>

              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/48">
                  BlackProp Capital
                </p>

                <p className="mt-1 text-xl font-black tracking-[-0.04em] text-white">
                  Built for progression.
                </p>
              </div>
            </div>

            <div className="relative mt-5 grid grid-cols-3 gap-2">
              {[
                ["$200K", "Capital"],
                ["90%", "Profit Split"],
                ["No Limit", "Time"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[14px] border border-white/[0.065] bg-white/[0.025] px-2 py-3 text-center"
                >
                  <p className="text-[16px] font-black tracking-[-0.035em] text-[#E6C55A]">
                    {value}
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.08em] text-white/42">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            TABLET — PREMIUM ENGINE
        ====================================================== */}

        <div className="mx-auto mt-12 hidden max-w-[540px] sm:block lg:hidden">
          <BlackPropCapitalEngine />
        </div>

        {/* =====================================================
            MOBILE + TABLET REASONS
        ====================================================== */}

        <div className="mt-6 grid grid-cols-1 gap-2.5 min-[430px]:grid-cols-2 sm:mt-10 sm:gap-4 lg:hidden">
          {[...leftReasons, ...rightReasons].map(
            (reason) => (
              <ReasonCard
                key={reason.title}
                reason={reason}
              />
            )
          )}
        </div>

        {/* =====================================================
            DESKTOP LAYOUT
        ====================================================== */}

        <div className="mt-16 hidden items-center gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(400px,.98fr)_minmax(0,1fr)] xl:gap-8 2xl:gap-10">
          {/* LEFT */}
          <div className="grid gap-3">
            {leftReasons.map(
              (reason) => (
                <ReasonCard
                  key={reason.title}
                  reason={reason}
                />
              )
            )}
          </div>

          {/* CENTER */}
          <BlackPropCapitalEngine />

          {/* RIGHT */}
          <div className="grid gap-3">
            {rightReasons.map(
              (reason) => (
                <ReasonCard
                  key={reason.title}
                  reason={reason}
                />
              )
            )}

            {/* DESKTOP EXTRA BALANCE CARD */}
            <div className="relative overflow-hidden rounded-[20px] border border-[#D4AF37]/12 bg-[linear-gradient(135deg,rgba(212,175,55,.06),rgba(255,255,255,.018))] p-5">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#D4AF37]/[0.05] blur-[45px]" />

              <p className="relative text-[11px] font-black uppercase tracking-[0.15em] text-[#D4AF37]/78">
                Built differently
              </p>

              <p className="relative mt-2.5 text-base font-semibold leading-6 text-white/78">
                One ecosystem built around the trader.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="mx-auto my-12 h-px max-w-[880px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent sm:my-20" />

        {/* =====================================================
            FOOTER MESSAGE
        ====================================================== */}

        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#D4AF37]/78 sm:text-[12px]">
            Built for disciplined performance
          </p>

          <h3 className="mt-4 text-[2.45rem] font-black uppercase leading-[0.98] tracking-[-0.055em] text-white sm:text-[3.05rem] lg:text-[3.45rem]">
            More capital.
            <span className="text-[#D4AF37]">
              {" "}
              More opportunity.
            </span>

            <span className="mt-1.5 block text-white/45">
              Your execution does the rest.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-7 text-white/55 sm:text-[17px]">
            Choose the challenge that fits your trading style and
            work toward the next stage.
          </p>

          <a
            href="#challenges"
            className="group relative mt-8 inline-flex min-h-[54px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F5DA79_0%,#D4AF37_50%,#946A12_100%)] px-7 py-4 text-[15px] font-black text-[#080806] shadow-[0_18px_50px_rgba(212,175,55,.17)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(212,175,55,.27)] sm:w-auto sm:min-w-[220px] sm:text-base"
          >
            Get Funded

            <ArrowRight />

            <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/45 blur-md transition-all duration-700 group-hover:left-[125%]" />
          </a>
        </div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <p className="mx-auto mt-9 max-w-[780px] px-3 text-center text-[12px] font-medium leading-6 text-white/42 sm:mt-10 sm:text-[13px] sm:leading-7">
          Account limits, profit splits, refundable-fee terms,
          reward access and trading permissions shown in this
          frontend are demonstration terms until BlackProp&apos;s
          final commercial rules are confirmed.
        </p>
      </div>
    </section>
  );
}