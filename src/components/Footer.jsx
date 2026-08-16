import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-6 pb-2 border-t border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-teal-500/50"></div>
        <span className="text-[11px] text-gray-500 font-medium">Portfolio &copy; {new Date().getFullYear()} {personalInfo.name}</span>
      </div>
      <div className="flex gap-4">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-400">
          <Github className="w-4 h-4" />
        </a>
        <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-teal-400">
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
