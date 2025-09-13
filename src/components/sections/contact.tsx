import { websiteData } from '@/lib/data';
import SectionHeading from '@/components/shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Icons } from '@/components/icons';
import Link from 'next/link';

export default function Contact() {
  const { contact } = websiteData;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <SectionHeading
          title="Get in Touch"
          subtitle="Let's build something great together. Reach out for collaborations or inquiries."
          className="mb-12"
        />
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="bg-muted/50 p-6">
              <CardTitle className="font-headline text-2xl">{contact.name}</CardTitle>
              <p className="text-muted-foreground">{contact.role}</p>
            </CardHeader>
            <CardContent className="p-6 grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="font-semibold text-lg">Contact Information</h3>
                <div className="space-y-4">
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 group">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="group-hover:underline">{contact.email}</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>{contact.phone_numbers[0]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p>{contact.location.city}</p>
                      <p className="text-sm text-muted-foreground">{contact.location.note}</p>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg pt-4">Online Presence</h3>
                <div className="flex items-center gap-4">
                  <Link href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                  <Link href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                  <Link href={contact.fiverr} target="_blank" rel="noreferrer" aria-label="Fiverr">
                    <Icons.Fiverr className="h-9 w-9 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                </div>
              </div>
              <div className="space-y-6 bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg">Typical Response Times</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p>Email</p>
                      <p className="text-sm font-semibold">{contact.response_time.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p>Fiverr / Upwork</p>
                      <p className="text-sm font-semibold">{contact.response_time.freelance_platforms}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p>Consultation Call</p>
                      <p className="text-sm font-semibold">{contact.response_time.consultation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
