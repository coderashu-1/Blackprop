import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Challenges } from "@/components/sections/challenges";
import { CTA } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)]">
      <Navbar />
      <Hero />
      <Challenges />
      <HowItWorks />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
