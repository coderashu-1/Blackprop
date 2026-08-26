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
        relative
        flex
        h-[190px]
        w-[220px]
        shrink-0
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-white/[0.12]
        bg-gradient-to-br
        from-white/[0.09]
        via-white/[0.04]
        to-transparent
        p-2
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,.55)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D4AF37]/50
        hover:shadow-[0_25px_70px_rgba(212,175,55,.18)]
      "
    >

      {/* GOLD GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-[#D4AF37]/15
          blur-3xl
        "
      />


      <div
        className="
          relative
          flex
          flex-1
          flex-col
          justify-between
          rounded-[18px]
          border
          border-white/[0.08]
          bg-[#0D0D0E]
          p-4
        "
      >

        <span
          className="
            w-fit
            rounded-lg
            border
            border-[#D4AF37]/40
            bg-[#D4AF37]/15
            px-2.5
            py-1
            text-[10px]
            font-black
            tracking-[0.15em]
            text-[#F5DC7D]
          "
        >
          PAID
        </span>


        <div>

          <p
            className="
              whitespace-nowrap
              text-[22px]
              font-black
              tracking-tight
              text-white
            "
          >
            {amount}
          </p>


          <div
            className="
              mt-2
              flex
              items-center
              gap-1.5
              text-xs
              font-medium
              text-white/55
            "
          >

            <span className="text-[#D4AF37]">
              <ClockIcon />
            </span>

            <span>
              Paid in {time}
            </span>

          </div>

        </div>


      </div>



      <div className="flex items-center gap-3 px-2 py-3">

        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-[#D4AF37]/30
            bg-[#D4AF37]/10
            text-lg
          "
        >
          {flag}
        </span>


        <div>

          <p
            className="
              text-sm
              font-bold
              text-white
            "
          >
            {name}
          </p>


          <p
            className="
              text-[11px]
              text-white/45
            "
          >
            {country}
          </p>

        </div>


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
        bg-gradient-to-b
        from-[#090909]
        via-[#030303]
        to-black
        pt-12
        pb-8
        sm:pt-14
        sm:pb-10
        lg:pt-16
        lg:pb-12
      "
    >


      {/* GOLD AMBIENT LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[300px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[130px]
        "
      />



      {/* TOP BORDER */}

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
          via-[#D4AF37]/50
          to-transparent
        "
      />



      {/* MARQUEE */}

      <div className="rewards-marquee relative overflow-hidden">

        <div className="rewards-marquee-track flex w-max">

          {[0,1].map((group)=>(

            <div
              key={group}
              aria-hidden={group===1}
              className="
                flex
                shrink-0
                gap-4
                pr-4
              "
            >

              {payouts.map((payout)=>(

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