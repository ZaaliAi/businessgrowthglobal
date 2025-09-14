import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Regular",
    price: "£1500/month",
    description: "Your Gateway to Sustainable Business Growth. Crafted for business owners and entrepreneurs ready to take control of their growth journey.",
    features: [
      "1-Year Enrolment",
      "24 Personalised Mentoring Sessions (45 mins each)",
      "1 Weekly Crisis Call (15 Mins)",
      "Email and Text Support (24hr response)",
      "6 Strategy & Action Reviews",
      "100% Guaranteed Results",
    ],
    cta: "Select Plan",
    details: {
      intro: "The Regular Package by Business Growth Global is crafted for business owners and entrepreneurs who are ready to take control of their growth journey. Designed to provide consistent, results-driven support, this package offers a structured approach to help you achieve strategic business growth, improve operations, and unlock your full potential—all while maintaining balance in your day-to-day responsibilities. With a 1-year enrolment, the Regular Package delivers a personalised mentoring experience, ensuring you have the guidance, tools, and strategies needed to scale your business, increase profitability, and build a thriving enterprise.",
      sections: [
        {
          title: "Who is the Regular Package For?",
          content: "The Regular Package is ideal for: Startup founders seeking mentorship for entrepreneurs to establish a strong foundation and accelerate growth. Small business owners looking to optimise operations, improve efficiency, and achieve sustainable growth. Entrepreneurs who want to step away from daily operations and focus on strategic growth to scale their business. Corporate executives aiming to enhance leadership transformation and build high-performance teams."
        },
        {
          title: "Why Choose the Regular Package?",
          content: "Expert Mentorship: Benefit from the guidance of Lee Broders, a Fellow of the Association of Business Mentors, Master Practitioner of the EMCC, and Member of the Institute of Leadership. Proven Framework: Leverage the Business Growth Blueprint, a structured approach to scaling your business, optimising revenue streams, and improving operations. Flexible Support: Weekly crisis calls and regular mentoring sessions ensure you have access to expert advice whenever you need it. Guaranteed Results: Our commitment to your success is backed by industry-leading guarantees, ensuring your investment delivers measurable outcomes."
        },
        {
          title: "What Can You Expect?",
          content: "When you enrol in the Regular Package, you’ll embark on a journey to: Scale your business with confidence and clarity. Focus on strategic growth, stepping away from the day-to-day operations. Build a sustainable, scalable business that aligns with your vision. Develop actionable plans with the support of a trusted business mentor."
        }
      ]
    }
  },
  {
    name: "Intensive",
    price: "£2,500/month",
    description: "Fast-Track Your Business Growth. Designed for ambitious business owners ready to prioritize strategic growth and achieve accelerated results.",
    features: [
      "1-Year Enrolment",
      "48 Personalised Mentoring Sessions (45 mins each)",
      "2 Weekly Crisis Calls (15 Mins each)",
      "Email and Text Support (24hr response)",
      "12 Strategy & Action Reviews",
      "100% Guaranteed Results",
    ],
    cta: "Select Plan",
    popular: true,
    details: {
      intro: "The Intensive Package by Business Growth Global is designed for ambitious business owners, entrepreneurs, and executives who are ready to prioritise strategic business growth and achieve accelerated results. This high-engagement program provides comprehensive, results-driven mentoring to help you scale your business, optimise operations, and unlock your full potential. With a 1-year enrolment, the Intensive Package offers unparalleled support, ensuring you have the tools, strategies, and expert guidance needed to achieve measurable success.",
      sections: [
        {
          title: "Who is the Intensive Package For?",
          content: "The Intensive Package is perfect for: Entrepreneurs seeking a fast-paced, results-driven approach to strategic growth. Startup founders who want to establish a scalable business model and accelerate startup growth. Small business owners looking to increase profitability and improve operational efficiency. Corporate executives aiming to enhance leadership transformation and build high-performance teams."
        },
        {
          title: "Why Choose the Intensive Package?",
          content: "High-Touch Support: With 48 mentoring sessions and two weekly crisis calls, you’ll receive unparalleled support to overcome challenges and achieve rapid growth. Proven Results: Our clients consistently report significant improvements in revenue, leadership effectiveness, and operational efficiency. Tailored Solutions: Every aspect of the Intensive Package is customised to your business’s unique needs, ensuring maximum impact. Expert Guidance: Lee Broders’ extensive experience and credentials, including being a Fellow of the ABM, Master Practitioner of the EMCC, and Member of the Institute of Leadership, ensure you receive world-class mentoring. Guaranteed ROI: With industry-leading guarantees, we are committed to delivering measurable outcomes and exceptional value."
        },
        {
          title: "What Can You Expect?",
          content: "When you enrol in the Intensive Package, you’ll embark on a transformative journey that enables you to: Scale your business with confidence and clarity. Focus on strategic growth, stepping away from daily operations. Build a sustainable, scalable business that aligns with your vision and goals. Develop actionable plans with the support of a trusted business mentor."
        }
      ],
      interactiveFeatures: [
        {
          id: "sessions",
          title: "48 Sessions",
          content: "Receive nearly weekly, one-on-one personalised mentoring sessions. These deep dives are dedicated to tackling your specific challenges, refining your strategy, and ensuring you are consistently moving towards your most ambitious goals. This high-frequency engagement ensures momentum is never lost."
        },
        {
          id: "calls",
          title: "Crisis Calls",
          content: "Gain peace of mind with two weekly 15-minute crisis calls. Use these for urgent issues, quick questions, or immediate guidance when you can't wait for your next full session. It's your direct line for real-time support, ensuring you're never stuck."
        },
        {
          id: "support",
          title: "Priority Support",
          content: "Enjoy priority email and text support with a guaranteed 24-hour response time. This continuous line of communication ensures that your questions and concerns are addressed promptly, keeping your progress on track between scheduled sessions."
        },
        {
          id: "reviews",
          title: "Strategy Reviews",
          content: "With 12 comprehensive Strategy & Action Reviews throughout the year, we'll regularly assess your progress, pivot strategies as needed, and set clear, actionable goals for the next phase. This ensures your growth is not just rapid, but also strategic and sustainable."
        }
      ]
    }
  },
   {
    name: "Boardroom",
    price: "Contact for Pricing",
    description: "Elite boardroom-level advisory for established enterprises seeking strategic market leadership and global expansion.",
    features: [
      "Bespoke Annual Retainer",
      "Direct Line to Lee Broders",
      "Quarterly On-Site Strategy Days",
      "Full Team & Board Access",
      "Crisis Management & PR Advisory",
      "Global Network Access",
    ],
    cta: "Enquire Now",
    details: {
      intro: "The Boardroom Package is our most exclusive offering, providing unparalleled access to Lee Broders and our global network. This bespoke retainer is designed for established enterprises and corporate boards requiring the highest level of strategic counsel, M&A advisory, and crisis management. It is a true strategic partnership aimed at securing market leadership and navigating complex challenges.",
      sections: [
        {
          title: "Who is the Boardroom Package For?",
          content: "The Boardroom Package is exclusively for: C-Suite executives and corporate boards of established, multi-million-pound enterprises. Companies navigating mergers, acquisitions, or significant market pivots. Organisations seeking to establish a dominant global presence. Businesses requiring confidential, high-stakes crisis management and strategic public relations advisory."
        },
        {
          title: "Why Choose the Boardroom Package?",
          content: "Unprecedented Access: You have a direct, prioritised line to Lee Broders for immediate, high-level counsel whenever it's needed. Strategic Immersion: Quarterly on-site sessions ensure deep integration with your leadership team and a comprehensive understanding of your organisation's dynamics. Full-Scale Integration: The advisory extends beyond the CEO to your entire board and key team members, ensuring strategic alignment across the company. Global Leverage: Gain access to our extensive global network of investors, partners, and industry leaders to create unparalleled opportunities."
        },
        {
          title: "What Can You Expect?",
          content: "Enrolling in the Boardroom Package means forging a powerful strategic alliance. You will be equipped to: Navigate your industry's most complex challenges with confidence. Execute high-stakes decisions with expert, discreet advisory. Unlock exponential growth through strategic acquisitions and global expansion. Protect and enhance your company's reputation at the highest level."
        }
      ]
    }
  },
];

export default function Packages() {
  return (
    <section id="packages" className="w-full py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Tailored Mentorship Packages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the right level of support to fuel your business journey.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Card key={pkg.name} className={`flex flex-col ${pkg.popular ? 'border-accent shadow-accent/20 shadow-lg' : ''}`}>
              {pkg.popular && (
                <div className="bg-accent text-accent-foreground text-center py-1.5 text-sm font-semibold rounded-t-lg">Most Popular</div>
              )}
              <CardHeader className="flex-grow-0">
                <CardTitle>{pkg.name}</CardTitle>
                <p className="text-2xl font-bold pt-2">{pkg.price}</p>
                <CardDescription className="pt-2">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                    {pkg.details.interactiveFeatures ? (
                      <Tabs defaultValue={pkg.details.interactiveFeatures[0].id} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 h-auto">
                           {pkg.details.interactiveFeatures.slice(0, 4).map(feature => (
                              <TabsTrigger key={feature.id} value={feature.id} className="text-xs sm:text-sm">{feature.title}</TabsTrigger>
                           ))}
                        </TabsList>
                        {pkg.details.interactiveFeatures.slice(0, 4).map(feature => (
                          <TabsContent key={feature.id} value={feature.id} className="mt-4 p-4 bg-secondary rounded-md min-h-[120px]">
                            <p className="text-sm text-secondary-foreground">{feature.content}</p>
                          </TabsContent>
                        ))}
                      </Tabs>
                    ) : (
                      <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                              <AccordionTrigger>More Information</AccordionTrigger>
                              <AccordionContent>
                                  <p className="mb-4">{pkg.details.intro}</p>
                                  {pkg.details.sections.map(section => (
                                      <div key={section.title} className="mb-4">
                                          <h4 className="font-semibold mb-2">{section.title}</h4>
                                          <p>{section.content}</p>
                                      </div>
                                  ))}
                              </AccordionContent>
                          </AccordionItem>
                      </Accordion>
                    )}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={pkg.popular ? 'default': 'outline'}>
                  <Link href="/contact">{pkg.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
