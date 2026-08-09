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

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M10 2.7 16 5.1v4.5c0 3.6-2.2 6.1-6 7.7-3.8-1.6-6-4.1-6-7.7V5.1L10 2.7Z"
        stroke="currentColor"
        strokeWidth="1.35"
      />

      <path
        d="m7 10 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.35"
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
      <circle
        cx="10"
        cy="10"
        r="7"
        stroke="currentColor"
        strokeWidth="1.35"
      />

      <path
        d="m6.8 10.1 2 2 4.4-4.5"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   STEP 1 — CAPITAL ACCESS
========================================================= */

function CapitalArtwork() {
  return (
    <div className="relative h-[285px] w-full overflow-hidden sm:h-[315px]">
      {/* GOLD ATMOSPHERE */}
      <div className="absolute left-1/2 top-[55%] h-52 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/15 blur-[75px]" />

      <svg
        viewBox="0 0 520 350"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="capitalSilver"
            x1="90"
            y1="38"
            x2="360"
            y2="315"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5B5B58" />
            <stop offset=".09" stopColor="#FAFAF7" />
            <stop offset=".2" stopColor="#8E8E89" />
            <stop offset=".33" stopColor="#FFFFFF" />
            <stop offset=".48" stopColor="#666662" />
            <stop offset=".64" stopColor="#E3E3DF" />
            <stop offset=".81" stopColor="#8C8C87" />
            <stop offset="1" stopColor="#444441" />
          </linearGradient>

          <linearGradient
            id="capitalGold"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#624407" />
            <stop offset=".13" stopColor="#C29126" />
            <stop offset=".28" stopColor="#FFF3AE" />
            <stop offset=".42" stopColor="#D7AB35" />
            <stop offset=".58" stopColor="#8A6110" />
            <stop offset=".76" stopColor="#F0CE68" />
            <stop offset="1" stopColor="#533704" />
          </linearGradient>

          <radialGradient id="capitalDark">
            <stop stopColor="#42423F" />
            <stop offset=".48" stopColor="#20201F" />
            <stop offset="1" stopColor="#090909" />
          </radialGradient>

          <linearGradient
            id="capitalBase"
            x1="260"
            y1="250"
            x2="260"
            y2="335"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#868681" />
            <stop offset=".12" stopColor="#444441" />
            <stop offset=".6" stopColor="#1B1B1A" />
            <stop offset="1" stopColor="#080808" />
          </linearGradient>

          <filter
            id="capitalShadow"
            x="-100%"
            y="-100%"
            width="300%"
            height="320%"
          >
            <feDropShadow
              dx="0"
              dy="17"
              stdDeviation="13"
              floodColor="#27251F"
              floodOpacity=".27"
            />
          </filter>
        </defs>

        {/* SHADOW */}
        <ellipse
          cx="257"
          cy="312"
          rx="150"
          ry="21"
          fill="#77715E"
          opacity=".12"
        />

        {/* PLATFORM */}
        <g filter="url(#capitalShadow)">
          <path
            d="M151 278v30c0 17 49 31 109 31s109-14 109-31v-30"
            fill="url(#capitalBase)"
          />

          <ellipse
            cx="260"
            cy="278"
            rx="109"
            ry="26"
            fill="#595955"
          />

          <ellipse
            cx="260"
            cy="274"
            rx="106"
            ry="23"
            fill="#242423"
            stroke="#D4AF37"
            strokeOpacity=".16"
          />

          <ellipse
            cx="260"
            cy="273"
            rx="81"
            ry="16"
            fill="#D4AF37"
            opacity=".08"
          />
        </g>

        {/* ORBITS */}
        <ellipse
          cx="260"
          cy="171"
          rx="174"
          ry="73"
          transform="rotate(-12 260 171)"
          stroke="#A77F1E"
          strokeOpacity=".19"
          strokeDasharray="3 10"
        />

        <ellipse
          cx="260"
          cy="170"
          rx="139"
          ry="111"
          stroke="#79766D"
          strokeOpacity=".11"
        />

        {/* VAULT BODY */}
        <g filter="url(#capitalShadow)">
          <rect
            x="161"
            y="110"
            width="165"
            height="150"
            rx="36"
            fill="url(#capitalSilver)"
          />

          <rect
            x="173"
            y="122"
            width="141"
            height="126"
            rx="27"
            fill="url(#capitalDark)"
          />

          <rect
            x="180"
            y="129"
            width="127"
            height="112"
            rx="23"
            stroke="white"
            strokeOpacity=".07"
          />

          <circle
            cx="243"
            cy="183"
            r="44"
            fill="#10100F"
            stroke="url(#capitalGold)"
            strokeWidth="5"
          />

          <circle
            cx="243"
            cy="183"
            r="32"
            stroke="#D4AF37"
            strokeOpacity=".2"
          />

          <circle
            cx="243"
            cy="183"
            r="7"
            fill="url(#capitalGold)"
          />

          <path
            d="M243 190v18"
            stroke="url(#capitalGold)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          <path
            d="M184 137c24-17 53-20 76-13"
            stroke="white"
            strokeOpacity=".34"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>

        {/* LOCK ARCH */}
        <g filter="url(#capitalShadow)">
          <path
            d="M190 111V91c0-43 24-67 55-67s55 24 55 67v20"
            stroke="url(#capitalSilver)"
            strokeWidth="21"
            strokeLinecap="round"
          />

          <path
            d="M203 110V93c0-32 16-50 42-50 25 0 42 18 42 50v17"
            stroke="#EEEDE8"
            strokeOpacity=".5"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>

        {/* KEY */}
        <g
          transform="translate(360 167) rotate(17)"
          filter="url(#capitalShadow)"
        >
          <circle
            r="31"
            fill="url(#capitalGold)"
          />

          <circle
            r="15"
            fill="#F4F2EA"
          />

          <path
            d="M-4 28v81h16V85h23V68H12V28"
            fill="url(#capitalGold)"
          />

          <path
            d="M4 37v58"
            stroke="white"
            strokeOpacity=".32"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* BP MEDALLION */}
        <g transform="translate(112 213)">
          <circle
            r="27"
            fill="#141413"
            stroke="#D4AF37"
            strokeOpacity=".4"
            strokeWidth="2"
          />

          <circle
            r="21"
            stroke="white"
            strokeOpacity=".07"
          />

          <text
            x="-1"
            y="7"
            textAnchor="middle"
            fill="#D3AC38"
            fontSize="18"
            fontWeight="900"
            letterSpacing="-2"
          >
            BP
          </text>
        </g>

        {/* PARTICLES */}
        <circle cx="100" cy="98" r="3" fill="#D4AF37" opacity=".7" />
        <circle cx="397" cy="90" r="2" fill="#A87E20" />
        <circle cx="425" cy="234" r="3" fill="#E2BE55" />
        <circle cx="88" cy="254" r="2" fill="#C99D2E" />
      </svg>

      <div className="absolute right-[8%] top-[13%] rounded-full border border-[#D4AF37]/20 bg-white/80 px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.16em] text-[#9A741A] shadow-[0_8px_30px_rgba(80,65,20,.06)] backdrop-blur-md">
        Capital access
      </div>
    </div>
  );
}

/* =========================================================
   STEP 2 — TRADE
========================================================= */

function TradeArtwork() {
  const candles = [
    {
      x: 130,
      top: 188,
      bottom: 267,
      bodyTop: 211,
      height: 37,
      gold: true,
    },
    {
      x: 178,
      top: 153,
      bottom: 239,
      bodyTop: 171,
      height: 45,
      gold: true,
    },
    {
      x: 226,
      top: 123,
      bottom: 214,
      bodyTop: 144,
      height: 42,
      gold: false,
    },
    {
      x: 274,
      top: 93,
      bottom: 185,
      bodyTop: 112,
      height: 49,
      gold: true,
    },
    {
      x: 322,
      top: 65,
      bottom: 159,
      bodyTop: 85,
      height: 45,
      gold: false,
    },
  ];

  return (
    <div className="relative h-[285px] w-full overflow-hidden sm:h-[315px]">
      <div className="absolute left-1/2 top-[52%] h-52 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

      <svg
        viewBox="0 0 520 350"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="tradingGold"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#614105" />
            <stop offset=".16" stopColor="#DAB143" />
            <stop offset=".31" stopColor="#FFF0A0" />
            <stop offset=".49" stopColor="#B68118" />
            <stop offset=".71" stopColor="#EFCB61" />
            <stop offset="1" stopColor="#523504" />
          </linearGradient>

          <linearGradient
            id="tradingSilver"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#595955" />
            <stop offset=".12" stopColor="#F6F6F2" />
            <stop offset=".29" stopColor="#8F8F8B" />
            <stop offset=".47" stopColor="#FFFFFF" />
            <stop offset=".68" stopColor="#73736F" />
            <stop offset=".87" stopColor="#DEDEDA" />
            <stop offset="1" stopColor="#53534F" />
          </linearGradient>

          <filter
            id="tradingShadow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feDropShadow
              dx="0"
              dy="15"
              stdDeviation="11"
              floodColor="#77715E"
              floodOpacity=".22"
            />
          </filter>
        </defs>

        {/* BASE SHADOW */}
        <ellipse
          cx="259"
          cy="302"
          rx="165"
          ry="22"
          fill="#7E7762"
          opacity=".12"
        />

        {/* GRID */}
        {[105, 145, 185, 225, 265].map((y) => (
          <line
            key={y}
            x1="86"
            y1={y}
            x2="386"
            y2={y}
            stroke="#111"
            strokeOpacity=".045"
          />
        ))}

        {[108, 159, 210, 261, 312, 363].map((x) => (
          <line
            key={x}
            x1={x}
            y1="55"
            x2={x}
            y2="278"
            stroke="#111"
            strokeOpacity=".035"
          />
        ))}

        {/* CHART LINE UNDERLAY */}
        <path
          d="M97 254C133 243 145 215 179 218C213 221 230 178 260 181C293 184 307 134 341 136C372 138 388 96 417 73"
          stroke="#D4AF37"
          strokeOpacity=".09"
          strokeWidth="14"
          strokeLinecap="round"
        />

        <path
          d="M97 254C133 243 145 215 179 218C213 221 230 178 260 181C293 184 307 134 341 136C372 138 388 96 417 73"
          stroke="#B48A25"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* CANDLES */}
        {candles.map((candle) => (
          <g
            key={candle.x}
            filter="url(#tradingShadow)"
          >
            <line
              x1={candle.x}
              x2={candle.x}
              y1={candle.top}
              y2={candle.bottom}
              stroke={
                candle.gold
                  ? "#BF922A"
                  : "#A1A19B"
              }
              strokeWidth="4"
              strokeLinecap="round"
            />

            <rect
              x={candle.x - 13}
              y={candle.bodyTop}
              width="26"
              height={candle.height}
              rx="4"
              fill={
                candle.gold
                  ? "url(#tradingGold)"
                  : "url(#tradingSilver)"
              }
            />

            <path
              d={`M${candle.x - 7} ${candle.bodyTop + 5}v${candle.height - 10}`}
              stroke="white"
              strokeOpacity=".35"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* CURSOR */}
        <g
          transform="translate(355 175)"
          filter="url(#tradingShadow)"
        >
          <path
            d="M0 0 70 64 40 68l18 40-21 10-18-41-23 20L0 0Z"
            fill="url(#tradingSilver)"
            stroke="#81817C"
            strokeOpacity=".5"
            strokeWidth="2"
          />

          <path
            d="M10 14 53 54"
            stroke="white"
            strokeOpacity=".55"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>

        {/* TERMINAL STATUS */}
        <g transform="translate(80 79)">
          <rect
            width="84"
            height="38"
            rx="12"
            fill="#FFFFFF"
            stroke="#C8C5BB"
            strokeOpacity=".65"
          />

          <circle
            cx="19"
            cy="19"
            r="8"
            fill="#D4AF37"
            fillOpacity=".15"
          />

          <text
            x="19"
            y="22"
            textAnchor="middle"
            fill="#A27919"
            fontSize="8"
            fontWeight="900"
          >
            BP
          </text>

          <text
            x="35"
            y="17"
            fill="#1B1B1A"
            fontSize="7"
            fontWeight="800"
          >
            TERMINAL
          </text>

          <text
            x="35"
            y="27"
            fill="#8B887E"
            fontSize="6"
            fontWeight="600"
          >
            CONNECTED
          </text>
        </g>
      </svg>

      <div className="absolute bottom-[11%] left-[8%] rounded-xl border border-black/[0.06] bg-white/75 px-3 py-2 shadow-[0_10px_30px_rgba(80,72,48,.07)] backdrop-blur-lg">
        <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-black/30">
          Trading environment
        </p>

        <p className="mt-1 text-[10px] font-bold text-[#9A741A]">
          Simulated capital
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   STEP 3 — REWARD
========================================================= */

function RewardArtwork() {
  return (
    <div className="relative h-[285px] w-full overflow-hidden sm:h-[315px]">
      <div className="absolute left-1/2 top-[55%] h-56 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/12 blur-[90px]" />

      <svg
        viewBox="0 0 520 350"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="rewardCardSilver"
            x1="95"
            y1="65"
            x2="390"
            y2="305"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5F5F5B" />
            <stop offset=".09" stopColor="#F8F8F4" />
            <stop offset=".22" stopColor="#999994" />
            <stop offset=".39" stopColor="#FFFFFF" />
            <stop offset=".55" stopColor="#6E6E69" />
            <stop offset=".72" stopColor="#E0E0DC" />
            <stop offset="1" stopColor="#4A4A47" />
          </linearGradient>

          <linearGradient
            id="rewardGold"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#654507" />
            <stop offset=".15" stopColor="#D6AB37" />
            <stop offset=".31" stopColor="#FFF2AA" />
            <stop offset=".47" stopColor="#B17D17" />
            <stop offset=".68" stopColor="#EBC85E" />
            <stop offset=".87" stopColor="#946A12" />
            <stop offset="1" stopColor="#543704" />
          </linearGradient>

          <radialGradient id="rewardDark">
            <stop stopColor="#393936" />
            <stop offset=".48" stopColor="#191918" />
            <stop offset="1" stopColor="#070707" />
          </radialGradient>

          <filter
            id="rewardArtShadow"
            x="-100%"
            y="-100%"
            width="300%"
            height="320%"
          >
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="14"
              floodColor="#776C4B"
              floodOpacity=".24"
            />
          </filter>
        </defs>

        <ellipse
          cx="260"
          cy="307"
          rx="168"
          ry="22"
          fill="#82785D"
          opacity=".11"
        />

        {/* CARD */}
        <g
          transform="translate(100 92) rotate(-7 130 90)"
          filter="url(#rewardArtShadow)"
        >
          <rect
            width="255"
            height="171"
            rx="28"
            fill="url(#rewardCardSilver)"
          />

          <rect
            x="11"
            y="11"
            width="233"
            height="149"
            rx="22"
            fill="url(#rewardDark)"
          />

          {/* fine texture */}
          {Array.from({ length: 9 }).map((_, index) => (
            <line
              key={index}
              x1="25"
              y1={28 + index * 13}
              x2="226"
              y2={28 + index * 13}
              stroke="white"
              strokeOpacity=".022"
            />
          ))}

          {/* CHIP */}
          <g transform="translate(28 37)">
            <rect
              width="47"
              height="35"
              rx="7"
              fill="url(#rewardGold)"
            />

            <path
              d="M8 12h31M8 23h31M17 4v27M30 4v27"
              stroke="#503505"
              strokeOpacity=".62"
              strokeWidth="1.2"
            />
          </g>

          <text
            x="28"
            y="116"
            fill="white"
            fillOpacity=".37"
            fontSize="8"
            fontWeight="700"
            letterSpacing="2.3"
          >
            BLACKPROP
          </text>

          <text
            x="28"
            y="138"
            fill="#E4C059"
            fontSize="18"
            fontWeight="900"
            letterSpacing="-2"
          >
            REWARDS
          </text>
        </g>

        {/* GOLD TOKEN */}
        <g
          transform="translate(365 142)"
          filter="url(#rewardArtShadow)"
        >
          <circle
            cy="7"
            r="59"
            fill="#78520A"
          />

          <circle
            r="59"
            fill="url(#rewardGold)"
          />

          <circle
            r="49"
            fill="url(#rewardDark)"
            stroke="#E3BA49"
            strokeWidth="2"
          />

          <circle
            r="39"
            stroke="#FFF"
            strokeOpacity=".07"
          />

          <text
            x="-2"
            y="13"
            textAnchor="middle"
            fill="url(#rewardGold)"
            fontSize="40"
            fontWeight="900"
            letterSpacing="-6"
          >
            BP
          </text>

          <path
            d="M-31-31C-13-45 9-47 27-39"
            stroke="white"
            strokeOpacity=".28"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>

        {/* SILVER TOKEN */}
        <g
          transform="translate(405 244)"
          filter="url(#rewardArtShadow)"
        >
          <circle
            cy="5"
            r="39"
            fill="#73736F"
          />

          <circle
            r="39"
            fill="url(#rewardCardSilver)"
          />

          <circle
            r="31"
            fill="url(#rewardDark)"
          />

          <text
            y="8"
            textAnchor="middle"
            fill="#DEDEDA"
            fontSize="21"
            fontWeight="900"
          >
            BP
          </text>
        </g>

        {/* PAYOUT APPROVED */}
        <g transform="translate(70 246)">
          <rect
            width="144"
            height="48"
            rx="14"
            fill="white"
            stroke="#C9C5B8"
            strokeOpacity=".55"
          />

          <circle
            cx="23"
            cy="24"
            r="12"
            fill="#157F57"
            fillOpacity=".09"
          />

          <path
            d="m18 24 3.4 3.5 7.1-7.2"
            stroke="#23835E"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <text
            x="44"
            y="20"
            fill="#8D897D"
            fontSize="7"
            fontWeight="700"
          >
            REWARD STATUS
          </text>

          <text
            x="44"
            y="33"
            fill="#161615"
            fontSize="10"
            fontWeight="900"
          >
            APPROVED
          </text>
        </g>

        <circle cx="434" cy="85" r="3" fill="#D4AF37" />
        <circle cx="458" cy="190" r="2" fill="#A57E22" />
        <circle cx="72" cy="117" r="2" fill="#C89A29" />
      </svg>

      <div className="absolute right-[7%] top-[13%] rounded-full border border-emerald-700/10 bg-white/80 px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.16em] text-emerald-700/65 shadow-sm backdrop-blur-md">
        Reward ready
      </div>
    </div>
  );
}

/* =========================================================
   STEP CARD
========================================================= */

function StepCard({
  number,
  title,
  description,
  artwork,
  connector = false,
}: {
  number: string;
  title: string;
  description: string;
  artwork: ReactNode;
  connector?: boolean;
}) {
  return (
    <article className="group relative">
      <div className="relative h-full min-h-[510px] overflow-hidden rounded-[30px] border border-black/[0.055] bg-[#F4F3EF] shadow-[0_18px_55px_rgba(41,37,25,0.055)] transition duration-500 hover:-translate-y-1.5 hover:border-[#B9952D]/20 hover:shadow-[0_26px_75px_rgba(58,48,20,.09)]">
        {/* TOP LIGHT */}
        <div className="absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

        {/* NUMBER */}
        <div className="absolute left-6 top-6 z-20 flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-[#B48A25]/20 bg-white text-[9px] font-black text-[#967017] shadow-[0_6px_20px_rgba(91,72,20,.05)]">
            {number}
          </span>

          <span className="text-[8px] font-black uppercase tracking-[0.18em] text-black/22">
            BlackProp
          </span>
        </div>

        {/* ARTWORK */}
        <div className="pt-5">
          {artwork}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 px-6 pb-7 sm:px-7">
          <div className="mb-5 h-px bg-gradient-to-r from-black/[0.08] via-black/[0.025] to-transparent" />

          <h3 className="text-[2rem] font-black uppercase leading-none tracking-[-0.06em] text-[#090909] sm:text-[2.15rem]">
            {title}
          </h3>

          <p className="mt-4 max-w-[320px] text-sm leading-6 text-black/48">
            {description}
          </p>
        </div>

        {/* GOLD CORNER GLOW */}
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#D4AF37]/[0.065] blur-[70px]" />
      </div>

      {/* CONNECTOR */}
      {connector && (
        <div className="absolute -right-[26px] top-[52%] z-30 hidden -translate-y-1/2 lg:grid">
          <div className="grid h-[52px] w-[52px] place-items-center rounded-2xl border border-black/[0.06] bg-white text-black/38 shadow-[0_14px_38px_rgba(40,34,18,.1)] transition duration-300 group-hover:text-[#9A741A]">
            <ArrowRight />
          </div>
        </div>
      )}
    </article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#FBFAF7] py-24 text-black sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[4%] h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[160px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 78%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.055] bg-[#F2F1ED] px-3.5 py-2 shadow-[inset_0_1px_0_white]">
            <span className="text-[#A47B19]">
              <ShieldIcon />
            </span>

            <span className="text-[8px] font-black uppercase tracking-[0.19em] text-black/48 sm:text-[9px]">
              Trade our capital. Protect yours.
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-7 text-[3.6rem] font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#060606] sm:text-[5rem] lg:text-[6.4rem]">
            How it works
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-7 max-w-[620px] text-base leading-7 text-black/48 sm:text-lg sm:leading-8">
            Three simple stages from challenge to capital.
            Prove your discipline, trade within clear rules and
            progress toward BlackProp trader rewards.
          </p>
        </div>

        {/* =====================================================
            CARDS
        ====================================================== */}

        <div className="grid gap-4 lg:grid-cols-3">
          <StepCard
            number="01"
            title="Unlock Capital"
            description="Choose your BlackProp challenge, select your account size and prove you can trade with discipline."
            artwork={<CapitalArtwork />}
            connector
          />

          <StepCard
            number="02"
            title="Trade"
            description="Access your selected trading environment and perform within BlackProp's transparent risk objectives."
            artwork={<TradeArtwork />}
            connector
          />

          <StepCard
            number="03"
            title="Earn"
            description="Complete the required milestones, progress through your account and become eligible for trader rewards."
            artwork={<RewardArtwork />}
          />
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="mt-12 flex flex-col items-center sm:mt-14">
          <div className="flex w-full max-w-[480px] flex-col gap-3 sm:flex-row">
            <a
              href="#challenges"
              className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F8DB75_0%,#D4AF37_48%,#A77916_100%)] px-6 py-4 text-sm font-black text-[#080806] shadow-[0_14px_35px_rgba(151,114,22,.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(151,114,22,.24)]"
            >
              Get Funded

              <ArrowRight />

              <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/45 blur-md transition-all duration-700 group-hover:left-[125%]" />
            </a>

            <a
              href="#why-blackprop"
              className="flex flex-1 items-center justify-center rounded-xl border border-black/[0.07] bg-[#ECEBE7] px-6 py-4 text-sm font-bold text-black/70 transition duration-300 hover:-translate-y-1 hover:border-black/[0.12] hover:bg-[#E5E4DF] hover:text-black"
            >
              Learn More
            </a>
          </div>

          {/* TRUST NOTE */}
          <div className="mt-7 flex items-center gap-2 text-[10px] font-medium text-black/38">
            <span className="text-[#A37A18]">
              <CheckIcon />
            </span>

            Clear objectives. Defined risk. Performance-driven progression.
          </div>
        </div>

        {/* =====================================================
            BOTTOM PROCESS STRIP
        ====================================================== */}

        <div className="mt-16 overflow-hidden rounded-[26px] border border-black/[0.055] bg-white shadow-[0_18px_60px_rgba(50,43,24,.04)]">
          <div className="grid sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose",
                text: "Select your challenge",
              },
              {
                number: "02",
                title: "Perform",
                text: "Meet clear objectives",
              },
              {
                number: "03",
                title: "Progress",
                text: "Unlock your next stage",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`relative flex items-center gap-4 px-6 py-6 sm:px-8 ${
                  index !== 2
                    ? "border-b border-black/[0.05] sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <span className="text-2xl font-black tracking-[-0.055em] text-[#B48922]">
                  {item.number}
                </span>

                <div>
                  <p className="text-xs font-bold text-black/75">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[9px] text-black/35">
                    {item.text}
                  </p>
                </div>

                {index !== 2 && (
                  <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-black/13 sm:block">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}