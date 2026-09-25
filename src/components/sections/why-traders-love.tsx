"use client";

type FeatureIconName =
  | "capital"
  | "time"
  | "split"
  | "spread"
  | "reward";

type Feature = {
  title: string;
  description: string;
  icon: FeatureIconName;
};

const leftFeatures: Feature[] = [
  {
    title: "Up to $200K Accounts",
    description:
      "Built for serious career progression with incremental capital bumps every milestone.",
    icon: "capital",
  },
  {
    title: "80% + Add-on up to 100%",
    description:
      "Retain more of your profit curve with structured performance ladder steps reaching 100% net reward.",
    icon: "split",
  },
  {
    title: "Swift Reward Access",
    description:
      "Average <8 hour automated dispatch to crypto wallets, direct debit, or bank wire without lockups.",
    icon: "reward",
  },
];

const rightFeatures: Feature[] = [
  {
    title: "No Time Limit",
    description:
      "Trade patiently without artificial calendar deadlines, mandatory rush days, or expiry stress.",
    icon: "time",
  },
  {
    title: "Raw Institutional Spreads",
    description:
      "Direct liquidity feeds with 0.0 pip raw spreads, low latency execution, and zero news restrictions.",
    icon: "spread",
  },
  {
    title: "Crypto Deposits and Withdrawals",
    description:
      "Fast crypto funding options with secure deposits and withdrawals, flexible processing, and reliable wallet transfers.",
    icon: "spread",
  },
];

function BPMark({
  width = 130,
  height = 165,
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

function FeatureIcon({ name }: { name: FeatureIconName }) {
  const className = "h-[18px] w-[18px] sm:h-[20px] sm:w-[20px]";

  if (name === "capital") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M4 9h16M6 9v8M10 9v8M14 9v8M18 9v8M4 18h16M3 7l9-4 9 4H3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "time") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M8 3h8M8 21h8M9 3v4l3 3 3-3V3M9 21v-4l3-3 3 3v4"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "split") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 4.5v15M12 12h7.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "spread") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M8 5v14M16 5v14M5 9h6M13 15h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect
          x="6.5"
          y="8"
          width="3"
          height="4.5"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="14.5"
          y="11.5"
          width="3"
          height="4.5"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m13.4 2.8-7.7 10h5.4l-.5 8.4 7.7-10h-5.4l.5-8.4Z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M15 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article
      className="
        group
        relative
        min-h-[132px]
        overflow-hidden
        rounded-[16px]
        border
        border-white/[0.085]
        bg-[linear-gradient(145deg,rgba(25,17,36,.92),rgba(12,14,19,.98))]
        px-4
        py-4
        shadow-[0_18px_44px_rgba(0,0,0,.18)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#a734f7]/30
        hover:shadow-[0_20px_60px_rgba(130,43,210,.10)]
        sm:min-h-[142px]
        sm:rounded-[18px]
        sm:px-5
        sm:py-5
        lg:min-h-[150px]
      "
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#8f28f3]/[0.06] blur-3xl transition group-hover:bg-[#8f28f3]/[0.10]" />

      <div className="relative flex items-start gap-3.5 sm:gap-4">
        <div
          className="
            grid
            h-9
            w-9
            shrink-0
            place-items-center
            rounded-[11px]
            border
            border-[#a734f7]/25
            bg-[#251432]
            text-[#cf9bff]
            shadow-[0_0_20px_rgba(143,40,243,.05)]
            sm:h-10
            sm:w-10
            sm:rounded-[12px]
          "
        >
          <FeatureIcon name={feature.icon} />
        </div>

        <div className="min-w-0 pt-0.5">
          <h3 className="text-[15px] font-bold leading-5 tracking-[-0.025em] text-white sm:text-[16px] lg:text-[17px]">
            {feature.title}
          </h3>

          <p className="mt-1.5 max-w-[290px] text-[12px] leading-[1.65] text-[#9a98a5] sm:mt-2 sm:text-[13px] sm:leading-[1.75]">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function WhyTradersLove() {
  return (
    <section
      id="why-traders-love"
      className="relative overflow-hidden bg-[#07090d] px-2 py-2 sm:px-4 sm:py-4 lg:px-5 lg:py-5"
    >
      <div
        className="
          relative
          mx-auto
          max-w-[1480px]
          overflow-hidden
          rounded-[18px]
          border
          border-white/[0.06]
          bg-[#090b10]
          px-4
          pb-6
          pt-9
          shadow-[0_30px_100px_rgba(0,0,0,.22)]
          sm:rounded-[22px]
          sm:px-6
          sm:pb-8
          sm:pt-11
          md:px-8
          lg:min-h-[calc(100svh-40px)]
          lg:rounded-[24px]
          lg:px-10
          lg:pb-8
          lg:pt-10
          xl:px-16
          xl:pt-12
        "
      >
        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-[44%] h-[720px] w-[1050px] max-w-[96vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(116,37,176,.18)_0%,rgba(86,28,134,.10)_36%,rgba(38,19,58,.04)_58%,transparent_74%)]" />

        <div className="pointer-events-none absolute left-1/2 top-[23%] h-[280px] w-[680px] max-w-[90vw] -translate-x-1/2 rounded-full bg-[#8f28f3]/[0.06] blur-[110px]" />

        {/* HEADER */}
        <div className="relative mx-auto max-w-[840px] text-center">
          <h2
            className="
              text-[2.15rem]
              font-black
              uppercase
              leading-[0.98]
              tracking-[-0.055em]
              text-white
              min-[390px]:text-[2.45rem]
              sm:text-[3rem]
              md:text-[3.45rem]
              lg:text-[3.4rem]
              xl:text-[3.75rem]
            "
          >
            Why Traders
            <span className="block">
              Choose{" "}
              <span className="bg-[linear-gradient(90deg,#c15aff_0%,#b14cff_48%,#9b3df0_100%)] bg-clip-text text-transparent">
                BlackProp.
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[670px] px-1 text-[13px] leading-6 text-[#9693a1] sm:mt-5 sm:text-[15px] sm:leading-7 lg:text-[16px]">
            More capital, clear objectives and a trading experience designed around
            disciplined performance.
          </p>
        </div>

        {/* MAIN AREA */}
        <div
          className="
            relative
            mx-auto
            mt-9
            grid
            max-w-[1250px]
            gap-4
            sm:mt-11
            sm:grid-cols-2
            sm:gap-5
            lg:mt-10
            lg:grid-cols-[minmax(0,330px)_minmax(190px,1fr)_minmax(0,330px)]
            lg:items-center
            lg:gap-6
            xl:gap-8
          "
        >
          {/* LEFT CARDS */}
          <div className="grid gap-3.5 sm:gap-4 lg:gap-5">
            {leftFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>

          {/* CENTER LOGO */}
          <div
            className="
              relative
              order-first
              col-span-1
              flex
              min-h-[180px]
              items-center
              justify-center
              sm:col-span-2
              sm:min-h-[220px]
              lg:order-none
              lg:col-span-1
              lg:min-h-[420px]
              xl:min-h-[470px]
            "
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8f28f3]/20 blur-[70px] sm:h-[300px] sm:w-[300px] lg:h-[320px] lg:w-[320px] xl:h-[340px] xl:w-[340px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b04cf4]/18 blur-[48px] sm:h-[190px] sm:w-[190px] lg:h-[210px] lg:w-[210px] xl:h-[220px] xl:w-[220px]" />

            <BPMark
              width={128}
              height={163}
              color="#FFFFFF"
              className="relative z-10 drop-shadow-[0_0_26px_rgba(190,108,255,.24)] sm:h-[190px] sm:w-[150px] lg:h-[195px] lg:w-[153px] xl:h-[214px] xl:w-[168px]"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="grid gap-3.5 sm:gap-4 lg:gap-5">
            {rightFeatures.map((feature, index) => (
              <FeatureCard
                key={`${feature.title}-${index}`}
                feature={feature}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            relative
            mx-auto
            mt-10
            flex
            max-w-[1250px]
            flex-col
            gap-6
            border-t
            border-white/[0.07]
            pt-6
            sm:mt-12
            sm:pt-7
            lg:mt-10
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-8
          "
        >
          {/* STATS
          <div
            className="
              grid
              grid-cols-1
              gap-4
              min-[430px]:grid-cols-3
              min-[430px]:gap-0
              lg:flex
              lg:items-center
            "
          >
            <div className="border-b border-white/[0.06] pb-3 min-[430px]:border-b-0 min-[430px]:pb-0 min-[430px]:pr-4 lg:pr-6">
              <p className="text-[20px] font-bold tracking-[-0.04em] text-white sm:text-[22px] lg:text-[24px]">
                4.8 / 5.0
              </p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#777582] sm:text-[10px]">
                Trustpilot Verified
              </p>
            </div>

            <div className="border-b border-white/[0.06] pb-3 min-[430px]:border-b-0 min-[430px]:border-l min-[430px]:pb-0 min-[430px]:pl-4 min-[430px]:pr-4 lg:px-6">
              <p className="text-[20px] font-bold tracking-[-0.04em] text-white sm:text-[22px] lg:text-[24px]">
                120+ Countries
              </p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#777582] sm:text-[10px]">
                Active Capital Traders
              </p>
            </div>

            <div className="min-[430px]:border-l min-[430px]:pl-4 lg:px-6">
              <p className="text-[20px] font-bold tracking-[-0.04em] text-[#d0a5f7] sm:text-[22px] lg:text-[24px]">
                &lt; 8 Hours
              </p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#777582] sm:text-[10px]">
                Average Payout Dispatch
              </p>
            </div>
          </div> */}

          {/* ACTIONS
          <div
            className="
              flex
              w-full
              flex-col
              gap-3
              sm:flex-row
              lg:w-auto
              lg:shrink-0
            "
          >
            <a
              href="#rules"
              className="
                inline-flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                rounded-[12px]
                border
                border-white/[0.10]
                bg-[linear-gradient(145deg,#21182e,#17121f)]
                px-5
                text-center
                text-[13px]
                font-medium
                text-white
                transition
                hover:border-[#a734f7]/30
                hover:bg-[#241731]
                sm:min-h-[56px]
                sm:w-auto
                sm:min-w-[140px]
                sm:px-6
                lg:min-h-[60px]
                lg:min-w-[145px]
                lg:text-[14px]
              "
            >
              Compare
              <br />
              Rules
            </a>

            <a
              href="#challenges"
              className="
                group
                inline-flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                gap-4
                rounded-[12px]
                bg-[linear-gradient(100deg,#8143ff_0%,#9335f1_48%,#7e20e7_100%)]
                px-6
                text-center
                text-[13px]
                font-semibold
                text-white
                shadow-[0_14px_35px_rgba(126,32,231,.26)]
                transition
                hover:-translate-y-0.5
                hover:brightness-110
                sm:min-h-[56px]
                sm:w-auto
                sm:min-w-[210px]
                lg:min-h-[60px]
                lg:min-w-[225px]
                lg:gap-5
                lg:px-7
                lg:text-[14px]
              "
            >
              <span>
                Explore Trading
                <br />
                Accounts
              </span>
              <ArrowRight />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default WhyTradersLove;
