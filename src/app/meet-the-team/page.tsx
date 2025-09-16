import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import AnimatedSection from '@/components/animated-section';

const teamMembers = [
  {
    name: 'Lee Broders',
    title: 'Our Founder',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/LPB-Business-Portrait-1-pnjknamjv5kzc4d2l63fwb7d7hzhuxlx0z4ce3j2no.webp',
    bio: 'Lee is an International Business Mentor and Life Coach dedicated to helping individuals and businesses achieve clarity, confidence, and transformative growth.',
    aiHint: 'professional portrait',
  },
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
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Meet Our Team</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  The experienced professionals dedicated to your business's growth and success.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                  <Card key={member.name} className="flex flex-col overflow-hidden text-center">
                    <div className="relative aspect-square">
                      <Image
                        src={member.imageUrl}
                        alt={`Portrait of ${member.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint={member.aiHint}
                      />
                    </div>
                    <CardHeader>
                      <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                      <p className="text-md font-semibold text-accent">{member.title}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
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
