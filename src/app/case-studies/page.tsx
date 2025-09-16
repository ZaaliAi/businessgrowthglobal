import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CaseStudiesHero from '@/components/sections/case-studies-hero';

const caseStudies = [
  {
    slug: 'food-production-growth',
    industry: 'Food Production',
    title: 'Breaking £1 Million Turnover: A Food Production Success Story',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/pexels-shvetsa-5953714.jpg',
  },
  {
    slug: 'services-growth-story',
    industry: 'Services',
    title: 'From £8m Plateau to £12m+ in 24 Months',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/pexels-kampus-8204363.jpg',
  },
  {
    slug: 'exit-readiness-story',
    industry: 'Exit Readiness',
    title: 'From £1.5m valuation to a £6m exit in 12 months',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/contract.jpg',
    aiHint: 'business deal handshake',
  },
  {
    slug: 'executive-coaching-confidence',
    industry: 'Executive Coaching',
    title: 'From Imposter Syndrome to Confident Leadership in Six Months',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/executive.jpg',
    aiHint: 'confident executive presentation',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <CaseStudiesHero />

        {/* Case Studies Grid */}
        <AnimatedSection>
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {caseStudies.map((study) => (
                  <Link href={`/case-studies/${study.slug}`} key={study.slug}>
                    <div className="group block bg-card border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-64">
                        <Image
                          src={study.imageUrl}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={study.aiHint}
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-sm font-semibold text-accent mb-2">{study.industry}</p>
                        <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                          {study.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Key Metrics Banner */}
        <AnimatedSection>
          <section className="bg-primary text-primary-foreground py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-5xl font-bold">150%</p>
                  <p className="mt-2 text-lg">Average Revenue Growth</p>
                </div>
                <div>
                  <p className="text-5xl font-bold">12</p>
                  <p className="mt-2 text-lg">Industries Served</p>
                </div>
                <div>
                  <p className="text-5xl font-bold">98%</p>
                  <p className="mt-2 text-lg">Client Success Rate</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Ready to Be Our Next Success Story?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can tailor our expertise to your unique business challenges and goals.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Book a Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
