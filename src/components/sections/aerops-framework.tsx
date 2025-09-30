'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Eye, TrendingUp, Banknote, Settings, Users, Award } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const aeropsData = [
  {
    letter: 'A',
    title: 'Analyse',
    icon: <Eye className="h-8 w-8" />,
    description: 'Examine your business to understand its strengths and weaknesses.',
    details:
      'We help you conduct a deep-dive analysis of your business, identifying distinct advantages and areas for improvement to build a solid foundation for growth.',
  },
  {
    letter: 'E',
    title: 'Expand',
    icon: <TrendingUp className="h-8 w-8" />,
    description: 'Grow your customer base and increase your profits.',
    details:
      'Strategically expand your clientele and profit potentials. We focus on actionable strategies to grow your customer base and enhance revenue streams.',
  },
  {
    letter: 'R',
    title: 'Revenue',
    icon: <Banknote className="h-8 w-8" />,
    description: 'Understand your income streams to optimize your earnings.',
    details:
      'Fully grasp and optimize your revenue channels. Our mentors guide you in structuring your business for sustained, predictable income.',
  },
  {
    letter: 'O',
    title: 'Operation',
    icon: <Settings className="h-8 w-8" />,
    description: 'Improve the efficiency of your business operations.',
    details:
      'Amplify the effectiveness of your operations. We help you streamline processes, improve efficiency, and build a business that can run without your daily involvement.',
  },
  {
    letter: 'P',
    title: 'People',
    icon: <Users className="h-8 w-8" />,
    description: 'Invest in your team to drive productivity and innovation.',
    details:
      'Prioritize and invest in your people. A strong team is the backbone of a successful business. We guide you in building and nurturing a high-performance team.',
  },
  {
    letter: 'S',
    title: 'Success',
    icon: <Award className="h-8 w-8" />,
    description: 'Achieve your business goals and enjoy the results of your hard work.',
    details:
      'Achieve tangible success, where your business consistently generates revenue, regardless of your direct involvement, allowing you to enjoy the fruits of your hard work.',
  },
];

export default function AeropsFramework() {
  return (
    <section id="aerops-blueprint" className="w-full py-16 sm:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The AEROPS Framework
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Derived from international best practices and refined from over two decades of consulting experience, our blueprint is comprehensive. Our overarching aim is clear: Equip business owners with robust strategies to ensure a steady customer base and structure their businesses for sustained growth.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/aerops-framework">Learn More About the Framework</Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {aeropsData.map((item) => (
            <Popover key={item.letter}>
              <PopoverTrigger asChild>
                <div
                  className="flex flex-col items-center justify-center w-32 h-32 bg-gray-800 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:bg-gray-700"
                >
                  <div className="text-accent">{item.icon}</div>
                  <h4 className="mt-2 text-lg font-bold">{item.title}</h4>
                </div>
              </PopoverTrigger>
              <PopoverContent
                side="top"
                className="w-80 bg-gray-800 border-accent text-white p-6 rounded-lg shadow-xl"
              >
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-accent">{item.title}</h3>
                    <p className="text-sm text-gray-300">
                      {item.details}
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </section>
  );
}
