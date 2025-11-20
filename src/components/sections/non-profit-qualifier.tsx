'use client';

import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function NonProfitQualifier() {
  return (
    <section className="py-12 sm:py-16 bg-stone-50">
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
                  <span className="text-muted-foreground">You are a <strong>CEO or Founder</strong> actively running the organization.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">Your annual income is between <strong>£500k - £5M ($750k - $7M)</strong>.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You feel guilty that "admin" is eating up time meant for "impact."</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You are ready to invest time in fixing the "boring stuff" (systems, data, hiring).</span>
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
                  <span className="text-muted-foreground">You are just looking for a fundraiser to "find more money."</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You are an early-stage start-up (Pre-revenue/Pre-funding).</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You want a 100-page strategy report to present at the next AGM.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
