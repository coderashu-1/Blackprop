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

function TrustpilotStar() {
  return (
    <span
      className="
        grid
        h-[22px]
        w-[22px]
        shrink-0
        place-items-center
        bg-[#00b67a]
        text-white
        sm:h-[25px]
        sm:w-[25px]
        lg:h-[28px]
        lg:w-[28px]
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="
          h-[14px]
          w-[14px]
          sm:h-[16px]
          sm:w-[16px]
          lg:h-[19px]
          lg:w-[19px]
        "
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="m12 2.2 2.95 6.02 6.64.97-4.8 4.68 1.13 6.61L12 17.36l-5.92 3.12 1.13-6.61-4.8-4.68 6.64-.97L12 2.2Z" />
      </svg>
    </span>
  );
}

function TrustpilotLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="
        h-6
        w-6
        shrink-0
        text-[#00b67a]
        sm:h-7
        sm:w-7
      "
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 1.8 14.45 9.1H22.2l-6.25 4.52 2.38 7.3L12 16.45 5.67 20.92l2.38-7.3L1.8 9.1h7.75L12 1.8Z" />
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
        min-h-[620px]
        w-full
        overflow-hidden
        bg-[#0b0c13]
        sm:min-h-[650px]
        lg:h-[calc(100svh-56px)]
        lg:min-h-[680px]
      "
    >
      {/* BASE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[#0b0c13]" />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          bg-[radial-gradient(ellipse_at_center_20%,rgba(104,35,174,.34)_0%,rgba(61,25,98,.18)_34%,rgba(16,13,26,.92)_68%,#0b0c13_100%)]
        "
      />

      {/* SIDE PURPLE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-[20%]
          -z-20
          h-[78%]
          w-[18%]
          bg-[linear-gradient(90deg,rgba(76,29,123,.46),rgba(76,29,123,.16),transparent)]
          blur-[16px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-[20%]
          -z-20
          h-[78%]
          w-[18%]
          bg-[linear-gradient(270deg,rgba(76,29,123,.46),rgba(76,29,123,.16),transparent)]
          blur-[16px]
        "
      />

      {/* CONTOUR FRAMES */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-30px]
          left-[1%]
          right-[1%]
          top-[18px]
          -z-10
          rounded-t-[90px]
          border-x
          border-t
          border-[#7f45b9]/18
          sm:left-[2.1%]
          sm:right-[2.1%]
          sm:rounded-t-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-30px]
          left-[2%]
          right-[2%]
          top-[34px]
          -z-10
          rounded-t-[80px]
          border-x
          border-t
          border-[#8749c1]/16
          sm:left-[3.5%]
          sm:right-[3.5%]
          sm:rounded-t-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-30px]
          left-[3%]
          right-[3%]
          top-[50px]
          -z-10
          rounded-t-[70px]
          border-x
          border-t
          border-[#8c4dc7]/13
          sm:left-[4.7%]
          sm:right-[4.7%]
          sm:rounded-t-[125px]
        "
      />

      {/* BLACK HERO SHELL */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          top-[62px]
          flex
          w-[94%]
          -translate-x-1/2
          flex-col
          items-center
          justify-center
          overflow-visible
          rounded-t-[72px]
          border
          border-[#6f35a6]/30
          bg-[#030506]
          px-4
          pb-[105px]
          pt-12
          shadow-[0_0_0_1px_rgba(109,46,167,.08),0_0_58px_rgba(114,45,193,.22)]
          sm:top-[78px]
          sm:w-[91%]
          sm:rounded-t-[120px]
          sm:px-6
          sm:pb-[88px]
          sm:pt-14
          lg:top-[88px]
          lg:w-[88.5%]
          lg:max-w-[1820px]
          lg:rounded-t-[165px]
          lg:px-8
          lg:pb-[76px]
        "
      >
        {/* INNER SIDE GLOWS */}

        <div
          className="
            pointer-events-none
            absolute
            -left-10
            top-1/4
            h-[65%]
            w-20
            rounded-full
            bg-[#8f28f3]/14
            blur-[55px]
            sm:-left-12
            sm:w-28
            sm:blur-[60px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-10
            top-1/4
            h-[65%]
            w-20
            rounded-full
            bg-[#8f28f3]/14
            blur-[55px]
            sm:-right-12
            sm:w-28
            sm:blur-[60px]
          "
        />

        {/* MAIN CONTENT */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[780px]
            -translate-y-1
            text-center
            sm:-translate-y-2
            lg:-translate-y-3
          "
        >
          {/* TOP TRUST BADGE */}

          <div
            className="
              inline-flex
              max-w-full
              items-center
              gap-2
              rounded-full
              border
              border-[#9952e9]/42
              bg-[#131117]/88
              px-3
              py-1.5
              shadow-[0_6px_20px_rgba(0,0,0,.25)]
              backdrop-blur-xl
              sm:gap-2.5
              sm:px-4
              sm:py-2
            "
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b56dff] shadow-[0_0_8px_rgba(181,109,255,.9)]" />

            <span
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.17em]
                text-[#ddd2e8]
                xs:text-[8px]
                sm:text-[9px]
                sm:tracking-[0.22em]
              "
            >
              Your Trusted Trading Partner
            </span>
          </div>

          {/* HEADING */}

          <h1
            className="
              mx-auto
              mt-5
              max-w-[760px]
              px-2
              text-[2.15rem]
              font-black
              leading-[0.95]
              tracking-[-0.055em]
              text-white
              sm:mt-6
              sm:text-[3rem]
              md:text-[3.5rem]
              lg:text-[3.85rem]
              xl:text-[4rem]
            "
          >
            PROVE YOUR EDGE{" "}
            <span
              className="
                block
                bg-[linear-gradient(90deg,#e2c8ff_0%,#b96dff_45%,#9d4fff_100%)]
                bg-clip-text
                text-transparent
              "
            >
              WE WILL BACK IT.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[600px]
              px-2
              text-[11px]
              font-medium
              leading-[1.65]
              text-white/74
              sm:mt-5
              sm:px-0
              sm:text-[13px]
              lg:text-[14px]
            "
          >
            Prove your trading process, meet clear objectives, and earn the
            opportunity to trade
            <span className="hidden sm:inline">
              <br />
            </span>{" "}
            with BlackProp capital.
          </p>

          {/* CTA */}

          <div className="mt-6 flex justify-center sm:mt-7">
            <a
              href="#challenges"
              className="
                inline-flex
                min-h-[44px]
                w-[170px]
                items-center
                justify-center
                rounded-[11px]
                bg-[linear-gradient(100deg,#6557ff_0%,#8445ff_48%,#b43cff_100%)]
                px-5
                text-[12px]
                font-black
                text-white
                shadow-[0_12px_26px_rgba(121,67,255,.30),inset_0_1px_0_rgba(255,255,255,.16)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:brightness-110
                sm:min-h-[48px]
                sm:w-[195px]
                sm:text-[14px]
              "
            >
              Get Funded Now
            </a>
          </div>

          {/* TRUSTPILOT */}

          <a
            href="https://www.trustpilot.com/review/blackpropfunding.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View BlackProp reviews on Trustpilot"
            className="
              mx-auto
              mt-6
              flex
              w-fit
              max-w-full
              items-center
              justify-center
              gap-1.5
              overflow-hidden
              rounded-lg
              px-1
              py-1.5
              text-white
              transition-all
              duration-200
              hover:scale-[1.01]
              sm:mt-8
              sm:gap-2.5
              sm:px-2
            "
          >
            {/* EXCELLENT */}

            <span
              className="
                shrink-0
                text-[14px]
                font-bold
                tracking-[-0.02em]
                text-white
                xs:text-[15px]
                sm:text-[18px]
                lg:text-[20px]
              "
            >
              Excellent
            </span>

            {/* STARS */}

            <span className="flex shrink-0 items-center gap-[2px] sm:gap-[3px]">
              <TrustpilotStar />
              <TrustpilotStar />
              <TrustpilotStar />
              <TrustpilotStar />
            </span>

            {/* TRUSTPILOT BRAND */}

            <span
              className="
                ml-0.5
                flex
                shrink-0
                items-center
                gap-1
                sm:ml-1
                sm:gap-1.5
              "
            >
              <TrustpilotLogo />

              <span
                className="
                  text-[14px]
                  font-semibold
                  tracking-[-0.02em]
                  text-white
                  xs:text-[15px]
                  sm:text-[17px]
                  lg:text-[19px]
                "
              >
                Trustpilot
              </span>
            </span>
          </a>
        </div>

        {/* BENEFITS */}

        <div
          className="
            absolute
            bottom-[14px]
            left-0
            right-0
            z-20
            flex
            w-full
            gap-2
            overflow-x-auto
            px-3
            pb-1
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:bottom-[16px]
            sm:gap-2.5
            sm:px-4
            lg:left-[-30px]
            lg:right-[-30px]
            lg:w-auto
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
                gap-2
                rounded-full
                border
                border-white/[0.13]
                bg-[#17191d]/95
                px-3
                py-2
                text-[9px]
                font-medium
                text-white/78
                shadow-[0_6px_20px_rgba(0,0,0,.22)]
                backdrop-blur-xl
                sm:gap-2.5
                sm:px-4
                sm:py-2.5
                sm:text-[11px]
                lg:text-[12px]
              "
            >
              <span
                className="
                  grid
                  h-5
                  w-5
                  shrink-0
                  place-items-center
                  rounded-full
                  bg-[#342054]
                  text-[#b77cff]
                "
              >
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