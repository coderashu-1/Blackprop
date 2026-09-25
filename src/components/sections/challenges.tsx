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
  { value: 100000, label: "100K", popular: true },
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
  Instant: {
    phase1: "N/A (already funded)",
    dailyLoss: "3%",
    maxLoss: "5% (Trailing)",
    inactivity: "5 days @ ½% per day",
    maxTime: "15% (no single day > 25% of profits)",
    flatForWeekend: "Available with Add-On",
    profitSplit: "80%",
    addOns: [
      {
        title: "Profit Share Boost",
        cost: "20% Cost",
        description: "Increases the funded account profit share.",
      },
      {
        title: "Hold Over Weekend",
        cost: "10% Cost",
        description: "Allows positions to remain open over the weekend.",
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
    dailyLoss: "5%",
    maxLoss: "6%",
    inactivity: "30 Days",
    maxTime: "No max time",
    profitSplit: "80%",
    addOns: [
      {
        title: "Remove Lock Upon Payout",
        cost: "25% Cost",
        description:
          "Disables the post-payout maximum drawdown lock at the account starting balance.",
      },
      {
        title: "Payout Protector",
        cost: "25% Cost",
        description:
          "Protects an eligible profit share in a funded account in the event of a hard breach.",
      },
    ],
  },

  "2 Step": {
    phase1: "8%",
    phase2: "5%",
    dailyLoss: "5%",
    maxLoss: "8% (Static)",
    inactivity: "30 Days",
    maxTime: "No max time",
    profitSplit: "80%",
    addOns: [
      {
        title: "100% Payout",
        cost: "20% Cost",
        description: "Unlocks a full 100% payout on the funded account.",
      },
      {
        title: "Remove Lock Upon Payout",
        cost: "25% Cost",
        description:
          "Disables the post-payout maximum drawdown lock at the account starting balance.",
      },
      {
        title: "Payout Protector",
        cost: "25% Cost",
        description:
          "Protects an eligible profit share in a funded account in the event of a hard breach.",
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
    dailyLoss: "+/- 3%",
    maxLoss: "6%",
    inactivity: "Weekend trading enabled",
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
    dailyLoss: "+/- 3%",
    maxLoss: "9%",
    inactivity: "Weekend trading enabled",
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
  phase1: "Assessment 6%",
  dailyLoss: "None",
  maxLoss: "Trailing, plan specific (Intraday Equity HWM)",
  inactivity: "30 Days",
  maxTime: "No max time",
  profitSplit: "80%",
  consistencyRequirement: "33.33% Assessment / 33.33% Funded",
  exposureLimits: "Plan specific",
  nonWithdrawableBuffer: "Non-withdrawable, funded phase only",
  lockUponPayout: "No",
  purchaseType: "Monthly Subscription",
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
    <span className="italic font-black tracking-tight text-[15px] sm:text-[17px]">
      VISA
    </span>
  );
}

function PayPalMark() {
  return (
    <span className="italic font-black tracking-tight text-[14px] sm:text-[16px]">
      PayPal
    </span>
  );
}

function BitcoinMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#f7931a" />
      <path
        fill="#ffffff"
        d="M22.3 14.1c.3-2.1-1.3-3.2-3.5-4l.7-2.8-1.7-.4-.7 2.7c-.5-.1-.9-.2-1.4-.3l.7-2.7-1.7-.4-.7 2.8c-.4-.1-.7-.2-1.1-.3v-.01l-2.3-.6-.4 1.8s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.2c0 .03.1.03.1.05l-.1-.03-1.1 4.5c-.1.2-.3.5-.8.4 0 0-1.2-.3-1.2-.3l-.9 1.9 2.2.5c.4.1.8.2 1.2.3l-.7 2.8 1.7.4.7-2.8c.5.1.9.2 1.4.3l-.7 2.8 1.7.4.7-2.8c2.9.5 5.1.3 6-2.3.7-2-0-3.2-1.5-4 1.1-.2 1.9-1 2.1-2.5Zm-3.9 5.4c-.5 2-4 1-5.1.7l.9-3.6c1.1.3 4.7.8 4.2 2.9Zm.5-5.4c-.5 1.8-3.4.9-4.3.7l.8-3.3c.9.2 4 .7 3.5 2.6Z"
      />
    </svg>
  );
}

function CardNetworkMark() {
  return (
    <span className="flex items-center" aria-hidden="true">
      <span className="h-6 w-6 rounded-full bg-white/55 sm:h-7 sm:w-7" />
      <span className="-ml-2.5 h-6 w-6 rounded-full bg-white/25 sm:h-7 sm:w-7" />
    </span>
  );
}

function AmexMark() {
  return (
    <span className="font-black tracking-tight text-[14px] sm:text-[15px]">
      AMEX
    </span>
  );
}

function UpiMark() {
  return (
    <span className="font-black tracking-tight text-[15px] sm:text-[16px]">
      UPI
    </span>
  );
}

const paymentOptions: {
  key: string;
  render: () => JSX.Element;
  highlight?: boolean;
}[] = [
  { key: "visa", render: VisaMark },
  { key: "paypal", render: PayPalMark },
  { key: "bitcoin", render: BitcoinMark, highlight: true },
  { key: "network", render: CardNetworkMark },
  { key: "amex", render: AmexMark },
  { key: "upi", render: UpiMark },
];

function PaymentOptions() {
  return (
    <div className="mt-14 sm:mt-16">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white/45 sm:text-[12px]">
        Payment Options
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        {paymentOptions.map((option) => {
          const Content = option.render;
          return (
            <div
              key={option.key}
              className={`flex h-[46px] w-[72px] items-center justify-center rounded-[10px] border text-white transition-all sm:h-[64px] sm:w-[124px] sm:rounded-[12px] ${
                option.highlight
                  ? "border-[#f7931a] bg-[linear-gradient(135deg,#3a2308,#1c1408)] shadow-[0_0_0_1px_rgba(247,147,26,.35),0_10px_26px_rgba(247,147,26,.18)]"
                  : "border-white/[0.10] bg-[#101117]"
              }`}
            >
              <span className="scale-75 sm:scale-100">
                <Content />
              </span>
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
      label: "Profit Target",
      value: (size: number) => (
        <div className="space-y-0.5 text-center">
          <div>
            <span className="text-white/55">{rules.phase2 ? "PHASE 1 " : ""}</span>
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

        {/* COMPARISON TABLE — horizontally scrollable on mobile, sticky label column */}
        <div className="mt-12">
          <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-3 sm:min-w-0 sm:gap-4">
              {/* LABELS — sticky on the left while the cards scroll */}
              <div className="sticky left-0 z-20 w-[132px] shrink-0 bg-[#080a0e] pt-[136px] sm:relative sm:w-[190px] lg:w-[210px]">
                {rows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`flex h-[58px] items-center gap-2.5 text-[12px] font-medium text-white/78 sm:gap-3.5 sm:text-[14px] ${
                      index === 0 ? "h-[64px]" : ""
                    }`}
                  >
                    <span className="text-white/55">
                      <RowIcon type={row.icon} />
                    </span>
                    <span>{row.label}</span>
                  </div>
                ))}
              </div>

              {/* CARDS */}
              <div className="flex gap-3 sm:grid sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
                {sortedSizes.map((item) => {
                  const selected = item.value === accountSize;
                  const price = priceFor(item.value);

                  return (
                    <div
                      key={item.value}
                      className="relative w-[150px] shrink-0 pt-[14px] sm:w-auto sm:min-w-0"
                    >
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
                        <div className="flex h-[95px] flex-col items-center justify-center border-b border-white/[0.055] px-3 text-center">
                          <span className={`text-[11px] font-bold uppercase tracking-[0.09em] ${selected ? "text-[#c58cff]" : "text-white/48"}`}>
                            Account
                          </span>
                          <strong className="mt-2 text-[20px] font-black tracking-[-0.035em] text-white">
                            {formatMoney(item.value)}
                          </strong>
                        </div>

                        {/* RULE VALUES */}
                        {rows.map((row, index) => (
                          <div
                            key={`${item.value}-${row.label}`}
                            className={`flex h-[58px] items-center justify-center border-b border-white/[0.045] px-2 text-center text-[11px] font-medium leading-4 text-white/76 sm:px-2.5 sm:text-[12px] sm:leading-5 ${
                              index === 0 ? "h-[64px]" : ""
                            }`}
                          >
                            {row.value(item.value)}
                          </div>
                        ))}

                        {/* PRICE + BUTTON */}
                        <div className="px-3 pb-5 pt-5 text-center sm:px-4">
                          <div className="flex items-end justify-center gap-2">
                            <span className={`text-[20px] font-black tracking-[-0.045em] sm:text-[22px] ${selected ? "text-[#c378ff]" : "text-white"}`}>
                              {formatMoney(price.sale)}
                            </span>
                            {price.original !== price.sale && (
                              <span className="mb-1 text-[11px] text-white/32 line-through sm:text-[12px]">
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