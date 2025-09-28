import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile');

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="flex justify-center md:justify-start">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={200}
                height={200}
                className="rounded-full object-cover shadow-lg"
                data-ai-hint={profileImage.imageHint}
              />
            )}
          </div>
          <div className="md:col-span-2">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
              Hello! I&apos;m a passionate developer with a love for creating clean, efficient, and user-friendly web applications. With a background in modern frontend technologies and a keen eye for design, I strive to build digital experiences that are both beautiful and functional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
