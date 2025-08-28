'use server';

/**
 * @fileOverview Dynamically adjusts the call to action wording and visual prominence of page elements based on user's past interactions.
 *
 * - optimizeCTA - A function that handles the CTA optimization process.
 * - OptimizeCTAInput - The input type for the optimizeCTA function.
 * - OptimizeCTAOutput - The return type for the optimizeCTA function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeCTAInputSchema = z.object({
  userHistory: z
    .string()
    .describe(
      'A summary of the user interaction history on the website, including pages visited, previous CTAs clicked, and any other relevant data.'
    ),
  currentCTA: z.string().describe('The current call to action being displayed.'),
  pageContent: z.string().describe('The content of the current page.'),
});
export type OptimizeCTAInput = z.infer<typeof OptimizeCTAInputSchema>;

const OptimizeCTAOutputSchema = z.object({
  optimizedCTA: z
    .string()
    .describe('The optimized call to action wording and visual prominence.'),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind the optimized CTA, based on the user history and page content.'
    ),
});
export type OptimizeCTAOutput = z.infer<typeof OptimizeCTAOutputSchema>;

export async function optimizeCTA(input: OptimizeCTAInput): Promise<OptimizeCTAOutput> {
  return optimizeCTAFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeCTAPrompt',
  input: {schema: OptimizeCTAInputSchema},
  output: {schema: OptimizeCTAOutputSchema},
  prompt: `You are an AI-powered marketing expert specializing in optimizing call-to-action (CTA) buttons for websites.

  Based on the user's past interactions ({{userHistory}}) and the current page content ({{pageContent}}), analyze the effectiveness of the current CTA ({{currentCTA}}).
  Suggest an optimized CTA with improved wording and visual prominence to increase engagement and conversions.

  Explain your reasoning behind the changes.
  Make sure optimized CTA is no more than 5 words.

  Ensure the optimized CTA aligns with the website's tone and style.`,
});

const optimizeCTAFlow = ai.defineFlow(
  {
    name: 'optimizeCTAFlow',
    inputSchema: OptimizeCTAInputSchema,
    outputSchema: OptimizeCTAOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

