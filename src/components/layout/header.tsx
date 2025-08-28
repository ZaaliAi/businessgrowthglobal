import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { OptimizedCTAButton } from '@/components/optimized-cta-button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

export default function Header() {
  const pageContent = "A business growth mentorship website offering packages for entrepreneurs.";
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center">
          <Image 
            src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Business-Global-Growth-logo.png" 
            alt="Business Growth Global Logo"
            width={200}
            height={40}
            className="h-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="#packages" className="transition-colors hover:text-primary/80">Packages</Link>
          <Link href="#testimonials" className="transition-colors hover:text-primary/80">Testimonials</Link>
          <Link href="/about-lee-broders" className="transition-colors hover:text-primary/80">About</Link>
        </nav>
        <div className="flex items-center justify-end gap-4">
           <OptimizedCTAButton
            initialText="Book a Discovery Call"
            pageContent={pageContent}
            ctaIdentifier="header-cta"
            className="hidden sm:inline-flex"
          />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-4">
                <Link href="/" className="mr-6 flex items-center">
                  <Image 
                    src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Business-Global-Growth-logo.png" 
                    alt="Business Growth Global Logo"
                    width={200}
                    height={40}
                  />
                </Link>
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link href="#packages" className="block px-2 py-1 transition-colors hover:text-primary/80">Packages</Link>
                    <Link href="#testimonials" className="block px-2 py-1 transition-colors hover:text-primary/80">Testimonials</Link>
                    <Link href="/about-lee-broders" className="block px-2 py-1 transition-colors hover:text-primary/80">About</Link>
                  </nav>
                  <OptimizedCTAButton
                    initialText="Book a Discovery Call"
                    pageContent={pageContent}
                    ctaIdentifier="mobile-header-cta"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
