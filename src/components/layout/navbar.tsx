"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/logo";

type DropdownKey = "trading" | "company" | null;
type Market = "Forex" | "Futures" | "Crypto";

const markets: Market[] = ["Forex", "Futures", "Crypto"];

const tradingLinks = [
  {
    label: "How It Works",
    description: "Your path from challenge to funded trader.",
    href: "#how-it-works",
  },
  {
    label: "Challenges",
    description: "Choose the account that matches your trading style.",
    href: "#challenges",
  },
  {
    label: "Rewards",
    description: "Explore rewards, scaling and trader benefits.",
    href: "#rewards",
  },
];

const companyLinks = [
  {
    label: "About BlackProp",
    description: "Learn about our mission and trading ecosystem.",
    href: "#about",
  },
  {
    label: "Contact",
    description: "Talk with the BlackProp support team.",
    href: "#contact",
  },
];

/* =========================================================
   ICONS
========================================================= */

function Chevron({ open = false }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M3.5 6L8 10L12.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
        strokeWidth="1.4"
      />

      <path
        d="M10.25 5.25V4A1.25 1.25 0 0 0 9 2.75H4A1.25 1.25 0 0 0 2.75 4v5A1.25 1.25 0 0 0 4 10.25h1.25"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M4 12L12 4M6.2 4H12v5.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   MARKET ICONS
========================================================= */

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
      className="flex h-4 w-4 shrink-0 items-center justify-center text-[16px] font-black leading-none"
    >
      ₿
    </span>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<DropdownKey>(null);

  const [selectedMarket, setSelectedMarket] =
    useState<Market>("Forex");

  const [copied, setCopied] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  /* =======================================================
     CLOSE DROPDOWN OUTSIDE
  ======================================================= */

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick,
    );

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );

      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  /* =======================================================
     COPY PROMO
  ======================================================= */

  async function copyPromoCode() {
    try {
      await navigator.clipboard.writeText("BLACK40");

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1400);
    } catch {
      setCopied(false);
    }
  }

  function closeMobile() {
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* GOLD AMBIENT */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_50%_-100%,rgba(212,175,55,0.18),transparent_68%)]" />

      {/* =====================================================
          TOP MARKET BAR
      ====================================================== */}

      <div className="relative border-b border-white/[0.06] bg-[#050505]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-10 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* MARKET SWITCHER */}
          <div className="flex items-center gap-2">
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25 xl:block">
              Markets
            </span>

            <div className="flex items-center rounded-xl border border-white/[0.07] bg-white/[0.025] p-1">
              {markets.map((market) => {
                const active =
                  selectedMarket === market;

                return (
                  <button
                    key={market}
                    type="button"
                    onClick={() =>
                      setSelectedMarket(market)
                    }
                    className={`relative flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-300 sm:px-3 ${
                      active
                        ? "bg-[linear-gradient(135deg,#E8C866,#AF8720)] text-[#080808] shadow-[0_5px_18px_rgba(212,175,55,0.16)]"
                        : "text-white/45 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <MarketIcon market={market} />

                    <span>{market}</span>

                    {active && (
                      <span className="absolute inset-x-2 -bottom-[5px] h-px bg-[#F4D77B]/60" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* UTILITY */}
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 md:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[11px] text-white/40">
                Systems Operational
              </span>
            </div>

            <span className="hidden h-4 w-px bg-white/[0.08] md:block" />

            <a
              href="#faq"
              className="text-[11px] font-medium text-white/45 transition hover:text-[#E8C866]"
            >
              Help Center
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          PROMO BAR
      ====================================================== */}

      <div className="relative overflow-hidden border-b border-[#D4AF37]/[0.12] bg-[#090806]/95">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.065),transparent)]" />

        <div className="relative mx-auto flex min-h-9 max-w-[1440px] items-center justify-center gap-2.5 px-4 py-1.5 text-center">
          <span className="hidden rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#E8C866] sm:inline">
            Launch Offer
          </span>

          <span className="text-[11px] text-white/55 sm:text-xs">
            Start your BlackProp journey with{" "}
            <strong className="font-semibold text-white">
              40% OFF
            </strong>
          </span>

          <button
            type="button"
            onClick={copyPromoCode}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-[#E8C866] transition hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.12]"
          >
            {copied ? "COPIED" : "BLACK40"}

            <CopyIcon />
          </button>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <div className="relative border-b border-white/[0.06] bg-[#050505]/90 shadow-[0_16px_55px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <nav
          ref={navRef}
          className="relative mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          {/* LOGO */}
          <div className="flex shrink-0 items-center">
            <Logo />
          </div>

          {/* =================================================
              DESKTOP LINKS
          ================================================= */}

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            {/* TRADING */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "trading"
                      ? null
                      : "trading",
                  )
                }
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                  openDropdown === "trading"
                    ? "bg-white/[0.05] text-white"
                    : "text-white/60 hover:bg-white/[0.035] hover:text-white"
                }`}
              >
                Trading

                <Chevron
                  open={
                    openDropdown === "trading"
                  }
                />
              </button>

              {/* TRADING DROPDOWN */}
              {openDropdown === "trading" && (
                <div className="absolute left-1/2 top-[calc(100%+14px)] w-[340px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0A0A0B] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
                  <div className="px-3 pb-2 pt-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4AF37]/70">
                      Trading
                    </p>
                  </div>

                  {tradingLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() =>
                        setOpenDropdown(null)
                      }
                      className="group flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white/[0.04]"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white/85 transition group-hover:text-[#E8C866]">
                          {item.label}
                        </div>

                        <div className="mt-1 text-[11px] leading-4 text-white/35">
                          {item.description}
                        </div>
                      </div>

                      <span className="ml-4 shrink-0 text-white/25 transition group-hover:text-[#D4AF37]">
                        <ArrowUpRight />
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* AFFILIATE */}
            <a
              href="#affiliate"
              className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/60 transition hover:bg-white/[0.035] hover:text-white"
            >
              Affiliate
            </a>

            {/* COMPETITION */}
            <a
              href="#competition"
              className="relative rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/60 transition hover:bg-white/[0.035] hover:text-white"
            >
              Competition

              <span className="absolute right-1 top-0 rounded-full bg-[#D4AF37]/10 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider text-[#D4AF37]">
                Free
              </span>
            </a>

            {/* COMPANY */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "company"
                      ? null
                      : "company",
                  )
                }
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                  openDropdown === "company"
                    ? "bg-white/[0.05] text-white"
                    : "text-white/60 hover:bg-white/[0.035] hover:text-white"
                }`}
              >
                Company

                <Chevron
                  open={
                    openDropdown === "company"
                  }
                />
              </button>

              {/* COMPANY DROPDOWN */}
              {openDropdown === "company" && (
                <div className="absolute left-1/2 top-[calc(100%+14px)] w-[320px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0A0A0B] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
                  <div className="px-3 pb-2 pt-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4AF37]/70">
                      BlackProp
                    </p>
                  </div>

                  {companyLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() =>
                        setOpenDropdown(null)
                      }
                      className="group flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white/[0.04]"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white/85 transition group-hover:text-[#E8C866]">
                          {item.label}
                        </div>

                        <div className="mt-1 text-[11px] leading-4 text-white/35">
                          {item.description}
                        </div>
                      </div>

                      <span className="ml-4 shrink-0 text-white/25 transition group-hover:text-[#D4AF37]">
                        <ArrowUpRight />
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* FAQ */}
            <a
              href="#faq"
              className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/60 transition hover:bg-white/[0.035] hover:text-white"
            >
              FAQ
            </a>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <a
                href="#login"
                className="rounded-xl border border-white/[0.09] bg-white/[0.025] px-4 py-2.5 text-sm font-medium text-white/70 transition hover:border-white/[0.16] hover:bg-white/[0.055] hover:text-white"
              >
                Log In
              </a>

              <a
                href="#challenges"
                className="group relative overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F2D675_0%,#D4AF37_45%,#A57B18_100%)] px-5 py-2.5 text-sm font-bold text-[#080808] shadow-[0_8px_28px_rgba(212,175,55,0.17)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,175,55,0.25)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Funded

                  <ArrowUpRight />
                </span>

                <span className="absolute inset-y-0 -left-16 w-12 skew-x-[-20deg] bg-white/35 blur-sm transition-all duration-700 group-hover:left-[120%]" />
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              onClick={() => {
                setMobileOpen(
                  (current) => !current,
                );

                setOpenDropdown(null);
              }}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.09] bg-white/[0.025] text-white lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                    mobileOpen
                      ? "top-[7px] rotate-45"
                      : "top-1"
                  }`}
                />

                <span
                  className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                    mobileOpen
                      ? "bottom-[8px] -rotate-45"
                      : "bottom-1"
                  }`}
                />
              </span>
            </button>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          {mobileOpen && (
            <div className="absolute inset-x-4 top-[calc(100%+10px)] max-h-[calc(100vh-180px)] overflow-y-auto rounded-3xl border border-white/[0.09] bg-[#080809] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.75)] sm:inset-x-6 lg:hidden">
              {/* MOBILE MARKET */}
              <div className="mb-4">
                <p className="mb-2 px-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                  Market
                </p>

                <div className="grid grid-cols-3 gap-1.5 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-1.5">
                  {markets.map((market) => {
                    const active =
                      selectedMarket === market;

                    return (
                      <button
                        key={market}
                        type="button"
                        onClick={() =>
                          setSelectedMarket(
                            market,
                          )
                        }
                        className={`flex min-w-0 items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 text-xs font-semibold transition ${
                          active
                            ? "bg-[linear-gradient(135deg,#E8C866,#AF8720)] text-black"
                            : "text-white/45 hover:bg-white/[0.04]"
                        }`}
                      >
                        <MarketIcon
                          market={market}
                        />

                        <span className="truncate">
                          {market}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* MOBILE TRADING */}
              <div className="border-t border-white/[0.07] pt-3">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "trading"
                        ? null
                        : "trading",
                    )
                  }
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-white"
                >
                  Trading

                  <Chevron
                    open={
                      openDropdown ===
                      "trading"
                    }
                  />
                </button>

                {openDropdown === "trading" && (
                  <div className="space-y-1 pb-2">
                    {tradingLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={closeMobile}
                        className="block rounded-xl px-4 py-2.5 transition hover:bg-white/[0.04]"
                      >
                        <div className="text-sm text-white/70">
                          {item.label}
                        </div>

                        <div className="mt-0.5 text-[10px] leading-4 text-white/30">
                          {item.description}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* AFFILIATE */}
              <a
                href="#affiliate"
                onClick={closeMobile}
                className="block rounded-xl px-3 py-3 text-sm font-semibold text-white"
              >
                Affiliate
              </a>

              {/* COMPETITION */}
              <a
                href="#competition"
                onClick={closeMobile}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-white"
              >
                Trading Competition

                <span className="rounded-full bg-[#D4AF37]/10 px-2 py-0.5 text-[8px] uppercase tracking-wider text-[#D4AF37]">
                  Free
                </span>
              </a>

              {/* MOBILE COMPANY */}
              <div className="border-y border-white/[0.07] py-2">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "company"
                        ? null
                        : "company",
                    )
                  }
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-white"
                >
                  Company

                  <Chevron
                    open={
                      openDropdown ===
                      "company"
                    }
                  />
                </button>

                {openDropdown === "company" && (
                  <div className="space-y-1 pb-2">
                    {companyLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={closeMobile}
                        className="block rounded-xl px-4 py-2.5 transition hover:bg-white/[0.04]"
                      >
                        <div className="text-sm text-white/70">
                          {item.label}
                        </div>

                        <div className="mt-0.5 text-[10px] leading-4 text-white/30">
                          {item.description}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* FAQ */}
              <a
                href="#faq"
                onClick={closeMobile}
                className="block rounded-xl px-3 py-3 text-sm font-semibold text-white"
              >
                FAQ
              </a>

              {/* MOBILE CTA */}
              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/[0.07] pt-4 sm:hidden">
                <a
                  href="#login"
                  onClick={closeMobile}
                  className="rounded-xl border border-white/[0.09] px-4 py-3 text-center text-sm font-medium text-white/75"
                >
                  Log In
                </a>

                <a
                  href="#challenges"
                  onClick={closeMobile}
                  className="rounded-xl bg-[linear-gradient(135deg,#F2D675,#D4AF37,#A57B18)] px-4 py-3 text-center text-sm font-bold text-black"
                >
                  Get Funded
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}