"use client";

import { FormEvent, useState } from "react";

/* =========================================================
   CONFIG
========================================================= */

const DISCORD_URL = "https://discord.com/invite/AXU9YEd4T";

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

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M8 5h7v7M15 5 7 13"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12.5 10.5v4A1.5 1.5 0 0 1 11 16H5a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 5 7h4"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
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

function DiscordIcon({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.7 6.4A20.4 20.4 0 0 0 17.9 5l-.6 1.2a17 17 0 0 0-6.6 0L10.1 5a20 20 0 0 0-4.8 1.4C2.2 11 1.4 15.4 1.8 19.7a20 20 0 0 0 5.9 3l1.4-1.9c-.8-.3-1.6-.7-2.3-1.2l.6-.5c4.4 2 9.2 2 13.6 0l.6.5c-.7.5-1.5.9-2.3 1.2l1.4 1.9a20 20 0 0 0 5.9-3c.5-5-1-9.4-3.9-13.3ZM12.2 14.7a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Zm7.2 0a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Z"
      />
    </svg>
  );
}

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
    </svg>
  );
}

/* =========================================================
   COMMUNITY CTA
========================================================= */

export function CommunityCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[#FBFAF7] py-10 text-[#080808] sm:py-12 lg:min-h-screen lg:py-14"
    >
      {/* TOP BORDER */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1280px] flex-col justify-center px-3 sm:px-4 lg:px-5">
        {/* HEADER */}
        <div className="grid items-end gap-5 lg:grid-cols-[1fr_.72fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0B] px-3 py-2">
                <BPMark
                  width={15}
                  height={19}
                  color="#FFFFFF"
                />

                <span className="text-[13px] font-bold text-white">
                  BlackProp
                </span>
              </div>

              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#8E6815]">
                Community
              </span>
            </div>

            <h2 className="mt-4 max-w-[760px] text-[2.75rem] font-black uppercase leading-[0.94] tracking-[-0.055em] sm:text-[3.5rem] lg:text-[4rem]">
              Stay connected.

              <span className="block text-[#B48721]">
                Join BlackProp.
              </span>
            </h2>
          </div>

          <p className="max-w-[480px] text-[14px] font-medium leading-6 text-black/58 sm:text-[15px] lg:ml-auto">
            Join the official Discord for trader conversations and
            announcements, or get important BlackProp updates by email.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          {/* DISCORD */}
          <article className="relative overflow-hidden rounded-[24px] border border-[#5865F2]/30 bg-[linear-gradient(145deg,#111216,#070708)] p-5 text-white shadow-[0_20px_55px_rgba(30,25,55,.12)] sm:p-6">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#5865F2]/12 blur-[85px]" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#5865F2]">
                  <DiscordIcon className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#AAB1FF]">
                    Official Discord
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-white/45">
                    Community server
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-[2rem] font-black uppercase leading-[0.98] tracking-[-0.045em] sm:text-[2.35rem]">
                  Talk markets.

                  <span className="block text-[#8D96FF]">
                    Meet the community.
                  </span>
                </h3>

                <p className="mt-3 max-w-[520px] text-[14px] font-medium leading-6 text-white/60">
                  Follow announcements, discuss markets and stay connected with
                  other BlackProp traders.
                </p>
              </div>

              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-7 flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#5865F2] px-5 text-[13px] font-black uppercase text-white transition hover:-translate-y-0.5 hover:bg-[#6672F4]"
              >
                <DiscordIcon className="h-5 w-5" />

                Join Discord

                <ExternalIcon />
              </a>
            </div>
          </article>

          {/* EMAIL */}
          <article className="relative overflow-hidden rounded-[24px] border border-black/[0.08] bg-white p-5 shadow-[0_20px_55px_rgba(55,43,14,.05)] sm:p-6">
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#D4AF37]/10 blur-[75px]" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border border-[#B88B22]/15 bg-[#F8F5ED] text-[#987018]">
                  <NewsletterIcon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#966D15]">
                    Email updates
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-black/42">
                    Important news only
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-[2rem] font-black uppercase leading-[0.98] tracking-[-0.045em] text-[#080808] sm:text-[2.35rem]">
                  Get the signal.

                  <span className="block text-[#B48721]">
                    Skip the noise.
                  </span>
                </h3>

                <p className="mt-3 max-w-[520px] text-[14px] font-medium leading-6 text-black/58">
                  Receive selected product announcements, promotions and key
                  BlackProp updates in your inbox.
                </p>
              </div>

              <div className="mt-7">
                {submitted ? (
                  <div
                    role="status"
                    className="flex min-h-[50px] items-center gap-3 rounded-xl border border-[#B88B22]/15 bg-[#F8F6F0] px-4"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#D4AF37] text-black">
                      <CheckIcon />
                    </span>

                    <p className="text-[13px] font-black">
                      You&apos;re on the list.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-xl border border-black/[0.08] bg-[#F8F6F0] p-2 sm:flex sm:items-center"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="Enter your email"
                      aria-label="Email address"
                      className="h-11 w-full min-w-0 bg-transparent px-3 text-[14px] font-medium text-black outline-none placeholder:text-black/35"
                    />

                    <button
                      type="submit"
                      className="mt-2 flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[#0A0A0A] px-5 text-[12px] font-black uppercase text-white transition hover:bg-[#171717] sm:mt-0 sm:w-auto"
                    >
                      Subscribe

                      <span className="text-[#D4AF37]">
                        <ArrowIcon />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}