"use client";

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M10 2.5 16 5v4.5c0 4-2.6 6.5-6 8-3.4-1.5-6-4-6-8V5l6-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="m7 10 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function DashboardIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[650px]">

      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />


      <div
        className="
        relative
        rounded-[32px]
        border
        border-white/[0.08]
        bg-[#090909]
        p-3
        shadow-[0_40px_100px_rgba(0,0,0,.65)]
        "
      >

        {/* TOP BAR */}
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.025] px-5 py-4">

          <div className="flex items-center gap-3">

            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
              BP
            </div>

            <div>
              <p className="text-[9px] font-black tracking-[0.18em] text-white/30">
                BLACKPROP
              </p>

              <p className="text-xs font-bold text-white">
                Trader Dashboard
              </p>
            </div>

          </div>


          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">

            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-400">
              Online
            </span>

          </div>

        </div>



        {/* MAIN DASHBOARD */}

        <div className="mt-4 grid gap-4 md:grid-cols-[1.4fr_.8fr]">


          {/* CHART */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">


            <div className="flex justify-between">

              <div>
                <p className="text-[9px] uppercase tracking-wider text-white/30">
                  Account Balance
                </p>

                <p className="mt-2 text-3xl font-black text-white">
                  $124,850
                </p>
              </div>


              <div className="rounded-xl bg-[#D4AF37]/10 px-3 py-2 text-right">

                <p className="text-[8px] text-white/30">
                  Profit
                </p>

                <p className="text-sm font-black text-[#D4AF37]">
                  +8.42%
                </p>

              </div>

            </div>



            {/* GRAPH */}

            <div className="relative mt-8 h-[190px] overflow-hidden rounded-xl bg-black/40">

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                  backgroundSize:"32px 32px"
                }}
              />


              <svg
                viewBox="0 0 500 180"
                className="absolute inset-0 h-full w-full"
              >

                <defs>

                  <linearGradient
                    id="chartGold"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      stopColor="#D4AF37"
                      stopOpacity=".35"
                    />

                    <stop
                      offset="1"
                      stopColor="#D4AF37"
                      stopOpacity="0"
                    />

                  </linearGradient>

                </defs>


                <path
                  d="
                  M10 145
                  C60 130 80 135 120 110
                  C160 85 190 105 230 78
                  C270 55 310 70 350 45
                  C400 20 430 38 490 10
                  V180H10Z"
                  fill="url(#chartGold)"
                />


                <path
                  d="
                  M10 145
                  C60 130 80 135 120 110
                  C160 85 190 105 230 78
                  C270 55 310 70 350 45
                  C400 20 430 38 490 10"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

              </svg>


            </div>

          </div>



          {/* SIDE METRICS */}

          <div className="grid gap-4">


            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5">

              <p className="text-[8px] uppercase tracking-wider text-white/30">
                Trading Status
              </p>


              <p className="mt-3 text-xl font-black text-white">
                Funded
              </p>


              <div className="mt-4 h-2 rounded-full bg-white/10">

                <div className="h-full w-[78%] rounded-full bg-[#D4AF37]" />

              </div>

            </div>



            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5">

              <p className="text-[8px] uppercase tracking-wider text-white/30">
                Risk Score
              </p>

              <p className="mt-3 text-2xl font-black text-emerald-400">
                Low
              </p>


              <p className="mt-2 text-[10px] text-white/35">
                Rules followed perfectly
              </p>

            </div>


          </div>

        </div>


        {/* BOTTOM */}

        <div className="mt-4 flex flex-wrap gap-3">


          {[
            "Instant Analytics",
            "Real Time Data",
            "Secure Platform",
          ].map((item)=>(
            <div
              key={item}
              className="rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-white/40"
            >
              {item}
            </div>
          ))}


        </div>


      </div>


      {/* floating security */}

      <div className="absolute -left-5 top-[35%] rounded-2xl border border-white/[0.08] bg-[#101010]/90 p-4 backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <div className="text-[#D4AF37]">
            <ShieldIcon/>
          </div>


          <div>

            <p className="text-[8px] uppercase tracking-wider text-white/30">
              Security
            </p>

            <p className="text-xs font-black text-white">
              Protected
            </p>

          </div>

        </div>

      </div>


    </div>
  );
}



export function Technology() {

  return (

    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32">


      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[180px]" />


      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">


        <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">


          {/* CONTENT */}

          <div>


            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2">

              <span className="text-[#D4AF37]">
                <ShieldIcon/>
              </span>


              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#DDB94E]">
                Security matters
              </span>

            </div>



            <h2 className="mt-7 text-4xl font-black leading-[.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.8rem]">

              100% Own

              <span className="block bg-gradient-to-r from-white via-white/60 to-[#D4AF37] bg-clip-text text-transparent">
                BlackProp Technology
              </span>

            </h2>



            <p className="mt-6 max-w-[480px] text-sm leading-7 text-white/40 sm:text-base">

              Experience a powerful trader dashboard built for speed,
              transparency and complete control across every device.

            </p>


            <div className="mt-8 grid grid-cols-2 gap-3">

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">

                <p className="text-xl font-black text-white">
                  24/7
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-wider text-white/30">
                  Platform Access
                </p>

              </div>


              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">

                <p className="text-xl font-black text-white">
                  100%
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-wider text-white/30">
                  Proprietary
                </p>

              </div>

            </div>


          </div>



          {/* IMAGE */}

          <DashboardIllustration/>


        </div>


      </div>

    </section>

  );
}