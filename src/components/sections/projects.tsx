import { PlaceHolderImages } from '@/lib/placeholder-images';
import ProjectCard from '@/components/project-card';

const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    longDescription: 'A full-featured e-commerce platform built with Next.js, Stripe for payments, and a custom CMS for product management. It includes user authentication, order tracking, and a responsive design for a seamless shopping experience on any device. The architecture is designed for scalability and performance, using server-side rendering for fast initial page loads.',
    image: PlaceHolderImages.find((img) => img.id === 'project-1'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Task Management App',
    longDescription: 'A collaborative task management application designed for teams. It features real-time updates using WebSockets, drag-and-drop functionality for task boards, and a comprehensive notification system. Built with React and a Node.js backend, it helps teams stay organized and productive.',
    image: PlaceHolderImages.find((img) => img.id === 'project-2'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    longDescription: 'An analytics dashboard for visualizing complex datasets. It uses D3.js and React to create interactive charts and graphs, allowing users to explore data and gain insights. The backend processes large volumes of data and provides a fast API for the frontend to consume.',
    image: PlaceHolderImages.find((img) => img.id === 'project-3'),
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
