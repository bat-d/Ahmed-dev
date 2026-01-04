import React, { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Project } from '../types';
import SplitText from './SplitText';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A fully responsive platform built to streamline online sales and inventory management. Features include real-time analytics, order processing, and dynamic product management.",
      techStack: ["React", "Node.js", "Tailwind CSS", "Recharts"],
      demoLink: "#",
      repoLink: "https://github.com/ahmed-dev",
      image: "https://picsum.photos/800/600?random=1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative tool for teams to organize workflows and track progress in real-time. Includes drag-and-drop boards, team assignments, and deadline notifications.",
      techStack: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      demoLink: "#",
      repoLink: "https://github.com/ahmed-dev",
      image: "https://picsum.photos/800/600?random=2"
    },
    {
      id: 3,
      title: "SaaS Landing Page",
      description: "High-converting landing page optimized for performance and SEO. Features smooth animations, modern layout, and integrated newsletter signup.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      repoLink: "https://github.com/ahmed-dev",
      image: "https://picsum.photos/800/600?random=3"
    }
  ];

  // Extract unique technologies for filters
  const allTechs = Array.from(new Set(projects.flatMap(p => p.techStack))).sort();
  const filters = ['All', ...allTechs];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.techStack.includes(filter));

  return (
    <section id="projects" className="py-20 bg-slate-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
            <span className="text-primary font-mono text-2xl">03.</span> Selected Work
          </h2>
          <p className="mt-4 text-slate-400">
             Check out some of my recent projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`group px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 border ${
                filter === category
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white hover:border-slate-600'
              }`}
            >
              <SplitText text={category} />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-800/80 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-primary">
                     <Folder className="w-5 h-5" />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub Repo">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs font-mono px-2 py-1 rounded transition-colors duration-300 ${
                         filter === tech ? 'bg-primary text-white' : 'text-primary bg-primary/10'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
            <div className="text-center py-10 text-slate-500">
                <p>No projects found with this tag.</p>
            </div>
        )}

        <div className="mt-12 text-center">
            <a 
              href="https://github.com/ahmed-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-md transition-colors font-mono text-sm"
            >
               <SplitText text="View Full Project Archive" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;