"use client";

import { useMemo, useState, type ReactNode } from "react";


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


/* =========================================================
   TYPES
========================================================= */

type Market = "Forex" | "Futures" | "Crypto";

type Model =
  | "1 Step"
  | "2 Step"
  | "Instant";

type Platform =
  | "TradeLocker"
  | "Volumetrica"
  | "MatchTrader"
  | "cTrader"
  | "DXFUTURE";

type AddOn = {
  title: string;
  cost: string;
  description: string;
};

type RuleSet = {
  phase1: string;
  phase2?: string;
  dailyLoss: string;
  maxLoss: string;
  inactivity: string;
  leverage?: string;
  maxTime: string;
  flatForWeekend?: string;
  profitSplit: string;
  // Futures-specific extra fields (optional so Forex/Crypto rule sets
  // don't need to define them).
  consistencyRequirement?: string;
  exposureLimits?: string;
  nonWithdrawableBuffer?: string;
  lockUponPayout?: string;
  purchaseType?: string;
  addOns: AddOn[];
};

/* =========================================================
   DATA
========================================================= */

const markets: Market[] = [
  "Forex",
  "Futures",
  "Crypto",
];

/* ---------------------------------------------------------
   MODELS AVAILABLE PER MARKET
   - Forex: Instant, 1 Step, 2 Step
   - Futures: One Step only (rendered using the "1 Step" model key)
   - Crypto: 1 Step, 2 Step only (no Instant tier)
--------------------------------------------------------- */

const modelsByMarket: Record<
  Market,
  { name: Model; badge?: string }[]
> = {
  Forex: [
    { name: "Instant" },
    { name: "1 Step" },
    { name: "2 Step", badge: "Default" },
  ],
  Futures: [
    { name: "1 Step", badge: "Only Option" },
  ],
  Crypto: [
    { name: "1 Step" },
    { name: "2 Step", badge: "Default" },
  ],
};

const platforms: Platform[] = [
  "TradeLocker",
  "Volumetrica",
  "MatchTrader",
  "cTrader",
];

/* ---------------------------------------------------------
   PLATFORMS AVAILABLE PER MARKET
   - Forex / Crypto: the standard 4-platform lineup
   - Futures: DXFUTURE only, per the live purchase flow
--------------------------------------------------------- */

const platformsByMarket: Record<Market, Platform[]> = {
  Forex: platforms,
  Crypto: platforms,
  Futures: ["DXFUTURE"],
};

/* ---------------------------------------------------------
   ACCOUNT SIZES PER MARKET
   Forex / Crypto share the standard tier list. Futures uses its
   own tiers ($25K – $150K), matching the live purchase flow.
--------------------------------------------------------- */

const accountSizes = [
  { value: 5000, label: "5K" },
  { value: 10000, label: "10K" },
  { value: 25000, label: "25K" },
  { value: 50000, label: "50K" },
  { value: 100000, label: "100K", popular: true },
];

const futuresAccountSizes = [
  { value: 25000, label: "25K" },
  { value: 50000, label: "50K" },
  { value: 75000, label: "75K" },
  { value: 100000, label: "100K", popular: true },
  { value: 150000, label: "150K" },
];

const accountSizesByMarket: Record<
  Market,
  { value: number; label: string; popular?: boolean }[]
> = {
  Forex: accountSizes,
  Crypto: accountSizes,
  Futures: futuresAccountSizes,
};

/* ---------------------------------------------------------
   CFD/FOREX PRICING
   Source: "Plans & Workflows" sheet. The first "Example" row
   ($10,000 → $85 / $110) is a template row and is intentionally
   excluded — only the real per-size prices below it are used.
--------------------------------------------------------- */

const cfdPricing: Record<"1 Step" | "2 Step", Record<number, number>> = {
  "1 Step": {
    5000: 35,
    10000: 75,
    25000: 190,
    50000: 375,
    100000: 750,
    200000: 1099,
    400000: 3600,
  },
  "2 Step": {
    5000: 25,
    10000: 50,
    25000: 125,
    50000: 225,
    100000: 450,
    200000: 1099,
    400000: 2200,
  },
};

// Instant funding isn't in the pricing sheet, so its price is derived
// from the 2 Step price at the same size using the prior Instant/2-Step
// price ratio (1.65 / 0.92) as a placeholder until real Instant pricing
// is provided.
const INSTANT_PRICE_RATIO = 1.65 / 0.92;

/* ---------------------------------------------------------
   CRYPTO PRICING
   Confirmed live values: 1 Step $5K = $45, 2 Step $5K = $35
   (seen at checkout). Other tiers are extrapolated from those
   confirmed prices using the same 1 Step (~1.29x) and 2 Step
   (~1.4x) markup over the equivalent CFD/Forex price — replace
   with real values once the full crypto price sheet is available.
--------------------------------------------------------- */

const cryptoPricing: Record<"1 Step" | "2 Step", Record<number, number>> = {
  "1 Step": {
    5000: 45,
    10000: 96,
    25000: 244,
    50000: 482,
    100000: 964,
    200000: 1413,
    400000: 4629,
  },
  "2 Step": {
    5000: 35,
    10000: 70,
    25000: 175,
    50000: 315,
    100000: 630,
    200000: 1539,
    400000: 3080,
  },
};

/* ---------------------------------------------------------
   FUTURES PRICING
   Only the $25,000 One Step price ($150, confirmed at checkout)
   is real. The remaining tiers are estimated using the same
   scaling pattern seen across the other markets' size tiers —
   swap in real values once the full futures price sheet lands.
--------------------------------------------------------- */

const futuresPricing: Record<number, number> = {
  25000: 150,
  50000: 275,
  75000: 375,
  100000: 450,
  150000: 650,
};

function getModelBasePrice(
  market: Market,
  model: Model,
  accountValue: number
): number {
  if (market === "Futures") {
    return futuresPricing[accountValue] ?? 0;
  }

  if (market === "Crypto") {
    if (model === "1 Step" || model === "2 Step") {
      return cryptoPricing[model][accountValue] ?? 0;
    }
    // Crypto has no Instant tier in the UI — fall back defensively.
    return cfdPricing["2 Step"][accountValue] ?? 0;
  }

  // Forex
  if (model === "1 Step" || model === "2 Step") {
    return cfdPricing[model][accountValue];
  }

  const twoStepPrice = cfdPricing["2 Step"][accountValue];
  return Math.round(twoStepPrice * INSTANT_PRICE_RATIO);
}

/* ---------------------------------------------------------
   TRADING RULES — PER MARKET
   Forex rules come from "Instant FOREX Final", "One step FOREX
   Final" and "2 step Forex Final". Crypto rules come from "Crypto
   One Step Overview" and "Crypto Two Step Overview" (no Instant
   tier exists for Crypto). Futures rules come from the live "One
   Step Futures Assessment" purchase page/overview.
--------------------------------------------------------- */

const forexRules: Record<Model, RuleSet> = {
  Instant: {
    phase1: "N/A",
    dailyLoss: "3%",
    maxLoss: "6%",
    inactivity: "30 Days",
    leverage: "1:50",
    maxTime: "No max time",
    flatForWeekend: "Yes",
    profitSplit: "80% + Add on upto 100%",
    addOns: [
      {
        title: "Hold Over Weekend",
        cost: "10% Cost",
        description:
          "Disables the Flat for Weekend requirement so positions can remain open over the weekend.",
      },
      {
        title: "Profit Share Increased to 90%",
        cost: "20% Cost",
        description:
          "Increases the funded account profit share from the standard 80% to 90%.",
      },
      {
        title: "Payout Protector",
        cost: "25% Cost",
        description:
          "Protects an eligible profit share in a funded account in the event of a hard breach.",
      },
    ],
  },

  "1 Step": {
    phase1: "10%",
    dailyLoss: "3%",
    maxLoss: "6%",
    inactivity: "30 Days",
    leverage: "1:50",
    maxTime: "No max time",
    profitSplit: "Up to 90%",
    addOns: [
      {
        title: "Payout Protector",
        cost: "25% Cost",
        description:
          "Protects an eligible profit share in a funded account in the event of a hard breach.",
      },
      {
        title: "Remove Lock Upon Payout",
        cost: "25% Cost",
        description:
          "Disables the post-payout maximum drawdown lock at the account starting balance.",
      },
    ],
  },

  "2 Step": {
    phase1: "8%",
    phase2: "5%",
    dailyLoss: "5%",
    maxLoss: "10%",
    inactivity: "30 Days",
    leverage: "1:50",
    maxTime: "No max time",
    profitSplit: "Up to 90%",
    addOns: [
      {
        title: "Payout Protector",
        cost: "25% Cost",
        description:
          "Protects an eligible profit share in a funded account in the event of a hard breach.",
      },
      {
        title: "Remove Lock Upon Payout",
        cost: "25% Cost",
        description:
          "Disables the post-payout maximum drawdown lock at the account starting balance.",
      },
    ],
  },
};

const cryptoRules: Record<Model, RuleSet> = {
  // Crypto has no Instant sheet/tier — kept only so the Record<Model, RuleSet>
  // type is satisfied. Instant is never selectable when market === "Crypto".
  Instant: forexRules.Instant,

  "1 Step": {
    phase1: "9%",
    dailyLoss: "±3%",
    maxLoss: "6%",
    inactivity: "30 Days",
    leverage: "5:1 BTC/ETH, 2:1 Others",
    maxTime: "No max time",
    profitSplit: "90%",
    addOns: [
      {
        title: "Payout Protector",
        cost: "25% Cost",
        description:
          "Protects a trader's eligible profit share in a funded account in the event of a hard breach.",
      },
    ],
  },

  "2 Step": {
    phase1: "6%",
    phase2: "9%",
    dailyLoss: "±3%",
    maxLoss: "9%",
    inactivity: "30 Days",
    leverage: "5:1 BTC/ETH, 2:1 Others",
    maxTime: "No max time",
    profitSplit: "90%",
    addOns: [
      {
        title: "Payout Protector",
        cost: "25% Cost",
        description:
          "Protects a trader's eligible profit share in a funded account in the event of a hard breach.",
      },
    ],
  },
};

// Futures only has a "One Step" assessment. Instant / 2 Step keys are
// filled with the One Step rule set purely to satisfy the
// Record<Model, RuleSet> type — they're never selectable in the UI
// when market === "Futures".
const futuresOneStepRules: RuleSet = {
  phase1: "6%",
  dailyLoss: "None",
  maxLoss: "6% (Intraday Equity HWM)",
  inactivity: "30 Days",
  maxTime: "No max time",
  profitSplit: "80% (90% with add-on)",
  consistencyRequirement: "33.33% Assessment / 33.33% Funded",
  exposureLimits: "1 Contract / 10 Micros",
  nonWithdrawableBuffer: "6% (Funded only)",
  lockUponPayout: "No",
  purchaseType: "Monthly Subscription",
  addOns: [
    {
      title: "Profit Share Boost to 90%",
      cost: "15% Cost",
      description:
        "Increases the funded account profit share from the standard 80% to 90%.",
    },
    {
      title: "Payout Protector",
      cost: "25% Cost",
      description:
        "Protects an eligible profit share in a funded account in the event of a hard breach.",
    },
  ],
};

const futuresRules: Record<Model, RuleSet> = {
  Instant: futuresOneStepRules,
  "1 Step": futuresOneStepRules,
  "2 Step": futuresOneStepRules,
};

const modelRulesByMarket: Record<Market, Record<Model, RuleSet>> = {
  Forex: forexRules,
  Futures: futuresRules,
  Crypto: cryptoRules,
};

/* =========================================================
   GENERAL ICONS
========================================================= */

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
        strokeWidth="1.3"
      />

      <path
        d="m6.8 10.1 2 2 4.4-4.5"
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
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M6.5 8V6.2A3.5 3.5 0 0 1 10 2.7a3.5 3.5 0 0 1 3.5 3.5V8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <circle
        cx="10"
        cy="12.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="6"
        width="8"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M11.5 6V4.6A1.6 1.6 0 0 0 9.9 3H4.6A1.6 1.6 0 0 0 3 4.6v5.3a1.6 1.6 0 0 0 1.6 1.6H6"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3.5 9h10M10 5.5 13.5 9 10 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <circle
        cx="9"
        cy="11"
        r="6"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <circle
        cx="9"
        cy="11"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="m12.5 7.5 4-4M13.5 3.5h3v3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LossIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M3 5.5 7 9l3-2.5 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12.5 12.5H16V9"
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
    >
      <path
        d="M10 2.5 16 5v4.5c0 3.7-2.2 6.2-6 7.8-3.8-1.6-6-4.1-6-7.8V5l6-2.5Z"
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

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M6 4h8v3.5c0 3-1.5 5-4 5s-4-2-4-5V4Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M6 6H3.7c0 2.8 1.1 4 3.3 4M14 6h2.3c0 2.8-1.1 4-3.3 4M10 12.5V15M7.5 17h5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LeverageIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M4 14.5 8 10l3 2.5L16 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M13 6h3v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <rect
        x="3"
        y="5"
        width="14"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M6.5 3v4M13.5 3v4M3 9h14"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SplitIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M4 4v2c0 2.5 1.5 4 4 4h8M4 16v-2c0-2.5 1.5-4 4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="m13 7 3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   MARKET ICONS
========================================================= */

function MarketIcon({
  market,
}: {
  market: Market;
}) {
  if (market === "Forex") {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
      >
        <path
          d="M3 6h12M12 3l3 3-3 3M17 14H5M8 11l-3 3 3 3"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (market === "Futures") {
    return <LeverageIcon />;
  }

  return (
    <span className="text-[14px] font-black">
      ₿
    </span>
  );
}

/* =========================================================
   ORIGINAL PLATFORM SVG MARKS
========================================================= */

function TradeLockerMark() {
  return (
    <svg
      viewBox="0 0 42 32"
      className="h-7 w-9"
      fill="none"
    >
      <path
        d="M8 8h18v5H13v11H8V8Z"
        fill="currentColor"
      />

      <path
        d="M18 14h16v10H18v-4h11v-2H18v-4Z"
        fill="currentColor"
        opacity=".55"
      />
    </svg>
  );
}

function VolumetricaMark() {
  return (
    <svg
      viewBox="0 0 42 32"
      className="h-7 w-9"
      fill="none"
    >
      <path
        d="M8 24V12M14 24V6M20 24V15M26 24V9M32 24V4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MatchTraderMark() {
  return (
    <svg
      viewBox="0 0 42 32"
      className="h-7 w-9"
      fill="none"
    >
      <circle
        cx="21"
        cy="16"
        r="4"
        fill="currentColor"
      />

      <circle
        cx="21"
        cy="5"
        r="2.5"
        fill="currentColor"
        opacity=".5"
      />

      <circle
        cx="32"
        cy="16"
        r="2.5"
        fill="currentColor"
        opacity=".5"
      />

      <circle
        cx="21"
        cy="27"
        r="2.5"
        fill="currentColor"
        opacity=".5"
      />

      <circle
        cx="10"
        cy="16"
        r="2.5"
        fill="currentColor"
        opacity=".5"
      />

      <path
        d="M21 7.5v4M29.5 16h-4M21 20.5v4M12.5 16h4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CTraderMark() {
  return (
    <svg
      viewBox="0 0 42 32"
      className="h-7 w-9"
      fill="none"
    >
      <path
        d="M31 8a11 11 0 1 0 0 16"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M27 5h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DXFutureMark() {
  return (
    <svg
      viewBox="0 0 42 32"
      className="h-7 w-9"
      fill="none"
    >
      <path
        d="M6 6h9l11 20H16L6 6Z"
        fill="currentColor"
      />

      <path
        d="M23 6h9l4 10-4 10h-9l4-10-4-10Z"
        fill="currentColor"
        opacity=".55"
      />
    </svg>
  );
}

function PlatformMark({
  platform,
}: {
  platform: Platform;
}) {
  switch (platform) {
    case "TradeLocker":
      return <TradeLockerMark />;

    case "Volumetrica":
      return <VolumetricaMark />;

    case "MatchTrader":
      return <MatchTraderMark />;

    case "cTrader":
      return <CTraderMark />;

    case "DXFUTURE":
      return <DXFutureMark />;
  }
}

/* =========================================================
   PAYMENT SVGs
========================================================= */

function VisaMark() {
  return (
    <span className="text-[14px] font-black italic tracking-[-0.06em]">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <svg
      viewBox="0 0 44 28"
      className="h-6 w-10"
    >
      <circle
        cx="17"
        cy="14"
        r="9"
        fill="currentColor"
        opacity=".45"
      />

      <circle
        cx="27"
        cy="14"
        r="9"
        fill="currentColor"
        opacity=".75"
      />
    </svg>
  );
}

function PaypalMark() {
  return (
    <span className="text-[13px] font-black italic">
      PayPal
    </span>
  );
}

function BitcoinMark() {
  return (
    <span className="text-lg font-black">
      ₿
    </span>
  );
}

function AmexMark() {
  return (
    <span className="text-[11px] font-black">
      AMEX
    </span>
  );
}

function SkrillMark() {
  return (
    <span className="text-[12px] font-black">
      Skrill
    </span>
  );
}

/* =========================================================
   REUSABLE BUTTON
========================================================= */

function OptionButton({
  selected,
  onClick,
  children,
  badge,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  badge?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex min-h-[62px] items-center justify-center rounded-xl border px-3.5 py-3.5 text-[15px] font-bold transition-all duration-300 sm:min-h-[66px] sm:text-base ${selected
          ? "border-[#D4AF37]/40 bg-[#D4AF37]/[0.09] text-[#EDD06B] shadow-[0_8px_30px_rgba(212,175,55,.07)]"
          : "border-white/[0.07] bg-white/[0.02] text-white hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-white"
        }`}
    >
      {children}

      {badge && (
        <span
          className={`absolute -right-1.5 -top-2 rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.08em] ${selected
              ? "bg-[#D4AF37] text-black"
              : "border border-white/[0.08] bg-[#161616] text-white"
            }`}
        >
          {badge}
        </span>
      )}
    </button>
  );
}

/* =========================================================
   RULE ROW
========================================================= */

function RuleRow({
  icon,
  label,
  value,
  accent = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex min-h-[66px] items-center justify-between gap-4 border-b border-white/[0.055] px-4 last:border-0 sm:min-h-[70px] sm:px-5">

      <div className="flex items-center gap-3">

        <div
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border sm:h-10 sm:w-10 ${accent
              ? "border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] text-[#E0BD54]"
              : "border-white/[0.06] bg-white/[0.02] text-white"
            }`}
        >
          {icon}
        </div>

        <span className="text-[13px] font-medium text-white sm:text-sm">
          {label}
        </span>

      </div>

      <span
        className={`text-right text-[13px] font-bold sm:text-sm ${accent
            ? "text-[#E7C75F]"
            : "text-white"
          }`}
      >
        {value}
      </span>

    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function Challenges() {
  const [market, setMarket] =
    useState<Market>("Forex");

  const [model, setModel] =
    useState<Model>("2 Step");

  const [platform, setPlatform] =
    useState<Platform>("cTrader");

  const [accountSize, setAccountSize] =
    useState(100000);

  const [copied, setCopied] =
    useState<string | null>(null);

  const availableModels = modelsByMarket[market];
  const availableSizes = accountSizesByMarket[market];
  const availablePlatforms = platformsByMarket[market];

  // When switching markets, snap model / account size / platform back to
  // a valid option for that market (e.g. Futures only has "1 Step" and
  // its own size tiers + a single platform).
  function handleMarketChange(next: Market) {
    setMarket(next);

    const nextModels = modelsByMarket[next];
    if (!nextModels.some((item) => item.name === model)) {
      setModel(nextModels[0].name);
    }

    const nextSizes = accountSizesByMarket[next];
    if (!nextSizes.some((item) => item.value === accountSize)) {
      setAccountSize(nextSizes[0].value);
    }

    const nextPlatforms = platformsByMarket[next];
    if (!nextPlatforms.includes(platform)) {
      setPlatform(nextPlatforms[0]);
    }
  }

  const account = useMemo(
    () =>
      availableSizes.find(
        (item) =>
          item.value === accountSize
      ) ?? availableSizes[0],
    [accountSize, availableSizes]
  );

  const rules = modelRulesByMarket[market][model];

  const pricing = useMemo(() => {
    const original = getModelBasePrice(
      market,
      model,
      account.value
    );

    const sale = Math.max(
      1,
      Math.round(original * 0.6)
    );

    return {
      original,
      sale,
      saving: original - sale,
    };
  }, [
    account.value,
    market,
    model,
  ]);

  async function copyCode(
    code: string
  ) {
    try {
      await navigator.clipboard.writeText(
        code
      );

      setCopied(code);

      window.setTimeout(() => {
        setCopied(null);
      }, 1500);
    } catch {
      setCopied(null);
    }
  }

  const features = [
    "News Trading",
    "Weekend Holding",
    "Unlimited Trading Period",
    "Challenge & Funded Resets",
  ];

  return (
    <section
      id="challenges"
      className="relative overflow-hidden bg-[#030303] py-16 sm:py-20 lg:py-24 xl:py-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[900px] w-[1100px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[180px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.075]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 88%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            TITLE
        ====================================================== */}

        <div className="mb-12 text-center">

          <h2 className="text-[2.65rem] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-[3.5rem] lg:text-[4.35rem] xl:text-[4.8rem]">
            Choose Your{" "}
            <span className="bg-[linear-gradient(100deg,#fff,#FFFFFF_32%,#F0D16A_70%,#9C7418)] bg-clip-text text-transparent">
              Account
            </span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-2 text-[14px] font-medium text-white/80 sm:text-[15px]">

            <span className="text-[#D4AF37]">
              <LockIcon />
            </span>

            Transparent BlackProp
            challenge configuration

          </div>

        </div>

        {/* =====================================================
            OUTER FRAME
        ====================================================== */}

        <div className="overflow-hidden rounded-[30px] sm:rounded-[34px] border border-white/[0.08] bg-[#080809] shadow-[0_50px_140px_rgba(0,0,0,.55)]">

          {/* TOP GOLD LIGHT */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#E4C459]/45 to-transparent" />

          {/* =================================================
              OFFER BAR
          ================================================= */}

          <div className="relative overflow-hidden border-b border-white/[0.06] bg-[#0D0C09]">

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(212,175,55,.055),transparent)]" />

            <div className="relative grid lg:grid-cols-[auto_1fr_1fr]">

              <div className="flex items-center justify-center border-b border-white/[0.06] px-5 py-4 lg:border-b-0 lg:border-r">
                <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.08] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.15em] text-[#E8C866]">
                  Limited Time
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 border-b border-white/[0.06] px-5 py-4 lg:border-b-0 lg:border-r">

                <span className="text-[14px] font-bold text-white sm:text-[15px]">
                  40% OFF YOUR CHALLENGE
                </span>

                <button
                  type="button"
                  onClick={() =>
                    copyCode("BLACK40")
                  }
                  className="flex items-center gap-2 rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] px-3.5 py-2.5 text-[12px] font-black tracking-[0.09em] text-[#E4C25B] transition hover:bg-[#D4AF37]/[0.12]"
                >
                  {copied === "BLACK40"
                    ? "COPIED"
                    : "BLACK40"}

                  <CopyIcon />
                </button>

              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 px-5 py-4">

                <span className="text-[14px] text-white/85">
                  New trader bonus
                </span>

                <button
                  type="button"
                  onClick={() =>
                    copyCode("FIRSTBP")
                  }
                  className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.035] px-3.5 py-2.5 text-[12px] font-black tracking-[0.09em] text-white transition hover:bg-white/[0.06]"
                >
                  {copied === "FIRSTBP"
                    ? "COPIED"
                    : "FIRSTBP"}

                  <CopyIcon />
                </button>

              </div>

            </div>

          </div>

          {/* =================================================
              MARKET TABS
          ================================================= */}

          <div className="border-b border-white/[0.06] p-4 sm:p-5 lg:p-6">

            <div className="grid grid-cols-3 gap-1.5 rounded-2xl border border-white/[0.06] bg-black/35 p-1.5">

              {markets.map((item) => {
                const selected =
                  market === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      handleMarketChange(item)
                    }
                    className={`flex items-center justify-center gap-2.5 rounded-xl px-3 py-3.5 text-[15px] font-bold sm:text-base transition-all ${selected
                        ? "bg-[linear-gradient(135deg,#F1D46F,#C49425)] text-black shadow-[0_9px_30px_rgba(212,175,55,.12)]"
                        : "text-white hover:bg-white/[0.04] hover:text-white"
                      }`}
                  >
                    <MarketIcon
                      market={item}
                    />

                    {item}
                  </button>
                );
              })}

            </div>

          </div>

          {/* =================================================
              TWO COLUMN PLAYGROUND
          ================================================= */}

          <div className="grid lg:grid-cols-[1.04fr_.96fr]">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="flex flex-col border-b border-white/[0.06] p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">

              {/* CHALLENGE TYPE */}
              <div className="rounded-2xl border border-[#D4AF37]/[0.12] bg-[linear-gradient(145deg,rgba(212,175,55,.045),rgba(255,255,255,.012))] p-4 sm:p-5">

                <div className="mb-4 flex flex-wrap items-end justify-between gap-2">

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E7C75F]">
                      Challenge Type
                    </p>

                    <p className="mt-1.5 text-[12px] leading-5 text-white/45">
                      {availableModels
                        .map((item) => item.name)
                        .join(" · ")}
                    </p>
                  </div>

                  <span className="rounded-full border border-white/[0.07] bg-black/25 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/45">
                    {market}
                  </span>

                </div>

                <div
                  className={`grid gap-2.5 ${availableModels.length === 1
                      ? "mx-auto max-w-[220px] grid-cols-1"
                      : availableModels.length === 2
                        ? "grid-cols-2"
                        : "grid-cols-3"
                    }`}
                >

                  {availableModels.map((item) => (
                    <OptionButton
                      key={item.name}
                      selected={model === item.name}
                      onClick={() =>
                        setModel(item.name)
                      }
                      badge={item.badge}
                    >
                      {item.name}
                    </OptionButton>
                  ))}

                </div>

              </div>
              {/* ACCOUNT SIZE */}
              <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4 sm:p-5">

                <div className="mb-3 flex items-center justify-between">

                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/90">
                    Account Size
                  </p>

                  <span className="text-[11px] font-medium text-white/55 sm:text-[12px]">
                    Simulated capital
                  </span>

                </div>

                <div className="grid grid-cols-2 gap-2.5 min-[420px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">

                  {availableSizes.map(
                    (item) => (
                      <OptionButton
                        key={item.value}
                        selected={
                          accountSize ===
                          item.value
                        }
                        onClick={() =>
                          setAccountSize(
                            item.value
                          )
                        }
                        badge={
                          item.popular
                            ? "Popular"
                            : undefined
                        }
                      >
                        {item.label}
                      </OptionButton>
                    )
                  )}

                </div>

              </div>

              {/* PLATFORMS */}
              <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4 sm:p-5">

                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                  Platforms
                </p>

                <div
                  className={`grid gap-2 ${availablePlatforms.length === 1
                      ? "mx-auto max-w-[160px] grid-cols-1"
                      : "grid-cols-2 sm:grid-cols-3"
                    }`}
                >

                  {availablePlatforms.map(
                    (item) => {
                      const selected =
                        platform === item;

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() =>
                            setPlatform(item)
                          }
                          className={`group relative min-h-[92px] sm:min-h-[98px] rounded-xl border px-3 py-3 transition-all ${selected
                              ? "border-[#D4AF37]/35 bg-[#D4AF37]/[0.07] text-[#E7C75F]"
                              : "border-white/[0.07] bg-black/20 text-white hover:border-white/[0.13] hover:text-white"
                            }`}
                        >
                          <div className="flex h-full flex-col items-center justify-center">

                            <PlatformMark
                              platform={item}
                            />

                            <span className="mt-2.5 text-[12px] font-bold sm:text-[13px]">
                              {item}
                            </span>

                          </div>

                          {item ===
                            "cTrader" && (
                              <span className="absolute -right-1.5 -top-2 rounded-full bg-[#D4AF37] px-2 py-0.5 text-[8px] font-black uppercase text-black">
                                Popular
                              </span>
                            )}

                        </button>
                      );
                    }
                  )}

                </div>

              </div>



              {/* CONFIG SUMMARY */}
              <div className="mt-4 rounded-2xl border border-[#D4AF37]/[0.12] bg-[#D4AF37]/[0.04] p-4 sm:p-5">

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                      Current configuration
                    </p>

                    <p className="mt-2 text-[15px] font-semibold text-white">
                      {model} ·{" "}
                      {market}
                    </p>
                  </div>

                  <div className="text-right">

                    <p className="text-[11px] uppercase tracking-[0.11em] text-white">
                      Platform
                    </p>

                    <p className="mt-1.5 text-[13px] font-bold text-[#D4AF37]">
                      {platform}
                    </p>

                  </div>

                </div>

              </div>

              {/* ADD-ONS AVAILABLE AT PURCHASE */}
              <div className="mt-4 flex-1 rounded-2xl border border-white/[0.06] bg-[linear-gradient(145deg,rgba(255,255,255,.025),rgba(212,175,55,.025))] p-4 sm:p-5">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E7C75F]">
                      Add-ons available at purchase
                    </p>

                    <p className="mt-2 max-w-[460px] text-[13px] leading-6 text-white/55 sm:text-sm">
                      Available options update with the selected challenge type.
                    </p>
                  </div>

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.055]">
                    <BPMark
                      width={18}
                      height={23}
                      color="#D4AF37"
                    />
                  </div>

                </div>

                <div className="mt-5 grid gap-2.5">

                  {rules.addOns.map((addOn) => (
                    <div
                      key={addOn.title}
                      className="rounded-xl border border-white/[0.055] bg-black/20 px-3.5 py-3.5"
                    >
                      <div className="flex items-start gap-3">

                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#D4AF37]/[0.08] text-[#D4AF37]">
                          <CheckIcon />
                        </span>

                        <div className="min-w-0">

                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[12px] font-bold leading-5 text-white/85 sm:text-[13px]">
                              {addOn.title}
                            </span>

                            <span className="rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.06] px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.08em] text-[#E7C75F]">
                              {addOn.cost}
                            </span>
                          </div>

                          <p className="mt-1.5 text-[10px] leading-[18px] text-white/38 sm:text-[11px] sm:leading-5">
                            {addOn.description}
                          </p>

                        </div>

                      </div>
                    </div>
                  ))}

                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.055] pt-4">

                  <span className="text-[10px] font-medium text-white/40">
                    Selected:{" "}
                    <strong className="text-white/75">
                      {model}
                    </strong>
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#D4AF37]/70" />

                  <span className="text-[10px] font-medium text-white/40">
                    Market:{" "}
                    <strong className="text-white/75">
                      {market}
                    </strong>
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#D4AF37]/70" />

                  <span className="text-[10px] font-medium text-white/40">
                    Platform:{" "}
                    <strong className="text-white/75">
                      {platform}
                    </strong>
                  </span>

                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div className="relative p-4 sm:p-6 lg:p-7">

              <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#D4AF37]/[0.025] blur-[90px]" />

              {/* SUMMARY HEADER */}
              <div className="relative mb-4 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4">

                <div>

                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F0D16A]">
                    BlackProp Account
                  </p>

                  <div className="mt-2 flex items-end gap-2">

                    <span className="text-[2.2rem] font-black sm:text-[2.45rem] tracking-[-0.055em] text-white">
                      $
                      {(account.value / 1000).toFixed(0)}
                      K
                    </span>

                    <span className="mb-1 text-[12px] font-medium text-white/70">
                      {model}
                    </span>

                  </div>

                </div>

                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07]">

                  <BPMark
                    width={20}
                    height={26}
                    color="#D4AF37"
                    className="drop-shadow-[0_0_10px_rgba(212,175,55,.15)]"
                  />

                </div>

              </div>

              {/* RULE TABLE */}
              <div className="overflow-hidden rounded-2xl border border-white/[0.065] bg-black/20">

                <RuleRow
                  icon={<TargetIcon />}
                  label={
                    rules.phase2
                      ? "Profit Target Phase 1"
                      : "Profit Target"
                  }
                  value={rules.phase1}
                  accent
                />

                {rules.phase2 && (
                  <RuleRow
                    icon={<TargetIcon />}
                    label="Profit Target Phase 2"
                    value={rules.phase2}
                  />
                )}

                <RuleRow
                  icon={<LossIcon />}
                  label="Daily Loss Limit"
                  value={rules.dailyLoss}
                />

                <RuleRow
                  icon={<ShieldIcon />}
                  label="Max Drawdown"
                  value={rules.maxLoss}
                />

                {rules.consistencyRequirement && (
                  <RuleRow
                    icon={<TrophyIcon />}
                    label="Consistency Requirement"
                    value={rules.consistencyRequirement}
                  />
                )}

                {rules.exposureLimits && (
                  <RuleRow
                    icon={<LeverageIcon />}
                    label="Exposure Limits"
                    value={rules.exposureLimits}
                  />
                )}

                {rules.nonWithdrawableBuffer && (
                  <RuleRow
                    icon={<ShieldIcon />}
                    label="Non-Withdrawable Buffer"
                    value={rules.nonWithdrawableBuffer}
                  />
                )}

                <RuleRow
                  icon={<CalendarIcon />}
                  label="Inactivity Period"
                  value={rules.inactivity}
                />

                {rules.leverage && (
                  <RuleRow
                    icon={<LeverageIcon />}
                    label="Leverage"
                    value={rules.leverage}
                  />
                )}

                {rules.flatForWeekend && (
                  <RuleRow
                    icon={<CalendarIcon />}
                    label="Flat for Weekend"
                    value={rules.flatForWeekend}
                  />
                )}

                <RuleRow
                  icon={<CalendarIcon />}
                  label="Max Time"
                  value={rules.maxTime}
                />

                {rules.lockUponPayout && (
                  <RuleRow
                    icon={<LockIcon />}
                    label="Lock Upon Payout"
                    value={rules.lockUponPayout}
                  />
                )}

                <RuleRow
                  icon={<SplitIcon />}
                  label="Profit Split"
                  value={rules.profitSplit}
                  accent
                />

              </div>

              {/* PAYMENT / PRICE */}
              <div className="mt-4 overflow-hidden rounded-[24px] border border-[#D4AF37]/15 bg-[linear-gradient(145deg,rgba(212,175,55,.065),rgba(255,255,255,.015))]">

                <div className="p-5">

                  <div className="flex items-end justify-between gap-4">

                    <div>

                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                        {rules.purchaseType ?? "Challenge fee"}
                      </p>

                      <div className="mt-2 flex items-end gap-3">

                        <span className="text-[2.75rem] font-black sm:text-5xl tracking-[-0.055em] text-white">
                          ${pricing.sale}
                        </span>

                        <span className="mb-1 text-sm text-white line-through">
                          $
                          {
                            pricing.original
                          }
                        </span>

                      </div>

                      <p className="mt-2.5 text-[12px] font-medium text-emerald-400/85">
                        Save $
                        {
                          pricing.saving
                        }{" "}
                        with BLACK40
                      </p>

                      {rules.purchaseType && (
                        <p className="mt-1.5 text-[11px] font-medium text-white/45">
                          Renews monthly at ${pricing.original}
                        </p>
                      )}

                    </div>

                    <div className="text-right">

                      <p className="text-[11px] uppercase tracking-[0.12em] text-white/70">
                        Account
                      </p>

                      <p className="mt-1.5 text-xl font-black text-[#E4C25B]">
                        {
                          account.label
                        }
                      </p>

                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      alert(
                        `BlackProp checkout selected:\n${market} · ${model} · ${platform} · ${account.label}\nPrice: $${pricing.sale}`
                      );
                    }}
                    className="group relative mt-5 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F4DB7C,#D4AF37_50%,#946A11)] px-5 py-4 text-[15px] font-black sm:text-base text-black shadow-[0_15px_45px_rgba(212,175,55,.15)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(212,175,55,.25)]"
                  >
                    Get Funded

                    <ArrowIcon />

                    <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/40 blur-md transition-all duration-700 group-hover:left-[125%]" />
                  </button>

                </div>

                {/* REFUND MESSAGE */}
                <div className="flex items-center justify-center gap-2 border-t border-white/[0.06] px-4 py-3.5 text-[12px] font-medium leading-5 text-white/75">

                  <span className="text-[#D4AF37]">
                    <LockIcon />
                  </span>

                  One-time challenge fee ·
                  refundable under qualifying
                  BlackProp terms

                </div>

                {/* PAYMENT OPTIONS */}
                <div className="border-t border-white/[0.06] px-4 py-4">

                  <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                    Payment options
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-2">

                    {[
                      {
                        name: "Visa",
                        mark: (
                          <VisaMark />
                        ),
                      },
                      {
                        name: "PayPal",
                        mark: (
                          <PaypalMark />
                        ),
                      },
                      {
                        name: "Bitcoin",
                        mark: (
                          <BitcoinMark />
                        ),
                      },
                      {
                        name: "Mastercard",
                        mark: (
                          <MastercardMark />
                        ),
                      },
                      {
                        name: "American Express",
                        mark: (
                          <AmexMark />
                        ),
                      },
                      {
                        name: "Skrill",
                        mark: (
                          <SkrillMark />
                        ),
                      },
                    ].map((payment) => (
                      <div
                        key={
                          payment.name
                        }
                        title={
                          payment.name
                        }
                        className="grid h-10 min-w-[62px] place-items-center rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 text-white transition hover:border-white/[0.13] hover:text-white"
                      >
                        {
                          payment.mark
                        }
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              FOOTER CONDITIONS
          ================================================= */}

          <div className="grid border-t border-white/[0.06] sm:grid-cols-2 xl:grid-cols-4">

            {features.map(
              (feature, index) => (
                <div
                  key={feature}
                  className={`flex items-center gap-3 px-5 py-5 ${index !== 3
                      ? "border-b border-white/[0.055] sm:border-r lg:border-b-0"
                      : ""
                    }`}
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#D4AF37]/[0.07] text-[#D4AF37]">

                    <CheckIcon />

                  </div>

                  <span className="text-[13px] font-semibold text-white/85 sm:text-sm">
                    {feature}
                  </span>

                </div>
              )
            )}

          </div>

        </div>

        {/* DISCLAIMER */}
        <p className="mx-auto mt-6 max-w-3xl px-2 text-center text-[11px] leading-5 text-white/55 sm:text-[12px] sm:leading-6">
          Pricing, platform availability,
          account rules, promotional offers
          and payment methods shown in this
          frontend are demonstration values
          until BlackProp&apos;s final
          commercial terms and checkout
          integrations are connected.
        </p>

      </div>
    </section>
  );
}