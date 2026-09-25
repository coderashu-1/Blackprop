"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How to start?",
    answer:
      "Choose the challenge that fits your goals, select your account size and platform, then complete checkout to begin your BlackProp journey.",
  },
  {
    question: "How do I become an Blackprop Trader?",
    answer:
      "Complete the selected evaluation while following the defined trading objectives. Once the requirements are met, you can progress to the next stage.",
  },
  {
    question: "I have successfully passed, what to do now?",
    answer:
      "After passing, follow the next-step instructions shown in your dashboard. Your account status and any required onboarding actions will be displayed there.",
  },
  {
    question: "Can I modify my platform or account type?",
    answer:
      "Platform and account options depend on the challenge selected. Available changes are shown before checkout and inside your account where applicable.",
  },
  {
    question: "Can I trade news?",
    answer:
      "Trading permissions depend on the rules of the selected challenge. Review the applicable program rules before placing trades around major news events.",
  },
  {
    question:
      "Do I have to close my positions overnight or before the weekend?",
    answer:
      "Position-holding rules depend on your selected account and challenge. Check the applicable trading rules for overnight and weekend holding conditions.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`
        relative
        grid
        h-5
        w-5
        shrink-0
        place-items-center
        rounded-full
        border
        transition-all
        duration-300
        sm:h-[21px]
        sm:w-[21px]
        ${
          open
            ? "border-[#a95df1] bg-[#2a1738] text-[#d59cff]"
            : "border-[#7a8392] text-[#b7bfca]"
        }
      `}
    >
      <span className="absolute h-px w-[9px] rounded-full bg-current" />

      <span
        className={`absolute h-[9px] w-px rounded-full bg-current transition-all duration-300 ${
          open ? "rotate-90 opacity-0" : ""
        }`}
      />
    </span>
  );
}

function DiscordIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[21px] w-[21px] sm:h-[22px] sm:w-[22px]"
      aria-hidden="true"
    >
      <path d="M19.54 5.34A16.4 16.4 0 0 0 15.47 4l-.2.4c1.35.36 2.55.9 3.56 1.55a13.74 13.74 0 0 0-13.66 0A14.4 14.4 0 0 1 8.73 4.4L8.53 4c-1.42.24-2.8.69-4.07 1.34C1.9 9.18 1.2 12.92 1.55 16.6a16.46 16.46 0 0 0 5 2.53l1.22-1.67a10.3 10.3 0 0 1-1.92-.92l.47-.35c3.7 1.7 7.7 1.7 11.36 0l.48.35c-.62.37-1.27.68-1.93.92l1.22 1.67a16.4 16.4 0 0 0 5-2.53c.41-4.27-.72-7.97-2.91-11.26ZM8.1 14.4c-1.08 0-1.98-1-1.98-2.23s.87-2.23 1.98-2.23c1.12 0 2 .99 1.98 2.23 0 1.23-.88 2.23-1.98 2.23Zm7.8 0c-1.08 0-1.98-1-1.98-2.23s.87-2.23 1.98-2.23c1.12 0 2 .99 1.98 2.23 0 1.23-.86 2.23-1.98 2.23Z" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path
        d="M6 14 14 6M8 6h6v6"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FaqCommunity() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#05070b]
        px-3
        pb-16
        pt-12
        text-white
        min-[420px]:px-4
        sm:px-6
        sm:pb-20
        sm:pt-14
        lg:px-8
        lg:pb-2
        lg:pt-20
      "
    >
      {/* TOP RIGHT GLOW */}
      <div className="pointer-events-none absolute -right-[180px] -top-[120px] -z-10 h-[460px] w-[460px] rounded-full bg-[#8c3cf3]/[0.11] blur-[145px] lg:h-[520px] lg:w-[520px]" />

      {/* LEFT MID GLOW */}
      <div className="pointer-events-none absolute -left-[230px] top-[330px] -z-10 h-[460px] w-[460px] rounded-full bg-[#7a31d8]/[0.08] blur-[140px] lg:top-[390px]" />

      {/* BOTTOM GLOW */}
      <div className="pointer-events-none absolute bottom-[-150px] left-1/2 -z-10 h-[330px] w-[980px] max-w-[96vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(140,47,229,.25)_0%,rgba(104,37,175,.10)_42%,transparent_72%)] blur-[70px]" />

      {/* BOTTOM LIGHT LINE */}
      <div className="pointer-events-none absolute bottom-[6px] left-1/2 h-px w-[88%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(145,67,229,.42),transparent)] shadow-[0_0_18px_rgba(128,47,212,.35)]" />

      <div className="relative mx-auto w-full max-w-[1030px]">

        {/* =====================================================
            FAQ
        ====================================================== */}
        <div className="mx-auto max-w-[870px]">
          <div className="text-center">
            <h2 className="text-[1.8rem] font-black leading-[1.05] tracking-[-0.045em] text-white min-[420px]:text-[2rem] sm:text-[2.35rem] md:text-[2.55rem] lg:text-[2.75rem]">
              Frequently Asked Questions
            </h2>

            <p className="mt-2.5 text-[12px] text-[#949aa6] sm:text-[13px] md:text-[14px]">
              Find your answers here.
            </p>
          </div>

          <div className="mx-auto mt-8 grid grid-cols-1 gap-3 sm:mt-10 md:grid-cols-2 md:gap-x-[14px]">
            {faqs.map((item, index) => {
              const open = openIndex === index;

              return (
                <div
                  key={item.question}
                  className={`
                    overflow-hidden
                    rounded-[11px]
                    border
                    bg-[#20232b]
                    transition-all
                    duration-300
                    ${
                      open
                        ? "border-[#7b48ad]/55 shadow-[0_10px_28px_rgba(94,41,145,.12)]"
                        : "border-white/[0.08]"
                    }
                  `}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="
                      flex
                      min-h-[50px]
                      w-full
                      items-center
                      gap-3
                      px-4
                      text-left
                      text-[12px]
                      font-semibold
                      leading-[1.4]
                      text-white
                      transition
                      hover:bg-white/[0.025]
                      sm:min-h-[52px]
                      sm:text-[13px]
                    "
                  >
                    <PlusIcon open={open} />
                    <span className="min-w-0">{item.question}</span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-white/[0.06] px-4 pb-4 pt-3 text-[11px] leading-5 text-[#a7acb7] sm:pl-[48px] sm:pr-5 sm:text-[12px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            COMMUNITY BANNER
        ====================================================== */}
        <div
          className="
            relative
            mx-auto
            mt-14
            overflow-visible
            rounded-[22px]
            sm:mt-24
            min-[420px]:rounded-[24px]
            md:mt-[190px]
            md:min-h-[400px]
            lg:mt-[215px]
            lg:rounded-[26px]
          "
        >
          {/* CLIPPED BANNER BACKGROUND */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              overflow-hidden
              rounded-[22px]
              bg-[linear-gradient(108deg,#902cf4_0%,#a12fff_43%,#8d2ae0_66%,#5c237e_100%)]
              shadow-[0_25px_70px_rgba(75,20,122,.20)]
              min-[420px]:rounded-[24px]
              lg:rounded-[26px]
            "
          >
            <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(255,255,255,.035),transparent_38%,rgba(20,6,30,.13)_100%)]" />

            <div className="absolute -right-[90px] -top-[90px] h-[300px] w-[300px] rounded-full bg-[#34104c]/24 blur-[80px]" />
          </div>

          {/* CONTENT GRID */}
          <div
            className="
              relative
              z-10
              grid
              min-h-[610px]
              grid-cols-1
              md:min-h-[400px]
              md:grid-cols-[47%_53%]
            "
          >
            {/* LEFT COPY */}
            <div
              className="
                flex
                flex-col
                justify-center
                px-6
                py-10
                text-center
                min-[420px]:px-8
                sm:px-10
                sm:py-11
                md:px-8
                md:py-10
                md:text-left
                lg:px-[50px]
                lg:py-[48px]
              "
            >
              <h3
                className="
                  mx-auto
                  max-w-[410px]
                  text-[2rem]
                  font-black
                  uppercase
                  leading-[0.94]
                  tracking-[-0.06em]
                  text-white
                  min-[420px]:text-[2.3rem]
                  sm:text-[2.7rem]
                  md:mx-0
                  md:text-[2.55rem]
                  lg:text-[3.25rem]
                "
              >
                Talk Markets.
                <span className="block">Meet The</span>
                <span className="block">Community.</span>
              </h3>

              <p className="mx-auto mt-5 max-w-[390px] text-[12px] leading-[1.7] text-white/80 sm:text-[13px] md:mx-0 md:mt-6 lg:text-[14px]">
                Follow announcements, discuss markets and stay connected with
                other BlackProp traders.
              </p>

              {/* =====================================================
                  DISCORD BUTTON
                  - Larger
                  - Brighter
                  - Centered
                  - Highly visible
                  - Opens in new tab
              ====================================================== */}
              <div className="mt-7 flex w-full justify-center md:mt-8">
                <a
                  href="https://discord.gg/D3HxGh6DXt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join BlackProp Discord community"
                  className="
                    relative
                    z-30
                    inline-flex
                    min-h-[54px]
                    w-[210px]
                    cursor-pointer
                    items-center
                    justify-center
                    gap-3
                    rounded-[13px]
                    border
                    border-white/25
                    bg-[linear-gradient(135deg,#5865F2_0%,#6d5dfc_50%,#8b5cf6_100%)]
                    px-6
                    text-[13px]
                    font-black
                    uppercase
                    tracking-[0.04em]
                    text-white
                    opacity-100
                    shadow-[0_14px_35px_rgba(88,101,242,.50),0_0_25px_rgba(139,92,246,.25)]
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    hover:brightness-110
                    hover:shadow-[0_18px_42px_rgba(88,101,242,.60),0_0_32px_rgba(139,92,246,.35)]
                    active:translate-y-0
                    active:scale-[0.99]
                    sm:min-h-[58px]
                    sm:w-[225px]
                    sm:text-[14px]
                    md:mx-auto
                  "
                >
                  <DiscordIcon />

                  <span className="whitespace-nowrap">
                    Join Discord
                  </span>

                  <ArrowUpRight />
                </a>
              </div>
            </div>

            {/* PHONE AREA
                Desktop: original overlapping composition.
                Mobile: image is shown below the copy, centered and sized
                responsively so it is actually visible on small screens.
            */}
            <div
              className="
                relative
                mt-1
                h-[260px]
                w-full
                overflow-visible
                sm:h-[320px]
                md:mt-0
                md:h-auto
                md:min-h-0
              "
            >
              <div
                className="
                  absolute inset-0
                  flex items-end justify-center
                  overflow-visible
                  md:block
                "
              >
                <img
                  src="/images/community-phone.png"
                  alt="BlackProp mobile dashboard"
                  className="
                    relative
                    h-[285px]
                    w-auto
                    max-w-[92%]
                    object-contain object-bottom
                    sm:h-[350px]
                    md:absolute md:h-full md:w-full md:max-w-none
                  "
                  style={{
                    bottom: "15%",
                    left: "0%",
                    transform: "scale(1.4)",
                    transformOrigin: "center bottom",
                  }}
                />
              </div>

              {/* subtle base shadow */}
              <div className="pointer-events-none absolute bottom-[-8px] left-1/2 h-[32px] w-[72%] -translate-x-1/2 rounded-full bg-black/40 blur-[18px] md:h-[40px] md:w-[86%]" />
            </div>
          </div>
        </div>

        {/* LOWER DARK SPACE */}
        <div className="relative h-[80px] sm:h-[100px] md:h-[130px] lg:h-[150px]">
          <div className="pointer-events-none absolute bottom-[-22px] left-1/2 h-[80px] w-[72%] -translate-x-1/2 rounded-full bg-[#8131dc]/[0.10] blur-[60px]" />
        </div>
      </div>
    </section>
  );
}

export default FaqCommunity;
