'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

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

  return (
    <Card className="flex h-full flex-col overflow-hidden bg-transparent transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105">
      <CardHeader>
        <CardTitle className="pt-4">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">
          {summary || `${project.longDescription.substring(0, 100)}...`}
        </p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 pt-4">
        <div className="flex w-full space-x-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                <Github />
                Source Code
              </Button>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
