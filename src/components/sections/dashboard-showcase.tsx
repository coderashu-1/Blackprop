"use client";

import Image from "next/image";

function BPMark({
  width = 18,
  height = 23,
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

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M10 2.7 15.5 5v4.5c0 3.4-2.1 6.2-5.5 7.8-3.4-1.6-5.5-4.4-5.5-7.8V5L10 2.7Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="m7 10 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DashboardShowcase() {
  return (
    <section
      id="dashboard"
      className="relative isolate overflow-hidden bg-[#05070b] pb-0 pt-20 sm:pt-24 lg:pt-28"
    >
      {/* TOP PURPLE FIELD */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,#2f0f4e_0%,#3b145f_20%,#2b1045_52%,rgba(11,8,18,.96)_78%,rgba(5,7,11,0)_100%)]" />

      {/* CENTER PURPLE GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-[190px] h-[440px] w-[980px] max-w-[95vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(167,52,247,.30)_0%,rgba(143,40,243,.16)_35%,rgba(71,26,109,.06)_58%,transparent_75%)] blur-[12px]" />

      {/* SOFT SIDE VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,transparent_0%,transparent_42%,rgba(0,0,0,.18)_72%,rgba(0,0,0,.46)_100%)]" />

      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-[860px] text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#8f28f3]/35 bg-[#17101f]/85 px-3.5 py-2 shadow-[0_8px_26px_rgba(0,0,0,.28)] backdrop-blur-xl">
            <span className="grid h-5 w-5 place-items-center rounded-[6px] border border-[#a734f7]/45 bg-[#271531] text-[#be6cff]">
              <BPMark width={8} height={11} color="#be6cff" />
            </span>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#d8d4e0] sm:text-[11px]">
              Built for professional traders
            </span>
          </div>

          <h2 className="mt-7 text-[3.15rem] font-black uppercase leading-[0.92] tracking-[-0.055em] text-white sm:text-[4.5rem] md:text-[5.2rem] lg:text-[5.6rem]">
            Custom
            <span className="block">
              Dashboard{" "}
              <span className="bg-[linear-gradient(90deg,#a734f7_0%,#be6cff_52%,#d06cff_100%)] bg-clip-text text-transparent">
                View
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[710px] text-[14px] font-medium leading-6 text-[#9aa0b2] sm:text-[16px] sm:leading-7 lg:text-[17px]">
            A focused BlackProp workspace for account monitoring, performance
            analysis and reward tracking.
          </p>
        </div>

        {/* DASHBOARD WRAPPER */}
        <div className="relative mx-auto mt-12 w-full max-w-[1120px] sm:mt-14 lg:mt-16">
          {/* BACK GLOW */}
          <div className="pointer-events-none absolute left-1/2 top-[46%] h-[520px] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8f28f3]/[0.10] blur-[100px]" />

          {/* OUTER SHELL */}
          <div className="relative overflow-hidden rounded-[4px] border border-[#2a2136] bg-[#0b0d12] shadow-[0_40px_120px_rgba(0,0,0,.58)]">
            {/* TOP PREVIEW BAR */}
            <div className="flex h-[72px] items-center justify-between border-b border-white/[0.055] bg-[linear-gradient(180deg,#17101f_0%,#121018_100%)] px-4 sm:px-6">
              <div className="rounded-[6px] border border-[#8f28f3]/55 bg-[#30104d] px-3 py-2">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#dcbcff] sm:text-[10px]">
                  Dashboard Preview
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#be6cff] shadow-[0_0_10px_rgba(190,108,255,.8)]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#8f93a6] sm:text-[10px]">
                  Interface Preview
                </span>
              </div>
            </div>

            {/* IMAGE AREA - slightly shorter than before */}
            <div className="relative mx-4 mt-2 overflow-hidden rounded-[16px] border border-[#1f2330] bg-[#080a0f] sm:mx-5 lg:mx-5">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/dashboard.png"
                  alt="BlackProp dashboard preview"
                  fill
                  priority
                  sizes="(max-width: 640px) 94vw, (max-width: 1200px) 88vw, 1080px"
                  className="object-contain object-center"
                />
              </div>

              {/* SUBTLE PURPLE GLASS */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(190,108,255,.025),transparent_18%,transparent_80%,rgba(143,40,243,.035))]" />
            </div>

            {/* BOTTOM STATUS BAR */}
            <div className="flex min-h-[78px] items-center justify-between gap-3 bg-[linear-gradient(180deg,#0b0d12_0%,#080a0e_100%)] px-5 py-4 sm:px-7">
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-[7px] border border-[#a734f7]/35 bg-[#271531] text-[#be6cff]">
                  <BPMark width={10} height={14} color="#be6cff" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#667089] sm:text-[10px]">
                    BlackProp Dashboard
                  </p>
                  <p className="mt-0.5 truncate text-[12px] font-semibold text-white sm:text-[13px]">
                    Dashboard
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2 text-[#be6cff]">
                <ShieldIcon />
                <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#858da1] sm:text-[10px]">
                  Product Preview
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM FADE / REFLECTION */}
          <div className="pointer-events-none mx-auto h-16 w-[90%] -translate-y-1 bg-[radial-gradient(ellipse_at_center_top,rgba(143,40,243,.12),transparent_68%)] blur-[24px]" />
        </div>
      </div>

      {/* BLACK FADE INTO NEXT SECTION */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[170px] bg-[linear-gradient(180deg,transparent_0%,rgba(5,7,11,.60)_45%,#05070b_100%)]" />
    </section>
  );
}

export default DashboardShowcase;
