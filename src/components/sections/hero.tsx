import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      <Image
        src="https://picsum.photos/1800/1200"
        alt="Business meeting"
        fill
        className="object-cover"
        priority
        data-ai-hint="business meeting"
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container max-w-4xl px-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Free Business Owners from the Shackles of Working Within Their Business
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/80 md:text-xl">
            Our mission is to empower entrepreneurs and executives with the knowledge and mentoring strategies they need to scale their business, improve operations, and transform their leadership.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#packages">
                Our Packages
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
