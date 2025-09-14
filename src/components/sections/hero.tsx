'use client';

import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[700px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
        alt="Business professionals collaborating on a project"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container max-w-4xl px-4">
          <h1
            className={`text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-700 ease-in-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Unlock Your Business's True Potential
          </h1>
          <p
            className={`mt-6 text-lg leading-8 text-primary-foreground/80 md:text-xl transition-all duration-700 ease-in-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Scale strategically, lead effectively, and build a business that thrives. We provide the blueprint and mentorship to get you there.
          </p>
          <div
            className={`mt-10 flex items-center justify-center gap-x-6 transition-all duration-700 ease-in-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Book a Free Discovery Call
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
