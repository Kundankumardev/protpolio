import { websiteData } from '@/lib/data';
import SectionHeading from '@/components/shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ShieldCheck, Cpu, Users } from 'lucide-react';

const icons = [
  <ShieldCheck className="w-8 h-8 text-accent" />,
  <Cpu className="w-8 h-8 text-accent" />,
  <CheckCircle2 className="w-8 h-8 text-accent" />,
  <Users className="w-8 h-8 text-accent" />,
];

export default function WhyChooseMe() {
  const { why_choose_me } = websiteData;

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeading
          title="Why Choose Me?"
          subtitle="Delivering value through expertise and a commitment to quality."
          className="mb-12"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {why_choose_me.map((item, index) => (
            <Card key={index} className="text-center animate-slide-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="items-center">
                {icons[index] || icons[0]}
                <CardTitle className="font-headline pt-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
