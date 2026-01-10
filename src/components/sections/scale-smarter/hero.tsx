'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, CheckCircle2, Play, Gift } from 'lucide-react';
import { useRef, useState } from 'react';

export default function ScaleSmarterHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8 text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wide">Starts Jan 8th • FREE 8-Part Series</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl leading-[1.1]">
                Stop Surviving. <span className="text-accent relative inline-block">Start Scaling.<span className="absolute bottom-1 left-0 w-full h-2 bg-accent/10 -z-10 skew-x-12"></span></span>
              </h1>
              
              <div className="space-y-4 max-w-lg">
                <p className="text-xl text-slate-600 font-medium italic border-l-4 border-slate-300 pl-4 py-1">
                  "Your revenue stalled and margins getting thinner. You&apos;re investing time and money, but the dial isn&apos;t moving."
                </p>
                <p className="text-lg text-slate-700">
                  Join our <span className="font-bold text-accent bg-accent/5 px-1 rounded">FREE 8-part webinar series</span> (Value: £5,000) and learn the exact AEROPS framework used to scale 8-figure businesses.
                </p>
              </div>

              <div className="space-y-3">
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Break the "Revenue Plateau" with proven strategies</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Stop Daily Firefighting & Reclaim Your Time</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Build a Saleable Asset (Exit Strategy Included)</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Live Q&A with Industry Experts every session</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Exclusive Worksheets & Templates for attendees</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                    <Gift className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-slate-900 font-bold">BONUS: Win 3 Months of Mentoring (Giveaway after EVERY webinar!)</span>
                 </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 shadow-xl shadow-accent/20" asChild>
                <Link href="#register">
                  Secure Your FREE Seat for the Series
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-slate-200 group">
                <div className="aspect-[4/3] relative">
                    <video 
                        ref={videoRef}
                        src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Lee/webinar%20intro.mp4"
                        poster="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Lee/6aea2c6c-137f-4f1e-a7ad-8509e25bda22%20(1).JPG"
                        controls={isPlaying}
                        playsInline
                        className="w-full h-full object-cover"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={() => setIsPlaying(false)}
                    >
                        Your browser does not support the video tag.
                    </video>
                    
                    {/* Custom Play Button Overlay */}
                    {!isPlaying && (
                        <div 
                            className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all cursor-pointer z-20"
                            onClick={handlePlay}
                        >
                            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center pl-1 shadow-2xl scale-100 group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-8 h-8 text-accent fill-accent" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Floating Card Element */}
            <div className="absolute -bottom-4 left-4 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-xl shadow-xl border border-slate-100 flex animate-in fade-in slide-in-from-bottom-4 duration-1000 z-30">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs md:text-base">
                        LB
                    </div>
                    <div>
                        <p className="text-xs md:text-sm font-bold text-slate-900">Lee Broders</p>
                        <p className="text-[10px] md:text-xs text-slate-500">Your Host & Mentor</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}