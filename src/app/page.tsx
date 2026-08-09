import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Challenges } from "@/components/sections/challenges";
import { CTA } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { ProofStats } from "@/components/sections/proof-stats";
import { TraderStories } from "@/components/sections/trader-stories";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ProfitCalculator } from "@/components/sections/profit-calculator";
import { WhyTradersLove } from "@/components/sections/why-traders-love";
import { Technology } from "@/components/sections/technology";
import { DashboardShowcase } from "@/components/sections/dashboard-showcase";
import { GlobalAccess } from "@/components/sections/global-access";
import { Support } from "@/components/sections/support";
import { Testimonials } from "@/components/sections/testimonials";
import { CommunityCTA } from "@/components/sections/community-cta";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)]">
      <Navbar />
      <Hero />
      <ProofStats />
      <Challenges />
      <HowItWorks />
      <Features />
      <TraderStories />
      <ProfitCalculator />
      <WhyTradersLove />
      <Technology />
      <DashboardShowcase />
      <GlobalAccess />
      <Support />
      <Testimonials />
      <CommunityCTA />
      <Footer />
    </main>
  );
}
