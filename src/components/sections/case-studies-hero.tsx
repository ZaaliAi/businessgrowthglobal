'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CaseStudiesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 text-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
          alt="Professional business meeting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative container mx-auto px-4">
        <h1
          className={`text-4xl md:text-6xl font-bold text-white transition-all duration-700 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Real Businesses, Real Results.
        </h1>
        <p
          className={`mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto transition-all duration-700 ease-in-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Explore our case studies to see how we've helped businesses like yours achieve transformative growth and lasting success.
        </p>
      </div>
    </section>
  );
}
