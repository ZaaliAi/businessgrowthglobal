import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function ScaleSmarterHero() {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8 text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wide">Starts Jan 8th • 8-Part Series</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl leading-[1.1]">
                You&apos;re doing all the right things...
                <span className="block text-primary mt-2">So why has growth stalled?</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Your revenue looks the same as it did 6 months ago. You're investing time and money, but the dial isn't moving.
              </p>

              <div className="space-y-3">
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700 font-medium">Break the "Revenue Plateau"</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700 font-medium">Stop Daily Firefighting</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700 font-medium">Build a Saleable Asset</span>
                 </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 shadow-xl shadow-accent/20" asChild>
                <Link href="https://www.linkedin.com/events/scalesmarter-aeropsintroduction7412872055219458050/" target="_blank">
                  Secure Your Seat for the Series
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-300 text-slate-700 hover:bg-white hover:text-primary bg-white/50" asChild>
                <Link href="#agenda">
                  View Full Agenda
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-slate-500">
               <Users className="w-4 h-4 inline mr-1" />
               Limited spots available for live Q&A sessions.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-slate-200">
                <div className="aspect-[4/3] relative">
                    <Image 
                        src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Lee/6aea2c6c-137f-4f1e-a7ad-8509e25bda22%20(1).JPG" 
                        alt="Scale Smarter Webinar Series"
                        fill
                        className="object-cover"
                    />
                     {/* Overlay Gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Floating Card Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                        LB
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">Lee Broders</p>
                        <p className="text-xs text-slate-500">Your Host & Mentor</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}