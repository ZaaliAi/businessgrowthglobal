import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ScaleSmarterHero from '@/components/sections/scale-smarter/hero';
import ScaleSmarterPainPoints from '@/components/sections/scale-smarter/pain-points';
import ScaleSmarterWhoShouldAttend from '@/components/sections/scale-smarter/who-should-attend';
import ScaleSmarterFounderCredibility from '@/components/sections/scale-smarter/founder-credibility';
import Testimonials from '@/components/sections/testimonials';
import ScaleSmarterMarketStats from '@/components/sections/scale-smarter/market-stats';
import ScaleSmarterGiveawayCTA from '@/components/sections/scale-smarter/giveaway-cta';
import { Badge } from '@/components/ui/badge';
import { 
    LayoutDashboard, 
    Search, 
    TrendingUp, 
    Banknote, 
    Settings, 
    Users, 
    Trophy, 
    Zap,
    Calendar
} from 'lucide-react';

const sessions = [
    { number: 1, date: "8th Jan", title: "Introduction", desc: "Introduction to the Business Growth Blueprint and why most strategies fail.", icon: LayoutDashboard },
    { number: 2, date: "13th Jan", title: "Analyse", desc: "Deep dive into understanding your business's true strengths and weaknesses.", icon: Search },
    { number: 3, date: "15th Jan", title: "Expand", desc: "Strategies to grow your customer base and increase market share.", icon: TrendingUp },
    { number: 4, date: "20th Jan", title: "Revenue", desc: "Optimising income streams and pricing models for maximum profitability.", icon: Banknote },
    { number: 5, date: "22nd Jan", title: "Operation", desc: "Streamlining processes to improve efficiency and reduce waste.", icon: Settings },
    { number: 6, date: "27th Jan", title: "People", desc: "Building high-performance teams that drive productivity and innovation.", icon: Users },
    { number: 7, date: "29th Jan", title: "Success", desc: "Defining and achieving your ultimate business goals and exit strategy.", icon: Trophy },
    { number: 8, date: "3rd Feb", title: "Grand Finale", desc: "Five Growth Traps and the fixes that work. (Long-form special)", icon: Zap, highlight: true },
];

export default function ScaleSmarterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ScaleSmarterHero />
        <ScaleSmarterPainPoints />
        <ScaleSmarterWhoShouldAttend />
        
        {/* Webinar Breakdown Section */}
        <section id="agenda" className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <Badge variant="outline" className="mb-4">The Series</Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        8 Steps to Smarter Scaling
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Each session dissects a core component of our AEROPS framework, giving you actionable insights you can apply immediately.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sessions.map((session) => (
                        <div 
                            key={session.number} 
                            className={`relative bg-card border p-6 rounded-lg shadow-sm hover:shadow-md transition-all ${session.highlight ? 'ring-2 ring-accent border-accent/50 lg:scale-105 z-10' : ''}`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-2 rounded-lg ${session.highlight ? 'bg-accent text-white' : 'bg-primary/10 text-primary'}`}>
                                    <session.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-black text-slate-100">#{session.number}</div>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <Calendar className="w-3.5 h-3.5 text-accent" />
                                <span className="text-xs font-bold uppercase tracking-wider text-accent">{session.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">{session.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{session.desc}</p>
                            {session.highlight && (
                                <div className="mt-4">
                                    <Badge className="bg-accent hover:bg-accent text-[10px] uppercase">Special Session</Badge>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <ScaleSmarterFounderCredibility />
        <Testimonials />
        <ScaleSmarterMarketStats />
        <ScaleSmarterGiveawayCTA />
      </main>
      <Footer />
    </div>
  );
}
