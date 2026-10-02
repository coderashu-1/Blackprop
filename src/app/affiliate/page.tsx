import Link from "next/link";
import Navbar from "@/components/layout/navbar";

const commissionTiers = [
  {
    range: "0 – 9",
    referrals: "referrals",
    rate: "7.5%",
    label: "Starting tier",
  },
  {
    range: "10 – 99",
    referrals: "referrals",
    rate: "9%",
    label: "Growth tier",
  },
  {
    range: "100+",
    referrals: "referrals",
    rate: "11%",
    label: "Top tier",
  },
];

const benefits = [
  {
    number: "01",
    title: "Custom dashboard",
    text: "Track your referrals, qualifying sales and commissions from one dedicated dashboard.",
  },
  {
    number: "02",
    title: "No withdrawal caps",
    text: "There are no withdrawal caps or limits once your commissions become eligible for withdrawal.",
  },
  {
    number: "03",
    title: "24/7 support",
    text: "Get affiliate support through the BlackProp Discord community whenever you need it.",
  },
  {
    number: "04",
    title: "Unique referral link",
    text: "Your dashboard provides a unique referral link or code that you can start sharing immediately.",
  },
];

const faqs = [
  {
    question: "When can I withdraw my commissions?",
    answer:
      "Affiliates must become KYC verified and reach the $100 withdrawal threshold. Once both conditions are met, the withdrawal button activates. You can request a specific amount and choose a withdrawal method. Withdrawal requests are approved within 24 to 48 hours.",
  },
  {
    question: "What is the 7% lifetime commission?",
    answer:
      "Affiliates earn commission for every new customer they bring to BlackProp. When you refer someone who previously purchased an evaluation, you receive a flat 7% commission on that repeat sale, regardless of your current tier.",
  },
  {
    question: "How do commission tiers work?",
    answer:
      "There are three tiers for new customers: 0 to 9 referrals earn 7.5%, 10 to 99 referrals earn 9%, and 100+ referrals earn 11% on every new sale at that level. Repeat customer referrals earn a flat 7%.",
  },
];

function BPMark({
  width = 36,
  height = 46,
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#9e5aff]/10 text-[#c08cff]">
      <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
        <path
          d="m5 10 3.2 3.2L15.5 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function SectionLabel({
  number,
  eyebrow,
}: {
  number: string;
  eyebrow: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#a96bff]">
        {number}
      </span>
      <span className="h-px w-8 bg-[#9e5aff]/30" />
      <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/30">
        {eyebrow}
      </span>
    </div>
  );
}

export default function AffiliatePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020304] text-white selection:bg-[#9e5aff]/30">
      <Navbar />

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-[-360px] h-[720px] w-[1000px] -translate-x-1/2 rounded-full bg-[#7c3dcc]/10 blur-[150px]" />
        <div className="absolute right-[-260px] top-[850px] h-[600px] w-[600px] rounded-full bg-[#9e5aff]/7 blur-[150px]" />
        <div className="absolute left-[-300px] top-[1500px] h-[600px] w-[600px] rounded-full bg-[#5e27a0]/8 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(158,90,255,.13),transparent_58%)]" />

        <div className="relative mx-auto max-w-[1240px] px-5 pb-20 pt-24 sm:px-7 sm:pb-24 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-32">
          <div className="mx-auto max-w-[950px] text-center">
            <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-[#9e5aff]/20 bg-[#9e5aff]/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#c79bff] shadow-[0_0_30px_rgba(158,90,255,.06)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a96bff] shadow-[0_0_12px_#9e5aff]" />
              BlackProp Affiliates
            </div>

            <h1 className="text-balance text-[42px] font-black leading-[0.98] tracking-[-0.06em] sm:text-[64px] lg:text-[82px]">
              Turn your audience into{" "}
              <span className="bg-gradient-to-r from-white via-[#dfcaf4] to-[#a96bff] bg-clip-text text-transparent">
                rewards.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[790px] text-[15px] leading-7 text-white/50 sm:text-[18px] sm:leading-8">
              Partner with BlackProp and earn on every trader you bring in.
              Get tiered commissions from <strong className="text-white/80">7.5%</strong>{" "}
              up to <strong className="text-white/80">11%</strong> on new sales,
              plus a <strong className="text-white/80">7% lifetime commission</strong>{" "}
              on repeat customers.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://blackpropfundingdashboard.propaccount.com/en/sign-up"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#17131c] shadow-[0_16px_50px_rgba(255,255,255,.11)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f6f2f8]"
              >
                Become an Affiliate
                <ArrowIcon />
              </Link>

              <a
                href="#commission"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.11] bg-white/[0.025] px-7 text-sm font-semibold text-white/72 transition hover:border-white/20 hover:bg-white/[0.055] hover:text-white"
              >
                See commission tiers
              </a>
            </div>

            <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.18em] text-white/25">
              Last updated 2026-06-16
            </p>
          </div>

          {/* Hero metrics */}
          <div className="mx-auto mt-16 max-w-[1040px]">
            <div className="grid overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#08090d]/80 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:grid-cols-4">
              {[
                ["11%", "Maximum new-sale commission"],
                ["7%", "Repeat customer commission"],
                ["$100", "Minimum withdrawal"],
                ["24–48h", "Withdrawal approval"],
              ].map(([value, label], index) => (
                <div
                  key={value}
                  className={`relative px-5 py-7 text-center ${
                    index < 3 ? "border-b border-white/[0.07] sm:border-b-0 sm:border-r" : ""
                  }`}
                >
                  <div className="text-[27px] font-black tracking-[-0.05em] text-white sm:text-[30px]">
                    {value}
                  </div>
                  <div className="mx-auto mt-1 max-w-[150px] text-[10px] leading-4 text-white/35">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <div className="mx-auto max-w-[1120px] px-5 pb-24 sm:px-7 lg:px-10">
        {/* 01 HOW IT WORKS */}
        <section className="border-t border-white/[0.08] py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
            <div>
              <SectionLabel number="01" eyebrow="The program" />
              <h2 className="max-w-[220px] text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                How the program works
              </h2>
            </div>

            <div>
              <p className="max-w-[760px] text-[15px] leading-7 text-white/58 sm:text-[17px] sm:leading-8">
                BlackProp runs a commission-based affiliate program that has
                operated since 2021. You receive a unique referral link from
                the dashboard, share it with your audience, and earn a
                percentage of every qualifying sale made through your link or
                code.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item.number}
                    className="group relative overflow-hidden rounded-[22px] border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#9e5aff]/20 hover:bg-[#9e5aff]/[0.035]"
                  >
                    <div className="absolute right-4 top-3 font-mono text-[9px] font-bold tracking-[0.2em] text-white/15">
                      {item.number}
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[13px] leading-6 text-white/42">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02 COMMISSION */}
        <section
          id="commission"
          className="scroll-mt-8 border-t border-white/[0.08] py-16 sm:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
            <div>
              <SectionLabel number="02" eyebrow="Earn more" />
              <h2 className="max-w-[230px] text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                Tiered commission on new sales
              </h2>
              <p className="mt-4 max-w-[230px] text-sm leading-6 text-white/35">
                Your new-customer commission increases as your referral volume
                grows.
              </p>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                {commissionTiers.map((tier, index) => (
                  <div
                    key={tier.range}
                    className={`relative overflow-hidden rounded-[24px] border p-6 transition ${
                      index === 2
                        ? "border-[#9e5aff]/30 bg-gradient-to-b from-[#9e5aff]/[0.10] to-white/[0.025] shadow-[0_20px_60px_rgba(126,55,190,.13)]"
                        : "border-white/[0.08] bg-white/[0.025]"
                    }`}
                  >
                    {index === 2 && (
                      <span className="absolute right-4 top-4 rounded-full bg-[#9e5aff]/15 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.16em] text-[#c79bff]">
                        Highest tier
                      </span>
                    )}

                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/30">
                      {tier.label}
                    </div>
                    <div className="mt-5 text-4xl font-black tracking-[-0.06em] text-white">
                      {tier.rate}
                    </div>
                    <div className="mt-1 text-xs text-white/35">
                      on new sales
                    </div>
                    <div className="mt-7 border-t border-white/[0.07] pt-4">
                      <span className="text-sm font-bold text-white/75">
                        {tier.range}
                      </span>{" "}
                      <span className="text-sm text-white/35">
                        {tier.referrals}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[22px] border border-[#9e5aff]/15 bg-[#9e5aff]/[0.045] p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#9e5aff]/10 text-xs font-black text-[#c79bff]">
                    11%
                  </div>
                  <p className="text-sm leading-6 text-white/52">
                    Reach{" "}
                    <strong className="text-white">100 referrals</strong> and
                    you earn{" "}
                    <strong className="text-[#c69aff]">11%</strong> on every
                    new sale going forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 LIFETIME */}
        <section className="border-t border-white/[0.08] py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
            <div>
              <SectionLabel number="03" eyebrow="Repeat customers" />
              <h2 className="max-w-[230px] text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                7% lifetime commission
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#120d19] via-[#090a0e] to-[#070809] p-7 sm:p-10">
              <div className="absolute right-[-60px] top-[-100px] h-[260px] w-[260px] rounded-full bg-[#9e5aff]/10 blur-[80px]" />
              <div className="relative">
                <div className="flex flex-wrap items-end gap-5">
                  <div className="text-6xl font-black tracking-[-0.07em] text-white sm:text-8xl">
                    7%
                  </div>
                  <div className="pb-2 text-sm text-white/38">
                    on qualifying repeat<br />
                    customer sales
                  </div>
                </div>

                <div className="mt-8 h-px bg-white/[0.07]" />

                <p className="mt-7 max-w-[700px] text-[15px] leading-7 text-white/55 sm:text-[17px] sm:leading-8">
                  You earn commission for every new customer you bring to
                  BlackProp, and the program also rewards repeat customers.
                  When you refer someone who previously purchased an
                  evaluation, you receive a flat{" "}
                  <strong className="text-white">7% commission</strong> on the
                  sale, regardless of your tier status.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 WITHDRAWALS */}
        <section className="border-t border-white/[0.08] py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
            <div>
              <SectionLabel number="04" eyebrow="Get paid" />
              <h2 className="max-w-[230px] text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                Withdrawals
              </h2>
            </div>

            <div>
              <p className="max-w-[740px] text-[15px] leading-7 text-white/55 sm:text-[17px] sm:leading-8">
                Two requirements must be met before you can withdraw
                commissions.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a96bff]">
                    Requirement 01
                  </span>
                  <h3 className="mt-4 text-lg font-bold">Complete KYC</h3>
                  <p className="mt-2 text-sm leading-6 text-white/40">
                    Complete KYC (Know Your Customer) verification before
                    requesting a commission withdrawal.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a96bff]">
                    Requirement 02
                  </span>
                  <h3 className="mt-4 text-lg font-bold">$100 threshold</h3>
                  <p className="mt-2 text-sm leading-6 text-white/40">
                    Reach the $100 minimum withdrawal threshold before the
                    withdrawal button activates.
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-4 rounded-[24px] border border-white/[0.08] bg-[#090a0d] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div>
                  <div className="text-sm font-bold text-white">
                    Approval time
                  </div>
                  <div className="mt-1 text-sm text-white/38">
                    Withdrawal requests are approved within 24 to 48 hours.
                  </div>
                </div>
                <div className="shrink-0 rounded-full border border-[#9e5aff]/15 bg-[#9e5aff]/[0.06] px-4 py-2 text-xs font-bold text-[#c79bff]">
                  No withdrawal caps
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 FAQ */}
        <section className="border-t border-white/[0.08] py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
            <div>
              <SectionLabel number="05" eyebrow="Need to know" />
              <h2 className="max-w-[230px] text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  open={index === 0}
                  className="group overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.025] transition hover:border-white/[0.14]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-sm font-bold text-white sm:px-6 sm:py-6 sm:text-base [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/[0.09] text-white/40 transition duration-300 group-open:rotate-45 group-open:border-[#9e5aff]/25 group-open:text-[#c79bff]">
                      <span className="text-xl font-light leading-none">+</span>
                    </span>
                  </summary>
                  <div className="border-t border-white/[0.07] px-5 pb-6 pt-4 text-sm leading-7 text-white/45 sm:px-6">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-[32px] border border-[#9e5aff]/20 bg-gradient-to-br from-[#171020] via-[#0c0b10] to-[#070809] px-6 py-14 text-center shadow-[0_30px_100px_rgba(0,0,0,.35)] sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-[-190px] h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-[#9e5aff]/12 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#6e31b4]/10 blur-[110px]" />

          <div className="relative mx-auto max-w-[700px]">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#17131c] shadow-[0_10px_35px_rgba(255,255,255,.08)]">
              <BPMark width={21} height={27} color="#17131c" />
            </div>

            <div className="mt-6 text-[10px] font-black uppercase tracking-[0.24em] text-[#b984ff]">
              BlackProp Affiliates
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-5xl">
              Ready to build with BlackProp?
            </h2>

            <p className="mx-auto mt-5 max-w-[570px] text-sm leading-7 text-white/42 sm:text-base">
              Get your unique referral link through the dashboard and start
              sharing BlackProp with your audience.
            </p>

            <Link
              href="https://blackpropfundingdashboard.propaccount.com/en/sign-up"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#17131c] shadow-[0_12px_35px_rgba(255,255,255,.1)] transition duration-300 hover:-translate-y-0.5"
            >
              Join BlackProp Affiliates
              <ArrowIcon />
            </Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-5 py-8 text-center sm:px-7 md:flex-row md:items-center md:justify-between md:text-left lg:px-10">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <BPMark width={15} height={20} />
            <span className="text-sm font-bold">BlackProp</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
            BlackProp Affiliates · Last updated 2026-06-16
          </p>
        </div>
      </footer>
    </main>
  );
}
