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

/* =========================================================
   HELPERS
========================================================= */

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
  color = "#D4AF37",
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
   ICONS
========================================================= */

function GrowthIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M3 15 7.2 10.7l3 2.5L17 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M13.5 6.5H17V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        rx="2.4"
        stroke="currentColor"
        strokeWidth="1.35"
      />

      <path
        d="M6.5 8V6.3A3.5 3.5 0 0 1 10 2.8a3.5 3.5 0 0 1 3.5 3.5V8"
        stroke="currentColor"
        strokeWidth="1.35"
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
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m5.5 8 4.5 4 4.5-4"
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
      viewBox="0 0 18 18"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="m4 9.2 3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.7"
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function ProfitCalculator() {
  const [accountSize, setAccountSize] = useState(20000);
  const [profitRate, setProfitRate] = useState(20);

  const profit = useMemo(() => {
    return accountSize * (profitRate / 100);
  }, [accountSize, profitRate]);

  const sliderPosition = ((profitRate - 1) / 99) * 100;

  return (
    <section
      id="profit-calculator"
      className="relative overflow-hidden bg-[#FBFAF7] py-20 text-black sm:py-24 lg:py-28"
    >
      {/* SUBTLE BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[620px] w-[1080px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[170px]" />

      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_430px] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-[14px] border border-[#D4AF37]/15 bg-[#D4AF37]/[0.06]">
                <BPMark width={20} height={26} color="#B68A22" />
              </div>

              <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#8D6816]">
                PROFIT CALCULATOR
              </span>
            </div>

            <h2 className="mt-5 max-w-[760px] text-[3rem] font-black leading-[0.92] tracking-[-0.06em] text-[#080808] sm:text-[3.9rem] lg:text-[4.65rem]">
              How much can
              <span className="block text-[#B78A22]">
                you make?
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[430px] text-sm font-medium leading-7 text-black/55 sm:text-base lg:ml-auto">
              Select an account size, adjust your target return and see the
              estimated reward instantly.
            </p>
          </div>
        </div>

        {/* =====================================================
            SINGLE CALCULATOR DIV
        ====================================================== */}

        <div className="relative mt-12 overflow-hidden rounded-[34px] border border-black/[0.08] bg-white shadow-[0_30px_90px_rgba(48,38,14,.07)] sm:mt-14">
          {/* TOP GOLD LINE */}
          <div className="absolute inset-x-[16%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/65 to-transparent" />

          {/* DECORATIVE LOGO WATERMARK */}
          <div className="pointer-events-none absolute right-[-55px] top-[70px] hidden lg:block">
            <BPMark
              width={270}
              height={340}
              color="#D4AF37"
              className="opacity-[0.035]"
            />
          </div>

          {/* SOFT GOLD AMBIENCE */}
          <div className="pointer-events-none absolute -right-36 -top-32 h-[430px] w-[430px] rounded-full bg-[#D4AF37]/[0.06] blur-[120px]" />

          <div className="relative grid lg:grid-cols-[1.02fr_.98fr]">
            {/* =================================================
                CONTROLS
            ================================================= */}

            <div className="border-b border-black/[0.07] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex items-center gap-2 text-[10px] font-semibold text-black/45">
                <span className="text-[#9C7418]">
                  <LockIcon />
                </span>

                Reward Guaranteed
              </div>

              {/* ACCOUNT SIZE */}
              <div className="mt-8">
                <label
                  htmlFor="calculator-account-size"
                  className="text-[9px] font-black uppercase tracking-[0.17em] text-black/40"
                >
                  Account Size
                </label>

                <div className="relative mt-3">
                  <select
                    id="calculator-account-size"
                    value={accountSize}
                    onChange={(event) =>
                      setAccountSize(Number(event.target.value))
                    }
                    className="h-[62px] w-full appearance-none rounded-xl border border-black/[0.08] bg-[#F7F6F2] px-4 pr-12 text-sm font-bold text-[#111] outline-none transition focus:border-[#B88A24]/35 focus:bg-white focus:shadow-[0_0_0_4px_rgba(212,175,55,.06)]"
                  >
                    {accountSizes.map((size) => (
                      <option key={size} value={size}>
                        ${size.toLocaleString("en-US")}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/35">
                    <ChevronDown />
                  </div>
                </div>
              </div>

              {/* PROFIT RATE */}
              <div className="mt-9">
                <div className="flex items-center justify-between gap-4">
                  <label
                    htmlFor="calculator-profit-rate"
                    className="text-[9px] font-black uppercase tracking-[0.17em] text-black/40"
                  >
                    Profit Rate
                  </label>

                  <span className="text-sm font-black text-[#987018]">
                    {profitRate}%
                  </span>
                </div>

                <div className="relative mt-8 h-10">
                  <div className="absolute inset-x-0 top-1/2 h-[6px] -translate-y-1/2 overflow-hidden rounded-full bg-black/[0.07]">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#87600F_0%,#D4AF37_60%,#F0D271_100%)]"
                      style={{
                        width: `${sliderPosition}%`,
                      }}
                    />
                  </div>

                  <input
                    id="calculator-profit-rate"
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={profitRate}
                    onChange={(event) =>
                      setProfitRate(Number(event.target.value))
                    }
                    className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                  />

                  <div
                    className="pointer-events-none absolute top-1/2 z-10 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[6px] border-[#D4AF37] bg-white shadow-[0_5px_18px_rgba(126,94,21,.18),0_0_0_5px_rgba(212,175,55,.08)]"
                    style={{
                      left: `${sliderPosition}%`,
                    }}
                  />

                  <div
                    className="pointer-events-none absolute top-[-27px] z-10 -translate-x-1/2"
                    style={{
                      left: `${sliderPosition}%`,
                    }}
                  >
                    <div className="rounded-lg bg-[#0A0A0A] px-2.5 py-1 text-[9px] font-black text-white shadow-md">
                      {profitRate}%
                    </div>
                  </div>
                </div>

                <div className="mt-1 flex items-center justify-between text-[8px] font-medium text-black/25">
                  <span>1%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* QUICK INFORMATION */}
              <div className="mt-9 grid gap-2 sm:grid-cols-3">
                {[
                  "Flexible account sizes",
                  "Instant estimate",
                  "Simple calculation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[9px] font-semibold text-black/50"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#D4AF37]/10 text-[#967018]">
                      <CheckIcon />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                RESULT / BRAND
            ================================================= */}

            <div className="relative flex min-h-[430px] flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#957019]">
                      ESTIMATED REWARD
                    </p>

                    <div className="mt-4 flex flex-wrap items-end gap-3">
                      <span className="text-[3.3rem] font-black leading-none tracking-[-0.065em] text-[#080808] sm:text-[4.2rem]">
                        {formatMoney(profit)}
                      </span>

                      <span className="mb-1.5 text-xs font-medium text-black/35">
                        / Month
                      </span>
                    </div>
                  </div>

                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[18px] border border-[#D4AF37]/18 bg-[#D4AF37]/[0.06]">
                    <BPMark width={25} height={32} color="#B68A22" />
                  </div>
                </div>

                <p className="mt-6 max-w-[470px] text-sm font-medium leading-6 text-black/50">
                  Based on a{" "}
                  <span className="font-bold text-black/70">
                    {formatMoney(accountSize)}
                  </span>{" "}
                  account at a{" "}
                  <span className="font-bold text-[#987018]">
                    {profitRate}% profit rate
                  </span>
                  .
                </p>
              </div>

              {/* LARGE MINIMAL BRAND AREA */}
              <div className="relative my-8 flex min-h-[150px] items-center overflow-hidden rounded-[24px] border border-[#D4AF37]/12 bg-[#F8F6F0] px-6 py-6">
                <div className="pointer-events-none absolute right-[-15px] top-1/2 -translate-y-1/2">
                  <BPMark
                    width={110}
                    height={140}
                    color="#D4AF37"
                    className="opacity-[0.08]"
                  />
                </div>

                <div className="relative">
                  <p className="text-[8px] font-black uppercase tracking-[0.18em] text-black/30">
                    BLACKPROP
                  </p>

                  <p className="mt-2 text-2xl font-black uppercase tracking-[-0.045em] text-[#090909]">
                    Performance creates opportunity.
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#B68A22]/15 bg-white/70 px-3 py-2">
                    <span className="text-[#A37A18]">
                      <CheckIcon />
                    </span>

                    <span className="text-[9px] font-bold text-black/55">
                      100% Profit Split
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[9px] font-medium text-black/38">
                <span className="text-[#9C7418]">
                  <LockIcon />
                </span>

                You&apos;re not liable for any losses.
              </div>
            </div>
          </div>

          {/* =====================================================
              INTEGRATED FOOTER CTA
          ====================================================== */}

          <div className="relative flex flex-col gap-5 border-t border-black/[0.07] bg-[#F7F6F2] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#957019]">
                READY TO START?
              </p>

              <p className="mt-1.5 text-lg font-black tracking-[-0.035em] text-[#080808]">
                Put your strategy to work.
              </p>
            </div>

            <a
              href="#challenges"
              className="group relative inline-flex min-w-[185px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F5DA79_0%,#D4AF37_50%,#956A12_100%)] px-6 py-4 text-sm font-black text-[#080806] shadow-[0_14px_35px_rgba(149,112,21,.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(149,112,21,.23)]"
            >
              Start Earning
              <ArrowRight />

              <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/45 blur-md transition-all duration-700 group-hover:left-[125%]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}