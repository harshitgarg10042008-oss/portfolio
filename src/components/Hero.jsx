import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { FileText, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-12 pb-16 flex flex-col md:flex-row gap-12 items-start min-h-[400px]">
      
      {/* Left side: Hero Text & Buttons */}
      <div className="flex-1 space-y-6 z-20 mt-8 md:mt-16 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
          System Online
        </div>
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-teal-400">{personalInfo.name}</span>
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-400 font-medium">
            {personalInfo.title}
          </h3>
        </div>
        
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          {personalInfo.description}
        </p>
        
        <div className="flex gap-4 pt-4">
          <button className="px-5 py-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/30 hover:bg-teal-500/20 transition-all text-sm font-medium flex items-center gap-2">
            <FileText className="w-4 h-4" />
            View Resume
          </button>
          <button className="px-5 py-2.5 rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium flex items-center gap-2">
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Compact Stats */}
        <div className="grid grid-cols-3 gap-4 pt-12 border-t border-white/5">
          {personalInfo.stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-xl font-bold text-white">{stat.value}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Hanging ID Card */}
      <div className="hidden md:flex absolute top-[-100px] right-8 lg:right-16 flex-col items-center">
        {/* Cord */}
        <div className="w-[1.5px] h-32 bg-gradient-to-b from-teal-900/0 via-teal-500/30 to-teal-400/80 shadow-[0_0_10px_rgba(45,212,191,0.3)]"></div>
        {/* Clip */}
        <div className="w-4 h-2 border border-teal-500/50 rounded-t-sm mb-[1px] bg-[#0a1118]"></div>
        <div className="w-6 h-1.5 bg-teal-400 rounded-full shadow-[0_0_12px_rgba(45,212,191,0.8)] z-10"></div>
        
        {/* ID Card */}
        <motion.div 
          animate={{ rotate: [-1.5, 1.5, -1.5] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="w-56 bg-[#040910] border border-teal-500/30 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(45,212,191,0.1)] flex flex-col gap-3 relative origin-top z-10"
        >
          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden relative border border-white/10 bg-[#0a1118]">
            <img 
              src="/images/Professionalphoto_HD.png" 
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] pointer-events-none"></div>
          </div>
          <div className="text-center pb-3 pt-1">
            <h3 className="text-white font-bold text-[15px] tracking-wide">{personalInfo.name}</h3>
            <p className="text-teal-400 text-[9px] uppercase tracking-widest font-bold mt-1">Full-Stack Developer</p>
            <div className="mt-2.5 inline-flex items-center gap-1.5 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
              <span className="text-[8px] text-teal-300 font-bold uppercase tracking-wider">Available for roles</span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
export default Hero;
