"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      className="relative overflow-hidden bg-[#030303] py-20 sm:py-24 lg:py-28"
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

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.045] px-3.5 py-2">
            <span className="text-[#D4AF37]">
              <StarIcon />
            </span>

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#DDB94E]">
              Built for professional traders
            </span>
          </div>

          <h2 className="mt-7 text-[2.7rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-[3.8rem] lg:text-[4.7rem]">
            Custom Dashboard

            <span className="block bg-[linear-gradient(100deg,#FFFFFF_0%,#D6D6D6_38%,#F0D16A_76%,#98701A_100%)] bg-clip-text text-transparent">
              View
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[580px] text-sm leading-7 text-white/35 sm:text-base">
            A focused BlackProp workspace for account
            monitoring, performance analysis and reward
            tracking.
          </p>
        </div>

        {/* =====================================================
            DASHBOARD SHOWCASE
        ====================================================== */}

        <div className="relative mx-auto mt-10 w-full max-w-[1040px] sm:mt-12 lg:mt-14">
          {/* SOFT GLOW */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.085] blur-[90px]" />

          {/* TOP LEFT LABEL */}
          <div className="absolute left-3 top-3 z-30 hidden rounded-full border border-white/[0.08] bg-[#0B0B0C]/90 px-3 py-2 sm:block lg:left-4 lg:top-4">
            <p className="text-[7px] font-black uppercase tracking-[0.16em] text-[#D4AF37]">
              {dashboards[active].eyebrow}
            </p>
          </div>

          {/* TOP RIGHT LABEL */}
          <div className="absolute right-3 top-3 z-30 hidden items-center gap-2 rounded-full border border-white/[0.08] bg-[#0B0B0C]/90 px-3 py-2 sm:flex lg:right-4 lg:top-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

            <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-white/40">
              Interface Preview
            </span>
          </div>

          {/* =================================================
              IMAGE FRAME
          ================================================= */}

          <div className="relative w-full overflow-hidden rounded-[18px] border border-white/[0.085] bg-[#070707] shadow-[0_35px_90px_rgba(0,0,0,.6)] sm:rounded-[24px] lg:rounded-[28px]">
            {/* IMAGE AREA */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#080808] sm:aspect-video">
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
                      className="object-cover object-center"
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

            <div className="relative z-30 flex min-h-[60px] items-center justify-between gap-3 border-t border-white/[0.06] bg-[#090909] px-3.5 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-[7px] font-black uppercase tracking-[0.16em] text-[#D4AF37]/65">
                  BlackProp Dashboard
                </p>

                <p className="mt-1 truncate text-[11px] font-semibold text-white/70 sm:text-xs">
                  {dashboards[active].title}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2 text-white/28">
                <ShieldIcon />

                <span className="hidden text-[8px] font-semibold uppercase tracking-[0.12em] sm:inline">
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

        <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-2 sm:hidden">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

          <span className="text-[7px] font-black uppercase tracking-[0.14em] text-[#D4AF37]/75">
            {dashboards[active].eyebrow}
          </span>
        </div>

        {/* =====================================================
            TABS
        ====================================================== */}

        <div className="mx-auto mt-5 flex max-w-[760px] flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-2.5">
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
                  className={`relative overflow-hidden rounded-full border px-3 py-2 text-[9px] font-bold transition sm:px-4 sm:py-2.5 sm:text-[10px] ${
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
        </div>

        {/* =====================================================
            AUTO PROGRESS
        ====================================================== */}

        <div className="mx-auto mt-5 h-[2px] w-20 overflow-hidden rounded-full bg-white/[0.07] sm:w-24">
          <div
            key={active}
            className="dashboard-progress h-full origin-left bg-[#D4AF37]"
          />
        </div>

        {/* DISCLAIMER */}
        <p className="mx-auto mt-5 max-w-xl text-center text-[8px] leading-4 text-white/18">
          Dashboard visuals and displayed values are
          product-preview examples and may use sample
          data.
        </p>
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