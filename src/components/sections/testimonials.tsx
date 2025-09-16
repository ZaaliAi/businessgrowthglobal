import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Script from 'next/script';

const testimonials = [
  {
    quote: "Joining Business Growth Global’s mentoring program is easily one of the best decisions I’ve made as a CEO. Their expertise, paired with a genuine commitment to our success, has revolutionized how we approach challenges and capitalize on opportunities. Our profit margins have seen a consistent upward trend, all thanks to the invaluable guidance we received.",
    name: "Matt D",
    title: "Orsa Housing",
  },
  {
    quote: "After joining the Business Growth Global Coaching program, my company has experienced a paradigm shift in its operations and growth trajectory. The hands-on mentoring and actionable strategies provided have not only sharpened our business acumen but also paved the way for unprecedented growth. A heartfelt thank you to the entire team!",
    name: "Joe G",
    title: "KCJ Executive Talent",
  },
  {
    quote: "The mentoring I received at Business Growth Global was transformative. Every session was a deep dive into areas of my business I’d overlooked. Their holistic approach ensured we optimized every aspect of our business model. I can confidently say we’ve grown more in the last six months than we had in the previous two years!",
    name: "Carla C",
    title: "Paperock Creative",
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": testimonials.map((testimonial, index) => ({
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Business Growth Global"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "author": {
      "@type": "Person",
      "name": testimonial.name
    },
    "reviewBody": testimonial.quote,
    "position": index + 1
  }))
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-secondary py-16 sm:py-24">
       <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from clients who have transformed their businesses with us.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                       <p className="text-lg italic text-foreground mb-6">"{testimonial.quote}"</p>
                      <div>
                         <p className="font-semibold text-primary">{testimonial.name}</p>
                         <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {testimonials.length > 1 && (
            <>
              <CarouselPrevious className="left-[-1rem] sm:left-[-3rem]" />
              <CarouselNext className="right-[-1rem] sm:right-[-3rem]" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
}
