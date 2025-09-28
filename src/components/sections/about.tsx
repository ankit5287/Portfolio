import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cpu, Milestone, Component } from 'lucide-react';

const skills = [
  { name: 'Java', icon: <Code /> },
  { name: 'Data Structures & Algorithms', icon: <Milestone /> },
  { name: 'DBMS', icon: <Database /> },
  { name: 'HTML', icon: <Code /> },
  { name: 'CSS', icon: <Component /> },
  { name: 'C Programming', icon: <Cpu /> },
];

export default function About() {
  return (
    <section id="about" className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-primary">Ankit Nandoliya</h2>
              <p className="mt-1 text-lg text-accent-foreground">
                Computer Engineering Student
              </p>
              <p className="mt-4 text-muted-foreground">
                A Computer Engineering student with foundational knowledge in Java, Data
                Structures & Algorithms (DSA), Database Management Systems (DBMS), HTML,
                CSS, and C. I am passionate about building efficient and user-friendly
                applications and eager to apply my developing skills to real-world
                projects.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-primary">My Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="gap-2 px-3 py-1 text-sm">
                    {skill.icon}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}