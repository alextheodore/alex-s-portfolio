import React, { useState } from 'react';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';
import Section from './Section';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate generic submission
    setTimeout(() => {
      alert('Message sent! (Simulation)');
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <Section id="contact" className="mb-20">
      <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        <div className="grid md:grid-cols-2">
          
          {/* Contact Info */}
          <div className="p-10 bg-gradient-to-br from-blue-900/40 to-slate-900 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
              <p className="text-slate-300 mb-8">
                I'm currently open for new opportunities in Frontend (React) or Backend (Go) Engineering. 
                Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <a href="mailto:alex.theodore26@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail size={24} />
                  </div>
                  <span className="font-medium">alex.theodore26@gmail.com</span>
                </a>
                
                <a href="https://linkedin.com/in/alexandertheodore" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Linkedin size={24} />
                  </div>
                  <span className="font-medium">linkedin.com/in/alexandertheodore</span>
                </a>

                <a href="https://wa.me/628111667108" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-green-600 transition-colors">
                    <Phone size={24} />
                  </div>
                  <span className="font-medium">+62 811-1667-108</span>
                </a>
              </div>
            </div>

            <div className="mt-12">
               <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Alexander Theodore</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-10 bg-slate-950">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Contact;