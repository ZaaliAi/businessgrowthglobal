import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full py-16 sm:py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            About Business Growth Global
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            At Business Growth Global, we dedicate ourselves to empowering business owners, entrepreneurs, and executives to achieve strategic business growth and unlock their full potential. Founded by Lee Broders, an experienced business mentor, our mission is to provide tailored business mentoring programs that help you focus on scaling your business, improving operations, and achieving sustainable success.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Through our signature framework, The Business Growth Blueprint, we deliver bespoke solutions to transform businesses. We specialise in helping clients increase profitability, build high-performance teams, and develop actionable plans for long-term growth. Whether you’re a startup founder, small business owner, or corporate executive, we create strategies designed to meet your unique challenges and goals.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/about-lee-broders">
                More About Lee Broders
                <MoveRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://picsum.photos/600/600"
            alt="Team collaborating on a business strategy"
            width={600}
            height={600}
            className="rounded-lg shadow-xl"
            data-ai-hint="team strategy"
          />
        </div>
      </div>
    </section>
  );
}
