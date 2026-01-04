import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Wrench, 
} from 'lucide-react';
import { SkillCategory } from '../types';

const TechStack: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"]
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-purple-400" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-green-400" />,
      skills: ["Node.js", "Express", "MongoDB", "Mongoose", "REST APIs"]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6 text-orange-400" />,
      skills: ["Git & GitHub", "Postman", "VS Code", "Vercel", "Netlify"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-darker/90 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
            <span className="text-primary font-mono text-2xl">02.</span> Tech Stack
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            The comprehensive toolset I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-slate-900/80 backdrop-blur-md p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-400 group-hover:text-slate-200 transition-colors">
                    <span className="text-primary opacity-60 text-xs">▹</span>
                    <span className="font-mono text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;