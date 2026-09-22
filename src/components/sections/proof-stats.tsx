"use client";

type BenefitIconName = "rewards" | "support" | "tools" | "trial";

const benefits = [
  {
    title: "Rewards",
    text: "Fast and easy rewards withdrawals",
    icon: "rewards" as BenefitIconName,
  },
  {
    title: "Advanced Support",
    text: "Dedicated support via Live chat, email, or WhatsApp",
    icon: "support" as BenefitIconName,
  },
  {
    title: "Tools & Services",
    text: "Tailored tools & services to support your growth",
    icon: "tools" as BenefitIconName,
  },
  {
    title: "Free Trial",
    text: "As many Free Trials as you need",
    icon: "trial" as BenefitIconName,
  },
];

function BenefitIcon({ type }: { type: BenefitIconName }) {
  const common = "h-5 w-5";

  if (type === "rewards") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 9h5.5M7 12h3.5M15.5 8.5l2 2-4 4-2.3.5.5-2.3 3.8-4.2Z" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "support") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <circle cx="12" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11a5 5 0 0 1 10 0M8 15.5v2.2h3M16 15.5v2.2h-2.5" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "tools") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="m13.2 2.8-7.8 10h5.3l-.7 8.4 8-10.2h-5.4l.6-8.2Z" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.2v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProofStats() {
  return (
    <section
      id="why-blackprop"
      className="relative overflow-hidden bg-[#05070b] px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      {/* section ambience */}
      <div className="pointer-events-none absolute left-1/2 top-[12%] h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(117,47,181,.11),transparent_70%)] blur-[30px]" />

      <div className="relative mx-auto max-w-[1540px]">
        {/* title */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="h-7 w-[6px] rounded-full bg-[#b16aff] shadow-[0_0_18px_rgba(177,106,255,.85)] sm:h-8" />

          <h2 className="text-[1.65rem] font-black tracking-[-0.045em] text-white sm:text-[2rem] lg:text-[2.35rem]">
            Why People Choose Black Prop
          </h2>
        </div>

        {/* main showcase */}
        <div
          className="
            relative
            mt-8
            min-h-[500px]
            overflow-hidden
            rounded-[2px]
            border
            border-[#278dff]/75
            bg-[#07080c]
            shadow-[0_30px_90px_rgba(0,0,0,.38)]
            sm:min-h-[540px]
            lg:min-h-[590px]
            xl:min-h-[620px]
          "
        >
          {/* Background photo
              Put the reference-style trader image here:
              public/images/why-blackprop-trader.png
          */}
          <img
            src="/images/why-blackprop-trader.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          />

          {/* dark readable overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,5,8,.98)_0%,rgba(4,5,8,.90)_30%,rgba(4,5,8,.48)_54%,rgba(4,5,8,.10)_78%,rgba(4,5,8,.20)_100%)]" />

          {/* stronger lower vignette */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,8,.08)_0%,rgba(4,5,8,.02)_52%,rgba(4,5,8,.40)_100%)]" />

          {/* decorative floor line */}
          <div className="pointer-events-none absolute bottom-[50px] left-[6%] h-px w-[30%] bg-[linear-gradient(90deg,transparent,#7f35de,transparent)] opacity-40" />

          {/* text content */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[500px]
              items-end
              px-6
              pb-12
              pt-20
              sm:min-h-[540px]
              sm:px-8
              sm:pb-14
              lg:min-h-[590px]
              lg:px-14
              lg:pb-[92px]
              xl:min-h-[620px]
              xl:px-16
              xl:pb-[100px]
            "
          >
            <div className="max-w-[700px]">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#8e4fc4]/45 bg-[#2a163a]/65 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#b974ff]" />
                <span className="text-[9px] font-black uppercase tracking-[0.19em] text-[#c49bea] sm:text-[10px]">
                  Institutional Simulation
                </span>
              </div>

              <h3
                className="
                  mt-5
                  text-[2.6rem]
                  font-black
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-white
                  sm:text-[3.4rem]
                  lg:text-[4rem]
                  xl:text-[4.25rem]
                "
              >
                More Power,{" "}
                <span className="bg-[linear-gradient(90deg,#8f4fcb,#7e44bd)] bg-clip-text text-transparent">
                  Less Risk
                </span>
              </h3>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3 text-[16px] text-white/78 sm:text-[18px] lg:text-[20px]">
                <span>Up to $200K simulated capital</span>
                <span className="hidden h-1 w-1 rounded-full bg-[#b66bff] sm:inline-block" />
                <span className="rounded-[5px] border border-[#8e4fc4]/55 bg-[#1c1525]/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.09em] text-[#c99bf4] sm:text-[11px]">
                  Scaling Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* benefit cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="
                group
                min-h-[150px]
                rounded-[15px]
                border
                border-white/[0.10]
                bg-[#15171d]
                px-6
                py-6
                shadow-[0_18px_40px_rgba(0,0,0,.16)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#8c4bcc]/45
                hover:bg-[#181a21]
              "
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-[#8746bd]/45 bg-[#2a1739] text-[#c887ff]">
                  <BenefitIcon type={item.icon} />
                </span>

                <h4 className="text-[17px] font-bold tracking-[-0.025em] text-white sm:text-[18px]">
                  {item.title}
                </h4>
              </div>

              <p className="mt-5 text-[13px] leading-6 text-[#9aa0af] sm:text-[14px]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProofStats;
