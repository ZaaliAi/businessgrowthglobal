import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

// Mock data - in a real application, this would be fetched from a CMS or database
const caseStudyData = {
  'tech-startup-growth': {
    industry: 'Tech Startup',
    title: 'From Stagnation to 300% Growth in 18 Months',
    imageUrl: 'https://picsum.photos/seed/tech/1200/800',
    overview: {
      challenge: 'A promising tech startup was struggling with market penetration and stagnant revenue growth despite having a solid product.',
      solution: 'Implemented the AEROPS framework, focusing on expanding the customer base (Expand) and optimizing revenue streams (Revenue).',
      results: [
        '+300% Revenue Growth in 18 months',
        'Market share increased by 25%',
        'Secured Series A funding',
        'Team efficiency improved by 40%',
      ],
    },
    narrative: {
      challenge: 'The company had a brilliant product but lacked a strategic go-to-market plan. Their sales team was underperforming, and marketing efforts were not generating a positive ROI. The leadership team was stuck in day-to-day operations, unable to focus on strategic growth.',
      solution: 'We began with a deep-dive analysis (Analyse) to identify key market segments and competitive advantages. A new sales process was implemented, and the marketing strategy was completely overhauled to focus on high-value channels (Expand). We also restructured their pricing model to better capture value (Revenue) and introduced agile methodologies to improve operational efficiency (Operation).',
      results: 'The results were transformative. Within 18 months, the company saw a 300% increase in annual recurring revenue. They successfully penetrated new market segments, leading to a 25% increase in market share. This growth and clear strategic direction were instrumental in securing their Series A funding round, setting them up for long-term success.',
    },
    testimonial: {
      quote: 'The mentorship we received was the catalyst for our breakthrough. Their strategic insights helped us see the bigger picture and execute with precision. We wouldn’t be where we are today without their guidance.',
      author: 'Jane Doe, CEO of Tech Innovators',
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