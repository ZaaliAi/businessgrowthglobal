'use client';

import ApplyButton from './apply-button';

export default function CircleClubCTA() {
  return (
    <section className="py-20 sm:py-32 bg-primary text-white text-center">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
          Ready to Step Up?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          This is your opportunity to join a results-driven group. Spaces are strictly limited to maintain the integrity of the group.
        </p>
        
        <ApplyButton 
          text="Apply for Membership"
          className="bg-[#D4AF37] text-primary hover:bg-[#b5952f] font-semibold text-lg px-10 h-14"
        />
      </div>
    </section>
  );
}
