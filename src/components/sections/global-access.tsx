"use client";

import type { CSSProperties } from "react";

/* =========================================================
   BLACKPROP SVG LOGO
========================================================= */

function BPMark({
  width = 20,
  height = 25,
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

/* =========================================================
   COUNTRY DATA
========================================================= */

type Country = {
  code: string;
  name: string;
};

const outerRing: Country[] = [
  { code: "GB", name: "UK" },
  { code: "AU", name: "Australia" },
  { code: "JP", name: "Japan" },
  { code: "BR", name: "Brazil" },
  { code: "IN", name: "India" },
];

const middleRing: Country[] = [
  { code: "CA", name: "Canada" },
  { code: "DE", name: "Germany" },
  { code: "SG", name: "Singapore" },
  { code: "FR", name: "France" },
];

const innerRing: Country[] = [
  { code: "AE", name: "UAE" },
  { code: "ZA", name: "S. Africa" },
  { code: "ES", name: "Spain" },
];

/* =========================================================
   FLAG
   Uses flagcdn.com for actual country flag images.
========================================================= */

function CountryFlag({ code }: { code: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
      srcSet={`
        https://flagcdn.com/w80/${code.toLowerCase()}.png 2x
      `}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="
        h-[13px]
        w-[20px]
        shrink-0
        rounded-[2px]
        object-cover
        shadow-[0_1px_4px_rgba(0,0,0,.45)]
        sm:h-[15px]
        sm:w-[23px]
      "
    />
  );
}

/* =========================================================
   ICONS
========================================================= */

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

/* =========================================================
   COUNTRY BADGE
========================================================= */

function CountryBadge({ country }: { country: Country }) {
  return (
    <div
      className="
        flex
        items-center
        gap-1.5
        whitespace-nowrap
        rounded-lg
        border
        border-white/[0.10]
        bg-[#0B0B0D]/95
        px-2
        py-1.5
        shadow-[0_6px_16px_rgba(0,0,0,.4)]
        backdrop-blur-md
        sm:gap-2
        sm:rounded-xl
        sm:px-2.5
        sm:py-2
      "
    >
      {/* REAL COUNTRY FLAG */}

      <CountryFlag code={country.code} />

      {/* COUNTRY NAME */}

      <span
        className="
          max-w-[74px]
          truncate
          text-[9px]
          font-semibold
          text-white/70
          sm:text-[10px]
        "
      >
        {country.name}
      </span>
    </div>
  );
}

/* =========================================================
   ORBIT RING
========================================================= */

function OrbitRing({
  items,
  radius,
  duration,
  offset = 0,
  reverse = false,
  dim = false,
}: {
  items: Country[];
  radius: number;
  duration: number;
  offset?: number;
  reverse?: boolean;
  dim?: boolean;
}) {
  return (
    <div
      className="bp-orbit absolute inset-0"
      style={
        {
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        } as CSSProperties
      }
    >
      {/* ORBIT LINE */}

      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
          dim
            ? "border-white/[0.04]"
            : "border-[#A78BFA]/[0.12]"
        }`}
        style={{
          width: `${radius * 2}%`,
          height: `${radius * 2}%`,
        }}
      />

      {items.map((country, index) => {
        const angle =
          offset + index * (360 / items.length);

        const radians =
          (angle * Math.PI) / 180;

        const left = (
          50 +
          Math.cos(radians) * radius
        ).toFixed(3);

        const top = (
          50 +
          Math.sin(radians) * radius
        ).toFixed(3);

        return (
          <div
            key={country.code}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform:
                "translate(-50%, -50%)",
            }}
          >
            {/* COUNTER ROTATION */}

            <div
              className="bp-orbit-counter"
              style={
                {
                  animationDuration: `${duration}s`,
                  animationDirection: reverse
                    ? "normal"
                    : "reverse",
                } as CSSProperties
              }
            >
              <CountryBadge country={country} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* =========================================================
   STATIC WIREFRAME GLOBE
========================================================= */

function WireframeGlobe() {
  return (
    <div
      className="
        relative
        z-10
        aspect-square
        w-[42%]
        max-w-[380px]
        sm:w-[38%]
        lg:w-[36%]
      "
    >
      {/* AMBIENT GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[-10%]
          rounded-full
          bg-[radial-gradient(circle,rgba(139,92,246,.16)_0%,rgba(139,92,246,.05)_45%,transparent_72%)]
        "
      />

      <div className="relative h-full w-full">
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <radialGradient
              id="bpGlobeFill"
              cx="35%"
              cy="32%"
              r="75%"
            >
              <stop
                offset="0%"
                stopColor="#2a1f3d"
              />
              <stop
                offset="55%"
                stopColor="#0f0a17"
              />
              <stop
                offset="100%"
                stopColor="#030105"
              />
            </radialGradient>
          </defs>

          {/* SPHERE BODY */}

          <circle
            cx="200"
            cy="200"
            r="150"
            fill="url(#bpGlobeFill)"
            stroke="#8B5CF6"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />

          {/* LATITUDE */}

          {[-60, -30, 0, 30, 60].map(
            (lat) => (
              <ellipse
                key={`lat-${lat}`}
                cx="200"
                cy={
                  200 -
                  Math.sin(
                    (lat * Math.PI) / 180
                  ) *
                    150
                }
                rx="150"
                ry={Math.max(
                  6,
                  150 *
                    Math.cos(
                      (lat * Math.PI) / 180
                    ) *
                    0.28
                )}
                fill="none"
                stroke="#C4B5FD"
                strokeOpacity={
                  lat === 0 ? 0.22 : 0.1
                }
                strokeWidth="1"
              />
            )
          )}

          {/* LONGITUDE */}

          {[0, 30, 60, 90, 120, 150].map(
            (lon) => (
              <ellipse
                key={`lon-${lon}`}
                cx="200"
                cy="200"
                rx={Math.max(
                  4,
                  150 *
                    Math.abs(
                      Math.cos(
                        (lon * Math.PI) / 180
                      )
                    )
                )}
                ry="150"
                fill="none"
                stroke="#C4B5FD"
                strokeOpacity={
                  lon === 0 ? 0.22 : 0.1
                }
                strokeWidth="1"
              />
            )
          )}

          {/* GLOWING NODES */}

          {[
            [120, 130],
            [260, 110],
            [180, 260],
            [280, 220],
            [140, 300],
            [310, 170],
            [90, 200],
            [220, 320],
            [250, 80],
          ].map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 3 === 0 ? 3.5 : 2.2}
              fill="#A78BFA"
              opacity="0.9"
            />
          ))}

          {/* CONNECTION ARCS */}

          <path
            d="M120,130 Q200,60 260,110"
            stroke="#A78BFA"
            strokeOpacity="0.35"
            strokeWidth="1"
            fill="none"
          />

          <path
            d="M180,260 Q240,300 280,220"
            stroke="#A78BFA"
            strokeOpacity="0.35"
            strokeWidth="1"
            fill="none"
          />

          <path
            d="M90,200 Q150,150 140,300"
            stroke="#A78BFA"
            strokeOpacity="0.3"
            strokeWidth="1"
            fill="none"
          />

          <path
            d="M260,110 Q300,160 310,170"
            stroke="#A78BFA"
            strokeOpacity="0.3"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* BP CENTER MARK */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-20
          grid
          h-12
          w-12
          -translate-x-1/2
          -translate-y-1/2
          place-items-center
          rounded-full
          border
          border-white/[0.14]
          bg-[#0A0A0C]
          shadow-[0_0_28px_rgba(139,92,246,.35)]
          sm:h-14
          sm:w-14
        "
      >
        <BPMark
          width={22}
          height={28}
          color="#FFFFFF"
          className="sm:h-[26px] sm:w-[33px]"
        />
      </div>
    </div>
  );
}

/* =========================================================
   NETWORK
========================================================= */

function GlobalNetwork() {
  return (
    <div
      className="
        bp-global-network
        relative
        mx-auto
        flex
        aspect-square
        w-full
        max-w-[620px]
        items-center
        justify-center
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-[8%]
          rounded-full
          border
          border-white/[0.05]
        "
      />

      {/* OUTER */}

      <OrbitRing
        items={outerRing}
        radius={46}
        duration={70}
        offset={0}
        dim
      />

      {/* MIDDLE */}

      <OrbitRing
        items={middleRing}
        radius={32}
        duration={50}
        offset={30}
        reverse
      />

      {/* INNER */}

      <OrbitRing
        items={innerRing}
        radius={20}
        duration={38}
        offset={60}
      />

      <WireframeGlobe />
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export function GlobalAccess() {
  return (
    <section
      id="global-access"
      className="
        relative
        overflow-hidden
        bg-[#030303]
        py-10
        sm:py-12
        md:py-14
        lg:py-16
        xl:py-16
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[30%]
          h-[900px]
          w-[900px]
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(139,92,246,.09)_0%,rgba(139,92,246,.02)_45%,transparent_72%)]
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-[1400px]
          grid-cols-1
          items-center
          gap-8
          px-4
          sm:px-6
          lg:grid-cols-2
          lg:gap-4
          lg:px-8
        "
      >
        {/* LEFT */}

        <div className="max-w-[560px]">
          <div
            className="
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-white/[0.09]
              bg-white/[0.035]
              px-4
              py-2.5
            "
          >
            <BPMark
              width={14}
              height={18}
              color="#FFFFFF"
              className="shrink-0"
            />

            <span
              className="
                text-[11px]
                font-black
                uppercase
                tracking-[0.16em]
                text-white/65
                sm:text-[12px]
              "
            >
              BlackProp Worldwide
            </span>
          </div>

          <h2
            className="
              mt-6
              text-[3.2rem]
              font-black
              leading-[0.94]
              tracking-[-0.055em]
              text-white
              sm:text-[4.2rem]
              lg:text-[4.8rem]
            "
          >
            Trade beyond

            <span
              className="
                block
                bg-[linear-gradient(100deg,#FFFFFF_0%,#D6CCF5_35%,#9B7BEA_70%,#5B2FCB_100%)]
                bg-clip-text
                text-transparent
              "
            >
              borders.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-[460px]
              text-[16px]
              leading-7
              text-white/52
              sm:text-[17px]
              sm:leading-8
            "
          >
            A global-facing BlackProp experience designed to
            connect ambitious traders across supported markets
            and regions.
          </p>

          <div
            className="
              mt-6
              flex
              w-fit
              items-center
              gap-2.5
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-4
              py-2.5
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.13em]
                text-white/52
                sm:text-[11px]
              "
            >
              Global trader network
            </span>
          </div>

          <div
            className="
              mt-6
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-white/[0.08]
              bg-[#0B0B0C]
              px-4
              py-3
            "
          >
            <span
              className="
                grid
                h-8
                w-8
                shrink-0
                place-items-center
                rounded-full
                border
                border-white/[0.10]
                bg-white/[0.035]
                text-white
              "
            >
              <CheckIcon />
            </span>

            <div className="flex flex-wrap items-center gap-2">
              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.12em]
                  text-white/58
                  sm:text-[11px]
                "
              >
                Global community
              </span>

              <span className="h-1 w-1 rounded-full bg-[#8B5CF6]" />

              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.12em]
                  text-white/58
                  sm:text-[11px]
                "
              >
                One experience
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div>
          <GlobalNetwork />
        </div>
      </div>

      {/* DISCLAIMER */}

      <p
        className="
          relative
          mx-auto
          mt-8
          max-w-[760px]
          px-3
          text-center
          text-[13px]
          font-medium
          leading-6
          text-white/45
          sm:text-[14px]
          sm:leading-7
        "
      >
        Country codes are illustrative. Final BlackProp
        availability should reflect actual supported
        jurisdictions and applicable restrictions.
      </p>

      {/* ANIMATIONS */}

      <style>{`
        .bp-global-network {
          contain: layout paint;
          isolation: isolate;
        }

        .bp-orbit {
          animation-name: bpOrbitSpin;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .bp-orbit-counter {
          animation-name: bpOrbitSpin;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        @keyframes bpOrbitSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 640px) {
          .bp-orbit,
          .bp-orbit-counter {
            animation-duration: 30s !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bp-orbit,
          .bp-orbit-counter {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default GlobalAccess;