"use client";

import { useState, type ReactNode } from "react";

/* =========================================================
   TYPES
========================================================= */

type SceneType =
  | "office"
  | "performance"
  | "reward"
  | "mobile"
  | "night";

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

/* =========================================================
   DATA
========================================================= */

const stories: Story[] = [
  {
    id: 1,
    kicker: "THE PROCESS",
    title: "Discipline before everything.",
    quote: "It starts with the setup.",
    status: "Target completed",
    detail: "Evaluation objective reached",
    scene: "office",
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
    scene: "mobile",
  },
  {
    id: 5,
    kicker: "THE FOCUS",
    title: "Quiet room. Serious execution.",
    quote: "Cut the noise. Trade the plan.",
    status: "Session complete",
    detail: "Risk limits healthy",
    scene: "night",
  },
];

const payoutItems: PayoutItem[] = [
  {
    amount: "$9,401.23",
    flag: "🇺🇸",
    country: "United States",
    label: "Verified trader",
  },
  {
    amount: "$2,262.34",
    flag: "🇵🇰",
    country: "Pakistan",
    label: "Verified trader",
  },
  {
    amount: "$1,825.16",
    flag: "🇿🇦",
    country: "South Africa",
    label: "Verified trader",
  },
  {
    amount: "$3,240.21",
    flag: "🇮🇳",
    country: "India",
    label: "Verified trader",
  },
  {
    amount: "$1,240.40",
    flag: "🇲🇼",
    country: "Malawi",
    label: "Verified trader",
  },
  {
    amount: "$4,466.28",
    flag: "🇫🇷",
    country: "France",
    label: "Verified trader",
  },
  {
    amount: "$2,401.20",
    flag: "🇮🇳",
    country: "India",
    label: "Verified trader",
  },
  {
    amount: "$5,840.00",
    flag: "🇱🇹",
    country: "Lithuania",
    label: "Verified trader",
  },
  {
    amount: "$4,084.49",
    flag: "🇬🇧",
    country: "United Kingdom",
    label: "Verified trader",
  },
  {
    amount: "$2,027.60",
    flag: "🇩🇰",
    country: "Denmark",
    label: "Verified trader",
  },
  {
    amount: "$2,925.26",
    flag: "🇵🇰",
    country: "Pakistan",
    label: "Verified trader",
  },
];

/* =========================================================
   ICONS
========================================================= */

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M3.5 10h12M11.5 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M16.5 10h-12M8.5 6l-4 4 4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m5.5 10.3 2.8 2.8 6.2-6.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle
        cx="7"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="1.35"
      />

      <path
        d="M2.5 16c.7-3.1 2.2-4.5 4.5-4.5 2.2 0 3.8 1.4 4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />

      <circle
        cx="14"
        cy="8"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity=".55"
      />

      <path
        d="M12.8 12.5c2.3 0 3.7 1.1 4.3 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity=".55"
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
      aria-hidden="true"
    >
      <path
        d="M6 4h8v3.5c0 3.1-1.6 5-4 5s-4-1.9-4-5V4Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M6 6H3.5c0 2.8 1.2 4.1 3.5 4.1M14 6h2.5c0 2.8-1.2 4.1-3.5 4.1M10 12.5V15M7.4 17h5.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   CHART
========================================================= */

function TradingChart({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: compact
            ? "24px 20px"
            : "35px 28px",
        }}
      />

      <svg
        viewBox="0 0 300 160"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="storyChartFill"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              stopColor="#D4AF37"
              stopOpacity=".22"
            />

            <stop
              offset="1"
              stopColor="#D4AF37"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          d="M2 139C22 129 33 136 51 119C68 103 84 117 102 100C121 82 135 97 153 83C173 67 187 77 205 58C221 42 238 58 257 39C274 22 286 30 298 15V160H2V139Z"
          fill="url(#storyChartFill)"
        />

        <path
          d="M2 139C22 129 33 136 51 119C68 103 84 117 102 100C121 82 135 97 153 83C173 67 187 77 205 58C221 42 238 58 257 39C274 22 286 30 298 15"
          stroke="#D4AF37"
          strokeWidth={compact ? "2" : "3"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          cx="298"
          cy="15"
          r="4"
          fill="#F3D573"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   LAPTOP
========================================================= */

function Laptop({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative aspect-[1.58] rounded-t-[16px] bg-[linear-gradient(135deg,#787874,#292929_38%,#898984_67%,#393936)] p-[5px] shadow-[0_28px_45px_rgba(36,29,17,.27)]">
        <div className="relative h-full overflow-hidden rounded-t-[11px] bg-[#070708]">
          <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center justify-between border-b border-white/[0.05] px-3">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

              <span className="text-[5px] font-black tracking-[0.14em] text-white/45">
                BLACKPROP
              </span>
            </div>

            <span className="text-[5px] font-bold text-emerald-400/70">
              LIVE
            </span>
          </div>

          <div className="absolute inset-x-3 bottom-3 top-9">
            <TradingChart />
          </div>

          <div className="pointer-events-none absolute -left-3 top-0 h-[140%] w-[18%] -rotate-[13deg] bg-white/[0.04] blur-sm" />
        </div>
      </div>

      <div
        className="relative -left-[7%] h-[27px] w-[114%] origin-top rounded-b-xl bg-[linear-gradient(180deg,#AAAAA5,#63635F_43%,#292927)] shadow-[0_12px_20px_rgba(29,24,17,.2)]"
        style={{
          transform:
            "perspective(320px) rotateX(58deg)",
        }}
      >
        <div className="absolute left-1/2 top-1 h-[10px] w-[28%] -translate-x-1/2 rounded bg-black/10" />
      </div>
    </div>
  );
}

/* =========================================================
   PHONE
========================================================= */

function TradingPhone() {
  return (
    <div className="relative h-[154px] w-[77px] rounded-[19px] bg-[linear-gradient(145deg,#93938E,#242423_35%,#666662)] p-[4px] shadow-[0_20px_35px_rgba(36,29,17,.25)]">
      <div className="relative h-full overflow-hidden rounded-[15px] bg-[#070708]">
        <div className="absolute left-1/2 top-1.5 h-2.5 w-8 -translate-x-1/2 rounded-full bg-black" />

        <div className="absolute inset-x-2 top-8">
          <p className="text-[5px] font-bold uppercase tracking-[0.12em] text-white/30">
            Equity
          </p>

          <p className="mt-1 text-[9px] font-black text-white">
            $107,842
          </p>

          <p className="mt-0.5 text-[5px] font-bold text-emerald-400">
            +7.84%
          </p>
        </div>

        <div className="absolute inset-x-2 bottom-7 h-14">
          <TradingChart compact />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COFFEE
========================================================= */

function CoffeeCup() {
  return (
    <div className="relative h-[76px] w-[70px]">
      <div className="absolute left-1/2 top-0 z-10 h-[18px] w-[62px] -translate-x-1/2 rounded-[50%] bg-[#E8D9BD]">
        <div className="absolute inset-[5px] rounded-[50%] bg-[#765035]" />
      </div>

      <div
        className="absolute left-1/2 top-[8px] h-[64px] w-[57px] -translate-x-1/2 bg-[linear-gradient(90deg,#C6AB7E,#F1DFC0,#B28E61)]"
        style={{
          clipPath:
            "polygon(5% 0,95% 0,82% 100%,18% 100%)",
        }}
      />
    </div>
  );
}

/* =========================================================
   PLANT
========================================================= */

function Plant() {
  return (
    <div className="relative h-[65px] w-[48px]">
      <div className="absolute bottom-0 left-1/2 h-5 w-8 -translate-x-1/2 rounded-b-md bg-[linear-gradient(90deg,#8A754F,#C2A878,#796542)]" />

      <div className="absolute bottom-4 left-1/2 h-12 w-10 -translate-x-1/2">
        <span className="absolute bottom-0 left-[42%] h-11 w-2.5 origin-bottom -rotate-[30deg] rounded-full bg-[#53654F]" />
        <span className="absolute bottom-0 left-[44%] h-12 w-2.5 origin-bottom rotate-[28deg] rounded-full bg-[#61735C]" />
        <span className="absolute bottom-0 left-[42%] h-10 w-2.5 origin-bottom -rotate-[10deg] rounded-full bg-[#73816A]" />
        <span className="absolute bottom-0 left-[44%] h-10 w-2.5 origin-bottom rotate-[9deg] rounded-full bg-[#69775F]" />
      </div>
    </div>
  );
}

/* =========================================================
   CERTIFICATE
========================================================= */

function CertificatePreview({
  amount = "$5,600",
}: {
  amount?: string;
}) {
  return (
    <div className="relative aspect-[1.18] w-[142px] overflow-hidden rounded-[12px] bg-[#0E0E0F] p-2 shadow-[0_22px_40px_rgba(38,30,15,.28)]">
      <div className="relative h-full overflow-hidden rounded-[8px] border border-[#D4AF37]/28 bg-[radial-gradient(circle_at_75%_20%,rgba(212,175,55,.12),transparent_35%)] px-3 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[5px] font-black uppercase tracking-[0.13em] text-white/55">
              BlackProp
            </p>

            <p className="mt-0.5 text-[6px] font-black uppercase tracking-[0.08em] text-[#D4AF37]">
              Payout Certificate
            </p>
          </div>

          <div className="grid h-6 w-6 place-items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[6px] font-black text-[#E4C15A]">
            BP
          </div>
        </div>

        <p className="mt-4 text-[5px] font-semibold uppercase tracking-[0.1em] text-white/25">
          Funded reward
        </p>

        <p className="mt-1 text-[13px] font-black tracking-[-0.06em] text-white">
          {amount}
        </p>

        <div className="mt-3 h-px bg-white/[0.06]" />

        <div className="mt-2 flex items-center justify-between text-[4px] font-bold uppercase tracking-[0.08em] text-white/28">
          <span>Approved</span>
          <span>BlackProp</span>
        </div>

        <div className="pointer-events-none absolute -left-10 top-0 h-full w-16 rotate-[15deg] bg-white/[0.04] blur-sm" />
      </div>
    </div>
  );
}

/* =========================================================
   REALISTIC TRADER
========================================================= */

function SeatedTrader() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-[-6%] z-30 h-[78%] w-[65%]">
      <div className="relative h-full w-full">
        <div className="absolute bottom-[4%] left-[20%] h-[30%] w-[65%] rounded-full bg-black/30 blur-[45px]" />

        <div className="absolute left-[35%] top-[15%] h-[35%] w-[35%] rounded-full bg-[#D4AF37]/10 blur-[70px]" />

        <img
          src="/images/trader-back.png"
          alt="Trader working at a workstation"
          className="relative h-full w-full object-contain object-bottom drop-shadow-[0_35px_45px_rgba(0,0,0,.35)]"
        />

        <div className="pointer-events-none absolute bottom-[15%] right-[10%] h-[35%] w-[18%] rounded-full bg-blue-300/10 blur-[45px]" />
      </div>
    </div>
  );
}

/* =========================================================
   OFFICE SCENE
   KEPT UNCHANGED
========================================================= */

function OfficeScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[#D8D3C9]">
      <div className="absolute inset-x-0 top-0 h-[42%] bg-[linear-gradient(180deg,#DDD9D0,#CAC3B7)]" />

      <div className="absolute left-[4%] top-[6%] h-[24%] w-[92%] overflow-hidden rounded-xl bg-[#E9E5DD] shadow-[inset_0_1px_0_white]">
        <div className="absolute left-[7%] top-[12%] h-2 w-16 rounded-full bg-white/80 blur-[1px]" />
        <div className="absolute left-[42%] top-[12%] h-2 w-16 rounded-full bg-white/70 blur-[1px]" />
        <div className="absolute right-[7%] top-[12%] h-2 w-16 rounded-full bg-white/70 blur-[1px]" />
      </div>

      <div className="absolute right-[12%] top-[11%] h-24 w-24 rounded-full bg-[#D4AF37]/10 blur-[35px]" />

      <div className="absolute inset-x-[2%] top-[28%] z-10 flex items-end justify-around">
        <Plant />
        <Plant />
        <Plant />
        <Plant />
        <Plant />
      </div>

      <div
        className="absolute -left-[10%] bottom-[-3%] h-[52%] w-[120%] bg-[linear-gradient(120deg,#806343,#C2A174_43%,#A17E58_72%,#725638)] shadow-[0_-5px_20px_rgba(59,45,25,.13)]"
        style={{
          clipPath:
            "polygon(0 18%,100% 0,100% 100%,0 100%)",
        }}
      />

      <div className="absolute bottom-[29%] left-[-5%] h-px w-[110%] -rotate-[5deg] bg-white/14" />
      <div className="absolute bottom-[17%] left-[-5%] h-px w-[110%] -rotate-[5deg] bg-black/[0.06]" />

      <div className="absolute bottom-[19%] right-[5%] z-20 w-[62%]">
        <Laptop />
      </div>

      <div
        className="absolute bottom-[3%] right-[27%] z-20"
        style={{
          transform:
            "rotate(11deg) scale(.66)",
        }}
      >
        <TradingPhone />
      </div>

      <div
        className="absolute bottom-[4%] right-[3%] z-20"
        style={{
          transform: "scale(.78)",
        }}
      >
        <CoffeeCup />
      </div>

      <SeatedTrader />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_56%_44%,transparent_43%,rgba(52,41,25,.1)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  );
}

/* =========================================================
   PERFORMANCE SCENE
========================================================= */

function PerformanceScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[#C9C1B4]">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#E2DDD4_0%,#C9C0B3_54%,#ACA292_100%)]" />

      <div className="absolute right-[7%] top-[6%] h-[25%] w-[44%] overflow-hidden rounded-[18px] border border-white/40 bg-white/25">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/[0.035]" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-black/[0.035]" />
      </div>

      <div className="absolute right-[8%] top-[8%] h-52 w-52 rounded-full bg-[#D4AF37]/10 blur-[65px]" />

      <div
        className="absolute inset-x-[-10%] bottom-[-4%] h-[48%] bg-[linear-gradient(115deg,#6E5139,#B3865E_45%,#856043_76%,#604630)]"
        style={{
          clipPath:
            "polygon(0 14%,100% 0,100% 100%,0 100%)",
        }}
      />

      <div className="absolute left-1/2 top-[16%] z-20 w-[78%] max-w-[430px] -translate-x-1/2">
        <Laptop />
      </div>

      <div className="absolute bottom-[18%] right-[6%] z-30 w-[150px] rounded-[18px] border border-white/[0.07] bg-[#0D0D0E] p-4 shadow-[0_18px_38px_rgba(34,27,17,.24)]">
        <div className="flex items-center justify-between">
          <span className="text-[6px] font-black uppercase tracking-[0.15em] text-white/28">
            Performance
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
        </div>

        <p className="mt-3 text-[24px] font-black tracking-[-0.06em] text-white">
          +6.84%
        </p>

        <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.1em] text-[#D4AF37]">
          Current cycle
        </p>

        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.07]">
          <div className="h-full w-[68%] rounded-full bg-[linear-gradient(90deg,#9A7017,#E6C45C)]" />
        </div>
      </div>

      <div
        className="absolute bottom-[4%] left-[4%] z-20"
        style={{
          transform: "scale(.68)",
        }}
      >
        <CoffeeCup />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_48%,rgba(42,32,20,.12)_100%)]" />
    </div>
  );
}

/* =========================================================
   REWARD APPROVED SCENE
========================================================= */

function RewardScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[#D8D3C9]">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#E9E5DE_0%,#D4CDC2_55%,#B7ADA0_100%)]" />

      <div className="absolute left-[7%] top-[6%] h-[23%] w-[86%] rounded-[18px] border border-white/40 bg-white/25" />

      <div className="absolute left-1/2 top-[38%] h-64 w-64 -translate-x-1/2 rounded-full bg-[#D4AF37]/12 blur-[75px]" />

      <div
        className="absolute inset-x-[-8%] bottom-[-5%] h-[43%] bg-[linear-gradient(120deg,#6E5139,#AE835C_45%,#876142_76%,#604630)]"
        style={{
          clipPath:
            "polygon(0 14%,100% 0,100% 100%,0 100%)",
        }}
      />

      <div className="absolute left-1/2 top-[23%] z-30 w-[78%] max-w-[350px] -translate-x-1/2">
        <div className="relative overflow-hidden rounded-[26px] border border-[#D4AF37]/20 bg-[#0D0D0E] p-5 shadow-[0_28px_55px_rgba(45,34,15,.28)] sm:p-6">
          <div className="absolute inset-x-[22%] top-0 h-px bg-gradient-to-r from-transparent via-[#E5C45D] to-transparent" />

          <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#D4AF37]/10 blur-[45px]" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[6px] font-black uppercase tracking-[0.18em] text-white/28">
                  BlackProp Rewards
                </p>

                <p className="mt-1 text-[8px] font-bold text-white/48">
                  Reward status
                </p>
              </div>

              <div className="grid h-9 w-9 place-items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[9px] font-black text-[#E2BE52]">
                BP
              </div>
            </div>

            <div className="mt-7 flex justify-center">
              <div className="grid h-20 w-20 place-items-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.07]">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-emerald-400 text-[#07110D] shadow-[0_0_28px_rgba(74,222,128,.18)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="m6 12.5 4 4L18.5 8"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
              <p className="text-[24px] font-black tracking-[-0.055em] text-white">
                Reward Approved
              </p>

              <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.13em] text-emerald-400/75">
                Payout status confirmed
              </p>
            </div>

            <div className="my-5 h-px bg-white/[0.06]" />

            <div className="flex items-center justify-between">
              <span className="text-[7px] font-bold uppercase tracking-[0.12em] text-white/26">
                Status
              </span>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-[7px] font-black uppercase tracking-[0.12em] text-white/60">
                  Approved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="absolute bottom-[13%] left-[12%] z-20 h-2 w-2 rounded-full bg-[#D4AF37]/65" />

      <span className="absolute bottom-[18%] right-[12%] z-20 h-1.5 w-1.5 rounded-full bg-black/20" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,transparent_48%,rgba(48,37,23,.11)_100%)]" />
    </div>
  );
}

/* =========================================================
   MOBILE / FREEDOM SCENE
========================================================= */

function MobileScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[#D9D4CA]">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#ECE9E2_0%,#D3CCC0_55%,#BEB4A5_100%)]" />

      <div className="absolute inset-x-[7%] top-[6%] h-[29%] overflow-hidden rounded-[20px] border border-white/40 bg-[#F2EFE9]/90">
        <div className="absolute bottom-0 left-[8%] h-[55%] w-[22%] rounded-t-full bg-[#A8B39D]/30" />

        <div className="absolute bottom-0 right-[13%] h-[45%] w-[20%] rounded-t-full bg-[#B2B99E]/24" />

        <div className="absolute right-[8%] top-[10%] h-16 w-16 rounded-full bg-[#D4AF37]/10 blur-[22px]" />
      </div>

      <div
        className="absolute inset-x-[-12%] bottom-[-9%] h-[50%] bg-[linear-gradient(115deg,#805F42,#B58D64_48%,#77573D)]"
        style={{
          clipPath:
            "polygon(0 14%,100% 0,100% 100%,0 100%)",
        }}
      />

      <div
        className="absolute left-1/2 top-[22%] z-30"
        style={{
          transform:
            "translateX(-50%) rotate(-3deg) scale(2)",
        }}
      >
        <TradingPhone />
      </div>

      <div
        className="absolute bottom-[4%] right-[5%] z-20"
        style={{
          transform: "scale(.72)",
        }}
      >
        <CoffeeCup />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_48%,rgba(46,36,22,.1)_100%)]" />
    </div>
  );
}

/* =========================================================
   NIGHT / FOCUS SCENE
========================================================= */

function NightScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[#0E1012]">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#17191C_0%,#0F1113_55%,#090A0C_100%)]" />

      <div className="absolute right-[10%] top-[7%] h-56 w-56 rounded-full bg-[#D4AF37]/8 blur-[85px]" />

      <div
        className="absolute inset-x-[-10%] bottom-[-5%] h-[42%] bg-[linear-gradient(120deg,#201A15,#493827_48%,#241C16)]"
        style={{
          clipPath:
            "polygon(0 15%,100% 0,100% 100%,0 100%)",
        }}
      />

      <div className="absolute left-1/2 top-[12%] z-20 w-[78%] -translate-x-1/2">
        <div className="aspect-[1.65] rounded-[16px] bg-[linear-gradient(145deg,#55585C,#242629_50%,#626468)] p-[5px] shadow-[0_28px_55px_rgba(0,0,0,.6)]">
          <div className="relative h-full overflow-hidden rounded-[11px] bg-[#060708]">
            <div className="absolute inset-x-0 top-0 z-10 flex h-8 items-center justify-between border-b border-white/[0.05] px-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

                <span className="text-[5px] font-black tracking-[0.15em] text-white/40">
                  BLACKPROP
                </span>
              </div>

              <span className="text-[5px] font-bold uppercase tracking-[0.1em] text-white/25">
                Focus session
              </span>
            </div>

            <div className="absolute inset-x-3 bottom-3 top-10">
              <TradingChart />
            </div>
          </div>
        </div>

        <div className="mx-auto h-10 w-5 bg-[linear-gradient(90deg,#303236,#63666A,#282A2D)]" />

        <div className="mx-auto h-2 w-24 rounded-full bg-[#333538]" />
      </div>

      <div
        className="absolute bottom-[5%] left-1/2 z-20 h-[76px] w-[220px] rounded-[10px] bg-[#191B1E] p-2.5 shadow-[0_15px_30px_rgba(0,0,0,.5)]"
        style={{
          transform:
            "translateX(-50%) perspective(420px) rotateX(54deg)",
        }}
      >
        <div className="grid h-full grid-cols-12 gap-1">
          {Array.from({
            length: 60,
          }).map((_, index) => (
            <span
              key={index}
              className={
                index % 17 === 0
                  ? "rounded-[2px] bg-[#D4AF37]/40"
                  : "rounded-[2px] bg-white/[0.07]"
              }
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-[7%] left-[5%] z-30 rounded-[14px] border border-white/[0.06] bg-[#0C0D0F] px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

          <span className="text-[6px] font-black uppercase tracking-[0.13em] text-white/45">
            Risk healthy
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_42%,rgba(0,0,0,.42)_100%)]" />
    </div>
  );
}

/* =========================================================
   SCENE SWITCH
========================================================= */

function TraderScene({
  scene,
}: {
  scene: SceneType;
}) {
  switch (scene) {
    case "office":
      return <OfficeScene />;

    case "performance":
      return <PerformanceScene />;

    case "reward":
      return <RewardScene />;

    case "mobile":
      return <MobileScene />;

    case "night":
      return <NightScene />;

    default:
      return <OfficeScene />;
  }
}

/* =========================================================
   RESULT NOTIFICATION
========================================================= */

function ResultNotification({
  title,
  detail,
}: {
  title: string;
  detail: string;
}) {
  return (
    <div className="absolute inset-x-4 bottom-4 z-40 rounded-[18px] border border-black/[0.065] bg-white/[0.91] p-3.5 shadow-[0_18px_45px_rgba(47,39,21,.17)] backdrop-blur-xl sm:inset-x-5 sm:bottom-5">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#D4AF37]/10 text-[#A77D18]">
          <CheckIcon />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-[11px] font-black text-[#111]">
              {title}
            </p>

            <span className="text-[7px] font-bold uppercase tracking-[0.12em] text-black/25">
              BlackProp
            </span>
          </div>

          <p className="mt-1 truncate text-[9px] text-black/43">
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STORY CARD
========================================================= */

function StoryCard({
  story,
  active,
}: {
  story: Story;
  active: boolean;
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[30px] border bg-[#EDE9E0] transition-all duration-500 ${
        active
          ? "border-[#B78A22]/20 shadow-[0_35px_85px_rgba(68,54,20,.17)]"
          : "border-black/[0.05] shadow-[0_18px_50px_rgba(55,47,29,.09)]"
      }`}
    >
      <div className="relative aspect-[0.76/1] overflow-hidden bg-[#D6D0C5]">
        <TraderScene scene={story.scene} />

        <div
          className={`absolute z-40 max-w-[220px] rounded-2xl border border-black/[0.06] bg-white/[0.92] px-4 py-3 shadow-[0_15px_38px_rgba(49,41,20,.14)] backdrop-blur-xl ${
            active
              ? "right-4 top-5 sm:right-5 sm:top-6"
              : "left-4 top-5"
          }`}
        >
          <p className="text-[8px] font-black uppercase leading-4 tracking-[0.11em] text-black/56">
            {story.quote}
          </p>
        </div>

        <ResultNotification
          title={story.status}
          detail={story.detail}
        />
      </div>

      <div className="border-t border-black/[0.05] bg-[#F7F5F0] px-5 py-5 sm:px-6">
        <p className="text-[8px] font-black uppercase tracking-[0.19em] text-[#987117]">
          {story.kicker}
        </p>

        <h3 className="mt-2 text-xl font-black leading-tight tracking-[-0.045em] text-[#090909]">
          {story.title}
        </h3>
      </div>
    </article>
  );
}

/* =========================================================
   PAYOUT PROOF CARD
========================================================= */

function PayoutProofCard({
  item,
}: {
  item: PayoutItem;
}) {
  return (
    <article className="group relative min-h-[180px] overflow-hidden rounded-[25px] border border-black/[0.055] bg-[#F3F2EF] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#B58A24]/20 hover:bg-white hover:shadow-[0_22px_55px_rgba(68,54,20,.08)] sm:p-6">
      <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#D4AF37]/[0.07] blur-[50px]" />

      <div className="relative flex h-full items-start justify-between gap-5">
        <div className="flex min-h-[128px] flex-col">
          <p className="text-2xl font-black tracking-[-0.055em] text-[#080808] sm:text-[1.75rem]">
            {item.amount}
          </p>

          <div className="mt-auto flex items-center gap-3 pt-8">
            <span className="text-3xl leading-none">
              {item.flag}
            </span>

            <div>
              <p className="text-sm font-bold text-black/72">
                {item.country}
              </p>

              <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-black/28">
                {item.label}
              </p>
            </div>
          </div>
        </div>

        <div
          className="shrink-0 origin-top-right"
          style={{
            transform: "scale(.7)",
            marginBottom: "-45px",
            marginLeft: "-25px",
          }}
        >
          <CertificatePreview
            amount={item.amount}
          />
        </div>
      </div>

      <div className="absolute inset-x-[14%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#B58A24]/0 to-transparent transition group-hover:via-[#B58A24]/35" />
    </article>
  );
}

/* =========================================================
   FINAL CARD
========================================================= */

function MoreTradersCard() {
  return (
    <article className="group relative flex min-h-[180px] items-center justify-center overflow-hidden rounded-[25px] border border-[#B48A25]/15 bg-[linear-gradient(135deg,#131313,#080808)] p-6 text-center shadow-[0_20px_45px_rgba(34,28,15,.13)]">
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

      <div className="relative">
        <div className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E2BD52]">
          <UsersIcon />
        </div>

        <p className="mt-4 text-sm font-black text-white">
          And this is just the beginning.
        </p>

        <p className="mx-auto mt-2 max-w-[180px] text-[9px] leading-4 text-white/35">
          More BlackProp trader milestones will appear here as the
          community grows.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.16em] text-[#D4AF37]">
          Join the community
          <ArrowRight />
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export function TraderStories() {
  const [activeIndex, setActiveIndex] =
    useState(1);

  function previous() {
    setActiveIndex((current) =>
      current === 0
        ? stories.length - 1
        : current - 1
    );
  }

  function next() {
    setActiveIndex((current) =>
      current === stories.length - 1
        ? 0
        : current + 1
    );
  }

  function getPosition(index: number) {
    let difference =
      index - activeIndex;

    if (
      difference >
      stories.length / 2
    ) {
      difference -= stories.length;
    }

    if (
      difference <
      -stories.length / 2
    ) {
      difference += stories.length;
    }

    return difference;
  }

  return (
    <section className="relative overflow-hidden bg-[#FBFAF7] py-24 text-black sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-[3%] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[180px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.022) 1px, transparent 1px)",
          backgroundSize: "74px 74px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 80%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[950px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.055] bg-[#F0EFEA] px-3.5 py-2 shadow-[inset_0_1px_0_white]">
            <span className="text-[#A37A17]">
              <UsersIcon />
            </span>

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/43">
              Built around serious traders
            </span>
          </div>

          <h2 className="mt-7 text-[3.35rem] font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-[4.9rem] lg:text-[6rem]">
            <span className="text-[#070707]">
              Traders who
            </span>

            <span className="block bg-[linear-gradient(100deg,#080808_0%,#303030_25%,#79756A_48%,#C29A31_72%,#6F4D08_100%)] bg-clip-text text-transparent">
              set the standard.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[650px] text-sm leading-7 text-black/47 sm:text-base sm:leading-8">
            The preparation, discipline, patience and execution.
            BlackProp is being built for traders who approach
            performance like a professional craft.
          </p>
        </div>

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          <div className="relative mx-auto h-[690px] max-w-[1160px] sm:h-[720px] lg:h-[760px]">
            {stories.map(
              (story, index) => {
                const position =
                  getPosition(index);

                if (
                  Math.abs(position) >
                  1
                ) {
                  return null;
                }

                const active =
                  position === 0;

                return (
                  <div
                    key={story.id}
                    className={`absolute left-1/2 top-0 w-[88%] max-w-[395px] transition-all duration-500 ease-out sm:w-[67%] lg:block lg:w-[31.2%] ${
                      active
                        ? "z-20"
                        : "z-10 hidden lg:block"
                    }`}
                    style={{
                      transform: `translateX(calc(-50% + ${
                        position * 108
                      }%)) translateY(${
                        active
                          ? 30
                          : 0
                      }px) scale(${
                        active
                          ? 1.035
                          : 0.94
                      })`,
                      opacity:
                        active
                          ? 1
                          : 0.78,
                    }}
                  >
                    <StoryCard
                      story={story}
                      active={active}
                    />
                  </div>
                );
              }
            )}
          </div>

          <button
            type="button"
            onClick={previous}
            aria-label="Previous trader story"
            className="absolute left-0 top-[48%] z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-2xl border border-black/[0.065] bg-white text-black/46 shadow-[0_14px_38px_rgba(52,43,20,.12)] transition hover:border-[#B68A23]/25 hover:text-[#9A7318] sm:left-2 lg:-left-3"
          >
            <ArrowLeft />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next trader story"
            className="absolute right-0 top-[48%] z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-2xl border border-black/[0.065] bg-white text-black/46 shadow-[0_14px_38px_rgba(52,43,20,.12)] transition hover:border-[#B68A23]/25 hover:text-[#9A7318] sm:right-2 lg:-right-3"
          >
            <ArrowRight />
          </button>

          <div className="mt-1 flex items-center justify-center gap-2">
            {stories.map(
              (story, index) => (
                <button
                  key={story.id}
                  type="button"
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  aria-label={`View story ${
                    index + 1
                  }`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-9 bg-[#AC8120]"
                      : "w-1.5 bg-black/15 hover:bg-black/30"
                  }`}
                />
              )
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center sm:mt-14">
          <p className="text-sm font-semibold text-black/48">
            Your trading story starts with the first challenge.
          </p>

          <a
            href="#challenges"
            className="group relative mt-5 inline-flex min-w-[215px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F5DA79_0%,#D4AF37_50%,#966B12_100%)] px-7 py-4 text-sm font-black text-[#080806] shadow-[0_16px_42px_rgba(149,112,21,.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_58px_rgba(149,112,21,.28)]"
          >
            Start Your Challenge

            <ArrowRight />

            <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/45 blur-md transition-all duration-700 group-hover:left-[125%]" />
          </a>
        </div>

        <div className="my-20 h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent sm:my-24" />

        <div>
          <div className="mx-auto max-w-[820px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B38A26]/15 bg-[#D4AF37]/[0.055] px-3 py-1.5">
              <span className="text-[#9C7419]">
                <TrophyIcon />
              </span>

              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8D6814]">
                Trader milestones
              </span>
            </div>

            <h3 className="mt-6 text-4xl font-black leading-[0.96] tracking-[-0.06em] text-[#080808] sm:text-5xl lg:text-[4.7rem]">
              Progress deserves

              <span className="block bg-[linear-gradient(100deg,#121212_0%,#4D4D4D_32%,#C59B31_72%,#75510A_100%)] bg-clip-text text-transparent">
                recognition.
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-[610px] text-sm leading-7 text-black/42 sm:text-base">
              A growing wall of trading milestones, completed
              objectives and reward moments from across the
              BlackProp community.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {payoutItems.map(
              (item, index) => (
                <PayoutProofCard
                  key={`${item.country}-${index}`}
                  item={item}
                />
              )
            )}

            <MoreTradersCard />
          </div>

          <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-[20px] border border-black/[0.055] bg-white/50 px-5 py-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.06] text-[#A17918]">
                <UsersIcon />
              </div>

              <div>
                <p className="text-[10px] font-bold text-black/65">
                  Global trader community
                </p>

                <p className="mt-0.5 text-[8px] text-black/30">
                  Forex · Futures · Crypto
                </p>
              </div>
            </div>

            <a
              href="#challenges"
              className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-[#9B7317]"
            >
              Join BlackProp

              <span className="transition-transform group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>

        <p className="mx-auto mt-7 max-w-3xl text-center text-[9px] leading-4 text-black/23">
          Trader environments, payout certificates, names, locations
          and amounts displayed in this frontend are demonstration
          content. Replace them with verified BlackProp customer and
          payout data before production launch.
        </p>
      </div>
    </section>
  );
}