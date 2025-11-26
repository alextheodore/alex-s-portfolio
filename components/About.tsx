import React from 'react';
import { MapPin, Mail, Linkedin } from 'lucide-react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-slate-900/30 rounded-3xl my-10 border border-slate-800/50">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1 space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border-2 border-slate-700 shadow-xl relative">
               <img 
                 src="https://picsum.photos/400/400" 
                 alt="Alexander Theodore"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
               <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">Alexander Theodore</h3>
               </div>
            </div>
            
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="text-blue-400" size={20} />
                    <span>Tangerang City, Banten</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="text-blue-400" size={20} />
                    <a href="mailto:alex.theodore26@gmail.com" className="hover:text-blue-400 transition-colors">alex.theodore26@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                    <Linkedin className="text-blue-400" size={20} />
                    <a href="https://linkedin.com/in/alexandertheodore" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">linkedin.com/in/alexandertheodore</a>
                </div>
            </div>
        </div>

        <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                About Me
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
                Software Engineer with proven expertise in React frontend and scalable Go backend systems. 
                Delivered production-grade web apps, reusable UI components, and performance optimizations (40% faster load). 
                Experience in microservices, REST APIs, and async processing (RabbitMQ, Redis). 
                Actively applying AI (CatBoost + ConvNeXt) in real-world data challenges.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-colors">
                    <h4 className="text-blue-400 font-semibold mb-2">Frontend Mastery</h4>
                    <p className="text-sm text-slate-400">Specialized in building responsive, high-performance React applications with modular architectures.</p>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-colors">
                    <h4 className="text-blue-400 font-semibold mb-2">Backend Scalability</h4>
                    <p className="text-sm text-slate-400">Expertise in Go microservices, handling asynchronous tasks with RabbitMQ and Redis caching.</p>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;