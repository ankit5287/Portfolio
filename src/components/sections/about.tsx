import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ankit Nandoliya
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mx-auto max-w-3xl space-y-4 text-center text-lg text-muted-foreground">
              <p>
                I&apos;m a dedicated and results-driven software developer with a knack for building elegant and effective solutions. My journey in technology started with a deep curiosity for how things work, which has since evolved into a passion for crafting high-quality software.
              </p>
              <p>
                With a background in modern frontend technologies and a keen eye for design, I strive to build digital experiences that are not only functional and performant but also beautiful and intuitive for the user. I enjoy tackling complex problems and am always eager to learn and adapt to new challenges.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
