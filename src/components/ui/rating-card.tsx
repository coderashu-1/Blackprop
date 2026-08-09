type RatingCardProps = {
  name: string;
  score: number;
  detail: string;
  badge: string;
  tone?: "gold" | "silver";
};

function Star({ fill }: { fill: number }) {
  const percentage = Math.max(0, Math.min(1, fill)) * 100;

  return (
    <span className="relative inline-block text-[15px] leading-none text-white/10">
      ★

      <span
        className="absolute inset-y-0 left-0 overflow-hidden text-[#E5C35B]"
        style={{ width: `${percentage}%` }}
      >
        ★
      </span>
    </span>
  );
}

export function RatingCard({
  name,
  score,
  detail,
  badge,
  tone = "gold",
}: RatingCardProps) {
  return (
    <div className="group flex min-w-[235px] items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3.5 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.04]">

      {/* LOGO MARK */}
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border text-xs font-black ${
          tone === "gold"
            ? "border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E8C866]"
            : "border-white/[0.12] bg-white/[0.05] text-white/75"
        }`}
      >
        {badge}
      </div>

      <div className="min-w-0 flex-1">

        <div className="mb-1 flex items-center justify-between gap-3">
          <span className="truncate text-xs font-semibold text-white/80">
            {name}
          </span>

          <span className="text-sm font-bold text-white">
            {score.toFixed(1)}
          </span>
        </div>

        <div
          className="flex items-center gap-[1px]"
          aria-label={`${score} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              fill={score - index}
            />
          ))}
        </div>

        <p className="mt-1 text-[10px] text-white/30">
          {detail}
        </p>
      </div>
    </div>
  );
}