"use client";

import Image from "next/image";
import {
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
} from "react";

const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "India", flag: "🇮🇳" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },

  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Brazil", flag: "🇧🇷" },

  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "Sweden", flag: "🇸🇪" },
];

/* =========================================================
   ICONS
========================================================= */

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="7.2"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M2.9 10h14.2M10 2.8c2 2 3 4.4 3 7.2s-1 5.2-3 7.2c-2-2-3-4.4-3-7.2s1-5.2 3-7.2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
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
        d="m5.5 10.2 2.8 2.8 6.2-6.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DragIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M10 3v14M3 10h14M7.5 5.5 10 3l2.5 2.5M7.5 14.5 10 17l2.5-2.5M5.5 7.5 3 10l2.5 2.5M14.5 7.5 17 10l-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   PERFORMANCE-OPTIMIZED 3D GLOBE

   IMPORTANT:
   We mutate one DOM transform with requestAnimationFrame.
   No React state update on every pointer move.
========================================================= */

function WorldGlobe() {
  const globeRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const frameRef = useRef<number | null>(null);

  const rotationRef = useRef({
    x: -5,
    y: 10,
  });

  const dragRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    startRotationX: -5,
    startRotationY: 10,
  });

  function clamp(
    value: number,
    min: number,
    max: number,
  ) {
    return Math.min(Math.max(value, min), max);
  }

  function applyRotation() {
    if (!globeRef.current) return;

    globeRef.current.style.transform = `rotateX(${rotationRef.current.x}deg) rotateY(${rotationRef.current.y}deg)`;

    frameRef.current = null;
  }

  function queueRotation() {
    if (frameRef.current !== null) return;

    frameRef.current =
      window.requestAnimationFrame(applyRotation);
  }

  function handlePointerDown(
    event: ReactPointerEvent<HTMLButtonElement>,
  ) {
    event.currentTarget.setPointerCapture(
      event.pointerId,
    );

    dragRef.current.active = true;
    dragRef.current.startX = event.clientX;
    dragRef.current.startY = event.clientY;

    dragRef.current.startRotationX =
      rotationRef.current.x;

    dragRef.current.startRotationY =
      rotationRef.current.y;

    event.currentTarget.style.cursor = "grabbing";

    if (globeRef.current) {
      globeRef.current.style.transition = "none";
    }
  }

  function handlePointerMove(
    event: ReactPointerEvent<HTMLButtonElement>,
  ) {
    if (!dragRef.current.active) return;

    const deltaX =
      event.clientX - dragRef.current.startX;

    const deltaY =
      event.clientY - dragRef.current.startY;

    rotationRef.current.x = clamp(
      dragRef.current.startRotationX -
        deltaY * 0.1,
      -22,
      22,
    );

    rotationRef.current.y = clamp(
      dragRef.current.startRotationY +
        deltaX * 0.13,
      -36,
      36,
    );

    queueRotation();
  }

  function handlePointerEnd(
    event: ReactPointerEvent<HTMLButtonElement>,
  ) {
    dragRef.current.active = false;

    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId,
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId,
      );
    }

    event.currentTarget.style.cursor = "grab";

    if (globeRef.current) {
      globeRef.current.style.transition =
        "transform 500ms cubic-bezier(.22,1,.36,1)";
    }
  }

  function handleKeyboard(
    event: ReactKeyboardEvent<HTMLButtonElement>,
  ) {
    const step = 4;

    if (event.key === "ArrowLeft") {
      event.preventDefault();

      rotationRef.current.y = clamp(
        rotationRef.current.y - step,
        -36,
        36,
      );
    } else if (event.key === "ArrowRight") {
      event.preventDefault();

      rotationRef.current.y = clamp(
        rotationRef.current.y + step,
        -36,
        36,
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();

      rotationRef.current.x = clamp(
        rotationRef.current.x - step,
        -22,
        22,
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();

      rotationRef.current.x = clamp(
        rotationRef.current.x + step,
        -22,
        22,
      );
    } else if (event.key === "Enter") {
      rotationRef.current = {
        x: -5,
        y: 10,
      };
    } else {
      return;
    }

    if (globeRef.current) {
      globeRef.current.style.transition =
        "transform 400ms cubic-bezier(.22,1,.36,1)";
    }

    queueRotation();
  }

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative z-30 w-[46%] max-w-[475px]">
      {/* STATIC AMBIENT — NO BLUR FILTER ELEMENTS */}
      <div className="pointer-events-none absolute inset-[-20%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,.12)_0%,rgba(212,175,55,.04)_35%,transparent_70%)]" />

      {/* CLEAN STATIC RINGS */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/15" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[103%] w-[116%] -translate-x-1/2 -translate-y-1/2 rotate-[28deg] rounded-[50%] border border-dashed border-white/[0.08]" />

      {/* 3D STAGE */}
      <div
        className="relative aspect-square"
        style={{
          perspective: "1000px",
        }}
      >
        <button
          ref={buttonRef}
          type="button"
          aria-label="Drag to rotate the BlackProp globe"
          title="Drag to rotate"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onKeyDown={handleKeyboard}
          className="relative block h-full w-full touch-none select-none rounded-full bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50"
          style={{
            cursor: "grab",
          }}
        >
          <div
            ref={globeRef}
            className="relative h-full w-full transform-gpu"
            style={{
              transform:
                "rotateX(-5deg) rotateY(10deg)",
              transformStyle: "preserve-3d",
              transition:
                "transform 500ms cubic-bezier(.22,1,.36,1)",
            }}
          >
            {/* SIMPLE DEPTH */}
            <div
              className="pointer-events-none absolute inset-[9%] rounded-full bg-black/30"
              style={{
                transform:
                  "translate3d(15px,18px,-25px)",
              }}
            />

            {/* IMAGE */}
            <Image
              src="/images/globe.png"
              alt="BlackProp global network globe"
              width={800}
              height={800}
              draggable={false}
              sizes="(max-width: 640px) 46vw, 475px"
              className="pointer-events-none relative z-10 h-full w-full select-none object-contain"
              style={{
                transform: "translateZ(18px)",
              }}
            />

            {/* 3D EDGE */}
            <div
              className="pointer-events-none absolute inset-[7%] z-20 rounded-full shadow-[inset_-24px_-18px_34px_rgba(0,0,0,.34),inset_12px_8px_24px_rgba(255,239,180,.035)]"
              style={{
                transform: "translateZ(22px)",
              }}
            />
          </div>

          {/* FIXED LIGHT SOURCE */}
          <div className="pointer-events-none absolute left-[25%] top-[17%] z-30 h-[23%] w-[12%] rotate-[24deg] rounded-full bg-white/[0.07]" />
        </button>
      </div>

      {/* BP CORE */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-40 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#D4AF37]/30 bg-[#070707]/90 shadow-[0_0_24px_rgba(212,175,55,.16)] sm:h-14 sm:w-14">
        <span className="bg-[linear-gradient(135deg,#FFF1A3,#D4AF37_52%,#765009)] bg-clip-text text-xs font-black tracking-[-0.1em] text-transparent sm:text-base">
          BP
        </span>
      </div>

      {/* SIMPLE NODES */}
      <span className="pointer-events-none absolute right-[9%] top-[30%] z-40 h-3 w-3 rounded-full border-2 border-[#080808] bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,.5)]" />

      <span className="pointer-events-none absolute bottom-[26%] left-[9%] z-40 h-2.5 w-2.5 rounded-full border-2 border-[#080808] bg-[#D4D4CF]" />

      {/* DRAG HINT */}
      <div className="pointer-events-none absolute -bottom-2 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/[0.08] bg-[#0D0D0E] px-3 py-2">
        <div className="flex items-center gap-2 text-[#D4AF37]">
          <DragIcon />

          <span className="text-[7px] font-black uppercase tracking-[0.15em] text-white/45">
            Drag to explore
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COUNTRY CARD

   No backdrop-filter.
   No expensive moving blur.
========================================================= */

function CountryCard({
  name,
  flag,
}: {
  name: string;
  flag: string;
}) {
  return (
    <div
      title={name}
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
        border-white/[0.10]
        bg-[#101011]
        shadow-[0_8px_20px_rgba(0,0,0,.32)]

        sm:h-auto
        sm:w-auto
        sm:min-w-[116px]
        sm:gap-2.5
        sm:px-3.5
        sm:py-3
      "
    >
      <span className="text-[29px] leading-none sm:text-[30px]">
        {flag}
      </span>

      <span className="hidden whitespace-nowrap text-[8px] font-bold text-white/55 sm:block">
        {name}
      </span>
    </div>
  );
}

/* =========================================================
   COUNTRY ORBIT
========================================================= */

function CountryOrbit({
  items,
  size,
  radius,
  duration,
  reverse = false,
  offset = 0,
  subtle = false,
}: {
  items: typeof countries;
  size: string;
  radius: number;
  duration: number;
  reverse?: boolean;
  offset?: number;
  subtle?: boolean;
}) {
  return (
    <div
      className={`country-orbit absolute left-1/2 top-1/2 rounded-full border ${
        subtle
          ? "border-white/[0.045]"
          : "border-[#D4AF37]/[0.11]"
      } ${size}`}
      style={{
        animationDuration: `${duration}s`,
        animationDirection: reverse
          ? "reverse"
          : "normal",
      }}
    >
      {items.map((country, index) => {
        const angle =
          offset +
          index * (360 / items.length);

        const radians =
          (angle * Math.PI) / 180;

        /*
         * Fixed precision prevents hydration mismatch.
         */
        const left = (
          50 +
          Math.cos(radians) * radius
        ).toFixed(4);

        const top = (
          50 +
          Math.sin(radians) * radius
        ).toFixed(4);

        return (
          <div
            key={country.name}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform:
                "translate(-50%, -50%)",
            }}
          >
            <div
              className="country-counter"
              style={{
                animationDuration: `${duration}s`,
                animationDirection: reverse
                  ? "normal"
                  : "reverse",
              }}
            >
              <CountryCard
                name={country.name}
                flag={country.flag}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* =========================================================
   NETWORK
========================================================= */

function GlobalNetwork() {
  const outerCountries = countries.slice(0, 6);
  const middleCountries = countries.slice(6, 12);
  const innerCountries = countries.slice(12, 18);

  return (
    <div className="global-network relative mx-auto aspect-square w-full max-w-[1080px]">
      {/* STATIC AMBIENT GRADIENT */}
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,.055)_0%,rgba(212,175,55,.018)_42%,transparent_72%)]" />

      {/* OUTER HALO */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[98%] w-[98%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#D4AF37]/[0.065]" />

      {/* RADIAL LINES */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[86%] w-px -translate-x-1/2 -translate-y-1/2 rotate-[42deg] bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[86%] w-px -translate-x-1/2 -translate-y-1/2 -rotate-[42deg] bg-gradient-to-b from-transparent via-white/[0.045] to-transparent" />

      {/* ONLY THREE MAIN ORBIT ANIMATIONS */}
      <CountryOrbit
        items={outerCountries}
        size="h-[92%] w-[92%]"
        radius={49}
        duration={52}
        offset={-9}
      />

      <CountryOrbit
        items={middleCountries}
        size="h-[74%] w-[74%]"
        radius={49}
        duration={43}
        reverse
        offset={20}
        subtle
      />

      <CountryOrbit
        items={innerCountries}
        size="h-[57%] w-[57%]"
        radius={49}
        duration={35}
        offset={4}
      />

      {/* STATIC PARTICLES */}
      <span className="pointer-events-none absolute left-[5%] top-[44%] h-2 w-2 rounded-full bg-[#D4AF37]/70 shadow-[0_0_12px_rgba(212,175,55,.4)]" />

      <span className="pointer-events-none absolute right-[9%] top-[31%] h-2 w-2 rounded-full border border-white/10 bg-[#111]" />

      <span className="pointer-events-none absolute bottom-[15%] left-[24%] h-1.5 w-1.5 rounded-full bg-white/15" />

      {/* CENTER */}
      <div className="absolute inset-0 flex items-center justify-center">
        <WorldGlobe />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export function GlobalAccess() {
  const sectionRef = useRef<HTMLElement>(null);

  /*
   * Pause every continuous animation while this section
   * is away from the viewport.
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (
      typeof IntersectionObserver === "undefined"
    ) {
      section.dataset.active = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.dataset.active =
          entry.isIntersecting
            ? "true"
            : "false";
      },
      {
        rootMargin: "180px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-active="false"
      id="global-access"
      className="global-access-section relative overflow-hidden bg-[#030303] py-24 sm:py-28 lg:py-32"
      style={{
        backgroundImage: `
          radial-gradient(
            circle at 50% 46%,
            rgba(212,175,55,.075) 0%,
            rgba(212,175,55,.025) 24%,
            transparent 52%
          ),
          radial-gradient(
            circle at 12% 55%,
            rgba(255,255,255,.018) 0%,
            transparent 31%
          )
        `,
      }}
    >
      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)",
          backgroundSize: "78px 78px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 11%, black 89%, transparent)",
        }}
      />

      {/* TOP LINE */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.065] to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-[850px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2">
            <span className="text-[#D4AF37]">
              <GlobeIcon />
            </span>

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/45">
              BlackProp Worldwide
            </span>
          </div>

          <h2 className="mt-7 text-[3.3rem] font-black leading-[0.91] tracking-[-0.065em] text-white sm:text-[4.8rem] lg:text-[5.6rem]">
            Trade beyond

            <span className="block bg-[linear-gradient(100deg,#FFFFFF_0%,#D9D9D5_32%,#E4C15B_68%,#80590C_100%)] bg-clip-text text-transparent">
              borders.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[610px] text-sm leading-7 text-white/38 sm:text-base">
            One BlackProp experience designed to
            connect ambitious traders across
            supported markets and regions worldwide.
          </p>

          {/* SIMPLE META */}
          <div className="mx-auto mt-7 flex w-fit items-center gap-4 rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2.5">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

              <span className="text-[7px] font-black uppercase tracking-[0.13em] text-white/35">
                Global network
              </span>
            </span>

            <span className="h-3 w-px bg-white/[0.08]" />

            <span className="flex items-center gap-1.5 text-[#D4AF37]/75">
              <DragIcon />

              <span className="text-[7px] font-black uppercase tracking-[0.13em] text-white/35">
                Interactive globe
              </span>
            </span>
          </div>
        </div>

        {/* NETWORK */}
        <div className="mx-auto mt-1 max-w-[1120px] sm:mt-3 lg:mt-4">
          <GlobalNetwork />
        </div>

        {/* STATUS */}
        <div className="mx-auto -mt-2 flex w-fit items-center gap-3 rounded-full border border-white/[0.08] bg-[#0B0B0C] px-4 py-2.5 sm:-mt-7">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.06] text-[#D4AF37]">
            <CheckIcon />
          </span>

          <div className="flex items-center gap-2">
            <span className="text-[8px] font-black uppercase tracking-[0.14em] text-white/42">
              Global community
            </span>

            <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />

            <span className="text-[8px] font-black uppercase tracking-[0.14em] text-white/42">
              One experience
            </span>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-[9px] leading-4 text-white/18">
          Country flags are illustrative. Final
          BlackProp availability should reflect actual
          supported jurisdictions and applicable
          restrictions.
        </p>
      </div>

      {/* =====================================================
          PERFORMANCE-SAFE ANIMATIONS
      ====================================================== */}

      <style jsx global>{`
        .global-access-section {
          content-visibility: auto;
          contain-intrinsic-size: 1100px;
        }

        .global-network {
          contain: layout paint;
          isolation: isolate;
        }

        /*
         * Only transform properties animate.
         * No moving filter / blur / backdrop-filter.
         */
        .country-orbit {
          transform: translate3d(-50%, -50%, 0)
            rotate(0deg);
          transform-origin: 50% 50%;
          animation-name: blackpropOrbit;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        /*
         * Counter rotation keeps labels upright.
         * No will-change here so we do not allocate
         * 18 permanent compositor layers.
         */
        .country-counter {
          animation-name: blackpropCounterOrbit;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform-origin: center;
        }

        @keyframes blackpropOrbit {
          from {
            transform: translate3d(
                -50%,
                -50%,
                0
              )
              rotate(0deg);
          }

          to {
            transform: translate3d(
                -50%,
                -50%,
                0
              )
              rotate(360deg);
          }
        }

        @keyframes blackpropCounterOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /*
         * Stop animations completely when away
         * from the viewport.
         */
        .global-access-section[data-active="false"]
          .country-orbit,
        .global-access-section[data-active="false"]
          .country-counter {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .country-orbit,
          .country-counter {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}