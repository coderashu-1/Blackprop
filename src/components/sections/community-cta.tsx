"use client";

import { FormEvent, useState, type ReactNode } from "react";

/* =========================================================
   CONFIG
   Replace this with the final BlackProp Discord invite URL.
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
      {/* Discord Clyde mark with true negative-space eyes.
          The eye holes inherit whatever background the icon sits on. */}
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

function HashIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M7.5 3 6 17M14 3l-1.5 14M3.5 7.5h13M3 12.5h13"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M3.5 9v2.5h2.2l7.8 3.2V5.8L5.7 9H3.5Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />

      <path
        d="m6.2 12-.4 4h2.7l.5-2.9"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />

      <path
        d="M15.5 8c.7.6 1 1.2 1 2s-.3 1.5-1 2"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   DISCORD SERVER PREVIEW
========================================================= */

function DiscordServerPreview() {
  const channels = [
    {
      name: "announcements",
      icon: <MegaphoneIcon />,
      accent: true,
    },
    {
      name: "general-chat",
      icon: <HashIcon />,
    },
    {
      name: "market-talk",
      icon: <HashIcon />,
    },
    {
      name: "payouts",
      icon: <HashIcon />,
    },
  ];

  return (
    <div className="relative mt-7 hidden overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#17181C] sm:block">
      {/* DISCORD TOP BAR */}
      <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] bg-[#1E1F22] px-4 py-3.5 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#D4AF37]/20 bg-[#0B0B0C]">
            <BPMark width={18} height={23} color="#FFFFFF" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[13px] font-black text-white sm:text-sm">
              BlackProp Official
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.10em] text-white/50">
                Official Discord Server
              </span>
            </div>
          </div>
        </div>

        <DiscordIcon className="h-5 w-5 shrink-0 text-[#5865F2]" />
      </div>

      <div className="grid min-h-[220px] sm:grid-cols-[170px_1fr]">
        {/* CHANNELS */}
        <div className="border-b border-white/[0.06] bg-[#111214] p-3 sm:border-b-0 sm:border-r">
          <p className="px-2 text-[10px] font-black uppercase tracking-[0.12em] text-white/38">
            Channels
          </p>

          <div className="mt-2 space-y-1">
            {channels.map((channel) => (
              <div
                key={channel.name}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2.5 text-[11px] font-semibold ${
                  channel.accent
                    ? "bg-[#5865F2]/15 text-[#B8BEFF]"
                    : "text-white/40"
                }`}
              >
                <span
                  className={
                    channel.accent
                      ? "text-[#8992FF]"
                      : "text-white/25"
                  }
                >
                  {channel.icon}
                </span>

                {channel.name}
              </div>
            ))}
          </div>
        </div>

        {/* CHAT AREA */}
        <div className="relative overflow-hidden bg-[#18191D] p-4 sm:p-5">
          <div className="pointer-events-none absolute right-[-80px] top-[-90px] h-56 w-56 rounded-full bg-[#5865F2]/10 blur-[75px]" />

          <div className="relative">
            <div className="flex gap-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#D4AF37]/12">
                <BPMark width={12} height={15} color="#FFFFFF" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[11px] font-black text-white">
                    BlackProp
                  </p>

                  <span className="rounded bg-[#5865F2] px-1.5 py-0.5 text-[8px] font-black uppercase tracking-[0.07em] text-white">
                    Official
                  </span>
                </div>

                <p className="mt-1.5 max-w-[360px] text-[11px] leading-5 text-white/52">
                  Welcome to the official BlackProp trader community.
                  Follow announcements, discuss markets and stay connected.
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#5865F2]/20 text-[9px] font-black text-[#AEB4FF]">
                TR
              </div>

              <div>
                <p className="text-[11px] font-black text-white/78">
                  Trader
                </p>

                <p className="mt-1 text-[11px] leading-5 text-white/45">
                  Market discussion and community updates in one place.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-5 flex items-center gap-2 rounded-lg bg-[#24262B] px-3 py-2.5">
            <span className="text-white/20">
              <HashIcon />
            </span>

            <span className="text-[10px] font-medium text-white/35">
              Message #general-chat
            </span>
          </div>
        </div>
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
    <div className="flex items-center gap-2.5 text-[12px] font-bold text-white/78 sm:text-[13px]">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#D4AF37]/15 text-[#F0D16A]">
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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
      className="relative overflow-hidden bg-[#FBFAF7] py-14 text-[#080808] sm:py-20 md:py-24 lg:py-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-[10%] h-[620px] w-[1050px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.055] blur-[180px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3.5">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[#0A0A0B] px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,.08)]">
                <BPMark
                  width={18}
                  height={23}
                  color="#FFFFFF"
                  className="shrink-0"
                />

                <span className="text-[14px] font-bold leading-none tracking-[-0.035em] text-white sm:text-[15px]">
                  BlackProp
                </span>
              </div>

              <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#8E6815] sm:text-[12px]">
                COMMUNITY
              </span>
            </div>

            <h2 className="mt-6 max-w-[780px] text-[3.15rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#080808] min-[430px]:text-[3.45rem] sm:text-[4rem] md:text-[4.35rem] lg:text-[4.8rem]">
              JOIN THE
              <span className="block text-[#B48721]">
                CONVERSATION.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-[520px] text-[16px] font-medium leading-7 text-black/62 sm:text-[17px] sm:leading-8 lg:ml-auto">
              Join the official BlackProp Discord for community
              conversations, announcements and trader updates — or subscribe
              for selected updates by email.
            </p>
          </div>
        </div>

        {/* =====================================================
            COMMUNITY AREA
        ====================================================== */}

        <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-[1.12fr_.88fr]">
          {/* =================================================
              DISCORD — PRIMARY
          ================================================= */}

          <article className="relative overflow-hidden rounded-[24px] border border-[#5865F2]/35 bg-[linear-gradient(145deg,#111216,#070708)] p-5 text-white shadow-[0_28px_78px_rgba(30,25,55,.14)] sm:rounded-[32px] sm:p-7 lg:p-8">
            <div className="absolute inset-x-[13%] top-0 h-px bg-gradient-to-r from-transparent via-[#7D87FF]/90 to-transparent" />

            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#5865F2]/13 blur-[95px]" />

            <div className="relative">
              {/* CLEAR DISCORD LABEL */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-[16px] bg-[#5865F2] text-white shadow-[0_12px_35px_rgba(88,101,242,.32)] sm:h-14 sm:w-14 sm:rounded-[18px]">
                    <DiscordIcon className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#AAB1FF] sm:text-[12px]">
                      OFFICIAL BLACKPROP DISCORD
                    </p>

                    <div className="mt-1.5 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.45)]" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.10em] text-white/55 sm:text-[11px]">
                        Community Server
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden rounded-full border border-[#5865F2]/35 bg-[#5865F2]/12 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.11em] text-[#ADB3FF] sm:block">
                  DISCORD LINK
                </div>
              </div>

              <div className="mt-7">
                <h3 className="max-w-[560px] text-[2.35rem] font-black uppercase leading-[0.97] tracking-[-0.05em] text-white sm:text-[2.85rem] lg:text-[3rem]">
                  TALK MARKETS.
                  <span className="block text-[#8D96FF]">
                    JOIN BLACKPROP.
                  </span>
                </h3>

                <p className="mt-4 max-w-[570px] text-[15px] font-medium leading-7 text-white/65 sm:text-base">
                  Enter the official BlackProp Discord server to connect with
                  traders, follow announcements and stay close to the
                  community.
                </p>
              </div>

              <DiscordServerPreview />

              <div className="mt-6 grid gap-2.5 sm:hidden">
                {[
                  ["Announcements", "Official updates in one place"],
                  ["Market Talk", "Trader-focused conversation"],
                  ["Community", "Stay connected with BlackProp"],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 rounded-[14px] border border-white/[0.08] bg-white/[0.035] px-3.5 py-3"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#5865F2]/15 text-[#AEB4FF]">
                      <HashIcon />
                    </span>

                    <div>
                      <p className="text-[13px] font-black text-white">
                        {title}
                      </p>

                      <p className="mt-0.5 text-[11px] leading-5 text-white/45">
                        {copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                <MiniPoint>Trader conversations</MiniPoint>
                <MiniPoint>Official announcements</MiniPoint>
                <MiniPoint>Community updates</MiniPoint>
              </div>

              {/* VERY CLEAR DISCORD CTA */}
              <div className="mt-6 rounded-[20px] border border-[#5865F2]/30 bg-[#5865F2]/[0.08] p-3 sm:flex sm:items-center sm:justify-between sm:gap-4">
                <div className="px-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.13em] text-[#AAB1FF] sm:text-[11px]">
                    OPEN OFFICIAL SERVER
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-white/52 sm:text-[12px]">
                    You&apos;ll be redirected to Discord.
                  </p>
                </div>

                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-3 flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#5865F2] px-6 py-4 text-[14px] font-black uppercase text-white shadow-[0_15px_40px_rgba(88,101,242,.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6672F4] hover:shadow-[0_20px_50px_rgba(88,101,242,.4)] sm:mt-0 sm:w-auto sm:min-w-[215px] sm:text-[15px]"
                >
                  <DiscordIcon className="h-5 w-5" />

                  JOIN DISCORD

                  <ExternalIcon />
                </a>
              </div>
            </div>
          </article>

          {/* =================================================
              NEWSLETTER — SECONDARY
          ================================================= */}

          <article className="relative overflow-hidden rounded-[24px] border border-black/[0.08] bg-white p-5 shadow-[0_24px_70px_rgba(55,43,14,.055)] sm:rounded-[32px] sm:p-7 lg:p-8">
            <div className="absolute inset-x-[17%] top-0 h-px bg-gradient-to-r from-transparent via-[#C09228]/50 to-transparent" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#D4AF37]/12 blur-[85px]" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-[16px] border border-[#B88B22]/15 bg-[#F8F5ED] text-[#987018]">
                  <NewsletterIcon />
                </div>

                <div className="rounded-full border border-black/[0.07] bg-[#F8F6F0] px-3 py-1.5">
                  <span className="text-[10px] font-black uppercase tracking-[0.12em] text-black/60 sm:text-[11px]">
                    EMAIL UPDATES
                  </span>
                </div>
              </div>

              <div className="mt-7">
                <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#966D15] sm:text-[12px]">
                  BLACKPROP INBOX
                </p>

                <h3 className="mt-3 max-w-[480px] text-[2.25rem] font-black uppercase leading-[0.98] tracking-[-0.05em] text-[#080808] sm:text-[2.55rem] lg:text-[2.7rem]">
                  GET THE SIGNAL.
                  <span className="block text-[#B48721]">
                    SKIP THE NOISE.
                  </span>
                </h3>

                <p className="mt-4 max-w-[500px] text-[15px] font-medium leading-7 text-black/62 sm:text-base">
                  Receive selected product announcements, promotions and
                  important BlackProp updates directly in your inbox.
                </p>
              </div>

              {/* SIMPLE RELEVANT MAIL GRAPHIC */}
              <div className="relative mt-7 hidden min-h-[220px] items-center justify-center overflow-hidden rounded-[24px] border border-black/[0.07] bg-[#F8F6F0] sm:flex">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/12 blur-[65px]" />

                <div className="pointer-events-none absolute right-7 top-7">
                  <BPMark
                    width={55}
                    height={70}
                    color="#FFFFFF"
                    className="opacity-[0.07]"
                  />
                </div>

                <div className="relative text-center">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-[24px] border border-[#D4AF37]/20 bg-white text-[#A17818] shadow-[0_16px_45px_rgba(67,51,14,.08)]">
                    <NewsletterIcon className="h-9 w-9" />
                  </div>

                  <p className="mt-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#92701C]">
                    BLACKPROP UPDATES
                  </p>

                  <p className="mt-1.5 text-[12px] font-semibold text-black/52">
                    News · Promotions · Announcements
                  </p>
                </div>
              </div>

              {/* FORM */}
              <div className="mt-5">
                {submitted ? (
                  <div
                    role="status"
                    className="rounded-[18px] border border-[#B88B22]/15 bg-[#F8F6F0] px-4 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#D4AF37] text-black">
                        <CheckIcon />
                      </span>

                      <div>
                        <p className="text-[14px] font-black text-[#080808]">
                          You&apos;re on the list.
                        </p>

                        <p className="mt-1 text-[11px] font-semibold text-black/48">
                          Demo signup complete.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-[18px] border border-black/[0.08] bg-[#F8F6F0] p-2 sm:flex sm:items-center"
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
                          setEmail(event.target.value)
                        }
                        placeholder="Enter your email"
                        aria-label="Email address"
                        className="h-13 w-full min-w-0 bg-transparent px-3 text-[15px] font-medium text-black outline-none placeholder:text-black/35 sm:text-base"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group mt-2 flex h-13 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0A0A0A] px-6 text-[13px] font-black uppercase text-white transition hover:bg-[#171717] sm:mt-0 sm:w-auto sm:text-[14px]"
                    >
                      SUBSCRIBE

                      <span className="text-[#D4AF37]">
                        <ArrowIcon />
                      </span>
                    </button>
                  </form>
                )}
              </div>

              <p className="mt-4 text-[11px] font-medium leading-5 text-black/45 sm:text-[12px]">
                Connect this form to your newsletter provider before
                production launch.
              </p>
            </div>
          </article>
        </div>

        {/* DISCLAIMER */}
        <div className="mx-auto mt-7 flex max-w-[860px] items-center gap-3 rounded-[18px] border border-black/[0.07] bg-white/70 px-4 py-4 text-left shadow-[0_10px_30px_rgba(0,0,0,.025)] sm:px-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0A0A0B] text-white">
            <CheckIcon />
          </span>

          <p className="text-[13px] font-medium leading-6 text-black/58 sm:text-[14px] sm:leading-7">
            Replace the Discord placeholder with the final BlackProp invite URL
            and connect the newsletter form to your email provider before publishing.
          </p>
        </div>
      </div>
    </section>
  );
}