import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Programs from '@/components/sections/programs';
import IntensiveDeepDive from '@/components/sections/intensive-deep-dive';
import ProgramFinder from '@/components/sections/program-finder';

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Programs />
        <ProgramFinder />
        <IntensiveDeepDive />
      </main>
      <Footer />
    </div>
  );
}
