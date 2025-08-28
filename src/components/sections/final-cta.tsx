import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="w-full bg-primary py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Join us and experience the transformative power of strategic growth planning designed specifically for your business. A discovery call is the first step towards unlocking your business's full potential.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#">
              Book a Free Discovery Call
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
