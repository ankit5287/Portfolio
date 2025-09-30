import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Education from '@/components/sections/education';
import TimeWeatherWidget from '@/components/time-weather-widget';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <div className="fixed left-4 top-28 z-50 hidden md:block">
        <TimeWeatherWidget />
      </div>
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
