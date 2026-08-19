import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | BlackProp",
  description:
    "Terms and conditions governing the use of BlackProp services and trading programs.",
};

const sections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms & Conditions constitute an agreement between you
          (&quot;you&quot;, &quot;your&quot;, or the &quot;Trader&quot;) and
          BlackProp regarding your access to and use of BlackProp websites,
          platforms, challenges, accounts, tools, and related services
          (collectively, the &quot;Services&quot;).
        </p>

        <p>
          By purchasing, accessing, registering for, or otherwise using the
          Services, you acknowledge that you have read, understood, and agreed
          to these Terms.
        </p>

        <p>
          BlackProp may update these Terms from time to time. Continued use of
          the Services after an updated version becomes effective constitutes
          acceptance of the updated Terms.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Eligibility",
    content: (
      <>
        <p>
          You must be at least eighteen (18) years old and legally capable of
          entering into a binding agreement to use the Services.
        </p>

        <p>
          If you use the Services on behalf of a company or another legal
          entity, you represent that you have authority to bind that entity to
          these Terms.
        </p>

        <p>
          You are responsible for ensuring that your use of BlackProp is
          permitted under the laws and regulations applicable in your
          jurisdiction.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Limited License",
    content: (
      <>
        <p>
          BlackProp grants you a limited, personal, non-exclusive,
          non-transferable, non-sublicensable, and revocable right to access
          and use the Services for their intended purpose.
        </p>

        <p>
          This permission does not transfer ownership of any BlackProp
          technology, software, trademarks, designs, content, intellectual
          property, or proprietary information to you.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Account Registration & Security",
    content: (
      <>
        <p>
          Certain Services may require you to create an account and provide
          information such as your name, email address, telephone number, date
          of birth, billing information, or other information necessary to
          provide the Services.
        </p>

        <p>
          You are responsible for keeping your login credentials secure and
          confidential. Your account is personal to you and may not be shared,
          sold, transferred, or used by another person.
        </p>

        <p>
          You must promptly notify BlackProp if you believe your account or
          credentials have been compromised.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Trading Rules & Prohibited Conduct",
    content: (
      <>
        <p>
          Traders must comply with all trading objectives, risk limits,
          challenge requirements, account rules, and other guidelines
          applicable to the program they purchase or participate in.
        </p>

        <p>Prohibited activity may include, without limitation:</p>

        <ul>
          <li>Exploiting pricing errors, platform errors, or latency.</li>

          <li>Using material non-public or insider information.</li>

          <li>Front-running trades placed elsewhere.</li>

          <li>
            Manipulating or attempting to manipulate trading platforms,
            pricing, executions, or program results.
          </li>

          <li>
            Arbitraging BlackProp accounts against other accounts or third
            parties where prohibited.
          </li>

          <li>
            Using strategies specifically intended to exploit evaluation or
            funded-account systems rather than genuine trading activity.
          </li>

          <li>
            Circumventing position limits, drawdown limits, risk controls, or
            other program restrictions.
          </li>

          <li>
            Using another person to trade your account or trading an account
            belonging to another person.
          </li>

          <li>
            Conduct intended to create regulatory, technological, financial,
            or reputational risk for BlackProp or its service providers.
          </li>
        </ul>

        <p>
          Suspected prohibited activity may be reviewed by BlackProp and its
          relevant service providers. Violations may result in rejected
          transactions, removal of profits, account suspension, account
          termination, disqualification, or other actions permitted under the
          applicable program rules.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Educational & Informational Content",
    content: (
      <>
        <p>
          Content provided through BlackProp is intended for general
          informational and educational purposes unless expressly stated
          otherwise.
        </p>

        <p>
          Nothing available through the Services should be interpreted as
          personalized investment, financial, legal, accounting, or tax advice.
        </p>

        <p>
          You are responsible for evaluating any information made available
          through the Services and determining whether trading is appropriate
          for you.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Purchases, Fees & Refunds",
    content: (
      <>
        <p>
          BlackProp may charge fees for evaluations, challenges, subscriptions,
          accounts, add-ons, or other Services. Prices and availability may
          change from time to time.
        </p>

        <p>
          Before completing a purchase, you are responsible for reviewing the
          applicable price, account size, trading rules, challenge
          requirements, refund conditions, and any other material terms shown
          during checkout.
        </p>

        <p>
          Refund eligibility, where applicable, is governed by
          BlackProp&apos;s Refund Policy and the terms presented in connection
          with the relevant purchase.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Program Guidelines",
    content: (
      <>
        <p>
          Each BlackProp program may have additional guidelines governing
          trading objectives, drawdown, position sizes, trading periods,
          consistency requirements, prohibited strategies, payouts, and other
          requirements.
        </p>

        <p>
          Program-specific rules form part of these Terms. You are responsible
          for reviewing the applicable rules before purchasing and while
          participating in a program.
        </p>

        <p>
          Participation in a BlackProp program does not guarantee funding,
          profits, payouts, employment, investment returns, or future
          compensation.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          BlackProp and its licensors retain all rights relating to the
          BlackProp website, platform, brand, trademarks, logos, software,
          designs, graphics, written content, videos, technology, and other
          intellectual property.
        </p>

        <p>
          You may not copy, modify, reproduce, distribute, republish, reverse
          engineer, scrape, frame, aggregate, or commercially exploit
          BlackProp materials without prior written permission, except where
          applicable law expressly permits such activity.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Trading Risk Disclosure",
    content: (
      <>
        <p>
          Trading financial markets involves substantial risk. Market
          volatility, leverage, liquidity conditions, execution conditions,
          technology failures, and other factors may result in significant
          losses.
        </p>

        <p>
          Past performance does not guarantee future results. You should not
          participate in trading activities with funds that you cannot afford
          to lose.
        </p>

        <p>
          Internet-based trading also carries technological risks including
          hardware failure, software failure, interrupted internet access,
          delayed market data, and communication failures.
        </p>
      </>
    ),
  },

  {
    number: "11",
    title: "Suspension & Termination",
    content: (
      <>
        <p>
          BlackProp may suspend, restrict, or terminate access to the Services
          where permitted under these Terms, applicable program rules, or
          applicable law.
        </p>

        <p>
          Reasons may include violations of trading rules, suspected fraud,
          unauthorized account access, payment disputes, misuse of the
          Services, prohibited trading activity, or other material violations
          of these Terms.
        </p>
      </>
    ),
  },

  {
    number: "12",
    title: "Disclaimer of Warranties",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, the Services are
          provided on an &quot;as is&quot; and &quot;as available&quot; basis.
        </p>

        <p>
          BlackProp does not guarantee that the Services will always be
          uninterrupted, error-free, secure, or available at every moment, or
          that information provided through the Services will always be
          complete or free from errors.
        </p>
      </>
    ),
  },

  {
    number: "13",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, BlackProp and its
          affiliates, officers, employees, contractors, and service providers
          will not be responsible for indirect, incidental, special,
          consequential, exemplary, or punitive damages arising from your use
          of the Services.
        </p>

        <p>
          Nothing in these Terms excludes or limits liability that cannot
          lawfully be excluded or limited.
        </p>
      </>
    ),
  },

  {
    number: "14",
    title: "Indemnification",
    content: (
      <p>
        To the extent permitted by applicable law, you agree to indemnify and
        hold harmless BlackProp and its affiliates, officers, employees,
        contractors, and representatives from claims, losses, liabilities, and
        reasonable expenses arising from your misuse of the Services,
        violation of these Terms, violation of applicable law, or infringement
        of a third party&apos;s rights.
      </p>
    ),
  },

  {
    number: "15",
    title: "Force Majeure",
    content: (
      <p>
        BlackProp will not be responsible for delays or failures caused by
        events reasonably outside its control, including natural disasters,
        war, civil unrest, government actions, market disruption, network
        failures, platform failures, service-provider outages, or failures of
        communications infrastructure.
      </p>
    ),
  },

  {
    number: "16",
    title: "Severability",
    content: (
      <p>
        If any provision of these Terms is determined to be invalid or
        unenforceable, the remaining provisions will continue in effect to the
        extent permitted by applicable law.
      </p>
    ),
  },

  {
    number: "17",
    title: "Assignment",
    content: (
      <p>
        You may not transfer or assign your rights or obligations under these
        Terms without prior written permission from BlackProp. BlackProp may
        assign its rights and obligations where permitted by applicable law,
        including in connection with a merger, restructuring, acquisition, or
        sale of its business.
      </p>
    ),
  },

  {
    number: "18",
    title: "Waiver",
    content: (
      <p>
        Failure to enforce a provision of these Terms will not constitute a
        waiver of that provision or any other rights available to BlackProp.
      </p>
    ),
  },

  {
    number: "19",
    title: "Entire Agreement",
    content: (
      <p>
        These Terms, together with applicable program rules, policies, and
        purchase terms, constitute the agreement between you and BlackProp
        regarding your use of the Services and supersede prior representations
        relating to those Services.
      </p>
    ),
  },

  {
    number: "20",
    title: "Governing Law & Disputes",
    content: (
      <>
        <p>
          The governing law, dispute-resolution procedure, venue, and any
          arbitration requirements applicable to these Terms must correspond
          to the jurisdiction and legal entity through which BlackProp
          operates.
        </p>

        <p className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-4 text-[#E8C962]">
          Before launch: replace this paragraph with the governing-law and
          dispute-resolution language approved for your actual BlackProp legal
          entity.
        </p>
      </>
    ),
  },

  {
    number: "21",
    title: "Related Policies",
    content: (
      <p>
        These Terms should be read together with BlackProp&apos;s Privacy
        Policy, Refund Policy, Trading Rules, Risk Disclosure, and any
        program-specific rules applicable to the Services you use.
      </p>
    ),
  },

  {
    number: "22",
    title: "Contact",
    content: (
      <>
        <p>
          Questions regarding these Terms may be submitted through the official
          BlackProp support channels listed on our website.
        </p>

        <p>
          <strong className="text-white">Legal entity:</strong>{" "}
          <span className="text-[#E8C962]">
            [INSERT REGISTERED BLACKPROP LEGAL ENTITY]
          </span>
        </p>

        <p>
          <strong className="text-white">Contact email:</strong>{" "}
          <span className="text-[#E8C962]">
            [INSERT LEGAL / SUPPORT EMAIL]
          </span>
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#030303] text-white">
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 bg-[#030303]" />

        {/* TOP CENTER GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[520px]
            w-[1100px]
            max-w-[100vw]
            -translate-x-1/2
            bg-[radial-gradient(circle,rgba(212,175,55,.075)_0%,rgba(212,175,55,.018)_42%,transparent_70%)]
          "
        />

        {/* LEFT GLOW */}
        <div className="pointer-events-none absolute -left-52 top-[500px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.025] blur-[150px]" />

        {/* GRID */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 38%)",
          }}
        />

        {/* GOLD TOP LINE */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[92%] max-w-[1320px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

        {/* =====================================================
            PAGE CONTENT
        ====================================================== */}

        <div className="relative z-10 mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
          {/* =====================================================
              HERO
          ====================================================== */}

          <header className="pb-10 pt-14 sm:pb-12 sm:pt-16 lg:pb-14 lg:pt-20">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                {/* LABEL */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.055] px-3.5 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#E8C962]">
                    BlackProp Legal
                  </span>
                </div>

                {/* HEADING */}
                <h1
                  className="
                    mt-5
                    max-w-[850px]
                    text-[2.5rem]
                    font-black
                    uppercase
                    leading-[0.95]
                    tracking-[-0.055em]
                    text-white
                    sm:text-[3.4rem]
                    lg:text-[4.2rem]
                  "
                >
                  Terms &{" "}

                  <span
                    className="
                      bg-[linear-gradient(110deg,#FFFFFF_0%,#FFF8DC_20%,#EFD47A_42%,#D4AF37_65%,#B3831D_85%,#8C6515_100%)]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Conditions
                  </span>
                </h1>

                <p className="mt-5 max-w-[700px] text-sm font-medium leading-7 text-white/52 sm:text-base sm:leading-8">
                  Please review these terms carefully before purchasing,
                  registering for, accessing, or using any BlackProp service.
                </p>
              </div>

              {/* META */}
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3">
                  <p className="text-[8px] font-black uppercase tracking-[0.15em] text-white/30">
                    Applies To
                  </p>

                  <p className="mt-1 text-xs font-bold text-white/70">
                    All BlackProp Services
                  </p>
                </div>

                <div className="rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.035] px-4 py-3">
                  <p className="text-[8px] font-black uppercase tracking-[0.15em] text-white/30">
                    Last Updated
                  </p>

                  <p className="mt-1 text-xs font-bold text-[#E8C962]">
                    August 19, 2026
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* =====================================================
              BODY
          ====================================================== */}

          <div
            className="
              grid
              gap-6
              pb-16
              sm:pb-20
              lg:grid-cols-[230px_minmax(0,1fr)]
              lg:gap-8
              xl:grid-cols-[250px_minmax(0,1fr)]
            "
          >
            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-[22px] border border-white/[0.07] bg-white/[0.022] p-4 backdrop-blur-xl">
                <p className="px-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#D4AF37]">
                  On this page
                </p>

                <div className="mt-4 max-h-[65vh] space-y-1 overflow-y-auto pr-1">
                  {sections.map((section) => (
                    <a
                      key={section.number}
                      href={`#section-${section.number}`}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-2.5
                        py-2.5
                        transition
                        hover:bg-white/[0.04]
                      "
                    >
                      <span className="w-5 shrink-0 text-[9px] font-black text-[#D4AF37]/45 transition group-hover:text-[#D4AF37]">
                        {section.number}
                      </span>

                      <span className="text-[11px] font-semibold leading-4 text-white/38 transition group-hover:text-white/75">
                        {section.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* =================================================
                TERMS PANEL
            ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-[26px]
                border
                border-white/[0.07]
                bg-[linear-gradient(145deg,rgba(255,255,255,.028),rgba(255,255,255,.012))]
                shadow-[0_30px_100px_rgba(0,0,0,.22)]
                backdrop-blur-xl
              "
            >
              {/* PANEL INTRO */}
              <div className="border-b border-white/[0.06] px-5 py-6 sm:px-7 lg:px-9">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.055] text-[#D4AF37]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 3h7l4 4v14H8V3Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M15 3v5h4M11 12h5M11 16h5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h2 className="text-sm font-black uppercase tracking-[-0.01em] text-white">
                      Important Information
                    </h2>

                    <p className="mt-2 max-w-[780px] text-xs font-medium leading-6 text-white/42 sm:text-[13px]">
                      These Terms govern your access to and use of BlackProp.
                      By using our Services, you acknowledge that you have read
                      and agreed to the applicable terms and program rules.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTIONS */}
              <div>
                {sections.map((section) => (
                  <section
                    key={section.number}
                    id={`section-${section.number}`}
                    className="
                      scroll-mt-28
                      border-b
                      border-white/[0.06]
                      px-5
                      py-7
                      last:border-b-0
                      sm:px-7
                      sm:py-8
                      lg:px-9
                      lg:py-9
                    "
                  >
                    <div className="grid gap-4 sm:grid-cols-[58px_minmax(0,1fr)] sm:gap-5">
                      {/* NUMBER */}
                      <div>
                        <span
                          className="
                            inline-flex
                            h-9
                            min-w-9
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-[#D4AF37]/13
                            bg-[#D4AF37]/[0.035]
                            px-2
                            text-[10px]
                            font-black
                            tracking-[0.12em]
                            text-[#D4AF37]/65
                          "
                        >
                          {section.number}
                        </span>
                      </div>

                      {/* CONTENT */}
                      <div>
                        <h2 className="text-[16px] font-black uppercase tracking-[-0.025em] text-white sm:text-[17px] lg:text-lg">
                          {section.title}
                        </h2>

                        <div
                          className="
                            mt-4
                            max-w-[900px]
                            space-y-4
                            text-[13px]
                            font-medium
                            leading-7
                            text-white/50
                            sm:text-sm

                            [&_strong]:font-bold
                            [&_strong]:text-white/80

                            [&_ul]:space-y-2.5
                            [&_ul]:pl-5

                            [&_li]:relative
                            [&_li]:pl-2

                            [&_li]:before:absolute
                            [&_li]:before:-left-3
                            [&_li]:before:top-[11px]
                            [&_li]:before:h-1
                            [&_li]:before:w-1
                            [&_li]:before:rounded-full
                            [&_li]:before:bg-[#D4AF37]/70
                          "
                        >
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FADE */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030303] to-transparent" />
      </main>

      <Footer />
    </>
  );
}