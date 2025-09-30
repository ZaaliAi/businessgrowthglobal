import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/animated-section';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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

export default function OurTeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Founder Section */}
        <section id="about-lee" className="w-full py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-3">
              <div className="md:col-span-1">
                <Image
                  src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/LPB-Business-Portrait-1-pnjknamjv5kzc4d2l63fwb7d7hzhuxlx0z4ce3j2no.webp"
                  alt="Lee Broders"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-xl"
                  data-ai-hint="professional portrait"
                  style={{ objectPosition: 'top' }}
                />
              </div>
              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                  Our Founder: Lee Broders
                </h1>
                <div className="mt-6 space-y-6 text-lg text-muted-foreground">
                  <p>
                    Lee Broders is an International Business Mentor, Executive Coach, and Professional Speaker dedicated to helping individuals and businesses achieve clarity, confidence, and transformative growth. With Masters in both Business Mentoring and Law coupled with British Army Special Forces experience, and a proven track record across diverse sectors, Lee combines discipline, strategic insight, and empathy to deliver exceptional results.
                  </p>
                  <p>
                    Lee is a Fellow of the Association of Business Mentors (ABM), a Master Practitioner with the European Mentoring and Coaching Council (EMCC), and a Member of the Institute of Leadership and Management (ILM). He actively engages in Continuing Professional Development (CPD) to stay at the forefront of mentoring and business trends, ensuring his clients benefit from the latest insights and strategies.
                  </p>
                  <p>
                    Through his work at Business Growth Global, Lee has helped startup founders, small business owners, and corporate executives achieve remarkable results. His tailored approach enables clients to step away from daily operations, focus on strategic growth, and unlock their business’s full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Accreditations Section */}
        <section className="w-full pb-16 sm:pb-24 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-primary text-center mb-12">
              Our Accreditations
            </h2>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              <Link href="https://associationofbusinessmentors.org/find-a-mentor/user/15588/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-105">
                <div className="relative h-32 w-64">
                  <Image
                    src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/abm.png"
                    alt="Association of Business Mentors Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="https://www.emccglobal.org/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-105">
                <div className="relative h-32 w-64">
                  <Image
                    src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/cropped-emcc-uk-member-logo-transparent.png"
                    alt="EMCC UK Member Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Team List Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">Meet the Rest of Our Team</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  The experienced professionals dedicated to your business's growth and success.
                </p>
              </div>
               <div className="max-w-4xl mx-auto space-y-8">
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