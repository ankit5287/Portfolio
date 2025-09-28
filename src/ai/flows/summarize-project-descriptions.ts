'use server';

/**
 * @fileOverview A flow that summarizes project descriptions using AI.
 *
 * - summarizeProjectDescriptions - A function that summarizes project descriptions.
 * - SummarizeProjectDescriptionsInput - The input type for the summarizeProjectDescriptions function.
 * - SummarizeProjectDescriptionsOutput - The return type for the summarizeProjectDescriptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectDescriptionsInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The full description of the project to be summarized.'),
});
export type SummarizeProjectDescriptionsInput = z.infer<typeof SummarizeProjectDescriptionsInputSchema>;

const SummarizeProjectDescriptionsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the project description.'),
});
export type SummarizeProjectDescriptionsOutput = z.infer<typeof SummarizeProjectDescriptionsOutputSchema>;

export async function summarizeProjectDescriptions(
  input: SummarizeProjectDescriptionsInput
): Promise<SummarizeProjectDescriptionsOutput> {
  return summarizeProjectDescriptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectDescriptionsPrompt',
  input: {schema: SummarizeProjectDescriptionsInputSchema},
  output: {schema: SummarizeProjectDescriptionsOutputSchema},
  prompt: `Summarize the following project description in a concise and engaging manner, suitable for presentation on a personal portfolio website. Keep it short and sweet.\n\nProject Description: {{{projectDescription}}}`,
});

const summarizeProjectDescriptionsFlow = ai.defineFlow(
  {
    name: 'summarizeProjectDescriptionsFlow',
    inputSchema: SummarizeProjectDescriptionsInputSchema,
    outputSchema: SummarizeProjectDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
