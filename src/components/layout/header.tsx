'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { websiteData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center">
        <Link href="#home" className="mr-6 flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline">{websiteData.name}</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {websiteData.quick_links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
