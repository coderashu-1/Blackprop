import Link from "next/link";

/* =========================================================
   BLACKPROP SVG LOGO
========================================================= */

function BPMark({
  width = 58,
  height = 74,
  color = "#D4AF37",
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


const tradingLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Challenges", href: "#challenges" },
  { label: "Trader Stories", href: "#testimonials" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "About BlackProp", href: "#about" },
  { label: "Affiliate", href: "#affiliate" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
  { label: "Support", href: "#support" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Refund Policy", href: "#refund-policy" },
  { label: "Risk Disclosure", href: "#risk-disclosure" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Discord", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "YouTube", href: "#" },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M4 10h12M11.5 5.5 16 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FooterLogo() {
  return (
    <Link
      href="/"
      aria-label="BlackProp home"
      className="group inline-flex items-center gap-3.5"
    >
      <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-[15px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,.05),0_10px_28px_rgba(0,0,0,.22)] transition duration-300 group-hover:border-[#D4AF37]/35 group-hover:bg-[#D4AF37]/[0.08]">
        <span className="pointer-events-none absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-[#F0D16A]/65 to-transparent" />

        <BPMark
          width={21}
          height={27}
          color="#D4AF37"
          className="drop-shadow-[0_0_10px_rgba(212,175,55,.18)]"
        />
      </span>

      <span>
        <span className="block text-[21px] font-black uppercase leading-none tracking-[-0.055em] text-white">
          BLACK
          <span className="text-[#D4AF37]">PROP</span>
        </span>

        <span className="mt-1 block text-[6px] font-bold uppercase tracking-[0.24em] text-white/25">
          TRADER CAPITAL
        </span>
      </span>
    </Link>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/75">
        {title}
      </p>

      <div className="mt-5 flex flex-col gap-3.5">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group flex w-fit items-center gap-1.5 text-[12px] font-medium text-white/35 transition-colors duration-200 hover:text-white"
          >
            {link.label}

            <span className="translate-x-[-3px] text-[#D4AF37] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100">
              <ArrowIcon />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#030303]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-56 top-20 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/[0.035] blur-[160px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-white/[0.012] blur-[150px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 78%)",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            TOP CTA
        ====================================================== */}

        <div className="border-b border-white/[0.06] py-14 sm:flex sm:items-center sm:justify-between sm:py-16">
          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#D4AF37]">
              Ready when you are
            </p>

            <h2 className="mt-3 max-w-[590px] text-[2rem] font-black leading-[1] tracking-[-0.05em] text-white sm:text-[2.7rem]">
              Your next trading challenge
              <span className="text-white/35">
                {" "}
                starts here.
              </span>
            </h2>
          </div>

          <Link
            href="#challenges"
            className="gold-button group mt-7 inline-flex h-12 items-center justify-center gap-3 rounded-xl px-6 text-[10px] font-black text-black sm:mt-0"
          >
            Get Funded

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.6fr_.8fr_.8fr_.8fr_.9fr] lg:gap-8">
          {/* BRAND */}
          <div className="max-w-[330px]">
            <FooterLogo />

            <p className="mt-6 text-sm leading-7 text-white/32">
              A modern trading evaluation experience built for disciplined
              traders who want clarity, performance insights and access to
              simulated capital opportunities.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.13em] text-white/35">
                Forex
              </span>

              <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.13em] text-white/35">
                Futures
              </span>

              <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.13em] text-white/35">
                Crypto
              </span>
            </div>
          </div>

          <FooterColumn
            title="Trading"
            links={tradingLinks}
          />

          <FooterColumn
            title="Company"
            links={companyLinks}
          />

          <FooterColumn
            title="Socials"
            links={socialLinks}
          />

          <FooterColumn
            title="Legal"
            links={legalLinks}
          />
        </div>

        {/* =====================================================
            PAYMENT / PLATFORM BAR
        ====================================================== */}

        <div className="flex flex-col gap-5 border-t border-white/[0.06] py-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[7px] font-black uppercase tracking-[0.17em] text-white/22">
              BlackProp
            </p>

            <p className="mt-1.5 text-[10px] font-medium text-white/35">
              Premium trading experience
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Secure",
              "Global",
              "Trader Focused",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[7px] font-black uppercase tracking-[0.12em] text-white/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <div className="border-t border-white/[0.06] py-9">
          <div className="max-w-[1180px] text-[9px] leading-[1.9] text-white/22">
            <p>
              <span className="font-bold text-white/32">
                Disclaimer:
              </span>{" "}
              Information displayed on this website is provided for general
              informational and educational purposes only and should not be
              considered financial, investment, legal or tax advice.
            </p>

            <p className="mt-4">
              Any simulated or evaluation-based trading services offered by
              BlackProp should be clearly distinguished from live brokerage or
              investment services. Simulated results and hypothetical
              performance have inherent limitations and do not guarantee future
              results.
            </p>

            <p className="mt-4">
              Trading involves risk. Users are responsible for understanding
              applicable program rules, eligibility requirements and local
              restrictions before participating.
            </p>

            <p className="mt-4 text-[#D4AF37]/35">
              Replace this placeholder disclosure with BlackProp&apos;s final
              counsel-approved legal language, entity information and
              jurisdiction-specific disclosures before public launch.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="flex flex-col gap-5 border-t border-white/[0.06] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] text-white/25">
            © 2026 BlackProp. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { label: "Privacy", href: "#privacy" },
              { label: "Terms", href: "#terms" },
              {
                label: "Risk Disclosure",
                href: "#risk-disclosure",
              },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[9px] text-white/25 transition hover:text-white/60"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* =====================================================
            LARGE BRAND WORDMARK
        ====================================================== */}

        <div className="relative overflow-hidden border-t border-white/[0.05] pb-3 pt-6">
          <div className="select-none text-center text-[18vw] font-black leading-[0.75] tracking-[-0.09em] text-white/[0.025] sm:text-[14vw]">
            BLACKPROP
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[62%] h-24 w-[55%] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[60px]" />
        </div>
      </div>
    </footer>
  );
}