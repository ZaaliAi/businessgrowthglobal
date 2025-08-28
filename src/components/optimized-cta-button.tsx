"use client";
import { useState, useEffect, type ComponentProps } from 'react';
import { Button } from '@/components/ui/button';
import { getOptimizedCTA } from '@/app/actions';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface OptimizedCTAButtonProps extends ComponentProps<typeof Button> {
  initialText: string;
  pageContent: string;
  ctaIdentifier: string;
}

export function OptimizedCTAButton({ initialText, pageContent, ctaIdentifier, className, ...props }: OptimizedCTAButtonProps) {
  const [ctaText, setCtaText] = useState(initialText);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    let isMounted = true;

    // In a real app, user history would come from analytics or a user profile.
    // For this demo, we simulate it using localStorage.
    const userHistory = localStorage.getItem('bgg_user_history') || 'First time visitor.';

    async function fetchOptimizedCTA() {
      try {
        const result = await getOptimizedCTA({
          userHistory,
          currentCTA: initialText,
          pageContent,
        });
        if (isMounted && result && result.optimizedCTA) {
          setCtaText(result.optimizedCTA);
          if (userHistory !== 'First time visitor.') {
             toast({
                title: "Personalized For You",
                description: "We've tailored this based on your interests.",
            });
          }
        }
      } catch (error) {
        console.error("Failed to optimize CTA:", error);
        // Fallback to initial text
        if (isMounted) {
          setCtaText(initialText);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
          // Update "history" for subsequent visits/reloads
          localStorage.setItem('bgg_user_history', `Returning visitor. Previously saw '${initialText}' on ${ctaIdentifier}.`);
        }
      }
    }

    // Delay fetching slightly to avoid flash of loading on fast connections
    const timer = setTimeout(() => {
      fetchOptimizedCTA();
    }, 500);


    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [initialText, pageContent, ctaIdentifier, toast]);

  return (
    <Button {...props} className={cn("bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300", className)}>
      {isLoading ? (
        <span className="animate-pulse">{initialText}</span>
      ) : (
        ctaText
      )}
    </Button>
  );
}
