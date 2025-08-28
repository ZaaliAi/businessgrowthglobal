import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Intro from '@/components/sections/intro';
import Packages from '@/components/sections/packages';
import Testimonials from '@/components/sections/testimonials';
import About from '@/components/sections/about';
import FinalCTA from '@/components/sections/final-cta';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Packages />
        <Testimonials />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
