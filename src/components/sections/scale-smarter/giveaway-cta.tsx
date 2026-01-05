import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Gift, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function ScaleSmarterGiveawayCTA() {
  return (
    <section className="py-16 sm:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-slate-900 text-primary-foreground">
            
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/contract.jpg"
                    alt="Business contract signing"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
            </div>

          <div className="relative z-10 px-6 py-12 md:py-20 md:px-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white font-bold text-sm uppercase tracking-wide shadow-lg border border-white/10">
                <Gift className="w-4 h-4" />
                Exclusive Giveaway
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Win 3 Months of Business Mentoring
              </h2>
              <p className="text-lg text-slate-300">
                At the end of <span className="font-bold text-white underline decoration-accent">each webinar</span>, one lucky live participant will be selected to win a transformative growth package.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-slate-200"><strong>3 Months Free Mentoring:</strong> Personal guidance from our expert team.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-slate-200"><strong>Strategic Roadmap:</strong> Tailored plan to overcome your biggest challenge.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-slate-200"><strong>Full Digital Optimisation:</strong> Review and upgrade of your current digital footprint.</span>
                </li>
              </ul>
            </div>

            <div className="flex-1 w-full max-w-md bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 text-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Don't Miss Out</h3>
              <p className="text-slate-300 mb-8">
                Spaces are limited. Secure your spot now to learn how to scale smarter and get a chance to win.
              </p>
              <Button size="lg" className="w-full h-14 text-lg font-bold bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20" asChild>
                <Link href="https://www.linkedin.com/events/scalesmarter-aeropsintroduction7412872055219458050/" target="_blank">
                  Register Now on LinkedIn
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <p className="text-xs text-slate-400 mt-4">
                *Winners must be present live at the webinar to claim the prize.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
