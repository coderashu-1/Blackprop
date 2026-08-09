"use client";

import { useMemo, useState } from "react";

/* =========================================================
   DATA
========================================================= */

const accountSizes = [
  5000,
  10000,
  15000,
  20000,
  25000,
  50000,
  100000,
  150000,
  200000,
  250000,
  300000,
  400000,
];

/* =========================================================
   HELPERS
========================================================= */

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

/* =========================================================
   ICONS
========================================================= */

function GrowthIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M3 15 7.2 10.7l3 2.5L17 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M13.5 6.5H17V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="8"
        width="12"
        height="9"
        rx="2.4"
        stroke="currentColor"
        strokeWidth="1.35"
      />

      <path
        d="M6.5 8V6.3A3.5 3.5 0 0 1 10 2.8a3.5 3.5 0 0 1 3.5 3.5V8"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <ellipse
        cx="10"
        cy="6"
        rx="6"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M4 6v4c0 1.7 2.7 3 6 3s6-1.3 6-3V6"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M4 10v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m5.5 8 4.5 4 4.5-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m10 2.5 2 1.4 2.5-.1.7 2.4 2 1.5-.8 2.3.8 2.4-2 1.4-.7 2.4-2.5-.1-2 1.4-2-1.4-2.5.1-.7-2.4-2-1.4.8-2.4-.8-2.3 2-1.5.7-2.4 2.5.1 2-1.4Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />

      <path
        d="m6.8 10.1 2 2 4.3-4.4"
        stroke="currentColor"
        strokeWidth="1.4"
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   PREMIUM BLACKPROP COIN ARTWORK
========================================================= */

function CoinsArtwork() {
  const bars = [
    { x: 122, y: 326, width: 48, height: 67 },
    { x: 181, y: 286, width: 48, height: 107 },
    { x: 240, y: 238, width: 48, height: 155 },
    { x: 299, y: 184, width: 48, height: 209 },
  ];

  return (
    <div className="relative mx-auto aspect-[1.16/1] w-full max-w-[560px]">
      {/* =====================================================
          AMBIENT LIGHT
      ====================================================== */}

      <div className="absolute left-1/2 top-[58%] h-[58%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.12] blur-[90px]" />

      <div className="absolute right-[8%] top-[10%] h-[26%] w-[26%] rounded-full bg-white/55 blur-[65px]" />

      {/* =====================================================
          MAIN SVG
      ====================================================== */}

      <svg
        viewBox="0 0 620 535"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {/* GOLD METAL */}
          <linearGradient
            id="bpMonumentGold"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#4B2E01" />
            <stop offset=".09" stopColor="#95640B" />
            <stop offset=".22" stopColor="#D5A936" />
            <stop offset=".34" stopColor="#FFF3AC" />
            <stop offset=".44" stopColor="#D7A93A" />
            <stop offset=".58" stopColor="#A46E0E" />
            <stop offset=".72" stopColor="#F0CC60" />
            <stop offset=".86" stopColor="#885B08" />
            <stop offset="1" stopColor="#3B2501" />
          </linearGradient>

          {/* DARK GOLD DEPTH */}
          <linearGradient
            id="bpMonumentGoldSide"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop stopColor="#936411" />
            <stop offset=".42" stopColor="#634006" />
            <stop offset="1" stopColor="#2B1B01" />
          </linearGradient>

          {/* SILVER */}
          <linearGradient
            id="bpMonumentSilver"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#393936" />
            <stop offset=".1" stopColor="#A3A39F" />
            <stop offset=".22" stopColor="#F4F4F0" />
            <stop offset=".36" stopColor="#777773" />
            <stop offset=".51" stopColor="#EFEFEB" />
            <stop offset=".67" stopColor="#5A5A56" />
            <stop offset=".83" stopColor="#D0D0CB" />
            <stop offset="1" stopColor="#393936" />
          </linearGradient>

          {/* DARK COIN FACE */}
          <radialGradient
            id="bpMonumentFace"
            cx=".38"
            cy=".27"
            r=".8"
          >
            <stop stopColor="#383837" />
            <stop offset=".35" stopColor="#1B1B1A" />
            <stop offset=".72" stopColor="#0C0C0C" />
            <stop offset="1" stopColor="#030303" />
          </radialGradient>

          {/* PEDESTAL */}
          <linearGradient
            id="bpMonumentBase"
            x1="310"
            y1="408"
            x2="310"
            y2="500"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#969691" />
            <stop offset=".08" stopColor="#555551" />
            <stop offset=".34" stopColor="#292928" />
            <stop offset=".72" stopColor="#111111" />
            <stop offset="1" stopColor="#050505" />
          </linearGradient>

          {/* GOLD LIGHT */}
          <radialGradient id="bpMonumentGlow">
            <stop stopColor="#F1D26C" stopOpacity=".34" />
            <stop offset=".46" stopColor="#D4AF37" stopOpacity=".1" />
            <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>

          {/* SHADOW */}
          <filter
            id="bpMonumentShadow"
            x="-100%"
            y="-100%"
            width="300%"
            height="330%"
          >
            <feDropShadow
              dx="0"
              dy="19"
              stdDeviation="14"
              floodColor="#4B3A18"
              floodOpacity=".23"
            />
          </filter>

          <filter
            id="bpMonumentDeepShadow"
            x="-100%"
            y="-100%"
            width="300%"
            height="330%"
          >
            <feDropShadow
              dx="0"
              dy="24"
              stdDeviation="17"
              floodColor="#251C0C"
              floodOpacity=".32"
            />
          </filter>

          <filter
            id="bpMonumentGlowFilter"
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

        {/* =====================================================
            SOFT BACKGROUND HALO
        ====================================================== */}

        <ellipse
          cx="324"
          cy="271"
          rx="242"
          ry="210"
          fill="url(#bpMonumentGlow)"
        />

        {/* =====================================================
            SUBTLE BACK RINGS
        ====================================================== */}

        <ellipse
          cx="319"
          cy="261"
          rx="232"
          ry="145"
          transform="rotate(-10 319 261)"
          stroke="#B28A26"
          strokeOpacity=".12"
        />

        <ellipse
          cx="319"
          cy="260"
          rx="184"
          ry="193"
          stroke="#252525"
          strokeOpacity=".06"
          strokeDasharray="5 11"
        />

        {/* =====================================================
            FLOOR SHADOW
        ====================================================== */}

        <ellipse
          cx="321"
          cy="465"
          rx="230"
          ry="31"
          fill="#483B26"
          opacity=".09"
        />

        <ellipse
          cx="321"
          cy="456"
          rx="171"
          ry="20"
          fill="#D4AF37"
          opacity=".055"
        />

        {/* =====================================================
            RISING CAPITAL BARS
        ====================================================== */}

        <g opacity=".94">
          {bars.map((bar, index) => (
            <g
              key={bar.x}
              filter="url(#bpMonumentShadow)"
            >
              {/* SIDE */}
              <path
                d={`
                  M${bar.x + bar.width} ${bar.y}
                  L${bar.x + bar.width + 12} ${bar.y - 8}
                  L${bar.x + bar.width + 12} 393
                  L${bar.x + bar.width} 401
                  Z
                `}
                fill="url(#bpMonumentGoldSide)"
              />

              {/* TOP */}
              <path
                d={`
                  M${bar.x} ${bar.y}
                  L${bar.x + 12} ${bar.y - 8}
                  L${bar.x + bar.width + 12} ${bar.y - 8}
                  L${bar.x + bar.width} ${bar.y}
                  Z
                `}
                fill={
                  index === bars.length - 1
                    ? "#F3D878"
                    : "#DBB445"
                }
              />

              {/* FRONT */}
              <rect
                x={bar.x}
                y={bar.y}
                width={bar.width}
                height={bar.height}
                rx="5"
                fill="url(#bpMonumentGold)"
              />

              {/* FRONT SHINE */}
              <rect
                x={bar.x + 7}
                y={bar.y + 7}
                width="5"
                height={Math.max(
                  bar.height - 18,
                  16
                )}
                rx="2.5"
                fill="white"
                opacity=".15"
              />

              {/* BASE LINE */}
              <path
                d={`M${bar.x + 8} ${
                  bar.y + bar.height - 10
                }H${bar.x + bar.width - 8}`}
                stroke="#5F3E05"
                strokeOpacity=".32"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          ))}
        </g>

        {/* =====================================================
            RISING PERFORMANCE CURVE
        ====================================================== */}

        <path
          d="M98 376C151 364 174 328 212 340C252 352 275 294 313 304C353 314 374 247 414 256C452 264 480 198 532 155"
          stroke="#D4AF37"
          strokeOpacity=".1"
          strokeWidth="18"
          strokeLinecap="round"
        />

        <path
          d="M98 376C151 364 174 328 212 340C252 352 275 294 313 304C353 314 374 247 414 256C452 264 480 198 532 155"
          stroke="#B88922"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <circle
          cx="532"
          cy="155"
          r="5"
          fill="#D4AF37"
          filter="url(#bpMonumentGlowFilter)"
        />

        {/* =====================================================
            LEFT SILVER COIN STACK
        ====================================================== */}

        <g
          transform="translate(112 363)"
          filter="url(#bpMonumentDeepShadow)"
        >
          {[0, 10, 20, 30].map(
            (offset, index) => (
              <g
                key={offset}
                transform={`translate(0 ${-offset})`}
              >
                <ellipse
                  cx="0"
                  cy="7"
                  rx="54"
                  ry="17"
                  fill="#565653"
                />

                <ellipse
                  cx="0"
                  cy="0"
                  rx="54"
                  ry="17"
                  fill="url(#bpMonumentSilver)"
                />

                <ellipse
                  cx="0"
                  cy="-1"
                  rx="43"
                  ry="12"
                  fill="#242423"
                />

                {index === 3 && (
                  <text
                    x="0"
                    y="4"
                    textAnchor="middle"
                    fill="#D4D4CF"
                    fontSize="13"
                    fontWeight="900"
                  >
                    $
                  </text>
                )}
              </g>
            )
          )}
        </g>

        {/* =====================================================
            RIGHT GOLD COIN STACK
        ====================================================== */}

        <g
          transform="translate(490 363)"
          filter="url(#bpMonumentDeepShadow)"
        >
          {[0, 10, 20, 30, 40].map(
            (offset, index) => (
              <g
                key={offset}
                transform={`translate(0 ${-offset})`}
              >
                <ellipse
                  cx="0"
                  cy="7"
                  rx="55"
                  ry="17"
                  fill="#795209"
                />

                <ellipse
                  cx="0"
                  cy="0"
                  rx="55"
                  ry="17"
                  fill="url(#bpMonumentGold)"
                />

                <ellipse
                  cx="0"
                  cy="-1"
                  rx="43"
                  ry="12"
                  fill="#222220"
                />

                {index === 4 && (
                  <text
                    x="0"
                    y="4"
                    textAnchor="middle"
                    fill="#DCB547"
                    fontSize="11"
                    fontWeight="900"
                  >
                    BP
                  </text>
                )}
              </g>
            )
          )}
        </g>

        {/* =====================================================
            LARGE CENTER BP MEDALLION
        ====================================================== */}

        <g
          transform="translate(363 256) rotate(-7)"
          filter="url(#bpMonumentDeepShadow)"
        >
          {/* COIN DEPTH */}
          <circle
            cy="12"
            r="108"
            fill="#765009"
          />

          {/* OUTER METAL */}
          <circle
            r="108"
            fill="url(#bpMonumentGold)"
          />

          {/* EDGE RIDGES */}
          <circle
            r="99"
            fill="none"
            stroke="#4F3203"
            strokeOpacity=".65"
            strokeWidth="3"
            strokeDasharray="2 4"
          />

          {/* SECOND RING */}
          <circle
            r="89"
            fill="url(#bpMonumentFace)"
          />

          <circle
            r="76"
            fill="none"
            stroke="#D4AF37"
            strokeOpacity=".24"
            strokeWidth="1.5"
          />

          {/* INNER DEPTH */}
          <circle
            r="66"
            fill="#0B0B0B"
            stroke="white"
            strokeOpacity=".045"
          />

          {/* BP */}
          <text
            x="-5"
            y="19"
            textAnchor="middle"
            fill="url(#bpMonumentGold)"
            fontSize="65"
            fontWeight="900"
            letterSpacing="-9"
          >
            BP
          </text>

          <text
            x="0"
            y="48"
            textAnchor="middle"
            fill="white"
            fillOpacity=".3"
            fontSize="8"
            fontWeight="800"
            letterSpacing="3"
          >
            CAPITAL
          </text>

          {/* FACE SHINE */}
          <path
            d="M-55-63C-22-89 24-91 59-67"
            stroke="white"
            strokeOpacity=".25"
            strokeWidth="8"
            strokeLinecap="round"
          />

          <path
            d="M-70-48C-35-76 10-83 46-72"
            stroke="#F8E4A0"
            strokeOpacity=".12"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* =====================================================
            SMALL FLOATING COIN — LEFT
        ====================================================== */}

        <g
          transform="translate(103 208) rotate(-17)"
          filter="url(#bpMonumentShadow)"
        >
          <ellipse
            cx="0"
            cy="5"
            rx="31"
            ry="47"
            fill="#535350"
          />

          <ellipse
            cx="0"
            cy="0"
            rx="31"
            ry="47"
            fill="url(#bpMonumentSilver)"
          />

          <ellipse
            cx="0"
            cy="0"
            rx="23"
            ry="37"
            fill="#151515"
          />

          <text
            x="0"
            y="5"
            textAnchor="middle"
            fill="#D7D7D2"
            fontSize="12"
            fontWeight="900"
          >
            $
          </text>
        </g>

        {/* =====================================================
            SMALL FLOATING GOLD COIN — RIGHT
        ====================================================== */}

        <g
          transform="translate(526 271) rotate(17)"
          filter="url(#bpMonumentShadow)"
        >
          <ellipse
            cx="0"
            cy="5"
            rx="26"
            ry="40"
            fill="#6D4806"
          />

          <ellipse
            cx="0"
            cy="0"
            rx="26"
            ry="40"
            fill="url(#bpMonumentGold)"
          />

          <ellipse
            cx="0"
            cy="0"
            rx="18"
            ry="31"
            fill="#171717"
          />

          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#DBB447"
            fontSize="9"
            fontWeight="900"
          >
            BP
          </text>
        </g>

        {/* =====================================================
            PEDESTAL
        ====================================================== */}

        <g filter="url(#bpMonumentDeepShadow)">
          {/* DEPTH */}
          <path
            d="M166 418v33c0 22 69 40 154 40s154-18 154-40v-33"
            fill="url(#bpMonumentBase)"
          />

          {/* TOP */}
          <ellipse
            cx="320"
            cy="418"
            rx="154"
            ry="35"
            fill="#74746F"
          />

          <ellipse
            cx="320"
            cy="413"
            rx="150"
            ry="30"
            fill="#171717"
            stroke="#B98B23"
            strokeOpacity=".19"
          />

          {/* INNER LIGHT */}
          <ellipse
            cx="320"
            cy="410"
            rx="104"
            ry="19"
            fill="#D4AF37"
            opacity=".055"
          />

          <path
            d="M205 429C249 446 375 450 438 425"
            stroke="white"
            strokeOpacity=".065"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* FRONT BP */}
          <text
            x="320"
            y="466"
            textAnchor="middle"
            fill="#D4AF37"
            fillOpacity=".5"
            fontSize="9"
            fontWeight="900"
            letterSpacing="3"
          >
            BLACKPROP
          </text>
        </g>

        {/* =====================================================
            PARTICLES
        ====================================================== */}

        <circle
          cx="73"
          cy="293"
          r="3"
          fill="#B48720"
        />

        <circle
          cx="557"
          cy="212"
          r="3"
          fill="#D4AF37"
        />

        <circle
          cx="463"
          cy="100"
          r="2.5"
          fill="#C39728"
        />

        <circle
          cx="149"
          cy="127"
          r="2"
          fill="#9E7A25"
        />
      </svg>

      {/* =====================================================
          FLOATING INFO
      ====================================================== */}

      <div className="absolute left-[1%] top-[11%] rounded-xl border border-black/[0.055] bg-white/80 px-3 py-2 shadow-[0_14px_35px_rgba(72,57,20,.08)] backdrop-blur-xl sm:left-[3%]">
        <p className="text-[6px] font-bold uppercase tracking-[0.15em] text-black/28">
          Account
        </p>

        <p className="mt-1 text-[10px] font-black text-[#987018]">
          $20K+
        </p>
      </div>

      <div className="absolute right-[1%] top-[8%] rounded-xl border border-black/[0.055] bg-white/80 px-3 py-2 shadow-[0_14px_35px_rgba(72,57,20,.08)] backdrop-blur-xl sm:right-[4%]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

          <span className="text-[7px] font-black uppercase tracking-[0.14em] text-black/38">
            Profit Potential
          </span>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LABEL
      ====================================================== */}

      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/[0.055] bg-white/75 px-3 py-1.5 shadow-[0_10px_30px_rgba(72,57,20,.07)] backdrop-blur-xl">
        <span className="text-[7px] font-black uppercase tracking-[0.17em] text-[#96701A]">
          Capital grows with performance
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function ProfitCalculator() {
  const [accountSize, setAccountSize] =
    useState(20000);

  const [profitRate, setProfitRate] =
    useState(20);

  const profit = useMemo(() => {
    return (
      accountSize *
      (profitRate / 100)
    );
  }, [accountSize, profitRate]);

  const sliderPosition =
    ((profitRate - 1) / 99) * 100;

  return (
    <section
      id="profit-calculator"
      className="relative overflow-hidden bg-[#FBFAF7] py-24 text-black sm:py-28 lg:py-36"
    >
      {/* =====================================================
          LIGHT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[7%] h-[680px] w-[1050px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[170px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.022) 1px, transparent 1px)",
          backgroundSize: "74px 74px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 82%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-[800px] text-center">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.055] bg-[#F0EFEA] px-3.5 py-2 shadow-[inset_0_1px_0_white]">
            <span className="text-[#9D7518]">
              <GrowthIcon />
            </span>

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/45">
              Calculate Your Profits
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-7 text-[3.4rem] font-black leading-[0.92] tracking-[-0.065em] text-[#060606] sm:text-[4.8rem] lg:text-[5.6rem]">
            How much can
            <span className="block bg-[linear-gradient(100deg,#111_0%,#4D4D4D_35%,#BD942D_73%,#735009_100%)] bg-clip-text text-transparent">
              you make?
            </span>
          </h2>
        </div>

        {/* =====================================================
            CALCULATOR CARD
        ====================================================== */}

        <div className="relative mt-14 sm:mt-16">
          <div className="overflow-hidden rounded-[34px] border border-black/[0.065] bg-white shadow-[0_35px_95px_rgba(58,48,22,.075)]">
            {/* TOP LIGHT */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#B88B24]/35 to-transparent" />

            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="grid lg:grid-cols-[1.02fr_.98fr]">
              {/* =============================================
                  LEFT FORM
              ============================================== */}

              <div className="border-b border-black/[0.055] p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-9">
                {/* GUARANTEE */}
                <div className="flex items-center gap-2 text-[10px] font-semibold text-black/48">
                  <span className="text-[#9C7418]">
                    <LockIcon />
                  </span>

                  Reward Guaranteed
                </div>

                {/* =========================================
                    ACCOUNT SIZE
                ========================================== */}

                <div className="mt-8">
                  <label
                    htmlFor="calculator-account-size"
                    className="text-[10px] font-bold text-black/55"
                  >
                    Account Size
                  </label>

                  <div className="relative mt-3">
                    <div className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#A57C1C]">
                      <CoinIcon />
                    </div>

                    <select
                      id="calculator-account-size"
                      value={accountSize}
                      onChange={(event) =>
                        setAccountSize(
                          Number(
                            event.target.value
                          )
                        )
                      }
                      className="h-[60px] w-full appearance-none rounded-xl border border-black/[0.07] bg-[#F6F5F1] pl-12 pr-12 text-sm font-bold text-[#111] outline-none transition focus:border-[#B88A24]/35 focus:bg-white focus:shadow-[0_0_0_4px_rgba(212,175,55,.06)]"
                    >
                      {accountSizes.map(
                        (size) => (
                          <option
                            key={size}
                            value={size}
                          >
                            {size.toLocaleString(
                              "en-US"
                            )}
                          </option>
                        )
                      )}
                    </select>

                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/35">
                      <ChevronDown />
                    </div>
                  </div>
                </div>

                {/* =========================================
                    PROFIT RATE
                ========================================== */}

                <div className="mt-9">
                  <div className="flex items-center justify-between gap-4">
                    <label
                      htmlFor="calculator-profit-rate"
                      className="text-[10px] font-bold text-black/55"
                    >
                      Profit Rate
                    </label>

                    <span className="text-sm font-black text-[#987018]">
                      {profitRate}%
                    </span>
                  </div>

                  <div className="relative mt-7 h-10">
                    {/* TRACK */}
                    <div className="absolute inset-x-0 top-1/2 h-[6px] -translate-y-1/2 overflow-hidden rounded-full bg-black/[0.07]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#87600F_0%,#D4AF37_60%,#F0D271_100%)]"
                        style={{
                          width: `${sliderPosition}%`,
                        }}
                      />
                    </div>

                    {/* REAL INPUT */}
                    <input
                      id="calculator-profit-rate"
                      type="range"
                      min="1"
                      max="100"
                      step="1"
                      value={profitRate}
                      onChange={(event) =>
                        setProfitRate(
                          Number(
                            event.target.value
                          )
                        )
                      }
                      className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                    />

                    {/* VISUAL HANDLE */}
                    <div
                      className="pointer-events-none absolute top-1/2 z-10 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[6px] border-[#D4AF37] bg-white shadow-[0_5px_18px_rgba(126,94,21,.18),0_0_0_5px_rgba(212,175,55,.08)]"
                      style={{
                        left: `${sliderPosition}%`,
                      }}
                    />

                    {/* VALUE ABOVE HANDLE */}
                    <div
                      className="pointer-events-none absolute top-[-26px] z-10 -translate-x-1/2"
                      style={{
                        left: `${sliderPosition}%`,
                      }}
                    >
                      <div className="rounded-lg bg-[#0A0A0A] px-2.5 py-1 text-[9px] font-black text-white shadow-md">
                        {profitRate}%
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center justify-between text-[8px] font-medium text-black/25">
                    <span>1%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* =========================================
                    RESULT
                ========================================== */}

                <div className="mt-10 rounded-[25px] border border-[#B48A24]/15 bg-[linear-gradient(135deg,#F5F3EB_0%,#F0ECE0_100%)] p-5 sm:p-6">
                  <p className="text-[8px] font-black uppercase tracking-[0.17em] text-black/30">
                    Estimated Reward
                  </p>

                  <div className="mt-3 flex flex-wrap items-end gap-2.5">
                    <span className="text-4xl font-black tracking-[-0.06em] text-[#090909] sm:text-5xl">
                      {formatMoney(profit)}
                    </span>

                    <span className="mb-1.5 text-xs font-medium text-black/37">
                      / Month
                    </span>
                  </div>

                  {/* PROFIT SPLIT BADGE */}
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#B68A22]/15 bg-white/70 px-3 py-2 shadow-sm">
                    <span className="text-[#A37A18]">
                      <VerifiedIcon />
                    </span>

                    <span className="text-[9px] font-bold text-black/58">
                      100% Profit Split
                    </span>
                  </div>
                </div>
              </div>

              {/* =============================================
                  RIGHT ART
              ============================================== */}

              <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#F5F4F0_0%,#EEECE5_100%)] px-4 py-8 sm:px-8">
                {/* BACKGROUND DETAIL */}
                <div className="pointer-events-none absolute right-[-20%] top-[-20%] h-[420px] w-[420px] rounded-full border border-[#D4AF37]/[0.07]" />

                <div className="pointer-events-none absolute bottom-[-25%] left-[-20%] h-[420px] w-[420px] rounded-full border border-black/[0.035]" />

                <CoinsArtwork />
              </div>
            </div>

            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="flex flex-col items-center justify-between gap-4 border-t border-black/[0.055] bg-[#F7F6F2] px-5 py-5 sm:flex-row sm:px-7">
              <a
                href="#challenges"
                className="group relative flex min-w-[185px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F5DA79_0%,#D4AF37_50%,#956A12_100%)] px-6 py-4 text-sm font-black text-[#080806] shadow-[0_14px_35px_rgba(149,112,21,.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(149,112,21,.23)]"
              >
                Start Earning

                <ArrowRight />

                <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/45 blur-md transition-all duration-700 group-hover:left-[125%]" />
              </a>

              <p className="text-center text-[10px] font-medium text-black/38 sm:text-right">
                You&apos;re not liable for any losses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}