
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import AnimatedSection from '@/components/animated-section';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";


const founder = {
  name: 'Lee Broders',
  title: 'Our Founder',
  imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/LPB-Business-Portrait-1-pnjknamjv5kzc4d2l63fwb7d7hzhuxlx0z4ce3j2no.webp',
  bio: 'Lee is an International Business Mentor and Life Coach dedicated to helping individuals and businesses achieve clarity, confidence, and transformative growth. With a Masters in Business Mentoring and extensive experience, he combines strategic insight with empathy to deliver exceptional results for clients worldwide.',
  shortBio: 'International Business Mentor and Life Coach dedicated to transformative growth.',
  aiHint: 'professional portrait',
  linkedinUrl: 'https://www.linkedin.com/in/leebroders/',
};

const teamMembers = [
  {
    name: 'Darrel Alison',
    title: 'Sales and Marketing Director',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/daz.jfif',
    bio: 'Darrel leads our sales and marketing efforts, developing strategies that connect our mentoring services with businesses ready to scale and succeed.',
    shortBio: 'Leads sales and marketing strategies to connect with businesses ready to scale.',
    aiHint: 'professional portrait',
    linkedinUrl: 'https://www.linkedin.com/in/darrel-alison-3919962a5/',
  },
  {
    name: 'Olga Bak',
    title: 'Business Development Manager (UK and Europe)',
    imageUrl: 'https://picsum.photos/seed/102/400/400',
    bio: 'Olga is focused on expanding our reach across the UK and Europe, building relationships with clients and partners to drive regional growth.',
    shortBio: 'Expands our reach across the UK and Europe, building key client relationships.',
    aiHint: 'professional portrait',
    linkedinUrl: 'https://www.linkedin.com/in/olga-bak-88295235b/',
  },
  {
    name: 'Jason Maxwell',
    title: 'Business Development Manager (USA East)',
    imageUrl: 'https://picsum.photos/seed/103/400/400',
    bio: 'Jason heads our business development on the East Coast of the USA, helping clients unlock their potential through our proven mentoring frameworks.',
    shortBio: 'Heads business development on the USA East Coast, helping clients unlock potential.',
aiHint: 'professional portrait',
    linkedinUrl: 'https://www.linkedin.com/in/jason-maxwell-b69252b0/',
  },
  {
    name: 'Ben Edge',
    title: 'Business Development Manager (USA West)',
    imageUrl: 'https://picsum.photos/seed/104/400/400',
    bio: 'Based on the West Coast, Ben is dedicated to introducing our transformative business growth strategies to a new wave of entrepreneurs and leaders.',
    shortBio: 'Introduces our transformative growth strategies to entrepreneurs on the USA West Coast.',
    aiHint: 'professional portrait',
    linkedinUrl: 'https://www.linkedin.com/in/ben-edge-b7194334b/',
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

        {/* Team List Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
               <div className="max-w-4xl mx-auto space-y-8">
                {/* Founder Card */}
                <Collapsible asChild>
                <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden border border-accent flex flex-col p-6">
                    <div className="flex items-center w-full">
                        <div className="flex-grow flex items-center space-x-6">
                            <div className="relative flex-shrink-0 h-32 w-32">
                                <Image
                                src={founder.imageUrl}
                                alt={`Portrait of ${founder.name}`}
                                fill
                                className="object-cover rounded-full"
                                data-ai-hint={founder.aiHint}
                                />
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="text-2xl font-bold text-primary">{founder.name}</h3>
                                <p className="text-md font-semibold text-accent">{founder.title}</p>
                                <p className="mt-2 text-muted-foreground">{founder.shortBio}</p>
                                <CollapsibleTrigger asChild>
                                    <button className="mt-4 text-sm text-accent font-semibold hover:underline">
                                        Learn more about {founder.name.split(' ')[0]} &rarr;
                                    </button>
                                </CollapsibleTrigger>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary ml-4 flex-shrink-0">
                            <Link href={founder.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${founder.name}'s LinkedIn`}>
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                     <CollapsibleContent>
                        <div className="pt-4 mt-4 border-t">
                            <p className="text-muted-foreground">{founder.bio}</p>
                        </div>
                    </CollapsibleContent>
                </div>
                </Collapsible>

                {/* Other Team Members */}
                {teamMembers.map((member) => (
                    <Collapsible asChild key={member.name}>
                        <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden border border-border flex flex-col p-6">
                            <div className="flex items-center w-full">
                                <div className="flex-grow flex items-center space-x-6">
                                <div className="relative flex-shrink-0 h-32 w-32">
                                    <Image
                                    src={member.imageUrl}
                                    alt={`Portrait of ${member.name}`}
                                    fill
                                    className="object-cover rounded-full"
                                    data-ai-hint={member.aiHint}
                                    />
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                                    <p className="text-md font-semibold text-accent">{member.title}</p>
                                    <p className="mt-2 text-muted-foreground">{member.shortBio}</p>
                                    <CollapsibleTrigger asChild>
                                        <button className="mt-4 text-sm text-accent font-semibold hover:underline">
                                            Learn more about {member.name.split(' ')[0]} &rarr;
                                        </button>
                                    </CollapsibleTrigger>
                                </div>
                                </div>
                                <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary ml-4 flex-shrink-0">
                                    <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                                        <Linkedin className="h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                             <CollapsibleContent>
                                <div className="pt-4 mt-4 border-t">
                                    <p className="text-muted-foreground">{member.bio}</p>
                                </div>
                            </CollapsibleContent>
                        </div>
                    </Collapsible>
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
