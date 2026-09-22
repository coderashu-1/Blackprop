"use client";

import { useMemo, useState } from "react";


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

// Short display label override for platform buttons/text — e.g. Forex
// shows "MTR" instead of the full "MatchTrader" name, per the live app.
const platformLabels: Partial<Record<Platform, string>> = {
  MatchTrader: "MTR",
};

/* ---------------------------------------------------------
   PLATFORMS AVAILABLE PER MARKET
   - Forex: DXTRADE, MTR (MatchTrader), cTrader, GooeyPro — matches
     the live purchase flow shown in the reference screenshot.
   - Crypto: DXTRADE, GooeyPro
   - Futures: DXFUTURE only, per the live purchase flow
--------------------------------------------------------- */

const platformsByMarket: Record<Market, Platform[]> = {
  Forex: ["DXTRADE", "MatchTrader", "cTrader", "GooeyPro"],
  Crypto: ["DXTRADE", "GooeyPro"],
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
  { value: 200000, label: "200K" },
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
    | "refund"
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

  if (type === "refund") {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={common} aria-hidden="true">
        <circle cx="10" cy="10" r="6.3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11.8 7.2H9.2a1.5 1.5 0 0 0 0 3h1.5a1.5 1.5 0 1 1 0 3H8M10 5.6v8.8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
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

function FooterIcon({ type }: { type: "spread" | "payout" | "infinity" }) {
  if (type === "spread") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4 18V13M8 18V9M12 18v-6M16 18V6M20 18V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="m4 11 4-4 4 2 8-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "payout") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8h2M16 16h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M8.2 8.2c-2.4-2.4-6.2-.7-6.2 2.7 0 3.7 4.3 5 6.5 2.5l7-7c2.3-2.3 6.5-.8 6.5 2.7 0 3.5-4.1 5-6.4 2.6l-2.2-2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const marketMeta: Record<Market, { title: string; badge: string }> = {
  Forex: { title: "FOREX/CFD", badge: "INSTANT" },
  Crypto: { title: "CRYPTO", badge: "PASS IN 1 DAY" },
  Futures: { title: "FUTURES", badge: "PASS IN 3 DAYS" },
};

function displayModel(model: Model) {
  if (model === "1 Step") return "1 Step";
  if (model === "2 Step") return "2 Steps";
  return "Instant";
}

function formatMoney(value: number) {
  return `$${value.toLocaleString("en-US")}`;
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

  function priceFor(value: number) {
    const original = getModelBasePrice(market, model, value);
    const sale = Math.max(1, Math.round(original * 0.6));

    return {
      original,
      sale,
      saving: original - sale,
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

  const rows = [
    {
      icon: "target" as const,
      label: rules.phase2 ? "Profit Target" : "Profit Target",
      value: (size: number) => (
        <div className="space-y-0.5 text-center">
          <div>
            <span className="text-white/55">PHASE 1 </span>
            <strong className="text-white">{rules.phase1}</strong>
          </div>
          {rules.phase2 && (
            <div>
              <span className="text-white/55">PHASE 2 </span>
              <strong className="text-white">{rules.phase2}</strong>
            </div>
          )}
        </div>
      ),
    },
    {
      icon: "daily" as const,
      label: "Max Daily Loss",
      value: (_size: number) => (
        <strong className="text-white">{rules.dailyLoss}</strong>
      ),
    },
    {
      icon: "loss" as const,
      label: "Max Loss",
      value: (_size: number) => (
        <strong className="text-white">{rules.maxLoss}</strong>
      ),
    },
    {
      icon: "clock" as const,
      label: "Inactivity Period",
      value: (_size: number) => (
        <strong className="text-white">{rules.inactivity}</strong>
      ),
    },
    {
      icon: "calendar" as const,
      label: "Trading Period",
      value: (_size: number) => (
        <strong className="text-white">{rules.maxTime}</strong>
      ),
    },
    {
      icon: "refund" as const,
      label: "Refund",
      value: (_size: number) => (
        <div className="flex items-center justify-center gap-2">
          <span className="text-white">Eligible</span>
          <span className="rounded border border-emerald-400/30 bg-emerald-400/[0.08] px-2 py-0.5 text-[11px] font-bold text-emerald-300">
            Terms
          </span>
        </div>
      ),
    },
    {
      icon: "reward" as const,
      label: "Rewards",
      value: (_size: number) => (
        <strong className="text-white">{rules.profitSplit}</strong>
      ),
    },
  ];

  return (
    <section
      id="challenges"
      className="relative overflow-hidden bg-[#080a0e] py-12 text-white sm:py-16 lg:py-20"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(126,38,209,.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-white/50 sm:text-[11px]">
            <span className="rounded-full border border-[#9b4cff]/40 bg-[#2a1239] px-3 py-1 font-black uppercase tracking-[0.08em] text-[#d09aff]">
              Configurator
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/35 sm:block" />
            <span>Institutional Funding Evaluation Phase</span>
          </div>

          <h2 className="mt-4 text-[2rem] font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-[2.6rem] lg:text-[3rem]">
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

        {/* MARKET TABS */}
        <div className="mx-auto mt-11 grid max-w-[900px] gap-3 md:grid-cols-3">
          {markets.map((item) => {
            const selected = item === market;
            const meta = marketMeta[item];

            return (
              <button
                key={item}
                type="button"
                onClick={() => handleMarketChange(item)}
                className={`relative flex min-h-[62px] items-center justify-between rounded-[14px] border px-5 transition-all duration-300 ${
                  selected
                    ? "border-[#a94cff] bg-[linear-gradient(135deg,#35164e,#1e1129)] shadow-[0_0_0_1px_rgba(166,72,255,.28),0_12px_35px_rgba(135,44,220,.18)]"
                    : "border-white/[0.09] bg-[#101117] hover:border-white/[0.16]"
                }`}
              >
                <span className="flex items-center gap-2 text-[14px] font-black sm:text-[15px]">
                  {item === "Forex" && (
                    <span className="text-[#ffd33d]">
                      <TinyBolt />
                    </span>
                  )}
                  {meta.title}
                </span>

                <span
                  className={`rounded-full border px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.04em] ${
                    selected
                      ? "border-[#bd6dff]/50 bg-[#a94cff] text-white"
                      : "border-white/[0.12] bg-white/[0.055] text-white/65"
                  }`}
                >
                  {meta.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* MODEL SELECTOR */}
        <div className="mt-7 flex justify-center">
          <div className="inline-flex rounded-[14px] border border-white/[0.10] bg-[#101117] p-1.5">
            {availableModels.map((item) => {
              const selected = item.name === model;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setModel(item.name)}
                  className={`min-w-[100px] rounded-[10px] px-5 py-3 text-[13px] font-bold transition-all sm:text-[14px] ${
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

        {/* COMPARISON TABLE */}
        <div className="mt-12 overflow-x-auto pb-2 [scrollbar-width:thin] [scrollbar-color:#3b2452_transparent]">
          <div className="min-w-[1180px]">
            <div className="flex gap-4">
              {/* LABELS */}
              <div className="w-[210px] shrink-0 pt-[136px]">
                {rows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`flex h-[58px] items-center gap-3.5 text-[14px] font-medium text-white/78 ${
                      index === 0 ? "h-[78px]" : ""
                    }`}
                  >
                    <span className="text-white/55">
                      <RowIcon type={row.icon} />
                    </span>
                    <span>{row.label}</span>
                  </div>
                ))}

                <div className="mt-6 px-1 text-[12px] leading-5 text-white/42">
                  One-time refundable fee
                  <br />
                  from
                </div>
              </div>

              {/* CARDS - badge is kept inside the scroll viewport to prevent clipping */}
              <div
                className="grid flex-1 gap-3"
                style={{
                  gridTemplateColumns: `repeat(${sortedSizes.length}, minmax(158px, 1fr))`,
                }}
              >
                {sortedSizes.map((item) => {
                  const selected = item.value === accountSize;
                  const price = priceFor(item.value);

                  return (
                    <div key={item.value} className="relative min-w-0 pt-[14px]">
                      {item.popular && (
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

                        {/* ACCOUNT HEADER */}
                        <div className="flex h-[120px] flex-col items-center justify-center border-b border-white/[0.055] px-3 text-center">
                          <span className={`text-[11px] font-bold uppercase tracking-[0.09em] ${selected ? "text-[#c58cff]" : "text-white/48"}`}>
                            Account
                          </span>
                          <strong className="mt-2 text-[24px] font-black tracking-[-0.035em] text-white">
                            {formatMoney(item.value)}
                          </strong>
                        </div>

                        {/* RULE VALUES */}
                        {rows.map((row, index) => (
                          <div
                            key={`${item.value}-${row.label}`}
                            className={`flex h-[58px] items-center justify-center border-b border-white/[0.045] px-2.5 text-center text-[12px] font-medium leading-5 text-white/76 ${
                              index === 0 ? "h-[78px]" : ""
                            }`}
                          >
                            {row.value(item.value)}
                          </div>
                        ))}

                        {/* PRICE + BUTTON */}
                        <div className="px-4 pb-5 pt-5 text-center">
                          <div className="flex items-end justify-center gap-2">
                            <span className={`text-[27px] font-black tracking-[-0.045em] ${selected ? "text-[#c378ff]" : "text-white"}`}>
                              {formatMoney(price.sale)}
                            </span>
                            {price.original !== price.sale && (
                              <span className="mb-1 text-[12px] text-white/32 line-through">
                                {formatMoney(price.original)}
                              </span>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              startCheckout(item.value);
                            }}
                            className="mt-4 flex min-h-[46px] w-full items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#8c27df,#b23cf6)] px-3 text-[13px] font-black text-white shadow-[0_10px_24px_rgba(156,44,231,.22)] transition hover:brightness-110"
                          >
                            Start now
                          </button>
                        </div>
                      </article>

                      {/* BOTTOM SUMMARY BOX */}
                      <div
                        className={`mt-3 flex h-[68px] flex-col items-center justify-center rounded-[12px] border text-center ${
                          selected
                            ? "border-[#8f3cce]/55 bg-[#15101e]"
                            : "border-white/[0.08] bg-[#0e1015]"
                        }`}
                      >
                        <strong className={`text-[15px] font-bold ${selected ? "text-[#bd78f3]" : "text-white"}`}>
                          {rules.profitSplit}
                        </strong>
                        <span className="mt-1 text-[10px] font-medium text-white/48">
                          Reward Terms
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE FOOTER */}
        <div className="mt-16 border-t border-[#7f3daa]/35 pt-8">
          <div className="grid gap-6 md:grid-cols-3 md:gap-0">
            <div className="flex items-center gap-4 md:border-r md:border-white/[0.07] md:px-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] border border-white/[0.09] bg-[#12131a] text-[#c47cff]">
                <FooterIcon type="spread" />
              </div>
              <div>
                <h3 className="text-[11px] font-black text-white">
                  Trade Institutional Spreads
                </h3>
                <p className="mt-1 text-[10px] text-white/45">
                  Raw pricing • Deep liquidity pools • Zero markup
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:border-r md:border-white/[0.07] md:px-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] border border-white/[0.09] bg-[#12131a] text-[#c47cff]">
                <FooterIcon type="payout" />
              </div>
              <div>
                <h3 className="text-[11px] font-black text-white">
                  Fast Bi-Weekly Payouts
                </h3>
                <p className="mt-1 text-[10px] text-white/45">
                  Automated on-demand payouts via Crypto or Wire
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:px-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] border border-white/[0.09] bg-[#12131a] text-[#c47cff]">
                <FooterIcon type="infinity" />
              </div>
              <div>
                <h3 className="text-[11px] font-black text-white">
                  Trade Without Expiration
                </h3>
                <p className="mt-1 text-[10px] text-white/45">
                  No calendar time pressure • Flexible evaluation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenges;
