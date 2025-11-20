'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NonProfitHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`space-y-8 z-10 relative transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Stop Letting Operations <span className="text-primary">Eat Your Mission.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              We help ambitious non-profits fix the "Mission Gap" the operational drag that separates your funding from your impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base font-semibold" asChild>
                <Link href="#audit-form">
                  Book a Free "Mission Health" Audit
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold" asChild>
                <Link href="#how-it-works">
                  See How It Works
                </Link>
              </Button>
            </div>
          </div>
          
          <div 
            className={`relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2948&auto=format&fit=crop"
              alt="Diverse team collaborating on a non-profit mission"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
