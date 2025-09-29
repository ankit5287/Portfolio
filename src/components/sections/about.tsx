import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cpu, Milestone, Component, Server } from 'lucide-react';
import ScrollAnimation from '../scroll-animation';
import TypewriterEffect from '../typewriter-effect';

const skills = [
  { name: 'Java', icon: <Code /> },
  { name: 'Python', icon: <Code /> },
  { name: 'Django', icon: <Server /> },
  { name: 'C Programming', icon: <Cpu /> },
  { name: 'C++', icon: <Code /> },
  { name: 'Data Structures & Algorithms', icon: <Milestone /> },
  { name: 'DBMS', icon: <Database /> },
  { name: 'HTML', icon: <Code /> },
  { name: 'CSS', icon: <Component /> },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimation>
          <Card className="bg-transparent shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
            <CardContent className="p-8">
              <div className="text-left">
                <p className="mt-1 text-lg text-primary">
                  Computer Engineering Student
                </p>
                <p className="mt-4 text-muted-foreground">
                  As a CE student, I possess fundamental knowledge in a range of programming and database technologies. My skills include Python and Django, HTML, CSS, Java, C/C++, and DBMS. I am driven to translate this comprehensive technical toolkit into practical, innovative projects.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-primary">
                  <TypewriterEffect text="My Skills" />
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                     <ScrollAnimation key={skill.name} delay={index * 100}>
                      <Badge variant="secondary" className="gap-2 px-3 py-1 text-sm transition-transform duration-500 ease-in-out hover:scale-110">
                        {skill.icon}
                        {skill.name}
                      </Badge>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
