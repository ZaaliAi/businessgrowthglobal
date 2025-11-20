import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import NonProfitHero from "@/components/sections/non-profit-hero";
import NonProfitForm from "@/components/sections/non-profit-form";
import NonProfitFAQ from "@/components/sections/non-profit-faq";
import NonProfitQualifier from "@/components/sections/non-profit-qualifier";
import NonProfitROI from "@/components/sections/non-profit-roi";
import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Globe2,
  Coins,
  Settings2,
  Users2,
  Trophy,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// AEROPS Pillars for Non-Profits
const aeropsPillars = [
  {
    letter: "A",
    title: "Impact Measurement",
    original: "Analyse",
    icon: BarChart3,
    description: "Proving your model to donors and the Board.",
  },
  {
    letter: "E",
    title: "Sustainable Scale",
    original: "Expand",
    icon: Globe2,
    description: "Expanding program reach without breaking the team.",
  },
  {
    letter: "R",
    title: "Funding Diversity",
    original: "Revenue",
    icon: Coins,
    description: "Reducing the 'grant treadmill' through income diversity & tax efficiency.",
  },
  {
    letter: "O",
    title: "Resource Maximization",
    original: "Operation",
    icon: Settings2,
    description: "Ensuring more 'cents on the dollar' reaches the frontline.",
  },
  {
    letter: "P",
    title: "Volunteer & Staff Retention",
    original: "People",
    icon: Users2,
    description: "Ending 'Founder Dependency' and preventing burnout in mission-driven teams.",
  },
  {
    letter: "S",
    title: "Mission Longevity",
    original: "Success",
    icon: Trophy,
    description: "Succession planning to ensure the mission survives the founder.",
  },
];

export default function NonProfitsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Section 1: Hero */}
        <NonProfitHero />

        {/* Section 1.5: Qualifier */}
        <AnimatedSection>
           <NonProfitQualifier />
        </AnimatedSection>

        {/* Section 2: The Problem (Agitation) */}
        <AnimatedSection>
          <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                    The "Overhead Myth" is holding you back.
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    You started this non-profit to change lives, not to manage spreadsheets, chase invoices, or wrestle with compliance. But as you grow, the operational complexity grows faster than your funding.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="mt-1 bg-red-100 p-2 rounded-full h-fit">
                          <Settings2 className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Founder Bottleneck</h3>
                        <p className="text-muted-foreground">You are the bottleneck. If you stepped away for a month, would the mission pause? We help you build systems that survive the founder.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 bg-red-100 p-2 rounded-full h-fit">
                          <Coins className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Funding Rollercoaster</h3>
                        <p className="text-muted-foreground">Relying on one big grant per year creates instability.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 bg-red-100 p-2 rounded-full h-fit">
                          <Users2 className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Burnout</h3>
                        <p className="text-muted-foreground">High staff turnover because the systems are broken.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                   <Image
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
                      alt="Stressed non-profit leader looking at paperwork"
                      fill
                      className="object-cover"
                   />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 3: The Solution (AEROPS Framework) */}
        <AnimatedSection>
          <section className="py-16 sm:py-24 bg-stone-50" id="how-it-works">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  The Solution: AEROPS for Non-Profits
                </h2>
                <p className="text-lg text-muted-foreground">
                  We don't just give advice. We use <span className="font-semibold text-foreground">AEROPS </span>the same framework used by high-growth tech companies, adapted for the unique constraints of the charity sector.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aeropsPillars.map((pillar) => (
                  <Card key={pillar.title} className="border-2 hover:border-primary/50 transition-colors bg-white">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                        <pillar.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 4: The Offer (Mentorship) */}
        <AnimatedSection>
          <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-white">
                    Expert Mentorship, Not Expensive Consulting.
                  </h2>
                  <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                    You don't need a 100-page report. You need hands-on guidance. Our Growth Mentors are seasoned operators who have scaled organizations before. They work alongside you to fix specific bottlenecks. This is true 'Capacity Building'—investing in the engine so the car can go further.
                  </p>
                  <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                      Partner Access
                    </h3>
                    <p className="text-primary-foreground/90">
                      We offer 2-3 complimentary sessions to eligible non-profits to tackle one specific challenge (e.g., "Fixing Volunteer Churn" or "Diversifying Income").
                    </p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  {/* Visual placeholder for mentorship */}
                   <div className="relative w-full max-w-md aspect-square bg-white/5 rounded-full flex items-center justify-center border-2 border-dashed border-white/20 p-12 text-center">
                      <div>
                          <p className="text-2xl font-bold mb-2">Hands-on Guidance</p>
                          <p className="opacity-80">No generic advice. Real solutions.</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        

        {/* Section 5.5: ROI / Business Case */}
        <AnimatedSection>
          <NonProfitROI />
        </AnimatedSection>

        {/* Section 6: FAQ */}
        <AnimatedSection>
           <NonProfitFAQ />
        </AnimatedSection>

        {/* Section 7: Footer CTA & Form */}
        <div className="relative">
            <NonProfitForm />
        </div>
        
        {/* Sticky CTA for Mobile/Desktop scroll */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t z-50 sm:hidden">
            <Button size="lg" className="w-full shadow-lg" asChild>
                <Link href="#audit-form">Book Free Audit</Link>
            </Button>
        </div>

      </main>
      <Footer />
    </>
  );
}
