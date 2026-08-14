"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

/* =========================================================
   BLACKPROP SVG LOGO
========================================================= */

function BPMark({
  width = 42,
  height = 54,
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
      className={`fixed bottom-3 left-3 right-3 z-[80] mx-auto w-auto max-w-[360px] transition-all duration-500 sm:bottom-6 sm:left-6 sm:right-auto sm:mx-0 sm:w-[calc(100%-3rem)] sm:max-w-[390px] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
      aria-live="polite"
    >
      <div className="relative overflow-hidden rounded-[18px] border border-black/[0.08] bg-white/95 p-4 shadow-[0_18px_55px_rgba(0,0,0,.14)] backdrop-blur-xl sm:rounded-[20px]">
        <div className="absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

        <div className="flex items-center gap-3">
          <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-[14px] bg-[#0A0A0B]">
            <BPMark width={20} height={26} color="#FFFFFF" />

            <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-[#F5F3ED] text-[12px]">
              {item.flag}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              <p className="text-[10px] font-black uppercase tracking-[0.13em] text-black/45 sm:text-[11px]">
                Live community activity
              </p>
            </div>

            <p className="mt-1.5 text-[13px] font-bold leading-5 text-[#111] sm:text-[14px]">
              {item.message ??
                `${item.challenge} Challenge is popular with traders in ${item.country}.`}
            </p>

            <p className="mt-1.5 text-[10px] font-medium text-black/42 sm:text-[11px]">
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
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/55 px-0 py-0 backdrop-blur-[7px] sm:items-center sm:px-4 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blackprop-email-title"
    >
      <div className="relative max-h-[92svh] w-full max-w-[560px] overflow-y-auto overflow-x-hidden rounded-t-[26px] border border-white/[0.1] bg-[#0B0B0C] text-white shadow-[0_35px_100px_rgba(0,0,0,.5)] sm:max-h-[90vh] sm:rounded-[30px]">
        <div className="pointer-events-none absolute -right-24 -top-24 hidden h-72 w-72 rounded-full bg-[#D4AF37]/12 blur-[90px] sm:block" />

        <div className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

        <button
          type="button"
          onClick={skipForNow}
          aria-label="Close email popup"
          className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/55 transition hover:bg-white/[0.08] hover:text-white"
        >
          <CloseIcon />
        </button>

        <div className="relative p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:p-8">
          <div className="flex items-center gap-3.5 pr-12">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[15px] border border-white/[0.10] bg-white/[0.04]">
              <BPMark
                width={21}
                height={27}
                color="#FFFFFF"
                className="drop-shadow-[0_1px_1px_rgba(0,0,0,.7)]"
              />
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.15em] text-white/78 sm:text-[12px]">
                BLACKPROP INSIDER
              </p>

              <p className="mt-1 text-[11px] font-medium leading-5 text-white/45 sm:text-[12px]">
                Selected updates. No unnecessary noise.
              </p>
            </div>
          </div>

          <h2
            id="blackprop-email-title"
            className="mt-6 max-w-[460px] text-[2.35rem] font-black uppercase leading-[0.96] tracking-[-0.055em] sm:mt-7 sm:text-[2.9rem]"
          >
            Stay ahead of
            <span className="block text-[#D4AF37]">
              the next move.
            </span>
          </h2>

          <p className="mt-4 max-w-[470px] text-[15px] font-medium leading-7 text-white/60 sm:text-base">
            Get selected BlackProp updates, challenge announcements,
            promotions and important trader news directly in your inbox.
          </p>

          <div className="mt-6 hidden gap-2 sm:grid sm:grid-cols-3">
            {["Challenge news", "Promotions", "Trader updates"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-3 text-center text-[11px] font-bold text-white/55"
                >
                  {item}
                </div>
              ),
            )}
          </div>

          {status === "success" ? (
            <div className="mt-7 rounded-[18px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] p-5">
              <p className="text-base font-black text-white">
                You&apos;re in.
              </p>

              <p className="mt-1 text-[12px] leading-5 text-white/52">
                We&apos;ll send important BlackProp updates to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7">
              <div className="rounded-[18px] border border-white/[0.09] bg-white/[0.045] p-2.5 sm:flex sm:items-center sm:p-2">
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
                    className="h-13 w-full min-w-0 bg-transparent px-3 text-[15px] font-medium text-white outline-none placeholder:text-white/30 sm:text-base"
                    aria-label="Email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group mt-2 flex h-13 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#F5DC7D,#D4AF37_52%,#956A12)] px-6 text-[13px] font-black uppercase text-black transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 sm:mt-0 sm:w-auto sm:text-[14px]"
                >
                  {status === "loading" ? "Joining..." : "Keep me updated"}
                  {status !== "loading" && <ArrowIcon />}
                </button>
              </div>

              {status === "error" && (
                <p className="mt-2 text-[11px] font-medium leading-5 text-red-300 sm:text-[12px]">
                  Couldn&apos;t subscribe right now. Please try again.
                </p>
              )}
            </form>
          )}

          <div className="mt-4 flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <p className="text-[11px] font-medium text-white/35 sm:text-[12px]">
              No spam. Unsubscribe anytime.
            </p>

            <button
              type="button"
              onClick={skipForNow}
              className="text-[12px] font-bold text-white/45 underline decoration-white/15 underline-offset-4 transition hover:text-white/70"
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