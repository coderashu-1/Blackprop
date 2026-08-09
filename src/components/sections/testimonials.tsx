"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Arjun",
    country: "India",
    flag: "🇮🇳",
    title: "Clear from day one.",
    quote:
      "The dashboard feels focused and the challenge structure is easy to understand. Everything I need is presented without unnecessary complexity.",
  },
  {
    name: "Daniel",
    country: "United Kingdom",
    flag: "🇬🇧",
    title: "Built around the trader.",
    quote:
      "What stood out to me was how clean the entire experience feels. Account information, objectives and performance tracking are easy to follow.",
  },
  {
    name: "Marcus",
    country: "United States",
    flag: "🇺🇸",
    title: "A premium experience.",
    quote:
      "The platform presentation feels professional and modern. It gives me a clear view of where I am and what I need to focus on next.",
  },
  {
    name: "Sara",
    country: "UAE",
    flag: "🇦🇪",
    title: "Simple. Focused. Efficient.",
    quote:
      "I like platforms that stay out of the way and let traders focus. The BlackProp experience is designed with that mindset.",
  },
  {
    name: "Lucas",
    country: "Brazil",
    flag: "🇧🇷",
    title: "Everything in one place.",
    quote:
      "Having account progress, analytics and reward information inside one clear workspace makes the experience much easier to navigate.",
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
        d="M10 2.2 16 4.7v4.8c0 4-2.5 6.4-6 8-3.5-1.6-6-4-6-8V4.7L10 2.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="m7.2 10 1.8 1.8 3.8-3.8"
        stroke="currentColor"
        strokeWidth="1.4"
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
        d="M16 10H4M9 5l-5 5 5 5"
        stroke="currentColor"
        strokeWidth="1.5"
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
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
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
      viewBox="0 0 34 28"
      fill="none"
      className="h-7 w-8"
      aria-hidden="true"
    >
      <path
        d="M3 26V15.8C3 7.6 7.2 3.1 14.3 2v5.2c-3.6.8-5.3 2.9-5.6 6.1H14V26H3Zm17 0V15.8C20 7.6 24.2 3.1 31.3 2v5.2c-3.6.8-5.3 2.9-5.6 6.1H31V26H20Z"
        fill="currentColor"
      />
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

type Position = "left" | "center" | "right" | "hidden";

function TestimonialCard({
  testimonial,
  position,
}: {
  testimonial: (typeof testimonials)[number];
  position: Position;
}) {
  const desktopTransform = {
    left: "translate(calc(-50% - 390px), -50%) scale(.82) rotate(-3deg)",
    center: "translate(-50%, -50%) scale(1) rotate(0deg)",
    right: "translate(calc(-50% + 390px), -50%) scale(.82) rotate(3deg)",
    hidden: "translate(-50%, -50%) scale(.7)",
  }[position];

  return (
    <article
      className={`testimonial-card absolute left-1/2 top-1/2 w-[92%] max-w-[470px] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
        position === "center"
          ? "z-30 opacity-100"
          : position === "hidden"
            ? "pointer-events-none z-0 opacity-0"
            : "pointer-events-none z-10 opacity-30"
      }`}
      style={
        {
          "--desktop-transform": desktopTransform,
        } as React.CSSProperties
      }
    >
      <div className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-[linear-gradient(145deg,#121213_0%,#080808_68%,#100E08_100%)] p-6 shadow-[0_35px_100px_rgba(0,0,0,.6)] sm:p-8">
        {/* GOLD GLOW */}
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#D4AF37]/[0.075] blur-[75px]" />

        {/* TOP METALLIC LINE */}
        <div className="pointer-events-none absolute left-[12%] top-0 h-px w-[50%] bg-gradient-to-r from-transparent via-[#D4AF37]/55 to-transparent" />

        <div className="relative flex items-start justify-between">
          <Stars />

          <span className="text-[#D4AF37]/18">
            <QuoteIcon />
          </span>
        </div>

        <div className="relative mt-8">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D4AF37]/55">
            Trader Experience
          </p>

          <h3 className="mt-2 text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">
            {testimonial.title}
          </h3>

          <p className="mt-4 min-h-[118px] text-sm leading-7 text-white/46">
            “{testimonial.quote}”
          </p>
        </div>

        <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/[0.09] bg-white/[0.045] text-[26px] shadow-[inset_0_1px_0_rgba(255,255,255,.05)]">
              {testimonial.flag}
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                {testimonial.name}
              </p>

              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.13em] text-white/28">
                {testimonial.country}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.05] px-3 py-1.5 text-[#D4AF37]">
            <ShieldIcon />

            <span className="text-[7px] font-black uppercase tracking-[0.13em] text-[#D4AF37]/70">
              Preview
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActive((current) => (current + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const getPosition = (index: number): Position => {
    const previousIndex =
      active === 0 ? testimonials.length - 1 : active - 1;

    const nextIndex =
      active === testimonials.length - 1 ? 0 : active + 1;

    if (index === active) return "center";
    if (index === previousIndex) return "left";
    if (index === nextIndex) return "right";

    return "hidden";
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#030303] py-24 sm:py-28 lg:py-36"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-[38%] h-[800px] w-[1100px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.055] blur-[190px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.021) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.021) 1px, transparent 1px)",
          backgroundSize: "78px 78px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-[850px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.045] px-4 py-2">
            <span className="text-[#D4AF37]">
              <ShieldIcon />
            </span>

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#D7B64C]">
              BlackProp Community
            </span>
          </div>

          <h2 className="mt-7 text-[3.2rem] font-black leading-[0.92] tracking-[-0.065em] text-white sm:text-[4.7rem] lg:text-[5.5rem]">
            Built for traders
            <span className="block bg-[linear-gradient(100deg,#FFFFFF_0%,#CBCBC8_32%,#E4C15B_70%,#87600F_100%)] bg-clip-text text-transparent">
              who expect more.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[600px] text-sm leading-7 text-white/38 sm:text-base">
            A premium trading experience shaped around clarity,
            discipline and performance.
          </p>
        </div>

        {/* TRUST PILL */}
        <div className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full border border-white/[0.08] bg-white/[0.025] px-5 py-3 backdrop-blur-xl">
          <Stars />

          <span className="h-4 w-px bg-white/[0.09]" />

          <span className="text-[9px] font-bold text-white/40">
            Trader experience preview
          </span>
        </div>

        {/* PERFECTLY CENTERED CAROUSEL */}
        <div className="relative mx-auto mt-12 h-[410px] w-full max-w-[1180px] sm:h-[420px] lg:mt-16">
          {/* CENTER AXIS */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[105px]" />

          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.country}`}
              testimonial={testimonial}
              position={getPosition(index)}
            />
          ))}
        </div>

        {/* CONTROLS */}
        <div className="mt-3 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.08] bg-white/[0.025] text-white/45 transition hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/[0.06] hover:text-[#D4AF37]"
          >
            <ArrowLeft />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-8 bg-[#D4AF37]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.08] bg-white/[0.025] text-white/45 transition hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/[0.06] hover:text-[#D4AF37]"
          >
            <ArrowRight />
          </button>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-12 max-w-[760px] rounded-[28px] border border-white/[0.07] bg-white/[0.022] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.03)] sm:flex sm:items-center sm:justify-between sm:px-7 sm:py-6">
          <div className="text-center sm:text-left">
            <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#D4AF37]">
              Your turn
            </p>

            <p className="mt-2 text-lg font-black tracking-[-0.035em] text-white">
              Ready to build your BlackProp journey?
            </p>
          </div>

          <a
            href="#challenges"
            className="gold-button group mx-auto mt-5 flex h-12 w-fit min-w-[155px] items-center justify-center gap-3 rounded-xl px-6 text-[11px] font-black text-black sm:mx-0 sm:mt-0"
          >
            Get Funded

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[9px] leading-4 text-white/18">
          Sample testimonial content is shown for design preview only.
          Replace with genuine BlackProp customer reviews before publishing.
        </p>
      </div>

      <style jsx global>{`
        .testimonial-card {
          transform: translate(-50%, -50%) scale(1);
        }

        @media (min-width: 1024px) {
          .testimonial-card {
            transform: var(--desktop-transform);
          }
        }
      `}</style>
    </section>
  );
}