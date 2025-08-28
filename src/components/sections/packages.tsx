import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Regular",
    price: "Custom",
    description: "For emerging leaders and small businesses seeking foundational growth strategies.",
    features: [
      "Bi-weekly 1:1 sessions",
      "Strategic roadmap development",
      "Access to resource library",
      "Email support",
    ],
    cta: "Select Plan",
  },
  {
    name: "Intensive",
    price: "Custom",
    description: "For established businesses aiming for accelerated growth and market expansion.",
    features: [
      "Weekly 1:1 sessions",
      "In-depth performance analysis",
      "Team-building workshops",
      "Priority support",
    ],
    cta: "Select Plan",
    popular: true,
  },
  {
    name: "Boardroom",
    price: "Custom",
    description: "For executives and enterprises requiring high-level advisory and strategic partnership.",
    features: [
      "On-demand advisory sessions",
      "Quarterly strategic reviews",
      "Direct access to partners",
      "Bespoke growth solutions",
    ],
    cta: "Select Plan",
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
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={pkg.popular ? 'default': 'outline'}>{pkg.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
