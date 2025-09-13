import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, subtitle, className }) => {
  return (
    <div className={cn('text-center space-y-3 max-w-3xl mx-auto', className)}>
      <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl text-primary">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
