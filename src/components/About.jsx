import React from 'react';
import { User, Code, Server, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="pt-8 pb-12 border-t border-white/5">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-xl font-bold text-white tracking-tight">About Me</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>{personalInfo.longDescription}</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <User className="w-4 h-4 text-teal-500" />
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Education</p>
              <p className="text-xs text-gray-300">B.Tech CSE, GNIT</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <Compass className="w-4 h-4 text-teal-500" />
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Location</p>
              <p className="text-xs text-gray-300">Greater Noida, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
