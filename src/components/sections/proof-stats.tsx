const stats = {
  rewards: "$1.2M+",
  averageReward: "$2,450",
  traders: "8K+",
};

/* =========================================================
   BLACKPROP BP MARK
   Same SVG mark from your original code
   ========================================================= */

function BPMark({
  x = 0,
  y = 0,
  width = 58,
  height = 74,
  color = "#FFFFFF",
  opacity = 1,
  className = "",
}: {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
  opacity?: number | string;
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
      opacity={opacity}
      className={className}
      shapeRendering="geometricPrecision"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Outer B */}
      <path
        fill="currentColor"
        d="M28 0H196C244 0 278 48 278 105C278 130 271 150 256 172C277 190 289 213 289 241V267C289 319 249 365 195 365H90V237H161C201 237 230 202 230 168V139C230 104 207 78 177 78H0V25C0 11 12 0 28 0Z"
      />

      {/* Inner P / left stem */}
      <path
        fill="currentColor"
        d="M0 129H157C171 129 181 141 181 156C181 171 171 183 157 183H41V365C18 365 0 352 0 335V129Z"
      />
    </svg>
  );
}

/* =========================================================
   LEFT CARD — REWARDS ARTWORK
   Full but simple / premium
   ========================================================= */

function RewardsArtwork() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* =====================================================
          AMBIENT LIGHT
          ===================================================== */}

      <div className="absolute bottom-[-140px] left-1/2 h-[560px] w-[620px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.10] blur-[135px]" />

      <div className="absolute bottom-[8%] left-[8%] h-[280px] w-[280px] rounded-full bg-[#D4AF37]/[0.035] blur-[90px]" />

      <div className="absolute right-[-7%] top-[27%] h-[310px] w-[310px] rounded-full bg-white/[0.025] blur-[110px]" />

      {/* =====================================================
          SUBTLE GRID
          ===================================================== */}

      <div
        className="absolute inset-x-[8%] bottom-[5%] top-[32%] opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        }}
      />

      {/* =====================================================
          BIG BACKGROUND WATERMARK
          ===================================================== */}

      <div className="absolute bottom-[30px] right-[-42px] opacity-[0.025]">
        <BPMark
          width={330}
          height={420}
          color="#FFFFFF"
        />
      </div>

      {/* =====================================================
          MAIN VISUAL AREA
          ===================================================== */}

      <div className="absolute inset-x-0 bottom-[50px] h-[430px] sm:bottom-[58px] sm:h-[455px]">
        {/* Large architectural outer circle */}

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/[0.10] sm:h-[390px] sm:w-[390px]" />

        <div className="absolute left-1/2 top-1/2 h-[294px] w-[294px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045] sm:h-[326px] sm:w-[326px]" />

        {/* Broken ring effect */}

        <svg
          viewBox="0 0 420 420"
          className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 sm:h-[430px] sm:w-[430px]"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="rewardRingGold"
              x1="70"
              y1="90"
              x2="350"
              y2="330"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D4AF37" stopOpacity="0" />
              <stop
                offset=".3"
                stopColor="#E9CB68"
                stopOpacity=".7"
              />
              <stop
                offset=".7"
                stopColor="#A77D20"
                stopOpacity=".4"
              />
              <stop
                offset="1"
                stopColor="#D4AF37"
                stopOpacity="0"
              />
            </linearGradient>

            <radialGradient id="rewardCoreGlow">
              <stop stopColor="#D4AF37" stopOpacity=".18" />
              <stop
                offset=".45"
                stopColor="#D4AF37"
                stopOpacity=".06"
              />
              <stop
                offset="1"
                stopColor="#D4AF37"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>

          <circle
            cx="210"
            cy="210"
            r="172"
            stroke="url(#rewardRingGold)"
            strokeWidth="1.4"
            strokeDasharray="105 40 18 45"
            transform="rotate(-24 210 210)"
          />

          <circle
            cx="210"
            cy="210"
            r="143"
            stroke="white"
            strokeOpacity=".045"
            strokeDasharray="2 10"
          />

          <circle
            cx="210"
            cy="210"
            r="118"
            fill="url(#rewardCoreGlow)"
          />

          {/* Small architectural marks */}

          <path
            d="M210 22V48"
            stroke="#D4AF37"
            strokeOpacity=".32"
          />

          <path
            d="M210 372V398"
            stroke="#D4AF37"
            strokeOpacity=".18"
          />

          <path
            d="M22 210H48"
            stroke="white"
            strokeOpacity=".12"
          />

          <path
            d="M372 210H398"
            stroke="white"
            strokeOpacity=".12"
          />

          <circle
            cx="210"
            cy="38"
            r="3"
            fill="#E5C763"
          />

          <circle
            cx="382"
            cy="210"
            r="2"
            fill="#D4AF37"
            fillOpacity=".7"
          />

          <circle
            cx="38"
            cy="210"
            r="2"
            fill="#FFFFFF"
            fillOpacity=".25"
          />
        </svg>

        {/* =====================================================
            CENTER BRAND CORE
            ===================================================== */}

        <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 sm:h-[210px] sm:w-[210px]">
          {/* Glow */}

          <div className="absolute inset-[14%] rounded-[42px] bg-[#D4AF37]/20 blur-[42px]" />

          {/* Outer frame */}

          <div className="absolute inset-0 rotate-[3deg] rounded-[46px] border border-[#E3C45F]/25 bg-[linear-gradient(145deg,rgba(212,175,55,.10),rgba(255,255,255,.018),rgba(212,175,55,.035))] shadow-[0_35px_70px_rgba(0,0,0,.65)]" />

          {/* Second frame */}

          <div className="absolute inset-[7px] rounded-[40px] border border-white/[0.07] bg-[#09090A]" />

          {/* Thin highlight */}

          <div className="absolute inset-[8px] rounded-[39px] bg-[linear-gradient(145deg,rgba(255,255,255,.045),transparent_40%,rgba(212,175,55,.025))]" />

          {/* Inner logo plate */}

          <div className="absolute inset-[28px] flex items-center justify-center rounded-[30px] border border-[#D4AF37]/[0.18] bg-[radial-gradient(circle_at_35%_25%,#232324_0%,#111112_35%,#070708_75%)] shadow-[inset_0_1px_0_rgba(255,255,255,.06)]">
            <div className="absolute left-1/2 top-0 h-px w-[55%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E4C45F]/50 to-transparent" />

            <BPMark
              width={60}
              height={76}
              color="#FFFFFF"
              className="drop-shadow-[0_5px_14px_rgba(0,0,0,.7)]"
            />
          </div>

          {/* Corner details */}

          <span className="absolute left-[17px] top-[17px] h-1 w-1 rounded-full bg-[#D4AF37]/70" />

          <span className="absolute right-[17px] top-[17px] h-1 w-1 rounded-full bg-[#D4AF37]/35" />

          <span className="absolute bottom-[17px] left-[17px] h-1 w-1 rounded-full bg-white/15" />

          <span className="absolute bottom-[17px] right-[17px] h-1 w-1 rounded-full bg-[#D4AF37]/55" />
        </div>

        {/* =====================================================
            TOP STATUS PILL
            ===================================================== */}

        <div className="absolute left-1/2 top-[10px] flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-white/[0.07] bg-[#0A0A0B]/80 px-4 py-2 shadow-[0_15px_35px_rgba(0,0,0,.32)] backdrop-blur-xl">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E1BF53] opacity-40" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E1BF53]" />
          </span>

          <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.18em] text-white/45 sm:text-[9px]">
            Verified rewards
          </span>
        </div>

        {/* =====================================================
            LEFT DATA CARD
            ===================================================== */}

        <div className="absolute left-[5%] top-[39%] hidden min-w-[125px] rounded-2xl border border-white/[0.07] bg-[#09090A]/85 p-3.5 shadow-[0_18px_40px_rgba(0,0,0,.38)] backdrop-blur-xl sm:block lg:left-[7%]">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-white/25">
              Total paid
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
          </div>

          <p className="mt-2 text-[19px] font-black tracking-[-0.05em] text-white">
            $1.2M+
          </p>

          <div className="mt-2.5 h-px w-full bg-white/[0.05]" />

          <p className="mt-2 text-[8px] font-medium text-[#D8B84F]/70">
            Rewards distributed
          </p>
        </div>

        {/* =====================================================
            RIGHT DATA CARD
            ===================================================== */}

        <div className="absolute right-[5%] top-[33%] hidden min-w-[120px] rounded-2xl border border-[#D4AF37]/[0.12] bg-[#09090A]/85 p-3.5 shadow-[0_18px_40px_rgba(0,0,0,.38)] backdrop-blur-xl sm:block lg:right-[7%]">
          <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-white/25">
            Profit split
          </p>

          <div className="mt-2 flex items-end gap-1">
            <p className="text-[21px] font-black leading-none tracking-[-0.05em] text-[#E3C35D]">
              90%
            </p>

            <span className="mb-[2px] text-[7px] font-medium text-white/25">
              trader
            </span>
          </div>

          <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/[0.05]">
            <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-[#806111] to-[#E5C75F]" />
          </div>
        </div>

        {/* =====================================================
            SMALL LEFT DOT / CONNECTION
            ===================================================== */}

        <div className="absolute left-[18%] top-[24%] hidden items-center gap-2 lg:flex">
          <span className="h-1 w-1 rounded-full bg-[#D4AF37]/70 shadow-[0_0_10px_rgba(212,175,55,.6)]" />

          <span className="h-px w-12 bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
        </div>

        {/* =====================================================
            SMALL RIGHT DOT / CONNECTION
            ===================================================== */}

        <div className="absolute right-[17%] top-[68%] hidden items-center gap-2 lg:flex">
          <span className="h-px w-12 bg-gradient-to-l from-white/15 to-transparent" />

          <span className="h-1 w-1 rounded-full bg-white/30" />
        </div>

        {/* =====================================================
            BOTTOM STATUS BAR
            ===================================================== */}

        <div className="absolute bottom-[-2px] left-1/2 flex w-[84%] max-w-[430px] -translate-x-1/2 items-center justify-between rounded-2xl border border-white/[0.06] bg-[#09090A]/75 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,.35)] backdrop-blur-xl sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#D4AF37]/15 bg-[#D4AF37]/[0.055]">
              <BPMark
                width={11}
                height={14}
                color="#DCC05B"
              />
            </div>

            <div>
              <p className="text-[8px] font-semibold text-white/55">
                BlackProp Rewards
              </p>

              <p className="mt-0.5 text-[7px] text-white/20">
                Performance rewarded
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

            <span className="text-[7px] font-bold uppercase tracking-[0.13em] text-white/30">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          FLOOR / DEPTH
          ===================================================== */}

      <div className="absolute bottom-[34px] left-1/2 h-[32px] w-[360px] -translate-x-1/2 rounded-full bg-black/80 blur-2xl" />

      <div className="absolute bottom-[48px] left-1/2 h-px w-[48%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      {/* Bottom fade */}

      <div className="absolute inset-x-0 bottom-0 h-[130px] bg-gradient-to-t from-[#080809] via-[#080809]/45 to-transparent" />
    </div>
  );
}

/* =========================================================
   TROPHY ARTWORK
   ========================================================= */

function TrophyArtwork() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[90px]" />

      <svg
        viewBox="0 0 520 330"
        className="absolute bottom-[-22px] right-[-40px] h-[108%] w-[76%]"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="metalCup"
            x1="105"
            y1="40"
            x2="360"
            y2="300"
          >
            <stop stopColor="#202020" />
            <stop
              offset=".08"
              stopColor="#F1F1F1"
            />
            <stop
              offset=".19"
              stopColor="#5B5B5B"
            />
            <stop
              offset=".35"
              stopColor="#F8F8F8"
            />
            <stop
              offset=".53"
              stopColor="#353535"
            />
            <stop
              offset=".68"
              stopColor="#CFCFCF"
            />
            <stop
              offset=".82"
              stopColor="#282828"
            />
            <stop
              offset="1"
              stopColor="#111"
            />
          </linearGradient>

          <linearGradient
            id="cupGold"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#704D09" />
            <stop
              offset=".25"
              stopColor="#FFF1A0"
            />
            <stop
              offset=".48"
              stopColor="#C89927"
            />
            <stop
              offset=".75"
              stopColor="#F4D36D"
            />
            <stop
              offset="1"
              stopColor="#6A4807"
            />
          </linearGradient>

          <filter
            id="trophyShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="220%"
          >
            <feDropShadow
              dx="0"
              dy="22"
              stdDeviation="16"
              floodColor="#000"
              floodOpacity=".8"
            />
          </filter>
        </defs>

        <g filter="url(#trophyShadow)">
          {/* Handles */}

          <path
            d="M161 82c-62-17-98 5-92 53 5 41 34 66 88 67"
            stroke="url(#metalCup)"
            strokeWidth="18"
            strokeLinecap="round"
          />

          <path
            d="M335 82c62-17 98 5 92 53-5 41-34 66-88 67"
            stroke="url(#metalCup)"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* Cup */}

          <path
            d="M145 57h206c-9 107-39 164-103 169-64-5-94-62-103-169Z"
            fill="url(#metalCup)"
          />

          <path
            d="M146 59h204"
            stroke="url(#cupGold)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Highlight */}

          <path
            d="M184 74c-9 64 8 107 49 133"
            stroke="white"
            strokeOpacity=".21"
            strokeWidth="11"
            strokeLinecap="round"
          />

          {/* Logo center */}

          <circle
            cx="248"
            cy="137"
            r="38"
            fill="#111"
            fillOpacity=".5"
            stroke="#D4AF37"
            strokeOpacity=".55"
          />

          <BPMark
            x={228}
            y={110}
            width={40}
            height={51}
            color="#FFFFFF"
          />

          {/* Stem */}

          <path
            d="M228 218h40l10 54h-60l10-54Z"
            fill="url(#metalCup)"
          />

          {/* Gold separator */}

          <rect
            x="201"
            y="266"
            width="94"
            height="16"
            rx="8"
            fill="url(#cupGold)"
          />

          {/* Base */}

          <rect
            x="174"
            y="280"
            width="148"
            height="36"
            rx="15"
            fill="url(#metalCup)"
          />
        </g>
      </svg>
    </div>
  );
}

/* =========================================================
   GLOBE ARTWORK
   ========================================================= */

function GlobeArtwork() {
  const points = [
    [54, 15],
    [60, 17],
    [67, 19],
    [73, 24],
    [78, 29],
    [82, 35],
    [79, 40],
    [73, 44],
    [68, 48],
    [70, 54],
    [74, 59],
    [72, 66],
    [68, 72],
    [63, 78],
    [57, 82],
    [52, 77],
    [49, 71],
    [45, 66],
    [41, 62],
    [36, 58],
    [31, 54],
    [26, 49],
    [24, 43],
    [27, 37],
    [32, 32],
    [37, 27],
    [43, 23],
    [49, 20],
    [56, 28],
    [62, 31],
    [68, 34],
    [64, 38],
    [58, 41],
    [52, 39],
    [47, 36],
    [43, 41],
    [47, 47],
    [53, 49],
    [58, 52],
    [62, 56],
    [60, 62],
    [56, 67],
    [52, 63],
    [47, 59],
    [42, 55],
    [37, 51],
    [33, 46],
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -bottom-24 -right-16 h-[360px] w-[360px] rounded-full bg-[#D4AF37]/10 blur-[100px]" />

      <div className="absolute -bottom-[115px] -right-[55px] h-[420px] w-[420px] rounded-full border border-white/[0.08] bg-[radial-gradient(circle_at_35%_27%,#313131_0%,#151515_30%,#080808_65%,#020202_100%)] shadow-[inset_-55px_-35px_90px_rgba(0,0,0,.9),0_30px_70px_rgba(0,0,0,.7)]">
        {/* Longitude */}

        <div className="absolute left-1/2 top-[7%] h-[86%] w-[34%] -translate-x-1/2 rounded-[50%] border border-white/[0.045]" />

        <div className="absolute left-1/2 top-[7%] h-[86%] w-[65%] -translate-x-1/2 rounded-[50%] border border-white/[0.03]" />

        {/* Latitude */}

        <div className="absolute left-[7%] top-1/2 h-[32%] w-[86%] -translate-y-1/2 rounded-[50%] border border-white/[0.035]" />

        <div className="absolute left-[10%] top-[29%] h-[18%] w-[80%] rounded-[50%] border border-white/[0.035]" />

        {/* Map points */}

        {points.map(([left, top], index) => (
          <span
            key={`${left}-${top}-${index}`}
            className={`absolute rounded-full ${
              index % 4 === 0
                ? "h-[7px] w-[7px] bg-[#F1D16D]"
                : index % 2 === 0
                  ? "h-[5px] w-[5px] bg-[#C99D30]"
                  : "h-[4px] w-[4px] bg-[#806519]"
            } shadow-[0_0_12px_rgba(212,175,55,.25)]`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
          />
        ))}

        {/* Highlight */}

        <div className="absolute left-[19%] top-[14%] h-[40%] w-[20%] rotate-[28deg] rounded-full bg-white/[0.05] blur-xl" />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
   ========================================================= */

export function ProofStats() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-16 sm:py-20 lg:py-24 xl:py-28">
      {/* SECTION AMBIENCE */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[550px] w-[950px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            MAIN STAT CARDS
            ===================================================== */}

        <div className="grid gap-4 lg:grid-cols-[1.08fr_.92fr] xl:gap-5">
          {/* ===================================================
              LARGE LEFT REWARDS CARD
              =================================================== */}

          <article className="group relative min-h-[650px] overflow-hidden rounded-[32px] border border-white/[0.075] bg-[linear-gradient(145deg,#161617_0%,#0C0C0D_48%,#080809_100%)] shadow-[0_35px_100px_rgba(0,0,0,.40)] sm:min-h-[690px] lg:min-h-[720px]">
            <RewardsArtwork />

            {/* Overall vignette */}

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,.02)_0%,transparent_43%,rgba(3,3,3,.08)_75%,rgba(3,3,3,.32)_100%)]" />

            {/* Keep top readable */}

            <div className="pointer-events-none absolute inset-x-0 top-0 h-[290px] bg-gradient-to-b from-[#111112] via-[#111112]/90 to-transparent" />

            {/* Top gold edge */}

            <div className="absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[#E8CA67]/45 to-transparent" />

            {/* Subtle inner border */}

            <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/[0.018]" />

            {/* TEXT */}

            <div className="relative z-20 p-7 sm:p-9 lg:p-10">
              <div className="flex items-center gap-2.5">
                <span className="h-px w-5 bg-[#D4AF37]/65" />

                <p className="text-[11px] font-bold uppercase tracking-[0.19em] text-[#D4AF37]/80 sm:text-[12px]">
                  Rewards paid
                </p>
              </div>

              <h3 className="mt-4 text-[3.6rem] font-black leading-none tracking-[-0.065em] text-white sm:text-[4.8rem] lg:text-[5.2rem]">
                {stats.rewards}
              </h3>

              <p className="mt-4 max-w-[380px] text-[15px] leading-7 text-white/[0.46] sm:text-base">
                Capital rewarded to traders for disciplined
                performance.
              </p>

              {/* Tiny trust indicators */}

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />

                  <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-white/[0.25]">
                    Verified
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/25" />

                  <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-white/[0.25]">
                    Performance based
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* ===================================================
              RIGHT COLUMN
              =================================================== */}

          <div className="grid gap-4">
            {/* AVERAGE REWARD */}

            <article className="group relative min-h-[330px] overflow-hidden rounded-[32px] border border-white/[0.075] bg-[linear-gradient(145deg,#171718,#09090A)] sm:min-h-[350px] lg:min-h-[350px]">
              <TrophyArtwork />

              <div className="absolute inset-0 bg-gradient-to-r from-[#111112] via-[#111112]/75 to-transparent" />

              <div className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="relative z-20 max-w-[66%] p-6 sm:max-w-[60%] sm:p-8 lg:max-w-[58%]">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 sm:text-[12px]">
                  Average reward
                </p>

                <h3 className="mt-4 text-[2.8rem] font-black leading-none tracking-[-0.055em] text-white sm:text-[3.4rem]">
                  {stats.averageReward}
                </h3>

                <p className="mt-4 text-[14px] leading-6 text-white/[0.45] sm:text-[15px]">
                  Average reward across successful payout cycles.
                </p>
              </div>
            </article>

            {/* GLOBAL TRADERS */}

            <article className="group relative min-h-[330px] overflow-hidden rounded-[32px] border border-white/[0.075] bg-[linear-gradient(145deg,#171718,#09090A)] sm:min-h-[350px] lg:min-h-[350px]">
              <GlobeArtwork />

              <div className="absolute inset-0 bg-gradient-to-r from-[#111112] via-[#111112]/72 to-transparent" />

              <div className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/28 to-transparent" />

              <div className="relative z-20 max-w-[66%] p-6 sm:max-w-[60%] sm:p-8 lg:max-w-[58%]">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4AF37]/70 sm:text-[12px]">
                  Global traders
                </p>

                <h3 className="mt-4 text-[2.8rem] font-black leading-none tracking-[-0.055em] text-white sm:text-[3.4rem]">
                  {stats.traders}
                </h3>

                <p className="mt-4 text-[14px] leading-6 text-white/[0.45] sm:text-[15px]">
                  Traders connected across global financial markets.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATS
            ===================================================== */}

        <div className="mt-4 grid overflow-hidden rounded-[26px] border border-white/[0.06] bg-[#0A0A0B] sm:grid-cols-3">
          {[
            {
              value: "90%",
              title: "Profit Split",
              text: "Trader-first reward structure",
            },
            {
              value: "$200K",
              title: "Account Size",
              text: "Flexible simulated capital",
            },
            {
              value: "3",
              title: "Markets",
              text: "Forex · Futures · Crypto",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`relative px-5 py-6 sm:px-7 sm:py-7 lg:px-8 ${
                index !== 2
                  ? "border-b border-white/[0.055] sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="absolute left-0 top-0 h-px w-20 bg-gradient-to-r from-[#D4AF37]/45 to-transparent" />

              <div className="flex items-center gap-5">
                <span className="text-[1.9rem] font-black leading-none tracking-[-0.055em] text-[#E3C35D] sm:text-[2.15rem]">
                  {item.value}
                </span>

                <div>
                  <p className="text-[14px] font-semibold text-white/80 sm:text-[15px]">
                    {item.title}
                  </p>

                  <p className="mt-1.5 text-[11px] leading-4 text-white/[0.38] sm:text-[12px]">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}