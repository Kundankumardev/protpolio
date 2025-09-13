'use client';

import { useState } from 'react';
import Image from 'next/image';
import { websiteData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { generateDynamicBio } from '@/ai/flows/dynamic-bio-generation';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');
  const [overview, setOverview] = useState(websiteData.overview);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateBio = async () => {
    setIsLoading(true);
    try {
      const result = await generateDynamicBio({
        skills: websiteData.skills,
        services: websiteData.services,
        targetAudience: "clients looking for expertise in financial markets, data processing, and business automation",
        bioType: 'overview',
      });
      if (result.bio) {
        setOverview(result.bio);
      }
    } catch (error) {
      console.error('Error generating bio:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate a new bio. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight tracking-tighter mb-4 animate-slide-in-up" style={{ animationDelay: '100ms' }}>
            {websiteData.name}
          </h1>
          <p className="text-lg md:text-xl font-medium text-primary-foreground/80 mb-6 animate-slide-in-up" style={{ animationDelay: '200ms' }}>
            {websiteData.tagline}
          </p>
          <div className="bg-background/10 backdrop-blur-sm p-4 rounded-lg animate-slide-in-up" style={{ animationDelay: '300ms' }}>
            <p className="text-base md:text-lg text-primary-foreground/90 mb-4">{overview}</p>
            <Button onClick={handleGenerateBio} disabled={isLoading} size="sm" variant="secondary">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Regenerate Overview with AI
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-4 animate-slide-in-up" style={{ animationDelay: '400ms' }}>
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
