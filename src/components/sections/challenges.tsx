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
      className="flex h-[42px] w-[82px] items-center justify-center rounded-[8px] bg-white px-2"
      aria-label="UPI"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg"
        alt="UPI"
        className="block h-auto w-[70px] object-contain"
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
      <span className="flex h-11 w-[96px] shrink-0 items-center justify-center rounded-[12px] border border-white/[0.08] bg-[#151515] px-1.5 shadow-[0_7px_22px_rgba(0,0,0,.22)]">
        <img
          src={CRYPTO_LOGOS_DATA}
          alt="USDT, Ethereum, Bitcoin and BNB"
          className="block h-auto w-[86px] max-w-full object-contain"
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
      <span className="flex h-11 w-[102px] shrink-0 items-center justify-center rounded-[12px] border border-[#7655ff]/30 bg-[#151515] px-2 shadow-[0_7px_22px_rgba(118,85,255,.16)]">
        <img
          src={RISE_LOGO_DATA}
          alt="rise"
          className="block h-auto w-[86px] max-w-full object-contain"
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

  // Challenge fees use the exact 30% discounted values shown in the official Excel.
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
        <div className="mt-12 hidden sm:block">
          <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-2 sm:min-w-0 sm:gap-2">
              {/* LEFT LABEL COLUMN — same row heights as every account card */}
              <div className="sticky left-0 z-20 w-[245px] shrink-0 bg-[#080a0e] pt-[109px] sm:relative sm:w-[245px]">
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
                      className="relative w-[188px] min-w-[188px] shrink-0 pt-[14px]"
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