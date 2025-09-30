import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FinalCta from '@/components/sections/final-cta';
import AeropsHero from '@/components/sections/aerops-hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Target, TrendingUp, DollarSign, Settings, Users, Award } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pillars = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    name: "Analyse",
    description: "This pillar focuses on understanding the direction and metrics of a business. It helps identify areas where the business might think they are doing well but their metrics show low conversion.",
    benefit: "Gain unparalleled clarity and direction by identifying the true performance drivers of your business."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    name: "Expand",
    description: "This pillar is about growing the business by finding a clear niche, increasing leads, and improving conversions.",
    benefit: "Achieve sustainable growth and market expansion by focusing on your most profitable niche and optimizing your sales funnel."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    name: "Revenue",
    description: "This pillar focuses on generating high revenue and maintaining healthy margins. It addresses issues like hidden costs or low repeat purchases.",
    benefit: "Optimize your revenue streams and boost profitability by ensuring healthy margins and maximizing customer lifetime value."
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    name: "Operation",
    description: "This pillar ensures that the business has defined processes, measures key metrics, and adapts through regular review cycles.",
    benefit: "Drive operational efficiency and reduce waste by implementing streamlined processes and a culture of continuous improvement."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    name: "People",
    description: "This pillar is about building a strong team, reducing staff churn, and ensuring the founder is not overwhelmed by delegating responsibilities.",
    benefit: "Build a high-performance team and foster strong leadership, reducing founder dependency and staff churn."
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    name: "Success",
    description: "This pillar focuses on achieving long-term goals such as preparing for an exit, spending more time with family, or making the business robust enough to survive without micro-management.",
    benefit: "Achieve your ultimate long-term vision, whether it's a successful exit, personal freedom, or a self-sustaining business."
  }
];

const scenarios = [
    {
        title: "Startup with product, little traction",
        painPoints: "No clear niche, low leads/conversions, small revenue, unclear metrics.",
        aeropsFocus: "Analyse (Direction, Metrics), Expand (Niche, Leads, Conversions), Revenue (Margins, Spend)",
        outcomes: "Clarify niche, increase lead generation, improve conversion, better understand metrics, increase revenue."
    },
    {
        title: "Midsize business with stagnating growth",
        painPoints: "Good revenue but margins slipping, processes inefficient, leadership team weak.",
        aeropsFocus: "Revenue, Operation, People",
        outcomes: "Reduce costs, streamline operations, improve processes, build stronger team to scale."
    },
    {
        title: "Overloaded Founder / Owner",
        painPoints: "Doing everything; no freedom; unable to step away; constant firefighting.",
        aeropsFocus: "Operation (Process, Review), People (Recruit, Retain, Inspire), Success (Freedom)",
        outcomes: "Build systems, delegate, recruit capable leaders, free up time, reduce burnout."
    },
    {
        title: "Established business preparing for exit / investment",
        painPoints: "Want to scale to enterprise level; want attractive financials; need strong metrics and repeatable revenue.",
        aeropsFocus: "All pillars with emphasis on Revenue (Margin, Repeats), Success (Enterprise, Investment), Operation, People",
        outcomes: "Clean up operations, ensure predictable revenue, solid margins, attract investment, position company for growth or exit."
    }
]

export default function AeropsFrameworkPage() {
  return (
    <>
      <Header />
      <main>
        <AeropsHero
          title="The AEROPS Framework"
          subtitle="Your Blueprint for Sustainable Business Growth"
          imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        {/* Key Benefits Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The Six Pillars of Business Growth
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                The AEROPS framework is built upon six core pillars, each designed to address a critical area of your business. Together, they create a comprehensive system for sustainable success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <Card key={pillar.name} className="transition-transform transform hover:scale-105 hover:shadow-xl">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {pillar.icon}
                    <CardTitle>{pillar.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-semibold">{pillar.benefit}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scenario Analysis Section */}
        <section className="py-16 sm:py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        How AEROPS Applies to Your Business
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        The framework is adaptable to the unique challenges you face at every stage of your business journey. Find your scenario below to see how AEROPS can help.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {scenarios.map((scenario, index) => (
                            <AccordionItem value={`item-${index + 1}`} key={scenario.title}>
                                <AccordionTrigger className="text-xl font-bold text-left">{scenario.title}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-4 pt-2">
                                        <div>
                                            <h4 className="font-semibold text-yellow-600">Main Pain Areas:</h4>
                                            <p className="text-muted-foreground">{scenario.painPoints}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-primary">Key AEROPS Focus:</h4>
                                            <p className="text-muted-foreground">{scenario.aeropsFocus}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-600">Likely Outcomes:</h4>
                                            <p className="text-muted-foreground">{scenario.outcomes}</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
