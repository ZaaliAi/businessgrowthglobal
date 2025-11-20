'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is this different from standard consultancy?",
    answer: "Consultants typically hand you a report and walk away. We are 'Growth Mentors' and operators. We roll up our sleeves and help you implement the systems, hiring processes, and financial models we recommend. We don't just tell you what to do; we help you get it done."
  },
  {
    question: "Can we use grant funding to pay for this?",
    answer: "Yes. Most of our non-profit partners use 'Organizational Development' or 'Capacity Building' grants to fund our work. We can even help you frame the application to funders, demonstrating how this investment will lead to long-term sustainability and reduced reliance on future grants."
  },
  {
    question: "What if our Board is skeptical?",
    answer: "Boards are rightly protective of reserves. We speak their language: Risk mitigation, governance, and financial sustainability. We often present directly to Boards to explain how operational efficiency isn't an 'overhead cost' but a 'risk reduction investment' that protects the charity's future."
  },
  {
    question: "Is this only for large charities?",
    answer: "Our 'Mission Health' program is best suited for non-profits with an annual turnover between £500k - £5M ($750k - $7M). At this stage, you have a team and a proven model, but operational complexity is starting to slow you down. If you are smaller, join our free community newsletter for tips until you're ready."
  }
];

export default function NonProfitFAQ() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Common Questions</h2>
          <p className="text-lg text-muted-foreground">
            Answering the questions your Trustees might ask.
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
