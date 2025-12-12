'use client';

import Link from 'next/link';
import NextImage from 'next/image';
import ApplyButton from './apply-button';

export default function CircleClubHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <NextImage
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
          alt="Executive team in a collaborative discussion"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="container relative z-10 px-4 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Stop Leading in Isolation. <br />
            <span className="text-[#D4AF37]">Take Your Business to the Next Level.</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl">
            An exclusive peer-to-peer group for ambitious business owners ready to grow, share insights, and solve critical challenges.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ApplyButton 
              text="Apply for Your Seat"
              className="bg-[#D4AF37] text-primary hover:bg-[#b5952f] font-semibold text-lg px-8 h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
