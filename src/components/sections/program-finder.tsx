'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Check, ArrowRight, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const quizQuestions = [
  {
    question: "What's your primary role?",
    options: [
      { text: "Founder in early stages", scores: { elevate: 2, intensive: 1, boardroom: 0 } },
      { text: "Owner of a growing business", scores: { elevate: 1, intensive: 2, boardroom: 1 } },
      { text: "C-Suite leader in a large company", scores: { elevate: 0, intensive: 1, boardroom: 2 } },
    ],
  },
  {
    question: "What's your biggest challenge right now?",
    options: [
      { text: "Finding direction and building a foundation", scores: { elevate: 2, intensive: 1, boardroom: 0 } },
      { text: "Scaling up and breaking through a plateau", scores: { elevate: 1, intensive: 2, boardroom: 1 } },
      { text: "Navigating complex market changes", scores: { elevate: 0, intensive: 1, boardroom: 2 } },
    ],
  },
  {
    question: "What level of support do you need?",
    options: [
      { text: "Consistent guidance", scores: { elevate: 2, intensive: 1, boardroom: 0 } },
      { text: "Intensive, hands-on support", scores: { elevate: 1, intensive: 2, boardroom: 1 } },
      { text: "High-level strategic advisory", scores: { elevate: 0, intensive: 1, boardroom: 2 } },
    ],
  },
];

const programDetails = {
    elevate: { name: "Elevate", description: "Perfect for establishing a strong foundation and accelerating early-stage growth." },
    intensive: { name: "Intensive", description: "Ideal for optimizing operations and achieving sustainable, accelerated growth." },
    boardroom: { name: "Boardroom", description: "Designed for enhancing leadership transformation and building high-performance teams." },
}

export default function ProgramFinder() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ elevate: 0, intensive: 0, boardroom: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const handleAnswer = (selectedScores) => {
    const newScores = {
      elevate: scores.elevate + selectedScores.elevate,
      intensive: scores.intensive + selectedScores.intensive,
      boardroom: scores.boardroom + selectedScores.boardroom,
    }
    setScores(newScores);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateRecommendation(newScores);
      setIsFinished(true);
    }
  };

  const calculateRecommendation = (finalScores) => {
    const highestScore = Math.max(finalScores.elevate, finalScores.intensive, finalScores.boardroom);
    const recommendedProgram = Object.keys(finalScores).find(key => finalScores[key] === highestScore);
    setRecommendation(programDetails[recommendedProgram]);
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScores({ elevate: 0, intensive: 0, boardroom: 0 });
    setIsFinished(false);
    setRecommendation(null);
  };

  return (
    <section id="program-finder" className="w-full py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Find Your Ideal Program
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Answer a few short questions to get a personalized recommendation.
          </p>
        </div>
        
        <Card className="overflow-hidden">
          {!isFinished ? (
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">{quizQuestions[currentQuestion].question}</h3>
              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    size="lg" 
                    className="w-full justify-start h-auto py-4"
                    onClick={() => handleAnswer(option.scores)}
                  >
                    <span className="text-lg">{option.text}</span>
                  </Button>
                ))}
              </div>
              <div className="mt-8 text-center text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </div>
            </CardContent>
          ) : (
            recommendation && (
              <CardContent className="p-8 text-center">
                  <CardTitle className="text-2xl mb-2">We Recommend the</CardTitle>
                  <h3 className="text-4xl font-bold text-accent mb-4">{recommendation.name} Program</h3>
                  <p className="text-lg text-muted-foreground mb-8">{recommendation.description}</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Button asChild size="lg">
                          <Link href="/programs">
                              Learn More <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                      </Button>
                      <Button variant="outline" size="lg" onClick={restartQuiz}>
                          <RefreshCw className="mr-2 h-5 w-5" />
                          Start Over
                      </Button>
                  </div>
              </CardContent>
            )
          )}
        </Card>
      </div>
    </section>
  );
}
