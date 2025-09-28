import { Card, CardContent } from '@/components/ui/card';
import { School } from 'lucide-react';
import ScrollAnimation from '../scroll-animation';
import TypewriterEffect from '../typewriter-effect';

const education = {
  degree: 'Bachelor of Engineering in Computer Engineering',
  institution: 'SAL Institute of Technology & Engineering Research',
  period: '2023 - 2027',
};

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          <TypewriterEffect text="Education" />
        </h2>
        <ScrollAnimation>
          <Card className="bg-transparent shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <School className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {education.institution}
                  </p>
                  <p className="text-sm text-accent-foreground">
                    {education.period}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
