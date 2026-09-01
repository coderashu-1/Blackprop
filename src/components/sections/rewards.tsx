const highlights = [
  {
    title: "Clear Evaluation",
    value: "Simple Goals",
    description: "Transparent objectives designed for focused trading.",
    icon: "⚡",
  },
  {
    title: "Global Traders",
    value: "Worldwide",
    description: "A professional environment built for traders globally.",
    icon: "🌎",
  },
  {
    title: "Smart Dashboard",
    value: "Track Progress",
    description: "Monitor your trading journey with a clean interface.",
    icon: "▣",
  },
  {
    title: "Multiple Markets",
    value: "Forex • Crypto",
    description: "Trade across different markets from one platform.",
    icon: "◉",
  },
  {
    title: "Transparent Rules",
    value: "Know Everything",
    description: "Clear requirements with no unnecessary complexity.",
    icon: "◈",
  },
  {
    title: "Trader Growth",
    value: "Scale Better",
    description: "A structure focused on consistency and improvement.",
    icon: "↗",
  },
  {
    title: "Secure Platform",
    value: "Built For Trust",
    description: "Professional infrastructure for serious traders.",
    icon: "✓",
  },
  {
    title: "Performance",
    value: "Execution First",
    description: "Stay focused on strategy and discipline.",
    icon: "◆",
  },
];


function HighlightCard({
  title,
  value,
  description,
  icon,
}: (typeof highlights)[number]) {

  return (
    <article
      className="
      group
      relative
      flex
      h-[190px]
      w-[230px]
      shrink-0
      flex-col
      justify-between
      overflow-hidden
      rounded-[22px]
      border
      border-white/[0.10]
      bg-gradient-to-br
      from-white/[0.08]
      via-white/[0.03]
      to-transparent
      p-4
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-1
      hover:border-[#D4AF37]/40
      hover:shadow-[0_20px_70px_rgba(212,175,55,.15)]
      "
    >

      {/* GOLD GLOW */}
      <div
        className="
        absolute
        -right-10
        -top-10
        h-28
        w-28
        rounded-full
        bg-[#D4AF37]/10
        blur-3xl
        "
      />


      {/* TOP LINE */}
      <div
        className="
        absolute
        left-4
        right-4
        top-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-[#D4AF37]/40
        to-transparent
        "
      />


      <div
        className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-xl
        border
        border-[#D4AF37]/25
        bg-[#D4AF37]/10
        text-[#D4AF37]
        "
      >
        {icon}
      </div>


      <div>

        <p
          className="
          mt-4
          text-[10px]
          font-bold
          uppercase
          tracking-[0.18em]
          text-[#D4AF37]
          "
        >
          {title}
        </p>


        <h3
          className="
          mt-1
          text-lg
          font-black
          text-white
          "
        >
          {value}
        </h3>


        <p
          className="
          mt-2
          text-xs
          leading-5
          text-white/45
          "
        >
          {description}
        </p>

      </div>


    </article>
  );
}



export function Rewards() {

return (

<section
className="
relative
overflow-hidden
bg-[#030303]
py-8
"
>


<div
className="
pointer-events-none
absolute
left-1/2
top-0
h-[250px]
w-[800px]
-translate-x-1/2
rounded-full
bg-[#D4AF37]/10
blur-[120px]
"
/>


<div className="relative overflow-hidden">


<div
className="
pointer-events-none
absolute
inset-y-0
left-0
z-20
w-24
bg-gradient-to-r
from-[#030303]
to-transparent
"
/>


<div
className="
pointer-events-none
absolute
inset-y-0
right-0
z-20
w-24
bg-gradient-to-l
from-[#030303]
to-transparent
"
/>



<div className="rewards-marquee-track flex w-max">

{[0,1].map((group)=>(

<div
key={group}
className="
flex
gap-4
pr-4
"
>

{highlights.map((item)=>(

<HighlightCard
key={`${group}-${item.title}`}
{...item}
/>

))}

</div>

))}

</div>


</div>


</section>

);

}