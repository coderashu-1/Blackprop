"use client";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="m4 9.2 3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3.5 10h12M11.5 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const journey = [
  {
    number: "01",
    label: "Setup",
    title: "Choose your route",
    description:
      "Pick the challenge, account size and trading setup that fits you perfectly.",
    details: [
      "Choose your challenge model",
      "Select your account size",
      "Pick your trading environment",
    ],
    accent: "from-[#9f63ff] via-[#8f5cff] to-[#d485ff]",
  },
  {
    number: "02",
    label: "Execution",
    title: "Prove your process",
    description:
      "Trade within the program rules and show consistent, controlled execution.",
    details: [
      "Follow defined risk objectives",
      "Trade within program rules",
      "Complete required milestones",
    ],
    accent: "from-[#a541ff] via-[#d23cff] to-[#7553ff]",
  },
  {
    number: "03",
    label: "Progression",
    title: "Unlock the next stage",
    description:
      "Complete the required objectives and move toward reward eligibility.",
    details: [
      "Progress through your account",
      "Build a consistent track record",
      "Reach reward eligibility",
    ],
    accent: "from-[#7f62ff] via-[#a65cff] to-[#e553af]",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-12 text-[#10182b] sm:py-14 md:py-16 lg:py-20"
    >
      <style>{`
        @keyframes bpStepIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bp-step-card {
          opacity: 0;
          animation: bpStepIn .65s cubic-bezier(.2,.75,.25,1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .bp-step-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* soft background lighting */}
      <div className="pointer-events-none absolute left-1/2 top-[-190px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#9f4cff]/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-[#824cff]/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f28f3] sm:text-[11px]">
            How it works
          </p>

          <h2 className="mt-3 text-[2.75rem] font-black leading-[0.93] tracking-[-0.055em] text-[#121a2e] sm:text-[3.7rem] md:text-[4.2rem] lg:text-[4.7rem]">
            Three steps.
            <span className="block bg-[linear-gradient(90deg,#a85dff_0%,#b14cff_45%,#d06cff_100%)] bg-clip-text text-transparent">
              One clear path.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[14px] font-semibold leading-6 text-[#536079] sm:text-[15px] sm:leading-7 lg:text-[16px]">
            Choose your setup, trade with discipline and progress through
            <span className="hidden sm:inline"><br /></span>
            the BlackProp journey.
          </p>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-5 md:mt-14 lg:grid-cols-3 lg:gap-6">
          {journey.map((item, index) => (
            <article
              key={item.number}
              className="
                bp-step-card
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-[#e9dcfb]
                bg-white
                px-5
                pb-6
                pt-7
                shadow-[0_18px_44px_rgba(89,44,142,.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_24px_58px_rgba(89,44,142,.13)]
                sm:px-6
                sm:pb-7
                sm:pt-8
                lg:min-h-[370px]
              "
              style={{ animationDelay: `${index * 110}ms` }}
            >
              {/* top line */}
              <div
                className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${item.accent}`}
              />

              <div className="relative flex items-center gap-3">
                <div
                  className="
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-full
                    bg-[linear-gradient(135deg,#9137ff,#5b38f2)]
                    text-[12px]
                    font-black
                    text-white
                    shadow-[0_8px_18px_rgba(113,49,235,.28)]
                    sm:h-11
                    sm:w-11
                    sm:text-[13px]
                  "
                >
                  {item.number}
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-[#e8d5ff]
                    bg-[#fbf7ff]
                    px-3
                    py-1.5
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.11em]
                    text-[#8f28f3]
                    sm:text-[10px]
                  "
                >
                  {item.label}
                </span>
              </div>

              <div className="mt-7">
                <h3 className="text-[1.65rem] font-black leading-[1.05] tracking-[-0.045em] text-[#11192b] sm:text-[1.8rem] lg:text-[1.95rem]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#60708d] sm:text-[14px]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 space-y-3 border-t border-[#eee6f8] pt-5">
                {item.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-3">
                    <span
                      className="
                        grid
                        h-6
                        w-6
                        shrink-0
                        place-items-center
                        rounded-full
                        bg-[linear-gradient(135deg,#9137ff,#6b3cf0)]
                        text-white
                        shadow-[0_5px_12px_rgba(126,52,239,.20)]
                      "
                    >
                      <CheckIcon />
                    </span>

                    <span className="text-[12px] font-semibold leading-5 text-[#33415b] sm:text-[13px]">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute -bottom-16 -right-14 h-36 w-36 rounded-full bg-[#9d4cff]/[0.05] blur-[42px]" />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          className="
            relative
            mt-6
            flex
            flex-col
            gap-5
            overflow-hidden
            rounded-[16px]
            border
            border-[#211a34]
            bg-[#11131d]
            px-6
            py-6
            text-white
            shadow-[0_18px_42px_rgba(16,13,28,.22)]
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-8
            sm:py-7
          "
        >
          <div className="relative z-10">
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#c783ff] sm:text-[10px]">
              Ready to begin?
            </p>

            <p className="mt-2 text-[1.25rem] font-black tracking-[-0.035em] text-white sm:text-[1.45rem] lg:text-[1.6rem]">
              Start your BlackProp journey.
            </p>
          </div>

          <a
            href="#challenges"
            className="
              group
              relative
              z-10
              inline-flex
              min-h-[52px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-[12px]
              bg-[linear-gradient(90deg,#8d35ff_0%,#7b43ff_48%,#5a4af2_100%)]
              px-6
              text-[13px]
              font-black
              text-white
              shadow-[0_12px_28px_rgba(104,61,240,.28)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:brightness-110
              sm:w-auto
              sm:min-w-[170px]
              sm:text-[14px]
            "
          >
            Get Funded
            <ArrowRight />
          </a>

          <div className="pointer-events-none absolute right-[-60px] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#8f28f3]/10 blur-[60px]" />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
