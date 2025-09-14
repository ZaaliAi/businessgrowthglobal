import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, CalendarCheck, PhoneCall, BarChart2 } from "lucide-react";

const intensiveFeatures = [
    {
      id: "sessions",
      title: "48 Personalised Sessions",
      icon: <CalendarCheck className="h-6 w-6" />,
      content: "Receive nearly weekly, one-on-one personalised mentoring sessions. These deep dives are dedicated to tackling your specific challenges, refining your strategy, and ensuring you are consistently moving towards your most ambitious goals. This high-frequency engagement ensures momentum is never lost and you always have an expert sounding board."
    },
    {
      id: "calls",
      title: "Weekly Crisis Calls",
      icon: <PhoneCall className="h-6 w-6" />,
      content: "Gain peace of mind with two weekly 15-minute crisis calls. Use these for urgent issues, quick questions, or immediate guidance when you can't wait for your next full session. It's your direct line for real-time support, ensuring you're never stuck on a critical decision."
    },
    {
      id: "support",
      title: "Priority Support",
      icon: <Briefcase className="h-6 w-6" />,
      content: "Enjoy priority email and text support with a guaranteed 24-hour response time. This continuous line of communication ensures that your questions and concerns are addressed promptly, keeping your progress on track between scheduled sessions and providing ongoing accountability."
    },
    {
      id: "reviews",
      title: "12 Strategy Reviews",
      icon: <BarChart2 className="h-6 w-6" />,
      content: "With 12 comprehensive Strategy & Action Reviews throughout the year, we'll regularly assess your progress, pivot strategies as needed, and set clear, actionable goals for the next phase. This ensures your growth is not just rapid, but also strategic, sustainable, and aligned with market changes."
    }
  ];

export default function IntensiveDeepDive() {
    return (
        <section id="intensive-deep-dive" className="w-full py-16 sm:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        A Deep Dive into the Intensive Package
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Explore the high-touch features that make our most popular package a catalyst for accelerated growth and transformation.
                    </p>
                </div>
                <Tabs defaultValue="sessions" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-primary/10">
                        {intensiveFeatures.map(feature => (
                        <TabsTrigger key={feature.id} value={feature.id} className="flex flex-col sm:flex-row gap-2 items-center py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            {feature.icon}
                            <span className="text-sm font-semibold">{feature.title}</span>
                        </TabsTrigger>
                        ))}
                    </TabsList>
                    {intensiveFeatures.map(feature => (
                    <TabsContent key={feature.id} value={feature.id} className="mt-6">
                        <Card>
                            <CardContent className="p-8">
                                <p className="text-lg text-foreground">{feature.content}</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
