"use client";

const advantages = [
  {
    title: "Clear Trading Rules",
    text: "Simple objectives and transparent conditions designed for focused trading.",
    icon: "✓",
  },
  {
    title: "Professional Dashboard",
    text: "Monitor your progress, performance and account status in one place.",
    icon: "◉",
  },
  {
    title: "Built For Discipline",
    text: "A structured environment that encourages consistency and better execution.",
    icon: "◈",
  },
  {
    title: "Global Trading Access",
    text: "A modern trading experience designed for traders worldwide.",
    icon: "◎",
  },
  {
    title: "Transparent Process",
    text: "Know your targets, requirements and progress at every stage.",
    icon: "◆",
  },
  {
    title: "Trader Focused",
    text: "Everything built around helping traders focus on performance.",
    icon: "↗",
  },
];

function AdvantageCard({
  title,
  text,
  icon,
}: (typeof advantages)[number]) {
  return (
    <article
      className="
        group
        relative
        flex
        min-h-[165px]
        w-[230px]
        shrink-0
        flex-col
        justify-between
        overflow-hidden
        rounded-[18px]
        border
        border-[#33384d]/70
        bg-[linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.012))]
        p-4
        backdrop-blur-xl
        transition-all
        duration-500

        min-[420px]:w-[245px]

        sm:min-h-[178px]
        sm:w-[275px]
        sm:rounded-[20px]
        sm:p-[18px]

        md:w-[290px]

        lg:min-h-[190px]
        lg:w-[310px]
        lg:rounded-[22px]
        lg:p-5

        xl:w-[320px]

        hover:-translate-y-1
        hover:border-[#a734f7]/55
        hover:shadow-[0_20px_70px_rgba(151,44,245,.16)]
      "
    >
      {/* PURPLE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -right-14
          -top-14
          h-28
          w-28
          rounded-full
          bg-[#9e4cff]/[0.08]
          blur-[50px]
          transition-all
          duration-500
          group-hover:bg-[#9e4cff]/[0.18]

          sm:h-32
          sm:w-32
          sm:blur-[56px]

          lg:-right-16
          lg:-top-16
          lg:h-36
          lg:w-36
          lg:blur-[60px]
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
          via-[#be6cff]/40
          to-transparent
          sm:left-5
          sm:right-5
        "
      />

      <div className="relative z-10">
        {/* ICON */}
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-[10px]
            border
            border-[#a734f7]/30
            bg-[#271531]
            text-[15px]
            font-bold
            text-[#be6cff]
            shadow-[0_0_22px_rgba(169,52,247,.08)]
            transition-all
            duration-300

            sm:h-10
            sm:w-10
            sm:rounded-xl
            sm:text-lg

            group-hover:border-[#be6cff]/50
            group-hover:bg-[#32183f]
            group-hover:shadow-[0_0_28px_rgba(169,52,247,.16)]
          "
        >
          {icon}
        </div>

        <h3
          className="
            mt-4
            text-[14px]
            font-bold
            leading-5
            tracking-[-0.01em]
            text-white

            sm:mt-5
            sm:text-[15px]

            lg:text-[16px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1.5
            text-[11px]
            leading-[1.65]
            text-[#95a0b4]

            sm:mt-2
            sm:text-[12px]
            sm:leading-5

            lg:text-[13px]
            lg:leading-6
          "
        >
          {text}
        </p>
      </div>

      <div
        className="
          relative
          z-10
          mt-4
          text-[8px]
          font-bold
          uppercase
          tracking-[0.15em]
          text-[#be6cff]/70

          sm:mt-5
          sm:text-[9px]
          sm:tracking-[0.17em]

          lg:text-[10px]
          lg:tracking-[0.18em]
        "
      >
        BlackProp Advantage
      </div>
    </article>
  );
}

export function Testimony() {
  const rowOne = advantages.slice(0, 3);
  const rowTwo = advantages.slice(3);

  return (
    <section
      id="advantages"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#0b0c13]
        pb-10
        pt-14

        sm:pb-12
        sm:pt-16

        md:pb-14
        md:pt-20

        lg:pb-16
        lg:pt-24

        xl:pt-28
      "
    >
      <style>{`
        @keyframes advantagesMarqueeLeft {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes advantagesMarqueeRight {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        .reviews-track-left {
          animation: advantagesMarqueeLeft 24s linear infinite;
          will-change: transform;
        }

        .reviews-track-right {
          animation: advantagesMarqueeRight 24s linear infinite;
          will-change: transform;
        }

        @media (min-width: 640px) {
          .reviews-track-left,
          .reviews-track-right {
            animation-duration: 28s;
          }
        }

        @media (min-width: 1024px) {
          .reviews-track-left,
          .reviews-track-right {
            animation-duration: 32s;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .reviews-marquee:hover .reviews-track-left,
          .reviews-marquee:hover .reviews-track-right {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reviews-marquee {
            overflow-x: auto !important;
            scrollbar-width: none;
          }

          .reviews-marquee::-webkit-scrollbar {
            display: none;
          }

          .reviews-track-left,
          .reviews-track-right {
            animation: none !important;
            transform: none !important;
          }

          .advantages-copy:nth-child(2) {
            display: none;
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[#0b0c13]" />

      {/* CENTER GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[36%]
          h-[360px]
          w-[560px]
          max-w-[95vw]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(158,76,255,.12)_0%,rgba(143,40,243,.05)_38%,transparent_70%)]
          blur-[10px]

          sm:h-[440px]
          sm:w-[720px]

          lg:h-[520px]
          lg:w-[900px]
        "
      />

      {/* TOP GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-210px]
          h-[380px]
          w-[560px]
          max-w-[95vw]
          -translate-x-1/2
          rounded-full
          bg-[#8f28f3]/[0.08]
          blur-[100px]

          sm:top-[-240px]
          sm:h-[440px]
          sm:w-[700px]
          sm:blur-[110px]

          lg:top-[-270px]
          lg:h-[500px]
          lg:w-[820px]
          lg:blur-[120px]
        "
      />

      {/* BOTTOM GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-190px]
          left-1/2
          h-[320px]
          w-[620px]
          max-w-[95vw]
          -translate-x-1/2
          rounded-full
          bg-[#b04cf4]/[0.08]
          blur-[100px]

          sm:bottom-[-220px]
          sm:h-[380px]
          sm:w-[780px]
          sm:blur-[110px]

          lg:bottom-[-240px]
          lg:h-[430px]
          lg:w-[950px]
          lg:blur-[120px]
        "
      />

      {/* HEADER */}
      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-4
          text-center
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#a734f7]/30
            bg-[#271531]
            px-3
            py-1.5
            shadow-[0_0_30px_rgba(151,44,245,.06)]

            sm:px-4
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#be6cff]
              shadow-[0_0_10px_rgba(190,108,255,.9)]
            "
          />

          <span
            className="
              text-[8px]
              font-black
              uppercase
              tracking-[0.18em]
              text-[#d9b5ff]

              sm:text-[9px]
              sm:tracking-[0.22em]
            "
          >
            Why BlackProp
          </span>
        </div>

        <h2
          className="
            mt-4
            text-[1.8rem]
            font-black
            uppercase
            leading-[1]
            tracking-[-0.05em]
            text-white

            min-[400px]:text-[2rem]

            sm:mt-5
            sm:text-[2.5rem]

            md:text-[2.85rem]

            lg:text-[3.2rem]
          "
        >
          Built For Traders.

          <span
            className="
              mt-1
              block
              bg-gradient-to-r
              from-white
              via-[#d9b5ff]
              to-[#be6cff]
              bg-clip-text
              text-transparent
            "
          >
            Designed For Performance.
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-3
            max-w-[560px]
            px-2
            text-[12px]
            leading-5
            text-[#95a0b4]

            sm:mt-4
            sm:text-[13px]
            sm:leading-6

            lg:text-sm
          "
        >
          A professional trading environment built around clarity,
          discipline and consistent execution.
        </p>
      </div>

      {/* CARDS */}
      <div
        className="
          relative
          mt-8
          space-y-3

          sm:mt-10
          sm:space-y-4

          lg:mt-12
        "
      >
        {/* LEFT FADE */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-7
            bg-gradient-to-r
            from-[#0b0c13]
            via-[#0b0c13]/85
            to-transparent

            min-[420px]:w-10
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
            w-7
            bg-gradient-to-l
            from-[#0b0c13]
            via-[#0b0c13]/85
            to-transparent

            min-[420px]:w-10
            sm:w-16
            md:w-20
            lg:w-28
          "
        />

        {/* ROW ONE */}
        <div className="reviews-marquee overflow-hidden">
          <div className="reviews-track-left flex w-max">
            <div
              className="
                advantages-copy
                flex
                gap-2.5
                pr-2.5

                sm:gap-3
                sm:pr-3

                lg:gap-4
                lg:pr-4
              "
            >
              {rowOne.map((item) => (
                <AdvantageCard
                  key={`row-one-a-${item.title}`}
                  {...item}
                />
              ))}
            </div>

            <div
              aria-hidden="true"
              className="
                advantages-copy
                flex
                gap-2.5
                pr-2.5

                sm:gap-3
                sm:pr-3

                lg:gap-4
                lg:pr-4
              "
            >
              {rowOne.map((item) => (
                <AdvantageCard
                  key={`row-one-b-${item.title}`}
                  {...item}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ROW TWO */}
        <div className="reviews-marquee overflow-hidden">
          <div className="reviews-track-right flex w-max">
            <div
              className="
                advantages-copy
                flex
                gap-2.5
                pr-2.5

                sm:gap-3
                sm:pr-3

                lg:gap-4
                lg:pr-4
              "
            >
              {rowTwo.map((item) => (
                <AdvantageCard
                  key={`row-two-a-${item.title}`}
                  {...item}
                />
              ))}
            </div>

            <div
              aria-hidden="true"
              className="
                advantages-copy
                flex
                gap-2.5
                pr-2.5

                sm:gap-3
                sm:pr-3

                lg:gap-4
                lg:pr-4
              "
            >
              {rowTwo.map((item) => (
                <AdvantageCard
                  key={`row-two-b-${item.title}`}
                  {...item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
