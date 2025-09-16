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
  'services-growth-story': {
    industry: 'UK Services Business',
    title: 'From £8m plateau to £12m+ in 24 months; SMT built and owner shifts to growth',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/pexels-kampus-8204363.jpg',
    overview: {
      challenge: 'Growth stalled around £8m with delivery strain and inconsistent utilisation. The founder was a bottleneck with heavy day-to-day involvement.',
      solution: 'Clarified ICPs and offers, built a Senior Management Team (SMT), and introduced a weekly leadership cadence with clear KPIs. A structured referrals engine was also created.',
      results: [
        'Revenue grew from £8m to £12m+ over 24 months (≥ +50%)',
        'Senior Management Team established, improving accountability',
        'Owner\'s role shifted from firefighting to strategic networking',
        'A culture of expansion and innovation was fostered',
      ],
    },
    narrative: {
      challenge: 'The business had hit a ceiling around £8m in revenue. This was coupled with significant delivery strain, inconsistent team utilisation, and a founder who was too involved in daily operations to focus on market-facing growth activities. Leadership gaps and underdeveloped processes meant that valuable referral opportunities were being missed.',
      solution: 'Using the AEROPS framework, we first diagnosed the core issues: a lack of strategic focus, no senior management rhythm, and weak delivery KPIs. The plan involved clarifying ideal customer profiles (ICPs), building a proper Senior Management Team (SMT) with clear role scorecards, and introducing a weekly leadership cadence. We also implemented crucial operational tracking for utilisation and project margins, and stood up a formal referrals engine to capitalise on existing relationships.',
      results: 'Within 24 months, the changes produced significant results. Revenue broke the plateau, growing by at least 50% to over £12m. A fully functional SMT was in place, leading to clearer accountability and faster decision-making. The founder was able to step back from day-to-day firefighting to focus on networking and partnerships. This created a more open culture of expansion and innovation, supported by strategic new hires.',
    },
    testimonial: {
      quote: 'After years stuck around £8m, mentoring forced us to think and act like a bigger firm. With the right leaders, cleaner ops, and a proper referrals engine, we pushed past £12m—and I finally had the space to win the next wave of clients.',
      author: 'Founder & CEO, Anonymised Services Business',
    },
  },
  'exit-readiness-story': {
    industry: 'Exit Readiness (UK)',
    title: 'From £1.5m valuation to a £6m exit in 12 months',
    subheadline: 'Broker-referred owner removed key-person risk, systemised operations, lifted revenue, and eliminated a 24-month consultancy requirement—unlocking a 4× higher sale price.',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/contract.jpg',
    overview: {
      challenge: 'Initial valuation of ~£1.5m was contingent on the owner remaining for 24 months post-sale due to high key-person risk and undocumented processes.',
      solution: 'Built a senior leadership layer, systemised core operations using the LPAD framework, created diligence-ready financial reporting, and strengthened customer contracts.',
      results: [
        'Achieved a £6m sale price, a 300% increase on the initial valuation.',
        'Eliminated the 24-month post-sale consultancy requirement for the founder.',
        'Increased revenue during the 12-month engagement period.',
        'Transformed the business into a demonstrably “buy-and-run” asset.',
      ],
    },
    narrative: {
      challenge: 'A broker-referred business owner was exploring a sale but faced a low valuation of approximately £1.5m, which was heavily contingent on them remaining for a 24-month consultancy period. The business was critically dependent on the founder for sales, operations, and decision-making. With undocumented processes, no leadership bench, and inconsistent management information, the company posed a significant risk to potential buyers.',
      solution: 'We implemented a focused exit-readiness plan. The first step was to build a senior leadership team, including an Operations Lead and a Financial Controller, with clear role scorecards to distribute responsibility. We then documented and de-bottlenecked all core processes using our Learn, Perfect, Automate, Delegate (LPAD) framework. A monthly management information pack was created to provide board-style, diligence-ready data. Commercially, we focused on renewing and extending key customer contracts while widening referral channels to create repeatable revenue. Finally, we assembled a clean data room with SOPs, an org chart, contracts, KPIs, and a transition runbook to make the business as transparent and transferable as possible for a buyer.',
      results: 'The strategic initiatives led to a rapid and dramatic transformation. Within 12 months, the business was sold for £6m—a 300% increase from its initial valuation. The owner’s post-sale consultancy requirement was reduced from 24 months to a minimal handover period, giving them a clean exit. The new management team, documented SOPs, and clear performance metrics made the business a highly attractive “buy-and-run” opportunity, rather than a risky “buy-and-rebuild” project.',
    },
    testimonial: {
      quote: 'Before mentoring, every road led back to me—buyers knew it. In twelve months we built the team, the systems, and clean numbers. I sold for £6m without being tied in for two years, and the business can thrive without me.',
      author: 'Founder, Anonymised UK Business',
    },
  },
  'executive-coaching-confidence': {
    industry: 'Executive Coaching (C-Suite, UK)',
    title: 'Six months to visible, confident leadership: from imposter syndrome to expanded remit',
    subheadline: 'Executive coaching focused on self-promotion, strategic communication up and down the organisation, and authentic leadership presence—leading to greater responsibility and role confidence.',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/executive.jpg',
    overview: {
      challenge: 'Persistent imposter syndrome was undermining confidence and visibility. The executive was under-communicating achievements and was uncomfortable advocating for resources.',
      solution: 'A 6-month coaching program focused on building a leadership narrative, creating a visibility rhythm, mapping stakeholders, and improving communication strategies with mindset work.',
      results: [
        'Role and scope expanded with additional responsibility granted.',
        'Increased confidence and credibility in the C-suite role.',
        'Clearer upward communication and more empathetic downward leadership.',
        'Stronger team engagement noted by key stakeholders.',
      ],
    },
    narrative: {
      challenge: 'Referred for coaching to improve leadership visibility, the C-suite executive was struggling with persistent imposter syndrome. This led to under-communicating achievements and discomfort in advocating for resources and impact. Communication effectiveness was mixed, both upwards with the executive team and downwards with direct reports.',
      solution: 'Through intake sessions and reflective exercises, we diagnosed unhelpful beliefs (“I’ve been lucky”) and a lack of a cohesive leadership narrative. The 6-month plan involved crafting a personal value proposition, maintaining a weekly wins journal, and establishing a visibility rhythm for updates. We mapped key sponsors and stakeholders to create purposeful touchpoints. Communication was improved with tools for concise executive updates (5-15-5 updates) and team feedback (SBI+), alongside mindset work to normalize imposter feelings and build presence.',
      implementation: 'The program consisted of fortnightly coaching sessions and monthly 90-minute deep dives, with experiments and reflection prompts between sessions. A 3-story leadership narrative (origin, impact, horizon) was created. We practiced executive briefings and "ask" language. A repeatable agenda for team 1:1s and all-hands was introduced, and a feedback loop was established with three key stakeholders.',
      results: 'The coaching led to improved visibility and the executive was granted additional responsibility. They reported feeling more comfortable and credible in their role, with greater ease in advocating for resources. Stakeholders noted clearer upward updates and more empathetic downward leadership, resulting in stronger team engagement.',
    },
    testimonial: {
      quote: 'Coaching helped me name the imposter voice and turn it down. I now communicate impact with clarity, lead both upwards and downwards with confidence, and I’ve been trusted with more responsibility. Most importantly, I actually feel comfortable in the role.',
      author: 'C-Suite Executive',
    },
  },
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
              {'subheadline' in study && <p className="mt-4 text-lg text-muted-foreground">{study.subheadline}</p>}


              <div className="my-12">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-xl"
                  data-ai-hint={
                    params.slug === 'exit-readiness-story' ? 'business deal handshake' : 
                    params.slug === 'executive-coaching-confidence' ? 'confident executive presentation' : ''
                  }
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
                <p>{'narrative' in study && 'challenge' in study.narrative ? study.narrative.challenge : study.overview.challenge}</p>
                <h2 className="text-3xl font-bold text-primary">Our Solution</h2>
                <p>{'narrative' in study && 'solution' in study.narrative ? study.narrative.solution : study.overview.solution}</p>
                 {'narrative' in study && 'implementation' in study.narrative && (
                  <>
                    <h2 className="text-3xl font-bold text-primary">Implementation</h2>
                    <p>{study.narrative.implementation}</p>
                  </>
                )}
                <h2 className="text-3xl font-bold text-primary">The Results</h2>
                <p>{'narrative' in study && 'results' in study.narrative ? study.narrative.results : study.overview.results.join(' ')}</p>
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

    