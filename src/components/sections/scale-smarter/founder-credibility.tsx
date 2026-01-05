import Image from 'next/image';

export default function ScaleSmarterFounderCredibility() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/LPB-Business-Portrait-1-pnjknamjv5kzc4d2l63fwb7d7hzhuxlx0z4ce3j2no.webp"
              alt="Lee Broders, Founder of Business Growth Global"
              fill
              className="object-cover"
              style={{ objectPosition: 'top' }}
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Meet Your Guide: Lee Broders
            </h2>
            <h3 className="text-xl font-medium text-accent">
              International Business Mentor & Executive Coach
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Scaling a business isn't just about hard work; it's about applying the right strategy at the right time. I know this because I've lived it.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <p>
                    <strong>20+ Years Experience:</strong> Decades of "in the trenches" experience building and scaling profitable businesses.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <p>
                    <strong>Corporate Pedigree:</strong> Consulted for global giants like <span className="font-semibold text-foreground">Capgemini, IBM, and Deloitte</span> to optimise operations.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <p>
                    <strong>Strategic Rigour:</strong> I combine corporate-level strategy with practical, hands-on mentorship for ambitious business owners.
                  </p>
                </li>
              </ul>

              <p className="pt-2 border-t border-border">
                This webinar series isn't just theory, it's the exact blueprint I use to transform businesses and break through revenue plateaus every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
