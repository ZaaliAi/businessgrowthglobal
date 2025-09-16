import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import AnimatedSection from '@/components/animated-section';
import Link from 'next/link';

const founder = {
  name: 'Lee Broders',
  title: 'Our Founder',
  imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/LPB-Business-Portrait-1-pnjknamjv5kzc4d2l63fwb7d7hzhuxlx0z4ce3j2no.webp',
  bio: 'Lee is an International Business Mentor and Life Coach dedicated to helping individuals and businesses achieve clarity, confidence, and transformative growth. With a Masters in Business Mentoring and extensive experience, he combines strategic insight with empathy to deliver exceptional results for clients worldwide.',
  aiHint: 'professional portrait',
};

const teamMembers = [
  {
    name: 'Darrel Alison',
    title: 'Sales and Marketing Director',
    imageUrl: 'https://picsum.photos/seed/101/400/400',
    bio: 'Darrel leads our sales and marketing efforts, developing strategies that connect our mentoring services with businesses ready to scale and succeed.',
    aiHint: 'professional portrait',
  },
  {
    name: 'Olga Bak',
    title: 'Business Development Manager (UK and Europe)',
    imageUrl: 'https://picsum.photos/seed/102/400/400',
    bio: 'Olga is focused on expanding our reach across the UK and Europe, building relationships with clients and partners to drive regional growth.',
    aiHint: 'professional portrait',
  },
  {
    name: 'Jason Maxwell',
    title: 'Business Development Manager (USA East)',
    imageUrl: 'https://picsum.photos/seed/103/400/400',
    bio: 'Jason heads our business development on the East Coast of the USA, helping clients unlock their potential through our proven mentoring frameworks.',
    aiHint: 'professional portrait',
  },
  {
    name: 'Ben Edge',
    title: 'Business Development Manager (USA West)',
    imageUrl: 'https://picsum.photos/seed/104/400/400',
    bio: 'Based on the West Coast, Ben is dedicated to introducing our transformative business growth strategies to a new wave of entrepreneurs and leaders.',
    aiHint: 'professional portrait',
  },
];

export default function MeetTheTeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Meet Our Leadership</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  The experienced professionals dedicated to your business's growth and success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                 <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                        <div className="md:col-span-2">
                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                src={founder.imageUrl}
                                alt={`Portrait of ${founder.name}`}
                                fill
                                className="object-cover"
                                data-ai-hint={founder.aiHint}
                                />
                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">{founder.name}</h2>
                            <p className="text-xl font-semibold text-accent mt-1">{founder.title}</p>
                            <p className="mt-6 text-lg text-muted-foreground">{founder.bio}</p>
                             <Link href="/our-founder" className="mt-6 inline-block text-accent font-semibold hover:underline">
                                Learn more about Lee &rarr;
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <div key={member.name} className="group relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={member.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={member.aiHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                       <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                       <p className="text-md font-semibold text-white/90">{member.title}</p>
                    </div>
                     <div className="absolute inset-0 bg-primary/90 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-primary-foreground">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
