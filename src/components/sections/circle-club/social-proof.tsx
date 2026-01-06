'use client';

import { Quote } from 'lucide-react';
import { testimonials } from '../testimonials';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CircleClubSocialProof() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-12">
          What Members Are Saying.
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="relative p-8 sm:p-12 bg-secondary/20 rounded-2xl border border-border h-full flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-[#D4AF37] opacity-20 absolute top-8 left-8" />
                  
                  <blockquote className="relative z-10 text-xl sm:text-2xl font-medium text-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="mt-8">
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="left-[-3rem]" />
            <CarouselNext className="right-[-3rem]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}