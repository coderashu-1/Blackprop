"use client";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      className="h-3 w-3"
      aria-hidden="true"
    >
      <path
        d="m4 9.2 3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const heroBenefits = [
  "Industry Leading Dashboard",
  "Trade Forex and Crypto",
  "Tailored Accounts at Checkout",
  "Over 150+ Symbols To Trade",
  "Exclusive Discounts For Our Traders",
];

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        h-[calc(100svh-54px)]
        min-h-[570px]
        overflow-hidden
        bg-[#0b0c13]
        sm:h-[calc(100svh-58px)]
        lg:h-[calc(100svh-56px)]
      "
    >
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[#0b0c13]" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center_20%,rgba(104,35,174,.34)_0%,rgba(61,25,98,.18)_34%,rgba(16,13,26,.92)_68%,#0b0c13_100%)]" />

      <div className="pointer-events-none absolute left-0 top-[20%] -z-20 h-[78%] w-[18%] bg-[linear-gradient(90deg,rgba(76,29,123,.46),rgba(76,29,123,.16),transparent)] blur-[16px]" />
      <div className="pointer-events-none absolute right-0 top-[20%] -z-20 h-[78%] w-[18%] bg-[linear-gradient(270deg,rgba(76,29,123,.46),rgba(76,29,123,.16),transparent)] blur-[16px]" />

      {/* THREE CONTOUR FRAMES */}
      <div className="pointer-events-none absolute bottom-[-30px] left-[2.1%] right-[2.1%] top-[22px] -z-10 rounded-t-[190px] border-x border-t border-[#7f45b9]/18" />
      <div className="pointer-events-none absolute bottom-[-30px] left-[3.5%] right-[3.5%] top-[40px] -z-10 rounded-t-[170px] border-x border-t border-[#8749c1]/16" />
      <div className="pointer-events-none absolute bottom-[-30px] left-[4.7%] right-[4.7%] top-[58px] -z-10 rounded-t-[150px] border-x border-t border-[#8c4dc7]/13" />

      {/* BLACK HERO SHELL */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          top-[88px]
          flex
          w-[88.5%]
          max-w-[1820px]
          -translate-x-1/2
          items-center
          justify-center
          overflow-visible
          rounded-t-[145px]
          border
          border-[#6f35a6]/30
          bg-[#030506]
          px-4
          pb-[76px]
          pt-14
          shadow-[0_0_0_1px_rgba(109,46,167,.08),0_0_58px_rgba(114,45,193,.22)]
          sm:rounded-t-[155px]
          sm:px-6
          lg:rounded-t-[165px]
          lg:px-8
        "
      >
        <div className="pointer-events-none absolute -left-12 top-1/4 h-[65%] w-28 rounded-full bg-[#8f28f3]/14 blur-[60px]" />
        <div className="pointer-events-none absolute -right-12 top-1/4 h-[65%] w-28 rounded-full bg-[#8f28f3]/14 blur-[60px]" />

        <div className="relative z-10 mx-auto w-full max-w-[780px] -translate-y-2 text-center sm:-translate-y-3">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#9952e9]/42 bg-[#131117]/88 px-4 py-2 shadow-[0_6px_20px_rgba(0,0,0,.25)] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b56dff] shadow-[0_0_8px_rgba(181,109,255,.9)]" />
            <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#ddd2e8] sm:text-[9px]">
              Your Trusted Trading Partner
            </span>
          </div>

          <h1
            className="
              mx-auto
              mt-6
              max-w-[760px]
              text-[2.55rem]
              font-black
              leading-[0.94]
              tracking-[-0.055em]
              text-white
              sm:text-[3.35rem]
              md:text-[3.65rem]
              lg:text-[3.85rem]
              xl:text-[4rem]
            "
          >
            PROVE YOUR EDGE{" "}
           

            <span className="block bg-[linear-gradient(90deg,#e2c8ff_0%,#b96dff_45%,#9d4fff_100%)] bg-clip-text text-transparent">
              WE WILL BACK IT.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[600px] text-[12px] font-medium leading-[1.65] text-white/74 sm:text-[13px] lg:text-[14px]">
            Prove your trading process, meet clear objectives, and earn the opportunity to trade
            <span className="hidden sm:inline">
              <br />
            </span>{" "}
            with BlackProp capital.
          </p>

          <div className="mt-7 flex justify-center">
            <a
              href="#challenges"
              className="
                inline-flex
                min-h-[46px]
                min-w-[180px]
                items-center
                justify-center
                rounded-[12px]
                bg-[linear-gradient(100deg,#6557ff_0%,#8445ff_48%,#b43cff_100%)]
                px-7
                text-[13px]
                font-black
                text-white
                shadow-[0_12px_26px_rgba(121,67,255,.30),inset_0_1px_0_rgba(255,255,255,.16)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:brightness-110
                sm:min-h-[48px]
                sm:min-w-[195px]
                sm:text-[14px]
              "
            >
              Get Funded Now
            </a>
          </div>
        </div>

        <div
          className="
            absolute
            inset-x-[-26px]
            bottom-[16px]
            z-20
            flex
            gap-2.5
            overflow-x-auto
            px-3
            pb-1
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:inset-x-[-18px]
            lg:inset-x-[-30px]
            lg:justify-between
            lg:overflow-visible
            lg:px-0
          "
        >
          {heroBenefits.map((benefit) => (
            <div
              key={benefit}
              className="
                flex
                shrink-0
                items-center
                gap-2.5
                rounded-full
                border
                border-white/[0.13]
                bg-[#17191d]/95
                px-4
                py-2.5
                text-[10px]
                font-medium
                text-white/78
                shadow-[0_6px_20px_rgba(0,0,0,.22)]
                backdrop-blur-xl
                sm:text-[11px]
                lg:text-[12px]
              "
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#342054] text-[#b77cff]">
                <CheckIcon />
              </span>
              <span className="whitespace-nowrap">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
