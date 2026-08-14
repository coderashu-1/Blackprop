"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

/* =========================================================
   BLACKPROP SVG LOGO
========================================================= */

function BPMark({
  width = 42,
  height = 54,
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

/* =========================================================
   TYPES / DATA

   IMPORTANT:
   For real "just bought" notifications, feed this component
   actual purchase events from your backend.
   The built-in fallback uses neutral wording so it is not
   presented as a fabricated purchase.
========================================================= */

type ActivityItem = {
  country: string;
  flag: string;
  challenge: string;
  message?: string;
};

const fallbackActivity: ActivityItem[] = [
  { country: "India", flag: "🇮🇳", challenge: "$50K" },
  { country: "United Kingdom", flag: "🇬🇧", challenge: "$100K" },
  { country: "United States", flag: "🇺🇸", challenge: "$25K" },
  { country: "United Arab Emirates", flag: "🇦🇪", challenge: "$100K" },
  { country: "Canada", flag: "🇨🇦", challenge: "$50K" },
  { country: "Australia", flag: "🇦🇺", challenge: "$25K" },
  { country: "Germany", flag: "🇩🇪", challenge: "$50K" },
  { country: "Singapore", flag: "🇸🇬", challenge: "$100K" },
];

const SUBSCRIBED_KEY = "bp_email_subscribed";
const SNOOZE_KEY = "bp_email_popup_snooze_until";
const SNOOZE_DAYS = 7;

/* =========================================================
   ICONS
========================================================= */

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="m5 5 10 10M15 5 5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m5.5 8 6.5 5 6.5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
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

/* =========================================================
   SOUND
   Browsers block autoplay audio until the visitor interacts
   with the page. We arm the sound after first click/touch/key.
========================================================= */

function playSoftPing() {
  if (typeof window === "undefined") return;

  try {
    const AudioContextClass =
      window.AudioContext ||
      (
        window as typeof window & {
          webkitAudioContext?: typeof AudioContext;
        }
      ).webkitAudioContext;

    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(760, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      540,
      ctx.currentTime + 0.12,
    );

    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.035,
      ctx.currentTime + 0.015,
    );
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      ctx.currentTime + 0.16,
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.17);

    window.setTimeout(() => {
      void ctx.close();
    }, 300);
  } catch {
    // Sound is enhancement only.
  }
}

/* =========================================================
   ACTIVITY POPUP
========================================================= */

function ActivityPopup({
  items,
}: {
  items: ActivityItem[];
}) {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const soundArmed = useRef(false);

  useEffect(() => {
    const armSound = () => {
      soundArmed.current = true;
    };

    window.addEventListener("pointerdown", armSound, { once: true });
    window.addEventListener("keydown", armSound, { once: true });

    return () => {
      window.removeEventListener("pointerdown", armSound);
      window.removeEventListener("keydown", armSound);
    };
  }, []);

  useEffect(() => {
    if (!items.length) return;

    let hideTimer: number | undefined;
    let nextTimer: number | undefined;

    const show = () => {
      setVisible(true);

      if (soundArmed.current) {
        playSoftPing();
      }

      hideTimer = window.setTimeout(() => {
        setVisible(false);

        nextTimer = window.setTimeout(() => {
          setIndex((current) => (current + 1) % items.length);
          show();
        }, 6500 + Math.random() * 4500);
      }, 5200);
    };

    const firstTimer = window.setTimeout(show, 5500);

    return () => {
      window.clearTimeout(firstTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
      if (nextTimer) window.clearTimeout(nextTimer);
    };
  }, [items]);

  const item = items[index];

  if (!item) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-[80] w-[calc(100%-2rem)] max-w-[355px] transition-all duration-500 sm:bottom-6 sm:left-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
      aria-live="polite"
    >
      <div className="relative overflow-hidden rounded-[20px] border border-black/[0.08] bg-white/95 p-3.5 shadow-[0_22px_70px_rgba(0,0,0,.16)] backdrop-blur-xl">
        <div className="absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

        <div className="flex items-center gap-3">
          <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#0A0A0B]">
            <BPMark width={18} height={23} color="#D4AF37" />

            <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-[#F5F3ED] text-[12px]">
              {item.flag}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              <p className="text-[7px] font-black uppercase tracking-[0.16em] text-black/35">
                Live community activity
              </p>
            </div>

            <p className="mt-1 text-[11px] font-bold leading-4 text-[#111]">
              {item.message ??
                `${item.challenge} Challenge is popular with traders in ${item.country}.`}
            </p>

            <p className="mt-1 text-[8px] font-medium text-black/35">
              BlackProp • just now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   EMAIL CAPTURE MODAL
========================================================= */

function EmailCaptureModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    const subscribed =
      window.localStorage.getItem(SUBSCRIBED_KEY) === "1";

    const snoozeUntil = Number(
      window.localStorage.getItem(SNOOZE_KEY) || "0",
    );

    if (subscribed || Date.now() < snoozeUntil) {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        skipForNow();
      }
    };

    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  function skipForNow() {
    const snoozeUntil =
      Date.now() + SNOOZE_DAYS * 24 * 60 * 60 * 1000;

    window.localStorage.setItem(
      SNOOZE_KEY,
      String(snoozeUntil),
    );

    setOpen(false);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!email.trim() || status === "loading") return;

    setStatus("loading");

    try {
      /*
       * Connect this endpoint to your email provider
       * (Brevo / Mailchimp / ConvertKit / your own DB).
       *
       * Expected response: HTTP 2xx.
       */
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          source: "website-popup",
        }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      window.localStorage.setItem(SUBSCRIBED_KEY, "1");
      window.localStorage.removeItem(SNOOZE_KEY);

      setStatus("success");

      window.setTimeout(() => {
        setOpen(false);
      }, 1600);
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-[7px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blackprop-email-title"
    >
      <div className="relative w-full max-w-[520px] overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#0B0B0C] text-white shadow-[0_40px_120px_rgba(0,0,0,.5)]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4AF37]/12 blur-[90px]" />

        <div className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

        <button
          type="button"
          onClick={skipForNow}
          aria-label="Close email popup"
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/45 transition hover:bg-white/[0.08] hover:text-white"
        >
          <CloseIcon />
        </button>

        <div className="relative p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-[16px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07]">
              <BPMark width={22} height={28} color="#D4AF37" />
            </div>

            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#D4AF37]">
                BLACKPROP INSIDER
              </p>

              <p className="mt-1 text-[9px] font-medium text-white/35">
                Selected updates. No unnecessary noise.
              </p>
            </div>
          </div>

          <h2
            id="blackprop-email-title"
            className="mt-7 max-w-[430px] text-[2.25rem] font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-[2.8rem]"
          >
            Stay ahead of
            <span className="block text-[#D4AF37]">
              the next move.
            </span>
          </h2>

          <p className="mt-4 max-w-[430px] text-sm font-medium leading-6 text-white/48">
            Get selected BlackProp updates, challenge announcements,
            promotions and important trader news directly in your inbox.
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-3">
            {["Challenge news", "Promotions", "Trader updates"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2.5 text-center text-[8px] font-bold text-white/45"
                >
                  {item}
                </div>
              ),
            )}
          </div>

          {status === "success" ? (
            <div className="mt-7 rounded-[18px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] p-5">
              <p className="text-sm font-black text-white">
                You&apos;re in.
              </p>

              <p className="mt-1 text-[10px] text-white/45">
                We&apos;ll send important BlackProp updates to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7">
              <div className="rounded-[18px] border border-white/[0.09] bg-white/[0.045] p-2 sm:flex sm:items-center">
                <div className="flex min-w-0 flex-1 items-center">
                  <span className="ml-3 text-[#D4AF37]">
                    <MailIcon />
                  </span>

                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Enter your email address"
                    className="h-12 w-full min-w-0 bg-transparent px-3 text-sm font-medium text-white outline-none placeholder:text-white/25"
                    aria-label="Email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group mt-2 flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#F5DC7D,#D4AF37_52%,#956A12)] px-5 text-[10px] font-black uppercase text-black transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 sm:mt-0 sm:w-auto"
                >
                  {status === "loading" ? "Joining..." : "Keep me updated"}
                  {status !== "loading" && <ArrowIcon />}
                </button>
              </div>

              {status === "error" && (
                <p className="mt-2 text-[9px] font-medium text-red-300">
                  Couldn&apos;t subscribe right now. Please try again.
                </p>
              )}
            </form>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[8px] font-medium text-white/22">
              No spam. Unsubscribe anytime.
            </p>

            <button
              type="button"
              onClick={skipForNow}
              className="text-[9px] font-bold text-white/35 underline decoration-white/15 underline-offset-4 transition hover:text-white/70"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   EXPORT
========================================================= */

export function EngagementPopups({
  activityItems,
}: {
  activityItems?: ActivityItem[];
}) {
  const items = useMemo(
    () =>
      activityItems && activityItems.length
        ? activityItems
        : fallbackActivity,
    [activityItems],
  );

  return (
    <>
      <ActivityPopup items={items} />
      <EmailCaptureModal />
    </>
  );
}