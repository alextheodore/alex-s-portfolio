import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section id="education" className="bg-gradient-to-r from-slate-900 to-slate-800/50 rounded-3xl border border-slate-800">
      <div className="flex flex-col md:flex-row items-center gap-8 p-6">
        <div className="p-6 bg-blue-600 rounded-full shadow-lg shadow-blue-900/50">
           <GraduationCap size={48} className="text-white" />
        </div>
        
        <div className="flex-1 text-center md:text-left">
           <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
           <h3 className="text-2xl font-semibold text-blue-400">BINUS University</h3>
           <p className="text-slate-300 text-lg">Bachelor of Computer Science (2021–2025)</p>
           <p className="text-slate-400 font-mono mt-1">GPA 3.5</p>
        </div>

        <div className="md:w-1/3 bg-slate-950/50 p-6 rounded-xl border border-slate-700">
           <div className="flex items-center gap-2 mb-3 text-cyan-400">
             <BookOpen size={20} />
             <span className="font-bold">Thesis</span>
           </div>
           <p className="text-slate-300 text-sm italic">
             “Improved respiratory disease detection using machine learning on limited & imbalanced lung sound data.”
           </p>
        </div>
      </div>
    </Section>
  );
};

export default Education;