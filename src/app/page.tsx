import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Intro from '@/components/sections/intro';
import Testimonials from '@/components/sections/testimonials';
import About from '@/components/sections/about';
import FinalCTA from '@/components/sections/final-cta';
import AnimatedSection from '@/components/animated-section';
import AeropsBlueprint from '@/components/sections/aerops-blueprint';
import LogoCarousel from '@/components/sections/logo-carousel';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
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
        <AeropsBlueprint />
        <AnimatedSection>
          <FinalCTA />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
