import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="w-full py-16 sm:py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Your Partner in Strategic Growth
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            At Business Growth Global, we are more than consultants; we are your dedicated partners in success. Our mission is to empower businesses with the strategic insights, leadership skills, and operational excellence required to thrive in today's competitive landscape.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Our team consists of seasoned industry veterans who have built, scaled, and led successful companies. We bring this firsthand experience to every mentorship engagement, offering practical, actionable advice tailored to your unique challenges and goals.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://picsum.photos/600/600"
            alt="Strategic planning session"
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
