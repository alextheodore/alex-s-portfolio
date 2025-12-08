import React from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';
import Section from './Section';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Junior Developer',
    company: 'PT Cerberus Sinergi Datasistem',
    period: 'Feb 2024 – Feb 2025',
    type: 'Work',
    achievements: [
      'Delivered 2 production-grade React web apps in 6 months',
      'Reduced app downtime by 60%',
      'Designed reusable UI component library used in 3+ projects',
      'Improved development efficiency by 25%'
    ]
  },
  {
    id: '2',
    role: 'Technical Associate',
    company: 'Student Catalyst',
    period: 'Sep 2023 – Sep 2024',
    type: 'Organization',
    achievements: [
      'Built 3+ websites used by 100+ students',
      'Improved load speed by 40%',
      'Wrote technical documentation',
      'Collaborated with cross-functional teams'
    ]
  },
  {
    id: '3',
    role: 'Backend Developer Bootcamp',
    company: 'BINUS University',
    period: 'Mei 2025 – Juli 2025',
    type: 'Bootcamp',
    achievements: [
      'Developed backend systems using Go',
      'Microservices, PostgreSQL, RabbitMQ, Redis',
      'Async processing systems'
    ]
  },
  {
    id: '4',
    role: 'iOS Foundation Cohort 18',
    company: 'Apple Developer Academy',
    period: 'Mar 2023 – Apr 2023',
    type: 'Bootcamp',
    achievements: [
      'Developed and maintained iOS applications using Swift',
      'Followed best practices in code quality, performance, and scalability'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
        {experiences.map((item, index) => (
          <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            {/* Timeline Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
               <Briefcase size={18} className="text-slate-400 group-hover:text-white" />
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-blue-500/30 transition-all duration-300">
               <div className="flex items-center justify-between mb-2">
                 <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide 
                    ${item.type === 'Work' ? 'bg-blue-900/30 text-blue-400' : 
                      item.type === 'Bootcamp' ? 'bg-purple-900/30 text-purple-400' : 
                      'bg-emerald-900/30 text-emerald-400'}`}>
                    {item.type}
                 </span>
                 <div className="flex items-center text-slate-400 text-xs">
                    <Calendar size={14} className="mr-1" />
                    {item.period}
                 </div>
               </div>
               
               <h3 className="text-xl font-bold text-white">{item.role}</h3>
               <h4 className="text-lg text-slate-300 mb-4">{item.company}</h4>
               
               <ul className="space-y-2">
                 {item.achievements.map((point, idx) => (
                   <li key={idx} className="flex items-start text-sm text-slate-400">
                     <Award size={16} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                     {point}
                   </li>
                 ))}
               </ul>
            </div>

          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;