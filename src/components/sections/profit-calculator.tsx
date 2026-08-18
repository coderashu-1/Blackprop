"use client";

import { useMemo, useState } from "react";

/* =========================================================
   DATA
========================================================= */

const accountSizes = [
  5000,
  10000,
  15000,
  20000,
  25000,
  50000,
  100000,
  150000,
  200000,
  250000,
  300000,
  400000,
];

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

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
      shapeRendering="geometricPrecision"
      preserveAspectRatio="xMidYMid meet"
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

function LockIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="8"
        width="12"
        height="9"
        rx="2.3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M6.5 8V6.2A3.5 3.5 0 0 1 10 2.7a3.5 3.5 0 0 1 3.5 3.5V8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m5.5 7.5 4.5 4.5 4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3.5 10h12M11.5 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   SIMPLE LEFT GRAPHIC
========================================================= */

function SimpleRewardGraphic() {
  return (
    <div className="relative mx-auto mt-10 h-[260px] w-full max-w-[480px] sm:h-[300px] lg:mx-0 lg:mt-12 lg:h-[330px]">
      {/* soft glow */}
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[70px]" />

      {/* back card */}
      <div className="absolute left-[10%] top-[28%] h-[145px] w-[235px] rotate-[-7deg] rounded-[26px] border border-black/[0.07] bg-[#EEEDE8] shadow-[0_24px_50px_rgba(0,0,0,.07)] sm:h-[165px] sm:w-[270px]">
        <div className="absolute left-6 top-6 h-2 w-16 rounded-full bg-black/10" />
        <div className="absolute left-6 top-11 h-2 w-24 rounded-full bg-black/[0.06]" />
      </div>

      {/* gold card */}
      <div className="absolute left-[28%] top-[20%] h-[155px] w-[245px] rotate-[5deg] rounded-[28px] bg-[linear-gradient(145deg,#F0D274,#D4AF37_58%,#A87B1A)] shadow-[0_24px_55px_rgba(153,112,20,.15)] sm:h-[178px] sm:w-[285px]">
        <div className="absolute inset-[1px] rounded-[27px] border border-white/35" />

        <span className="absolute left-6 top-6 text-[9px] font-black uppercase tracking-[0.16em] text-black/45 sm:text-[10px]">
          Reward
        </span>

        <span className="absolute bottom-6 left-6 text-[2rem] font-black tracking-[-0.055em] text-black sm:text-[2.4rem]">
          100%
        </span>
      </div>

      {/* main logo block */}
      <div className="absolute right-[5%] top-[12%] grid h-[165px] w-[165px] place-items-center rounded-[38px] border border-white/10 bg-[#0B0B0B] shadow-[0_28px_65px_rgba(0,0,0,.28)] sm:h-[190px] sm:w-[190px] sm:rounded-[44px]">
        <div className="absolute inset-[13px] rounded-[29px] border border-[#D4AF37]/18 sm:rounded-[34px]" />

        <BPMark
          width={62}
          height={78}
          color="#FFFFFF"
          className="drop-shadow-[0_5px_8px_rgba(0,0,0,.5)] sm:w-[70px]"
        />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function ProfitCalculator() {
  const [accountSize, setAccountSize] = useState(200000);
  const [profitRate, setProfitRate] = useState(8);

  const profit = useMemo(() => {
    return accountSize * (profitRate / 100);
  }, [accountSize, profitRate]);

  const sliderPosition = ((profitRate - 1) / 24) * 100;

  return (
    <section
      id="profit-calculator"
      className="relative overflow-hidden bg-[#FBFAF6] py-14 text-black sm:py-16 lg:py-20 xl:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.92fr] lg:gap-14 xl:gap-20">
          {/* =====================================================
              LEFT
          ====================================================== */}

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#9B7318] sm:text-[12px] lg:text-[13px]">
              Profit Calculator
            </p>

            <h2 className="mt-4 max-w-[650px] text-[3rem] font-black leading-[0.93] tracking-[-0.055em] text-[#080808] sm:text-[4.2rem] md:text-[4.8rem] lg:text-[4.7rem] xl:text-[5.3rem]">
              See your
              <span className="block">potential reward.</span>
            </h2>

            <p className="mt-5 max-w-[520px] text-[13px] font-medium leading-6 text-black/50 sm:text-[15px] sm:leading-7 lg:text-base">
              Pick an account size and profit rate to see your estimated
              monthly reward.
            </p>

            <SimpleRewardGraphic />
          </div>

          {/* =====================================================
              RIGHT
          ====================================================== */}

          <div className="rounded-[28px] border border-black/[0.07] bg-white p-5 shadow-[0_30px_90px_rgba(54,43,16,.08)] sm:p-7 lg:p-8 xl:p-9">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-black/55 sm:text-[12px] lg:text-[13px]">
              <span className="text-[#9A7118]">
                <LockIcon />
              </span>
              Reward estimate
            </div>

            {/* ACCOUNT SIZE */}
            <div className="mt-7">
              <label
                htmlFor="profit-account-size"
                className="text-[11px] font-semibold text-black/45 sm:text-[12px] lg:text-[13px]"
              >
                Account size
              </label>

              <div className="relative mt-2.5">
                <select
                  id="profit-account-size"
                  value={accountSize}
                  onChange={(event) =>
                    setAccountSize(Number(event.target.value))
                  }
                  className="h-[58px] w-full appearance-none rounded-2xl border border-black/[0.06] bg-[#F6F5F1] px-4 pr-12 text-[16px] font-bold text-black outline-none transition focus:border-[#D4AF37]/40 focus:bg-white sm:h-[64px] sm:px-5 sm:text-[18px] lg:h-[68px] lg:text-[20px]"
                >
                  {accountSizes.map((size) => (
                    <option key={size} value={size}>
                      ${size.toLocaleString("en-US")}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/40">
                  <ChevronDown />
                </div>
              </div>
            </div>

            {/* PROFIT RATE */}
            <div className="mt-7">
              <div className="flex items-end justify-between">
                <label
                  htmlFor="profit-rate"
                  className="text-[11px] font-semibold text-black/45 sm:text-[12px] lg:text-[13px]"
                >
                  Profit rate
                </label>

                <span className="text-[18px] font-black text-[#9B7318] sm:text-[20px] lg:text-[22px]">
                  {profitRate}%
                </span>
              </div>

              <div className="relative mt-4 h-9">
                <div className="absolute inset-x-0 top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-black/[0.06]">
                  <div
                    className="h-full rounded-full bg-[#D4AF37]"
                    style={{
                      width: `${Math.max(
                        0,
                        Math.min(100, sliderPosition)
                      )}%`,
                    }}
                  />
                </div>

                <input
                  id="profit-rate"
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={profitRate}
                  onChange={(event) =>
                    setProfitRate(Number(event.target.value))
                  }
                  className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                />

                <div
                  className="pointer-events-none absolute top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-white bg-black shadow-[0_3px_10px_rgba(0,0,0,.16)]"
                  style={{
                    left: `${Math.max(
                      0,
                      Math.min(100, sliderPosition)
                    )}%`,
                  }}
                />
              </div>
            </div>

            {/* RESULT */}
            <div className="mt-8 rounded-[22px] bg-[#0B0B0B] p-5 text-white sm:p-6">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-white/35 sm:text-[10px] lg:text-[11px]">
                Estimated monthly reward
              </p>

              <div className="mt-3 flex items-end gap-2.5">
                <span className="text-[2.45rem] font-black leading-none tracking-[-0.055em] sm:text-[3rem] lg:text-[3.35rem]">
                  {formatMoney(profit)}
                </span>

                <span className="mb-1 text-[10px] text-white/35 sm:text-[11px]">
                  / month
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <span className="text-[10px] font-medium text-white/40 sm:text-[11px]">
                  Profit split
                </span>

                <span className="text-[13px] font-black text-[#E5C65D] sm:text-[14px]">
                  100%
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#challenges"
              className="group mt-5 flex min-h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-5 text-[14px] font-black text-black transition hover:bg-[#E3C45C] sm:min-h-[58px] sm:text-[15px] lg:text-base"
            >
              Start Earning
              <ArrowRight />
            </a>

            <p className="mt-3 text-center text-[9px] font-medium text-black/30 sm:text-[10px] lg:text-[11px]">
              You&apos;re not liable for any losses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}