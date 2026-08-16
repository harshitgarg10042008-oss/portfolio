import React from 'react';
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import CodeWindow from './components/CodeWindow';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo } from './data/portfolio';

function App() {
  return (
    <div className="relative min-h-screen text-gray-200 overflow-x-hidden bg-[#031316]">
      <BackgroundGrid />
      
      <div className="relative z-10 w-full flex flex-col items-center pt-16 pb-32 px-4 sm:px-6">
        
        {/* HUGE EXTERNAL TITLE */}
        <div className="text-center mb-12 space-y-2 pointer-events-none">
          <h1 className="text-[12vw] md:text-[90px] lg:text-[110px] font-black uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-teal-400 to-teal-900 text-glow filter drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]">
            {personalInfo.name}
          </h1>
          <h2 className="text-[4vw] md:text-3xl lg:text-[34px] font-bold uppercase tracking-widest text-teal-500/70">
            {personalInfo.title}
          </h2>
        </div>

        {/* MAIN PORTFOLIO WINDOW */}
        <div className="w-full max-w-5xl bg-[#080D16]/90 backdrop-blur-xl border border-teal-500/20 rounded-[28px] shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_60px_rgba(45,212,191,0.05)] overflow-hidden flex flex-col relative z-20">
          
          <Navbar />
          
          <div className="px-6 md:px-12 py-4">
             <Hero />
             <About />
             <Technologies />
             <Projects />
             <Contact />
             <Footer />
          </div>
        </div>

        {/* EXTERNAL CODE WINDOW */}
        <div className="w-full max-w-3xl mt-16 relative z-10">
          <CodeWindow />
        </div>

      </div>
    </div>
  );
}

export default App;
