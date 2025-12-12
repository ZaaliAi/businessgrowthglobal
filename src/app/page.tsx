import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Intro from '@/components/sections/intro';
import Testimonials from '@/components/sections/testimonials';
import About from '@/components/sections/about';
import FinalCTA from '@/components/sections/final-cta';
import AnimatedSection from '@/components/animated-section';
import AeropsFramework from '@/components/sections/aerops-framework';
import LogoCarousel from '@/components/sections/logo-carousel';
import FAQ from '@/components/sections/faq';
import CircleClubHomepageSection from '@/components/sections/circle-club/homepage-section';
import Script from 'next/script';

import { Button } from '@/components/ui/button';
import { Rocket, Scaling, Target } from 'lucide-react';
import Link from 'next/link';

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

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCarousel />
        <AnimatedSection>
          <Intro />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AeropsFramework />
        <AnimatedSection>
          <CircleClubHomepageSection />
        </AnimatedSection>
        <AnimatedSection>
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Propel Your Early-Stage Enterprise to New Heights
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our growth strategies are specifically designed to address the unique challenges faced by early-stage and VC-backed enterprises, turning potential into market leadership.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Business team in a meeting" 
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
                      <h3 className="text-xl font-bold">Strategic Clarity</h3>
                      <p className="text-muted-foreground mt-1">Define a clear, actionable roadmap for growth. Our process ensures your strategy aligns with investor expectations and market opportunities, preventing costly pivots and maximizing your potential for success.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-primary-foreground rounded-full p-3">
                        <Rocket className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Accelerated Traction</h3>
                      <p className="text-muted-foreground mt-1">Our proven frameworks fast-track your go-to-market strategy. We focus on identifying and capturing your target audience efficiently, helping you gain meaningful market traction faster than the competition.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-primary-foreground rounded-full p-3">
                        <Scaling className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Scalable Operations</h3>
                      <p className="text-muted-foreground mt-1">Build robust, scalable systems and processes that form the backbone of your enterprise. This ensures you are primed for sustainable, long-term growth and ready for the next phase of expansion.</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="/vc-backed">Learn More for VC-Backed Enterprises</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        <FAQ />
        <AnimatedSection>
          <FinalCTA />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
