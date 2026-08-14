"use client";

import { useEffect, useState, type ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const testimonials = [
  {
    name: "Arjun",
    country: "India",
    code: "IN",
    flag: "🇮🇳",
    title: "Clear from day one.",
    quote:
      "The dashboard feels focused and the challenge structure is easy to understand. Everything I need is presented without unnecessary complexity.",
  },
  {
    name: "Daniel",
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    title: "Built around the trader.",
    quote:
      "What stood out to me was how clean the entire experience feels. Account information, objectives and performance tracking are easy to follow.",
  },
  {
    name: "Marcus",
    country: "United States",
    code: "US",
    flag: "🇺🇸",
    title: "A premium experience.",
    quote:
      "The platform presentation feels professional and modern. It gives me a clear view of where I am and what I need to focus on next.",
  },
  {
    name: "Sara",
    country: "UAE",
    code: "AE",
    flag: "🇦🇪",
    title: "Simple. Focused. Efficient.",
    quote:
      "I like platforms that stay out of the way and let traders focus. The BlackProp experience is designed with that mindset.",
  },
  {
    name: "Lucas",
    country: "Brazil",
    code: "BR",
    flag: "🇧🇷",
    title: "Everything in one place.",
    quote:
      "Having account progress, analytics and reward information inside one clear workspace makes the experience much easier to navigate.",
  },
];

/* =========================================================
   ICONS
========================================================= */

function ArrowRight({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
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
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.45"
      />

      <path
        d="M3.8 12h16.4M12 3.5c2.3 2.3 3.5 5.1 3.5 8.5S14.3 18.2 12 20.5M12 3.5C9.7 5.8 8.5 8.6 8.5 12s1.2 6.2 3.5 8.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 3 19 6v5.4c0 4.2-2.7 7.4-7 9.3-4.3-1.9-7-5.1-7-9.3V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="m8.5 12 2.2 2.2 4.8-4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      className="h-8 w-10"
      aria-hidden="true"
    >
      <path
        d="M3 29V17C3 8.5 7.5 3.8 15 2.5v5.8c-3.8.8-5.7 3-6 6.3h6V29H3Zm21 0V17c0-8.5 4.5-13.2 12-14.5v5.8c-3.8.8-5.7 3-6 6.3h6V29H24Z"
        fill="currentColor"
      />
    </svg>
  );
}

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

function Stars() {
  return (
    <div className="flex items-center gap-1 text-[#D4AF37]">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}

/* =========================================================
   COUNTRY SELECTOR
========================================================= */

function CountryButton({
  testimonial,
  active,
  onClick,
}: {
  testimonial: (typeof testimonials)[number];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[16px] border px-3 py-3 text-left transition duration-300 sm:rounded-[18px] sm:px-4 ${
        active
          ? "border-[#D4AF37]/45 bg-[#D4AF37]/10 shadow-[0_0_35px_rgba(212,175,55,.08)]"
          : "border-white/10 bg-white/[0.035] hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/[0.05]"
      }`}
    >
      {active && (
        <span className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#F0D16A] to-transparent" />
      )}

      <div className="flex items-center gap-3">
        <div
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-[12px] border text-xl sm:h-11 sm:w-11 sm:rounded-[13px] sm:text-2xl ${
            active
              ? "border-[#D4AF37]/30 bg-[#0A0A0B]"
              : "border-white/10 bg-[#0B0B0C]"
          }`}
        >
          {testimonial.flag}
        </div>

        <div className="min-w-0">
          <p
            className={`text-[10px] font-black tracking-[0.13em] sm:text-[11px] ${
              active
                ? "text-[#D4AF37]"
                : "text-white"
            }`}
          >
            {testimonial.code}
          </p>

          <p className="mt-1 truncate text-[12px] font-black text-white sm:text-[13px]">
            {testimonial.country}
          </p>
        </div>

        {active && (
          <span className="bp-country-arrow ml-auto hidden text-[#F0D16A] sm:block">
            <ArrowRight />
          </span>
        )}
      </div>
    </button>
  );
}

/* =========================================================
   GLOBAL NETWORK
========================================================= */

function CountryNetwork({
  active,
}: {
  active: number;
}) {
  const current = testimonials[active];

  return (
    <div className="relative hidden h-[390px] overflow-hidden rounded-[28px] border border-[#D4AF37]/20 bg-[#080809] sm:block sm:h-[420px]">
      {/* AMBIENCE */}

      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

      <div className="absolute inset-x-[16%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

      {/* NETWORK SVG */}

      <svg
        viewBox="0 0 500 420"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx="250"
          cy="215"
          r="137"
          stroke="#D4AF37"
          strokeOpacity=".12"
        />

        <circle
          cx="250"
          cy="215"
          r="104"
          stroke="white"
          strokeOpacity=".12"
          strokeDasharray="5 10"
          className="bp-network-ring"
        />

        <ellipse
          cx="250"
          cy="215"
          rx="166"
          ry="72"
          stroke="#D4AF37"
          strokeOpacity=".14"
          transform="rotate(-12 250 215)"
        />

        <ellipse
          cx="250"
          cy="215"
          rx="76"
          ry="156"
          stroke="white"
          strokeOpacity=".08"
          transform="rotate(42 250 215)"
        />

        <path
          d="M86 190C136 136 185 152 249 214C312 275 363 269 418 207"
          stroke="#D4AF37"
          strokeOpacity=".25"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className="bp-network-path"
        />

        <path
          d="M111 282C163 253 194 266 249 215C298 169 345 155 400 128"
          stroke="white"
          strokeOpacity=".10"
          strokeDasharray="4 9"
        />

        <circle
          cx="86"
          cy="190"
          r="4"
          fill="#D4AF37"
        />

        <circle
          cx="418"
          cy="207"
          r="4"
          fill="#D4AF37"
        />

        <circle
          cx="111"
          cy="282"
          r="3"
          fill="white"
        />

        <circle
          cx="400"
          cy="128"
          r="3"
          fill="white"
        />
      </svg>

      {/* ORBITING GOLD NODE */}

      <div className="bp-network-orbit absolute left-1/2 top-1/2 h-[246px] w-[246px] -translate-x-1/2 -translate-y-1/2 rounded-full">
        <span className="absolute left-1/2 top-[-4px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#F2D56F] shadow-[0_0_20px_rgba(212,175,55,.85)]" />
      </div>

      {/* CENTER COUNTRY */}

      <div
        key={current.country}
        className="bp-country-enter absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative grid h-[145px] w-[145px] place-items-center rounded-full border border-[#D4AF37]/30 bg-[#09090A] shadow-[0_0_65px_rgba(212,175,55,.15)]">
          <div className="absolute inset-2 rounded-full border border-white/10" />

          <div className="text-center">
            <div className="text-[3rem] leading-none">
              {current.flag}
            </div>

            <p className="mt-3 text-[10px] font-black tracking-[0.14em] text-[#D4AF37] sm:text-[11px]">
              {current.code}
            </p>

            <p className="mt-1 max-w-[110px] text-[12px] font-black leading-5 text-white sm:text-[13px]">
              {current.country}
            </p>
          </div>
        </div>
      </div>

      {/* COUNTRY NODES */}

      <div className="absolute left-[7%] top-[22%] hidden items-center gap-2 rounded-full border border-white/10 bg-[#0B0B0C]/90 px-3 py-2 sm:flex">
        <span className="text-base">
          🇮🇳
        </span>

        <span className="text-[9px] font-black tracking-[0.10em] text-white">
          INDIA
        </span>
      </div>

      <div className="absolute right-[7%] top-[17%] hidden items-center gap-2 rounded-full border border-white/10 bg-[#0B0B0C]/90 px-3 py-2 sm:flex">
        <span className="text-base">
          🇬🇧
        </span>

        <span className="text-[9px] font-black tracking-[0.10em] text-white">
          UK
        </span>
      </div>

      <div className="absolute bottom-[15%] left-[7%] hidden items-center gap-2 rounded-full border border-white/10 bg-[#0B0B0C]/90 px-3 py-2 sm:flex">
        <span className="text-base">
          🇺🇸
        </span>

        <span className="text-[9px] font-black tracking-[0.10em] text-white">
          USA
        </span>
      </div>

      <div className="absolute bottom-[11%] right-[8%] hidden items-center gap-2 rounded-full border border-white/10 bg-[#0B0B0C]/90 px-3 py-2 sm:flex">
        <span className="text-base">
          🇧🇷
        </span>

        <span className="text-[9px] font-black tracking-[0.10em] text-white">
          BRAZIL
        </span>
      </div>

      <div className="absolute right-[5%] top-[49%] hidden items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-2 sm:flex">
        <span className="text-base">
          🇦🇪
        </span>

        <span className="text-[9px] font-black tracking-[0.10em] text-[#F0D16A]">
          UAE
        </span>
      </div>

      {/* LABEL */}

      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-2">
        <span className="bp-country-pulse h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

        <span className="text-[9px] font-black tracking-[0.13em] text-[#F0D16A]">
          GLOBAL SIGNAL
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   STAT
========================================================= */

function SmallStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-xl font-black text-white sm:text-2xl">
        {value}
      </p>

      <p className="mt-1.5 text-[10px] font-black tracking-[0.12em] text-[#D4AF37] sm:text-[11px]">
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export function Testimonials() {
  const [active, setActive] =
    useState(0);

  const testimonial =
    testimonials[active];

  function previous() {
    setActive((current) =>
      current === 0
        ? testimonials.length - 1
        : current - 1,
    );
  }

  function next() {
    setActive(
      (current) =>
        (current + 1) % testimonials.length,
    );
  }

  useEffect(() => {
    const timer =
      window.setInterval(() => {
        setActive(
          (current) =>
            (current + 1) %
            testimonials.length,
        );
      }, 7000);

    return () =>
      window.clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#030303] py-14 sm:py-20 md:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[15%] h-[800px] w-[1200px] max-w-full -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[190px]" />

      <div className="pointer-events-none absolute -left-48 top-[30%] hidden h-[390px] w-[390px] rounded-full border border-[#D4AF37]/[0.05] lg:block" />

      <div className="pointer-events-none absolute -right-48 top-[50%] hidden h-[390px] w-[390px] rounded-full border border-white/[0.04] lg:block" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3.5 py-2.5">
              <span className="text-[#F0D16A]">
                <GlobeIcon />
              </span>

              <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#F0D16A] sm:text-[12px]">
                GLOBAL TRADER VOICES
              </span>
            </div>

            <h2 className="mt-6 max-w-[760px] text-[3.15rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-white min-[430px]:text-[3.45rem] sm:text-[4rem] md:text-[4.35rem] lg:text-[4.9rem]">
              DIFFERENT COUNTRIES.
              <span className="block text-[#D4AF37]">
                ONE STANDARD.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <div className="max-w-[500px] border-l-2 border-[#D4AF37] pl-5 lg:ml-auto">
              <p className="text-[16px] font-medium leading-7 text-white/72 sm:text-[17px] sm:leading-8">
                A BlackProp experience designed for traders
                across markets, styles and locations — while
                keeping the same focus on clarity and
                performance.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            COUNTRY SELECTORS
        ====================================================== */}

        <div className="mt-8 grid grid-cols-2 gap-2.5 min-[430px]:grid-cols-3 sm:mt-10 lg:grid-cols-5">
          {testimonials.map(
            (item, index) => (
              <CountryButton
                key={item.country}
                testimonial={item}
                active={active === index}
                onClick={() =>
                  setActive(index)
                }
              />
            ),
          )}
        </div>

        {/* =====================================================
            MAIN EXPERIENCE
        ====================================================== */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.08fr_.92fr]">
          {/* =================================================
              TESTIMONIAL
          ================================================= */}

          <article className="relative overflow-hidden rounded-[24px] border border-[#D4AF37]/20 bg-[linear-gradient(145deg,#111112,#070708)] p-5 sm:rounded-[30px] sm:p-7 lg:p-8">
            <div className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/75 to-transparent" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[90px]" />

            {/* TOP */}

            <div className="relative flex items-start justify-between gap-4 sm:gap-5">
              <div>
                <Stars />

                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-[14px] border border-[#D4AF37]/25 bg-[#0A0A0B] text-2xl sm:h-14 sm:w-14 sm:text-[28px]">
                    {testimonial.flag}
                  </div>

                  <div>
                    <p className="text-[10px] font-black tracking-[0.13em] text-[#D4AF37] sm:text-[11px]">
                      TRADER VOICE / {testimonial.code}
                    </p>

                    <p className="mt-1 text-[15px] font-black text-white sm:text-base">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </div>

              <span className="text-[#D4AF37]/40">
                <QuoteIcon />
              </span>
            </div>

            {/* QUOTE */}

            <div
              key={`${testimonial.name}-${active}`}
              className="bp-testimonial-enter relative mt-7 sm:mt-9"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#D4AF37] sm:text-[12px]">
                TRADER EXPERIENCE
              </p>

              <h3 className="mt-3 max-w-[650px] text-[2.15rem] font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-[2.6rem] lg:text-[2.8rem]">
                {testimonial.title}
              </h3>

              <p className="mt-5 max-w-[700px] text-[16px] font-medium leading-7 text-white/88 sm:mt-6 sm:text-lg sm:leading-8 lg:text-[19px]">
                “{testimonial.quote}”
              </p>
            </div>

            {/* PERSON */}

            <div className="relative mt-8 flex flex-col gap-5 border-t border-white/10 pt-5 sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(135deg,#F1D16A,#A57414)] text-sm font-black text-black">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="text-[15px] font-black text-white sm:text-base">
                    {testimonial.name}
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-base">
                      {testimonial.flag}
                    </span>

                    <span className="text-[11px] font-black uppercase tracking-[0.10em] text-white/72 sm:text-[12px]">
                      {testimonial.country}
                    </span>
                  </div>
                </div>
              </div>

              {/* CONTROLS */}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-white transition hover:border-[#D4AF37]/35 hover:bg-[#D4AF37]/10 hover:text-[#F0D16A] sm:h-12 sm:w-12"
                >
                  <ArrowLeft />
                </button>

                <div className="min-w-[76px] text-center text-[11px] font-black tracking-[0.12em] text-white sm:text-[12px]">
                  0{active + 1}
                  <span className="mx-1 text-[#D4AF37]">
                    /
                  </span>
                  0{testimonials.length}
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="group grid h-11 w-11 place-items-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#F0D16A] transition hover:bg-[#D4AF37]/15 sm:h-12 sm:w-12"
                >
                  <span className="bp-next-arrow">
                    <ArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </article>

          {/* =================================================
              COUNTRY NETWORK
          ================================================= */}

          <CountryNetwork
            active={active}
          />
        </div>

        {/* =====================================================
            COUNTRY STRIP
        ====================================================== */}

        <div className="mt-4 hidden overflow-hidden rounded-[22px] border border-white/10 bg-[#080809] sm:block">
          <div className="grid divide-y divide-white/10 sm:grid-cols-5 sm:divide-x sm:divide-y-0">
            {testimonials.map(
              (item, index) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() =>
                    setActive(index)
                  }
                  className={`group relative flex items-center justify-center gap-3 px-4 py-4 transition ${
                    active === index
                      ? "bg-[#D4AF37]/10"
                      : "hover:bg-white/[0.04]"
                  }`}
                >
                  {active === index && (
                    <span className="absolute inset-x-[20%] top-0 h-px bg-[#D4AF37]" />
                  )}

                  <span className="text-xl">
                    {item.flag}
                  </span>

                  <div className="text-left">
                    <p
                      className={`text-[10px] font-black tracking-[0.12em] ${
                        active === index
                          ? "text-[#D4AF37]"
                          : "text-white"
                      }`}
                    >
                      {item.code}
                    </p>

                    <p className="mt-1 text-[11px] font-black text-white">
                      {item.country}
                    </p>
                  </div>
                </button>
              ),
            )}
          </div>
        </div>

        {/* =====================================================
            GLOBAL STATEMENT
        ====================================================== */}

        <div className="relative mt-12 overflow-hidden rounded-[24px] border border-[#D4AF37]/20 bg-[#0A0A0B] px-5 py-7 sm:mt-16 sm:rounded-[28px] sm:px-7 lg:px-8">
          <div className="pointer-events-none absolute right-[10%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

          <div className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

          <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[#F0D16A]">
                  <GlobeIcon />
                </span>

                <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#D4AF37] sm:text-[12px]">
                  ONE GLOBAL EXPERIENCE
                </span>
              </div>

              <h3 className="mt-4 text-[2.15rem] font-black uppercase leading-[1] tracking-[-0.05em] text-white sm:text-[2.55rem] lg:text-[2.8rem]">
                YOUR LOCATION CHANGES.
                <span className="block text-[#D4AF37]">
                  THE STANDARD DOESN&apos;T.
                </span>
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-5 sm:flex sm:flex-wrap sm:items-center sm:gap-6">
                <SmallStat
                  value="5"
                  label="PREVIEW COUNTRIES"
                />

                <div className="hidden h-10 w-px bg-white/15 sm:block" />

                <SmallStat
                  value="3"
                  label="MARKET TYPES"
                />

                <div className="hidden h-10 w-px bg-white/15 sm:block" />

                <SmallStat
                  value="ONE"
                  label="BLACKPROP EXPERIENCE"
                />
              </div>
            </div>

            <a
              href="#challenges"
              className="group relative inline-flex min-h-[54px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F6DE82,#D4AF37_50%,#956A11)] px-6 py-4 text-[15px] font-black uppercase text-black shadow-[0_16px_45px_rgba(212,175,55,.17)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(212,175,55,.27)] sm:w-auto sm:min-w-[210px] sm:text-base"
            >
              GET FUNDED

              <span className="bp-next-arrow">
                <ArrowRight />
              </span>

              <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/45 blur-md transition-all duration-700 group-hover:left-[125%]" />
            </a>
          </div>
        </div>

      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes bpTestimonialEnter {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bpCountryEnter {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.9);
          }

          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes bpNetworkOrbit {
          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        @keyframes bpNetworkRing {
          from {
            transform: rotate(0deg);
            transform-origin: center;
          }

          to {
            transform: rotate(-360deg);
            transform-origin: center;
          }
        }

        @keyframes bpNetworkPath {
          to {
            stroke-dashoffset: -28;
          }
        }

        @keyframes bpCountryPulse {
          0%, 100% {
            opacity: .45;
            transform: scale(.85);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
            box-shadow:
              0 0 18px
              rgba(212,175,55,.65);
          }
        }

        @keyframes bpArrowMove {
          0%, 100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(5px);
          }
        }

        .bp-testimonial-enter {
          animation:
            bpTestimonialEnter
            .45s ease-out both;
        }

        .bp-country-enter {
          animation:
            bpCountryEnter
            .45s ease-out both;
        }

        .bp-network-orbit {
          animation:
            bpNetworkOrbit
            16s linear infinite;
        }

        .bp-network-ring {
          animation:
            bpNetworkRing
            24s linear infinite;
        }

        .bp-network-path {
          stroke-dashoffset: 0;
          animation:
            bpNetworkPath
            4s linear infinite;
        }

        .bp-country-pulse {
          animation:
            bpCountryPulse
            3s ease-in-out infinite;
        }

        .bp-country-arrow,
        .bp-next-arrow {
          animation:
            bpArrowMove
            1.6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .bp-testimonial-enter,
          .bp-country-enter,
          .bp-network-orbit,
          .bp-network-ring,
          .bp-network-path,
          .bp-country-pulse,
          .bp-country-arrow,
          .bp-next-arrow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}