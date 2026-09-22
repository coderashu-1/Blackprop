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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={common}
        aria-hidden="true"
      >
        <rect
          x="3.5"
          y="5"
          width="17"
          height="14"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 9h5.5M7 12h3.5M15.5 8.5l2 2-4 4-2.3.5.5-2.3 3.8-4.2Z"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "support") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={common}
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="11"
          r="6.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 11a5 5 0 0 1 10 0M8 15.5v2.2h3M16 15.5v2.2h-2.5"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "tools") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={common}
        aria-hidden="true"
      >
        <path
          d="m13.2 2.8-7.8 10h5.3l-.7 8.4 8-10.2h-5.4l.6-8.2Z"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={common}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="7.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 7.2v5l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProofStats() {
  return (
    <section
      id="why-blackprop"
      className="
        relative
        overflow-hidden
        bg-[#05070b]
        px-4
        py-9
        text-white
        sm:px-6
        sm:py-10
        lg:px-8
        lg:py-12
      "
    >
      {/* SECTION AMBIENCE */}
      <div className="pointer-events-none absolute left-1/2 top-[10%] h-[440px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(117,47,181,.10),transparent_70%)] blur-[30px]" />

      <div className="relative mx-auto max-w-[1540px]">
        {/* TITLE */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="h-6 w-[6px] rounded-full bg-[#b16aff] shadow-[0_0_18px_rgba(177,106,255,.85)] sm:h-7" />

          <h2 className="text-[1.5rem] font-black tracking-[-0.045em] text-white sm:text-[1.8rem] lg:text-[2.1rem]">
            Why People Choose Black Prop
          </h2>
        </div>

        {/* MAIN SHOWCASE */}
        <div
          className="
            relative
            mt-6
            min-h-[410px]
            overflow-hidden
            rounded-[12px]
            bg-[#07080c]
            shadow-[0_28px_80px_rgba(0,0,0,.36)]
            sm:min-h-[440px]
            lg:min-h-[470px]
            xl:min-h-[495px]
          "
        >
          {/* Background photo:
              public/images/why-blackprop-trader.png
          */}
          <img
            src="/images/why-blackprop-trader.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          />

          {/* DARK READABLE OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,5,8,.98)_0%,rgba(4,5,8,.90)_30%,rgba(4,5,8,.48)_54%,rgba(4,5,8,.10)_78%,rgba(4,5,8,.20)_100%)]" />

          {/* LOWER VIGNETTE */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,8,.06)_0%,rgba(4,5,8,.02)_52%,rgba(4,5,8,.36)_100%)]" />

          {/* SUBTLE PURPLE FLOOR LINE */}
          <div className="pointer-events-none absolute bottom-[38px] left-[6%] h-px w-[30%] bg-[linear-gradient(90deg,transparent,#7f35de,transparent)] opacity-35" />

          {/* TEXT CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[410px]
              items-end
              px-6
              pb-9
              pt-14
              sm:min-h-[440px]
              sm:px-8
              sm:pb-10
              lg:min-h-[470px]
              lg:px-12
              lg:pb-[58px]
              xl:min-h-[495px]
              xl:px-14
              xl:pb-[64px]
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
                  mt-4
                  text-[2.35rem]
                  font-black
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-white
                  sm:text-[3rem]
                  lg:text-[3.55rem]
                  xl:text-[3.8rem]
                "
              >
                More Power,{" "}
                <span className="bg-[linear-gradient(90deg,#8f4fcb,#7e44bd)] bg-clip-text text-transparent">
                  Less Risk
                </span>
              </h3>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3 text-[15px] text-white/78 sm:text-[17px] lg:text-[18px]">
                <span>Up to $200K simulated capital</span>

                <span className="hidden h-1 w-1 rounded-full bg-[#b66bff] sm:inline-block" />

                <span className="rounded-[5px] border border-[#8e4fc4]/55 bg-[#1c1525]/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.09em] text-[#c99bf4] sm:text-[11px]">
                  Scaling Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BENEFIT CARDS */}
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-5">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="
                group
                min-h-[132px]
                rounded-[15px]
                border
                border-white/[0.10]
                bg-[#15171d]
                px-5
                py-5
                shadow-[0_18px_40px_rgba(0,0,0,.16)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#8c4bcc]/45
                hover:bg-[#181a21]
                sm:px-6
              "
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-[#8746bd]/45 bg-[#2a1739] text-[#c887ff]">
                  <BenefitIcon type={item.icon} />
                </span>

                <h4 className="text-[16px] font-bold tracking-[-0.025em] text-white sm:text-[17px]">
                  {item.title}
                </h4>
              </div>

              <p className="mt-4 text-[12px] leading-5 text-[#9aa0af] sm:text-[13px] sm:leading-6">
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
