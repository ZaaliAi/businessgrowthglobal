'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Zap, ShieldCheck, LineChart } from "lucide-react";

export default function VcRoi() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
             <LineChart className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The ROI of Operational Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Why VCs love our methodology: We de-risk the investment and accelerate the multiple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Valuation */}
          <Card className="bg-blue-50/50 border-blue-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-bold text-blue-900">
                Valuation Multiple
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-blue-600">2x - 5x</span>
                <p className="text-sm text-muted-foreground font-medium mt-1">Potential impact on EBITDA multiple</p>
              </div>
              <p className="text-blue-800/80 text-sm leading-relaxed">
                Operational maturity is a key driver for valuation. Startups with documented systems and predictable revenue command significantly higher multiples at Series B and exit.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Burn Rate */}
          <Card className="bg-orange-50/50 border-orange-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-xl font-bold text-orange-900">
                Runway Extension
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-orange-600">+3-6 Mo</span>
                <p className="text-sm text-muted-foreground font-medium mt-1">Average runway extension</p>
              </div>
              <p className="text-orange-800/80 text-sm leading-relaxed">
                By optimizing operational efficiency and reducing "growth drag," we often help companies extend their runway without raising additional capital, preserving founder equity.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Risk */}
          <Card className="bg-emerald-50/50 border-emerald-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-xl font-bold text-emerald-900">
                Governance Ready
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-emerald-600">100%</span>
                <p className="text-sm text-muted-foreground font-medium mt-1">Due Diligence Preparedness</p>
              </div>
              <p className="text-emerald-800/80 text-sm leading-relaxed">
                Never scramble for a data room again. We build the governance, reporting, and compliance structures that make future due diligence a breeze.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
