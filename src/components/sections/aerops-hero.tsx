import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface AeropsHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function AeropsHero({ title, subtitle, imageUrl }: AeropsHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-2 md:gap-4 text-lg md:text-xl font-semibold">
          <span>Analyse</span>
          <ArrowRight className="h-5 w-5" />
          <span>Expand</span>
          <ArrowRight className="h-5 w-5" />
          <span>Revenue</span>
          <ArrowRight className="h-5 w-5" />
          <span>Operation</span>
          <ArrowRight className="h-5 w-5" />
          <span>People</span>
          <ArrowRight className="h-5 w-5" />
          <span>Success</span>
        </div>
      </div>
    </section>
  );
}
