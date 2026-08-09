import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="BlackProp home">
      <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <span className="relative block size-4 rotate-45 border-2 border-[var(--gold)]">
          <span className="absolute -right-1 -top-1 size-2 border border-[var(--silver)] bg-[var(--background)]" />
        </span>
      </span>
      <span className="text-lg font-semibold tracking-[-0.04em] text-white">
        Black<span className="text-[var(--gold)]">Prop</span>
      </span>
    </Link>
  );
}
