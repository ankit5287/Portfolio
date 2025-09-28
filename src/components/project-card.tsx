'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, ExternalLink, Github, Loader2 } from 'lucide-react';
import { getSummary } from '@/app/actions';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type Project = {
  title: string;
  longDescription: string;
  image?: ImagePlaceholder;
  liveUrl: string;
  githubUrl: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await getSummary(project.longDescription);
      setSummary(result);
    } catch (error) {
      console.error('Failed to get summary:', error);
      setSummary('Could not generate summary.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-xl">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">
          {summary || `${project.longDescription.substring(0, 100)}...`}
        </p>
        {isLoading && (
          <div className="mt-4 flex items-center justify-center text-muted-foreground">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Generating summary...</span>
          </div>
        )}
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
              GitHub
            </Button>
          </a>
        </div>
        <Button onClick={handleSummarize} disabled={isLoading} className="w-full bg-primary/90 hover:bg-primary">
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <BrainCircuit />
          )}
          Summarize with AI
        </Button>
      </CardFooter>
    </Card>
  );
}
