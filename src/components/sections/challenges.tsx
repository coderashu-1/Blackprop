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

// A rule value is either one value shared by every account size,
// or a per-account-size map (used by the Futures sheet).
type RuleValue = string | Record<number, string>;

type RowIconType =
  | "target"
  | "daily"
  | "loss"
  | "clock"
  | "calendar"
  | "reward";

// Rows whose label differs between sheets (e.g. "Max Loss – Trailing").
type RuleLabelKey =
  | "profitTarget"
  | "maxDailyLoss"
  | "maxLoss"
  | "minTradingDays"
  | "minProfitableDays"
  | "consistency"
  | "profitBuffer"
  | "buffer"
  | "challengeFee";

type RuleSet = {
  profitTarget: RuleValue;
  profitTargetPhase2?: string;
  maxDailyLoss: string;
  maxLoss: RuleValue;
  tradingPeriod?: string;
  minTradingDays?: string;
  minProfitableDays?: string;
  consistency?: string;
  profitBuffer?: string;
  weekendHold?: string;
  weekendTrading?: string;
  buffer?: RuleValue;
  contractLimits?: RuleValue;
  rewards: string;
  billing?: string;
  activationFee?: string;
  payouts?: string;
  labels?: Partial<Record<RuleLabelKey, string>>;
  addOns: AddOn[];
};

type ComparisonRow = {
  icon: RowIconType;
  label: string;
  value?: string;
  values?: Record<number, string>;
  kind?: "text" | "price" | "button";
};

/* =========================================================
   DATA
   Source: BlackProp_Official_Challenges.xlsx
   ("All Challenges" sheet — website data, 22 Sep 2026)
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
   Every "Start now" button opens:
   CHECKOUT_BASE_URL + "?planId=" + the ID below.
   These IDs come from the supplied challenge-link sheet.
--------------------------------------------------------- */

const CHECKOUT_BASE_URL =
  "https://blackpropfundingdashboard.propaccount.com/en/challenges";

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

// Builds the checkout link for one exact challenge.
// Falls back to the main challenges page if a plan ID is ever missing,
// so a "Start now" button can never be a dead click.
function getCheckoutUrl(
  market: Market,
  model: Model,
  platform: Platform,
  accountValue: number
): string {
  const planId =
    challengePlanIds[market]?.[model]?.[platform]?.[accountValue];

  if (!planId) {
    console.warn(
      "No challenge link configured for:",
      { market, model, platform, accountSize: accountValue }
    );
    return CHECKOUT_BASE_URL;
  }

  return `${CHECKOUT_BASE_URL}?planId=${planId}`;
}

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

/* "Popular ★" placement from the official challenge sheet:
   Forex 1 Step / 2 Steps -> $50K
   Forex Instant Funding -> $100K
   Futures One Step -> $100K
   Crypto 1 Step / 2 Steps -> $100K
*/
const POPULAR_BADGE_LABEL = "Popular ★";
const POPULAR_BADGE_LABEL_SHORT = "Popular";

function isPopular(market: Market, model: Model, accountValue: number) {
  if (market === "Forex") {
    if (model === "1 Step" || model === "2 Step") return accountValue === 50000;
    return accountValue === 100000;
  }

  return accountValue === 100000;
}

/* ---------------------------------------------------------
   PRICING — taken directly from the "All Challenges" sheet
   (Challenge fee / Challenge Fees rows), 22 Sep 2026.
   These are the ORIGINAL (pre-discount) fees.
--------------------------------------------------------- */

// Sheet: sale price = original fee minus 30% (used for the price maths only).
const DISCOUNT_PERCENT = 30;

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

// Sale price = original − 30%.
// Integer maths (original × 70 ÷ 100) so every result matches the sheet
// to the cent: $375 → $262.50, $428 → $299.60, $2088 → $1461.60, etc.
function getSalePrice(original: number): number {
  return Math.round(original * (100 - DISCOUNT_PERCENT)) / 100;
}

/* ---------------------------------------------------------
   TRADING RULES — PER MARKET (from "All Challenges" sheet)
   Row order on the page follows the sheet.
--------------------------------------------------------- */

const forexRules: Record<Model, RuleSet> = {
  // FOREX / CFD · 1 STEP
  "1 Step": {
    profitTarget: "10%",
    maxDailyLoss: "5%",
    maxLoss: "6%",
    tradingPeriod: "Unlimited",
    rewards: "80%",
    labels: {
      maxLoss: "Max Loss – Trailing",
      challengeFee: "Challenge fee – Non Refundable",
    },
    addOns: [
      { title: "Remove Lock on Payout", cost: "25%", description: "Remove Lock on Payout" },
      { title: "Payout Protector", cost: "25%", description: "Payout Protector" },
    ],
  },

  // FOREX / CFD · 2 STEPS
  "2 Step": {
    profitTarget: "8% Phase 1  /  5% Phase 2",
    maxDailyLoss: "5%",
    maxLoss: "8% (Static)",
    minTradingDays: "5",
    rewards: "80%",
    labels: {
      minTradingDays: "Min trading days (0.5% per day)",
    },
    addOns: [
      { title: "100% Payout", cost: "20%", description: "100% Payout" },
      { title: "Remove Lock on Payout", cost: "25%", description: "Remove Lock on Payout" },
      { title: "Payout Protector", cost: "25%", description: "Payout Protector" },
    ],
  },

  // FOREX / CFD · INSTANT FUNDING
  Instant: {
    profitTarget: "None",
    maxDailyLoss: "3%",
    maxLoss: "5%",
    minProfitableDays: "5",
    consistency: "15%",
    profitBuffer: "3%",
    weekendHold: "Add On",
    rewards: "80%",
    labels: {
      maxLoss: "Max Loss – Trailing",
      minProfitableDays: "Min profitable days (0.5% per day)",
      profitBuffer: "Profit buffer – Check FAQ",
      challengeFee: "Challenge fee – Non Refundable",
    },
    addOns: [
      { title: "Profit Share up to 90%", cost: "20%", description: "Profit Share up to 90%" },
      { title: "Hold Weekend", cost: "10%", description: "Hold Weekend" },
      { title: "Payout Protector", cost: "25%", description: "Payout Protector" },
    ],
  },
};

const cryptoRules: Record<Model, RuleSet> = {
  // Crypto has no Instant tier in the UI — kept only so the record is complete.
  Instant: forexRules.Instant,

  // CRYPTO · 1 STEP
  "1 Step": {
    profitTarget: "9%",
    maxDailyLoss: "+/- 3% gain/loss range",
    maxLoss: "6% (Static)",
    weekendTrading: "Enabled",
    rewards: "90%",
    labels: {
      maxDailyLoss: "Max Daily Loss – Resets Daily",
    },
    addOns: [
      { title: "Payout Protector", cost: "25%", description: "Payout Protector" },
    ],
  },

  // CRYPTO · 2 STEPS
  "2 Step": {
    profitTarget: "6%",
    profitTargetPhase2: "9%",
    maxDailyLoss: "+/- 3% gain/loss range",
    maxLoss: "9% (Static)",
    weekendTrading: "Enabled",
    rewards: "90%",
    labels: {
      maxDailyLoss: "Max Daily Loss – Resets Daily",
    },
    addOns: [
      { title: "Payout Protector", cost: "25%", description: "Payout Protector" },
    ],
  },
};

// FUTURES · ONE STEP
const futuresOneStepRules: RuleSet = {
  profitTarget: {
    150000: "6% ($9,000)",
    100000: "6% ($6,000)",
    75000: "6% ($4,500)",
    50000: "6% ($3,000)",
    25000: "6% ($1,500)",
  },
  maxDailyLoss: "None",
  maxLoss: {
    150000: "3% ($4,500)",
    100000: "3% ($3,000)",
    75000: "3.33% ($2,498)",
    50000: "4% ($2,000)",
    25000: "6% ($1,500)",
  },
  consistency: "33.33%",
  buffer: {
    150000: "6% (Funded Stage)",
    100000: "4% (Funded Stage)",
    75000: "3.33% (Funded Stage)",
    50000: "3% (Funded Stage)",
    25000: "3% (Funded Stage)",
  },
  contractLimits: {
    150000: "12 Contracts / 120 Micros",
    100000: "9 Contracts / 90 Micros",
    75000: "6 Contracts / 60 Micros",
    50000: "3 Contracts / 30 Micros",
    25000: "1 Contract / 10 Micros",
  },
  rewards: "80%",
  billing: "Monthly subscription",
  activationFee: "None",
  payouts: "On demand (Consistency & buffer must be met)",
  labels: {
    maxLoss: "Max drawdown – Trailing",
    consistency: "Consistency – Eval & Funded",
    buffer: "Non-Withdrawable Buffer",
  },
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
   (original fees, before the 30% discount)
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
   EXACT EXCEL ADD-ON AMOUNTS — 22 SEP 2026
   Keys must match the add-on titles in the rules above.
========================================================= */

const exactAddOnPricing: Record<
  Market,
  Record<string, Record<number, Record<string, string>>>
> = {
  Forex: {
    "1 Step": {
      5000: { "Remove Lock on Payout": "$8.75 (25%)", "Payout Protector": "$8.75 (25%)" },
      10000: { "Remove Lock on Payout": "$18.75 (25%)", "Payout Protector": "$18.75 (25%)" },
      25000: { "Remove Lock on Payout": "$47.50 (25%)", "Payout Protector": "$47.50 (25%)" },
      50000: { "Remove Lock on Payout": "$93.75 (25%)", "Payout Protector": "$93.75 (25%)" },
      100000: { "Remove Lock on Payout": "$187.50 (25%)", "Payout Protector": "$187.50 (25%)" },
      200000: { "Remove Lock on Payout": "$400.00 (25%)", "Payout Protector": "$400.00 (25%)" },
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
      5000: { "Profit Share up to 90%": "$18.00 (20%)", "Hold Weekend": "$9.00 (10%)", "Payout Protector": "$22.50 (25%)" },
      10000: { "Profit Share up to 90%": "$26.40 (20%)", "Hold Weekend": "$13.20 (10%)", "Payout Protector": "$33.00 (25%)" },
      25000: { "Profit Share up to 90%": "$56.40 (20%)", "Hold Weekend": "$28.20 (10%)", "Payout Protector": "$70.50 (25%)" },
      50000: { "Profit Share up to 90%": "$73.20 (20%)", "Hold Weekend": "$36.60 (10%)", "Payout Protector": "$91.50 (25%)" },
      100000: { "Profit Share up to 90%": "$133.20 (20%)", "Hold Weekend": "$66.60 (10%)", "Payout Protector": "$166.50 (25%)" },
      200000: { "Profit Share up to 90%": "$239.60 (20%)", "Hold Weekend": "$119.80 (10%)", "Payout Protector": "$299.50 (25%)" },
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
  type: RowIconType;
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

/* ---------------------------------------------------------
   INLINE LOGOS — drawn in code, so this file needs no image
   data, no extra files and no setup. Paste it and it works.
--------------------------------------------------------- */

// USDT, Ethereum, Bitcoin and BNB coin marks.
function CryptoCoins({ size = 26 }: { size?: number }) {
  const overlap = Math.round(size * 0.3);
  const coinClass = "block shrink-0 rounded-full ring-2 ring-[#151515]";

  return (
    <span
      className="flex items-center"
      role="img"
      aria-label="USDT, Ethereum, Bitcoin and BNB"
    >
      {/* USDT */}
      <svg viewBox="0 0 32 32" width={size} height={size} className={coinClass} aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#26A17B" />
        <path
          fill="#FFF"
          d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"
        />
      </svg>

      {/* ETHEREUM */}
      <svg viewBox="0 0 32 32" width={size} height={size} className={coinClass} style={{ marginLeft: -overlap }} aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#627EEA" />
        <path fill="#FFF" fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z" />
        <path fill="#FFF" d="M16.498 4L9 16.22l7.498-3.35z" />
        <path fill="#FFF" fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z" />
        <path fill="#FFF" d="M16.498 27.995v-6.028L9 17.616z" />
        <path fill="#FFF" fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z" />
        <path fill="#FFF" fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z" />
      </svg>

      {/* BITCOIN */}
      <svg viewBox="0 0 32 32" width={size} height={size} className={coinClass} style={{ marginLeft: -overlap }} aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#F7931A" />
        <path
          fill="#FFF"
          d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"
        />
      </svg>

      {/* BNB */}
      <svg viewBox="0 0 32 32" width={size} height={size} className={coinClass} style={{ marginLeft: -overlap }} aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#F3BA2F" />
        <path
          fill="#FFF"
          d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"
        />
      </svg>
    </span>
  );
}

// RISE wordmark.
function RiseWordmark() {
  return (
    <svg viewBox="0 0 72 30" className="block h-auto w-[66px] max-w-full" role="img" aria-label="rise">
      <text
        x="36"
        y="23"
        textAnchor="middle"
        fill="white"
        fontSize="26"
        fontWeight="800"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="-0.6"
      >
        rise
      </text>
    </svg>
  );
}

// PropX wordmark (platform selector).
function PropXWordmark() {
  return (
    <svg viewBox="0 0 100 40" className="h-10 w-[100px]" role="img" aria-label="PropX logo">
      <text
        x="50"
        y="29"
        textAnchor="middle"
        fontSize="27"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="-1"
      >
        <tspan fill="white">Prop</tspan>
        <tspan fill="#b266ff">X</tspan>
      </text>
    </svg>
  );
}

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
      <CryptoCoins size={26} />
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
        <CryptoCoins size={22} />
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
        <RiseWordmark />
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
  // PropX uses the inline PropXWordmark component (see PlatformMark below).
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

  if (!logo && platform !== "GooeyPro") return null;

  const logoClass =
    platform === "DXTRADE" || platform === "DXFUTURE"
      ? "h-10 w-12 object-contain"
      : platform === "MatchTrader"
        ? "h-10 w-[104px] object-contain"
        : platform === "cTrader"
          ? "h-9 w-[94px] object-contain"
          : "h-10 w-[100px] object-contain";

  return (
    <span
      className="flex min-w-[92px] shrink-0 flex-col items-center justify-center gap-1.5"
      title={label}
      aria-label={label}
    >
      <span className="flex h-10 items-center justify-center">
        {logo ? (
          <img
            src={logo}
            alt={`${label} logo`}
            className={logoClass}
            draggable={false}
          />
        ) : (
          <PropXWordmark />
        )}
      </span>
      <span className="whitespace-nowrap text-[11px] font-bold leading-none tracking-[-0.01em] text-white/75 sm:text-[12px]">
        {label}
      </span>
    </span>
  );
}

// Turns one rule (shared value or per-account-size map) into a table row.
function ruleRow(
  icon: RowIconType,
  label: string,
  rule: RuleValue
): ComparisonRow {
  return typeof rule === "string"
    ? { icon, label, value: rule }
    : { icon, label, values: rule };
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

  // CHALLENGE FEE SALE PRICING
  // All challenge fees use the 30% discount from the official sheet.
  // Sale price = original price - 30% = original price × 0.70.
  // This applies to Forex / CFD, Futures, and Crypto across all models.
  function priceFor(value: number) {
    const original = getModelBasePrice(market, model, value);
    const sale = getSalePrice(original);

    return {
      original,
      sale,
      saving: Math.round((original - sale) * 100) / 100,
    };
  }

  function startCheckout(value: number) {
    setAccountSize(value);

    const checkoutUrl = getCheckoutUrl(market, model, platform, value);

    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
  }

  const rows = useMemo(
    () => {
      const r = modelRulesByMarket[market][model];

      // Sheet-specific label, or the standard one when the sheet has no override.
      const labelFor = (key: RuleLabelKey, fallback: string) =>
        r.labels?.[key] ?? fallback;

      const baseRows: ComparisonRow[] = [];

      if (r.profitTargetPhase2) {
        baseRows.push(
          ruleRow("target", "Profit Target Phase 1", r.profitTarget)
        );

        baseRows.push({
          icon: "target",
          label: "Profit Target Phase 2",
          value: r.profitTargetPhase2,
        });
      } else {
        baseRows.push(
          ruleRow(
            "target",
            labelFor("profitTarget", "Profit Target"),
            r.profitTarget
          )
        );
      }

      baseRows.push(
        {
          icon: "daily",
          label: labelFor("maxDailyLoss", "Max Daily Loss"),
          value: r.maxDailyLoss,
        },
        ruleRow("loss", labelFor("maxLoss", "Max Loss"), r.maxLoss),
      );

      if (r.minTradingDays) {
        baseRows.push({
          icon: "calendar",
          label: labelFor("minTradingDays", "Min trading days"),
          value: r.minTradingDays,
        });
      }

      if (r.minProfitableDays) {
        baseRows.push({
          icon: "calendar",
          label: labelFor("minProfitableDays", "Min profitable days"),
          value: r.minProfitableDays,
        });
      }

      if (r.consistency) {
        baseRows.push({
          icon: "calendar",
          label: labelFor("consistency", "Consistency"),
          value: r.consistency,
        });
      }

      if (r.profitBuffer) {
        baseRows.push({
          icon: "calendar",
          label: labelFor("profitBuffer", "Profit buffer"),
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
        baseRows.push(
          ruleRow("calendar", labelFor("buffer", "Buffer"), r.buffer)
        );
      }

      if (r.contractLimits) {
        baseRows.push(
          ruleRow("calendar", "Contract limits", r.contractLimits)
        );
      }

      if (r.tradingPeriod) {
        baseRows.push({
          icon: "calendar",
          label: "Trading Period",
          value: r.tradingPeriod,
        });
      }

      // Reward Split is a dedicated comparison row — it must stay visible
      // for every model, matching the Excel.
      baseRows.push({
        icon: "reward",
        label: "Reward Split",
        value: r.rewards,
      });

      if (r.billing) {
        baseRows.push({
          icon: "calendar",
          label: "Billing",
          value: r.billing,
        });
      }

      if (r.activationFee) {
        baseRows.push({
          icon: "reward",
          label: "Activation Fee",
          value: r.activationFee,
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
        label: labelFor("challengeFee", "Challenge fee"),
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
                  className={`flex min-h-[68px] shrink-0 items-center justify-center rounded-[9px] px-3 py-2 transition ${
                    selected
                      ? "bg-[#2b183b] text-[#cf94ff] shadow-[0_0_0_1px_rgba(166,72,255,.18)]"
                      : "text-white/48 hover:bg-white/[0.035] hover:text-white/80"
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
                  {isPopular(market, model, item.value) && (
                    <span className="absolute -right-1 -top-1 rounded-full bg-[#a94cff] px-1.5 py-0.5 text-[7px] font-black uppercase text-white">
                      {POPULAR_BADGE_LABEL_SHORT}
                    </span>
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          <article
            className={`mt-3 overflow-hidden rounded-[16px] border ${
              isPopular(market, model, accountSize)
                ? "border-[#a94cff] bg-[linear-gradient(180deg,#32204b_0%,#23163a_58%,#15121f_100%)] shadow-[0_0_0_1px_rgba(166,72,255,.24),0_18px_45px_rgba(108,40,178,.15)]"
                : "border-white/[0.09] bg-[#101117]"
            }`}
          >
            <div className="relative flex min-h-[96px] flex-col items-center justify-center border-b border-white/[0.06] px-4 text-center">
              {isPopular(market, model, accountSize) && (
                <span className="absolute right-3 top-3 rounded-full bg-[linear-gradient(90deg,#9f4cff,#a83df0)] px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.04em] text-white">
                  {POPULAR_BADGE_LABEL}
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
          <div className={`overflow-x-auto pb-2 [scrollbar-width:thin] ${market === "Futures" ? "overflow-visible" : "-mx-4 px-4 sm:mx-0 sm:px-0"}`}>
            <div className={`flex gap-2 ${market === "Futures" ? "min-w-0" : "min-w-max sm:min-w-0"}`}>
              {/* LEFT LABEL COLUMN — same row heights as every account card */}
              <div className={`sticky left-0 z-20 shrink-0 bg-[#080a0e] pt-[109px] sm:relative ${market === "Futures" ? "w-[150px] lg:w-[155px]" : "w-[190px] lg:w-[185px]"}`}>
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
                  const accountCardWidth = market === "Futures"
                    ? "w-[180px] min-w-[180px] lg:w-[180px] lg:min-w-[180px]"
                    : "w-[150px] min-w-[150px]";

                  return (
                    <div
                      key={item.value}
                      className={`relative shrink-0 pt-[14px] ${accountCardWidth}`}
                    >
                      {isPopular(market, model, item.value) && (
                        <span className="absolute left-1/2 top-0 z-30 -translate-x-1/2 whitespace-nowrap rounded-full bg-[linear-gradient(90deg,#9f4cff,#a83df0)] px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[0.03em] text-white shadow-[0_6px_16px_rgba(158,63,241,.28)]">
                          {POPULAR_BADGE_LABEL}
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
                            } items-center justify-center border-b border-white/[0.045] px-3 text-center text-[10px] font-medium leading-[1.3] text-white/76 sm:px-2.5 sm:text-[10px] sm:leading-[1.35] lg:text-[11.5px]`}
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
                                {row.values?.[item.value] ?? row.value ?? "—"}
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