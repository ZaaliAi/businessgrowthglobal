'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const logos = [
  { src: "https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/business%20insder.jpg", alt: "Business Insider" },
  { src: "https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/cropped-di-logo-full-strap-2023-vs1.webp", alt: "DI Leaders" },
  { src: "https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/fortune-logo-2016-840x485.webp", alt: "Fortune" },
  { src: "https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/INews.png", alt: "iNews" },
  { src: "https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Medium-Logo.png", alt: "Medium" },
  { src: "https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/msnnn.jfif", alt: "MSN" },
  { src: "https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/the%20telegraph.jpg", alt: "The Telegraph" },
  { src: "https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/The-Sunday-Times.jpg", alt: "The Sunday Times" },
  { src: "https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Yahoo!_Finance_logo_2021.png", alt: "Yahoo Finance" },
];

export default function LogoCarousel() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center h-20">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
