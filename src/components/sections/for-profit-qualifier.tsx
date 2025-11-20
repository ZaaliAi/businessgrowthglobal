'use client';

import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ForProfitQualifier() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Who This Is For */}
          <Card className="border-l-4 border-l-green-500 shadow-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                This is for you if...
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You are a Founder/Owner generating <strong>£1M - £10M ($1.5M - $15M)</strong> in revenue.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You feel stuck in the day-to-day and can't take a holiday.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You have hit a revenue plateau despite working harder than ever.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You want to build an asset you can eventually sell or exit.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Who This Is NOT For */}
          <Card className="border-l-4 border-l-red-400 shadow-sm opacity-80">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-muted-foreground">
                <XCircle className="w-6 h-6 text-red-400" />
                This is NOT for you if...
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You are a solo freelancer with no intention of hiring a team.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You are looking for "get rich quick" marketing hacks.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You are not willing to delegate or change how you operate.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
