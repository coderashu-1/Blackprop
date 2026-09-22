"use client";

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
   DECORATIVE GRAPHICS
========================================================= */

function SplitGraphic() {
  return (
    <div className="relative mx-auto h-[150px] w-full max-w-[250px] sm:h-[165px]">
      <div className="absolute left-1/2 top-[54%] h-[104px] w-[138px] -translate-x-1/2 -translate-y-1/2 -rotate-[12deg] rounded-[14px] border border-[#9a54e8]/45 bg-[linear-gradient(145deg,#43205e_0%,#2b153e_55%,#17101f_100%)] shadow-[0_22px_45px_rgba(104,32,166,.26)]">
        <div className="absolute inset-0 rounded-[14px] bg-[radial-gradient(circle_at_55%_45%,rgba(172,91,255,.22),transparent_50%)]" />
      </div>

      <div className="absolute left-1/2 top-[50%] h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[8px] border-[#9d4df5]/35">
        <div className="absolute inset-[5px] rounded-full border-[7px] border-[#b34fff]/75 border-l-transparent border-b-transparent" />
        <div className="absolute bottom-[4px] left-[5px] h-[18px] w-[18px] rounded-full bg-[#ca68ff]" />
      </div>

      <div className="absolute left-[13%] top-[50%] h-px w-[26%] border-t border-dashed border-[#9d4df5]/35" />
      <span className="absolute left-[11%] top-[69%] h-1 w-1 rounded-full bg-[#a941ef]/80" />
    </div>
  );
}

function PayoutGraphic() {
  return (
    <div className="relative mx-auto h-[150px] w-full max-w-[250px] sm:h-[165px]">
      <div className="absolute left-1/2 top-[56%] h-[92px] w-[154px] -translate-x-1/2 -translate-y-1/2 rotate-[-28deg] rounded-[14px] border border-[#a25cf2]/40 bg-[linear-gradient(145deg,#321a49,#1c1328)] shadow-[0_22px_45px_rgba(108,33,173,.28)]" />

      <div className="absolute left-1/2 top-[52%] h-[92px] w-[154px] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] rounded-[14px] border border-[#a25cf2]/40 bg-[linear-gradient(145deg,#351a4d,#1b1226)] shadow-[0_22px_45px_rgba(108,33,173,.26)]" />

      <div className="absolute left-1/2 top-[53%] grid h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#b86aff]/45 bg-[#1a1024] shadow-[0_0_28px_rgba(171,75,247,.22)]">
        <BPMark width={17} height={23} color="#d5a0ff" />
      </div>

      <div className="absolute left-[39%] top-[22%] grid h-[34px] w-[34px] place-items-center rounded-full border border-[#b86aff]/45 bg-[#160f1f] shadow-[0_0_24px_rgba(171,75,247,.18)]">
        <BPMark width={10} height={14} color="#d5a0ff" />
      </div>

      <div className="absolute left-[55%] top-[12%] grid h-[28px] w-[28px] place-items-center rounded-full border border-[#b86aff]/45 bg-[#160f1f] shadow-[0_0_22px_rgba(171,75,247,.18)]">
        <BPMark width={8} height={11} color="#d5a0ff" />
      </div>
    </div>
  );
}

function ProtectGraphic() {
  return (
    <div className="relative mx-auto h-[150px] w-full max-w-[250px] sm:h-[165px]">
      <div className="absolute left-[22%] top-[27%] h-px w-[40%] rotate-[23deg] bg-[linear-gradient(90deg,transparent,#8f4df1,transparent)]" />
      <div className="absolute left-[25%] top-[22%] h-px w-[35%] rotate-[23deg] border-t border-dashed border-[#8f4df1]/30" />

      <div className="absolute left-1/2 top-[56%] h-[90px] w-[136px] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-[14px] border border-[#9d54e8]/45 bg-[linear-gradient(145deg,#38204f,#18111f)] shadow-[0_22px_45px_rgba(105,35,168,.28)]" />

      <div className="absolute left-1/2 top-[49%] -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 100 120"
          fill="none"
          className="h-[86px] w-[72px]"
          aria-hidden="true"
        >
          <path
            d="M50 6C27 6 10 21 10 43c0 31 40 67 40 67s40-36 40-67C90 21 73 6 50 6Z"
            fill="rgba(176,82,255,.13)"
            stroke="#C06BFF"
            strokeWidth="4"
          />
          <path
            d="M50 18C34 18 22 28 22 44c0 21 28 47 28 47s28-26 28-47C78 28 66 18 50 18Z"
            stroke="#D08BFF"
            strokeWidth="3"
          />
          <circle cx="50" cy="46" r="7" fill="#D07AFF" />
        </svg>
      </div>
    </div>
  );
}

/* =========================================================
   CARD
========================================================= */

type AddOnCardProps = {
  title: string;
  description: string;
  graphic: React.ReactNode;
};

function AddOnCard({ title, description, graphic }: AddOnCardProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[18px]
        border
        border-[#6f3c8e]/65
        bg-[linear-gradient(155deg,#21162d_0%,#11131b_38%,#0c0e14_100%)]
        px-5
        pb-6
        pt-4
        shadow-[0_20px_60px_rgba(43,17,69,.25)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#a558e9]/80
        hover:shadow-[0_26px_70px_rgba(95,35,150,.30)]
        sm:px-6
        sm:pb-7
        sm:pt-5
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_3%,rgba(130,59,203,.28),transparent_42%)]" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#8e3fe1]/10 blur-3xl" />

      <div className="relative">{graphic}</div>

      <div className="relative mt-1">
        <h3 className="text-[17px] font-bold tracking-[-0.025em] text-white sm:text-[18px]">
          {title}
        </h3>

        <p className="mt-2 text-[12px] leading-5 text-white/48 sm:text-[13px] sm:leading-6">
          {description}
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   SUPPORT / ADD-ONS SECTION
========================================================= */

export function Support() {
  return (
    <section
      id="support"
      className="relative overflow-hidden bg-[#07090d] px-3 py-10 sm:px-5 sm:py-14 lg:px-6 lg:py-16"
    >
      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          overflow-hidden
          rounded-[26px]
          border
          border-[#30223e]
          bg-[#090b11]
          px-4
          pb-10
          pt-10
          shadow-[0_28px_90px_rgba(0,0,0,.28)]
          sm:px-6
          sm:pb-12
          sm:pt-12
          lg:px-14
          lg:pb-14
          lg:pt-12
        "
      >
        {/* BACKGROUND EFFECTS */}
        <div className="pointer-events-none absolute left-1/2 top-[18%] h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,45,177,.22)_0%,rgba(68,24,111,.09)_42%,transparent_72%)]" />

        <div className="pointer-events-none absolute inset-x-0 top-[34%] h-[160px] border-t border-[#472263]/40 [border-radius:50%]" />

        <div className="pointer-events-none absolute left-[8%] top-[14%] h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,.35)]" />
        <div className="pointer-events-none absolute left-[37%] top-[12%] h-1.5 w-1.5 rounded-full bg-[#dfb7ff]/80 shadow-[0_0_12px_rgba(213,150,255,.55)]" />
        <div className="pointer-events-none absolute right-[14%] top-[14%] h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,.35)]" />
        <div className="pointer-events-none absolute right-[7%] top-[24%] h-1 w-1 rounded-full bg-white/75 shadow-[0_0_8px_rgba(255,255,255,.4)]" />
        <div className="pointer-events-none absolute left-[21%] top-[19%] h-1 w-1 rounded-full bg-[#c185ff]/70" />
        <div className="pointer-events-none absolute right-[34%] top-[19%] h-1 w-1 rounded-full bg-[#c185ff]/60" />

        {/* HEADER */}
        <div className="relative mx-auto max-w-[780px] text-center">
          <p className="text-[9px] font-black uppercase tracking-[0.28em] text-[#c37aff] sm:text-[10px]">
            Add-ons
          </p>

          <div className="relative mx-auto mt-2 w-fit">
            <h2 className="text-[2.3rem] font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-[3rem] lg:text-[3.25rem]">
              Tailor your{" "}
              <span className="bg-[linear-gradient(90deg,#c07bff,#b659f1)] bg-clip-text text-transparent">
                Account
              </span>
            </h2>

            <div className="pointer-events-none absolute -right-[88px] top-1/2 hidden h-[3px] w-[78px] -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,#c16cff,transparent)] blur-[1px] sm:block" />
          </div>

          <p className="mx-auto mt-3 max-w-[560px] text-[13px] text-white/48 sm:text-[14px]">
            Customise your account with unique features at checkout.
          </p>
        </div>

        {/* CARDS */}
        <div className="relative mt-10 grid gap-5 md:grid-cols-3 md:gap-6 lg:mt-12 lg:gap-7 xl:gap-8">
          <AddOnCard
            title="Increase Performance Split"
            description="Keep more of what you make by increasing your share to 90%."
            graphic={<SplitGraphic />}
          />

          <AddOnCard
            title="Bi-Weekly Payouts"
            description="Request payouts more frequently—every two weeks."
            graphic={<PayoutGraphic />}
          />

          <AddOnCard
            title="Performance Protect"
            description="Withdraw the remaining of your earnings in the event of a drawdown breach."
            graphic={<ProtectGraphic />}
          />
        </div>

        {/* BOTTOM DECORATION */}
        <div className="pointer-events-none absolute bottom-[28px] left-[9%] h-[3px] w-[95px] rounded-full bg-[#a850f0]/45 blur-[3px]" />
        <div className="pointer-events-none absolute bottom-[8px] left-1/2 h-[3px] w-[80px] -translate-x-1/2 rounded-full bg-[#a850f0]/45 blur-[5px]" />
      </div>
    </section>
  );
}

export default Support;
