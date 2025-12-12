'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, Briefcase } from "lucide-react";

export default function ForProfitRoi() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
             <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The ROI of Systems & Strategy
          </h2>
          <p className="text-lg text-muted-foreground">
            Moving from "Owner-Operator" to "CEO" isn't just about lifestyle; it's about asset value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Profit Margins */}
          <Card className="bg-emerald-50/50 border-emerald-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-xl font-bold text-emerald-900">
                Profit Margins
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-emerald-600">+15-20%</span>
                <p className="text-sm text-muted-foreground font-medium mt-1">Avg. EBITDA Improvement</p>
              </div>
              <p className="text-emerald-800/80 text-sm leading-relaxed">
                By eliminating operational waste, optimising pricing, and focusing on high-margin niches, our clients typically see a double-digit increase in net profit within 12 months.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Founder Time */}
          <Card className="bg-blue-50/50 border-blue-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-bold text-blue-900">
                Founder Freedom
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-blue-600">20+ Hrs</span>
                <p className="text-sm text-muted-foreground font-medium mt-1">Saved per week</p>
              </div>
              <p className="text-blue-800/80 text-sm leading-relaxed">
                We help you hire leaders and build systems so you can stop fighting fires. Imagine getting 20 hours of your week back to focus on strategy (or your family).
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Valuation */}
          <Card className="bg-indigo-50/50 border-indigo-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle className="text-xl font-bold text-indigo-900">
                Exit Readiness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-indigo-600">3x</span>
                <p className="text-sm text-muted-foreground font-medium mt-1">Higher Exit Multiple</p>
              </div>
              <p className="text-indigo-800/80 text-sm leading-relaxed">
                Buyers buy systems, not people. A business that runs without the founder is worth significantly more than one that depends on them.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
