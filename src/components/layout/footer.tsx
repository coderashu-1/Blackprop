import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-black/50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
              BlackProp is a frontend concept for a modern prop-trading brand. Replace placeholder rules, pricing, legal copy, and links before production use.
            </p>
          </div>
          {[
            ["Trading", "Challenges", "How It Works", "Platforms"],
            ["Company", "About", "Affiliate", "Contact"],
            ["Legal", "Terms", "Privacy", "Risk Disclosure"],
          ].map(([title, ...items]) => (
            <div key={title}>
              <p className="text-sm font-semibold text-white">{title}</p>
              <div className="mt-4 grid gap-3 text-sm text-white/45">
                {items.map((item) => <a key={item} href="#" className="transition hover:text-white">{item}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BlackProp. All rights reserved.</p>
          <p>Trading involves risk. Demo content only.</p>
        </div>
      </div>
    </footer>
  );
}
