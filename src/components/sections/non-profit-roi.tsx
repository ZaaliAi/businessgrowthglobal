'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, PoundSterling, Calculator } from "lucide-react";

export default function NonProfitROI() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
             <Calculator className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The ROI of Capacity Building
          </h2>
          <p className="text-lg text-muted-foreground">
            Worried about the cost? We've done the math for your Board. 
            Here is why <strong>not</strong> investing in operations is costing you more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Turnover Cost */}
          <Card className="bg-red-50/50 border-red-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-xl font-bold text-red-900">
                The Cost of Burnout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-red-600">£30k / $40k</span>
                <p className="text-sm text-muted-foreground font-medium mt-1">Avg. cost to replace one employee</p>
              </div>
              <p className="text-red-800/80 text-sm leading-relaxed">
                Non-profits have the highest turnover rate of any sector (19%). Losing just one key staff member to burnout costs more than a full year of our mentorship program.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Gift Aid / Revenue */}
          <Card className="bg-green-50/50 border-green-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <PoundSterling className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-xl font-bold text-green-900">
                Unclaimed Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-green-600">+25%</span>
                <p className="text-sm text-muted-foreground font-medium mt-1">Potential revenue uplift</p>
              </div>
              <p className="text-green-800/80 text-sm leading-relaxed">
                Billions in Gift Aid (UK) and Corporate Matching (US) go unclaimed. Optimizing your donation flow and data systems often pays for our engagement in the first 90 days.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Coaching ROI */}
          <Card className="bg-blue-50/50 border-blue-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-bold text-blue-900">
                The Multiplier Effect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-blue-600">7x</span>
                <p className="text-sm text-muted-foreground font-medium mt-1">Average ROI of Executive Coaching</p>
              </div>
              <p className="text-blue-800/80 text-sm leading-relaxed">
                Studies show that for every $1 invested in executive coaching, organizations see a $7 return through improved productivity, strategy, and donor retention.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
