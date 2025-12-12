import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VcHero from "@/components/sections/vc-hero";
import VcQualifier from "@/components/sections/vc-qualifier";
import VcRoi from "@/components/sections/vc-roi";
import VcFaq from "@/components/sections/vc-faq";
import AnimatedSection from "@/components/animated-section";
import FinalCta from "@/components/sections/final-cta";
import { CheckCircle2, Rocket, Scaling, Target, BarChart3, Globe2, Coins, Settings2, Users2, Trophy } from "lucide-react";

// AEROPS Pillars for VC-Backed
const vcAeropsPillars = [
  {
    title: "Unit Economics & KPIs",
    original: "Analyse",
    icon: BarChart3,
    description: "Validating your CAC:LTV ratio and cohort retention before scaling spend.",
  },
  {
    title: "Repeatable GTM",
    original: "Expand",
    icon: Globe2,
    description: "Moving from founder-led sales to a scalable, playbook-driven sales engine.",
  },
  {
    title: "ARR Quality & Valuation",
    original: "Revenue",
    icon: Coins,
    description: "Reducing churn and optimising pricing models to maximise valuation multiples.",
  },
  {
    title: "Systems for Scale",
    original: "Operation",
    icon: Settings2,
    description: "Building the governance and tech stack required for Series B due diligence.",
  },
  {
    title: "Executive Hiring",
    original: "People",
    icon: Users2,
    description: "Transitioning from 'generalist startup' to a specialised, high-performance organisation.",
  },
  {
    title: "Liquidity & Exit",
    original: "Success",
    icon: Trophy,
    description: "Aligning today's strategic decisions with your 3-5 year exit horizon.",
  },
];

export default function VcBackedPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <VcHero />

        {/* Section 2: Qualifier */}
        <AnimatedSection>
          <VcQualifier />
        </AnimatedSection>

        {/* Section 2.5: AEROPS Framework */}
        <AnimatedSection>
          <section className="py-16 sm:py-24 bg-white" id="aerops">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  The Operating System for Scale: AEROPS
                </h2>
                <p className="text-lg text-muted-foreground">
                  We install the infrastructure you need to deploy capital efficiently and satisfy board expectations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vcAeropsPillars.map((pillar) => (
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

        {/* Section 3: Mentorship by Stage */}
        <AnimatedSection>
          <section className="py-16 sm:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Strategic Mentorship for Seed & Series A Founders
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                  We understand the distinct challenges at each funding stage. Our approach is tailored to your specific needs, whether you're seeking product-market fit or scaling for the next round.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="bg-primary/10 p-2 rounded-lg">
                         <Rocket className="w-6 h-6 text-primary" />
                      </div>
                      For Seed Stage Startups
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Achieve product-market fit and clarify your core business model.</span></p>
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Develop an accelerated go-to-market strategy for immediate traction.</span></p>
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Build a solid foundation for strategic planning and financial modeling.</span></p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Scaling className="w-6 h-6 text-primary" />
                      </div>
                      For Series A Companies
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Demonstrate repeatable growth processes and scalable operations.</span></p>
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Strengthen your team and establish a clear path to profitability.</span></p>
                    <p className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Prepare for future funding rounds with robust financial and operational governance.</span></p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 4: Consultancy Strategies */}
        <AnimatedSection>
          <section className="py-16 sm:py-24 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Ready for Your Next Round: Growth Consultancy
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our strategies are aligned with VC expectations, focusing on the KPIs that matter most for your growth and future funding success.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Growth Blueprints</h3>
                  <p className="text-muted-foreground">Detailed plans emphasizing revenue growth, customer acquisition, and team scalability.</p>
                </div>
                <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Due Diligence Prep</h3>
                  <p className="text-muted-foreground">Hands-on support in pitch refinement and governance to ensure you're ready for scrutiny.</p>
                </div>
                <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Strategic Network</h3>
                  <p className="text-muted-foreground">Introductions to partners, top hires, and funding sources to accelerate your journey.</p>
                </div>
                <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <Scaling className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Post-Investment</h3>
                    <p className="text-muted-foreground mt-1">Guidance geared towards achieving Series A/B milestones and maximising investor confidence.</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 5: Value Add (Image Right) */}
        <AnimatedSection>
          <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                     <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Team collaborating" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        From Seed to Series B Success
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We position ourselves as an expert partner for ambitious, funded founders who need rapid results and compliance with investor demands.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-primary/10 text-primary rounded-full p-2">
                          <Target className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Proven Track Record</h3>
                        <p className="text-muted-foreground mt-1">We have a history of scaling startups from early concept to robust, investment-ready companies.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-primary/10 text-primary rounded-full p-2">
                          <Rocket className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Tailored Mentoring Programs</h3>
                        <p className="text-muted-foreground mt-1">Using frameworks like AEROPS, we adapt our programs specifically for VC-backed growth trajectories.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-primary/10 text-primary rounded-full p-2">
                          <Scaling className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Full-Spectrum Resources</h3>
                        <p className="text-muted-foreground mt-1">We offer expert resources for pitch deck development, fundraising strategy, market validation, and operational scaling.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button size="lg" asChild>
                      <Link href="/case-studies">View Our Success Stories</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 6: ROI */}
        <AnimatedSection>
            <VcRoi />
        </AnimatedSection>

        {/* Section 7: FAQ */}
        <AnimatedSection>
            <VcFaq />
        </AnimatedSection>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
