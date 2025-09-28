'use client';

import TypewriterEffect from '../typewriter-effect';

export default function Hero() {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h1 className="mb-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <TypewriterEffect text="Ankit Nandoliya" />
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            I'm a Computer Engineering student driven by a passion for learning new technologies and applying them to real-world projects. Eager to continuously grow and contribute, I thrive on bringing innovative solutions to life.
          </p>
        </div>
      </div>
    </section>
  );
}
