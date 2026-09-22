"use client";

import { useState } from "react";

function RobotIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="h-8 w-8 sm:h-9 sm:w-9"
      aria-hidden="true"
    >
      <rect
        x="14"
        y="18"
        width="36"
        height="32"
        rx="10"
        fill="#A734F7"
      />

      <rect
        x="20"
        y="25"
        width="24"
        height="15"
        rx="5"
        fill="#0B0C13"
      />

      <circle cx="27" cy="32" r="3" fill="#BE6CFF" />
      <circle cx="37" cy="32" r="3" fill="#BE6CFF" />

      <path
        d="M32 18V10"
        stroke="#BE6CFF"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <circle cx="32" cy="8" r="3" fill="#BE6CFF" />
    </svg>
  );
}

type Message = {
  sender: "bot" | "user";
  text: string;
};

const knowledge = {
  funding: {
    answer:
      "BlackProp uses evaluation programs designed to test your trading skills, discipline and risk management. Successful traders may qualify for a funded account according to the applicable trader agreement.",
    follow: [
      "What are the challenge rules?",
      "What account sizes are available?",
    ],
  },

  accounts: {
    answer:
      "BlackProp offers different evaluation account options depending on your trading goals. Each account has specific requirements, limits and objectives.",
    follow: [
      "How does evaluation work?",
      "What happens after passing?",
    ],
  },

  rules: {
    answer:
      "Trading rules focus on responsible risk management. Always review the specific challenge requirements before starting your evaluation.",
    follow: [
      "Explain drawdown rules",
      "How do I pass the challenge?",
    ],
  },

  pricing: {
    answer:
      "Evaluation pricing depends on the selected program and account type. Choose the challenge that matches your trading approach.",
    follow: [
      "Which account is best for beginners?",
      "Can I upgrade later?",
    ],
  },

  beginner: {
    answer:
      "If you are new, start by understanding risk management, trading rules and your evaluation objectives before choosing an account.",
    follow: [
      "Give me a beginner roadmap",
      "Explain risk management",
    ],
  },
};

const initialOptions = [
  "How does funding work?",
  "Account sizes",
  "Trading rules",
  "Evaluation pricing",
  "Beginner guide",
];

export function AIChatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "👋 Hi, I am BlackProp AI. How can I help you today?",
    },
  ]);

  const [options, setOptions] = useState(initialOptions);

  function ask(question: string) {
    const normalized = question.toLowerCase();

    let key: keyof typeof knowledge = "beginner";

    if (normalized.includes("funding")) key = "funding";
    else if (
      normalized.includes("account") ||
      normalized.includes("evaluation")
    )
      key = "accounts";
    else if (
      normalized.includes("rules") ||
      normalized.includes("drawdown") ||
      normalized.includes("pass")
    )
      key = "rules";
    else if (
      normalized.includes("pricing") ||
      normalized.includes("upgrade")
    )
      key = "pricing";

    const data = knowledge[key];

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
      {
        sender: "bot",
        text: data.answer,
      },
    ]);

    setOptions(data.follow);
  }

  function restartConversation() {
    setMessages([
      {
        sender: "bot",
        text: "👋 Hi, I am BlackProp AI. How can I help you today?",
      },
    ]);

    setOptions(initialOptions);
  }

  return (
    <>
      {/* CHAT TRIGGER */}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close BlackProp AI chat" : "Open BlackProp AI chat"}
        aria-expanded={open}
        className="
          fixed
          bottom-[max(16px,env(safe-area-inset-bottom))]
          right-4
          z-[300]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-[#BE6CFF]/35
          bg-[linear-gradient(135deg,#6557FF_0%,#8F28F3_50%,#B23CF6_100%)]
          shadow-[0_16px_45px_rgba(143,40,243,.38),0_0_24px_rgba(190,108,255,.16)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
          hover:shadow-[0_20px_55px_rgba(143,40,243,.46),0_0_30px_rgba(190,108,255,.22)]
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#BE6CFF]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#05070B]
          sm:bottom-6
          sm:right-6
          sm:h-16
          sm:w-16
        "
      >
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.08]
            bg-[#0B0C13]
            shadow-[inset_0_1px_0_rgba(255,255,255,.04)]
            sm:h-12
            sm:w-12
          "
        >
          <RobotIcon />
        </div>
      </button>

      {/* CHAT PANEL */}
      {open && (
        <div
          className="
            fixed
            bottom-[84px]
            left-3
            right-3
            z-[300]
            mx-auto
            w-auto
            max-w-[380px]
            overflow-hidden
            rounded-[24px]
            border
            border-[#8F4BC1]/30
            bg-[#0D0D14]/95
            text-white
            shadow-[0_35px_100px_rgba(23,6,40,.72),0_0_50px_rgba(143,40,243,.12)]
            backdrop-blur-2xl

            sm:bottom-24
            sm:left-auto
            sm:right-6
            sm:mx-0
            sm:w-[380px]
            sm:rounded-[26px]
          "
        >
          {/* TOP PURPLE GLOW */}
          <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[#BE6CFF]/90 to-transparent shadow-[0_0_16px_rgba(190,108,255,.45)]" />

          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#8F28F3]/15 blur-[80px]" />

          {/* HEADER */}
          <div
            className="
              relative
              flex
              items-center
              gap-3
              border-b
              border-white/[0.08]
              bg-[#111019]/75
              p-4
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-[#BE6CFF]/30
                bg-[#1A1323]
                shadow-[0_8px_24px_rgba(143,40,243,.15)]
              "
            >
              <RobotIcon />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-black text-white">
                BlackProp AI
              </p>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.55)]" />
                <p className="text-[11px] font-medium text-white/45">
                  Online assistant
                </p>
              </div>
            </div>
          </div>

          {/* MESSAGES */}
          <div
            className="
              relative
              h-[300px]
              space-y-3
              overflow-y-auto
              p-4
              [scrollbar-color:#3A2450_transparent]
              [scrollbar-width:thin]

              sm:h-[330px]
            "
          >
            {messages.map((message, index) => (
              <div
                key={`${message.sender}-${index}`}
                className={
                  message.sender === "bot"
                    ? "max-w-[87%] rounded-2xl rounded-tl-sm border border-white/[0.06] bg-[#171822] p-3 text-[13px] leading-5 text-white/72 shadow-[0_8px_18px_rgba(0,0,0,.14)] sm:text-sm"
                    : "ml-auto max-w-[87%] rounded-2xl rounded-tr-sm bg-[linear-gradient(135deg,#7A3CF0_0%,#A734F7_100%)] p-3 text-[13px] font-semibold leading-5 text-white shadow-[0_10px_24px_rgba(143,40,243,.22)] sm:text-sm"
                }
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* OPTIONS */}
          <div
            className="
              relative
              border-t
              border-white/[0.08]
              bg-[#0F0F17]
              p-4
            "
          >
            <div className="mb-3 flex flex-wrap gap-2">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => ask(option)}
                  className="
                    rounded-full
                    border
                    border-[#BE6CFF]/25
                    bg-[#8F28F3]/[0.10]
                    px-3
                    py-2
                    text-[11px]
                    font-bold
                    text-[#D3A3FF]
                    transition-all
                    duration-200
                    hover:border-[#BE6CFF]/45
                    hover:bg-[#8F28F3]/[0.18]
                    hover:text-white
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#BE6CFF]/70
                    sm:text-xs
                  "
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={restartConversation}
              className="
                text-[11px]
                font-medium
                text-white/35
                underline
                decoration-white/15
                underline-offset-4
                transition
                hover:text-[#C98AFF]
                sm:text-xs
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

export default AIChatbot;
