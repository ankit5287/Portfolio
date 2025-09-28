import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  { name: 'React & Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Firebase', level: 88 },
  { name: 'Tailwind CSS', level: 95 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Skills
        </h2>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Technical Proficiencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
