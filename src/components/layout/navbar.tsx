"use client";

import { useEffect, useRef, useState } from "react";

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

type Market = "Forex" | "Futures" | "Crypto";

const markets: Market[] = ["Forex", "Futures", "Crypto"];

const navLinks = [
  { label: "Trading", href: "#challenges" },
  { label: "Affiliate", href: "#affiliate" },
  { label: "Competition", href: "#competition" },
  { label: "Company", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <rect
        x="5.25"
        y="5.25"
        width="7"
        height="7"
        rx="1.25"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path
        d="M10.25 5.25V4A1.25 1.25 0 0 0 9 2.75H4A1.25 1.25 0 0 0 2.75 4v5A1.25 1.25 0 0 0 4 10.25h1.25"
        stroke="currentColor"
        strokeWidth="1.35"
      />
    </svg>
  );
}

function MarketIcon({ market }: { market: Market }) {
  if (market === "Forex") {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 shrink-0"
      >
        <path
          d="M4 6.2h10.5M11.7 3.5l2.8 2.7-2.8 2.7M16 13.8H5.5M8.3 11.1l-2.8 2.7 2.8 2.7"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (market === "Futures") {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 shrink-0"
      >
        <path
          d="M3.5 15.5L7.3 11l3 2.2 5.9-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.8 6.2h3.4v3.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-[11px] font-black"
    >
      ₿
    </span>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden="true">
      <span
        className={`absolute left-0 top-[4px] h-[1.5px] w-6 rounded-full bg-current transition duration-300 ${
          open ? "translate-y-[6px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[10px] h-[1.5px] w-6 rounded-full bg-current transition duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[16px] h-[1.5px] w-6 rounded-full bg-current transition duration-300 ${
          open ? "-translate-y-[6px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  async function copyPromoCode() {
    try {
      await navigator.clipboard.writeText("BLACK40");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <header
      className="
        relative
        z-50
        h-[54px]
        bg-[#020304]
        text-white
        sm:h-[58px]
        lg:h-[56px]
      "
    >
      {/* TOP MARKET / OFFER BAR */}
      <div className="relative h-full border-b border-white/[0.07] bg-[#020304]">
        <div
          className="
            mx-auto
            flex
            h-full
            w-full
            items-center
            justify-between
            gap-4
            px-4
            sm:px-6
            lg:px-5
            xl:px-6
          "
        >
          {/* LEFT */}
          <div className="flex min-w-0 items-center gap-3">
            <span className="hidden text-[10px] font-black uppercase tracking-[0.28em] text-white/52 md:block">
              Markets
            </span>

            <div className="flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-[#1a1c21] px-3 py-1.5">
              {markets.map((market) => (
                <span
                  key={market}
                  className="flex items-center gap-1.5 whitespace-nowrap text-[10px] font-semibold text-white/85 sm:text-[11px]"
                >
                  <span className="text-white/45">
                    <MarketIcon market={market} />
                  </span>
                  {market}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden items-center gap-4 sm:flex">
            {/* <span className="rounded-full border border-[#9e5aff]/55 bg-[#34154f] px-4 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#c798ff]">
              Launch Offer
            </span> */}

            <span className="hidden text-[10px] font-medium text-white md:inline lg:text-[14px]">
              Start your BlackProp journey with{" "}
              <strong className="font-black text-white">30% OFF</strong>
            </span>

            <button
              type="button"
              onClick={copyPromoCode}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#9e5aff]/45 bg-[#15111b] px-3.5 py-1.5 text-[9px] font-black tracking-[0.14em] text-[#d7b0ff]"
            >
              {copied ? "COPIED" : "BLACK30"}
              <CopyIcon />
            </button>
          </div>

          <button
            type="button"
            onClick={copyPromoCode}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#9e5aff]/35 bg-[#1d1428] px-3 py-1.5 text-[9px] font-black tracking-[0.1em] text-[#cda6ff] sm:hidden"
          >
            {copied ? "COPIED" : "BLACK30"}
            <CopyIcon />
          </button>
        </div>
      </div>

      {/* FLOATING NAV - overlays the Hero exactly like reference */}
      <nav
        ref={navRef}
        className="
          absolute
          left-1/2
          top-[calc(100%+18px)]
          z-50
          flex
          h-[58px]
          w-[calc(100%-32px)]
          -translate-x-1/2
          items-center
          justify-between
          rounded-full
          border
          border-white/[0.12]
          bg-[#181021]/94
          px-5
          shadow-[0_16px_50px_rgba(20,5,36,.38),inset_0_1px_0_rgba(255,255,255,.035)]
          backdrop-blur-2xl
          sm:w-[88%]
          sm:px-6
          md:w-[84%]
          lg:h-[62px]
          lg:w-[80%]
          lg:px-7
          xl:max-w-[1640px]
        "
      >
        {/* LOGO */}
        <a
          href="#home"
          aria-label="BlackProp home"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <BPMark
            width={30}
            height={38}
            color="#FFFFFF"
            className="shrink-0 transition-opacity duration-300 group-hover:opacity-80 lg:h-[42px] lg:w-[33px]"
          />
          <span className="text-[20px] font-bold tracking-[-0.045em] text-white sm:text-[21px] lg:text-[23px]">
            BlackProp
          </span>
        </a>

        {/* LINKS */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-[12px] font-medium text-white/72 transition hover:bg-white/[0.045] hover:text-white xl:px-4 xl:text-[13px]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* RIGHT */}
        <div className="ml-auto hidden items-center gap-5 sm:flex">
          <a
            href="#login"
            className="text-[12px] font-medium text-white/82 transition hover:text-white lg:text-[13px]"
          >
            Login
          </a>

          <a
            href="#challenges"
            className="inline-flex min-h-[36px] items-center justify-center rounded-full bg-white px-5 text-[12px] font-bold text-[#17131c] shadow-[0_6px_20px_rgba(255,255,255,.13)] transition hover:-translate-y-0.5 hover:bg-[#f5f1f8] lg:min-h-[38px] lg:px-6 lg:text-[13px]"
          >
            Get Funded
          </a>
        </div>

        {/* MOBILE MENU */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileOpen((current) => !current)}
          className="ml-auto grid h-9 w-9 place-items-center rounded-full border border-white/[0.10] bg-white/[0.04] text-white sm:ml-4 lg:hidden"
        >
          <MenuIcon open={mobileOpen} />
        </button>

        {mobileOpen && (
          <div className="absolute inset-x-0 top-[calc(100%+10px)] overflow-hidden rounded-[22px] border border-white/[0.10] bg-[#0d0d13]/98 p-4 shadow-[0_30px_90px_rgba(0,0,0,.72)] backdrop-blur-2xl lg:hidden">
            <div className="grid gap-1">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-[14px] font-semibold text-white/78 transition hover:bg-[#271531] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/[0.08] pt-4">
              <a
                href="#login"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-white/[0.10] px-4 py-3 text-center text-[13px] font-semibold text-white/80"
              >
                Login
              </a>
              <a
                href="#challenges"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-white px-4 py-3 text-center text-[13px] font-bold text-[#17131c]"
              >
                Get Funded
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
