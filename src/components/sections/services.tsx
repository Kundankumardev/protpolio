'use client';

import { useState } from 'react';
import { websiteData } from '@/lib/data';
import SectionHeading from '@/components/shared/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { improveServiceDescription } from '@/ai/flows/improve-service-descriptions';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Loader2, Wand2 } from 'lucide-react';

type ServiceState = {
  [key: string]: {
    description: string;
    isLoading: boolean;
  };
};

export default function Services() {
  const initialServiceState = Object.entries(websiteData.services).reduce((acc, [key, value]) => {
    acc[key] = { description: value.description, isLoading: false };
    return acc;
  }, {} as ServiceState);

  const [services, setServices] = useState(initialServiceState);
  const { toast } = useToast();

  const handleImproveDescription = async (serviceKey: string) => {
    const originalService = websiteData.services[serviceKey as keyof typeof websiteData.services];
    
    setServices(prev => ({ ...prev, [serviceKey]: { ...prev[serviceKey], isLoading: true } }));

    try {
      const result = await improveServiceDescription({
        serviceName: originalService.name,
        originalDescription: originalService.description,
        features: originalService.features,
      });

      if (result.improvedDescription) {
        setServices(prev => ({ 
          ...prev, 
          [serviceKey]: { description: result.improvedDescription, isLoading: false } 
        }));
      }
    } catch (error) {
      console.error('Error improving description:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to improve description. Please try again.',
      });
      setServices(prev => ({ ...prev, [serviceKey]: { ...prev[serviceKey], isLoading: false } }));
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeading
          title="Services I Offer"
          subtitle="Leveraging technology to solve complex problems and drive growth."
          className="mb-12"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(websiteData.services).map(([key, service], index) => (
            <Card key={key} className="flex flex-col animate-slide-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
                <CardDescription>
                  {services[key].description}
                </CardDescription>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="w-fit -ml-2 text-primary hover:text-primary" 
                  onClick={() => handleImproveDescription(key)}
                  disabled={services[key].isLoading}
                >
                  {services[key].isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Improve with AI
                </Button>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
