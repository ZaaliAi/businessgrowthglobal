import { CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ScaleSmarterWhoShouldAttend() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Who this is for */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary mb-8">
              Who Should Attend?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Ambitious Founders & CEOs</h3>
                  <p className="text-muted-foreground mt-1">You are running a business with £250k - £5m+ turnover and are hungry for the next stage of growth.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Leaders Seeking an Exit</h3>
                  <p className="text-muted-foreground mt-1">You want to build a valuable asset that can be sold, not just a high-paying job.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Execs Who Want Freedom</h3>
                  <p className="text-muted-foreground mt-1">You love your business but hate that it relies 100% on you to function.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Who this is NOT for */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary mb-8">
              Who This is NOT For
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">"Get Rich Quick" Seekers</h3>
                  <p className="text-muted-foreground mt-1">Scaling is hard work. We provide the map, but you have to walk the path.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Pre-Revenue Startups</h3>
                  <p className="text-muted-foreground mt-1">This series is designed for established businesses with traction and a team.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Theory-Only Academics</h3>
                  <p className="text-muted-foreground mt-1">We focus on practical, "in the trenches" execution, not textbook definitions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
