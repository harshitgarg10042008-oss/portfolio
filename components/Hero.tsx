"use client";

import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[--teal-glow] blur-[120px] opacity-20 pointer-events-none animate-pulse-slow mix-blend-screen" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-8">
        
        {/* Left Column: Text */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
             <span className="text-xl">❝</span>
             <span className="text-sm font-inter text-white/80">Ship it, then perfect it.</span>
          </div>
          
          <h1 className="font-poppins font-extrabold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight text-white mb-6 text-balance">
            Hi I&apos;m <span className="text-[--accent]">Harshit Garg</span>
          </h1>
          
          <p className="font-inter text-[0.95rem] leading-[1.7] text-[--text-secondary] max-w-lg mb-8 text-balance">
            Computer Science undergraduate and full-stack developer building production-oriented web applications and AI-assisted systems. Passionate about crafting scalable, high-performance digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-black font-poppins font-semibold text-[0.9rem] hover:scale-[1.03] transition-transform duration-300 w-full sm:w-auto text-center"
            >
              Download CV
            </a>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-poppins font-semibold text-[0.9rem] hover:bg-white/10 hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore My Projects
            </button>
          </div>
        </div>

        {/* Right Column: HeroCard */}
        <div className="flex-1 w-full flex justify-center perspective-[1000px]">
          <HeroCard />
        </div>

      </div>
    </section>
  );
}
