import React from 'react';
import { Code, Database, Brain, Users, Terminal, Wrench } from 'lucide-react';
import Section from './Section';
import { SkillCategory } from '../types';

const skillData: SkillCategory[] = [
  {
    title: 'Technical Skills',
    icon: Code,
    skills: [
        'Languages: JavaScript, Go (Golang), Python, Swift',
        'Frontend: HTML5, CSS3, React',
        'Backend: RESTful APIs, Microservices, PostgreSQL',
        'AI/ML: CatBoost, ConvNeXt, Data Imbalance Handling'
    ]
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
        'Problem Solving',
        'Analytical Thinking',
        'Team Work',
        'Cross-functional Collaboration',
        'Technical Documentation'
    ]
  },
  {
    title: 'Tools',
    icon: Terminal,
    skills: [
        'VS Code',
        'Github',
        'Postman',
        'Docker (basic)'
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Skills & Expertise</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillData.map((category, index) => (
          <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    {category.icon && <category.icon className="text-blue-400" size={24} />}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            
            <ul className="space-y-3">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;