import React from 'react';
import { ArrowRight } from 'lucide-react';
import SplitText from './SplitText';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      
      {/* Radial Gradient for focus */}
      <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-primary text-sm font-mono animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Hire
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
                Ahmed <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary code-glow">Dev</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-mono text-slate-400">
                Full-Stack Web Developer
              </h2>
            </div>

            <p className="text-lg text-slate-400 max-w-lg leading-relaxed border-l-2 border-primary/50 pl-6 bg-slate-900/30 backdrop-blur-sm py-2 rounded-r">
              Crafting high-performance web applications and digital solutions that drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects" 
                className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
              >
                <SplitText text="View My Projects" />
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-300 bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 hover:text-white rounded-md transition-all duration-300"
              >
                <SplitText text="Let's Talk" />
              </a>
            </div>
          </div>

          {/* Code Snippet Decoration */}
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center font-mono text-xs text-slate-500">developer.tsx</div>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <div className="space-y-1">
                  <div className="text-slate-400">
                    <span className="text-purple-400">const</span> <span className="text-yellow-200">developer</span> = <span className="text-purple-400">{`{`}</span>
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-sky-300">name</span>: <span className="text-green-400">'Ahmed Dev'</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-sky-300">role</span>: <span className="text-green-400">'Full-Stack Engineer'</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-sky-300">skills</span>: <span className="text-purple-400">[</span>
                    <span className="text-green-400">'React'</span>, <span className="text-green-400">'Node'</span>, <span className="text-green-400">'NextJS'</span>
                    <span className="text-purple-400">]</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-sky-300">hardWorker</span>: <span className="text-red-400">true</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-sky-300">problemSolver</span>: <span className="text-red-400">true</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-sky-300">hireable</span>: <span className="text-purple-400">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-purple-400">{`{`}</span>
                  </div>
                  <div className="pl-8 text-slate-300">
                    <span className="text-purple-400">return</span> <span className="text-green-400">'Ready to build!'</span>;
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-purple-400">{`}`}</span>
                  </div>
                  <div className="text-slate-400">
                    <span className="text-purple-400">{`}`}</span>;
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="text-slate-500 hover:text-primary transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;