import { websiteData } from '@/lib/data';
import SectionHeading from '@/components/shared/section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const { projects } = websiteData;

  return (
    <section id="projects" className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work."
          className="mb-12"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col animate-slide-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <CardTitle className="font-headline">{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Badge variant={project.status === 'Completed' ? 'default' : 'outline'} className={project.status === 'Completed' ? 'bg-green-600' : 'text-accent'}>
                  {project.status}
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
