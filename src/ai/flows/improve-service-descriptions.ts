'use server';

/**
 * @fileOverview A service description improvement AI agent.
 *
 * - improveServiceDescription - A function that improves a service description.
 * - ImproveServiceDescriptionInput - The input type for the improveServiceDescription function.
 * - ImproveServiceDescriptionOutput - The return type for the improveServiceDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveServiceDescriptionInputSchema = z.object({
  serviceName: z.string().describe('The name of the service.'),
  originalDescription: z.string().describe('The original description of the service.'),
  features: z.array(z.string()).describe('A list of features of the service.'),
});
export type ImproveServiceDescriptionInput = z.infer<typeof ImproveServiceDescriptionInputSchema>;

const ImproveServiceDescriptionOutputSchema = z.object({
  improvedDescription: z.string().describe('The improved description of the service.'),
});
export type ImproveServiceDescriptionOutput = z.infer<typeof ImproveServiceDescriptionOutputSchema>;

export async function improveServiceDescription(
  input: ImproveServiceDescriptionInput
): Promise<ImproveServiceDescriptionOutput> {
  return improveServiceDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveServiceDescriptionPrompt',
  input: {schema: ImproveServiceDescriptionInputSchema},
  output: {schema: ImproveServiceDescriptionOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in making technical services sound more appealing to potential clients.

You will be provided with the name of a service, its original description, and a list of its features.

Your task is to rewrite the description to be more compelling and professional, highlighting the benefits of the service to the client.

Service Name: {{{serviceName}}}
Original Description: {{{originalDescription}}}
Features:
{{#each features}}
- {{{this}}}
{{/each}}

Improved Description:`,
});

const improveServiceDescriptionFlow = ai.defineFlow(
  {
    name: 'improveServiceDescriptionFlow',
    inputSchema: ImproveServiceDescriptionInputSchema,
    outputSchema: ImproveServiceDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
