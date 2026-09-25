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

// Short display label override for platform buttons/text — e.g. Forex
// shows "MTR" instead of the full "MatchTrader" name, per the live app.
const platformLabels: Partial<Record<Platform, string>> = {
  MatchTrader: "MTR",
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
   ACCOUNT SIZES PER MARKET
   Matches the "All Challenges" sheet exactly — every market
   (Forex, Futures, Crypto) uses the same 6 tiers: 5K → 200K.
--------------------------------------------------------- */

const accountSizes = [
  { value: 5000, label: "5K" },
  { value: 10000, label: "10K" },
  { value: 25000, label: "25K" },
  { value: 50000, label: "50K" },
  { value: 100000, label: "100K" },
  { value: 200000, label: "200K" },
];

const accountSizesByMarket: Record<
  Market,
  { value: number; label: string; popular?: boolean }[]
> = {
  Forex: accountSizes,
  Crypto: accountSizes,
  Futures: accountSizes,
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
  5000: 45,
  10000: 95,
  25000: 250,
  50000: 525,
  100000: 1050,
  200000: 2150,
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
    consistency: "15% (no single day > 25% of total profits)",
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
      5000: 45, 10000: 95, 25000: 250,
      50000: 525, 100000: 1050, 200000: 2150,
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
      200000: { "Remove Lock on Payout": "+$274.75 (25%)", "Payout Protector": "+$274.75 (25%)" },
    },
    "2 Step": {
      5000: { "100% Payout": "$417.60 (20%)", "Remove Lock on Payout": "$522.00 (25%)", "Payout Protector": "$522.00 (25%)" },
      10000: { "100% Payout": "$171.00 (20%)", "Remove Lock on Payout": "$213.75 (25%)", "Payout Protector": "$213.75 (25%)" },
      25000: { "100% Payout": "$85.60 (20%)", "Remove Lock on Payout": "$107.00 (25%)", "Payout Protector": "$107.00 (25%)" },
      50000: { "100% Payout": "$47.60 (20%)", "Remove Lock on Payout": "$59.50 (25%)", "Payout Protector": "$59.50 (25%)" },
      100000: { "100% Payout": "$19.00 (20%)", "Remove Lock on Payout": "$23.75 (25%)", "Payout Protector": "$23.75 (25%)" },
      200000: { "100% Payout": "$9.60 (20%)", "Remove Lock on Payout": "$12.00 (25%)", "Payout Protector": "$12.00 (25%)" },
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
   PAYMENT ICONS
========================================================= */

function VisaMark() {
  return (
    <svg
      viewBox="0 0 64 24"
      className="h-7 w-[58px] sm:h-9 sm:w-[78px]"
      aria-label="Visa"
    >
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
    <svg
      viewBox="0 0 86 30"
      className="h-7 w-[70px] sm:h-9 sm:w-[88px]"
      aria-label="PayPal"
    >
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

function BitcoinMark() {
  return (
    <div
      className="flex items-center justify-center -space-x-2.5 sm:-space-x-3"
      aria-label="Supported cryptocurrencies"
      role="img"
    >
      {/* Bitcoin */}
      <span className="relative z-[1] flex h-6 w-6 items-center justify-center rounded-full border border-[#101117] bg-[#f7931a] shadow-[0_1px_4px_rgba(0,0,0,.25)] sm:h-7 sm:w-7">
        <svg viewBox="0 0 32 32" className="h-4 w-4 sm:h-[17px] sm:w-[17px]" aria-hidden="true">
          <path
            fill="white"
            d="M19.8 14.2c.3-1.8-1.1-2.8-3.1-3.5l.6-2.3-1.5-.4-.6 2.2c-.4-.1-.8-.2-1.1-.2l.6-2.2-1.5-.4-.6 2.3-1.1-.3-2-.5-.4 1.6 1.1.3c.6.2.7.5.6 1l-.6 2.7.1.1-.1-.1-.9 4c-.1.3-.3.5-.8.4l-1.1-.3-.7 1.7 1.9.5c.4.1.7.2 1.1.3l-.6 2.3 1.5.4.6-2.3c.4.1.8.2 1.1.3l-.6 2.3 1.5.4.6-2.3c2.5.4 4.4.2 5.2-2.1.6-1.8-.1-2.8-1.4-3.5 1-.2 1.7-.9 2-2Zm-3.5 4.7c-.5 1.8-3.5.9-4.4.6l.8-3.1c.9.2 4.1.7 3.6 2.5Zm.5-4.6c-.4 1.6-2.9.8-3.7.6l.7-2.8c.8.2 3.5.6 3 2.2Z"
          />
        </svg>
      </span>

      {/* Ethereum */}
      <span className="relative z-[2] flex h-6 w-6 items-center justify-center rounded-full border border-[#101117] bg-[#627eea] shadow-[0_1px_4px_rgba(0,0,0,.25)] sm:h-7 sm:w-7">
        <svg viewBox="0 0 32 32" className="h-4 w-4 sm:h-[17px] sm:w-[17px]" aria-hidden="true">
          <path fill="white" d="m16 4 7 11-7 4-7-4 7-11Z" opacity=".9" />
          <path fill="white" d="m16 20 7-4-7 12-7-12 7 4Z" opacity=".7" />
        </svg>
      </span>

      {/* Tether / USDT */}
      <span className="relative z-[3] flex h-6 w-6 items-center justify-center rounded-full border border-[#101117] bg-[#26a17b] shadow-[0_1px_4px_rgba(0,0,0,.25)] sm:h-7 sm:w-7">
        <svg viewBox="0 0 32 32" className="h-4 w-4 sm:h-[17px] sm:w-[17px]" aria-hidden="true">
          <path fill="white" d="M8 7h16v4h-6v14h-4V11H8V7Zm2 7h12v3H10v-3Z" />
        </svg>
      </span>

      {/* USD coin */}
      <span className="relative z-[4] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white/80 bg-[#149bd7] shadow-[0_1px_4px_rgba(0,0,0,.25)] sm:h-7 sm:w-7">
        <span className="text-[13px] font-black leading-none text-white sm:text-[14px]">$</span>
      </span>

      {/* Solana */}
      <span className="relative z-[5] flex h-6 w-6 items-center justify-center rounded-full border border-[#101117] bg-[#14151d] shadow-[0_1px_4px_rgba(0,0,0,.25)] sm:h-7 sm:w-7">
        <svg viewBox="0 0 32 32" className="h-4 w-4 sm:h-[17px] sm:w-[17px]" aria-hidden="true">
          <path fill="#4be3c2" d="M8 8h14l3 3H11L8 8Zm3 6h14l-3 3H8l3-3Zm-3 6h14l3 3H11l-3-3Z" />
        </svg>
      </span>


    </div>
  );
}

function MastercardMark() {
  return (
    <svg
      viewBox="0 0 72 44"
      className="h-8 w-[58px] sm:h-10 sm:w-[68px]"
      aria-label="Mastercard"
    >
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
    <svg
      viewBox="0 0 72 40"
      className="h-8 w-[60px] sm:h-9 sm:w-[70px]"
      aria-label="American Express"
    >
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

function UpiMark() {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6f/UPI_logo.svg"
      alt="UPI"
      className="h-auto w-[64px] sm:w-[78px]"
      loading="lazy"
      decoding="async"
    />
  );
}

const paymentOptions: {
  key: string;
  render: () => ReactElement;
  highlight?: boolean;
}[] = [
  { key: "visa", render: VisaMark },
  { key: "paypal", render: PayPalMark },
  { key: "crypto", render: BitcoinMark, highlight: true },
  { key: "mastercard", render: MastercardMark },
  { key: "amex", render: AmexMark },
  { key: "upi", render: UpiMark },
];

function PaymentOptions() {
  return (
    <div className="mt-14 sm:mt-16">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white/45 sm:text-[12px]">
        Payment Options
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {paymentOptions.map((option) => {
          const Content = option.render;

          return (
            <div
              key={option.key}
              className={`flex h-[50px] w-[84px] items-center justify-center rounded-[10px] border text-white transition-all sm:h-[66px] sm:w-[126px] sm:rounded-[12px] ${
                option.highlight
                  ? "border-[#f7931a] bg-[linear-gradient(135deg,#3a2308,#1c1408)] shadow-[0_0_0_1px_rgba(247,147,26,.35),0_10px_26px_rgba(247,147,26,.18)]"
                  : "border-white/[0.10] bg-[#101117]"
              }`}
            >
              <Content />
            </div>
          );
        })}
      </div>
    </div>
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

  // Challenge fees in the new sheet are shown with a 30% discount.
  function priceFor(value: number) {
    const original = getModelBasePrice(market, model, value);
    const sale = Math.round(original * 0.7 * 100) / 100;

    return {
      original,
      sale,
      saving: Math.round((original - sale) * 100) / 100,
    };
  }

  function startCheckout(value: number) {
    setAccountSize(value);

    const selectedSize =
      availableSizes.find((item) => item.value === value) ?? account;

    const selectedPrice = priceFor(value);

    alert(
      `BlackProp checkout selected:\n${market} · ${model} · ${platform} · ${selectedSize.label}\nPrice: $${selectedPrice.sale}`
    );
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

      // Challenge fee is intentionally the final comparison row,
      // immediately before the Start now CTA row.
      baseRows.push({
        icon: "reward",
        label: "Challenge fee",
        kind: "price",
      });


        baseRows.push({
          icon: "reward",
          label: `Add-on: ${addOn.title}`,
          values,
        });
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

        {/* PLATFORM SELECTOR - compact, keeps original functionality */}
        <div className="mt-4 flex justify-center">
          <div className="flex max-w-full gap-1.5 overflow-x-auto rounded-[12px] border border-white/[0.07] bg-[#0d0e13] p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {availablePlatforms.map((item) => {
              const selected = item === platform;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPlatform(item)}
                  className={`shrink-0 rounded-[8px] px-4 py-2.5 text-[11px] font-bold transition sm:text-[12px] ${
                    selected
                      ? "bg-[#2b183b] text-[#cf94ff]"
                      : "text-white/42 hover:text-white/75"
                  }`}
                >
                  {platformLabels[item] ?? item}
                </button>
              );
            })}
          </div>
        </div>

        {/* EXCEL-MATCHED COMPARISON TABLE */}
        <div className="mt-12">
          <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-2 sm:min-w-0 sm:gap-2">
              {/* LEFT LABEL COLUMN — same row heights as every account card */}
              <div className="sticky left-0 z-20 w-[158px] shrink-0 bg-[#080a0e] pt-[109px] sm:relative sm:w-[210px] lg:w-[225px]">
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
              <div className="flex gap-2 sm:grid sm:grid-cols-3 sm:gap-2 lg:grid-cols-6">
                {sortedSizes.map((item) => {
                  const selected = item.value === accountSize;
                  const price = priceFor(item.value);

                  return (
                    <div
                      key={item.value}
                      className="relative w-[148px] shrink-0 pt-[14px] sm:w-auto sm:min-w-0"
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
                            } items-center justify-center border-b border-white/[0.045] px-2 text-center text-[10px] font-medium leading-4 text-white/76 sm:px-2.5 sm:text-[11px] sm:leading-5 lg:text-[12px]`}
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
                                <span className="text-[8px] font-semibold text-white/45 sm:text-[9px]">
                                  {formatMoneyExact(price.original)} -30% =
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

          <p className="mt-2 text-center text-[10px] text-white/30 sm:hidden">
            Swipe sideways to compare all account sizes →
          </p>
        </div>

        {/* PAYMENT OPTIONS */}
        <PaymentOptions />
      </div>
    </section>
  );
}

export default Challenges;