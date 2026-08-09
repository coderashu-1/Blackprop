"use client";

import { FormEvent, useState } from "react";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M4 10h12M11.5 5.5 16 10l-4.5 4.5"
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
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m5 10.2 3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
    <section className="relative overflow-hidden bg-[#FBFAF7] py-24 sm:py-28 lg:py-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[170px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.02) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-[720px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-[#F0EFEA] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/45">
              Stay Connected
            </span>
          </div>

          <h2 className="mt-7 text-[3rem] font-black leading-[0.94] tracking-[-0.06em] text-[#080808] sm:text-[4.4rem]">
            Stay close to
            <span className="block bg-[linear-gradient(100deg,#111_0%,#444_35%,#C99D34_72%,#775109_100%)] bg-clip-text text-transparent">
              BlackProp.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-sm leading-7 text-black/40 sm:text-base">
            Join the community or get important BlackProp updates
            delivered straight to your inbox.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* COMMUNITY */}
          <div className="relative overflow-hidden rounded-[30px] border border-black/[0.07] bg-white/75 p-7 shadow-[0_24px_70px_rgba(50,40,15,.07)] backdrop-blur-xl sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.07]">
                  <span className="text-sm font-black text-[#9A7218]">
                    BP
                  </span>
                </div>

                <span className="rounded-full border border-black/[0.06] bg-[#F4F2EC] px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.14em] text-black/35">
                  Community
                </span>
              </div>

              <div className="mt-10">
                <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#A47A19]">
                  BlackProp Network
                </p>

                <h3 className="mt-3 max-w-[420px] text-[2.4rem] font-black leading-[0.97] tracking-[-0.05em] text-[#080808] sm:text-[3rem]">
                  Join the conversation.
                </h3>

                <p className="mt-5 max-w-[420px] text-sm leading-7 text-black/40">
                  Connect with other traders, discuss ideas and stay
                  involved with the BlackProp community.
                </p>
              </div>

              <a
                href="#community"
                className="gold-button group mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-xl px-6 text-[10px] font-black text-black"
              >
                Join Community

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="relative overflow-hidden rounded-[30px] border border-black/[0.07] bg-[#F0ECE1] p-7 shadow-[0_24px_70px_rgba(50,40,15,.07)] sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4AF37]/15 blur-[90px]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-black/[0.06] bg-white/55 text-[#9A7218]">
                  @
                </div>

                <span className="rounded-full border border-black/[0.06] bg-white/45 px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.14em] text-black/35">
                  Updates
                </span>
              </div>

              <div className="mt-10">
                <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#A47A19]">
                  BlackProp Inbox
                </p>

                <h3 className="mt-3 max-w-[430px] text-[2.4rem] font-black leading-[0.97] tracking-[-0.05em] text-[#080808] sm:text-[3rem]">
                  Don&apos;t miss what&apos;s next.
                </h3>

                <p className="mt-5 max-w-[430px] text-sm leading-7 text-black/40">
                  Receive product announcements, selected promotions and
                  important BlackProp updates.
                </p>
              </div>

              <div className="mt-8">
                {submitted ? (
                  <div
                    role="status"
                    className="flex min-h-[60px] items-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-white/60 px-4"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#D4AF37]/10 text-[#9B7319]">
                      <CheckIcon />
                    </span>

                    <div>
                      <p className="text-[10px] font-black text-black/65">
                        You&apos;re on the list.
                      </p>

                      <p className="mt-0.5 text-[8px] text-black/35">
                        Demo signup complete.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-black/[0.07] bg-white/65 p-2 shadow-[inset_0_1px_0_white] sm:flex sm:items-center"
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
                      className="h-12 w-full min-w-0 bg-transparent px-4 text-sm text-black outline-none placeholder:text-black/28"
                    />

                    <button
                      type="submit"
                      className="group mt-2 flex h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-[#0A0A0A] px-6 text-[10px] font-black text-white transition hover:bg-[#181818] sm:mt-0 sm:w-auto"
                    >
                      Subscribe

                      <span className="text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowIcon />
                      </span>
                    </button>
                  </form>
                )}
              </div>

              <p className="mt-4 text-[8px] leading-4 text-black/28">
                No spam. Connect this form to your email provider before
                launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}