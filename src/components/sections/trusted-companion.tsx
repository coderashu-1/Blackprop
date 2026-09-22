"use client";

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
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
        pb-14
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
          w-[96%]
          -translate-x-1/2
          bg-[linear-gradient(90deg,transparent_0%,rgba(136,67,237,.25)_9%,rgba(174,104,255,.85)_50%,rgba(136,67,237,.25)_91%,transparent_100%)]
          shadow-[0_0_18px_rgba(154,76,245,.72)]
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
          top-[120px]
          -z-10
          h-[520px]
          w-[1100px]
          max-w-[98vw]
          -translate-x-1/2
          rounded-[50%]
          bg-[radial-gradient(circle,rgba(104,41,175,.16)_0%,rgba(74,25,121,.08)_42%,transparent_72%)]
          blur-[70px]
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
            min-h-[520px]
            overflow-visible
            sm:min-h-[560px]
            md:min-h-[600px]
            lg:min-h-[640px]
          "
        >
          {/* outer glow frame */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-[1.5%]
              top-0
              bottom-[7%]
              rounded-b-[150px]
              border-x
              border-b
              border-[#5f2f97]/35
              shadow-[0_0_40px_rgba(106,46,174,.32)]
              sm:rounded-b-[180px]
              lg:rounded-b-[200px]
            "
          />

          {/* middle frame */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-[4%]
              top-0
              bottom-[12%]
              rounded-b-[135px]
              border-x
              border-b
              border-[#6f39ab]/40
              shadow-[0_0_26px_rgba(112,51,179,.24)]
              sm:rounded-b-[165px]
              lg:rounded-b-[190px]
            "
          />

          {/* inner stronger purple frame */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-[7%]
              top-0
              bottom-[17%]
              rounded-b-[120px]
              border-x
              border-b
              border-[#7d3fc2]/55
              bg-[linear-gradient(180deg,rgba(76,34,121,.16)_0%,rgba(49,20,81,.10)_38%,rgba(13,10,20,.04)_100%)]
              shadow-[0_0_34px_rgba(126,57,201,.36)]
              sm:rounded-b-[150px]
              lg:rounded-b-[175px]
            "
          />

          {/* side purple light columns */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[17%]
              left-[7%]
              top-0
              w-[34px]
              bg-[linear-gradient(90deg,rgba(91,43,148,.55),rgba(91,43,148,.15),transparent)]
              blur-[10px]
              sm:w-[44px]
              lg:w-[54px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[17%]
              right-[7%]
              top-0
              w-[34px]
              bg-[linear-gradient(270deg,rgba(91,43,148,.55),rgba(91,43,148,.15),transparent)]
              blur-[10px]
              sm:w-[44px]
              lg:w-[54px]
            "
          />

          {/* bottom central purple glow */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[5%]
              left-1/2
              h-[120px]
              w-[72%]
              -translate-x-1/2
              rounded-full
              bg-[#7131b7]/20
              blur-[48px]
              sm:h-[150px]
              lg:h-[180px]
              lg:blur-[60px]
            "
          />

          {/* =====================================================
              BLACK INNER PANEL
          ====================================================== */}
          <div
            className="
              absolute
              inset-x-[9.5%]
              top-0
              bottom-[22%]
              overflow-hidden
              rounded-b-[108px]
              border
              border-white/[0.04]
              bg-[#020406]
              shadow-[0_30px_80px_rgba(0,0,0,.35)]
              sm:rounded-b-[138px]
              lg:rounded-b-[160px]
            "
          >
            {/* subtle inner vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center_30%,rgba(61,28,94,.06),transparent_58%)]" />
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
              min-h-[430px]
              max-w-[820px]
              flex-col
              items-center
              justify-center
              px-6
              pb-24
              pt-16
              text-center
              sm:min-h-[470px]
              sm:px-8
              sm:pb-28
              sm:pt-20
              lg:min-h-[520px]
              lg:pb-32
            "
          >
            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[#7b46a8]/55
                bg-[#15101d]/90
                px-4
                py-2
                shadow-[0_8px_24px_rgba(0,0,0,.26)]
                backdrop-blur-xl
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#b96fff] shadow-[0_0_8px_rgba(185,111,255,.8)]" />

              <span className="text-[8px] font-black uppercase tracking-[0.24em] text-[#d7c7e7] sm:text-[9px]">
                Your Trusted Trading Partner
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                mt-7
                max-w-[780px]
                text-[2.5rem]
                font-black
                leading-[1.02]
                tracking-[-0.055em]
                text-white
                sm:text-[3.25rem]
                md:text-[3.65rem]
                lg:text-[4rem]
              "
            >
              A trusted companion
              <span className="block">on your crypto journey</span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-[620px]
                text-[13px]
                leading-6
                text-white/75
                sm:text-[15px]
                sm:leading-7
                lg:text-[16px]
              "
            >
              Join traders worldwide and become a funded trader with the world&apos;s
              <span className="hidden sm:inline">
                <br />
              </span>{" "}
              most trusted prop firm.
            </p>

            {/* CTA */}
            <a
              href="#challenges"
              className="
                group
                mt-8
                inline-flex
                min-h-[48px]
                min-w-[170px]
                items-center
                justify-center
                gap-2
                rounded-[10px]
                bg-[linear-gradient(90deg,#6657f8_0%,#8a49ff_48%,#a53df4_100%)]
                px-6
                text-[13px]
                font-black
                text-white
                shadow-[0_12px_26px_rgba(113,64,232,.28),inset_0_1px_0_rgba(255,255,255,.14)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:brightness-110
                sm:min-h-[50px]
                sm:min-w-[180px]
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
