'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does this differ from hiring a COO?",
    answer: "Hiring a full-time COO is expensive (£120k+) and risky if the fit isn't right. We provide 'Fractional COO' level support and mentorship for a fraction of the cost. We help you build the systems so you might not even need a heavyweight COO until Series B."
  },
  {
    question: "Do you take equity?",
    answer: "Generally, no. We prefer a clean fee-for-service model (retainer) so our incentives are aligned with your immediate operational success, not just a long-term exit. However, for select high-potential startups, we may consider a hybrid model."
  },
  {
    question: "How fast can we see results?",
    answer: "We work in 90-day 'sprints' aligned with your board quarters. You will typically see a tangible change in operational clarity, team alignment, and metric reporting within the first 30 days."
  },
  {
    question: "Will you work with our existing investors?",
    answer: "Absolutely. We often act as the bridge between the Founder's vision and the Board's requirements. We can help prepare board packs, refine reporting, and ensure communication is seamless."
  }
];

export default function VcFaq() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Common Questions</h2>
          <p className="text-lg text-muted-foreground">
            Answers for Founders and Investors.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
