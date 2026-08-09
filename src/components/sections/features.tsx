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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle
        cx="7"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M2.8 16c.5-3 2.1-4.5 4.2-4.5S10.7 13 11.2 16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <circle
        cx="14"
        cy="8"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity=".6"
      />

      <path
        d="M12.7 12.5c2.4 0 3.8 1.1 4.3 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity=".6"
      />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M6 4h8v3.6c0 3.1-1.5 5-4 5s-4-1.9-4-5V4Z"
        stroke="currentColor"
        strokeWidth="1.35"
      />

      <path
        d="M6 6H3.5c0 2.7 1.2 4.1 3.4 4.1M14 6h2.5c0 2.7-1.2 4.1-3.4 4.1M10 12.6V15M7.5 17h5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   FEATURE 1 — PROFIT SPLIT ART
========================================================= */

function ProfitSplitArtwork() {
  const coins = [
    {
      x: 260,
      y: 145,
      r: 61,
      label: "BP",
      gold: true,
    },
    {
      x: 145,
      y: 206,
      r: 37,
      label: "$",
      gold: false,
    },
    {
      x: 372,
      y: 197,
      r: 39,
      label: "€",
      gold: true,
    },
    {
      x: 200,
      y: 277,
      r: 32,
      label: "£",
      gold: true,
    },
    {
      x: 318,
      y: 276,
      r: 35,
      label: "₿",
      gold: false,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[55%] h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

      <svg
        viewBox="0 0 520 390"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="profitGold"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#4C3102" />
            <stop offset=".12" stopColor="#AE7D15" />
            <stop offset=".27" stopColor="#F0CE62" />
            <stop offset=".37" stopColor="#FFF4B1" />
            <stop offset=".53" stopColor="#A97512" />
            <stop offset=".7" stopColor="#EBC75C" />
            <stop offset=".86" stopColor="#79520A" />
            <stop offset="1" stopColor="#3E2802" />
          </linearGradient>

          <linearGradient
            id="profitSilver"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#242424" />
            <stop offset=".13" stopColor="#AFAFAF" />
            <stop offset=".25" stopColor="#FAFAFA" />
            <stop offset=".4" stopColor="#676767" />
            <stop offset=".56" stopColor="#EEEEEE" />
            <stop offset=".74" stopColor="#464646" />
            <stop offset=".9" stopColor="#C6C6C6" />
            <stop offset="1" stopColor="#202020" />
          </linearGradient>

          <radialGradient id="profitFace">
            <stop stopColor="#3A3A3A" />
            <stop offset=".4" stopColor="#191919" />
            <stop offset=".76" stopColor="#0C0C0D" />
            <stop offset="1" stopColor="#040404" />
          </radialGradient>

          <filter
            id="profitShadow"
            x="-100%"
            y="-100%"
            width="300%"
            height="320%"
          >
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="14"
              floodColor="#000"
              floodOpacity=".88"
            />
          </filter>
        </defs>

        {/* ORBITS */}
        <ellipse
          cx="260"
          cy="205"
          rx="185"
          ry="92"
          transform="rotate(-10 260 205)"
          stroke="#D4AF37"
          strokeOpacity=".12"
          strokeDasharray="4 11"
        />

        <ellipse
          cx="260"
          cy="205"
          rx="136"
          ry="132"
          stroke="white"
          strokeOpacity=".05"
        />

        <ellipse
          cx="260"
          cy="205"
          rx="96"
          ry="146"
          transform="rotate(56 260 205)"
          stroke="#D4AF37"
          strokeOpacity=".055"
        />

        {/* FLOOR */}
        <ellipse
          cx="260"
          cy="329"
          rx="175"
          ry="26"
          fill="#000"
          opacity=".65"
        />

        <ellipse
          cx="260"
          cy="321"
          rx="125"
          ry="17"
          fill="#D4AF37"
          opacity=".055"
        />

        {/* COINS */}
        {coins.map((coin) => (
          <g
            key={`${coin.x}-${coin.y}`}
            transform={`translate(${coin.x} ${coin.y})`}
            filter="url(#profitShadow)"
          >
            <circle
              cy="7"
              r={coin.r}
              fill={coin.gold ? "#684507" : "#464646"}
            />

            <circle
              r={coin.r}
              fill={
                coin.gold
                  ? "url(#profitGold)"
                  : "url(#profitSilver)"
              }
            />

            <circle
              r={coin.r - 8}
              fill="url(#profitFace)"
            />

            <circle
              r={coin.r - 15}
              stroke={
                coin.gold
                  ? "#E3BB4C"
                  : "#D4D4D4"
              }
              strokeOpacity=".35"
              strokeWidth="1.5"
            />

            <text
              y={coin.r > 50 ? 15 : 10}
              textAnchor="middle"
              fill={
                coin.gold
                  ? "#E4BD4E"
                  : "#DADADA"
              }
              fontSize={coin.r > 50 ? 41 : 25}
              fontWeight="900"
              letterSpacing="-5"
            >
              {coin.label}
            </text>

            <path
              d={`M${-coin.r * 0.45} ${-coin.r * 0.55}
                  C${-coin.r * 0.2} ${-coin.r * 0.74}
                  ${coin.r * 0.18} ${-coin.r * 0.75}
                  ${coin.r * 0.43} ${-coin.r * 0.57}`}
              stroke="white"
              strokeOpacity=".2"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* PERFORMANCE LINE */}
        <path
          d="M82 274C126 262 147 239 181 244C218 250 236 207 269 215C306 223 323 181 358 186C391 191 408 153 438 132"
          stroke="#D4AF37"
          strokeOpacity=".09"
          strokeWidth="13"
          strokeLinecap="round"
        />

        <path
          d="M82 274C126 262 147 239 181 244C218 250 236 207 269 215C306 223 323 181 358 186C391 191 408 153 438 132"
          stroke="#E3C05A"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-full border border-[#D4AF37]/15 bg-black/35 px-3 py-1.5 backdrop-blur-xl">
        <span className="text-[7px] font-black uppercase tracking-[0.18em] text-[#DDBB50]">
          Trader-first rewards
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   FEATURE 2 — VAULT
========================================================= */

function RewardVaultArtwork() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[53%] h-64 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

      <svg
        viewBox="0 0 520 390"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="vaultMetal"
            x1="110"
            y1="50"
            x2="390"
            y2="345"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#242424" />
            <stop offset=".09" stopColor="#F2F2F2" />
            <stop offset=".21" stopColor="#656565" />
            <stop offset=".38" stopColor="#EAEAEA" />
            <stop offset=".55" stopColor="#3E3E3E" />
            <stop offset=".73" stopColor="#BDBDBD" />
            <stop offset=".88" stopColor="#323232" />
            <stop offset="1" stopColor="#111" />
          </linearGradient>

          <linearGradient
            id="vaultGold"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#5A3B03" />
            <stop offset=".18" stopColor="#DBB13E" />
            <stop offset=".35" stopColor="#FFF0A0" />
            <stop offset=".53" stopColor="#A87512" />
            <stop offset=".73" stopColor="#F0CE65" />
            <stop offset="1" stopColor="#4B3003" />
          </linearGradient>

          <filter
            id="vaultShadow"
            x="-100%"
            y="-100%"
            width="300%"
            height="320%"
          >
            <feDropShadow
              dx="0"
              dy="20"
              stdDeviation="16"
              floodColor="#000"
              floodOpacity=".88"
            />
          </filter>
        </defs>

        <ellipse
          cx="270"
          cy="329"
          rx="155"
          ry="24"
          fill="#000"
          opacity=".7"
        />

        {/* SAFE */}
        <g filter="url(#vaultShadow)">
          <rect
            x="165"
            y="101"
            width="185"
            height="193"
            rx="31"
            fill="url(#vaultMetal)"
          />

          <rect
            x="178"
            y="114"
            width="159"
            height="167"
            rx="24"
            fill="#09090A"
          />

          <rect
            x="190"
            y="126"
            width="135"
            height="143"
            rx="18"
            stroke="white"
            strokeOpacity=".06"
          />
        </g>

        {/* OPEN DOOR */}
        <g
          transform="translate(148 117)"
          filter="url(#vaultShadow)"
        >
          <path
            d="M0 0 61 20v153L0 191V0Z"
            fill="url(#vaultMetal)"
          />

          <path
            d="M10 17 50 30v128l-40 15V17Z"
            fill="#151516"
          />

          <circle
            cx="30"
            cy="96"
            r="10"
            fill="url(#vaultGold)"
          />
        </g>

        {/* SAFE DIAL */}
        <g transform="translate(258 184)">
          <circle
            r="45"
            fill="#080808"
            stroke="url(#vaultGold)"
            strokeWidth="4"
          />

          <circle
            r="32"
            stroke="white"
            strokeOpacity=".07"
          />

          <circle
            r="7"
            fill="#D4AF37"
          />

          {[0, 45, 90, 135].map((angle) => (
            <line
              key={angle}
              x1="0"
              y1="-12"
              x2="0"
              y2="-29"
              transform={`rotate(${angle})`}
              stroke="#D4AF37"
              strokeOpacity=".65"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* BP TOKENS */}
        {[0, 1, 2, 3].map((item) => (
          <g
            key={item}
            transform={`translate(${226 + item * 27} ${243 - item * 13})`}
          >
            <circle
              cy="4"
              r="23"
              fill="#664407"
            />

            <circle
              r="23"
              fill="url(#vaultGold)"
            />

            <circle
              r="16"
              fill="#151515"
            />

            <text
              y="5"
              textAnchor="middle"
              fill="#DAB246"
              fontSize="11"
              fontWeight="900"
            >
              BP
            </text>
          </g>
        ))}

        {/* LIGHT TRAJECTORY */}
        <path
          d="M92 253C140 220 172 232 206 200C237 170 271 139 310 148C353 158 383 125 434 103"
          stroke="#D4AF37"
          strokeOpacity=".1"
          strokeWidth="14"
          strokeLinecap="round"
        />

        <path
          d="M92 253C140 220 172 232 206 200C237 170 271 139 310 148C353 158 383 125 434 103"
          stroke="#E7C45C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute right-[8%] top-[12%] rounded-full border border-[#D4AF37]/15 bg-black/35 px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.17em] text-[#DEBD54] backdrop-blur-xl">
        Reward secured
      </div>
    </div>
  );
}

/* =========================================================
   FEATURE 3 — FAST PAYOUT
========================================================= */

function PayoutArtwork() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[53%] h-64 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

      <svg
        viewBox="0 0 520 390"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="payoutGold"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#5F3E03" />
            <stop offset=".17" stopColor="#DFB440" />
            <stop offset=".33" stopColor="#FFF1A4" />
            <stop offset=".51" stopColor="#AC7713" />
            <stop offset=".73" stopColor="#EFCB63" />
            <stop offset="1" stopColor="#513303" />
          </linearGradient>

          <linearGradient
            id="payoutSilver"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#313131" />
            <stop offset=".14" stopColor="#E7E7E7" />
            <stop offset=".3" stopColor="#6A6A6A" />
            <stop offset=".5" stopColor="#EFEFEF" />
            <stop offset=".7" stopColor="#4E4E4E" />
            <stop offset=".88" stopColor="#BDBDBD" />
            <stop offset="1" stopColor="#272727" />
          </linearGradient>

          <filter
            id="payoutShadow"
            x="-100%"
            y="-100%"
            width="300%"
            height="320%"
          >
            <feDropShadow
              dx="0"
              dy="20"
              stdDeviation="16"
              floodColor="#000"
              floodOpacity=".86"
            />
          </filter>
        </defs>

        <ellipse
          cx="260"
          cy="325"
          rx="165"
          ry="24"
          fill="#000"
          opacity=".7"
        />

        {/* CARD */}
        <g
          transform="translate(92 105) rotate(-6 145 90)"
          filter="url(#payoutShadow)"
        >
          <rect
            width="289"
            height="177"
            rx="28"
            fill="url(#payoutSilver)"
          />

          <rect
            x="9"
            y="9"
            width="271"
            height="159"
            rx="23"
            fill="#070708"
          />

          <rect
            x="22"
            y="22"
            width="245"
            height="133"
            rx="18"
            stroke="white"
            strokeOpacity=".05"
          />

          <g transform="translate(30 37)">
            <rect
              width="49"
              height="36"
              rx="7"
              fill="url(#payoutGold)"
            />

            <path
              d="M8 12h33M8 24h33M17 4v28M31 4v28"
              stroke="#503405"
              strokeOpacity=".7"
            />
          </g>

          <text
            x="30"
            y="117"
            fill="white"
            fillOpacity=".27"
            fontSize="8"
            fontWeight="700"
            letterSpacing="2"
          >
            BLACKPROP REWARDS
          </text>

          <text
            x="30"
            y="140"
            fill="#E3BE53"
            fontSize="20"
            fontWeight="900"
            letterSpacing="-2"
          >
            BP
          </text>
        </g>

        {/* LIGHTNING */}
        <g
          transform="translate(345 114)"
          filter="url(#payoutShadow)"
        >
          <path
            d="M40 0 0 83h34l-18 72 75-99H51L72 0H40Z"
            fill="url(#payoutGold)"
          />

          <path
            d="M44 14 16 68"
            stroke="white"
            strokeOpacity=".28"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>

        {/* PAYOUT STATUS */}
        <g transform="translate(335 276)">
          <rect
            width="128"
            height="45"
            rx="13"
            fill="#0A0A0B"
            stroke="white"
            strokeOpacity=".08"
          />

          <circle
            cx="21"
            cy="22.5"
            r="10"
            fill="#55D6A6"
            fillOpacity=".1"
          />

          <path
            d="m17 22.5 3 3 6-6"
            stroke="#55D6A6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <text
            x="39"
            y="19"
            fill="white"
            fillOpacity=".25"
            fontSize="6"
            fontWeight="700"
          >
            REWARD
          </text>

          <text
            x="39"
            y="31"
            fill="white"
            fillOpacity=".82"
            fontSize="9"
            fontWeight="900"
          >
            READY
          </text>
        </g>

        <path
          d="M71 268C135 302 209 302 276 286"
          stroke="#D4AF37"
          strokeOpacity=".13"
          strokeDasharray="5 9"
        />
      </svg>

      <div className="absolute left-[8%] bottom-[8%] rounded-full border border-emerald-400/10 bg-black/35 px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.17em] text-emerald-400/70 backdrop-blur-xl">
        Payout ready
      </div>
    </div>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({
  number,
  eyebrow,
  title,
  description,
  artwork,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  artwork: ReactNode;
}) {
  return (
    <article className="group relative min-h-[550px] overflow-hidden rounded-[30px] border border-white/[0.075] bg-[linear-gradient(145deg,#151516,#080809)] shadow-[0_30px_100px_rgba(0,0,0,.35)] transition duration-500 hover:-translate-y-1.5 hover:border-white/[0.13]">
      {/* TOP SHINE */}
      <div className="pointer-events-none absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* IMAGE AREA */}
      <div className="absolute inset-x-0 bottom-0 top-[165px]">
        {artwork}
      </div>

      {/* TOP GRADIENT */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[265px] bg-gradient-to-b from-[#111112] via-[#111112]/95 to-transparent" />

      {/* TEXT */}
      <div className="relative z-20 p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#D4AF37]/65">
            {eyebrow}
          </span>

          <span className="text-[9px] font-black text-white/16">
            {number}
          </span>
        </div>

        <h3 className="mt-4 max-w-[330px] text-[1.75rem] font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-[1.95rem]">
          {title}
        </h3>

        <p className="mt-3 max-w-[330px] text-xs leading-5 text-white/34">
          {description}
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   PAYOUT ARTWORK
========================================================= */

function BankArtwork() {
  return (
    <svg
      viewBox="0 0 180 110"
      fill="none"
      className="h-24 w-40"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="simpleBankGold"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#FFF1A0" />
          <stop offset=".48" stopColor="#D4AF37" />
          <stop offset="1" stopColor="#76510A" />
        </linearGradient>

        <linearGradient
          id="simpleBankSilver"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#F1F1EE" />
          <stop offset=".45" stopColor="#8A8A86" />
          <stop offset="1" stopColor="#D4D4D0" />
        </linearGradient>

        <filter
          id="simpleBankShadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="220%"
        >
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="6"
            floodColor="#000"
            floodOpacity=".35"
          />
        </filter>
      </defs>

      {/* SHADOW */}
      <ellipse
        cx="90"
        cy="96"
        rx="61"
        ry="7"
        fill="#000"
        opacity=".28"
      />

      <g filter="url(#simpleBankShadow)">
        {/* ROOF */}
        <path
          d="M90 13 24 42h132L90 13Z"
          fill="url(#simpleBankGold)"
        />

        {/* INNER ROOF */}
        <path
          d="M90 23 46 40h88L90 23Z"
          fill="#111112"
        />

        {/* BP LOGO */}
        <circle
          cx="90"
          cy="34"
          r="8"
          fill="#0C0C0D"
          stroke="#D4AF37"
          strokeOpacity=".5"
        />

        <text
          x="90"
          y="37"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="6"
          fontWeight="900"
        >
          BP
        </text>

        {/* TOP BASE */}
        <rect
          x="30"
          y="43"
          width="120"
          height="7"
          rx="3.5"
          fill="url(#simpleBankGold)"
        />

        {/* COLUMNS */}
        {[45, 70, 95, 120].map((x) => (
          <g key={x}>
            <rect
              x={x}
              y="52"
              width="12"
              height="31"
              rx="2"
              fill="url(#simpleBankSilver)"
            />

            <path
              d={`M${x + 3} 56v23`}
              stroke="white"
              strokeOpacity=".28"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* DARK SPACE BETWEEN COLUMNS */}
        <rect
          x="35"
          y="51"
          width="110"
          height="33"
          rx="3"
          fill="#111112"
          style={{ zIndex: -1 }}
        />

        {/* DRAW COLUMNS AGAIN ABOVE DARK BACKGROUND */}
        {[45, 70, 95, 120].map((x) => (
          <rect
            key={`column-${x}`}
            x={x}
            y="52"
            width="12"
            height="31"
            rx="2"
            fill="url(#simpleBankSilver)"
          />
        ))}

        {/* BOTTOM LEDGE */}
        <rect
          x="31"
          y="84"
          width="118"
          height="7"
          rx="3.5"
          fill="url(#simpleBankGold)"
        />

        {/* BOTTOM BASE */}
        <rect
          x="23"
          y="91"
          width="134"
          height="7"
          rx="3.5"
          fill="url(#simpleBankSilver)"
        />
      </g>
    </svg>
  );
}

function WalletArtwork() {
  return (
    <svg
      viewBox="0 0 180 110"
      fill="none"
      className="h-24 w-40"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="walletMetal"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#F1F1F1" />
          <stop offset=".3" stopColor="#757575" />
          <stop offset=".56" stopColor="#F6F6F6" />
          <stop offset=".8" stopColor="#4D4D4D" />
          <stop offset="1" stopColor="#C8C8C8" />
        </linearGradient>
      </defs>

      <rect
        x="22"
        y="23"
        width="135"
        height="69"
        rx="17"
        fill="url(#walletMetal)"
      />

      <rect
        x="31"
        y="31"
        width="117"
        height="52"
        rx="12"
        fill="#101011"
      />

      <path
        d="M107 44h51v27h-51c-10 0-16-5-16-13.5S97 44 107 44Z"
        fill="#D4AF37"
      />

      <circle
        cx="118"
        cy="57.5"
        r="5"
        fill="#1A1202"
      />
    </svg>
  );
}

function CryptoArtwork() {
  return (
    <svg
      viewBox="0 0 180 110"
      fill="none"
      className="h-24 w-40"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="cryptoGold"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#FFF2A7" />
          <stop offset=".5" stopColor="#D4AF37" />
          <stop offset="1" stopColor="#6E4B08" />
        </linearGradient>

        <linearGradient
          id="cryptoSilver"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#EEE" />
          <stop offset=".4" stopColor="#656565" />
          <stop offset=".7" stopColor="#DADADA" />
          <stop offset="1" stopColor="#444" />
        </linearGradient>
      </defs>

      <circle
        cx="86"
        cy="56"
        r="39"
        fill="url(#cryptoGold)"
      />

      <circle
        cx="86"
        cy="56"
        r="30"
        fill="#101011"
      />

      <text
        x="86"
        y="68"
        textAnchor="middle"
        fill="#E4BE52"
        fontSize="35"
        fontWeight="900"
      >
        ₿
      </text>

      <circle
        cx="130"
        cy="37"
        r="18"
        fill="url(#cryptoSilver)"
      />

      <circle
        cx="130"
        cy="37"
        r="13"
        fill="#171717"
      />

      <text
        x="130"
        y="42"
        textAnchor="middle"
        fill="#D7D7D7"
        fontSize="10"
        fontWeight="900"
      >
        BP
      </text>
    </svg>
  );
}

/* =========================================================
   PAYOUT CARD
========================================================= */

function PayoutCard({
  eyebrow,
  title,
  description,
  artwork,
}: {
  eyebrow: string;
  title: string;
  description: string;
  artwork: ReactNode;
}) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[linear-gradient(145deg,#121213,#09090A)] p-5 transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/20 sm:p-6">
      <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[#D4AF37]/[0.045] blur-[65px]" />

      <div className="relative flex min-h-[205px] items-center justify-center overflow-hidden rounded-[20px] border border-white/[0.045] bg-white/[0.018]">
        <div className="absolute inset-x-[20%] top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {artwork}
      </div>

      <div className="mt-6">
        <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#D4AF37]/60">
          {eyebrow}
        </p>

        <h4 className="mt-2 text-xl font-black tracking-[-0.04em] text-white">
          {title}
        </h4>

        <p className="mt-3 max-w-[330px] text-xs leading-5 text-white/32">
          {description}
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export function Features() {
  return (
    <section
      id="why-blackprop"
      className="relative overflow-hidden bg-[#030303] py-24 sm:py-28 lg:py-36"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-[8%] h-[750px] w-[1100px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[180px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 86%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER — FULL WIDTH TOP
        ====================================================== */}

        <div className="mx-auto max-w-[920px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.05] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#DDBB50]">
              The BlackProp advantage
            </span>
          </div>

          <h2 className="mt-7 text-[3.5rem] font-black uppercase leading-[0.89] tracking-[-0.07em] text-white sm:text-[5rem] lg:text-[6.1rem]">
            Built for traders
            <span className="block bg-[linear-gradient(100deg,#fff_0%,#D5D5D5_32%,#F1D26C_70%,#967019_100%)] bg-clip-text text-transparent">
              who want more.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[650px] text-sm leading-7 text-white/38 sm:text-base sm:leading-8">
            Access more trading capital, operate within clear risk
            objectives and unlock a reward structure built around
            disciplined performance.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#challenges"
              className="group relative inline-flex min-w-[195px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F4D978,#D4AF37_50%,#936912)] px-6 py-4 text-sm font-black text-black shadow-[0_18px_50px_rgba(212,175,55,.16)] transition hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(212,175,55,.26)]"
            >
              Get Funded

              <ArrowRight />

              <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/40 blur-md transition-all duration-700 group-hover:left-[125%]" />
            </a>

            <div className="flex items-center gap-2 text-xs font-medium text-white/33">
              <span className="text-[#D4AF37]">
                <UsersIcon />
              </span>

              Built around trader performance
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN FEATURE CARDS — FULL WIDTH BELOW HEADER
        ====================================================== */}

        <div className="mt-16 grid gap-4 lg:grid-cols-3 lg:gap-5">
          <FeatureCard
            number="01"
            eyebrow="Profit potential"
            title="Keep More of Your Performance"
            description="A trader-first reward structure designed to let successful traders retain a larger share of what they generate."
            artwork={<ProfitSplitArtwork />}
          />

          <FeatureCard
            number="02"
            eyebrow="Reward processing"
            title="Designed for Faster Rewards"
            description="A streamlined payout experience designed around speed, visibility and secure processing."
            artwork={<RewardVaultArtwork />}
          />

          <FeatureCard
            number="03"
            eyebrow="Reward flexibility"
            title="Access Rewards Your Way"
            description="Flexible payout options designed to reduce unnecessary friction between performance and reward access."
            artwork={<PayoutArtwork />}
          />
        </div>

        {/* =====================================================
            SMALL META ROW
        ====================================================== */}

        <div className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/22">
          <span>Performance focused</span>

          <span className="hidden h-1 w-1 rounded-full bg-[#D4AF37]/50 sm:block" />

          <span>Transparent objectives</span>

          <span className="hidden h-1 w-1 rounded-full bg-[#D4AF37]/50 sm:block" />

          <span>Flexible progression</span>
        </div>

        {/* =====================================================
            SECTION DIVIDER
        ====================================================== */}

        <div className="my-24 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent sm:my-28 lg:my-32" />

        {/* =====================================================
            PAYOUT SECTION
        ====================================================== */}

        <div>
          <div className="mx-auto max-w-[860px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5">
              <span className="text-[#D4AF37]">
                <TrophyIcon />
              </span>

              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/35">
                Reward access
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black leading-[0.97] tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.7rem]">
              From performance
              <span className="block bg-[linear-gradient(100deg,#FFFFFF,#D2D2D2_35%,#F0D069_72%,#96701A)] bg-clip-text text-transparent">
                to payout.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-sm leading-7 text-white/36 sm:text-base">
              BlackProp is designed around flexible reward access,
              giving traders multiple ways to receive eligible
              payouts as our payment infrastructure expands.
            </p>
          </div>

          {/* PAYOUT METHODS */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <PayoutCard
              eyebrow="Traditional"
              title="Bank Transfer"
              description="Receive eligible rewards through supported banking and payout-provider rails."
              artwork={<BankArtwork />}
            />

            <PayoutCard
              eyebrow="Digital"
              title="Digital Wallets"
              description="Access supported digital payment methods designed for convenient reward settlement."
              artwork={<WalletArtwork />}
            />

            <PayoutCard
              eyebrow="On-chain"
              title="Crypto"
              description="Receive eligible rewards directly through supported crypto payout infrastructure."
              artwork={<CryptoArtwork />}
            />
          </div>

          {/* FINAL CTA */}
          <div className="mt-14 flex flex-col items-center">
            <a
              href="#challenges"
              className="group relative inline-flex min-w-[210px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F4D978,#D4AF37_50%,#936912)] px-7 py-4 text-sm font-black text-black shadow-[0_18px_50px_rgba(212,175,55,.16)] transition hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(212,175,55,.26)]"
            >
              Start Your Challenge

              <ArrowRight />

              <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/40 blur-md transition-all duration-700 group-hover:left-[125%]" />
            </a>

            <div className="mt-5 flex items-center gap-2 text-[10px] text-white/24">
              <span className="text-[#D4AF37]">
                <TrophyIcon />
              </span>

              Build your account around your trading style.
            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="mx-auto mt-10 max-w-3xl text-center text-[9px] leading-4 text-white/15">
          Profit splits, payout timing, account limits and
          withdrawal methods shown in this frontend are
          demonstration content until BlackProp&apos;s final terms
          and integrations are confirmed.
        </p>
      </div>
    </section>
  );
}