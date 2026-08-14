const stats = {
  rewards: "$1.2M+",
  averageReward: "$2,450",
  traders: "180K+",
};

/* =========================================================
   BLACKPROP BP MARK
   Vector recreation of the supplied logo symbol
   ========================================================= */

function BPMark({
  x = 0,
  y = 0,
  width = 58,
  height = 74,
  color = "#D4AF37",
  opacity = 1,
}: {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
  opacity?: number | string;
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
   PREMIUM REWARDS ARTWORK
   ========================================================= */

function RewardsArtwork() {
  const orbitNodes = [
    [185, 327, 6],
    [232, 208, 4],
    [319, 155, 5],
    [471, 153, 4],
    [557, 219, 6],
    [592, 338, 4],
    [536, 420, 5],
    [215, 421, 4],
  ];

  const microParticles = [
    [110, 244, 2],
    [142, 359, 3],
    [188, 168, 2],
    [221, 118, 2],
    [270, 234, 2],
    [295, 96, 3],
    [347, 123, 2],
    [404, 96, 2],
    [456, 126, 3],
    [511, 103, 2],
    [556, 155, 2],
    [622, 205, 3],
    [646, 286, 2],
    [613, 389, 2],
    [565, 455, 3],
    [488, 475, 2],
    [291, 472, 2],
    [180, 453, 3],
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* =====================================================
          CINEMATIC AMBIENCE
      ====================================================== */}

      <div className="absolute bottom-[-10%] left-1/2 h-[470px] w-[560px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.09] blur-[130px]" />

      <div className="absolute left-[25%] top-[18%] h-56 w-56 rounded-full bg-white/[0.025] blur-[90px]" />

      <div className="absolute right-[9%] top-[28%] h-48 w-48 rounded-full bg-[#D4AF37]/[0.045] blur-[75px]" />

      {/* VERTICAL LIGHT BEAM */}
      <div className="absolute left-1/2 top-[17%] h-[58%] w-[140px] -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(244,215,123,0.035),rgba(212,175,55,0.08),transparent)] blur-2xl" />

      <svg
        viewBox="0 0 760 650"
        fill="none"
        className="absolute inset-x-0 bottom-[-8px] h-[91%] w-full"
        aria-hidden="true"
      >
        <defs>

          {/* =================================================
              METAL MATERIALS
          ================================================= */}

          <linearGradient
            id="coreGold"
            x1="145"
            y1="90"
            x2="615"
            y2="590"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4B3103" />
            <stop offset=".08" stopColor="#956A11" />
            <stop offset=".18" stopColor="#E5BC48" />
            <stop offset=".27" stopColor="#FFF1A1" />
            <stop offset=".35" stopColor="#C49125" />
            <stop offset=".48" stopColor="#724D08" />
            <stop offset=".58" stopColor="#F2D16A" />
            <stop offset=".69" stopColor="#A77817" />
            <stop offset=".82" stopColor="#F6DA78" />
            <stop offset=".92" stopColor="#79530A" />
            <stop offset="1" stopColor="#372302" />
          </linearGradient>

          <linearGradient
            id="coreGoldBright"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#FFF7C7" />
            <stop offset=".18" stopColor="#F5D873" />
            <stop offset=".48" stopColor="#B47E17" />
            <stop offset=".72" stopColor="#F5D470" />
            <stop offset="1" stopColor="#664306" />
          </linearGradient>

          <linearGradient
            id="coreSilver"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#222" />
            <stop offset=".11" stopColor="#B7B7B7" />
            <stop offset=".22" stopColor="#FAFAFA" />
            <stop offset=".34" stopColor="#595959" />
            <stop offset=".48" stopColor="#D7D7D7" />
            <stop offset=".62" stopColor="#383838" />
            <stop offset=".78" stopColor="#EEEEEE" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>

          <radialGradient
            id="obsidianFace"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(332 214) rotate(45) scale(190)"
          >
            <stop stopColor="#404040" />
            <stop offset=".2" stopColor="#242424" />
            <stop offset=".52" stopColor="#111112" />
            <stop offset=".8" stopColor="#080809" />
            <stop offset="1" stopColor="#020202" />
          </radialGradient>

          <linearGradient
            id="pedestalMetal"
            x1="380"
            y1="475"
            x2="380"
            y2="635"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A4A4A" />
            <stop offset=".08" stopColor="#292929" />
            <stop offset=".32" stopColor="#191919" />
            <stop offset=".72" stopColor="#0C0C0D" />
            <stop offset="1" stopColor="#030303" />
          </linearGradient>

          <radialGradient
            id="pedestalTop"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(336 501) rotate(15) scale(255 75)"
          >
            <stop stopColor="#484848" />
            <stop offset=".28" stopColor="#292929" />
            <stop offset=".68" stopColor="#161616" />
            <stop offset="1" stopColor="#070707" />
          </radialGradient>

          {/* =================================================
              LIGHTS
          ================================================= */}

          <radialGradient id="coreAura">
            <stop stopColor="#F0CF63" stopOpacity=".28" />
            <stop offset=".35" stopColor="#D4AF37" stopOpacity=".12" />
            <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>

          <linearGradient
            id="tradeTrajectory"
            x1="135"
            y1="385"
            x2="635"
            y2="188"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#76520A" stopOpacity="0" />
            <stop offset=".2" stopColor="#A87C20" stopOpacity=".3" />
            <stop offset=".52" stopColor="#F1D16E" />
            <stop offset=".82" stopColor="#C99B2B" stopOpacity=".45" />
            <stop offset="1" stopColor="#F7DB7B" stopOpacity="0" />
          </linearGradient>

          {/* =================================================
              FILTERS
          ================================================= */}

          <filter
            id="capitalShadow"
            x="-100%"
            y="-100%"
            width="300%"
            height="320%"
          >
            <feDropShadow
              dx="0"
              dy="25"
              stdDeviation="22"
              floodColor="#000"
              floodOpacity=".95"
            />
          </filter>

          <filter
            id="capitalSoftShadow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="11"
              floodColor="#000"
              floodOpacity=".85"
            />
          </filter>

          <filter
            id="nodeGlow"
            x="-300%"
            y="-300%"
            width="700%"
            height="700%"
          >
            <feGaussianBlur
              stdDeviation="5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter
            id="majorGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="15"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

        </defs>

        {/* =====================================================
            BACKGROUND ARCHITECTURE
        ====================================================== */}

        <ellipse
          cx="380"
          cy="326"
          rx="264"
          ry="264"
          fill="url(#coreAura)"
          opacity=".43"
        />

        {/* LARGE ORBIT */}
        <ellipse
          cx="380"
          cy="318"
          rx="249"
          ry="119"
          transform="rotate(-13 380 318)"
          stroke="#D4AF37"
          strokeOpacity=".13"
          strokeWidth="1.5"
        />

        <ellipse
          cx="380"
          cy="318"
          rx="212"
          ry="92"
          transform="rotate(24 380 318)"
          stroke="white"
          strokeOpacity=".065"
          strokeWidth="1"
        />

        <ellipse
          cx="380"
          cy="315"
          rx="173"
          ry="169"
          stroke="#D4AF37"
          strokeOpacity=".055"
        />

        {/* ORBIT DASHES */}
        <ellipse
          cx="380"
          cy="318"
          rx="278"
          ry="143"
          transform="rotate(-12 380 318)"
          stroke="#D4AF37"
          strokeOpacity=".09"
          strokeWidth="1"
          strokeDasharray="3 12"
        />

        {/* =====================================================
            TRADING TRAJECTORY
        ====================================================== */}

        <path
          d="M104 412C151 403 176 368 214 376C255 385 274 338 316 348C358 359 379 303 417 311C457 319 475 268 516 277C558 286 572 231 611 237C630 240 646 220 665 198"
          stroke="url(#tradeTrajectory)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M104 412C151 403 176 368 214 376C255 385 274 338 316 348C358 359 379 303 417 311C457 319 475 268 516 277C558 286 572 231 611 237C630 240 646 220 665 198"
          stroke="#F5D675"
          strokeOpacity=".08"
          strokeWidth="11"
          strokeLinecap="round"
          filter="url(#majorGlow)"
        />

        {/* =====================================================
            ORBIT NODES
        ====================================================== */}

        {orbitNodes.map(([cx, cy, r], index) => (
          <g
            key={`${cx}-${cy}`}
            filter={
              index % 2 === 0
                ? "url(#nodeGlow)"
                : undefined
            }
          >
            <circle
              cx={cx}
              cy={cy}
              r={r + 4}
              fill="#D4AF37"
              opacity=".07"
            />

            <circle
              cx={cx}
              cy={cy}
              r={r}
              fill={
                index % 3 === 0
                  ? "#F5D775"
                  : "#9F7820"
              }
            />

            <circle
              cx={cx - 1}
              cy={cy - 1}
              r={Math.max(1, r * 0.3)}
              fill="#FFF3AE"
              opacity=".85"
            />
          </g>
        ))}

        {/* =====================================================
            MICRO PARTICLES
        ====================================================== */}

        {microParticles.map(
          ([cx, cy, r], index) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={r}
              fill={
                index % 3 === 0
                  ? "#F5D875"
                  : "#9E7A28"
              }
              opacity={
                index % 2 === 0 ? ".7" : ".35"
              }
            />
          )
        )}

        {/* =====================================================
            BLACKPROP CAPITAL CORE
        ====================================================== */}

        <g
          transform="translate(380 304)"
          filter="url(#capitalShadow)"
        >
          {/* REAR DEPTH */}
          <path
            d="M0-137 119-69 119 69 0 137-119 69-119-69 0-137Z"
            transform="translate(0 15)"
            fill="#624508"
          />

          <path
            d="M0-137 119-69 119 69 0 137-119 69-119-69 0-137Z"
            transform="translate(0 8)"
            fill="url(#coreGold)"
          />

          {/* PRIMARY FRAME */}
          <path
            d="M0-132 114-66 114 66 0 132-114 66-114-66 0-132Z"
            fill="url(#coreGoldBright)"
          />

          {/* BLACK INNER HEX */}
          <path
            d="M0-116 100-58 100 58 0 116-100 58-100-58 0-116Z"
            fill="url(#obsidianFace)"
            stroke="#F2D16A"
            strokeOpacity=".35"
            strokeWidth="2"
          />

          {/* INNER DETAIL FRAME */}
          <path
            d="M0-101 87-50 87 50 0 101-87 50-87-50 0-101Z"
            fill="none"
            stroke="white"
            strokeOpacity=".07"
          />

          {/* TECH LINES */}
          <path
            d="M-87-50 0 0 87-50"
            stroke="white"
            strokeOpacity=".045"
          />

          <path
            d="M-87 50 0 0 87 50"
            stroke="white"
            strokeOpacity=".045"
          />

          <path
            d="M0-101V101"
            stroke="#D4AF37"
            strokeOpacity=".065"
          />

          {/* CENTRAL HALO */}
          <circle
            cx="0"
            cy="0"
            r="66"
            fill="#D4AF37"
            opacity=".035"
          />

          <circle
            cx="0"
            cy="0"
            r="61"
            stroke="#D4AF37"
            strokeOpacity=".2"
          />

          <circle
            cx="0"
            cy="0"
            r="51"
            stroke="white"
            strokeOpacity=".055"
          />

          {/* BLACKPROP LOGO MARK */}
          <BPMark
            x={-31}
            y={-39}
            width={62}
            height={78}
            color="#F0D16A"
          />

          

          {/* SPECULAR HIGHLIGHT */}
          <path
            d="M-69-77C-35-106 13-112 49-92"
            stroke="white"
            strokeOpacity=".2"
            strokeWidth="8"
            strokeLinecap="round"
          />

          <path
            d="M-93-47C-85-59-78-67-67-76"
            stroke="#FFF4B7"
            strokeOpacity=".15"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* GOLD CORNER DETAILS */}
          <circle
            cx="0"
            cy="-105"
            r="3"
            fill="#F5D979"
          />

          <circle
            cx="91"
            cy="-52"
            r="3"
            fill="#B8871E"
          />

          <circle
            cx="-91"
            cy="52"
            r="3"
            fill="#B8871E"
          />

          <circle
            cx="0"
            cy="105"
            r="3"
            fill="#F5D979"
          />
        </g>

        {/* =====================================================
            FLOATING CAPITAL BARS
        ====================================================== */}

        <g
          transform="translate(172 353) rotate(-16)"
          filter="url(#capitalSoftShadow)"
        >
          <path
            d="M-47-15 32-28 47-8-31 7Z"
            fill="url(#coreGoldBright)"
          />

          <path
            d="M-31 7 47-8 47 3-30 18Z"
            fill="#76520B"
          />

          <path
            d="M32-28 47-8 47 3 33-17Z"
            fill="#B18120"
          />

          <BPMark
            x={-8}
            y={-16}
            width={16}
            height={20}
            color="#2B1C02"
          />
        </g>

        <g
          transform="translate(576 359) rotate(20)"
          filter="url(#capitalSoftShadow)"
        >
          <path
            d="M-43-14 28-25 43-7-29 6Z"
            fill="url(#coreSilver)"
          />

          <path
            d="M-29 6 43-7 43 4-28 17Z"
            fill="#555"
          />

          <path
            d="M28-25 43-7 43 4 29-15Z"
            fill="#8B8B8B"
          />

          <BPMark
            x={-7}
            y={-14}
            width={14}
            height={18}
            color="#252525"
          />
        </g>

        {/* =====================================================
            SMALL FLOATING TOKENS
        ====================================================== */}

        <g
          transform="translate(218 247) rotate(-21)"
          filter="url(#capitalSoftShadow)"
        >
          <ellipse
            cy="5"
            rx="34"
            ry="42"
            fill="#634408"
          />

          <ellipse
            rx="34"
            ry="42"
            fill="url(#coreGold)"
          />

          <ellipse
            rx="27"
            ry="34"
            fill="#111"
          />

          <BPMark
            x={-10}
            y={-13}
            width={20}
            height={25}
            color="#D9AF38"
          />
        </g>

        <g
          transform="translate(547 223) rotate(17)"
          filter="url(#capitalSoftShadow)"
        >
          <ellipse
            cy="5"
            rx="31"
            ry="39"
            fill="#414141"
          />

          <ellipse
            rx="31"
            ry="39"
            fill="url(#coreSilver)"
          />

          <ellipse
            rx="24"
            ry="31"
            fill="#111"
          />

          <BPMark
            x={-9}
            y={-12}
            width={18}
            height={23}
            color="#D8D8D8"
          />
        </g>

        {/* =====================================================
            PEDESTAL
        ====================================================== */}

        <ellipse
          cx="380"
          cy="610"
          rx="235"
          ry="35"
          fill="#000"
          opacity=".9"
        />

        <path
          d="M183 521V578C183 609 271 633 380 633C489 633 577 609 577 578V521"
          fill="url(#pedestalMetal)"
        />

        <ellipse
          cx="380"
          cy="521"
          rx="197"
          ry="45"
          fill="url(#pedestalTop)"
          stroke="white"
          strokeOpacity=".075"
        />

        {/* GOLD PEDESTAL RING */}
        <ellipse
          cx="380"
          cy="517"
          rx="165"
          ry="34"
          stroke="url(#coreGold)"
          strokeOpacity=".42"
          strokeWidth="2"
        />

        <ellipse
          cx="380"
          cy="517"
          rx="142"
          ry="27"
          stroke="white"
          strokeOpacity=".04"
        />

        {/* LIGHT UNDER CORE */}
        <ellipse
          cx="380"
          cy="501"
          rx="105"
          ry="21"
          fill="#D4AF37"
          opacity=".11"
          filter="url(#majorGlow)"
        />

        {/* =====================================================
            STACKED BARS ON PLATFORM
        ====================================================== */}

        <g
          transform="translate(285 517)"
          filter="url(#capitalSoftShadow)"
        >
          <path
            d="M-56-7 34-20 54-6-37 8Z"
            fill="url(#coreGold)"
          />

          <path
            d="M-37 8 54-6 54 4-36 18Z"
            fill="#72500A"
          />

          <path
            d="M-52 8 38-5 56 9-35 22Z"
            fill="url(#coreGold)"
          />

          <text
            x="1"
            y="-3"
            textAnchor="middle"
            fill="#3A2602"
            fontSize="9"
            fontWeight="900"
          >
            BLACKPROP
          </text>
        </g>

        <g
          transform="translate(486 520)"
          filter="url(#capitalSoftShadow)"
        >
          <ellipse
            cx="0"
            cy="12"
            rx="55"
            ry="15"
            fill="#3C3C3C"
          />

          <ellipse
            cx="0"
            cy="6"
            rx="55"
            ry="15"
            fill="url(#coreSilver)"
          />

          <ellipse
            cx="0"
            cy="1"
            rx="54"
            ry="14"
            fill="#191919"
          />

          <BPMark
            x={-7}
            y={-9}
            width={14}
            height={18}
            color="#D8D8D8"
          />
        </g>

        {/* =====================================================
            FRONT REFLECTIONS
        ====================================================== */}

        <path
          d="M213 568C298 592 468 594 548 566"
          stroke="white"
          strokeOpacity=".035"
          strokeWidth="2"
        />

        <path
          d="M248 579C317 595 442 596 509 579"
          stroke="#D4AF37"
          strokeOpacity=".045"
        />
      </svg>

      {/* =====================================================
          HTML OVERLAY DETAILS
      ====================================================== */}

      <div className="absolute bottom-[20%] left-[8%] hidden items-center gap-2 rounded-full border border-white/[0.07] bg-black/25 px-3 py-1.5 backdrop-blur-lg sm:flex">

        <span className="h-1.5 w-1.5 rounded-full bg-[#E6C45B] shadow-[0_0_8px_rgba(212,175,55,.5)]" />

        <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-white/30">
          Capital unlocked
        </span>

      </div>

      <div className="absolute bottom-[30%] right-[7%] hidden rounded-xl border border-white/[0.07] bg-[#09090A]/70 px-3 py-2 backdrop-blur-xl md:block">

        <p className="text-[7px] font-semibold uppercase tracking-[0.17em] text-white/20">
          Trader share
        </p>

        <p className="mt-1 text-sm font-black tracking-[-0.04em] text-[#E8C65E]">
          90%
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   TROPHY
   ========================================================= */

function TrophyArtwork() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[90px]" />

      <svg
        viewBox="0 0 520 330"
        className="absolute bottom-[-20px] right-[-35px] h-[103%] w-[72%]"
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
            <stop offset=".08" stopColor="#F1F1F1" />
            <stop offset=".19" stopColor="#5B5B5B" />
            <stop offset=".35" stopColor="#F8F8F8" />
            <stop offset=".53" stopColor="#353535" />
            <stop offset=".68" stopColor="#CFCFCF" />
            <stop offset=".82" stopColor="#282828" />
            <stop offset="1" stopColor="#111" />
          </linearGradient>

          <linearGradient
            id="cupGold"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#704D09" />
            <stop offset=".25" stopColor="#FFF1A0" />
            <stop offset=".48" stopColor="#C89927" />
            <stop offset=".75" stopColor="#F4D36D" />
            <stop offset="1" stopColor="#6A4807" />
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

          <path
            d="M184 74c-9 64 8 107 49 133"
            stroke="white"
            strokeOpacity=".21"
            strokeWidth="11"
            strokeLinecap="round"
          />

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
            x={230}
            y={113}
            width={36}
            height={46}
            color="#D4AF37"
          />

          <path
            d="M228 218h40l10 54h-60l10-54Z"
            fill="url(#metalCup)"
          />

          <rect
            x="201"
            y="266"
            width="94"
            height="16"
            rx="8"
            fill="url(#cupGold)"
          />

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
   GLOBE
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

      <div className="absolute -bottom-[115px] -right-[55px] h-[390px] w-[390px] rounded-full border border-white/[0.08] bg-[radial-gradient(circle_at_35%_27%,#313131_0%,#151515_30%,#080808_65%,#020202_100%)] shadow-[inset_-55px_-35px_90px_rgba(0,0,0,.9),0_30px_70px_rgba(0,0,0,.7)]">

        <div className="absolute left-1/2 top-[7%] h-[86%] w-[34%] -translate-x-1/2 rounded-[50%] border border-white/[0.045]" />

        <div className="absolute left-1/2 top-[7%] h-[86%] w-[65%] -translate-x-1/2 rounded-[50%] border border-white/[0.03]" />

        <div className="absolute left-[7%] top-1/2 h-[32%] w-[86%] -translate-y-1/2 rounded-[50%] border border-white/[0.035]" />

        <div className="absolute left-[10%] top-[29%] h-[18%] w-[80%] rounded-[50%] border border-white/[0.035]" />

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

        <div className="absolute left-[19%] top-[14%] h-[40%] w-[20%] rotate-[28deg] rounded-full bg-white/[0.05] blur-xl" />
      </div>
    </div>
  );
}

/* =========================================================
   SECTION
   ========================================================= */

export function ProofStats() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-20 sm:py-24 lg:py-28">

      {/* AMBIENCE */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[550px] w-[950px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            STAT CARDS
        ====================================================== */}

        <div className="grid gap-4 lg:grid-cols-[1.08fr_.92fr]">

          {/* LARGE REWARDS CARD */}
          <article className="group relative min-h-[625px] overflow-hidden rounded-[32px] border border-white/[0.075] bg-[linear-gradient(145deg,#171718,#09090A)] shadow-[0_35px_100px_rgba(0,0,0,.35)]">

            <RewardsArtwork />

            {/* CINEMATIC VIGNETTE */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,4,.04)_0%,transparent_40%,rgba(3,3,3,.15)_75%,rgba(3,3,3,.38)_100%)]" />

            {/* TOP TEXT GRADIENT */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[260px] bg-gradient-to-b from-[#111112] via-[#111112]/80 to-transparent" />

            {/* TOP SHINE */}
            <div className="absolute inset-x-[13%] top-0 h-px bg-gradient-to-r from-transparent via-[#F0D16E]/40 to-transparent" />

            {/* TEXT */}
            <div className="relative z-20 p-7 sm:p-9 lg:p-10">

              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]/70">
                Rewards paid
              </p>

              <h3 className="mt-4 text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-[4.7rem]">
                {stats.rewards}
              </h3>

              <p className="mt-3 max-w-[320px] text-sm leading-6 text-white/38">
                Capital rewarded to traders for
                disciplined performance.
              </p>

            </div>

            {/* BADGE */}
            <div className="absolute bottom-7 left-7 z-20 sm:bottom-9 sm:left-9">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/40 px-3 py-1.5 backdrop-blur-xl">

                <span className="relative flex h-1.5 w-1.5">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-35" />

                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

                </span>

                <span className="text-[9px] font-medium text-white/42">
                  BlackProp rewards
                </span>

              </div>

            </div>

          </article>

          {/* RIGHT CARDS */}
          <div className="grid gap-4">

            {/* AVERAGE REWARD */}
            <article className="group relative min-h-[305px] overflow-hidden rounded-[32px] border border-white/[0.075] bg-[linear-gradient(145deg,#171718,#09090A)]">

              <TrophyArtwork />

              <div className="absolute inset-0 bg-gradient-to-r from-[#111112] via-[#111112]/75 to-transparent" />

              <div className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="relative z-20 max-w-[58%] p-7 sm:p-8">

                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/28">
                  Average reward
                </p>

                <h3 className="mt-4 text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl">
                  {stats.averageReward}
                </h3>

                <p className="mt-3 text-xs leading-5 text-white/35 sm:text-sm">
                  Average reward across successful
                  payout cycles.
                </p>

              </div>

            </article>

            {/* TRADERS */}
            <article className="group relative min-h-[305px] overflow-hidden rounded-[32px] border border-white/[0.075] bg-[linear-gradient(145deg,#171718,#09090A)]">

              <GlobeArtwork />

              <div className="absolute inset-0 bg-gradient-to-r from-[#111112] via-[#111112]/72 to-transparent" />

              <div className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/28 to-transparent" />

              <div className="relative z-20 max-w-[56%] p-7 sm:p-8">

                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]/60">
                  Global traders
                </p>

                <h3 className="mt-4 text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl">
                  {stats.traders}
                </h3>

                <p className="mt-3 text-xs leading-5 text-white/35 sm:text-sm">
                  Traders connected across global
                  financial markets.
                </p>

              </div>

            </article>

          </div>

        </div>

        {/* =====================================================
            BOTTOM STATS
        ====================================================== */}

        <div className="mt-4 grid overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#0A0A0B] sm:grid-cols-3">

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
              className={`relative px-6 py-6 sm:px-8 ${
                index !== 2
                  ? "border-b border-white/[0.055] sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >

              <div className="absolute left-0 top-0 h-px w-20 bg-gradient-to-r from-[#D4AF37]/45 to-transparent" />

              <div className="flex items-center gap-5">

                <span className="text-2xl font-black tracking-[-0.055em] text-[#E3C35D]">
                  {item.value}
                </span>

                <div>
                  <p className="text-xs font-semibold text-white/70">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[9px] text-white/25">
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