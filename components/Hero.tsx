import React from 'react';
import { Download, Mail, Code2, Server, BrainCircuit } from 'lucide-react';
import Section from './Section';

const Hero: React.FC = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Open to Opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Hello, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            Alexander Theodore
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-slate-400 font-medium">
          Software Engineer — Frontend (React) & Backend (Go)
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-8 text-slate-300">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-slate-800">
                <Code2 size={20} className="text-blue-400" />
                <span>React Frontend Developer</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-slate-800">
                <Server size={20} className="text-purple-400" />
                <span>Golang Backend & Microservices</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-slate-800">
                <BrainCircuit size={20} className="text-cyan-400" />
                <span>AI/ML Enthusiast (CatBoost + ConvNeXt)</span>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a 
            href="/CV_AT.pdf" 
            download="CV_Alexander_Theodore.pdf"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            <Download size={20} />
            Download CV
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-semibold border border-slate-700 transition-all transform hover:scale-105"
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;