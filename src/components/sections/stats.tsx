import { websiteData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Briefcase, Bot, Tv, CheckCircle } from 'lucide-react';

const statIcons = {
  freelance_projects: <Briefcase className="h-8 w-8 text-primary" />,
  algo_strategies_built: <Award className="h-8 w-8 text-primary" />,
  trading_bots: <Bot className="h-8 w-8 text-primary" />,
  youtube_channels: <Tv className="h-8 w-8 text-primary" />,
  years_experience: <CheckCircle className="h-8 w-8 text-primary" />,
};

const statLabels = {
  freelance_projects: 'Freelance Projects',
  algo_strategies_built: 'Algo Strategies Built',
  trading_bots: 'Trading Bots Developed',
  youtube_channels: 'YouTube Channels',
  years_experience: 'Years of Experience',
};

export default function Stats() {
  const { achievements } = websiteData;
  const stats = Object.entries(achievements);

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map(([key, value], index) => (
            <Card key={key} className="text-center shadow-md animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="items-center pb-2">
                {statIcons[key as keyof typeof statIcons]}
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold font-headline text-primary">{value}{key.includes('projects') ? '+' : ''}</p>
                <p className="text-sm text-muted-foreground">{statLabels[key as keyof typeof statLabels]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
