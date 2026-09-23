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
  { country: "United Kingdom", flag: "🇬🇧", challenge: "$200K" },
  { country: "United States", flag: "🇺🇸", challenge: "$200K" },
  { country: "India", flag: "🇮🇳", challenge: "$50K" },
  { country: "South Africa", flag: "🇿🇦", challenge: "$50K" },
  { country: "Nigeria", flag: "🇳🇬", challenge: "$50K" },
  { country: "Philippines", flag: "🇵🇭", challenge: "$50K" },
  { country: "Canada", flag: "🇨🇦", challenge: "$100K" },
  { country: "Germany", flag: "🇩🇪", challenge: "$100K" },
];

const SUBSCRIBED_KEY = "bp_email_subscribed";
const SNOOZE_KEY = "bp_email_popup_snooze_until";
const SNOOZE_DAYS = 7;

// Popup timing controls
const ACTIVITY_FIRST_DELAY = 12000;
const ACTIVITY_VISIBLE_TIME = 6000;
const ACTIVITY_NEXT_DELAY_MIN = 12000;
const ACTIVITY_NEXT_DELAY_MAX = 18000;
const EMAIL_POPUP_DELAY = 6500;

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
  const soundPlayed = useRef(false);

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

      // Play only once for every popup appearance.
      if (soundArmed.current && !soundPlayed.current) {
        soundPlayed.current = true;
        playSoftPing();
      }

      hideTimer = window.setTimeout(() => {
        setVisible(false);
        soundPlayed.current = false;

        nextTimer = window.setTimeout(() => {
          setIndex((current) => (current + 1) % items.length);
          show();
        }, ACTIVITY_NEXT_DELAY_MIN + Math.random() * (ACTIVITY_NEXT_DELAY_MAX - ACTIVITY_NEXT_DELAY_MIN));
      }, ACTIVITY_VISIBLE_TIME);
    };

    const firstTimer = window.setTimeout(show, ACTIVITY_FIRST_DELAY);

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
      className={`fixed bottom-[max(12px,env(safe-area-inset-bottom))] left-3 right-3 z-[80] mx-auto w-auto w-[calc(100vw-24px)] max-w-[340px] transition-all duration-500 sm:bottom-6 sm:left-6 sm:right-auto sm:mx-0 sm:w-[340px] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
      aria-live="polite"
    >
      <div className="relative overflow-hidden rounded-[18px] border border-[#dfcdf3] bg-[#fffaf5] p-3.5 text-[#17121f] shadow-[0_18px_55px_rgba(0,0,0,.18)] backdrop-blur-2xl sm:rounded-[20px] sm:p-4">
        <div className="absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-[#be6cff]/80 to-transparent shadow-[0_0_12px_rgba(190,108,255,.45)]" />

        <div className="flex items-start gap-3">
          <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-[12px] border border-[#8f4bc1]/30 bg-[#f1e8ff] shadow-[inset_0_1px_0_rgba(255,255,255,.8)]">
            <BPMark width={16} height={21} color="#17121f" />

            <span className="absolute -bottom-1 -right-1 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-[#fffaf5] bg-[#eadcff] text-[10px]">
              {item.flag}
            </span>
          </div>

          <div className="min-w-0 flex-1 pr-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#be6cff] shadow-[0_0_8px_rgba(190,108,255,.75)]" />

              <p className="text-[9px] font-black uppercase tracking-[0.13em] text-[#7c5a99] sm:text-[10px]">
                Live community activity
              </p>
            </div>

            <p className="mt-1.5 text-[11px] font-bold leading-4 text-[#21182b] sm:text-[13px] sm:leading-5">
              {item.message ??
                `${item.challenge} Challenge is popular with traders.`}
            </p>

            <p className="mt-1 text-[11px] font-bold text-[#6d4a8a]">
              {item.flag} {item.country}
            </p>

            <p className="mt-1 text-[9px] font-medium text-[#75677f] sm:text-[10px]">
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
    }, EMAIL_POPUP_DELAY);

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
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#030308]/72 px-0 py-0 backdrop-blur-[10px] sm:items-center sm:px-4 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blackprop-email-title"
    >
      <div className="relative max-h-[92svh] w-full max-w-[590px] overflow-y-auto overflow-x-hidden rounded-t-[28px] border border-[#8f4bc1]/30 bg-[#0d0d14] text-white shadow-[0_35px_110px_rgba(29,8,48,.62)] sm:max-h-[90vh] sm:rounded-[32px]">
        <div className="pointer-events-none absolute -right-24 -top-24 hidden h-72 w-72 rounded-full bg-[#8f28f3]/20 blur-[95px] sm:block" />
        <div className="pointer-events-none absolute -left-24 bottom-[-80px] h-56 w-56 rounded-full bg-[#6f2cc8]/10 blur-[90px]" />

        <div className="absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[#be6cff]/90 to-transparent shadow-[0_0_16px_rgba(190,108,255,.5)]" />

        <button
          type="button"
          onClick={skipForNow}
          aria-label="Close email popup"
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-[#8f4bc1]/25 bg-[#18131f] text-white/55 transition hover:border-[#be6cff]/45 hover:bg-[#21152c] hover:text-white sm:h-11 sm:w-11"
        >
          <CloseIcon />
        </button>

        <div className="relative p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:p-8 md:p-9">
          <div className="flex items-start gap-3.5 pr-12">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[15px] border border-[#8f4bc1]/30 bg-[#1a1323] shadow-[inset_0_1px_0_rgba(255,255,255,.04)]">
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
            className="mt-6 max-w-[480px] text-[2.05rem] font-black uppercase leading-[0.96] tracking-[-0.055em] min-[420px]:text-[2.35rem] sm:mt-7 sm:text-[2.9rem]"
          >
            Stay ahead of
            <span className="block bg-[linear-gradient(90deg,#d5a1ff_0%,#be6cff_45%,#9744f5_100%)] bg-clip-text text-transparent">
              the next move.
            </span>
          </h2>

          <p className="mt-4 max-w-[490px] text-[13px] font-medium leading-6 text-white/58 min-[420px]:text-[14px] sm:text-base sm:leading-7">
            Get selected BlackProp updates, challenge announcements,
            promotions and important trader news directly in your inbox.
          </p>

          <div className="mt-6 hidden gap-2 sm:grid sm:grid-cols-3">
            {["Challenge news", "Promotions", "Trader updates"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#74439a]/25 bg-[#15101c] px-3 py-3 text-center text-[11px] font-bold text-white/58 transition hover:border-[#a556d9]/35 hover:bg-[#1b1224]"
                >
                  {item}
                </div>
              ),
            )}
          </div>

          {status === "success" ? (
            <div className="mt-7 rounded-[18px] border border-[#9e4cff]/30 bg-[#8f28f3]/[0.10] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.03)]">
              <p className="text-base font-black text-white">
                You&apos;re in.
              </p>

              <p className="mt-1 text-[12px] leading-5 text-white/52">
                We&apos;ll send important BlackProp updates to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7">
              <div className="rounded-[18px] border border-[#7c438f]/30 bg-[#15121c] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,.025)] sm:flex sm:items-center sm:p-2">
                <div className="flex min-w-0 flex-1 pr-2 items-center">
                  <span className="ml-3 text-[#be6cff]">
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
                    className="h-12 w-full min-w-0 bg-transparent px-3 text-[14px] font-medium text-white outline-none placeholder:text-white/28 sm:h-13 sm:text-base"
                    aria-label="Email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group mt-2 flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(100deg,#6557ff_0%,#8b45ff_46%,#b23cf6_100%)] px-6 text-[13px] font-black uppercase text-white shadow-[0_12px_28px_rgba(137,60,237,.28)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-wait disabled:opacity-60 sm:mt-0 sm:h-13 sm:w-auto sm:text-[14px]"
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