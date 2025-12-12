'use client';

import { Quote } from 'lucide-react';

export default function CircleClubSocialProof() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-12">
          What Members Are Saying.
        </h2>
        
        <div className="relative p-8 sm:p-12 bg-secondary/20 rounded-2xl border border-border">
          <Quote className="h-12 w-12 text-[#D4AF37] opacity-20 absolute top-8 left-8" />
          
          <blockquote className="relative z-10 text-xl sm:text-2xl font-medium text-foreground italic leading-relaxed">
            "Joining this mastermind group was the turning point for my business. The accountability and collective wisdom in the room are unmatched. I finally have a clear path to scaling."
          </blockquote>
          
          <div className="mt-8">
            <div className="font-bold text-primary">Sarah J.</div>
            <div className="text-sm text-muted-foreground">CEO, Tech Innovations Ltd</div>
          </div>
        </div>
      </div>
    </section>
  );
}
