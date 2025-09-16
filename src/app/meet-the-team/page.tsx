
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import AnimatedSection from '@/components/animated-section';
import Link from 'next/link';
import { Linkedin, ArrowRight } from 'lucide-react';
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
  bio: 'Lee is an International Business Mentor and Executive Coach dedicated to helping individuals and businesses achieve clarity, confidence, and transformative growth. With a Masters in Business Mentoring and extensive experience, he combines strategic insight with empathy to deliver exceptional results for clients worldwide.',
  shortBio: 'International Business Mentor and Executive Coach dedicated to transformative growth.',
  aiHint: 'professional portrait',
  linkedinUrl: 'https://www.linkedin.com/in/leebroders/',
};

const teamMembers = [
  {
    name: 'Darrel Alison',
    title: 'Sales and Marketing Director',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/daz.jfif',
    bio: 'As the Sales and Marketing Director for Business Growth Global, Darrel is passionate about helping clients achieve sustainable growth. He is responsible for the strategic planning and execution of all sales and marketing activities, from lead generation to customer acquisition and retention. A firm believer in the power of data, Darrel utilizes a range of analytics tools. Including Excel, SQL, Python, and Power BI to inform strategy, measure success, and drive growth for the company and its clients through a data centric approach.',
    shortBio: 'Leads sales, marketing, and operations worldwide to connect with businesses ready to scale.',
    aiHint: 'professional portrait',
    linkedinUrl: 'https://www.linkedin.com/in/darrel-alison-3919962a5/',
  },
  {
    name: 'Olga Bak',
    title: 'Business Development Manager (UK and Europe)',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/olga.png',
    bio: `Olga leads business development across the UK and Europe, introducing our transformative growth strategies to entrepreneurs, executives, and visionary business leaders. As a key member of the Sales Team at Business Growth Global, Olga leverages her extensive background in B2B sales and education to forge meaningful connections and deliver high-impact opportunities to clients across diverse industries.

With a master’s degree in Physical Education and a passion for movement and discipline, Olga brings energy, focus, and resilience to every interaction. Whether navigating complex sales cycles or climbing mountain trails in her free time, she approaches challenges with drive and purpose. Her blend of strategic insight, educational expertise, and active lifestyle gives her a grounded yet dynamic edge in understanding client needs and fostering long term partnerships.`,
    shortBio: 'Expands our reach across the UK and Europe, building key client relationships.',
    aiHint: 'professional portrait',
    linkedinUrl: 'https://www.linkedin.com/in/olga-bak-88295235b/',
  },
  {
    name: 'Jason Maxwell',
    title: 'Business Development Manager (USA East)',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/jason.png',
    bio: "Heads business development on the USA East, introducing our transformative business growth strategies to entrepreneurs and leaders. Jason is a key member of the Sales Team at Business Growth Global, where he uses his exceptional communication skills and adaptable approach to connect US-based founders and CEOs with impactful growth opportunities. With a background in empathic closing techniques, complemented by experience as a therapist, teacher, and administrator, Jason excels at building rapport and understanding client needs. His ability to connect with individuals, combined with his passion for self-development through self-defense, martial arts, meditation, and mindfulness, allows him to bring a unique and insightful perspective to the sales process.",
    shortBio: 'Heads business development on the USA East, introducing our transformative business growth strategies to entrepreneurs and leaders.',
    aiHint: 'professional portrait',
    linkedinUrl: 'https://www.linkedin.com/in/jason-maxwell-b69252b0/',
  },
  {
    name: 'Ben Edge',
    title: 'Business Development Manager (USA West)',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/benn.jpg',
    bio: 'With a background spanning technical support, leadership, and client relations, I combine professionalism with strong communication skills to build meaningful connections and deliver results. My career has given me the opportunity to work within both large corporate environments and small family-run businesses, equipping me with the adaptability and people skills needed to succeed across industries. Currently, I serve as a key member of the U.S. Sales Team for Business Growth Global, where I contribute to the company’s international success. I am trained and certified in empathic closing techniques, which allows me to guide clients with understanding and integrity while driving business growth. Highly motivated and results-driven, I am passionate not only about achieving my own goals but also about helping others succeed alongside me.',
    shortBio: 'Heads business development on the USA West, introducing our transformative business growth strategies to entrepreneurs and leaders.',
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
                    <div className="flex flex-col items-center sm:flex-row sm:items-center w-full">
                        <div className="flex-grow flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <div className="relative flex-shrink-0 h-32 w-32">
                                <Image
                                src={founder.imageUrl}
                                alt={`Portrait of ${founder.name}, ${founder.title}`}
                                fill
                                className="object-cover rounded-full"
                                data-ai-hint={founder.aiHint}
                                style={{ objectPosition: 'top' }}
                                />
                            </div>
                            <div className="flex-1">
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
                        <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
                            <Link href={founder.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${founder.name}'s LinkedIn`}>
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                     <CollapsibleContent>
                        <div className="pt-4 mt-4 border-t">
                            <p className="text-muted-foreground">{founder.bio}</p>
                            <div className="mt-4">
                                <Button asChild variant="link" className="p-0 h-auto text-accent">
                                    <Link href="/our-founder">
                                        More about {founder.name.split(' ')[0]} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </CollapsibleContent>
                </div>
                </Collapsible>

                {/* Other Team Members */}
                {teamMembers.map((member) => (
                    <Collapsible asChild key={member.name}>
                        <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden border border-border flex flex-col p-6">
                            <div className="flex flex-col items-center sm:flex-row sm:items-center w-full">
                                <div className="flex-grow flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <div className="relative flex-shrink-0 h-32 w-32">
                                    <Image
                                    src={member.imageUrl}
                                    alt={`Portrait of ${member.name}, ${member.title}`}
                                    fill
                                    className="object-cover rounded-full"
                                    data-ai-hint={member.aiHint}
                                    style={ (member.name === 'Olga Bak' || member.name === 'Ben Edge') ? { objectPosition: 'top' } : {} }
                                    />
                                </div>
                                <div className="flex-1">
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
                                <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
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
