import TypewriterEffect from '@/components/typewriter-effect';

export default function Hero() {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h1 className="mb-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <TypewriterEffect text="Ankit Nandoliya" />
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Hello! I'apos;m a passionate developer with a love for creating clean, efficient, and user-friendly web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
