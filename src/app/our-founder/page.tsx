import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutLeeBrodersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
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
                  About Lee Broders
                </h1>
                <div className="mt-6 space-y-6 text-lg text-muted-foreground">
                  <p>
                    Lee Broders is an International Business Mentor, Life Coach, and Professional Speaker dedicated to helping individuals and businesses achieve clarity, confidence, and transformative growth. With a Masters in Business Mentoring, British Army experience, and a proven track record across diverse sectors, Lee combines discipline, strategic insight, and empathy to deliver exceptional results.
                  </p>
                  <p>
                    Lee is a Fellow of the Association of Business Mentors (ABM), a Master Practitioner with the European Mentoring and Coaching Council (EMCC), and a Member of the Institute of Leadership and Management (ILM). He actively engages in Continuing Professional Development (CPD) to stay at the forefront of mentoring and business trends, ensuring his clients benefit from the latest insights and strategies.
                  </p>
                  <p>
                    Recognised as a thought leader in the field, Lee has been interviewed by national and international publications and regularly contributes articles on topics such as business growth, leadership transformation, and mentoring strategies for growth. His insights have inspired entrepreneurs and business leaders worldwide.
                  </p>
                  <p>
                    Through his work at Business Growth Global, Lee has helped startup founders, small business owners, and corporate executives achieve remarkable results. His tailored approach enables clients to step away from daily operations, focus on strategic growth, and unlock their business’s full potential.
                  </p>
                  <p>
                    Lee’s coaching philosophy centres on creating actionable plans to help clients achieve their personal, professional, and business goals. His proven mentoring strategies for growth empower clients to scale their business, increase profitability, and build high-performance teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Accreditations Section */}
        <section className="w-full pb-16 sm:pb-24">
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
      </main>
      <Footer />
    </div>
  );
}
