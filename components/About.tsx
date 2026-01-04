import React from 'react';
import { User, Code, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/90 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2 relative">
             <div className="relative group mx-auto w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative w-full h-full rounded-full border-2 border-slate-700 bg-slate-800 overflow-hidden flex items-center justify-center">
                   <img 
                      src="https://picsum.photos/400/400?grayscale" 
                      alt="Ahmed Dev" 
                      className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition duration-500"
                   />
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <Code className="text-primary h-6 w-6" />
                </div>
                <div className="absolute bottom-4 -left-4 bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                  <Database className="text-secondary h-6 w-6" />
                </div>
             </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-primary font-mono text-2xl">01.</span> About Me
            </h2>
            
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am a results-driven <span className="text-white font-medium">Web Developer</span> and the founder of Ahmed Dev. 
              </p>
              <p>
                With a deep understanding of modern web technologies, I specialize in building scalable, secure, and user-friendly digital products. My mission is to bridge the gap between complex business requirements and elegant technical solutions.
              </p>
              <p>
                Whether it's creating pixel-perfect user interfaces or designing robust backend architectures, I am dedicated to delivering high-quality code that makes a real impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-primary/50 transition-colors">
                <Globe className="text-primary h-5 w-5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Web Development</h4>
                  <p className="text-xs text-slate-400">Modern & Responsive</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-primary/50 transition-colors">
                <User className="text-secondary h-5 w-5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Freelance</h4>
                  <p className="text-xs text-slate-400">Available for Hire</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;