import Link from 'next/link';
import { websiteData } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react';
import { Icons } from '@/components/icons';

export default function Footer() {
  const { name, quick_links, contact } = websiteData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold font-headline">{name}</h3>
            <p className="text-sm text-muted-foreground">© {currentYear} {name}. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {quick_links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href={contact.fiverr} target="_blank" rel="noreferrer" aria-label="Fiverr">
              <Icons.Fiverr className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
