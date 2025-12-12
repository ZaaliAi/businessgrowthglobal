import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/animated-section';
import CircleClubHero from '@/components/sections/circle-club/hero';
import CircleClubProblemSolution from '@/components/sections/circle-club/problem-solution';
import CircleClubFeatures from '@/components/sections/circle-club/features';
import CircleClubMeetingStructure from '@/components/sections/circle-club/meeting-structure';
import CircleClubBenefits from '@/components/sections/circle-club/benefits';
import CircleClubSocialProof from '@/components/sections/circle-club/social-proof';
import CircleClubCTA from '@/components/sections/circle-club/cta';

export const metadata: Metadata = {
  title: 'The Boardroom | Exclusive Peer-to-Peer Business Growth Group',
  description: 'Join The Circle Club: A small group for ambitious entrepreneurs. Monthly meetings, expert speakers, and actionable strategies for sustainable growth. Apply now.',
};

export default function CircleClubPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CircleClubHero />
        
        <AnimatedSection>
          <CircleClubProblemSolution />
        </AnimatedSection>
        
        <AnimatedSection>
          <CircleClubFeatures />
        </AnimatedSection>
        
        <AnimatedSection>
          <CircleClubMeetingStructure />
        </AnimatedSection>
        
        <CircleClubBenefits />
        
        <AnimatedSection>
          <CircleClubSocialProof />
        </AnimatedSection>
        
        <CircleClubCTA />
      </main>
      <Footer />
    </div>
  );
}
