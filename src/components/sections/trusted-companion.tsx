"use client";

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M4 10h12M12 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrustedCompanion() {
  return (
    <section
      id="trusted-companion"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#05070b]
        px-3
        pb-12
        pt-0
        text-white
        sm:px-5
        sm:pb-16
        md:px-6
        lg:px-8
        lg:pb-20
      "
    >
      {/* =====================================================
          TOP PURPLE LIGHT BAR
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[2px]
          w-[92%]
          -translate-x-1/2
          bg-[linear-gradient(90deg,transparent_0%,rgba(136,67,237,.25)_9%,rgba(174,104,255,.85)_50%,rgba(136,67,237,.25)_91%,transparent_100%)]
          shadow-[0_0_18px_rgba(154,76,245,.72)]
          sm:w-[94%]
          lg:w-[96%]
        "
      />

      {/* =====================================================
          OUTER AMBIENT GLOW
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[90px]
          -z-10
          h-[380px]
          w-[850px]
          max-w-[140vw]
          -translate-x-1/2
          rounded-[50%]
          bg-[radial-gradient(circle,rgba(104,41,175,.16)_0%,rgba(74,25,121,.08)_42%,transparent_72%)]
          blur-[55px]
          sm:top-[110px]
          sm:h-[450px]
          sm:w-[950px]
          sm:blur-[65px]
          lg:top-[120px]
          lg:h-[520px]
          lg:w-[1100px]
          lg:blur-[70px]
        "
      />

      <div className="relative mx-auto w-full max-w-[1380px]">
        {/* =====================================================
            PURPLE U-SHAPED FRAME
        ====================================================== */}
        <div
          className="
            relative
            mx-auto
            min-h-[500px]
            overflow-visible
            sm:min-h-[540px]
            md:min-h-[570px]
            lg:min-h-[640px]
          "
        >
          {/* =================================================
              OUTER GLOW FRAME
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-[1%]
              top-0
              bottom-[5%]
              rounded-b-[70px]
              border-x
              border-b
              border-[#5f2f97]/35
              shadow-[0_0_32px_rgba(106,46,174,.30)]
              sm:inset-x-[1.5%]
              sm:bottom-[6%]
              sm:rounded-b-[110px]
              sm:shadow-[0_0_36px_rgba(106,46,174,.32)]
              md:rounded-b-[135px]
              lg:bottom-[7%]
              lg:rounded-b-[200px]
              lg:shadow-[0_0_40px_rgba(106,46,174,.32)]
            "
          />

          {/* =================================================
              MIDDLE FRAME
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-[3%]
              top-0
              bottom-[9%]
              rounded-b-[65px]
              border-x
              border-b
              border-[#6f39ab]/40
              shadow-[0_0_24px_rgba(112,51,179,.22)]
              sm:inset-x-[4%]
              sm:bottom-[10%]
              sm:rounded-b-[100px]
              lg:bottom-[12%]
              lg:rounded-b-[190px]
              lg:shadow-[0_0_26px_rgba(112,51,179,.24)]
            "
          />

          {/* =================================================
              INNER STRONGER PURPLE FRAME
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-[5%]
              top-0
              bottom-[13%]
              rounded-b-[58px]
              border-x
              border-b
              border-[#7d3fc2]/55
              bg-[linear-gradient(180deg,rgba(76,34,121,.16)_0%,rgba(49,20,81,.10)_38%,rgba(13,10,20,.04)_100%)]
              shadow-[0_0_28px_rgba(126,57,201,.32)]
              sm:inset-x-[6%]
              sm:bottom-[15%]
              sm:rounded-b-[115px]
              lg:inset-x-[7%]
              lg:bottom-[17%]
              lg:rounded-b-[175px]
              lg:shadow-[0_0_34px_rgba(126,57,201,.36)]
            "
          />

          {/* =================================================
              LEFT PURPLE LIGHT COLUMN
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[13%]
              left-[5%]
              top-0
              w-[20px]
              bg-[linear-gradient(90deg,rgba(91,43,148,.50),rgba(91,43,148,.12),transparent)]
              blur-[7px]
              sm:bottom-[15%]
              sm:left-[6%]
              sm:w-[32px]
              sm:blur-[9px]
              lg:bottom-[17%]
              lg:left-[7%]
              lg:w-[54px]
              lg:blur-[10px]
            "
          />

          {/* =================================================
              RIGHT PURPLE LIGHT COLUMN
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[13%]
              right-[5%]
              top-0
              w-[20px]
              bg-[linear-gradient(270deg,rgba(91,43,148,.50),rgba(91,43,148,.12),transparent)]
              blur-[7px]
              sm:bottom-[15%]
              sm:right-[6%]
              sm:w-[32px]
              sm:blur-[9px]
              lg:bottom-[17%]
              lg:right-[7%]
              lg:w-[54px]
              lg:blur-[10px]
            "
          />

          {/* =================================================
              BOTTOM CENTRAL PURPLE GLOW
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[3%]
              left-1/2
              h-[90px]
              w-[80%]
              -translate-x-1/2
              rounded-full
              bg-[#7131b7]/20
              blur-[38px]
              sm:bottom-[4%]
              sm:h-[120px]
              sm:w-[76%]
              sm:blur-[45px]
              lg:bottom-[5%]
              lg:h-[180px]
              lg:w-[72%]
              lg:blur-[60px]
            "
          />

          {/* =====================================================
              BLACK INNER PANEL
          ====================================================== */}
          <div
            className="
              absolute
              inset-x-[7%]
              top-0
              bottom-[17%]
              overflow-hidden
              rounded-b-[52px]
              border
              border-white/[0.04]
              bg-[#020406]
              shadow-[0_25px_65px_rgba(0,0,0,.35)]
              sm:inset-x-[8%]
              sm:bottom-[19%]
              sm:rounded-b-[95px]
              sm:shadow-[0_28px_72px_rgba(0,0,0,.35)]
              lg:inset-x-[9.5%]
              lg:bottom-[22%]
              lg:rounded-b-[160px]
              lg:shadow-[0_30px_80px_rgba(0,0,0,.35)]
            "
          >
            {/* subtle inner vignette */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center_30%,rgba(61,28,94,.06),transparent_58%)]
              "
            />
          </div>

          {/* =====================================================
              CONTENT
          ====================================================== */}
          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[410px]
              w-full
              max-w-[820px]
              flex-col
              items-center
              justify-center
              px-7
              pb-20
              pt-14
              text-center
              sm:min-h-[450px]
              sm:px-8
              sm:pb-24
              sm:pt-16
              md:min-h-[480px]
              md:px-10
              md:pb-28
              lg:min-h-[520px]
              lg:px-8
              lg:pb-32
              lg:pt-20
            "
          >
            {/* =================================================
                BADGE
            ================================================== */}
            <div
              className="
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-[#7b46a8]/55
                bg-[#15101d]/90
                px-3.5
                py-1.5
                shadow-[0_8px_24px_rgba(0,0,0,.26)]
                backdrop-blur-xl
                sm:gap-2.5
                sm:px-4
                sm:py-2
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#b96fff]
                  shadow-[0_0_8px_rgba(185,111,255,.8)]
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#d7c7e7]
                  xs:text-[8px]
                  sm:text-[9px]
                  sm:tracking-[0.24em]
                "
              >
                Your Trusted Trading Partner
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================== */}
            <h2
              className="
                mt-6
                max-w-[780px]
                px-1
                text-[clamp(2rem,9vw,4rem)]
                font-black
                leading-[1.04]
                tracking-[-0.055em]
                text-white
                sm:mt-7
                sm:leading-[1.02]
              "
            >
              A trusted companion
              <span className="block">on your funding journey</span>
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <p
              className="
                mt-5
                max-w-[620px]
                px-1
                text-[12px]
                leading-[1.7]
                text-white/75
                sm:mt-6
                sm:text-[15px]
                sm:leading-7
                lg:text-[16px]
              "
            >
              Join traders worldwide and become a funded trader with the
              world&apos;s
              <span className="hidden sm:inline">
                <br />
              </span>{" "}
              most trusted prop firm.
            </p>

            {/* =================================================
                CTA
            ================================================== */}
            <a
              href="https://blackpropfundingdashboard.propaccount.com/en/sign-up"
              className="
                group
                mt-7
                inline-flex
                min-h-[46px]
                w-auto
                min-w-[155px]
                max-w-full
                items-center
                justify-center
                gap-2
                rounded-[10px]
                bg-[linear-gradient(90deg,#6657f8_0%,#8a49ff_48%,#a53df4_100%)]
                px-5
                text-[12px]
                font-black
                text-white
                shadow-[0_12px_26px_rgba(113,64,232,.28),inset_0_1px_0_rgba(255,255,255,.14)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:brightness-110
                active:translate-y-0
                sm:mt-8
                sm:min-h-[50px]
                sm:min-w-[180px]
                sm:px-6
                sm:text-[14px]
              "
            >
              Get Funded Now
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanion;