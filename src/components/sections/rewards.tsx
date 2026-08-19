const payouts = [
  {
    amount: "$34,408.19",
    time: "8 hours",
    name: "Sardor",
    country: "Uzbekistan",
    flag: "🇺🇿",
  },
  {
    amount: "$20,932.09",
    time: "12 hours",
    name: "Mathis",
    country: "France",
    flag: "🇫🇷",
  },
  {
    amount: "$20,706.45",
    time: "18 hours",
    name: "SaiLun",
    country: "Hong Kong",
    flag: "🇭🇰",
  },
  {
    amount: "$20,009.64",
    time: "9 hours",
    name: "Kizito",
    country: "Nigeria",
    flag: "🇳🇬",
  },
  {
    amount: "$18,000.00",
    time: "6 hours",
    name: "Sukhman",
    country: "Canada",
    flag: "🇨🇦",
  },
  {
    amount: "$17,599.78",
    time: "5 hours",
    name: "Takuya",
    country: "Japan",
    flag: "🇯🇵",
  },
  {
    amount: "$16,420.34",
    time: "14 hours",
    name: "Giovanni",
    country: "Italy",
    flag: "🇮🇹",
  },
  {
    amount: "$15,180.21",
    time: "45 min",
    name: "Mujtaba",
    country: "Germany",
    flag: "🇩🇪",
  },
];

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="7.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />

      <path
        d="M10 6V10L12.75 12"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PayoutCard({
  amount,
  time,
  name,
  country,
  flag,
}: (typeof payouts)[number]) {
  return (
    <article
      className="
        group
        flex
        h-[190px]
        w-[210px]
        shrink-0
        flex-col
        rounded-[20px]
        border
        border-[#D4AF37]/15
        bg-white/[0.035]
        p-2
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D4AF37]/30
        hover:bg-[#D4AF37]/[0.055]
        sm:w-[220px]
      "
    >
      <div
        className="
          flex
          flex-1
          flex-col
          justify-between
          rounded-2xl
          border
          border-white/[0.055]
          bg-black/30
          p-4
        "
      >
        <span
          className="
            w-fit
            rounded-md
            border
            border-[#D4AF37]/20
            bg-[#D4AF37]/10
            px-2
            py-1
            text-[10px]
            font-black
            uppercase
            tracking-[0.08em]
            text-[#E8C962]
          "
        >
          PAID
        </span>

        <div>
          <p className="whitespace-nowrap text-[21px] font-bold tracking-tight text-white">
            {amount}
          </p>

          <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-white/45">
            <span className="text-[#D4AF37]/70">
              <ClockIcon />
            </span>

            <span>Paid in {time}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 px-2 py-3">
        <span
          className="
            flex
            h-6
            w-6
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-[#D4AF37]/15
            bg-[#D4AF37]/[0.06]
            text-[15px]
          "
          role="img"
          aria-label={country}
        >
          {flag}
        </span>

        <span className="text-sm font-medium text-white/90">
          {name}
        </span>
      </div>
    </article>
  );
}

export function Rewards() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030303]
        pt-12
        pb-6
        sm:pt-14
        sm:pb-8
        lg:pt-16
        lg:pb-10
      "
    >
      {/* SUBTLE TOP LINE */}
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
          via-[#D4AF37]/20
          to-transparent
        "
      />

      {/* RUNNING STRIP */}
      <div className="rewards-marquee relative overflow-hidden">
        <div className="rewards-marquee-track flex w-max">
          {[0, 1].map((group) => (
            <div
              key={group}
              aria-hidden={group === 1}
              className="flex shrink-0 gap-4 pr-4"
            >
              {payouts.map((payout) => (
                <PayoutCard
                  key={`${group}-${payout.name}-${payout.amount}`}
                  {...payout}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}