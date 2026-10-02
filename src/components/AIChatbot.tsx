"use client";

import { useEffect, useRef, useState } from "react";

/* ==================================================================== */
/*  BlackProp AI — conversational FAQ bot                                */
/*                                                                      */
/*  The visitor types a question in their own words and the bot texts   */
/*  back the answer. No question lists, no API key, no backend.         */
/*                                                                      */
/*  Knowledge base built from:                                          */
/*   - General FAQ (BlackProp)            - Crypto General FAQ          */
/*   - CFD 1-Step FAQ                     - Crypto 1-Step FAQ           */
/*   - CFD 2-Step FAQ                     - Crypto 2-Step FAQ           */
/*   - CFD Instant Funding FAQ            - Futures 1-Step FAQ          */
/* ==================================================================== */

/* -------------------------------------------------------------------- */
/*  PLANS                                                               */
/* -------------------------------------------------------------------- */
export type PlanId =
  | "cfd1"
  | "cfd2"
  | "instant"
  | "crypto1"
  | "crypto2"
  | "futures"
  | "general" // General FAQ sheet (used when the visitor isn't sure of their plan)
  | "cryptogen"; // Crypto General FAQ (used when they say "crypto" without a step)

const PLAN_LABEL: Record<PlanId, string> = {
  cfd1: "CFD 1-Step",
  cfd2: "CFD 2-Step",
  instant: "Instant Funding",
  crypto1: "Crypto 1-Step",
  crypto2: "Crypto 2-Step",
  futures: "Futures 1-Step",
  general: "General rules",
  cryptogen: "Crypto plans",
};

const REAL_PLANS: PlanId[] = ["cfd1", "cfd2", "instant", "crypto1", "crypto2", "futures"];
const CFD: PlanId[] = ["general", "cfd1", "cfd2", "instant"];
const CRY: PlanId[] = ["cryptogen", "crypto1", "crypto2"];
const EVERY: PlanId[] = [...CFD, ...CRY, "futures"];

const TERMS_URL = "https://dashboardanalytix.com/client-terms-and-policies/";

/** Shown when someone asks for a human. Put your real support contact here. */
const SUPPORT_HINT =
  "I can't hand you over to a person from this chat, but our support team can help — reach them through the contact options on this site or in your trader dashboard.";

/* -------------------------------------------------------------------- */
/*  KNOWLEDGE BASE                                                      */
/*  t = topic   p = plans this answer applies to                        */
/*  q = the question as written in the source FAQ                       */
/*  alt = other ways of asking the same thing                           */
/*  k = extra words people use when they ask it   a = the reply         */
/*  A blank line (\n\n) in an answer starts a new chat bubble.          */
/* -------------------------------------------------------------------- */
type FAQ = { t: string; p: PlanId[]; q: string; alt?: string[]; k?: string; a: string };

const FAQS: FAQ[] = [
  /* ============ PLAN OVERVIEWS (rule tables) ============ */
  {
    t: "overview", p: ["cfd1"],
    q: "What are the rules of the CFD 1-Step plan?",
    k: "overview summary glance requirements details explain rules table all rules how does plan work",
    a: "Here's CFD 1-Step at a glance:\n• Profit target: 10% (no target once funded)\n• Daily Loss Limit: 5%\n• Max Drawdown: 6%, trailing — locks at your starting balance\n• Leverage: up to 20:1\n• Weekend: positions are closed Friday 3:45 PM EST\n• Inactivity: 30 days\n• Time limit: none\n• Profit split: 75% (90% with the add-on)",
  },
  {
    t: "overview", p: ["cfd2"],
    q: "What are the rules of the CFD 2-Step plan?",
    k: "overview summary glance requirements details explain rules table all rules how does plan work step 1 step 2 phase",
    a: "Here's CFD 2-Step at a glance:\n• Profit target: 8% in Step 1, 5% in Step 2 (none once funded)\n• Daily Loss Limit: 5%\n• Max Drawdown: 8%, static (doesn't trail)\n• Leverage: up to 50:1\n• 5 profitable trading days (min 0.5% each) to pass each phase\n• Min 5 trading days before a payout\n• Inactivity: 30 days\n• Time limit: none\n• Profit split: 80% (100% with the add-on)",
  },
  {
    t: "overview", p: ["instant"],
    q: "What are the rules of the Instant Funding plan?",
    k: "overview summary glance requirements details explain rules table all rules how does plan work",
    a: "Here's Instant Funding at a glance:\n• No assessment and no profit target\n• Daily Loss Limit: 3%\n• Max Drawdown: 5%, trailing — locks at your starting balance (and at payout)\n• Leverage: up to 50:1\n• Weekend: positions closed Friday 3:45 PM EST unless you have the Weekend Hold add-on\n• Inactivity: 30 days\n• To withdraw: 5 profitable days (min 0.5% each), 15% consistency rule, 3% profit buffer\n• Profit split: 80% (90% with the add-on)",
  },
  {
    t: "overview", p: ["crypto1"],
    q: "What are the rules of the Crypto 1-Step plan?",
    k: "overview summary glance requirements details explain rules table all rules how does plan work",
    a: "Here's Crypto 1-Step at a glance:\n• Profit target: 9% (none once funded)\n• Max Drawdown: 6%, static, equity-based\n• Daily Cap Limit: ±3%\n• Leverage: 5:1 on BTC & ETH, 2:1 on other coins\n• Inactivity: 30 days\n• Time limit: none\n• Funded profit share: 90%",
  },
  {
    t: "overview", p: ["crypto2"],
    q: "What are the Step 1, Step 2 and Funded requirements of the Crypto 2-Step plan?",
    k: "overview summary glance requirements details explain rules table all rules how does plan work phase",
    a: "Here's Crypto 2-Step at a glance:\n• Profit target: 6% in Step 1, 9% in Step 2 (none once funded)\n• Max Drawdown: 9%, static, equity-based — same at every stage\n• Daily Cap Limit: ±3%\n• Leverage: 5:1 on BTC & ETH, 2:1 on other coins\n• Inactivity: 30 days\n• Time limit: none\n• Funded profit share: 90%",
  },
  {
    t: "overview", p: ["futures"],
    q: "What account sizes and rules are available on the Futures plan?",
    k: "overview summary glance requirements details explain rules table all rules plan size 25k 50k 75k 100k 150k",
    a: "Here's Futures 1-Step at a glance (25K / 50K / 75K / 100K / 150K):\n• Growth target: 6% — $1,500 / $3,000 / $4,500 / $6,000 / $9,000\n• Daily drawdown: none\n• Max Drawdown: $1,500 (6%) / $2,000 (4%) / $2,498 (3.33%) / $3,000 (3%) / $4,500 (3%) — trails the intraday equity high-water mark\n• Consistency requirement: 33.33%\n• Funded non-withdrawable buffer: 6% / 4% / 3.33% / 3% / 3%\n• Profit split: 80%\n• Minimum trading days: none\n• Inactivity: 30 days\n• Contract limits (standard / micro): 1/10, 3/30, 6/60, 9/90, 12/120",
  },

  /* ============ WHAT IS THE PLAN ============ */
  {
    t: "what_is", p: ["instant"],
    q: "What is the Instant Funding Plan?",
    k: "meaning explain about",
    a: "Instant Funding lets you start on a fully funded account straight away — there's no assessment phase to pass first.",
  },
  {
    t: "what_is", p: ["futures"],
    q: "What is the 1 Step Futures Assessment Plan?",
    k: "meaning explain about key features",
    a: "It's a streamlined futures program on a monthly subscription. You trade one Assessment account — no multiple challenge phases — and once you pass, you move to a Funded account.\n\nTo pass: reach the growth target, keep your best trading day within 33.33% of total profits, and stay above the Max Trailing Loss. There's no minimum trading-day requirement, so a consistent trader can pass in as few as 3 trading days.\n\nOnce funded, you can request eligible gains subject to the same 33.33% consistency standard, the non-withdrawable profit buffer, review, and the 80% trader profit split.",
  },

  /* ============ HOW TO GET FUNDED ============ */
  {
    t: "get_funded", p: ["futures"],
    q: "How do I achieve a Funded account?",
    alt: ["How do I pass?"],
    k: "pass passing qualify become funded get funded complete assessment",
    a: "Your Assessment starts as soon as you buy the account. To qualify for a Funded account you need to reach the profit growth target, stay above the Max Trailing Loss, and keep your consistency ratio at or below 33.33%.\n\nOnce that's done, you'll be asked to complete KYC and sign the Trader Agreement. After approval, your Funded account is generated.",
  },
  {
    t: "get_funded", p: ["cfd1"],
    q: "How do I pass the assessment and get a Funded account?",
    alt: ["How do I pass?"],
    k: "pass passing qualify become funded achieve complete",
    a: "Hit the 10% profit target without breaching the 5% Daily Loss Limit or the 6% Max Trailing Drawdown — there's no time limit.\n\nAfter you pass, you complete KYC and the Trader Agreement, and your Funded Account is usually issued within 24–48 business hours.",
  },
  {
    t: "get_funded", p: ["cfd2"],
    q: "How do I pass the assessment and get a Funded account?",
    alt: ["How do I pass?"],
    k: "pass passing qualify become funded achieve complete phase",
    a: "Two phases: hit 8% in Step 1, then 5% in Step 2, without breaching the 5% Daily Loss Limit or the 8% Max Drawdown. You also need 5 profitable trading days (min 0.5% each) in each phase. No time limit.\n\nAfter you pass, you complete KYC and the Trader Agreement, and your Funded Account is usually issued within 24–48 business hours.",
  },
  {
    t: "get_funded", p: ["instant"],
    q: "How do I get a Funded account?",
    alt: ["How do I pass?"],
    k: "pass passing qualify become funded achieve complete assessment",
    a: "Nothing to pass on Instant Funding — you get a funded account as soon as your payment goes through, and the login details are emailed to you.",
  },
  {
    t: "get_funded", p: ["crypto1"],
    q: "How do I pass the assessment and get a Funded account?",
    alt: ["How do I pass?"],
    k: "pass passing qualify become funded achieve complete",
    a: "Hit the 9% profit target without breaching the 6% Max Drawdown — there's no time limit.\n\nAfter you pass, you complete KYC and the Trader Agreement, and your Funded Account is usually issued within 24–48 business hours.",
  },
  {
    t: "get_funded", p: ["crypto2"],
    q: "How do I pass the assessment and get a Funded account?",
    alt: ["How do I pass?"],
    k: "pass passing qualify become funded achieve complete phase",
    a: "Two steps: hit 6% in Step 1, then 9% in Step 2, without breaching the 9% Max Drawdown. No time limit.\n\nAfter you pass, you complete KYC and the Trader Agreement, and your Funded Account is usually issued within 24–48 business hours.",
  },

  /* ============ PROFIT TARGET ============ */
  {
    t: "target", p: ["cfd1"],
    q: "What is the profit target?",
    k: "growth target goal percent how much profit to pass",
    a: "The profit target is 10% in the Assessment. Once you're funded there's no profit target at all.",
  },
  {
    t: "target", p: ["cfd2"],
    q: "What is the profit target?",
    k: "growth target goal percent how much profit to pass step 1 step 2 phase",
    a: "8% in Step 1 and 5% in Step 2. Once you're funded there's no profit target.",
  },
  {
    t: "target", p: ["instant"],
    q: "What is the profit target?",
    k: "growth target goal percent how much profit to pass",
    a: "There isn't one — Instant Funding has no profit target. (You do need 3% profit before withdrawals open up; that's the profit buffer.)",
  },
  {
    t: "target", p: ["crypto1"],
    q: "What is the profit target?",
    k: "growth target goal percent how much profit to pass",
    a: "The profit target is 9% in the Assessment. Once you're funded there's no profit target.",
  },
  {
    t: "target", p: ["crypto2"],
    q: "What is the profit target?",
    k: "growth target goal percent how much profit to pass step 1 step 2 phase",
    a: "6% in Step 1 and 9% in Step 2. Once you're funded there's no profit target.",
  },
  {
    t: "target", p: ["futures"],
    q: "What is a Profit Target?",
    k: "growth target goal percent how much profit to pass",
    a: "The Growth Target is the profit you need to reach in the Assessment to qualify for a Funded account (along with the other Assessment requirements). It's 6% of your starting balance: $1,500 on 25K, $3,000 on 50K, $4,500 on 75K, $6,000 on 100K and $9,000 on 150K.\n\nAssessment profits aren't withdrawable.",
  },

  /* ============ PROFIT SPLIT ============ */
  {
    t: "split", p: ["general"],
    q: "What is the profit split?",
    alt: ["How much profit do I keep?"],
    k: "profit share percentage how much do i keep 80/20 payout percentage",
    a: "The profit split is 80/20 — you keep 80% of the gains you withdraw.",
  },
  {
    t: "split", p: ["cfd1"],
    q: "What is the profit split?",
    alt: ["How much profit do I keep?"],
    k: "profit share percentage how much do i keep 75 90 payout percentage",
    a: "The standard profit share is 75%. You can raise it to 90% with the Profit Share add-on (20% of the plan cost, chosen at purchase).",
  },
  {
    t: "split", p: ["cfd2"],
    q: "What is the profit split?",
    alt: ["How much profit do I keep?"],
    k: "profit share percentage how much do i keep 80/20 100 payout percentage",
    a: "80/20 — you keep 80%. With the 100% payout add-on (20% of the plan cost, chosen at purchase) you keep 100% of eligible gains.",
  },
  {
    t: "split", p: ["instant"],
    q: "What is the profit split?",
    alt: ["How much profit do I keep?"],
    k: "profit share percentage how much do i keep 80 90 payout percentage",
    a: "You keep 80%. That goes up to 90% if you bought the profit-share add-on (20% of the plan cost, chosen at purchase).",
  },
  {
    t: "split", p: CRY,
    q: "What is the profit split?",
    alt: ["How much profit do I keep?"],
    k: "profit share percentage how much do i keep 90/10 payout percentage",
    a: "The funded profit share is 90% — a 90/10 split in your favour.",
  },
  {
    t: "split", p: ["futures"],
    q: "What is the profit split?",
    alt: ["How much profit do I keep?"],
    k: "profit share percentage how much do i keep 80 payout percentage",
    a: "80% to you. The split is applied to the withdrawable amount — that's your profit above the non-withdrawable buffer.",
  },

  /* ============ ADD-ONS ============ */
  {
    t: "addons", p: ["cfd1"],
    q: "What add-ons are available at purchase?",
    alt: ["What add-ons can I buy?"],
    k: "addon addons add-on extras options upgrade checkout",
    a: "Three add-ons, all picked at checkout:\n• Hold Over Weekend (10% of cost) — removes the flat-for-weekend rule so you can keep positions open. Only crypto can be traded over the weekend.\n• Profit Share to 90% (20% of cost) — up from the standard 75%.\n• Payout Protector (25% of cost) — protects your eligible profit share on a funded account if you hard breach.",
  },
  {
    t: "addons", p: ["cfd2"],
    q: "What add-ons are available at purchase?",
    alt: ["What add-ons can I buy?"],
    k: "addon addons add-on extras options upgrade checkout",
    a: "Three add-ons, all picked at checkout:\n• Payout Protector (25% of cost) — protects your eligible profit share on a funded account if you hard breach.\n• Remove Lock Upon Payout (25% of cost) — stops your static drawdown from locking to your starting balance after a payout.\n• 100% Payout (20% of cost) — upgrades your payout from 80% to 100%.",
  },
  {
    t: "addons", p: ["instant"],
    q: "What add-ons are available at purchase?",
    alt: ["What add-ons can I buy?"],
    k: "addon addons add-on extras options upgrade checkout",
    a: "Three add-ons, all picked at checkout:\n• Hold Over Weekend (10% of cost) — lets you keep positions open over the weekend.\n• Profit Share to 90% (20% of cost) — up from the standard 80%.\n• Payout Protector (25% of cost) — protects your eligible profit share if you hard breach.",
  },
  {
    t: "addons", p: CRY,
    q: "What add-ons are available at purchase?",
    alt: ["What add-ons can I buy?"],
    k: "addon addons add-on extras options upgrade checkout",
    a: "One add-on: Payout Protector (25% of cost). It's optional, picked at checkout, and protects your eligible profit share on a funded account if you hard breach.",
  },
  {
    t: "addons", p: ["general"],
    q: "What add-ons are available at purchase?",
    alt: ["What add-ons can I buy?"],
    k: "addon addons add-on extras options upgrade checkout",
    a: "Payout Protector is the main one — it lets you still get paid on your gains if you breach. There's also an add-on (25% of the purchase price) that switches off \"Lock Upon Payout\".\n\nThe exact add-ons differ a little per plan, so tell me which plan you're on and I'll list them.",
  },

  /* ============ HARD vs SOFT BREACH ============ */
  {
    t: "breach_types", p: ["general", "cfd2"],
    q: "What is the difference between a Hard Breach and Soft Breach rule?",
    alt: ["What is a hard breach?", "What is a soft breach?"],
    k: "what constitutes a breach what causes how do i lose fail my account",
    a: "Soft breach: we close the trades that broke the rule, but you can carry on trading.\n\nHard breach: you violated the Daily Loss Limit or the Max Drawdown rule. That fails your Assessment or takes away your Funded Account.",
  },
  {
    t: "breach_types", p: ["cfd1"],
    q: "What is the difference between a Hard Breach and Soft Breach rule?",
    alt: ["What is a hard breach?", "What is a soft breach?"],
    k: "what constitutes a breach what causes how do i lose fail my account",
    a: "Soft breach: we close the trades that broke the rule, but you can carry on trading. Leaving trades open past Friday 3:45 PM EST is a soft breach, for example.\n\nHard breach: you violated the Daily Loss Limit or the Max Trailing Drawdown. That fails your Assessment or takes away your Funded Account. 30 days of inactivity also breaches the account.",
  },
  {
    t: "breach_types", p: ["instant"],
    q: "What is the difference between a Hard Breach and Soft Breach rule?",
    alt: ["What is a hard breach?", "What is a soft breach?"],
    k: "what constitutes a breach what causes how do i lose fail my account",
    a: "Soft breach: we close the trades that broke the rule, but you can carry on trading in your Instant Funded Account.\n\nHard breach: you violated the Daily Loss Limit, the Max Drawdown, or the Inactivity rule. A hard breach means your Funded Account is taken away.",
  },
  {
    t: "breach_types", p: CRY,
    q: "What constitutes a Breach?",
    alt: ["What is a hard breach?", "What is a soft breach?"],
    k: "hard breach soft breach difference what causes how do i lose fail my account",
    a: "A breach means you violated the Max Drawdown rule. If that happens you fail the Assessment or lose your Funded Account. 30 days of inactivity also breaches the account.\n\nGoing past the ±3% Daily Cap is handled differently: your positions are closed and the account is locked until the next trading day starts at 5 PM EST.",
  },
  {
    t: "breach_types", p: ["futures"],
    q: "What constitutes a Breach?",
    alt: ["What is a hard breach?", "What is a soft breach?"],
    k: "hard breach soft breach difference what causes how do i lose fail my account",
    a: "On the Futures plan you lose the account if you:\n• Fall to your Max Trailing Loss level\n• Go 30 days without an executed trade\n• Manually cancel the subscription\n\nTrading out-month contracts, or failing to close positions before a holiday market close, can also cost you the account.\n\nThere's no Daily Loss Limit, and missing the consistency requirement is not a breach by itself.",
  },

  /* ============ DAILY LOSS LIMIT ============ */
  {
    t: "dll", p: ["general", "cfd1", "cfd2"],
    q: "How do you calculate the Daily Loss Limit?",
    alt: ["What is the daily loss limit?", "What is the daily drawdown?"],
    k: "daily drawdown max daily loss per day lose in one day 5% reset equity balance",
    a: "It's the most your account can lose in a single trading day, and it resets every day at 5:00 PM EST. It's based on whichever is higher: the prior day's end-of-day balance (closed P&L only) or end-of-day equity (balance plus open P&L).\n\nSo if you finish the day with open trades in profit, equity is used. No open trades, or open trades at a loss — balance is used.\n\nExample: $100,000 account, 5% limit. At reset your balance is $100,000 but equity is $102,000, so 5% of $102,000 = $5,100 and you'd breach if equity touches $96,900 the next day. With no open profit it's based on $100,000, so the breach level is $95,000.",
  },
  {
    t: "dll", p: ["instant"],
    q: "How do you calculate the Daily Loss Limit?",
    alt: ["What is the daily loss limit?", "What is the daily drawdown?"],
    k: "daily drawdown max daily loss per day lose in one day 3% reset equity balance",
    a: "It's the most your account can lose in a single trading day — 3% on Instant Funding — and it resets every day at 5:00 PM EST. It's based on whichever is higher: the prior day's end-of-day balance (closed P&L only) or end-of-day equity (balance plus open P&L).\n\nSo if you finish the day with open trades in profit, equity is used. No open trades, or open trades at a loss — balance is used.\n\nExample: $100,000 account. At reset your balance is $100,000 but equity is $102,000, so 3% of $102,000 = $3,060 and you'd breach if equity touches $98,940 the next day. With no open profit it's based on $100,000, so the breach level is $97,000.",
  },
  {
    t: "dll", p: CRY,
    q: "Is there a Daily Loss Limit on crypto plans?",
    alt: ["What is the daily loss limit?", "What is the daily drawdown?"],
    k: "daily drawdown max daily loss per day lose in one day calculate",
    a: "Crypto plans don't list a Daily Loss Limit — they use a ±3% Daily Cap Limit instead.\n\nYour account can move up to 3% of your starting balance in either direction from the previous day's equity (resets 5 PM EST). Go past that and your positions are closed and the account is locked until the next trading day.\n\nExample: $100k starting balance, finishing the day at $101k equity — next day's limits are $101k ± $3k, so $98k to $104k.",
  },
  {
    t: "dll", p: ["futures"],
    q: "Is there a Daily Loss Limit?",
    alt: ["What is the daily loss limit?", "What is the daily drawdown?"],
    k: "daily drawdown max daily loss per day lose in one day calculate",
    a: "No — there's no Daily Loss Limit on the Futures plan. You just have to stay within the Max Trailing Loss at all times.",
  },

  /* ============ DAILY CAP (CRYPTO) ============ */
  {
    t: "daily_cap", p: CRY,
    q: "How do you calculate the 3% Daily Cap Limit for my crypto account?",
    alt: ["What is the daily cap limit?"],
    k: "what is daily cap limit bands trading band calculation",
    a: "The Daily Cap Limit is the most your crypto account can move in a day: 3% of your starting balance, up or down, measured from the previous day's equity. It resets at 5 PM EST.\n\nIf your account moves more than that in either direction, your positions are closed out and the account is locked until the new trading day starts at 5 PM EST.\n\nExample: $100k starting balance with a 3% Daily Cap. If you finish the day at $101k equity, the next day's limits are $101k ± $3k — so $98k to $104k.",
  },
  {
    t: "cap_exceed", p: CRY,
    q: "What happens if I exceed the 3% Cap Limit?",
    k: "hit go over pass cross daily cap gain loss disabled locked",
    a: "If your account goes past the 3% gain or loss for the day, the system automatically disables trading — it closes all open trades and cancels any pending orders. Trading stays restricted for the rest of that day.",
  },
  {
    t: "cap_resume", p: CRY,
    q: "When can I start trading again after exceeding the daily Cap Limit?",
    k: "resume unlock locked account restriction lifted trade again",
    a: "The restriction lifts at the start of the next trading day (5:00 PM EST), or once the account falls back inside the current day's Cap Limits.",
  },
  {
    t: "cap_reset", p: CRY,
    q: "When does my Daily Cap Limit reset?",
    k: "reset time new bands recalculated what time",
    a: "At 5:00 PM EST. You get new trading bands based on your equity at the end of the prior day, and the ±3% Cap Limit is recalculated against your updated balance for the new trading day.",
  },

  /* ============ MAX DRAWDOWN ============ */
  {
    t: "max_dd", p: ["general"],
    q: "How do you calculate the Max Drawdown (STATIC)?",
    alt: ["What is the max drawdown?", "What is the max loss?", "Is the drawdown trailing or static?"],
    k: "maximum drawdown overall loss limit total breach level static trailing 6%",
    a: "The Max Drawdown starts at 6% and it's static (based on closed balance), so it stays at the same value for as long as the account is active.\n\nExample: $100,000 start — you can draw down to $94,000. Grow the account to $102,000 in closed balance and the limit is still locked at $94,000. (You can still hit the daily drawdown separately.)\n\nAlso: every plan has \"Lock Upon Payout\" on by default. When you submit a payout request, the max drawdown locks permanently at your original starting balance — e.g. a $100,000 account grown to $110,000 can't fall below $100,000 after that or it's breached. You can buy an add-on (25% of the purchase price) to switch this off.",
  },
  {
    t: "max_dd", p: ["cfd1"],
    q: "How do you calculate the Maximum Trailing Drawdown?",
    alt: ["What is the max drawdown?", "What is the max loss?", "Is the drawdown trailing or static?"],
    k: "max drawdown overall loss limit total breach level static trailing 6% high water mark",
    a: "It starts at 6% and trails your CLOSED BALANCE (not equity) until you've made a 6% return. After that it stops trailing and locks permanently at your starting balance.\n\nExample on $100,000: the breach level starts at $94,000. Take your closed balance to $102,000 and it moves to $96,000. Take it to $106,000 and it locks at $100,000.\n\nFrom there, however high you go — even $170,000 — you'd only breach this rule if your equity comes back to $100,000. The 5% Daily Loss Limit still applies separately.",
  },
  {
    t: "max_dd", p: ["cfd2"],
    q: "How do you calculate the Max Drawdown?",
    alt: ["What is the max drawdown?", "What is the max loss?", "Is the drawdown trailing or static?"],
    k: "maximum drawdown overall loss limit total breach level static trailing 8%",
    a: "It's set at 8% of your starting balance and it's static — the breach level doesn't trail up as your balance grows. Account equity, including open P&L, is what's used to check whether you've violated it.\n\nExample: $100,000 start means a breach level of $92,000. Grow your closed balance to $102,000 and it's still $92,000. You breach if equity (including open P&L) reaches $92,000 — and you can still hit the Daily Loss Limit before that.\n\nNote: that's the drawdown before any payout. Once a payout is completed on a Funded Account it locks at your starting balance, unless you bought the Remove Lock Upon Payout add-on.",
  },
  {
    t: "max_dd", p: ["instant"],
    q: "How do you calculate the Maximum Trailing Drawdown?",
    alt: ["What is the max drawdown?", "What is the max loss?", "Is the drawdown trailing or static?"],
    k: "max drawdown overall loss limit total breach level static trailing 5% high water mark",
    a: "It starts at 5% of your starting balance and trails your highest CLOSED BALANCE, not equity. Once you've made a 5% return in closed balance it stops trailing and locks permanently at your starting balance. It also locks there when a withdrawal is approved, even if you haven't reached 5% yet. Equity (including open P&L) is what's used to check for a violation.\n\nExample on $100,000: breach level starts at $95,000. Closed balance $102,000 — breach level $97,000. Closed balance $103,000 — $98,000. Closed balance $105,000 — it locks at $100,000.\n\nAfter that, however high the account grows, you breach if equity reaches $100,000. You can still hit the 3% Daily Loss Limit before that.",
  },
  {
    t: "max_dd", p: ["cryptogen"],
    q: "How do you calculate the Max Drawdown (STATIC)?",
    alt: ["What is the max drawdown?", "What is the max loss?", "Is the drawdown trailing or static?"],
    k: "maximum drawdown overall loss limit total breach level static trailing",
    a: "Max drawdown is the most your account can draw down before you hard breach. When you open the account it's set at a defined % of your starting balance — it's static and doesn't trail.\n\nIt's 6% on Crypto 1-Step and 9% on Crypto 2-Step.",
  },
  {
    t: "max_dd", p: ["crypto1"],
    q: "How do you calculate the Maximum Drawdown?",
    alt: ["What is the max drawdown?", "What is the max loss?", "Is the drawdown trailing or static?"],
    k: "max drawdown overall loss limit total breach level static trailing 6%",
    a: "It's set at 6% and it's static, so it stays at the same value for as long as the account is active.\n\nExample: with a $100,000 starting balance you can draw down to $94,000 before breaching. If you take the account to $102,000 in closed balance, the limit is still $94,000 — however high the account goes, the drawdown level stays the same.",
  },
  {
    t: "max_dd", p: ["crypto2"],
    q: "How do you calculate the Maximum Drawdown?",
    alt: ["What is the max drawdown?", "What is the max loss?", "Is the drawdown trailing or static?"],
    k: "max drawdown overall loss limit total breach level static trailing 9%",
    a: "It's set at 9% and it's static, so it stays at the same value for as long as the account is active.\n\nExample: with a $100,000 starting balance you can draw down to $91,000 before breaching. If you take the account to $102,000 in closed balance, the limit is still $91,000 — however high the account goes, the drawdown level stays the same.",
  },
  {
    t: "max_dd", p: ["futures"],
    q: "How do you calculate the Max Drawdown (Maximum Trailing Loss)?",
    alt: ["What is the max drawdown?", "What is the max loss?", "Is the drawdown trailing or static?"],
    k: "max drawdown overall loss limit total breach level static trailing intraday equity high water mark",
    a: "The Max Trailing Loss is measured from the highest equity your account reaches intraday — not just the end-of-day balance. Each new intraday high pulls the breach level up behind it. Once the breach level reaches your starting balance, it locks there and never goes higher.\n\nExample: $100,000 account with a $3,000 Max Trailing Loss. Breach level starts at $97,000. If intraday equity rises to $101,200, the breach level becomes $98,200 — and stays there even if equity drops back afterwards.\n\nIf equity reaches $103,000, the breach level becomes $100,000. Reach $104,500 later and it's still $100,000 — locked at your starting balance.",
  },

  /* ============ LOCK UPON PAYOUT ============ */
  {
    t: "lock_payout", p: ["general"],
    q: "What is Lock Upon Payout?",
    k: "drawdown lock locks starting balance after payout withdrawal remove lock disable add-on",
    a: "\"Lock Upon Payout\" is on by default on all plans. When you submit a payout request, your max drawdown locks permanently at your original starting balance.\n\nExample: a $100,000 account grown to $110,000. After the payout request, the balance can't fall below $100,000 — if it does, the account is breached.\n\nYou can buy an add-on for 25% of the purchase price to disable it.",
  },
  {
    t: "lock_payout", p: ["cfd2"],
    q: "What is Lock Upon Payout?",
    k: "drawdown lock locks starting balance after payout withdrawal remove lock disable add-on",
    a: "When a payout is completed, the Max Drawdown on your Funded Account locks at your starting balance.\n\nIf you bought the Remove Lock Upon Payout add-on (25% of cost), it doesn't lock — your Max Drawdown stays fixed at 8% below your starting balance.\n\nLock Upon Payout only applies to Funded Accounts, not to either Assessment phase.",
  },
  {
    t: "lock_payout", p: ["cfd1", "instant"],
    q: "Does my drawdown lock when I take a payout?",
    k: "lock upon payout locks starting balance after withdrawal",
    a: "Yes. When a withdrawal is approved, your Max Trailing Drawdown locks in at your starting balance. It doesn't reset.",
  },
  {
    t: "lock_payout", p: CRY,
    q: "Does my drawdown lock when I take a payout?",
    k: "lock upon payout locks starting balance after withdrawal reset",
    a: "On crypto plans the Max Drawdown doesn't move when you withdraw — it doesn't reset, and it stays at its original static level.",
  },

  /* ============ WEEKEND HOLDING ============ */
  {
    t: "weekend", p: ["general"],
    q: "Can I hold positions over the weekend?",
    k: "keep trades open friday saturday sunday swing flat",
    a: "Yes, positions can be held over the weekend.",
  },
  {
    t: "weekend", p: ["cfd1"],
    q: "Can I hold positions over the weekend?",
    k: "keep trades open friday saturday sunday swing flat",
    a: "Not by default. All trades need to be closed by 3:45 PM EST on Friday — anything left open is closed automatically. That's only a soft breach, so you can keep trading when the markets reopen.\n\nIf you want to hold through the weekend, the Hold Over Weekend add-on (10% of cost, chosen at purchase) removes that rule. Only crypto can actually be traded over the weekend.",
  },
  {
    t: "weekend", p: ["cfd2"],
    q: "Can I hold positions over the weekend?",
    k: "keep trades open friday saturday sunday swing flat",
    a: "Yes, you can hold positions over the weekend. Only crypto can actually be traded during the weekend, though.",
  },
  {
    t: "weekend", p: ["instant"],
    q: "Can I hold positions over the weekend?",
    k: "keep trades open friday saturday sunday swing flat",
    a: "Not unless you bought the Hold Over Weekend add-on. Otherwise all trades must be closed by 3:45 PM EST on the last trading day of the week (usually Friday). If the market closes early or isn't open on Friday, it's on you to close before the weekend.\n\nAnything left open is closed automatically. That's a soft breach, so you can keep trading once the markets reopen.",
  },
  {
    t: "weekend", p: CRY,
    q: "Can I hold positions over the weekend?",
    k: "keep trades open friday saturday sunday swing flat",
    a: "Yes — you can hold positions over the weekend on crypto plans.",
  },
  {
    t: "weekend", p: ["futures"],
    q: "Can I hold positions over the weekend?",
    k: "keep trades open friday saturday sunday swing flat",
    a: "No. All positions have to be closed and all open orders cancelled at 15:55 CST each weekday, so nothing can be carried over the weekend.",
  },

  /* ============ LOT SIZE / CONTRACTS ============ */
  {
    t: "lot", p: CFD,
    q: "What is 1 lot equal to on the Trading Platform?",
    alt: ["What is the lot size?"],
    k: "lot size lots contract size ounces barrels notional gold silver oil index forex",
    a: "Here's what 1 lot equals:\n• Forex: $100k notional\n• Index: 1 contract (exceptions: SPX500 = 10 contracts, JPN225 = 500 contracts)\n• Cryptos: 1 coin\n• Silver: 5,000 ounces\n• Gold: 100 ounces\n• Oil: 100 barrels",
  },
  {
    t: "fut_contract", p: ["futures"],
    q: "What is a Futures contract?",
    k: "contract size units lot standardized e-mini es cl",
    a: "A futures contract represents a standardized amount of an underlying asset. For example, one E-mini S&P 500 contract (ES) is $50 times the index price, and one crude oil contract (CL) is 1,000 barrels.",
  },

  /* ============ INACTIVITY ============ */
  {
    t: "inactivity", p: ["general", "cfd1", "cfd2", ...CRY],
    q: "Is there a breach for inactivity?",
    k: "inactive not trading no trades break pause dormant 30 days idle month",
    a: "Yes. If there's no trading activity on your account for 30 consecutive days, it's treated as inactive and breached.",
  },
  {
    t: "inactivity", p: ["instant"],
    q: "Is there a breach for inactivity?",
    k: "inactive not trading no trades break pause dormant 30 days idle month",
    a: "Yes. If you don't place a trade at least once every 30 days, the account is treated as inactive and breached — and on Instant Funding that's a hard breach.",
  },
  {
    t: "inactivity", p: ["futures"],
    q: "Is there a breach for inactivity in the Assessment or Funded account?",
    k: "inactive not trading no trades break dormant 30 days idle month",
    a: "Yes. The inactivity period is 30 days in every phase — you need at least one executed trade every 30 days to keep the account.",
  },
  {
    t: "pause_inactivity", p: ["futures"],
    q: "Can I pause the inactivity timer at any account phase?",
    k: "freeze stop hold timer vacation break",
    a: "No — the inactivity timer can't be paused in any account phase.",
  },

  /* ============ TIME LIMIT / TRADING DAYS ============ */
  {
    t: "time_limit", p: ["cfd1", "cfd2", "crypto1", "crypto2"],
    q: "Is there a time limit to complete the Assessment?",
    alt: ["How long do I have to pass?"],
    k: "max time maximum deadline how long do i have days to pass duration expire",
    a: "No — there's no time limit to complete the Assessment (on 2-Step plans that goes for both phases). The 30-day inactivity rule still applies, though.",
  },
  {
    t: "time_limit", p: ["futures"],
    q: "Is there a time limit to complete the Assessment?",
    alt: ["How long do I have to pass?"],
    k: "max time maximum deadline how long do i have days to pass duration expire fast fastest quick quickest",
    a: "There's no minimum trading-day requirement, and you can pass in as few as 3 trading days. The plan runs on a monthly subscription that renews for as long as the account is active, and the 30-day inactivity rule applies.",
  },
  {
    t: "min_days", p: ["cfd2"],
    q: "Is there a minimum number of trading days required?",
    alt: ["How many days do I need to trade?"],
    k: "minimum trading days min days how many days before payout",
    a: "Yes. You need to place trades on at least 5 separate trading days before you can request a withdrawal from your Funded Account.",
  },
  {
    t: "min_days", p: ["futures"],
    q: "Is there a minimum number of trading days required?",
    alt: ["How many days do I need to trade?"],
    k: "minimum trading days min days how many days fastest",
    a: "No minimum trading days. In practice the 33.33% consistency requirement means you need at least 3 profitable trading days, so a consistent trader can pass in as few as 3 days.",
  },
  {
    t: "min_days", p: ["instant"],
    q: "Is there a minimum number of trading days required?",
    alt: ["How many days do I need to trade?"],
    k: "minimum trading days min days how many days before payout",
    a: "To withdraw, you need 5 profitable trading days, each with a gain of at least 0.5%.",
  },
  {
    t: "profitable_days", p: ["cfd2"],
    q: "What are the profitable trading days requirements to pass evaluation?",
    alt: ["How many profitable days do I need?"],
    k: "profitable days 0.5% half percent winning days minimum gain per day",
    a: "You need 5 profitable trading days, each with a gain of at least 0.5%, to pass — and that applies in both evaluation phases.",
  },
  {
    t: "profitable_days", p: ["instant"],
    q: "What are the profitable trading days requirements to withdraw on an Instant Funding account?",
    alt: ["How many profitable days do I need?"],
    k: "profitable days 0.5% half percent winning days minimum gain per day",
    a: "You need 5 profitable trading days, each with a gain of at least 0.5%, before you're eligible to withdraw.",
  },

  /* ============ CONSISTENCY ============ */
  {
    t: "consistency", p: ["cfd2"],
    q: "Is there a consistency rule on this plan?",
    k: "consistency requirement best day single day profit",
    a: "No. There's no consistency rule on either the Assessment or the Funded Account.",
  },
  {
    t: "consistency", p: ["instant"],
    q: "What is the Consistency Rule?",
    k: "consistency requirement 15% best day single day profit",
    a: "Instant Funding has a 15% consistency rule: no single trading day's profit can be more than 15% of your total profit over the life of the account.\n\nThe idea is to reward steady performance and risk management rather than one big day.",
  },
  {
    t: "consistency", p: ["futures"],
    q: "What is the Consistency Requirement?",
    k: "consistency rule 33.33% best day single day profit ratio",
    a: "It stops the target or a payout being reached off one unusually big day. The formula is (best trading day P&L ÷ total P&L) × 100, and it has to be 33.33% or lower in both the Assessment and the Funded account. That means you need at least 3 profitable trading days.\n\nExample 1: $100,000 account, $6,000 target, $2,000 a day for 3 days — best day $2,000 ÷ $6,000 = 33.33%. Requirement met.\n\nExample 2: $3,000 on one day and $1,000 on each of 3 others — $3,000 ÷ $6,000 = 50%. You're not breached, but you can't pass or request a payout yet. You'd need total profit of about $9,000 with the best day still at $3,000 or less.",
  },
  {
    t: "consistency_breach", p: ["futures"],
    q: "Do I lose my account if I do not meet the Consistency Requirement?",
    k: "fail consistency breach account closed violate consistency",
    a: "No. The Consistency Requirement isn't a breach rule by itself. You just have to meet it before you can pass the Assessment or request a payout from the Funded account.",
  },

  /* ============ PROFIT BUFFER ============ */
  {
    t: "buffer", p: ["instant"],
    q: "What is the Profit Buffer and how does it work?",
    k: "3% buffer non-withdrawable cushion",
    a: "The 3% profit buffer decides when withdrawals open up. You first need to make at least 3% on your starting balance; that first 3% stays in the account as a buffer, and only profit above it can be withdrawn.\n\nExample: on a $100,000 account, once the balance reaches $103,000 the first $3,000 stays as the buffer and anything on top can be requested. Profit under the buffer level can't be withdrawn.",
  },
  {
    t: "buffer", p: ["futures"],
    q: "What is the Profit Buffer?",
    k: "buffer non-withdrawable cushion",
    a: "On the Funded account, the Profit Buffer is the amount of profit that has to stay in the account and can't be withdrawn. It isn't a fee and nothing is deducted — it just stays there as a cushion above your Max Trailing Loss. It matches your max drawdown: 6% on 25K, 4% on 50K, 3.33% on 75K, and 3% on 100K and 150K.\n\nOnly profit above the buffer is withdrawable, and the 80% split applies to that amount.\n\nExample: $100,000 account, $3,000 buffer. Equity $103,000 — nothing to withdraw yet. Equity $104,000 — $1,000 withdrawable, so $800 to you. Equity $106,000 — $3,000 withdrawable, so $2,400 to you.",
  },

  /* ============ WITHDRAWALS ============ */
  {
    t: "withdraw_how", p: ["general", "cfd1", ...CRY],
    q: "How do I withdraw the gains in my Funded Account?",
    alt: ["How do I withdraw?", "How do I request a payout?"],
    k: "request payout process dashboard button withdraw profits how often frequency method",
    a: "You request it from your trader dashboard — click the Withdraw Profits button and enter the amount. You can do that any time, but not more than once every 30 days.\n\nOnce the request is approved we pay you out through the outbound payment solutions available at the time. Withdrawal methods and options can change.",
  },
  {
    t: "withdraw_how", p: ["instant"],
    q: "How do I withdraw the gains in my Instant Funded Account?",
    alt: ["How do I withdraw?", "How do I request a payout?"],
    k: "request payout process dashboard how often frequency method minimum withdrawal amount",
    a: "You request it from your trader dashboard once you've met the 15% Consistency Requirement and done 5 profitable trading days (min 0.5% each). Only profit above the 3% buffer is withdrawable, and KYC plus your Trader Agreement need to be completed before it's approved.\n\nWithdrawals are limited to one every 30 days, and the minimum is the greater of $100 or 1% of your starting balance. You keep 80% (90% with the profit-share add-on). When it's approved, your Max Trailing Drawdown locks at your starting balance.\n\nExample: you take $100,000 to $120,000 and withdraw $16,000. At 80% you receive $12,800 and we retain $3,200. Balance drops to $104,000 — the $3,000 buffer plus $1,000 — and you breach if equity hits $100,000. With the 90% add-on you'd receive $14,400.",
  },
  {
    t: "withdraw_when", p: ["general"],
    q: "When can I withdraw the gains in my Funded Account and how does that affect my Maximum Drawdown?",
    alt: ["When can I withdraw?", "When is my first payout?"],
    k: "first payout when can i get paid how soon how often payout drawdown after withdrawal",
    a: "Your first withdrawal can be requested at any time, on an 80/20 profit split. After that, once every 30 days. When it's approved we also take our share of the gains. The drawdown doesn't reset.\n\nExample: you take $100,000 to $120,000 and withdraw $16,000 — you receive $12,800 and we retain $3,200. The balance goes to $104,000 and your Max Drawdown locks at your starting balance, unless you bought the add-on that disables the lock.\n\nCareful: if you withdraw all your profits you'd violate the Max Drawdown rule and lose the account.",
  },
  {
    t: "withdraw_when", p: ["cfd1"],
    q: "When can I withdraw the gains in my funded account and how does that affect my Maximum Trailing Drawdown?",
    alt: ["When can I withdraw?", "When is my first payout?"],
    k: "first payout when can i get paid how soon how often payout drawdown after withdrawal",
    a: "Your first withdrawal can be requested at any time, and then once every 30 days. When it's approved we also take our share of the gains, and your Max Trailing Drawdown locks in at your starting balance. It doesn't reset.\n\nExample: you take $100,000 to $120,000 and withdraw $16,000 — you receive $12,000 and we retain $4,000. The balance goes to $104,000 with the drawdown locked at $100,000, so you'd have $4,000 of room before breaching.\n\nCareful: if you withdraw all your gains, the balance sits right on the locked drawdown level and you forfeit the Funded Account.",
  },
  {
    t: "withdraw_when", p: ["cfd2"],
    q: "When can I withdraw the gains in my funded account and how does that affect my Maximum Drawdown?",
    alt: ["When can I withdraw?", "When is my first payout?"],
    k: "first payout when can i get paid how soon how often payout drawdown after withdrawal how do i withdraw request",
    a: "You can request your first withdrawal once you've placed trades on at least 5 separate trading days in your Funded Account. There's no consistency requirement.\n\nIt's an 80/20 split, unless you bought the 100% payout add-on — then you receive 100% of the eligible gains. When a withdrawal is approved we also take our share, if any.\n\nOnce a payout is completed, your Max Drawdown locks at your starting balance, unless you bought the Remove Lock Upon Payout add-on — in that case it stays fixed at 8% below your starting balance.",
  },
  {
    t: "withdraw_when", p: ["instant"],
    q: "When can I request my first withdrawal?",
    alt: ["When can I withdraw?", "When is my first payout?"],
    k: "first payout when can i get paid how soon how often payout",
    a: "You can request your first withdrawal once:\n• You have profit above the 3% non-withdrawable buffer\n• You've met the 15% Consistency Requirement\n• You've completed 5 profitable trading days (min 0.5% each)\n• KYC is done and your Trader Agreement is signed\n\nThe first 3% of your starting balance always stays in the account. After the first one, you can withdraw once every 30 days, subject to the same requirements and the minimum withdrawal amount.",
  },
  {
    t: "withdraw_when", p: ["crypto1"],
    q: "When can I withdraw the gains in my funded account and how does that affect my Maximum Drawdown?",
    alt: ["When can I withdraw?", "When is my first payout?"],
    k: "first payout when can i get paid how soon how often payout drawdown after withdrawal",
    a: "Your first withdrawal can be requested at any time, subject to the profit split in your Trader Agreement, and then once every 30 days. When it's approved we also take our share. The drawdown doesn't reset when you withdraw.\n\nExample: you take $100,000 to $120,000 and withdraw $16,000 at 90/10 — you receive $14,400 and we retain $1,600. The balance goes to $104,000 and your Max Drawdown stays at $94,000, so you'd have $10,000 of room before breaching.\n\nEven if you withdraw all your gains, the Max Drawdown still stays at $94,000.",
  },
  {
    t: "withdraw_when", p: ["crypto2"],
    q: "When can I withdraw the gains in my funded account and how does that affect my Maximum Drawdown?",
    alt: ["When can I withdraw?", "When is my first payout?"],
    k: "first payout when can i get paid how soon how often payout drawdown after withdrawal",
    a: "Your first withdrawal can be requested at any time, subject to the profit split in your Trader Agreement, and then once every 30 days. When it's approved we also take our share. The drawdown doesn't reset when you withdraw.\n\nExample: you take $100,000 to $120,000 and withdraw $16,000 at 90/10 — you receive $14,400 and we retain $1,600. The balance goes to $104,000 and your Max Drawdown stays at its static 9% level ($91,000), so you'd have $13,000 of room before breaching.\n\nEven if you withdraw all your gains, the Max Drawdown stays where it is.",
  },
  {
    t: "withdraw_when", p: ["futures"],
    q: "When do I get the payout?",
    alt: ["When can I withdraw?", "When is my first payout?"],
    k: "first payout when can i withdraw get paid how soon how often withdrawal delay request how do i withdraw",
    a: "Assessment gains aren't withdrawable. Payouts open up once you have a Funded account and have made eligible gains in it.\n\nA payout request is subject to the 33.33% funded consistency requirement, the non-withdrawable profit buffer, payout review, and the 80% trader split.\n\nThere's no listed initial or subsequent withdrawal delay on this plan. Your account and subscription need to be active with every payout requirement met when the request is reviewed — and withdrawals aren't allowed from breached accounts.",
  },

  /* ============ FUNDED ACCOUNT ============ */
  {
    t: "funded_time", p: ["general", "cfd1", "cfd2", ...CRY],
    q: "How long does it take to receive my funded account?",
    alt: ["When do I get my funded account?"],
    k: "after passing how soon fast quick when will i get funded account issued wait 24 48 hours",
    a: "After you pass, you'll get an email with instructions for your KYC (Know Your Customer) verification and your Trader Agreement.\n\nOnce both are done, with any supporting documents provided, your Funded Account is created, funded and issued — typically within 24–48 business hours. You'll get a confirmation email when it's enabled.",
  },
  {
    t: "funded_time", p: ["instant"],
    q: "How long does it take to receive my Instant Funded Account?",
    alt: ["When do I get my funded account?"],
    k: "how soon fast quick when will i get account issued wait after payment demo live real notional",
    a: "Straight away — once your payment is complete you get an Instant Funding account backed by our capital, and an email with instructions to access it on the platform you chose at checkout.\n\nThe capital in the account is notional, so it may not match the amount actually on deposit with the Broker. That doesn't change how you trade: the same rules on soft breach, hard breach, Daily Loss Limit, Max Trailing Drawdown and position limits apply.",
  },
  {
    t: "demo", p: ["general", "cfd1", "cfd2", ...CRY],
    q: "Once I pass the Assessment am I provided with a demo or funded account?",
    alt: ["Is the funded account real or demo?"],
    k: "live real money simulated notional capital demo or live",
    a: "You get a funded account, backed by our capital.\n\nThe capital is notional, which means it may not match the amount actually on deposit with the Liquidity Provider — the account size sets your starting value and trading level, and the notional part is the difference between that and the actual capital. It doesn't affect your trading conditions in any way.",
  },
  {
    t: "funded_rules", p: ["general", "cfd1", "cfd2", ...CRY],
    q: "What are the rules for the funded account?",
    k: "funded account rules same as assessment different live rules",
    a: "Exactly the same as your Assessment account — the only difference is that a funded account has no profit target.",
  },
  {
    t: "forfeit", p: [...CFD, ...CRY],
    q: "If I have a hard breach in my Funded Account and there are gains in the account, do I forfeit those gains?",
    alt: ["Do I lose my profits if I breach?"],
    k: "lose profits after breach keep profit breached account gains forfeited",
    a: "Yes. If you hard breach your funded account, any gains built up in it are forfeited — unless you bought the Payout Protector add-on.",
  },
  {
    t: "forfeit", p: ["futures"],
    q: "If I breach my Funded account and there are gains, do I forfeit those gains?",
    alt: ["Do I lose my profits if I breach?"],
    k: "lose profits after breach keep profit breached account gains forfeited",
    a: "Withdrawals aren't permitted from breached accounts, so gains left in an account when it breaches can't be paid out.",
  },

  /* ============ PAYOUT PROTECTOR ============ */
  {
    t: "pp_what", p: [...CFD, ...CRY],
    q: "What is Payout Protector?",
    alt: ["How much does Payout Protector cost?"],
    k: "payout protector protection add-on",
    a: "Payout Protector is an optional add-on that means you still get a payout on the gains in your account even though you breached it — as long as all the other withdrawal conditions are met and the account isn't otherwise in violation of the Terms and Conditions.\n\nIt costs 25% of the plan price and is added at checkout.",
  },
  {
    t: "pp_how", p: [...CFD, ...CRY],
    q: "How does Payout Protector work?",
    k: "payout protector example explain",
    a: "Say you're trading a $100,000 Funded account and you're up $8,000 when you breach.\n\nWithout Payout Protector: the account is closed and the $8,000 is forfeited.\n\nWith Payout Protector: the account is still closed because of the breach, but you still receive your portion of that $8,000.",
  },
  {
    t: "pp_prevent", p: [...CFD, ...CRY],
    q: "Does Payout Protector prevent my account from breaching?",
    k: "payout protector stop save avoid breach keep account",
    a: "No. The account is still breached if you break a rule. Payout Protector doesn't remove or change any risk parameters — it only stops your gains from being forfeited when a breach happens.",
  },
  {
    t: "pp_required", p: [...CFD, ...CRY],
    q: "Is Payout Protector required?",
    k: "payout protector mandatory optional add later after purchase",
    a: "No, it's entirely optional. If you want it, it has to be selected at the time of purchase.",
  },

  /* ============ KYC ============ */
  {
    t: "kyc_start", p: ["general", "cfd1", "cfd2", ...CRY],
    q: "Do I need to complete KYC or sign a trader contract to start trading?",
    alt: ["Do I need KYC before I start trading?", "When do I do KYC?"],
    k: "kyc verification identity documents trader agreement when required",
    a: "Not to start the Assessment. KYC and the Trader Agreement come after you pass — you'll get an email with instructions, and once both are completed your Funded Account is issued.",
  },
  {
    t: "kyc_start", p: ["instant"],
    q: "Do I need to complete KYC or sign a trader contract to start trading in an Instant Funding Plan?",
    alt: ["Do I need KYC before I start trading?", "When do I do KYC?"],
    k: "kyc verification identity documents trader agreement when required",
    a: "Both a trading contract and KYC are required, but not to start trading — on Instant Funding you only need to complete them when you request a withdrawal.",
  },
  {
    t: "kyc_start", p: ["futures"],
    q: "Do I need to complete KYC or sign a trader contract to start trading in a Funded Futures Plan?",
    alt: ["Do I need KYC before I start trading?", "When do I do KYC?"],
    k: "kyc verification identity documents trader agreement when required",
    a: "You'll complete KYC and sign the Trader Agreement after you pass the Assessment, before you receive your Funded account.",
  },
  {
    t: "kyc_fail", p: ["instant"],
    q: "What happens if I do not pass KYC?",
    k: "fail kyc rejected verification failed denied",
    a: "If you don't pass KYC when you request a withdrawal, the withdrawal is rejected and your account is closed. It's worth making sure you can meet the KYC requirements before choosing Instant Funding.",
  },
  {
    t: "kyc_fail", p: ["futures"],
    q: "What happens if I do not pass KYC?",
    k: "fail kyc rejected verification failed denied",
    a: "If you don't pass KYC, your account will be closed.",
  },

  /* ============ PRICING / EXECUTION / COUNTERPARTY ============ */
  {
    t: "manipulate", p: ["general", "cfd1", "cfd2", ...CRY],
    q: "Do we manipulate the pricing or executions you receive in your Funded Account?",
    k: "manipulation rigged slippage fair spread markup control prices execution",
    a: "No. We don't have any control over the pricing from the liquidity provider or over the executions on your trades.",
  },
  {
    t: "manipulate", p: ["instant"],
    q: "Do we manipulate the pricing or executions you receive in your Instant Funded Account?",
    k: "manipulation rigged slippage fair spread markup control prices execution",
    a: "No. We operate at arm's length with the Broker — all pricing and executions come from the Broker and aren't changed by us. We also don't mark up the Broker's transaction costs through bid-offer spreads, markups/markdowns, commissions or swaps.",
  },
  {
    t: "manipulate", p: ["futures"],
    q: "Do we manipulate the pricing or executions you receive in your Funded Futures accounts?",
    k: "manipulation rigged slippage fair spread markup control prices execution",
    a: "No. We operate at arm's length with the liquidity providers and exchanges. All pricing and executions come from third parties and aren't changed by us. We also don't mark up transaction costs by adjusting bid-offer spreads, markups, markdowns, commissions or swaps.",
  },
  {
    t: "counterparty", p: [...CFD, ...CRY],
    q: "Who is the counterparty to my trades?",
    k: "counter party other side b-book a-book conflict of interest real market",
    a: "To manage risk and keep transaction costs down, we may offset market risk and act as the direct counterparty to certain trades in your account. Those trades are executed at prices provided by arm's-length third parties (the Liquidity Provider or Broker), so you get real market execution while we manage risk dynamically.\n\nYour gain or loss is calculated exactly the same either way. To be upfront: when we're the counterparty there's an inherent potential conflict of interest, because your trades don't result in a net gain or loss to us the way they would if we weren't the direct counterparty.",
  },
  {
    t: "counterparty", p: ["futures"],
    q: "Who is the counterparty to my trades?",
    k: "counter party other side simulated live exchange real market",
    a: "During the simulated phases, your trades are executed against the liquidity provided by the trading platform, designed to closely mimic real-market pricing and execution.\n\nOnce you have your live funded account, pricing and execution come directly from the exchange(s) you trade on.",
  },
  {
    t: "position_limits", p: CFD,
    q: "Am I subject to any position limits?",
    alt: ["What is the max position size?", "How many contracts can I trade?"],
    k: "max position size maximum lots how big can i trade margin open positions",
    a: "Your maximum position is set by your available margin.\n\nWe reserve the right to increase the margin requirement, limit the number of open positions you can hold in the Funded Account, and revise the drawdown levels at which trading is halted in response to market conditions. We or the Liquidity Provider/Broker can also refuse any order.",
  },
  {
    t: "position_limits", p: CRY,
    q: "Am I subject to any position limits?",
    alt: ["What is the max position size?", "How many contracts can I trade?"],
    k: "max position size maximum how big can i trade margin open positions",
    a: "Your maximum position is set by your available margin.\n\nWe reserve the right to increase the margin requirement, amend the leverage limits, or limit the number of open positions in a Funded Account at any time without prior notice, and to revise the drawdown levels at which trading is halted in response to market conditions. We or the Liquidity Provider can also refuse any order.",
  },
  {
    t: "position_limits", p: ["futures"],
    q: "Am I subject to any position limits?",
    alt: ["What is the max position size?", "How many contracts can I trade?"],
    k: "contract limits max contracts how many contracts position size micro e-mini standard exposure",
    a: "Yes. Each account has a maximum contract limit based on its starting balance — that's the total number of open contracts you can hold at once, across all products. Once you hit it, you can't open more until you reduce exposure. One E-mini counts as ten Micros.\n\nLimits (standard / micro):\n• $25K: 1 / 10\n• $50K: 3 / 30\n• $75K: 6 / 60\n• $100K: 9 / 90\n• $150K: 12 / 120\n\nSo a $50,000 account can hold 3 standard E-mini contracts or 30 micros in total, added up across every open position.",
  },

  /* ============ ACCOUNT / ELIGIBILITY ============ */
  {
    t: "own_account", p: ["general", "cfd1", "cfd2", ...CRY],
    q: "Do I have to use one of your accounts for the Assessment or can I use my own?",
    k: "my own broker account personal account existing account",
    a: "You need to use an account we provide. Our risk management software is synced with the accounts we create, which is how we track your performance and any rule violations in real time.",
  },
  {
    t: "countries", p: EVERY,
    q: "What Countries are accepted?",
    alt: ["Which countries are allowed?", "Is my country accepted?"],
    k: "country allowed available restricted banned eligible where from region location usa india nigeria uk canada ofac",
    a: "Traders from all countries can join, except OFAC-listed countries — subject to applicable laws and regulations, and unless otherwise limited at the Company's discretion.",
  },
  {
    t: "age", p: EVERY,
    q: "What is the minimum age I must be to be part of your program?",
    alt: ["How old do I have to be?"],
    k: "age requirement how old 18 years minor under",
    a: "You need to be at least 18, or the applicable minimum legal age in your country, to purchase an account.",
  },
  {
    t: "max_accounts", p: EVERY,
    q: "How many Assessments and/or Funded accounts may I have active at one time?",
    alt: ["How many accounts can I have?"],
    k: "multiple accounts max allocation maximum funding limit combine merge accounts simultaneously same size compounding scaling 1 million",
    a: "Here's how the limits work:\n• Evaluations: only one evaluation of a given account size and plan tier at a time, across all platforms. So one 100k One-Step plus one 100k Two-Step is fine — two 100k One-Steps is not, even on different platforms.\n• Max $1 million in active evaluation plans per person, made up of different sizes or tiers.\n• Max $1 million in active funded plans per person.\n\nIf you end up with two funded accounts of the same size, you can either keep one open at a time (the second goes live once the first is breached), or — if neither has been traded — combine them into one account of double the size.\n\nThere's no limit on compounding: start with up to $1 million of funding and grow it to any balance — $10 million, $20 million and beyond.",
  },
  {
    t: "dashboard", p: ["general", "cfd1", "cfd2", ...CRY],
    q: "Where do I track the progress of my account?",
    alt: ["Where is my dashboard?"],
    k: "dashboard monitor stats metrics see progress breach levels update how often",
    a: "In your trader dashboard — you get access when you purchase, and you can monitor both Assessment and Funded accounts there. It updates every time we calculate metrics, roughly every 60 seconds.\n\nKeeping an eye on your breach levels is your responsibility.",
  },
  {
    t: "dashboard", p: ["instant", "futures"],
    q: "Where do I track the progress of my account?",
    alt: ["Where is my dashboard?"],
    k: "dashboard monitor stats metrics see progress breach levels update how often",
    a: "In your trader dashboard — you get access when you purchase. It's updated in near real time as we calculate your account metrics.\n\nKeeping an eye on your breach levels is your responsibility.",
  },

  /* ============ PLATFORMS ============ */
  {
    t: "platform", p: ["general"],
    q: "What Platform can I trade on?",
    alt: ["Which platforms do you support?"],
    k: "platforms mt4 mt5 metatrader dxtrade matchtrader ctrader gooeytrade tradingview software app",
    a: "We're currently integrated with DXtrade, MatchTrader and cTrader, via GooeyTrade.",
  },
  {
    t: "platform", p: ["cfd1"],
    q: "What Platform can I trade on?",
    alt: ["Which platforms do you support?"],
    k: "platforms mt4 mt5 metatrader dxtrade matchtrader ctrader gooeypro tradingview software app",
    a: "We're currently integrated with DXtrade, MatchTrader, cTrader and GooeyPro.",
  },
  {
    t: "platform", p: ["cfd2"],
    q: "What Platform can I trade on?",
    alt: ["Which platforms do you support?"],
    k: "platforms mt4 mt5 metatrader dxtrade matchtrader ctrader gooeypro gooeytrade tradingview software app",
    a: "We're currently integrated with DXtrade, MatchTrader, cTrader and GooeyPro, via GooeyTrade.",
  },
  {
    t: "platform", p: ["instant"],
    q: "What Platform can I trade on?",
    alt: ["Which platforms do you support?"],
    k: "platforms mt4 mt5 metatrader dxtrade matchtrader ctrader tradingview software app",
    a: "We're currently integrated with DXtrade, MatchTrader and cTrader. You pick your platform at checkout.",
  },
  {
    t: "platform", p: CRY,
    q: "What Platform can I trade on?",
    alt: ["Which platforms do you support?"],
    k: "platforms mt4 mt5 metatrader dxtrade tradingview charts software app",
    a: "Crypto plans are hosted on DXtrade, with TradingView charts. All trades are executed there.",
  },
  {
    t: "platform", p: ["futures"],
    q: "What Platforms can I trade on?",
    alt: ["Which platforms do you support?"],
    k: "platforms dxfutures ninjatrader tradovate rithmic tradingview mobile app ios iphone android web software",
    a: "DXFutures only. You can use it on the web or through the Apple iOS mobile app: https://apps.apple.com/us/app/gooeytrade-futures-by-dx/id6739489964\n\nThird-party trading platforms aren't supported on DXFutures.",
  },

  /* ============ PRODUCTS ============ */
  {
    t: "products", p: ["general", "cfd1", "cfd2"],
    q: "What products can I trade?",
    k: "instruments assets symbols pairs markets forex gold indices commodities metals stocks what can i trade",
    a: "Anything the Liquidity Provider streams into the available platforms — that includes FX pairs, CFD indices, commodities, metals and cryptocurrencies. The list can change from time to time.",
  },
  {
    t: "products", p: ["instant"],
    q: "What products can I trade?",
    k: "instruments assets symbols pairs markets forex gold indices metals stocks what can i trade",
    a: "Any products offered by the Broker — that includes FX pairs, CFD indices, metals and cryptocurrencies. The list can change from time to time.",
  },
  {
    t: "products", p: CRY,
    q: "What products can I trade?",
    k: "instruments assets symbols pairs markets coins tokens bitcoin btc eth altcoins how many what can i trade",
    a: "The cryptocurrency products streamed by the Liquidity Provider into the platform — 26 different crypto products are offered. The Crypto Product Spec has the full list.",
  },
  {
    t: "products", p: ["futures"],
    q: "What products can I trade?",
    k: "instruments assets symbols markets exchanges cme comex nymex cbot list what can i trade",
    a: "Futures only, listed on CME, COMEX, NYMEX and CBOT. The supported products are:\n• Equity index: ES, MES, NQ, MNQ, YM, MYM, RTY, M2K\n• Currencies: 6E, 6B, 6J, 6C, 6S, 6A\n• Energy: CL, MCL, NG, HO, RB\n• Metals: GC, MGC, SI, SIL, PL, HG\n• Agriculture: ZC, ZS, ZM, ZL, ZW\n• Crypto: MBT, MET\n\nAsk me about any group (or symbol) and I'll give you the commissions and contract sizes.",
  },
  {
    t: "fut_equity", p: ["futures"],
    q: "Which equity index futures can I trade and what are the commissions?",
    k: "fee fees es mes nq mnq ym mym rty m2k sp sp500 nasdaq dow jones russell e-mini emini micro index indices commission contract units",
    a: "Equity index futures — commission per side / contract units:\n• E-mini S&P 500 (ES, CME): $2.18 / 50\n• Micro E-mini S&P 500 (MES, CME): $0.71 / 5\n• E-mini Nasdaq-100 (NQ, CME): $2.18 / 20\n• Micro E-mini Nasdaq-100 (MNQ, CME): $0.71 / 2\n• E-mini Dow Jones (YM, CBOT): $2.18 / 5\n• Micro E-mini Dow Jones (MYM, CBOT): $0.71 / 1\n• E-mini Russell 2000 (RTY, CME): $2.18 / 50\n• Micro E-mini Russell 2000 (M2K, CME): $0.71 / 5",
  },
  {
    t: "fut_currency", p: ["futures"],
    q: "Which currency futures can I trade and what are the commissions?",
    k: "fee fees 6e 6b 6j 6c 6s 6a euro fx british pound japanese yen canadian dollar swiss franc australian dollar forex commission contract units",
    a: "Currency futures (all CME) — $2.40 commission per side:\n• Euro FX (6E): 125,000 EUR\n• British Pound (6B): 62,500 GBP\n• Japanese Yen (6J): 12,500,000 JPY\n• Canadian Dollar (6C): 100,000 CAD\n• Swiss Franc (6S): 125,000 CHF\n• Australian Dollar (6A): 100,000 AUD",
  },
  {
    t: "fut_energy", p: ["futures"],
    q: "Which energy futures can I trade and what are the commissions?",
    k: "fee fees cl mcl ng ho rb crude oil micro crude natural gas heating oil rbob gasoline commission contract units",
    a: "Energy futures (all NYMEX) — commission per side / contract units:\n• Crude Oil (CL): $2.30 / 1,000\n• Micro Crude Oil (MCL): $0.86 / 100\n• Natural Gas (NG): $2.40 / 10,000\n• Heating Oil (HO): $2.30 / 42,000\n• RBOB Gasoline (RB): $2.30 / 42,000",
  },
  {
    t: "fut_metals", p: ["futures"],
    q: "Which metals futures can I trade and what are the commissions?",
    k: "fee fees gc mgc si sil pl hg gold micro gold silver micro silver platinum copper commission contract units",
    a: "Metals futures — commission per side / contract units:\n• Gold (GC, COMEX): $2.40 / 100\n• Micro Gold (MGC, COMEX): $0.86 / 10\n• Silver (SI, COMEX): $2.40 / 5,000\n• Micro Silver (SIL, COMEX): $1.36 / 500\n• Platinum (PL, NYMEX): $2.40 / 50\n• Copper (HG, COMEX): $2.40 / 12,500",
  },
  {
    t: "fut_ag", p: ["futures"],
    q: "Which agricultural futures can I trade and what are the commissions?",
    k: "fee fees zc zs zm zl zw corn soybeans soybean meal soybean oil wheat grains agriculture commission contract units",
    a: "Agricultural futures (all CBOT) — $2.90 commission per side:\n• Corn (ZC): 5,000\n• Soybeans (ZS): 5,000\n• Soybean Meal (ZM): 100\n• Soybean Oil (ZL): 60,000\n• Wheat (ZW): 5,000",
  },
  {
    t: "fut_crypto", p: ["futures"],
    q: "Which cryptocurrency futures can I trade and what are the commissions?",
    k: "fee fees mbt met micro bitcoin micro ether btc eth crypto commission contract units",
    a: "Cryptocurrency futures (CME) — commission per side / contract units:\n• Micro Bitcoin (MBT): $2.86 / 1\n• Micro Ether (MET): $0.46 / 5",
  },
  {
    t: "front_month", p: ["futures"],
    q: "Am I required to trade the front-month futures contract?",
    k: "front month frontmonth out-month expiry contract month rollover active contract which contract",
    a: "Yes. You have to trade the front-month contract for each product — it has the highest liquidity and open interest. In March, for example, the right ES contract is March (H), not July (N) or September (U).\n\nTrading out-month contracts is prohibited and can cost you the account.\n\nCME Group's Product Slate shows which contract is the active front month: https://www.cmegroup.com/markets/products.html",
  },

  /* ============ LEVERAGE ============ */
  {
    t: "leverage", p: ["general", "cfd2", "instant"],
    q: "What is the leverage?",
    k: "margin 1:50 50:1 how much leverage forex metals gold indices oil crypto",
    a: "Up to 50:1 on Forex and Metals, up to 10:1 on Indices, up to 5:1 on Oil, and up to 2:1 on Cryptocurrencies.",
  },
  {
    t: "leverage", p: ["cfd1"],
    q: "What is the leverage?",
    k: "margin 1:20 20:1 how much leverage forex metals gold indices oil crypto",
    a: "Up to 20:1 on Forex and Metals, up to 10:1 on Indices, up to 5:1 on Oil, and up to 2:1 on Cryptocurrencies.",
  },
  {
    t: "leverage", p: CRY,
    q: "What is the leverage?",
    k: "margin 5:1 2:1 how much leverage btc eth bitcoin altcoins",
    a: "Up to 5:1 on BTC and ETH. Every other cryptocurrency on the platform is 2:1.",
  },
  {
    t: "leverage", p: ["futures"],
    q: "What is the leverage?",
    k: "margin how much leverage",
    a: "The Futures plan doesn't list a leverage ratio — your exposure is controlled by contract limits instead.\n\nStandard / micro contracts: 1/10 on $25K, 3/30 on $50K, 6/60 on $75K, 9/90 on $100K and 12/120 on $150K.",
  },

  /* ============ TRADING HOURS ============ */
  {
    t: "hours", p: ["general", "cfd2"],
    q: "What are the trading hours?",
    k: "market hours session time open close when can i trade holidays",
    a: "Trading hours are generally set by the Liquidity Provider — we don't control them. You can check each product's hours like this:\n• DXtrade: right-click the symbol, select \"Instrument Info\"\n• MatchTrader: click the symbol to expand it, select \"Info\"\n• cTrader: open the Symbol Window and scroll to \"Market Hours\"\n\nKeep in mind holidays can affect the available hours.",
  },
  {
    t: "hours", p: ["cfd1"],
    q: "What are the trading hours?",
    k: "market hours session time open close when can i trade holidays friday",
    a: "Trading hours are generally set by the Liquidity Provider — we don't control them. You can check each product's hours like this:\n• DXtrade: right-click the symbol, select \"Instrument Info\"\n• MatchTrader: click the symbol to expand it, select \"Info\"\n• cTrader: open the Symbol Window and scroll to \"Market Hours\"\n\nBecause of the no-weekend-holding rule, we close all open trades at 3:45 PM EST on Fridays. Holidays can affect hours too — if a holiday falls on a Friday and the markets are closed, you need to close your positions before the close on the Thursday.",
  },
  {
    t: "hours", p: ["instant"],
    q: "What are the trading hours?",
    k: "market hours session time open close when can i trade holidays friday",
    a: "Trading hours are generally set by the Liquidity Provider — we don't control them. You can check each product's hours like this:\n• DXtrade: right-click the symbol, select \"Instrument Info\"\n• MatchTrader: click the symbol to expand it, select \"Info\"\n• cTrader: open the Symbol Window and scroll to \"Market Hours\"\n\nHolidays can affect the hours. And because of the no-weekend-holding rule, we'll attempt to close all open trades at 3:45 PM EST on Fridays — it's your responsibility to make sure they're closed, unless you have the Weekend Hold add-on.",
  },
  {
    t: "hours", p: CRY,
    q: "What are the trading hours?",
    k: "market hours session time open close when can i trade holidays 24/7 24 hours",
    a: "They're set by the cryptocurrency exchange or Liquidity Provider(s), and are generally open 24 hours. We don't control them, and holidays can affect availability.",
  },
  {
    t: "hours", p: ["futures"],
    q: "What are the trading hours for Futures products?",
    k: "market hours session time open close when can i trade globex 1700 1555 cst overnight hold",
    a: "You can place trades from the CME Globex open at 17:00 CST and hold them until 15:55 CST. On non-holiday trading days, all open positions and orders are closed or cancelled at 15:55 CST.",
  },
  {
    t: "not_close", p: ["futures"],
    q: "What happens if I do not close the trade?",
    k: "forgot to close left open auto close automatic liquidation end of day",
    a: "On regular trading days your positions are closed for you at 15:55 CST. Trades can't be held over the weekend.\n\nHolidays are different — auto-liquidation may not happen at the early close, so closing is on you.",
  },
  {
    t: "holiday", p: ["futures"],
    q: "What are the Holiday Trading Hours?",
    k: "holidays shortened week half day early close half-time market close",
    a: "During holiday trading hours, auto-liquidation may not happen at the half-time market close — you're responsible for closing your positions yourself.\n\nWatch market hours closely around holidays and shortened weeks. Failing to close before the market closes can cost you the account, in any phase.",
  },

  /* ============ COMMISSIONS ============ */
  {
    t: "commissions", p: CFD,
    q: "Do your accounts charge commissions?",
    alt: ["What are the commissions?"],
    k: "commission fees trading costs spreads swaps charged per lot",
    a: "Funded accounts get the same pricing and commissions that our Liquidity Provider charges other self-funded retail trading accounts.",
  },
  {
    t: "commissions", p: CRY,
    q: "How are commissions charged on Crypto plans?",
    alt: ["What are the commissions?"],
    k: "commission fees trading costs charged per trade 0.05% do your accounts charge commissions",
    a: "Crypto trading has a percentage-based commission: 0.05% of the total notional trade volume, charged per side (USD amount × 0.0005).",
  },
  {
    t: "commissions", p: ["futures"],
    q: "Do your accounts charge commissions?",
    alt: ["What are the commissions?"],
    k: "commission fees trading costs per contract per side round turn",
    a: "Assessment and Funded Futures accounts get the same pricing and commissions that the Liquidity Provider or exchanges charge other self-funded retail accounts.\n\nPer side, by group: equity index E-minis $2.18 (micros $0.71), currencies $2.40, energy $2.30–$2.40 (Micro Crude $0.86), metals $2.40 (Micro Gold $0.86, Micro Silver $1.36), agriculture $2.90, Micro Bitcoin $2.86 and Micro Ether $0.46.\n\nName a symbol and I'll give you the exact figure.",
  },
  {
    t: "market_data", p: ["futures"],
    q: "What are the Market Data Fees?",
    k: "data fee exchange fee real-time data cost included",
    a: "Market data fees cover the cost of real-time price data from the exchanges — and they're included in your purchase.",
  },
  {
    t: "cme", p: ["futures"],
    q: "How do I complete the CME market data attestation requirements?",
    k: "cme attestation non-professional professional agreement job title employer data subscriber",
    a: "Log into DXFutures to attest to the market data feeds agreement and confirm your status as Non-Professional. You may be asked for personal details such as your job title and employer name — those fields are mandatory but not validated, so you can enter values to complete the process.\n\nNote: CME Professional data subscriber status isn't supported. All users must qualify as Non-Professional under CME rules.",
  },

  /* ============ AUTOMATION / PROHIBITED / NEWS ============ */
  {
    t: "auto", p: [...CFD, "futures"],
    q: "Can I use an Automated Strategy?",
    k: "ea expert advisor bot robot algo algorithmic automation automated trading copy",
    a: "Yes — you can trade with an automated strategy, as long as it stays within our Prohibited Trading policy.",
  },
  {
    t: "auto", p: CRY,
    q: "Can I use an Automated Strategy?",
    k: "ea expert advisor bot robot algo algorithmic automation automated trading copy",
    a: "Unfortunately not. Crypto plans are hosted on DXtrade, which doesn't support Expert Advisors or other automated strategies.",
  },
  {
    t: "prohibited", p: ["cfd1", "cfd2", ...CRY],
    q: "What is the policy on Prohibited Trading Activity?",
    alt: ["What strategies are not allowed?", "What is prohibited?"],
    k: "prohibited banned forbidden not allowed strategies restricted cheating arbitrage hft latency insider front-running terms",
    a: "You can't use any strategy that's expressly prohibited by the Company or its Liquidity Providers. That includes:\n• Exploiting errors or latency in the pricing or platform\n• Using non-public or insider information\n• Front-running trades placed elsewhere\n• Trading that jeopardizes the Company's relationship with a Liquidity Provider or could get trades cancelled\n• Trading that creates regulatory issues for the Liquidity Provider\n• Third-party, off-the-shelf or \"pass the challenge\" strategies\n• Passing the assessment with one strategy, then using a different one on the funded account\n• Arbitraging an assessment account against another account, with us or any third party\n\nIf prohibited trading is detected, you're removed from the program and may forfeit the fees you paid. Your trading is also reviewed before a funded account is issued, and the Company can block any trader at its sole discretion.\n\nFull list in the Terms and Conditions: " + TERMS_URL,
  },
  {
    t: "prohibited", p: ["general"],
    q: "What is the policy on Prohibited Trading Activity?",
    alt: ["What strategies are not allowed?", "What is prohibited?"],
    k: "prohibited banned forbidden not allowed strategies restricted cheating arbitrage hft latency insider front-running terms",
    a: "You can't use any strategy that's expressly prohibited by the Company or its Liquidity Providers. That includes:\n• Exploiting errors or latency in the pricing or platform\n• Using non-public or insider information\n• Front-running trades placed elsewhere\n• Trading that jeopardizes the Company's relationship with a Liquidity Provider or could get trades cancelled\n• Trading that creates regulatory issues for the Liquidity Provider\n• Third-party, off-the-shelf or \"pass the challenge\" strategies\n• Passing the assessment with one strategy, then using a different one on the funded account\n• Arbitraging an assessment account against another account, with us or any third party\n• Opening a position within 3 minutes before or after a News Event\n\nIf prohibited trading is detected, you're removed from the program and may forfeit the fees you paid. Your trading is also reviewed before a funded account is issued, and the Company can block any trader at its sole discretion.\n\nFull list in the Terms and Conditions: " + TERMS_URL,
  },
  {
    t: "prohibited", p: ["instant"],
    q: "What is the policy on Prohibited Trading Activity?",
    alt: ["What strategies are not allowed?", "What is prohibited?"],
    k: "prohibited banned forbidden not allowed strategies restricted cheating arbitrage hft latency insider front-running terms",
    a: "You can't use any strategy that's expressly prohibited by the Company or its Liquidity Providers. That includes:\n• Exploiting errors or latency in the pricing or platform\n• Using non-public or insider information\n• Front-running trades placed elsewhere\n• Trading that jeopardizes the Company's relationship with a Liquidity Provider or could get trades cancelled\n• Trading that creates regulatory issues for the Liquidity Provider\n• Third-party, off-the-shelf or \"pass the challenge\" strategies\n• Arbitraging a funded account against another account, with us or any third party\n• Opening a position within 3 minutes before or after a News Event\n• Gambling-style trading — e.g. using max leverage on a big position hoping one price move does the job\n\nIf prohibited trading is detected, you're removed from the program and may forfeit the fees you paid. The Company can also block any trader at its sole discretion.\n\nFull list in the Terms and Conditions: " + TERMS_URL,
  },
  {
    t: "prohibited", p: ["futures"],
    q: "What is the policy on Prohibited Trading Activity?",
    alt: ["What strategies are not allowed?", "What is prohibited?"],
    k: "prohibited banned forbidden not allowed strategies restricted cheating arbitrage hft latency insider front-running terms cme rules",
    a: "You can't use any strategy that's expressly prohibited by the Company or its Liquidity Providers. That includes:\n• Exploiting errors or latency in the pricing or platform of the Liquidity Provider or exchange\n• Using non-public or insider information\n• Front-running trades placed elsewhere\n• Trading that jeopardizes the Company's relationship with a Liquidity Provider or exchange, or could get trades cancelled\n• Trading that creates regulatory issues for the Liquidity Provider or exchange\n• Third-party, off-the-shelf or \"pass the challenge\" strategies\n• Arbitraging a funded account against another account, with us or any third party\n• Gambling-style trading — e.g. using max leverage on a big position hoping one price move hits the target\n\nAll trading also has to follow CME Group rules and regulations.\n\nIf prohibited trading is detected, you're removed from the program and may forfeit the fees you paid. Your trading may be reviewed before a funded account is issued, and the Company can block any trader at its sole discretion. Full list: " + TERMS_URL,
  },
  {
    t: "gambling", p: ["instant", "futures"],
    q: "Is gambling or all-in trading allowed?",
    k: "gambling gamble all in full margin max leverage one trade risk management excessive risk yolo",
    a: "No — gambling isn't permitted. You're expected to manage risk responsibly, thinking about position size, trade duration and hedging.\n\nTaking excessive risk — like using maximum leverage to open large positions hoping to hit a profit target on a single price move — is strictly prohibited. The Terms and Conditions have the full Prohibition of Gambling Practices wording.",
  },
  {
    t: "news", p: ["general", "instant", ...CRY],
    q: "Can I trade during News Events?",
    k: "news trading nfp cpi fomc high impact economic release 3 minutes announcement",
    a: "Opening a position within 3 minutes before or after a News Event is prohibited.\n\nIf you do, the position can be closed and its P&L removed, your leverage can be reduced, or the account can be breached altogether. The Company has sole discretion over what counts as a News Event.\n\nThe rule is there to protect the integrity of the program — it isn't meant to penalize traders who inadvertently trade through a news event.",
  },
  {
    t: "news", p: ["cfd1", "cfd2"],
    q: "Can I trade during News Events?",
    k: "news trading nfp cpi fomc high impact economic release 3 minutes announcement",
    a: "Trading within 3 minutes before or after a News Event is prohibited.\n\nIf you're found to have traded during a News Event in the challenge phase, those trades can be removed, your leverage can be reduced, or the account can be breached altogether. The Company has sole discretion over what counts as a News Event.",
  },
  {
    t: "news", p: ["futures"],
    q: "Can I trade during News Events?",
    k: "news trading nfp cpi fomc high impact economic release announcement",
    a: "Yes — the futures program doesn't prohibit trading during news events.\n\nJust be extra careful: volatility jumps and liquidity drops around news. Staying on top of scheduled economic releases and managing your positions around them is entirely your responsibility.",
  },

  /* ============ BILLING / TAX / AFFILIATES ============ */
  {
    t: "statement", p: EVERY,
    q: "How will I see the charge on my Statement?",
    alt: ["What name shows on my bank statement?"],
    k: "bank statement card billing descriptor charge name dashboardanalytix transaction unknown charge",
    a: "The charge shows up under the name Dashboardanalytix.com.",
  },
  {
    t: "tax", p: EVERY,
    q: "How are taxes handled?",
    k: "tax taxes pay independent contractor 1099 report income",
    a: "When you trade a funded account for us, you're treated as an independent contractor — so you're responsible for any and all taxes on your gains.",
  },
  {
    t: "affiliate", p: EVERY,
    q: "How are affiliates credited?",
    k: "affiliate referral refer program partner",
    a: "Affiliates are credited when a user creates an account using a link or discount code provided by the affiliate.",
  },
  {
    t: "subscription", p: ["futures"],
    q: "How does the monthly subscription work?",
    alt: ["Can I cancel my subscription?", "Do I get a refund?"],
    k: "billing renew renewal recurring monthly fee cancel cancellation refund partial month price",
    a: "Billing starts on your purchase date and renews monthly for as long as the account is active and hasn't been breached — through both the Assessment and Funded phases.\n\nThe subscription ends if the account is breached or if you cancel it manually. Heads up: cancelling manually also breaches the account.\n\nThere are no refunds for partial months. Final subscription pricing can vary by platform; current pricing is specific to DXFutures.",
  },
  {
    t: "sizes", p: ["cfd2"],
    q: "What account sizes and pricing are available on this plan?",
    alt: ["How much does the account cost?", "What account sizes are available?"],
    k: "price cost fee how much account size sizes buy purchase one-time 5k 10k 25k 50k 100k 200k",
    a: "CFD 2-Step is a one-time-fee Assessment in these sizes:\n• $5,000 — $48\n• $10,000 — $95\n• $25,000 — $238\n• $50,000 — $428\n• $100,000 — $855\n• $200,000 — $2,088\n\nThe rules are the same for every size — only the profit target dollar amounts and the price scale with the account.",
  },
  {
    t: "sizes", p: ["futures"],
    q: "What account sizes and pricing are available on this plan?",
    alt: ["How much does the account cost?", "What account sizes are available?"],
    k: "price cost fee how much account size sizes buy purchase 25k 50k 75k 100k 150k",
    a: "Futures 1-Step comes in $25,000, $50,000, $75,000, $100,000 and $150,000 sizes.\n\nIt's billed as a monthly subscription. Final subscription pricing can vary by platform — current pricing is specific to DXFutures.",
  },
  {
    t: "reset", p: ["futures"],
    q: "Can I reset my account if I lose it?",
    k: "reset restart retry again new account after breach second chance",
    a: "No. If you breach the account for any reason, you'll need to purchase a new one.",
  },
];

/* -------------------------------------------------------------------- */
/*  CROSS-PLAN SUMMARIES                                                */
/*  Used when the visitor hasn't said which plan they're on, so the bot */
/*  can answer straight away instead of asking first.                   */
/* -------------------------------------------------------------------- */
const SUMMARY: Record<string, string> = {
  inactivity:
    "Yes, on every plan. If 30 days go by without a trade, the account is treated as inactive and breached.",
  auto:
    "Depends on the plan:\n• CFD plans and Futures: yes, as long as it stays within the Prohibited Trading policy\n• Crypto plans: no — they run on DXtrade, which doesn't support EAs or automated strategies",
  news:
    "Depends on the plan:\n• CFD and Crypto plans: no — you can't trade within 3 minutes before or after a News Event\n• Futures: yes, news trading isn't prohibited, but be careful with the volatility",
  weekend:
    "Depends on the plan:\n• CFD 2-Step and Crypto plans: yes\n• CFD 1-Step and Instant Funding: only with the Hold Over Weekend add-on — otherwise trades are closed Friday 3:45 PM EST\n• Futures: no, everything is closed at 15:55 CST each weekday",
  leverage:
    "It varies by plan:\n• CFD 2-Step and Instant Funding: up to 50:1 on Forex and Metals, 10:1 on Indices, 5:1 on Oil, 2:1 on Crypto\n• CFD 1-Step: up to 20:1 on Forex and Metals, 10:1 on Indices, 5:1 on Oil, 2:1 on Crypto\n• Crypto plans: 5:1 on BTC and ETH, 2:1 on other coins\n• Futures: contract limits instead of a leverage ratio",
  platform:
    "It varies by plan:\n• CFD 1-Step and 2-Step: DXtrade, MatchTrader, cTrader and GooeyPro\n• Instant Funding: DXtrade, MatchTrader and cTrader\n• Crypto plans: DXtrade (with TradingView charts)\n• Futures: DXFutures only",
  split:
    "It varies by plan:\n• CFD 1-Step: 75% (90% with the add-on)\n• CFD 2-Step: 80% (100% with the add-on)\n• Instant Funding: 80% (90% with the add-on)\n• Crypto 1-Step and 2-Step: 90%\n• Futures 1-Step: 80%",
  target:
    "It varies by plan:\n• CFD 1-Step: 10%\n• CFD 2-Step: 8% in Step 1, 5% in Step 2\n• Crypto 1-Step: 9%\n• Crypto 2-Step: 6% in Step 1, 9% in Step 2\n• Futures 1-Step: 6%\n• Instant Funding: no profit target\n\nFunded accounts never have a profit target.",
  max_dd:
    "It varies by plan:\n• CFD 1-Step: 6%, trailing (locks at starting balance)\n• CFD 2-Step: 8%, static\n• Instant Funding: 5%, trailing (locks at starting balance)\n• Crypto 1-Step: 6%, static\n• Crypto 2-Step: 9%, static\n• Futures 1-Step: 3% to 6% depending on account size, trailing the intraday equity high",
  dll:
    "It varies by plan:\n• CFD 1-Step and 2-Step: 5%\n• Instant Funding: 3%\n• Crypto plans: no Daily Loss Limit — a ±3% Daily Cap Limit instead\n• Futures: no Daily Loss Limit",
  commissions:
    "It varies by plan:\n• CFD plans: the same pricing and commissions our Liquidity Provider charges self-funded retail accounts\n• Crypto plans: 0.05% of notional volume, per side\n• Futures: per-contract commissions — e.g. $2.18 per side on E-minis and $0.71 on micros",
  products:
    "It varies by plan:\n• CFD plans: FX pairs, CFD indices, metals and crypto (plus commodities on 1-Step and 2-Step)\n• Crypto plans: 26 cryptocurrency products\n• Futures: futures listed on CME, COMEX, NYMEX and CBOT",
  dashboard:
    "In your trader dashboard — you get access as soon as you purchase. It refreshes roughly every 60 seconds (near real time on Instant Funding and Futures).\n\nKeeping an eye on your breach levels is your responsibility.",
  manipulate:
    "No. Pricing and executions come from the liquidity provider, broker or exchange — we don't control or modify them.",
  forfeit:
    "Yes — a hard breach on a funded account means the gains in it are forfeited, unless you bought the Payout Protector add-on (available on CFD and Crypto plans).",
};

/* -------------------------------------------------------------------- */
/*  LANGUAGE HELPERS — turn free text into comparable keywords          */
/* -------------------------------------------------------------------- */
const STOP = new Set(
  (
    "a an the is are am was were be been being do does did doing i me my mine we us our you your yours to of in on at for " +
    "with and or it its this that these those there here can could would should will shall may might what whats which who " +
    "if any some as by from have has had having get gets got about into than then so not no yes please tell know want need " +
    "like just also really very im ive id ur pls plz hi hello hey ok okay thanks thank bro sir dear guys team lol tho though " +
    "actually basically kindly wanna gonna let say said mean means am too still even ever one two single much " +
    "allowed allow permitted possible able dont doesnt cant cannot wont isnt arent didnt happen happens use used using " +
    // plan words are handled by plan detection, not by keyword matching
    "plan plans step steps cfd cfds futures future futur instant"
  ).split(" ")
);

const PHRASES: [RegExp, string][] = [
  [/\bexpert advisors?\b/g, " auto "],
  [/\bcash(ing)? ?out\b/g, " withdraw "],
  [/\b(get|getting|got) paid\b/g, " withdraw "],
  [/\bpay[- ]?outs?\b/g, " withdraw "],
  [/\bp ?& ?l\b/g, " pnl "],
  [/\bs ?& ?p\b/g, " sp "],
  [/\bhigh[- ]water[- ]mark\b/g, " hwm "],
  [/\bfront[- ]months?\b/g, " frontmonth "],
  [/\bout[- ]months?\b/g, " outmonth "],
  [/\bknow your customer\b/g, " kyc "],
  [/\bprofit[- ]shar(e|ing)\b/g, " profit split "],
  [/\bweek[- ]ends?\b/g, " weekend "],
  [/\bmaximum\b/g, " max "],
  [/\bminimum\b/g, " min "],
  [/\bdraw[- ]downs?\b/g, " drawdown "],
  [/\bmdd\b/g, " max drawdown "],
  [/\bdd\b/g, " drawdown "],
  [/\bdll\b/g, " daily loss limit "],
  [/\btrailing loss\b/g, " trailing loss drawdown "],
  [/\badd[- ]?ons?\b/g, " addon "],
  [/\be[- ]?minis?\b/g, " emini "],
  [/\b(blow(n|ing|s)?|blew)( up)?\b/g, " breach "],
  [/\bterms (and|&) conditions\b/g, " terms "],
  [/\breal[- ]time\b/g, " realtime "],
  [/\bwhat can i trade\b/g, " product trade "],
  [/\bhow much (is|are|does|for)\b/g, " price "],
  [/\bmanipulat\w*( the| my| your)? (price|prices|pricing)\b/g, " manipulate quotes "],
];

const SYN: Record<string, string> = {
  withdrawal: "withdraw", withdrawn: "withdraw", withdrew: "withdraw", payout: "withdraw", cashout: "withdraw",
  gain: "profit", earning: "profit",
  ea: "auto", eas: "auto", bot: "auto", robot: "auto", algo: "auto", automat: "auto", automation: "auto", automatic: "auto", algorithmic: "auto",
  nation: "country", nationality: "country", region: "country", location: "country", locat: "country", resident: "country", residence: "country",
  mt4: "platform", mt5: "platform", metatrader: "platform", software: "platform",
  instrument: "product", asset: "product", symbol: "product", pair: "product",
  verification: "kyc", verify: "kyc", verifi: "kyc", identity: "kyc",
  referral: "affiliate", refer: "affiliate",
  violat: "breach", violation: "breach",
  evaluation: "assess", eval: "assess", challeng: "assess", assessment: "assess",
  goal: "target", held: "hold", old: "age", taxe: "tax", taxes: "tax", news: "news",
  cost: "price", pric: "price", price: "price",
  nfp: "news", cpi: "news", fomc: "news",
  requirement: "requir", exceed: "exceed", exce: "exceed",
  calculat: "calc", calculation: "calc",
  bitcoin: "btc", ethereum: "eth", ether: "eth",
  buy: "purchas", bought: "purchas",
  cancellation: "cancel", cancell: "cancel",
  using: "use", lost: "lose", losing: "lose", paid: "pay",
};

function stem(w: string): string {
  if (w.length <= 3) return w;
  let s = w;
  if (s.length > 4 && s.endsWith("ies")) s = s.slice(0, -3) + "y";
  else if (s.endsWith("sses")) s = s.slice(0, -2);
  else if (s.endsWith("s") && !/(ss|us|is)$/.test(s)) s = s.slice(0, -1);
  if (s.length > 5 && s.endsWith("ing")) s = s.slice(0, -3);
  else if (s.length > 4 && s.endsWith("ed")) s = s.slice(0, -2);
  if (s.length > 4 && s.endsWith("e")) s = s.slice(0, -1);
  return s;
}

function canon(w: string): string {
  if (SYN[w]) return SYN[w];
  const s = stem(w);
  return SYN[s] ?? s;
}

function tokenize(text: string): string[] {
  let t = " " + text.toLowerCase().replace(/[’‘`]/g, "'") + " ";
  for (const [re, rep] of PHRASES) t = t.replace(re, rep);
  t = t.replace(/'s\b/g, " ").replace(/'/g, "");
  const out: string[] = [];
  for (const raw of t.split(/[^a-z0-9]+/)) {
    if (raw.length < 2 || /^\d+$/.test(raw) || STOP.has(raw)) continue;
    const c = canon(raw);
    if (c.length >= 2 && !STOP.has(c) && !out.includes(c)) out.push(c);
  }
  return out;
}

/* -------------------------------------------------------------------- */
/*  SEARCH INDEX — built once when the module loads                     */
/* -------------------------------------------------------------------- */
type Indexed = { variants: { tokens: Set<string>; weight: number }[]; qk: Set<string>; a: Set<string> };

const IDF = new Map<string, number>();
const UNKNOWN_WEIGHT = 3.2; // weight of a word the knowledge base has never seen
const MATCH_THRESHOLD = 0.5;

const INDEX: Indexed[] = (() => {
  const rows: Indexed[] = FAQS.map((f) => {
    const variants = [f.q, ...(f.alt ?? [])].map((text) => ({ tokens: new Set(tokenize(text)), weight: 1 }));
    const qk = new Set(tokenize(f.k ?? ""));
    variants.forEach((v) => v.tokens.forEach((tok) => qk.add(tok)));
    return { variants, qk, a: new Set(tokenize(f.a)) };
  });
  // document frequency is counted per topic, so a question that exists for
  // six plans doesn't water down its own keywords
  const topics = new Map<string, Set<string>>();
  FAQS.forEach((f, i) => {
    const bag = topics.get(f.t) ?? new Set<string>();
    rows[i].qk.forEach((tok) => bag.add(tok));
    topics.set(f.t, bag);
  });
  const df = new Map<string, number>();
  topics.forEach((bag) => bag.forEach((tok) => df.set(tok, (df.get(tok) ?? 0) + 1)));
  df.forEach((n, tok) => IDF.set(tok, Math.log(1 + topics.size / n)));
  rows.forEach((r) =>
    r.variants.forEach((v) => {
      let w = 0;
      v.tokens.forEach((tok) => (w += IDF.get(tok) ?? UNKNOWN_WEIGHT));
      v.weight = w || 1;
    })
  );
  return rows;
})();

function scoreEntry(i: number, tokens: string[]): number {
  const row = INDEX[i];
  let total = 0;
  let matched = 0;
  for (const tok of tokens) {
    const w = IDF.get(tok) ?? UNKNOWN_WEIGHT;
    total += w;
    if (row.qk.has(tok)) matched += w;
    else if (row.a.has(tok)) matched += w * 0.3;
  }
  if (!total) return 0;
  // how much of the FAQ's own question (or its closest rephrasing) the message covers
  let closeness = 0;
  for (const v of row.variants) {
    let hit = 0;
    for (const tok of tokens) if (v.tokens.has(tok)) hit += IDF.get(tok) ?? UNKNOWN_WEIGHT;
    closeness = Math.max(closeness, hit / v.weight);
  }
  return (matched / total) * (0.7 + 0.3 * closeness);
}

/* -------------------------------------------------------------------- */
/*  PLAN DETECTION                                                      */
/* -------------------------------------------------------------------- */
const isCryptoSet = (p: PlanId[] | null) => !!p && p.every((x) => CRY.includes(x));
const isCfdSet = (p: PlanId[] | null) => !!p && p.every((x) => CFD.includes(x));

function detectPlans(low: string, prev: PlanId[] | null): PlanId[] | null {
  const one = /\b(1|one|single)[\s-]*(step|phase)\b/.test(low);
  const two = /\b(2|two|dual)[\s-]*(step|phase)\b/.test(low);
  const twoHint = /\b(step|phase)[\s-]*(2|two)\b|\bsecond (step|phase)\b/.test(low);
  const futures = /\bfutures?\b/.test(low);
  const instant = /\binstant\b/.test(low);
  const cfd = /\bcfds?\b|\b(forex|fx)[\s-]+(plan|account|challenge|program)s?\b/.test(low);
  const bare = low.replace(/[^a-z0-9 ]/g, " ").trim();
  const crypto =
    /\bcrypto(currency)?\b/.test(low) &&
    (one ||
      two ||
      /\bcrypto(currency)?[\s-]*(only|plan|account|challenge|program|evaluation|assessment|general)s?\b/.test(low) ||
      /^(the |for |on |and |what about |how about )*crypto(currency)?( one| ones)?$/.test(bare));

  if (futures) return ["futures"];
  if (instant) return ["instant"];
  if (crypto) return one ? ["crypto1"] : two ? ["crypto2"] : [...CRY];
  if (cfd) return one ? ["cfd1"] : two ? ["cfd2"] : [...CFD];
  if (one) return isCryptoSet(prev) ? ["crypto1"] : isCfdSet(prev) ? ["cfd1"] : ["cfd1", "crypto1", "futures"];
  if (two) return isCryptoSet(prev) ? ["crypto2"] : isCfdSet(prev) ? ["cfd2"] : ["cfd2", "crypto2"];
  if (twoHint && (!prev || prev.length > 1)) {
    return isCryptoSet(prev) ? ["crypto2"] : isCfdSet(prev) ? ["cfd2"] : ["cfd2", "crypto2"];
  }
  return null;
}

/** Remove plan names from a message so they don't get matched as keywords. */
function stripPlanWords(low: string): string {
  return low
    .replace(/\b(1|one|single|2|two|dual)[\s-]*(step|phase)s?\b/g, " ")
    .replace(/\binstant([\s-]*(funding|funded|fund))?\b/g, " ")
    .replace(/\bfutures?\b/g, " ")
    .replace(/\bcfds?\b/g, " ")
    .replace(/\b(plan|plans|program|challenge)\b/g, " ");
}

const realOf = (p: PlanId[] | null) => REAL_PLANS.filter((x) => (p ?? EVERY).includes(x));

/** Human name for whatever plan(s) the conversation is about. */
function describePlans(p: PlanId[] | null): string | null {
  if (!p) return null;
  const real = realOf(p);
  if (real.length === 1) return PLAN_LABEL[real[0]];
  if (isCryptoSet(p)) return "Crypto plans";
  if (isCfdSet(p)) return "CFD plans";
  if (real.length === 0) return null;
  return real.map((x) => PLAN_LABEL[x]).join(" / ");
}

function scopeName(real: PlanId[]): string {
  const has = (ids: PlanId[]) => ids.every((x) => real.includes(x));
  const cfdAll = has(["cfd1", "cfd2", "instant"]);
  const cryAll = has(["crypto1", "crypto2"]);
  if (cfdAll && cryAll && real.length === 5) return "CFD and Crypto plans";
  if (cfdAll && real.length === 3) return "CFD plans";
  if (cryAll && real.length === 2) return "Crypto plans";
  return real.map((x) => PLAN_LABEL[x]).join(", ");
}

/* -------------------------------------------------------------------- */
/*  THE BRAIN                                                           */
/* -------------------------------------------------------------------- */
export type BotContext = {
  /** plan(s) the chat is currently about; null = not known yet */
  plans: PlanId[] | null;
  /** question waiting for the visitor to tell us their plan */
  pending: string | null;
  /** last question we answered, for "what about futures?" follow-ups */
  last: string | null;
};

export type BotReply = { parts: string[]; chips: string[]; ctx: BotContext };

export const EMPTY_CONTEXT: BotContext = { plans: null, pending: null, last: null };

const PLAN_CHIPS = REAL_PLANS.map((p) => PLAN_LABEL[p]);
const NOT_SURE = "Not sure";
const bubbles = (text: string) => text.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);

type Result = {
  kind: "answer" | "summary" | "ask" | "na" | "none";
  parts: string[];
  chips: string[];
  score: number;
  topic: string;
};
const NONE: Result = { kind: "none", parts: [], chips: [], score: 0, topic: "" };

function entryReply(f: FAQ, plans: PlanId[] | null): string[] {
  const parts = bubbles(f.a);
  const talkingAbout = realOf(plans);
  const covers = talkingAbout.every((p) => f.p.includes(p));
  const real = REAL_PLANS.filter((p) => f.p.includes(p));
  // the answer only applies to some of the plans we could be talking about — say which
  if (!covers && real.length > 0 && real.length < REAL_PLANS.length) {
    parts[0] = `${scopeName(real)}:\n${parts[0]}`;
  }
  return parts;
}

/** If a plan's FAQ doesn't have a topic, these closely related ones answer it. */
const RELATED: Record<string, string[]> = {
  withdraw_how: ["withdraw_when"],
  withdraw_when: ["withdraw_how"],
  profitable_days: ["min_days"],
  min_days: ["profitable_days"],
  what_is: ["overview"],
  get_funded: ["overview"],
  funded_rules: ["overview"],
  time_limit: ["overview"],
  target: ["overview"],
  split: ["overview"],
  demo: ["funded_time"],
  kyc_start: ["funded_time"],
  lock_payout: ["withdraw_when"],
  lot: ["fut_contract"],
  fut_contract: ["lot"],
};

const GENERIC_WORDS = new Set(["how", "when", "where", "long", "work", "trad", "account"]);

function answerQuery(query: string, plans: PlanId[] | null): Result {
  const tokens = tokenize(stripPlanWords(query.toLowerCase()));
  if (!tokens.some((t) => !GENERIC_WORDS.has(t))) return NONE;
  const cands = plans ?? EVERY;
  const inScope = (f: FAQ) => f.p.some((p) => cands.includes(p));
  const scores = FAQS.map((_, i) => scoreEntry(i, tokens));

  let global = -1, local = -1;
  scores.forEach((sc, i) => {
    if (global < 0 || sc > scores[global]) global = i;
    if (inScope(FAQS[i]) && (local < 0 || sc > scores[local])) local = i;
  });
  if (global < 0 || scores[global] < MATCH_THRESHOLD) return NONE;
  const localScore = local >= 0 ? scores[local] : 0;

  // Pick the topic.
  //  - near-tie: stay with the wording from this plan's own FAQ
  //  - otherwise the best topic overall, as long as this plan's version of it is a fair match
  //  - if this plan doesn't have the topic, a closely related one
  let topic = FAQS[global].t;
  let score = scores[global];
  if (local >= 0 && localScore >= score - 0.05) {
    topic = FAQS[local].t;
    score = localScore;
  } else {
    const own = FAQS.map((f, i) => (f.t === topic && inScope(f) ? scores[i] : -1));
    const ownBest = Math.max(...own);
    if (ownBest < 0) {
      const sibling = (RELATED[topic] ?? []).find((t) => FAQS.some((f) => f.t === t && inScope(f)));
      if (sibling) topic = sibling;
    } else if (ownBest < MATCH_THRESHOLD) {
      if (localScore < MATCH_THRESHOLD) return NONE;
      topic = FAQS[local].t;
      score = localScore;
    }
  }

  const group = FAQS.filter((f) => f.t === topic && inScope(f));
  const topicsToOffer = [topic, ...(RELATED[topic] ?? [])];
  const plansWithAnswer = REAL_PLANS.filter((p) => FAQS.some((f) => topicsToOffer.includes(f.t) && f.p.includes(p)));

  if (group.length === 0) {
    const name = describePlans(plans) ?? "that plan";
    return {
      kind: "na",
      parts: [
        plansWithAnswer.length
          ? `I don't have a specific answer on that for ${name}. I do have it for the plans below, if that helps.`
          : `I don't have a specific answer on that for ${name}.`,
      ],
      chips: plansWithAnswer.map((p) => PLAN_LABEL[p]),
      score,
      topic,
    };
  }

  if (group.length === 1) return { kind: "answer", parts: entryReply(group[0], plans), chips: [], score, topic };

  // "crypto" without a step: the Crypto General FAQ answers for the family
  if (plans && isCryptoSet(plans)) {
    const fam = group.find((f) => f.p.includes("cryptogen"));
    if (fam) return { kind: "answer", parts: bubbles(fam.a), chips: [], score, topic };
  }

  const chips = plansWithAnswer.filter((p) => cands.includes(p)).map((p) => PLAN_LABEL[p]);
  if (!plans && group.some((f) => f.p.includes("general"))) chips.push(NOT_SURE);

  if (!plans && SUMMARY[topic]) {
    return {
      kind: "summary",
      parts: [...bubbles(SUMMARY[topic]), "Which plan are you on? I'll give you the full detail."],
      chips,
      score,
      topic,
    };
  }
  return { kind: "ask", parts: ["That one depends on the plan. Which one are you on?"], chips, score, topic };
}

const RE = {
  greet: /^(h+i+|hello+|hey+|heya|yo|hola|namaste|good (morning|afternoon|evening|day))( there| bot| team| guys)?[\s!.,]*$/,
  thanks: /^(ok(ay)?[\s,]*)?(thanks|thank you|thank u|thx|ty|tysm|cheers|appreciate it)( so much| a lot| very much| bro| man)?[\s!.,]*$/,
  bye: /^(bye|goodbye|see (you|ya)|cya|good night|later)[\s!.,]*$/,
  affirm: /^(ok|okay|k|kk|cool|nice|great|got it|alright|all right|perfect|understood|makes sense|good|fine|sure|awesome)[\s!.,]*$/,
  identity: /\b(are|r) (you|u) (a |an )?(real|human|bot|ai|robot|person)\b|\bwho (are|r) (you|u)\b|\bwhat are (you|u)\b/,
  help: /^(help|menu|options|what can (you|u) (do|help( me)? with))[\s?!.]*$/,
  human: /\b(human|live agent|real person|live chat|support team|customer (support|service|care)|(talk|speak|chat) (to|with) (someone|somebody|a person|an agent|support|a human)|contact (you|support|us)|phone number|whatsapp|telegram|discord)\b/,
  notSure: /^(i'?m |im |i am )?(not sure|unsure|no idea|not sure yet)\b|^(i )?(don'?t|do not) know\b|^idk\b|^general\b|^(any|either)( of them| one)?[\s!.]*$/,
  followUp: /^((and|so|ok|okay)[\s,]+)?((what|how) about|same for|for|on|in|with|and)\b/,
  aboutPlan: /\b(what|tell|explain|about|how|info|details?|overview|describe|rules?|have|offer|available|is there)\b/,
  howWork: /^(so[\s,]+)?(how (does|do) (it|this|that) work|explain( it| that)?|tell me more|more info|more details|details)[\s?!.]*$/,
};

const FALLBACK =
  "Hmm, I don't have an answer for that one. I can help with plan rules — drawdown, daily loss limit, payouts, leverage, platforms, add-ons and so on. Could you put it another way?";

/**
 * Pure function: give it what the visitor typed plus the conversation
 * context, get back the bot's bubbles, quick-reply chips and new context.
 */
export function getBotReply(input: string, ctx: BotContext): BotReply {
  const raw = input.trim();
  const low = raw.toLowerCase().replace(/[’‘`]/g, "'");
  const next: BotContext = { ...ctx };

  /* --- "not sure which plan" --- */
  if (RE.notSure.test(low)) {
    if (ctx.pending) {
      const pseudo: PlanId = isCryptoSet(ctx.plans) ? "cryptogen" : "general";
      const r = answerQuery(ctx.pending, [pseudo]);
      next.pending = null;
      if (r.kind === "answer") {
        next.last = ctx.pending;
        return { parts: ["No problem — here's the general rule:", ...r.parts], chips: [], ctx: next };
      }
      return {
        parts: ["No problem. That one really does depend on the plan — you'll find your plan name in your dashboard or your purchase email."],
        chips: [],
        ctx: next,
      };
    }
    return { parts: ["No worries — just ask, and I'll tell you if the answer depends on the plan."], chips: [], ctx: next };
  }

  /* --- did they mention a plan? --- */
  const mentioned = detectPlans(low, ctx.plans);
  if (mentioned) next.plans = mentioned;
  const content = tokenize(stripPlanWords(low)).filter((t) => !["crypto", "cryptocurrency", "forex", "fx", "how", "account", "general"].includes(t));

  /* --- small talk --- */
  if (!mentioned) {
    if (RE.greet.test(low)) return { parts: ["Hey! 👋 What would you like to know?"], chips: ctx.plans ? [] : PLAN_CHIPS, ctx: next };
    if (RE.thanks.test(low)) return { parts: ["Anytime! Anything else you want to know?"], chips: [], ctx: next };
    if (RE.bye.test(low)) return { parts: ["Take care — good luck with your trading! 👋"], chips: [], ctx: next };
    if (RE.affirm.test(low)) return { parts: ["👍 Anything else?"], chips: [], ctx: next };
    if (RE.howWork.test(low)) {
      const real = realOf(ctx.plans);
      const f = ctx.plans && real.length === 1 ? FAQS.find((x) => x.t === "overview" && x.p.includes(real[0])) : undefined;
      if (f) return { parts: bubbles(f.a), chips: [], ctx: next };
    }
    if (RE.help.test(low) || RE.howWork.test(low)) {
      return {
        parts: [
          "Ask me anything about our plans — drawdown rules, daily loss limits, payouts and profit split, leverage, platforms, news trading, add-ons…",
          "Tell me which plan you're on and I'll be specific.",
        ],
        chips: ctx.plans ? [] : PLAN_CHIPS,
        ctx: next,
      };
    }
    if (RE.identity.test(low)) {
      return { parts: ["I'm BlackProp AI — an automated assistant. I can answer questions about our plans, rules and payouts."], chips: [], ctx: next };
    }
  }

  /* --- message is only a plan name ("CFD 2-Step", "what about futures?") --- */
  if (mentioned && content.length === 0) {
    const followQuery = ctx.pending ?? (RE.followUp.test(low) ? ctx.last : null);
    if (followQuery) {
      const r = answerQuery(followQuery, next.plans);
      if (r.kind !== "none") {
        next.pending = r.kind === "answer" ? null : followQuery;
        if (r.kind === "answer") next.last = followQuery;
        return { parts: r.parts, chips: r.chips, ctx: next };
      }
    }
    next.pending = null;
    const real = realOf(next.plans);
    if (real.length > 1) {
      return { parts: ["Which one exactly?"], chips: real.map((p) => PLAN_LABEL[p]), ctx: next };
    }
    const plan = real[0];
    if (RE.aboutPlan.test(low)) {
      const f = FAQS.find((x) => x.t === "what_is" && x.p.includes(plan)) ?? FAQS.find((x) => x.t === "overview" && x.p.includes(plan));
      if (f) return { parts: bubbles(f.a), chips: [], ctx: next };
    }
    return {
      parts: [`Got it — ${PLAN_LABEL[plan]}. What would you like to know? Rules, drawdown, payouts, leverage… just ask.`],
      chips: [],
      ctx: next,
    };
  }

  /* --- answer the question(s) --- */
  const whole = answerQuery(raw, next.plans);
  let useful: Result[] = whole.kind === "none" ? [] : [whole];

  // Two questions in one message? Split it and see whether the halves
  // each match something better than the message does as a whole.
  if (whole.score < 0.8) {
    const split = (re: RegExp) =>
      raw.split(re).map((x) => x.trim()).filter((x) => tokenize(stripPlanWords(x.toLowerCase())).length > 0).slice(0, 3);
    for (const re of [/\?+|\n+|\balso\b/i, /\?+|\n+|\balso\b|\band\b|[,;&]/i]) {
      const segs = split(re);
      if (segs.length < 2) continue;
      const rs = segs.map((x) => answerQuery(x, next.plans));
      const distinct = new Set(rs.map((r) => r.topic)).size === rs.length;
      if (distinct && rs.every((r) => r.kind !== "none" && r.score >= Math.max(0.6, whole.score))) {
        useful = rs;
        break;
      }
    }
  }

  // "how much is it?" / "does it trail?" — "it" is whatever we just talked about.
  // Re-ask with the previous question attached and keep that reading if it fits better.
  let asked = raw;
  if (ctx.last && /\b(it|its|that|this|they|those|them)\b/.test(low)) {
    const fresh = tokenize(stripPlanWords(low)).some((t) => IDF.has(t) && !GENERIC_WORDS.has(t));
    const combined = fresh ? answerQuery(`${raw} ${ctx.last}`, next.plans) : NONE;
    const current = useful.length ? Math.max(...useful.map((r) => r.score)) : 0;
    if (combined.kind !== "none" && combined.score > current + 0.05) {
      useful = [combined];
      asked = `${raw} ${ctx.last}`;
    }
  }

  if (useful.length === 0) {
    next.pending = null;
    if (RE.human.test(low)) return { parts: [SUPPORT_HINT], chips: [], ctx: next };
    return { parts: [FALLBACK], chips: [], ctx: next };
  }

  const parts: string[] = [];
  const chips: string[] = [];
  let needsPlan = false;
  for (const r of useful) {
    if (r.kind !== "answer") needsPlan = true;
    for (const p of r.parts) if (!parts.includes(p)) parts.push(p);
    for (const c of r.chips) if (!chips.includes(c)) chips.push(c);
  }
  next.pending = needsPlan ? asked : null;
  next.last = asked;
  return { parts, chips, ctx: next };
}

/* ==================================================================== */
/*  UI                                                                  */
/* ==================================================================== */
function RobotIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true">
      <rect x="14" y="18" width="36" height="32" rx="10" fill="#A734F7" />
      <rect x="20" y="25" width="24" height="15" rx="5" fill="#0B0C13" />
      <circle cx="27" cy="32" r="3" fill="#BE6CFF" />
      <circle cx="37" cy="32" r="3" fill="#BE6CFF" />
      <path d="M32 18V10" stroke="#BE6CFF" strokeWidth="4" strokeLinecap="round" />
      <circle cx="32" cy="8" r="3" fill="#BE6CFF" />
    </svg>
  );
}

function LoadingRing() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 animate-spin" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#3A2450" strokeWidth="3" fill="none" opacity="0.4" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="#BE6CFF" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h13M12.5 6.5 18 12l-5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div
      className="flex w-fit items-center gap-1 rounded-2xl rounded-tl-sm border border-white/[0.06] bg-[#171822] px-3.5 py-3"
      role="status"
      aria-label="BlackProp AI is typing"
    >
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#BE6CFF]/80 motion-reduce:animate-none"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
}

/** Message text with clickable links. */
function MessageText({ text }: { text: string }) {
  const pieces = text.split(/(https?:\/\/[^\s]+)/g);
  return (
    <>
      {pieces.map((piece, i) =>
        i % 2 === 1 ? (
          <a
            key={i}
            href={piece}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-[#D3A3FF] underline decoration-[#BE6CFF]/40 underline-offset-2 hover:text-white"
          >
            {piece}
          </a>
        ) : (
          <span key={i}>{piece}</span>
        )
      )}
    </>
  );
}

type Message = { id: number; sender: "bot" | "user"; text: string };

const GREETING = [
  "Hey 👋 I'm BlackProp AI. Ask me anything about our plans — rules, drawdown, payouts, platforms, you name it.",
  "Which plan are you looking at? Pick one below, or just type your question.",
];

const initialMessages = (): Message[] => GREETING.map((text, id) => ({ id, sender: "bot", text }));

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [opening, setOpening] = useState(false);
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [chips, setChips] = useState<string[]>(PLAN_CHIPS);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [planLabel, setPlanLabel] = useState<string | null>(null);

  const ctxRef = useRef<BotContext>(EMPTY_CONTEXT);
  const nextId = useRef(GREETING.length);
  const timers = useRef<number[]>([]);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  // Fade/scale the panel in a frame after it mounts, so the transition classes animate.
  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => setVisible(true));
    // focus the box on desktop only — on phones this would pop the keyboard open
    if (window.matchMedia?.("(pointer: fine)").matches) inputRef.current?.focus();
    return () => cancelAnimationFrame(raf);
  }, [open]);

  // Close with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Keep the newest message in view.
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, chips, open]);

  function closePanel() {
    setVisible(false);
    window.setTimeout(() => setOpen(false), 220);
  }

  function handleTriggerClick() {
    if (opening) return; // ignore rapid double-clicks while loading
    if (open) return closePanel();
    setOpening(true);
    window.setTimeout(() => {
      setOpening(false);
      setOpen(true);
    }, 550);
  }

  /** Show the bot's bubbles one after another, with a typing pause before each. */
  function deliver(parts: string[], nextChips: string[]) {
    setTyping(true);
    let delay = 0;
    parts.forEach((text, i) => {
      delay += (i === 0 ? 500 : 420) + Math.min(700, text.length * 3);
      const isLast = i === parts.length - 1;
      timers.current.push(
        window.setTimeout(() => {
          const id = nextId.current++;
          setMessages((prev) => [...prev, { id, sender: "bot", text }]);
          if (isLast) {
            setTyping(false);
            setChips(nextChips);
          }
        }, delay)
      );
    });
  }

  function send(text: string) {
    const clean = text.trim();
    if (!clean || typing) return;
    const reply = getBotReply(clean, ctxRef.current);
    ctxRef.current = reply.ctx;
    setPlanLabel(describePlans(reply.ctx.plans));
    const id = nextId.current++;
    setMessages((prev) => [...prev, { id, sender: "user", text: clean }]);
    setInput("");
    setChips([]);
    deliver(reply.parts, reply.chips);
  }

  function changePlan() {
    if (typing) return;
    ctxRef.current = { ...ctxRef.current, plans: null, pending: null };
    setPlanLabel(null);
    setChips([]);
    deliver(["Sure — which plan do you want to talk about?"], PLAN_CHIPS);
  }

  function restartConversation() {
    clearTimers();
    ctxRef.current = EMPTY_CONTEXT;
    nextId.current = GREETING.length;
    setTyping(false);
    setPlanLabel(null);
    setInput("");
    setMessages(initialMessages());
    setChips(PLAN_CHIPS);
  }

  return (
    <>
      {/* CHAT TRIGGER */}
      <button
        type="button"
        onClick={handleTriggerClick}
        aria-label={open ? "Close BlackProp AI chat" : "Open BlackProp AI chat"}
        aria-expanded={open}
        aria-busy={opening}
        disabled={opening}
        className="fixed bottom-[max(16px,env(safe-area-inset-bottom))] right-4 z-[300] flex h-14 w-14 items-center justify-center rounded-full border border-[#BE6CFF]/35 bg-[linear-gradient(135deg,#6557FF_0%,#8F28F3_50%,#B23CF6_100%)] shadow-[0_16px_45px_rgba(143,40,243,.38),0_0_24px_rgba(190,108,255,.16)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_20px_55px_rgba(143,40,243,.46),0_0_30px_rgba(190,108,255,.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE6CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] disabled:cursor-wait disabled:opacity-90 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-[#0B0C13] shadow-[inset_0_1px_0_rgba(255,255,255,.04)] sm:h-12 sm:w-12">
          {opening ? <LoadingRing /> : <RobotIcon />}
        </div>
      </button>

      {/* CHAT PANEL */}
      {open && (
        <div
          role="dialog"
          aria-label="BlackProp AI chat"
          className={
            "fixed bottom-[92px] left-3 right-3 z-[300] mx-auto flex w-auto max-w-[380px] origin-bottom-right flex-col overflow-hidden rounded-[24px] border border-[#8F4BC1]/30 bg-[#0D0D14]/95 text-white shadow-[0_35px_100px_rgba(23,6,40,.72),0_0_50px_rgba(143,40,243,.12)] backdrop-blur-2xl transition-all duration-200 ease-out motion-reduce:transition-none sm:bottom-28 sm:left-auto sm:right-6 sm:mx-0 sm:w-[380px] sm:rounded-[26px] " +
            (visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0")
          }
        >
          <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[#BE6CFF]/90 to-transparent shadow-[0_0_16px_rgba(190,108,255,.45)]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#8F28F3]/15 blur-[80px]" />

          {/* HEADER */}
          <div className="relative flex items-center gap-3 border-b border-white/[0.08] bg-[#111019]/75 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#BE6CFF]/30 bg-[#1A1323] shadow-[0_8px_24px_rgba(143,40,243,.15)]">
              <RobotIcon />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-black text-white">BlackProp AI</p>
              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.55)]" />
                <p className="text-[11px] font-medium text-white/45">{typing ? "Typing…" : "Online assistant"}</p>
              </div>
            </div>
            {planLabel && (
              <button
                type="button"
                onClick={changePlan}
                title="Change plan"
                aria-label={`Talking about ${planLabel}. Change plan`}
                className="inline-flex max-w-[45%] shrink-0 items-center gap-1.5 rounded-full border border-[#BE6CFF]/25 bg-[#8F28F3]/[0.10] px-2.5 py-1 text-[10px] font-bold text-[#D3A3FF] transition hover:border-[#BE6CFF]/45 hover:bg-[#8F28F3]/[0.18] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE6CFF]/70 sm:text-[11px]"
              >
                <span className="truncate">{planLabel}</span>
                <span aria-hidden="true" className="text-white/40">×</span>
              </button>
            )}
          </div>

          {/* MESSAGES */}
          <div
            ref={logRef}
            role="log"
            aria-live="polite"
            className="relative h-[46vh] max-h-[380px] min-h-[200px] space-y-2.5 overflow-y-auto overscroll-contain p-4 [scrollbar-color:#3A2450_transparent] [scrollbar-width:thin]"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.sender === "bot"
                    ? "w-fit max-w-[88%] whitespace-pre-line break-words rounded-2xl rounded-tl-sm border border-white/[0.06] bg-[#171822] p-3 text-[13px] leading-5 text-white/75 shadow-[0_8px_18px_rgba(0,0,0,.14)] sm:text-sm"
                    : "ml-auto w-fit max-w-[88%] whitespace-pre-line break-words rounded-2xl rounded-tr-sm bg-[linear-gradient(135deg,#7A3CF0_0%,#A734F7_100%)] p-3 text-[13px] font-semibold leading-5 text-white shadow-[0_10px_24px_rgba(143,40,243,.22)] sm:text-sm"
                }
              >
                <MessageText text={message.text} />
              </div>
            ))}

            {typing && <TypingDots />}

            {/* QUICK REPLIES — only when the bot needs to know the plan */}
            {!typing && chips.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {chips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => send(chip)}
                    className="rounded-full border border-[#BE6CFF]/25 bg-[#8F28F3]/[0.10] px-3 py-1.5 text-[11px] font-bold text-[#D3A3FF] transition-all duration-200 hover:border-[#BE6CFF]/45 hover:bg-[#8F28F3]/[0.18] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE6CFF]/70 sm:text-xs"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* COMPOSER */}
          <div className="relative border-t border-white/[0.08] bg-[#0F0F17] p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                placeholder="Type your question…"
                aria-label="Type your question"
                autoComplete="off"
                maxLength={400}
                enterKeyHint="send"
                className="min-w-0 flex-1 rounded-xl border border-white/[0.08] bg-[#171822] px-3.5 py-2.5 text-[16px] font-medium text-white outline-none transition placeholder:text-white/30 focus:border-[#BE6CFF]/40 focus:bg-[#1A1923] focus:ring-1 focus:ring-[#BE6CFF]/20 sm:text-[13px]"
              />
              <button
                type="button"
                onClick={() => send(input)}
                disabled={!input.trim() || typing}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#7A3CF0_0%,#A734F7_100%)] text-white shadow-[0_10px_24px_rgba(143,40,243,.22)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE6CFF] disabled:cursor-not-allowed disabled:opacity-35 disabled:shadow-none"
              >
                <SendIcon />
              </button>
            </div>

            <div className="mt-2 flex items-center justify-between gap-2 px-0.5">
              <button
                type="button"
                onClick={restartConversation}
                className="text-[11px] font-medium text-white/35 underline decoration-white/15 underline-offset-4 transition hover:text-[#C98AFF]"
              >
                Restart conversation
              </button>
              <span className="text-[10px] text-white/25">Automated answers from our FAQ</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AIChatbot;