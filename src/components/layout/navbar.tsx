import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#070707]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-white/65 lg:flex">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#" className="hidden rounded-full px-4 py-2 text-sm text-white/75 transition hover:text-white sm:block">
            Login
          </a>
          <a href="#challenges" className="gold-button rounded-full px-4 py-2.5 text-sm font-semibold text-black sm:px-5">
            Get Funded
          </a>
        </div>
      </div>
    </header>
  );
}
