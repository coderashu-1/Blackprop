import Link from "next/link";

/* =========================================================
   BLACKPROP SVG LOGO
========================================================= */

function BPMark({
  width = 58,
  height = 74,
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
      shapeRendering="geometricPrecision"
      preserveAspectRatio="xMidYMid meet"
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
  { label: "Discord", href: "https://discord.gg/AXU9YEd4T" },
  { label: "Telegram", href: "https://t.me/+r5HfFcX32Tw4M2Y1" },
  { label: "Instagram", href: "https://www.instagram.com/blackpropcom/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCvdMQKZnAI2-EmuG9a_MycA" },
  { label: "X / Twitter", href: "https://x.com/Blackpropcom" },
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
      <span className="grid h-12 w-12 place-items-center rounded-[15px] border border-white/[0.10] bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,.04),0_10px_28px_rgba(0,0,0,.20)] transition duration-300 group-hover:border-white/[0.18] group-hover:bg-white/[0.055]">
        <BPMark
          width={22}
          height={28}
          color="#FFFFFF"
          className="drop-shadow-[0_1px_1px_rgba(0,0,0,.7)]"
        />
      </span>

      <span className="text-[23px] font-bold leading-none tracking-[-0.05em] text-white sm:text-[24px]">
        BlackProp
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
      <p className="text-[12px] font-black uppercase tracking-[0.15em] text-white/78 sm:text-[13px]">
        {title}
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-3.5">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex w-fit items-center gap-1.5 text-[14px] font-medium text-white/48 transition-colors duration-200 hover:text-white sm:text-[15px]"
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

        <div className="border-b border-white/[0.06] py-10 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:py-14 lg:py-16">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#D4AF37] sm:text-[12px]">
              Ready when you are
            </p>

            <h2 className="mt-3 max-w-[650px] text-[2.35rem] font-black leading-[1] tracking-[-0.05em] text-white sm:text-[2.8rem] lg:text-[3rem]">
              Your next trading challenge
              <span className="text-white/35">
                {" "}
                starts here.
              </span>
            </h2>
          </div>

          <Link
            href="#challenges"
            className="gold-button group mt-7 inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl px-7 text-[14px] font-black text-black sm:mt-0 sm:w-auto sm:min-w-[180px] sm:text-[15px]"
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

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-11 sm:grid-cols-3 sm:py-14 lg:grid-cols-[1.6fr_.8fr_.8fr_.8fr_.9fr] lg:gap-8 lg:py-16">
          {/* BRAND */}
          <div className="col-span-2 max-w-[420px] sm:col-span-3 lg:col-span-1 lg:max-w-[350px]">
            <FooterLogo />

            <p className="mt-5 text-[15px] leading-7 text-white/48 sm:mt-6 sm:text-base">
              A modern trading evaluation experience built for disciplined
              traders who want clarity, performance insights and access to
              simulated capital opportunities.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.11em] text-white/48 sm:text-[11px]">
                Forex
              </span>

              <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.11em] text-white/48 sm:text-[11px]">
                Futures
              </span>

              <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.11em] text-white/48 sm:text-[11px]">
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

        <div className="flex flex-col gap-5 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/42 sm:text-[12px]">
              BlackProp
            </p>

            <p className="mt-1.5 text-[13px] font-medium text-white/50 sm:text-[14px]">
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
                className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.10em] text-white/45 sm:text-[11px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <div className="border-t border-white/[0.06] py-7 sm:py-9">
          <div className="max-w-[1180px] text-[12px] font-medium leading-6 text-white/42 sm:text-[13px] sm:leading-7">
            <p>
              <span className="font-bold text-white/62">
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

            <p className="mt-4 text-[#D4AF37]/58">
              Replace this placeholder disclosure with BlackProp&apos;s final
              counsel-approved legal language, entity information and
              jurisdiction-specific disclosures before public launch.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="flex flex-col gap-5 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
          <p className="text-[12px] text-white/42 sm:text-[13px]">
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
                className="text-[12px] text-white/42 transition hover:text-white/70 sm:text-[13px]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* =====================================================
            LARGE BRAND WORDMARK
        ====================================================== */}

        <div className="relative hidden overflow-hidden border-t border-white/[0.05] pb-3 pt-6 sm:block">
          <div className="select-none text-center text-[18vw] font-black leading-[0.75] tracking-[-0.09em] text-white/[0.025] sm:text-[14vw]">
            BLACKPROP
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[62%] h-24 w-[55%] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[60px]" />
        </div>
      </div>
    </footer>
  );
}