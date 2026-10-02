"use client";

import { useMemo, useState, type ReactElement } from "react";


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
  | "DXFUTURE"
  | "DXTRADE"
  | "GooeyPro";

type AddOn = {
  title: string;
  cost: string;
  description: string;
};

type RuleSet = {
  profitTarget: string;
  profitTargetPhase2?: string;
  maxDailyLoss: string;
  maxLoss: string;
  maxDrawdown?: string;
  inactivityPeriod?: string;
  tradingPeriod?: string;
  minTradingDays?: string;
  minProfitableDays?: string;
  consistency?: string;
  profitBuffer?: string;
  weekendHold?: string;
  weekendTrading?: string;
  buffer?: string;
  contractLimits?: string;
  rewards: string;
  billing?: string;
  payouts?: string;
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

// Display labels used in the platform selector.
// Keep the internal GooeyPro key for pricing/plan IDs, but show the new PropX brand.
const platformLabels: Partial<Record<Platform, string>> = {
  MatchTrader: "Match Trader",
  GooeyPro: "PropX",
};

/* ---------------------------------------------------------
   PLATFORMS AVAILABLE PER MARKET
--------------------------------------------------------- */

const platformsByMarket: Record<Market, Platform[]> = {
  Forex: ["DXTRADE", "MatchTrader", "cTrader", "GooeyPro"],
  Crypto: ["DXTRADE", "GooeyPro"],
  Futures: ["DXFUTURE"],
};

/* ---------------------------------------------------------
   DIRECT CHALLENGE LINKS — one link per
   market / model / platform / account size.
   These IDs come from the supplied challenge-link sheet.
--------------------------------------------------------- */

const challengePlanIds: Partial<
  Record<Market, Partial<Record<Model, Partial<Record<Platform, Record<number, number>>>>>>
> = {
  Forex: {
    "1 Step": {
      DXTRADE: {
        5000: 109,
        10000: 110,
        25000: 111,
        50000: 112,
        100000: 113,
        200000: 114,
      },
      MatchTrader: {
        5000: 116,
        10000: 117,
        25000: 118,
        50000: 119,
        100000: 120,
        200000: 121,
      },
      cTrader: {
        5000: 123,
        10000: 124,
        25000: 125,
        50000: 126,
        100000: 127,
        200000: 128,
      },
      GooeyPro: {
        5000: 130,
        10000: 131,
        25000: 132,
        50000: 133,
        100000: 134,
        200000: 135,
      },
    },

    "2 Step": {
      DXTRADE: {
        5000: 193,
        10000: 194,
        25000: 195,
        50000: 196,
        100000: 197,
        200000: 198,
      },
      MatchTrader: {
        5000: 200,
        10000: 201,
        25000: 202,
        50000: 203,
        100000: 204,
        200000: 205,
      },
      cTrader: {
        5000: 207,
        10000: 208,
        25000: 209,
        50000: 210,
        100000: 211,
        200000: 212,
      },
      GooeyPro: {
        5000: 214,
        10000: 215,
        25000: 216,
        50000: 217,
        100000: 218,
        200000: 219,
      },
    },

    Instant: {
      DXTRADE: {
        5000: 295,
        10000: 296,
        25000: 297,
        50000: 298,
        100000: 299,
        200000: 315,
      },
      MatchTrader: {
        5000: 300,
        10000: 301,
        25000: 302,
        50000: 303,
        100000: 304,
        200000: 316,
      },
      cTrader: {
        5000: 305,
        10000: 306,
        25000: 307,
        50000: 308,
        100000: 309,
        200000: 317,
      },
      GooeyPro: {
        5000: 310,
        10000: 311,
        25000: 312,
        50000: 313,
        100000: 314,
        200000: 318,
      },
    },
  },

  Crypto: {
    "1 Step": {
      DXTRADE: {
        5000: 238,
        10000: 239,
        25000: 240,
        50000: 241,
        100000: 242,
        200000: 243,
      },
      GooeyPro: {
        5000: 244,
        10000: 245,
        25000: 246,
        50000: 247,
        100000: 248,
        200000: 249,
      },
    },

    "2 Step": {
      DXTRADE: {
        5000: 274,
        10000: 275,
        25000: 276,
        50000: 277,
        100000: 278,
        200000: 279,
      },
      GooeyPro: {
        5000: 280,
        10000: 281,
        25000: 282,
        50000: 283,
        100000: 284,
        200000: 285,
      },
    },
  },

  Futures: {
    "1 Step": {
      DXFUTURE: {
        25000: 286,
        50000: 287,
        75000: 288,
        100000: 289,
        150000: 290,
      },
    },
  },
};

/* ---------------------------------------------------------
   ACCOUNT SIZES PER MARKET
   Matches the official Excel exactly:
   Forex/Crypto use 5K → 200K; Futures uses 25K → 150K.
--------------------------------------------------------- */

const accountSizes = [
  { value: 200000, label: "200K" },
  { value: 100000, label: "100K" },
  { value: 50000, label: "50K" },
  { value: 25000, label: "25K" },
  { value: 10000, label: "10K" },
  { value: 5000, label: "5K" },
];

const futuresAccountSizes = [
  { value: 150000, label: "150K" },
  { value: 100000, label: "100K" },
  { value: 75000, label: "75K" },
  { value: 50000, label: "50K" },
  { value: 25000, label: "25K" },
];

const accountSizesByMarket: Record<
  Market,
  { value: number; label: string; popular?: boolean }[]
> = {
  Forex: accountSizes,
  Crypto: accountSizes,
  Futures: futuresAccountSizes,
};

/* Best Value placement from the new official challenge sheet:
   Forex 1 Step / 2 Step -> $50K
   Forex Instant -> $100K
   Futures 1 Step -> $100K
   Crypto 1 Step / 2 Step -> $100K
*/
function isBestValue(market: Market, model: Model, accountValue: number) {
  if (market === "Forex") {
    if (model === "1 Step" || model === "2 Step") return accountValue === 50000;
    return accountValue === 100000;
  }

  return accountValue === 100000;
}

/* ---------------------------------------------------------
   PRICING — taken directly from the "All Challenges" sheet
   (Challenge fee / Challenge Fees rows), 22 Sep 2026.
--------------------------------------------------------- */

const cfdPricing: Record<"1 Step" | "2 Step" | "Instant", Record<number, number>> = {
  "1 Step": {
    5000: 35,
    10000: 75,
    25000: 190,
    50000: 375,
    100000: 750,
    200000: 1600,
  },
  "2 Step": {
    5000: 48,
    10000: 95,
    25000: 238,
    50000: 428,
    100000: 855,
    200000: 2088,
  },
  Instant: {
    5000: 90,
    10000: 132,
    25000: 282,
    50000: 366,
    100000: 666,
    200000: 1198,
  },
};

const cryptoPricing: Record<"1 Step" | "2 Step", Record<number, number>> = {
  "1 Step": {
    5000: 45,
    10000: 95,
    25000: 250,
    50000: 525,
    100000: 1050,
    200000: 2150,
  },
  "2 Step": {
    5000: 35,
    10000: 80,
    25000: 210,
    50000: 430,
    100000: 900,
    200000: 2000,
  },
};

const futuresPricing: Record<number, number> = {
  25000: 150,
  50000: 170,
  75000: 245,
  100000: 330,
  150000: 360,
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
    return cryptoPricing["2 Step"][accountValue] ?? 0;
  }

  // Forex
  return cfdPricing[model][accountValue] ?? 0;
}

/* ---------------------------------------------------------
   TRADING RULES — PER MARKET (from "All Challenges" sheet)
--------------------------------------------------------- */

const forexRules: Record<Model, RuleSet> = {
  "1 Step": {
    profitTarget: "PHASE 1  10%",
    maxDailyLoss: "5%",
    maxLoss: "6%",
    maxDrawdown: "6%",
    inactivityPeriod: "30 Days",
    tradingPeriod: "No max time",
    rewards: "80%",
    addOns: [
      { title: "Remove Lock on Payout", cost: "25%", description: "Remove Lock on Payout" },
      { title: "Payout Protector", cost: "25%", description: "Payout Protector" },
    ],
  },

  "2 Step": {
    profitTarget: "8% Phase 1  /  5% Phase 2",
    maxDailyLoss: "5%",
    maxLoss: "8% (Static)",
    minTradingDays: "5",
    inactivityPeriod: "30 Days",
    rewards: "80%",
    addOns: [
      { title: "100% Payout", cost: "20%", description: "100% Payout" },
      { title: "Remove Lock on Payout", cost: "25%", description: "Remove Lock on Payout" },
      { title: "Payout Protector", cost: "25%", description: "Payout Protector" },
    ],
  },

  Instant: {
    profitTarget: "N/A (already funded)",
    maxDailyLoss: "3%",
    maxLoss: "5% (Trailing)",
    minProfitableDays: "5 days @ ½% per day",
    consistency: "15%",
    profitBuffer: "3% (see FAQ)",
    weekendHold: "Available with Add-On",
    rewards: "80%",
    addOns: [
      { title: "Profit Share", cost: "20%", description: "Profit Share" },
      { title: "Hold Weekend", cost: "10%", description: "Hold Weekend" },
      { title: "Payout Protector", cost: "25%", description: "Payout Protector" },
    ],
  },
};

const cryptoRules: Record<Model, RuleSet> = {
  Instant: forexRules.Instant,

  "1 Step": {
    profitTarget: "9%",
    maxDailyLoss: "+/- 3% gain/loss range",
    maxLoss: "6%",
    weekendTrading: "Enabled",
    rewards: "90%",
    addOns: [
      { title: "Payout Protector", cost: "25%", description: "Payout Protector" },
    ],
  },

  "2 Step": {
    profitTarget: "Phase 1  6%",
    profitTargetPhase2: "Phase 2  9%",
    maxDailyLoss: "+/- 3% gain/loss range",
    maxLoss: "9%",
    weekendTrading: "Enabled",
    rewards: "90%",
    addOns: [
      { title: "Payout Protector", cost: "25%", description: "Payout Protector" },
    ],
  },
};

const futuresOneStepRules: RuleSet = {
  profitTarget: "Assessment 6%",
  maxDailyLoss: "None",
  maxLoss: "Trailing, plan specific, Intraday Equity HWM",
  consistency: "33.33% Assessment / 33.33% Funded",
  buffer: "Non-withdrawable, funded phase only",
  contractLimits: "Plan specific",
  inactivityPeriod: "30 Days",
  rewards: "80%",
  billing: "Monthly subscription, no activation fee",
  payouts: "On demand — buffer, consistency, review, active account",
  addOns: [],
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
   EXACT EXCEL PRICING — 22 SEP 2026
========================================================= */

const exactPricing: Record<
  Market,
  Record<string, Record<number, number>>
> = {
  Forex: {
    "1 Step": {
      5000: 35, 10000: 75, 25000: 190,
      50000: 375, 100000: 750, 200000: 1600,
    },
    "2 Step": {
      5000: 48, 10000: 95, 25000: 238,
      50000: 428, 100000: 855, 200000: 2088,
    },
    Instant: {
      5000: 90, 10000: 132, 25000: 282,
      50000: 366, 100000: 666, 200000: 1198,
    },
  },
  Futures: {
    "1 Step": {
      25000: 150, 50000: 170, 75000: 245,
      100000: 330, 150000: 360,
    },
  },
  Crypto: {
    "1 Step": {
      5000: 45, 10000: 95, 25000: 250,
      50000: 525, 100000: 1050, 200000: 2150,
    },
    "2 Step": {
      5000: 35, 10000: 80, 25000: 210,
      50000: 430, 100000: 900, 200000: 2000,
    },
  },
};

/* =========================================================
   EXACT EXCEL ADD-ON CALCULATIONS
========================================================= */

const exactAddOnPricing: Record<
  Market,
  Record<string, Record<number, Record<string, string>>>
> = {
  Forex: {
    "1 Step": {
      5000: { "Remove Lock on Payout": "+$8.75 (25%)", "Payout Protector": "+$8.75 (25%)" },
      10000: { "Remove Lock on Payout": "+$18.75 (25%)", "Payout Protector": "+$18.75 (25%)" },
      25000: { "Remove Lock on Payout": "+$47.50 (25%)", "Payout Protector": "+$47.50 (25%)" },
      50000: { "Remove Lock on Payout": "+$93.75 (25%)", "Payout Protector": "+$93.75 (25%)" },
      100000: { "Remove Lock on Payout": "+$187.50 (25%)", "Payout Protector": "+$187.50 (25%)" },
      200000: { "Remove Lock on Payout": "$400(25%)", "Payout Protector": "$400(25%)" },
    },
    "2 Step": {
      5000: { "100% Payout": "$9.60 (20%)", "Remove Lock on Payout": "$12.00 (25%)", "Payout Protector": "$12.00 (25%)" },
      10000: { "100% Payout": "$19.00 (20%)", "Remove Lock on Payout": "$23.75 (25%)", "Payout Protector": "$23.75 (25%)" },
      25000: { "100% Payout": "$47.60 (20%)", "Remove Lock on Payout": "$59.50 (25%)", "Payout Protector": "$59.50 (25%)" },
      50000: { "100% Payout": "$85.60 (20%)", "Remove Lock on Payout": "$107.00 (25%)", "Payout Protector": "$107.00 (25%)" },
      100000: { "100% Payout": "$171.00 (20%)", "Remove Lock on Payout": "$213.75 (25%)", "Payout Protector": "$213.75 (25%)" },
      200000: { "100% Payout": "$417.60 (20%)", "Remove Lock on Payout": "$522.00 (25%)", "Payout Protector": "$522.00 (25%)" },
    },
    Instant: {
      5000: { "Profit Share": "$18.00 (20%)", "Hold Weekend": "$9.00 (10%)", "Payout Protector": "$22.50 (25%)" },
      10000: { "Profit Share": "$26.40 (20%)", "Hold Weekend": "$13.20 (10%)", "Payout Protector": "$33.00 (25%)" },
      25000: { "Profit Share": "$56.40 (20%)", "Hold Weekend": "$28.20 (10%)", "Payout Protector": "$70.50 (25%)" },
      50000: { "Profit Share": "$73.20 (20%)", "Hold Weekend": "$36.60 (10%)", "Payout Protector": "$91.50 (25%)" },
      100000: { "Profit Share": "$133.20 (20%)", "Hold Weekend": "$66.60 (10%)", "Payout Protector": "$166.50 (25%)" },
      200000: { "Profit Share": "$239.60 (20%)", "Hold Weekend": "$119.80 (10%)", "Payout Protector": "$299.50 (25%)" },
    },
  },
  Futures: { "1 Step": {} },
  Crypto: {
    "1 Step": {
      5000: { "Payout Protector": "$11.25 (25%)" },
      10000: { "Payout Protector": "$23.75 (25%)" },
      25000: { "Payout Protector": "$62.50 (25%)" },
      50000: { "Payout Protector": "$131.25 (25%)" },
      100000: { "Payout Protector": "$262.50 (25%)" },
      200000: { "Payout Protector": "$537.50 (25%)" },
    },
    "2 Step": {
      5000: { "Payout Protector": "$8.75 (25%)" },
      10000: { "Payout Protector": "$20.00 (25%)" },
      25000: { "Payout Protector": "$52.50 (25%)" },
      50000: { "Payout Protector": "$107.50 (25%)" },
      100000: { "Payout Protector": "$225.00 (25%)" },
      200000: { "Payout Protector": "$500.00 (25%)" },
    },
  },
};
/* =========================================================
   REFERENCE-MATCH CONFIGURATOR UI
========================================================= */

function TinyBolt() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M11.2 1.8 4.8 11h4.8l-.8 7.2 6.4-9.1h-4.7l.7-7.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function RowIcon({
  type,
}: {
  type:
    | "target"
    | "daily"
    | "loss"
    | "clock"
    | "calendar"
    | "reward";
}) {
  const common = "h-[20px] w-[20px]";

  if (type === "target") {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={common} aria-hidden="true">
        <circle cx="10" cy="10" r="6.6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 1.8v3M18.2 10h-3M10 18.2v-3M1.8 10h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "daily") {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={common} aria-hidden="true">
        <path d="M10 3v12M6.8 11.8 10 15l3.2-3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "loss") {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={common} aria-hidden="true">
        <path d="M10 3v10M6.8 10.2 10 13.4l3.2-3.2M4 16.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={common} aria-hidden="true">
        <circle cx="10" cy="11" r="6.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 7.2v4l2.7 1.6M7.5 2.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={common} aria-hidden="true">
        <rect x="3" y="4.8" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.35" />
        <path d="M6.5 2.8v4M13.5 2.8v4M3 8.3h14" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    );
  }


  return (
    <svg viewBox="0 0 20 20" fill="none" className={common} aria-hidden="true">
      <rect x="3" y="6" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="10" cy="10" r="1.7" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5.5 8.3v3.4M14.5 8.3v3.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

/* =========================================================
   PAYMENT + PAYOUT OPTIONS
========================================================= */

function VisaMark() {
  return (
    <svg viewBox="0 0 64 24" className="h-7 w-[58px] sm:h-8 sm:w-[68px]" aria-label="Visa">
      <text
        x="2"
        y="18"
        fill="white"
        fontSize="20"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="-1"
      >
        VISA
      </text>
    </svg>
  );
}

function PayPalMark() {
  return (
    <svg viewBox="0 0 86 30" className="h-7 w-[70px] sm:h-8 sm:w-[80px]" aria-label="PayPal">
      <path
        d="M17 4h9.2c5.7 0 8.6 3.1 7.6 7.8-.8 3.8-3.5 6.1-7.6 6.1h-3.7l-1.3 6H15l4.2-19.9H17Z"
        fill="#3b7ddd"
      />
      <path
        d="M13 7h8.8c5.7 0 8.7 3 7.7 7.7-.8 3.8-3.5 6.1-7.6 6.1h-3.5l-1.3 6h-6.2L15.1 7H13Z"
        fill="#fff"
        opacity=".92"
      />
      <text
        x="36"
        y="20"
        fill="white"
        fontSize="13"
        fontWeight="800"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        PayPal
      </text>
    </svg>
  );
}

function MastercardMark() {
  return (
    <svg viewBox="0 0 72 44" className="h-8 w-[58px] sm:h-9 sm:w-[64px]" aria-label="Mastercard">
      <circle cx="29" cy="22" r="15" fill="#eb001b" />
      <circle cx="43" cy="22" r="15" fill="#f79e1b" fillOpacity=".95" />
      <path
        d="M36 10.7a15.2 15.2 0 0 0 0 22.6 15.2 15.2 0 0 0 0-22.6Z"
        fill="#ff5f00"
      />
    </svg>
  );
}

function AmexMark() {
  return (
    <svg viewBox="0 0 72 40" className="h-8 w-[60px] sm:h-9 sm:w-[66px]" aria-label="American Express">
      <rect x="1" y="3" width="70" height="34" rx="5" fill="#2aa8e0" />
      <text
        x="36"
        y="25"
        textAnchor="middle"
        fill="white"
        fontSize="13"
        fontWeight="900"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        AMEX
      </text>
    </svg>
  );
}

const RISE_LOGO_DATA = "data:image/png;base64,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";
const CRYPTO_LOGOS_DATA = "data:image/png;base64,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";

function UpiMark() {
  return (
    <span
      className="flex h-[34px] w-[68px] items-center justify-center rounded-[7px] bg-white px-1.5"
      aria-label="UPI"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg"
        alt="UPI"
        className="block h-auto w-[56px] object-contain"
        loading="eager"
      />
    </span>
  );
}

function PaymentCryptoMark() {
  return (
    <span
      className="flex h-[42px] w-[92px] items-center justify-center rounded-[9px] border border-white/[0.08] bg-[#151515] px-1.5"
      aria-label="Crypto payment"
    >
      <img
        src={CRYPTO_LOGOS_DATA}
        alt="USDT, Ethereum, Bitcoin and BNB"
        className="block h-auto w-[82px] max-w-full object-contain"
      />
    </span>
  );
}

function CryptoLogosMark({ payout = false }: { payout?: boolean }) {
  return (
    <div
      className="flex min-w-0 items-center gap-3"
      aria-label={payout ? "Crypto payout" : "Crypto payment"}
    >
      <span className="flex h-9 w-[82px] shrink-0 items-center justify-center rounded-[10px] border border-white/[0.08] bg-[#151515] px-1.5 shadow-[0_7px_22px_rgba(0,0,0,.22)]">
        <img
          src={CRYPTO_LOGOS_DATA}
          alt="USDT, Ethereum, Bitcoin and BNB"
          className="block h-auto w-[72px] max-w-full object-contain"
        />
      </span>
      <span className="min-w-0 text-left">
        <span className="block truncate text-[12px] font-black uppercase tracking-[0.13em] text-white sm:text-[13px]">
          Crypto
        </span>
        <span className="mt-0.5 block text-[9px] font-medium leading-4 text-white/42 sm:text-[10px]">
          {payout ? "Direct wallet payouts" : "Pay with crypto"}
        </span>
      </span>
    </div>
  );
}

function RisePayoutMark() {
  return (
    <div className="flex min-w-0 items-center gap-3" aria-label="RISE payout">
      <span className="flex h-9 w-[84px] shrink-0 items-center justify-center rounded-[10px] border border-[#7655ff]/30 bg-[#151515] px-2 shadow-[0_7px_22px_rgba(118,85,255,.16)]">
        <img
          src={RISE_LOGO_DATA}
          alt="rise"
          className="block h-auto w-[72px] max-w-full object-contain"
        />
      </span>
      <span className="min-w-0 text-left">
        <span className="block truncate text-[12px] font-black uppercase tracking-[0.13em] text-white sm:text-[13px]">
          RISE
        </span>
        <span className="mt-0.5 block text-[9px] font-medium leading-4 text-white/42 sm:text-[10px]">
          Secure payout network
        </span>
      </span>
    </div>
  );
}

function PaymentPayoutOptions() {
  const paymentOptions = [
    { key: "visa", label: "Visa", render: VisaMark },
    { key: "mastercard", label: "Mastercard", render: MastercardMark },
    { key: "amex", label: "Amex", render: AmexMark },
    { key: "paypal", label: "PayPal", render: PayPalMark },
    { key: "upi", label: "UPI", render: UpiMark },
    { key: "crypto", label: "Crypto", render: PaymentCryptoMark },
  ];

  return (
    <section className="mx-auto mt-10 w-full max-w-[1120px] px-1 sm:mt-14">
      <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#090a0f] p-4 shadow-[0_24px_80px_rgba(0,0,0,.28)] sm:rounded-[30px] sm:p-6 lg:p-7">
        <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#a94cff]/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#a94cff]/[0.05] blur-3xl" />

        <div className="relative z-10">
          <div className="mb-5 text-center sm:mb-7">
            <div className="mx-auto mb-2.5 flex items-center justify-center gap-2.5">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#a94cff]/70 sm:w-14" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c58cff] sm:text-[11px]">
                Payment &amp; Payout
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#a94cff]/70 sm:w-14" />
            </div>
            <p className="text-[10px] font-medium text-white/35 sm:text-[12px]">
              Simple, secure and flexible
            </p>
          </div>

          <div className="grid items-stretch gap-4 lg:grid-cols-2">
            {/* PAYMENT OPTIONS */}
            <div className="relative min-w-0 overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#a94cff]/[0.08] blur-3xl" />

              <div className="relative z-10 min-w-0">
                <div className="mb-4 flex min-w-0 items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white sm:text-[13px]">
                      Payment Options
                    </p>
                    <p className="mt-1 truncate text-[9px] text-white/35 sm:text-[11px]">
                      Pay securely with your preferred method
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#a94cff]/20 bg-[#a94cff]/[0.07] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#c58cff] sm:text-[9px]">
                    Secure
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {paymentOptions.map((option) => {
                    const Content = option.render;
                    return (
                      <div
                        key={option.key}
                        className="flex h-[68px] min-w-0 items-center justify-center overflow-hidden rounded-[12px] border border-white/[0.07] bg-[#0d0f14] px-2 transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.045] sm:h-[76px]"
                        aria-label={option.label}
                      >
                        <Content />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* PAYOUT OPTIONS */}
            <div className="relative min-w-0 overflow-hidden rounded-[20px] border border-[#a94cff]/15 bg-[linear-gradient(145deg,rgba(169,76,255,.055),rgba(255,255,255,.018))] p-4 sm:p-5">
              <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-[#a94cff]/[0.09] blur-3xl" />

              <div className="relative z-10 min-w-0">
                <div className="mb-4 min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white sm:text-[13px]">
                    Payout Options
                  </p>
                  <p className="mt-1 truncate text-[9px] text-white/35 sm:text-[11px]">
                    Choose how you want to receive your payout
                  </p>
                </div>

                <div className="grid min-w-0 grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <div className="flex min-h-[76px] min-w-0 overflow-hidden rounded-[14px] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(247,147,26,.055),rgba(13,15,20,.92))] px-3 transition-all duration-200 hover:border-white/[0.16] hover:bg-[rgba(247,147,26,.08)] sm:px-4">
                    <CryptoLogosMark payout />
                  </div>

                  <div className="flex min-h-[76px] min-w-0 overflow-hidden rounded-[14px] border border-[#a94cff]/20 bg-[linear-gradient(135deg,rgba(169,76,255,.08),rgba(13,15,20,.92))] px-3 transition-all duration-200 hover:border-[#a94cff]/45 hover:bg-[rgba(169,76,255,.08)] sm:px-4">
                    <RisePayoutMark />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const marketMeta: Record<Market, { title: string }> = {
  Forex: { title: "FOREX/CFD" },
  Crypto: { title: "CRYPTO" },
  Futures: { title: "FUTURES" },
};

function displayModel(model: Model) {
  if (model === "1 Step") return "1 Step";
  if (model === "2 Step") return "2 Steps";
  return "Instant";
}

function formatMoney(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

function formatMoneyExact(value: number) {
  return `$${value.toLocaleString("en-US", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

const PLATFORM_LOGOS: Partial<Record<Platform, string>> = {
  // DXtrade brand asset.
  DXTRADE: "https://metacopier.io/assets/icons/dxtrade.png",
  DXFUTURE: "https://metacopier.io/assets/icons/dxtrade.png",
  // Match-Trader official logo from Match-Trade Technologies.
  MatchTrader: "https://match-trade.com/wp-content/uploads/2023/04/match-trader-logo.png",
  // cTrader wordmark.
  cTrader: "https://www.fptrading.com/assets/images/logo/ctrader.png",
  // PropX logo taken from the PropAccount announcement supplied by you.
  GooeyPro: "data:image/png;base64,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",
};

const PLATFORM_DISPLAY_NAMES: Partial<Record<Platform, string>> = {
  DXTRADE: "DXtrade",
  DXFUTURE: "DXtrade XT",
  MatchTrader: "Match Trader",
  cTrader: "cTrader",
  GooeyPro: "PropX",
};

function PlatformMark({ platform }: { platform: Platform }) {
  const logo = PLATFORM_LOGOS[platform];
  const label = PLATFORM_DISPLAY_NAMES[platform] ?? platform;

  if (!logo) return null;

  const logoClass =
    platform === "DXTRADE" || platform === "DXFUTURE"
      ? "h-7 w-8 object-contain"
      : platform === "MatchTrader"
        ? "h-7 w-[76px] object-contain"
        : platform === "cTrader"
          ? "h-6 w-[70px] object-contain"
          : "h-7 w-[74px] object-contain";

  return (
    <span
      className={`flex h-8 shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-transparent ${
        platform === "DXTRADE" || platform === "DXFUTURE" ? "w-9" : "px-0.5"
      }`}
      title={label}
      aria-label={label}
    >
      <img
        src={logo}
        alt={`${label} logo`}
        className={logoClass}
        draggable={false}
      />
    </span>
  );
}

export function Challenges() {
  const [market, setMarket] = useState<Market>("Forex");
  const [model, setModel] = useState<Model>("1 Step");
  const [platform, setPlatform] = useState<Platform>("cTrader");
  const [accountSize, setAccountSize] = useState(100000);

  const availableModels = modelsByMarket[market];
  const availableSizes = accountSizesByMarket[market];
  const availablePlatforms = platformsByMarket[market];

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
      availableSizes.find((item) => item.value === accountSize) ??
      availableSizes[0],
    [accountSize, availableSizes]
  );

  const rules = modelRulesByMarket[market][model];

  const sortedSizes = useMemo(
    () => [...availableSizes].sort((a, b) => b.value - a.value),
    [availableSizes]
  );

  // FOREX / CFD — 2 STEPS: exact values from the supplied challenge sheet.
  // Keep these values explicit so the UI always matches the sheet exactly.
  const forexTwoStepSalePricing: Record<number, number> = {
    200000: 1461.60,
    100000: 598.50,
    50000: 299.60,
    25000: 166.60,
    10000: 66.50,
    5000: 33.60,
  };

  function priceFor(value: number) {
    const original = getModelBasePrice(market, model, value);

    const sale =
      market === "Forex" && model === "2 Step"
        ? forexTwoStepSalePricing[value] ?? Math.round(original * 0.7 * 100) / 100
        : Math.round(original * 0.7 * 100) / 100;

    return {
      original,
      sale,
      saving: Math.round((original - sale) * 100) / 100,
    };
  }

  function startCheckout(value: number) {
    setAccountSize(value);

    const planId =
      challengePlanIds[market]?.[model]?.[platform]?.[value];

    if (!planId) {
      console.error(
        "No challenge link configured for:",
        { market, model, platform, accountSize: value }
      );
      return;
    }

    const checkoutUrl =
      `https://blackpropfundingdashboard.propaccount.com/en/challenges?planId=${planId}`;

    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
  }

  const rows = useMemo(
    () => {
      const r = modelRulesByMarket[market][model];

      const baseRows: {
        icon: "target" | "daily" | "loss" | "clock" | "calendar" | "reward";
        label: string;
        value?: string;
        values?: Record<number, string>;
        kind?: "text" | "price" | "button";
      }[] = [];

      if (r.profitTargetPhase2) {
        baseRows.push({
          icon: "target",
          label: "Profit Target Phase 1",
          value: r.profitTarget,
        });

        baseRows.push({
          icon: "target",
          label: "Profit Target Phase 2",
          value: r.profitTargetPhase2,
        });
      } else {
        baseRows.push({
          icon: "target",
          label: "Profit Target",
          value: r.profitTarget,
        });
      }

      baseRows.push(
        { icon: "daily", label: "Max Daily Loss", value: r.maxDailyLoss },
        { icon: "loss", label: "Max Loss", value: r.maxLoss },
      );

      if (r.maxDrawdown) {
        baseRows.push({
          icon: "loss",
          label: "Max Drawdown",
          value: r.maxDrawdown,
        });
      }

      if (r.minTradingDays) {
        baseRows.push({
          icon: "calendar",
          label: "Min trading days",
          value: r.minTradingDays,
        });
      }

      if (r.minProfitableDays) {
        baseRows.push({
          icon: "calendar",
          label: "Min profitable days",
          value: r.minProfitableDays,
        });
      }

      if (r.consistency) {
        baseRows.push({
          icon: "calendar",
          label: "Consistency",
          value: r.consistency,
        });
      }

      if (r.profitBuffer) {
        baseRows.push({
          icon: "calendar",
          label: "Profit buffer",
          value: r.profitBuffer,
        });
      }

      if (r.weekendHold) {
        baseRows.push({
          icon: "calendar",
          label: "Weekend hold",
          value: r.weekendHold,
        });
      }

      if (r.weekendTrading) {
        baseRows.push({
          icon: "calendar",
          label: "Weekend trading",
          value: r.weekendTrading,
        });
      }

      if (r.buffer) {
        baseRows.push({
          icon: "calendar",
          label: "Buffer",
          value: r.buffer,
        });
      }

      if (r.contractLimits) {
        baseRows.push({
          icon: "calendar",
          label: "Contract limits",
          value: r.contractLimits,
        });
      }

      if (r.inactivityPeriod) {
        baseRows.push({
          icon: "clock",
          label: "Inactivity Period",
          value: r.inactivityPeriod,
        });
      }

      if (r.tradingPeriod) {
        baseRows.push({
          icon: "calendar",
          label: "Trading Period",
          value: r.tradingPeriod,
        });
      }

      // Rewards is a dedicated comparison row — it must stay visible
      // for every model, matching the Excel.
      baseRows.push({
        icon: "reward",
        label: "Rewards",
        value: r.rewards,
      });

      if (r.billing) {
        baseRows.push({
          icon: "calendar",
          label: "Billing",
          value: r.billing,
        });
      }

      if (r.payouts) {
        baseRows.push({
          icon: "calendar",
          label: "Payouts",
          value: r.payouts,
        });
      }

      // Add-ons are shown as full comparison rows and use the exact
      // per-account amounts from the Excel sheet.
      const addOnPricing = exactAddOnPricing[market]?.[model] ?? {};

      r.addOns.forEach((addOn) => {
        const values: Record<number, string> = {};

        availableSizes.forEach((size) => {
          values[size.value] =
            addOnPricing[size.value]?.[addOn.title] ??
            `${addOn.cost}`;
        });

        baseRows.push({
          icon: "reward",
          label: `Add-on: ${addOn.title}`,
          values,
        });
      });

      // Challenge fee is shown exactly once per account column,
      // immediately below the last add-on (including Payout Protector).
      baseRows.push({
        icon: "reward",
        label: "Challenge fee",
        kind: "price",
      });

      // Keep the CTA row for alignment, but do not show a "Button" label
      // in the left-hand comparison column.
      baseRows.push({
        icon: "reward",
        label: "",
        kind: "button",
      });

      return baseRows;
    },
    [market, model, availableSizes],
  );


  return (
    <section
      id="challenges"
      className="relative overflow-hidden bg-[#080a0e] pb-12 pt-4 text-white sm:pb-16 sm:pt-6 lg:pb-20 lg:pt-8"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(126,38,209,.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="mt-0 text-[2rem] font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-[2.6rem] lg:text-[3rem]">
            Configure Your{" "}
            <span className="bg-[linear-gradient(90deg,#d7a7ff,#a84cff)] bg-clip-text text-transparent">
              Trading Challenge
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[690px] text-[13px] leading-6 text-white/55 sm:text-[14px] lg:text-[15px]">
            Select your preferred evaluation model, virtual capital tier, and direct
            bridge execution platform to start trading institutional liquidity.
          </p>
        </div>

        {/* MARKET TABS (badges removed) */}
        <div className="mx-auto mt-6 grid max-w-[900px] gap-3 md:grid-cols-3">
          {markets.map((item) => {
            const selected = item === market;
            const meta = marketMeta[item];

            return (
              <button
                key={item}
                type="button"
                onClick={() => handleMarketChange(item)}
                className={`relative flex min-h-[46px] items-center justify-center rounded-[12px] border px-3 py-2 transition-all duration-300 ${
                  selected
                    ? "border-[#a94cff] bg-[linear-gradient(135deg,#35164e,#1e1129)] shadow-[0_0_0_1px_rgba(166,72,255,.28),0_12px_35px_rgba(135,44,220,.18)]"
                    : "border-white/[0.09] bg-[#101117] hover:border-white/[0.16]"
                }`}
              >
                <span className="flex items-center gap-1.5 text-[12px] font-black sm:text-[15px]">
                  {item === "Forex" && (
                    <span className="text-[#ffd33d]">
                      <TinyBolt />
                    </span>
                  )}
                  {meta.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* MODEL SELECTOR */}
        <div className="mt-4 flex justify-center overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="inline-flex shrink-0 rounded-[12px] border border-white/[0.10] bg-[#101117] p-1">
            {availableModels.map((item) => {
              const selected = item.name === model;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setModel(item.name)}
                  className={`min-w-[70px] rounded-[8px] px-3 py-1.5 text-[12px] font-bold transition-all sm:min-w-[90px] sm:px-4 sm:py-2 sm:text-[13px] ${
                    selected
                      ? "bg-[linear-gradient(135deg,#9a49ff,#a83feb)] text-white shadow-[0_8px_20px_rgba(151,65,240,.28)]"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {displayModel(item.name)}
                </button>
              );
            })}
          </div>
        </div>

        {/* PLATFORM SELECTOR */}
        <div className="mt-3 flex justify-center">
          <div className="flex max-w-full flex-wrap justify-center gap-1 rounded-[10px] border border-white/[0.07] bg-[#0d0e13] p-1 lg:gap-1">
            {availablePlatforms.map((item) => {
              const selected = item === platform;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPlatform(item)}
                  title={platformLabels[item] ?? item}
                  className={`flex shrink-0 items-center justify-center rounded-[7px] px-2 py-1 transition ${
                    selected
                      ? "bg-[#2b183b] text-[#cf94ff]"
                      : "text-white/48 hover:text-white/80"
                  }`}
                >
                  <PlatformMark platform={item} />
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE CHALLENGE CARD — mobile only */}
        <div className="mt-8 sm:hidden">
          <div className="mb-3 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
              Choose Account Size
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {sortedSizes.map((item) => {
              const selected = item.value === accountSize;

              return (
                <button
                  key={`mobile-size-${item.value}`}
                  type="button"
                  onClick={() => setAccountSize(item.value)}
                  className={`relative min-h-[42px] rounded-[10px] border px-2 py-2 text-[12px] font-black transition-all ${
                    selected
                      ? "border-[#a94cff] bg-[linear-gradient(135deg,#35164e,#1e1129)] text-white shadow-[0_0_0_1px_rgba(166,72,255,.25),0_8px_20px_rgba(135,44,220,.14)]"
                      : "border-white/[0.09] bg-[#101117] text-white/55"
                  }`}
                >
                  {isBestValue(market, model, item.value) && (
                    <span className="absolute -right-1 -top-1 rounded-full bg-[#a94cff] px-1.5 py-0.5 text-[7px] font-black uppercase text-white">
                      Best
                    </span>
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          <article
            className={`mt-3 overflow-hidden rounded-[16px] border ${
              isBestValue(market, model, accountSize)
                ? "border-[#a94cff] bg-[linear-gradient(180deg,#32204b_0%,#23163a_58%,#15121f_100%)] shadow-[0_0_0_1px_rgba(166,72,255,.24),0_18px_45px_rgba(108,40,178,.15)]"
                : "border-white/[0.09] bg-[#101117]"
            }`}
          >
            <div className="relative flex min-h-[96px] flex-col items-center justify-center border-b border-white/[0.06] px-4 text-center">
              {isBestValue(market, model, accountSize) && (
                <span className="absolute right-3 top-3 rounded-full bg-[linear-gradient(90deg,#9f4cff,#a83df0)] px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.04em] text-white">
                  Best Value
                </span>
              )}

              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#c58cff]">
                Account Size
              </span>
              <strong className="mt-1.5 text-[28px] font-black tracking-[-0.045em] text-white">
                {formatMoney(accountSize)}
              </strong>
            </div>

            <div>
              {rows
                .filter((row) => row.kind !== "button")
                .map((row, index) => {
                  const isPrice = row.kind === "price";
                  const value = row.values?.[accountSize] ?? row.value ?? "—";

                  return (
                    <div
                      key={`mobile-row-${row.label}-${index}`}
                      className={`flex items-center justify-between gap-4 border-b border-white/[0.055] px-4 py-3 ${
                        isPrice ? "min-h-[88px]" : "min-h-[58px]"
                      }`}
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span className="shrink-0 text-white/45">
                          <RowIcon type={row.icon} />
                        </span>
                        <span className="text-[11px] font-medium leading-[1.25] text-white/68">
                          {row.label}
                        </span>
                      </div>

                      {isPrice ? (
                        <div className="shrink-0 text-right leading-tight">
                          <span className="block text-[10px] font-semibold text-white/40 line-through">
                            {formatMoneyExact(priceFor(accountSize).original)}
                          </span>
                          <strong className="mt-0.5 block text-[23px] font-black tracking-[-0.045em] text-[#c378ff]">
                            {formatMoneyExact(priceFor(accountSize).sale)}
                          </strong>
                        </div>
                      ) : (
                        <strong className="max-w-[52%] shrink-0 text-right text-[11px] font-semibold leading-[1.35] text-white">
                          {value}
                        </strong>
                      )}
                    </div>
                  );
                })}
            </div>

            <div className="p-3">
              <button
                type="button"
                onClick={() => startCheckout(accountSize)}
                className="flex min-h-[50px] w-full items-center justify-center rounded-[11px] bg-[linear-gradient(90deg,#8c27df,#b23cf6)] px-4 text-[14px] font-black text-white shadow-[0_10px_24px_rgba(156,44,231,.22)] transition hover:brightness-110"
              >
                Start now
              </button>
            </div>
          </article>

          <p className="mt-3 text-center text-[9px] leading-4 text-white/30">
            Select an account size above to view its complete challenge details.
          </p>
        </div>

        {/* DESKTOP / TABLET COMPARISON TABLE — unchanged */}
        <div className="mt-9 hidden sm:block">
          <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-2 sm:min-w-0 sm:gap-2">
              {/* LEFT LABEL COLUMN — same row heights as every account card */}
              <div className="sticky left-0 z-20 w-[190px] shrink-0 bg-[#080a0e] pt-[109px] sm:relative sm:w-[190px] lg:w-[185px]">
                {rows.map((row, index) => (
                  <div
                    key={`${row.label}-${index}`}
                    className={`flex ${
                      row.kind === "button"
                        ? "min-h-[74px]"
                        : index === 0
                          ? "min-h-[64px]"
                          : "min-h-[58px]"
                    } items-center gap-2.5 border-b border-transparent pr-2 text-[11px] font-medium leading-[1.2] text-white/78 sm:gap-3 sm:text-[13px] lg:text-[14px]`}
                  >
                    {row.kind !== "button" && (
                      <>
                        <span className="shrink-0 text-white/55">
                          <RowIcon type={row.icon} />
                        </span>
                        <span>{row.label}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* ACCOUNT CARDS */}
              <div className="flex min-w-max gap-3">
                {sortedSizes.map((item) => {
                  const selected = item.value === accountSize;
                  const price = priceFor(item.value);

                  return (
                    <div
                      key={item.value}
                      className="relative w-[150px] min-w-[150px] shrink-0 pt-[14px]"
                    >
                      {isBestValue(market, model, item.value) && (
                        <span className="absolute left-1/2 top-0 z-30 -translate-x-1/2 whitespace-nowrap rounded-full bg-[linear-gradient(90deg,#9f4cff,#a83df0)] px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[0.03em] text-white shadow-[0_6px_16px_rgba(158,63,241,.28)]">
                          Best Value
                        </span>
                      )}

                      <article
                        onClick={() => setAccountSize(item.value)}
                        className={`relative cursor-pointer overflow-hidden rounded-[15px] border transition-all duration-300 ${
                          selected
                            ? "border-[#a94cff] bg-[linear-gradient(180deg,#32204b_0%,#23163a_62%,#15121f_100%)] shadow-[0_0_0_1px_rgba(166,72,255,.28),0_18px_46px_rgba(108,40,178,.17)]"
                            : "border-white/[0.09] bg-[#101117] hover:border-white/[0.16]"
                        }`}
                      >
                        <div className="flex h-[95px] flex-col items-center justify-center border-b border-white/[0.055] px-3 text-center">
                          <span
                            className={`text-[11px] font-bold uppercase tracking-[0.09em] ${
                              selected ? "text-[#c58cff]" : "text-white/48"
                            }`}
                          >
                            Account
                          </span>
                          <strong className="mt-2 text-[20px] font-black tracking-[-0.035em] text-white">
                            {formatMoney(item.value)}
                          </strong>
                        </div>

                        {rows.map((row, index) => (
                          <div
                            key={`${item.value}-${row.label}-${index}`}
                            className={`flex ${
                              row.kind === "button"
                                ? "min-h-[74px]"
                                : index === 0
                                  ? "min-h-[64px]"
                                  : "min-h-[58px]"
                            } items-center justify-center border-b border-white/[0.045] px-3 text-center text-[10px] font-medium leading-[1.35] text-white/76 sm:px-3 sm:text-[11px] sm:leading-5 lg:text-[12px]`}
                          >
                            {row.kind === "button" ? (
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  startCheckout(item.value);
                                }}
                                className="mx-auto flex min-h-[46px] w-full items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#8c27df,#b23cf6)] px-3 text-[13px] font-black text-white shadow-[0_10px_24px_rgba(156,44,231,.22)] transition hover:brightness-110"
                              >
                                Start now
                              </button>
                            ) : row.kind === "price" ? (
                              <div className="flex flex-col items-center justify-center leading-tight">
                                <span className="text-[9px] font-semibold text-white/40 line-through sm:text-[10px]">
                                  {formatMoneyExact(price.original)}
                                </span>
                                <strong
                                  className={`mt-0.5 text-[19px] font-black tracking-[-0.045em] sm:text-[21px] ${
                                    selected ? "text-[#c378ff]" : "text-white"
                                  }`}
                                >
                                  {formatMoneyExact(price.sale)}
                                </strong>
                              </div>
                            ) : (
                              <strong className="font-semibold text-white">
                                {row.values?.[item.value] ?? row.value}
                              </strong>
                            )}
                          </div>
                        ))}
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* PAYMENT + PAYOUT OPTIONS */}
        <PaymentPayoutOptions />
      </div>
    </section>
  );
}

export default Challenges;