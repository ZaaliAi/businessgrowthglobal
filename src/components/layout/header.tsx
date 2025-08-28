import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { OptimizedCTAButton } from '@/components/optimized-cta-button';

export default function Header() {
  const pageContent = "A business growth mentorship website offering packages for entrepreneurs.";
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-primary sm:inline-block">
            Business Growth Global
          </span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="#packages" className="transition-colors hover:text-primary/80">Packages</Link>
          <Link href="#testimonials" className="transition-colors hover:text-primary/80">Testimonials</Link>
          <Link href="#about" className="transition-colors hover:text-primary/80">About</Link>
        </nav>
        <div className="flex items-center justify-end">
           <OptimizedCTAButton
            initialText="Book a Discovery Call"
            pageContent={pageContent}
            ctaIdentifier="header-cta"
            className="hidden sm:inline-flex"
          />
           <Button variant="outline" className="sm:hidden">Menu</Button>
        </div>
      </div>
    </header>
  );
}
