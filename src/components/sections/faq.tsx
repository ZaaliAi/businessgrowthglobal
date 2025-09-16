"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/animated-section";

const faqs = [
    {
        question: "What is Business Growth Global?",
        answer: "We are a growth consultancy that helps entrepreneurs and business leaders scale using our proven AEROPS framework, delivered through mentor-led programs."
    },
    {
        question: "How is your approach different from other business coaches?",
        answer: "Unlike generic coaching, our programs are structured around AEROPS — a framework that focuses on strategy, operations, leadership, and execution. You work with experienced mentors who’ve scaled businesses themselves."
    },
    {
        question: "Who are your programs for?",
        answer: "Entrepreneurs, leaders, and business owners who want to grow sustainably, improve operations, and build stronger leadership teams."
    },
    {
        question: "Do you work with businesses of all sizes?",
        answer: "Yes. We support start-ups, SMEs, and established companies — tailoring the framework to your stage of growth."
    },
    {
        question: "What results can I expect?",
        answer: "Clients typically see clearer strategy, stronger team performance, streamlined operations, and measurable growth within the first 6–12 months."
    },
    {
        question: "How do the mentor-led programs work?",
        answer: "You’re matched with a mentor who guides you through the AEROPS framework, combining structured modules with personalised coaching."
    },
    {
        question: "How much does it cost?",
        answer: "We offer a range of programs to suit different business sizes and growth goals. Book a consultation to discuss the best fit."
    },
    {
        question: "How do I get started?",
        answer: "Book a discovery call with our team. We’ll assess your needs, explain the process, and recommend the right program."
    }
];

export default function FAQ() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions about our Business Mentor Programmes</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We have answers. Here are some of the most common questions we get.
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
