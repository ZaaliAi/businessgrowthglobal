import { Target, Lightbulb, Briefcase, TrendingUp, Users, Goal } from 'lucide-react';

const features = [
  {
    icon: <Target className="h-10 w-10 text-accent" />,
    title: 'Your Expertise, Our Strategy',
    description: 'We respect your deep knowledge of your business. Our role is to be your trusted mentor, applying our strategic expertise to your unique challenges and insights to unlock growth.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-accent" />,
    title: 'Focus on Strategic Growth',
    description: 'Our goal is to help you delegate daily tasks and shift your focus to strategic development. This change allows you to drive growth, maximise efficiency, and achieve long-term success.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: 'The Business Growth Blueprint',
    description: 'We utilise our proven framework to offer customised mentoring solutions. Whether for entrepreneurs, startups, or corporations, we empower you to realise your business’s full potential.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: 'Actionable & Profitable Strategies',
    description: 'We craft personalised strategies to help you scale your business, increase profitability, and build high-performance teams. Our deep knowledge enables us to develop practical plans that deliver results.',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Grow Your Customer Base',
    description: 'Our mentoring helps you develop your business, expand your customer base, and enhance revenue streams through tested methods that guarantee enduring positive growth.',
  },
  {
    icon: <Goal className="h-10 w-10 text-accent" />,
    title: 'Achieve Greater Success',
    description: 'Our mission is to help your business achieve greater success through specific mentorship programs and executive sessions. Experience the transformative power of strategic growth planning.',
  },
];

export default function Intro() {
  return (
    <section id="intro" className="w-full bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            You Are the Expert in Your Business. We Provide the Blueprint for Growth.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            At Business Growth Global, we combine your expertise with our strategic mentoring to achieve exceptional results.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-primary">{feature.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
