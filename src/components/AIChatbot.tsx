"use client";

import { useState } from "react";


function RobotIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-9 w-9">

      <rect
        x="14"
        y="18"
        width="36"
        height="32"
        rx="10"
        fill="#D4AF37"
      />

      <rect
        x="20"
        y="25"
        width="24"
        height="15"
        rx="5"
        fill="#080808"
      />

      <circle cx="27" cy="32" r="3" fill="#D4AF37" />
      <circle cx="37" cy="32" r="3" fill="#D4AF37" />

      <path
        d="M32 18V10"
        stroke="#D4AF37"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <circle cx="32" cy="8" r="3" fill="#D4AF37" />

    </svg>
  );
}


type Message = {
  sender:"bot"|"user";
  text:string;
};


const knowledge = {

  funding:{
    answer:
    "BlackProp uses evaluation programs designed to test your trading skills, discipline and risk management. Successful traders may qualify for a funded account according to the applicable trader agreement.",
    
    follow:[
      "What are the challenge rules?",
      "What account sizes are available?"
    ]
  },


  accounts:{
    answer:
    "BlackProp offers different evaluation account options depending on your trading goals. Each account has specific requirements, limits and objectives.",
    
    follow:[
      "How does evaluation work?",
      "What happens after passing?"
    ]
  },


  rules:{
    answer:
    "Trading rules focus on responsible risk management. Always review the specific challenge requirements before starting your evaluation.",
    
    follow:[
      "Explain drawdown rules",
      "How do I pass the challenge?"
    ]
  },


  pricing:{
    answer:
    "Evaluation pricing depends on the selected program and account type. Choose the challenge that matches your trading approach.",
    
    follow:[
      "Which account is best for beginners?",
      "Can I upgrade later?"
    ]
  },


  beginner:{
    answer:
    "If you are new, start by understanding risk management, trading rules and your evaluation objectives before choosing an account.",
    
    follow:[
      "Give me a beginner roadmap",
      "Explain risk management"
    ]
  }

};


export function AIChatbot(){

const [open,setOpen]=useState(false);

const [messages,setMessages]=useState<Message[]>([
{
sender:"bot",
text:"👋 Hi, I am BlackProp AI. How can I help you today?"
}
]);


const [options,setOptions]=useState([
"How does funding work?",
"Account sizes",
"Trading rules",
"Evaluation pricing",
"Beginner guide"
]);


function ask(question:string){

let key="";


if(question.includes("funding")) key="funding";
else if(question.includes("Account")) key="accounts";
else if(question.includes("rules")||question.includes("drawdown")) key="rules";
else if(question.includes("pricing")) key="pricing";
else key="beginner";


const data=knowledge[key as keyof typeof knowledge];


setMessages(prev=>[
...prev,
{
sender:"user",
text:question
},
{
sender:"bot",
text:data.answer
}
]);


setOptions(data.follow);

}



return(
<>


<button
onClick={()=>setOpen(!open)}
className="
fixed bottom-6 right-6 z-[300]
flex h-16 w-16 items-center justify-center
rounded-full
bg-gradient-to-br from-[#F5DC7D] via-[#D4AF37] to-[#8B6515]
shadow-[0_20px_60px_rgba(212,175,55,.4)]
hover:scale-110 transition
"
>

<div className="
h-12 w-12 rounded-full
bg-black flex items-center justify-center
">

<RobotIcon/>

</div>

</button>



{open && (

<div
className="
fixed bottom-24 right-6 z-[300]
w-[360px]
rounded-[26px]
overflow-hidden
border border-white/10
bg-[#080808]/95
backdrop-blur-xl
shadow-[0_35px_100px_rgba(0,0,0,.7)]
"
>


<div className="
flex items-center gap-3
border-b border-white/10
p-4
">

<div className="
h-10 w-10 rounded-xl
bg-[#D4AF37]
flex items-center justify-center
">

<RobotIcon/>

</div>


<div>

<p className="text-sm font-black text-white">
BlackProp AI
</p>

<p className="text-xs text-green-400">
Online assistant
</p>

</div>

</div>



<div className="
h-[330px]
overflow-y-auto
space-y-3
p-4
">


{messages.map((m,i)=>(

<div
key={i}
className={
m.sender==="bot"
?
"max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 p-3 text-sm text-white/80"
:
"ml-auto max-w-[85%] rounded-2xl bg-[#D4AF37] p-3 text-sm font-bold text-black"
}
>

{m.text}

</div>

))}


</div>



<div className="p-4 border-t border-white/10">


<div className="flex flex-wrap gap-2 mb-3">

{options.map(o=>(

<button
key={o}
onClick={()=>ask(o)}
className="
rounded-full
border border-[#D4AF37]/30
bg-[#D4AF37]/10
px-3 py-2
text-xs
font-bold
text-[#D4AF37]
hover:bg-[#D4AF37]/20
"
>

{o}

</button>

))}

</div>


<button
onClick={()=>{
setMessages([
{
sender:"bot",
text:"👋 Hi, I am BlackProp AI. How can I help you today?"
}
]);

setOptions([
"How does funding work?",
"Account sizes",
"Trading rules",
"Evaluation pricing"
]);

}}
className="
text-xs text-white/40 underline
"
>
Restart conversation
</button>


</div>


</div>

)}


</>
);

}