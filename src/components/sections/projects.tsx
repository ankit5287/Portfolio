import ProjectCard from '@/components/project-card';
import ScrollAnimation from '../scroll-animation';
import TypewriterEffect from '../typewriter-effect';

const projects = [
  {
    id: '4',
    title: 'Student Management System',
    longDescription: 'A comprehensive student management system built with Java, featuring full CRUD (Create, Read, Update, Delete) operations. This desktop application provides an intuitive interface for managing student records, including personal details, course enrollment, and grades. It showcases robust data handling and a clean, object-oriented architecture.',
    liveUrl: '#',
    githubUrl: 'https://github.com/ankit5287/Student-Management-System',
  },
  {
    id: '5',
    title: 'Studiova',
    longDescription: 'A web application built with Django, featuring a robust backend with the Django admin panel and SQLite3 for database management. It includes secure user authentication with login and sign-up functionality, providing a seamless user experience.',
    liveUrl: '#',
    githubUrl: 'https://github.com/ankit5287',
  },
  {
    id: '3',
    title: 'Bank Link Integrated Service',
    longDescription: 'Developed a secure web application that uses AI for real-time transaction analysis and classification after linking to user bank data. This FinTech service provides predictive financial insights through an intuitive, modern interface.',
    liveUrl: '#',
    githubUrl: 'https://github.com/simitmodi/Bank-Link-Integrated-Services',
  },
  {
    id: '6',
    title: 'Version 2-Stride',
    longDescription: 'A customer-centric appointment booking system that streamlines the scheduling process. This application allows customers to easily book, manage, and track their appointments, enhancing user experience and operational efficiency.',
    liveUrl: '#',
    githubUrl: 'https://github.com/ankit5287',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          <TypewriterEffect text="My Projects" />
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={index * 200}>
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
