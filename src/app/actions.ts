'use server';
import { optimizeCTA, type OptimizeCTAInput, type OptimizeCTAOutput } from '@/ai/flows/optimize-cta';

export async function getOptimizedCTA(input: OptimizeCTAInput): Promise<OptimizeCTAOutput> {
    try {
        // In a production environment, you might add more robust error handling,
        // logging, or caching here.
        const result = await optimizeCTA(input);
        return result;
    } catch (error) {
        console.error('Error in getOptimizedCTA server action:', error);
        // Fallback to the original CTA to ensure the UI doesn't break.
        return { 
            optimizedCTA: input.currentCTA, 
            reasoning: 'An error occurred during optimization. Displaying default CTA.' 
        };
    }
}
