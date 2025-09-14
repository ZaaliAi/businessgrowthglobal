import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    name: "Elevate",
    price: "£1,500/month",
    description: "Your Gateway to Sustainable Business Growth. Crafted for business owners and entrepreneurs ready to take control of their growth journey.",
    features: [
      "24 × 45-min sessions per year",
      "1 Crisis Call per week (15 min)",
      "6 Strategy & Action Reviews per year",
      "1 Participant",
      "2 Power Reviews per year",
      "Email & Message Support",
    ],
    cta: "Enquire Now",
  },
  {
    name: "Intensive",
    price: "£2,500/month",
    description: "Fast-Track Your Business Growth. Designed for ambitious business owners ready to prioritize strategic growth and achieve accelerated results.",
    features: [
      "48 × 45-min sessions per year",
      "2 Crisis Calls per week (15 min)",
      "12 Strategy & Action Reviews per year",
      "1 Participant",
      "2 Power Reviews per year",
      "Email & Message Support",
    ],
    cta: "Enquire Now",
    popular: true,
  },
  {
    name: "Boardroom",
    price: "£5,000/month",
    description: "Elite boardroom-level advisory for established enterprises seeking strategic market leadership and global expansion.",
    features: [
      "24 1-to-1 & 24 group sessions per year",
      "1 Crisis Call per week (15 min)",
      "12 Strategy & Action Reviews per year",
      "Up to 3 Participants",
      "2 Power Reviews per year",
      "Email & Message Support",
    ],
    cta: "Enquire Now",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="w-full py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Tailored Mentorship Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the right level of support to fuel your business journey.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((pkg) => (
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
