import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck, PhoneCall, BarChart2, Zap } from "lucide-react";

const features = [
    {
      id: "sessions",
      title: "1-to-1 Sessions",
      icon: <CalendarCheck className="h-6 w-6" />,
      content: {
        length: "45–60 minutes",
        format: "Mentee-led, mentor-guided",
        purpose: [
          "Provide a structured, safe space for open discussion.",
          "Review current progress and celebrate wins.",
          "Explore challenges in business and life.",
          "Conduct an action check on previous commitments.",
          "Identify next steps to maintain momentum.",
        ],
        benefits: [
          "Keeps the mentee accountable.",
          "Builds confidence in decision-making.",
          "Provides clarity on priorities.",
          "Ensures consistent progress toward goals.",
        ],
      }
    },
    {
      id: "calls",
      title: "Crisis Calls",
      icon: <PhoneCall className="h-6 w-6" />,
      content: {
        length: "15 minutes",
        availability: "Bookable within 2 hours",
        purpose: [
          "Provide rapid support for time-sensitive issues.",
          "Navigate urgent problems or challenges.",
        ],
        commonExamples: [
          "Disciplinary action for an employee",
          "Conflict resolution within the team",
          "Unexpected client or supplier issues",
          "Financial or operational emergencies",
        ],
        benefits: [
          "Ensures you are never \'stuck\' without guidance.",
          "Helps prevent small problems from escalating.",
          "Provides reassurance and stability.",
        ],
      }
    },
    {
      id: "reviews",
      title: "Strategy & Action Reviews",
      icon: <BarChart2 className="h-6 w-6" />,
      content: {
        length: "60–90 minutes",
        format: "Mentor-led deep-dive",
        purpose: [
          "Review overall business strategy.",
          "Assess progress against long-term goals.",
          "Identify gaps, risks, or new opportunities.",
          "Refine or reset the action plan.",
          "Ensure alignment with AEROPS framework.",
        ],
        keyActivities: [
            "Review performance metrics and results.",
            "Evaluate effectiveness of previous actions.",
            "Re-align business priorities with goals.",
            "Agree clear action steps for the next phase.",
        ],
        benefits: [
          "Provides structured accountability.",
          "Maintains strategic focus.",
          "Ensures progress toward sustainable growth.",
          "Builds clarity and confidence.",
        ],
      }
    },
    {
      id: "power",
      title: "Power Reviews",
      icon: <Zap className="h-6 w-6" />,
      content: {
        length: "2–2.5 hours",
        frequency: "Twice (6 & 12 months)",
        purpose: [
          "Conduct a full review of business and program progress.",
          "Revisit goals to assess overall performance.",
          "Apply course corrections if needed.",
          "Amplify successful strategies.",
          "Ensure mentee is positioned for strong growth.",
        ],
        keyActivities: [
            "Review all areas of the AEROPS framework.",
            "Assess ROI and set targets for the next stage.",
            "Recalibrate goals, KPIs, and action plans.",
            "Address unresolved or emerging challenges.",
            "Capture success stories and lessons learned.",
        ],
        benefits: [
          "Provides a milestone to measure business transformation.",
          "Keeps focus on long-term objectives.",
          "Ensures program remains personalised and effective.",
          "Creates a renewed sense of direction and energy.",
        ],
      }
    }
  ];

export default function IntensiveDeepDive() {
    return (
        <section id="intensive-deep-dive" className="w-full py-16 sm:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        A Deep Dive into the Features
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Explore the high-touch features that make our programs a catalyst for accelerated growth and transformation.
                    </p>
                </div>
                <Tabs defaultValue="sessions" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-primary/10">
                        {features.map(feature => (
                        <TabsTrigger key={feature.id} value={feature.id} className="flex flex-col sm:flex-row gap-2 items-center py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            {feature.icon}
                            <span className="text-sm font-semibold">{feature.title}</span>
                        </TabsTrigger>
                        ))}
                    </TabsList>
                    {features.map(feature => (
                    <TabsContent key={feature.id} value={feature.id} className="mt-6">
                        <Card>
                            <CardContent className="p-8 text-left">
                                {Object.entries(feature.content).map(([key, value]) => (
                                    <div key={key} className="mb-4 last:mb-0">
                                        <h4 className="font-bold text-lg capitalize mb-2 text-primary">{key.replace(/([A-Z])/g, ' $1')}</h4>
                                        {Array.isArray(value) ? (
                                            <ul className="space-y-2 list-disc pl-5">
                                                {value.map((item, index) => (
                                                    <li key={index} className="text-foreground">{item}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-foreground">{value}</p>
                                        )}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
