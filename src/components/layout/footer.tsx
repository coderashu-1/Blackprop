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

/* =========================================================
   LINKS
========================================================= */

const tradingLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Challenges", href: "/#challenges" },
  { label: "Trader Stories", href: "/#testimonials" },
  { label: "Dashboard", href: "/#dashboard" },
  { label: "FAQ", href: "/#faq" },
];

const companyLinks = [
  { label: "About BlackProp", href: "/#about" },
  { label: "Affiliate", href: "/#affiliate" },
  { label: "Community", href: "/#community" },
  { label: "Contact", href: "/#contact" },
  { label: "Support", href: "/#support" },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "https://dashboardanalytix.com/privacy-policy-3/",
  },
  {
    label: "Cookie Policy",
    href: "https://dashboardanalytix.com/cookie-policy/",
  },
  {
    label: "Refund Policy",
    href: "https://dashboardanalytix.com/purchases-and-refunds/",
  },
  {
    label: "Terms & Conditions",
    href: "https://dashboardanalytix.com/client-terms-and-policies/",
  },
];

const socialLinks = [
  {
    label: "Discord",
    href: "https://discord.gg/AXU9YEd4T",
  },
  {
    label: "Telegram",
    href: "https://t.me/+r5HfFcX32Tw4M2Y1",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/blackpropcom/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCvdMQKZnAI2-EmuG9a_MycA",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/Blackpropcom",
  },
];

/* =========================================================
   ARROW
========================================================= */

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

/* =========================================================
   LOGO
========================================================= */

function FooterLogo() {
  return (
    <Link
      href="/"
      aria-label="BlackProp home"
      className="group inline-flex items-center gap-3.5"
    >
      <span className="grid h-12 w-12 place-items-center rounded-[15px] border border-[#8f4bc1]/30 bg-[#18101f] shadow-[inset_0_1px_0_rgba(255,255,255,.04),0_10px_28px_rgba(0,0,0,.20)] transition duration-300 group-hover:border-[#be6cff]/45 group-hover:bg-[#21142c]">
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

/* =========================================================
   FOOTER COLUMN
========================================================= */

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
        {links.map((link) => {
          const external = link.href.startsWith("http");

          return (
            <Link
              key={link.label}
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex w-fit items-center gap-1.5 text-[14px] font-medium text-white/48 transition-colors duration-200 hover:text-white sm:text-[15px]"
            >
              {link.label}

              <span className="translate-x-[-3px] text-[#be6cff] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowIcon />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#6f36a8]/20 bg-[#05070b]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-56 top-20 h-[520px] w-[520px] rounded-full bg-[#8f28f3]/[0.09] blur-[160px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#b36cff]/[0.035] blur-[150px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(190,108,255,.018) 1px, transparent 1px), linear-gradient(90deg, rgba(190,108,255,.018) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "linear-gradient(to bottom, black, transparent 78%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[5%] h-[340px] w-[900px] max-w-[92vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(143,40,243,.08)_0%,rgba(143,40,243,.025)_42%,transparent_72%)] blur-[50px]" />

      <div className="pointer-events-none absolute bottom-[-80px] left-1/2 h-[260px] w-[900px] max-w-[94vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(143,40,243,.12)_0%,rgba(112,42,184,.05)_45%,transparent_74%)] blur-[60px]" />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:grid-cols-3 sm:py-16 lg:grid-cols-[1.6fr_.8fr_.8fr_.8fr_.9fr] lg:gap-8 lg:py-20">
          {/* BRAND */}

          <div className="col-span-2 max-w-[420px] sm:col-span-3 lg:col-span-1 lg:max-w-[350px]">
            <FooterLogo />

            <p className="mt-5 text-[15px] leading-7 text-white/48 sm:mt-6 sm:text-base">
              A modern trading evaluation experience built for disciplined
              traders who want clarity, performance insights and access to
              simulated capital opportunities.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#74439a]/24 bg-[#120f18] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.11em] text-white/48 sm:text-[11px]">
                Forex
              </span>

              <span className="rounded-full border border-[#74439a]/24 bg-[#120f18] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.11em] text-white/48 sm:text-[11px]">
                Futures
              </span>

              <span className="rounded-full border border-[#74439a]/24 bg-[#120f18] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.11em] text-white/48 sm:text-[11px]">
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
            PLATFORM BAR
        ====================================================== */}

        <div className="flex flex-col gap-5 border-t border-white/[0.07] py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/42 sm:text-[12px]">
              BlackProp
            </p>

            <p className="mt-1.5 text-[13px] font-medium text-white/50 sm:text-[14px]">
              Premium trading experience
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Secure", "Global", "Trader Focused"].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-[#74439a]/24 bg-[#120f18] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.10em] text-white/45 sm:text-[11px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <div className="border-t border-white/[0.07] py-7 sm:py-9">
          <div className="max-w-[1180px] text-[12px] font-medium leading-6 text-white/42 sm:text-[13px] sm:leading-7">
            <p>
              <span className="font-bold text-white/62">
                Legal Disclosure:
              </span>{" "}
              All information provided on this site is intended solely for
              educational purposes related to trading on financial markets and
              does not serve in any way as a specific investment recommendation,
              business recommendation, investment opportunity analysis or
              similar general recommendation regarding the trading of investment
              instruments. BlackProp only provides services of simulated trading
              and educational tools. The information on this site is not directed
              at residents in any country or jurisdiction where such distribution
              or use would be contrary to local laws or regulations. BlackProp
              does not act as a broker and does not accept any deposits. The
              offered technical solution for the BlackProp platforms and data
              feed is powered by liquidity providers.
            </p>

            <p className="mt-4">
              BlackProp is an affiliate of Prop Account, LLC. All funding
              assessments are provided by Prop Account, LLC and all assessment
              fees are paid to Prop Account, LLC. If you qualify for a Funded
              Account, you will be required to enter into a Trader Agreement
              with Prop Account LLC. Neither Prop Account, LLC nor Prop Account
              LLC provides any trading education or other services.
            </p>

            <p className="mt-4">
              BlackProp provides access to simulated trading programs designed
              solely for the evaluation of trading proficiency and
              risk-management skills. Trading in Futures, derivatives, and
              digital assets markets involves substantial risk of loss. Past
              performance is not indicative of future results.
            </p>

            <p className="mt-4">
              All subscription fees paid are strictly for Evaluation purposes
              and for access to our evaluation services.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="flex flex-col gap-5 border-t border-white/[0.07] py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
          <p className="text-[12px] text-white/42 sm:text-[13px]">
            © 2026 BlackProp. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-white/42 transition-colors duration-200 hover:text-[#be6cff] sm:text-[13px]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* =====================================================
            LARGE BRAND WORDMARK
        ====================================================== */}

        <div
          className="
            relative
            block
            overflow-hidden
            border-t
            border-white/[0.06]
            pb-3
            pt-6
            sm:pt-8
          "
        >
          <div
            className="
              select-none
              whitespace-nowrap
              text-center
              text-[11vw]
              font-black
              leading-[0.8]
              tracking-[-0.09em]
              text-white/[0.045]
              sm:text-[14vw]
              lg:text-[13vw]
            "
          >
            BLACKPROP
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[62%] h-24 w-[55%] -translate-x-1/2 rounded-full bg-[#8f28f3]/[0.08] blur-[60px]" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
