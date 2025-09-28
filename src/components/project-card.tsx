'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type Project = {
  title: string;
  longDescription: string;
  image?: ImagePlaceholder;
  liveUrl: string;
  githubUrl: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [summary] = useState('');

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-xl">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">
          {summary || `${project.longDescription.substring(0, 100)}...`}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex w-full space-x-2">
           <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" className="w-full">
              <ExternalLink />
              Live Site
            </Button>
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
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
