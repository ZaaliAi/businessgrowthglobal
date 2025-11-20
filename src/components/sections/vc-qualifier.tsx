'use client';

import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function VcQualifier() {
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
                  <span className="text-muted-foreground">You have raised <strong>Seed or Series A</strong> funding.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You need to demonstrate <strong>repeatable growth</strong> for your next round.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You are a Founder/CEO transitioning from "doing" to "leading."</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">Your board is asking for clearer metrics and governance.</span>
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
                  <span className="text-muted-foreground">You are pre-revenue or bootstrapping (try our <a href="/programs" className="underline hover:text-foreground">Accelerator</a>).</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You want a "Growth Hacker" to just run Facebook ads.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-muted-foreground">You are looking for an investor, not an operational partner.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
