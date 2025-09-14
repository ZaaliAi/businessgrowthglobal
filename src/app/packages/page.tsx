import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Packages from '@/components/sections/packages';

export default function PackagesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Packages />
      </main>
      <Footer />
    </div>
  );
}
