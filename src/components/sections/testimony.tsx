const reviews = [
  {
    name: "Marcus T.",
    country: "United States",
    flag: "🇺🇸",
    text: "The rules are clear, the dashboard is clean, and the whole experience feels built for serious traders.",
  },
  {
    name: "Daniel R.",
    country: "United Kingdom",
    flag: "🇬🇧",
    text: "What stood out to me was how straightforward everything felt. No unnecessary complexity.",
  },
  {
    name: "Ahmed K.",
    country: "UAE",
    flag: "🇦🇪",
    text: "A professional trading environment with clear objectives and a platform that lets me focus on execution.",
  },
  {
    name: "Luca M.",
    country: "Italy",
    flag: "🇮🇹",
    text: "The experience feels premium from the challenge to the dashboard. Everything is easy to understand.",
  },
  {
    name: "James W.",
    country: "Canada",
    flag: "🇨🇦",
    text: "I like the simplicity. Clear targets, clean interface and no distractions from the actual trading.",
  },
  {
    name: "Samuel A.",
    country: "Nigeria",
    flag: "🇳🇬",
    text: "BlackProp gives traders a structure that actually encourages discipline and consistency.",
  },
  {
    name: "Miguel P.",
    country: "Spain",
    flag: "🇪🇸",
    text: "One of the cleanest funding experiences I have used. The process is simple and professional.",
  },
  {
    name: "Kenji H.",
    country: "Japan",
    flag: "🇯🇵",
    text: "I appreciate how transparent the objectives are. You always know exactly where you stand.",
  },
];

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3 fill-current"
      aria-hidden="true"
    >
      <path d="M12 2.4l2.92 5.92 6.53.95-4.72 4.6 1.11 6.5L12 17.3l-5.84 3.07 1.11-6.5-4.72-4.6 6.53-.95L12 2.4z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path d="M7.4 6C4.4 7.7 3 10 3 13.1V18h7v-6H6.5c.2-1.6 1.2-3 3-4.1L7.4 6Zm10 0C14.4 7.7 13 10 13 13.1V18h7v-6h-3.5c.2-1.6 1.2-3 3-4.1L17.4 6Z" />
    </svg>
  );
}

function ReviewCard({
  name,
  country,
  flag,
  text,
}: (typeof reviews)[number]) {
  return (
    <article
      className="
        review-card
        group
        relative
        flex
        min-h-[185px]
        w-[290px]
        shrink-0
        flex-col
        justify-between
        overflow-hidden
        rounded-[20px]
        border
        border-white/[0.065]
        bg-[linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.015))]
        p-5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#D4AF37]/30
        hover:shadow-[0_18px_70px_rgba(212,175,55,.08)]
        sm:w-[320px]
      "
    >
      {/* TOP GOLD GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-36
          w-36
          rounded-full
          bg-[#D4AF37]/[0.05]
          blur-[55px]
          transition-all
          duration-500
          group-hover:bg-[#D4AF37]/[0.11]
        "
      />

      {/* VERY SUBTLE INNER LINE */}
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          {/* STARS */}
          <div className="flex gap-0.5 text-[#D4AF37]">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>

          <span className="text-[#D4AF37]/15 transition-colors duration-300 group-hover:text-[#D4AF37]/30">
            <QuoteIcon />
          </span>
        </div>

        {/* REVIEW */}
        <p className="mt-4 text-[13px] font-medium leading-6 text-white/60 sm:text-sm">
          “{text}”
        </p>
      </div>

      {/* USER */}
      <div className="relative z-10 mt-5 flex items-center gap-3">
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#D4AF37]/15
            bg-[#D4AF37]/[0.055]
            text-base
          "
          role="img"
          aria-label={country}
        >
          {flag}
        </div>

        <div>
          <p className="text-[13px] font-bold text-white">
            {name}
          </p>

          <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/30">
            {country}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Testimony() {
  const firstRow = reviews.slice(0, 4);
  const secondRow = reviews.slice(4);

  return (
    <section
      id="testimonials"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#030303]
        pt-20
        pb-12
        sm:pt-24
        sm:pb-14
        lg:pt-28
        lg:pb-16
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[#030303]" />

      {/* CENTER GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          -z-20
          h-[420px]
          w-[850px]
          max-w-[100vw]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(212,175,55,.06)_0%,rgba(212,175,55,.012)_45%,transparent_72%)]
        "
      />

      {/* TOP LINE */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-[90%]
          max-w-[1250px]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#D4AF37]/18
          to-transparent
        "
      />

      {/* HEADING */}
      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[680px] text-center">
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D4AF37]/18
              bg-[#D4AF37]/[0.045]
              px-3.5
              py-1.5
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#E8C962]">
              Trader Stories
            </span>
          </div>

          {/* SMALLER TITLE */}
          <h2
            className="
              mt-5
              text-[2rem]
              font-black
              uppercase
              leading-[1]
              tracking-[-0.045em]
              text-white
              sm:text-[2.6rem]
              lg:text-[3rem]
            "
          >
            Trusted by Traders.

            <span
              className="
                mt-1
                block
                bg-[linear-gradient(110deg,#FFFFFF_0%,#FFF8DC_20%,#EFD47A_42%,#D4AF37_65%,#B3831D_85%,#8C6515_100%)]
                bg-clip-text
                text-transparent
              "
            >
              Proven in Their Words.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[520px] text-sm font-medium leading-6 text-white/45 sm:text-[15px]">
            Real experiences from traders focused on discipline,
            consistency and performance.
          </p>
        </div>
      </div>

      {/* SCROLLING REVIEWS */}
      <div className="relative mt-12 space-y-3 sm:mt-14 sm:space-y-4">

        {/* LEFT EDGE GLOW */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent sm:w-32" />

        {/* RIGHT EDGE GLOW */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#030303] via-[#030303]/80 to-transparent sm:w-32" />

        {/* ROW 1 */}
        <div className="reviews-marquee overflow-hidden">
          <div className="reviews-track-left flex w-max">
            {[0, 1].map((group) => (
              <div
                key={group}
                aria-hidden={group === 1}
                className="flex shrink-0 gap-3 pr-3"
              >
                {firstRow.map((review) => (
                  <ReviewCard
                    key={`${group}-${review.name}`}
                    {...review}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="reviews-marquee overflow-hidden">
          <div className="reviews-track-right flex w-max">
            {[0, 1].map((group) => (
              <div
                key={group}
                aria-hidden={group === 1}
                className="flex shrink-0 gap-3 pr-3"
              >
                {secondRow.map((review) => (
                  <ReviewCard
                    key={`${group}-${review.name}`}
                    {...review}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}