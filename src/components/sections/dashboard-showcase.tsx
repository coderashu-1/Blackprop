"use client";

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

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M10 1.8 12.4 7l5.6.7-4.1 4 1 5.6-4.9-2.7-5 2.7 1-5.6-4.1-4L7.6 7 10 1.8Z" />
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
        d="M10 2 16 4.5v5c0 4-2.5 6.5-6 8-3.5-1.5-6-4-6-8v-5L10 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
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
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % dashboards.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#030303] py-24 sm:py-28 lg:py-36">
      {/* BACKGROUND AMBIENCE */}
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[180px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "74px 74px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 82%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.045] px-3.5 py-2">
            <span className="text-[#D4AF37]">
              <StarIcon />
            </span>

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#DDB94E]">
              Built for professional traders
            </span>
          </div>

          <h2 className="mt-7 text-4xl font-black uppercase leading-[0.92] tracking-[-0.065em] text-white sm:text-5xl lg:text-[5.2rem]">
            Custom Dashboard
            <span className="block bg-[linear-gradient(100deg,#FFFFFF_0%,#D6D6D6_38%,#F0D16A_76%,#98701A_100%)] bg-clip-text text-transparent">
              View
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[610px] text-sm leading-7 text-white/35 sm:text-base">
            A focused BlackProp workspace for account monitoring,
            performance analysis and reward tracking.
          </p>
        </div>

        {/* MAIN SHOWCASE */}
        <div className="relative mx-auto mt-14 max-w-[1180px] sm:mt-16 lg:mt-20">
          {/* GLOW */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[58%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.11] blur-[125px] transition-all duration-1000" />

          {/* FLOATING TOP LEFT CHIP */}
          <div className="absolute left-2 top-4 z-30 hidden rounded-full border border-white/[0.08] bg-[#0B0B0C]/80 px-3 py-2 backdrop-blur-xl sm:block lg:-left-4 lg:top-10">
            <p className="text-[7px] font-black uppercase tracking-[0.16em] text-[#D4AF37]">
              {dashboards[active].eyebrow}
            </p>
          </div>

          {/* FLOATING TOP RIGHT CHIP */}
          <div className="absolute right-2 top-4 z-30 hidden rounded-full border border-white/[0.08] bg-[#0B0B0C]/80 px-3 py-2 backdrop-blur-xl sm:flex sm:items-center sm:gap-2 lg:-right-4 lg:top-10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-white/38">
              Live Platform View
            </span>
          </div>

          {/* IMAGE FRAME */}
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.085] bg-[#070707] shadow-[0_50px_130px_rgba(0,0,0,.72)] sm:rounded-[30px]">
            <div className="relative aspect-[16/9] overflow-hidden">
              {dashboards.map((dashboard, index) => (
                <img
                  key={dashboard.image}
                  src={dashboard.image}
                  alt={dashboard.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
                    active === index
                      ? "z-10 scale-100 opacity-100"
                      : "z-0 scale-[1.025] opacity-0"
                  }`}
                />
              ))}

              {/* GLASS */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(130deg,rgba(255,255,255,.07),transparent_20%,transparent_75%,rgba(212,175,55,.04))]" />

              {/* EDGE VIGNETTE */}
              <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_80px_rgba(0,0,0,.32)]" />
            </div>

            {/* BOTTOM STATUS BAR */}
            <div className="relative z-30 flex items-center justify-between border-t border-white/[0.06] bg-[#090909]/95 px-4 py-3 sm:px-5">
              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.16em] text-[#D4AF37]/65">
                  BlackProp Dashboard
                </p>

                <p className="mt-1 text-xs font-semibold text-white/68">
                  {dashboards[active].title}
                </p>
              </div>

              <div className="flex items-center gap-2 text-white/28">
                <ShieldIcon />

                <span className="hidden text-[8px] font-semibold uppercase tracking-[0.12em] sm:inline">
                  Secure workspace
                </span>
              </div>
            </div>
          </div>

          {/* SOFT BASE REFLECTION */}
          <div className="pointer-events-none mx-auto h-12 w-[74%] -translate-y-2 rounded-[50%] bg-[#D4AF37]/[0.055] blur-[35px]" />
        </div>

        {/* TABS */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2.5 sm:mt-4">
          {dashboards.map((dashboard, index) => {
            const selected = active === index;

            return (
              <button
                key={dashboard.title}
                type="button"
                onClick={() => setActive(index)}
                className={`group relative overflow-hidden rounded-full border px-4 py-2.5 text-[10px] font-bold transition ${
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
          })}
        </div>

        {/* AUTO SLIDE PROGRESS */}
        <div className="mx-auto mt-5 h-[2px] w-24 overflow-hidden rounded-full bg-white/[0.07]">
          <div
            key={active}
            className="h-full origin-left bg-[#D4AF37]"
            style={{
              animation: "dashboardProgress 5.5s linear forwards",
            }}
          />
        </div>

        <style jsx>{`
          @keyframes dashboardProgress {
            from {
              transform: scaleX(0);
            }

            to {
              transform: scaleX(1);
            }
          }
        `}</style>
      </div>
    </section>
  );
}