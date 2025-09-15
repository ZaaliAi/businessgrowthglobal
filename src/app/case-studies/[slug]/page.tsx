import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

// Mock data - in a real application, this would be fetched from a CMS or database
const caseStudyData = {
  'food-production-growth': {
    industry: 'UK Food Producer',
    title: '£468k → £1.248m in 12 months (+167%); founder halves time in ops',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/pexels-shvetsa-5953714.jpg',
    overview: {
      challenge: 'Thin margins (14% gross, 3% net) were limiting reinvestment, and the founder was a bottleneck, spending 60 hours per week in day-to-day operations.',
      solution: 'Implemented the AEROPS framework to formalise pricing and operations. This included a cost-to-serve pricing model, SKU rationalisation, and a weekly S&OP cadence.',
      results: [
        'Revenue increased from £468k to £1.248m (+167%)',
        'Gross margin lifted from 14% to 21%',
        'Founder\'s time in operations cut from 60 to 30 hours/week',
        'Unit throughput grew from 300 to 800 units/day',
      ],
    },
    narrative: {
      challenge: 'Demand was growing, but profit wasn’t. With a gross margin of only 14%, every increase in volume amplified operational strain without generating enough cash to hire or invest. The founder was managing everything, leading to long hours and reactive firefighting. Key operational metrics weren\'t being tracked, making it difficult to identify the root causes of inefficiency.',
      solution: 'We focused on a few high-leverage moves. First, we rebuilt the pricing architecture around the true cost-to-serve and rationalised the product line to focus on high-margin items. We introduced a weekly Sales & Operations Planning (S&OP) cadence and daily huddles to stabilise workflow. Core processes were systemised using an LPAD approach (document, perfect, automate, delegate), and a simple B2B sales pipeline was established to smooth demand.',
      results: 'The transformation was significant. Revenue grew by 167% to £1.248m in just twelve months. Gross margin improved by 7 percentage points, and net margin doubled. Most importantly, the founder’s operational hours were halved, creating the headspace to lead the business strategically. The team doubled in size, and daily unit throughput increased by over 167%, creating a stable platform for future growth.',
    },
    testimonial: {
      quote: 'Mentoring with Business Growth Global gave me clarity and a cadence. We finally priced to our true cost, tightened changeovers, and built a team I could trust. We’ve gone from 300 to 800 units a day, revenue has leapt, and for the first time I’m leading the business instead of firefighting.',
      author: 'Founder, Anonymised UK Food Producer',
    },
  },
  // Add other case studies here...
};


export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = caseStudyData[params.slug as keyof typeof caseStudyData];

  if (!study) {
    return <div>Case study not found.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Link href="/case-studies" className="inline-flex items-center text-accent mb-8 hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>

              <p className="text-accent font-semibold">{study.industry}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2">{study.title}</h1>

              <div className="my-12">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-xl"
                />
              </div>

              {/* Overview Box */}
              <div className="bg-secondary p-8 rounded-lg my-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">The Challenge</h3>
                    <p className="text-muted-foreground">{study.overview.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">The Solution</h3>
                    <p className="text-muted-foreground">{study.overview.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Key Results</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {study.overview.results.map((result, i) => <li key={i}>{result}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Narrative */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-primary">The Challenge</h2>
                <p>{study.narrative.challenge}</p>
                <h2 className="text-3xl font-bold text-primary">Our Solution</h2>
                <p>{study.narrative.solution}</p>
                <h2 className="text-3xl font-bold text-primary">The Results</h2>
                <p>{study.narrative.results}</p>
              </div>

              {/* Testimonial */}
              <div className="my-16 p-8 border-l-4 border-accent bg-secondary rounded-r-lg">
                <blockquote className="text-xl italic text-primary">
                  "{study.testimonial.quote}"
                </blockquote>
                <p className="mt-4 font-semibold text-right text-accent">— {study.testimonial.author}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}