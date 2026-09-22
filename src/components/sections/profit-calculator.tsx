"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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
];

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
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

function AccountIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="6"
        width="17"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 10h10M7 14h7"
        stroke="currentColor"
        strokeWidth="1.6"
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
      className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px]"
      aria-hidden="true"
    >
      <path
        d="m5.25 7.5 4.75 4.75 4.75-4.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DragIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[12px] w-[12px] sm:h-[13px] sm:w-[13px]"
      aria-hidden="true"
    >
      <path
        d="M4 12h16M7 9l-3 3 3 3M17 9l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[17px] w-[17px] transition-transform duration-200 group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]"
      aria-hidden="true"
    >
      <path
        d="M4 12h15M15 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
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
        d="m5 10 3 3 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <svg
      viewBox="0 0 88 88"
      fill="none"
      className="h-[46px] w-[46px] min-[380px]:h-[52px] min-[380px]:w-[52px] sm:h-[64px] sm:w-[64px] lg:h-[72px] lg:w-[72px]"
      aria-hidden="true"
    >
      <path
        d="M24 17h27.5C65.6 17 75 26.4 75 39.3S65.6 61.7 51.5 61.7H37.8V75H24V17Z"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.8 31h14.6c5.7 0 9.5 3.2 9.5 8.3 0 5.1-3.8 8.4-9.5 8.4H37.8V31Z"
        stroke="white"
        strokeWidth="7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RewardGraphic() {
  return (
    <div
      className="
        relative
        mx-auto
        mt-9
        h-[188px]
        w-full
        max-w-[330px]

        min-[390px]:h-[220px]
        min-[390px]:max-w-[380px]

        sm:mt-10
        sm:h-[260px]
        sm:max-w-[450px]

        md:h-[280px]
        md:max-w-[490px]

        lg:mx-0
        lg:mt-[48px]
        lg:h-[292px]
        lg:max-w-[500px]

        xl:mt-[58px]
        xl:h-[315px]
        xl:max-w-[520px]
      "
    >
      {/* rear card */}
      <div
        className="
          absolute
          left-[3%]
          top-[32%]
          h-[58%]
          w-[58%]
          -rotate-[4deg]
          rounded-[15px]
          border
          border-[#8f59ff]/20
          bg-[#24202d]
          shadow-[0_20px_42px_rgba(32,13,61,.16)]

          sm:rounded-[18px]
          lg:rounded-[20px]
        "
      />

      {/* reward card */}
      <div
        className="
          absolute
          left-[5%]
          top-[26%]
          h-[58%]
          w-[58%]
          -rotate-[3deg]
          overflow-hidden
          rounded-[15px]
          bg-[linear-gradient(135deg,#9430ff_0%,#7a25e6_52%,#491c82_100%)]
          shadow-[0_22px_46px_rgba(123,48,224,.28)]

          sm:rounded-[18px]
          lg:rounded-[20px]
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_17%_12%,rgba(255,255,255,.12),transparent_38%)]" />

        <span className="absolute left-[18px] top-[18px] text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#efe6ff] sm:left-[22px] sm:top-[22px] sm:text-[10px] lg:left-[24px] lg:top-[25px] lg:text-[11px]">
          Reward
        </span>

        <span className="absolute bottom-[18px] left-[18px] text-[27px] font-extrabold tracking-[-0.045em] text-white sm:bottom-[22px] sm:left-[22px] sm:text-[32px] lg:bottom-[25px] lg:left-[24px] lg:text-[38px]">
          80%
        </span>
      </div>

      {/* logo square */}
      <div
        className="
          absolute
          left-[61%]
          top-[15%]
          grid
          h-[45%]
          w-[32%]
          rotate-[3deg]
          place-items-center
          rounded-[17px]
          bg-[#11111a]
          shadow-[0_24px_36px_rgba(0,0,0,.34)]

          sm:rounded-[21px]
          lg:rounded-[24px]
        "
      >
        <BrandMark />
      </div>
    </div>
  );
}

export function ProfitCalculator() {
  const [accountSize, setAccountSize] = useState(200000);
  const [profitRate, setProfitRate] = useState(8);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const accountDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (
        accountDropdownRef.current &&
        !accountDropdownRef.current.contains(event.target as Node)
      ) {
        setAccountDropdownOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setAccountDropdownOpen(false);
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const profitSplit = 80;

  const estimatedReward = useMemo(
    () => accountSize * (profitRate / 100) * (profitSplit / 100),
    [accountSize, profitRate]
  );

  const sliderPosition = ((profitRate - 1) / 24) * 100;

  return (
    <section
      id="profit-calculator"
      className="relative isolate overflow-hidden bg-[#fdfcff] text-[#0b0c13]"
    >
      <style>{`
        .profit-ref-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 27px;
          height: 27px;
          border-radius: 9999px;
          border: 3px solid #bd6cff;
          background: #13131c;
          box-shadow:
            0 0 0 2px rgba(190,108,255,.05),
            0 0 20px rgba(178,77,255,.72);
          cursor: grab;
        }

        .profit-ref-slider:active::-webkit-slider-thumb {
          cursor: grabbing;
        }

        .profit-ref-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          border: 3px solid #bd6cff;
          background: #13131c;
          box-shadow:
            0 0 0 2px rgba(190,108,255,.05),
            0 0 20px rgba(178,77,255,.72);
          cursor: grab;
        }

        .profit-ref-slider:focus-visible {
          outline: none;
        }

        @media (max-width: 639px) {
          .profit-ref-slider::-webkit-slider-thumb {
            width: 24px;
            height: 24px;
          }

          .profit-ref-slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      {/* BOTTOM PURPLE AMBIENCE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[170px] bg-[radial-gradient(ellipse_at_center_bottom,rgba(177,82,255,.20)_0%,rgba(214,171,255,.10)_35%,rgba(255,255,255,0)_72%)] sm:h-[210px] lg:h-[230px]" />

      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-4
          py-10

          min-[390px]:px-5

          sm:px-7
          sm:py-14

          md:py-16

          lg:px-6
          lg:py-16

          xl:px-5
          xl:py-[84px]
        "
      >
        <div
          className="
            grid
            items-center
            gap-10

            sm:gap-12

            lg:grid-cols-[minmax(0,1fr)_minmax(440px,560px)]
            lg:gap-12

            xl:grid-cols-[minmax(0,1fr)_minmax(0,628px)]
            xl:gap-[80px]
          "
        >
          {/* LEFT SIDE */}
          <div className="min-w-0 text-center lg:text-left">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.20em] text-[#7f35f7] sm:text-[13px] sm:tracking-[0.22em] lg:text-[14px]">
              Profit Calculator
            </p>

            <h2
              className="
                mx-auto
                mt-5
                max-w-[560px]
                text-[2.85rem]
                font-black
                leading-[0.93]
                tracking-[-0.055em]
                text-[#080910]

                min-[390px]:text-[3.15rem]

                sm:mt-7
                sm:text-[4rem]

                md:text-[4.5rem]

                lg:mx-0
                lg:mt-[28px]
                lg:max-w-[510px]
                lg:text-[4.3rem]

                xl:mt-[32px]
                xl:text-[4.75rem]
              "
            >
              See your
              <span className="block">potential</span>
              <span className="block">reward.</span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[540px]
                text-[14px]
                font-medium
                leading-6
                tracking-[-0.015em]
                text-[#40506a]

                sm:mt-6
                sm:text-[16px]
                sm:leading-7

                lg:mx-0
                lg:mt-[24px]
                lg:text-[17px]
                lg:leading-8

                xl:mt-[28px]
                xl:text-[19px]
              "
            >
              Pick an account size, then drag the profit slider to
              <span className="hidden sm:inline">
                <br />
              </span>{" "}
              calculate your estimated monthly reward.
            </p>

            <RewardGraphic />
          </div>

          {/* RIGHT CALCULATOR */}
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[628px]
              rounded-[24px]
              border
              border-[#21172d]
              bg-[#101018]
              px-4
              pb-4
              pt-5
              text-white
              shadow-[0_30px_65px_rgba(55,22,95,.22)]

              min-[390px]:px-5
              min-[390px]:pb-5
              min-[390px]:pt-6

              sm:rounded-[30px]
              sm:px-6
              sm:pb-6
              sm:pt-7

              md:px-7

              lg:rounded-[34px]
              lg:px-7

              xl:rounded-[38px]
              xl:px-[40px]
              xl:pb-[26px]
              xl:pt-[28px]
              xl:shadow-[0_44px_85px_rgba(55,22,95,.24)]
            "
          >
            <div className="pointer-events-none absolute -left-[70px] bottom-[-80px] h-[210px] w-[330px] rounded-full bg-[#9e4cff]/10 blur-[72px] sm:h-[230px] sm:w-[380px] lg:h-[240px] lg:w-[420px] lg:blur-[82px]" />

            {/* TOP LABEL */}
            <div className="relative flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.005em] text-[#d0d3df] sm:text-[14px] lg:text-[15px]">
              <span className="text-[#b56bff]">
                <LockIcon />
              </span>
              Reward estimate
            </div>

            {/* ACCOUNT SELECT */}
            <div className="relative mt-4 sm:mt-5">
              <label
                id="account-size-label"
                className="mb-2 block text-[11px] font-bold uppercase tracking-[0.02em] text-[#95a0b4] sm:text-[12px] lg:text-[13px]"
              >
                Account Size
              </label>

              <div ref={accountDropdownRef} className="relative z-30">
                <button
                  type="button"
                  aria-labelledby="account-size-label"
                  aria-haspopup="listbox"
                  aria-expanded={accountDropdownOpen}
                  onClick={() => setAccountDropdownOpen((open) => !open)}
                  className="
                    flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-between
                    rounded-[14px]
                    border
                    border-[#33384d]
                    bg-[#171822]
                    px-3.5
                    text-left
                    transition
                    hover:border-[#515872]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#a94dff]/70

                    sm:min-h-[62px]
                    sm:rounded-[16px]
                    sm:px-4

                    lg:min-h-[66px]
                    lg:rounded-[17px]
                    lg:px-[18px]
                  "
                >
                  <span className="flex min-w-0 items-center gap-3 sm:gap-[14px]">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] border border-[#2e3144] bg-[#222330] text-[#c2c8da] sm:h-10 sm:w-10 sm:rounded-[10px]">
                      <AccountIcon />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[9px] font-bold uppercase tracking-[0.02em] text-[#99a2b7] sm:text-[10px] lg:text-[11px]">
                        Selected Account
                      </span>

                      <span className="mt-0.5 block truncate text-[18px] font-extrabold leading-none tracking-[-0.035em] text-white sm:text-[20px] lg:text-[21px]">
                        {accountSize.toLocaleString("en-US")}
                      </span>
                    </span>
                  </span>

                  <span
                    className={`text-[#9da7bc] transition-transform duration-200 ${
                      accountDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown />
                  </span>
                </button>

                <div
                  className={`absolute left-0 right-0 top-[calc(100%+8px)] overflow-hidden rounded-[14px] border border-[#303449] bg-[#171822] p-2 shadow-[0_25px_60px_rgba(0,0,0,.45)] transition-all duration-150 sm:top-[calc(100%+10px)] sm:rounded-[16px] ${
                    accountDropdownOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div
                    role="listbox"
                    aria-labelledby="account-size-label"
                    className="max-h-[230px] overflow-y-auto sm:max-h-[290px]"
                  >
                    {accountSizes.map((size) => {
                      const selected = size === accountSize;

                      return (
                        <button
                          key={size}
                          type="button"
                          role="option"
                          aria-selected={selected}
                          onClick={() => {
                            setAccountSize(size);
                            setAccountDropdownOpen(false);
                          }}
                          className={`mb-1 flex min-h-[42px] w-full items-center justify-between rounded-[10px] px-3 text-[12px] font-semibold transition last:mb-0 sm:min-h-[46px] sm:rounded-[12px] sm:px-4 sm:text-[14px] ${
                            selected
                              ? "bg-[#8c31f5] text-white"
                              : "text-[#d9dce7] hover:bg-white/[0.06]"
                          }`}
                        >
                          {size.toLocaleString("en-US")}
                          {selected && <CheckIcon />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* PROFIT RATE */}
            <div className="relative mt-5 sm:mt-6">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="profit-rate"
                  className="text-[13px] font-semibold text-[#d0d3df] sm:text-[14px] lg:text-[15px]"
                >
                  Profit rate
                </label>

                <span className="text-[21px] font-extrabold tracking-[-0.04em] text-[#be6cff] sm:text-[23px] lg:text-[24px]">
                  {profitRate}%
                </span>
              </div>

              <div className="mt-2.5 inline-flex h-[26px] items-center gap-2 rounded-full border border-[#6f2fa9] bg-[#271531] px-2.5 text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#d9b5ff] sm:mt-3 sm:h-[28px] sm:px-[11px] sm:text-[10px]">
                <DragIcon />
                Drag to calculate
              </div>

              <div className="relative mt-2.5 h-[24px] sm:mt-3">
                <div className="absolute left-0 right-0 top-1/2 h-[5px] -translate-y-1/2 rounded-full bg-[#242437] sm:h-[6px]">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#7024db_0%,#a839f7_55%,#be6cff_100%)]"
                    style={{ width: `${sliderPosition}%` }}
                  />
                </div>

                <input
                  id="profit-rate"
                  type="range"
                  min={1}
                  max={25}
                  step={1}
                  value={profitRate}
                  onChange={(event) =>
                    setProfitRate(Number(event.target.value))
                  }
                  className="profit-ref-slider absolute inset-0 z-10 h-full w-full cursor-ew-resize appearance-none bg-transparent"
                  aria-label="Profit rate"
                />
              </div>

              <div className="mt-0 flex justify-between text-[10px] font-medium text-[#7e899e] sm:text-[12px]">
                <span>1%</span>
                <span>25%</span>
              </div>
            </div>

            {/* REWARD OUTPUT */}
            <div
              className="
                relative
                mt-3
                rounded-[14px]
                border
                border-[#20212c]
                bg-[#0a0a10]
                px-4
                pb-4
                pt-6
                shadow-[inset_0_0_35px_rgba(126,42,229,.035)]

                min-[390px]:px-5

                sm:mt-[14px]
                sm:rounded-[16px]
                sm:px-6
                sm:pb-5
                sm:pt-7

                lg:px-[28px]
                lg:pb-[24px]
                lg:pt-[34px]
              "
            >
              <div className="pointer-events-none absolute left-[15%] top-[4px] h-[80px] w-[42%] rounded-full bg-[#9b34f7]/10 blur-[36px] sm:h-[92px] sm:blur-[42px]" />

              <p className="relative text-[9px] font-extrabold uppercase tracking-[0.07em] text-[#91a0b6] sm:text-[10px] lg:text-[11px]">
                Estimated Monthly Reward
              </p>

              <div className="relative mt-1.5 flex flex-wrap items-end gap-x-2.5 gap-y-1 sm:gap-x-[13px]">
                <span className="text-[34px] font-black leading-none tracking-[-0.055em] text-white min-[390px]:text-[38px] sm:text-[44px] lg:text-[48px]">
                  {formatMoney(estimatedReward)}
                </span>

                <span className="mb-0.5 text-[12px] font-semibold text-[#95a0b5] sm:mb-[2px] sm:text-[14px]">
                  / month
                </span>
              </div>

              <div className="relative mt-4 flex items-center justify-between border-t border-[#313444] pt-3.5 sm:mt-[18px] sm:pt-[15px]">
                <span className="text-[12px] font-medium text-[#94a0b6] sm:text-[14px]">
                  Profit split
                </span>

                <span className="text-[12px] font-extrabold text-[#dab0ff] sm:text-[14px]">
                  {profitSplit}%
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#challenges"
              className="
                group
                relative
                mt-3
                flex
                min-h-[50px]
                w-full
                items-center
                justify-center
                gap-2.5
                rounded-[14px]
                bg-[linear-gradient(90deg,#8f28f3_0%,#a734f7_48%,#b04cf4_100%)]
                px-5
                text-[15px]
                font-extrabold
                tracking-[-0.02em]
                text-white
                shadow-[0_14px_26px_rgba(151,44,245,.34)]
                transition
                hover:-translate-y-[1px]
                hover:brightness-105
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#d6a0ff]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#101018]

                sm:mt-[14px]
                sm:min-h-[54px]
                sm:rounded-[16px]
                sm:text-[17px]
                sm:shadow-[0_16px_30px_rgba(151,44,245,.38)]
              "
            >
              Start Earning
              <ArrowRight />
            </a>

            <p className="relative mt-2.5 text-center text-[10px] font-medium text-[#647189] sm:mt-[10px] sm:text-[12px]">
              You&apos;re not liable for any losses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfitCalculator;
