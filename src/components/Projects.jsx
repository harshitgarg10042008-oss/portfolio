import React from 'react';
import { projects } from '../data/portfolio';
import { Github, ExternalLink } from 'lucide-react';

const ProjectPreview = ({ id }) => {
  if (id === 'driftiq') {
    return (
      <div className="w-full h-full bg-[#080B10] flex flex-col p-3 gap-2 relative overflow-hidden">
        <div className="flex justify-between items-center border-b border-white/5 pb-2">
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-teal-500/50"></div><div className="w-2 h-2 rounded-full bg-blue-500/50"></div></div>
          <div className="text-[8px] font-mono text-gray-500">CloudStorage.tsx</div>
        </div>
        <div className="flex gap-2 h-full">
          <div className="w-1/4 h-full bg-white/5 rounded-sm"></div>
          <div className="w-3/4 flex flex-col gap-2">
            <div className="w-full h-1/3 bg-teal-500/10 border border-teal-500/20 rounded-sm"></div>
            <div className="w-full h-1/3 bg-white/5 rounded-sm"></div>
            <div className="w-full h-1/3 bg-white/5 rounded-sm"></div>
          </div>
        </div>
      </div>
    );
  }
  if (id === 'classsight') {
    return (
      <div className="w-full h-full bg-[#080B10] flex flex-col p-3 gap-2 relative overflow-hidden">
        <div className="flex justify-between items-center border-b border-white/5 pb-2">
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-green-500/50"></div><div className="w-2 h-2 rounded-full bg-teal-500/50"></div></div>
          <div className="text-[8px] font-mono text-gray-500">FaceRec.tsx</div>
        </div>
        <div className="w-full h-full border border-white/10 rounded flex items-center justify-center relative">
          <div className="absolute w-12 h-12 border border-teal-500/50 rounded-sm flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-teal-500/30"></div>
          </div>
          <div className="absolute bottom-2 right-2 px-1 bg-green-500/20 text-[6px] text-green-400">99.8% CONF</div>
        </div>
      </div>
    );
  }
  if (id === 'dbops-ai') {
    return (
      <div className="w-full h-full bg-[#080B10] flex flex-col p-3 gap-2 relative overflow-hidden font-mono">
        <div className="flex justify-between items-center border-b border-white/5 pb-2">
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500/50"></div></div>
          <div className="text-[8px] text-gray-500">DB_Query.sql</div>
        </div>
        <div className="text-[6px] text-teal-400 mt-1">SELECT * FROM users;</div>
        <div className="w-full h-1/2 mt-auto bg-[#0a1118] border-t border-white/5 flex flex-col p-1 gap-1">
           <div className="w-full h-2 bg-white/5"></div>
           <div className="w-full h-2 bg-white/5"></div>
           <div className="w-full h-2 bg-white/5"></div>
        </div>
      </div>
    );
  }
  if (id === 'devflow-ai') {
    return (
      <div className="w-full h-full bg-[#080B10] flex flex-col p-3 gap-2 relative overflow-hidden">
        <div className="flex justify-between items-center border-b border-white/5 pb-2">
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-purple-500/50"></div></div>
          <div className="text-[8px] font-mono text-gray-500">PullRequest.tsx</div>
        </div>
        <div className="flex flex-col gap-1 mt-1">
          <div className="flex gap-2 items-center"><div className="w-3 h-3 rounded-full bg-purple-500/20"></div><div className="w-16 h-2 bg-white/10 rounded"></div></div>
          <div className="w-full h-12 border border-green-500/20 bg-green-500/5 rounded mt-1 flex p-1">
             <div className="w-1 h-full bg-green-500/50 mr-1"></div>
             <div className="w-12 h-1.5 bg-green-500/30 mt-1"></div>
          </div>
        </div>
      </div>
    );
  }
  if (id === 'persona') {
    return (
      <div className="w-full h-full bg-[#080B10] flex flex-col p-3 gap-2 relative overflow-hidden">
         <div className="flex justify-between items-center border-b border-white/5 pb-2">
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-pink-500/50"></div></div>
          <div className="text-[8px] font-mono text-gray-500">Interview.tsx</div>
        </div>
        <div className="flex gap-2 h-full pt-1">
          <div className="flex-1 bg-white/5 rounded relative flex items-end justify-center pb-2">
             <div className="w-8 h-1 bg-white/10 rounded"></div>
          </div>
          <div className="w-1/3 flex flex-col gap-1">
            <div className="w-full h-1/2 bg-teal-500/10 border border-teal-500/20 rounded"></div>
            <div className="w-full h-1/2 bg-white/5 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  return <div className="w-full h-full bg-[#080B10]"></div>;
};

const Projects = () => {
  return (
    <section id="projects" className="pt-8 pb-12 border-t border-white/5">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-xl font-bold text-white tracking-tight">Projects</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(project => (
          <div key={project.id} className="bg-[#0A101A] border border-white/5 rounded-xl flex flex-col overflow-hidden hover:border-teal-500/30 transition-colors group">
            <div className="h-32 border-b border-white/5 bg-[#05080c]">
              <ProjectPreview id={project.id} />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-teal-500/80 font-bold mb-1">{project.category}</p>
                  <h4 className="text-white font-bold text-sm">{project.name}</h4>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md bg-white/5 hover:bg-teal-500/20 hover:text-teal-400 text-gray-400 transition-colors">
                  {project.link.includes('github.com') ? <Github className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                </a>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-4">{project.description}</p>
              
              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map(tech => (
                  <span key={tech} className="text-[9px] px-1.5 py-0.5 rounded border border-white/5 text-gray-500 bg-white/[0.02]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
