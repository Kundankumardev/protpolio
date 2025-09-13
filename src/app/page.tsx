import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Stats from '@/components/sections/stats';
import Skills from '@/components/sections/skills';
import Services from '@/components/sections/services';
import WhyChooseMe from '@/components/sections/why-choose-me';
import Projects from '@/components/sections/projects';
import Process from '@/components/sections/process';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Skills />
        <Services />
        <WhyChooseMe />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
