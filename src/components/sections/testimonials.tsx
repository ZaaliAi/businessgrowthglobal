import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Working with them was a game-changer. Our revenue tripled in just one year. Their insights are unparalleled.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators",
    avatar: "JD",
    img: "https://picsum.photos/100/100?random=1"
  },
  {
    quote: "The strategic guidance we received helped us navigate a complex market merger successfully. Highly recommended.",
    name: "John Smith",
    title: "Founder, MarketStream",
    avatar: "JS",
    img: "https://picsum.photos/100/100?random=2"
  },
  {
    quote: "Their boardroom-level advice was critical for our global expansion. An invaluable partner for any serious enterprise.",
    name: "Samantha Ray",
    title: "COO, Global Logistics",
    avatar: "SR",
    img: "https://picsum.photos/100/100?random=3"
  },
  {
    quote: "The intensive program transformed our team's approach to sales and marketing, leading to a 200% increase in leads.",
    name: "Mike Chen",
    title: "VP of Sales, Creative Solutions",
    avatar: "MC",
    img: "https://picsum.photos/100/100?random=4"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from clients who have transformed their businesses with us.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                       <p className="text-lg italic text-foreground mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                           <AvatarImage src={testimonial.img} alt={testimonial.name} data-ai-hint="person" />
                           <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                           <p className="font-semibold text-primary">{testimonial.name}</p>
                           <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
