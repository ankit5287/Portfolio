import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'UI/UX Design',
  'Firebase',
  'Tailwind CSS',
  'JavaScript',
  'HTML5',
  'CSS3',
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
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-lg">
                  {skill}
                </Badge>
              ))}
            </div>
            <p className="mt-6 text-center text-muted-foreground">
              I am always learning and expanding my skillset to stay current with the latest technologies.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
