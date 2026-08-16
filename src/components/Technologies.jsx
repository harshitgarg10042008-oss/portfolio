import React from 'react';
import { technologies } from '../data/portfolio';

const Technologies = () => {
  return (
    <section id="skills" className="pt-8 pb-12 border-t border-white/5">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-xl font-bold text-white tracking-tight">Tools & Technologies</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {technologies.map(group => (
          <div key={group.category} className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-widest text-teal-500/70 font-semibold flex items-center gap-2">
              <span className="w-1 h-1 bg-teal-500/50 rounded-full"></span>
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map(tech => (
                <span key={tech} className="text-[11px] px-2 py-1 rounded bg-[#0A101A] border border-white/5 text-gray-400 hover:text-teal-300 hover:border-teal-500/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Technologies;
