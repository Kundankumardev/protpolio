'use client';

import { useState } from 'react';
import { websiteData } from '@/lib/data';
import SectionHeading from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { suggestAdditionalSkills, SuggestAdditionalSkillsOutput } from '@/ai/flows/suggest-additional-skills';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2, Lightbulb, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function Skills() {
  const { skills } = websiteData;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedSkills, setSuggestedSkills] = useState<SuggestAdditionalSkillsOutput | null>(null);
  const { toast } = useToast();

  const handleAnalyzeSkills = async () => {
    setIsDialogOpen(true);
    if (suggestedSkills) return;

    setIsLoading(true);
    try {
      const result = await suggestAdditionalSkills({ existingSkills: skills });
      setSuggestedSkills(result);
    } catch (error) {
      console.error('Error suggesting skills:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to suggest skills. Please try again.',
      });
      setIsDialogOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeading
          title="My Technical Skills"
          subtitle="A snapshot of my core competencies and tools I work with."
          className="mb-8"
        />
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.map((skill, index) => (
            <Badge
              key={skill}
              variant="outline"
              className="text-base px-4 py-2 border-primary/50 bg-primary/5 animate-slide-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {skill}
            </Badge>
          ))}
        </div>
        <div className="text-center">
          <Button onClick={handleAnalyzeSkills} variant="secondary">
            <Wand2 className="mr-2 h-4 w-4" />
            Analyze & Suggest Skills with AI
          </Button>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
                <Lightbulb className="w-6 h-6 text-accent" />
                AI-Powered Skill Suggestions
              </DialogTitle>
              <DialogDescription>
                Based on your current skills, here are some suggestions to broaden your client base.
              </DialogDescription>
            </DialogHeader>
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : suggestedSkills && (
              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Suggested Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {suggestedSkills.suggestedSkills.map((skill, i) => (
                      <Badge key={i} className="bg-accent text-accent-foreground hover:bg-accent/90">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-3">Rationale</h3>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4 text-sm text-muted-foreground">
                      {suggestedSkills.rationale}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
