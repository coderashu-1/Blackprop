"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


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


const dashboards = [
  {
    title: "Trader Dashboard",
    image: "/images/dashboard1.png",
    eyebrow: "Trading Workspace",
  },
  {
    title: "Performance Analytics",
    image: "/images/dashboard2.png",
    eyebrow: "Performance Intelligence",
  },
  {
    title: "Reward Center",
    image: "/images/dashboard3.png",
    eyebrow: "Rewards & Progress",
  },
];

/* =========================================================
   ICONS
========================================================= */

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m10 2.8 1.8 4.4 4.7.4-3.6 3.1 1.1 4.6-4-2.4-4 2.4 1.1-4.6-3.6-3.1 4.7-.4L10 2.8Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
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

/* =========================================================
   COMPONENT
========================================================= */

export function DashboardShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive(
        (current) =>
          (current + 1) % dashboards.length,
      );
    }, 5500);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-[#030303] py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[55%] h-[700px] w-[900px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,.055)_0%,rgba(212,175,55,.015)_35%,transparent_68%)]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "74px 74px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 82%, transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-2.5">
            <BPMark
              width={14}
              height={18}
              color="#FFFFFF"
              className="shrink-0"
            />

            <span className="text-[11px] font-black uppercase tracking-[0.15em] text-white/72 sm:text-[12px]">
              Built for professional traders
            </span>
          </div>

          <h2 className="mt-7 text-[3.15rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-white min-[420px]:text-[3.45rem] sm:text-[4.2rem] md:text-[4.65rem] lg:text-[5rem] xl:text-[5.35rem]">
            Custom Dashboard View
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-7 text-white/58 sm:text-[17px] sm:leading-8 lg:text-lg">
            A focused BlackProp workspace for account
            monitoring, performance analysis and reward
            tracking.
          </p>
        </div>

        {/* =====================================================
            DASHBOARD SHOWCASE
        ====================================================== */}

        <div className="relative mx-auto mt-9 w-full max-w-[1120px] sm:mt-11 lg:mt-14">
          {/* SOFT GLOW */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.085] blur-[90px]" />

          {/* TOP LEFT LABEL */}
          <div className="absolute left-2.5 top-2.5 z-30 rounded-full border border-white/[0.09] bg-[#0B0B0C]/92 px-2.5 py-2 backdrop-blur-md sm:left-3 sm:top-3 sm:px-3 lg:left-4 lg:top-4">
            <p className="text-[8px] font-black uppercase tracking-[0.12em] text-[#E7C65A] min-[420px]:text-[9px] sm:text-[10px]">
              {dashboards[active].eyebrow}
            </p>
          </div>

          {/* TOP RIGHT LABEL */}
          <div className="absolute right-2.5 top-2.5 z-30 flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-[#0B0B0C]/92 px-2.5 py-2 backdrop-blur-md sm:right-3 sm:top-3 sm:gap-2 sm:px-3 lg:right-4 lg:top-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-white/62 min-[420px]:text-[9px] sm:text-[10px]">
              Interface Preview
            </span>
          </div>

          {/* =================================================
              IMAGE FRAME
          ================================================= */}

          <div className="relative w-full overflow-hidden rounded-[18px] border border-white/[0.09] bg-[#070707] shadow-[0_35px_90px_rgba(0,0,0,.6)] sm:rounded-[24px] lg:rounded-[30px]">
            {/* IMAGE AREA */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#080808] min-[480px]:aspect-[16/10] sm:aspect-video">
              {dashboards.map(
                (dashboard, index) => (
                  <div
                    key={dashboard.image}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${
                      active === index
                        ? "z-10 scale-100 opacity-100"
                        : "z-0 scale-[1.015] opacity-0"
                    }`}
                  >
                    <Image
                      src={dashboard.image}
                      alt={dashboard.title}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1200px) 85vw, 1040px"
                      className="object-cover object-center sm:object-contain"
                      priority={index === 0}
                    />
                  </div>
                ),
              )}

              {/* LIGHT GLASS OVERLAY */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(130deg,rgba(255,255,255,.045),transparent_18%,transparent_78%,rgba(212,175,55,.025))]" />

              {/* EDGE */}
              <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_55px_rgba(0,0,0,.22)]" />
            </div>

            {/* =================================================
                BOTTOM STATUS
            ================================================= */}

            <div className="relative z-30 flex min-h-[76px] items-center justify-between gap-3 border-t border-white/[0.06] bg-[#090909] px-3.5 py-3.5 sm:min-h-[80px] sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] sm:h-10 sm:w-10">
                  <BPMark
                    width={15}
                    height={19}
                    color="#FFFFFF"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.13em] text-white/58 sm:text-[11px]">
                    BlackProp Dashboard
                  </p>

                  <p className="mt-1 truncate text-[14px] font-semibold text-white/88 sm:text-[15px]">
                    {dashboards[active].title}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2 text-white/28">
                <ShieldIcon />

                <span className="text-[9px] font-semibold uppercase tracking-[0.09em] text-white/48 min-[420px]:text-[10px] sm:text-[11px]">
                  Product Preview
                </span>
              </div>
            </div>
          </div>

          {/* BASE REFLECTION */}
          <div className="pointer-events-none mx-auto h-8 w-[65%] -translate-y-1 rounded-[50%] bg-[#D4AF37]/[0.04] blur-[28px]" />
        </div>

        {/* =====================================================
            MOBILE CURRENT LABEL
        ====================================================== */}

        <div className="mx-auto mt-4 flex w-fit items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2.5 sm:hidden">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

          <span className="text-[10px] font-black uppercase tracking-[0.11em] text-[#E7C65A]">
            {dashboards[active].eyebrow}
          </span>
        </div>

        {/* =====================================================
            TABS
        ====================================================== */}

        {/* <div className="mx-auto mt-6 grid w-full max-w-[820px] grid-cols-1 gap-2.5 min-[430px]:grid-cols-3 sm:mt-7 sm:gap-3">
          {dashboards.map(
            (dashboard, index) => {
              const selected =
                active === index;

              return (
                <button
                  key={dashboard.title}
                  type="button"
                  onClick={() =>
                    setActive(index)
                  }
                  className={`relative min-h-[44px] overflow-hidden rounded-full border px-4 py-2.5 text-[12px] font-bold transition sm:min-h-[48px] sm:px-5 sm:py-3 sm:text-[13px] ${
                    selected
                      ? "border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#E4C15A]"
                      : "border-white/[0.08] bg-white/[0.02] text-white/38 hover:border-white/[0.14] hover:text-white/65"
                  }`}
                >
                  {dashboard.title}

                  {selected && (
                    <span className="absolute inset-x-3 bottom-0 h-px bg-[#D4AF37]" />
                  )}
                </button>
              );
            },
          )}
        </div> */}

        {/* =====================================================
            AUTO PROGRESS
        ====================================================== */}

        {/* <div className="mx-auto mt-6 h-[3px] w-28 overflow-hidden rounded-full bg-white/[0.08] sm:w-32">
          <div
            key={active}
            className="dashboard-progress h-full origin-left bg-[#D4AF37]"
          />
        </div> */}

        {/* DISCLAIMER */}
        {/* <p className="mx-auto mt-7 max-w-[680px] px-3 text-center text-[13px] font-medium leading-6 text-white/52 sm:text-[14px] sm:leading-7">
          Dashboard visuals and displayed values are
          product-preview examples and may use sample
          data.
        </p> */}
      </div>

      <style jsx>{`
        .dashboard-progress {
          animation: dashboardProgress
            5.5s linear forwards;
        }

        @keyframes dashboardProgress {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dashboard-progress {
            animation: none;
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}