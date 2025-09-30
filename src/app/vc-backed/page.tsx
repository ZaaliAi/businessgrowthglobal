import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CaseStudiesHero from "@/components/sections/case-studies-hero";
import FinalCta from "@/components/sections/final-cta";
import { CheckCircle2, Rocket, Scaling, Target } from "lucide-react";

export default function VcBackedPage() {
  return (
    <>
      <Header />
      <main>
        <CaseStudiesHero
          title="VC-Backed Enterprise Solutions"
          subtitle="Accelerating Growth for Seed & Series A Startups"
          description="Tailored mentorship and growth consultancy designed to meet the unique challenges of venture-backed enterprises. We help you scale, secure funding, and build a foundation for long-term success."
          imageUrl="/placeholder.jpg"
        />

        {/* Understanding Seed & Series A Needs */}
        <section className="py-16 sm:py-20">
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Rocket className="w-8 h-8 text-primary" />
                    For Seed Stage Startups
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Achieve product-market fit and clarify your core business model.</span></p>
                  <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Develop an accelerated go-to-market strategy for immediate traction.</span></p>
                  <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Build a solid foundation for strategic planning and financial modeling.</span></p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Scaling className="w-8 h-8 text-primary" />
                    For Series A Companies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Demonstrate repeatable growth processes and scalable operations.</span></p>
                  <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Strengthen your team and establish a clear path to profitability.</span></p>
                  <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span>Prepare for future funding rounds with robust financial and operational governance.</span></p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Proven Consultancy Strategies */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Ready for Your Next Round: Growth Consultancy
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Our strategies are aligned with VC expectations, focusing on the KPIs that matter most for your growth and future funding success.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold">Growth Blueprints</h3>
                <p className="text-muted-foreground mt-2">Detailed plans emphasizing revenue growth, customer acquisition, and team scalability.</p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold">Due Diligence Prep</h3>
                <p className="text-muted-foreground mt-2">Hands-on support in pitch refinement and governance to ensure you're ready for scrutiny.</p>
              </div>
              <div className="text-center">
                <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold">Strategic Network</h3>
                <p className="text-muted-foreground mt-2">Introductions to partners, top hires, and funding sources to accelerate your journey.</p>
              </div>
              <div className="text-center">
                <Scaling className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold">Post-Investment Mentorship</h3>
                <p className="text-muted-foreground mt-2">Guidance geared towards achieving Series A/B milestones and maximizing investor confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Value-Add Messaging */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Boosting Your Path from Seed to Series B Success
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We position ourselves as an expert partner for ambitious, funded founders who need rapid results and compliance with investor demands.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Team collaborating" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-full p-3">
                      <Target className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Proven Track Record</h3>
                    <p className="text-muted-foreground mt-1">We have a history of scaling startups from early concept to robust, investment-ready companies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-full p-3">
                      <Rocket className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tailored Mentoring Programs</h3>
                    <p className="text-muted-foreground mt-1">Using frameworks like AEROPS, we adapt our programs specifically for VC-backed growth trajectories.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-full p-3">
                      <Scaling className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Full-Spectrum Resources</h3>
                    <p className="text-muted-foreground mt-1">We offer expert resources for pitch deck development, fundraising strategy, market validation, and operational scaling.</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/case-studies">View Our Success Stories</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
