'use client';

import { Users, Calendar, MessageSquare, BookOpen } from 'lucide-react';

const features = [
  {
    title: 'Small Group Setting',
    description: 'Limited to a maximum of 6 members per cohort to ensure focused collaboration and deep trust.',
    icon: Users,
  },
  {
    title: 'Regular Strategic Meetings',
    description: 'Monthly 2-hour sessions dedicated to high-impact work on your business, not just in it.',
    icon: Calendar,
  },
  {
    title: 'Structured Support',
    description: 'You are never alone. Includes dedicated text and email support between sessions to keep momentum going.',
    icon: MessageSquare,
  },
  {
    title: 'Exclusive Resources',
    description: 'Access a curated library of tools, templates, and guides specifically designed for Business Growth.',
    icon: BookOpen,
  },
];

export default function CircleClubFeatures() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
