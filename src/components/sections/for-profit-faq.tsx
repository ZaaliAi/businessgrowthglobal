'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why shouldn't I just hire a COO?",
    answer: "You could, but a good COO costs £120k ($150k) plus equity. Our program gives you the same strategic systems, operational playbooks, and senior guidance for less than the cost of a junior employee. It is the smartest 'bridge' to scaling before you commit to a full-time C-Suite hire."
  },
  {
    question: "Is this traditional consulting?",
    answer: "No. Traditional consultants give you a report and leave. We are 'Growth Mentors.' We work alongside you to implement the changes. Think of us as a temporary Non-Exec Director or Fractional COO who rolls up their sleeves to fix the engine while you drive the car."
  },
  {
    question: "My business is unique, will AEROPS work for me?",
    answer: "While your product is unique, the challenges of scaling are universal. Whether you sell software or services, you need leads (Expand), margin (Revenue), systems (Operation), and a team (People). The framework adapts to your sector, but the principles of growth remain the same."
  },
  {
    question: "Do I have to fire my team?",
    answer: "Rarely. Often, the problem isn't the people; it's the lack of clear systems or accountability. We help you 'audit' your team to ensure everyone is in the right seat. If you do need to hire, we help you find A-players who can take ownership."
  },
  {
    question: "What is the time commitment?",
    answer: "We know you are busy. Our program is designed to *save* you time, not consume it. We typically meet for 60-90 minutes every two weeks for strategy, with clear 'homework' actions for your team to implement in between."
  }
];

export default function ForProfitFaq() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Common Questions</h2>
          <p className="text-lg text-muted-foreground">
            You have questions. We have answers.
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
