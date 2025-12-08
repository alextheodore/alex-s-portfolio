import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Section from './Section';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    id: '1',
    title: 'React Production Web App',
    category: 'Frontend',
    description: 'A modular web application with 40% load speed improvement through code splitting and asset optimization.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Performance'],
    githubUrl: 'https://github.com/alexandertheodore/react-production-app',
    demoUrl: 'https://react-production-app.example.com'
  },
  {
    id: '2',
    title: 'Golang Microservices System',
    category: 'Backend',
    description: 'Scalable backend system utilizing REST APIs, RabbitMQ for async messaging, Redis caching, and PostgreSQL.',
    tech: ['Go', 'Microservices', 'RabbitMQ', 'Redis', 'PostgreSQL'],
    githubUrl: 'https://github.com/alexandertheodore/go-microservices'
  },
  {
    id: '3',
    title: 'AI/ML Thesis Model',
    category: 'Machine Learning',
    description: 'Classification model for respiratory disease detection using CatBoost and ConvNeXt on imbalance data.',
    tech: ['Python', 'CatBoost', 'ConvNeXt', 'ML'],
    githubUrl: 'https://github.com/alexandertheodore/respiratory-disease-ml'
  },
  {
    id: '4',
    title: 'Tech Docs System',
    category: 'Web App',
    description: 'Centralized technical documentation platform built for Student Catalyst to streamline knowledge sharing.',
    tech: ['React', 'Markdown', 'Docs'],
    demoUrl: 'https://docs-system.example.com'
  }
];

const Projects: React.FC = () => {
  return (
    <Section id="projects">
       <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
            {/* Placeholder Image Overlay */}
            <div className="h-48 bg-slate-800 overflow-hidden relative">
               <img 
                 src={`https://picsum.photos/800/400?random=${project.id}`} 
                 alt={project.title}
                 className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>

            <div className="p-6 relative">
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                 </div>
                 <div className="flex gap-2">
                    {project.githubUrl && (
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-colors"
                            aria-label="View Source Code"
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.demoUrl && (
                        <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-colors"
                            aria-label="View Live Demo"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                 </div>
              </div>

              <p className="text-slate-400 mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;