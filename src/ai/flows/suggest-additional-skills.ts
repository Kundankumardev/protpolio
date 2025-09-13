'use server';

/**
 * @fileOverview AI tool that analyzes existing skills and suggests additional relevant skills.
 *
 * - suggestAdditionalSkills - A function that suggests additional skills based on existing skills.
 * - SuggestAdditionalSkillsInput - The input type for the suggestAdditionalSkills function.
 * - SuggestAdditionalSkillsOutput - The return type for the suggestAdditionalSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAdditionalSkillsInputSchema = z.object({
  existingSkills: z
    .array(z.string())
    .describe('A list of existing skills to analyze.'),
});
export type SuggestAdditionalSkillsInput = z.infer<typeof SuggestAdditionalSkillsInputSchema>;

const SuggestAdditionalSkillsOutputSchema = z.object({
  suggestedSkills: z
    .array(z.string())
    .describe('A list of suggested skills to attract a broader client base.'),
  rationale: z
    .string()
    .describe('Explanation of why the skills were suggested.'),
});
export type SuggestAdditionalSkillsOutput = z.infer<typeof SuggestAdditionalSkillsOutputSchema>;

export async function suggestAdditionalSkills(
  input: SuggestAdditionalSkillsInput
): Promise<SuggestAdditionalSkillsOutput> {
  return suggestAdditionalSkillsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAdditionalSkillsPrompt',
  input: {schema: SuggestAdditionalSkillsInputSchema},
  output: {schema: SuggestAdditionalSkillsOutputSchema},
  prompt: `You are an expert career counselor specializing in technology and freelancing.

  Based on the following existing skills, suggest additional skills that the user could highlight on their website to attract a broader range of clients and stay current with market trends. Provide a rationale for each suggested skill.

Existing Skills:
{{#each existingSkills}}- {{this}}\n{{/each}}`,
});

const suggestAdditionalSkillsFlow = ai.defineFlow(
  {
    name: 'suggestAdditionalSkillsFlow',
    inputSchema: SuggestAdditionalSkillsInputSchema,
    outputSchema: SuggestAdditionalSkillsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
