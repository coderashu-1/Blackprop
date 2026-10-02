import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const pillars = [
  {
    number: "01",
    title: "Setup",
    text: "Choose the challenge, the account size and the trading platform that fits your approach.",
  },
  {
    number: "02",
    title: "Execution",
    text: "Trade within the published rules and demonstrate controlled, repeatable execution.",
  },
  {
    number: "03",
    title: "Progression",
    text: "Meet the objectives and move through the program. Rewards can be received by crypto or Rise.",
  },
];

const facts = [
  ["$5K–$200K", "Account sizes"],
  ["3", "Trading models"],
  ["150+", "Available symbols"],
  ["80%", "Standard reward split"],
];

function BPMark({
  width = 36,
  height = 46,
  color = "#FFFFFF",
}: {
  width?: number | string;
  height?: number | string;
  color?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 290 366"
      fill="none"
      color={color}
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

export default function CompanyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020304] text-white selection:bg-[#9e5aff]/30">
      {/* Uses the existing BlackProp navbar — no duplicate navbar */}
      <Navbar />

      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-[-360px] h-[720px] w-[1000px] -translate-x-1/2 rounded-full bg-[#7c3dcc]/10 blur-[150px]" />
        <div className="absolute right-[-280px] top-[900px] h-[620px] w-[620px] rounded-full bg-[#9e5aff]/7 blur-[150px]" />
        <div className="absolute left-[-320px] top-[1500px] h-[620px] w-[620px] rounded-full bg-[#5e27a0]/8 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_50%_0%,rgba(158,90,255,.14),transparent_60%)]" />

        <div className="relative mx-auto max-w-[1240px] px-5 pb-20 pt-28 sm:px-7 sm:pb-24 sm:pt-32 lg:px-10 lg:pb-28 lg:pt-36">
          <div className="mx-auto max-w-[960px] text-center">
            <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-[#9e5aff]/20 bg-[#9e5aff]/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#c79bff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a96bff] shadow-[0_0_12px_#9e5aff]" />
              BlackProp · Company
            </div>

            <h1 className="text-balance text-[46px] font-black leading-[0.96] tracking-[-0.065em] sm:text-[68px] lg:text-[86px]">
              Built around a{" "}
              <span className="bg-gradient-to-r from-white via-[#dfcaf4] to-[#a96bff] bg-clip-text text-transparent">
                clear path.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[790px] text-[15px] leading-7 text-white/50 sm:text-[18px] sm:leading-8">
              BlackProp is a prop trading firm for traders who want a clear
              evaluation and a straightforward path to simulated capital.
            </p>

            <p className="mx-auto mt-4 max-w-[680px] text-[13px] leading-6 text-white/30 sm:text-sm">
              You prove your process. We back the capital. Rules are published
              before you start, performance is tracked in one dashboard, and
              rewards follow the program you choose.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://blackpropfundingdashboard.propaccount.com/en/sign-up"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#17131c] shadow-[0_16px_50px_rgba(255,255,255,.11)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f6f2f8]"
              >
                Start Trading
                <ArrowIcon />
              </Link>

              <Link
                href="/affiliate"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.11] bg-white/[0.025] px-7 text-sm font-semibold text-white/72 transition hover:border-white/20 hover:bg-white/[0.055] hover:text-white"
              >
                Become an Affiliate
              </Link>
            </div>
          </div>

          {/* Company facts */}
          <div className="mx-auto mt-16 max-w-[1040px]">
            <div className="grid overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#08090d]/80 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:grid-cols-4">
              {facts.map(([value, label], index) => (
                <div
                  key={label}
                  className={`px-5 py-7 text-center ${
                    index < 3
                      ? "border-b border-white/[0.07] sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div className="text-[26px] font-black tracking-[-0.05em] text-white sm:text-[30px]">
                    {value}
                  </div>
                  <div className="mt-1 text-[10px] text-white/35">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1120px] px-5 pb-24 sm:px-7 lg:px-10">
        {/* WHAT WE DO */}
        <section className="border-t border-white/[0.08] py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
            <div>
              <SectionLabel number="01" eyebrow="What we do" />
              <h2 className="max-w-[240px] text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                A simple evaluation model.
              </h2>
            </div>

            <div>
              <p className="max-w-[760px] text-[15px] leading-7 text-white/55 sm:text-[17px] sm:leading-8">
                BlackProp runs simulated trading evaluations across forex,
                futures and crypto. Traders pick a model, an account size and a
                platform, then trade inside the stated limits.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["Models", "Instant · 1 Step · 2 Steps"],
                  ["Platforms", "DXTrade · MTR · cTrader · GooeyPro"],
                  ["Symbols", "More than 150 symbols"],
                  ["Account sizes", "$5,000 · $10,000 · $25,000 · $50,000 · $100,000 · $200,000"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[22px] border border-white/[0.07] bg-white/[0.025] p-5"
                  >
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#a96bff]">
                      {label}
                    </div>
                    <div className="mt-3 text-sm font-semibold leading-6 text-white/75">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-[24px] border border-[#9e5aff]/15 bg-[#9e5aff]/[0.04] p-6">
                <div className="grid gap-5 sm:grid-cols-4">
                  {[
                    ["10%", "Typical phase-one target"],
                    ["5%", "Maximum daily loss"],
                    ["6%", "Maximum loss"],
                    ["30 days", "Inactivity period"],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <div className="text-2xl font-black tracking-[-0.05em] text-white">
                        {value}
                      </div>
                      <div className="mt-1 text-[10px] leading-4 text-white/35">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-white/[0.07] pt-5 text-sm leading-6 text-white/42">
                  There is no maximum trading period. The standard reward split
                  is <strong className="text-white/75">80%</strong>.
                </div>
              </div>

              <p className="mt-6 max-w-[760px] text-sm leading-7 text-white/40">
                You are not liable for trading losses on the evaluation.
                BlackProp does not act as a broker and does not accept
                deposits.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-t border-white/[0.08] py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
            <div>
              <SectionLabel number="02" eyebrow="The process" />
              <h2 className="max-w-[230px] text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                How it works
              </h2>
              <p className="mt-4 max-w-[230px] text-sm leading-6 text-white/35">
                One straightforward path from setup to reward.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.number}
                  className={`relative overflow-hidden rounded-[25px] border p-6 sm:p-7 ${
                    index === 1
                      ? "border-[#9e5aff]/25 bg-gradient-to-b from-[#9e5aff]/[0.08] to-white/[0.025]"
                      : "border-white/[0.08] bg-white/[0.025]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#a96bff]">
                      {pillar.number}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9e5aff] shadow-[0_0_10px_#9e5aff]" />
                  </div>
                  <h3 className="mt-9 text-xl font-black tracking-[-0.03em]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-white/40">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="border-t border-white/[0.08] py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
            <div>
              <SectionLabel number="03" eyebrow="Our approach" />
              <h2 className="max-w-[230px] text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                How we work
              </h2>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Clear rules", "Rules are written in plain language and published before you start."],
                  ["One workspace", "The dashboard is built for account monitoring, performance and reward tracking."],
                  ["Real support", "Support is available by live chat and email, with Discord for announcements and market discussion."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-6"
                  >
                    <CheckIcon />
                    <h3 className="mt-5 text-base font-bold">{title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-white/40">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#110c17] via-[#090a0d] to-[#070809] p-7 sm:p-9">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a96bff]">
                      The BlackProp experience
                    </div>
                    <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-white/48 sm:text-[17px] sm:leading-8">
                      BlackProp is built for traders in supported regions who
                      want one experience: the same rules, the same workspace,
                      and the same path from evaluation to reward.
                    </p>
                  </div>
                  <div className="hidden shrink-0 sm:block">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl border border-[#9e5aff]/20 bg-[#9e5aff]/[0.06]">
                      <BPMark width={19} height={25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-[32px] border border-[#9e5aff]/20 bg-gradient-to-br from-[#171020] via-[#0c0b10] to-[#070809] px-6 py-14 text-center shadow-[0_30px_100px_rgba(0,0,0,.35)] sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-[-190px] h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-[#9e5aff]/12 blur-[120px]" />
          <div className="relative mx-auto max-w-[700px]">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#17131c]">
              <BPMark width={21} height={27} color="#17131c" />
            </div>

            <div className="mt-6 text-[10px] font-black uppercase tracking-[0.24em] text-[#b984ff]">
              BlackProp
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-5xl">
              Your process. Your path.
            </h2>

            <p className="mx-auto mt-5 max-w-[570px] text-sm leading-7 text-white/42 sm:text-base">
              Choose your evaluation, trade the rules and work toward your
              reward.
            </p>

            <Link
              href="https://blackpropfundingdashboard.propaccount.com/en/sign-up"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#17131c] shadow-[0_12px_35px_rgba(255,255,255,.1)] transition duration-300 hover:-translate-y-0.5"
            >
              Get Funded
              <ArrowIcon />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
