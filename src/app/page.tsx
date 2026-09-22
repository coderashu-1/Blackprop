import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Challenges } from "@/components/sections/challenges";
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
import { Testimony } from "@/components/sections/testimony";
import { CommunityCTA } from "@/components/sections/community-cta";
import { Rewards } from "@/components/sections/rewards";
import { TrustedCompanion } from "@/components/sections/trusted-companion";

import { FaqCommunity } from "@/components/sections/faq-community";



export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)]">
      <Navbar />
      <Hero />
      <ProofStats />
      <Challenges />
      <HowItWorks />
      <Support />
      <ProfitCalculator />
      <Rewards />
      <Testimony />
      <DashboardShowcase />
      <WhyTradersLove />
      {/* <GlobalAccess /> */}
      {/* <CommunityCTA /> */}
      <FaqCommunity/>
      <TrustedCompanion />
      <Footer />
    </main>
  );
}