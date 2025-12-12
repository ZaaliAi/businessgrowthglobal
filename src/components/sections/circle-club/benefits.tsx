'use client';

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  'Gain fresh perspectives and innovative solutions to your toughest challenges.',
  'Leverage strict accountability to stay on track with your goals.',
  'Build a supportive network of like-minded leaders who understand your journey.',
  'Walk away with practical strategies for sustainable growth.',
];

export default function CircleClubBenefits() {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Join <span className="text-[#D4AF37]">The Circle Club</span>?
            </h2>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 relative w-full aspect-square max-w-md lg:max-w-none">
            <div className="absolute inset-0 bg-[#D4AF37] rounded-2xl rotate-6 opacity-20"></div>
            <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Business professionals collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
