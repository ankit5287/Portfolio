import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Hello! I&apos;m a passionate developer with a love for creating clean, efficient, and user-friendly web applications. With a background in modern frontend technologies and a keen eye for design, I strive to build digital experiences that are both beautiful and functional.
          </p>
        </div>
      </div>
    </section>
  );
}
