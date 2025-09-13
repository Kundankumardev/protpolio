'use server';

/**
 * @fileOverview AI-powered bio generator for website overviews and taglines.
 *
 * - generateDynamicBio - Generates a dynamic bio based on provided input.
 * - DynamicBioInput - The input type for the generateDynamicBio function.
 * - DynamicBioOutput - The return type for the generateDynamicBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicBioInputSchema = z.object({
  skills: z.array(z.string()).describe('List of skills.'),
  services: z.record(z.object({
    description: z.string().describe('Description of the service.'),
    features: z.array(z.string()).describe('List of service features.'),
  })).describe('Record of services offered.'),
  targetAudience: z.string().describe('The target audience for the website.'),
  bioType: z.enum(['overview', 'tagline']).describe('The type of bio to generate (overview or tagline).'),
});
export type DynamicBioInput = z.infer<typeof DynamicBioInputSchema>;

const DynamicBioOutputSchema = z.object({
  bio: z.string().describe('The generated bio (overview or tagline).'),
});
export type DynamicBioOutput = z.infer<typeof DynamicBioOutputSchema>;

export async function generateDynamicBio(input: DynamicBioInput): Promise<DynamicBioOutput> {
  return dynamicBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dynamicBioPrompt',
  input: {schema: DynamicBioInputSchema},
  output: {schema: DynamicBioOutputSchema},
  prompt: `You are a marketing expert specializing in writing compelling website bios.

  Based on the provided skills, services, and target audience, generate a {{bioType}} for the website.

  Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Services: {{#each services}}{{{@key}}}: {{this.description}} Features: {{#each this.features}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}{{/each}}
  Target Audience: {{{targetAudience}}}

  The {{bioType}} should be concise and engaging, highlighting the key benefits for the target audience.
  `,
});

const dynamicBioFlow = ai.defineFlow(
  {
    name: 'dynamicBioFlow',
    inputSchema: DynamicBioInputSchema,
    outputSchema: DynamicBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
