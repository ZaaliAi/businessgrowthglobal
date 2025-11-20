import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ForProfitHero from "@/components/sections/for-profit-hero";
import ForProfitQualifier from "@/components/sections/for-profit-qualifier";
import ForProfitRoi from "@/components/sections/for-profit-roi";
import ForProfitFaq from "@/components/sections/for-profit-faq";
import AnimatedSection from "@/components/animated-section";
import FinalCta from "@/components/sections/final-cta";
import { CheckCircle2, Target, TrendingUp, DollarSign, Settings, Users, Award, BarChart3, Globe2, Coins, Settings2, Users2, Trophy } from "lucide-react";

// AEROPS Pillars for For-Profit
const forProfitAeropsPillars = [
  {
    title: "Direction & Clarity",
    original: "Analyse",
    icon: BarChart3,
    description: "Knowing exactly which products/services make money and which lose it.",
  },
  {
    title: "Predictable Growth",
    original: "Expand",
    icon: Globe2,
    description: "Building a marketing and sales engine that doesn't rely on your personal network.",
  },
  {
    title: "Profit & Cashflow",
    original: "Revenue",
    icon: Coins,
    description: "Optimizing pricing and margins to ensure you keep more of what you make.",
  },
  {
    title: "Systems & Process",
    original: "Operation",
    icon: Settings2,
    description: "Documenting 'The Way We Do Things' so the business runs without you.",
  },
  {
    title: "High-Performance Team",
    original: "People",
    icon: Users2,
    description: "Hiring people better than you and trusting them to deliver.",
  },
  {
    title: "Freedom & Exit",
    original: "Success",
    icon: Trophy,
    description: "Building a valuable asset that gives you the option to sell or step back.",
  },
];

export default function ForProfitPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <ForProfitHero />

        {/* Section 2: Qualifier */}
        <AnimatedSection>
          <ForProfitQualifier />
        </AnimatedSection>

        {/* Section 3: AEROPS Framework */}
        <AnimatedSection>
          <section className="py-16 sm:py-24 bg-white" id="aerops">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  The AEROPS System for SME Growth
                </h2>
                <p className="text-lg text-muted-foreground">
                  A proven 6-step framework to take you from "Chaos" to "Control."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {forProfitAeropsPillars.map((pillar) => (
                  <Card key={pillar.title} className="border-2 hover:border-primary/50 transition-colors bg-slate-50/50">
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

        {/* Section 4: The Solution / Mentorship */}
        <AnimatedSection>
          <section className="py-16 sm:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Expert Guidance to Break Through the Ceiling
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                  You don't need more theory. You need a senior operator to help you execute.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="bg-primary/10 p-2 rounded-lg">
                         <Target className="w-6 h-6 text-primary" />
                      </div>
                      Strategic Planning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Quarterly execution plans to keep the team aligned.</span></p>
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Clear KPI dashboards so you can manage by numbers, not gut feel.</span></p>
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Identifying the "One Big Thing" holding you back right now.</span></p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      Team & Culture
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Org chart redesign for future scale (not just current needs).</span></p>
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Hiring support to find leaders who take ownership.</span></p>
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Building a culture of performance and accountability.</span></p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 5: ROI */}
        <AnimatedSection>
            <ForProfitRoi />
        </AnimatedSection>

        {/* Section 6: FAQ */}
        <AnimatedSection>
            <ForProfitFaq />
        </AnimatedSection>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
