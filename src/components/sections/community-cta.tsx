"use client";

import { FormEvent, useState, type ReactNode } from "react";
/* =========================================================
   ICONS
========================================================= */

function ArrowIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.5 10h12M11.5 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m4.5 10.3 3.2 3.2 7.8-7.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   DISCORD SVG
========================================================= */

function DiscordIcon({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M22.7 6.4A20.4 20.4 0 0 0 17.9 5l-.6 1.2a17 17 0 0 0-6.6 0L10.1 5a20 20 0 0 0-4.8 1.4C2.2 11 1.4 15.4 1.8 19.7a20 20 0 0 0 5.9 3l1.4-1.9c-.8-.3-1.6-.7-2.3-1.2l.6-.5c4.4 2 9.2 2 13.6 0l.6.5c-.7.5-1.5.9-2.3 1.2l1.4 1.9a20 20 0 0 0 5.9-3c.5-5-1-9.4-3.9-13.3Z"
        fill="currentColor"
      />

      <circle
        cx="10.4"
        cy="14.7"
        r="1.8"
        fill="#080808"
      />

      <circle
        cx="17.6"
        cy="14.7"
        r="1.8"
        fill="#080808"
      />
    </svg>
  );
}

/* =========================================================
   NEWSLETTER SVG
========================================================= */

function NewsletterIcon({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="6"
        width="22"
        height="16"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="m5.5 8.5 8.5 7 8.5-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m5.5 19 5.3-5M22.5 19l-5.3-5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity=".65"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="8"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M3.5 19c.6-3.5 2.5-5.3 5.5-5.3s4.9 1.8 5.5 5.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle
        cx="17"
        cy="9"
        r="2.4"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M15.8 14.2c2.6.2 4.2 1.7 4.7 4.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 2.8c.8 5.6 3.6 8.4 9.2 9.2-5.6.8-8.4 3.6-9.2 9.2-.8-5.6-3.6-8.4-9.2-9.2 5.6-.8 8.4-3.6 9.2-9.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   DISCORD NETWORK GRAPHIC
========================================================= */

function DiscordNetwork() {
  return (
    <div
      className="relative mt-7 h-[190px] overflow-hidden rounded-[22px] border border-white/10 bg-[#060607]"
      aria-hidden="true"
    >
      {/* GRID */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/15 blur-[55px]" />

      {/* CONNECTION SVG */}
      <svg
        viewBox="0 0 500 190"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M55 119C119 77 158 99 218 92C275 85 316 51 447 68"
          stroke="#D4AF37"
          strokeOpacity=".25"
          strokeWidth="1.4"
          strokeDasharray="6 9"
          className="community-path"
        />

        <path
          d="M57 58C142 69 176 126 245 116C313 106 331 144 444 132"
          stroke="white"
          strokeOpacity=".1"
          strokeDasharray="4 10"
        />

        <circle
          cx="55"
          cy="119"
          r="4"
          fill="#D4AF37"
        />

        <circle
          cx="447"
          cy="68"
          r="4"
          fill="#D4AF37"
        />

        <circle
          cx="57"
          cy="58"
          r="3"
          fill="white"
        />

        <circle
          cx="444"
          cy="132"
          r="3"
          fill="white"
        />
      </svg>

      {/* CENTER DISCORD */}
      <div className="absolute left-1/2 top-1/2 grid h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[24px] border border-[#D4AF37]/30 bg-[#0B0B0C] text-[#F0D16A] shadow-[0_0_45px_rgba(212,175,55,.16)]">
        <DiscordIcon className="h-9 w-9" />

        <span className="community-pulse absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
      </div>

      {/* USER NODES */}

      <div className="community-float-one absolute left-[9%] top-[24%] grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-[#101011] text-[7px] font-black text-white">
        TR
      </div>

      <div className="community-float-two absolute bottom-[15%] left-[19%] grid h-8 w-8 place-items-center rounded-full border border-[#D4AF37]/20 bg-[#101011] text-[7px] font-black text-[#F0D16A]">
        FX
      </div>

      <div className="community-float-three absolute right-[11%] top-[20%] grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-[#101011] text-[7px] font-black text-white">
        FT
      </div>

      <div className="community-float-four absolute bottom-[14%] right-[19%] grid h-8 w-8 place-items-center rounded-full border border-[#D4AF37]/20 bg-[#101011] text-[7px] font-black text-[#F0D16A]">
        CR
      </div>

      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5">
        <span className="community-pulse h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

        <span className="text-[6px] font-black tracking-[0.15em] text-white">
          COMMUNITY SIGNAL
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   NEWSLETTER GRAPHIC
========================================================= */

function NewsletterGraphic() {
  return (
    <div
      className="relative mt-7 h-[190px] overflow-hidden rounded-[22px] border border-black/10 bg-[#F8F5ED]"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/20 blur-[55px]" />

      {/* MAIL RINGS */}

      <div className="absolute left-1/2 top-1/2 h-[142px] w-[142px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/20" />

      <div className="community-mail-ring absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#B88B22]/35" />

      {/* ENVELOPE */}

      <div className="community-mail-float absolute left-1/2 top-1/2 grid h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[24px] border border-[#D4AF37]/30 bg-[#0B0B0C] text-[#F0D16A] shadow-[0_20px_45px_rgba(70,51,10,.14)]">
        <NewsletterIcon className="h-9 w-9" />
      </div>

      {/* ARROWS */}

      <div className="community-arrow-one absolute left-[15%] top-1/2 -translate-y-1/2 text-[#B48620]">
        <ArrowIcon className="h-5 w-5" />
      </div>

      <div className="community-arrow-two absolute right-[15%] top-1/2 -translate-y-1/2 text-[#B48620]">
        <ArrowIcon className="h-5 w-5" />
      </div>

      {/* SMALL MAIL ITEMS */}

      <div className="absolute left-[10%] top-[18%] flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

        <span className="text-[6px] font-black tracking-[0.12em] text-black">
          NEWS
        </span>
      </div>

      <div className="absolute bottom-[15%] right-[9%] flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 shadow-sm">
        <span className="text-[6px] font-black tracking-[0.12em] text-black">
          UPDATES
        </span>

        <ArrowIcon className="h-3 w-3 text-[#B48620]" />
      </div>
    </div>
  );
}

/* =========================================================
   MINI POINT
========================================================= */

function MiniPoint({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-[9px] font-bold text-white">
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#D4AF37]/15 text-[#F0D16A]">
        <CheckIcon />
      </span>

      {children}
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export function CommunityCTA() {
  const [email, setEmail] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[#FBFAF7] py-20 text-[#080808] sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[14%] h-[620px] w-[1050px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.07] blur-[180px]" />

      <div className="pointer-events-none absolute -left-48 top-[38%] hidden h-[360px] w-[360px] rounded-full border border-[#D4AF37]/10 lg:block" />

      <div className="pointer-events-none absolute -right-48 top-[52%] hidden h-[360px] w-[360px] rounded-full border border-black/[0.045] lg:block" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3.5 py-2">
              <span className="community-pulse h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

              <span className="text-[8px] font-black uppercase tracking-[0.19em] text-[#8E6815]">
                STAY CONNECTED
              </span>
            </div>

            <h2 className="mt-6 max-w-[700px] text-[2.8rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#080808] sm:text-[3.7rem] lg:text-[4.5rem]">
              STAY INSIDE
              <span className="block">
                THE
                <span className="text-[#B48721]">
                  {" "}BLACKPROP LOOP.
                </span>
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <div className="max-w-[470px] border-l-2 border-[#D4AF37] pl-5 lg:ml-auto">
              <p className="text-sm font-medium leading-7 text-[#151515] sm:text-base">
                Join the conversation or receive selected
                BlackProp updates directly in your inbox.
                Two simple ways to stay connected.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CHANNEL SELECTOR
        ====================================================== */}

        <div className="mt-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 shadow-[0_12px_35px_rgba(65,50,15,.06)]">
            <span className="text-[#9B7318]">
              <DiscordIcon className="h-4 w-4" />
            </span>

            <span className="text-[7px] font-black uppercase tracking-[0.16em] text-[#111]">
              COMMUNITY
            </span>

            <div className="community-center-arrow flex items-center gap-0.5 text-[#B38720]">
              <ArrowIcon className="h-3 w-3" />
              <ArrowIcon className="h-3 w-3" />
            </div>

            <span className="text-[7px] font-black uppercase tracking-[0.16em] text-[#111]">
              UPDATES
            </span>

            <span className="text-[#9B7318]">
              <NewsletterIcon className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* =====================================================
            MAIN CARDS
        ====================================================== */}

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {/* =================================================
              DISCORD
          ================================================= */}

          <article className="group relative overflow-hidden rounded-[30px] border border-[#D4AF37]/20 bg-[linear-gradient(145deg,#111112,#070708)] p-5 text-white shadow-[0_30px_80px_rgba(27,22,12,.13)] sm:p-7 lg:p-8">
            {/* TOP LINE */}

            <div className="absolute inset-x-[17%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/75 to-transparent" />

            {/* GLOW */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[85px]" />

            <div className="relative">
              {/* TOP */}

              <div className="flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-[16px] border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#F0D16A]">
                  <DiscordIcon />
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                  <span className="community-pulse h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

                  <span className="text-[7px] font-black uppercase tracking-[0.14em] text-white">
                    DISCORD
                  </span>
                </div>
              </div>

              {/* COPY */}

              <div className="mt-7">
                <p className="text-[8px] font-black uppercase tracking-[0.19em] text-[#D4AF37]">
                  BLACKPROP COMMUNITY
                </p>

                <h3 className="mt-3 max-w-[430px] text-[2rem] font-black uppercase leading-[0.97] tracking-[-0.05em] text-white sm:text-[2.6rem]">
                  WHERE TRADERS
                  <span className="block text-[#D4AF37]">
                    CONNECT.
                  </span>
                </h3>

                <p className="mt-4 max-w-[440px] text-sm font-medium leading-6 text-white">
                  Join the BlackProp community, talk markets,
                  share ideas and stay close to the conversation.
                </p>
              </div>

              <DiscordNetwork />

              {/* DETAILS */}

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                <MiniPoint>
                  Trader conversations
                </MiniPoint>

                <MiniPoint>
                  Platform updates
                </MiniPoint>

                <MiniPoint>
                  Community access
                </MiniPoint>
              </div>

              {/* CTA */}

              <a
                href="#community"
                className="group/button relative mt-6 inline-flex min-w-[190px] items-center justify-center gap-3 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F6DE82,#D4AF37_50%,#956A11)] px-6 py-3.5 text-[10px] font-black uppercase text-black shadow-[0_15px_40px_rgba(212,175,55,.17)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(212,175,55,.27)]"
              >
                <DiscordIcon className="h-4 w-4" />

                JOIN DISCORD

                <span className="community-button-arrow">
                  <ArrowIcon />
                </span>

                <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/45 blur-md transition-all duration-700 group-hover/button:left-[125%]" />
              </a>
            </div>
          </article>

          {/* =================================================
              NEWSLETTER
          ================================================= */}

          <article className="relative overflow-hidden rounded-[30px] border border-black/10 bg-[#F1ECDD] p-5 shadow-[0_30px_80px_rgba(65,50,15,.08)] sm:p-7 lg:p-8">
            {/* TOP */}

            <div className="absolute inset-x-[17%] top-0 h-px bg-gradient-to-r from-transparent via-[#C09228]/55 to-transparent" />

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4AF37]/20 blur-[85px]" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-[16px] border border-[#B88B22]/20 bg-white/60 text-[#9A7117]">
                  <NewsletterIcon />
                </div>

                <div className="rounded-full border border-black/10 bg-white/50 px-3 py-1.5">
                  <span className="text-[7px] font-black uppercase tracking-[0.14em] text-[#111]">
                    NEWSLETTER
                  </span>
                </div>
              </div>

              {/* COPY */}

              <div className="mt-7">
                <p className="text-[8px] font-black uppercase tracking-[0.19em] text-[#966D15]">
                  BLACKPROP INBOX
                </p>

                <h3 className="mt-3 max-w-[450px] text-[2rem] font-black uppercase leading-[0.97] tracking-[-0.05em] text-[#080808] sm:text-[2.6rem]">
                  GET THE SIGNAL.
                  <span className="block text-[#B48721]">
                    SKIP THE NOISE.
                  </span>
                </h3>

                <p className="mt-4 max-w-[450px] text-sm font-medium leading-6 text-[#161616]">
                  Receive selected product announcements,
                  promotions and important BlackProp updates
                  directly in your inbox.
                </p>
              </div>

              <NewsletterGraphic />

              {/* =================================================
                  FORM
              ================================================= */}

              <div className="mt-5">
                {submitted ? (
                  <div
                    role="status"
                    className="relative overflow-hidden rounded-[18px] border border-[#B88B22]/20 bg-white/65 px-4 py-4"
                  >
                    <span className="community-success-scan absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />

                    <div className="relative flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#D4AF37] text-black">
                        <CheckIcon />
                      </span>

                      <div>
                        <p className="text-[11px] font-black text-[#080808]">
                          You&apos;re on the list.
                        </p>

                        <p className="mt-1 text-[8px] font-semibold text-[#222]">
                          Demo signup complete.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-[18px] border border-black/10 bg-white/70 p-2 shadow-[inset_0_1px_0_white] sm:flex sm:items-center"
                  >
                    <div className="flex min-w-0 flex-1 items-center">
                      <span className="ml-3 text-[#9A7117]">
                        <NewsletterIcon className="h-4 w-4" />
                      </span>

                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(event) =>
                          setEmail(
                            event.target.value,
                          )
                        }
                        placeholder="Enter your email address"
                        aria-label="Email address"
                        className="h-12 w-full min-w-0 bg-transparent px-3 text-sm font-medium text-black outline-none placeholder:text-black/55"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative mt-2 flex h-12 w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#0A0A0A] px-6 text-[10px] font-black uppercase text-white transition hover:bg-[#171717] sm:mt-0 sm:w-auto"
                    >
                      SUBSCRIBE

                      <span className="community-button-arrow text-[#D4AF37]">
                        <ArrowIcon />
                      </span>
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-4 flex items-start gap-2">
                <span className="mt-0.5 text-[#9A7117]">
                  <SparkIcon />
                </span>

                <p className="text-[8px] font-semibold leading-4 text-[#222]">
                  Connect this form to your newsletter provider
                  before production launch.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* =====================================================
            FINAL CONNECTION STRIP
        ====================================================== */}

        <div className="relative mt-5 overflow-hidden rounded-[22px] border border-black/10 bg-white px-4 py-4 sm:px-5">
          <div className="community-line-scan absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-[13px] bg-[#0A0A0A] text-[#F0D16A]">
                <UsersIcon />
              </div>

              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.17em] text-[#946C15]">
                  TWO WAYS TO STAY CLOSE
                </p>

                <p className="mt-1 text-[11px] font-black text-[#080808]">
                  Join the conversation or get the important
                  updates.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-black/10 bg-[#F7F4EC] px-3 py-2">
                <DiscordIcon className="h-4 w-4 text-[#966D15]" />

                <span className="text-[7px] font-black uppercase tracking-[0.13em] text-black">
                  DISCORD
                </span>
              </div>

              <div className="community-final-arrows flex text-[#B48721]">
                <ArrowIcon className="h-3 w-3" />
                <ArrowIcon className="h-3 w-3" />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-black/10 bg-[#F7F4EC] px-3 py-2">
                <NewsletterIcon className="h-4 w-4 text-[#966D15]" />

                <span className="text-[7px] font-black uppercase tracking-[0.13em] text-black">
                  INBOX
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <p className="mx-auto mt-6 max-w-3xl text-center text-[9px] font-medium leading-4 text-[#191919]">
          Community links and newsletter signup are frontend
          preview interactions. Connect the final Discord URL
          and email provider before publishing.
        </p>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes communityPulse {
          0%, 100% {
            opacity: .45;
            transform: scale(.85);
            box-shadow: 0 0 0 rgba(212,175,55,0);
          }

          50% {
            opacity: 1;
            transform: scale(1.18);
            box-shadow: 0 0 18px rgba(212,175,55,.6);
          }
        }

        @keyframes communityPath {
          to {
            stroke-dashoffset: -30;
          }
        }

        @keyframes communityFloatOne {
          0%, 100% {
            transform: translateY(0) rotate(-4deg);
          }

          50% {
            transform: translateY(-7px) rotate(1deg);
          }
        }

        @keyframes communityFloatTwo {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(6px);
          }
        }

        @keyframes communityFloatThree {
          0%, 100% {
            transform: translateY(0) rotate(4deg);
          }

          50% {
            transform: translateY(-6px) rotate(0deg);
          }
        }

        @keyframes communityFloatFour {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(7px);
          }
        }

        @keyframes communityMailFloat {
          0%, 100% {
            transform:
              translate(-50%, -50%)
              rotate(-2deg);
          }

          50% {
            transform:
              translate(-50%, calc(-50% - 7px))
              rotate(2deg);
          }
        }

        @keyframes communityMailRing {
          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        @keyframes communityArrow {
          0%, 100% {
            opacity: .4;
            transform: translateX(-4px);
          }

          50% {
            opacity: 1;
            transform: translateX(5px);
          }
        }

        @keyframes communityButtonArrow {
          0%, 100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(5px);
          }
        }

        @keyframes communityScan {
          0% {
            left: -120px;
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            left: calc(100% + 30px);
            opacity: 0;
          }
        }

        .community-pulse {
          animation:
            communityPulse
            3s ease-in-out infinite;
        }

        .community-path {
          stroke-dashoffset: 0;
          animation:
            communityPath
            4s linear infinite;
        }

        .community-float-one {
          animation:
            communityFloatOne
            5.4s ease-in-out infinite;
        }

        .community-float-two {
          animation:
            communityFloatTwo
            6.2s ease-in-out infinite;
        }

        .community-float-three {
          animation:
            communityFloatThree
            5.8s ease-in-out infinite;
        }

        .community-float-four {
          animation:
            communityFloatFour
            6.6s ease-in-out infinite;
        }

        .community-mail-float {
          animation:
            communityMailFloat
            5s ease-in-out infinite;
        }

        .community-mail-ring {
          animation:
            communityMailRing
            16s linear infinite;
        }

        .community-arrow-one,
        .community-arrow-two,
        .community-center-arrow,
        .community-final-arrows {
          animation:
            communityArrow
            1.7s ease-in-out infinite;
        }

        .community-arrow-two {
          animation-delay: .5s;
        }

        .community-button-arrow {
          animation:
            communityButtonArrow
            1.6s ease-in-out infinite;
        }

        .community-success-scan,
        .community-line-scan {
          animation:
            communityScan
            4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .community-pulse,
          .community-path,
          .community-float-one,
          .community-float-two,
          .community-float-three,
          .community-float-four,
          .community-mail-float,
          .community-mail-ring,
          .community-arrow-one,
          .community-arrow-two,
          .community-center-arrow,
          .community-final-arrows,
          .community-button-arrow,
          .community-success-scan,
          .community-line-scan {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}