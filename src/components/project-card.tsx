'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Project = {
  id: string;
  title: string;
  longDescription: string;
  image?: ImagePlaceholder;
  liveUrl: string;
  githubUrl: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [summary] = useState('');
  const placeholderImage = PlaceHolderImages.find((img) => img.id.startsWith('project-'));

  return (
    <Card className="flex h-full flex-col overflow-hidden bg-transparent transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105">
      <CardHeader>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-md">
          <Image
            src={project.image?.imageUrl || placeholderImage?.imageUrl || 'https://placehold.co/600x400'}
            alt={project.title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            data-ai-hint={project.image?.imageHint || 'technology abstract'}
          />
        </div>
        <CardTitle className="pt-4">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">
          {summary || `${project.longDescription.substring(0, 100)}...`}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex w-full flex-col space-y-2">
          {project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="default" className="w-full">
                <ExternalLink />
                Live Site
              </Button>
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="outline" className="w-full">
              <Github />
              Source Code
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
