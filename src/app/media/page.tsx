import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import VideoCarousel from '@/components/sections/video-carousel';

const articles = [
  {
    url: 'https://inews.co.uk/inews-lifestyle/worried-ai-job-obsolete-retrain-3786094?ico=most_popular',
    title: 'Worried AI will make your job obsolete? You need to retrain – and here’s how',
    description: 'As the world changes, workers have always had to adapt...',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/INews.png',
    publication: 'iNews'
  },
  {
    url: 'https://medium.com/authority-magazine/lee-broders-of-business-growth-global-on-the-importance-of-professional-business-networks-30bac12a10eb',
    title: 'Lee Broders of Business Growth Global On The Importance of Professional Business Networks',
    description: 'An Interview With Fotis Georgiadis',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Medium-Logo.png',
    publication: 'Authority Magazine'
  },
  {
    url: 'https://dileaders.com/blog/can-cross-company-mentoring-unlock-benefits/',
    title: 'Can cross-company mentoring unlock benefits?',
    description: 'Cross-company mentoring is a powerful tool for developing talent and fostering innovation...',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/cropped-di-logo-full-strap-2023-vs1.webp',
    publication: 'DI Leaders'
  },
  {
    url: 'https://fortune.com/2025/02/28/gen-z-task-masking-work-trend-career-advice/',
    title: 'Gen Z is ‘task masking’ to make their jobs more bearable. It’s the latest sign of a workforce in distress',
    description: 'The youngest generation of workers are finding ways to cope with a less-than-ideal labor market.',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/fortune-logo-2016-840x485.webp',
    publication: 'Fortune'
  },
  {
    url: 'https://www.msn.com/en-gb/money/other/how-much-money-it-takes-to-be-happy-according-to-the-rich/ar-AA1sf53p?ocid=Peregrine',
    title: 'How much money it takes to be happy, according to the rich',
    description: 'Many people believe that if they just had more money, they would be happier...',
    imageUrl: 'https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/msnnn.jfif',
    publication: 'MSN'
  }
];

export default function MediaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 text-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e"
              alt="Stack of newspapers"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Media & Insights</h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Exploring business growth, leadership, and strategy in the press and on screen.
            </p>
          </div>
        </section>

        {/* Articles Section */}
        <AnimatedSection>
          <section className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">Featured In</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <a href={article.url} key={article.url} target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="bg-card border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      <div className="relative h-56 bg-white rounded-t-lg">
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <p className="text-sm font-semibold text-accent mb-2">{article.publication}</p>
                        <h3 className="text-xl font-bold text-primary flex-grow">{article.title}</h3>
                        <p className="text-muted-foreground mt-2 flex-grow">{article.description}</p>
                        <div className="mt-4">
                          <Button variant="link" className="p-0 h-auto text-accent">
                            Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Video Insights Section */}
        <AnimatedSection>
          <VideoCarousel />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
