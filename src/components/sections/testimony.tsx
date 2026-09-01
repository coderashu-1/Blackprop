const advantages = [
  {
    title: "Clear Trading Rules",
    text: "Simple objectives and transparent conditions designed for focused trading.",
    icon: "✓",
  },
  {
    title: "Professional Dashboard",
    text: "Monitor your progress, performance and account status in one place.",
    icon: "◉",
  },
  {
    title: "Built For Discipline",
    text: "A structured environment that encourages consistency and better execution.",
    icon: "◈",
  },
  {
    title: "Global Trading Access",
    text: "A modern trading experience designed for traders worldwide.",
    icon: "◎",
  },
  {
    title: "Transparent Process",
    text: "Know your targets, requirements and progress at every stage.",
    icon: "◆",
  },
  {
    title: "Trader Focused",
    text: "Everything built around helping traders focus on performance.",
    icon: "↗",
  },
];


function AdvantageCard({
  title,
  text,
  icon,
}: (typeof advantages)[number]) {
  return (
    <article
      className="
      group
      relative
      flex
      min-h-[190px]
      w-[290px]
      shrink-0
      flex-col
      justify-between
      overflow-hidden
      rounded-[22px]
      border
      border-white/[0.07]
      bg-[linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.012))]
      p-5
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-1
      hover:border-[#D4AF37]/40
      hover:shadow-[0_20px_70px_rgba(212,175,55,.12)]
      sm:w-[320px]
      "
    >

      {/* GOLD LIGHT */}
      <div
        className="
        pointer-events-none
        absolute
        -right-16
        -top-16
        h-36
        w-36
        rounded-full
        bg-[#D4AF37]/[0.06]
        blur-[60px]
        transition-all
        group-hover:bg-[#D4AF37]/[0.14]
        "
      />

      {/* TOP LINE */}
      <div
        className="
        absolute
        left-5
        right-5
        top-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-[#D4AF37]/30
        to-transparent
        "
      />


      <div className="relative z-10">

        <div
          className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-[#D4AF37]/20
          bg-[#D4AF37]/[0.06]
          text-lg
          font-bold
          text-[#D4AF37]
          "
        >
          {icon}
        </div>


        <h3
          className="
          mt-5
          text-[16px]
          font-bold
          text-white
          "
        >
          {title}
        </h3>


        <p
          className="
          mt-2
          text-[13px]
          leading-6
          text-white/45
          "
        >
          {text}
        </p>

      </div>


      <div
        className="
        relative
        z-10
        mt-5
        text-[10px]
        font-bold
        uppercase
        tracking-[0.18em]
        text-[#D4AF37]/60
        "
      >
        BlackProp Advantage
      </div>


    </article>
  );
}



export function Testimony() {

  const rowOne = advantages.slice(0,3);
  const rowTwo = advantages.slice(3);


  return (

<section
id="advantages"
className="
relative
isolate
overflow-hidden
bg-[#030303]
pt-20
pb-14
sm:pt-24
lg:pt-28
"
>


{/* BACKGROUND */}

<div
className="
pointer-events-none
absolute
inset-0
bg-[#030303]
"
/>


<div
className="
pointer-events-none
absolute
left-1/2
top-[35%]
h-[500px]
w-[900px]
-translate-x-1/2
rounded-full
bg-[radial-gradient(circle,rgba(212,175,55,.08),transparent_70%)]
"
/>



{/* HEADER */}

<div
className="
relative
mx-auto
max-w-[1380px]
px-4
text-center
sm:px-6
lg:px-8
"
>


<div
className="
inline-flex
items-center
gap-2
rounded-full
border
border-[#D4AF37]/20
bg-[#D4AF37]/[0.05]
px-4
py-1.5
"
>

<span
className="
h-1.5
w-1.5
rounded-full
bg-[#D4AF37]
"
/>


<span
className="
text-[9px]
font-black
uppercase
tracking-[0.22em]
text-[#E8C962]
"
>
Why BlackProp
</span>


</div>



<h2
className="
mt-5
text-[2rem]
font-black
uppercase
tracking-[-0.05em]
text-white
sm:text-[2.7rem]
lg:text-[3.2rem]
"
>

Built For Traders.

<span
className="
block
bg-gradient-to-r
from-white
via-[#EFD47A]
to-[#D4AF37]
bg-clip-text
text-transparent
"
>

Designed For Performance.

</span>

</h2>



<p
className="
mx-auto
mt-4
max-w-[560px]
text-sm
leading-6
text-white/45
"
>
A professional trading environment built around clarity,
discipline and consistent execution.
</p>


</div>





{/* CARDS */}

<div
className="
relative
mt-12
space-y-4
"
>


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




<div className="reviews-marquee overflow-hidden">

<div className="reviews-track-left flex w-max">


{[0,1].map((group)=>(

<div
key={group}
className="flex gap-4 pr-4"
>

{rowOne.map((item)=>(
<AdvantageCard
key={`${group}-${item.title}`}
{...item}
/>
))}


</div>

))}


</div>

</div>





<div className="reviews-marquee overflow-hidden">

<div className="reviews-track-right flex w-max">


{[0,1].map((group)=>(

<div
key={group}
className="flex gap-4 pr-4"
>

{rowTwo.map((item)=>(
<AdvantageCard
key={`${group}-${item.title}`}
{...item}
/>
))}


</div>

))}


</div>

</div>



</div>



</section>

  );
}