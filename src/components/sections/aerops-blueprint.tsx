'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, TrendingUp, DollarSign, Settings, Users, Award, X } from 'lucide-react';

const aeropsData = [
  {
    letter: 'A',
    title: 'Analyse',
    icon: <Eye />,
    description: 'Examine your business to understand its strengths and weaknesses.',
  },
  {
    letter: 'E',
    title: 'Expand',
    icon: <TrendingUp />,
    description: 'Grow your customer base and increase your profits.',
  },
  {
    letter: 'R',
    title: 'Revenue',
    icon: <DollarSign />,
    description: 'Understand your income streams to optimize your earnings.',
  },
  {
    letter: 'O',
    title: 'Operation',
    icon: <Settings />,
    description: 'Improve the efficiency of your business operations.',
  },
  {
    letter: 'P',
    title: 'People',
    icon: <Users />,
    description: 'Invest in your team to drive productivity and innovation.',
  },
  {
    letter: 'S',
    title: 'Success',
    icon: <Award />,
    description: 'Achieve your business goals and enjoy the results of your hard work.',
  },
];

export default function AeropsBlueprint() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="aerops-blueprint" className="w-full py-16 sm:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The AEROPS Blueprint
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Derived from international best practices and refined from over two decades of consulting experience, our blueprint is comprehensive. Our overarching aim is clear: Equip business owners with robust strategies to ensure a steady customer base and structure their businesses for sustained growth.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          {aeropsData.map((item, index) => (
            <div
              key={item.letter}
              onClick={() => setSelected(item)}
              className="flex flex-col items-center justify-center w-28 h-28 bg-gray-800 rounded-full shadow-lg cursor-pointer"
            >
              <div className="text-accent">{item.icon}</div>
              <h4 className="mt-2 text-lg font-bold">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}