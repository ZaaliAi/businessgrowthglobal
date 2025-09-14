import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Packages from '@/components/sections/packages';
import IntensiveDeepDive from '@/components/sections/intensive-deep-dive';

export default function PackagesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Packages />
        <IntensiveDeepDive />
      </main>
      <Footer />
    </div>
  );
}
