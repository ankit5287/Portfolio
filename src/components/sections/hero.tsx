'use client';

import TypewriterEffect from '../typewriter-effect';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine, Briefcase } from 'lucide-react';
import ScrollAnimation from '../scroll-animation';

export default function Hero() {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <ScrollAnimation>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <TypewriterEffect text="Ankit Nandoliya" />
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              I'm a Computer Engineering student driven by a passion for learning new technologies and applying them to real-world projects. Eager to continuously grow and contribute, I thrive on bringing innovative solutions to life.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={400}>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#projects">
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  <Briefcase className="mr-2" /> Projects
                </Button>
              </a>
              <a href="/Ankit-Nandoliya-CV.pdf" download>
                <Button variant="outline">
                  <ArrowDownToLine className="mr-2" /> Download CV
                </Button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
