"use client";

const highlights = [
  {
    title: "Clear Evaluation",
    value: "Simple Goals",
    description: "Transparent objectives designed for focused trading.",
    icon: "⚡",
  },
  {
    title: "Global Traders",
    value: "Worldwide",
    description: "A professional environment built for traders globally.",
    icon: "🌎",
  },
  {
    title: "Smart Dashboard",
    value: "Track Progress",
    description: "Monitor your trading journey with a clean interface.",
    icon: "▣",
  },
  {
    title: "Multiple Markets",
    value: "Forex • Crypto",
    description: "Trade across different markets from one platform.",
    icon: "◉",
  },
  {
    title: "Transparent Rules",
    value: "Know Everything",
    description: "Clear requirements with no unnecessary complexity.",
    icon: "◈",
  },
  {
    title: "Trader Growth",
    value: "Scale Better",
    description: "A structure focused on consistency and improvement.",
    icon: "↗",
  },
  {
    title: "Secure Platform",
    value: "Built For Trust",
    description: "Professional infrastructure for serious traders.",
    icon: "✓",
  },
  {
    title: "Performance",
    value: "Execution First",
    description: "Stay focused on strategy and discipline.",
    icon: "◆",
  },
];

function HighlightCard({
  title,
  value,
  description,
  icon,
}: (typeof highlights)[number]) {
  return (
    <article
      className="
        group
        relative
        flex
        min-h-[170px]
        w-[210px]
        shrink-0
        flex-col
        justify-between
        overflow-hidden
        rounded-[18px]
        border
        border-[#33384d]/70
        bg-[linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.015))]
        p-4
        backdrop-blur-xl
        transition-all
        duration-500

        sm:min-h-[180px]
        sm:w-[220px]
        sm:rounded-[20px]

        md:min-h-[185px]
        md:w-[225px]

        lg:h-[190px]
        lg:w-[230px]
        lg:rounded-[22px]

        hover:-translate-y-1
        hover:border-[#a734f7]/55
        hover:shadow-[0_20px_70px_rgba(151,44,245,.18)]
      "
    >
      {/* PURPLE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-28
          w-28
          rounded-full
          bg-[#9e4cff]/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-[#9e4cff]/20
        "
      />

      {/* SECONDARY GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-12
          -left-8
          h-24
          w-24
          rounded-full
          bg-[#8f28f3]/[0.05]
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-[#8f28f3]/10
        "
      />

      {/* TOP ACCENT */}
      <div
        className="
          absolute
          left-4
          right-4
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#be6cff]/45
          to-transparent
        "
      />

      {/* ICON */}
      <div
        className="
          relative
          z-10
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-[10px]
          border
          border-[#a734f7]/30
          bg-[#271531]
          text-[14px]
          text-[#be6cff]
          shadow-[0_0_20px_rgba(169,52,247,.08)]
          transition-all
          duration-300

          sm:h-9
          sm:w-9
          sm:rounded-xl
          sm:text-base

          group-hover:border-[#be6cff]/50
          group-hover:bg-[#32183f]
          group-hover:shadow-[0_0_28px_rgba(169,52,247,.18)]
        "
      >
        {icon}
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <p
          className="
            mt-3
            text-[8px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#be6cff]

            sm:mt-4
            sm:text-[9px]

            lg:text-[10px]
            lg:tracking-[0.18em]
          "
        >
          {title}
        </p>

        <h3
          className="
            mt-1
            text-[16px]
            font-black
            leading-tight
            tracking-[-0.02em]
            text-white

            sm:text-[17px]
            lg:text-lg
          "
        >
          {value}
        </h3>

        <p
          className="
            mt-1.5
            text-[11px]
            leading-[1.55]
            text-[#95a0b4]

            sm:mt-2
            sm:text-[12px]
            sm:leading-5
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export function Rewards() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#0b0c13]
        py-5

        sm:py-6
        md:py-7
        lg:py-8
      "
    >
      <style>{`
        @keyframes rewardsMarquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .rewards-marquee-track {
          animation: rewardsMarquee 34s linear infinite;
          will-change: transform;
        }

        @media (max-width: 639px) {
          .rewards-marquee-track {
            animation-duration: 26s;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .rewards-marquee-track {
            animation-duration: 30s;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .rewards-marquee:hover .rewards-marquee-track {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rewards-marquee {
            overflow-x: auto !important;
            scrollbar-width: none;
          }

          .rewards-marquee::-webkit-scrollbar {
            display: none;
          }

          .rewards-marquee-track {
            animation: none !important;
            transform: none !important;
          }

          .rewards-marquee-copy:nth-child(2) {
            display: none;
          }
        }
      `}</style>

      {/* BASE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[#0b0c13]" />

      {/* TOP PURPLE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-100px]
          h-[260px]
          w-[520px]
          max-w-[95vw]
          -translate-x-1/2
          rounded-full
          bg-[#8f28f3]/10
          blur-[100px]

          sm:h-[300px]
          sm:w-[700px]
          sm:blur-[110px]

          lg:top-[-120px]
          lg:h-[360px]
          lg:w-[900px]
          lg:blur-[120px]
        "
      />

      {/* CENTER LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[220px]
          w-[600px]
          max-w-[95vw]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(158,76,255,.10)_0%,rgba(143,40,243,.04)_38%,transparent_72%)]

          sm:w-[750px]
          lg:h-[280px]
          lg:w-[900px]
        "
      />

      {/* MARQUEE */}
      <div className="rewards-marquee relative overflow-hidden">
        {/* LEFT FADE */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-8
            bg-gradient-to-r
            from-[#0b0c13]
            via-[#0b0c13]/85
            to-transparent

            min-[430px]:w-12
            sm:w-16
            md:w-20
            lg:w-28
          "
        />

        {/* RIGHT FADE */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20
            w-8
            bg-gradient-to-l
            from-[#0b0c13]
            via-[#0b0c13]/85
            to-transparent

            min-[430px]:w-12
            sm:w-16
            md:w-20
            lg:w-28
          "
        />

        <div className="rewards-marquee-track flex w-max">
          {/* COPY 1 */}
          <div
            className="
              rewards-marquee-copy
              flex
              gap-2.5
              pr-2.5

              sm:gap-3
              sm:pr-3

              lg:gap-4
              lg:pr-4
            "
          >
            {highlights.map((item) => (
              <HighlightCard
                key={`first-${item.title}`}
                {...item}
              />
            ))}
          </div>

          {/* COPY 2 */}
          <div
            aria-hidden="true"
            className="
              rewards-marquee-copy
              flex
              gap-2.5
              pr-2.5

              sm:gap-3
              sm:pr-3

              lg:gap-4
              lg:pr-4
            "
          >
            {highlights.map((item) => (
              <HighlightCard
                key={`second-${item.title}`}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;