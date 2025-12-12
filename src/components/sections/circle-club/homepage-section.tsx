'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveRight, Mic, Video, Users } from 'lucide-react';
import ApplyButton from './apply-button';

export default function CircleClubHomepageSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-sm font-medium text-[#D4AF37]">
              The Circle Club
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              Where Ambitious Leaders <span className="text-primary/80">Grow Together.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stop leading in isolation. Join a curated group of business owners for monthly high-impact sessions designed to solve challenges and accelerate growth.
            </p>

            <div className="space-y-8">
              {/* Feature 1: Expert Speakers */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary shadow-sm border border-primary/10">
                  <Mic className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Expert Guest Speakers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Gain direct access to industry specialists. Our monthly sessions feature guest experts covering critical topics-from financial scaling to leadership dynamics-giving you actionable insights you can implement immediately.
                  </p>
                </div>
              </div>

              {/* Feature 2: Webinar/Workshops */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary shadow-sm border border-primary/10">
                  <Video className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Interactive Workshops</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Not just another meeting. Engage in structured, deep-dive workshops and "Hot Seat" sessions where your specific business challenges are analyzed and solved by the collective intelligence of the group.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 px-8 shadow-lg shadow-primary/20">
                <Link href="/the-circle-club">
                  Explore the Club
                  <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <ApplyButton 
                text="Apply for Membership"
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 font-semibold h-12 px-8"
              />
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt="The Circle Club members in discussion"
                fill
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Card/Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Next Cohort Forming</p>
                    <p className="text-sm text-muted-foreground">Limited spots available for Q4</p>
                  </div>
                </div>
              </div>
            </div>
             {/* Decorative background element */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full border-2 border-[#D4AF37]/20 rounded-2xl hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}