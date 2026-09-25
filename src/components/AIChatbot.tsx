"use client";

import { useState } from "react";

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

type Message = { sender: "bot" | "user"; text: string };
type FAQ = { q: string; a: string; cat: string };

/* ------------------------------------------------------------------ */
/*  FULL FAQ DATA — pulled from:                                       */
/*   - Crypto Only Plan FAQs (Mar 2026)                                 */
/*   - Two-Step Rules Custom Plan (Sept 2026)                           */
/*   - Instant Funding Custom Rules v2                                  */
/* ------------------------------------------------------------------ */
const FAQS: FAQ[] = [
  // ---------------- CRYPTO ONLY PLAN ----------------
  { cat: "Crypto Only Plan", q: "Can I use an Automated Strategy?", a: "Unfortunately, Crypto Only plans are hosted on DXTrade, which does not support Expert Advisors or other automated strategies." },
  { cat: "Crypto Only Plan", q: "How are commissions charged on Crypto Only Plans?", a: "Commissions or commission-equivalents may be charged in connection with your trading activity. Cryptocurrency trading is subject to a percentage-based commission rate of 0.05% of the total notional trade volume, charged per side (USD amount * 0.0005)." },
  { cat: "Crypto Only Plan", q: "What is the leverage?", a: "BTC and ETH offer 5:1 leverage. All other crypto products are 2:1 leverage." },
  { cat: "Crypto Only Plan", q: "What Platform can I trade on?", a: "Crypto Only plans are hosted on DXTrade with TradingView charts." },
  { cat: "Crypto Only Plan", q: "What products can I trade?", a: "We offer 26 different cryptocurrency products. See the Crypto Product Spec for details." },
  { cat: "Crypto Only Plan", q: "How do you calculate the Max Drawdown (STATIC)?", a: "Maximum drawdown is the maximum your account can drawdown before you hard breach. When you open the account, your Maximum Drawdown is set at a defined % of your starting balance. This % is static and does not trail." },
  { cat: "Crypto Only Plan", q: "What is the Daily Cap Limit for my crypto account?", a: "The Daily Cap Limit is the maximum percentage your crypto account can move in a given day, calculated from the previous day's equity, resetting at 5 PM EST. If assets move in excess of 3% of your starting balance in either direction, positions are closed and the account is locked until the next trading day. Example: for a 100k starting balance with a 3% Daily Cap, if the account finishes the day at 101k equity, the next day's limits are 101k +/- 3k (98k - 104k)." },
  { cat: "Crypto Only Plan", q: "What happens if I exceed the 3% Cap Limit?", a: "If your account exceeds the 3% gain or loss for the day, the system automatically disables trading, closes all open trades, and cancels pending orders. Trading is restricted for the remainder of the day." },
  { cat: "Crypto Only Plan", q: "When can I start trading again after exceeding the daily Cap Limit?", a: "Trading restrictions lift at the start of the next trading day (5:00 PM EST), or once the account falls back within the current day's Cap Limits." },
  { cat: "Crypto Only Plan", q: "When does my Daily Cap Limit reset?", a: "At 5:00 PM EST your account receives new trading bands based on your equity at the end of the prior day, and the +/- 3% Cap Limit is recalculated against your updated balance." },
  { cat: "Crypto Only Plan", q: "If I have a hard breach in my Funded Account and there are gains, do I forfeit those gains?", a: "Yes. If you have a hard breach in your funded account, any accumulated gains will be forfeited unless you purchased the Payout Protector add-on." },
  { cat: "Crypto Only Plan", q: "What is Payout Protector?", a: "Payout Protector is an optional add-on that lets you still receive a payout on any gains in your account despite a breach, provided all other withdrawal conditions are met and your account isn't otherwise in violation of the Terms and Conditions." },
  { cat: "Crypto Only Plan", q: "How does Payout Protector work?", a: "Example: You're trading a $100,000 Funded account and have generated $8,000 in gains when you breach. Without Payout Protector, the account closes and the $8,000 is forfeited. With Payout Protector, the account still closes due to the breach, but you still receive your portion of the $8,000 gain." },
  { cat: "Crypto Only Plan", q: "Does Payout Protector prevent my account from breaching?", a: "No. The account will still be considered breached if a rule violation occurs. Payout Protector does not remove or alter risk parameters — it only protects your gain from forfeiture." },
  { cat: "Crypto Only Plan", q: "Is Payout Protector required?", a: "No, it is entirely optional and must be selected at the time of purchase." },

  // ---------------- TWO-STEP PLAN ----------------
  { cat: "Two-Step Plan", q: "What is the difference between a Hard Breach and Soft Breach rule?", a: "Soft breach: we close the trades that violated the rule, but you may keep trading. Hard breach: you violated the Daily Loss Limit or Max Drawdown rule — either fails your Assessment or removes your Funded Account." },
  { cat: "Two-Step Plan", q: "How do you calculate the Daily Loss Limit?", a: "The Daily Loss Limit is the max amount an account may lose in one trading day, resetting at 5:00 PM EST. It's calculated from the greater of the prior day's end-of-day balance (closed P&L only) or end-of-day equity (balance + open P&L). Example: $100,000 account, 5% Daily Loss Limit, equity of $102,000 at reset — the limit is based on $102,000, so 5% ($5,100) means breach occurs at $96,900." },
  { cat: "Two-Step Plan", q: "How do you calculate the Max Drawdown?", a: "The Maximum Drawdown is set at 8% of your starting balance and is static — it does not trail as your balance increases. Example: $100,000 starting balance means a breach level of $92,000, even if your balance grows to $102,000." },
  { cat: "Two-Step Plan", q: "What are the profitable trading days requirements to pass evaluation?", a: "You must complete 5 profitable trading days, each with a minimum gain of 0.5%, in both evaluation phases." },
  { cat: "Two-Step Plan", q: "Can I hold positions over the weekend?", a: "Positions can be held over the weekend, although only Crypto allows weekend trading." },
  { cat: "Two-Step Plan", q: "What is 1 lot equal to on the Trading Platform?", a: "Forex: 1 lot = $100k notional. Index: 1 lot = 1 contract (SPX500 = 10 contracts, JPN225 = 500 contracts). Cryptos: 1 lot = 1 coin. Silver: 1 lot = 5,000 oz. Gold: 1 lot = 100 oz. Oil: 1 lot = 100 barrels." },
  { cat: "Two-Step Plan", q: "Is there a breach for inactivity?", a: "Yes. Your account is considered inactive and will be breached if you have no trading activity for 30 consecutive days." },
  { cat: "Two-Step Plan", q: "Is there a time limit to complete the Assessment?", a: "No time limit to complete either phase, but the 30-day inactivity rule still applies." },
  { cat: "Two-Step Plan", q: "Is there a minimum number of trading days required?", a: "Yes — you must place trades on at least 5 separate trading days before you're eligible to request a withdrawal from your Funded Account." },
  { cat: "Two-Step Plan", q: "Is there a consistency rule on this plan?", a: "No consistency rule applies to either the Assessment or the Funded Account on this plan." },
  { cat: "Two-Step Plan", q: "How Long does it take to receive my funded account?", a: "After passing your Assessment, you'll get instructions for KYC and the Trader Agreement. Once completed, your Funded Account is created, funded, and issued typically within 24-48 business hours." },
  { cat: "Two-Step Plan", q: "Once I pass the Assessment am I provided with a demo or funded account?", a: "You're provided with a funded account backed by our capital. This capital is notional and may differ from the amount actually on deposit with the Liquidity Provider. Notional funding does not impact your trading conditions." },
  { cat: "Two-Step Plan", q: "Do we manipulate the pricing or executions you receive in your Funded Account?", a: "No, we have no control over pricing from the liquidity provider or over trade executions." },
  { cat: "Two-Step Plan", q: "Who is the counterparty to my trades?", a: "To manage risk and minimize costs, we may act as direct counterparty to certain trades, executed at third-party market prices. Your gain/loss is calculated the same regardless, though this creates a potential conflict of interest since such trades don't result in net gain/loss to us." },
  { cat: "Two-Step Plan", q: "Am I subject to any position limits?", a: "Your maximum position is determined by available margin. We reserve the right to adjust margin requirements, position limits, and drawdown halt levels, and may refuse any order." },
  { cat: "Two-Step Plan", q: "What are the rules for the funded account?", a: "The same rules as your Assessment account apply, except the funded account has no profit target." },
  { cat: "Two-Step Plan", q: "If I have a hard breach in my funded account and there are gains, do I forfeit those gains?", a: "Yes, unless you've purchased the Payout Protector add-on." },
  { cat: "Two-Step Plan", q: "When can I withdraw the gains in my funded account and how does that affect my Max Drawdown?", a: "Your first withdrawal can be requested after trading on at least 5 separate days. No consistency requirement applies. Withdrawals follow an 80/20 split unless you bought the 100% payout add-on. When a payout completes, your Max Drawdown locks at your starting balance unless you purchased the Remove Lock Upon Payout add-on (which keeps it fixed at 8% below starting balance)." },
  { cat: "Two-Step Plan", q: "What account sizes and pricing are available on this plan?", a: "One-time-fee Assessment sizes: $5,000 ($48), $10,000 ($95), $25,000 ($238), $50,000 ($428), $100,000 ($855), and $200,000 ($2,088). Rules are identical across sizes; only Profit Target dollar amounts and price scale." },
  { cat: "Two-Step Plan", q: "Do I have to use one of your accounts for the Assessment or can I use my own?", a: "You must use an account we provide, since our risk management software is synced to it for real-time performance and rule-violation tracking." },
  { cat: "Two-Step Plan", q: "What Countries are accepted?", a: "Traders from all countries can participate, excluding OFAC-listed countries or as otherwise limited at the Company's discretion." },
  { cat: "Two-Step Plan", q: "What is the minimum age I must be to be part of your program?", a: "You must be at least 18, or the minimum legal age in your country, to purchase an assessment." },
  { cat: "Two-Step Plan", q: "Where do I track the progress of my account?", a: "You get access to a trader dashboard that updates roughly every 60 seconds. Monitoring your breach levels is your responsibility." },
  { cat: "Two-Step Plan", q: "What Platform can I trade on?", a: "Our tech is integrated with DXtrade, MatchTrader, cTrader and GooeyPro via GooeyTrade." },
  { cat: "Two-Step Plan", q: "What products can I trade?", a: "Any products streamed by the Liquidity Provider, including FX pairs, CFD Indices, Commodities, Metals and Cryptocurrencies." },
  { cat: "Two-Step Plan", q: "What is the leverage?", a: "Up to 50:1 on Forex and Metals, 10:1 on Indices, 5:1 on Oil, and 2:1 on Cryptocurrencies." },
  { cat: "Two-Step Plan", q: "What are the trading hours?", a: "Trading hours are generally set by the Liquidity Provider. Check per-symbol hours: DXtrade (right-click symbol > Instrument Info), MatchTrader (click symbol > Info), cTrader (Symbol Window > Market Hours). Holidays may affect hours." },
  { cat: "Two-Step Plan", q: "Do your accounts charge commissions?", a: "Funded accounts receive the same pricing and commissions as charged by our Liquidity Provider to other self-funded retail accounts." },
  { cat: "Two-Step Plan", q: "Can I use an automated strategy?", a: "Yes, subject to our Prohibited Trading policy." },
  { cat: "Two-Step Plan", q: "What is the policy on Prohibited Trading Activity?", a: "Prohibited trading includes: exploiting pricing/platform errors, using non-public or insider info, front-running, trading that jeopardizes Liquidity Provider relationships or creates regulatory issues, using third-party/off-the-shelf pass strategies, switching strategies between assessment and funded stages, and arbitraging accounts. Violations can lead to termination and forfeiture of fees." },
  { cat: "Two-Step Plan", q: "Can I trade during News Events?", a: "Trading within 3 minutes before or after a News Event is prohibited. Violating trades may be removed, leverage reduced, or the account breached, at the Company's discretion." },
  { cat: "Two-Step Plan", q: "How will I see the charge on my Statement?", a: "Charges appear under the name Dashboardanalytix.com." },
  { cat: "Two-Step Plan", q: "How are taxes handled?", a: "You're treated as an independent contractor and are responsible for all taxes on your gains." },
  { cat: "Two-Step Plan", q: "How are affiliates credited?", a: "Affiliates are credited when a user creates an account via their referral link or discount code." },

  // ---------------- INSTANT FUNDING PLAN ----------------
  { cat: "Instant Funding Plan", q: "What is the difference between a Hard Breach and Soft Breach rule?", a: "Soft breach: violating trades are closed but you can keep trading. Hard breach: you violated the Daily Loss Limit, Max Drawdown, or Inactivity rule — this results in losing your Funded Account." },
  { cat: "Instant Funding Plan", q: "What is the Consistency Rule?", a: "A 15% consistency rule applies: no single trading day's profit may exceed 15% of your total profit over the life of the account." },
  { cat: "Instant Funding Plan", q: "What is the Profit Buffer and how does it work?", a: "A 3% profit buffer defines when you can start withdrawing. You must first reach 3% profit on your starting balance; that first 3% stays in the account as a buffer, and only gains above it are withdrawable. Example: on a $100,000 account, once balance hits $103,000, the first $3,000 stays as buffer and anything above is withdrawable." },
  { cat: "Instant Funding Plan", q: "What are the profitable trading days requirements to withdraw?", a: "You must complete 5 profitable trading days, each with a minimum gain of 0.5%, before you're eligible to withdraw." },
  { cat: "Instant Funding Plan", q: "When can I request my first withdrawal?", a: "Once you have profit above the 3% buffer, meet the 15% Consistency Requirement, and complete 5 profitable trading days (0.5% min each). KYC and the Trader Agreement must also be completed. After the first withdrawal, further withdrawals are allowed every 30 days." },
  { cat: "Instant Funding Plan", q: "How do you calculate the Daily Loss Limit?", a: "The max amount an account may lose in a day, resetting at 5:00 PM EST, calculated from the greater of prior day's closed balance or equity. Example: $100,000 account, 3% Daily Loss Limit, equity of $102,000 at reset — 3% of $102,000 ($3,060) means breach occurs at $98,940." },
  { cat: "Instant Funding Plan", q: "How do you calculate the Maximum Trailing Drawdown?", a: "Initially 5% of starting balance, trailing your highest CLOSED BALANCE (not equity). Once you achieve a 5% return in closed balance, it locks permanently at your starting balance — also locks at starting balance when a withdrawal is approved. Example: $100,000 start, breach level rises from $95,000 as closed balance grows, locking at $100,000 once closed balance reaches $105,000." },
  { cat: "Instant Funding Plan", q: "Can I hold positions over the weekend?", a: "All trades must be closed by 3:45 PM EST on the last trading day of the week (typically Friday) unless you purchased the Hold Over Weekend add-on. Open trades left past this time are auto-closed — this is a soft breach, and trading resumes once markets reopen." },
  { cat: "Instant Funding Plan", q: "What is 1 lot equal to on the Trading Platform?", a: "Forex: 1 lot = $100k notional. Index: 1 lot = 1 contract (SPX500 = 10 contracts, JPN225 = 500 contracts). Cryptos: 1 lot = 1 coin. Silver: 1 lot = 5,000 oz. Gold: 1 lot = 100 oz. Oil: 1 lot = 100 barrels." },
  { cat: "Instant Funding Plan", q: "Is there a breach for inactivity?", a: "Yes — if you don't place a trade at least once every 30 days, your account is considered inactive and will be breached." },
  { cat: "Instant Funding Plan", q: "What is the Instant Funding Plan?", a: "It lets traders start with a fully funded account without completing an assessment phase." },
  { cat: "Instant Funding Plan", q: "How Long does it take to receive my Instant Funded Account?", a: "Upon completing payment, you'll receive an Instant Funding account backed by our capital, with access instructions emailed to you. The capital is notional and may not match actual capital on deposit with the Broker." },
  { cat: "Instant Funding Plan", q: "Do I need to complete KYC or sign a trader contract to start trading?", a: "A Trading contract and KYC are required, but they don't need to be completed until you request a withdrawal." },
  { cat: "Instant Funding Plan", q: "What happens if I do not pass KYC?", a: "If you fail KYC when requesting a withdrawal, the withdrawal is rejected and your account is closed." },
  { cat: "Instant Funding Plan", q: "Do we manipulate the pricing or executions you receive?", a: "No — we operate at arm's length with the Broker; pricing and executions are not modified, and we don't mark up spreads, commissions, or swaps." },
  { cat: "Instant Funding Plan", q: "Who is the counterparty to my trades?", a: "We may act as direct counterparty to certain trades to manage risk, executed at Broker-provided prices. Your gain/loss isn't calculated differently, though this does create a potential conflict of interest." },
  { cat: "Instant Funding Plan", q: "Am I subject to any position limits?", a: "Your maximum position is determined by available margin. We reserve the right to adjust margin requirements, position limits, and drawdown halt levels." },
  { cat: "Instant Funding Plan", q: "If I have a hard breach and there are gains, do I forfeit those gains?", a: "Yes, unless you purchased the Payout Protector add-on." },
  { cat: "Instant Funding Plan", q: "How do I withdraw the gains in my Instant Funded Account?", a: "Request via the dashboard once you meet the 15% Consistency Requirement and 5 profitable trading days (0.5% min each); only profit above the 3% buffer is withdrawable. Standard split is 80% to you (90% with the add-on); the Max Trailing Drawdown locks at your starting balance once a withdrawal is approved. Example: $100,000 -> $120,000, withdrawing $16,000 at 80% split nets you $12,800." },
  { cat: "Instant Funding Plan", q: "What Countries are accepted?", a: "Traders from all countries can participate, excluding OFAC-listed countries or as otherwise limited at the Company's discretion." },
  { cat: "Instant Funding Plan", q: "What is the minimum age I must be to be part of your program?", a: "At least 18, or the minimum legal age in your country, to purchase an Instant Funding account." },
  { cat: "Instant Funding Plan", q: "Where do I track the progress of my account?", a: "You get access to a trader dashboard, updated in near real time. Monitoring your breach levels is your responsibility." },
  { cat: "Instant Funding Plan", q: "What Platform can I trade on?", a: "Our tech is integrated with DXtrade, MatchTrader and cTrader." },
  { cat: "Instant Funding Plan", q: "What products can I trade?", a: "Any products offered by the Broker, including FX pairs, CFD Indices, Metals and Cryptocurrencies." },
  { cat: "Instant Funding Plan", q: "What is the leverage?", a: "Up to 50:1 on Forex and Metals, 10:1 on Indices, 5:1 on Oil, and 2:1 on Cryptocurrencies." },
  { cat: "Instant Funding Plan", q: "What are the trading hours?", a: "Set by the Liquidity Provider unless otherwise specified. Trades auto-close near 3:45 PM EST Fridays unless you purchased Weekend Hold. Holidays may affect hours." },
  { cat: "Instant Funding Plan", q: "Do your accounts charge commissions?", a: "Instant Funded Accounts receive the same pricing/commissions as other self-funded retail accounts from our Liquidity Provider." },
  { cat: "Instant Funding Plan", q: "Can I use an Automated Strategy?", a: "Yes, subject to our Prohibited Trading policy." },
  { cat: "Instant Funding Plan", q: "What is the policy on Prohibited Trading Activity?", a: "Prohibited trading includes exploiting errors/latency, insider info, front-running, jeopardizing Liquidity Provider relationships, third-party pass-strategies, arbitraging accounts, trading around News Events, and gambling-style excessive risk-taking (e.g. maxing leverage for a single big move). Violations can lead to termination and fee forfeiture." },
  { cat: "Instant Funding Plan", q: "Can I trade during News Events?", a: "Opening a position within 3 minutes before or after a News Event is prohibited — violating positions may be closed with P&L removed, leverage reduced, or the account breached." },
  { cat: "Instant Funding Plan", q: "How will I see the charge on my Statement?", a: "Charges appear under the name Dashboardanalytix.com." },
  { cat: "Instant Funding Plan", q: "How are taxes handled?", a: "You're treated as an independent contractor and are responsible for all taxes on your gains." },
  { cat: "Instant Funding Plan", q: "How are affiliates credited?", a: "Affiliates are credited when a user creates an account via their referral link or discount code." },
];

const CATEGORIES = Array.from(new Set(FAQS.map((f) => f.cat)));

const GREETING = "👋 Hi, I am BlackProp AI. Choose a plan below to see its FAQs, or pick a question.";

function findBestMatch(input: string): FAQ | null {
  const text = input.toLowerCase();
  let best: FAQ | null = null;
  let bestScore = 0;
  for (const f of FAQS) {
    const words = f.q.toLowerCase().split(/\W+/).filter((w) => w.length > 3);
    let score = 0;
    for (const w of words) if (text.includes(w)) score++;
    if (score > bestScore) {
      bestScore = score;
      best = f;
    }
  }
  return bestScore >= 2 ? best : null;
}

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ sender: "bot", text: GREETING }]);
  const [view, setView] = useState<"categories" | "questions" | "answer">("categories");
  const [activeCat, setActiveCat] = useState<string | null>(null);

  function pickCategory(cat: string) {
    setActiveCat(cat);
    setView("questions");
    setMessages((prev) => [...prev, { sender: "user", text: cat }, { sender: "bot", text: `Here are the FAQs for the ${cat}:` }]);
  }

  function askQuestion(faq: FAQ) {
    setMessages((prev) => [...prev, { sender: "user", text: faq.q }, { sender: "bot", text: faq.a }]);
    setView("answer");
  }

  function backToCategories() {
    setView("categories");
    setActiveCat(null);
    setMessages((prev) => [...prev, { sender: "bot", text: "Which plan would you like to ask about?" }]);
  }

  function backToQuestions() {
    setView("questions");
  }

  function restartConversation() {
    setMessages([{ sender: "bot", text: GREETING }]);
    setView("categories");
    setActiveCat(null);
  }

  const questionsForCat = activeCat ? FAQS.filter((f) => f.cat === activeCat) : [];

  return (
    <>
      {/* CHAT TRIGGER */}
      <button
        type="button"
        onClick={() => setOpen((c) => !c)}
        aria-label={open ? "Close BlackProp AI chat" : "Open BlackProp AI chat"}
        aria-expanded={open}
        className="fixed bottom-[max(16px,env(safe-area-inset-bottom))] right-4 z-[300] flex h-14 w-14 items-center justify-center rounded-full border border-[#BE6CFF]/35 bg-[linear-gradient(135deg,#6557FF_0%,#8F28F3_50%,#B23CF6_100%)] shadow-[0_16px_45px_rgba(143,40,243,.38),0_0_24px_rgba(190,108,255,.16)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_20px_55px_rgba(143,40,243,.46),0_0_30px_rgba(190,108,255,.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE6CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-[#0B0C13] shadow-[inset_0_1px_0_rgba(255,255,255,.04)] sm:h-12 sm:w-12">
          <RobotIcon />
        </div>
      </button>

      {/* CHAT PANEL */}
      {open && (
        <div className="fixed bottom-[84px] left-3 right-3 z-[300] mx-auto w-auto max-w-[380px] overflow-hidden rounded-[24px] border border-[#8F4BC1]/30 bg-[#0D0D14]/95 text-white shadow-[0_35px_100px_rgba(23,6,40,.72),0_0_50px_rgba(143,40,243,.12)] backdrop-blur-2xl sm:bottom-24 sm:left-auto sm:right-6 sm:mx-0 sm:w-[380px] sm:rounded-[26px]">
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
                <p className="text-[11px] font-medium text-white/45">Online assistant</p>
              </div>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="relative h-[300px] space-y-3 overflow-y-auto p-4 [scrollbar-color:#3A2450_transparent] [scrollbar-width:thin] sm:h-[330px]">
            {messages.map((message, index) => (
              <div
                key={`${message.sender}-${index}`}
                className={
                  message.sender === "bot"
                    ? "max-w-[87%] rounded-2xl rounded-tl-sm border border-white/[0.06] bg-[#171822] p-3 text-[13px] leading-5 text-white/72 shadow-[0_8px_18px_rgba(0,0,0,.14)] sm:text-sm"
                    : "ml-auto max-w-[87%] rounded-2xl rounded-tr-sm bg-[linear-gradient(135deg,#7A3CF0_0%,#A734F7_100%)] p-3 text-[13px] font-semibold leading-5 text-white shadow-[0_10px_24px_rgba(143,40,243,.22)] sm:text-sm"
                }
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* OPTIONS */}
          <div className="relative max-h-[220px] overflow-y-auto border-t border-white/[0.08] bg-[#0F0F17] p-4">
            {view === "categories" && (
              <div className="mb-3 flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => pickCategory(cat)}
                    className="rounded-full border border-[#BE6CFF]/25 bg-[#8F28F3]/[0.10] px-3 py-2 text-[11px] font-bold text-[#D3A3FF] transition-all duration-200 hover:border-[#BE6CFF]/45 hover:bg-[#8F28F3]/[0.18] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE6CFF]/70 sm:text-xs"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {view === "questions" && (
              <>
                <div className="mb-3 flex flex-col gap-2">
                  {questionsForCat.map((faq, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => askQuestion(faq)}
                      className="rounded-xl border border-[#BE6CFF]/25 bg-[#8F28F3]/[0.10] px-3 py-2 text-left text-[11px] font-bold text-[#D3A3FF] transition-all duration-200 hover:border-[#BE6CFF]/45 hover:bg-[#8F28F3]/[0.18] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE6CFF]/70 sm:text-xs"
                    >
                      {faq.q}
                    </button>
                  ))}
                </div>
                <button type="button" onClick={backToCategories} className="mb-2 text-[11px] font-medium text-white/35 underline decoration-white/15 underline-offset-4 transition hover:text-[#C98AFF] sm:text-xs">
                  ← Back to plans
                </button>
              </>
            )}

            {view === "answer" && (
              <div className="mb-3 flex flex-wrap gap-2">
                <button type="button" onClick={backToQuestions} className="rounded-full border border-[#BE6CFF]/25 bg-[#8F28F3]/[0.10] px-3 py-2 text-[11px] font-bold text-[#D3A3FF] hover:border-[#BE6CFF]/45 hover:bg-[#8F28F3]/[0.18] hover:text-white sm:text-xs">
                  ← More {activeCat} FAQs
                </button>
                <button type="button" onClick={backToCategories} className="rounded-full border border-[#BE6CFF]/25 bg-[#8F28F3]/[0.10] px-3 py-2 text-[11px] font-bold text-[#D3A3FF] hover:border-[#BE6CFF]/45 hover:bg-[#8F28F3]/[0.18] hover:text-white sm:text-xs">
                  Switch plan
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={restartConversation}
              className="text-[11px] font-medium text-white/35 underline decoration-white/15 underline-offset-4 transition hover:text-[#C98AFF] sm:text-xs"
            >
              Restart conversation
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AIChatbot;