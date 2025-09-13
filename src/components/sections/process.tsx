import { websiteData } from '@/lib/data';
import SectionHeading from '@/components/shared/section-heading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Process() {
  const { process } = websiteData;

  return (
    <section id="process" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeading
          title="My 4-Step Process"
          subtitle="A structured approach to ensure quality and deliver results."
          className="mb-12"
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          
          <div className="space-y-12 md:space-y-0">
            {process.map((item, index) => (
              <div key={item.step} className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className={`md:flex items-center justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <Card className="w-full">
                    <CardHeader>
                      <span className="text-sm font-semibold text-primary">Step {item.step}</span>
                      <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.detail}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary items-center justify-center text-primary-foreground font-bold"
                    style={{ [index % 2 === 0 ? 'left' : 'right']: 'calc(50% - 1rem - 1rem - 0.5px)' }} // 50% - half circle - gap - half line
                  >
                    {item.step}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
