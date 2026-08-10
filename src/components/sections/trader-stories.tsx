"use client";

import { useState, type ReactNode } from "react";

type SceneType = "process" | "performance" | "reward" | "freedom" | "focus";

type Story = {
  id: number;
  kicker: string;
  title: string;
  quote: string;
  status: string;
  detail: string;
  scene: SceneType;
};

type PayoutItem = {
  amount: string;
  flag: string;
  country: string;
  label: string;
};

const stories: Story[] = [
  {
    id: 1,
    kicker: "THE PROCESS",
    title: "Discipline before everything.",
    quote: "It starts with the setup.",
    status: "Target completed",
    detail: "Evaluation objective reached",
    scene: "process",
  },
  {
    id: 2,
    kicker: "THE PERFORMANCE",
    title: "Every decision has a reason.",
    quote: "Patience. Precision. Execution.",
    status: "Performance update",
    detail: "+6.84% current cycle",
    scene: "performance",
  },
  {
    id: 3,
    kicker: "THE REWARD",
    title: "Performance should mean something.",
    quote: "Results unlock opportunity.",
    status: "Reward approved",
    detail: "Payout status confirmed",
    scene: "reward",
  },
  {
    id: 4,
    kicker: "THE FREEDOM",
    title: "Your desk can be anywhere.",
    quote: "Your edge travels with you.",
    status: "Account online",
    detail: "Trading environment active",
    scene: "freedom",
  },
  {
    id: 5,
    kicker: "THE FOCUS",
    title: "Quiet room. Serious execution.",
    quote: "Cut the noise. Trade the plan.",
    status: "Session complete",
    detail: "Risk limits healthy",
    scene: "focus",
  },
];

const payoutItems: PayoutItem[] = [
  { amount: "$9,401.23", flag: "🇺🇸", country: "United States", label: "Preview trader" },
  { amount: "$2,262.34", flag: "🇵🇰", country: "Pakistan", label: "Preview trader" },
  { amount: "$1,825.16", flag: "🇿🇦", country: "South Africa", label: "Preview trader" },
  { amount: "$3,240.21", flag: "🇮🇳", country: "India", label: "Preview trader" },
  { amount: "$1,240.40", flag: "🇲🇼", country: "Malawi", label: "Preview trader" },
  { amount: "$4,466.28", flag: "🇫🇷", country: "France", label: "Preview trader" },
  { amount: "$2,401.20", flag: "🇮🇳", country: "India", label: "Preview trader" },
  { amount: "$5,840.00", flag: "🇱🇹", country: "Lithuania", label: "Preview trader" },
  { amount: "$4,084.49", flag: "🇬🇧", country: "United Kingdom", label: "Preview trader" },
  { amount: "$2,027.60", flag: "🇩🇰", country: "Denmark", label: "Preview trader" },
  { amount: "$2,925.26", flag: "🇵🇰", country: "Pakistan", label: "Preview trader" },
];

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.5 10h12M11.5 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeft({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M16.5 10h-12M8.5 6l-4 4 4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="m4.8 10.3 3 3 7.4-7.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M4 17.5 8.7 13l3.2 2.7L20 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6 7H20v4.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M6 4h8v3.5c0 3.1-1.6 5-4 5s-4-1.9-4-5V4Z" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M6 6H3.5c0 2.8 1.2 4.1 3.5 4.1M14 6h2.5c0 2.8-1.2 4.1-3.5 4.1M10 12.5V15M7.4 17h5.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.35" />
      <path d="M2.5 16c.7-3.1 2.2-4.5 4.5-4.5 2.2 0 3.8 1.4 4.5 4.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <circle cx="14" cy="8" r="2.3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12.8 12.5c2.3 0 3.7 1.1 4.3 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function FocusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M8 3H4a1 1 0 0 0-1 1v4M16 3h4a1 1 0 0 1 1 1v4M8 21H4a1 1 0 0 1-1-1v-4M16 21h4a1 1 0 0 0 1-1v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect x="7" y="2.8" width="10" height="18.4" rx="2.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 5h4M11 18.4h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StoryIcon({ scene }: { scene: SceneType }) {
  if (scene === "performance") return <TrendIcon />;
  if (scene === "reward") return <TrophyIcon />;
  if (scene === "freedom") return <PhoneIcon />;
  if (scene === "focus") return <FocusIcon />;
  return <CheckIcon />;
}

function StageButton({ story, active, onClick }: { story: Story; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex min-w-0 items-center gap-3 rounded-[16px] border px-3 py-3 text-left transition duration-300 ${
        active
          ? "border-[#D4AF37]/35 bg-[#D4AF37]/10"
          : "border-white/10 bg-white/[0.035] hover:border-[#D4AF37]/25 hover:bg-white/[0.055]"
      }`}
    >
      <div
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
          active ? "bg-[#D4AF37] text-black" : "bg-white/[0.06] text-white"
        }`}
      >
        <StoryIcon scene={story.scene} />
      </div>

      <div className="min-w-0">
        <p className={`text-[7px] font-black tracking-[0.15em] ${active ? "text-[#D4AF37]" : "text-white"}`}>0{story.id}</p>
        <p className="mt-1 truncate text-[9px] font-black uppercase tracking-[0.08em] text-white">{story.kicker.replace("THE ", "")}</p>
      </div>

      {active && <span className="bp-story-tab-arrow ml-auto hidden text-[#D4AF37] sm:block"><ArrowRight /></span>}
    </button>
  );
}

function Step({ number, title, active = false }: { number: string; title: string; active?: boolean }) {
  return (
    <div className={`relative flex items-center gap-3 rounded-[15px] border px-3 py-3 ${active ? "border-[#D4AF37]/30 bg-[#D4AF37]/10" : "border-white/10 bg-white/[0.03]"}`}>
      <div className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[7px] font-black ${active ? "bg-[#D4AF37] text-black" : "bg-white/[0.06] text-white"}`}>{number}</div>
      <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white">{title}</p>
      {active && <span className="bp-story-mini-arrow ml-auto text-[#D4AF37]"><ArrowRight className="h-3 w-3" /></span>}
    </div>
  );
}

function ProcessVisual() {
  return (
    <div className="relative h-full min-h-[315px] overflow-hidden rounded-[24px] border border-white/10 bg-[#080809] p-5">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#D4AF37]/10 blur-[60px]" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[7px] font-black uppercase tracking-[0.17em] text-[#D4AF37]">PROCESS MAP</p>
            <p className="mt-1 text-sm font-black text-white">The setup comes first.</p>
          </div>
          <span className="bp-story-pulse h-2 w-2 rounded-full bg-[#D4AF37]" />
        </div>

        <div className="mt-7 space-y-2.5">
          <Step number="01" title="Define the setup" active />
          <div className="mx-auto h-4 w-px bg-gradient-to-b from-[#D4AF37]/40 to-white/10" />
          <Step number="02" title="Control risk" />
          <div className="mx-auto h-4 w-px bg-gradient-to-b from-white/10 to-[#D4AF37]/40" />
          <Step number="03" title="Execute the plan" />
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-[7px] font-black uppercase tracking-[0.14em] text-white">DISCIPLINE</span>
          <span className="bp-story-long-arrow flex items-center gap-1 text-[#D4AF37]"><ArrowRight className="h-3 w-3" /><ArrowRight className="h-3 w-3" /></span>
          <span className="text-[7px] font-black uppercase tracking-[0.14em] text-white">EXECUTION</span>
        </div>
      </div>
    </div>
  );
}

function PerformanceVisual() {
  const metrics = [
    ["Consistency", "82%"],
    ["Risk control", "91%"],
    ["Current cycle", "+6.84%"],
  ];

  return (
    <div className="relative h-full min-h-[315px] overflow-hidden rounded-[24px] border border-white/10 bg-[#080809] p-5">
      <div className="absolute -right-12 top-8 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-[60px]" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[7px] font-black uppercase tracking-[0.17em] text-[#D4AF37]">PERFORMANCE SNAPSHOT</p>
            <p className="mt-1 text-sm font-black text-white">Progress with context.</p>
          </div>
          <TrendIcon />
        </div>

        <div className="mt-7 rounded-[18px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] p-4">
          <p className="text-[7px] font-black uppercase tracking-[0.15em] text-[#D4AF37]">CURRENT CYCLE</p>
          <div className="mt-2 flex items-end justify-between gap-3">
            <p className="text-[2.8rem] font-black leading-none tracking-[-0.07em] text-white">+6.84%</p>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[6px] font-black uppercase tracking-[0.12em] text-white">ON TRACK</span>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {metrics.map(([label, value], index) => (
            <div key={label}>
              <div className="flex items-center justify-between text-[8px] font-black uppercase tracking-[0.1em] text-white">
                <span>{label}</span><span>{value}</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="bp-story-bar h-full rounded-full bg-[linear-gradient(90deg,#8D6717,#D4AF37,#F0D16A)]" style={{ width: index === 0 ? "82%" : index === 1 ? "91%" : "68%", animationDelay: `${index * 120}ms` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RewardVisual() {
  return (
    <div className="relative flex h-full min-h-[315px] items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-[#080809] p-5">
      <div className="absolute h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-[70px]" />
      <div className="relative w-full max-w-[300px] text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-[#D4AF37] text-black shadow-[0_0_28px_rgba(212,175,55,.22)]"><CheckIcon className="h-5 w-5" /></div>
        </div>
        <p className="mt-6 text-[7px] font-black uppercase tracking-[0.17em] text-[#D4AF37]">REWARD STATUS</p>
        <p className="mt-2 text-[2rem] font-black uppercase tracking-[-0.05em] text-white">Approved</p>
        <p className="mt-3 text-xs font-semibold leading-5 text-white">A clean reward moment without unnecessary clutter.</p>
        <div className="relative mt-6 overflow-hidden rounded-[16px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] px-4 py-3 text-left">
          <span className="bp-story-scan absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-[#F0D16A]/15 to-transparent" />
          <div className="relative flex items-center gap-3">
            <span className="bp-story-pulse h-2 w-2 rounded-full bg-[#D4AF37]" />
            <div><p className="text-[7px] font-black uppercase tracking-[0.14em] text-[#D4AF37]">BLACKPROP</p><p className="mt-1 text-[9px] font-black text-white">Payout status confirmed</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FreedomVisual() {
  return (
    <div className="relative h-full min-h-[315px] overflow-hidden rounded-[24px] border border-white/10 bg-[#080809] p-5">
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[70px]" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div><p className="text-[7px] font-black uppercase tracking-[0.17em] text-[#D4AF37]">TRADING ENVIRONMENT</p><p className="mt-1 text-sm font-black text-white">Your setup can move.</p></div>
          <PhoneIcon />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-2">
          {["FOREX", "FUTURES", "CRYPTO"].map((market) => <div key={market} className="rounded-[14px] border border-white/10 bg-white/[0.035] px-3 py-4 text-center text-[7px] font-black tracking-[0.12em] text-white">{market}</div>)}
        </div>

        <div className="mt-5 rounded-[18px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] p-4">
          <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="bp-story-pulse h-2 w-2 rounded-full bg-[#D4AF37]" /><span className="text-[7px] font-black uppercase tracking-[0.15em] text-[#D4AF37]">ACCOUNT ONLINE</span></div><span className="text-[7px] font-black text-white">ACTIVE</span></div>
          <p className="mt-4 text-[1.6rem] font-black uppercase tracking-[-0.05em] text-white">Trade from your environment.</p>
        </div>

        <div className="mt-auto flex items-center justify-center gap-2 pt-5 text-[#D4AF37]"><ArrowRight className="h-3 w-3" /><ArrowRight className="h-3 w-3" /><ArrowRight className="h-3 w-3" /></div>
      </div>
    </div>
  );
}

function FocusVisual() {
  return (
    <div className="relative h-full min-h-[315px] overflow-hidden rounded-[24px] border border-white/10 bg-[#080809] p-5">
      <div className="absolute -left-14 bottom-0 h-44 w-44 rounded-full bg-[#D4AF37]/10 blur-[65px]" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between"><div><p className="text-[7px] font-black uppercase tracking-[0.17em] text-[#D4AF37]">FOCUS MODE</p><p className="mt-1 text-sm font-black text-white">Only what matters.</p></div><FocusIcon /></div>

        <div className="mt-7 space-y-2.5">
          {["Setup confirmed", "Risk within limits", "Session complete"].map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-[15px] border border-white/10 bg-white/[0.03] px-3 py-3">
              <span className={`grid h-7 w-7 place-items-center rounded-full ${index === 2 ? "bg-[#D4AF37] text-black" : "bg-[#D4AF37]/10 text-[#D4AF37]"}`}><CheckIcon className="h-3.5 w-3.5" /></span>
              <span className="text-[9px] font-black uppercase tracking-[0.08em] text-white">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto rounded-[16px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] px-4 py-3">
          <div className="flex items-center justify-between"><span className="text-[7px] font-black uppercase tracking-[0.14em] text-[#D4AF37]">RISK SIGNAL</span><span className="bp-story-pulse h-2 w-2 rounded-full bg-[#D4AF37]" /></div>
          <p className="mt-2 text-[10px] font-black text-white">Healthy and within the plan.</p>
        </div>
      </div>
    </div>
  );
}

function StoryVisual({ scene }: { scene: SceneType }) {
  if (scene === "performance") return <PerformanceVisual />;
  if (scene === "reward") return <RewardVisual />;
  if (scene === "freedom") return <FreedomVisual />;
  if (scene === "focus") return <FocusVisual />;
  return <ProcessVisual />;
}

function VerifiedMark() {
  return <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#D4AF37]/12 text-[#9A7117]"><CheckIcon /></span>;
}

function RewardRow({ item, index }: { item: PayoutItem; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-[18px] border border-black/10 bg-white transition duration-300 hover:border-[#D4AF37]/30 hover:shadow-[0_14px_35px_rgba(73,55,14,.07)]">
      <div className="relative flex items-center gap-4 px-4 py-4 sm:px-5">
        <div className="hidden h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#F3EFE6] text-[7px] font-black text-[#8E6815] sm:grid">{String(index + 1).padStart(2, "0")}</div>
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[13px] border border-black/10 bg-[#F7F4ED] text-[24px]">{item.flag}</div>
          <div className="min-w-0"><p className="truncate text-[12px] font-black text-[#080808]">{item.country}</p><div className="mt-1 flex items-center gap-2"><VerifiedMark /><span className="text-[7px] font-black uppercase tracking-[0.12em] text-[#222]">{item.label}</span></div></div>
        </div>
        <div className="text-right"><p className="text-lg font-black tracking-[-0.045em] text-[#080808] sm:text-xl">{item.amount}</p><p className="mt-1 text-[6px] font-black uppercase tracking-[0.15em] text-[#8C6514]">Reward preview</p></div>
        <span className="bp-ledger-arrow hidden shrink-0 text-[#9B7318] sm:block"><ArrowRight /></span>
      </div>
    </article>
  );
}

function FeaturedReward({ item }: { item: PayoutItem }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#D4AF37]/25 bg-[#09090A] p-5 text-white shadow-[0_28px_75px_rgba(0,0,0,.18)] sm:p-6">
      <div className="absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#D4AF37]/12 blur-[70px]" />
      <div className="relative">
        <div className="flex items-center justify-between"><div><p className="text-[7px] font-black uppercase tracking-[0.18em] text-[#D4AF37]">FEATURED REWARD MOMENT</p><p className="mt-1 text-[10px] font-bold text-white">BlackProp community ledger</p></div><div className="grid h-10 w-10 place-items-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[9px] font-black text-[#F0D16A]">BP</div></div>
        <div className="mt-9"><p className="text-[7px] font-black uppercase tracking-[0.16em] text-[#D4AF37]">REWARD AMOUNT</p><p className="mt-2 text-[3rem] font-black leading-none tracking-[-0.07em] text-white sm:text-[3.7rem]">{item.amount}</p></div>
        <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5"><div className="grid h-14 w-14 place-items-center rounded-[16px] border border-white/10 bg-white/[0.05] text-[31px]">{item.flag}</div><div><p className="text-sm font-black text-white">{item.country}</p><div className="mt-2 flex items-center gap-2"><span className="bp-ledger-pulse h-1.5 w-1.5 rounded-full bg-[#D4AF37]" /><span className="text-[7px] font-black uppercase tracking-[0.13em] text-[#F0D16A]">{item.label}</span></div></div></div>
        <div className="relative mt-5 overflow-hidden rounded-[16px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] px-4 py-3"><span className="bp-ledger-scan absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-[#F0D16A]/15 to-transparent" /><div className="relative flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#D4AF37] text-black"><CheckIcon /></span><div><p className="text-[7px] font-black uppercase tracking-[0.14em] text-[#D4AF37]">STATUS</p><p className="mt-0.5 text-[10px] font-black text-white">Reward preview</p></div><span className="ml-auto text-[7px] font-black tracking-[0.14em] text-white">BLACKPROP</span></div></div>
      </div>
    </div>
  );
}

function CountryChip({ item }: { item: PayoutItem }) {
  return <div className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 transition hover:border-[#D4AF37]/30 hover:shadow-[0_10px_25px_rgba(68,52,13,.06)]"><span className="text-lg leading-none">{item.flag}</span><span className="text-[7px] font-black uppercase tracking-[0.11em] text-[#111]">{item.country}</span></div>;
}

function RewardTile({ item }: { item: PayoutItem }) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] border border-black/10 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/30 hover:shadow-[0_18px_45px_rgba(72,54,14,.07)]">
      <div className="flex items-center justify-between"><div className="grid h-11 w-11 place-items-center rounded-[13px] border border-black/10 bg-[#F7F3EA] text-[24px]">{item.flag}</div><span className="text-[7px] font-black uppercase tracking-[0.13em] text-[#896414]">Reward</span></div>
      <p className="mt-5 text-[1.8rem] font-black tracking-[-0.055em] text-[#080808]">{item.amount}</p><p className="mt-3 text-sm font-black text-[#080808]">{item.country}</p><div className="mt-3 flex items-center gap-2"><VerifiedMark /><span className="text-[7px] font-black uppercase tracking-[0.12em] text-[#222]">{item.label}</span></div>
    </div>
  );
}

export function TraderStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  function previous() {
    setActiveIndex((current) => (current === 0 ? stories.length - 1 : current - 1));
  }

  function next() {
    setActiveIndex((current) => (current === stories.length - 1 ? 0 : current + 1));
  }

  return (
    <section className="relative overflow-hidden bg-[#FBFAF7] py-20 text-black sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-[4%] h-[680px] w-[1100px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.055] blur-[180px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            FIRST SECTION — TRADER STORIES
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B78A22]/20 bg-[#D4AF37]/10 px-3.5 py-2">
              <span className="text-[#936C16]"><UsersIcon /></span>
              <span className="text-[8px] font-black uppercase tracking-[0.19em] text-[#7E5D14]">TRADER STORIES</span>
            </div>

            <h2 className="mt-6 max-w-[720px] text-[2.8rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#080808] sm:text-[3.8rem] lg:text-[4.7rem]">
              THE EDGE IS IN
              <span className="block text-[#B48720]">THE PROCESS.</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <div className="max-w-[470px] border-l-2 border-[#D4AF37] pl-5 lg:ml-auto">
              <p className="text-sm font-medium leading-7 text-[#171717] sm:text-base">Five simple moments that shape a serious trading journey — preparation, performance, reward, freedom and focus.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[30px] border border-black/10 bg-[#0A0A0B] shadow-[0_30px_80px_rgba(48,38,15,.13)]">
          <div className="border-b border-white/10 p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {stories.map((story, index) => (
                <StageButton key={story.id} story={story} active={activeIndex === index} onClick={() => setActiveIndex(index)} />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[.88fr_1.12fr]">
            <div className="relative border-b border-white/10 p-5 text-white sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
              <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-[80px]" />
              <div key={activeStory.id} className="bp-story-enter relative flex h-full min-h-[340px] flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3"><span className="text-[8px] font-black text-[#D4AF37]">0{activeStory.id}</span><span className="h-px w-8 bg-[#D4AF37]/40" /><span className="text-[8px] font-black uppercase tracking-[0.17em] text-[#D4AF37]">{activeStory.kicker}</span></div>
                  <div className="grid h-10 w-10 place-items-center rounded-[13px] border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#F0D16A]"><StoryIcon scene={activeStory.scene} /></div>
                </div>

                <h3 className="mt-7 max-w-[470px] text-[2rem] font-black uppercase leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.7rem]">{activeStory.title}</h3>
                <div className="mt-6 border-l-2 border-[#D4AF37] pl-4"><p className="text-sm font-semibold leading-6 text-white">“{activeStory.quote}”</p></div>

                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[7px] font-black uppercase tracking-[0.15em] text-[#D4AF37]">CURRENT SIGNAL</p>
                  <div className="mt-3 flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#D4AF37] text-black"><CheckIcon /></span><div><p className="text-[11px] font-black text-white">{activeStory.status}</p><p className="mt-1 text-[8px] font-semibold text-white">{activeStory.detail}</p></div></div>
                </div>

                <div className="mt-auto flex items-center justify-between pt-8">
                  <button type="button" onClick={previous} aria-label="Previous story" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"><ArrowLeft /></button>
                  <div className="text-[8px] font-black tracking-[0.14em] text-white">0{activeIndex + 1}<span className="mx-2 text-[#D4AF37]">/</span>0{stories.length}</div>
                  <button type="button" onClick={next} aria-label="Next story" className="grid h-10 w-10 place-items-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#F0D16A] transition hover:bg-[#D4AF37]/15"><span className="bp-story-next"><ArrowRight /></span></button>
                </div>
              </div>
            </div>

            <div key={`visual-${activeStory.id}`} className="bp-story-enter p-4 sm:p-5 lg:p-6"><StoryVisual scene={activeStory.scene} /></div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[{ label: "PREPARE", copy: "Build the setup." }, { label: "EXECUTE", copy: "Trade the process." }, { label: "PROGRESS", copy: "Earn the next stage." }].map((item, index) => (
            <div key={item.label} className="group flex items-center gap-4 rounded-[18px] border border-black/10 bg-white px-4 py-4 transition hover:border-[#D4AF37]/30">
              <span className="text-[8px] font-black text-[#B48720]">0{index + 1}</span><div><p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#080808]">{item.label}</p><p className="mt-1 text-[9px] font-semibold text-[#333]">{item.copy}</p></div>{index !== 2 && <span className="bp-story-mini-arrow ml-auto hidden text-[#B48720] sm:block"><ArrowRight /></span>}
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center">
          <p className="text-sm font-semibold text-[#222]">Your trading story starts with the first challenge.</p>
          <a href="#challenges" className="group relative mt-5 inline-flex min-w-[215px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F5DA79_0%,#D4AF37_50%,#966B12_100%)] px-7 py-4 text-sm font-black text-[#080806] shadow-[0_16px_42px_rgba(149,112,21,.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(149,112,21,.28)]">START YOUR CHALLENGE<span className="bp-story-next"><ArrowRight /></span><span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/45 blur-md transition-all duration-700 group-hover:left-[125%]" /></a>
        </div>

        {/* =====================================================
            SECOND SECTION — REWARD LEDGER
        ====================================================== */}

        <div className="my-20 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent sm:my-24" />

        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B88B23]/20 bg-[#D4AF37]/10 px-3.5 py-2"><span className="text-[#936C16]"><TrophyIcon /></span><span className="text-[8px] font-black uppercase tracking-[0.19em] text-[#835F12]">BLACKPROP REWARD LEDGER</span></div>
              <h3 className="mt-6 max-w-[650px] text-[2.8rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#080808] sm:text-[3.7rem] lg:text-[4.4rem]">PROGRESS SHOULD<span className="block text-[#B48720]">BE REMEMBERED.</span></h3>
            </div>
            <div className="lg:pb-1"><div className="max-w-[470px] border-l-2 border-[#D4AF37] pl-5 lg:ml-auto"><p className="text-sm font-medium leading-7 text-[#171717] sm:text-base">A visual ledger for completed milestones, reward moments and trader progress from across the BlackProp community.</p></div></div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-[7px] font-black uppercase tracking-[0.17em] text-[#896414]">COMMUNITY SIGNALS</span>
            {payoutItems.filter((item, index, array) => array.findIndex((candidate) => candidate.country === item.country) === index).slice(0, 8).map((item) => <CountryChip key={item.country} item={item} />)}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[.72fr_1.28fr]">
            <FeaturedReward item={payoutItems[0]} />
            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#F2EFE8] p-3 sm:p-4">
              <div className="flex items-center justify-between px-1 pb-3"><div><p className="text-[7px] font-black uppercase tracking-[0.17em] text-[#8C6514]">RECENT MOMENTS</p><p className="mt-1 text-[11px] font-black text-[#080808]">Community reward activity</p></div><div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5"><span className="bp-ledger-pulse h-1.5 w-1.5 rounded-full bg-[#D4AF37]" /><span className="text-[6px] font-black uppercase tracking-[0.13em] text-[#111]">LEDGER</span></div></div>
              <div className="space-y-2">{payoutItems.slice(1, 6).map((item, index) => <RewardRow key={`${item.country}-${index}`} item={item} index={index + 1} />)}</div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">{payoutItems.slice(6, 9).map((item, index) => <RewardTile key={`${item.country}-${index}`} item={item} />)}</div>

          <div className="relative mt-4 overflow-hidden rounded-[22px] border border-[#D4AF37]/20 bg-[#0A0A0B] px-5 py-5 text-white sm:px-6">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-[55px]" /><div className="absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-4"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#F0D16A]"><UsersIcon /></div><div><p className="text-[7px] font-black uppercase tracking-[0.17em] text-[#D4AF37]">THE LEDGER CONTINUES</p><p className="mt-1 text-sm font-black text-white">More trader milestones can appear here as verified BlackProp community data becomes available.</p></div></div><a href="#challenges" className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.14em] text-[#F0D16A]">JOIN BLACKPROP<span className="bp-ledger-arrow"><ArrowRight /></span></a></div>
          </div>

          <div className="mx-auto mt-9 flex max-w-[760px] items-center gap-4"><div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/30" /><p className="shrink-0 text-[7px] font-black uppercase tracking-[0.17em] text-[#171717]">OBJECTIVE<span className="mx-2 text-[#B48720]">→</span>PROGRESS<span className="mx-2 text-[#B48720]">→</span>REWARD</p><div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/30" /></div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-[9px] font-medium leading-4 text-[#171717]">Trader stories, countries and reward amounts shown are demonstration content for this frontend preview. Replace them with verified BlackProp customer and payout data before production launch.</p>
        </div>
      </div>

      <style>{`
        @keyframes bpStoryEnter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bpStoryArrow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        @keyframes bpStoryPulse {
          0%, 100% { opacity: .45; transform: scale(.85); box-shadow: 0 0 0 rgba(212,175,55,0); }
          50% { opacity: 1; transform: scale(1.15); box-shadow: 0 0 16px rgba(212,175,55,.55); }
        }

        @keyframes bpStoryScan {
          0% { left: -100px; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: calc(100% + 20px); opacity: 0; }
        }

        @keyframes bpStoryBar {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }

        @keyframes bpLedgerPulse {
          0%, 100% { opacity: .45; transform: scale(.85); box-shadow: 0 0 0 rgba(212,175,55,0); }
          50% { opacity: 1; transform: scale(1.15); box-shadow: 0 0 16px rgba(212,175,55,.55); }
        }

        @keyframes bpLedgerArrow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        @keyframes bpLedgerScan {
          0% { left: -100px; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: calc(100% + 20px); opacity: 0; }
        }

        .bp-story-enter { animation: bpStoryEnter .4s ease-out both; }
        .bp-story-next, .bp-story-tab-arrow, .bp-story-mini-arrow, .bp-story-long-arrow { animation: bpStoryArrow 1.6s ease-in-out infinite; }
        .bp-story-pulse { animation: bpStoryPulse 2.8s ease-in-out infinite; }
        .bp-story-scan { animation: bpStoryScan 4s ease-in-out infinite; }
        .bp-story-bar { animation: bpStoryBar .8s ease-out both; }
        .bp-ledger-pulse { animation: bpLedgerPulse 3s ease-in-out infinite; }
        .bp-ledger-arrow { animation: bpLedgerArrow 1.6s ease-in-out infinite; }
        .bp-ledger-scan { animation: bpLedgerScan 4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .bp-story-enter,
          .bp-story-next,
          .bp-story-tab-arrow,
          .bp-story-mini-arrow,
          .bp-story-long-arrow,
          .bp-story-pulse,
          .bp-story-scan,
          .bp-story-bar,
          .bp-ledger-pulse,
          .bp-ledger-arrow,
          .bp-ledger-scan { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
