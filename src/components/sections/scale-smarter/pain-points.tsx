import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, Lock, Minus } from 'lucide-react';

const painPoints = [
  {
    title: 'Daily Firefighting',
    description: 'You spend your days reacting to urgent issues instead of working on strategic growth. You are the "Chief Problem Solver," leaving no time to lead.',
    icon: Flame,
  },
  {
    title: 'Entrenched in Business',
    description: 'The business relies entirely on you. If you step away, everything grinds to a halt. You built a job, not a scalable asset.',
    icon: Lock,
  },
  {
    title: 'Revenue Plateau',
    description: 'Despite your best efforts and investment, growth has stalled. You’ve hit a glass ceiling that hard work alone can’t break.',
    icon: Minus,
  },
];

export default function ScaleSmarterPainPoints() {
  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Does this sound familiar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Most business owners get stuck in the "Growth Trap."
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {painPoints.map((point) => (
            <Card key={point.title} className="bg-card border-none shadow-lg transition-transform hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="mb-4 rounded-full bg-accent/10 p-4 text-accent">
                  <point.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-center">{point.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
