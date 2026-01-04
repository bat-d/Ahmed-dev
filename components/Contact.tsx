import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import SplitText from './SplitText';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-darker/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3 mb-6">
          <span className="text-primary font-mono text-2xl">04.</span> Get In Touch
        </h2>
        
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          Whether you have a project in mind, a question, or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a 
               href="mailto:kharbouchahmed044@gmail.com" 
               className="flex flex-col items-center justify-center p-8 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-800 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
            >
               <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                   <Mail className="w-6 h-6 text-primary transition-transform duration-500 group-hover:rotate-12" />
               </div>
               <h3 className="text-lg font-bold text-white mb-2">
                 <SplitText text="Email" />
               </h3>
               <p className="text-slate-400 font-mono text-sm">kharbouchahmed044@gmail.com</p>
            </a>

            <a 
               href="https://wa.me/212600000000" 
               className="flex flex-col items-center justify-center p-8 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-800 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
            >
               <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                   <Phone className="w-6 h-6 text-green-500 transition-transform duration-500 group-hover:rotate-12" />
               </div>
               <h3 className="text-lg font-bold text-white mb-2">
                 <SplitText text="WhatsApp" />
               </h3>
               <p className="text-slate-400 font-mono text-sm">+212 6XX-XXXXXX</p>
            </a>
        </div>

        <div className="inline-flex flex-col items-center gap-6">
           <a 
             href="mailto:kharbouchahmed044@gmail.com" 
             className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
           >
             <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
             <SplitText text="Say Hello" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;